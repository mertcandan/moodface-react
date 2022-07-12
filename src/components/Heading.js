import {Box, Stack} from "@mui/material";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const Heading = () => {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        pt: 3,
        pb: 0,
      }}
    >
      <Container maxWidth="sm">
        <Stack
          sx={{ pt: 0 }}
          direction="row"
        >
          <Stack
            sx={{ pt: 0 }}
            direction="column"
            spacing={0}
            justifyContent="flex-start"
          >
            <Typography
              component="h4"
              variant="h4"
              align="center"
              color="text.primary"
              // gutterBottom
            >
              MOODFACE
            </Typography>
            <Typography
              component="p"
              variant="p"
              align="center"
              color="text.primary"
            >
              An emotive keyboard
            </Typography>
          </Stack>
          <Typography
            sx={{ pl: 2, }}
            variant="p"
            align="justify"
            color="text.secondary"
            paragraph
          >
            Something short and leading about the collection below—its contents,
            the creator, etc. Make it short and sweet, but not too short so folks
            don&apos;t simply skip over it entirely.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}

export default Heading;
