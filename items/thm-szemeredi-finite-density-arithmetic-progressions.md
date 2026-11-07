---
id: thm-szemeredi-finite-density-arithmetic-progressions
kind: theorem
title: "Finite dense subsets of the integers contain long arithmetic progressions"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 11
deps:
  - def-finite-density-k-term-arithmetic-progression
  - thm-bertrands-postulate
  - thm-finite-partite-hypergraph-removal
  - lem-partite-simplex-encoding-of-cyclic-arithmetic-progressions
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Terence Tao, A variant of the hypergraph removal lemma, arXiv:math/0503572v2"
      url: "https://arxiv.org/pdf/math/0503572v2"
      locator: "Corollary 1.14 and application on printed pp. 5–6; explicit finite interval/simplex deduction reconstructed locally"
    - title: "W. T. Gowers, A new proof of Szemerédi’s theorem"
      url: "https://www.cs.umd.edu/~gasarch/TOPICS/vdw/sz-thm-gowers-proof.pdf"
      locator: "§1, Theorem 1.2; §18, Theorem 18.2, following the density-increment partition in Theorem 18.1"
    - title: "Terence Tao and Van H. Vu, Additive Combinatorics"
      url: "https://www.cs.umd.edu/~gasarch/COURSES/752/S22/AddComb.pdf"
      locator: "Chapter 10, Theorems 10.1 and 10.4; Chapter 11, §§11.1–11.6"
---

## Statement

For every integer $k\ge3$ and real number $0<\delta\le1$, there is an integer $N_0(k,\delta)$ such that for every integer $N\ge N_0(k,\delta)$ and every set $A\subseteq[N]=\{1,2,\ldots,N\}$ with $|A|\ge\delta N$, there are integers $a$ and $d\ge1$ for which $a,a+d,\ldots,a+(k-1)d$ all belong to $A$.

## Statement references

[[def-finite-density-k-term-arithmetic-progression]]

[Gowers, *A new proof of Szemerédi’s theorem*, §1, Theorem 1.2](https://www.cs.umd.edu/~gasarch/TOPICS/vdw/sz-thm-gowers-proof.pdf)

[Tao and Vu, *Additive Combinatorics*, Chapter 10, Theorems 10.1 and 10.4](https://www.cs.umd.edu/~gasarch/COURSES/752/S22/AddComb.pdf)

## Facts & Assumptions

**Given:** An integer $k\ge3$ and a real number $0<\delta\le1$.

[F1] A proper interval progression has integer positive difference and all its terms in the stated interval ([[def-finite-density-k-term-arithmetic-progression]]).

[F2] For every integer $n>1$ there is a prime $p$ with $n<p<2n$ ([[thm-bertrands-postulate]]).

[F3] For any fixed finite $d$-uniform partite pattern and deletion tolerance $\epsilon>0$, a positive copy-density threshold guarantees destruction of all labelled copies by deleting at most an $\epsilon$ fraction of each edge class, uniformly over finite nonempty vertex classes ([[thm-finite-partite-hypergraph-removal]]).

[F4] For $k\ge3$ and prime $p>k$, the faces omitting $j$ with condition $\sum_{i\ne j}(i-j)x_i\in A$ have face values $a+jr$, where $a=\sum_i ix_i$ and $r=-\sum_i x_i$. Every pair $(a,r)$ has exactly $p^{k-2}$ preimages. The $r=0$ copies number $|A|p^{k-2}$ and are edge-disjoint within each fixed face ([[lem-partite-simplex-encoding-of-cyclic-arithmetic-progressions]]).

## Proof

1.1 Apply [F3] to $J=\{0,\ldots,k-1\}$ and its $k$ faces of size $k-1$, with $\epsilon=\delta/(8k)$. Let $\eta>0$ be the resulting threshold, decreased to at most $1/2$. Choose the least integer $N_0\ge k$ with $2N_0>1/\eta$. These parameters depend only on $k,\delta$. [given, F3, algebra]

2.1 Let $N\ge N_0$ and $A\subseteq[N]$ satisfy $|A|\ge\delta N$. Applying [F2] at $2N>1$, take the least prime $p$ with $2N<p<4N$. Regard $A$ as a subset of $\mathbb F_p$ via its distinct representatives in $[N]$. Then $p>k$, $1/p<\eta$, and $|A|/p>\delta/4$. [given, F2, step 1.1, algebra]

3.1 Use $k$ vertex classes equal to $\mathbb F_p$ and the face sets $E_j$ specified in [F4]. The labelled copies correspond to progression pairs $(a,r)$ whose terms $a,a+r,\ldots,a+(k-1)r$ belong to $A$, with exactly $p^{k-2}$ copies per pair. [F4, step 2.1]

4.1 Suppose that $A$ has no proper integer $k$-term progression with positive difference. For any cyclic progression in $A$, write its terms as $y_0,\ldots,y_{k-1}\in[1,N]$. All adjacent differences lie in $[1-N,N-1]$ and have the same residue $r$ modulo $p$. Any two differ by absolute value at most $2N-2<p$, so are equal as integers. If $r\ne0$, their common integer difference is nonzero; keeping or reversing the terms gives a positive-difference progression in $A$, contrary to the supposition. Thus all progression pairs in $A$ have $r=0$, and there are exactly $|A|$ such pairs. [F1, step 2.1, step 3.1, algebra]

5.1 The total number of labelled copies is therefore $|A|p^{k-2}$, of normalized density $|A|/p^2\le1/p<\eta$. There are also strictly more than $(\delta/4)p^{k-1}$ copies, since $|A|/p>\delta/4$. [step 2.1, step 3.1, step 4.1, algebra]

6.1 By [F3], delete at most $\epsilon p^{k-1}$ edges from each of the $k$ face classes to leave no copies. By the edge-disjointness in [F4], each deleted edge destroys at most one original $r=0$ copy. Thus all deletions destroy at most $k\epsilon p^{k-1}=(\delta/8)p^{k-1}$ original copies, fewer than their number in step 5.1. At least one survives, a contradiction. [F3, F4, step 1.1, step 5.1, algebra]

7.1 The supposition in step 4.1 is false. Hence for every $N\ge N_0$ and every $A\subseteq[N]$ of size at least $\delta N$, there is a progression as in the Statement. The same argument includes $\delta=1$ and $N=N_0$. Least-integer and least-prime selection and the single positive threshold in step 1.1 require no choice axiom. [given, F1, step 1.1, step 6.1] ∎

## Remarks

This qualitative proof uses finite hypergraph removal and the explicit simplex encoding. It preserves the full finite dense-set Statement without asserting a quantitative rate or an instantiation of the separate Gowers density-increment algorithm. Its use as a completed supplier awaits acceptance of the exact new hypergraph carriers and this carrier mapping; no other batch40 proof is certified here.
