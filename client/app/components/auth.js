var React = require('react');
var PropTypes = require('react').PropTypes;
var styleable = require('react-styleable').default;
var css = require('../styles/question.css')

function Auth(props) {
  return (
    <div className={props.css.root}>
      <div className={props.css.form}>
        <form onSubmit={props.onSubmit} path={props.pathname}>
          <div>
            <input
              label='username'
              className={props.css.input}
              type='text'
              name='username'
              placeholder='username'
              onChange={props.onUpdateUsername}
              />
          </div>
          <div>
            <input
              label='password'
              className={props.css.input}
              type='text'
              name='password'
              placeholder='password'
              onChange={props.onUpdatePassword}
              />
          </div>
          <button className={props.css.submit} type='submit'>{props.text}</button>
        </form>
      </div>
    </div>
  )
};

module.exports = styleable(css)(Auth);
