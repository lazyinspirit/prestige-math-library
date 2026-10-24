# Diagram supplement — lane 05

Reviewed the bound snapshot and both listed local screenshot tiles at original resolution. The snapshot hash matches the current item. The rendered statement, facts, and proof are legible; no existing diagram or rendering defect was observed. No live HTTP(S) source was accessed.

## Potential missing diagram

**`thm-internal-external-semidirect-product-equivalence` — snapshot lines 30, 32–36, 62–74.** A compact diagram could show the isomorphism `Φ:N⋊_αH→G`, the unique decomposition `g=nh`, and how the external factor inclusions `n↦(n,1)` and `h↦(1,h)` map to the inclusions of `N` and `H` in `G`. Pairing this with the conjugation action can help make the order convention visible. It is optional instructional support; the prose proof already makes these maps and checks explicit, and missing art alone is not a defect.

The conventions must be `α_h(n)=hnh⁻¹`, `(n,h)(n′,h′)=(nα_h(n′),hh′)`, and `Φ(n,h)=nh`. Then `Φ((n,h)(n′,h′))=nhn′h′=Φ(n,h)Φ(n′,h′)`. `G=NH` gives surjectivity, and `N∩H={1}` gives uniqueness of the factorization. Keep internal subgroups `N,H≤G` distinct from external coordinate factors `N×{1},{1}×H`. No tensor balancing, coset indexing, or naturality assertion is involved.

The source hash, line excerpts, local screenshot paths, and detailed checks are recorded in [lane-05.json](lane-05.json).
