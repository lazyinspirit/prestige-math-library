---
id: thm-sard-smale-residual-regular-values-for-fredholm-maps
kind: theorem
title: "Sard--Smale residual regular values for Fredholm maps"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-fredholm-maps-and-regular-values-on-countable-banach-manifolds, def-nowhere-dense-meagre-and-residual-subsets, thm-morse-sard-for-euclidean-maps]
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Stephen Smale, An Infinite Dimensional Version of Sard's Theorem, Theorem (1.3)"
      url: "https://people.math.harvard.edu/~dafr/M392C-2018-MorseTheory/Readings/Smale.pdf"
---

## Statement

Let $P:\mathcal X\to\mathcal Y$ be a $C^h$ Fredholm map of index $m$ between countable-base Banach manifolds.  If $h>\max\{m,0\}$, its regular values form a residual subset of $\mathcal Y$.

## Facts & Assumptions

**Given:** Such a $C^h$ Fredholm map $P$ with $h>\max\{m,0\}$.

[F1] Fredholmness means finite kernel and cokernel, closed range, and locally constant index ([[def-fredholm-maps-and-regular-values-on-countable-banach-manifolds]]).

[F2] Residual means complement of a meagre set ([[def-nowhere-dense-meagre-and-residual-subsets]]).

[F3] The finite-dimensional Sard theorem gives null critical values at its stated differentiability threshold ([[thm-morse-sard-for-euclidean-maps]]).

## Proof

**Proof technique:** direct.

1.1 At each $x$, the finite-dimensional kernel and cokernel in [F1] permit the standard local Lyapunov--Schmidt reduction of $P$ to a $C^h$ map between finite-dimensional spaces whose source-target dimension difference is $m$. [F1, given]

2.1 Fredholm maps are locally proper on suitable closed neighbourhoods.  Using the countable bases, choose countably many such neighbourhoods $N_i$ covering $\mathcal X$.  On each $N_i$, Lyapunov--Schmidt reduction and [F3] show that the image of the critical set has empty interior; properness makes that image closed, hence nowhere dense. [F3, step 1.1, algebra]

3.1 Every critical value belongs to one of these countably many nowhere-dense images.  Their union is meagre, so [F2] makes its complement residual; every point of that complement is a regular value of $P$. [F2, step 2.1] ∎
