---
id: lem-margulis-family-is-constant-degree-and-neighbor-computable
kind: lemma
title: "Margulis family is constant degree and neighbor computable"
status: published
origin: pipeline
deps: [def-margulis-gabber-galil-graph]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Hoory–Linial–Wigderson, Expander Graphs and Their Applications, May 2006 draft; Construction8.1, p69; explicit arithmetic cost analysis."
      url: "https://www.math.ias.edu/~avi/BOOKS/expanderbookr1.pdf"
---

## Statement

The Margulis graph on $(\mathbb Z/m\mathbb Z)^2$ is symmetric and $8$-regular, with $m^2$ vertices, for every $m\ge1$. One specified neighbor is computable in polynomial time in $\log(m+2)$; the whole adjacency list is computable in $O(m^2\operatorname{poly}(\log(m+2)))$ bit operations.

## Facts & Assumptions

**Given:** the objects and hypotheses in the statement above.

[F1] For integer $m\ge1$, let $V=(\mathbb Z/m\mathbb Z)^2$. The Margulis–Gabber–Galil graph has the following eight slots at $(x,y)$, with all arithmetic modulo $m$: $$(x+2y,y),\ (x+2y+1,y),\ (x-2y,y),\ (x-2y-1,y),\ (x,y+2x),\ (x,y+2x+1),\ (x,y-2x),\ (x,y-2x-1).$$ Multiplicities and fixed points are retained under the stated convention. Write $T_1(x,y)=(x+2y,y)$ and $T_2(x,y)=(x,y+2x)$. Pair each forward affine map with its inverse as reverse ports, even when their destinations coincide. ([[def-margulis-gabber-galil-graph]]).


## Proof

1.1 Each of the four forward affine maps in the definition is a bijection: subtracting its shear and its optional unit shift gives the listed inverse. Pairing a map with its inverse makes the adjacency symmetric. Exactly eight slots are retained at every vertex, regardless of coincidences. [F1]

2.1 A slot uses additions, subtraction, doubling, and reduction modulo $m$ of integers with $O(\log(m+2))$ bits. School arithmetic performs these in polynomial bit time. Enumerating the $m^2$ coordinate pairs and eight slots proves the total bound. For $m=1$ there is one vertex and eight loop slots; for $m=2$ repeated destinations remain distinct slots. [step 1.1, algebra] ∎
