# Homological Algebra rendering audit — lane 04

Reviewed 110 assigned items and all 147 screenshot tiles. Each local PNG was opened individually with `tools.view_image` at original resolution. Source, local HTML preview, and screenshot hashes match their assignment/manifests. No recorded KaTeX or diagram failures.

## Confirmed findings

### `cex-isomorphic-associated-graded-objects-need-not-give-isomorphic-filtered-objects`

- Sections: Statement refuted, Facts & Assumptions, Counterexample
- Source lines: 31, 35, 45
- Kind: Raw inline math
- Symptom: Expressions including `A=ℤ/4`, `B=(ℤ/2)²`, and `p<0` have no TeX delimiters and display as plain text, unlike nearby typeset formulas.
- Screenshot: `screenshots/cex-isomorphic-associated-graded-objects-need-not-give-isomorphic-filtered-objects--01.png`
- Suggested repair: Wrap those mathematical expressions in inline TeX delimiters.

### `fs-brutal-and-canonical-truncation-are-the-same` and `fs-two-roofs-are-equal-whenever-their-right-hand-arrows-are-equal`

- Section: title/front matter; source front matter has `id` and `kind` but no `title` field.
- Symptom: Both local previews have an empty `<h1>` while their full statement bodies render.
- Screenshots: `screenshots/fs-brutal-and-canonical-truncation-are-the-same--01.png`; `screenshots/fs-two-roofs-are-equal-whenever-their-right-hand-arrows-are-equal--01.png`
- Suggested repair: Add a source title for each item.

## Source-supported diagram candidate

### `prop-a-map-of-exact-couples-induces-a-map-of-spectral-sequences`

- Source lines: 29, 43, 45, 47, 49
- Candidate: A commutative diagram for a map of exact couples and its induced map of derived couples.
- Draw the source and tilded target D/E terms with arrows `i`, `j`, `k`; vertical `u`, `v`; and the derived terms with restriction `u′` and quotient-induced `v′`. Include the page differential `jk` and preserve the bidegree changes stated in the proof.
- This is an editorial candidate; the prose and formulas show no confirmed mathematical defect.

## Existing diagram check

The pushout matrix in `def-functorial-one-step-generator-extension` (line 31) renders correctly: its coproducts, maps, and pushout target agree with the definition. The cohomology connecting-morphism square also renders legibly. No malformed TikZ or existing diagram math issue was found.

The remaining reviewed titles and ItemBodies showed no reference-title leak, raw Scratch content, or standalone screenshot clipping. Block-form reference links wrap intentionally.
