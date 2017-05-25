const { Table } =  antd;

// In the fifth row, other columns are merged into first column
// by setting it's colSpan to be 0
const renderContent = (value, row, index) => {
  const obj = {
    children: value,
    props: {},
  };
  if (index === 3) {
    obj.props.colSpan = 0;
  }
  return obj;
};

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  render: (value, row, index) => {
    const obj = {
      children: value,
      props: {},
    };
    if (index === 0) {
      obj.props.rowSpan = 3;
    }
    if (index === 1) {
      obj.props.rowSpan = 0;
    }
    // These two are merged into above cell
    if (index === 2) {
      obj.props.rowSpan = 0;
    }
    if (index === 3) {
         obj.props.colSpan = 1;
    }
    return obj;
  },
}, {
  title: 'Age',
  dataIndex: 'age',
  
  render: (value, row, index) => {
    const obj = {
      children: value,
      props: {},
    };
    if (index === 3) {
         obj.props.colSpan = 3;
    }
    return obj;
  }
}, {
  title: 'Home phone',
  dataIndex: 'tel',
  render: renderContent
}, {
  title: 'Address',
  dataIndex: 'address',
  render:renderContent
}];

const data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  tel: '0571-22098909',
  phone: 18889898989,
  address: 'New York No. 1 Lake Park',
}, {
  key: '2',
  name: 'John Brown',
  tel: '0571-22098333',
  phone: 18889898888,
  age: 42,
  address: 'London No. 1 Lake Park',
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  tel: '0575-22098909',
  phone: 18900010002,
  address: 'Sidney No. 1 Lake Park',
}, {
  key: '4',
  name: 'Joe Black',
  age: 18,
  tel: '0575-22098909',
  phone: 18900010002,
  address: 'London No. 2 Lake Park',
}];
ReactDOM.render(<Table columns={columns} bordered dataSource={data}/>, document.getElementById('container'));