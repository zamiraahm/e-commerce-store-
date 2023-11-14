import { Box, Typography } from "@mui/material";
import { Email, Phone } from "@mui/icons-material";

export default function ContactPage() {
    return (
        <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center" marginTop={4}>
            <Box
                bgcolor="#345457"
                padding={4}
                borderRadius={10}
                marginRight={2}
                marginTop={10}
                height={500}
            >
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    border="1px solid white"
                    borderRadius={10}
                    padding={2}
                    margin={2}
                    width={350}
                    marginTop={14}
                >
                    <img src="/images/mail (1).png" alt="" style={{ width: 80 }} />
                    <Typography variant="body1" style={{ fontSize: 16, textAlign: "center",color:"white" }}>
                        If you have any concerns or comments, please let us know by email.
                    </Typography>
                    <Box display="flex" alignItems="center" marginTop={2}>
                        <Email style={{ fontSize: 40, color: "white" }} />
                        <Typography variant="body1" style={{ fontSize: 16, marginLeft: 10,color:"white" }}>
                            bookify@gmail.com
                        </Typography>
                    </Box>
                </Box>
            </Box>

            <Box
                bgcolor="#345457"
                padding={4}
                borderRadius={10}
                marginLeft={2}
                marginTop={10}
                height={500}
            >
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    border="1px solid white"
                    borderRadius={10}
                    padding={2}
                    margin={2}
                    width={350}
                    marginTop={14}
                >
                    <img src="/images/phone-call.png" alt="" style={{ width: 80 }} />
                    <Typography variant="body1" style={{ fontSize: 16, textAlign: "center",color:"white" }}>
                        Or you can call us by phone and our agents will be ready to answer
                    </Typography>
                    <Box display="flex" alignItems="center" marginTop={2}>
                        <Phone style={{ fontSize: 40, color: "green" }} />
                        <Typography variant="body1" style={{ fontSize: 16, marginLeft: 10 ,color:"white"}}>
                            123-456-7890
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

