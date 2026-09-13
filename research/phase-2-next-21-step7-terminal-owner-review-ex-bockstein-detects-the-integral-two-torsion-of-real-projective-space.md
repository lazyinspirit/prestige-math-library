# Owner-review draft: `ex-bockstein-detects-the-integral-two-torsion-of-real-projective-space`

Disposition: **repair-required**. This is a read-only review draft, not a Step-7 verdict or terminal record.

Terra context: `40f7ba8182de93c3d8be014bbf9681cec424674741172ee53c00127f7d8040a2`. Terra-reviewed item SHA-256: `8b5aeb8044cdc2b2a0cf22a97626b961290e62e5f1f3e9530424c12236a878a4`.

Mathematical basis: The numerical integral and mod-two Bockstein computations in Steps 1.1–3.1 are sound, but A1 says AC is needed *exactly* for F4/F5. F2 (`lem-the-bockstein-is-independent-of-lift-and-cocycle-representative`) is itself stated under AC, and F1’s general Bockstein definition also inherits that hypothesis. A canonical 0/1 lift avoids a new choice only in this local calculation; it does not erase supplier assumptions.

Action: Correct A1 and Step 4.1 to list all AC-bearing suppliers, including F1/F2 if required by their exact statements. Keep the AC-assumed Example and the computed classes.

## Repair applied; pending owner rejudge

Current repaired item SHA-256: `dcb7092303c0edd33db6862b15f380e2c079dcc5e3b306e80e4b41e36dec37db`. Reconciled the AC account with the actual published hypotheses of F1/F2 as well as F4/F5. The concrete zero/one residue lift remains canonical; no theorem claim changed.

Focused precheck and rendercheck passed for the 12-item B/C repair set. Strict proof contracts passed for Batches 2, 5, and 6 with zero errors/warnings; Batch 3 passed with zero errors and one pre-existing unrelated shotgun-bracket warning. No verdict or terminal record is issued by this draft.
