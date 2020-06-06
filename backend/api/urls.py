from django.urls import path
from .views import (
    ListToDo,
    DetailToDo,
)

urlpatterns = [
    path('', ListToDo.as_view()),
    path('<int:pk>/', DetailToDo.as_view()),
]