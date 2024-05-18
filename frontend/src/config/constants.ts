// All variables from env must be declared here
// So that all environment vars will be exported from one place
// import dotenv from 'dotenv'
// dotenv.config({
//   path:'/frontend/.env',
// })
function envConfigs(){
const {
  APP_DOMAIN = "GreenspaceDAO",
  NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID,
  RESEND_API_KEY,
  DB_HOST,
  DB_PORT,
  DB_USER_NAME,
  DB_USER_PASS,
  DB_NAME,
  DB_SSL_CONFIG = { rejectUnauthorized: true },
  NEXT_PUBLIC_HUDDLE_PROJECT_ID,
  HUDDLE_API_KEY,
  NEXTAUTH_SECRET,

  PRIVY_API_KEY,
  NEXT_PUBLIC_PRIVY_APP_ID,
  OPENAI_API_KEY,
  PUSHER_APP_ID,
  PUSHER_SECRET,
  NEXT_PUBLIC_PUSHER_KEY,
  NEXT_PUBLIC_PUSHER_CLUSTER,
} = process.env;

return {
  APP_DOMAIN,
  WALLETCONNECT_PROJECT_ID:NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID,
  RESEND_API_KEY,
  DB_HOST,
  DB_PORT,
  DB_USER_NAME,
  DB_USER_PASS,
  DB_NAME,
  DB_SSL_CONFIG,
  HUDDLE_PROJECT_ID:NEXT_PUBLIC_HUDDLE_PROJECT_ID,
  HUDDLE_API_KEY,
  NEXTAUTH_SECRET,
 PRIVY_API_KEY,
  PRIVY_APP_ID:
  NEXT_PUBLIC_PRIVY_APP_ID,
  OPENAI_API_KEY,
  PUSHER_APP_ID,
  PUSHER_SECRET,
  PUSHER_KEY:NEXT_PUBLIC_PUSHER_KEY,
  PUSHER_CLUSTER:NEXT_PUBLIC_PUSHER_CLUSTER,
};

}
export const ENV_CONFIG = envConfigs();