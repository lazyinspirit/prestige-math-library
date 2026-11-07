---
id: lem-interval-to-large-cyclic-group-progression-embedding
kind: lemma
title: "Interval progressions embed without wraparound in a larger cyclic group"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-finite-density-k-term-arithmetic-progression
  - def-integers-modulo-n
  - def-addition-and-multiplication-modulo-n
  - thm-integers-modulo-n-basic-algebra
  - thm-standard-representatives-modulo-n
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "W. T. Gowers, A new proof of Szemerédi’s theorem"
      url: "https://www.cs.umd.edu/~gasarch/TOPICS/vdw/sz-thm-gowers-proof.pdf"
      locator: "§2, the passage from prime cyclic groups to interval progressions in the proof of Theorem 2.6"
    - title: "Terence Tao and Van H. Vu, Additive Combinatorics"
      url: "https://www.cs.umd.edu/~gasarch/COURSES/752/S22/AddComb.pdf"
      locator: "Chapter 10, Theorems 10.4 and 10.5, interval and cyclic-group formulations"
---

## Statement

Let $k\ge2$, $N\ge1$, and let $p$ be an integer with $p>2N$. Let $\iota:[N]\to\mathbb Z/p\mathbb Z$ send $a$ to its residue class. The map $\iota$ sends every proper $k$-term arithmetic progression in $[N]$ to a proper cyclic-group $k$-term arithmetic progression. Conversely, if a proper cyclic-group $k$-term arithmetic progression has every term in $\iota([N])$, then its unique integer representatives, in their given cyclic order or in the reversed order, form a proper interval $k$-term arithmetic progression in $[N]$.

## Statement references

[[def-finite-density-k-term-arithmetic-progression]]

[Gowers, *A new proof of Szemerédi’s theorem*, §2](https://www.cs.umd.edu/~gasarch/TOPICS/vdw/sz-thm-gowers-proof.pdf)

[Tao and Vu, *Additive Combinatorics*, Chapter 10](https://www.cs.umd.edu/~gasarch/COURSES/752/S22/AddComb.pdf)

## Facts & Assumptions

**Given:** Integers $k\ge2$, $N\ge1$, and $p>2N$, the interval $[N]$, and the residue map $\iota:[N]\to\mathbb Z/p\mathbb Z$.

[F1] A proper $k$-term progression in $[N]$ is $(a,a+d,\ldots,a+(k-1)d)$ with $d\ge1$ and all terms in $[N]$; in a cyclic group its terms are pairwise distinct ([[def-finite-density-k-term-arithmetic-progression]]).

[F2] Two integer representatives define the same class modulo $p$ exactly when their difference is divisible by $p$ ([[def-integers-modulo-n]]).

[F3] The classes $[0]_p,\ldots,[p-1]_p$ are distinct and exhaust $\mathbb Z/p\mathbb Z$ ([[thm-standard-representatives-modulo-n]]).

[F4] Addition on $\mathbb Z/p\mathbb Z$ is induced by integer addition and is a group operation ([[def-addition-and-multiplication-modulo-n]], [[thm-integers-modulo-n-basic-algebra]]).

## Proof

1.1 If $a,b\in[N]$ and $\iota(a)=\iota(b)$, then $p\mid(a-b)$ by [F2]. Since $|a-b|\le N-1<p$, this forces $a=b$. Thus $\iota$ is injective. [given, F2, algebra]

1.2 Conversely, write the unique representatives in $[N]$ of a proper cyclic progression as $a_0,\ldots,a_{k-1}$. For each $0\le j<k-1$, the integer difference $\Delta_j:=a_{j+1}-a_j$ lies between $-(N-1)$ and $N-1$, and its residue class is the same cyclic difference $r$. If $\Delta_i$ and $\Delta_j$ are two such differences, then $p\mid(\Delta_i-\Delta_j)$ while $|\Delta_i-\Delta_j|\le2N-2<p$; hence $\Delta_i=\Delta_j$. All adjacent differences therefore equal one integer $d$. [given, F2, F3, F4, algebra]

2.1 Let $(a,a+d,\ldots,a+(k-1)d)$ be a proper interval progression. The map $\iota$ preserves addition by [F4], so its image is the corresponding cyclic progression. Its terms remain distinct by injectivity from step 1.1. [F1, F4, step 1.1]

3.1 Properness excludes $d=0$. If $d>0$, the representatives form an interval progression in their given order; if $d<0$, reversing them gives an interval progression with positive common difference $-d$. All terms remain in $[N]$ by construction. [F1, step 1.2, algebra] ∎
