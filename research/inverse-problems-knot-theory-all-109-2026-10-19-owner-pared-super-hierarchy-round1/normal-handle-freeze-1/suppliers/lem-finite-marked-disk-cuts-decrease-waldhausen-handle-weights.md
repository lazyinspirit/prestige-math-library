---
id: lem-finite-marked-disk-cuts-decrease-waldhausen-handle-weights
kind: lemma
title: "Finite marked disk cuts control Waldhausen handle weights"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - lem-finite-polygonal-disk-and-collar-surgery
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Friedhelm Waldhausen, On irreducible 3-manifolds which are sufficiently large"
      url: https://homepages.math.uic.edu/~kauffman/Waldhausen.pdf
      locator: "Section2.4(B), printed pp.63–64, complete argument and actual page images read; all finite arc cases are checked below"
---

## Statement

Let $D$ be a parametrized finite polygonal closed disk. Let $d$ be a union of $m\ge0$ pairwise disjoint nondegenerate closed arcs in $\partial D$, with nonempty gaps between consecutive arcs. Let $K$ be a finite union of pairwise disjoint proper polygonal arcs in $D$, with distinct endpoints outside $\partial d$. Suppose no component of $K$ has both endpoints on the same component of $d$. Cut along all components of $K$, retaining both copies of each cut arc. The resulting pieces are parametrized polygonal disks $Q$. On each $Q$ retain the portions of the original marked arcs and let $m_Q$ count their connected components. Write
$$x(m)=\max(m-2,0),\qquad y(m)=\max(m-1,0).$$
Then
$$\sum_Qx(m_Q)\le x(m).$$
If some component of $K$ has one endpoint on a marked arc and the other in a gap not adjacent to that marked arc, the inequality is strict. If instead every endpoint of $K$ lies outside $d$, $K\ne\varnothing$, and some component joins two different original gaps, then
$$\sum_Qy(m_Q)<y(m).$$
The first inequality still holds in this last case. Empty marked sets and empty arc systems are included. The conclusion concerns these actual finite disk cuts; it asserts no existence or normalization theorem for a three-manifold cutting surface.

## Facts & Assumptions

**Given:** The finite marked polygonal disk and arc system in the Statement.

[F1] A simple polygon bounds a parametrized PL disk, prescribed PL maps on its boundary extend over that disk, and finite embedded arcs have disk-and-strip neighborhoods. [[lem-finite-polygonal-disk-and-collar-surgery]]

## Proof

1.1 A proper arc splits $D$ into two polygonal disks. Indeed, append either of the two boundary intervals between its endpoints to obtain a simple polygon; polygonal separation and disk parametrization in [F1] identify the two closed sides. This also supplies the cut with its two distinct labeled arc copies. Repeat on the disk containing each remaining arc. The remaining arcs are still proper and disjoint. This produces finitely many disks with all original marked portions retained, independent of the order in which the specified disjoint cuts are performed: each final piece is the closure of a component of $D\setminus K$, with its original sides and its distinct cut-side copies. [F1, given, construct]

2.1 Consider one cut in a disk with $b$ current marked components, producing counts $b_1,b_2$. Its endpoints avoid the marked endpoints. If both endpoints are in gaps, then $b_1+b_2=b$. When the gaps differ, both counts are at least one; consequently $y(b_1)+y(b_2)=b-2< b-1=y(b)$, while $x(b_1)+x(b_2)\le x(b)$. When the gap is the same, one side has no marked component and the other has all $b$, so both weights are unchanged. If one endpoint is marked and the other unmarked, then $b_1+b_2=b+1$. For an adjacent gap the counts are $b,1$, so both weights are unchanged. For a nonadjacent gap both counts are at least two, and therefore $x(b_1)+x(b_2)=b-3<x(b)=b-2$. Finally, endpoints on different marked components give $b_1+b_2=b+2$ with both counts at least two; hence $x(b_1)+x(b_2)=b-2=x(b)$. These statements also follow directly by traversing each of the two boundary intervals: a marked endpoint splits its marked interval into two retained intervals, whereas a gap endpoint splits no marked interval. Endpoints on the same marked component are the only omitted case. [step 1.1, given, algebra]

3.1 During successive cuts every current marked component is a subinterval of one original marked component. Thus a remaining arc cannot have both endpoints on the same current marked component: that would contradict the original hypothesis. Each cut is one of the allowed cases in step2.1. It never increases the sum of the $x$ weights, even though the current gap adjacency can change. Summing the one-cut inequalities proves the first asserted inequality. If an original mixed arc has its gap nonadjacent to its marked arc, perform that arc first. Step2.1 gives a strict drop at this first cut; all later cuts weakly decrease the sum, so the final inequality remains strict. [step 1.1, step 2.1, given, algebra]

4.1 Suppose all endpoints are originally unmarked and choose first an arc joining different original gaps. This is the first gap case of step2.1, which strictly decreases the $y$ sum. Every remaining endpoint is still unmarked: the cuts do not add marked intervals, and their side copies are unmarked. Every later cut therefore has two unmarked endpoints and weakly decreases that sum by step2.1. Strictness survives to the final disks. If $K$ is empty there is one disk and equality of both weights. If $d$ is empty, all endpoints lie in one original gap and no strictness premise applies; every resulting count is zero and both sums are zero. This proves every stated case. [step 1.1, step 2.1, step 3.1, given, algebra] ∎

## Scope

This is the finite cross-sectional counting input in Waldhausen's handle-complexity argument. The strict inequalities require the stated endpoint configuration. No assertion is made that an arbitrary incompressible or superincompressible surface has already been placed in a handle position producing that configuration. Pared-boundary normalization, surface normalization, and hierarchy termination require their own proofs.
