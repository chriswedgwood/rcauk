# Generated by Django 2.2.9 on 2020-03-29 11:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0009_auto_20200329_0905'),
    ]

    operations = [
        migrations.AddField(
            model_name='linkpage',
            name='target',
            field=models.TextField(default='_blank'),
        ),
    ]
