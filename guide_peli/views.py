from django.shortcuts import render

def main(request):
	return render(request, 'main.html')

def try_(request):
	return render(request, 'try.html')