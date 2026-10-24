# Round 02 diagram review: lane 04

## `ex-blowup-of-a-smooth-point`

**Finding:** diagram opportunity warranted; **classification:** uncertain/editorial. The bound snapshot hash is `15cb7714d10df28311bc38a5e4e803bf154a52738babb219c81e7a9d7aedfc94`, matching the assignment's current source hash.

The exact source claims are in lines 43–59. Lines 45–46 define `π: S' = Bl_p S → S` and `E = π⁻¹(p)`. Lines 48–50 give the two standard affine charts `Spec A[y/x]` and `Spec A[x/y]`, glued with `T=y/x` and `U=x/y=T⁻¹`. Lines 51–55 state `E≅P¹_k`, `O_E(E)≅O_{P¹_k}(-1)`, and that π contracts E. Line 57 states π is an isomorphism over `S\{p}`. Lines 52 and 56 qualify `E·E=-1` and the one-step factorization by projectivity of S.

A diagram would connect the chart gluing to the geometry of the exceptional curve and to the contraction map. It can show `π:S'→S`, with `E⊂S'` mapping to `p∈S`, and mark the restriction `S'\E ≅ S\{p}`. Beside it, show the two charts with coordinates `T=y/x` and `U=x/y`, glued on their invertible-coordinate loci by `U=T⁻¹`. Their exceptional pieces are affine lines glued by the same reciprocal transition to `P¹_k`. Label its normal bundle `O_E(E)≅O_{P¹}(-1)`; annotate `E²=-1` only when `S` is projective over k.

Checks: arrows point from the blowup S' to S, and E maps to p. The overlap transition is reciprocal, with coordinate labels consistent across charts. The point's k-rationality is needed for `E≅P¹_k`. The normal bundle statement is under the stated setup; the self-intersection assertion retains its projectivity hypothesis and negative sign. No composition or sign conventions otherwise arise. No independent mathematical error was found; the picture must remain explanatory and cannot replace the proof.

All three listed local tiles were viewed at original resolution. Tile 01 shows the statement, tile 02 the chart verification, and tile 03 the contraction and remarks; none contains a diagram. The receipt reports `tikz_count: 0` and no diagram failures. Tile hashes and receipt hash are recorded in `lane-04.json`.
