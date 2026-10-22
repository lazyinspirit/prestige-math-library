---
id: lem-ball-cut-system-suture-graphs-detect-compressing-disks
kind: lemma
title: "Suture graphs on a ball cut system detect compressing disks"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - thm-well-ordering-principle
justified_by: []
aliases: []
proof_strategy: contradiction
axiom_use: "Choice-free: all cut disks, balls and graphs are supplied finite data; minimization is over a nonempty set of natural intersection counts, not an application of a choice principle."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Thomas Kindred, End-essential spanning surfaces for links in thickened surfaces, proof of Theorem 1.4, manuscript pp. 4–6, outermost-disk method"
      url: "https://arxiv.org/pdf/2210.03218v2"
---

## Statement

Let $N$ be a compact smooth $3$-manifold with boundary, and let $s\subset\partial N$ be a finite disjoint union of smooth simple closed curves. Supply a finite family $\Delta$ of disjoint properly embedded disks such that cutting $N$ along $\Delta$ gives finitely many balls. Each cut ball has **spots**, the disk copies created by the cuts. Suppose $s$ is transverse to $\partial\Delta$ and each component of its cut image in a ball is an arc with both endpoints on spot boundaries. Collapse each spot to a vertex and regard these arcs as edges of a finite graph $G$ on the boundary sphere. Assume, for every cut ball, that $G$ has at least two vertices, is connected and has no loops, no bridges and no cut vertex; here the last condition means that deleting any vertex leaves a connected graph.

Then any properly embedded disk $X\subset N$ with $\partial X$ transverse to $s$ and $|\partial X\cap s|\le1$ satisfies $\partial X\cap s=\varnothing$, and its boundary bounds a disk in $\partial N\setminus s$. In particular there is no properly embedded disk whose boundary meets $s$ exactly once.

## Statement references

[Kindred, *End-essential spanning surfaces for links in thickened surfaces*, proof of Theorem 1.4](https://arxiv.org/pdf/2210.03218v2)

## Facts & Assumptions

**Given:** The cut manifold, finite disk family, boundary curves and embedded graphs satisfying the statement.

[F1] Every nonempty set of natural numbers has a least member. ([[thm-well-ordering-principle]])

[F2] A bad disk means a properly embedded disk whose boundary meets $s$ once, or whose boundary misses $s$ but does not bound a disk in $\partial N\setminus s$.

## Proof

1.1 Suppose there is a bad disk. Put its boundary transverse to $\partial\Delta$, avoiding the finite set $s\cap\partial\Delta$, and its interior transverse to $\Delta$. All these intersections can be made finite: use finite coordinate patches on the compact disks and their boundaries, perturb their vertices in a sufficiently fine polygonal approximation, then smooth in smaller patches. These perturbations preserve embedding and the number of intersections with $s$. Among bad disks in this position choose $X$ minimizing $m=|\partial X\cap\partial\Delta|$, using [F1]. [given, F1, F2, assume-contra]

2.1 Remove all circle components of $X\cap\Delta$ without changing $\partial X$. For a circle innermost on one of the cut disks, its enclosed disk $Q$ has interior disjoint from $X$: an intersection arc cannot enter its interior without crossing the circle, since the arc endpoints lie on the boundary of that cut disk. Surger $X$ along two nearby copies of $Q$, retain the disk with the original boundary and discard the sphere. This produces an embedded disk after rounding, and reduces the number of intersection circles. The cut disks are mutually disjoint, so the surgery introduces no intersections with another member of $\Delta$. Finitely many repetitions leave only arcs. The boundary remains bad and its count $m$ unchanged. [step 1.1, construct]

3.1 Suppose these arcs are nonempty. Disjoint arcs cut a disk into subdisks with a tree as dual graph: adding one arc splits one component, so adds one vertex and one edge without creating a cycle. A finite tree with an edge has at least two leaves, as follows by taking the two ends of a longest simple edge path. Thus there are at least two outermost subdisks of $X\setminus\Delta$. Their boundary portions on $\partial X$ have disjoint interiors. At most one contains the possible single point of $\partial X\cap s$, so choose an outermost subdisk whose boundary portion $\alpha\subset\partial N$ misses $s$. It lies in the punctured boundary sphere of one cut ball, and its two endpoints lie on the boundary of one spot $v$. [step 1.1, step 2.1, construct]

4.1 Join the two endpoints by a simple arc inside $v$. Together with $\alpha$ this gives a simple closed curve on the ball's boundary sphere. If other spots occur on both sides, the graph obtained by deleting $v$ is disconnected: a path from a vertex on one side to one on the other must cross $\alpha$, because the joining arc is inside the deleted spot, yet the edges miss $\alpha$. This contradicts the no-cut-vertex hypothesis. Therefore one complementary disk has no other spot; removing its part in $v$ gives a disk $R$ in the punctured sphere, with boundary $\alpha$ and a subarc of $\partial v$. The interior of $R$ contains no suture arc. Such an arc could not cross $\alpha$, and, with no other spot available, both its ends would be on $v$, producing a loop at $v$. The loop-free hypothesis excludes this. Consequently $R$ is disjoint from $s$, including its spot-boundary interval, since the endpoints of $\alpha$ avoid $s$. [given, step 3.1, construct]

5.1 There is a boundary bigon disjoint from $s$ and with interior disjoint from $\partial X$, contained in $R$. If $\operatorname{int}R$ misses $\partial X$, take $R$ itself. Otherwise the portions of $\partial X$ in $R$ are disjoint proper arcs with both endpoints on its spot-boundary interval: none can cross $\alpha$, and the single closed curve $\partial X$ already contains $\alpha$, so there is no additional closed component inside $R$. Choose an arc cutting off a disk adjacent to that interval with no further such arcs inside. This smaller disk is the required bigon. Isotoping $\partial X$ across it removes two intersections with $\partial v$, and introduces none with any other spot boundary. The isotopy is supported away from $s$ and extends to a collar of $\partial N$, carrying the entire embedded disk $X$ with it. Hence it preserves badness, while decreasing $m$ by two, contrary to step 1.1. It follows that $X\cap\Delta$ has no arcs. [step 1.1, step 4.1, construct]

6.1 Now $X$ lies in one cut ball, and $\partial X$ is a circle in its boundary sphere avoiding all spots. If it meets $s$ once, exactly one edge of $G$ crosses this circle, exactly once. If there are spots on both sides, deleting that edge separates the graph into two nonempty vertex sets, making it a bridge. If all spots are on one side, every graph edge has both endpoints on that side and must cross the circle an even number of times, by entry and exit. Both possibilities contradict a single intersection. Thus $\partial X$ misses $s$. Connectedness of $G$ then forces all spots onto the same side of $\partial X$; otherwise an edge path between spots on opposite sides would meet the circle. The other complementary disk has no spots and no suture arcs: each such arc has its endpoints on spots and could not enter this disk without crossing $\partial X$. This is a disk in the original $\partial N\setminus s$ bounded by $\partial X$, contradicting badness. [given, F2, step 2.1, step 5.1, construct]

7.1 Every possible bad disk has been excluded. Therefore every disk with at most one suture intersection has no such intersection and has boundary bounding a disk in $\partial N\setminus s$, as asserted. [F2, step 1.1, step 6.1, discharge-contradiction] ∎
