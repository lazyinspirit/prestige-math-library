---
id: thm-free-group-of-rank-two-is-nonamenable
kind: theorem
title: "The free group of rank two is nonamenable"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cor-z-free-product-z-is-free-group-of-rank-two, def-paradoxical-decomposition-of-a-group, lem-paradoxical-groups-admit-no-invariant-mean]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "C. Löh, Geometric Group Theory: An Introduction (2015 course version)"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ws1415/lecture_notes_old.pdf"
    - title: "Cornelia Drutu and Michael Kapovich, Lectures on Geometric Group Theory"
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/kapovich_drutu.pdf"
---

## Statement

The free group of rank two is nonamenable.

## Facts & Assumptions

**Given:** The free group $F_2$ of rank two.

[L1] $F_2$ is the free group on two generators, say $a$ and $b$ ([[cor-z-free-product-z-is-free-group-of-rank-two]]).

[L2] A paradoxical decomposition forbids a left-invariant mean ([[lem-paradoxical-groups-admit-no-invariant-mean]]).

[L3] Paradoxical decompositions are defined by finitely many translated pieces ([[def-paradoxical-decomposition-of-a-group]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], write $F_2=\langle a,b\rangle$. For $x\in\{a,a^{-1},b,b^{-1}\}$, let $W(x)$ be the set of nonempty reduced words whose first letter is $x$. Put $P=\{a^n:n\ge0\}$ and $P_+=\{a^n:n\ge1\}$, and define $A_1=W(a)\setminus P_+$, $A_2=W(a^{-1})\cup P$, $B_1=W(b)$, and $B_2=W(b^{-1})$. [L1, L3, given, construct]

2.1 The four sets are pairwise disjoint and partition $F_2$: the usual five first-letter classes partition $F_2$, and $P_+$ has merely been moved from $W(a)$ into the piece containing the identity. [step 1.1, algebra]

3.1 Left multiplication gives $aW(a^{-1})=F_2\setminus W(a)$ and $aP=P_+$, hence $F_2=A_1\sqcup aA_2$. Likewise $bW(b^{-1})=F_2\setminus W(b)$, hence $F_2=B_1\sqcup bB_2$. Thus the pieces of step 1.1, with translators $e,a,e,b$, satisfy both partition equalities in [L3]. [L3, step 1.1, step 2.1, algebra]

4.1 Steps 1.1-3.1 give a paradoxical decomposition of $F_2$, so [L2] implies that $F_2$ admits no left-invariant mean and is therefore nonamenable. [L2, step 1.1, step 2.1, step 3.1] ∎
