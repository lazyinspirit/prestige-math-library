# Homological Algebra rendering audit — lane 05

## Scope and coverage

Read-only review of the frozen assignment snapshots and local HTML/PNG previews. No live website, production route, external image, item edit, publication status, build, or test was involved.

- Items: **110 assigned; 110/110 snapshot hashes and 110/110 local HTML hashes match the frozen assignment.**
- Screenshots: **144 assigned PNG tiles, each opened individually at original resolution.**
- The title and full ItemBody, source math, local HTML, reference titles, Scratch markers, clipping, and diagram content were reviewed for every assigned item.

## Findings

| Item | Finding | Evidence |
|---|---|---|
| `ex-brutal-versus-canonical-truncation` | **Missing rendered title.** The local preview has an empty `<h1></h1>` and starts with the `EXAMPLE` section. The frozen source has no `title` field. | Snapshot lines 1–25; local HTML; tile `screenshots/ex-brutal-versus-canonical-truncation--01.png`. |
| `cex-l-zero-of-a-non-right-exact-functor-need-not-recover-the-functor` | **Literal ASCII math in H1.** The page title prints `L_0` with a raw underscore, unlike the TeX-rendered notation in the body. | Snapshot line 4; tile `screenshots/cex-l-zero-of-a-non-right-exact-functor-need-not-recover-the-functor--01.png`. |

## Out-of-scope source observation

The false-statement source for `fs-a-comparison-map-between-resolutions-is-unique-as-a-chain-map` contains “a > chain map” at snapshot line 26. This is a source text typo, not a LaTeX/TikZ or visual rendering defect, and is excluded from this rendering audit. It is retained with local HTML/tile evidence in the JSON companion.

## Source-supported diagram candidate

`ex-the-two-spectral-sequences-of-a-two-by-two-double-complex` could use a small double-complex grid. Source lines 29 and 41–49 specify four entries `C_{p,q}=k`, the single nonzero horizontal map `h_{1,1}=1_k`, all vertical maps zero, and the different surviving filtration jumps. Draw the square with labels `C_{1,1}, C_{0,1}, C_{1,0}, C_{0,0}`; put the identity on the top horizontal edge and `0` on the other three edges. Annotate column-first survivors at `(0,0),(1,0)`, row-first survivors at `(0,0),(0,1)`, and the degree-one class represented by `C_{1,0}` with `F_0^row H_1=H_1`, `F_0^col H_1=0`, `F_1^col H_1=H_1`. This is an editorial clarity opportunity, not a mathematical defect.

## Other visual checks

No broken TeX/KaTeX, raw math delimiters, Scratch leakage, standalone clipping, or incorrect existing mathematical diagrams were observed. Link references rendered as blocks and punctuation wrapping were not treated as defects. All observations apply only to the assigned local previews.

The JSON companion contains every assigned item and individually viewed PNG path with SHA256 hashes, as well as frozen source/HTML hashes and finding evidence.
