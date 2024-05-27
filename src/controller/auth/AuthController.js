import supabase from "../../utils/supabase.js";

async function Login(req, res) {
  const { email, password } = req.body;
  try {
    const { data: auth, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;
    res.status(200).json({
      status: true,
      token: auth.session.access_token,
    });
  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
}

async function Register(req, res) {
  const { name, email, password } = req.body;
  try {
    const { data: auth, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        name: name,
      },
    });

    if (error) {
      throw error;
    } else {
      res.status(200).json({
        status: true,
        message: "Sign-up successful. Please verify your email to proceed.",
      });
    }
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}

export { Login, Register };
