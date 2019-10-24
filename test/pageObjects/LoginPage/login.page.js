import Page from '../page'

class LoginPage extends Page {

    get username() { return $('#username') }
    get password() { return $('#password') }
    get submitBtn() { return $('form button[type="submit"]') }
    get flash() { return $('#flash') }
    get headerLinks() { return $$('#header a') }

    open() {
        super.open('http://the-internet.herokuapp.com/login')
    }

    submit() {
        this.submitBtn.click()
    }

}

export default new LoginPage()