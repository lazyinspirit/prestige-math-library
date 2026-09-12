---
id: "prop-proper-smooth-maps-pull-back-compactly-supported-forms"
kind: "proposition"
title: "Proper smooth maps pull back compactly supported forms"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["def-compactly-supported-de-rham-cochain-complex-and-cohomology","lem-the-de-rham-complex-and-pullback-extend-to-manifolds-with-boundary","def-smooth-map-between-manifolds-with-boundary","def-interior-closure-boundary-top","lem-compactness-of-a-subspace-is-ambient"]
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Robbin–Salamon, Introduction to Differential Topology
      url: https://zaco.au/lib/math/text/differential-geometry/difftop.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

Let $F:M\to N$ be a smooth map of finite-dimensional Hausdorff second-countable smooth manifolds, possibly with boundary. Suppose $F$ is **proper**, meaning that $F^{-1}(K)$ is compact in $M$ for every compact subset $K\subseteq N$. Then pullback sends $\Omega_c^k(N)$ linearly into $\Omega_c^k(M)$ for every integer $k$. More precisely,
$$\operatorname{supp}(F^*\omega)\subseteq F^{-1}(\operatorname{supp}\omega).$$
The containment holds for every smooth map; properness is used to make the set on the right compact. No choice axiom or orientation is needed.

## Facts & Assumptions

[F1] [[def-compactly-supported-de-rham-cochain-complex-and-cohomology]] defines the compact-support spaces and includes the local support and compact-closed-subset verification.

[F2] [[lem-the-de-rham-complex-and-pullback-extend-to-manifolds-with-boundary]] gives smooth linear pullback, including boundary targets, by its local coordinate formulas.

[F3] [[def-smooth-map-between-manifolds-with-boundary]] defines smooth maps as continuous maps with the stated local smooth extensions.

[F4] [[def-interior-closure-boundary-top]] gives the closed support and smallest-closed-superset properties.

[F5] [[lem-compactness-of-a-subspace-is-ambient]] gives the ambient open-cover criterion for compact subsets.

## Proof

**Given:** $F$ as in the statement and $\omega\in\Omega_c^k(N)$, with $K=\operatorname{supp}\omega$.

1.1 The complement $N\setminus K$ is open by [F4], and $\omega$ vanishes identically there. Since $F$ is continuous by [F3], $U=F^{-1}(N\setminus K)$ is open. For $x\in U$, the pullback formula in [F2] evaluates $\omega_{F(x)}=0$ on the images under $dF_x$ of any tangent vectors, so $(F^*\omega)_x=0$. Thus the nonzero locus of $F^*\omega$ is contained in the closed set $M\setminus U=F^{-1}(K)$. Taking its closure and using [F4] proves the support containment. This step does not use properness. [F1, F2, F3, F4, given]

2.1 Properness makes $F^{-1}(K)$ compact because $K$ is compact. The left-hand support $S$ in step 1.1 is closed in $M$. To verify its compactness, add $M\setminus S$ to any ambient open cover of $S$; this covers $F^{-1}(K)$. By [F5] take finitely many covering members and discard $M\setminus S$. The remaining finite family still covers $S$, so [F5] makes $S$ compact. Therefore $F^*\omega\in\Omega_c^k(M)$ by [F1]. Linearity is the same pointwise linearity of [F2], restricted to these vector subspaces. [F1, F2, F5, step 1.1, given]

3.1 For $k<0$ or when the source form is forced to be zero by dimension, pullback is zero. In degree zero it is ordinary composition of functions, and step 1.1 applies unchanged; in degree one it evaluates $\omega$ on $dF_xv$. A rank-deficient or constant map may make the inclusion strict, which is harmless; no equality of supports was used. Empty manifolds and zero forms give empty supports. Boundary points are included in [F2], and properness still refers to compact sets in the whole manifold, including its boundary. Only one given compact support and a finite subcover were used, so no choice principle enters. [F1, F2, F3, F5, step 1.1, step 2.1] ∎
