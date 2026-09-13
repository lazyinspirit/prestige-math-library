# Owner-review draft: `thm-the-primary-obstruction-class-is-independent-of-cellular-choices`

Disposition: **repair-required**. This is a read-only review draft, not a Step-7 verdict or terminal record.

Terra context: `4db04b50e017c7570aada0b62c69e9be4f5d6e209bf1e731a781d967c1ca1f25`. Terra-reviewed item SHA-256: `f0b1f77905b9a4a170a08d2863052bacc802bae6b8ad6768cfaaaa60cb9c8f0b`.

Mathematical basis: Step 1.1 says old whisker followed by reverse of new is a loop at the chosen coordinate. For whiskers u,v from attaching basepoint a to coordinate c and left-to-right concatenation, u*v^{-1} is a loop at a; the coordinate loop comparing T_u and T_v is v^{-1}*u (old relative to new), or u^{-1}*v for the inverse direction. The present sentence has both basepoint and order wrong.

Action: Correct the loop orientation and write the transport equation, e.g. T_u=T_{v^{-1}*u} T_v. Keep the existing cochain-coordinate invariance conclusion and prism calculation.

## Repair applied; pending owner rejudge

Current repaired item SHA-256: `da793921274fd373ccb28979f87c6dbe1f1a396723a8d852ad844c0cef2ce524`. Corrected the coordinate comparison loop to reverse(old)*new and wrote the typed transport equation after applying f, distinguishing it from the loop based at the attaching point.

Focused precheck and rendercheck passed for the 12-item B/C repair set. Strict proof contracts passed for Batches 2, 5, and 6 with zero errors/warnings; Batch 3 passed with zero errors and one pre-existing unrelated shotgun-bracket warning. No verdict or terminal record is issued by this draft.
