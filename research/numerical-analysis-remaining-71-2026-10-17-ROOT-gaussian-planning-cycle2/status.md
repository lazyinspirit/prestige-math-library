# Gaussian escalation — second/final repair-cycle addendum

Status: **not resolved in full**. The full real construction and both-field inverse-moment/tail construction remain sound research proofs in cycle1, but the richer specialist complex expected-error target still lacks a complete local product or alternative proof. No canonical/runtime controls, manifests, old reports, hashes, gates or tests were changed/run. This addendum preserves cycle1 evidence and does not confer native proof/review credit.

## Target retained

Keep A∈F^{m×n}, F=R or C, k≥2,p≥2,ℓ=k+p≤min(m,n), and standard real or normalized complex Gaussian Ω according to the field. The exact specialist expected-error target remains

E||A−QQ*A||₂≤(1+√(k/(p−1)))σ_{k+1}+(e√(k+p)/p)(Σ_{j>k}σ_j²)^{1/2}.

Do not narrow the field, inflate the constants, replace spectral error by Frobenius error, or call this an open problem merely because this planning proof is incomplete.

## Complete parts retained

Cycle1 `proof.md` §§1–4 prove almost-sure full row rank; exact real E||G†||_F²=k/(p−1), exact normalized-complex E||G†||_F²=k/p; and explicit all-subcritical spectral moment bounds from the row Schur complement plus invariant-sphere averaging. The convenient spectral mean bound e√ℓ/p follows in each field, with real t^{-p} / complex t^{-2p} sufficient integrable tails. No Wishart eigenvalue normalization is imported. Cycle1 §§5–6 prove the exact real Gaussian product estimate and complete real expectation assembly. The conditional complex assembly in `assembly-addendum-1.md` remains ready if a sharp complex product supplier is supplied.

## Sources actually acquired/read in this cycle

- B. Khaoulani, *A Gordon-Chevet type Inequality*, arXiv:math/9201231, https://arxiv.org/pdf/math/9201231. Full nine-page paper read. Its Theorem 1 uses real x∈R^n and independent canonical R^d Gaussian copies. Its vector-valued Theorem 2 requires equality of pointwise laws and the covariance-operator bound ||E(X_t⊗X_s−Y_t⊗Y_s)||≤(1/2)E|g_t−g_s|². The complete interpolation proof was read. This gives no automatic complex extension: realifying circular complex Gx introduces a skew J component in cross-covariances; its norm is not bounded by the real-index increment needed here. Replacing it by its absolute value produces a factor loss, not the exact target. Consequently this source was not credited as a complex supplier.
- Guédon–Souli, *An extension of a theorem of Chevet*, arXiv:2607.09311v1, https://arxiv.org/pdf/2607.09311. Fetched full PDF; read introduction/definitions/main-result statements through p.6. It concerns real Gaussian max/projection functionals, not the required complex scaled matrix product. No proof from it is consumed.
- *Injective norm of real and complex random tensors I*, arXiv:2404.03627, https://arxiv.org/pdf/2404.03627. Fetched and searched its extracted text for Gaussian comparison/operator-matrix passages; this is only a search, not a full paper read. No usable complex product proof was found or credited.
- The separately assigned complex helper reported its complete Davidson–Szarek acquisition and visually read relevant pp.39–44, including the explicit real scope and stated complex-case obstacle. That is the helper's reading, not a reading claim by this reviewer. Its exact evidence lives in `research/numerical-analysis-remaining-71-2026-10-17-ROOT-complex-gaussian-supplier-cycle2/`.

The downloaded PDFs/extracted texts are included here only as acquisition evidence. No source citation is being used in place of a local proof.

## Focused alternative-route findings

1. Frobenius-only product control gives E||Σ₂Ω₂Ω₁†||₂≤||Σ₂||_F√(k/p) in the complex field. This cannot yield the approved separate leading σ and tail-Frobenius coefficients uniformly in p. The target tail coefficient scales like √k/p when k≫p, while the Frobenius bound scales like √k/√p.
2. Triangle realification of G=(X+iY)/√2 loses √2 in a Chevet-type estimate. The improvement √(k/p) versus √(k/(p−1)) supplies only a factor √(p/(p−1)) in the leading coefficient. For arbitrarily large p it cannot absorb a fixed √2 loss. A tail-Frobenius margin likewise cannot uniformly repair this leading loss for low stable-rank tails. Therefore this is not a justified proof by spare inverse moment.
3. Integer trace moments of a diagonally scaled complex Gaussian have fewer Wick pairings than the analogous real trace moments, all with nonnegative weights after SVD. That observation alone compares polynomial trace moments, **not** expected spectral norms. Letting the moment order tend to infinity compares divergent L-infinity behavior, not the means; it does not produce a valid complex Chevet proof. No such inference is made.
4. Reapplying scalar Slepian with complex real parts fails the phase-covariance test already exhibited by the helper. This cycle did not reuse that invalid extension. The new vector comparison source does not remove its skew covariance obstruction.

These are rejected proof routes, not counterexamples to the target theorem. No mathematical status claim beyond “local proof still missing” is justified by this investigation.

## Same-reviewer assembly and consumer disposition

The retained direct and indirect page consumers are NA08 B, HIER A/B, SKETCH A/B, CUR A/B, FMM A/B, BEM A/B and exterior-wave/PML A/B, with their exact orders and contract compatibility in cycle1 report/addendum. None may consume the held complex expectation as a proved supplier. They can consume a future completed supplier under the unchanged field/normalization contract. No original Statement/Definition has been changed, and no consumer metadata or canonical content was edited. Empty manifests mean no item-level proof/acceptance can be asserted.

The smallest unresolved prerequisite is still a **local normalized-complex scaled-product expectation lemma with the required coefficients**, or a complete alternative proof of the same approved complex expected range-finder bound. It belongs inside NA08 A before the expectation item. This packet cannot authorize closing the Gaussian escalation or attempting the owner gate.
