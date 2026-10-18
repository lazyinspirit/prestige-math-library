---
id: lem-divided-difference-repeated-rolle-bound
kind: lemma
title: Rolle bound for a divided difference
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
deps:
  - def-distinct-node-divided-difference
  - lem-divided-difference-lagrange-formula-and-symmetry
  - def-higher-derivatives-and-smoothness
  - def-natural-numbers
  - thm-extreme-value-r
  - thm-rolle
dependency_level: 2
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Michael S. Floater and Kai Hormann, Barycentric rational interpolation
        with no poles and high rates of approximation, Theorems 2–3
      url: https://www.mn.uio.no/math/english/people/aca/michaelf/papers/rational.pdf
    - title: Lloyd N. Trefethen, Approximation Theory and Approximation Practice,
        Chapter 5
      url: https://people.maths.ox.ac.uk/trefethen/ATAP/ATAPfirst6chapters.pdf
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Let $a\le b$, $q\in\mathbb N$, let $f\in C^q([a,b])$, and let $t_0,\ldots,t_q$ be distinct
points of $[a,b]$. Then
$$
|f[t_0,\ldots,t_q]|\le \frac{\|f^{(q)}\|_{\infty,[a,b]}}{q!},
$$
where $0!:=1$, $f^{(0)}:=f$, and
$\|g\|_{\infty,[a,b]}:=\sup_{x\in[a,b]}|g(x)|$.

## Facts & Assumptions

**Given:** $a\le b$, $q\in\mathbb N$, $f\in C^q([a,b])$, and distinct nodes $t_0,\ldots,t_q\in[a,b]$.

[F1] [[def-distinct-node-divided-difference]] and [[lem-divided-difference-lagrange-formula-and-symmetry]]: the divided difference is the leading coefficient of the degree-at-most-$q$ Lagrange interpolant through the node data.

[F2] [[def-higher-derivatives-and-smoothness]]: $f\in C^q([a,b])$ means $f^{(j)}$ exists and is continuous on $[a,b]$ for every $0\le j\le q$, with one-sided endpoint derivatives.

[F3] [[thm-rolle]]: a function continuous on a closed interval, differentiable on its interior, and equal at the endpoints has an interior point where its derivative is zero.

[F4] [[def-natural-numbers]]: $0\in\mathbb N$, so the order-zero case is part of the stated range.

[F5] [[thm-extreme-value-r]]: a continuous real function on a nonempty compact subset of $\mathbb R$ has a finite attained maximum and minimum.

## Proof

1.1 If $q=0$, which is allowed by [F4], then $f[t_0]=f(t_0)$, so the claim is $|f(t_0)|\le\|f\|_{\infty,[a,b]}$. The norm is finite by [F5]. [given, F1, F4, F5]

2.1 Suppose $q\ge1$, and let $P$ be the Lagrange interpolant in [F1], with leading coefficient $c=f[t_0,\ldots,t_q]$. The function $g=f-P$ has a zero at each of the $q+1$ distinct ordered nodes. Order those nodes increasingly and apply [F3] on each consecutive interval to obtain $q$ distinct zeros of $g'$. Applying [F3] between consecutive zeros of $g'$ gives $q-1$ distinct zeros of $g''$; continuing, after $r$ rounds $g^{(r)}$ has $q+1-r$ distinct zeros. Because $f\in C^q$ by [F2] and $P$ is a polynomial, each derivative through order $q$ is continuous and its predecessor is differentiable, so every application satisfies [F3]. After $q$ rounds one zero $\xi$ of $g^{(q)}$ remains. Since $P$ has degree at most $q$ and leading coefficient $c$, its $q$th derivative is the constant $q!c$. Hence $f^{(q)}(\xi)=q!c$, and the claimed bound follows by taking absolute values. The derivative norm is finite by [F5]. [given, F1, F2, F3, F5, algebra] ∎

