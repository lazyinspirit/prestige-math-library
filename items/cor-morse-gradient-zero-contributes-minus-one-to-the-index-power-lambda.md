---
id: cor-morse-gradient-zero-contributes-minus-one-to-the-index-power-lambda
kind: corollary
title: "A Morse gradient zero contributes $(-1)^\\lambda$ to the index"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-nondegenerate-zero-of-a-vector-field, thm-index-of-a-nondegenerate-vector-field-zero, lem-negation-scales-the-local-index-by-minus-one-to-the-dimension, def-riemannian-gradient-of-a-smooth-function, lem-riemannian-gradient-vanishes-exactly-at-critical-points, def-nondegenerate-critical-point-nullity-index-and-coindex, lem-critical-hessian-agrees-with-the-levi-civita-hessian, def-morse-function-and-excellent-morse-function, def-hessian-of-a-function-at-a-critical-point, cor-index-and-coindex-swap-under-negation, def-riemannian-metric-and-riemannian-manifold, def-countable-choice, thm-sylvesters-law-of-inertia]
justified_by: []
aliases: []
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  scraped: []
  references:
    - title: "John W. Milnor, Topology from the Differentiable Viewpoint (complete 76-page PDF, including the appendix Classifying 1-manifolds)"
      url: "https://people.math.osu.edu/davis.12/courses/7851/milnortop.pdf"
      locator: "§6, printed pp. 37-39 (the index of the gradient at a critical point is the sign of the Hessian determinant)"
    - title: "Liviu Nicolaescu, An Invitation to Morse Theory (2nd ed.)"
      url: "https://www3.nd.edu/~lnicolae/Morse2nd.pdf"
      locator: "Ch. 2 §2.3, printed pp. 46-49 (Morse indices and the Euler characteristic identity)"
dependency_level: 4
---

## Statement

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]) for the canonical smooth tangent-bundle structure.

Let $M$ be a closed smooth $n$-manifold, $n\ge1$, and let $f:M\to\mathbb R$ be a Morse
function ([[def-morse-function-and-excellent-morse-function]]), let $g$ be a
Riemannian metric on $M$
([[def-riemannian-metric-and-riemannian-manifold]]) and let $p$ be a critical
point of $f$ of index $\lambda=\operatorname{ind}(p)$
([[def-nondegenerate-critical-point-nullity-index-and-coindex]]). Then
$\operatorname{grad}_gf$ has a nondegenerate zero at $p$ with
$$\operatorname{ind}_p(\operatorname{grad}_gf)=(-1)^{\lambda},\qquad \operatorname{ind}_p(-\operatorname{grad}_gf)=(-1)^{n-\lambda}.$$

## Facts & Assumptions

**Given:** A closed smooth manifold $M$, a Morse function $f$, a Riemannian metric $g$ and a critical point $p$ of $f$ of Morse index $\lambda$.

[F1] The gradient $\operatorname{grad}_gf$ is a smooth vector field on $M$ and it vanishes exactly at the critical points of $f$ ([[def-riemannian-gradient-of-a-smooth-function]], [[lem-riemannian-gradient-vanishes-exactly-at-critical-points]]).

[F2] In coordinates, differentiating the gradient formula at a critical point gives $D(\operatorname{grad}_g f)_p=g(p)^{-1}H_p$, because $df_p=0$ kills the derivatives of the inverse metric. Thus the linearization (vertical derivative) of $\operatorname{grad}_gf$ is the Hessian bilinear form $\operatorname{Hess}_pf$, read through $g$; the critical Hessian of a Morse function is nondegenerate with $\lambda$ negative and $n-\lambda$ positive entries in its inertia normal form, so the linearization is invertible and $p$ is a nondegenerate zero of $\operatorname{grad}_gf$ ([[def-hessian-of-a-function-at-a-critical-point]], [[lem-critical-hessian-agrees-with-the-levi-civita-hessian]], [[def-nondegenerate-critical-point-nullity-index-and-coindex]], [[def-nondegenerate-zero-of-a-vector-field]]).

[F3] A nondegenerate zero has index equal to the sign of the determinant of its linearization ([[thm-index-of-a-nondegenerate-vector-field-zero]]), the sign of the determinant of a nondegenerate symmetric form with $\lambda$ negative and $n-\lambda$ positive entries in its inertia normal form is $(-1)^\lambda$ ([[def-nondegenerate-critical-point-nullity-index-and-coindex]]), and negating the field multiplies the index by $(-1)^n$ ([[lem-negation-scales-the-local-index-by-minus-one-to-the-dimension]]); the index of the negated function swaps, $\operatorname{ind}_p(-f)=n-\lambda$ ([[cor-index-and-coindex-swap-under-negation]]).

## Proof

1.1 By [F1] the field $\operatorname{grad}_gf$ has a zero at $p$ (and only at the critical points), and by [F2] its linearization there is the nondegenerate Hessian with $\lambda$ negative and $n-\lambda$ positive entries in its inertia normal form; hence $p$ is a nondegenerate zero and $\operatorname{sign}\det(D\operatorname{grad}_gf)_p=(-1)^{\lambda}$. [F1, F2, algebra]

2.1 The determinant formula [F3] gives $\operatorname{ind}_p(\operatorname{grad}_gf)=(-1)^{\lambda}$, and the negation rule gives $\operatorname{ind}_p(-\operatorname{grad}_gf)=(-1)^n(-1)^{\lambda}=(-1)^{n-\lambda}$, the second formula; equivalently, $-\operatorname{grad}_gf=\operatorname{grad}_g(-f)$ has index $(-1)^{\operatorname{ind}_p(-f)}=(-1)^{n-\lambda}$ by the index swap of [F3]. [F2, F3, step 1.1, algebra] ∎
