---
id: lem-cardinal-lagrange-interpolation-and-operator-norm
kind: lemma
title: "Chebyshev cardinal interpolation reproduces polynomials and its norm is the cardinal sum"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-best-uniform-polynomial-approximation-error-and-chebyshev-interpolants
  - thm-nonzero-real-polynomial-has-at-most-degree-many-distinct-roots
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Lloyd N. Trefethen, Approximation Theory and Approximation Practice, Ch. 5"
      url: "https://people.maths.ox.ac.uk/trefethen/ATAP/first6.pdf"
      locator: "Printed pp. 34–36, Lagrange cardinal polynomials and barycentric formula"
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, Polynomial interpolation"
      url: "https://fncbook.com/polyinterp/"
      locator: "Complete article, Definition 2.1.1 and §2.1.1"
verification:
  precheck: pass
---

## Statement

For either Chebyshev node family and every $n\geq0$, the cardinal
polynomials in [[def-best-uniform-polynomial-approximation-error-and-chebyshev-interpolants]]
satisfy $\ell_{j,n}^{\sigma}(x_k^{\sigma,n})=1$ when $j=k$ and $0$
otherwise. They are the unique degree-at-most-$n$ polynomials with those
cardinal values. Consequently $I_n^\sigma p=p$ for every $p\in\mathcal P_n$.
Moreover,
$$\Lambda_n^\sigma= \sup_{x\in[-1,1]}\sum_{j=0}^n|\ell_{j,n}^{\sigma}(x)|.$$

## Facts & Assumptions
**Given:** An integer $n\geq0$, one of the two node families, and
$p\in\mathcal P_n$.

[F1] [[def-best-uniform-polynomial-approximation-error-and-chebyshev-interpolants]]: the node families are distinct, $\ell_j=\prod_{k\ne j}(x-x_k)/(x_j-x_k)$, $I_nf=\sum_jf(x_j)\ell_j$, and $\Lambda_n=\sup_{\|g\|_\infty\leq1}\|I_ng\|_\infty$.

[F2] [[thm-nonzero-real-polynomial-has-at-most-degree-many-distinct-roots]]: a nonzero real polynomial of degree at most $n$ has at most $n$ distinct real roots.

## Proof

1.1 In the product defining $\ell_j$, substitution of $x_j$ makes every factor $1$, and substitution of a different node $x_k$ makes the factor indexed by $k$ zero. Thus the cardinal values hold. [given, F1, algebra]

1.2 If two polynomials of degree at most $n$ have these cardinal values, their difference vanishes at all $n+1$ distinct nodes. The root bound [F2] forces that difference to be zero, proving uniqueness. [given, F1, F2, algebra]

1.3 Put $L(x)=\sum_j|\ell_{j,n}^\sigma(x)|$. For every $g$ with $\|g\|_\infty\leq1$, the defining sum gives $|I_n^\sigma g(x)|\leq L(x)$, hence $\Lambda_n^\sigma\leq\sup_xL(x)$. [given, F1, algebra]

2.1 The polynomial $I_n^\sigma p-p$ has degree at most $n$ and vanishes at all $n+1$ distinct nodes by step 1.1. The root bound [F2] makes it zero, so $I_n^\sigma p=p$. [given, F1, F2, step 1.1, algebra]

3.1 Fix $x$. Prescribe $\operatorname{sgn}(\ell_{j,n}^\sigma(x))$ at each node, with $\operatorname{sgn}(0)=0$, sort nodes increasingly, interpolate these values linearly, and extend constantly to the interval endpoints. The resulting continuous $g_x$ has norm at most $1$ and $I_n^\sigma g_x(x)=L(x)$, so $\Lambda_n^\sigma\geq\|I_n^\sigma g_x\|_\infty\geq L(x)$. Taking the supremum in $x$ and using step 1.3 proves equality. For $n=0$ the same construction is constant on the one-node interval. [given, F1, step 1.3, construct, algebra] ∎
