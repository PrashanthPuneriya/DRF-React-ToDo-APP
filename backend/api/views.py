from django.shortcuts import render

from rest_framework import generics
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import ToDo
from .serializers import ToDoSerializer

class ListToDo(generics.ListCreateAPIView):
    queryset = ToDo.objects.all()
    print(queryset)
    serializer_class = ToDoSerializer
    print(serializer_class)
# class ListToDo(APIView):
#     def get(self, request):
#         qs = ToDo.objects.all()
#         serializer = ToDoSerializer(qs, many=True)
#         return Response(data=serializer.data, status=201)
#     def post(self, request):
#         serializer = ToDoSerializer(data=request.data)
#         # print(request)
#         if(serializer.is_valid):
#             serializer.save()
#             return Response(data=serializer.data, status=201)
#         return Response(None, status=400)
#     def delete(self, request):
#         ToDo.objects.all().delete()
#         return Response(data=None, status=204)

class DetailToDo(generics.RetrieveUpdateDestroyAPIView):
    queryset = ToDo.objects.all()
    serializer_class = ToDoSerializer
