import app from "./app";

import config from "./app/config/index";

const PORT = config.app.port;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} - http://localhost:${PORT}`);
});
