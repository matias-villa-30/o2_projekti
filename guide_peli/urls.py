from django.urls import path
from . import views

urlpatterns = [
    path('', views.main, name="main"),
    path('main.html', views.main, name="main"),

]