"use server";

import { createClient } from "@/utils/supabase/server";
import { Database } from "@/database.types";

type ExampleTable =
  Database["public"]["Tables"]["example_table_that_does_not_exist"]["Row"];

/**
 * EXAMPLE ONLY! This is just the pattern we will use to fetch data from the database.
 * Once we create the first real table, remove this file and replace it with the real one.
 */
export async function getExampleTable(
  id: string
): Promise<ExampleTable | null> {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("example_table_that_does_not_exist")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      console.error("Error fetching example table:", error);
      return null;
    }

    return data;
  } catch (error) {
    console.error("Unexpected error fetching example table:", error);
    return null;
  }
}
