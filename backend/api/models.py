from django.db import models

class ToDo(models.Model):
    # user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    due_date = models.DateField()
    
    class Meta:
        verbose_name = 'todo'
        verbose_name_plural = 'todos'

    def __str__(self):
        return self.name