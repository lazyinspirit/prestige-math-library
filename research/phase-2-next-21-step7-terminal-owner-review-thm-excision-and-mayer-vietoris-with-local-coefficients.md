# Owner-review draft: `thm-excision-and-mayer-vietoris-with-local-coefficients`

Disposition: **repair-required**. This is a read-only review draft, not a Step-7 verdict or terminal record.

Terra context: `0697e0aaa7bb08c4692dfd85548900b3cf226ad16695e580d8b6a06c15c79f59`. Terra-reviewed item SHA-256: `c6e0cb177d659b56989450d9c4da7ddda563a1d009ca5e07548bd10cd187c713`.

Mathematical basis: Step 1.1 proves only that each finite chain becomes small after some chain-dependent number of subdivisions. It does not produce a single power S^k sending the entire unbounded singular chain complex into the small subcomplex, nor a chain-homotopy inverse. Steps 2.1/2.2 assert chain-homotopy equivalence, and Step 2.3 dualizes it to cochains, without constructing the necessary global compatible operator. F4’s ordinary theorems do not by themselves provide this local-coefficient operator.

Action: Replace the uniform-power claim by a valid simplexwise/acyclic-carrier small-chain comparison with compatible face choices and an explicit chain homotopy inverse; show it respects local transports. Prove the dual cochain equivalence from that actual homotopy equivalence, then derive excision and Mayer–Vietoris.

## Repair applied; pending owner rejudge

Current repaired item SHA-256: `b8a25abf024c9667e5e001ae2d3105f7e823eae7b78f85639410f50638eea1a5`. Adapted Hatcher Prop. 2.21 precisely: least per-simplex m, D_m=ΣTS^i and corrected ρσ=S^mσ+D_m∂σ−D∂σ. Proved ρι=1, ιρ chain-homotopic to 1, local-transport compatibility, and relative/cochain dualization.

Focused precheck and rendercheck passed for the 12-item B/C repair set. Strict proof contracts passed for Batches 2, 5, and 6 with zero errors/warnings; Batch 3 passed with zero errors and one pre-existing unrelated shotgun-bracket warning. No verdict or terminal record is issued by this draft.
