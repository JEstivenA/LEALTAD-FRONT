const url = " https://a587-190-104-124-158.ngrok-free.app";
let token = localStorage.getItem("token");

$(function () {
  const getParticipaciones = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    fetch(`${url}Participacion`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      })
      .catch((error) => console.log("error", error));
  };

  getParticipaciones();
});
