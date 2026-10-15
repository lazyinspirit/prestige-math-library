---
id: lem-tdmath-separated-cube-tail-bound
kind: lemma
title: "Power tempering bounds interactions between separated cubes"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 1
deps: [def-tdmath-stable-power-tempered-particle-model, def-integers, def-nonnegative-extended-series, thm-p-series-real-exponents]
dependency_roles:
  def-tdmath-stable-power-tempered-particle-model: mathematical-premise
  def-integers: mathematical-premise
  def-nonnegative-extended-series: mathematical-premise
  thm-p-series-real-exponents: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Stefan Adams, Mathematical Statistical Mechanics, MPI Lecture Note 30, §5.2"
      url: "https://files-www.mis.mpg.de/mpi-typo3/preprints/ln/lecturenote-3006.pdf"
    - title: "M. E. Fisher and J. L. Lebowitz, Asymptotic Free Energy of a System with Periodic Boundary Conditions, §III"
      url: "https://cmsr.rutgers.edu/images/people/lebowitz_joel/publications-archived/jll.pub_69.pdf"
---

## Statement

Let $d$ be a positive integer and let $\phi$ be power-tempered as in
[[def-tdmath-stable-power-tempered-particle-model]], with constants
$C,R,\epsilon>0$. Define
$$S_{d,\epsilon}:=\sum_{m=1}^{\infty}\bigl((2m+1)^d-(2m-1)^d\bigr)m^{-d-\epsilon},\qquad \|k\|_\infty:=\max_{1\le r\le d}|k_r| \quad(k\in\mathbb Z^d).$$
This nonnegative series, defined by [[def-nonnegative-extended-series]],
groups the lattice terms by shells $\|k\|_\infty=m$.
Then $S_{d,\epsilon}<\infty$. Let $\ell>0$, $g\ge R$, and let
$J\subset\mathbb Z^d$ be finite with $M=|J|$. Let $n$ be a nonnegative
integer. For each $j\in J$, choose an integer $n_j$ with $0\le n_j\le n$ and
positions $q_{j,s}\in C_j:=(\ell+g)j+[0,\ell]^d$ for $1\le s\le n_j$;
positions are counted with their labels, even if some coincide. The total
absolute inter-cube energy, defined by the following finite sum (empty sums are
zero), satisfies
$$\sum_{\substack{j,j'\in J\;j<j'}}\;\sum_{s=1}^{n_j}\sum_{t=1}^{n_{j'}}|\phi(q_{j,s}-q_{j',t})|\le\frac C2 M n^2 S_{d,\epsilon}g^{-d-\epsilon}.$$
Here $j<j'$ means any fixed total ordering of the finite set $J$; each
unordered pair of cubes is counted once.

## Facts & Assumptions

**Given:** $d$ a positive integer, power-tempering constants $C,R,\epsilon>0$, $\ell>0$, $g\ge R$, a finite index set $J\subset\mathbb Z^d$, a nonnegative integer $n$, and the labelled finite position families specified in the Statement.

[F1] [[def-tdmath-stable-power-tempered-particle-model]]: for $\|x\|_2\ge R$, $\phi(x)\in\mathbb R$ and its real absolute value satisfies $|\phi(x)|\le C\|x\|_2^{-d-\epsilon}$.

[F2] [[def-nonnegative-extended-series]] defines a nonnegative series as the supremum of its partial sums; [[thm-p-series-real-exponents]] proves $\sum_{m\ge1}m^{-p}<\infty$ for every real $p>1$.

[F3] [[def-integers]] supplies the integer lattice. For an integer $m\ge1$, the lattice box $\{k:\|k\|_\infty\le m\}$ has $(2m+1)^d$ points because each of the $d$ coordinates has $2m+1$ independent choices. Subtracting the box of radius $m-1$ gives shell count $(2m+1)^d-(2m-1)^d$.

## Proof

1.1 Let $m=\|j-j'\|_\infty\ge1$ for two distinct cube indices. In a coordinate where the index difference is $m$, the nearest points of the two intervals are separated by $m(\ell+g)-\ell=(m-1)\ell+mg\ge mg$. Hence every pair of points in $C_j,C_{j'}$ has Euclidean distance at least $mg$. [given, algebra]

1.2 For $m\ge1$, [F3] gives the shell count. Use
$x^d-y^d=(x-y)\sum_{r=0}^{d-1}x^{d-1-r}y^r$ with $x=2m+1$, $y=2m-1$.
Since $2m+1\le3m$, it yields
$$ (2m+1)^d-(2m-1)^d\le2d(3m)^{d-1}=2d3^{d-1}m^{d-1}. $$
Therefore $S_{d,\epsilon}\le2d3^{d-1}\sum_{m\ge1}m^{-1-\epsilon}<\infty$ by
[F2], since $1+\epsilon>1$. [F2, F3, algebra]

2.1 By [F1] and step 1.1, each such pair contributes at most $C(mg)^{-d-\epsilon}$ in absolute value, because $mg\ge g\ge R$ and the Euclidean norm dominates the absolute value of any coordinate. [F1, step 1.1, algebra]

3.1 Fix $j\in J$. For each $j'\ne j$, there are at most $n_jn_{j'}\le n^2$ labelled pairs of positions from $C_j$ and $C_{j'}$. Summing the bound from step 2.1 over those pairs and enlarging the finite set of index differences to all nonzero lattice vectors gives at most $Cn^2S_{d,\epsilon}g^{-d-\epsilon}$, since [F3] groups those vectors into the shells whose counts define $S_{d,\epsilon}$, and [F2] defines its nonnegative sum. Summing this bound over all $M$ cubes counts each unordered cube pair twice, so dividing by $2$ gives the claimed inequality. [F2, F3, step 1.2, step 2.1, algebra] ∎
