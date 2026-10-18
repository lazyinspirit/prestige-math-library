---
id: thm-floater-hormann-error-rate-c2
kind: theorem
title: Floater–Hormann C^(d+2) parity error bounds
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
deps:
  - def-floater-hormann-interpolant
  - lem-floater-hormann-weight-and-blend-identity
  - lem-floater-hormann-window-newton-remainder
  - lem-divided-difference-repeated-rolle-bound
  - lem-adjacent-window-divided-difference-recurrence
  - lem-floater-hormann-denominator-lower-bound
  - thm-floater-hormann-no-real-poles
  - def-floater-hormann-local-mesh-ratio
  - lem-floater-hormann-local-mesh-ratio-bounded-by-global
  - def-higher-derivatives-and-smoothness
  - def-natural-numbers
  - thm-extreme-value-r
dependency_level: 8
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Michael S. Floater and Kai Hormann, Barycentric rational interpolation
        with no poles and high rates of approximation, Theorems 2–3
      url: https://www.mn.uio.no/math/english/people/aca/michaelf/papers/rational.pdf
verification:
  precheck: pass
---

## Statement

Let $n\ge1$, $0\le d<n$, and $x_0<\cdots<x_n$ be real nodes in
$[a,b]=[x_0,x_n]$. Put
$h=\max_{0\le j<n}(x_{j+1}-x_j)$, $m=n-d$, and
$\epsilon=1$ if $m$ is even and $\epsilon=0$ if $m$ is odd. Let
$f\in C^{d+2}([a,b])$ and let $r_d$ be the exact Floater–Hormann interpolant.
For a continuous $q$ on $[a,b]$, write
$\|q\|_\infty=\sup_{x\in[a,b]}|q(x)|$. If $d\ge1$, then
$$\|f-r_d\|_\infty \le h^{d+1}\left( \frac{(b-a)\|f^{(d+2)}\|_\infty}{d+2} +\epsilon\frac{\|f^{(d+1)}\|_\infty}{d+1} \right).$$
If $d=0$, let $\beta$ be the local mesh ratio in
[[def-floater-hormann-local-mesh-ratio]]. Then
$$\|f-r_0\|_\infty \le h(1+\beta)\left( \frac{(b-a)\|f''\|_\infty}{2} +\epsilon\|f'\|_\infty \right).$$
No quasi-uniformity hypothesis is needed when $d\ge1$. If $d=0$, a bound
$\beta\le\rho$ follows from a global mesh-ratio bound $\rho$ by
[[lem-floater-hormann-local-mesh-ratio-bounded-by-global]].

## Facts & Assumptions

**Given:** Ordered distinct nodes $x_0,\ldots,x_n$, an integer $0\le d<n$, $f\in C^{d+2}([x_0,x_n])$, and the exact Floater–Hormann interpolant.

[F1] [[lem-floater-hormann-weight-and-blend-identity]] and [[lem-floater-hormann-window-newton-remainder]]: off the nodes,
$f(x)-r_d(x)=
\bigl(\sum_{i=0}^{n-d}(-1)^i f[x_i,\ldots,x_{i+d},x]\bigr)/
\bigl(\sum_i\lambda_i(x)\bigr)$.

[F2] [[lem-adjacent-window-divided-difference-recurrence]]: adjacent terms satisfy
$G_i-G_{i+1}=-(x_{i+d+1}-x_i)f[x_i,\ldots,x_{i+d+1},x]$.

[F3] [[lem-divided-difference-repeated-rolle-bound]]: for $f\in C^q$, an order-$q$ divided difference has magnitude at most $\|f^{(q)}\|_\infty/q!$.

[F4] [[lem-floater-hormann-denominator-lower-bound]]: on each open gap the denominator has magnitude at least $1/(d!h^{d+1})$ for $d\ge1$, and at least $1/[h(1+\beta)]$ for $d=0$.

[F5] [[thm-floater-hormann-no-real-poles]]: the quotient has no real poles and interpolates the data at every node.

[F6] [[def-higher-derivatives-and-smoothness]]: $C^{d+2}$ means derivatives through order $d+2$ exist and are continuous on the closed interval, with one-sided endpoint derivatives.

[F7] [[def-natural-numbers]]: $\mathbb N$ contains $0$ and is closed under successor, so $d+1,d+2\in\mathbb N$.

[F8] [[thm-extreme-value-r]]: a continuous real function on a nonempty compact interval has a finite attained maximum and minimum.

## Proof

1.1 Fix a point $x$ in an open node gap. By [F6], the stated smoothness hypothesis supplies the derivatives used below. By [F8], their sup norms are finite. By [F1], the error equals $N(x)/D(x)$, where $$N(x)=\sum_{i=0}^{m}(-1)^iG_i,\qquad G_i=f[x_i,\ldots,x_{i+d},x],\qquad D(x)=\sum_i\lambda_i(x).$$ This identity follows by writing $f-r_d=\sum_i\lambda_i(f-p_i)/D$ and substituting the window remainder; $\lambda_i\prod_{k=i}^{i+d}(x-x_k)=(-1)^i$. [given, F1, F6, F8, algebra]

2.1 Pair the terms of $N$ as $(G_0-G_1)+(G_2-G_3)+\cdots$. If $m$ is odd, these pairs exhaust the sum. If $m$ is even, the final term $G_m$ remains. By [F2] each pair is $-(x_{i+d+1}-x_i)f[x_i,\ldots,x_{i+d+1},x]$. The order-$(d+2)$ Rolle bound [F3] bounds its divided difference by $\|f^{(d+2)}\|_\infty/(d+2)!$. Each interval length $x_{i+d+1}-x_i$ is the sum of $d+1$ adjacent mesh gaps, and each gap occurs in at most $d+1$ windows. Hence the sum of lengths over the even indices in the pairing is at most $(d+1)(b-a)$. [given, F2, F3, F7, F8, step 1.1, algebra]

3.1 If $m$ is odd, step 2.1 gives $|N|\le (d+1)(b-a)\|f^{(d+2)}\|_\infty/(d+2)!$. If $m$ is even, it gives the same bound plus $|G_m|\le\|f^{(d+1)}\|_\infty/(d+1)!$ by [F3] and [F7]. Thus both cases are $$|N|\le \frac{(d+1)(b-a)\|f^{(d+2)}\|_\infty}{(d+2)!} +\epsilon\frac{\|f^{(d+1)}\|_\infty}{(d+1)!}.$$ This bounds the numerator in either parity case. [given, F3, F7, F8, step 2.1, algebra]

4.1 If $d\ge1$, divide the numerator bound in step 3.1 by $|D|\ge1/(d!h^{d+1})$ from [F4]. Simplifying factorials gives $$|f(x)-r_d(x)| \le h^{d+1}\left( \frac{(b-a)\|f^{(d+2)}\|_\infty}{d+2} +\epsilon\frac{\|f^{(d+1)}\|_\infty}{d+1} \right).$$ This is the required open-gap bound for $d\ge1$. [given, F1, F4, step 3.1, algebra]

4.2 If $d=0$, the same numerator bound in step 3.1, with $|D|\ge1/[h(1+\beta)]$ from [F4], gives $$|f(x)-r_0(x)| \le h(1+\beta)\left( \frac{(b-a)\|f''\|_\infty}{2} +\epsilon\|f'\|_\infty \right).$$ This is the required open-gap bound for $d=0$. [given, F1, F4, step 3.1, algebra]

5.1 At every node the error is zero by [F5]. The no-real-pole property makes $r_d$ continuous on the compact interval, so the pointwise estimates on the open gaps extend to the supremum over all $[a,b]$; finiteness of that supremum follows from [F8]. The two cases prove the stated bounds. [given, F5, F8, step 4.1, step 4.2] ∎

