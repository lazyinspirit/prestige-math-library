---
id: lem-neutral-delay-shift-neumann-inverse
kind: lemma
title: "The neutral derivative shift has a bounded Neumann inverse when $|a|<1$"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps: [def-scalar-neutral-delay-equation-and-segment-shift]
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "M. Zennaro, The Numerical Solution of Delay Differential Equations, Dobbiaco 2006 summer-school lecture notes"
      url: "https://dmi.units.it/dobbiaco/pre2006/dobbiaco06_Zennaro.pdf"
    - title: "Nicola Guglielmi and Ernst Hairer, Solving Delay Differential Equations, Chapter 1"
      url: "https://www.unige.ch/~hairer/preprints/ChapterDDE.pdf"
---

## Statement

For the segment shift $S_K$ on the derivative-segment product, and for a mesh
shift $S_m^{(M)}$ on an array of any finite length $M$ under the same rule as
$S_{K,m}$ in
[[def-scalar-neutral-delay-equation-and-segment-shift]], the supremum operator
norm satisfies $\|S\|_{\rm op}\le1$. Let $J=K$ for $S_K$ and
$J=\lceil M/m\rceil$ for $S_m^{(M)}$; then $S^J=0$. For $|a|<1$,
$$ (I-aS)^{-1}=\sum_{j=0}^{\infty}a^jS^j=\sum_{j=0}^{J-1}a^jS^j,\qquad \|(I-aS)^{-1}\|_{\rm op}\le\frac1{1-|a|}.$$
Here $I$ is the identity map and $\|S\|_{\rm op}:=\sup_{\|v\|\le1}\|Sv\|$.

## Facts & Assumptions

**Given:** Either a segment shift with $K\ge1$ or a mesh shift with $M,m\ge1$, and $a\in\mathbb R$ with $|a|<1$.

[F1] $S_K$ shifts each derivative segment to its predecessor; the mesh shift inserts zeros in the first $m$ entries and copies the entry $m$ places earlier thereafter ([[def-scalar-neutral-delay-equation-and-segment-shift]]).

## Proof

1.1 By [F1], every output coordinate of either shift is zero or an input coordinate. Taking the maximum of the component suprema therefore gives $\|Sv\|\le\|v\|$, so $\|S\|_{\rm op}\le1$. After $K$ segment shifts every component is zero; after $J=\lceil M/m\rceil$ mesh shifts every array index has moved below zero and is zero. Thus $S^J=0$ in both cases. [given, F1, algebra]

2.1 Put $R=\sum_{j=0}^{J-1}a^jS^j$. Multiplying the finite sum on either side by $I-aS$ cancels adjacent terms and leaves $I-a^JS^J=I$, so $R$ is a two-sided inverse. Since $S^J=0$, this finite sum equals the displayed infinite series. [step 1.1, algebra]

3.1 Iterating the contraction bound in step 1.1 gives $\|S^jv\|\le\|v\|$ for every $j$, hence $\|S^j\|_{\rm op}\le1$. Thus $\|R\|_{\rm op}\le\sum_{j=0}^{J-1}|a|^j$. Multiplying this finite geometric sum by the positive number $1-|a|$ gives $1-|a|^J\le1$, hence $\|R\|_{\rm op}\le(1-|a|)^{-1}$. [step 1.1, step 2.1, algebra] ∎
