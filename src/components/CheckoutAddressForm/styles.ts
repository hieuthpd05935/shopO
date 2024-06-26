import { styles } from '../common';

const formControl = { marginBottom: '26px', position: 'relative' };

const errorMessage = { position: 'absolute', left: 0, bottom: '-20px' };

const formControlLabel = { display: 'flex' };

const inputLabel = {
  letterSpacing: 'inherit',
  fontFamily: styles.fontFamilyDefault,
  fontSize: '14px',
  transform: 'translate(14px, 9px)',
  '&.Mui-focused': {
    transform: 'translate(14px, -9px) scale(0.75)',
  },
  '&.MuiFormLabel-filled': {
    transform: 'translate(14px, -9px) scale(0.75)',
  },
};

const outlinedInput = { fontSize: '14px' };

const paperBillingXShipping = {
  boxShadow: 'rgba(3, 0, 71, 0.09) 0px 1px 3px',
  overflow: 'hidden',
  borderRadius: '8px',
  position: 'relative',
  padding: '1.5rem 1.75rem',
  marginBottom: '32px',
};

const typographyTitle = {
  margin: '0px 0px 16px',
  fontSize: '14px',
  fontFamily: styles.fontFamilyDefault,
  fontWeight: '600',
  letterSpacing: 'inherit',
};

const btnBackToCart = {
  fontFamily: styles.fontFamilyDefault,
  width: '100%',
  minWidth: '0px',
  minHeight: '0px',
  fontWeight: '600',
  textTransform: 'capitalize',
  letterSpacing: 'inherit',
};

const btnProceedToPayment = {
  fontFamily: styles.fontFamilyDefault,
  width: '100%',
  minWidth: '0px',
  minHeight: '0px',
  fontWeight: '600',
  textTransform: 'capitalize',
  boxShadow: '0px 0px 28px rgba(3, 0, 71, 0.01)',
  letterSpacing: 'inherit',
  '&:hover': {
    backgroundColor: '#E3364E',
    boxShadow: '0px 0px 28px rgba(3, 0, 71, 0.01)',
  },
};
export default {
  paperBillingXShipping,
  formControlLabel,
  typographyTitle,
  outlinedInput,
  formControl,
  inputLabel,
  errorMessage,
};
