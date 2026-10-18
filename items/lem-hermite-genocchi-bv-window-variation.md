---
id: lem-hermite-genocchi-bv-window-variation
kind: lemma
title: Bounded variation controls adjacent Hermite–Genocchi windows
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
deps:
  - lem-hermite-genocchi-simplex-integral
  - def-bounded-variation-and-total-variation
  - def-higher-derivatives-and-smoothness
  - def-natural-numbers
dependency_level: 3
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Michael S. Floater and Kai Hormann, Barycentric rational interpolation
        with no poles and high rates of approximation, Sections 2–3
      url: https://www.mn.uio.no/math/english/people/aca/michaelf/papers/rational.pdf
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Let $n\ge1$, let $0\le d<n$, let $x_0<\cdots<x_n$ be real nodes, and fix a real query point
$x\in[x_0,x_n]$ distinct from the nodes. Let $f\in C^{d+1}([x_0,x_n])$, put
$g=f^{(d+1)}$, and suppose $g$ has finite total variation
$V=\operatorname{Var}_{[x_0,x_n]}(g)$ as defined in
[[def-bounded-variation-and-total-variation]]. For $0\le i\le n-d$, put
$G_i=f[x_i,\ldots,x_{i+d},x]$. Then
$$\sum_{i=0}^{n-d-1}|G_{i+1}-G_i|\le \frac{V}{(d+1)!}.$$

## Facts & Assumptions

**Given:** $n\ge1$, $0\le d<n$, ordered real nodes $x_0<\cdots<x_n$, a distinct query point $x$ in their interval, $f\in C^{d+1}$, and $\operatorname{Var}(f^{(d+1)})=V<\infty$.

[F1] [[lem-hermite-genocchi-simplex-integral]]: an order-$(d+1)$ divided difference is the integral of $f^{(d+1)}$ over the standard simplex, whose volume is $1/(d+1)!$.

[F2] [[def-bounded-variation-and-total-variation]]: $V$ is the supremum, over finite partitions of the interval, of the sums of absolute successive increments of $g$.

[F3] [[def-higher-derivatives-and-smoothness]]: $C^{d+1}$ means that the derivatives through order $d+1$ exist and are continuous on the closed interval.

[F4] [[def-natural-numbers]]: $\mathbb N$ contains $0$ and is closed under successor, so $d+1\in\mathbb N$.

## Proof

1.1 By [F4], $d+1\in\mathbb N$, so apply [F1] to each $G_i$, using the same simplex coordinates for each window and using the final coordinate for the fixed point $x$. Thus $$G_i=\int_{\Delta_{d+1}}g(y_i(u))\,du,\qquad y_i(u)=u_xx+\sum_{k=0}^{d}u_kx_{i+k},$$ where all coefficients are nonnegative and sum to one. By [F3], $g$ is continuous on the closed interval. Therefore every $y_i(u)$ lies in $[x_0,x_n]$. [given, F1, F3, F4, construct]

2.1 For each fixed $u$, the sequence $y_0(u),y_1(u),\ldots,y_{n-d}(u)$ is nondecreasing: each summand $x_{i+k}$ is nondecreasing in $i$ and has coefficient $u_k\ge0$. Remove repeated values from this finite sequence and insert the interval endpoints; the definition [F2] then gives $$\sum_{i=0}^{n-d-1}|g(y_{i+1}(u))-g(y_i(u))|\le V.$$ Using [F1], the triangle inequality for integrals, and this pointwise bound, $$\sum_i|G_{i+1}-G_i| \le\int_{\Delta_{d+1}}\sum_i|g(y_{i+1}(u))-g(y_i(u))|\,du \le V\,\operatorname{vol}(\Delta_{d+1}) =\frac{V}{(d+1)!}.$$ This is the claimed total variation bound. [given, F1, F2, step 1.1, algebra] ∎

