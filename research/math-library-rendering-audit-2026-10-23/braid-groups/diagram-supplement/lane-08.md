# Lane 08 — Markov conjugation and stabilization

Reviewed the bound snapshot `snapshots/def-markov-conjugation-and-stabilization-moves.md` (SHA256 `57de584808d5df8e87c75c6246d976448a3bb87ed56e433650a6129a2cde29b0`) and the single listed local screenshot at original resolution (`../screenshots/def-markov-conjugation-and-stabilization-moves--01.png`, SHA256 `f74d14226e4f79f8633064aefeae09edd0af6d70e31c5c7e714e85142a457d10`). The screenshot visibly renders the inclusion, conjugation, stabilization and factor-insertion formulas; it has no diagram, consistent with the receipt's `tikz_count: 0` and empty `diagram_failures`.

## Diagram recommendation

A convention-explicit schematic would help keep the three operations and the factor-insertion warning distinct. Use labeled braid blocks rather than a concrete crossing picture: the source gives arbitrary braids and no fixed word, crossing sequence, or endpoint permutation. A useful figure could show the inclusion and both signed stabilizations in one panel, and the conjugation/stabilization/conjugation sequence for a factorization `beta=uv` in another.

The standard inclusion has direction `iota_n: B_n -> B_(n+1)` and sends each `sigma_i` (`i<n`) to the same-index generator. Geometrically the old braid is expressed at the first `n` target basepoints, and its letters fix the rightmost target point. The source explicitly says the old parametrized strands are not literally untouched because `Q^(n)` and the first `n` points of `Q^(n+1)` differ. A diagram should preserve that caveat rather than simply append a stationary strand to an unchanged drawing.

Conjugation is `beta -> gamma beta gamma^(-1)` within `B_n`; it does not change strand count. Stabilizations go from `B_n` to `B_(n+1)` and are `iota_n(beta) sigma_n` and `iota_n(beta) sigma_n^(-1)`. In either case the new strand is on the right, and the new generator is in the fixed right-factor position. Destabilization reverses this map direction. Since the rightmost factor is traversed first in geometric time, any time-oriented drawing of a product must make its temporal reading agree with the written product convention.

For the source's factorization caveat, the algebra checks as follows:

1. If `beta=uv`, conjugating by `v` gives `v beta v^(-1)=vu`.
2. Right-stabilization gives `(vu) sigma_n^(+/-1)`.
3. Conjugating this by `v^(-1)` gives `v^(-1)[(vu) sigma_n^(+/-1)]v=u sigma_n^(+/-1)v`.

Thus the braid with the generator inserted between `u` and `v` is connected to the fixed right stabilization by Markov moves. It should not be described as cyclic conjugacy: only moving a factor past the whole word is cyclic conjugation. The source's claim is algebraically correct. No particular crossings or endpoint permutations can be checked or asserted without choosing concrete words for `u`, `v`, and `gamma`.

No source-mathematics defect found. This is a targeted diagram review, not a full item or category audit.
