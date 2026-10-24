---
id: ex-chebyshev-interpolation-node-families-and-degree-one-norms
kind: example
title: "Degree-one root and Lobatto interpolation norms"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps:
  - def-best-uniform-polynomial-approximation-error-and-chebyshev-interpolants
  - lem-cardinal-lagrange-interpolation-and-operator-norm
  - thm-half-angle-identities-with-sign-conditions
  - thm-sine-cosine-signs-monotonicity-and-ranges
  - thm-sine-and-cosine-subtraction-formulas
  - thm-quarter-turn-values-and-shift-formulas
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: "Lloyd N. Trefethen, Approximation Theory and Approximation Practice, Chs. 2 and 5"
      url: "https://people.maths.ox.ac.uk/trefethen/ATAP/first6.pdf"
      locator: "Printed pp. 8–12 and 34–36; the finite degree-one values are calculated here"
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, Polynomial interpolation"
      url: "https://fncbook.com/polyinterp/"
      locator: "Complete article; the finite degree-one values are calculated here"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Example

For degree $n=1$, the first-kind roots are $1/\sqrt2$ and $-1/\sqrt2$,
while the Lobatto nodes are $1$ and $-1$. The corresponding interpolation
operator norms are
$$\Lambda_1^R=\sqrt2,\qquad \Lambda_1^L=1.$$

## Facts & Assumptions
**Given:** Degree $n=1$ and the two node conventions of
[[def-best-uniform-polynomial-approximation-error-and-chebyshev-interpolants]].

[F1] [[def-best-uniform-polynomial-approximation-error-and-chebyshev-interpolants]]: the two node families and cardinal interpolation operators are defined by the displayed cosine and product formulas.

[F2] [[lem-cardinal-lagrange-interpolation-and-operator-norm]]: the operator norm is the supremum of the cardinal sum $\sum_j|\ell_j(x)|$.

[F3] [[thm-half-angle-identities-with-sign-conditions]], [[thm-sine-cosine-signs-monotonicity-and-ranges]], [[thm-sine-and-cosine-subtraction-formulas]], and [[thm-quarter-turn-values-and-shift-formulas]]: $\cos(\pi/4)=1/\sqrt2$ because $\cos(\pi/4)>0$; the subtraction formula gives $\cos(3\pi/4)=-1/\sqrt2$, and $\cos(\pi/2)=0$.

## Proof

1.1 Put $c=1/\sqrt2$. The root nodes are $c,-c$, so their cardinal polynomials are $\ell_0(x)=(x+c)/(2c)$ and $\ell_1(x)=(c-x)/(2c)$. For $|x|\leq c$ both are nonnegative and their sum is $1$. For $c\leq x\leq1$, their absolute-value sum is $x/c\leq1/c$; for $-1\leq x\leq-c$, it is $-x/c\leq1/c$. Equality holds at $x=\pm1$, so the root-family cardinal-sum supremum is $1/c=\sqrt2$. [given, F1, F3, algebra]

1.2 The Lobatto nodes are $1,-1$, with cardinal polynomials $(1+x)/2$ and $(1-x)/2$. Both are nonnegative on $[-1,1]$ and sum to $1$, so their cardinal-sum supremum is $1$. [given, F1, F3, algebra]

2.1 Applying the operator-norm identity [F2] to the two cardinal-sum calculations gives $\Lambda_1^R=\sqrt2$ and $\Lambda_1^L=1$, as claimed. [given, F2, step 1.1, step 1.2] ∎
