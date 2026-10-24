---
id: lem-overlap-controlled-union-lower-bound
kind: lemma
title: "Overlap control gives a union lower bound"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-27
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  scraped: []
  references:
    - title: "Arora and Barak, Computational Complexity: A Modern Approach, §18.5.1 Claim 18.34 and its counting proof, printed pp. 376-377."
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
    - title: "Irit Dinur, The PCP theorem by gap amplification, §6 equation (7) and Fact 2.6, printed pp. 21-22."
      url: "https://www.cs.umd.edu/users/gasarch/TOPICS/pcp/dinur.pdf"
---

## Statement

Let $B_1,\dots,B_m$ be finitely many events in a probability space, put $S:=\sum_{i=1}^m\Pr[B_i]$, and suppose that for a real number $C\ge0$
$$\sum_{1\le i<j\le m}\Pr[B_i\cap B_j]\ \le\ C\,S .$$
Then
$$\Pr\Bigl[\bigcup_{i=1}^mB_i\Bigr]\ \ge\ \frac{S}{1+2C}.$$
Both quantities vanish when $S=0$; no hypothesis is imposed on the individual probabilities beyond $S<\infty$, and the bound is uniform over all finite families with the stated overlap ratio.

## Facts & Assumptions

**Given:** events $B_1,\dots,B_m$ on a probability space, the sum $S=\sum_i\Pr[B_i]$, and a real $C\ge0$ with $\sum_{i<j}\Pr[B_i\cap B_j]\le CS$.

[L1] For vectors $u,v$ in a real or complex inner product space, $\lvert\langle u,v\rangle\rvert\le\lVert u\rVert\lVert v\rVert$; applied to the indicator functions of two events in $L^2$ of a finite probability space this is the inequality $\mathbb E[\lvert XY\rvert]\le\sqrt{\mathbb E[X^2]\,\mathbb E[Y^2]}$ for random variables, and for a nonnegative integer-valued $N$ it gives $(\mathbb EN)^2\le\Pr[N>0]\,\mathbb E[N^2]$, since $N=0$ off the event $\{N>0\}$ ([[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]).

## Proof

**Proof technique:** direct.

1.1 Let $N:=\sum_{i=1}^m\mathbf 1_{B_i}$ count the events that occur. Then $N\ge0$ is integer valued, with $\mathbb EN=\sum_i\Pr[B_i]=S$ by linearity of expectation, and $\{N>0\}=\bigcup_iB_i$. [given, algebra]

2.1 Expanding the square, $N^2=\sum_i\mathbf 1_{B_i}+2\sum_{i<j}\mathbf 1_{B_i\cap B_j}$, so taking expectations and using the hypothesis gives $\mathbb EN^2=S+2\sum_{i<j}\Pr[B_i\cap B_j]\le S+2CS=(1+2C)S$, a finite bound. [step 1.1, algebra]

3.1 If $S=0$ then $\mathbb EN=0$ with $N\ge0$, so every $\Pr[B_i]=0$, $N=0$ almost surely, and both sides of the claimed inequality are zero; assume $S>0$ from now on. Applying [L1] to $N$ and to the indicator of $\{N>0\}$ gives $S^2=(\mathbb EN)^2\le\Pr[N>0]\,\mathbb EN^2\le\Pr[N>0]\,(1+2C)S$. Dividing by the positive number $(1+2C)S$ gives $\Pr[\bigcup_iB_i]=\Pr[N>0]\ge S/(1+2C)$, which is the claim. [step 1.1, step 2.1, L1, algebra] ∎

## Remarks

- The hypothesis is a *ratio* condition, not a smallness condition on the intersections separately: the bound is useful exactly when $C$ is uniformly bounded, and then it loses only the factor $1+2C$ relative to the first moment $S$.
- The Arora-Barak form of the same estimate (Claim 18.34) counts elements of finite sets, makes $2C$ copies of each element and reduces to inclusion-exclusion, with the weaker constant $\frac14$ and a hypothesis on the *diameter* of the set system; the probabilistic second-moment computation above is the convention of this page, and it applies directly to the events $B_{j,f}$ of [[lem-powering-amplifies-small-gaps]], whose pair overlaps are controlled by [[lem-expander-walk-violated-edge-collision-bound]].
- The constant is sharp already for two disjoint events: then $C=0$, $S=\Pr[B_1]+\Pr[B_2]$ and the union has probability exactly $S$.
