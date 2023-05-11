from django.shortcuts import render, redirect
from .models import User

def signup(request):
    if request.method == 'POST':
        name = request.POST['txt']
        email = request.POST['email']
        password = request.POST['pswd']
        user = User(name=name, email=email, password=password)
        user.save()
        return redirect('../login')
    return render(request, 'html/signup.html')

def login(request):
    if request.method == 'POST':
        pass
        
        
    return render(request, 'html/login.html')

