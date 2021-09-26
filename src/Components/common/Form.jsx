import "./form.scss";

export const Form = (props) => (
  <form
    className="form"
    onSubmit={(event) => {
      event.preventDefault();
      props.onSubmit();
      // rest of your code goes here...
    }}
    action={null}
  >
    {props.children}
  </form>
);

export const TextInput = (props) => (
  <div className="text-input">
    <label
      className={props.focus || props.value !== "" ? "label-focus" : ""}
      htmlFor={props.name}
    >
      {props.label}
    </label>
    <input
      className={props.focus || props.value !== "" ? "input-focus" : ""}
      type={props.type || "text"}
      name={props.name}
      value={props.value}
      onChange={props.onChange}
      onInput={props.onInput}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
      required
    />
  </div>
);

export const TextArea = (props) => (
  <div className="text-area">
    <label
      className={props.focus || props.value !== "" ? "label-focus" : ""}
      htmlFor={props.name}
    >
      {props.label}
    </label>
    <textarea
      className={props.focus || props.value !== "" ? "input-focus" : ""}
      name={props.name}
      value={props.value}
      onChange={props.onChange}
      onInput={props.onInput}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
      required
    />
  </div>
);

export const Button = (props) => (
  <button className="button" type="submit">
    {props.children}
  </button>
);
