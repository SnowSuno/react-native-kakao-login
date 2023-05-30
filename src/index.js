import { NativeModules } from 'react-native';
var RNKakaoLogins = NativeModules.RNKakaoLogins;
var NativeKakaoLogins = {
    login: function () {
        return RNKakaoLogins.login();
    },
    loginWithKakaoAccount: function () {
        return RNKakaoLogins.loginWithKakaoAccount();
    },
    logout: function () {
        return RNKakaoLogins.logout();
    },
    unlink: function () {
        return RNKakaoLogins.unlink();
    },
    getProfile: function () {
        return RNKakaoLogins.getProfile();
    },
    getAccessToken: function () {
        return RNKakaoLogins.getAccessToken();
    },
};
export var login = NativeKakaoLogins.login;
export var loginWithKakaoAccount = NativeKakaoLogins.loginWithKakaoAccount;
export var logout = NativeKakaoLogins.logout;
export var unlink = NativeKakaoLogins.unlink;
export var getProfile = NativeKakaoLogins.getProfile;
export var getAccessToken = NativeKakaoLogins.getAccessToken;
export * from './types';
