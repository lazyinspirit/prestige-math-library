# Statistical Models and Experiments rendering audit — lane 05

Reviewed all 52 assigned items and all 87 receipt-listed screenshot tiles. Every PNG was opened individually with `tools.view_image` at original resolution; no collage or downscaled view was used. For each item, I compared the frozen title and complete ItemBody with its rendered local HTML and screenshot tiles, including reference titles, formulas, and any diagram content.

All current source hashes match `assignment-05.json`; each frozen snapshot is byte-identical to its current source; all HTML hashes match the assignment; and all 87 tile hashes match their per-item screenshot manifests. The capture records have zero KaTeX errors and zero TikZ diagrams or diagram failures.

## Confirmed rendering findings

1. **`thm-order-two-field-variogram-is-conditionally-negative-definite`** — Proof, source line 76. The aligned equation is inside a prose line. The tile shows it as a centered display between the lead-in at the left and the explanation resumed to its right/below, breaking the sentence order. The identity itself is correct. Put the aligned expression in its own paragraph and continue the explanatory prose after it. Screenshot: `screenshots/thm-order-two-field-variogram-is-conditionally-negative-definite--01.png`.
2. **`thm-reduced-second-factorial-moment-palm-identity`** — Proof, source line 64. The cases definition is inside a prose line and renders as a centered display in the middle of the sentence, separating the lead-in from the measurability explanation. The branches match the stated construction. Move the cases expression to its own paragraph and continue the explanation afterward. Screenshot: `screenshots/thm-reduced-second-factorial-moment-palm-identity--01.png`.

## Optional diagram candidate

- **`def-simple-markovian-mediation-scm`**, source lines 42–47. The defining equations give the DAG edges `L→A`, `L→M`, `L→Y`, `A→M`, `A→Y`, and `M→Y`; independent exogenous inputs `U_L,U_A,U_M,U_Y` enter the corresponding equations. A small DAG can clarify recursive order and the no additional common cause restriction. If exogenous nodes are shown, keep them independent and add no unmentioned causes. This is an editorial candidate; no existing diagram is missing from a proof. Screenshot: `screenshots/def-simple-markovian-mediation-scm--01.png`.

## Coverage

All assigned source IDs and per-item tile paths, SHA-256 values, PNG dimensions, and individual-open attestations are recorded in `lane-05.json`. The report is limited to local frozen previews and source correspondence; it does not certify proofs or inspect a live site.
