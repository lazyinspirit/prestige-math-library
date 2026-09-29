---
id: cex-a-crossing-diagram-without-height-monotonicity-does-not-define-a-configuration-loop
kind: counterexample
title: "An embedded height-folded arc has no configuration-loop slices"
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps: [lem-a-geometric-braid-slices-to-a-configuration-loop,
       def-geometric-braid-with-setwise-endpoints,
       def-unordered-configuration-space]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: counterexample
sources:
  scraped: []
  references:
    - title: "Juan Gonzalez-Meneses, Basic results on braid groups, §§1.2–1.3, printed pp. 4–5"
      url: "https://arxiv.org/pdf/1010.0321"
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
---

## Statement refuted

Every embedded two-strand arc picture in $D^\circ\times I$ with the same
endpoint set $\{q_1,q_2\}$ at heights $0$ and $1$ determines a two-point configuration
at every intermediate height by horizontal slicing.

## Facts & Assumptions

**Given:** In the geometric-braid convention, take $n=2$, so $h=1/12$, $q_1=(-h,0)$, $q_2=(h,0)$, and the base tuple is $Q=(q_1,q_2)$.

[L1] For $n=2$ the published geometric base points are $q_1=(-h,0)$ and $q_2=(h,0)$, both in the interior unit disk ([[def-geometric-braid-with-setwise-endpoints]]).

[L2] Each element of $C_2(D^\circ)$ is an unordered configuration of exactly two distinct points ([[def-unordered-configuration-space]]).

[L3] A geometric braid strand is a graph over the height parameter and meets each height plane exactly once ([[def-geometric-braid-with-setwise-endpoints]]).

[L4] The slicing lemma applies to level-preserving geometric braids and gives a configuration-loop slice from their coordinate motions ([[lem-a-geometric-braid-slices-to-a-configuration-loop]]).

No choice principle is assumed or used; the witness consists of explicit points and line segments.

## Counterexample

**Proof technique:** direct.

1.1 *Construct the folded arc and vertical strand.* Let $a=h/4$. In $\mathbb R^2\times I$, define $$P_0=(-h,0,0),\quad P_1=(-h+a,0,3/4),\quad P_2=(-h+2a,a,1/4),\quad P_3=(-h,0,1).$$ Let $A$ be the polygonal path $P_0P_1\cup P_1P_2\cup P_2P_3$, and let $B=\{(h,0,t):t\in I\}$. The endpoint sets of $A\cup B$ at heights $0$ and $1$ are both $\{q_1,q_2\}$. The height of $A$ has a local maximum $3/4$ at $P_1$ and a local minimum $1/4$ at $P_2$, so $A$ is not height-monotone. [L1, given]

2.1 *Verify that these are disjoint embedded arcs in the cylinder.* The segment $P_0P_1$ has spatial coordinate $y=0$, while $P_1P_2$ has $y>0$ except at $P_1$ and $P_2P_3$ has $y>0$ except at $P_3$. The only possible intersection of $P_0P_1$ and $P_2P_3$ at $y=0$ would be $P_3$, whose height is $1$ while $P_0P_1$ has height at most $3/4$, so those segments are disjoint. Along $P_1P_2$ the spatial coordinates satisfy $x+h-y=a$; along $P_2P_3$ they satisfy $x+h=2y$. A common point must therefore have $y=a$, which occurs on both segments only at $P_2$. Thus the three segments form an embedded arc. Its spatial points lie in the convex ball of radius $\sqrt5a$ about $q_1$, since that ball contains all four vertices. As $\sqrt5a<3a=3h/4<2h=|q_2-q_1|$, the arc misses $B$. Also $|q_1|+\sqrt5a<h+3a=7h/4=7/48<1$, so $A$ lies in $D^\circ\times I$; $B$ lies there because $|q_2|=h<1$. [step 1.1, L1, L3, algebra]

3.1 *Compute the slice at height $1/2$.* The height coordinate is strictly monotone on each segment of $A$, so each segment meets that plane once. Linear interpolation gives the three spatial points $$(-h+2a/3,0),\quad (-h+3a/2,a/2),\quad (-h+4a/3,2a/3).$$ The first has $y=0$ and the other two have different positive $y$ coordinates; their $x$ coordinates are also different, so these three points are distinct. The strand $B$ contributes the fourth point $(h,0)=q_2$, which is not on $A$ by step 2.1. The slice therefore contains four distinct points. [step 1.1, step 2.1, L2, algebra]

4.1 By [L2], a value of $C_2(D^\circ)$ must have exactly two points, whereas the horizontal slice at $1/2$ has four. Hence this embedded picture does not define a path $I\to C_2(D^\circ)$ by slicing, despite having the same endpoint set $\{q_1,q_2\}$ at heights $0$ and $1$. Its folded arc also fails the one-point-per-height condition in [L3], so the level-preserving braid slicing lemma [L4] does not apply. [step 3.1, L2, L3, L4] ∎
