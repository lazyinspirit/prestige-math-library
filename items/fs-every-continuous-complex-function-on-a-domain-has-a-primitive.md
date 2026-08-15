---
id: fs-every-continuous-complex-function-on-a-domain-has-a-primitive
kind: false-statement
title: "FALSE: every continuous complex-valued function on a domain has a primitive"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-complex-domain, lem-punctured-rn-is-polygonally-connected, thm-complex-polynomials-and-rational-functions-are-holomorphic, cor-complex-differentiability-implies-continuity, thm-circle-integrals-of-integer-monomials, cor-closed-contour-integral-of-a-derivative-is-zero, thm-path-independence-and-complex-primitive-criterion]
aliases: []
landmark: false
proof_strategy: contradiction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "E. Stein and R. Shakarchi, Complex Analysis, Ch. 1, §3"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
pipeline_run: null
---

## Statement

**False claim.** Every continuous complex-valued function on a complex domain has a primitive.

## Facts & Assumptions

**Given:** The punctured plane $U=\mathbb C\setminus\{0\}$ and $f(z)=1/z$.

[L1] A complex domain is a nonempty connected open subset of $\mathbb C$ ([[def-complex-domain]]).

[L2] For dimension at least two, punctured Euclidean space is polygonally connected ([[lem-punctured-rn-is-polygonally-connected]]).

[L3] Around a positively oriented circle centred at $0$, $\int z^{-1}\,dz=2\pi i$ ([[thm-circle-integrals-of-integer-monomials]]).

[L4] The integral of a continuous complex derivative over every closed rectifiable contour is zero ([[cor-closed-contour-integral-of-a-derivative-is-zero]]).

[L5] A continuous function on a complex domain has a primitive exactly when its closed-contour integrals vanish ([[thm-path-independence-and-complex-primitive-criterion]]).

[L6] For complex polynomials $P,Q$, the set where $Q\ne0$ is open and $P/Q$ is holomorphic there ([[thm-complex-polynomials-and-rational-functions-are-holomorphic]]).

[L7] Complex differentiability at a point implies continuity there ([[cor-complex-differentiability-implies-continuity]]).

## Refutation

**Proof technique:** contradiction.

1.1 Apply [L6] to $P=1$ and $Q(z)=z$: it makes $U$ open and $1/z$ holomorphic there, hence continuous by [L7]. The point $1$ lies in $U$, and [L2] makes $U$ connected, so it is a domain by [L1]. [L1, L2, L6, L7]

1.2 Suppose, contrary to the desired refutation, that $1/z$ had a primitive on $U$. Then [L4] would make its integral around the unit circle zero. [assume-contra, L4]

2.1 But [L3] gives that integral as $2\pi i\ne0$, a contradiction. Hence the false claim fails, and [L5] gives the corrected zero-closed-contour criterion. [step 1.2, L3, L5, discharge-contradiction] ∎
