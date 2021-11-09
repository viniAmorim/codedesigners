import h from 'hyperscript';
import helpers from 'hyperscript-helpers';

const { button, a } = helpers(h);

const Button = button({id:'meu-btn'}, 'Meu Botão');
export const Link = a({id:'meu-link'}, 'Meu Link');
export const BtnCircle = button({id:'btn-circle'}, 'Circle');

export default Button;
