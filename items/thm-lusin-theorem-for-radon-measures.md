---
id: thm-lusin-theorem-for-radon-measures
kind: theorem
title: "Lusin's theorem for a Radon measure"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-radon-measure-on-an-lch-space, def-regular-borel-measure-on-an-lch-space, lem-finite-lch-partition-of-unity-near-a-compact-set]
proof_strategy: direct
sources:
  references:
    - title: "Donald L. Cohn, Measure Theory, 2nd ed., Chapter 7"
      url: "https://math.bme.hu/~pitrik/2023_24_2/Measure_Cohn.pdf"
---

## Statement

Let $\mu$ be a Radon measure on an LCH space in the convention of [[def-radon-measure-on-an-lch-space]]. Let $E$ be Borel with $\mu(E)<\infty$ and let $f:E\to\mathbb C$ be Borel measurable. For every $\varepsilon>0$ there is compact $K\subseteq E$ such that $\mu(E\setminus K)<\varepsilon$ and $f|_K$ is continuous.

## Facts & Assumptions

**Given:** $X,\mu,E,f$ as in the Statement and $\varepsilon>0$.

[L1] Radon means finite on compact sets, outer regular on Borel sets, and compact-inner-regular on open sets ([[def-radon-measure-on-an-lch-space]]). We do not assume the stronger all-Borel convention of [[def-regular-borel-measure-on-an-lch-space]].

## Proof

**Proof technique:** derive compact approximation for finite-measure sets, then intersect finite compact cell cores.

1.1 First let $B$ be Borel of finite measure and let $\delta>0$. By [L1], choose open $U\supseteq B$ of finite measure and compact $L\subseteq U$ with $\mu(U\setminus L)<\delta/2$. By outer regularity choose open $O\supseteq U\setminus B$ with $\mu(O)<\mu(U\setminus B)+\delta/2$. Then $H=L\setminus O$ is compact and contained in $B$. Since $B$ is disjoint from $U\setminus B$, $\mu(B\cap O)<\delta/2$, and hence $\mu(B\setminus H)\le\mu(U\setminus L)+\mu(B\cap O)<\delta$. This proves compact approximation for each finite-measure Borel set using only [L1]. [L1, given, construct]

1.2 Since $f$ is complex-valued and $\mu(E)<\infty$, continuity from above gives an $M>0$ for which $B=\{x\in E:|f(x)|\le M\}$ satisfies $\mu(E\setminus B)<\varepsilon/4$. For each $m\ge0$, partition the disk $|z|\le M$ into finitely many nonempty disjoint Borel cells $C_{m,j}$, $1\le j\le J_m$, each of diameter less than $2^{-m}$. Such cells can be obtained by intersecting the disk with a finite half-open square grid. Their preimages $B_{m,j}$ partition $B$ into finite-measure Borel sets. [given, construct]

2.1 Apply step 1.1 to choose compact $H_{m,j}\subseteq B_{m,j}$ with $\mu(B_{m,j}\setminus H_{m,j})<\varepsilon2^{-m-3}/J_m$. Put $H_m=\bigcup_{j=1}^{J_m}H_{m,j}$ and $K=\bigcap_{m\ge0}H_m$. Each $H_m$ is compact and thus closed in $X$; their intersection is a closed subset of the compact $H_0$, hence compact. Moreover $K\subseteq B\subseteq E$ and $\mu(E\setminus K)\le\mu(E\setminus B)+\sum_{m\ge0}\mu(B\setminus H_m)<\varepsilon/4+\sum_{m\ge0}\varepsilon2^{-m-3}=\varepsilon/2<\varepsilon$. [step 1.1, step 1.2, construct]

3.1 For each $m$, the finitely many disjoint compact sets $K\cap H_{m,j}$ cover $K$. Each is relatively clopen, because its complement is a finite union of closed sets. On it, the values of $f$ lie in $C_{m,j}$ and have oscillation below $2^{-m}$. Given $x\in K$ and a positive tolerance, choose $m$ so $2^{-m}$ is smaller; its clopen cell piece is a neighbourhood witnessing continuity at $x$. The empty $K$ case is vacuous. Thus $f|_K$ is continuous. [step 2.1] ∎
