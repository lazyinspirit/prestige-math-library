---
id: thm-schreier-index-rank-formula
kind: theorem
title: "The Schreier index-rank formula"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-rank-of-a-finite-rank-free-group, lem-spanning-trees-and-schreier-systems-correspond, thm-nielsen-schreier-with-an-explicit-basis]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Group Theory, Version 4.01"
      url: "https://www.jmilne.org/math/CourseNotes/GT.pdf"
    - title: "C. Löh, Geometric Group Theory: An Introduction (2015 course version)"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ws1415/lecture_notes_old.pdf"
---

## Statement

Let $F$ be a free group of finite rank $n$, and let $H\le F$ have finite index
$[F:H]=d$. Then $H$ has finite rank and

$$\operatorname{rank}(H)=1+d(n-1).$$

## Facts & Assumptions

**Given:** A free group $F$ of finite rank $n$ and a finite-index subgroup
$H\le F$ with $[F:H]=d$.

[L1] A finite-rank free group has a free basis with $n$ elements
([[def-rank-of-a-finite-rank-free-group]]).

[L2] Rooted spanning trees in the Schreier graph correspond to Schreier systems
([[lem-spanning-trees-and-schreier-systems-correspond]]).

[L3] For any Schreier system, the nontrivial Schreier generators form a free
basis of the subgroup ([[thm-nielsen-schreier-with-an-explicit-basis]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], choose a free basis $X$ of $F$ with $|X|=n$. Let $\Gamma=\operatorname{Sch}_X(H)$, and choose a rooted spanning tree $T$ in $\Gamma$. Since the vertices of $\Gamma$ are the right cosets of $H$, there are $d$ vertices. For each vertex and each $x\in X$, the Schreier graph has exactly one outgoing $x$-edge, so $\Gamma$ has $dn$ positive labeled edges. [L1, L2, given, choose]

2.1 The tree $T$ has exactly $d-1$ edges. An edge $Ht\xrightarrow{x}Htx$ lies in $T$ exactly when the chosen representative of $Htx$ is $tx$, and then the corresponding Schreier generator is $tx(tx)^{-1}=1$. Every positive edge outside $T$ gives one nontrivial Schreier generator, so the number of nontrivial generators is $dn-(d-1)=1+d(n-1)$. [L2, step 1.1, algebra]

3.1 By [L3], the nontrivial generators counted in step 2.1 form a free basis of $H$. Therefore $H$ has finite rank and $\operatorname{rank}(H)=1+d(n-1)$. [L3, step 2.1] ∎
