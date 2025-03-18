export type Json =
  | string
  | number
  | boolean
  | { [key: string]: Json | undefined }
  | Json[]
  | null;

// This is where we keep schema info. Once we create the first real table remove the example one, it is purely to show how we store this information.
// If you add a new table, just delete the example table.
export interface Database {
  public: {
    Tables: {
      example_table_that_does_not_exist: {
        Row: {
          id: string;
          name: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          created_at?: string;
        };
        Update: {
          name?: string;
          created_at?: string;
        };
      };
    };
  };
}
