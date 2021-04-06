import React, { useState } from 'react'
import { Formik, Form } from 'formik'
import BotIcon from '../../Assets/botIcon.PNG'
import BotChat from '../../Components/Chats/Bot'
import { BotUser } from '../../Components/Chats/User/index'
import { Rating } from '../../Components/Rating/index'

import {
  TextOne,
  TextTwo,
  TextThree,
  TextFour,
  TextFive,
} from '../../Utils/Text/index'
// import { useCount } from '../../Hooks'
import './styles.css'

import * as Yup from 'yup'

const Home = () => {
  const validate = Yup.object({
    name: Yup.string().required('Nome é Obrigatório'),
  })
  const [name, setName] = useState('')
  const [city, setCity] = useState('')
  const [birthDay, setbirthDay] = useState(null)
  const [email, setEmail] = useState('')

  const [stepTwo, setStepTwo] = useState(false)
  const [stepThree, setStepThree] = useState(false)
  const [stepFour, setStepFour] = useState(false)
  const [stepFive, setStepFive] = useState(false)

  const data = {
    name,
    city,
    birthDay,
    email,
  }

  const textTwoFormated = TextTwo.replace('NOME', name)

  const handleSubmit = (values) => {
    window.scrollTo(0, document.querySelector('.chatlogs').scrollHeight)
    try {
      if (values.name.length !== 0) {
        setName(values.name)
        setStepTwo(true)
      }
      if (values.city.length !== 0) {
        setCity(values.city)
        setStepThree(true)
      }
      if (values.birthday.length !== 0) {
        setbirthDay(values.birthday)
        setStepFour(true)
      }
      if (values.email.length !== 0) {
        setEmail(values.email)
        setStepFive(true)
      }
    } catch (err) {
      console.error(err)
    } finally {
      console.log(data)
    }
  }
  return (
    <Formik
      initialValues={{
        name: '',
        city: '',
        birthday: '',
        email: '',
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        handleSubmit(values)
      }}
    >
      {(formik) => (
        <Form>
          <div className="chatbox">
            <div className="chatlogs">
              <div className="stepOne">
                <BotChat src={BotIcon} message={TextOne} />
                <BotUser name="name" placeholder="Nome e sobrenome" type="text">
                  <button className="invite-button" type="submit">
                    <span className="span-button" />
                  </button>
                </BotUser>
              </div>
              <div className={stepTwo ? 'stepTwo' : 'stepTwo hide'}>
                <BotChat src={BotIcon} message={textTwoFormated} />
                <BotUser name="city" placeholder="Cidade" type="text">
                  <button className="invite-button" type="submit">
                    <span className="span-button" />
                  </button>
                </BotUser>
              </div>
              <div className={stepThree ? 'stepThree' : 'stepThree hide'}>
                <BotChat src={BotIcon} message={TextThree} />
                <BotUser name="birthday" placeholder="00/00/0000" type="date">
                  <button className="invite-button" type="submit">
                    <span className="span-button" />
                  </button>
                </BotUser>
              </div>
              <div className={stepFour ? 'stepFour' : 'stepFour hide'}>
                <BotChat src={BotIcon} message={TextFour} />
                <BotUser name="email" type="text" placeholder="E-mail">
                  <button className="invite-button" type="submit">
                    <span className="span-button" />
                  </button>
                </BotUser>
              </div>
              <div className={stepFive ? 'stepFive' : 'stepFive hide'}>
                <BotChat src={BotIcon} message={TextFive} />
                <Rating />
              </div>
              <div
                onClick={() => {
                  console.log('GG')
                  console.log(data)
                }}
                className={stepFive ? 'saveButton' : 'stepFive hide'}
              >
                Salvar
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default Home
