
/*    +-----------------------------------------------------------------------+    */
/*    |    Do not edit this file directly.                                    |    */
/*    |    It was copied by redundancyJS.                                     |    */
/*    |    To modify it, first edit the source file (see redundancy.json).    |    */
/*    |    Then, run "npx redundancyjs" in the terminal.                      |    */
/*    +-----------------------------------------------------------------------+    */

/* do not edit */ export interface DeviceSource {
/* do not edit */     address: string;
/* do not edit */     deviceId: string;
/* do not edit */     id: string;
/* do not edit */     sourceId: string;
/* do not edit */ 	bus: string;
/* do not edit */     rename: boolean;
/* do not edit */     reconnect_interval: number;
/* do not edit */     max_reconnects: number;
/* do not edit */     
/* do not edit */     // Volatile
/* do not edit */ 	cloudConnection?: any;
/* do not edit */ 	cloudClientId?: any;
/* do not edit */     sourceIdx?: number;
/* do not edit */ }