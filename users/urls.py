from django.urls import path
from . import views

urlpatterns = [
    path('signup/', views.signup, name='signup'),
    path('my_login/', views.my_login, name='my_login'),
    path('question1/', views.question1, name='question1'),
]
