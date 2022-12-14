# Generated by Django 4.0.4 on 2022-08-12 16:01

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0012_remove_place_cat_remove_place_loc_remove_place_pur1_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('cat_tag', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Location',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('loc_tag', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Purpose1',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('pur_tag', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Purpose2',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('pur_tag', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Place',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('place', models.CharField(max_length=200)),
                ('info', models.TextField()),
                ('address', models.TextField()),
                ('open', models.TextField(blank=True, null=True)),
                ('number', models.TextField(blank=True, null=True)),
                ('sns', models.TextField(blank=True, null=True)),
                ('image', models.TextField(blank=True, null=True)),
                ('lat', models.TextField(blank=True, null=True)),
                ('lng', models.TextField(blank=True, null=True)),
                ('cat', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backend.category')),
                ('loc', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backend.location')),
                ('pur1', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='backend.purpose1')),
                ('pur2', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='backend.purpose2')),
            ],
        ),
    ]
