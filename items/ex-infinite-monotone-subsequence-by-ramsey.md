---
id: ex-infinite-monotone-subsequence-by-ramsey
kind: example
title: "Infinite Ramsey for pairs gives a nondecreasing or nonincreasing subsequence of every real sequence"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-infinite-ramsey-on-the-naturals, def-sequence, def-real-order]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "I. B. Leader, Ramsey Theory, example after Theorem 1"
      url: "https://www.dpmms.cam.ac.uk/~par31/notes/ramsey.pdf"
pipeline_run: null
---

## Example

Every real sequence has a nondecreasing or nonincreasing subsequence. Here a sequence is indexed by $\mathbb N$ as in [[def-sequence]], and comparisons use [[def-real-order]].

## Facts & Assumptions

**Given:** A real sequence $(x_n)$.

[L1] Every finite colouring of $[\mathbb N]^k$ has an infinite monochromatic set, in ZF ([[thm-infinite-ramsey-on-the-naturals]]).

[F1] A **sequence of reals** is a function $x : \mathbb{N} \to \mathbb{R}$ ([[def-sequence]]).

## Verification

**Proof technique:** direct.

1.1 For $i<j$, colour $\{i,j\}$ up when $x_i\le x_j$ and down when $x_i>x_j$. By [L1] there is an infinite homogeneous set of indices. [L1, F1]

2.1 Enumerate that set increasingly. In the up case every earlier selected term is at most every later one, giving a nondecreasing subsequence. In the down case every earlier selected term is greater than every later one, giving a strictly decreasing, hence nonincreasing, subsequence. [step 1.1, F1] ∎

