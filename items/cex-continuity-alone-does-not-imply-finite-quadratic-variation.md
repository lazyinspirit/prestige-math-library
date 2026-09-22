---
id: cex-continuity-alone-does-not-imply-finite-quadratic-variation
kind: counterexample
title: "Continuity does not imply finite quadratic variation"
status: draft
origin: pipeline
deps: [def-quadratic-variation-along-a-partition-sequence, def-partition-and-refinement, def-continuity-real]
proof_strategy: direct
generation:
  role: counterexample
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
sources:
  references:
    - title: "Gregory F. Lawler, Stochastic Calculus: An Introduction with Applications, Section 2.8 (the partition-dependence warning for quadratic sums)"
      url: "https://www.math.uchicago.edu/~lawler/finbook.pdf"
---

## Statement refuted

The assertion "every continuous function $x:[0,1]\to\mathbb R$ has finite
quadratic variation along every refining sequence of partitions with mesh
tending to zero" is false. There is a continuous function $x$ on $[0,1]$ and a
refining sequence of partitions $(\pi_n)$ of $[0,1]$ with
$\operatorname{mesh}(\pi_n)\to0$ for which the quadratic sums
$\sum_i(x_{t_{i+1}}-x_{t_i})^2$ diverge to $+\infty$.

## Counterexample

**Given:** no special hypotheses; the construction is explicit and uses no choice principle.

1.1 For $m\ge1$ put $I_m:=[2^{-(m+1)},2^{-m}]$, $n_m:=2m^4$, $\delta_m:=2^{-(m+2)}/m^4=2^{-(m+1)}/n_m$, and let $s_{m,j}:=2^{-(m+1)}+j\delta_m$ for $0\le j\le n_m$; define $x(s_{m,j}):=1/m$ for odd $j$ and $x(s_{m,j}):=0$ for even $j$, interpolate $x$ linearly between consecutive vertices of each block, and set $x:=0$ on $\{0\}\cup[1/2,1]$. [given]

2.1 The function $x$ is well defined and continuous: on each block it is piecewise linear hence continuous, the last vertex of $I_m$ has even index and value $0$, matching the value $0$ at the shared endpoints of consecutive blocks and on $[1/2,1]$, and for $t\in(0,2^{-m}]$ one has $|x(t)|\le1/m$, so $x(t)\to0=x(0)$ as $t\downarrow0$. [step 1.1]

2.2 For $n\ge1$ let $\pi_n$ be the partition of $[0,1]$ whose point set is the dyadic grid $\{k2^{-n}:0\le k\le2^n\}$ together with every vertex $s_{m,j}$ with $1\le m\le n$; each $\pi_n$ is a finite partition in the sense of [[def-partition-and-refinement]], the sequence is refining, and $\operatorname{mesh}(\pi_n)\le2^{-n}$. [step 1.1]

3.1 No dyadic point of level $n$ lies in the interior of $I_n$: such a point would be $k2^{-n}$ with $1/2<k<1$, and no integer satisfies this; hence the points of $\pi_n$ inside $I_n$ are exactly the vertices $s_{n,0}<\cdots<s_{n,n_n}$, and consecutive points of $\pi_n$ inside that block are consecutive vertices. [step 2.2]

4.1 The quadratic sum along $\pi_n$ therefore contains the $n_n$ vertex increments of the block $I_n$, each of absolute value $1/n$, so it is at least $n_n\cdot(1/n)^2=2n^4/n^2=2n^2$; since $2n^2\to\infty$, the quadratic sums along the refining sequence $(\pi_n)$ diverge to $+\infty$ for this continuous function. [step 3.1]

5.1 Consequently continuity alone does not force finite quadratic variation along a prescribed refining sequence with vanishing mesh: the witness is the explicit sawtooth function above, whose block $I_n$ alone contributes $2n^2$ to the $n$-th quadratic sum; the example also shows that the mesh condition of [[def-quadratic-variation-along-a-partition-sequence]] is not sufficient by itself, and the construction uses no choice principle. [step 2.1, step 4.1] ∎

## Source notes

Lawler, Section 2.8, warns that quadratic sums of a continuous path depend on
the partitions chosen unless a specific regular sequence is prescribed. The
sawtooth above is the classical witness: it is continuous and of unbounded
variation on every neighbourhood of the origin, and the partitions are adapted
to its vertices so that each block contributes a fixed amount.
