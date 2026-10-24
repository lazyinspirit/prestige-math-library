# Linear Algebra rendering audit — lane 10

Reviewed all 74 assigned item titles and complete ItemBodies and opened all 95 assigned PNG tiles individually at original resolution. Item, HTML, and tile hashes match the frozen assignment and capture receipts. Exact item and tile coverage, hashes, crop offsets, and dimensions are recorded in [lane-10.json](lane-10.json). Review used frozen local snapshots and rendered HTML only; no live website, HTTP(S), item/app edits, publication-status changes, builds, tests, or gates.

## Confirmed rendering defect

- **thm-spectral-mapping-for-polynomials**, source line 57: the proof-technique banner shows literal `$N$` after uppercasing the source phrase `induction on $n$`; the formula is not typeset in this banner. The same math notation renders in the statement and proof body. See `thm-spectral-mapping-for-polynomials--02.png`.

All other assigned titles and bodies showed TeX/KaTeX math rendered, no literal ASCII math/carets/underscores used as untypeset notation, no raw TikZ, Scratch or source-title leak, and no standalone-tile clipping defect. Citation links render as blocks by design; punctuation wrapping around them was not counted as a defect. All 95 tiles were viewed; every item’s captures have gapless coverage. KaTeX error and diagram-failure counts are zero.

## Diagram review

No existing source-authored diagrams occur in the assigned bodies, so there were no diagram labels or mathematical relations to verify. One editorial candidate is supported by `thm-change-of-basis-matrices-are-inverses`, source lines 32–39: a commutative coordinate-change square with `V` across the top, `id_V`, coordinate maps to `F^n`, and bottom arrow `P_{C←B}` would illustrate `[v]_C = P_{C←B}[v]_B`; the reverse arrow `P_{B←C}` and both composites can be labeled by `I_n`. This is optional; the formulas render and the proof already establishes both inverse identities.
