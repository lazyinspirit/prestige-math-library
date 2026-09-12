---
id: def-integer-base-map-on-the-circle
kind: definition
title: Integer-base maps and b-adic circle intervals
deps: ["def-circle-rotation-and-doubling-map"]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: E–W Example 2.4 pp.14–15; MT-22 binding base-b amendment
      url: https://webspace.maths.qmul.ac.uk/f.vivaldi/teaching/ETAD/NotesI.pdf
status: draft
origin: pipeline
---

## Definition

On the circle of [[def-circle-rotation-and-doubling-map]], for an integer $b\ge2$ put $D_b(x)=\{bx\}$. For every $n\ge0$ its **level-n b-adic intervals** are

$$I_{n,k}=[k/b^n,(k+1)/b^n),\qquad 0\le k<b^n.$$

These intervals partition $[0,1)$; at level zero the only interval is the whole circle. On the branch $I_{1,j}$ the map is $D_b(x)=bx-j$. Iterating fractional-part arithmetic gives $D_b^n(x)=\{b^nx\}$, and on $I_{n,k}$ this is $b^nx-k$. Each branch maps bijectively onto $[0,1)$ with inverse $y\mapsto(y+k)/b^n$. Half-open endpoints ensure that every x belongs to exactly one branch, including x=0. Multiplication by the integer b respects congruence modulo one, and the distance formula gives $d(D_bx,D_by)\le b\,d(x,y)$. Thus these are continuous circle maps. The previously defined doubling map is exactly $D=D_2$. None of these algebraic or metric facts uses a measure or a choice axiom.
