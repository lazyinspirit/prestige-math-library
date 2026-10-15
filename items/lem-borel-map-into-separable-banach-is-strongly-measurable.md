---
id: lem-borel-map-into-separable-banach-is-strongly-measurable
kind: lemma
title: "A Borel map into a separable Banach space is strongly measurable"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - thm-finite-and-countable-subadditivity-of-measures
  - def-measurable-space
  - def-measurable-function-between-measurable-spaces
  - def-separable-space
  - def-strongly-measurable-banach-valued-function
  - def-banach-valued-simple-function-and-integral
  - thm-continuity-from-above-for-measures
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "A. Lunardi, M. Miranda, and D. Pallara, Infinite Dimensional Analysis"
      url: "https://www.mathematik.tu-darmstadt.de/media/analysis/lehrmaterial_anapde/hallerd/Lectures.pdf"
      locator: "Section 2.3, measurable and strongly measurable Banach-valued maps."
---

## Statement

Let $(\Omega,\mathcal F,P)$ be a probability space, let $B$ be a separable
Banach space, and let $f:\Omega\to B$ be Borel-measurable. Then $f$ is strongly
measurable: outside a $P$-null set it is the pointwise limit of finite-valued
measurable simple functions.

## Facts & Assumptions

[F1] Separability supplies a countable dense subset of $B$
([[def-separable-space]]).

[F2] A finite-valued measurable simple function is a finite sum of vectors
times measurable indicators; strong measurability is almost-everywhere
pointwise approximation by such functions
([[def-banach-valued-simple-function-and-integral]],
[[def-strongly-measurable-banach-valued-function]]).

[F3] For a finite measure, continuity from above implies continuity from below
by taking complements ([[thm-continuity-from-above-for-measures]]).

[F4] The measure of a countable union is at most the sum of the measures [[thm-finite-and-countable-subadditivity-of-measures]].

## Proof


**Given:** A probability space $(\Omega,\mathcal F,P)$, a separable Banach space $B$, and a Borel-measurable map $f:\Omega\to B$.

1.1 Choose a countable dense sequence $(d_j)_{j\ge1}$ in $B$. For each $n\ge1$, assign $\omega$ to the first index $j$ for which $\|f(\omega)-d_j\|<2^{-n}$; such an index exists by density. The resulting sets $A_{n,j}$ form a measurable countable partition: each is the preimage of an open ball under $f$, with the finitely many earlier preimages removed. [given, F1, F3, choose]

2.1 Since the partial unions $\bigcup_{j\le N}A_{n,j}$ increase to $\Omega$, [F3] gives an integer $N_n$ for which the omitted tail has measure at most $2^{-2n}$. Define $s_n=d_j$ on $A_{n,j}$ for $j\le N_n$, and $s_n=0$ on the omitted tail. Then $s_n$ is a finite-valued measurable simple function. [given, F2, F3, step 1.1, construct]

3.1 The tail events $T_n=\bigcup_{j>N_n}A_{n,j}$ satisfy $\sum_nP(T_n)\le\sum_n2^{-2n}<\infty$. By [F4], for every $N$, $P(\bigcup_{n\ge N}T_n)\le\sum_{n\ge N}2^{-2n}$; continuity from above makes the probability of belonging to infinitely many $T_n$ equal to zero. Outside that null set, for all sufficiently large $n$ the point is not in $T_n$, and then $\|s_n(\omega)-f(\omega)\|<2^{-n}$. Thus $s_n\to f$ almost everywhere, which is strong measurability by [F2]. [F2, F3, F4, step 2.1, algebra] ∎

