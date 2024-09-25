
import dynamic from "next/dynamic";

export function EmailForm({
  register,
  handleSubmit,
  onSubmit,
  isValid,
  isDirty,
  onClick,
}) {

  return (
    <form
      id="emailForm"
      className="flex flex-col w-full gap-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <label
          htmlFor="emailInput"
          className="text-[.75rem] font-bold float-left mb-2"
        >
          Email address
        </label>
        {isDirty && !isValid && (
          <span className="text-vermellion font-bold text-[.75rem] float-right">
            Valid email required
          </span>
        )}
        <input
          id="emailInput"
          type="text"
          placeholder="email@company.com"
          autoComplete="email"
          className={`form-input flex flex-col border justify-center w-full h-[3.5rem] pl-6 rounded-lg cursor-pointer ${
            isDirty && !isValid 
              ? " border-[#FF6155] bg-[#ff615526] text-[#FF6155] "
              : " border-[#19182b40] bg-white "
          }`}
          {...register("email", {
            required: true,
            minLength: 5,
            maxLength: 100,
            pattern:
              /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i,
          })}
        />
      </div>
      <input
        type="submit"
        value="Subscribe to monthly newsletter"
        onClick={onClick}
        className={`flex flex-col justify-center align-middle text-white h-[3.5rem] font-bold rounded-lg ${(!isDirty || !isValid) ? "bg-darkNavy cursor-not-allowed hover:none" : 
            " bg-gradient-to-bl from-[#FF6A3A] to-[#FF527B] cursor-pointer hover:shadow-3xl "
        }`}
      >
      </input>
    </form>
  );
}

export default dynamic (() => Promise.resolve(EmailForm), {ssr: false})
