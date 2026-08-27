---
id: cor-free-groups-of-rank-at-least-two-have-subgroups-of-every-finite-rank
kind: corollary
title: "A free group of rank at least two has subgroups of every finite rank"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-free-basis, def-rank-of-a-finite-rank-free-group, thm-schreier-index-rank-formula]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "C. Löh, Geometric Group Theory: An Introduction (2015 course version)"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ws1415/lecture_notes_old.pdf"
    - title: "J. S. Milne, Group Theory, Version 4.01"
      url: "https://www.jmilne.org/math/CourseNotes/GT.pdf"
---

## Statement

If $F$ is a free group of rank at least $2$, then for every integer $m\ge 1$
there is a subgroup of $F$ of rank $m$.

## Facts & Assumptions

**Given:** A free group $F$ of rank at least $2$.

[L1] A free basis is the generating subset appearing in the universal property
of a free group ([[def-free-basis]]).

[L2] Finite rank means cardinality of a finite free basis
([[def-rank-of-a-finite-rank-free-group]]).

[L3] A subgroup of index $d$ in a rank-two free group has rank $1+d$
([[thm-schreier-index-rank-formula]]).

## Proof

**Proof technique:** direct.

1.1 Choose a free basis $X$ of $F$ with at least two elements, and fix distinct $x,y\in X$. Let $L=\langle x,y\rangle$. For any group $G$ and any function $u:\{x,y\}\to G$, extend $u$ to a function on $X$ by sending every basis element outside $\{x,y\}$ to $e_G$. The universal property in [L1] then gives a unique homomorphism $F\to G$, whose restriction to $L$ extends $u$. Hence $\{x,y\}$ is a free basis of $L$, so [L2] gives $\operatorname{rank}(L)=2$. [L1, L2, given, construct]

2.1 For $m=1$, the cyclic subgroup $\langle x\rangle$ has free basis $\{x\}$. Now assume $m\ge2$. Because $L$ is free on $\{x,y\}$, there is a surjective homomorphism $\pi:L\to(\mathbb Z/(m-1),+)$ with $\pi(x)=1$ and $\pi(y)=0$. Let $H_m=\ker\pi$. Then $[L:H_m]=m-1$, so [L3] gives $\operatorname{rank}(H_m)=1+(m-1)=m$. [L3, step 1.1, given, construct]

3.1 The subgroup $\langle x\rangle$ handles $m=1$, and the subgroups $H_m\le L\le F$ handle every $m\ge2$. Therefore $F$ has subgroups of every finite rank. [step 2.1] ∎
