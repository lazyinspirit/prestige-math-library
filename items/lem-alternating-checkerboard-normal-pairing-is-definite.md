---
id: lem-alternating-checkerboard-normal-pairing-is-definite
kind: lemma
title: "The checkerboard normal pairing of a connected alternating diagram is definite"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-reduced-alternating-link-diagram
  - lem-connected-regular-link-diagram-has-checkerboard-coloring
  - def-tait-graph-of-a-link-diagram
  - lem-connected-projection-has-connected-tait-graphs
  - lem-choice-free-smooth-jordan-disk-parameters-and-prescribed-collars
  - thm-simplicial-and-singular-homology-agree-for-simplicial-complexes
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Choice-free: all disks, bands, graph chains and normal pushoffs are constructed from the supplied finite diagram. No link signature formula, spanning-surface classification or invariant-polynomial theorem is used."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Joshua E. Greene, Alternating links and definite surfaces, §5, Theorem 5.1, manuscript pp. 8–9"
      url: "https://people.maths.ox.ac.uk/lackenby/Fox.pdf"
    - title: "Thomas Kindred, A geometric proof of the flyping theorem, §2.1, manuscript pp. 4–6"
      url: "https://arxiv.org/pdf/2008.06490v3"
dependency_level: 2
---

## Statement

Let $D$ be a connected alternating regular link diagram on an oriented projection sphere. Choose either checkerboard color. Put a disk in each region of that color and join the opposite colored sectors at every crossing by a half-twisted band, with the twist chosen so that the boundary follows the over-under diagram. After rounding corners these disks and bands form a compact connected embedded spanning surface $F$ for the represented link. If $D$ has crossings, let $G$ be the corresponding Tait graph and orient its edges arbitrarily. Under the retraction of $F$ onto $G$, write a rational homology class as the unique graph cycle $a=\sum_{e\in E(G)}a_e e$. There is a single sign $\epsilon\in\{1,-1\}$ such that
$$q(a)=\epsilon\sum_{e\in E(G)}a_e^2=\operatorname{lk}(c,\tau c)$$
for every oriented rational multicurve $c$ representing $a$, where $\tau c$ is its normal transfer. Thus $q$ is positive definite or negative definite on $H_1(F;\mathbb Q)$. For a crossingless connected diagram, use either spanning disk and the zero-dimensional definite form.

## Statement references

