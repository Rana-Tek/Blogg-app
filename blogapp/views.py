from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .serializers import PostSerializer
from .models import Post
# Create your views here.


class PostModelViewSet(ModelViewSet):
    serializer_class = PostSerializer
    query = Post.objects.all()[:6]
    
    
