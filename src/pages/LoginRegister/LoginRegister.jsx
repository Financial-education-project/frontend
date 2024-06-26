import './LoginRegister.css';
import BtnDefault from '../../components/BtnDefault/BtnDefault'
import BtnOutline from '../../components/BtnOutline/BtnOutline'
import InputForm from '../../components/InputForm/InputForm';

export default function LoginRegister() {

  return (
    <>
      {/* Login e register ALL */}
      <main className='container-login-register'>
        {/* login e register inner */}
        <div className="card-inner">
          {/* Login */}
          <div className='first-card'>
            <div className='first-column card-first-column'>
              <h1>Seja bem-vindo!</h1>
              <p>Faça seu registro para se cadastrar</p>
              <BtnOutline contentText="Cadastra-se" btnPaddingOutline="px-16"/>
            </div>
            
            <div className='second-column card-second-column'>
              <h1>Faça seu login.</h1>
              <p>Coloque seus dados</p>
              <form action="" method="post">
                <div className='inputs-form'>
                  <InputForm typeInput="text" idInput="userLogin" PlaceHolder="Usuário"/>
                  <InputForm typeInput="password" idInput="passwordLogin" PlaceHolder="Senha"/>
                </div>

                <div className='btn-form'>
                  <BtnDefault contentText="Entrar" btnPaddingDefault="px-24"/>
                </div>
              </form>
            </div>
          </div>
          
          {/* Register */}
          <div className='second-card'>
            <div className='second-column card-first-column'>
              <h1>Seja bem-vindo!</h1>
              <p>Faça seu registro para se cadastrar</p>
              <form action="" method="post">
                <div className='inputs-form'>
                  <InputForm typeInput="text" idInput="nameRegister" PlaceHolder="Nome completo"/>
                  <InputForm typeInput="text" idInput="userRegister" PlaceHolder="Usuário"/>
                  <InputForm typeInput="email" idInput="emailRegister" PlaceHolder="E-mail"/>
                  <InputForm typeInput="password" idInput="passwordRegister" PlaceHolder="Senha"/>
                </div>

                <div className='btn-form'>
                  <BtnDefault contentText="Cadastra-se" btnPaddingDefault="px-24"/>
                </div>
              </form>
            </div>

            <div className='first-column card-second-column'>
              <h1>Já tem uma conta?</h1>
              <p>Clique no link abaixo e faça seu login</p>
              <BtnOutline contentText="Login" btnPaddingOutline="px-16"/>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}