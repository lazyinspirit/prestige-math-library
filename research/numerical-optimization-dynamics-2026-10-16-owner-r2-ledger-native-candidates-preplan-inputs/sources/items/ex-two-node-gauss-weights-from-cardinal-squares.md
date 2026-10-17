---
id: ex-two-node-gauss-weights-from-cardinal-squares
kind: example
title: Two Gaussian weights are the squared norms of the two cardinal polynomials
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 8
deps:
  - def-gauss-quadrature-rule
  - thm-gauss-rule-exact-through-degree-2m-minus-1-and-positive-weights
  - def-cardinal-polynomial-interpolation
  - lem-cardinal-basis-degree-and-values
  - def-gauss-moment-data
  - thm-linearity-of-the-lebesgue-integral-on-l-one
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "John A. Gubner, Gaussian Quadrature and the Eigenvalue Problem, §§2–5, 2020"
      url: "https://gubner.ece.wisc.edu/gaussquad.pdf"
    - title: "MATH 373 Lecture Notes, Lecture 14: Gaussian Quadrature, §§10.2–10.5"
      url: "https://sites.math.rutgers.edu/~falk/math373/lecture14.pdf"
    - title: "Walter Gautschi, The Interplay Between Classical Analysis and (Numerical) Linear Algebra, §2.1"
      url: "https://web.stanford.edu/class/cme335/Golub.pdf"
---

## Example

Let $(a,b,2,3,\mu)$ be Gaussian moment data, with distinct Gaussian nodes
$x_1<x_2$ and weights $w_1,w_2$. Its cardinal polynomials are
$$ \ell_1(X)=\frac{X-x_2}{x_1-x_2},\qquad \ell_2(X)=\frac{X-x_1}{x_2-x_1}. $$
The degree-three exactness theorem implies
$$ w_1=\int\ell_1^2\,d\mu =\frac{\mu_2-2x_2\mu_1+x_2^2\mu_0}{(x_1-x_2)^2}>0, \qquad w_2=\int\ell_2^2\,d\mu =\frac{\mu_2-2x_1\mu_1+x_1^2\mu_0}{(x_2-x_1)^2}>0, $$
where $\mu_j=\int x^j\,d\mu$ for $j=0,1,2$.

## Facts & Assumptions

**Given:** Moment data of order $3$, its two-node Gaussian rule, and its
distinct nodes $x_1,x_2$.

[F1] [[def-gauss-quadrature-rule]]: $w_i=\int\ell_i\,d\mu$ and
$Q_2(f)=w_1f(x_1)+w_2f(x_2)$.

[F2] [[thm-gauss-rule-exact-through-degree-2m-minus-1-and-positive-weights]]:
the rule is exact through degree $3$ and $\int\ell_i^2\,d\mu=w_i>0$.

[F3] [[def-cardinal-polynomial-interpolation]] and
[[lem-cardinal-basis-degree-and-values]]: the displayed $\ell_i$ are degree
one and satisfy $\ell_i(x_k)=1$ for $k=i$ and $0$ otherwise.

[F4] [[def-gauss-moment-data]] and
[[thm-linearity-of-the-lebesgue-integral-on-l-one]]: for $j=0,1,2$,
$\int x^j\,d\mu=\mu_j$, and integration distributes over the finite
polynomial expansion.

## Proof

1.1 Since $\deg(\ell_i^2)=2$, exactness [F2] gives $Q_2(\ell_i^2)=\int\ell_i^2\,d\mu=w_i$. Expanding the finite rule sum and using the cardinal values [F3] gives $Q_2(\ell_i^2)=w_i$. [F1, F2, F3]

2.1 The formula for $\ell_1$ gives $\ell_1(x)^2=(x^2-2x_2x+x_2^2)/(x_1-x_2)^2$. Integrating term by term using [F4] proves the displayed expression for $w_1$. Replacing the omitted node $x_2$ by $x_1$ gives the displayed expression for $w_2$. Their strict positivity is [F2]. [F2, F4, step 1.1, algebra] ∎
