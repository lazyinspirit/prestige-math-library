---
id: lem-finite-circle-wedge-open-cover
kind: lemma
title: "Finite wedges of quotient circles have van Kampen covers at the wedge point"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-wedge-of-pointed-spaces, def-circle-as-real-line-mod-integers,
       lem-open-quotient-arcs-in-real-line-mod-integers,
       def-retraction-and-deformation-retract, thm-quotient-universal-property,
       def-path-connected,
       def-simply-connected, thm-induced-fundamental-group-map-functoriality,
       thm-fundamental-group-laws]
justified_by: []
aliases: []
landmark: false
proof_strategy: constructive
verification:
  precheck: pass
  audited: 2026-08-21
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology, Example 1.21"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf"
    - title: "J. Peter May, A Concise Course in Algebraic Topology, Chapter 2, Section 8"
      url: "https://math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
pipeline_run: null
---

## Statement

Let $Q=\mathbb R/\mathbb Z$ be pointed at $[0]$, and put $W_r=\bigvee_{j<r}(Q,[0])$, with $W_0$ the one-point space. Identify $W_{r+1}$ with $W_r\vee Q$ through the canonical homeomorphism of their tagged quotient presentations. For every $r\in\mathbb N$, this successor wedge has open subsets $A_r,B_r$ such that

$$W_{r+1}=A_r\cup B_r,$$

$A_r$ deformation retracts onto $W_r$, $B_r$ deformation retracts onto the new circle, and $A_r\cap B_r$ deformation retracts onto the wedge point. The two factor inclusions induce fundamental-group isomorphisms. The sets $A_r$, $B_r$, and $A_r\cap B_r$ are path-connected, and the overlap is simply connected. Thus they satisfy the hypotheses of [[cor-seifert-van-kampen-simply-connected-overlap]].

## Facts & Assumptions

**Given:** A natural $r$, the quotient-circle wedge $W_{r+1}$, its wedge point $w$, and the open quotient arc $O=p((-1/4,1/4))$ about $[0]$ in each circle summand.

[F1] The quotient map $p:\mathbb R\to\mathbb R/\mathbb Z$ is open, and its restriction to every interval of length below one is a homeomorphism onto its image ([[lem-open-quotient-arcs-in-real-line-mod-integers]]).

[F2] A continuous function constant on the fibres of a quotient map factors uniquely and continuously through the quotient ([[thm-quotient-universal-property]]).

[F3] A deformation retraction is a retraction together with a homotopy from the identity to the inclusion-composite that fixes the retract pointwise ([[def-retraction-and-deformation-retract]]).

[F4] A space is path-connected when every pair of points can be joined by a path in it ([[def-path-connected]]).

[F5] Pointed homotopy equivalences induce inverse fundamental-group homomorphisms ([[thm-induced-fundamental-group-map-functoriality]]).

[F6] A space is simply connected when it is nonempty and path-connected and has a one-element fundamental group at every basepoint ([[def-simply-connected]]).

[F7] Reversal gives inverses and concatenation gives multiplication in fundamental groups ([[thm-fundamental-group-laws]]).

## Proof

**Proof technique:** constructive.

1.1 The tagged quotient for $W_r\vee Q$ differs from that for $W_{r+1}$ only by grouping the old tagged summands; the quotient maps in both directions preserve every tag and are continuous by [F2], so they are inverse homeomorphisms. Under this identification, define $A_r$ to contain all of the old wedge $W_r$ and the arc $O$ in the new circle. Define $B_r$ to contain the whole new circle and the arc $O$ in every old circle. Their inverse images under the wedge quotient are open, by [F1] and the disjoint-union topology, and each inverse image is saturated because every listed arc contains its basepoint. Hence $A_r$ and $B_r$ are open; they cover $W_{r+1}$, and their intersection consists exactly of one copy of $O$ in every circle, with all their basepoints identified. [F1, F2, construct]

2.1 Use the coordinate $t\in(-1/4,1/4)$ supplied by [F1] and the contraction $t\mapsto(1-s)t$. On $A_r$, contract only the new-circle arc and fix $W_r$; on $B_r$, contract every old-circle arc and fix the new circle. The formulas agree at the tagged basepoints and are jointly continuous away from the wedge point. At the wedge point, a target neighbourhood contains an arc $|t|<\varepsilon_j$ in every incident branch; there are finitely many branches, so their minimum is positive, and the contraction never increases $|t|$. Together with the fixed trace on the retract, this gives a product neighbourhood mapped into the target neighbourhood, proving joint continuity there. Thus the formulas are deformation retractions as in [F3], and [F5] makes the two retract inclusions induce fundamental-group isomorphisms. [step 1.1, F1, F3, F5]

3.1 Apply the same contraction simultaneously on every arc of $A_r\cap B_r$. Joint continuity away from $w$ is coordinatewise, and at $w$ the same finite-minimum neighbourhood argument from step 2.1 applies to all incident arcs. This gives a deformation retraction of the overlap onto $w$. The construction also covers $r=0$, when $W_0$ is the point $w$, and $r=1$, when the old wedge has one circle. [step 1.1, step 2.1, F1, F3]

4.1 Each point of any of the three sets can be joined within its circle arc or circle to $w$, so [F4] makes all three path-connected. At the basepoint $w$, step 3.1 and [F5] identify the overlap fundamental group with that of a point, hence with the one-element group. For any other basepoint $y$, a path $\rho$ from $w$ to $y$ gives an isomorphism from the group at $w$ to the group at $y$ by $[\alpha]\mapsto[\bar\rho*\alpha*\rho]$, with reverse-path inverse, using [F7]; hence its fundamental group is one-element as well. The overlap is nonempty, so [F6] makes it simply connected. [step 2.1, step 3.1, F4, F5, F6, F7, discharge-construct] ∎
