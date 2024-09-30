import { CurrentUser } from "./middlewares/current.user";
import { TokenService } from "./helpers";
import { SignIn } from "./services/sign.in";
import { SignUp } from "./services/sign.up";
import { Logout } from "./services/logout";
export declare const tokenService: TokenService;
export declare const currentUser: CurrentUser;
export declare const signIn: SignIn;
export declare const signUp: SignUp;
export declare const signOut: Logout;
