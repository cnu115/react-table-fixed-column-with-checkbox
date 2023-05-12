import React from "react";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

// Import React Table HOC Fixed columns
import withFixedColumns from "react-table-hoc-fixed-columns";
import "react-table-hoc-fixed-columns/lib/styles.css";

const ReactTableFixedColumns = withFixedColumns(ReactTable);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      selected: [], selectAll: 0,
      data: [
        {
          "firstName": "appliance",
          "lastName": "baby",
          "age": 27,
          "visits": 10,
          "progress": 82,
          "status": "complicated",
          "children": [
            {
              "firstName": "fork",
              "lastName": "county",
              "age": 6,
              "visits": 59,
              "progress": 89,
              "status": "relationship"
            },
            {
              "firstName": "mist",
              "lastName": "fortune",
              "age": 19,
              "visits": 12,
              "progress": 39,
              "status": "relationship"
            },
            {
              "firstName": "clocks",
              "lastName": "thing",
              "age": 5,
              "visits": 35,
              "progress": 32,
              "status": "single"
            },
            {
              "firstName": "payment",
              "lastName": "oranges",
              "age": 29,
              "visits": 13,
              "progress": 75,
              "status": "complicated"
            },
            {
              "firstName": "sidewalk",
              "lastName": "writer",
              "age": 22,
              "visits": 75,
              "progress": 57,
              "status": "complicated"
            },
            {
              "firstName": "match",
              "lastName": "calculator",
              "age": 14,
              "visits": 89,
              "progress": 1,
              "status": "complicated"
            },
            {
              "firstName": "trees",
              "lastName": "two",
              "age": 22,
              "visits": 41,
              "progress": 81,
              "status": "complicated"
            },
            {
              "firstName": "fang",
              "lastName": "department",
              "age": 9,
              "visits": 9,
              "progress": 52,
              "status": "relationship"
            },
            {
              "firstName": "snake",
              "lastName": "sympathy",
              "age": 17,
              "visits": 88,
              "progress": 87,
              "status": "relationship"
            },
            {
              "firstName": "jelly",
              "lastName": "balloon",
              "age": 23,
              "visits": 23,
              "progress": 33,
              "status": "complicated"
            }
          ]
        },
        {
          "firstName": "bottle",
          "lastName": "ghost",
          "age": 26,
          "visits": 85,
          "progress": 35,
          "status": "relationship",
          "children": [
            {
              "firstName": "fly",
              "lastName": "indication",
              "age": 21,
              "visits": 2,
              "progress": 66,
              "status": "complicated"
            },
            {
              "firstName": "wool",
              "lastName": "grandfather",
              "age": 10,
              "visits": 63,
              "progress": 82,
              "status": "single"
            },
            {
              "firstName": "protection",
              "lastName": "dust",
              "age": 0,
              "visits": 92,
              "progress": 33,
              "status": "relationship"
            },
            {
              "firstName": "cousin",
              "lastName": "grade",
              "age": 14,
              "visits": 43,
              "progress": 22,
              "status": "relationship"
            },
            {
              "firstName": "player",
              "lastName": "shape",
              "age": 4,
              "visits": 48,
              "progress": 85,
              "status": "single"
            },
            {
              "firstName": "employee",
              "lastName": "flock",
              "age": 18,
              "visits": 7,
              "progress": 40,
              "status": "single"
            },
            {
              "firstName": "fruit",
              "lastName": "roll",
              "age": 2,
              "visits": 98,
              "progress": 75,
              "status": "single"
            },
            {
              "firstName": "employer",
              "lastName": "tendency",
              "age": 21,
              "visits": 98,
              "progress": 80,
              "status": "complicated"
            },
            {
              "firstName": "team",
              "lastName": "product",
              "age": 13,
              "visits": 55,
              "progress": 21,
              "status": "relationship"
            },
            {
              "firstName": "boy",
              "lastName": "camera",
              "age": 8,
              "visits": 82,
              "progress": 15,
              "status": "complicated"
            }
          ]
        },
        {
          "firstName": "sofa",
          "lastName": "oranges",
          "age": 10,
          "visits": 2,
          "progress": 40,
          "status": "relationship",
          "children": [
            {
              "firstName": "security",
              "lastName": "selection",
              "age": 29,
              "visits": 51,
              "progress": 46,
              "status": "complicated"
            },
            {
              "firstName": "category",
              "lastName": "size",
              "age": 9,
              "visits": 86,
              "progress": 82,
              "status": "relationship"
            },
            {
              "firstName": "zebra",
              "lastName": "girls",
              "age": 8,
              "visits": 76,
              "progress": 61,
              "status": "complicated"
            },
            {
              "firstName": "software",
              "lastName": "rhythm",
              "age": 17,
              "visits": 87,
              "progress": 53,
              "status": "relationship"
            },
            {
              "firstName": "moon",
              "lastName": "ice",
              "age": 6,
              "visits": 79,
              "progress": 24,
              "status": "relationship"
            },
            {
              "firstName": "distribution",
              "lastName": "insect",
              "age": 15,
              "visits": 8,
              "progress": 41,
              "status": "single"
            },
            {
              "firstName": "trucks",
              "lastName": "grandfather",
              "age": 10,
              "visits": 48,
              "progress": 21,
              "status": "single"
            },
            {
              "firstName": "icicle",
              "lastName": "lawyer",
              "age": 22,
              "visits": 90,
              "progress": 71,
              "status": "complicated"
            },
            {
              "firstName": "ocean",
              "lastName": "muscle",
              "age": 20,
              "visits": 40,
              "progress": 86,
              "status": "complicated"
            },
            {
              "firstName": "significance",
              "lastName": "clocks",
              "age": 1,
              "visits": 97,
              "progress": 68,
              "status": "relationship"
            }
          ]
        },
        {
          "firstName": "permission",
          "lastName": "bonus",
          "age": 11,
          "visits": 49,
          "progress": 48,
          "status": "single",
          "children": [
            {
              "firstName": "maid",
              "lastName": "trick",
              "age": 10,
              "visits": 58,
              "progress": 85,
              "status": "single"
            },
            {
              "firstName": "doctor",
              "lastName": "battle",
              "age": 21,
              "visits": 86,
              "progress": 78,
              "status": "relationship"
            },
            {
              "firstName": "error",
              "lastName": "actor",
              "age": 4,
              "visits": 81,
              "progress": 24,
              "status": "relationship"
            },
            {
              "firstName": "cabbage",
              "lastName": "table",
              "age": 15,
              "visits": 87,
              "progress": 57,
              "status": "single"
            },
            {
              "firstName": "ladder",
              "lastName": "signature",
              "age": 13,
              "visits": 3,
              "progress": 8,
              "status": "relationship"
            },
            {
              "firstName": "alcohol",
              "lastName": "field",
              "age": 9,
              "visits": 23,
              "progress": 65,
              "status": "relationship"
            },
            {
              "firstName": "setting",
              "lastName": "furniture",
              "age": 8,
              "visits": 68,
              "progress": 18,
              "status": "single"
            },
            {
              "firstName": "measure",
              "lastName": "basket",
              "age": 24,
              "visits": 0,
              "progress": 33,
              "status": "complicated"
            },
            {
              "firstName": "explanation",
              "lastName": "crush",
              "age": 27,
              "visits": 77,
              "progress": 43,
              "status": "relationship"
            },
            {
              "firstName": "attempt",
              "lastName": "cub",
              "age": 27,
              "visits": 57,
              "progress": 11,
              "status": "complicated"
            }
          ]
        },
        {
          "firstName": "son",
          "lastName": "calendar",
          "age": 11,
          "visits": 80,
          "progress": 13,
          "status": "complicated",
          "children": [
            {
              "firstName": "drain",
              "lastName": "stream",
              "age": 28,
              "visits": 5,
              "progress": 38,
              "status": "relationship"
            },
            {
              "firstName": "education",
              "lastName": "underwear",
              "age": 14,
              "visits": 8,
              "progress": 97,
              "status": "relationship"
            },
            {
              "firstName": "wrist",
              "lastName": "poem",
              "age": 3,
              "visits": 31,
              "progress": 47,
              "status": "relationship"
            },
            {
              "firstName": "class",
              "lastName": "reason",
              "age": 0,
              "visits": 20,
              "progress": 75,
              "status": "single"
            },
            {
              "firstName": "medicine",
              "lastName": "zephyr",
              "age": 15,
              "visits": 43,
              "progress": 33,
              "status": "relationship"
            },
            {
              "firstName": "cell",
              "lastName": "discussion",
              "age": 10,
              "visits": 97,
              "progress": 39,
              "status": "complicated"
            },
            {
              "firstName": "crayon",
              "lastName": "clocks",
              "age": 29,
              "visits": 39,
              "progress": 94,
              "status": "relationship"
            },
            {
              "firstName": "hot",
              "lastName": "county",
              "age": 7,
              "visits": 31,
              "progress": 51,
              "status": "relationship"
            },
            {
              "firstName": "tongue",
              "lastName": "guide",
              "age": 10,
              "visits": 55,
              "progress": 67,
              "status": "complicated"
            },
            {
              "firstName": "humor",
              "lastName": "pencil",
              "age": 27,
              "visits": 85,
              "progress": 81,
              "status": "single"
            }
          ]
        }
      ]
    };

    this.toggleRow = this.toggleRow.bind(this);
  }

  toggleRow(data, index) {
    const selected = this.state.selected;
    if (selected.includes(index)) {
      const isSelected = selected.indexOf(index);
      if (isSelected > -1) {
        selected.splice(isSelected, 1);
        this.setState({
          selected: selected,
          selectAll: 2
        })
      }
    } else {
      this.setState({
        selected: [...selected, index],
        selectAll: 2
      })
    }
  }

  toggleSelectAll() {
    let newSelected = [];
    if (this.state.selectAll === 0) {
      this.state.data.forEach((x, index) => {
        newSelected.push(index);
      });
    }
    this.setState({
      selected: newSelected,
      selectAll: this.state.selectAll === 0 ? 1 : 0
    });
  }
  render() {
    const { data } = this.state;
    console.log(this.state.selected)
    const columns = [
      {
        id: "checkbox",
        accessor: "",
        fixed: "left",
        Cell: (props) => {
          console.log(props)
          const { original, index } = props;
          return (
            <input
              type="checkbox"
              className="checkbox"
              checked={this.state.selected.includes(index) === true}
              onChange={() => this.toggleRow(original, index)}
            />
          );
        },
        Header: x => {
          return (
            <input
              type="checkbox"
              className="checkbox"
              checked={this.state.selectAll === 1}
              ref={input => {
                if (input) {
                  input.indeterminate = this.state.selectAll === 2;
                }
              }}
              onChange={() => this.toggleSelectAll()}
            />
          );
        },
        sortable: false,
        width: 105
      },
      {
        fixed: "left",
        Header: "First Name",
        accessor: "firstName",
        width: 100
      },
      {
        fixed: "left",
        Header: "Last Name",
        accessor: "lastName",
        width: 100
      },
      {
        Header: "Age",
        accessor: "age",
        width: 300,
        Footer: row => {
          const length = row.data.length;
          const ageSum = row.data
            .map(({ age }) => age)
            .reduce((a, b) => a + b, 0);
          const average = Math.round(ageSum / length);
          return <div>average: {average}</div>;
        }
      },
      {
        Header: "Visits",
        accessor: "visits",
        width: 300
      },
      {
        Header: "Progress",
        accessor: "progress",
        width: 300
      },
      {
        Header: "Age",
        accessor: "age",
        id: "age2",
        width: 300
      },
      {
        Header: "Visits",
        accessor: "visits",
        id: "visits2",
        width: 300
      },
      {
        Header: "Progress",
        accessor: "progress",
        id: "progress2",
        width: 300
      },
      {
        fixed: "",
        Header: "Status",
        accessor: "status"
      }


    ]
    return (
      <div>
        <ReactTableFixedColumns
          data={data}
          columns={columns}
          defaultPageSize={50}
          style={{ height: 500 }}
          className="-striped"
        />
      </div>
    );
  }
}

export default App;