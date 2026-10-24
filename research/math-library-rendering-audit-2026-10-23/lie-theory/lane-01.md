# Lie Theory visual audit — lane 01

## Scope and coverage

Visually reviewed all 108 assigned items, checking each title and every rendered body section against the frozen snapshot and listed local HTML. Opened all 160 assigned PNG tiles individually at original resolution. The item and tile ledger includes exact source, snapshot, local HTML, receipt, and PNG SHA256 hashes: [lane-01.json](lane-01.json). All assigned digests match; the receipts are capture revision 2. No live route or production page was reviewed.

The local capture receipts report 4,913 KaTeX expressions, no KaTeX errors, no TikZ captures, and no diagram failures. I found three confirmed instances of raw TeX in Proof technique banners. No raw wiki references, Scratch text, or clipped content was confirmed.

## Findings

- **Raw TeX in technique label:** `cex-whitehead-vanishing-does-not-apply-to-the-nilpotent-radical`, frozen source line 45, prints `$H^0$` and `$H^1$` literally in its uppercase technique banner. Math-free wording or math rendering in the label will fix it. See [tile](screenshots/cex-whitehead-vanishing-does-not-apply-to-the-nilpotent-radical--01.png).
- **Raw TeX in technique label:** `lem-tensoring-with-a-finite-dimensional-module-preserves-verma-flags`, line 76, prints `\mathfrak b` and surrounding dollar delimiters literally. See [tile](screenshots/lem-tensoring-with-a-finite-dimensional-module-preserves-verma-flags--01.png).
- **Raw TeX in technique label:** `prop-projective-covers-in-o-are-indecomposable-and-unique`, line 62, prints `$P$` literally. See [tile](screenshots/prop-projective-covers-in-o-are-indecomposable-and-unique--01.png).

## Source-supported diagram candidates

These are editorial candidates, not confirmed defects; the existing mathematical content is coherent and no proof relies on a diagram.

- `ex-sign-cancellation-in-an-a2-bruhat-diamond`, lines 39–53: draw the two stated Bruhat diamonds, with vertices `s1s2, s1, s2, e` and `w0, s1s2, s2s1, s1`; direct cover arrows downward, symbolically labeled signs `ε(x,y)`. Mark that path composites are the same canonical inclusion and total signs are opposite, yielding cancellation. The source specifies these relations but no individual sign assignment.
- `ex-the-a2-bgg-resolution-with-six-verma-summands`, lines 29–45: show levels `C0={e}`, `C1={s1,s2}`, `C2={s1s2,s2s1}`, `C3={w0}`, with all eight source-listed cover arrows labelled symbolically by `ε(x,y)ι_{x→y}`. Mark rank-two square cancellation without implying a specific sign choice or using the drawing to establish exactness.
- `ex-a2-weyl-denominator-expansion`, lines 35–49: show the six A2 Weyl translates `ρ, α2, α1, −α1, −α2, −ρ` on a hexagonal orbit, labelled by `1,s1,s2,s1s2,s2s1,w0` and signs `+,-,-,+,+,-`. Optionally pair this with the source’s two cancelling unit contributions from the eight-subset expansion.

Only the three raw technique labels are reported as findings. Exact excerpts, classifications, screenshots, hashes, and candidate source lines are in the JSON ledger.
