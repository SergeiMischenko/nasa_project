from django.contrib import admin
from django.utils.safestring import mark_safe

from .models import SliderItem
from adminsortable2.admin import SortableAdminMixin


@admin.register(SliderItem)
class SliderItemAdmin(SortableAdminMixin, admin.ModelAdmin):
    list_display = ('title', 'get_image', 'my_order')

    def get_image(self, obj):
        return mark_safe(f'<img src="{obj.image.url}" width="50" height="50">')

    get_image.short_description = 'Изображение'
