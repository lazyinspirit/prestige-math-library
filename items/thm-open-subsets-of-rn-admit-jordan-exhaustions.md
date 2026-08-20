---
id: thm-open-subsets-of-rn-admit-jordan-exhaustions
kind: theorem
title: "Every open subset of $\\mathbb{R}^n$ admits a compact Jordan exhaustion"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-jordan-exhaustion-of-an-open-set, def-jordan-inner-and-outer-content, def-multidimensional-rectangle-and-volume, lem-compact-set-has-a-jordan-neighborhood-inside-an-open-set, thm-heine-borel-rn, lem-distance-to-set-is-lipschitz, lem-q-and-irrationals-dense-r, thm-rationals-countable, thm-n-cross-n-countable, lem-finite-powers-of-countable-sets-are-countable, thm-recursion, thm-well-ordering-principle]
justified_by: []
aliases: []
landmark: true
short: "Open sets admit Jordan exhaustions"
proof_strategy: constructive
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "V. Guillemin, MIT 18.101 Analysis II Lecture Notes, Theorem 3.20"
      url: "https://ocw.mit.edu/courses/18-101-analysis-ii-fall-2005/babd982be745679b6d691f78b1c18f53_lectures.pdf"
pipeline_run: null
---

## Statement

Every open subset of $\mathbb R^n$ has a compact Jordan exhaustion.

## Facts & Assumptions

**Given:** A natural $n\ge1$ and an open set $D\subseteq\mathbb R^n$.

[L1] If $C\subseteq U\subseteq\mathbb R^n$, where $C$ is compact and $U$ is open, then a compact Jordan set $K$, which may be a finite union of closed grid rectangles, satisfies $C\subseteq\operatorname{int}K\subseteq K\subseteq U$ ([[lem-compact-set-has-a-jordan-neighborhood-inside-an-open-set]]).

[L2] For a nonempty set $A$ in a metric space, $|d(x,A)-d(y,A)|\le d(x,y)$ ([[lem-distance-to-set-is-lipschitz]]).

[L3] The rationals are countably infinite ([[thm-rationals-countable]]).

[L4] If $C$ is at most countable and $m\in\mathbb N$, then $C^m$ is at most countable ([[lem-finite-powers-of-countable-sets-are-countable]]).

[L5] Every nonempty subset of $\mathbb N$ has a least element ([[thm-well-ordering-principle]]).

[L6] Recursion on $\mathbb N$ produces a sequence from a seed and a specified successor function ([[thm-recursion]]).

[L7] A subset of $\mathbb R^n$ is compact exactly when it is closed and bounded ([[thm-heine-borel-rn]]).

[L8] The rationals are dense in $\mathbb R$ ([[lem-q-and-irrationals-dense-r]]).

[L9] Jordan content is defined from finite rectangular inner families and outer covers, and the empty set has content zero ([[def-jordan-inner-and-outer-content]]).

[L10] A closed box has volume equal to the product of its side lengths ([[def-multidimensional-rectangle-and-volume]]).

[L11] There is an explicit bijection $\mathbb N\times\mathbb N\to\mathbb N$ ([[thm-n-cross-n-countable]]).

## Proof

**Proof technique:** constructive.

1.1 If $D=\varnothing$, take $K_j=\varnothing$ for all $j$; [L9] verifies the Jordan clause. If $D=\mathbb R^n$, take $K_j=[-(j+1),j+1]^n$; [L7], [L9], and [L10] make these compact Jordan boxes. Both sequences are exhaustions, and the radii begin at $1$. [L7, L9, L10, construct]

1.2 Suppose $D$ is proper and nonempty, put $F:=\mathbb R^n\setminus D$, and define $C_j:=\{x\in\mathbb R^n:|x_k|\le j+1\text{ for every }k<n,\ d(x,F)\ge1/(j+1)\}$. By [L2], each $C_j$ is closed and bounded, hence compact by [L7], lies in $D$, and satisfies $C_j\subseteq C_{j+1}$. [L2, L7, construct]

1.3 Fix a bijection from $\mathbb Q$ to $\mathbb N$ using [L3]. Iterating the explicit pairing in [L11] codes every finite rational endpoint list by one natural, with its length included in the code; [L4] verifies each fixed-length stage. Thus all finite unions of closed rational grid rectangles admit one fixed enumeration by natural-number codes without Countable Choice. [L3, L4, L11]

2.1 Apply [L1] to $C_0\subseteq D$. Its finite grid union has a positive margin between the compact core and the complement of its interior and between the union and $\mathbb R^n\setminus D$. By [L8], move each of its finitely many grid endpoints by less than that margin to rational endpoints, preserving $C_0\subseteq\operatorname{int}K_0\subseteq K_0\subseteq D$. Thus the candidate codes of step 1.3 are nonempty, and [L5] selects their least member. The same argument applied to the compact set $C_{j+1}\cup K$ defines a single-valued successor $K'$ with $C_{j+1}\cup K\subseteq\operatorname{int}K'\subseteq K'\subseteq D$. [step 1.2, step 1.3, L1, L5, L8, construct]

3.1 Apply [L6] to the seed $(0,K_0)$ and the successor rule of step 2.1. The second coordinates form compact Jordan sets with $C_j\subseteq K_j\subseteq\operatorname{int}K_{j+1}\subseteq D$. [step 1.3, step 2.1, L6, construct]

4.1 If $C\subseteq D$ is compact, [L7] bounds all of its coordinates. Also, open balls contained in $D$ cover $C$; a finite subcover and the minimum of their halved radii give a positive lower bound for $d(x,F)$ on $C$. Hence $C\subseteq C_j\subseteq K_j$ for some $j$; in particular every point of $D$ is eventually included, and $(K_j)$ is an exhaustion. [step 1.2, step 3.1, L7, discharge-construct] ∎
