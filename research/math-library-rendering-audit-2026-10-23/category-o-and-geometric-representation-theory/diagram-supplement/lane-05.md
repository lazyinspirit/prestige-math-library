# Diagram supplement — lane 05

Reviewed all 26 assigned frozen items. All bound primary snapshots match the manifest, and all 64 original local revision-2 screenshot tiles match their receipts. Each receipt reports `tikz_count: 0` and no diagram failures, so there are no existing diagrams for mathematical domain, codomain, commutativity, index, sign, orientation, or crossing checks.

**Hash note:** current source hashes match the assignment manifest for 25 of 26 items. `lem-nilpotent-orbit-equivariant-tensor-covariants-extend-and-polarize` changed after the manifest was made (current hash recorded in JSON); this review uses its frozen primary snapshot and original bound screenshot.

## Potential missing diagram

**`lem-type-a-nilpotent-orbit-closures-are-normal-via-chain-varieties` — snapshot lines 48–56.** An oriented vector-space chain could clarify the maps `A_i: U_i → U_{i+1}` and `B_i: U_{i+1} → U_i`, the endomorphism relations at each vertex, and the terminal map `θ = A_{t−1}B_{t−1}`. The candidate is `uncertain` and optional; no proof depends on a diagram and no mathematical error was observed. The JSON records exact source lines, frozen hash, local screenshot path, and checks for domains, codomains, composition order, indices, and the `t=0,1` boundary cases.

No other assigned item warranted a diagram strongly enough to record. Full per-item coverage and evidence are in `lane-05.json`.
