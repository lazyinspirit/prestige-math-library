# Algebraic Geometry rendering audit — lane 04

Reviewed 111 assigned items and all 218 listed revision-2 screenshot tiles at original resolution.

Confirmed findings: 11 across 11 items.

## lem-ample-divisor-positive-intersection-on-smooth-projective-surface

- Section: Proof technique
- Source lines: 95
- Symptom: The proof-technique label is rendered as uppercase prose and exposes literal `$H$`, `$D$`, and `\mathcal` markup instead of typeset mathematics.
- Screenshot: screenshots/lem-ample-divisor-positive-intersection-on-smooth-projective-surface--03.png

## lem-arith-group-model-with-abelian-generic-fibre-quasiprojective

- Section: Proof technique
- Source lines: 59
- Symptom: The proof-technique label visibly prints `$\mathcal O(D)$` and `$H$` literally rather than rendering them as mathematics.
- Screenshot: screenshots/lem-arith-group-model-with-abelian-generic-fibre-quasiprojective--02.png

## lem-arith-theta-extension-splitting-and-isotropic-descent

- Section: Proof technique
- Source lines: 66
- Symptom: The proof-technique label visibly prints the `$\mathbf G_m$` delimiters and command rather than typesetting the group.
- Screenshot: screenshots/lem-arith-theta-extension-splitting-and-isotropic-descent--02.png

## ex-root-groups-and-bruhat-cells-for-sl2

- Section: Title and Statement
- Source lines: 4, 31
- Symptom: The item heading and an internal-reference title display literal `_2` subscripts instead of formatted mathematical notation.
- Screenshot: screenshots/ex-root-groups-and-bruhat-cells-for-sl2--01.png

## ex-upper-triangular-unipotent-groups

- Section: Title and Statement
- Source lines: 4, 33
- Symptom: The title and internal-reference title show literal `_2` and `_n` subscripts.
- Screenshot: screenshots/ex-upper-triangular-unipotent-groups--01.png

## ex-standard-parabolics-in-gl-n

- Section: Title
- Source lines: 4
- Symptom: The item heading prints the literal `_n` subscript.
- Screenshot: screenshots/ex-standard-parabolics-in-gl-n--01.png

## lem-classical-affine-closed-points-are-maximal-ideals

- Section: Facts & Assumptions
- Source lines: 36
- Symptom: The rendered internal-reference title reads “Evaluation at a point has kernel (x_1-a_1, …, x_n-a_n)” with literal underscores in the linked title.
- Screenshot: screenshots/lem-classical-affine-closed-points-are-maximal-ideals--01.png

## lem-semisimple-borel-root-factorization

- Section: Facts & Assumptions
- Source lines: 90
- Symptom: The rendered internal-reference title “The root sl_2 triple” exposes a literal underscore and subscript.
- Screenshot: screenshots/lem-semisimple-borel-root-factorization--01.png

## prop-module-generated-by-a-primitive-vector

- Section: Facts & Assumptions
- Source lines: 54
- Symptom: The rendered internal-reference title “Structure of SL_2 and root coordinates” shows a literal underscore subscript.
- Screenshot: screenshots/prop-module-generated-by-a-primitive-vector--01.png

## thm-minimal-parabolic-flag-projection-is-p1-bundle

- Section: Statement
- Source lines: 46
- Symptom: The linked item title is displayed as “Projective orbit constructions for G/B and G/P_alpha”, leaving `_alpha` literal.
- Screenshot: screenshots/thm-minimal-parabolic-flag-projection-is-p1-bundle--01.png

## lem-positive-conormal-degree-of-a-fibre-divisor

- Section: Remarks
- Source lines: 86, 87
- Symptom: The rendered remarks contain plain-text formula notation `d_i/e_i` and `O_Z`, with literal underscores and no mathematical formatting.
- Screenshot: screenshots/lem-positive-conormal-degree-of-a-fibre-divisor--03.png
