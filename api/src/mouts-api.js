import interceptor from "./services/interceptor";
import "./set-public-path";

interceptor();

export { get, post, put, remove } from "./services/server-service";

export { clearUserToken } from "./helpers/local-storage";
