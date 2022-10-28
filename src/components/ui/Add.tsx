import { FC, useState } from 'react';
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  styled,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import {
  Add as AddIcon,
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from '@mui/icons-material';

import avatar04 from '../../assets/avatar/avatar-04.jpg';
const StyledModal = styled(Modal)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const UserBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
});

export const Add: FC = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <>
      <Tooltip
        onClick={() => setModalOpen(true)}
        title="Delete"
        sx={{ position: 'fixed', bottom: 20, left: { xs: 'calc(50% - 25px)', md: 30 } }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          height={280}
          p={3}
          borderRadius={2}
          bgcolor={'background.default'}
          color="text.primary"
        >
          <Typography variant="h6" color="gray" textAlign="center">
            Create Post
          </Typography>
          <UserBox>
            <Avatar src={avatar04} sx={{ width: 30, height: 30 }} />
            <Typography fontWeight={500}>Jhon Doe</Typography>
          </UserBox>
          <TextField
            sx={{ width: '100%', mt: '1em' }}
            label="Multiline"
            multiline
            rows={3}
            placeholder="What's on your mind.?"
            variant="standard"
          />
          <Stack direction="row" gap={3} mt={2} mb={3}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>

          <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
            <Button>Post</Button>
            <Button sx={{ width: '100px' }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};
