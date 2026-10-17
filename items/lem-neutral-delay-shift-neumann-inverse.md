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
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "M. Zennaro, The Numerical Solution of Delay Differential Equations, Dobbiaco 2006 summer-school lecture notes"
      url: "https://dmi.units.it/dobbiaco/pre2006/dobbiaco06_Zennaro.pdf"
    - title: "Nicola Guglielmi and Ernst Hairer, Solving Delay Differential Equations, Chapter 1"
      url: "https://www.unige.ch/~hairer/preprints/ChapterDDE.pdf"
---

## Statement

For the segment shift $S_K$ on the derivative-segment product, and for a mesh
shift $S_m^{(M)}$ on an array of any finite length $M\in\mathbb N_0$ with $m\ge1$ under the same rule as
$S_{K,m}$ in
[[def-scalar-neutral-delay-equation-and-segment-shift]], the supremum operator
norm satisfies $\|S\|_{\rm op}\le1$. Let $J=K$ for $S_K$ and
$J=\lceil M/m\rceil$ for $S_m^{(M)}$; then $S^J=0$. For $|a|<1$,
$$ (I-aS)^{-1}=\sum_{j=0}^{\infty}a^jS^j=\sum_{j=0}^{J-1}a^jS^j,\qquad \|(I-aS)^{-1}\|_{\rm op}\le\frac1{1-|a|}.$$
Here $I$ is the identity map and $\|S\|_{\rm op}:=\sup_{\|v\|\le1}\|Sv\|$. For $M=0$, use the zero-space norm and shift defined in the supplier: the identity and zero operator coincide, $J=0$, and the finite sum over $0\le j<J$ is the zero operator, which is the inverse on that zero space. Its operator norm is $0$.

## Facts & Assumptions

**Given:** Either a segment shift with $K\ge1$ or a mesh shift with $M\in\mathbb N_0$ and $m\ge1$, and $a\in\mathbb R$ with $|a|<1$.

[F1] $S_K$ shifts each derivative segment to its predecessor; the mesh shift inserts zeros in the first $m$ entries and copies the entry $m$ places earlier thereafter, with its explicitly defined zero-space norm and unique map when $M=0$ ([[def-scalar-neutral-delay-equation-and-segment-shift]]).

## Proof

1.1 If the mesh array length is $M=0$, [F1] gives a space with exactly one vector $0$, of norm $0$, and a unique self-map. This map is both the zero operator and the identity $I$, and $S$ is this same operator. Thus $J=\lceil0/m\rceil=0$ and $S^J=S^0=I=0$. The map $I-aS$ is also the unique map, whose composite with itself is the identity; hence it is its own inverse. The finite sum over $0\le j<J$ is the zero operator. Every term of the infinite series is also zero, including the $j=0$ term because $S^0=I=0$ as an operator on this space. Finally the operator-norm supremum is over the nonempty unit ball $\{0\}$ and equals $0$. This proves all stated assertions for $M=0$, without an empty real maximum. For the remaining proof use either the segment case $K\ge1$ or a mesh array with $M\ge1$. [given, F1, algebra]

1.2 By [F1], every output coordinate of either shift is zero or an input coordinate. Taking the maximum of the component suprema therefore gives $\|Sv\|\le\|v\|$, so $\|S\|_{\rm op}\le1$. After $K$ segment shifts every component is zero; after $J=\lceil M/m\rceil$ mesh shifts every array index has moved below zero and is zero. Thus $S^J=0$ in both cases. [given, F1, algebra]

2.1 Put $R=\sum_{j=0}^{J-1}a^jS^j$. Multiplying the finite sum on either side by $I-aS$ cancels adjacent terms and leaves $I-a^JS^J=I$, so $R$ is a two-sided inverse. Since $S^J=0$, this finite sum equals the displayed infinite series. [step 1.2, algebra]

3.1 Iterating the contraction bound in step 1.2 gives $\|S^jv\|\le\|v\|$ for every $j$, hence $\|S^j\|_{\rm op}\le1$. Thus $\|R\|_{\rm op}\le\sum_{j=0}^{J-1}|a|^j$. Multiplying this finite geometric sum by the positive number $1-|a|$ gives $1-|a|^J\le1$, hence $\|R\|_{\rm op}\le(1-|a|)^{-1}$. [step 1.2, step 2.1, algebra] ∎
