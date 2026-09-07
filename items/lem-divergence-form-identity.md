---
id: lem-divergence-form-identity
title: "Divergence as an exterior derivative"
kind: lemma
status: draft
origin: pipeline
deps: ["def-divergence-relative-to-a-volume-form", "lem-exterior-and-cartan-calculus-extend-to-manifolds-with-boundary"]
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
    - title: "Lee divergence definition p.423; EoM Divergence Comments"
      url: "https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf"
proof_strategy: "Direct calculation and localization"
---
## Statement

For a positive volume form $\mu$ and smooth vector field $X$ on an oriented smooth $n$-manifold, $n\geq1$, with boundary allowed,
$$d(\iota_X\mu)=(\operatorname{div}_\mu X)\mu.$$
No tangency assumption on $X$ at the boundary is needed.

## Facts & Assumptions

[F1] [[def-divergence-relative-to-a-volume-form]]: Let $\mu$ be a positive volume form and $X$ a smooth vector field on a smooth oriented manifold, with boundary allowed. The **divergence relative to $\mu$** is the smooth scalar function determined by $$\mathcal L_X\mu=(\operatorname{div}_\mu X)\mu.$$ At a boundary point use the local-extension Lie derivative of lem-exterior-and-cartan-calculus-extend-to-manifolds-with-boundary. The nonzero top form spans each top exterior-power fiber, so the scalar is unique. Smooth existence and its coordinate formula are discharged by prop-divergence-is-well-defined-and-has-the-coordinate-formula.

[F2] [[lem-exterior-and-cartan-calculus-extend-to-manifolds-with-boundary]]: On smooth manifolds with boundary, the coordinate exterior derivative, pullback naturality, graded Leibniz rule, support containment, and Cartan identity hold for smooth forms: $$d(F^*\alpha)=F^*(d\alpha),\quad d(\alpha\wedge\beta)=d\alpha\wedge\beta+(-1)^{\deg\alpha}\alpha\wedge d\beta,$$ $$\operatorname{supp}d\alpha\subseteq\operatorname{supp}\alpha,\qquad \mathcal L_X\alpha=d(\iota_X\alpha)+\iota_Xd\alpha.$$ For arbitrary smooth vector fields at boundary points, $\mathcal L_X$ is defined by local Euclidean extensions; a two-sided flow inside the manifold is not required.

## Proof

**Given:** The objects and hypotheses in the statement above.

1.1 Since $\mu$ has top degree, $d\mu=0$. Cartan’s identity valid by local extensions therefore reduces to $\mathcal L_X\mu=d(\iota_X\mu)$, even if the field points outward. [F2, algebra]

2.1 The defining equality for divergence identifies the left side with $(\operatorname{div}_\mu X)\mu$, proving the result. For $n=1$ contraction is a function and the identity remains the same; for $X=0$ both sides are zero. [F1, step 1.1] ∎
