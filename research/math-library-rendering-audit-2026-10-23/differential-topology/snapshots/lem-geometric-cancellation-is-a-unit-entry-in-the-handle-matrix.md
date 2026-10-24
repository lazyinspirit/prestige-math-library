---
id: lem-geometric-cancellation-is-a-unit-entry-in-the-handle-matrix
kind: lemma
title: "Geometric cancellation is a unit entry in the handle matrix"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 3
deps: [def-attaching-belt-intersection-matrix-of-adjacent-index-handles, def-local-oriented-intersection-sign, def-oriented-intersection-number, def-mod-two-intersection-number, cor-oriented-intersection-reduces-to-mod-two-intersection, def-countable-choice]
justified_by: []
aliases: []
proof_strategy: "direct"
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - title: "John Milnor, Lectures on the h-Cobordism Theorem (notes by L. Siebenmann and J. Sondow; scanned edition with text layer)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/surgery/hcobord.pdf"
      locator: "§6, printed pp. 67-70 (intersection numbers; a single transverse point has local sign ±1)"
    - title: "C. T. C. Wall, Differential Topology (Cambridge Studies in Advanced Mathematics 156; complete PDF)"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/Wall.pdf"
      locator: "§5.4, printed pp. 143-148 (complementary pair and its cancellation)"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume $\mathrm{AC}_\omega$. In the situation of the matrix definition, suppose the attaching sphere $A_i$ of the $(k+1)$-handle $g_i$ meets the belt sphere $B_j$ of the $k$-handle $e_j$ transversely in exactly one point. Then the oriented entry is $M_{ij}=\pm1$, equal to the local intersection sign of that point; in particular a geometrically cancelling pair has a unit entry in $\mathbb Z$. Without orientations the mod-2 entry is $1\in\mathbb Z_2$, also a unit.

## Facts & Assumptions

**Given:** An index-ordered presentation with $1\le k\le n-2$ and transverse attaching and belt spheres, a $(k+1)$-handle $g_i$ whose attaching sphere $A_i$ meets the belt sphere $B_j$ of the $k$-handle $e_j$ transversely in exactly one point.

[F1] [[def-attaching-belt-intersection-matrix-of-adjacent-index-handles]]: the entry $M_{ij}$ is the oriented intersection number $I(A_i,B_j)$ when the spheres carry the orientations induced by the framings and the boundary orientation, and the mod-2 number $I_2(A_i,B_j)$ otherwise.

[F2] [[def-oriented-intersection-number]] and [[def-local-oriented-intersection-sign]]: for transverse complementary-dimensional submanifolds the oriented intersection number is the finite sum $\sum_{p\in A\cap B}\varepsilon(p)$ of local signs, each of which lies in $\{+1,-1\}$; the empty intersection contributes $0$.

[F3] [[def-mod-two-intersection-number]] and [[cor-oriented-intersection-reduces-to-mod-two-intersection]]: the mod-2 intersection number is $\#(A\cap B)\bmod 2$, and in the common oriented setting it is the reduction modulo two of the oriented number.

[F4] [[def-countable-choice]]: $\mathrm{AC}_\omega$ is assumed, as in the matrix definition; the single-entry computation below is choice-free.

## Proof

**Proof technique:** direct.

1.1 By [F1] the entry is the oriented intersection number of $A_i$ and $B_j$ in the middle boundary. By hypothesis the transverse intersection is exactly one point $P$, so by [F2] the finite sum has the single term $\varepsilon(P)$, and $\varepsilon(P)\in\{+1,-1\}$ by definition of the local sign. Hence $M_{ij}=\varepsilon(P)=\pm1$, a unit of $\mathbb Z$. No other entry is involved. [F1, F2, F4, given]

2.1 For the mod-2 version, [F3] gives $I_2(A_i,B_j)=\#(A_i\cap B_j)\bmod2=1\bmod2=1\in\mathbb Z_2$, a unit of $\mathbb Z_2$; and in the oriented setting this agrees with the reduction of the oriented entry by [F3]. [F3, step 1.1]

3.1 Therefore a geometrically cancelling pair — one transverse intersection point of the attaching sphere with the belt sphere — has a unit entry in the attaching-belt intersection matrix, over $\mathbb Z$ with value the local sign of that point and over $\mathbb Z_2$ with value $1$. [step 1.1, step 2.1, given] ∎
