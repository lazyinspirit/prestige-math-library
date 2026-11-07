---
id: def-polymath-type-iii-estimate
kind: definition
title: "Type III distribution estimate for smooth coefficient sequences"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps: [def-polymath-densely-divisible-moduli, def-siegel-walfisz-coefficient-sequence, def-smooth-moduli-and-progression-discrepancy]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "D. H. J. Polymath, New equidistribution estimates of Zhang type, and bounded gaps between primes"
      url: "https://arxiv.org/pdf/1402.0811v3"
      locator: "§2, Definition 2.6(iii), printed pp. 10–11"
    - title: "Julia Stadlmann, On Primes in Arithmetic Progressions and Bounded Gaps Between Many Primes"
      url: "https://arxiv.org/pdf/2309.00425v3"
      locator: "§1.2.3 and Theorem 2.8(v) discussion, printed pp. 5–6"
---

## Definition

Fix $0<\varpi<1/4$, $0<\delta<1/4+\varpi$, $0<\sigma<1/2$, and an integer $i\ge1$. Let $I$ be a bounded set of primes, let $P_I=\prod_{p\in I}p$, and let $a$ be an integer coprime to $P_I$. A coefficient sequence at scale $M$ is finitely supported, supported on an interval $[cM,CM]$ for fixed $0<c<C$, and satisfies a bound $|\alpha(n)|\ll\tau(n)^{O(1)}(\log x)^{O(1)}$. It is smooth at scale $N$ if its values are $\psi(n/N)$ for an infinitely differentiable function $\psi$ supported in a fixed compact subinterval of $(0,\infty)$, with each fixed-order derivative bounded by a fixed power of $\log x$. An element of $D_I^{(i)}(y)$ is a squarefree positive integer with prime factors in $I$ that satisfies the recursive factorization condition in the definition of iterated dense divisibility. For $x>1$, $\Delta_x$ is the difference between the coefficient sum over $x\le n\le2x$, $n\equiv a\pmod q$, and $\varphi(q)^{-1}$ times the sum over $x\le n\le2x$, $(n,q)=1$. We say the Type III estimate $\operatorname{Type}^{(i)}_{III}[\varpi,\delta,\sigma]$ holds if, for every $M,N_1,N_2,N_3\ge1$ with
$$MN_1N_2N_3\asymp x,\qquad N_jN_k\gg x^{1/2+\sigma}\ (j\ne k),\qquad x^{2\sigma}\ll N_j\ll x^{1/2-\sigma}\ (1\le j\le3),$$
every coefficient sequence $\alpha$ at scale $M$, every three smooth coefficient sequences $\psi_j$ at scales $N_j$, and every $Q\asymp x^{1/2+2\varpi}$, one has, for every fixed $A>0$,
$$\sum_{\substack{q\le Q\\q\in D_I^{(i)}(x^\delta)}}\left|\Delta_x(\alpha*\psi_1*\psi_2*\psi_3;a,q)\right|\ll_A x(\log x)^{-A}.$$
Here $*$ is Dirichlet convolution, $\ll$ denotes an upper bound by a constant multiple, and $\asymp$ denotes two-sided bounds by positive constant multiples. The implied constant may depend on the fixed parameters and coefficient-sequence bounds, but not on $x$ or on the particular sequence entries.

## Definition references

[[def-polymath-densely-divisible-moduli|Iterated dense divisibility of squarefree moduli]]

[[def-siegel-walfisz-coefficient-sequence|Coefficient sequences with the Siegel–Walfisz property]]

[[def-smooth-moduli-and-progression-discrepancy|Squarefree smooth moduli and progression discrepancy]]

[Polymath8a, Definition 2.6(iii)](https://arxiv.org/pdf/1402.0811v3)
