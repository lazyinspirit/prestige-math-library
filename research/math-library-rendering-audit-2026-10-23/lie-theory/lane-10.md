# Lie Theory rendering audit — lane 10

Reviewed all 107 assigned items and all 154 listed PNG tiles. Each tile was opened individually at original resolution. Current source files and frozen snapshots match all assignment SHA-256 values; local HTML and PNG files match their assignment/capture hashes. Exact per-item and per-tile coverage is recorded in `lane-10.json`.

Confirmed rendering findings: 5. Uncertain editorial candidates: 1.

## thm-engels-triangularization-theorem

- Section: Proof technique banner
- Source lines: 49
- Kind: raw-math-in-technique-banner
- Symptom: The uppercase technique banner visibly prints raw dollar delimiters and the uppercased command `\DIM` instead of typesetting the dimension expression.
- Screenshot: `screenshots/thm-engels-triangularization-theorem--01.png`
- Suggested repair: Keep the intended uppercase banner, but render its math expression independently or replace it with plain prose such as `induction on the dimension of V`.

## thm-malcev-conjugacy-of-levi-subalgebras

- Section: Proof technique banner
- Source lines: 50
- Kind: raw-math-in-technique-banner
- Symptom: The uppercase technique banner visibly prints raw dollar delimiters and uppercased TeX commands rather than typesetting the commutator expression.
- Screenshot: `screenshots/thm-malcev-conjugacy-of-levi-subalgebras--01.png`
- Suggested repair: Keep the intended uppercase banner and render the commutator expression independently, or describe it in plain text.

## ex-serre-relations-for-a-two-recover-sl-three

- Section: Title
- Source lines: 4
- Kind: raw-ascii-math-in-title
- Symptom: The title renders the literal underscores in `A_2` and `sl_3` rather than mathematical subscripts.
- Screenshot: `screenshots/ex-serre-relations-for-a-two-recover-sl-three--01.png`
- Suggested repair: Use rendered math in the title or spell the labels without raw subscript notation.

## fs-right-invariant-fields-identify-t-e-g-with-the-same-bracket-as-left-invariant-fields

- Section: Title
- Source lines: 4
- Kind: raw-ascii-math-in-title
- Symptom: The title renders `T_eG` with a literal underscore; it is intended as the tangent space notation T_eG.
- Screenshot: `screenshots/fs-right-invariant-fields-identify-t-e-g-with-the-same-bracket-as-left-invariant-fields--01.png`
- Suggested repair: Set the tangent-space notation in rendered math or spell out `the tangent space at the identity`.

## lem-hom-to-costandards-counts-verma-flag-factors

- Section: Proof technique banner
- Source lines: 64
- Kind: raw-math-in-technique-banner
- Symptom: The uppercase technique banner visibly prints raw dollar delimiters and uppercased `\DELTA`/`\NABLA` commands in place of the intended Greek-letter notation.
- Screenshot: `screenshots/lem-hom-to-costandards-counts-verma-flag-factors--01.png`
- Suggested repair: Keep the uppercase banner and render the two Greek symbols as math, or describe the orthogonality in plain prose.

## Editorial candidate: ex-classical-root-systems-in-euclidean-coordinates

- Section: Example
- Source lines: 28, 34, 44
- Kind: missing-dynkin-diagram-family
- Rationale: A compact diagram would connect the four coordinate families to the standard classification and make the B/C double edge and D fork visible. The source supplies the root families and simple-root labels, so this can be added without inventing root data.
- Labels and relations to draw/check: Draw indexed families A_{n-1}, B_n, C_n, D_n. Label nodes by the simple roots from line 44; use the standard chain for A, the terminal double bond and orientation for B/C, and the terminal fork for D_n. Treat the separately stated D_2 pair as two disconnected A_1 nodes.
- Screenshot: `screenshots/ex-classical-root-systems-in-euclidean-coordinates--01.png`

Existing diagram coverage: the associated-bundle square in `prop-gauge-transformations-induce-associated-bundle-automorphisms` was viewed; its `P × V` and `E_P` objects, quotient maps, and induced bundle map are present, with no capture-reported TikZ failure. No Scratch markers or raw TikZ source were observed in the reviewed tiles. The MathMarkdown block-link flow commonly places punctuation on a following line; that expected flow is not reported as a defect.

No production-route or publication-state claims were checked.
