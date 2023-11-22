import { OhVueIcon as VIcon } from 'oh-vue-icons'
import { fireEvent, render } from '@testing-library/vue'

import DsfrTableHeaders from './DsfrTableHeaders.vue'

import { spy } from '@tests/unit/test-utils'

describe('DsfrTableHeaders', () => {
  it('should render simple header row', async () => {
    // Given
    const onClick = spy()
    const headers = [
      'Nom',
      'Prenom',
      {
        text: 'Email',
        headerAttrs: {
          onClick,
        },
      },
    ]

    // When
    const { container } = render(DsfrTableHeaders, {
      global: {
        components: {
          VIcon,
        },
      },
      props: {
        headers,
      },
    })

    // Then
    const trEl = container.querySelector('tr')
    const thEls = trEl.querySelectorAll('th')
    const headerEmail = thEls[2]
    await fireEvent.click(headerEmail)
    expect(thEls).toHaveLength(headers.length)
    let i = 0
    for (const header of thEls) {
      // @ts-ignore text will be present
      expect(header).toContainHTML((headers[i]).text || headers[i])
      i++
    }
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
