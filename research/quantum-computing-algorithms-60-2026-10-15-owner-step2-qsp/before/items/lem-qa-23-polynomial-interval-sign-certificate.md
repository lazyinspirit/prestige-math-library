---
id: lem-qa-23-polynomial-interval-sign-certificate
kind: lemma
title: Real-root intervals certify the sign of a real polynomial
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 0
deps:
  - def-polynomial-ring-over-a-commutative-ring
  - def-polynomial-degree-leading-coefficient-and-monic
  - thm-polynomial-division-algorithm-over-a-field
  - thm-fundamental-theorem-of-algebra-minimum-modulus-proof
  - lem-nonreal-roots-of-a-real-polynomial-occur-in-conjugate-pairs
  - def-real-numbers
  - thm-reals-field
  - thm-reals-ordered-field
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Colm Ó Dúnlaing, Mathematics 1263: Introduction to Numerical Analysis, §2, Sturm's Theorem"
      url: "https://www.maths.tcd.ie/~odunlain/1263/book.pdf"
    - title: "EPFL, Sturm's Theorem"
      url: "https://lara.epfl.ch/w/_media/sar10/sturms_proof.pdf"
---

## Statement

Let $H\in\mathbb R[x]$ be nonzero, and list all its distinct real roots in $[-1,1]$ in increasing order, including roots at the endpoints. On every open component of $[-1,1]$ after removing these roots, $H$ has constant sign. Therefore, if an exact sample point in each nonempty component has $H\ge0$, and the endpoint/root values are also checked, then $H(x)\ge0$ for every $x\in[-1,1]$. Conversely, if $H\ge0$ on the interval, all these checks pass.

## Facts & Assumptions

**Given:** A nonzero real polynomial $H$ and its finite set of distinct real roots in $[-1,1]$.

[F1] [[thm-fundamental-theorem-of-algebra-minimum-modulus-proof]]: every nonconstant complex polynomial has a root.

[F2] [[thm-polynomial-division-algorithm-over-a-field]]: division by a nonzero polynomial over a field gives a lower-degree remainder.

[F3] [[lem-nonreal-roots-of-a-real-polynomial-occur-in-conjugate-pairs]]: each nonreal root of a real polynomial occurs with its conjugate.

[F4] [[thm-reals-field]]: the real numbers are a field, so polynomial coefficient and factor arithmetic take place in a field.

[F5] [[thm-reals-ordered-field]]: the real numbers carry a compatible total order, which determines signs of real factors and polynomial values.

## Proof

1.1 Repeated use of [F1] and [F2] factors $H$ over $\mathbb C$ into linear factors with multiplicity. By [F3], nonreal factors pair as $(x-(a+ib))(x-(a-ib))=(x-a)^2+b^2$, which is strictly positive for real $x$ when $b\ne0$. The remaining factors are real linear factors $x-r$ for the real roots $r$. [F1, F2, F3]

2.1 On an open interval containing no real root, each real factor $x-r$ is either strictly positive throughout or strictly negative throughout by [F5]; every paired nonreal factor is positive throughout, and the real leading coefficient has fixed sign. Thus $H$ has one constant sign on that interval. [F4, F5, step 1.1, algebra]

3.1 Each root value is zero, and the endpoints are checked separately. Step 2.1 shows each exact sample determines the sign on its entire root-free component, so the finite checks imply $H\ge0$ on all of $[-1,1]$. If $H\ge0$ everywhere, every sample and endpoint check plainly passes. [F5, step 2.1, given] ∎

