---
id: lem-floater-hormann-weight-and-blend-identity
kind: lemma
title: Floater–Hormann weights equal the local-polynomial blend weights
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
deps:
  - def-floater-hormann-interpolant
  - def-floater-hormann-window-polynomial
  - lem-floater-hormann-window-polynomial-interpolates
  - def-barycentric-rational-quotient
dependency_level: 5
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Michael S. Floater and Kai Hormann, Barycentric rational interpolation with no poles and high rates of approximation, Sections 2 and 4
      url: https://www.mn.uio.no/math/english/people/aca/michaelf/papers/rational.pdf
    - title: Jean-Paul Berrut and Lloyd N. Trefethen, Barycentric Lagrange Interpolation, Section 9.2
      url: https://people.maths.ox.ac.uk/trefethen/barycentric.pdf
---

## Statement

For $n\ge1$ and $0\le d<n$, define
$$\lambda_i(x)=\frac{(-1)^i}{\prod_{k=i}^{i+d}(x-x_k)},\qquad \mu_i(x)=\prod_{j<i}(x-x_j)\prod_{k>i+d}(x_k-x), \qquad 0\le i\le n-d,$$
where empty products equal $1$. Put $s(x)=\sum_i\mu_i(x)$ and let $p_i$ be
the window polynomials in [[def-floater-hormann-window-polynomial]]. For
$x\notin\{x_0,\ldots,x_n\}$, the Floater–Hormann quotient is
$$r_d(x)=\frac{\sum_i\lambda_i(x)p_i(x)}{\sum_i\lambda_i(x)} =\frac{\sum_i\mu_i(x)p_i(x)}{s(x)}.$$
Moreover, clearing the node factors in the barycentric denominator gives
$\prod_{j=0}^n(x-x_j)\sum_i\lambda_i(x)=(-1)^{n-d}s(x)$.
After clearing and canceling the displayed factors, this is a polynomial
identity valid at every real $x$, including the nodes.
Expanding this expression into a support-node barycentric quotient gives
exactly the weights in [[def-floater-hormann-interpolant]]. Its continuous
values at the nodes are the assigned data.

## Facts & Assumptions

**Given:** $n\ge1$, ordered distinct real nodes $x_0<\cdots<x_n$, real data $f_j$, $0\le d<n$, and $m=n-d$.

[F1] [[def-floater-hormann-interpolant]]: the support weights are
$w_j=(-1)^{j-d}\sum_{i=\max(0,j-d)}^{\min(j,n-d)}
\prod_{i\le k\le i+d,\ k\ne j}|x_j-x_k|^{-1}$.

[F2] [[def-floater-hormann-window-polynomial]] and [[lem-floater-hormann-window-polynomial-interpolates]]: each window polynomial is its displayed Lagrange sum, has degree at most $d$, interpolates the window data, and the same Lagrange basis sums to $1$ for constant data.

[F3] [[def-barycentric-rational-quotient]]: the support quotient uses weights $w_j$ in both its numerator and denominator and takes the data values at its support nodes.

## Proof

1.1 Put $P_0(x)=\prod_{j=0}^n(x-x_j)$ and $m=n-d$. Counting the $m$ factors
to the right of a window gives
$$\mu_i(x)=(-1)^mP_0(x)\lambda_i(x).$$
Indeed, after cancellation each right factor $x_k-x$ contributes one minus
sign when rewritten as $x-x_k$, and the remaining denominator factors are
exactly the window nodes. Thus the cleared products agree as polynomials,
including at nodes; summing gives the stated cleared-denominator identity.
Away from nodes it also shows that the blend quotient with $\lambda_i$ equals
the quotient with $\mu_i$ and $s$. [given, construct, algebra]

1.2 Expand each $p_i$ using [F2], and interchange the two finite sums. The
coefficient of $f_j/(x-x_j)$ in $\sum_i\lambda_i p_i$ is
$$\widetilde w_j= \sum_{i=\max(0,j-d)}^{\min(j,n-d)} (-1)^i\prod_{\substack{i\le k\le i+d\\k\ne j}} \frac1{x_j-x_k}.$$
Within a window exactly $i+d-j$ factors $x_j-x_k$ are negative, so each
summand has sign $(-1)^{2i+d-j}=(-1)^{j-d}$ and absolute value
$\prod_{k\ne j}|x_j-x_k|^{-1}$. Thus $\widetilde w_j=w_j$ as in [F1].
[given, F1, F2, algebra]

1.3 The same expansion for constant data $f_k=1$ has each window polynomial
equal to $1$ by [F2]. Therefore the coefficient of $1/(x-x_j)$ in
$\sum_i\lambda_i$ is also $\widetilde w_j=w_j$. Dividing the expanded
numerator by the expanded denominator proves that the blend equals the
barycentric quotient in [F3] away from support nodes. [F1, F2, F3, step 1.2, algebra]

1.4 At a node $x_\alpha$, $\mu_i(x_\alpha)$ is zero unless
$\max(0,\alpha-d)\le i\le\min(\alpha,m)$; for these indices all its factors
are positive. This index set is nonempty, and every corresponding window
contains $x_\alpha$. By [F2], $p_i(x_\alpha)=f_\alpha$, so the blend has
numerator $f_\alpha s(x_\alpha)$ and $s(x_\alpha)>0$. Its value is therefore
$f_\alpha$, agreeing with the support convention in [F3]. [F2, F3, step 1.1, algebra] ∎
