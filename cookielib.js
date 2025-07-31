//Reading Cookie in JavaScript
function getCookie(cookieName) {
    var cookies = document.cookie.split('; ');
    for (var cookie of cookies) {
        var [name, value] = cookie.split('=');
        if (name === cookieName) {
            return decodeURIComponent(value);
        }
    }
    return null;
}


// Set a cookie
function setCookie(cookieName, cookieValue, expiryDate) {
  var cookieStr = `${encodeURIComponent(cookieName)}=${encodeURIComponent(cookieValue)}; path=/`;
  if (expiryDate) {
    cookieStr += `; expires=${new Date(expiryDate).toUTCString()}`;
  }
  document.cookie = cookieStr;
}


// Delete a cookie by name
function deleteCookie(cookieName) {
  // Set expiry to past date to remove it
  document.cookie = `${cookieName}=; expires=Mon, 20 Jun 2001 00:00:00 UTC; path=/`;
}


// Get a list of all cookies
function allCookieList() {
  var decodedCookie = decodeURIComponent(document.cookie);
  var cookies = decodedCookie.split("; ");
  var result = [];
  for (var i = 0; i < cookies.length; i++) {
    var parts = cookies[i].split("=");
    var obj = {
      name: decodeURIComponent(parts[0]),
      value: decodeURIComponent(parts[1])
    };
    result.push(obj);
  }
  return result;
}

// Check if a cookie exists

  function hasCookie(cookieName) {
  if (getCookie(cookieName) !== null) {
    return true;
  } else {
    return false;
  }
}
