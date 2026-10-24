# Algebraic topology rendering audit — lane 06

Reviewed all 92 assigned items and all 153 revision-2 PNG tiles individually at original resolution. Titles, rendered body sections, and internal reference titles were checked.

Confirmed findings: 7. Clean items: 87.

## `lem-external-evaluation-detects-tensor-square-operations` — Statement

- Source: `items/lem-external-evaluation-detects-tensor-square-operations.md` lines 36.
- Screenshot: `screenshots/lem-external-evaluation-detects-tensor-square-operations--01.png`.
- Symptom: The displayed statement prints formula notation as ordinary text, including raw carets, underscores, and an unformatted product and map, rather than typeset mathematics.
- Suggested repair: Wrap the mathematical expressions in valid inline or display math delimiters so the statement renders as mathematics.

## `lem-finite-thom-classifying-detector-map-exists-and-is-continuous` — Statement

- Source: `items/lem-finite-thom-classifying-detector-map-exists-and-is-continuous.md` lines 37.
- Screenshot: `screenshots/lem-finite-thom-classifying-detector-map-exists-and-is-continuous--01.png`.
- Symptom: The statement displays raw formula syntax and underscores inline with prose (for example B_d, r+d_b, and f_r:T_r→P_r) instead of typeset math.
- Suggested repair: Put the formula notation in valid LaTeX math delimiters throughout the statement.

## `lem-finite-thom-classifying-detector-map-exists-and-is-continuous` — Proof

- Source: `items/lem-finite-thom-classifying-detector-map-exists-and-is-continuous.md` lines 53.
- Screenshot: `screenshots/lem-finite-thom-classifying-detector-map-exists-and-is-continuous--01.png`.
- Symptom: Most mathematical notation in the proof step is rendered as literal baseline characters, including underscores and arrow notation.
- Suggested repair: Wrap the inline formulas in valid LaTeX math delimiters so subscripts, arrows, and symbols are typeset.

## `lem-graded-c-n-modules-equivalent-to-ungraded-c-n-1-modules` — Title

- Source: `items/lem-graded-c-n-modules-equivalent-to-ungraded-c-n-1-modules.md` lines 4.
- Screenshot: `screenshots/lem-graded-c-n-modules-equivalent-to-ungraded-c-n-1-modules--01.png`.
- Symptom: The item title visibly prints literal underscores in C_n and C_(n−1).
- Suggested repair: Format the Clifford algebra symbols as math in the rendered title, or spell them out in plain text.

## `lem-rational-first-hurewicz-after-killing-lower-torsion-homotopy` — Statement

- Source: `items/lem-rational-first-hurewicz-after-killing-lower-torsion-homotopy.md` lines 46.
- Screenshot: `screenshots/lem-rational-first-hurewicz-after-killing-lower-torsion-homotopy--01.png`.
- Symptom: The statement's formulas appear as ordinary text, with raw subscripts and tensor/map notation rather than typeset mathematics.
- Suggested repair: Wrap the mathematical expressions in valid inline math delimiters.

## `lem-rational-first-hurewicz-after-killing-lower-torsion-homotopy` — Proof

- Source: `items/lem-rational-first-hurewicz-after-killing-lower-torsion-homotopy.md` lines 64.
- Screenshot: `screenshots/lem-rational-first-hurewicz-after-killing-lower-torsion-homotopy--02.png`.
- Symptom: The proof step prints subscripts and group notation as raw baseline text (such as Y_2, Y_j, and π_i), not typeset mathematical expressions.
- Suggested repair: Wrap the inline mathematical notation in valid math delimiters so subscripts and symbols render correctly.

## `thm-serre-finiteness-transfer-for-simply-connected-base-and-fiber` — Proof technique

- Source: `items/thm-serre-finiteness-transfer-for-simply-connected-base-and-fiber.md` lines 48.
- Screenshot: `screenshots/thm-serre-finiteness-transfer-for-simply-connected-base-and-fiber--01.png`.
- Symptom: The proof-technique label visibly includes literal dollar delimiters around E_2.
- Suggested repair: Remove the dollar characters or encode the formula using the renderer's supported math markup.
