---
id: lem-a-positive-majorant-system-dominates-the-formal-cauchy-recursion
kind: lemma
title: Positive majorants dominate the Cauchy recursion
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: 'Gantumur, Math 580 Lecture Notes 2: The Cauchy-Kovalevskaya Theorem'
      url: https://www.math.mcgill.ca/gantumur/math580f11/downloads/notes2.pdf
      locator: Gantumur, §4 equations (42)–(46), printed pp. 9–10. Origin values and the possibly nonzero initial trace are distinguished here.
status: draft
origin: pipeline
proof_strategy: direct
deps: ["lem-coefficient-majorisation-is-preserved-by-sums-products-composition-and-differentiation", "lem-an-analytic-germ-has-a-rational-geometric-majorant", "lem-normal-form-pde-determines-a-unique-formal-taylor-series"]
---

## Statement

Let $d,N\ge1$ and $u_t=F(t,x,u,D_xu)$ have zero data, with $F(0)=0$ and every ordinary coefficient bounded in modulus by $Mr^{-q}$ at total degree q, where $M,r>0$. For $0<\rho\le1$ set $G(t,x,U,p)=M/((1-(\sum_i x_i+t/\rho+\sum_jU_j)/r)(1-\sum_{i,j}p_{ij}/r))-M$. Each component of F is majorised by G. If an analytic vector U solves $\partial_tU_j=G(t,x,U,D_xU)$, has $U(0,0)=D_xU(0,0)=0$, and has nonnegative Taylor coefficients in its trace $U(0,x)$, then the zero-data formal solution u is majorised componentwise by U at the origin.

## Facts & Assumptions

**Given:** The zero-data first-order system and its coefficientwise rational right-side bound, together with a formal nonnegative scalar U satisfying the comparison equation and initial-coefficient conditions in the statement.

[F1] The first-order zero-data recursion determines all Taylor coefficients uniquely. ([[lem-normal-form-pde-determines-a-unique-formal-taylor-series]]).

[F2] Products and zero-centred formal substitutions preserve majorisation. ([[lem-coefficient-majorisation-is-preserved-by-sums-products-composition-and-differentiation]]).

## Proof

1.1 Expanding each denominator of G gives a product of two multinomial series. A monomial of positive total degree q has coefficient $Mr^{-q}\rho^{-\ell}$ times two positive integer multinomial factors, where $\ell$ is its t-degree. This is at least $Mr^{-q}$. The constant coefficient is zero, matching F(0)=0. Thus F is majorised by G. [given, algebra]

1.2 To compute $\partial_x^\alpha\partial_t^{q+1}u_j(0)$, apply $\partial_x^\alpha\partial_t^q$ to $F_j(t,x,u,D_xu)$. Iterating the product and chain rules produces a finite sum of products of derivatives of F at zero and derivatives $\partial_x^\beta\partial_t^\ell u_k(0)$ with $\ell\le q$, multiplied by nonnegative integers. Indeed a spatial differentiation only increases beta; a time differentiation can increase ell at most by one, and there are only q such differentiations. The inner arguments at the origin are zero, since u and its initial spatial gradient vanish. The identical polynomial computation for U evaluates derivatives of G at the same zero argument by its stipulated origin conditions. [given, F1, F2]

2.1 For normal order zero, all derivatives of the zero trace of u vanish, whereas the corresponding trace derivatives of U are nonnegative. Suppose the comparison holds at every normal order at most q, for all tangential indices and all components. In each finite product from step 1.2 take absolute values, apply those bounds and the derivative bounds from step 1.1, and then sum. Nonnegative polynomial coefficients give the comparison at normal order q+1 and simultaneously its nonnegativity for U. Induction proves every derivative bound; division by the same positive factorials gives $u_j\ll U_j$. [step 1.1, step 1.2] ∎

## Source notes

Gantumur, §4 equations (42)–(46), printed pp. 9–10. Origin values and the possibly nonzero initial trace are distinguished here.

