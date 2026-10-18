---
id: thm-floater-hormann-error-rate-bv
kind: theorem
title: Floater–Hormann error bounds for a bounded-variation highest derivative
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
deps:
  - def-floater-hormann-interpolant
  - lem-floater-hormann-weight-and-blend-identity
  - lem-floater-hormann-window-newton-remainder
  - lem-hermite-genocchi-simplex-integral
  - lem-hermite-genocchi-bv-window-variation
  - lem-floater-hormann-denominator-lower-bound
  - thm-floater-hormann-no-real-poles
  - def-bounded-variation-and-total-variation
  - def-floater-hormann-local-mesh-ratio
  - lem-floater-hormann-local-mesh-ratio-bounded-by-global
  - def-higher-derivatives-and-smoothness
  - def-natural-numbers
  - thm-extreme-value-r
  - lem-mean-value-theorem-on-closed-interval
dependency_level: 8
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Michael S. Floater and Kai Hormann, Barycentric rational interpolation with no poles and high rates of approximation, Sections 2–3
      url: https://www.mn.uio.no/math/english/people/aca/michaelf/papers/rational.pdf
---

## Statement

Let $n\ge1$, $0\le d<n$, and $x_0<\cdots<x_n$ be real nodes in
$[a,b]=[x_0,x_n]$. Put
$h=\max_{0\le j<n}(x_{j+1}-x_j)$, $m=n-d$, and
$\epsilon=1$ if $m$ is even and $\epsilon=0$ if $m$ is odd. Let
$f\in C^{d+1}([a,b])$, set $g=f^{(d+1)}$, and suppose $g$ has finite total
variation $V=\operatorname{Var}_{[a,b]}(g)$ as defined in
[[def-bounded-variation-and-total-variation]]. For a continuous $q$ on
$[a,b]$, write $\|q\|_\infty=\sup_{x\in[a,b]}|q(x)|$. If $d\ge1$, then
$$\|f-r_d\|_\infty \le \frac{h^{d+1}}{d+1}\bigl(V+\epsilon\|g\|_\infty\bigr),$$
If $d=0$, let $\beta$ be the local mesh ratio in
[[def-floater-hormann-local-mesh-ratio]]. Then
$$\|f-r_0\|_\infty\le h(1+\beta)\bigl(V+\epsilon\|f'\|_\infty\bigr).$$
No mesh-ratio restriction is needed when $d\ge1$. For $d=0$, a fixed global
mesh-ratio bound $\rho=h/h_{\min}$ implies $\beta\le\rho$ by
[[lem-floater-hormann-local-mesh-ratio-bounded-by-global]].

## Facts & Assumptions

**Given:** Ordered distinct nodes $x_0,\ldots,x_n$, $n\ge1$, $0\le d<n$, $f\in C^{d+1}([x_0,x_n])$, and $g=f^{(d+1)}$ of finite total variation $V$.

[F1] [[lem-floater-hormann-weight-and-blend-identity]] and [[lem-floater-hormann-window-newton-remainder]]: off the nodes,
$f(x)-r_d(x)=
\bigl(\sum_{i=0}^{n-d}(-1)^iG_i\bigr)/D(x)$ with
$G_i=f[x_i,\ldots,x_{i+d},x]$ and $D(x)=\sum_i\lambda_i(x)$.

[F2] [[lem-hermite-genocchi-bv-window-variation]]: the adjacent divided differences satisfy
$\sum_{i=0}^{n-d-1}|G_{i+1}-G_i|\le V/(d+1)!$.

[F3] [[lem-hermite-genocchi-simplex-integral]]: an order-$(d+1)$ divided difference is the simplex integral of $g$; the simplex volume is $1/(d+1)!$.

[F4] [[lem-floater-hormann-denominator-lower-bound]]: on an open gap, $|D(x)|\ge1/(d!h^{d+1})$ if $d\ge1$, and $|D(x)|\ge1/[h(1+\beta)]$ if $d=0$.

[F5] [[thm-floater-hormann-no-real-poles]]: the quotient is continuous on $[a,b]$ and interpolates the data at every node.

[F6] [[def-bounded-variation-and-total-variation]]: $V$ is the supremum of the sums of absolute successive increments over all finite partitions of $[a,b]$.

[F7] [[def-higher-derivatives-and-smoothness]]: $C^{d+1}$ means derivatives through order $d+1$ exist and are continuous on the closed interval; under the additional condition $f\in C^{d+2}$, the recursive definition gives $g'=f^{(d+2)}$.

[F8] [[lem-mean-value-theorem-on-closed-interval]]: on every partition subinterval, a function continuous on the closed subinterval and differentiable on its interior has an increment equal to its derivative at an interior point times the interval length.

[F9] [[def-natural-numbers]]: $\mathbb N$ contains $0$ and is closed under successor, so $d+1\in\mathbb N$.

[F10] [[thm-extreme-value-r]]: a continuous real function on a nonempty compact interval has a finite attained maximum and minimum.

## Proof

1.1 By [F9], $d+1\in\mathbb N$. Fix $x$ in an open node gap. By [F7], the derivatives in [F1] exist and are continuous. By [F1], $f(x)-r_d(x)=N(x)/D(x)$ with $N(x)=\sum_{i=0}^{m}(-1)^iG_i$. [F10] makes the derivative sup norm in the statement finite. Pair successive terms as $(G_0-G_1)+(G_2-G_3)+\cdots$. The sum of the absolute values of these pair differences is bounded by the full adjacent-increment sum in [F2], hence by $V/(d+1)!$. If $m$ is even there is one unpaired term $G_m$; otherwise there is none. [given, F1, F2, F9, F10, algebra]

2.1 The integral formula [F3] and its simplex volume give $|G_m|\le\|g\|_\infty/(d+1)!$. Thus in both parity cases $$|N(x)|\le\frac{V+\epsilon\|g\|_\infty}{(d+1)!}.$$ This bounds the numerator in either parity case. [given, F3, F10, step 1.1, algebra]

3.1 If $d\ge1$, divide step 2.1 by the lower bound $|D(x)|\ge1/(d!h^{d+1})$ from [F4] to obtain $$|f(x)-r_d(x)|\le\frac{h^{d+1}}{d+1} \bigl(V+\epsilon\|g\|_\infty\bigr).$$ This is the required open-gap bound for $d\ge1$. [given, F1, F4, step 2.1, algebra]

3.2 If $d=0$, $g=f'$ and [F4] instead gives $$|f(x)-r_0(x)|\le h(1+\beta) \bigl(V+\epsilon\|f'\|_\infty\bigr).$$ This is the required open-gap bound for $d=0$. [given, F1, F4, step 2.1, algebra]

4.1 At every node the error is zero by [F5]. Since $r_d$ has no real poles, $f-r_d$ is continuous on the compact interval and has a finite supremum by [F10]. The estimates on the open gaps therefore imply the stated supremum bounds. If $f\in C^{d+2}$, then for any partition [F8] gives $|g(t_{i+1})-g(t_i)|\le\|f^{(d+2)}\|_\infty(t_{i+1}-t_i)$; summing and taking the supremum yields $V\le(b-a)\|f^{(d+2)}\|_\infty$. [given, F5, F6, F7, F8, F10, step 3.1, step 3.2, algebra] ∎

