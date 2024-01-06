import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://jfofpbbhpdlehxgylwme.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impmb2ZwYmJocGRsZWh4Z3lsd21lIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc4ODM4ODQsImV4cCI6MjAxMzQ1OTg4NH0.dXMDstE_eYmg-nPvN-UmE49Pdu6GO9yIgP_ZpRIAKvQ";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
