import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import CloseIcon from '@mui/icons-material/Close';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { IconButton, Modal } from '@mui/material';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { isEmpty } from 'lodash';
import { compose } from 'redux';

import logo from 'src/assets/images/logo.svg';
import { ListCategory, State } from 'src/common/types';
import useResponsive from 'src/hooks/useResponsive';

import { AuthType } from '../../pages/Authenticated/types';
import { PATH_AUTH } from '../../routes/paths';
import DropDown from '../NavBar/Dropdown';
import Search from './Search';
import UserButton from './UserButton';
import styles from './styles';

type Props = {
  categoryList: ListCategory[];
  cart: { count: number };
  auth: AuthType;
};

const Header: React.FC<Props> = ({ categoryList, auth, cart }) => {
  const isDesktop = useResponsive('up', 'md');

  const isLaptopL = useResponsive('down', 'lg');

  const [showHeader, setShowHeader] = React.useState<boolean>(true);

  const [showInit, setShowInit] = React.useState<{ top: string } | object>({});

  const [openSearch, setOpenSearch] = useState<boolean>(false);

  useEffect(() => {
    const scrollPosition = 380;
    const scrollPositionInit = 135;

    function handleScroll() {
      const newScrollPosition = window.scrollY;
      newScrollPosition >= scrollPositionInit ? setShowInit({ top: '-80px' }) : setShowInit({});
      newScrollPosition <= scrollPosition && setShowHeader(true);
      scrollPosition < newScrollPosition && setShowHeader(false);
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
  }, []);

  const handleOpenFormSearch = () => setOpenSearch(true);

  const handleCloseFormSearch = () => setOpenSearch(false);

  return (
    <>
      <Box component="div" sx={() => (!showHeader ? { height: '80px' } : {})}>
        <Box sx={() => (showHeader ? { ...styles.boxHeader, ...showInit } : styles.boxHeaderScroll)}>
          <Box sx={styles.boxWrapperHeader}>
            <Container maxWidth="lg" sx={styles.containerHeader}>
              <Box sx={styles.boxLogo}>
                <Link to="/">
                  <img width="150" height="60" src={logo} alt="logo" />
                </Link>
                {!showHeader && isDesktop && (
                  <Box sx={styles.boxContainerCategoryDropdown}>
                    <Box sx={styles.boxWrapperCategoryDropdown}>
                      <DropDown
                        btnSx={styles.btnCategoryDropdown}
                        buttonIcon
                        menuItem={categoryList}
                        buttonIconFirst={<GridViewRoundedIcon fontSize="small" />}
                      />
                    </Box>
                  </Box>
                )}
              </Box>
              {isDesktop && (
                <Box sx={{ ...styles.boxWrapperFrom }}>
                  <Box sx={styles.boxFromControl}>
                    <Search />
                  </Box>
                </Box>
              )}
              <Box display="flex" gap="12px" marginLeft={2}>
                {isLaptopL && (
                  <Button type="button" onClick={handleOpenFormSearch} sx={styles.btnSearch}>
                    <SearchIcon />
                  </Button>
                )}
                <UserButton />
                <Badge badgeContent={isEmpty(auth) ? 0 : cart?.count} color="secondary" sx={styles.badge}>
                  <Button href={PATH_AUTH.cart} sx={{ padding: '5px', minWidth: 0 }}>
                    <ShoppingBagOutlinedIcon color="action" />
                  </Button>
                </Badge>
              </Box>
            </Container>
          </Box>
        </Box>
      </Box>

      <Modal
        open={openSearch}
        onClose={handleCloseFormSearch}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styles.boxModalSearch}>
          <IconButton aria-label="delete" onClick={handleCloseFormSearch}>
            <CloseIcon />
          </IconButton>
          <Search />
        </Box>
      </Modal>
    </>
  );
};

const mapStateToProps = ({ global: { category, auth, cart } }: State) => ({
  categoryList: category.list,
  auth,
  cart,
});

const withConnect = connect(mapStateToProps, null);

export default compose(withConnect)(Header);
