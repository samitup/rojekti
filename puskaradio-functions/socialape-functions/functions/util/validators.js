
const isEmail = (email) => {
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.match(regEx)) return true;
    else return false;
  };
  
  const isEmpty = (string) => {
    if (string.trim() === '') return true;
    else return false;
  };

  // Määrittelee hyväksyttävät muodot rekisteröitymistiedoille
  exports.validateSignupData = (data) => {
    let errors = {};
  
    if (isEmpty(data.email)) {
      errors.email = 'Ei voi olla tyhjä';
    } else if (!isEmail(data.email)) {
      errors.email = 'Sähköpostiosoite ei ole oikeassa muodossa';
    }
  
    if (isEmpty(data.password)) errors.password = 'Ei voi olla tyhjä';
    if (data.password !== data.confirmPassword)
      errors.confirmPassword = 'Salasanat eivät täsmää';
    if (isEmpty(data.handle)) errors.handle = 'Ei voi olla tyhjä';
  
    return {
      errors,
      valid: Object.keys(errors).length === 0 ? true : false
    };
  };
  // Määrittelee hyväksyttävät muodot kirjautumistiedoille
  exports.validateLoginData = (data) => {
    let errors = {};
  
    if (isEmpty(data.email)) errors.email = 'Ei voi olla tyhjä';
    if (isEmpty(data.password)) errors.password = 'Ei voi olla tyhjä';
  
    return {
      errors,
      valid: Object.keys(errors).length === 0 ? true : false
    };
  };