# Algebraic Topology rendering audit — lane 02

Reviewed 92 assigned items and all revision-2 screenshot tiles listed in their manifests.

## Confirmed findings

### `ex-adem-relation-sq-one-sq-one-equals-zero` — Title

- Source line 4: `title: The relation Sq^1Sq^1=0`
- Symptom: The rendered title displays the caret exponent notation literally as “Sq^1Sq^1=0” instead of typesetting the exponents.
- Suggested repair: Use superscript characters in the title or a title-safe math rendering form.
- Screenshot: `screenshots/ex-adem-relation-sq-one-sq-one-equals-zero--01.png`

### `ex-rational-hurewicz-range-for-the-four-sphere` — Example

- Source line 33: `both π_i(S⁴)⊗Q and H_i(S⁴;Q)`
- Symptom: The statement shows the subscript markup `_i` literally in the rendered mathematical notation.
- Suggested repair: Wrap these expressions in math delimiters or use typographic subscripts consistently.
- Screenshot: `screenshots/ex-rational-hurewicz-range-for-the-four-sphere--01.png`

### `lem-finite-products-and-comparison-cones-have-finite-type` — Statement

- Source line 45: `every H_n(Y;Z) is finitely generated and H^*(Y;F)=F in degree zero only ... 0→coker(H_nX→H_nZ)→H_n(Cone(C_*(f;Z)))`
- Symptom: The statement renders formula notation as ordinary text, leaving carets and underscores literal throughout the homology and cone expressions.
- Suggested repair: Set the mathematical expressions in the statement in inline math delimiters.
- Screenshot: `screenshots/lem-finite-products-and-comparison-cones-have-finite-type--01.png`

### `lem-rationalization-is-exact-and-commutes-with-singular-homology` — Statement

- Source line 36: `A⊗Q=0 iff A is torsion. ... H_j(Y;Z)⊗Q≅H_j(Y;Q)`
- Symptom: The statement leaves subscript markup `_j` literal and shows the equations as untypeset body text.
- Suggested repair: Wrap the equations and indexed homology groups in inline math delimiters.
- Screenshot: `screenshots/lem-rationalization-is-exact-and-commutes-with-singular-homology--01.png`

### `thm-difference-cochains-classify-homotopies-of-extensions-in-the-stable-stage` — Proof

- Source line 61: `[F3]`
- Symptom: A standalone `[F3]` reference marker is rendered on its own line after the preceding displayed equation, before proof step 2.1.
- Suggested repair: Remove the redundant standalone marker or incorporate the reference into the preceding sentence.
- Screenshot: `screenshots/thm-difference-cochains-classify-homotopies-of-extensions-in-the-stable-stage--02.png`

## Coverage notes

All 92 assignment IDs are present in `lane-02.json`; every listed revision-2 screenshot tile is recorded in the corresponding coverage row. Full item sections, internal reference titles, proofs/facts/remarks/scratch, and TikZ content when present were reviewed from the rendered tiles at original resolution.
