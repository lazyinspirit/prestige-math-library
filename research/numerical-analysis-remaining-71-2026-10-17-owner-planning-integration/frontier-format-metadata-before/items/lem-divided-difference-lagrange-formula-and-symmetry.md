---
id: lem-divided-difference-lagrange-formula-and-symmetry
kind: lemma
title: Divided differences are symmetric leading coefficients
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
deps:
  - def-distinct-node-divided-difference
  - def-cardinal-polynomial-interpolation
  - thm-cardinal-polynomial-interpolant-exists-uniquely
  - def-natural-numbers
  - thm-induction-principle
dependency_level: 1
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Lloyd N. Trefethen, Approximation Theory and Approximation Practice, Chapter 5
      url: https://people.maths.ox.ac.uk/trefethen/ATAP/ATAPfirst6chapters.pdf
    - title: Jean-Paul Berrut and Lloyd N. Trefethen, Barycentric Lagrange Interpolation, Sections 2–3
      url: https://people.maths.ox.ac.uk/trefethen/barycentric.pdf
---

## Statement

For distinct real nodes $t_0,\ldots,t_q$ and assigned values $f(t_j)$,
$$
f[t_0,\ldots,t_q]
=\sum_{j=0}^{q}\frac{f(t_j)}{\prod_{\substack{0\le k\le q\\k\ne j}}(t_j-t_k)}.
$$
Consequently the divided difference is symmetric in its nodes. It is the
coefficient of $t^q$ in the unique polynomial of degree at most $q$ that takes
the assigned values at those nodes.

## Facts & Assumptions

**Given:** $q\in\mathbb N$, distinct real nodes $t_0,\ldots,t_q$, and real data $f(t_0),\ldots,f(t_q)$.

[F1] [[def-distinct-node-divided-difference]]: the order-zero value is $f[t_0]=f(t_0)$ and the recursive rule is
$f[t_0,\ldots,t_q]=(f[t_1,\ldots,t_q]-f[t_0,\ldots,t_{q-1}])/(t_q-t_0)$ for $q\ge1$.

[F2] [[def-cardinal-polynomial-interpolation]] and [[thm-cardinal-polynomial-interpolant-exists-uniquely]]: the cardinal Lagrange sum for these nodes is the unique real polynomial of degree at most $q$ taking the assigned values.

[F3] [[def-natural-numbers]]: $0\in\mathbb N$, so the order-zero case is included.

[F4] [[thm-induction-principle]]: a property true at $0$ and preserved by successor holds for every natural number.

## Proof

1.1 For each $j$ define
$L_j(t)=\prod_{k\ne j}(t-t_k)/(t_j-t_k)$. Its denominators are nonzero, and
$L_j(t_k)$ equals $1$ when $k=j$ and $0$ otherwise. By [F2],
$P(t)=\sum_{j=0}^q f(t_j)L_j(t)$ is the unique polynomial of degree at most
$q$ taking the assigned values. [given, F2, construct, algebra]

1.2 The coefficient of $t^q$ in $P$ is the displayed sum, because the leading
coefficient of $L_j$ is
$1/\prod_{k\ne j}(t_j-t_k)$. The sum is unchanged by any permutation of the
nodes, since the permutation only reorders its terms and their symmetric
denominators. [step 1.1, algebra]

2.1 We prove that the recursively defined divided difference equals this
leading coefficient by induction on $q$ using [F4]. Since $0\in\mathbb N$ by [F3], for
$q=0$ both are $f(t_0)$. For
$q\ge1$, substitute the induction formula for the two order-$(q-1)$
differences in [F1] and divide by $t_q-t_0$. For an interior index
$0<j<q$, the resulting coefficient of $f(t_j)$ is
$$
\frac{1}{t_q-t_0}
\left(\frac{1}{t_j-t_q}-\frac{1}{t_j-t_0}\right)
\frac{1}{\prod_{\substack{1\le k\le q-1\\k\ne j}}(t_j-t_k)}
=\frac{1}{\prod_{k\ne j}(t_j-t_k)}.
$$
For $j=0$, only the second recursive term contributes and its minus sign
supplies the missing factor $t_0-t_q$; for $j=q$, only the first term
contributes and division supplies $t_q-t_0$. Their coefficients are also
$1/\prod_{k\ne j}(t_j-t_k)$. This is exactly the coefficient in step 1.2.
[F1, F3, F4, step 1.2, algebra, induction] ∎
