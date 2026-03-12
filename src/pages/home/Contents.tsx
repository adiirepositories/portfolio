// ** MUI Imports
import Card from '@mui/material/Card'
// import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

import ImagesCardList from 'src/views/components/ImagesCardList'
import MyTimeline from './MyTimeline'
// import { Box } from '@mui/system'
import Button from '@mui/material/Button'
import Box from '@mui/system/Box'

const Contents = ({
  appContent,
  appContentName,
  textContent,
  dataProps,
  imgUrl,
  indexPageClicked
}: // pageRef
{
  appContent: any
  appContentName: any
  textContent: any
  dataProps: any
  imgUrl: any
  indexPageClicked: number
  // pageRef: any
}) => {
  return (
    <Card
      sx={{
        backgroundImage: `url('/images/pages/paper-texture.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100%'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap'
        }}
      >
        <CardHeader
          sx={{ p: 0 }}
          titleTypographyProps={{
            sx: {
              color: 'gray',
              fontSize: '2.5rem',
              fontWeight: 'bold'
            }
          }}
          title='Muhammad Badri Yusup'
        />

        <Button
          sx={{
            mt: 4,
            mr: 4,
            boxShadow: 5,
            backgroundColor: '#1f2752',
            height: '40px',
            '&:hover': {
              backgroundColor: '#1f2752'
            }
          }}
          variant='contained'
          href='/cv/cv.docx'
          download
        >
          Download CV
        </Button>
      </Box>

      <CardContent>
        <Typography sx={{ mb: 2, fontSize: '2.5rem', fontWeight: 'bold' }}>{dataProps}</Typography>
        <Typography
          sx={{
            fontSize: '1.2rem',
            mb: 6,
            // color: indexPageClicked == 1 ? 'red'
            ...(indexPageClicked === 1 && { color: 'red' }) // ✅ Conditionally adds color
          }}
        >
          {textContent}
        </Typography>
        <Typography sx={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{appContentName}</Typography>
        <Typography sx={{ fontFamily: 'monospace' }}>{appContent}</Typography>
      </CardContent>

      <ImagesCardList
        // clickedRef={pageRef}
        currentPage={indexPageClicked}
        typeContent={appContentName}
        dataImgArray={imgUrl as any}
      />
      {indexPageClicked == 0 && <MyTimeline />}
    </Card>
  )
}

export default Contents
