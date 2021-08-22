import React from 'react'
import { useHistory } from 'react-router-dom'
import { cx } from 'emotion'
import useForm from '../../hooks/useForm'
import Stack from '../../components/Stack'
import Fieldset from '../../components/Form/Fieldset'
import Select from '../../components/Form/Select'
import Radio from '../../components/Form/Radio'
import { FIELDSET_DATA, SELECT_ARR } from '../../utils/constants'

function Filters() {
  const history = useHistory()
  const { state, handleChange, handleSubmit } = useForm()

  return (
    <form onSubmit={handleSubmit}>
      <Stack gaps={[0, 20, 20, 40]}>
        <Fieldset legend="필터링">
          <Select id="filter" value={state.filter} onChange={handleChange}>
            {SELECT_ARR.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </Select>
        </Fieldset>
        {FIELDSET_DATA.map((fieldData) => (
          <Fieldset legend={fieldData.title} key={fieldData.title}>
            <Stack gaps={[0, 20, 20]} direction="horizontal">
              {fieldData.raido.map((radio) => (
                <Radio
                  key={radio.id}
                  id={radio.id}
                  name={fieldData.name}
                  value={radio.value}
                  checked={state[fieldData.name] === radio.value}
                  onChange={handleChange}
                  label={radio.label}
                />
              ))}
            </Stack>
          </Fieldset>
        ))}
        <Stack gaps={[0, 10]} direction="horizontal">
          <button
            type="button"
            className={cx([styles.button, styles.cancel])}
            onClick={() => history.goBack()}
          >
            취소
          </button>
          <button type="submit" className={cx([styles.button, styles.submit])}>
            확인
          </button>
        </Stack>
      </Stack>
    </form>
  )
}

const styles = {
  button: 'w-20 font-bold py-2 px-4 rounded-full',
  cancel:
    'border border-blue-500 hover:border-blue-700 text-blue-500 hover:text-blue-700',
  submit: 'bg-blue-500 hover:bg-blue-700 text-white'
}

export default Filters
