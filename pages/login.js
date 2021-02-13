import MainLayout from 'layout/main/MainLayout'

import MockPage from 'components/mock'

const LoginPage = () => {
    return (
        <MainLayout title='Войти в аккаунт'>
            <MockPage title='Войти в аккаунт' />
        </MainLayout>
    )
}

export default LoginPage