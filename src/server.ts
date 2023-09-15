import { AppDataSource } from "./data-source";

import App from "./app";

AppDataSource.initialize()
  .then(() => {
    const PORT: number = Number(process.env.PORT || 3000);
    App.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.error(err));
