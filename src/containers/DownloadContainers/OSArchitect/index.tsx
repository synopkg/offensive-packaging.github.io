import { Grid } from '@mui/material'
import { makeStyles } from '@mui/styles'

import parrotArchitect1 from './assets/parrot-architect-1.png'
import parrotArchitect2 from './assets/parrot-architect-2.png'
import parrotArchitect3 from './assets/parrot-architect-3.png'
import parrotArchitect4 from './assets/parrot-architect-4.png'
import parrotArchitect5 from './assets/parrot-architect-5.png'

import DESection from 'containers/DownloadContainers/DESection'

const useStyles = makeStyles(theme => ({
  desktopEnvironment: {
    marginTop: theme.spacing(8)
  }
}))

const OSArchitect = () => {
  const classes = useStyles()
  return (
    <>
      <Grid container justifyContent="center">
        <DESection
          name="Architect Edition"
          description={
            <>ParrotOS with nothing pre-installed. Install any software and DE with this edition.</>
          }
          className={classes.desktopEnvironment}
          version="5.3 Electro Ara"
          releaseDate="May 1, 2023"
          architecture="all"
          size="378-385 MB"
          screenshots={[
            parrotArchitect1,
            parrotArchitect2,
            parrotArchitect3,
            parrotArchitect4,
            parrotArchitect5
          ]}
          requirements={[
            { heading: 'Processor', description: 'Dual Core CPU' },
            { heading: 'Graphics', description: 'No Graphical Acceleration Required' },
            { heading: 'Memory', description: '1 GB RAM' },
            { heading: 'Storage', description: '16 GB available space' }
          ]}
          features={[
            {
              hero: 'Totally customizable',
              content: [
                {
                  heading: 'Ready for any context.',
                  description: <>Choose which tool to download upon installation.</>
                },
                {
                  heading: '(even) lighter!',
                  description: <>You can customize it as you prefer, with any DE and any tool.</>
                }
              ]
            }
          ]}
          downloadArchitect={{
            arm64: 'https://deb.parrot.sh/parrot/iso/5.3/Parrot-architect-5.3_arm64.iso',
            amd64: 'https://deb.parrot.sh/parrot/iso/5.3/Parrot-architect-5.3_amd64.iso',
            i386: 'https://deb.parrot.sh/parrot/iso/5.3/Parrot-architect-5.3_i386.iso'
          }}
          torrentArchitect={{
            arm64: 'https://deb.parrot.sh/parrot/iso/5.3/Parrot-architect-5.3_arm64.iso.torrent',
            amd64: 'https://deb.parrot.sh/parrot/iso/5.3/Parrot-architect-5.3_amd64.iso.torrent',
            i386: 'https://deb.parrot.sh/parrot/iso/5.3/Parrot-architect-5.3_i386.iso.torrent'
          }}
          allHashes={{ url: 'https://deb.parrot.sh/parrot/iso/5.3/signed-hashes.txt' }}
        />
      </Grid>
    </>
  )
}

export default OSArchitect
