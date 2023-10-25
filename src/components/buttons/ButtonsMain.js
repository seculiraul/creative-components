import List from '../lists/List'
import PrimaryButton from './PrimaryButton'
import SecondaryButton from './SecondayButton'
import SimpleButton from './SimpleButton'

const ButtonsMain = () => {
  return (
    <List>
      <PrimaryButton />
      <SecondaryButton />
      <SimpleButton colorStart={'fuchsia-200'} colorHover={'fuchsia-300'} />
    </List>
  )
}

export default ButtonsMain
