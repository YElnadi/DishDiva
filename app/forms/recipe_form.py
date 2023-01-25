from flask_wtf import FlaskForm
from wtforms import StringField, TextField, SubmitField, IntegerField
from wtforms.validators import DataRequired


class RecipeForm(FlaskForm):
  title = StringField('Title', validators=[DataRequired()])
  image_url = TextField('Recipe Image URL')
  description = TextField('Description', validators=[DataRequired()] )
  preparation = TextField('Preparation', validators=[DataRequired()])
  servings = IntegerField('Servings',  validators=[DataRequired()])
  user_id = IntegerField('User Id')
  submit = SubmitField('Submit')