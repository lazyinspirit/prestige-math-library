---
id: lem-partition-localization-of-stokes
title: "Localization of Stokes by a partition of unity"
kind: lemma
status: draft
origin: pipeline
deps: ["lem-exterior-and-cartan-calculus-extend-to-manifolds-with-boundary", "lem-a-locally-finite-sum-is-finite-near-the-compact-support-of-a-form", "prop-linearity-and-additivity-of-integration-over-disjoint-oriented-components", "thm-smooth-partitions-of-unity-exist-on-manifolds-with-boundary", "thm-the-boundary-is-a-closed-embedded-smooth-n-minus-one-manifold"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Lee Theorem 16.11 proof p.414; Merry Theorem 26.16 proof PDF p.218"
      url: "https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf"
proof_strategy: "Direct calculation and localization"
---
## Statement

Assume $\mathrm{AC}_\omega$. Let $M^n$ be oriented with boundary, $n\geq1$, $\eta\in\Omega_c^{n-1}(M)$, and $(\rho_i)$ a smooth chart partition. Then
$$\eta=\sum_i\rho_i\eta,\qquad d\eta=\sum_i d(\rho_i\eta),\qquad \sum_i d\rho_i\wedge\eta=0,$$
with only finitely many nonzero form summands. Boundary restrictions have the corresponding finite localization and compact support, so these identities can be integrated termwise.

## Facts & Assumptions

[F1] [[lem-exterior-and-cartan-calculus-extend-to-manifolds-with-boundary]]: On smooth manifolds with boundary, the coordinate exterior derivative, pullback naturality, graded Leibniz rule, support containment, and Cartan identity hold for smooth forms: $$d(F^*\alpha)=F^*(d\alpha),\quad d(\alpha\wedge\beta)=d\alpha\wedge\beta+(-1)^{\deg\alpha}\alpha\wedge d\beta,$$ $$\operatorname{supp}d\alpha\subseteq\operatorname{supp}\alpha,\qquad \mathcal L_X\alpha=d(\iota_X\alpha)+\iota_Xd\alpha.$$ For arbitrary smooth vector fields at boundary points, $\mathcal L_X$ is defined by local Euclidean extensions; a two-sided flow inside the manifold is not required.

[F2] [[lem-a-locally-finite-sum-is-finite-near-the-compact-support-of-a-form]]: If $(C_i)_{i\in I}$ is a locally finite family of closed subsets of a manifold and $K$ is compact, only finitely many $C_i$ meet $K$. There is an open neighborhood of $K$ disjoint from all the other $C_i$. In particular, for a smooth partition of unity $(\rho_i)$ and $\omega\in\Omega_c^k(M)$, only finitely many $\rho_i\omega$ are nonzero.

[F3] [[prop-linearity-and-additivity-of-integration-over-disjoint-oriented-components]]: For compactly supported smooth top forms $\omega,\eta$ on an oriented $M^n$ and $a,b\in\mathbb R$, $$\int_M(a\omega+b\eta)=a\int_M\omega+b\int_M\eta.$$ Also $\int_M\omega=\sum_C\int_C\omega|_C$, where $C$ ranges over connected components with their restricted orientations; only finitely many meet $\operatorname{supp}\omega$.

[F4] [[thm-smooth-partitions-of-unity-exist-on-manifolds-with-boundary]]: Assume $\mathrm{AC}_\omega$. Every open cover of a smooth manifold with boundary admits a smooth partition of unity subordinate to it.

[F5] [[thm-the-boundary-is-a-closed-embedded-smooth-n-minus-one-manifold]]: If $M$ has dimension $n\ge1$, the restrictions of boundary charts to their faces give $\partial M$ the structure of a closed embedded smooth boundaryless $(n-1)$-manifold. For $n=0$, $\partial M=\varnothing$.

## Proof

**Given:** The objects and hypotheses in the statement above.

1.1 The partition exists under the stated choice hypothesis. The compact-support lemma supplies a neighborhood of $K=\operatorname{supp}\eta$ on which only finitely many weights occur. There their sum is one and the sum of their differentials is zero. [F2, F4]

2.1 Leibniz gives $\sum_i d(\rho_i\eta)=\sum_i d\rho_i\wedge\eta+\sum_i\rho_i d\eta=d\eta$ near $K$. Outside $K$, both $\eta$ and $d\eta$ vanish, as do all products and their derivatives on a neighborhood. Thus the identities hold globally with finite relevant sums, also for empty support. [F1, step 1.1]

3.1 The boundary is closed, so $K\cap\partial M$ is compact and contains the support of $j^*\eta$. Restrict the finite sum to this boundary and apply linearity of integration there and on $M$. For $n=1$ the boundary restriction is a function on the discrete boundary and its compact support is finite. [F3, F5, step 2.1] ∎
