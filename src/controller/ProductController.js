import supabase from "../utils/supabase.js"

async function ProductGet(req, res) {
  const {data: product, error} = await supabase.from("product").select()

  res.status(200).json(product)
}

export {ProductGet};
