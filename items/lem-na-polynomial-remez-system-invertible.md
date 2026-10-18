---
id: lem-na-polynomial-remez-system-invertible
kind: lemma
title: "The Remez alternation linear system has a unique solution"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps:
  - def-na-best-polynomial-uniform-error
  - def-real-polynomial-degree-leading-coefficient-and-monic
  - lem-na-polynomial-alternating-signs-force-root-count
  - thm-nonzero-real-polynomial-has-at-most-degree-many-distinct-roots
  - thm-rank-nullity
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Ricardo Pachón and Lloyd N. Trefethen, Barycentric-Remez Algorithms for Best Polynomial Approximation in the Chebfun System, §2.1"
      url: "https://people.maths.ox.ac.uk/trefethen/remez_new2.pdf"
      locator: "Printed pp. 5–6, equation (2.6) and the trial reference system."
    - title: "Lloyd N. Trefethen, Approximation Theory and Approximation Practice, Chapter 10"
      url: "https://people.math.ethz.ch/~hiptmair/Seminars/RAP_22/TRE13.pdf"
      locator: "Printed pp. 73–79, polynomial minimax and alternation."
---

## Statement

Let $n\ge0$, let $I=[a,b]$ with $a<b$, let $f:I\to\mathbb R$ be any function,
and let $x_0<\cdots<x_{n+1}$ be distinct nodes in $I$. There is a unique pair
$(p,\lambda)\in\mathcal P_n(I)\times\mathbb R$ satisfying
$$p(x_i)+(-1)^i\lambda=f(x_i),\qquad 0\le i\le n+1.$$

## Facts & Assumptions

**Given:** $n\ge0$, $I=[a,b]$ with $a<b$, a real function $f$ defined at the nodes, and ordered distinct nodes $x_0,\ldots,x_{n+1}$ in $I$.

[F1] [[lem-na-polynomial-alternating-signs-force-root-count]]: a nonzero polynomial of degree at most $n$ cannot take nonzero alternating signs at $n+2$ ordered real nodes.

[F2] [[thm-rank-nullity]]: for a linear map between finite-dimensional vector spaces, the domain dimension is the sum of its kernel dimension and image dimension.

[F3] [[def-na-best-polynomial-uniform-error]]: $\mathcal P_n(I)$ is the space of restrictions to $I$ of real polynomials of degree at most $n$.

[F4] [[def-real-polynomial-degree-leading-coefficient-and-monic]]: every real polynomial of degree at most $n$ is represented by a coefficient sum $\sum_{j=0}^n c_jx^j$.

[F5] [[thm-nonzero-real-polynomial-has-at-most-degree-many-distinct-roots]]: a nonzero real polynomial of degree at most $n$ has at most $n$ distinct real roots.

## Proof

1.1 Define the linear map $T:\mathcal P_n(I)\times\mathbb R\to\mathbb R^{n+2}$ by $T(p,\lambda)_i=p(x_i)+(-1)^i\lambda$. Choose a polynomial representative $P$ of $p$ using [F3] and [F4]. If $T(p,\lambda)=0$ and $\lambda=0$, then $P$ vanishes at all $n+2$ distinct nodes, so [F5] forces $P=0$ and hence $p=0$. If $\lambda\ne0$, then $P(x_i)=-(-1)^i\lambda$ are nonzero alternating values, so $P$ is nonzero and [F1] rules this out. Thus $\ker T=\{(0,0)\}$. [given, F1, F3, F4, F5, construct]

2.1 The restrictions of $1,x,\ldots,x^n$ span $\mathcal P_n(I)$ by [F3] and [F4]. If a linear combination of them restricts to zero on $I$, its representing polynomial vanishes at $x_0,\ldots,x_n$. These are $n+1$ distinct roots, so [F5] makes that polynomial zero; the coefficient representation then makes every coefficient zero. Thus the restrictions are linearly independent and form a basis, so $\dim\mathcal P_n(I)=n+1$. Therefore $(1,0),(x,0),\ldots,(x^n,0),(0,1)$ is a basis of the domain, while the standard coordinate vectors form a basis of the codomain; both dimensions are $n+2$. By [F2] and step 1.1, $T$ has image dimension $n+2$ and is therefore bijective. Its equation $T(p,\lambda)_i=f(x_i)$ has exactly one solution. [given, F2, F3, F4, F5, step 1.1, algebra] ∎
