from django.db import models
from filer.fields.image import FilerImageField


class SliderItem(models.Model):
    title = models.CharField(max_length=100, verbose_name="Название")
    image = FilerImageField(related_name="slider_images", on_delete=models.CASCADE, verbose_name="Изображение")
    my_order = models.PositiveIntegerField(default=0, blank=False, null=False, db_index=True, verbose_name="Порядок")

    class Meta:
        ordering = ['my_order']
        verbose_name = "Слайд"
        verbose_name_plural = "Слайды"

    def __str__(self):
        return self.title
