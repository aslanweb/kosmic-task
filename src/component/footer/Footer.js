import {Button, Grid} from "@mui/material";
import {styled} from "@mui/material/styles";
import arrowIcon from "../../assets/images/arrow-right.svg"

const CustomAppBar = styled(Grid)(({ theme }) => ({
    backgroundColor: '#09090d',
    padding: '32px',
    borderTop: '1px solid #3A3940',
    [theme.breakpoints.down('sm')]: {
        backgroundColor: 'rgba(9, 9, 13, 0.40)',
        borderTop: 'none',
        padding: '23px',
        '& > div': {
            flexDirection: 'column',
        }
    }
}));
const ButtonWrap = styled(Button)(({ theme }) => ({
    display: 'flex',
    width: '146px',
    height: '51px',
    padding: '0',
    borderRadius: '32px',
    border: '1px solid #616066',
    fontSize: '14px',
    fontWeight: '400',
    textTransform: 'capitalize',
    color: '#fff',
    '&:hover,&.active': {
        background: '#523FD7',
        borderColor: '#523FD7',
    },
    [theme.breakpoints.down('sm')]: {
        width: '100%',
    }
}));
const ButtonNext = styled(Button)(({ theme }) => ({
    display: 'flex',
    width: '234px',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '52px',
    padding: '0 28px',
    borderRadius: '32px',
    background: '#fff',
    border: '1px solid #616066',
    fontSize: '14px',
    fontWeight: '400',
    textTransform: 'capitalize',
    color: '#fff',
    transition: 'all 0.4s ease-in-out',
    '&:hover,&.active': {
        paddingRight: '20px',
    },
    [theme.breakpoints.down('sm')]: {
        width: '100%',
        justifyContent: 'center',
        'img': {
            display: 'none',
        }
    }
}));
export default function Footer() {
    return(
        <>
            <CustomAppBar component="footer" justifyContent="center" alignItems="center">
                <Grid spacing={2} alignItems="center" justifyContent="space-between" gap="16px" display="flex" sx={{ flexGrow: 1 }}>
                    <ButtonWrap variant="outlined">
                        Back
                    </ButtonWrap>
                    <ButtonNext variant="outlined">
                        <span>Next</span> <img src={arrowIcon} alt="arrowIcon"/>
                    </ButtonNext>
                </Grid>
            </CustomAppBar>
        </>
    )
}