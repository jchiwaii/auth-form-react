import React from "react";

const SignInSignUp = () => {
  const [isSignUp, setIsSignUp] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-135 from-blue-950 via blue-900 to blue-800 p-8">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-[10%] left-[15%] w-72 h-72 rounded-full bg-radial from-yellow-400/40 to-transparent blur-3xl animate-pulse-slow"></div>
        <div
          className="absolute bottom-[20%] right-[10%] w-84 h-84 rounded-full bg-radial from-yellow-400/40 to-transparent blur-3xl
          animate-pulse-slow
          animation-delay-2000"
        ></div>
        <div className="absolute top-[45%] left-[50%] w-84 h-84 -translate-x-1/2 rounded-full bg-radial from-yellow-400/40 to-transparent blur-3xl animate-pulse-slow animation-delay-3000"></div>
      </div>
      <div
        className="@container max-w-md w-full p-8 bg-blue-950/30 rounded-2xl
      shadow-[0_20px_50px_rgba(0,_29,_61,_0.7)] backdrop-blur-xl border-blue-800/50 relative animate-fade-in"
      >
        <div className="absolute inset-0 bg-gradient-t-br from-blue-800/20 to-transparent rounded-2xl"></div>
        <div className="relative">
          <h2 className="text-3xl font-extrabold text-center text-yellow-300 mb-2 tracking-tight">
            {isSignUp ? "Create Account" : "Welcome Back!"}
          </h2>
          <p className="text-blue-200 text-center mb-8">
            {isSignUp
              ? "Create an account to get started"
              : "Sign in to continue"}
          </p>
          <form className="mt-8 space-y-5 perspective-1000">
            {isSignUp && (
              <div className="group">
                <input
                  type="text"
                  placeholder="Full name"
                  className="p-4 w-full bg-blue-900/30 rounded-xl border border-blue-700/50 text-white placeholder-blue-300/50 outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-transparent transition-all"
                />
              </div>
            )}
            <div className="group">
              <input
                type="email"
                placeholder="Email address"
                className="p-4 w-full bg-blue-900/30 rounded-xl border border-blue-700/50 text-white placeholder-blue-300/50 outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-transparent transition-all"
              />
            </div>
            <div className="group">
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="p-4 w-full bg-blue-900/30 rounded-xl border border-blue-700/50 text-white placeholder-blue-300/50 outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-transparent transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center text-blue-300/50 hover:text-yellow-400 transition-colors"
                >
                  {showPassword ? (
                    <i className="bx bx-hide text-xl"></i>
                  ) : (
                    <i className="bx bx-show text-xl"></i>
                  )}
                </button>
              </div>
              {!isSignUp && (
                <div className="text-right mt-1">
                  <a
                    href="#"
                    className="text-sm text-yellow-300 hover:text-yellow-400 transition-colors"
                  >
                    Forgot password?
                  </a>
                </div>
              )}
            </div>
            <button className="group w-full p-4 mt-6 bg-gradient-to-r from-yellow-500 to-yellow-400 text-blue-950 rounded-xl font-bold shadow-lg hover:shadow-yellow-400/40 overflow-hidden transform-style-3d transform hover: -translate-y-0.5 hover:scale-104 hover:translate-z-20 transition-all duration-300">
              <span className="relative z-10 pointer-events-auto ">
                {isSignUp ? "Create Account" : "Sign In"}
              </span>
              <span className="inset-0 absolute bg-gradient-to-r from-yellow-500 to-yellow-300 opacity group-hover:opacity-100 transition-opacity pointer-events-auto"></span>
            </button>
          </form>
          <p className="mt-8 text-blue-200/80 text-center">
            {isSignUp ? "Already have an account?" : "Don't have an account?"}
            <span
              className="text-yellow-300 font-bold cursor-pointer hover:text-yellow-400 ml-1 transition-colors"
              onClick={() => setIsSignUp(!isSignUp)}
            >
              {isSignUp ? "Sign In" : "Create Account"}
            </span>
          </p>
          <div className="mt-8 pt-6 border-t border-blue-800/30">
            <p className="text-blue-200/70 text-center text-sm mb-4">
              Or Continue with
            </p>
            <div className="flex justify-center space-x-6">
              <button className="p-3 bg-blue-900/40 rounded-lg hover:bg-blue-800/50 transition-colors text-yellow-400 hover:text-yellow-300">
                <i className="bx bxl-google text-2xl"></i>
              </button>
              <button className="p-3 bg-blue-900/40 rounded-lg hover:bg-blue-800/50 transition-colors text-yellow-400 hover:text-yellow-300">
                <i className="bx bxl-apple text-2xl"></i>
              </button>
              <button className="p-3 bg-blue-900/40 rounded-lg hover:bg-blue-800/50 transition-colors text-yellow-400 hover:text-yellow-300">
                <i className="bx bxl-facebook text-2xl"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInSignUp;
