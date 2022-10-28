import { FC } from 'react';
import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';

import avatar01 from '../../assets/avatar/avatar-01.jpg';
import avatar02 from '../../assets/avatar/avatar-02.jpg';
import avatar03 from '../../assets/avatar/avatar-03.jpg';
import avatar04 from '../../assets/avatar/avatar-04.jpg';
import avatar05 from '../../assets/avatar/avatar-05.jpg';
import avatar06 from '../../assets/avatar/avatar-06.jpg';

export const Rightbar: FC = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
      <Box sx={{ position: 'fixed', paddingRight: 3 }}>
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>

        <AvatarGroup max={7} total={20}>
          <Avatar alt="Remy Sharp" src={avatar01} />
          <Avatar alt="Travis Howard" src={avatar02} />
          <Avatar alt="Agnes Walker" src={avatar03} />
          <Avatar alt="Trevor Henderson" src={avatar04} />
          <Avatar alt="Remy Sharp" src={avatar05} />
          <Avatar alt="Travis Howard" src={avatar06} />
          <Avatar alt="Agnes Walker" src={avatar03} />
          <Avatar alt="Trevor Henderson" src={avatar02} />
        </AvatarGroup>

        <Typography variant="h6" fontWeight={100} marginY={2}>
          Latest Photos
        </Typography>
        <ImageList variant="masonry" cols={3} rowHeight={166} gap={5}>
          <ImageListItem>
            <img src="/social/card-01.jpg" alt="" loading="lazy" />
          </ImageListItem>
          <ImageListItem>
            <img src="/social/card-02.jpg" alt="" loading="lazy" />
          </ImageListItem>
          <ImageListItem>
            <img src="/social/card-03.jpg" alt="" loading="lazy" />
          </ImageListItem>
        </ImageList>

        <Typography variant="h6" fontWeight={100} mt={2}>
          Latest Conversations
        </Typography>

        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src={avatar06} />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src={avatar02} />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src={avatar04} />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {' — Do you have Paris recommendations? Have you ever…'}
                </>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};
