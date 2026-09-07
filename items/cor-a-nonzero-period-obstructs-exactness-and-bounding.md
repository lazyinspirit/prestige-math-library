---
id: cor-a-nonzero-period-obstructs-exactness-and-bounding
title: "A nonzero period obstructs exactness and bounding"
kind: corollary
status: draft
origin: pipeline
deps: ["cor-integral-of-an-exact-compactly-supported-top-form-on-a-boundaryless-manifold-is-zero", "cor-closed-compactly-supported-forms-integrate-to-zero-on-boundaries", "prop-integration-over-an-oriented-embedded-submanifold", "lem-exterior-and-cartan-calculus-extend-to-manifolds-with-boundary"]
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
    - title: "Lee Corollary 16.15, pp.414–415"
      url: "https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf"
proof_strategy: "Direct calculation and localization"
---
## Statement

Let $S\hookrightarrow M$ be an oriented compact boundaryless embedded $k$-submanifold, $k\geq1$, and let $\omega$ be a closed smooth $k$-form on $M$. If $\int_S\omega\neq0$, then $\omega$ is not exact on $M$, and $S$ cannot be the induced oriented boundary of a compact embedded $(k+1)$-submanifold of $M$.

## Facts & Assumptions

[F1] [[cor-integral-of-an-exact-compactly-supported-top-form-on-a-boundaryless-manifold-is-zero]]: If $M^n$ is oriented and boundaryless, $n\geq1$, and $\eta\in\Omega_c^{n-1}(M)$, then $\int_Md\eta=0$. In particular, on a compact such manifold every exact smooth top form has zero integral. The compact-support assumption is on the primitive $\eta$, not merely on $d\eta$.

[F2] [[cor-closed-compactly-supported-forms-integrate-to-zero-on-boundaries]]: For oriented $M^n$ with boundary, $n\geq1$, if $\eta\in\Omega_c^{n-1}(M)$ is closed, then $\int_{\partial M}j^*\eta=0$. When $M$ is compact, no separate support assumption on the smooth closed form is needed.

[F3] [[prop-integration-over-an-oriented-embedded-submanifold]]: Let $j:S\hookrightarrow M$ be an oriented embedded smooth $k$-submanifold, with boundary allowed. For a smooth $k$-form $\omega$ on $M$ such that $j^*\omega$ has compact support on $S$, define $\int_S\omega:=\int_Sj^*\omega$. If $F:T\to S$ is an orientation-preserving diffeomorphism, this equals $\int_T(jF)^*\omega$. Compact support is required on $S$ itself.

[F4] [[lem-exterior-and-cartan-calculus-extend-to-manifolds-with-boundary]]: On smooth manifolds with boundary, the coordinate exterior derivative, pullback naturality, graded Leibniz rule, support containment, and Cartan identity hold for smooth forms: $$d(F^*\alpha)=F^*(d\alpha),\quad d(\alpha\wedge\beta)=d\alpha\wedge\beta+(-1)^{\deg\alpha}\alpha\wedge d\beta,$$ $$\operatorname{supp}d\alpha\subseteq\operatorname{supp}\alpha,\qquad \mathcal L_X\alpha=d(\iota_X\alpha)+\iota_Xd\alpha.$$ For arbitrary smooth vector fields at boundary points, $\mathcal L_X$ is defined by local Euclidean extensions; a two-sided flow inside the manifold is not required.

## Proof

**Given:** The objects and hypotheses in the statement above.

1.1 If $\omega=d\alpha$ on $M$, pullback to $S$ gives $j^*\omega=d(j^*\alpha)$. The primitive is compactly supported because $S$ is compact. Exact-integral vanishing on boundaryless $S$ gives $\int_S\omega=0$, contrary to the specified nonzero value. [F1, F3, F4]

2.1 If $S=\partial T$ with the induced orientation for a compact oriented embedded $T$, the restriction of $\omega$ to $T$ is closed by pullback naturality. The closed-boundary integral result gives $\int_S\omega=0$, again inconsistent with the hypothesis. Empty $S$ or zero $\omega$ has zero integral and cannot meet that hypothesis; $k=1$ uses precisely the same two applications. [F2, F3, F4, given] ∎
