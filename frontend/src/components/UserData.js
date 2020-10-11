import React from 'react';
import Search from './Search';
import Status from './Status';
import File from './File';
import Greetings from './Greetings';
import './UserData.css';

class UserData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldUpdate: true,
      userInfo: {},
      userFiles: [],
      files: [],
      searchParam: '',
      orderBy: 'name',
      invertOrder: false,
    };
    this.getData = this.getData.bind(this);
    this.searchParamChange = this.searchParamChange.bind(this);
    this.invertOrder = this.invertOrder.bind(this);
  }

  getData(sender) {
    console.log('running get data');
    fetch('api/userinfo', {
      method: 'GET',
      headers: { Authorization: `Bearer ${this.props.authorization}` },
    })
      .then((data) => Promise.all([data.json(), data.status]))
      .then(([data, status]) => {
        if (status === 200) {
          return Promise.all([
            data,
            fetch('api/data', {
              method: 'GET',
              headers: {
                Authorization: `Bearer ${this.props.authorization}`,
              },
            }),
          ]);
        }
        return Promise.reject('could not retrieve user data');
      })
      .then(([info, data]) => Promise.all([info, data.json(), data.status]))
      .then(([info, data, status]) => {
        if (status === 200) {
          this.setState((prevSate) => {
            return { userInfo: info, userFiles: data.files };
          });
          return;
        }
        return Promise.reject('could not retrieve user data');
      })
      .catch((error) => {});
  }

  searchParamChange(searchParam, type) {
    if (type === 'text') {
      //name
      this.setState((prevSate) => {
        return { searchParam };
      });
    }
    if (type === 'select-one') {
      this.setState((prevSate) => {
        return { orderBy: searchParam };
      });
    }
  }

  invertOrder() {
    this.setState((prevState) => {
      return { invertOrder: !prevState.invertOrder };
    });
  }

  componentDidUpdate(prevProps) {
    console.log('updated');
    if (prevProps.location.key !== this.props.location.key) {
      if (this.props.userLogged) {
        this.getData();
      }
    }
  }

  componentDidMount(prevProps, prevSate, snapshot) {
    //get api info
    if (this.props.userLogged) {
      this.getData();
    }
  }

  render() {
    const myFiles = this.state.userFiles
      .filter((file) => {
        // if (this.state.searchParam === '') {
        //   return true;
        // }
        return file.name
          .toLowerCase()
          .includes(this.state.searchParam.toLowerCase());
      })
      .sort((fileA, fileB) => {
        let compareValA;
        let compareValB;

        if (this.state.orderBy === 'name') {
          compareValA = fileA[this.state.orderBy].toLowerCase().split('.')[0];
          compareValB = fileB[this.state.orderBy].toLowerCase().split('.')[0];
        } else if (this.state.orderBy === 'upload-date') {
          compareValA = Date.parse(fileA[this.state.orderBy]);
          compareValB = Date.parse(fileB[this.state.orderBy]);
        } else {
          compareValA = fileA[this.state.orderBy];
          compareValB = fileB[this.state.orderBy];
        }

        if (compareValA >= compareValB) {
          if (this.state.invertOrder) {
            return -1;
          } else {
            return 1;
          }
        } else {
          if (this.state.invertOrder) {
            return 1;
          } else {
            return -1;
          }
        }
      })
      .map((file) => {
        return (
          <File
            uploadedOn={file['upload-date']}
            fileName={file.name}
            key={file._id}
            fileId={file._id}
            fileSize={file.size}
            authorization={this.props.authorization}
            updateComp={this.getData}
          />
        );
      });

    return (
      <div className="user-data-container">
        <Status
          userLimit={this.state.userInfo.assignedSpace}
          userUsed={this.state.userInfo.usedSpace}
          authorization={this.props.authorization}
          updateComp={this.getData}
        />
        <Search
          updateSearch={this.searchParamChange}
          changeOrder={this.invertOrder}
        />
        {myFiles}
      </div>
    );
  }
}

export default UserData;
