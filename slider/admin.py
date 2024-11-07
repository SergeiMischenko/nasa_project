from django.contrib import admin
from django.utils.html import format_html
from easy_thumbnails.files import get_thumbnailer

from .models import SliderItem
from adminsortable2.admin import SortableAdminMixin


@admin.register(SliderItem)
class SliderItemAdmin(SortableAdminMixin, admin.ModelAdmin):
    list_display = ('title', 'get_image', 'my_order')

    def get_image(self, obj):
        options = {'size': (50, 50), 'crop': True,}
        thumbnail_url = get_thumbnailer(obj.image).get_thumbnail(options).url
        return format_html(f'<a href="{obj.image.url}" target="_blank"><img src="{thumbnail_url}"/>', )

    get_image.short_description = 'Изображение'
