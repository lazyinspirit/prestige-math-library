# Functional Analysis visual audit — lane 06

## Scope and coverage

Reviewed all 94 assigned items, their frozen titles and full ItemBody content, plus all 169 assigned screenshot tiles individually at original resolution. Source, snapshot, HTML, assignment, and tile SHA256 values match throughout; exact hashes and per-item section/tile coverage are recorded in [lane-06.json](lane-06.json). No unreviewed items or tiles remain. No HTTP or live website access occurred.

## Confirmed rendering defects

The coordinator re-opened the original-resolution `thm-stone-one-parameter-unitary-groups--01.png` tile and confirmed that the initial “S” is present; the preliminary clipping observation was withdrawn.

- Linked reference titles expose raw or malformed math in local rendered text. Confirmed examples include `\mathcal B(X,Y)` in five assigned items (`def-hilbert-schmidt-operator`, `ex-bounded-operators-form-a-noncommutative-banach-algebra`, `lem-eberlein-smulian-countable-compactness-closes-in-the-bidual`, `thm-minimal-c-star-unitization`, `thm-weakly-convergent-sequences-are-norm-bounded`); literal `\inf`, `\in`, and `\operatorname` in `lem-generalized-eigenspace-trace-decomposition`; `\to` in `thm-atkinson`; and malformed formula text in `def-kuratowski-distance-map` and `def-square-summable-family-on-an-arbitrary-index-set`. Tile paths, hashes, exact source titles, and linked occurrence locations are in the JSON findings.

CSS uppercase technique banners and wikilinks displayed as separate block lines are expected. Plain ASCII notation in reference titles (for example `X^*`) was kept separate as an optional typography matter and not counted as a confirmed defect.

## Diagrams

No assigned item contains an existing TikZ diagram; all 94 capture receipts report `tikz_count: 0` and no diagram failures, so there are no existing maps, orientations, indices, or signs to verify. Two optional, source-backed candidates are recorded: a contour/eigenspace illustration for `ex-riesz-projection-for-a-matrix-with-separated-spectrum`, and an operator factorization/projection diagram for `thm-bounded-left-inverse-iff-range-is-complemented`. Both are editorial suggestions rather than confirmed omissions.

## Limitations

This review covers the frozen local HTML and captured tiles only; it does not establish behavior on a live production site.


Coordinator normalization note: grouped reference-title observations are expanded to item-specific rows, each tied to the assigned consumer source line, rendered local anchor label and screenshot. No new visual claims were added.
