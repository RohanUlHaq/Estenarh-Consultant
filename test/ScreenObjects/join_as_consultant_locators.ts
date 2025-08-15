class JoinAsConsultantLocators {

  get join_our_mission_button() {
    return $('~login_btn_login');  
  }
  
  get email_switcher() {
    return $('~login_switcher_email_option');
  }

  get email_input() {
    return $('~login_input_email');
  }

  get login_button_next() {
    return $('~login_btn_next');
  }

  get otp1() {
    return $('//android.view.ViewGroup[@content-desc="verification_code_cell-0"]/android.widget.TextView');
  }

  get otp2() {
    return $('//android.view.ViewGroup[@content-desc="verification_code_cell-1"]/android.widget.TextView');
  }

  get otp3() {
    return $('//android.view.ViewGroup[@content-desc="verification_code_cell-2"]/android.widget.TextView'); 
  }

  get otp4() {
    return $('//android.view.ViewGroup[@content-desc="verification_code_cell-3"]/android.widget.TextView'); 
  }

  get otp_next_button() {
    return $('~verification_btn_next');
  }

  get signup_password() {
    return $('~signup_details_input_password');
  }

  get signup_confirm_password() {
    return $('~signup_details_input_confirm_password');
  }

  get password_next_button() {
    return $('~signup_details_btn_next');
  }

  get absher_id_number() {
    return $('~menu_authenticate_from_absher_national_id');
  }

}
  module.exports = new JoinAsConsultantLocators();