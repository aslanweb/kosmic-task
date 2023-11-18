import {Box, Grid, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";
import ContentOptions from "./ContentOptions";
import ProgressBar from "./ProgressBar";

const TitleTypography = styled(Typography)(({ theme }) => ({
    fontWeight: '500',
    lineHeight: '36px',
    color: '#fff',
    [theme.breakpoints.down('sm')]: {
        fontSize: '20px'
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '24px',
    }
}));
const MinTitleTypography = styled(Typography)(({ theme }) => ({
    fontWeight: '500',
    color: '#fff',
    [theme.breakpoints.up('md')]: {
        fontSize: '18px',
        lineHeight: '27px',
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '16px',
        lineHeight: '24px',
    },
}));
const TitleWrapGrid = styled(Grid)(({ theme }) => ({
    padding: '30px 0 32px',
    borderBottom: '1px solid rgba(58, 57, 64, 0.4)',
    marginBottom: '40px',
    [theme.breakpoints.down('sm')]: {
        paddingTop: '22px',
        paddingBottom: '20px',
        marginBottom: '24px',
    }
}));
const MinTitleSpace = styled(Grid)(({ theme }) => ({
    paddingBottom: '24px',
    [theme.breakpoints.down('sm')]: {
        paddingBottom: '16px',
    }
}));
const MinExtraTitleSpace = styled(Grid)(({ theme }) => ({
    paddingBottom: '14px',
    [theme.breakpoints.down('sm')]: {
        paddingBottom: '14px',
    }
}));

export default function MainContent() {
    return(
        <>
            <div className="main_content">
                <TitleWrapGrid sx={{ flexGrow: 1 }}>
                    <Grid item textAlign="left">
                        <Box>
                            <TitleTypography variant="h2">
                                Content type
                            </TitleTypography>
                            <Typography sx={{fontSize: '16px'}}>
                                Choose a content type that best fits your needs.
                            </Typography>
                        </Box>
                    </Grid>
                </TitleWrapGrid>
                <MinTitleSpace sx={{ flexGrow: 1 }}>
                    <Grid item textAlign="left">
                        <Box>
                            <MinTitleTypography variant="h3">
                                What type of content are you creating?
                            </MinTitleTypography>
                        </Box>
                    </Grid>
                </MinTitleSpace>
                <ContentOptions/>
                <MinTitleSpace sx={{ flexGrow: 1 }}>
                    <MinExtraTitleSpace item textAlign="left">
                        <Box>
                            <MinTitleTypography variant="h3">
                                Set the number of words for output text.
                            </MinTitleTypography>
                        </Box>
                    </MinExtraTitleSpace>
                </MinTitleSpace>
                <ProgressBar/>
            </div>
        </>
    )
}