// main.js - Script unificado para todas as páginas de autenticação
document.addEventListener('DOMContentLoaded', function() {
    
    // Detecta qual formulário está presente na página
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const forgotForm = document.getElementById('forgotForm');
    const recoverForm = document.getElementById('recoverForm');
    
    // Handler para Login
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = this.querySelector('input[type="email"]').value;
            const password = this.querySelector('input[type="password"]').value;
            const remember = this.querySelector('#remember')?.checked || false;
            
            console.log('Login attempt:', { email, remember });
            // TODO: Integração com backend
            // fetch('/api/auth/login', {...})
        });
    }
    
    // Handler para Register
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const passwords = this.querySelectorAll('input[type="password"]');
            const password = passwords[0].value;
            const confirmPassword = passwords[1].value;
            const terms = this.querySelector('#agreeTerms').checked;
            
            if (password !== confirmPassword) {
                alert('As senhas não coincidem!');
                return;
            }
            
            if (!terms) {
                alert('Você precisa aceitar os termos!');
                return;
            }
            
            console.log('Register attempt:', { name, email });
            // TODO: Integração com backend
        });
    }
    
    // Handler para Forgot Password
    if (forgotForm) {
        forgotForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = this.querySelector('input[type="email"]').value;
            
            console.log('Password recovery requested:', email);
            alert('Link de recuperação enviado para: ' + email);
            // TODO: Integração com backend
        });
    }
    
    // Handler para Recover Password
    if (recoverForm) {
        recoverForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const passwords = this.querySelectorAll('input[type="password"]');
            const password = passwords[0].value;
            const confirmPassword = passwords[1].value;
            
            if (password !== confirmPassword) {
                alert('As senhas não coincidem!');
                return;
            }
            
            console.log('Password reset attempt');
            // TODO: Integração com backend
        });
    }
});