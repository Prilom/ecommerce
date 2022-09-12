from nturl2path import url2pathname
from django.urls import path
from .views import ListCategoryView

urlpatterns = [
    path('categories', ListCategoryView.as_view()),
]

