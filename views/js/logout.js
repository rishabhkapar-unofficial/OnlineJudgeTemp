$(() => {

  const logoutBtn = $('#logout-btn');

  logoutBtn.click((e) => {
    e.preventDefault();

    $.ajax({
      url: LOGOUT_URL,
      method: 'GET'
    }).done((response) => {
      window.location.href = HOST_URL;
    });

  });

});