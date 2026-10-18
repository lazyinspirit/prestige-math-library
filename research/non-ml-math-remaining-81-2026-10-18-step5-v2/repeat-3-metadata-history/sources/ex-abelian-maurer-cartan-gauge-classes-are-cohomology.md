---
id: ex-abelian-maurer-cartan-gauge-classes-are-cohomology
kind: example
title: "Abelian Maurer–Cartan gauge classes are cohomology"
status: draft
dependency_level: 10
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - def-filtered-maurer-cartan-gauge-path
  - lem-filtered-maurer-cartan-gauge-equation-has-unique-complete-polynomial-flow
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification: {}
sources:
  references:
    - title: "Dolgushev and Rogers, A Version of the Goldman–Millson Theorem for Filtered L-infinity-Algebras, section 2 and Appendix A"
      url: "https://arxiv.org/pdf/1407.6735v2"
    - title: "Manetti, Deformation theory via differential graded Lie algebras, section 5"
      url: "https://arxiv.org/pdf/math/0507284v1"
---

## Example

Let $(P,q_1)$ be a graded cochain complex over a characteristic-zero field with $q_n=0$ for $n\ge2$, $F^1P=P$ and $F^pP=0$ for $p\ge2$. These operations form a complete filtered shifted L∞-algebra. Its Maurer–Cartan set is $\ker(q_1:P^0\to P^1)$ and its completed polynomial gauge quotient is $H^0(P,q_1)=\ker q_1/\operatorname{im}(q_1:P^{-1}\to P^0)$.

For a concrete comparison, let $P^{-1}=ka$, $P^0=ke$, and all other degrees be zero. In the first structure take $q_1=0$; in the second take $q_1(a)=e$, $q_1(e)=0$. Both have the identical Maurer–Cartan equation $0=0$ on $ke$. The first canonical gauge quotient is $ke$, while the second has one class. Thus the solution equation on degree-zero elements alone omits data essential to canonical gauge classes.

## Facts & Assumptions

**Given:** The cochain complex, filtration and two specified examples.

[F1] [[def-filtered-maurer-cartan-gauge-path]] defines the gauge equation $w'=q_1^w(a(t))$ and its generated equivalence.

[F2] [[lem-filtered-maurer-cartan-gauge-equation-has-unique-complete-polynomial-flow]] gives existence, uniqueness and preservation of curvature for these filtered paths.

## Verification

1.1 The only nonzero shifted identity is $q_1^2=0$, which is the complex axiom. Its unary operation preserves the two-step filtration, and higher operations vanish, so all additive filtration inclusions hold. The filtration is separated and complete since the quotient by $F^2$ is $P$ itself. Its curvature is $C(w)=q_1w$, so the Maurer–Cartan set is $\ker q_1$ in degree zero. [given, F1, construct]

2.1 Here $q_1^w=q_1$ independently of $w$. Any path therefore satisfies $w(1)-w(0)=q_1(\int_0^1a(t)dt)$, so its endpoints have the same cohomology class. A finite chain has that property as well. Conversely, if $w_1-w_0=q_1b$ with $b\in P^{-1}$, take $a(t)=b$ and $w(t)=w_0+tq_1b$. This satisfies the path equation and has $q_1w(t)=0$ since $q_1^2=0$; it is also the unique flow in [F2]. Thus the gauge equivalence classes are precisely the stated cohomology classes. [F1, F2, step 1.1, algebra]

3.1 In both concrete complexes $q_1$ is zero on degree zero, so the curvature equation is identically zero on $ke$. In the zero complex the image from degree minus one is zero, giving quotient $ke$. In the second complex that image is all $ke$, giving a single class. The two quotient computations follow from step 2.1 with identical degree-zero solution loci. [given, step 1.1, step 2.1, algebra] ∎
