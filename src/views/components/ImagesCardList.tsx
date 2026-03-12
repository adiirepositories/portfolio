// ** MUI Imports
import { Box } from '@mui/system'
// import Card from '@mui/material/Card'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import SvgIcon from '@mui/material/SvgIcon'
import Grid from '@mui/material/Grid'

import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog, { DialogProps } from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import CardMedia from '@mui/material/CardMedia'
import { useEffect, useRef, useState } from 'react'
import Tooltip from '@mui/material/Tooltip'
import { IconButton } from '@mui/material'
// import { red } from '@mui/material/colors'

// ** Styled component for the image
const Img = styled('img')({
  right: 10,
  bottom: 2,
  height: 140,
  position: 'absolute'
})

const ImagesCardList = ({ clickedRef, currentPage, typeContent, dataImgArray }: any) => {
  const [open, setOpen] = useState(false)
  const [clickedUrl, setclickedUrl] = useState('')
  const [clickedImgIndex, setclickedImgIndex] = useState<any>(0)
  const [clickedModalTitle, setclickedModalTitle] = useState('')

  const handleClickOpen = (typeProps: any) => {
    setOpen(true)
  }
  const handleClickImg = (index: any, data: any) => {
    handleClickOpen(index)
    setclickedImgIndex(index)
    setclickedUrl(data)

    if (index == '0') {
      if (typeContent.includes('RTG')) {
        setclickedUrl('/images/banners/vidrtg.mp4')
      }
      if (typeContent.includes('HHT')) {
        setclickedUrl('/images/banners/vidhht.mp4')
      }
    }
  }

  const handleNExtPrevImg = (index: any, data: any) => {
    if (index < 0) {
      return
    } else if (index > dataImgArray.length - 1) {
      return
    } else {
      setclickedImgIndex(index)
      setclickedUrl(data)

      if (index == '0') {
        if (typeContent.includes('RTG')) {
          setclickedUrl('/images/banners/vidrtg.mp4')
        }
        if (typeContent.includes('HHT')) {
          setclickedUrl('/images/banners/vidhht.mp4')
        }
      }
    }
  }

  const handleClose = () => {
    setOpen(false)
    // clickedRef()
  }

  const [isIncludedName, setisIncludedName] = useState(false)
  const [isContentVideo, setisContentVideo] = useState(false)

  const checkIsIncludedProjectName = (dataProps: any) => {
    if (currentPage === 0 || currentPage === 2) {
      setisIncludedName(true)
      return
    }
    if (currentPage && currentPage !== 0) {
      if (dataProps.includes('VMT') || dataProps.includes('HHT') || dataProps.includes('KPI')) {
        setisIncludedName(true)
        return
      } else {
        setisIncludedName(false)
      }
    }
  }

  const [isSoloProjectName, setisSoloProjectName] = useState(false)
  const [isFullStackProject, setisFullStackProject] = useState(false)

  const checkIsSoloProjectName = (dataProps: any) => {
    if (dataProps.includes('VMT') || dataProps.includes('HHT') || dataProps.includes('KPI')) {
      setisSoloProjectName(true)
      setisFullStackProject(true)

      return
    } else {
      setisSoloProjectName(false)
      setisFullStackProject(false)
      return
    }
  }

  const checkIsPhotoSummary = (dataProps: any, pageProps: any) => {
    if (pageProps === 1) {
      if (dataProps.includes('VMT') || dataProps.includes('HHT') || dataProps.includes('KPI')) {
        const widthGrid = 6
        return widthGrid
      }

      const widthGrid = 12
      return widthGrid
    }
  }

  const checkIsPhotoStackSize = (pageProps: any) => {
    if (pageProps === 2) {
      const imgSize = '50px'
      return imgSize
    }

    const imgSize = '300px'
    return imgSize
  }

  useEffect(() => {
    // alert(currentPage + '-' + typeContent)
    checkIsIncludedProjectName(typeContent)
    checkIsSoloProjectName(typeContent)
  }, [typeContent, currentPage])

  useEffect(() => {
    // alert(typeContent)
    const isVideo = clickedUrl.endsWith('.mp4')
    setisContentVideo(isVideo)

    if (clickedImgIndex == '0') {
      setclickedModalTitle('VMT - RTG')
    } else if (clickedImgIndex == '1') {
      setclickedModalTitle('HHT - HandHeld Terminal')
    } else if (clickedImgIndex == '2') {
      setclickedModalTitle('VMT - TRAILER')
    } else if (clickedImgIndex == '3') {
      setclickedModalTitle('KPI - DASHBOARD')
    } else {
      setclickedModalTitle('')
    }
  }, [clickedUrl])

  const keyFeatures = {
    vmtRTG: [
      '⭕ Real-time display of assigned stacking/Unstacking or shifting tasks to RTG operators',
      '⭕ Smart auto suggest new location for shifting or stacking process',
      '⭕ Seamless coordination with internal trucks and TOS (Terminal Operating System)',
      '⭕ MQTT-based real-time updates for task tracking and status confirmation',
      '⭕ Secure API communication using encrypted JWT',
      '⭕ Server-side data fetching',
      '⭕ Touch-friendly, responsive interface suitable for industrial VMT devices',
      '⭕ High-performance Progressive Web App (PWA) – installable and fast, even on low-spec devices'
    ],
    HHT: [
      '⭕ Seamless execution of container vessel or yard activities: discharge, load, stack/unstack, and Reefer Plug',
      '⭕ Intuitive UI and Optimized for handheld screen sizes',
      '⭕ High-performance Progressive Web App (PWA) – installable and fast, even on low-spec devices',
      '⭕ Seamless sync with quay crane operations to confirm container movement',
      '⭕ Secure API communication using encrypted JWT',
      '⭕ Server-side data fetching',
      '⭕ Push notifications for re-tallies,'
    ],
    TRL: [
      '⭕ Displays real-time trucking tasks and container movement assignments',
      '⭕ Tally confirmation workflow to ensure accurate pickup/drop-off of containers',
      '⭕ Integration with MQTT for real-time communication between systems and operators',
      '⭕ User-friendly interface optimized for VMT screen size and touch interaction',
      '⭕ Fail-safe mechanisms for network loss, allowing continued offline operations with sync-back logic'
    ],
    kpiDashboard: [
      '⭕ Real-time monitoring of container discharge, loading, shifting, and stacking operations in terminal A and B BNCT Port (multi terminal)',
      '⭕ This Dashboard is replacement for TOPX TOPS-KPI Dashboard, https://rbs-tops.com/',
      '⭕ Visual performance indicators (KPIs) for RTG cranes, trucks, and quay operations',
      '⭕ Integrated live data updates',
      '⭕ Server-side data fetching',
      '⭕ Interactive charts and tables for actionable insights',
      '⭕ Built with High-performance Progressive Web App (PWA) – installable and lightweight'
    ]
  }

  return (
    <>
      <Dialog
        sx={{ backgroundColor: 'white', opacity: '94%' }}
        fullWidth={true}
        maxWidth={'lg'}
        open={open}
        onClose={handleClose}
      >
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: '100%'
          }}
        >
          {/* Left Icon Button */}
          <IconButton
            aria-label='Previous'
            onClick={() => handleNExtPrevImg(clickedImgIndex - 1, dataImgArray[clickedImgIndex - 1])}
            sx={{
              position: 'absolute',
              left: 0,
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10
            }}
          >
            <SvgIcon fontSize='large'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 -960 960 960'
                height='36px'
                width='36px'
                fill='#1f1f1f'
              >
                <path d='M560-280 360-480l200-200v400Z' />
              </svg>
            </SvgIcon>
          </IconButton>

          {/* Right Icon Button */}
          <IconButton
            aria-label='Next'
            onClick={() => handleNExtPrevImg(clickedImgIndex + 1, dataImgArray[clickedImgIndex + 1])}
            sx={{
              position: 'absolute',
              right: 0,
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10
            }}
          >
            <SvgIcon fontSize='large'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                height='36px'
                viewBox='0 -960 960 960'
                width='36px'
                fill='#1f1f1f'
              >
                <path d='M400-280v-400l200 200-200 200Z' />
              </svg>
            </SvgIcon>
          </IconButton>

          {!isIncludedName && <DialogTitle> {clickedModalTitle}</DialogTitle>}

          {isIncludedName && <DialogTitle> {typeContent}</DialogTitle>}
          {isSoloProjectName && isFullStackProject && (
            <DialogContentText sx={{ ml: 6, color: '#00b383ff' }}>Solo Project - Full Front End</DialogContentText>
          )}
          {/* {isFullStackProject && <DialogContentText sx={{ ml: 6, color: 'red' }}>Full Front End</DialogContentText>} */}

          <DialogContent>
            <Grid container spacing={1}>
              <Grid
                item
                xs={12}
                md={checkIsPhotoSummary(typeContent, currentPage)}
                sm={checkIsPhotoSummary(typeContent, currentPage)}
              >
                {/* <Button onClick={handleClose}>Details</Button> */}
                <CardMedia
                  component={isContentVideo ? 'iframe' : 'img'}
                  // component='iframe'
                  src={clickedUrl}
                  title={'this title'}
                  allow='autoplay; encrypted-media'
                  allowFullScreen
                  sx={{
                    // cursor: 'pointer',
                    transition: 'transform 0.3s ease-in-out', // Smooth transition
                    '&:hover': {
                      transform: 'scale(1.01)' // Zoom effect on hover
                    },
                    // width: '55%',
                    objectFit: 'contain',
                    overflow: 'hidden',
                    height: 400,
                    border: 'none'
                    // display: 'block' // removes extra space below image
                  }}
                />
              </Grid>

              <Grid item xs={12} md={6} sm={6} sx={{ ml: 0 }}>
                {typeContent.includes('RTG') &&
                  keyFeatures.vmtRTG.map((_, rowIndex) => (
                    <Typography
                      key={`${rowIndex} `}
                      sx={{ mb: 2, ml: 6, fontSize: '1.1rem', fontWeight: 'light', fontStyle: 'italic' }}
                    >
                      {keyFeatures.vmtRTG[rowIndex]}
                    </Typography>
                  ))}

                {typeContent.includes('HHT') &&
                  keyFeatures.HHT.map((_, rowIndex) => (
                    <Typography
                      key={`${rowIndex} `}
                      sx={{ mb: 2, ml: 6, fontSize: '1.1rem', fontWeight: 'light', fontStyle: 'italic' }}
                    >
                      {keyFeatures.HHT[rowIndex]}
                    </Typography>
                  ))}

                {typeContent.includes('Trailer') &&
                  keyFeatures.TRL.map((_, rowIndex) => (
                    <Typography
                      key={`${rowIndex} `}
                      sx={{ mb: 2, ml: 6, fontSize: '1.1rem', fontWeight: 'light', fontStyle: 'italic' }}
                    >
                      {keyFeatures.TRL[rowIndex]}
                    </Typography>
                  ))}
                {typeContent.includes('KPI') &&
                  keyFeatures.kpiDashboard.map((_, rowIndex) => (
                    <Typography
                      key={`${rowIndex} `}
                      sx={{ mb: 2, ml: 6, fontSize: '1.1rem', fontWeight: 'light', fontStyle: 'italic' }}
                    >
                      {keyFeatures.kpiDashboard[rowIndex]}
                    </Typography>
                  ))}
              </Grid>
            </Grid>

            {/* <Box sx={{ m: 4 }}> */}

            {/* </Box>
            </Box> */}
          </DialogContent>

          <DialogActions>
            <Button color={'error'} onClick={handleClose}>
              Close
            </Button>
          </DialogActions>
        </Box>
      </Dialog>

      <Box
        sx={{
          display: 'flex',
          overflow: 'auto'
        }}
      >
        {dataImgArray.map((src: string | undefined, index: any | null | undefined) => (
          // <Tooltip title={getTooltipText(`${index}`)}>
          <Box
            key={`${index} `}
            onClick={() => handleClickImg(index, src)}
            sx={{
              boxShadow: '0px 0px 15px 3px rgba(255, 255, 255, 0.7)', // white glow effect
              mr: 1,
              cursor: 'pointer',
              transition: 'transform 0.3s ease-in-out', // Smooth transition
              '&:hover': {
                transform: 'scale(1.1)' // Zoom effect on hover
              }
            }}
          >
            <img
              style={{
                width: 'auto',
                height: '100%',
                maxHeight: checkIsPhotoStackSize(currentPage),
                objectFit: 'cover'
              }}
              src={src}
              alt={`Slide ${index}`}
            />
          </Box>
          // </Tooltip>
        ))}
      </Box>
    </>
  )
}

export default ImagesCardList
