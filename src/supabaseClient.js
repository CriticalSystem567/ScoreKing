import { createClient } from "@supabase/supabase-js";
const SUPABASE_URL = "https://hbsshniezcdsmwkbidzz.supabase.co";
const SUPABASE_KEY = "sb_publishable_wxgXoNcuKtrn9CWDLxI-bA_sV8L9i2s";
export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
