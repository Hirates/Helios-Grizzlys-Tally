
/*    +-----------------------------------------------------------------------+    */
/*    |    Do not edit this file directly.                                    |    */
/*    |    It was copied by redundancyJS.                                     |    */
/*    |    To modify it, first edit the source file (see redundancy.json).    |    */
/*    |    Then, run "npx redundancyjs" in the terminal.                      |    */
/*    +-----------------------------------------------------------------------+    */

/* do not edit */ export interface ListenerClientConnect {
/* do not edit */     deviceId: string;
/* do not edit */     internalId: string;
/* do not edit */     listenerType: string;
/* do not edit */
/* do not edit */     canBeReassigned?: boolean;
/* do not edit */     canBeFlashed?: boolean;
/* do not edit */     supportsChat?: boolean;
/* do not edit */     reassign?: boolean;
/* do not edit */     flash?: boolean;
/* do not edit */     chat?: boolean;
/* do not edit */ }