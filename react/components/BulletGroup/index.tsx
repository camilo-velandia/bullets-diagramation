import React, {PropsWithChildren} from 'react'
import { useListContext, ListContextProvider } from 'vtex.list-context'
import {BulletsSchema} from './BulletTypes'
import {useDevice} from 'vtex.device-detector'
import { getBulletsAsTSXList } from './modules/bulletsAsList'
import {useCssHandles} from 'vtex.css-handles';

export interface BulletGroupProps{
  bullets: BulletsSchema
}

const BulletGroup = ({bullets, children}:PropsWithChildren<BulletGroupProps>) => {

  const CSS_HNDLES=["bullet_container"]
  const handles = useCssHandles(CSS_HNDLES)
  const { isMobile } = useDevice()
  const {list} = useListContext() || []
  const bulletsGroup = getBulletsAsTSXList(bullets)
  const newListContextValue = list.concat(bulletsGroup)

  return (
    <ListContextProvider list={newListContextValue}>
      {
        isMobile
        ?
          <div className={handles.bullet_container}>{bulletsGroup}</div>
        :
          children
      }
    </ListContextProvider>
  );
};

export default BulletGroup;
