const getData = () => {
  return fetch("http://localhost:3001/api/v1/tricks")
    .then(res => res.json())
}

const postData = (data) => {
  return fetch("http://localhost:3001/api/v1/tricks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then(res => res.json())
}

const deleteData = (id) => {
  return fetch(`http://localhost:3001/api/v1/tricks/${id}`, {
    method: "DELETE"
  })
  .then(res => res.json())
}

export { postData, getData, deleteData }  