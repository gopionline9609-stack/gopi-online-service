import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

// Supabase Project URL
const SUPABASE_URL = "https://nbzabsvrijqknizicvdd.supabase.co";

// Supabase Anon/Public Key
const SUPABASE_ANON_KEY = "sb_publishable_IcjzRT43tm5KJkNnQLVCJg_YLNifUJd";

export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);