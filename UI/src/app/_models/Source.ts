
/*    +-----------------------------------------------------------------------+    */
/*    |    Do not edit this file directly.                                    |    */
/*    |    It was copied by redundancyJS.                                     |    */
/*    |    To modify it, first edit the source file (see redundancy.json).    |    */
/*    |    Then, run "npx redundancyjs" in the terminal.                      |    */
/*    +-----------------------------------------------------------------------+    */

/* do not edit */ export interface Source {
/* do not edit */     name: string;
/* do not edit */     connected: boolean;
/* do not edit */     enabled: boolean;
/* do not edit */     id: string;
/* do not edit */     reconnect: boolean;
/* do not edit */     sourceTypeId: string;
/* do not edit */     data: Record<string, any>;
/* do not edit */     reconnect_interval: number;
/* do not edit */     max_reconnects: number;
/* do not edit */
/* do not edit */     // Volatile
/* do not edit */ 	cloudClientId?: any;
/* do not edit */     cloudConnection?: boolean;
/* do not edit */     sourceTypeName?: string;
/* do not edit */ }