[Greene, *Alternating links and definite surfaces*, Theorem 5.1](https://people.maths.ox.ac.uk/lackenby/Fox.pdf)

[Kindred, *A geometric proof of the flyping theorem*, §2.1](https://arxiv.org/pdf/2008.06490v3)

## Facts & Assumptions

**Given:** The connected alternating diagram $D$, a checkerboard color, and an arbitrary orientation of the finite Tait graph's edges when crossings exist.

[F1] Connectedness and alternation refer to the projection graph and to the cyclic over-under crossing visits along each link component. Reducedness is not required here. ([[def-reduced-alternating-link-diagram]])

[F2] A connected projection admits a checkerboard coloring, and its Tait graph has one vertex per region of the chosen color and one edge per crossing. With at least one crossing this graph is connected. ([[lem-connected-regular-link-diagram-has-checkerboard-coloring]], [[def-tait-graph-of-a-link-diagram]], [[lem-connected-projection-has-connected-tait-graphs]])

[F3] The homology of a finite graph is its group of graph cycles, since it has no $2$-simplices, and finite simplicial homology agrees with singular homology. ([[thm-simplicial-and-singular-homology-agree-for-simplicial-complexes]])

[F4] A smooth Jordan curve on the projection sphere bounds a closed disk on either side, with no choice assumption; apply the choice-free smooth Jordan-disk result in a stereographic chart ([[lem-choice-free-smooth-jordan-disk-parameters-and-prescribed-collars]]).

## Proof

1.1 Suppose first that there is at least one crossing. Build a small regular neighborhood of the projection graph from disjoint crossing disks and narrow edge strips. To see that its complementary faces are disks, choose a finite spanning tree of the graph; its neighborhood is a disk, by adding each tree strip between two distinct disk components. Add the remaining edge strips one at a time. Each edge core is a properly embedded arc in one complementary disk; its strip cuts that disk along the arc. After rounding corners the two new boundary curves are smooth Jordan curves, and [F4] makes both closed sides disks. At each step the added edge lies in one old face and splits it into the two new faces, so these complementary disks correspond one-to-one to the regions of the projection. Their closures are disjoint from the graph and serve as disk cores. Put a disk in each core of the chosen color. At every crossing join the two appropriate disk cores by a narrow band with one half-twist; choose its direction so that its boundary strands have the diagram's prescribed overpass and underpass. The neighborhoods are disjoint, so the resulting surface is embedded. Its boundary is the usual height realization of $D$. Collapsing each disk to a vertex and each band to its core retracts $F$ onto the Tait graph $G$. This graph is connected by [F2], so $F$ is connected and has a supplied finite disk-and-band presentation. [given, F1, F2, F4, construct]

2.1 Measure the signed half-twist of a band relative to the planar framing of its two disk ends; call this incidence sign $\epsilon_e$. This is the unoriented crossing incidence, not the oriented link crossing sign. At two crossings joined by a projection edge, alternation changes which branch is over, while the chosen-color sector changes sides along that edge. The two changes cancel in the half-twist chart, giving the same incidence sign at the two crossings. Since the projection graph is connected, every band has one common sign $\epsilon$. Reversing the chosen orientation of a graph edge reverses its cycle coefficient, without changing this incidence sign. [given, F1, F2, step 1.1, construct]

3.1 We compute the normal pairing in the disk-and-band presentation. After clearing rational denominators, represent a cycle by finitely many oriented parallel strands through each band, joined by arcs in the vertex disks; any extraneous arc pairs can be canceled inside those disks. The signed number of strands through band $e$ is its graph coefficient $a_e$. Normal transfer gives two local pushoffs of each strand, exchanged at a one-sided passage. In an untwisted planar disk the contributions of the two normal sides to the mixed-crossing count cancel. In a band with a signed half-turn, each ordered pair of an original strand and a transferred strand contributes $\epsilon_e$ to the total pairing: one normal side passes from one side of the original strand to the other during the half-turn, and the other normal side makes the complementary passage; the two mixed crossings have the same incidence sign, and the linking count is half their signed sum. Reversing either strand orientation reverses the corresponding contribution. Consequently the contribution of that band is $\epsilon_e(\sum_i s_i)(\sum_j s_j)=\epsilon_e a_e^2$, where $s_i=\pm1$ are the strand orientations. This is also a direct computation with the half-twisted strip $(u,v)\mapsto(u,v\cos(\pi u),v\sin(\pi u))$, reversing the half-turn for the other sign. The strips' end collars are included in this count; crossings of joining arcs in the planar disks cancel between the two normal sides. Linking here can be computed by the signed mixed-crossing count because a finite oriented smoothing of the first curve gives spanning disks and crossing bands, whose intersections with the second curve give that count. This finite construction uses the supplied drawing and does not use a link-diagram invariance theorem. Summing over all bands and restoring rational coefficients gives $\operatorname{lk}(c,\tau c)=\sum_e\epsilon_e a_e^2$. [given, step 1.1, step 2.1, construct, algebra]

4.1 By [F3] and the retraction in step 1.1, a homology class has a unique graph cycle vector. Thus $q(a)=\epsilon\sum_e a_e^2$ is a well-defined quadratic form on $H_1(F;\mathbb Q)$, and step 3.1 proves the required normal-transfer formula for every representative. If $a\ne0$, some edge coefficient is nonzero, so $\sum_ea_e^2>0$. Therefore $q$ is positive definite if $\epsilon=1$ and negative definite if $\epsilon=-1$. [F3, step 1.1, step 2.1, step 3.1, algebra]

5.1 If the connected diagram has no crossings, it is a single circle. Either complementary disk is an embedded connected spanning disk with $H_1=0$. Every cycle in that disk bounds there and has zero linking with its normal transfer, so the zero-dimensional form has the asserted formula and definiteness. This also covers the zero-dimensional cycle space of a Tait tree in the preceding case. [given, F1, step 4.1, construct] ∎
