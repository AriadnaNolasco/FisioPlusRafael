from rest_framework import serializers
from django.contrib.auth.models import User
import re

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ('username', 'email', 'password')

    def validate_email(self, value):
        if not re.match(r'^[\w\.-]+@tecsup\.edu\.pe$', value):
            raise serializers.ValidationError("Solo se permiten correos con dominio @tecsup.edu.pe")
        return value

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password']
        )
        return user
