---
id: thm-cycle-lemma
kind: theorem
title: "The cycle lemma (Dvoretzky–Motzkin): if every $a_i\\le1$ and $\\lVert a\\rVert=k\\ge1$, then exactly $k$ of the $m$ cyclic shifts of $a$ have all partial sums positive"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-cyclic-shift-positivity-is-a-strict-right-minimum-of-the-partial-sums, lem-strict-right-minima-of-a-quasiperiodic-partial-sum-function, lem-a-word-whose-weight-is-coprime-to-its-length-has-a-trivial-shift-stabiliser, def-cyclic-shift-and-the-periodic-partial-sum-function, thm-generalised-associativity, thm-induction-principle, def-finite-cardinality]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: 'N. Dershowitz and S. Zaks, "The Cycle Lemma and Some Applications", Europ. J. Combinatorics 11 (1990) 35–40, §§1–1.1'
      url: "https://www.cs.tau.ac.il/~nachumd/papers/CL.pdf"
    - title: 'C. Krattenthaler, "Lattice Path Enumeration", ch. 10 of the Handbook of Enumerative Combinatorics, §10.4, Lemma 10.4.6'
      url: "https://arxiv.org/pdf/1503.05930"
    - title: "A. Postnikov (notes by A. Lin), MIT 18.212 Algebraic Combinatorics, Spring 2019, Claim 11"
      url: "https://web.stanford.edu/~lindrew/18.212.pdf"
pipeline_run: null
---

## Statement

**Orientation convention, fixed here and cited wherever it is used.** A shift
$\sigma^{j}a$ is counted when **all** of its partial sums
$\sum_{i<r}(\sigma^{j}a)_i$, for $1\le r\le m$, are **strictly positive**, and
shifts are indexed by starting position, so $\sigma^{j}a$ begins at position
$j\bmod m$ of $a$ ([[def-cyclic-shift-and-the-periodic-partial-sum-function]]).

1. Let $m\ge1$ and let $a$ be a word of length $m$ of integers with $a_i\le1$ for
   every $i<m$ and $\lVert a\rVert=k\ge1$. Then exactly $k$ of the $m$ indices
   $j$ with $0\le j<m$ are such that $\sigma^{j}a$ has all its partial sums
   positive.
2. **Boxes and circles.** Let $p,n,\mu\in\mathbb{N}$ with $m:=p+n\ge1$, and let
   $a$ be a word of length $m$ in which $p$ positions carry the letter $1$ and
   the remaining $n$ positions carry the letter $-\mu$. Then
   $\lVert a\rVert=p-\mu n$, and if $p-\mu n\ge1$ then exactly $p-\mu n$ of the
   $m$ indices $j$ with $0\le j<m$ are such that $\sigma^{j}a$ has all its
   partial sums positive.

## Facts & Assumptions

**Given:** a natural number $m\ge1$ and a word $a$ of length $m$ of integers, with the hypotheses of the clause being proved.

[F1] $\lVert a\rVert=\sum_{i<m}a_i$; $(\sigma^{j}a)_i=a_{(i+j)\bmod m}$; and the finite sum satisfies $\sum_{i<0}c_i=0$ and $\sum_{i<r+1}c_i=\sum_{i<r}c_i+c_r$ ([[def-cyclic-shift-and-the-periodic-partial-sum-function]]).

[L1] For $\lVert a\rVert\ge1$ and $j\in\mathbb{Z}$: every partial sum $\sum_{i<r}(\sigma^{j}a)_i$ with $1\le r\le m$ is positive if and only if $S_a(i)>S_a(j)$ for every integer $i>j$, that is exactly when $j$ is a strict right minimum of $S_a$ ([[lem-cyclic-shift-positivity-is-a-strict-right-minimum-of-the-partial-sums]]).

[L2] If $a_i\le1$ for every $i<m$ and $k=\lVert a\rVert\ge1$, then for every $j_0\in\mathbb{Z}$ the set of strict right minima of $S_a$ lying in $\{j_0,\dots,j_0+m-1\}$ is finite with exactly $k$ elements ([[lem-strict-right-minima-of-a-quasiperiodic-partial-sum-function]], clause 3).

[L3] For a commutative monoid $M$ and $g:\mathbb{N}\to M$: $\prod_{i<p+n}g_i=(\prod_{i<p}g_i)\cdot(\prod_{j<n}g_{p+j})$; and if $\pi$ is a permutation of the von Neumann natural $\ell$ and $h_i=g_{\pi(i)}$ for every $i<\ell$, then $\prod_{i<\ell}h_i=\prod_{i<\ell}g_i$ ([[thm-generalised-associativity]], clauses 1 and 3).

[L4] A property that holds at $0$ and passes from every natural number to its successor holds at every natural number: if a property $P$ satisfies $P(0)$ and ($P(n) \Rightarrow P(\sigma(n))$) for all $n$, then $P(n)$ holds for all $n \in \mathbb{N}$ ([[thm-induction-principle]]).

[L5] $\lvert n\rvert=n$ for a natural number $n$, and a bijection transports finiteness and cardinality ([[def-finite-cardinality]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] an index $j$ is such that $\sigma^{j}a$ has all its partial sums positive exactly when $j$ is a strict right minimum of $S_a$; so the set of indices to be counted in clause 1 is the set of strict right minima lying in $\{0,1,\dots,m-1\}$. [L1]

2.1 By [L2] with $j_0=0$ that set is finite with exactly $k$ elements, which is clause 1. [L2, L5, step 1.1]

3.1 For clause 2, first compute the weight. Reordering the positions is a permutation of the index set, so by the permutation clause of [L3] the weight of $a$ equals the weight of the word $b$ whose first $p$ letters are $1$ and whose remaining $n$ letters are $-\mu$; the splitting clause of [L3] gives $\lVert b\rVert=\sum_{i<p}1+\sum_{j<n}(-\mu)$, and induction with the finite-sum clause of [F1] evaluates a sum of $p$ copies of $1$ as $p$ and a sum of $n$ copies of $-\mu$ as $-\mu n$; hence $\lVert a\rVert=p-\mu n$. Each letter is at most $1$, since $1\le1$ and $-\mu\le1$ for $\mu\ge0$, so if $p-\mu n\ge1$ then clause 1 applies with $k=p-\mu n$ and gives clause 2. [F1, L3, L4, step 2.1] ∎

## Remarks

- **The orientation convention is the one place this statement can silently go
  wrong.** Dershowitz and Zaks cut a necklace at a valid origin and count shifts
  by strict domination; Krattenthaler's Lemma 10.4.6 states a version with weak
  domination below a line. These are the same lemma read in opposite directions,
  and a page that mixes them gets a one-to-$k$ correspondence pointing the wrong
  way. The convention above is strict positivity of every partial sum, with shifts
  indexed by starting position, and it is cited rather than restated wherever it
  is used.

- **Indices, not words.** The count is of indices $j$ in $\{0,\dots,m-1\}$. Two
  different indices can give the same word, and then the same word is counted
  twice; that happens exactly when the shift stabiliser of $a$ is nontrivial, and
  the case the applications need is the one where the weight is coprime to $m$ and
  the $m$ shifts are pairwise distinct
  ([[lem-a-word-whose-weight-is-coprime-to-its-length-has-a-trivial-shift-stabiliser]]).

- **What the hypotheses buy.** Boundedness of the letters above by $1$ makes the
  strict right minima succeed one another at value steps of exactly $1$; positive
  weight makes them exist. Neither is a normalisation, and the companion of each
  is recorded in
  [[lem-strict-right-minima-of-a-quasiperiodic-partial-sum-function]].
