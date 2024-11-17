# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class Airport(models.Model):
    id = models.IntegerField()
    ident = models.CharField(primary_key=True, max_length=40)
    type = models.CharField(max_length=40, blank=True, null=True)
    name = models.CharField(max_length=40, blank=True, null=True)
    latitude_deg = models.FloatField(blank=True, null=True)
    longitude_deg = models.FloatField(blank=True, null=True)
    elevation_ft = models.IntegerField(blank=True, null=True)
    continent = models.CharField(max_length=40, blank=True, null=True)
    iso_country = models.ForeignKey('Country', models.DO_NOTHING, db_column='iso_country', blank=True, null=True)
    iso_region = models.CharField(max_length=40, blank=True, null=True)
    municipality = models.CharField(max_length=40, blank=True, null=True)
    scheduled_service = models.CharField(max_length=40, blank=True, null=True)
    gps_code = models.CharField(max_length=40, blank=True, null=True)
    iata_code = models.CharField(max_length=40, blank=True, null=True)
    local_code = models.CharField(max_length=40, blank=True, null=True)
    home_link = models.CharField(max_length=40, blank=True, null=True)
    wikipedia_link = models.CharField(max_length=40, blank=True, null=True)
    keywords = models.CharField(max_length=40, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'airport'


class AuthGroup(models.Model):
    name = models.CharField(unique=True, max_length=150)

    class Meta:
        managed = False
        db_table = 'auth_group'


class AuthGroupPermissions(models.Model):
    id = models.BigAutoField(primary_key=True)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)
    permission = models.ForeignKey('AuthPermission', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_group_permissions'
        unique_together = (('group', 'permission'),)


class AuthPermission(models.Model):
    name = models.CharField(max_length=255)
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING)
    codename = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'auth_permission'
        unique_together = (('content_type', 'codename'),)


class AuthUser(models.Model):
    password = models.CharField(max_length=128)
    last_login = models.DateTimeField(blank=True, null=True)
    is_superuser = models.IntegerField()
    username = models.CharField(unique=True, max_length=150)
    first_name = models.CharField(max_length=150)
    last_name = models.CharField(max_length=150)
    email = models.CharField(max_length=254)
    is_staff = models.IntegerField()
    is_active = models.IntegerField()
    date_joined = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'auth_user'


class AuthUserGroups(models.Model):
    id = models.BigAutoField(primary_key=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_groups'
        unique_together = (('user', 'group'),)


class AuthUserUserPermissions(models.Model):
    id = models.BigAutoField(primary_key=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    permission = models.ForeignKey(AuthPermission, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_user_permissions'
        unique_together = (('user', 'permission'),)


class Country(models.Model):
    iso_country = models.CharField(primary_key=True, max_length=40)
    name = models.CharField(max_length=40, blank=True, null=True)
    continent = models.CharField(max_length=40, blank=True, null=True)
    wikipedia_link = models.CharField(max_length=40, blank=True, null=True)
    keywords = models.CharField(max_length=40, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'country'


class DjangoAdminLog(models.Model):
    action_time = models.DateTimeField()
    object_id = models.TextField(blank=True, null=True)
    object_repr = models.CharField(max_length=200)
    action_flag = models.PositiveSmallIntegerField()
    change_message = models.TextField()
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING, blank=True, null=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'django_admin_log'


class DjangoContentType(models.Model):
    app_label = models.CharField(max_length=100)
    model = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'django_content_type'
        unique_together = (('app_label', 'model'),)


class DjangoMigrations(models.Model):
    id = models.BigAutoField(primary_key=True)
    app = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    applied = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_migrations'


class DjangoSession(models.Model):
    session_key = models.CharField(primary_key=True, max_length=40)
    session_data = models.TextField()
    expire_date = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_session'


class Game(models.Model):
    id = models.CharField(primary_key=True, max_length=40)
    co2_consumed = models.IntegerField(blank=True, null=True)
    co2_budget = models.IntegerField(blank=True, null=True)
    location = models.ForeignKey(Airport, models.DO_NOTHING, db_column='location', blank=True, null=True)
    screen_name = models.CharField(max_length=40, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'game'


class Goal(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=40, blank=True, null=True)
    description = models.CharField(max_length=200, blank=True, null=True)
    icon = models.CharField(max_length=8, blank=True, null=True)
    target = models.CharField(max_length=40, blank=True, null=True)
    target_minvalue = models.DecimalField(max_digits=8, decimal_places=2, blank=True, null=True)
    target_maxvalue = models.DecimalField(max_digits=8, decimal_places=2, blank=True, null=True)
    target_text = models.CharField(max_length=40, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'goal'


class GoalReached(models.Model):
    game = models.OneToOneField(Game, models.DO_NOTHING, primary_key=True)  # The composite primary key (game_id, goal_id) found, that is not supported. The first column is selected.
    goal = models.ForeignKey(Goal, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'goal_reached'
        unique_together = (('game', 'goal'),)
