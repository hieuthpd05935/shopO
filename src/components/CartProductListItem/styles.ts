const paper = {
  flex: 1,
  color: 'rgb(43, 52, 69)',
  transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
  display: 'flex',
  overflow: 'hidden',
  alignItems: 'center',
  position: 'relative',
  borderRadius: '10px',
  boxShadow: 'rgba(43, 52, 69, 0.1) 0px 4px 16px',
};

const informationProduct = {
  display: 'flex',
  padding: '16px',
  rowGap: '16px',
  width: '100%',
  justifyContent: 'space-around',
};

const inforNameProduct = {
  width: '320px',
  textTransform: 'none',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
};

const nameProduct = {
  lineHeight: '1.5',
  fontWeight: '600',
  fontSize: '18px',
  textTransform: 'none',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
};

const wrapperPrice = {
  display: 'flex',
  gap: '8px',
  flexWrap: 'wrap',
  WebkitBoxAlign: 'center',
  alignItems: 'center',
};

const priceXQuantity = {
  lineHeight: '1.5',
  color: 'rgb(125, 135, 156)',
  textTransform: 'none',
  whiteSpace: 'normal',
};

const totalPrice = {
  lineHeight: '1.5',
  fontWeight: '600',
  color: 'rgb(210, 63, 87)',
  textTransform: 'none',
  whiteSpace: 'normal',
  display: 'flex',
  alignItems: 'center',
};

const btnIncrease = {
  minWidth: '0px',
  minHeight: '0px',
  fontWeight: '600',
  textTransform: 'capitalize',
  padding: '5px',
};

const boxQuantity = {
  lineHeight: '1.5',
  marginLeft: '8px',
  marginRight: '8px',
  fontWeight: '600',
  fontSize: '15px',
  textTransform: 'none',
  whiteSpace: 'normal',
};

const avatar = {
  lineHeight: 1,
  overflow: 'hidden',
  userSelect: 'none',
  borderRadius: '10px',
  border: 'none',
  flexShrink: 0,
};

const btnReduce = {
  minWidth: '0px',
  minHeight: '0px',
  fontWeight: '600',
  textTransform: 'capitalize',
  padding: '5px',
};

const btnDisabled = {
  opacity: '40%',
  pointerEvents: 'none',
};

const btnDelete = {
  padding: '10px',
  minWidth: 0,
  backgroundColor: '#d23f57',
  '&:hover': { backgroundColor: '#d23f57', opacity: 0.7 },
};

export default {
  informationProduct,
  priceXQuantity,
  wrapperPrice,
  btnIncrease,
  boxQuantity,
  inforNameProduct,
  nameProduct,
  totalPrice,
  btnReduce,
  btnDelete,
  paper,
  avatar,
  btnDisabled,
};
