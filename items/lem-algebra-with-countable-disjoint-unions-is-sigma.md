---
id: lem-algebra-with-countable-disjoint-unions-is-sigma
kind: lemma
title: "An algebra closed under countable disjoint unions is a sigma-algebra"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-algebra-of-subsets, def-sigma-algebra]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "R. F. Bass, Real Analysis for Graduate Students, version 5.0, Section 2.1"
      url: "https://draft-r-bass-scholar.media.uconn.edu/wp-content/uploads/sites/3926/2024/12/real-analysis-for-graduate-students_version-50_accessible.pdf"
pipeline_run: null
---

## Statement

Let $\mathcal A$ be an algebra of subsets of $X$. If the union of every
pairwise disjoint sequence in $\mathcal A$ belongs to $\mathcal A$, then
$\mathcal A$ is a sigma-algebra on $X$.

## Facts & Assumptions

**Given:** An algebra $\mathcal A$ on $X$ with the stated closure under countable disjoint unions, and a sequence $(A_n)_{n\in\mathbb N}$ in $\mathcal A$.

[L1] An algebra is closed under complements and finite unions ([[def-algebra-of-subsets]]).

[L2] A sigma-algebra is an algebra closed under countable unions ([[def-sigma-algebra]]).

## Proof

**Proof technique:** direct.

1.1 For $n\in\mathbb N$ put $B_n:=A_n\setminus\bigcup_{k<n}A_k$. The union with $k<n$ is finite and is empty when $n=0$, so [L1] gives $B_n\in\mathcal A$. The sets $B_n$ are pairwise disjoint and $\bigcup_nB_n=\bigcup_nA_n$. [L1, algebra]

2.1 The assumed disjoint-union closure applied to $(B_n)$ gives $\bigcup_nA_n\in\mathcal A$. Thus $\mathcal A$ has the countable-union axiom in [L2] and is a sigma-algebra. [step 1.1, given, L2] ∎
