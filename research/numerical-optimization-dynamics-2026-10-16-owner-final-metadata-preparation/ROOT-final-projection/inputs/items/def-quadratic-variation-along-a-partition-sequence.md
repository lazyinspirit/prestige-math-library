---
id: def-quadratic-variation-along-a-partition-sequence
kind: definition
title: "Quadratic variation along a partition sequence"
status: published
origin: pipeline
deps: [def-partition-and-refinement, def-continuity-real, thm-heine-borel-r]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Gregory F. Lawler, Stochastic Calculus: An Introduction with Applications, Section 2.8"
      url: "https://www.math.uchicago.edu/~lawler/finbook.pdf"
verification:
  audited: 2026-09-22
---

## Definition

Fix $T>0$ and a continuous function $x:[0,T]\to\mathbb R$
([[def-continuity-real]]). A **partition sequence of $[0,T]$** is a sequence
$(\pi_n)_{n\ge0}$ of partitions of $[0,T]$ in the sense of
[[def-partition-and-refinement]], written
$$\pi_n=(m_n,s^{(n)}),\qquad 0=s^{(n)}_0<s^{(n)}_1<\cdots<s^{(n)}_{m_n}=T,$$
whose **mesh** $\operatorname{mesh}(\pi_n):=\max_{1\le k\le m_n}\bigl(s^{(n)}_k-s^{(n)}_{k-1}\bigr)$
tends to zero as $n\to\infty$. The partitions need not refine one another and
no regularity of the points beyond mesh convergence is assumed. A family
originally indexed by positive integers is read as the zero-indexed family
$q_n=\pi_{n+1}$; this changes none of its limiting assertions.

For $t\in[0,T]$ two partial sums are attached to $(\pi_n)$. If $t$ is a
partition point, both are defined by the same formula; the cases $t=0$ and
$t=T$ are included, and an empty sum is $0$.

1. **Step convention.** With $k(t)$ the largest index in
   $\{0,\dots,m_n\}$ with $s^{(n)}_{k(t)}\le t$,
$$[x]^{\pi_n,\mathrm{step}}_t:=\sum_{k=1}^{k(t)}\bigl(x_{s^{(n)}_k}-x_{s^{(n)}_{k-1}}\bigr)^2 .$$
2. **Partial-increment convention.** On the interval $[s^{(n)}_{k(t)},s^{(n)}_{k(t)+1}]$ containing $t$ one also adds the terminal increment,
$$[x]^{\pi_n,\mathrm{part}}_t:=[x]^{\pi_n,\mathrm{step}}_t+\bigl(x_t-x_{s^{(n)}_{k(t)}}\bigr)^2\qquad(k(t)<m_n),$$
and $[x]^{\pi_n,\mathrm{part}}_T:=[x]^{\pi_n,\mathrm{step}}_T$.

The **quadratic variation of $x$ along $(\pi_n)$** is the limit of either
family of functions, in a mode that is part of every later statement: the
pointwise claim is that $[x]^{\pi_n}_t$ converges as $n\to\infty$ for each
fixed $t\in[0,T]$, and the uniform claim is that it converges uniformly on
$[0,T]$. No other mode and no other partition family is included.

Three conventions are built into the definition and are used later in this
form.

1. **The two conventions differ by at most the squared maximal oscillation.**
   For every $n$ and $t$,
   $$\bigl|[x]^{\pi_n,\mathrm{part}}_t-[x]^{\pi_n,\mathrm{step}}_t\bigr|=\bigl(x_t-x_{s^{(n)}_{k(t)}}\bigr)^2\ \le\ \Bigl(\max_{k}\ \sup_{u,v\in[s^{(n)}_{k-1},s^{(n)}_k]}|x_u-x_v|\Bigr)^2,$$
   and the right-hand side tends to $0$ as $n\to\infty$ because $x$ is
   uniformly continuous on the compact interval $[0,T]$ and the mesh tends to
   $0$. For completeness this uniform-continuity assertion is choice-free:
   for each $c\in[0,T]$ and $\varepsilon>0$, continuity supplies a least
   integer $j(c)\ge0$ such that $|x_y-x_c|<\varepsilon/2$ whenever
   $y\in[0,T]$ and $|y-c|<2^{1-j(c)}$. The intervals of radius
   $r_c=2^{-j(c)}$ centered at $c$ cover $[0,T]$. Its compactness
   [[thm-heine-borel-r]] gives finitely many such intervals covering it.
   Put $\delta$ equal to the minimum of their positive radii. If
   $|u-v|<\delta$ and $u$ belongs to the interval centered at $c$,
   then both $u,v$ are within $2r_c$ of $c$, so $|x_u-x_v|<\varepsilon$.
   This proves uniform continuity without selecting arbitrary radii.
   In particular the two conventions have the same limit whenever either
   limit exists.
2. **No partition-independent object is defined.** The symbol
   $[x]^{\pi_n}$ names the $n$th sum along the named sequence $(\pi_n)$, and any quadratic-variation limit is attached to that sequence; it is not a
   claim that the sums converge along every refining sequence, nor that a
   path-dependent choice of partitions leaves the limit unchanged. When a
   statement below says "quadratic variation", the partition sequence is part
   of the data.
3. **Dependence on $t$.** Each $[x]^{\pi_n}_t$ is a genuine real number, being a
   finite sum of nonnegative terms; the family $t\mapsto[x]^{\pi_n}_t$ is
   nondecreasing in $t$ for the step convention, and for the partial-increment
   convention it agrees with the step value at partition points.

No choice principle is used: the partitions are given as a sequence of finite
lists, the sums are finite sums of real numbers, and the limits are the usual
uniqueness-of-limit limits.

## Source notes

Lawler, Section 2.8, defines the quadratic sums along a partition sequence,
proves the convergence results for meshes tending to zero (Theorems 2.8.1-2.8.2)
and warns explicitly that the mesh condition is load-bearing: without a
prescribed partition family the sums may depend on the partitions chosen. The
definition above separates the two partial-sum conventions used in that section
and records only a difference bound, so that later items can state their limits
for either convention without redefining the symbol.
