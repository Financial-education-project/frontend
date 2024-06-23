import './LoginRegister.css';
import BtnDefault from '../../components/BtnDefault/BtnDefault'
import BtnOutline from '../../components/BtnOutline/BtnOutline'
import InputForm from '../../components/InputForm/InputForm';

export default function LoginRegister() {

  return (
    <>
      <main className='container-login-register'>
        <div className='first-card'>
          <div className='first-column rounded-l-lg'>
            <h1>Seja bem-vindo!</h1>
            <p>Faça seu registro para se cadastrar</p>
            <BtnOutline contentText="Cadastra-se" btnPaddingOutline="px-16"/>
          </div>
          
          <div className='second-column rounded-r-lg'>
            <h1>Faça seu login.</h1>
            <p>Coloque seus dados</p>
            <form action="" method="post">
              <div className='inputs-form'>
                <InputForm typeInput="text" PlaceHolder="Usuário"/>
                <InputForm typeInput="password" PlaceHolder="Senha"/>
              </div>

              <div className='btn-form'>
                <BtnDefault contentText="Entrar" btnPaddingDefault="px-24"/>
              </div>
            </form>
          </div>
        </div>
        
        <div className='second-card'>
          <div className='second-column rounded-l-lg'>
            <h1>Seja bem-vindo!</h1>
            <p>Faça seu registro para se cadastrar</p>
            <form action="" method="post">
              <div className='inputs-form'>
                <InputForm typeInput="text" PlaceHolder="Nome completo"/>
                <InputForm typeInput="text" PlaceHolder="Usuário"/>
                <InputForm typeInput="email" PlaceHolder="E-mail"/>
                <InputForm typeInput="password" PlaceHolder="Senha"/>
              </div>

              <div className='btn-form'>
                <BtnDefault contentText="Cadastra-se" btnPaddingDefault="px-24"/>
              </div>
            </form>
          </div>

          <div className='first-column rounded-r-lg'>
            <h1>Já tem uma conta?</h1>
            <p>Clique no link abaixo e faça seu login</p>
            <BtnOutline contentText="Login" btnPaddingOutline="px-16"/>
          </div>
        </div>
      </main>
    </>
  )
}