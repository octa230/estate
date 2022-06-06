import email
from email import message
from unicodedata import name
from rest_framework.response import Response
from django.shortcuts import render
from rest_framework import permissions
from rest_framework.views import APIView
from .models import Contact
from django.core.mail import send_mail



class ContactCreateView(APIView):
    permission_classes = (permissions.AllowAny, )

    def post(self, request, format=None):
        data = self.request.data

        try:
            send_mail(
                data['subject'],
                'Name: '
                + data['name']
                + '\nEmail: '
                + data['email']
                +'\n\nMessage:\n'
                + data['message'],
                'defaultxn@gmail.com',
                ['defaultxn@gmail.com'],
                fail_silently=False
            )

            contact = Contact(name=data['name'], email=data['email'], subject=data['subject'], message=data['message'])
            contact.save()

            return Response({'success': 'Message sent successfully'})

        except:
            return Response({'error': 'Message failed to send'})

