# Inverse Problems rendering audit — lane 09

## Scope and result

Reviewed all 52 assigned items from the frozen local snapshots and local rendered HTML. Opened all 98 assigned screenshot tiles individually at original resolution. Snapshot and HTML hashes match the assignment and frozen manifest. This is a local ItemBody audit; it makes no production route claim.

No confirmed rendering defects were found. In particular, titles and full ItemBody text are present; ASCII math, carets, and underscores in the source render as intended TeX/KaTeX; no raw TeX delimiters or unresolved math are visible; no reference-title leak, Scratch text, or clipping was observed. The standalone-image clipping check was not applicable because the assigned items contain no standalone image content. Link references rendering as separate blocks and line wrapping were treated as intended.

The small source-authored item IDs above titles are optional typography. Technique banners are intentional; none contains exposed raw math. The existing diagrams checked in this lane are mathematically consistent with their adjacent source: the coefficient-coordinate commutative square in `def-ip-gaussian-sequence-inverse-model`, the staged scalar error chain in `def-ip-posterior-computation-error-budget`, and the four-triangle finite-element mesh in `ex-ip-pde-cfl-invalid-iterate`. These are coverage observations, not defects.

## Optional missing-diagram candidate

- **Item and exact source lines:** `thm-ip-pcn-posterior-invariance`, snapshot lines 81–89 and 133–143 (especially lines 137–141).
- **Diagram kind:** Accepted/rejected joint-flow schematic for the Metropolis accept–reject transition.
- **Rationale:** The item proves posterior invariance by splitting the transition flow into a symmetric accepted off-diagonal component and a symmetric rejection component supported on the diagonal, then summing them. The complete argument currently reads as several dense equations and prose steps. A flow schematic may help readers see the measure decomposition.
- **Labels and relations to draw/check:** Show the symmetric reference proposal-pair flow `Λ₀(du,dv)=μ₀(du)Qβ(u,dv)`; the accepted target flow `Z⁻¹ min(w(u),w(v)) Λ₀(du,dv)` with the swap `(u,v)↔(v,u)`; the rejected mass `μ(du)(1−a(u))` on the diagonal `v=u`; and the total `Λβ=Λacc+Λrej`, symmetric under coordinate swap, implying `μ` is invariant. Preserve the item's distinction between reversibility/invariance and stronger claims about convergence or mixing.
- **Classification:** Optional editorial suggestion only. The prose and equations already state the proof; this is not a confirmed error.

## Coverage and hashes

Per-item snapshot/HTML hashes and every viewed tile hash are recorded in [lane-09.json](lane-09.json). The assignment and frozen manifest hashes, renderer metadata, exact item inventory, and tile inventory are included there.
