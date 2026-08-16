---
id: thm-sigma-algebra-closure-laws
kind: theorem
title: "Sigma-algebras are closed under countable intersections, differences, symmetric differences, and set limits"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-sigma-algebra, def-set-limsup-and-liminf]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "R. F. Bass, Real Analysis for Graduate Students, version 5.0, Definition 2.1 and Exercise 2.9"
      url: "https://draft-r-bass-scholar.media.uconn.edu/wp-content/uploads/sites/3926/2024/12/real-analysis-for-graduate-students_version-50_accessible.pdf"
pipeline_run: null
---

## Statement

Let $\mathcal A$ be a sigma-algebra on $X$. Then $\mathcal A$ is closed under
countable intersections, differences, and symmetric differences. If every term
of a sequence $(A_n)_{n\in\mathbb N}$ lies in $\mathcal A$, then both
$\liminf_nA_n$ and $\limsup_nA_n$ ([[def-set-limsup-and-liminf]]) lie in
$\mathcal A$.

## Facts & Assumptions

**Given:** A sigma-algebra $\mathcal A$ on $X$ and a sequence $(A_n)_{n\in\mathbb N}$ in $\mathcal A$.

[L1] A sigma-algebra contains the empty set and is closed under complements and countable unions ([[def-sigma-algebra]]).

[L2] Set liminf is a countable union of tail intersections, and set limsup is a countable intersection of tail unions ([[def-set-limsup-and-liminf]]).

## Proof

**Proof technique:** direct.

1.1 De Morgan's identity gives $\bigcap_nA_n=X\setminus\bigcup_n(X\setminus A_n)\in\mathcal A$ by [L1]. Finite and empty intersections are included by repeating terms and by $\bigcap\varnothing=X=X\setminus\varnothing$. [L1, algebra]

2.1 If $A,B\in\mathcal A$, then $A\setminus B=A\cap(X\setminus B)\in\mathcal A$ by step 1.1, and $A\mathbin\triangle B=(A\setminus B)\cup(B\setminus A)\in\mathcal A$. [step 1.1, L1, algebra]

3.1 Each tail intersection and tail union of $(A_n)$ belongs to $\mathcal A$ by step 1.1 and [L1]. Applying countable union and intersection closure once more to the formulas in [L2] puts both $\liminf_nA_n$ and $\limsup_nA_n$ in $\mathcal A$. [step 1.1, L1, L2] ∎
