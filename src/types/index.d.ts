export interface KakaoLoginModuleInterface {
    login(): Promise<KakaoOAuthToken>;
    login(props: KaKaoLoginWebType): Promise<KakaoOAuthWebToken>;
    logout(): Promise<string>;
    logout(tokenWeb: string): Promise<string>;
    unlink(): Promise<string>;
    unlink(tokenWeb: string): Promise<string>;
    getProfile(): Promise<KakaoProfile>;
    getProfile(tokenWeb: string): Promise<KakaoProfileWebType>;
    getAccessToken(): Promise<KakaoAccessTokenInfo>;
    loginWithKakaoAccount(): Promise<KakaoOAuthToken>;
}
export declare type KakaoOAuthToken = {
    accessToken: string;
    refreshToken: string;
    idToken: string;
    accessTokenExpiresAt: Date;
    refreshTokenExpiresAt: Date;
    scopes: string[];
};
export declare type KakaoAccessTokenInfo = {
    accessToken: string;
    expiresIn: string;
};
export declare type KakaoProfile = {
    id: string;
    email: string;
    name: string;
    nickname: string;
    profileImageUrl: string;
    thumbnailImageUrl: string;
    phoneNumber: string;
    ageRange: string;
    birthday: string;
    birthdayType: string;
    birthyear: string;
    gender: string;
    isEmailValid: boolean;
    isEmailVerified: boolean;
    isKorean: boolean;
    ageRangeNeedsAgreement?: boolean;
    birthdayNeedsAgreement?: boolean;
    birthyearNeedsAgreement?: boolean;
    emailNeedsAgreement?: boolean;
    genderNeedsAgreement?: boolean;
    isKoreanNeedsAgreement?: boolean;
    phoneNumberNeedsAgreement?: boolean;
    profileNeedsAgreement?: boolean;
};
export declare type KakaoProfileNoneAgreement = {
    id: string;
};
export declare type KakaoOAuthWebToken = {
    access_token: string;
    expires_in: number;
    refresh_token: string;
    refresh_token_expires_in: number;
    scope: string;
    token_type: string;
};
export declare type KaKaoLoginWebType = {
    restApiKeyWeb?: string;
    redirectUrlWeb?: string;
    codeWeb?: string;
};
export declare type KakaoProfileWebType = {
    properties: {
        nickname: string;
        profile_image: string;
        thumbnail_image: string;
    };
};
