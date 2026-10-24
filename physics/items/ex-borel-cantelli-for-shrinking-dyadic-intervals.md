---
id: ex-borel-cantelli-for-shrinking-dyadic-intervals
kind: example
title: "Borel-Cantelli for the shrinking intervals $(0,2^{-k})$ under a dyadic atomic measure"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-first-borel-cantelli, thm-nonnegative-weighted-sums-of-measures, prop-dirac-measure-is-a-probability-measure, thm-geometric-series, lem-geometric-sequence-null, def-set-limsup-and-liminf, def-interval]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-21
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

On the Borel subsets of $\mathbb R$, define

$$\mu:=\sum_{j=0}^{\infty}2^{-(j+1)}\delta_{2^{-j}},\qquad E_k:=(0,2^{-k}).$$

Then $\mu(E_k)=2^{-(k+1)}$, so $\sum_k\mu(E_k)=1$ and the first Borel-Cantelli lemma gives $\mu(\limsup_kE_k)=0$. In fact $\limsup_kE_k=\varnothing$.

## Facts & Assumptions

**Given:** The dyadic atomic set function $\mu$ and intervals $E_k$ displayed above.

[L1] Dirac set functions are probability measures ([[prop-dirac-measure-is-a-probability-measure]]), and nonnegative countable weighted sums of measures are measures ([[thm-nonnegative-weighted-sums-of-measures]]).

[L2] The geometric series with ratio $1/2$ sums to $2$, and the sequence $(2^{-k})$ tends to $0$ ([[thm-geometric-series]], [[lem-geometric-sequence-null]]).

[L3] If the sum of the measures is finite, the first Borel-Cantelli lemma makes the set limsup null ([[thm-first-borel-cantelli]]).

[L4] The set limsup is the intersection of the tail unions ([[def-set-limsup-and-liminf]]), and $(0,b)=\{x:0<x<b\}$ ([[def-interval]]).

## Verification

**Proof technique:** direct.

1.1 By [L1], $\mu$ is a measure. For fixed $k$, the atom $2^{-j}$ lies in $(0,2^{-k})$ exactly when $j>k$, so $\mu(E_k)=\sum_{j>k}2^{-(j+1)}$. [given, L1, L4]

1.2 The intervals decrease. No $x\le0$ belongs to any of them, and for $x>0$, convergence $2^{-k}\to0$ supplies $k$ with $2^{-k}\le x$, so $x\notin E_k$; hence their intersection, and therefore their limsup, is empty. [given, L2, L4]

2.1 The tail geometric sum in step 1.1 is $2^{-(k+1)}$, and therefore $\sum_{k=0}^{\infty}\mu(E_k)=\sum_{k=0}^{\infty}2^{-(k+1)}=1$. At $k=0$, this gives $\mu((0,1))=1/2$. [step 1.1, L2, algebra]

3.1 Borel-Cantelli applied using step 2.1 gives $\mu(\limsup_kE_k)=0$, while step 1.2 independently identifies that limsup as $\varnothing$. [step 2.1, step 1.2, L3] ∎
