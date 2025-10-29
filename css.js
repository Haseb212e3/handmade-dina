/* Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  width: 100%;
  height: 100%;
  font-family: Arial, sans-serif;
  overflow: hidden;
  color: white;
}

/* Video Background */
video#bgVideo {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  z-index: -1;
  object-fit: cover;
}

/* Loading Screen */
#loading {
  position: fixed;
  width: 100%;
  height: 100%;
  background: black;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 10;
}

.spinner {
  border: 8px solid #444;
  border-top: 8px solid yellow;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin 2s linear infinite;
  margin-bottom: 20px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Main Content */
#content {
  display: none;
  position: relative;
  width: 100%;
  height: 100%;
  padding: 30px 20px;
  background: rgba(0, 0, 0, 0.5);
  overflow-y: auto;
  text-align: center;
}

/* Logo at the top */
.logo-top {
  margin-bottom: 20px;
}

.logo-top img {
  width: 160px;
  max-width: 90%;
  transition: filter 0.4s ease;
}

.logo-top img:hover {
  filter: brightness(0.2);
}

h1 {
  margin-bottom: 30px;
  font-size: 32px;
}

.plan {
  background: rgba(0, 0, 0, 0.3); /* Transparent background */
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 25px;
  text-align: center;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
}

.plan h2 {
  margin-bottom: 10px;
  font-size: 24px;
}

.plan ul {
  list-style: none;
  padding: 0;
  margin-bottom: 10px;
}

.plan ul li {
  margin: 5px 0;
}

.price-button {
  background: yellow;
  color: black;
  padding: 10px 20px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.price-button:hover {
  background: #d4af37;
}
