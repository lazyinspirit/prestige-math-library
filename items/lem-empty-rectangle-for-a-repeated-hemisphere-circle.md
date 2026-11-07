---
id: lem-empty-rectangle-for-a-repeated-hemisphere-circle
kind: lemma
title: "An empty rectangle for a repeated hemisphere circle"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-countable-choice
  - lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Countable choice is inherited only from the supplied surface Jordan-disk theorem; the descent and arc ordering are finite."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "William Menasco, Closed incompressible surfaces in alternating knot and link complements, Topology 23 (1984), 37–44, Lemma 1(ii), printed p.40, Figure 5"
      url: "https://doi.org/10.1016/0040-9383(84)90023-5"
---

## Statement

Assume countable choice. Let $H$ be a smooth closed disk on a smooth sphere $P$, and let $I_0,I_1$ be disjoint open intervals on $\partial H$ with disjoint closures. Let $\Gamma$ be a finite disjoint collection of smooth embedded circles on $P$, transverse to $\partial H$. Suppose $\Gamma\cap H$ consists of finitely many proper arcs, each joining $I_0$ to $I_1$. If some circle of $\Gamma$ meets $H$ in at least two arcs, then some circle $C\in\Gamma$ has two arcs $\alpha_0,\alpha_1\subset H$ bounding a closed rectangle $R\subset H$ with its other two sides subintervals of $I_0,I_1$, and
$$\operatorname{int}_H(R)\cap\Gamma=\varnothing.$$
Here the rectangle's interior means its two-dimensional interior in $H$. Moreover $C$ bounds a disk $D\subset P$ containing $R$, and $R\cap C=\alpha_0\cup\alpha_1$. The chosen circle need not be the originally supplied repeated circle.

## Statement references

[[def-countable-choice]]

## Facts & Assumptions

**Given:** Countable choice, the sphere, its disk with two marked boundary intervals, and the finite disjoint circle collection satisfying the stated spanning-arc condition.

[F1] Under countable choice an embedded nullhomotopic smooth circle on an oriented smooth surface bounds a disk region; on a sphere both complementary closures are disks. A finite regular embedded graph can be included in a finite surface cellulation. Thus the same assertion applies to finitely cornered simple boundaries after rounding inside their corner charts. ([[lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups]])

## Proof

1.1 Every smooth simple circle on $P$ misses some point: in a submanifold chart its image is a line and cannot contain an open surface disk. Stereographic projection from a missing point and linear contraction give a nullhomotopy, so [F1] applies to all the simple circles below. The spanning arcs in $H$ have a common linear order. To see this, one proper arc, together with either of the two boundary arcs joining its endpoints, is a simple circle after rounding; [F1] makes its two sides disks. Every other spanning arc lies wholly on one side, since arcs are disjoint. The order of their endpoints on $I_0$ determines this side and forces their endpoints on $I_1$ to have the matching order: interlaced endpoint pairs would put the endpoints of an arc in different sides of the first arc. Applying this to every pair orders the finite family. Two arcs therefore bound a disk strip with other sides the intervening intervals in $I_0,I_1$; these are exactly its four sides. An intervening spanning arc cuts that strip from one interval side to the other. [given, F1, construct]

2.1 Start with a circle meeting $H$ more than once and choose two consecutive arcs of that circle in the order of step 1.1. Their strip $R$ has interior disjoint from that circle, so its connected interior lies on one side of the circle. By [F1] the closure $D$ of that side on $P$ is a disk, and $R\subset D$. The only intersections of $R$ with the circle are its two selected arc sides, including their endpoints. Call every such pair $(D,R)$ a candidate. There are finitely many candidates: the circle collection and its arcs are finite, and there are only two disk sides for any circle. Among all candidates choose one minimizing the number of circles of $\Gamma$ lying in $\operatorname{int}D$. [step 1.1, F1, construct]

3.1 Suppose another circle $C'$ meets the interior of the minimizing strip. Since $C'$ is disjoint from $\partial D=C$, and has a point inside $D$, its whole connected image lies in $\operatorname{int}D$. The portions of $C'$ in $R$ are whole spanning arcs of $C'\cap H$: such an arc cannot leave the strip through its sides on $C$. Choose a simple strip core $\rho$ joining the two sides on $C$, crossing each intervening spanning arc transversely once, and otherwise missing $\Gamma$. Such a core is obtained by joining successive crossing points through the disk strips between consecutive arcs from step 1.1. Both endpoints of $\rho$ lie outside the inner disk $D'$ bounded by $C'$ inside $D$. Each transverse crossing of $C'$ changes which side of $C'$ the core occupies, so the number of crossings is even. Because there is at least one, it is at least two. [step 1.1, step 2.1, F1, construct]

4.1 In the order along $\rho$, the first crossing of $C'$ enters $D'$ and the second leaves it. The two corresponding arcs of $C'$ therefore have their intervening strip $R'$ in $D'\cap R$, and there is no further arc of $C'$ in its interior. Indeed all such arcs cross $\rho$ once in the same order by step 1.1. Thus $(D',R')$ is another candidate. Since $D'\subset\operatorname{int}D$, every circle lying inside $D'$ was counted inside $D$, but $C'$ itself was counted inside $D$ and is not counted inside $D'$. The candidate has strictly fewer interior circles, contradicting the minimum in step 2.1. [step 1.1, step 2.1, step 3.1, construct, contradiction]

5.1 Therefore no other circle meets the strip's interior. Its own boundary circle misses that interior by its construction as a candidate. This gives the required empty rectangle, its two arcs on one circle, and the disk containing it. All choices after [F1] were from finite families. [step 2.1, step 4.1] ∎
