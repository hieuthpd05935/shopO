const paperProduct = {
  borderRadius: 0,
  '&:hover > div > .hover-box': {
    opacity: 1,
    right: '15px',
  },
};

const boxImage = {
  textAlign: 'center',
  position: 'relative',
  display: 'inline-block',
  '& img': {
    height: '290px',
    width: '290px',
    objectFit: 'cover',
  },
};

const boxQuantityPaginationProduct = {
  marginTop: '32px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  '> span': {
    lineHeight: '1.5',
    color: '#7D879C',
    textTransform: 'none',
    whiteSpace: 'normal',
  },
  '> div': {
    marginTop: 0,
  },
};

const hoverBox = {
  zIndex: '2',
  top: '7px',
  opacity: '0',
  right: '0',
  display: 'flex',
  cursor: 'pointer',
  position: 'absolute',
  flexDirection: 'column',
  transition: 'all 0.3s ease-in-out',
};

const colorIcon = { color: '#00000042' };

const wrapContentProduct = {
  flex: '1 1 0',
  minWidth: '0px',
  marginRight: '8px',
};

const boxTitle = {
  display: '-webkit-box',
  WebkitLineClamp: '2',
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  marginBottom: '8px',
  marginTop: '0px',
  fontSize: '14px',
  fontWeight: '600',
  lineHeight: '1.5',
  color: '#373F50',
  textTransform: 'none',
};

const boxPrice = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  marginTop: '4px',
};

export default {
  boxQuantityPaginationProduct,
  wrapContentProduct,
  paperProduct,
  colorIcon,
  hoverBox,
  boxImage,
  boxTitle,
  boxPrice,
};
