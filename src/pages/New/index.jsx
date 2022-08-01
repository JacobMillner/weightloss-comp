import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import {useNavigate} from 'react-router-dom';

const New = () => {
  const nav = useNavigate();
  const handleBack = () => {
    nav("/");
  };
	return (
      <header className="header-text">
        <p>New weight loss competition</p>
        <Stack spacing={2} direction="row">
          <Button variant="outlined" onClick={handleBack}>
            Back
          </Button>
        </Stack>
      </header>
    );
}

export default New;
