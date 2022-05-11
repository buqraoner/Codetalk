export default function AuthErrorMessageParse(errorCode) {
    switch (errorCode) {
        case 'auth/invalid-email':
            return 'Geçerli bir e-posta adresi giriniz.';

        case 'auth/weak-password':
            return 'Şifreniz en az 6 karakterden oluşmalıdır.';

        case 'auth/email-already-in-use':
            return 'Bu e-posta adresi zaten kullanımda.';

        case 'auth/wrong-password':
            return 'Şifreniz hatalı.';

        case 'auth/user-not-found':
            return 'Bu e-posta adresi ile bir kullanıcı bulunamadı.';

        case 'auth/user-disabled':
            return 'Bu e-posta adresi ile bir kullanıcı bulunamadı.';

        case 'auth/too-many-requests':
            return 'Çok fazla giriş deneme.';

        case 'auth/requires-recent-login':
            return 'Bu e-posta adresi ile bir kullanıcı bulunamadı.';

        case 'auth/invalid-credential':
            return 'Bu e-posta adresi ile bir kullanıcı bulunamadı.';

        case 'auth/user-mismatch':
            return 'Bu e-posta adresi ile bir kullanıcı bulunamadı.';

        case "auth/weak-password":
            return "Şifreniz en az 6 karakterden oluşmalıdır.";

        default:
            return errorCode;

    }
}
