---
id: lem-hermite-genocchi-simplex-integral
kind: lemma
title: Hermite–Genocchi simplex formula for divided differences
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
deps:
  - def-distinct-node-divided-difference
  - lem-divided-difference-lagrange-formula-and-symmetry
  - def-natural-numbers
  - def-higher-derivatives-and-smoothness
  - thm-newton-leibniz-with-interior-derivative
  - thm-induction-principle
dependency_level: 2
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Michael S. Floater and Kai Hormann, Barycentric rational interpolation with no poles and high rates of approximation, Section 3
      url: https://www.mn.uio.no/math/english/people/aca/michaelf/papers/rational.pdf
    - title: Jean-Paul Berrut and Lloyd N. Trefethen, Barycentric Lagrange Interpolation, Sections 2–3
      url: https://people.maths.ox.ac.uk/trefethen/barycentric.pdf
---

## Statement

Let $q\in\mathbb N$, let $f\in C^q([a,b])$, and let
$t_0,\ldots,t_q\in[a,b]$ be distinct real nodes. For $q\ge1$, define
$$
\Delta_q=\{(u_1,\ldots,u_q)\in[0,\infty)^q:\ u_1+\cdots+u_q\le1\},
\qquad
u_0=1-\sum_{j=1}^q u_j.
$$
Then
$$
f[t_0,\ldots,t_q]
=\int_{\Delta_q}f^{(q)}\!\left(\sum_{j=0}^q u_jt_j\right)
\,du_1\cdots du_q,
\qquad
\operatorname{vol}(\Delta_q)=\frac1{q!}.
$$
For $q=0$, the integral is by convention evaluation at $t_0$, and
$\operatorname{vol}(\Delta_0):=1$.
For $q\ge1$, the integral over $\Delta_q$ is the iterated Riemann integral
with $0\le u_1\le1$ and, successively,
$0\le u_j\le1-\sum_{k=1}^{j-1}u_k$ for $2\le j\le q$.

## Facts & Assumptions

**Given:** $q\in\mathbb N$, $f\in C^q([a,b])$, and distinct nodes
$t_0,\ldots,t_q\in[a,b]$.

[F1] [[def-distinct-node-divided-difference]]: divided differences satisfy the recursive endpoint rule.

[F2] [[lem-divided-difference-lagrange-formula-and-symmetry]]: divided differences are symmetric in their nodes.

[F3] [[def-higher-derivatives-and-smoothness]]: $f\in C^q$ means its derivatives through order $q$ exist and are continuous, including their one-sided endpoint extensions.

[F4] [[thm-newton-leibniz-with-interior-derivative]]: for a continuous function on a closed interval whose interior derivative has a Riemann-integrable extension, the integral of that extension is the endpoint increment.

[F5] [[def-natural-numbers]]: $0\in\mathbb N$, so the order-zero base case is included.

[F6] [[thm-induction-principle]]: a property true at $0$ and preserved by successor holds for every natural number.

## Proof

1.1 For $q=0$, which is allowed by [F5], the integral convention gives
$f(t_0)=f[t_0]$ and the zero-dimensional simplex has volume one.
[given, F1, F5]

1.2 By [F6], use induction on $q\in\mathbb N$. Suppose the formula is
established in order $q-1$, where $q\ge1$. In the
recursive rule [F1], express the two order-$(q-1)$ divided differences by the
induction hypothesis. The bottom face $u_q=0$ has argument
$t_0+\sum_{j=1}^{q-1}u_j(t_j-t_0)$ and gives
$f[t_0,\ldots,t_{q-1}]$. On the top face
$u_q=1-\sum_{j=1}^{q-1}u_j$, the same argument is
$t_q+\sum_{j=1}^{q-1}u_j(t_j-t_q)$ and gives
$f[t_1,\ldots,t_q]$ by symmetry [F2]. For fixed
$u_1,\ldots,u_{q-1}$ with sum less than $1$, the derivative with respect to
$u_q$ of
$$
f^{(q-1)}\!\left(t_0+\sum_{j=1}^{q}u_j(t_j-t_0)\right)
$$
is $(t_q-t_0)f^{(q)}(\sum_{j=0}^q u_jt_j)$. The derivative is continuous by
[F3], hence Riemann integrable. Applying [F4] on the $u_q$ interval, followed
by integration over the other coordinates, shows
that the difference of the two face integrals is $(t_q-t_0)$ times the
$q$-dimensional integral in the statement. When the outer coordinates sum to
$1$, the inner $u_q$ interval is $[0,0]$ and its integral is zero; for $q=1$
there are no outer coordinates and the interval is $[0,1]$. Division by
$t_q-t_0\ne0$ gives the order-$q$ formula.
[F1, F2, F3, F4, F6, induction, algebra]

2.1 By [F6], prove the volume formula by induction, with its $q=0$ case from
step 1.1. For $q\ge1$, fix the outer
coordinate $u_1\in[0,1]$. The remaining coordinates form a $(q-1)$-simplex
scaled by $1-u_1$. If $q=1$, its zero-dimensional volume is $1$; if $q\ge2$
and $u_1<1$, the dilation to $\Delta_{q-1}$ has Jacobian
$(1-u_1)^{q-1}$, while the section at $u_1=1$ has $(q-1)$-volume zero.
Thus, by induction, the section volume is
$(1-u_1)^{q-1}/(q-1)!$. The function
$H(u)=-(1-u)^q/q!$ has derivative
$(1-u)^{q-1}/(q-1)!$; applying [F4] to $H$ on $[0,1]$ gives
$H(1)-H(0)=1/q!$.
$$
\operatorname{vol}(\Delta_q)
=\int_0^1\frac{(1-u_1)^{q-1}}{(q-1)!}\,du_1
=\frac1{q!}.
$$
The induction and the divided-difference identity prove the statement.
[step 1.1, F4, F6, induction, algebra] ∎
