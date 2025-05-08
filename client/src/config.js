const config = {
  server: {
    port: 4000,
    host: 'localhost'
  }
};

export const getServerUrl = () => `http://${config.server.host}:${config.server.port}`; 