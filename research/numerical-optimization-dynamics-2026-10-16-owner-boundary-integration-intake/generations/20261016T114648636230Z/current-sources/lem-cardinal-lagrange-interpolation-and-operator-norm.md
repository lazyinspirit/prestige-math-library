---
id: lem-cardinal-lagrange-interpolation-and-operator-norm
kind: lemma
title: "Chebyshev cardinal interpolation reproduces polynomials and its norm is the cardinal sum"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - def-best-uniform-polynomial-approximation-error-and-chebyshev-interpolants
  - lem-cardinal-basis-degree-and-values
  - thm-cardinal-polynomial-interpolant-exists-uniquely
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

[F2] [[thm-cardinal-polynomial-interpolant-exists-uniquely]]: at increasingly
ordered distinct real nodes, the supplied cardinal sum is the unique real
polynomial of degree at most $n$ interpolating its prescribed data, including
$n=0$.

[F3] [[lem-cardinal-basis-degree-and-values]]: the supplied cardinal functions
are degree-$n$ polynomials with Kronecker node values, and their data sum is
a polynomial of degree at most $n$.

## Proof

1.1 Put $z_i=x_{n-i}$, so $z_0<\cdots<z_n$ by [F1]. Under this reverse indexing, the supplier cardinal function at index $n-j$ is $\ell_j$ by the specialization in [F1]. Applying [F3] gives its degree and cardinal values, including the one-node empty-product case $n=0$. [given, F1, F3, construct, algebra]

1.2 Put $L(x)=\sum_j|\ell_{j,n}^\sigma(x)|$. For every $g$ with $\|g\|_\infty\leq1$, the defining sum gives $|I_n^\sigma g(x)|\leq L(x)$, hence $\Lambda_n^\sigma\leq\sup_xL(x)$. [given, F1, algebra]

2.1 Prescribe data $y_i=1$ at $i=n-j$ and $0$ otherwise on the increasingly ordered nodes $z_i$ from step 1.1. The polynomial $\ell_j$ has these data by step 1.1. The supplier uniqueness theorem [F2] makes it the unique degree-at-most-$n$ polynomial with the required cardinal values. [given, F1, F2, step 1.1, construct]

2.2 Prescribe $y_i=p(z_i)$ on the ordered nodes in step 1.1. By [F1] and [F3], their cardinal sum is $I_n^\sigma p$ and has degree at most $n$. The polynomial $p$ itself interpolates those data, so the supplier uniqueness theorem [F2] gives $I_n^\sigma p=p$. [given, F1, F2, F3, step 1.1, algebra]

3.1 Fix $x$. Prescribe $\operatorname{sgn}(\ell_{j,n}^\sigma(x))$ at each node, with $\operatorname{sgn}(0)=0$, sort nodes increasingly, interpolate these values linearly, and extend constantly to the interval endpoints. The resulting continuous $g_x$ has norm at most $1$ and $I_n^\sigma g_x(x)=L(x)$, so $\Lambda_n^\sigma\geq\|I_n^\sigma g_x\|_\infty\geq L(x)$. Taking the supremum in $x$ and using step 1.2 proves equality. For $n=0$ the same construction is constant on the one-node interval. [given, F1, step 1.2, construct, algebra] ∎

