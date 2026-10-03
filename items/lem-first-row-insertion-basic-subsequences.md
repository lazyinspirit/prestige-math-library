---
id: lem-first-row-insertion-basic-subsequences
kind: lemma
title: Basic subsequences of the first row
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-row-insertion-and-bumping-route, def-young-tableau-standard-tableau-and-shape, lem-row-bumping-route-monotonicity]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "C. Schensted, Longest Increasing and Decreasing Subsequences, Canadian Journal of Mathematics 13 (1961), 179-191 (13 pp.)"
      url: "https://sites.math.washington.edu/~billey/classes/561.fall.2019/articles/schensted.1961.pdf"
      locator: "pp. 183-184: the definition of basic subsequences S_1, S_2, ... and Lemmas 4 and 5 (decrease, and the predecessor in the previous basic subsequence); read in the complete article."
    - title: "Donald E. Knuth, Permutations, Matrices, and Generalized Young Tableaux, Pacific Journal of Mathematics 34 (1970), 709-727"
      url: "https://msp.org/pjm/1970/34-3/pjm-v34-n3-p09-s.pdf"
      locator: "§4, printed p. 718: the vertex-class description of the first row of P, with each class listed in decreasing bottom-line order; read in the full text as the equivalent formulation."
---

## Statement

Let $w=(w_1,\dots,w_N)$ be a word of pairwise distinct real numbers and let
$P(w)$ be its insertion tableau, built by
[[def-row-insertion-and-bumping-route]]. For $j\ge1$ let $S_j$ be the list,
in the order of insertion, of those letters which at the moment of their
insertion are placed in position $j$ of the first row (equivalently, the
letters that pass through the $j$-th position of the first row). Then:

1. each $S_j$ is a strictly decreasing subsequence of $w$;
2. for every $x\in S_j$ with $j\ge2$, the entry $y$ occupying position
   $j-1$ of the first row at the moment $x$ is inserted belongs to $S_{j-1}$,
   was inserted earlier than $x$, and satisfies $y<x$.

The lists $S_1,S_2,\dots$ are the **basic subsequences** of $w$.

## Facts & Assumptions

**Given:** A word $w=(w_1,\dots,w_N)$ of pairwise distinct real numbers, its insertion tableaux $P_k=P(w_1,\dots,w_k)$, and for each $j\ge1$ the list $S_j$ of letters placed at position $j$ of the first row at their own insertion.

[L1] At each step the insertion of $w_k$ processes the first row once: either it appends $w_k$ at the end of the first row, at position $\lambda_1+1$, or it replaces the leftmost first-row entry exceeding $w_k$, at some position $j\le\lambda_1$, and passes that displaced entry to the second row. Both alternatives place exactly one letter in the first row, and positions of the first row are filled from the left: a position $j$ can receive a letter only at a step, and thereafter its occupant is whatever was placed there last ([[def-row-insertion-and-bumping-route]]).

[L2] $P_k$ is a standard tableau and its first row is strictly increasing, so its entry in position $j-1$ is smaller than its entry in position $j$ whenever both positions exist ([[lem-row-bumping-route-monotonicity]], [[def-young-tableau-standard-tableau-and-shape]]).

## Proof

**Proof technique:** direct.

1.1 A letter is placed at position $j$ of the first row only when position $j$ already exists and is replaced, or when it is appended as the new last position $j=\lambda_1+1$; in the replacement case the placed letter is strictly smaller than the entry it replaces, by the leftmost-greater rule, and in the append case position $j$ had no previous occupant. [L1]

1.2 The lists $S_j$ consist of distinct steps of the word in increasing order, because at each step at most one letter is placed in the first row; therefore each $S_j$ is a subsequence of $w$. [L1, given]

1.3 Let $x\in S_j$ with $j\ge2$, inserted at step $k$, and let $y$ be the entry occupying position $j-1$ of the first row immediately before the insertion of $w_k$. Position $j-1$ exists because $j\le\lambda_1+1$ at that moment, and $y<x$: in a replacement this follows from the leftmost entry exceeding $x$ being at position $j$, so every earlier entry is smaller than $x$; in an append it follows from $x$ exceeding every old row entry. [L1, L2, given]

2.1 Since the occupant of position $j$ is always the last letter placed there (step 1.1), each successive element of $S_j$ is strictly smaller than its predecessor: the predecessor is the occupant replaced at the successor's insertion step. Hence $S_j$, read in the order of insertion, is strictly decreasing. [step 1.1, L1]

3.1 The entry $y$ was placed at position $j-1$ at some earlier step $k'<k$: by step 1.1 every occupant of a position of the first row is placed there at a step, and $y$ is the current occupant before step $k$, so its placement step precedes $k$. Hence $y\in S_{j-1}$ and $y$ is inserted earlier than $x$, which together with $y<x$ proves (2). [step 2.1, step 1.2, step 1.3, L1]

4.1 Consequently every element of $S_j$ with $j\ge2$ has an earlier smaller predecessor in $S_{j-1}$, while each $S_j$ is strictly decreasing; this is the assertion of the lemma. [step 2.1, step 1.2, step 3.1] ∎
