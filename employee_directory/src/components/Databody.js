import React from "react";
import "../styles/DataBody.css";
function DataBody({ users }) {
  function formatDate(date) {
    const dateArray = date.split("-");
    const year = dateArray[0];
    const month = dateArray[1];
    const dayArray = dateArray[2].split("T");
    const day = dayArray[0];
    const formattedDate = [month, day, year].join("-");
    return formattedDate;
  }
  return (
    <tbody>
      {users[0] !== undefined && users[0].name !== undefined ? (
        users.map(({ login, name, picture, phone, email, dob }) => {
          return (
              <> </>
          //  use above mapped data and set into jsx
          );
        })
      ) : (
        <></>
      )}
    </tbody>
  );
}
export default DataBody;