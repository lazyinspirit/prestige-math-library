---
id: prop-set-limsup-and-liminf-membership
kind: proposition
title: "Set liminf means eventual membership, set limsup means repeated membership, and liminf is contained in limsup"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-set-limsup-and-liminf]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "R. F. Bass, Real Analysis for Graduate Students, version 5.0, Exercise 2.9"
      url: "https://draft-r-bass-scholar.media.uconn.edu/wp-content/uploads/sites/3926/2024/12/real-analysis-for-graduate-students_version-50_accessible.pdf"
pipeline_run: null
---

## Statement

For a sequence $(A_n)_{n\in\mathbb N}$ of subsets of $X$ and $x\in X$:

1. $x\in\liminf_nA_n$ if and only if there is $N\in\mathbb N$ such that
   $x\in A_k$ for every $k\ge N$;
2. $x\in\limsup_nA_n$ if and only if for every $N\in\mathbb N$ there is
   $k\ge N$ with $x\in A_k$, equivalently $x$ belongs to infinitely many terms;
3. $\liminf_nA_n\subseteq\limsup_nA_n$.

## Facts & Assumptions

**Given:** A sequence $(A_n)_{n\in\mathbb N}$ of subsets of $X$ and a point $x\in X$.

[L1] The definitions are $\liminf_nA_n=\bigcup_n\bigcap_{k\ge n}A_k$ and $\limsup_nA_n=\bigcap_n\bigcup_{k\ge n}A_k$ ([[def-set-limsup-and-liminf]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], $x\in\liminf_nA_n$ exactly when $x$ belongs to one tail intersection, which is exactly the existence of $N$ such that $x\in A_k$ for every $k\ge N$. This proves both directions of claim 1, including $N=0$. [L1]

1.2 By [L1], $x\in\limsup_nA_n$ exactly when $x$ belongs to every tail union, which is exactly: for every $N$ there is $k\ge N$ with $x\in A_k$. This is equivalent to membership in infinitely many terms, since a finite set of successful indices has an index larger than all its members. [L1]

2.1 Eventual membership from step 1.1 implies the repeated-membership condition of step 1.2 by taking $k\ge\max\{N,N_0\}$ for each requested $N_0$. Hence $\liminf_nA_n\subseteq\limsup_nA_n$. [step 1.1, step 1.2] ∎
