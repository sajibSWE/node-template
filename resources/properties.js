export const PORT = process.env.PORT || 5000;
export const CONTEXT_PATH = process.env.CONTEXT_PATH || '/demo';
export const VERSION_ONE = process.env.VERSION_ONE || '/v1';
export const BASE_URL = process.env.BASE_URL || `http://localhost:${PORT}`;
export const ENVIRONMENT_DEV = process.env.NODE_ENV === 'development' ? 'dev' : 'combined';
