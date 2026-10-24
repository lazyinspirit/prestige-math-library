# Linear Algebra rendering audit — lane 03

Reviewed all 75 assigned items and all 95 screenshot tiles. Each frozen source snapshot and local HTML rendering was checked; every PNG was opened individually at original resolution. Snapshot, HTML, and screenshot hashes match the assignment and capture manifests; exact per-item and per-tile hashes are recorded in `lane-03.json`.

## Confirmed rendering defect

- **cor-endomorphisms-over-an-algebraically-closed-field-have-jordan-form** — proof technique banner, snapshot line 41. The banner renders `\deg\chi_T` as literal TeX instead of typesetting the math. Render the expression there or use a plain-language label.

## Editorial diagram candidates

- **prop-complexification-is-functorial** — snapshot lines 30–32, 40, 50. Optional commutative composition diagram: `V_C → W_C → U_C`, labelled `T_C`, `S_C`, with direct arrow `(S∘T)_C`; check that it equals `S_C∘T_C`.
- **thm-universal-property-and-uniqueness-of-complexification** — snapshot lines 23–28, 44, 48, 52, 56. Optional universal-property triangle `V → V_C`, `V → W`, `V_C → W`, with `F∘ι=f`; the comparison isomorphism clause can show `u∘ι=ι′`. Keep real-linear and complex-linear arrows distinct.
- **thm-quotient-vector-space-universal-property** — snapshot lines 31–33, 39, 43, 49, 51. Optional factorization triangle `V → V/W → U` alongside `f:V→U`, with `f̄∘π=f` and `W⊆ker f`.
- **thm-similarity-is-an-equivalence-relation-and-models-basis-change** — snapshot lines 34–39, 45, 47, 61, 63. Optional basis-change diagram for the same `T:V→V`, with matrices `[T]_B^B=A`, `[T]_C^C=B`, transition matrix `P_{B←C}`, and `B=P^{-1}AP`; check the transition direction and distinguish basis `𝓑` from matrix `B`.

No existing TikZ diagrams occur among the assigned items, so there were no existing diagrams to correct or mathematically inspect. No Scratch or reference-title leaks were observed. Technique banners are intended; only the raw TeX inside the Jordan-form banner was reported.
