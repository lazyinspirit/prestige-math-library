# Braid Groups rendering audit — lane 04

Reviewed 45 assigned items and all 107 listed revision-2 screenshot tiles at original resolution.
Clean: 42; findings: 3.

## Confirmed findings

1. **def-khovanov-seidel-beta-and-gamma-bimodule-maps** — Title, snapshot line 4. The title displays the literal underscores in β_i and γ_i instead of subscripted indices. Suggested repair: Use Unicode subscript characters (βᵢ and γᵢ) in the title, or another title-safe subscript form.
2. **ex-a-positive-crossing-factorization-complex** — Verification, snapshot line 73. The proof-technique label displays the dollar delimiters around w literally. Suggested repair: Use plain text “potential w” in the proof-technique label, or a renderer-supported math form for this field.
3. **lem-planar-configuration-spaces-have-vanishing-pi-two-by-simultaneous-induction** — Proof, snapshot line 62. The proof-technique label displays the dollar delimiters around n literally. Suggested repair: Use plain text “induction on n” in the proof-technique label, or a renderer-supported math form for this field.

All other assigned items were visually clean across their rendered sections.
