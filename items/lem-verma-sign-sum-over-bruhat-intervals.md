---
id: lem-verma-sign-sum-over-bruhat-intervals
kind: lemma
title: Verma's sign identity over Bruhat intervals
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
deps: [thm-r-polynomial-recursion-and-degree-bounds, lem-bruhat-order-basic-properties-for-permutations]
dependency_level: 4
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "G. Lusztig, Hecke Algebras with Unequal Parameters (revised book version, arXiv:math/0208154v2) — Proposition 4.8 (printed p. 27): Verma's alternating-sign sum over Bruhat intervals, derived from the R-matrix identity and the lowest-degree term of the R-coefficients."
      url: "https://arxiv.org/pdf/math/0208154"
      locator: "§4.8, printed p. 27; the proposition and its complete lowest-degree extraction proof were read. The split case uses L=length."
verification:
  precheck: pass
---

## Facts & Assumptions

**Given:** $n\ge1$ and the Laurent coefficients $r_{x,z}$ from [[thm-r-polynomial-recursion-and-degree-bounds]].

[F1] For all $a,b\in S_n$, $\sum_y r_{a,y}\,\overline{r_{y,b}}=\delta_{a,b}$ and $\overline{r_{y,b}}=\mathrm{sgn}(y)\mathrm{sgn}(b)r_{y,b}$ ([[thm-r-polynomial-recursion-and-degree-bounds]], parts (d),(e)).

[F2] $r_{a,b}=0$ unless $a\le b$; for $a\le b$, with $d=\ell(b)-\ell(a)$, the least-degree term of $r_{a,b}$ is $\mathrm{sgn}(a)\mathrm{sgn}(b)v^{-d}$ and all exponents are congruent to $-d$ modulo $2$ ([[thm-r-polynomial-recursion-and-degree-bounds]], parts (b),(c)).

[F3] Bruhat order on $S_n$ is graded by $\ell$ and has finite intervals; in particular $x<z$ implies $\ell(x)<\ell(z)$ ([[lem-bruhat-order-basic-properties-for-permutations]]).

## Statement

For all $x<z$ in $S_n$, with $\mathrm{sgn}(y)=(-1)^{\ell(y)}$,
$$\sum_{y\in S_n,\ x\le y\le z}\mathrm{sgn}(y)=0 .$$

## Proof

**Proof technique:** extract the lowest Laurent degree from the R-matrix identity.

1.1 **Reduce to the interval.** Fix $x<z$ and set $d:=\ell(z)-\ell(x)$. Bruhat gradedness gives $d>0$. The R-matrix identity and bar symmetry yield $0=\sum_y r_{x,y}\overline{r_{y,z}}=\mathrm{sgn}(z)\sum_y\mathrm{sgn}(y)r_{x,y}r_{y,z}$. By support, a nonzero summand requires both $x\le y$ and $y\le z$, so $0=\sum_{x\le y\le z}\mathrm{sgn}(y)r_{x,y}r_{y,z}$. [F1, F2, F3, algebra]

2.1 **Extract the lowest degree.** For each $y\in[x,z]$, let $d_1:=\ell(y)-\ell(x)$ and $d_2:=\ell(z)-\ell(y)$, so $d_1+d_2=d$. The least exponent in $r_{x,y}r_{y,z}$ is $-d$ and its coefficient is $\mathrm{sgn}(x)\mathrm{sgn}(y)^2\mathrm{sgn}(z)=\mathrm{sgn}(x)\mathrm{sgn}(z)$. The external factor $\mathrm{sgn}(y)$ in step 1.1 makes the coefficient of $v^{-d}$ in that summand $\mathrm{sgn}(x)\mathrm{sgn}(z)\mathrm{sgn}(y)$. Since every other exponent in each factor is strictly above its least exponent, no other product terms contribute to degree $-d$. Taking that coefficient in the zero sum of step 1.1 gives $0=\mathrm{sgn}(x)\mathrm{sgn}(z)\sum_{x\le y\le z}\mathrm{sgn}(y)$. The prefactor is $\pm1$, proving the claim. The interval is finite, and no choice principle is used. [F1, F2, F3, step 1.1, algebra] ∎
