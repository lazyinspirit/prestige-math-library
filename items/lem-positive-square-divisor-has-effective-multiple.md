---
id: lem-positive-square-divisor-has-effective-multiple
kind: lemma
title: "Positive square and positive ample intersection force an effective multiple"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 2
deps:
  - def-ample-invertible-sheaf
  - def-axiom-of-choice
  - def-canonical-divisor-of-a-smooth-projective-surface
  - def-divisor-intersection-number-on-smooth-projective-surface
  - def-euler-characteristic-coherent-sheaf
  - def-invertible-sheaf
  - def-sheaf-tensor-product
  - lem-invertible-sheaf-dual-tensor-inverse
  - lem-top-cohomology-vanishes-above-canonical-ample-threshold
  - thm-riemann-roch-for-smooth-projective-surfaces
  - thm-surface-intersection-product-bilinear-and-symmetric
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Ravi Vakil, The Rising Sea: Foundations of Algebraic Geometry, pre-publication version 2025-10-21"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $k$ be a field, let
$X$ be an integral smooth projective surface over $k$, let $H$ be an ample
invertible $\mathcal O_X$-module ([[def-ample-invertible-sheaf]]) and let $L$ be
an invertible $\mathcal O_X$-module with
$$L\cdot L>0,\qquad L\cdot H>0.$$
Then there exists an integer $n\ge1$ with $H^0(X,L^{\otimes n})\ne0$.

## Facts & Assumptions

**Given:** a field $k$, an integral smooth projective surface $X$ over $k$, an ample invertible sheaf $H$, and an invertible sheaf $L$ with $L\cdot L>0$ and $L\cdot H>0$.

[F1] Bilinearity: $\mathbb Z$-bilinearity of the intersection product gives $L^{\otimes n}\cdot H=n(L\cdot H)$ and $L^{\otimes n}\cdot L^{\otimes n}=n^2(L\cdot L)$ for every $n\ge0$; in particular $L^{\otimes n}\cdot H>K_X\cdot H$ for all sufficiently large $n$, with $K_X\cdot H=\omega_X\cdot H$ ([[def-divisor-intersection-number-on-smooth-projective-surface]], [[thm-surface-intersection-product-bilinear-and-symmetric]], [[def-canonical-divisor-of-a-smooth-projective-surface]], [[def-invertible-sheaf]], [[def-sheaf-tensor-product]], [[lem-invertible-sheaf-dual-tensor-inverse]]).

[F2] Threshold vanishing: if $M\cdot H>K_X\cdot H$ for an invertible sheaf $M$, then $H^2(X,M)=0$ ([[lem-top-cohomology-vanishes-above-canonical-ample-threshold]], [[def-canonical-divisor-of-a-smooth-projective-surface]]).

[F3] Riemann-Roch: for every invertible sheaf $M$, $\chi(X,M)=\chi(X,\mathcal O_X)+\tfrac12(M\cdot M-M\cdot K_X)$ ([[thm-riemann-roch-for-smooth-projective-surfaces]]). The Euler characteristic is the alternating sum $\chi=h^0-h^1+h^2$ of the dimensions $h^q=\dim_kH^q(X,M)$, so $h^0=\chi+h^1-h^2$ with $h^1,h^2\ge0$ ([[def-euler-characteristic-coherent-sheaf]]).

[F4] The Axiom of Choice is inherited from the Riemann-Roch and vanishing suppliers of [F2] and [F3]; the integer $n$ is chosen below from the growth of a quadratic polynomial, no family is selected.

## Proof

**Proof technique:** direct: for large $n$ the top cohomology of $L^{\otimes n}$ vanishes and Riemann-Roch makes the Euler characteristic positive; the sign in $h^0=\chi+h^1-h^2$ then gives a section.

1.1 Vanishing of the top cohomology for large $n$. By [F1], $L^{\otimes n}\cdot H=n(L\cdot H)\to+\infty$ as $n\to\infty$ because $L\cdot H>0$, so for all $n\gg0$ we have $L^{\otimes n}\cdot H>K_X\cdot H$; by [F2], $H^2(X,L^{\otimes n})=0$ for all such $n$. [F1, F2]

1.2 Growth of the Euler characteristic. By [F3] and [F1], $$\chi(X,L^{\otimes n})=\chi(X,\mathcal O_X)+\tfrac{n^2}{2}(L\cdot L)-\tfrac{n}{2}(L\cdot K_X)\longrightarrow+\infty\qquad(n\to\infty),$$ because the quadratic term has positive leading coefficient $L\cdot L>0$. [F1, F3]

2.1 A positive Euler characteristic gives a section. Choose $n\gg0$ so large that both step 1.1 applies and $\chi(X,L^{\otimes n})>0$, which is possible by steps 1.1 and 1.2. By [F3], $h^0(X,L^{\otimes n})=\chi(X,L^{\otimes n})+h^1(X,L^{\otimes n})-h^2(X,L^{\otimes n})$, and $h^2=0$ by step 1.1 while $h^1\ge0$; hence $h^0(X,L^{\otimes n})\ge\chi(X,L^{\otimes n})>0$ and $H^0(X,L^{\otimes n})\ne0$. The Axiom of Choice is inherited from [F4]. [F3, F4, step 1.1, step 1.2] ∎ 