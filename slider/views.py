from django.shortcuts import render
from .models import SliderItem


def index(request):
    slides = SliderItem.objects.all()
    return render(request, 'index.html', {'slides': slides})
