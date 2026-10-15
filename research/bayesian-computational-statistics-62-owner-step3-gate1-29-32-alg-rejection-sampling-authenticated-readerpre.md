---
id: alg-rejection-sampling
kind: algorithm
title: Rejection sampling
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - def-borel-sigma-algebra
  - def-identically-distributed-and-iid-random-variables
  - def-law-or-distribution-of-a-random-element
  - def-measure-with-density
  - def-probability-measure
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - thm-arithmetic-and-lattice-operations-preserve-measurability
  - thm-composition-with-borel-functions-preserves-measurability
  - thm-threshold-characterisations-of-real-and-extended-real-measurability
justified_by:
  - thm-rejection-sampling-has-target-acceptance-law
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Art B. Owen, Monte Carlo Theory, Methods and Examples, Chapter 4 §4.7
      url: https://artowen.su.domains/mc/Ch-nonunifrng.pdf
    - title: Computational Statistics with R, Chapter 6 §6.1
      url: https://cswr.nrhstat.org/reject-samp.html
verification:
  precheck: n/a
---

## Definition

Let $(S,\mathcal S,\mu)$ be a measure space. The nonnegative measurable
functions $\tilde f,\tilde g:S\to[0,\infty)$ are the target and proposal
shapes, with
$$Z_f:=\int_S\tilde f\,d\mu\in(0,\infty),\qquad Z_g:=\int_S\tilde g\,d\mu\in(0,\infty).$$
The normalized densities $\bar f:=\tilde f/Z_f$ and $\bar g:=\tilde g/Z_g$
are measurable by closure under scalar multiplication
([[thm-arithmetic-and-lattice-operations-preserve-measurability]]). Their
integrals are one by homogeneity of the nonnegative integral
([[prop-order-and-scalar-rules-for-the-nonnegative-integral]]). Thus their
density measures are probability laws by
[[def-measure-with-density]] and [[def-probability-measure]]:
$$F(A):=Z_f^{-1}\int_A\tilde f\,d\mu,\qquad G(A):=Z_g^{-1}\int_A\tilde g\,d\mu\quad(A\in\mathcal S).$$
Assume a finite $c>0$ satisfies $\tilde f\le c\tilde g$ outside a common
$\mu$-null set. Use finite-valued representatives; values on that null set
do not affect $F$ or $G$.

The stochastic input is an ideal sequence of independent proposal draws
$Y_i$ with common law $G$ and independent auxiliary draws $U_i$ with common
law $\Lambda$, where $\Lambda$ is the uniform probability law on $(0,1)$:
$\Lambda(U\le t)=t$ for $0\le t\le1$. The two sequences are independent, so
the pairs $(Y_i,U_i)$ are IID in the sense of
[[def-identically-distributed-and-iid-random-variables]]. This contract
assumes exact draws; it makes no claim about a finite-precision pseudorandom
generator.

Define the measurable acceptance function
$$a(y):=\begin{cases} 0,&\tilde g(y)=0,\\ \min\!\left\{1,\dfrac{\tilde f(y)}{c\tilde g(y)}\right\},&\tilde g(y)>0. \end{cases}$$
It is measurable. The reciprocal extension $h:[0,\infty)\to[0,\infty)$,
$h(t)=1/t$ for $t>0$ and $h(0)=0$, is Borel: for every real $r$, its strict
upper level set is $[0,\infty)$ if $r<0$, $(0,\infty)$ if $r=0$, and
$(0,1/r)$ if $r>0$. These are Borel sets in the subspace $[0,\infty)$ by
[[def-borel-sigma-algebra]], so the threshold characterization
[[thm-threshold-characterisations-of-real-and-extended-real-measurability]]
applies. Equivalently,
$a(y)=\min\{1,\tilde f(y)h(\tilde g(y))/c\}$. Arithmetic operations and Borel
composition preserve measurability by
[[thm-arithmetic-and-lattice-operations-preserve-measurability]] and
[[thm-composition-with-borel-functions-preserves-measurability]]. On the
envelope set this is exactly $\tilde f(y)/(c\tilde g(y))$. If the quotient
exceeds $1$ at an exceptional point, replacing it by $1$ does not change the
test $U_i\le\tilde f(y)/(c\tilde g(y))$, since $U_i\in(0,1)$.

**Procedure.** For $i=1,2,\ldots$, draw $(Y_i,U_i)$. If $U_i\le a(Y_i)$,
return $Y_i$ and stop; otherwise continue to the next pair. When
$\tilde f=f$ and $\tilde g=g$ are normalized densities, integrating
$f\le cg$ gives $c\ge1$, and the rule is the usual threshold $f(Y_i)/(cg(Y_i))$.
