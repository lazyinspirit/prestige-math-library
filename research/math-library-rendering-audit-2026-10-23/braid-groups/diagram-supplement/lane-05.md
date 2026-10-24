# Diagram supplement — lane 05

Reviewed the bound snapshot and both original local screenshot tiles at original resolution. The snapshot hash matches the current item. The rendered statement, facts, and proof are legible; no existing diagram or rendering defect was observed.

## Potential missing diagram

**`thm-markovs-closed-braid-equivalence-theorem` — snapshot lines 44–49, 55–61, 69–73.** A schematic could clarify how closure, conjugation, and stabilization relate: conjugation stays in `B_n`, while stabilization maps `B_n` to `B_{n+1}` and destabilization reverses that move. It is optional instructional support; the text is already legible, and missing art alone is not a defect.

Any illustration should follow the bound move definition: conjugation is `γβγ⁻¹` in the same group; stabilization is `ι_n(β)·σ_n^{±1}` with the added strand on the right; destabilization runs from `B_{n+1}` to `B_n`. The stated product convention traverses the rightmost factor first, and the inclusion uses target basepoints, so the original parametrized strands are not literally left untouched. Do not conflate braid isotopy, Markov moves, and isotopy of oriented closures. There is no `σ_0`, so stabilization does not apply to the empty braid in `B_0`.

The exact source lines, screenshot paths, bound move definition, and convention checks are recorded in `lane-05.json`.
