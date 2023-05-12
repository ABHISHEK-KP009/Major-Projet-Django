from django.shortcuts import render, redirect
from .models import User

def signup(request):
    if request.method == 'POST':
        name = request.POST['txt']
        email = request.POST['email']
        password = request.POST['pswd']
        user = User(name=name, email=email, password=password)
        user.save()
        return redirect('../my_login')
    return render(request, 'html/signup.html')

def my_login(request):
    if request.method == 'POST':
        return redirect('../question1')
    return render(request, 'html/my_login.html')

from django.contrib.auth import authenticate, login
from django.shortcuts import render, redirect

def login_view(request):
    if request.method == 'POST':
        email = request.POST['email']
        password = request.POST['pswd']
        user = authenticate(request, email=email, password=password)
        if user is not None:
            login(request, user)
            return redirect('../my_login')
        else:
            error_message = 'Invalid email or password. Please try again.'
    else:
        error_message = ''
    return render(request, 'html/my_login.html', {'error_message': error_message})

def question1(request):
    if request.method == 'POST':
        pass
    return render(request, 'html/question1.html')