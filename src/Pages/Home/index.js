import React, { useState } from 'react'
import { Formik, Form, getIn } from 'formik'

import BotChat from '../../Components/Chats/Bot'
import Navbar from '../../Components/Navbar'

import { BotUser } from '../../Components/Chats/User/index'
import { Rating } from '../../Components/Rating/index'
import { useTheme } from '../../Hooks'

import api from '../../Services/api'

import {
  TextOne,
  TextTwo,
  TextThree,
  TextFour,
  TextFive,
} from '../../Utils/Text/index'
import './styles.css'

import * as Yup from 'yup'

const Home = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [name, setName] = useState('')
  const [city, setCity] = useState('')
  const [birthDay, setbirthDay] = useState(null)
  const [email, setEmail] = useState('')

  const [stepTwo, setStepTwo] = useState(false)
  const [stepThree, setStepThree] = useState(false)
  const [stepFour, setStepFour] = useState(false)
  const [stepFive, setStepFive] = useState(true)
  const { theme } = useTheme()

  const max = new Date().toISOString().split('T')[0].toString()

  const validate = stepFour
    ? Yup.object({
        email: Yup.string()
          .email('Email Inválido')
          .required('Email é Obrigatório'),
      })
    : stepThree
    ? Yup.object({
        birthday: Yup.string().required('Aniversario é Obrigatório'),
      })
    : stepTwo
    ? Yup.object({
        city: Yup.string().required('Cidade é Obrigatório'),
      })
    : Yup.object({
        name: Yup.string().required('Nome é Obrigatório'),
      })

  const data = {
    name,
    city,
    birthDay,
    email,
  }

  function getStyles(errors, fieldName) {
    var input = document.getElementById(fieldName)
    if (getIn(errors, fieldName)) {
      input.classList.add('error')
      return {
        border: `2px solid ${theme.colors.dangerColor}`,
      }
    } else if (input !== null) {
      input.classList.remove('error')
    }
  }

  function getStylesButton(errors, fieldName) {
    if (getIn(errors, fieldName)) {
      return {
        borderLeft: `40px solid ${theme.colors.dangerColor}`,
      }
    }
  }

  const textTwoFormated = TextTwo.replace('NOME', name)

  const handleStep = (values) => {
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
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      setIsLoading(true)
      await api.post('users', data)
    } catch (error) {
      if (error) {
        error.inner.forEach((err) => {
          console.error(err.message)
        })
        return
      }
    } finally {
      setIsLoading(false)
      console.log(data)
      alert('Usuario Cadastrado com Sucesso !')
    }
  }

  return (
    <>
      <Formik
        initialValues={{
          name: '',
          city: '',
          birthday: '',
          email: '',
        }}
        validationSchema={validate}
        onSubmit={(values) => {
          handleStep(values)
        }}
        render={(formProps) => {
          return (
            <>
              <Form className="masterHome">
                <Navbar />
                <div
                  className="chatbox"
                  style={{
                    background: theme.colors.background,
                  }}
                >
                  <div className="chatlogs">
                    <div className="stepOne">
                      <BotChat message={TextOne} />
                      <BotUser
                        id="name"
                        name="name"
                        placeholder="Nome e sobrenome"
                        type="text"
                        style={getStyles(formProps.errors, 'name')}
                      >
                        <button className="invite-button" type="submit">
                          <span
                            style={getStylesButton(formProps.errors, 'name')}
                            className="span-button"
                          />
                        </button>
                      </BotUser>
                    </div>
                    <div className={stepTwo ? 'stepTwo' : 'stepTwo hide'}>
                      <BotChat message={textTwoFormated} />
                      <BotUser
                        id="city"
                        name="city"
                        placeholder="Cidade"
                        type="text"
                        style={getStyles(formProps.errors, 'city')}
                      >
                        <button className="invite-button" type="submit">
                          <span
                            style={getStylesButton(formProps.errors, 'city')}
                            className="span-button"
                          />
                        </button>
                      </BotUser>
                    </div>
                    <div className={stepThree ? 'stepThree' : 'stepThree hide'}>
                      <BotChat message={TextThree} />
                      <BotUser
                        id="birthday"
                        name="birthday"
                        placeholder="00/00/0000"
                        type="date"
                        max={max}
                        style={getStyles(formProps.errors, 'birthday')}
                      >
                        <button className="invite-button" type="submit">
                          <span
                            style={getStylesButton(
                              formProps.errors,
                              'birthday'
                            )}
                            className="span-button"
                          />
                        </button>
                      </BotUser>
                    </div>
                    <div className={stepFour ? 'stepFour' : 'stepFour hide'}>
                      <BotChat message={TextFour} />
                      <BotUser
                        id="email"
                        name="email"
                        type="email"
                        placeholder="E-mail"
                        style={getStyles(formProps.errors, 'email')}
                      >
                        <button className="invite-button" type="submit">
                          <span
                            style={getStylesButton(formProps.errors, 'email')}
                            className="span-button"
                          />
                        </button>
                      </BotUser>
                    </div>
                    <div className={stepFive ? 'stepFive' : 'stepFive hide'}>
                      <BotChat message={TextFive} />
                      <Rating />
                    </div>
                    {isLoading ? (
                      <div
                        onClick={(event) => {
                          handleSubmit(event)
                        }}
                        className={stepFive ? 'saveButton' : 'stepFive hide'}
                      >
                        <div class="loading active">
                          <span class="button__text">Save</span>
                        </div>
                      </div>
                    ) : (
                      <div
                        onClick={(event) => {
                          handleSubmit(event)
                        }}
                        className={stepFive ? 'saveButton' : 'stepFive hide'}
                      >
                        Salvar
                      </div>
                    )}
                  </div>
                </div>
              </Form>
            </>
          )
        }}
      />
    </>
  )
}

export default Home
