# Generated by Django 2.2.6 on 2019-11-11 19:40

from django.db import migrations
import django_extensions.db.fields


class Migration(migrations.Migration):

    dependencies = [
        ('meetings', '0003_meeting_day_number'),
    ]

    operations = [
        migrations.AddField(
            model_name='meeting',
            name='slug',
            field=django_extensions.db.fields.AutoSlugField(blank=True, editable=False, populate_from='title'),
        ),
    ]
