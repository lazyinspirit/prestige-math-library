---
id: def-generalized-kostant-partition-function
kind: definition
title: Generalized Kostant partition function
deps: ["def-kac-moody-formal-character-completion", "def-kac-moody-denominator-product-with-root-multiplicities"]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Kleshchev, Corollary 10.2.2
      url: https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf
    - title: Perrin, Section 11.2
      url: https://lmv.math.cnrs.fr/wp-content/uploads/2019/09/km-suite.pdf
status: published
origin: pipeline
---

## Definition

In the formal completion of [[def-kac-moody-formal-character-completion]], let $P$ be the root-multiplicity product of [[def-kac-moody-denominator-product-with-root-multiplicities]]. Define the **generalized Kostant partition function** by
$$P^{-1}=\sum_{\beta\in Q^+}K(\beta)e^{-\beta},\qquad K(\gamma)=0\quad(\gamma\notin Q^+).$$

For a root of multiplicity $m$ its inverse factor is $(1-x)^{-m}=(\sum_{a\ge0}x^a)^m=\sum_{a\ge0}\binom{m+a-1}{a}x^a$. The coefficient counts the $m$ nonnegative integers summing to $a$: place $m-1$ separators among $a+m-1$ positions. Equivalently $K(\beta)$ counts collections of nonnegative integers $n_{\alpha,j}$, with $1\le j\le\dim\mathfrak g_\alpha$, satisfying $\sum_{\alpha,j}n_{\alpha,j}\alpha=\beta$. Colors are these integer labels, requiring no choices of root-space bases.

For $\beta=\sum b_i\alpha_i$, only roots with coordinates between zero and $b_i$ can occur, a finite set; each has finite multiplicity and each count is bounded by $\sum b_i$. Thus this is a finite count and agrees with the formal inverse by multiplying the finite coefficients. At $\beta=0$ all counts are zero, giving $K(0)=1$. An empty root system therefore gives only this value. Imaginary roots receive all their multiplicity colors just as real roots do. No analytic convergence or AC is involved.
