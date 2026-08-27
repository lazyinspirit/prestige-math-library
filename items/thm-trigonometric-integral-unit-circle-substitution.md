---
id: thm-trigonometric-integral-unit-circle-substitution
kind: theorem
title: "Trigonometric integrals become contour integrals by the unit-circle substitution"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-eulers-formula,
       thm-polar-form-with-unique-principal-argument,
       thm-residue-theorem-null-homologous-cycle,
       def-standard-residue-contours]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "R. Howell and J. Mathews, Complex Analysis, Ch. 8 §8.2"
      url: "https://complexanalysis.org/web/ch_residue.html"
pipeline_run: null
---

## Statement

Let $F(X,Y)$ be a rational expression in two variables, and assume that after
the substitution

$X=\frac{z+z^{-1}}{2},\qquad Y=\frac{z-z^{-1}}{2i}$

the resulting rational function

$G(z):=\frac{1}{iz}F\!\left(\frac{z+z^{-1}}{2},\frac{z-z^{-1}}{2i}\right)$

has no pole on $|z|=1$. Then

$\int_0^{2\pi}F(\cos\theta,\sin\theta)\,d\theta =\int_{|z|=1}G(z)\,dz,$

where the right-hand side is taken on the positively oriented unit circle.

## Facts & Assumptions

**Given:** A rational expression $F(X,Y)$ whose transformed integrand has no pole on the unit circle.

[L1] Euler's formula gives $e^{i\theta}=\cos\theta+i\sin\theta$ ([[thm-eulers-formula]]).

## Proof

**Proof technique:** direct.

1.1 Put $z=e^{i\theta}$. By [L1], $\cos\theta=\frac{z+z^{-1}}{2},\qquad \sin\theta=\frac{z-z^{-1}}{2i}.$ Differentiating $z=e^{i\theta}$ gives $dz=ize^{0}\,d\theta=iz\,d\theta$, so $d\theta=dz/(iz)$. [L1, algebra]

2.1 As $\theta$ runs from $0$ to $2\pi$, the variable $z$ traverses the unit circle once in the positive direction. Substituting the identities of step 1.1 into the real integral gives exactly the contour integral of $G(z)$. The hypothesis that $G$ has no pole on $|z|=1$ is what makes the contour integral well defined. [step 1.1] ∎
