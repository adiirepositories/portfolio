// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import { Box } from '@mui/system'
import Button from '@mui/material/Button'
// ** MUI Imports
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Tooltip from '@mui/material/Tooltip'
// ** Icon Imports
import Icon from 'src/@core/components/icon'

import Contents from './Contents'
import { SyntheticEvent, useEffect, useRef, useState } from 'react'
const Home = () => {
  const [indexPageClicked, setindexPageClicked] = useState(0)

  const [pageClicked, setPageClicked] = useState('')
  const [contentText, setcontentText] = useState('')
  const [appContent, setappContent] = useState('')
  const [appContentName, setappContentName] = useState('')
  const [imgUrl, setimgUrl] = useState([])

  const textPages = {
    myProfileText:
      // 'Full stack Developer with 2+ years of hands-on experience specializing in  Next.js. Proficient in building scalable, high-performance web applications and PWA/SPA using modern libraries like Material UI, MQTT, Zustand, Next-PWA, and more. Experienced in designing and implementing enterprise-critical applications for container terminal-B operations in BNCT (Belawan) Port at PT. Primus Indonesia.',
      'Full stack Developer with 2+ years of hands-on experience specializing in  Next.js. Proficient in building scalable, high-performance web applications and PWA/SPA using modern libraries like Next-PWA, Material UI, MQTT and more. Experienced in  implementing enterprise-critical applications for container terminal-B operations in BNCT (Belawan) Port at PT. Primus Indonesia.',
    workProjectsText: 'This Project is currently live on production server',
    stacksText: 'This stacks page'
  }

  const imgUrlPages: any = {
    myProfile: ['/images/banners/me.jpg'],
    myProjects: [
      '/images/banners/rtghome1.png',
      '/images/banners/hht1.png',
      '/images/banners/trl1.png',
      '/images/banners/dashboard.png'
    ],
    stacks: Array.from({ length: 20 }, (_, i) => `/images/stacks/${i}.png`) // 0–4
  }

  const imgUrlProject: any = {
    0: [
      '/images/banners/rtghome1.png',
      '/images/banners/rtg2.jpg',
      '/images/banners/rtg3.jpg',
      '/images/banners/rtg4.jpg',
      '/images/banners/rtg5.jpg',
      '/images/banners/rtg6.jpg'
    ],
    1: [
      '/images/banners/hht1.png',
      '/images/banners/hht2.png',
      '/images/banners/hht3.png',
      '/images/banners/hht4.png',
      '/images/banners/hht5.png'
    ],
    2: [
      '/images/banners/trl1.png',
      '/images/banners/trl0.jpeg',
      '/images/banners/trl2.jpg',
      '/images/banners/trl1.jpg'
    ],
    3: [
      '/images/banners/dashboard.png',
      '/images/banners/dashboard2.png',
      '/images/banners/dashboard3.png',
      '/images/banners/dashboard4.png'
    ]
  }

  const projects = {
    rtgText:
      'Developed a Vehicle-Mounted Terminal (VMT) application for RTG (Rubber-Tyred Gantry) crane and Reach Stacker crane operations in container terminals. The application streamlines container stacking, unstacking, and shifting processes, enhancing efficiency and real-time tracking. Integrated with terminal systems to ensure seamless operation and accurate container handling.',
    hhtText:
      'Developed a handheld application tailored for use in container terminal environments, supporting key operational processes such as discharge, loading, stacking/unstacking, and container shifting. The app was built to streamline field operations and improve real-time container handling efficiency.',
    trlText:
      'Developed a vehicle-mounted terminal (VMT) application to support internal truck operations within container terminals, streamlining the coordination between trucks, RTG cranes, and quay cranes.',
    kpiDashboard:
      'Developed a real-time KPI dashboard application designed for container port operations in BNCT port Terminal-B, inspired by TOPX TOPS-KPI. The dashboard provides operational visibility into terminal activities, including berth, yard, and gate operations. It delivers live metrics and performance indicators for monitoring equipment efficiency, container movements, and terminal throughput.'
  }
  const handleClickItem = (key: any, textProps: any, dataProps: any, imgUrlProps: any) => {
    setindexPageClicked(key)
    setappContent('')
    setappContentName(' ')

    setcontentText(textProps)
    setPageClicked(dataProps)
    setimgUrl(imgUrlProps)

    if (key == ' 0') {
      setappContent('')
    }
  }

  const handleClickProjectApp = (appContentProps: string, textProps: any, dataProps: any, imgProps: any) => {
    setimgUrl(imgProps)

    if (appContentProps == 'app0') {
      setappContent(projects.rtgText)
      setappContentName('VMT - RTG/RS')
    } else if (appContentProps == 'app1') {
      setappContent(projects.hhtText)
      setappContentName('HHT - Berth/Yard')
    } else if (appContentProps == 'app2') {
      setappContent(projects.trlText)
      setappContentName('VMT - Trailer')
    } else if (appContentProps == 'app3') {
      setappContent(projects.kpiDashboard)
      setappContentName('KPI - Dashboard')
    } else {
      setappContent(appContentProps)
      setappContentName(' ')
    }
    setindexPageClicked(1)
    setcontentText(textProps)
    setPageClicked(dataProps)
  }

  const [expanded, setExpanded] = useState<string | false>(false)

  const handleChange = (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false)
  }

  const getTooltipText = (dataProps: string) => {
    let tooltipText = ''
    if (dataProps === 'app0') {
      tooltipText = 'VMT - RTG'
      return tooltipText
    } else if (dataProps === 'app1') {
      tooltipText = 'HHT - HandHeld App'
      return tooltipText
    } else if (dataProps === 'app2') {
      tooltipText = 'VMT - TRAILER'
      return tooltipText
    } else if (dataProps === 'app3') {
      tooltipText = 'KPI - DASHBOARD'
      return tooltipText
    } else {
      tooltipText = 'APP'
      return tooltipText
    }
  }

  const pageRef = useRef<HTMLDivElement | null>(null)

  const handleClickRefFromChild = () => {
    pageRef.current?.click()
    // alert('clicked from child')
  }

  const boxRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    // Trigger click on first render
    boxRef.current?.click()
  }, [])

  return (
    <>
      <Card sx={{ boxShadow: 20, mt: 4, maxHeight: '90vh', overflow: 'auto', borderRadius: 0 }}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={2.5} sm={2} sx={{ minHeight: '90vh' }}>
            <Card
              sx={{
                backgroundImage: `url('/images/pages/paper-texture.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100%',
                justifyContent: 'flex-end'
              }}
            >
              <Grid
                container
                direction='column'
                sx={{
                  mt: 10,
                  // overflow: 'auto',
                  justifyContent: 'flex-end',
                  alignItems: 'center'
                }}
              >
                {' '}
                <Grid item xs={4} md={12} sm={4}>
                  <Box
                    ref={boxRef}
                    onClick={() => handleClickItem(0, textPages.myProfileText, 'My Profile 👨‍💻', imgUrlPages.myProfile)}
                    sx={{
                      cursor: 'pointer',
                      transition: 'transform 0.5s, box-shadow 0.5s', // Smooth transition for transform and box-shadow
                      '&:hover': {
                        transform: 'scale(1.1)' // Zoom effect on hover
                      }
                    }}
                  >
                    <CardHeader
                      // titleTypographyProps={{ sx: { color: '#40576e' } }} // Apply color here
                      titleTypographyProps={{ sx: { color: '#3bb1a7', fontFamily: 'monospace' } }} // Apply color here
                      sx={{ mb: -4 }}
                      title='👨‍💻 My Profile'
                    ></CardHeader>
                    {/* <CardContent>
                  // <Typography>Please make</Typography>
                </CardContent> */}
                  </Box>
                </Grid>
                <Grid item xs={4} md={12} sm={4}>
                  <Accordion
                    sx={{ boxShadow: 'none', backgroundColor: 'transparent' }}
                    expanded={expanded === 'panel1'}
                    onChange={handleChange('panel1')}
                  >
                    <AccordionSummary
                      id='controlled-panel-header-1'
                      aria-controls='controlled-panel-content-1'
                      expandIcon={<Icon icon='mdi:chevron-down' />}
                    >
                      <Box
                        onClick={() =>
                          handleClickItem(1, textPages.workProjectsText, 'Work Projects 🚀', imgUrlPages.myProjects)
                        }
                        sx={{
                          cursor: 'pointer',

                          transition: 'transform 0.5s, box-shadow 0.5s', // Smooth transition for transform and box-shadow

                          '&:hover': {
                            transform: 'scale(1.1)' // Zoom effect on hover
                            // backgroundColor: '#030304'
                          }
                        }}
                      >
                        <CardHeader
                          titleTypographyProps={{ sx: { color: '#3bb1a7', fontFamily: 'monospace' } }} // Apply color here
                          sx={{ mb: -4 }}
                          title='🚀 Work Projects'
                        ></CardHeader>
                      </Box>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Grid container spacing={1}>
                        {Array.from({ length: 4 }).map((_, rowIndex) => {
                          return (
                            <Tooltip key={`${rowIndex} `} title={getTooltipText(`app${rowIndex}`)}>
                              <Grid key={`${rowIndex} `} item xs={4} sx={{ mt: -0.8 }}>
                                <Card
                                  // ref={pageRef}
                                  key={`${rowIndex} `}
                                  sx={{
                                    backgroundImage: `url('/images/pages/app${rowIndex}.png')`,
                                    backgroundSize: 'cover', // Cover the entire card
                                    backgroundPosition: 'center', // Center the image

                                    cursor: 'pointer',
                                    transition: 'transform 0.5s, box-shadow 0.5s',
                                    '&:hover': {
                                      transform: 'scale(1.4)' // Zoom effect on hover
                                      // backgroundColor: '#030304'
                                    },
                                    boxShadow: 20,
                                    borderRadius: 0
                                  }}
                                  // onClick={() => setappContent(`app${rowIndex}`)}
                                  onClick={() =>
                                    handleClickProjectApp(
                                      `app${rowIndex}`,
                                      textPages.workProjectsText,
                                      'Work Projects 🚀',
                                      imgUrlProject[rowIndex]
                                    )
                                  }
                                  style={{
                                    width: '100%',
                                    height: '100%'
                                  }}
                                >
                                  <CardContent>
                                    {/* <Typography variant='body2'>{`(${rows - rowIndex - 1}, ${colIndex})`}</Typography> */}
                                    <Typography sx={{ mt: -3, fontWeight: 'bold' }} variant='body2'>
                                      {/* T: 2 R: {rowIndex + 1} */}
                                    </Typography>
                                  </CardContent>
                                </Card>
                              </Grid>
                            </Tooltip>
                          )
                        })}
                      </Grid>

                      {/* 
                      <Typography>
                        Wafer sesame snaps chocolate bar candy canes halvah. Cupcake sesame snaps sweet tart dessert
                        biscuit. Topping soufflé tart sweet croissant.
                      </Typography> */}
                    </AccordionDetails>
                  </Accordion>
                </Grid>
                <Grid item xs={4} md={12} sm={4}>
                  <Box
                    onClick={() => handleClickItem(2, textPages.stacksText, 'Stacks 🛠️', imgUrlPages.stacks)}
                    sx={{
                      // border: 'solid ',
                      // minWidth: '80px',
                      cursor: 'pointer',
                      // backgroundColor: selectedIndex === index ? '#e6e5e7' : 'transparent',
                      // opacity: 0.8,
                      transition: 'transform 0.5s, box-shadow 0.5s', // Smooth transition for transform and box-shadow

                      '&:hover': {
                        transform: 'scale(1.1)' // Zoom effect on hover
                        // backgroundColor: '#030304'
                      }
                    }}
                  >
                    <CardHeader
                      titleTypographyProps={{ sx: { color: '#3bb1a7', fontFamily: 'monospace' } }} // Apply color here
                      sx={{ mb: -4 }}
                      title='🛠️ Stacks'
                    ></CardHeader>
                  </Box>
                </Grid>
              </Grid>
            </Card>
          </Grid>

          <Grid item xs={12} md={9.5} sm={10}>
            <Contents
              appContent={appContent}
              appContentName={appContentName}
              textContent={contentText}
              dataProps={pageClicked}
              imgUrl={imgUrl}
              indexPageClicked={indexPageClicked}
              // pageRef={handleClickRefFromChild}
            />
          </Grid>
        </Grid>
      </Card>
    </>
  )
}

export default Home
