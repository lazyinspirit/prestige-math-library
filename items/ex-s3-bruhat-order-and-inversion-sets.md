---
id: ex-s3-bruhat-order-and-inversion-sets
kind: example
title: S3 bruhat order and inversion sets
status: "published"
origin: pipeline
deps: []
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Björner and Brenti, Combinatorics of Coxeter Groups, §2.2; the six-element computation is supplied locally
      url: https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf
proof_strategy: direct
---

## Example

For the $A_2$ permutation reflection group $S_3$, strong Bruhat order has ranks
$$\{123\},\quad\{213,132\},\quad\{231,312\},\quad\{321\}.$$
Each element of rank one lies below both elements of rank two. Containment of inversion sets in the one-line position convention does not characterize this order. All order conventions and their equivalence for this six-element example are verified below.

## Facts & Assumptions

**Given:** Write $w$ as $w(1)w(2)w(3)$ and compose with the rightmost permutation acting first. Put $a=(12)$ and $b=(23)$. Word length means the least number of $a,b$ letters. A reduced word attains that least number. A reduced subword keeps some letters in their original order and must itself have least length. Root reflections here are the three transpositions, acting on the plane $x+y+z=0$ by coordinate exchange. Inversions are pairs $(i,j)$ with $i<j$ and $w(i)>w(j)$.

## Verification

1.1 Direct composition gives $1=123$, $a=213$, $b=132$, $ab=231$, $ba=312$, and $aba=bab=321$. No word of length at most two represents $321$: after canceling $aa=bb=1$, the list of such words is $1,a,b,ab,ba$. Thus these six words have lengths $0,1,1,2,2,3$ respectively. At lengths one and two the indicated reduced words are unique. At length three any adjacent repetition cancels, so the only reduced words are $aba$ and $bab$, both for $321$. This enumerates every reduced expression of every element. [given]

2.1 The reduced subwords of $ab$ give $\{1,a,b,ab\}$ and those of $ba$ give $\{1,a,b,ba\}$. The reduced subwords of each of $aba$ and $bab$ give all six elements: their one-letter choices give $a,b$, their adjacent two-letter choices give $ab,ba$, their empty subword gives $1$, and the full word gives $321$; the nonadjacent equal-letter choice is not reduced. For $1,a,b$ the lower sets are respectively $\{1\},\{1,a\},\{1,b\}$. Hence the subword relation is independent of the reduced expression in this group. These explicitly nested lower sets also show reflexivity, antisymmetry (distinct same-rank elements are incomparable), and transitivity, so they define a partial order. [step 1.1]

3.1 Its covers are $1\to a,b$; $a\to ab,ba$ and $b\to ab,ba$; and $ab,ba\to321$. Each is left multiplication by a transposition. For the middle four covers, compute $(ab)a^{-1}=aba=(13)$, $(ba)a^{-1}=b$, $(ab)b^{-1}=a$, and $(ba)b^{-1}=bab=(13)$. For the last two use $321=bab$ to get $321(ab)^{-1}=b$, and $321=aba$ to get $321(ba)^{-1}=a$. The first two use $a,b$ themselves. Each cover raises length by one. Conversely any transposition multiplication raising length by one must connect adjacent ranks, and the displayed list includes every possible pair of adjacent ranks. Thus chains of such multiplications give exactly the subword order computed in 2.1; both usual strong Bruhat conventions agree here. [step 1.1, step 2.1]

4.1 Direct inequalities between the three entries give the inversion sets: $123$ has $\varnothing$, $213$ has $\{(1,2)\}$, $132$ has $\{(2,3)\}$, $231$ has $\{(1,3),(2,3)\}$, $312$ has $\{(1,2),(1,3)\}$, and $321$ has all three pairs. Their sizes match the lengths in 1.1. Yet $213\leq231$ by 2.1 while $(1,2)$ belongs only to the former inversion set. This is the required failed containment witness. The empty word is the unique minimum and either longest reduced word gives the same unique maximum. Every computation is finite and explicit, so no choice or general exchange theorem is assumed. [step 1.1, step 2.1, step 3.1] ∎
