---
id: lem-empty-boundary-rectangle-supplies-a-surface-bridge-disk
kind: lemma
title: "An empty boundary rectangle supplies a surface bridge disk"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-countable-choice
  - thm-smooth-schoenflies-for-embedded-two-sphere-in-s-three
  - lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups
  - thm-collar-neighborhood-theorem
  - lem-relative-transversality-for-embedded-surfaces
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Countable choice is inherited from Schoenflies, the surface disk supplier, collars and relative transversality. The intersection elimination is finite."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "William Menasco, Closed incompressible surfaces in alternating knot and link complements, Topology 23 (1984), 37–44, Lemma 1(ii), printed p.40, Figure 5(b)"
      url: "https://doi.org/10.1016/0040-9383(84)90023-5"
---

## Statement

Assume countable choice. Let $B\subset S^3$ be a smooth closed ball and let $F$ be a finite disjoint union of smooth neat proper disks in $B$. Select a component $E$ of $F$. Supply a closed rectangle $R\subset\partial B$ with two opposite sides disjoint arcs in $\partial E$, with $R\cap\partial E$ exactly those sides and $\operatorname{int}_{\partial B}R$ disjoint from $\partial F$. Let $\rho\subset R$ be a smooth spanning arc joining interior points $q_0,q_1$ of those two sides, otherwise in the rectangle's interior, and let $\beta\subset E$ be any smooth proper arc with the same endpoints.

There is an arc $\rho^+$ obtained by pushing the interior of $\rho$ arbitrarily slightly into $\operatorname{int}B$, fixing its endpoints, and an embedded disk $Q\subset B$ with boundary $\beta\cup\rho^+$, interior in $\operatorname{int}B$, and $Q\cap F=\beta$. Boundary corners at $q_0,q_1$ are understood with compatible local roundings. Thus a bridge disk exists while avoiding every disk component of $F$. No saddle cancellation or complexity decrease is asserted here.

## Statement references

[[def-countable-choice]]

## Facts & Assumptions

**Given:** Countable choice, the ball, its finite proper disk family, the selected disk, the empty boundary rectangle, and its two specified spanning arcs.

[F1] Under countable choice the closed sides of a smooth sphere in $S^3$ are smooth balls, with compatible common-boundary collars. ([[thm-smooth-schoenflies-for-embedded-two-sphere-in-s-three]])

[F2] A smooth simple circle on a sphere bounds its two complementary disk regions. A missing point and stereographic projection give a linear nullhomotopy to which the surface disk criterion applies. Finite cornered curves may first be rounded in their corner charts. ([[lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups]])

[F3] Under countable choice a smooth manifold with boundary has a product collar. Neat disks have the compatible local half-plane coordinates at that boundary. ([[thm-collar-neighborhood-theorem]])

[F4] Under countable choice a compact embedded surface with boundary in a boundaryless three-manifold can be made transverse to a closed embedded surface by an isotopy fixed near its already transverse boundary. ([[lem-relative-transversality-for-embedded-surfaces]])

## Proof

1.1 The proper disk $E$ cuts $B$ into two balls after rounding the boundary corners. Indeed $\partial E$ bounds two disks on $\partial B$ by [F2]. Each union of $E$ with one of these disks is a sphere with a corner, smoothed using [F3]. For either such sphere the connected exterior of $B$ lies on one side; the other side is contained in $B$ and is a ball by [F1]. The two contained regions have opposite local sides along $E$, exhaust $B\setminus E$, and restoring the product corner identifies their common face with $E$. Denote by $V$ the side containing the interior of $R$ in its boundary. This is well defined because that interior is connected and misses $\partial E$. Thus $\partial V$ consists of $E$ and the boundary disk of $B$ containing $R$, with their product corner. [given, F1, F2, F3, construct]

2.1 The simple circle $\beta\cup\rho$ on $\partial V$ bounds a disk there by [F2], after compatible rounding at its two corners. Push the interior of this disk into $V$ using a short inward collar. Keep its boundary portion $\beta$ fixed, and push the interior of $\rho$ into $V$ by an arbitrarily small amount, tapering to zero at its endpoints. This is an embedded disk $Q_0$ with boundary $\beta\cup\rho^+$ and interior in $\operatorname{int}V$. The push may be chosen disjoint from $F\setminus E$ along a whole collar of the new boundary: $\beta$ lies in $E$, which misses the other disks, while $\rho$ and its endpoints miss their boundary circles by the rectangle hypothesis. Compactness and their neat boundary collars supply a uniform sufficiently small push. The interior of $Q_0$ misses $E$, which lies in $\partial V$. [step 1.1, F2, F3, construct]

3.1 Every other component of $F$ lies on one side of $E$ and, on the $V$ side, is a neat proper disk with boundary on the other boundary face of $V$. Make $Q_0$ transverse to these disks relative to its boundary collar. To apply [F4] with its literal closed-target hypothesis, double the rounded ball $V$ and those proper disks across product boundary collars; their doubles are a disjoint closed smooth surface. Delete a small boundary collar from $Q_0$, whose remaining boundary misses that doubled surface, apply [F4] to its interior, and reattach the unchanged collar. Use a perturbation supported in the original $V$ interior. Its intersection with the other disks is then a finite family of interior circles, since this is a compact transverse one-manifold with no boundary points. [step 1.1, step 2.1, F3, F4, construct]

4.1 If an intersection circle remains, choose one innermost on one of the other disk components. Its inner disk $A$ has interior disjoint from the auxiliary disk: every intersection circle inside $A$ would supply a smaller such inner disk, and the family is finite. Surger the auxiliary disk along two nearby copies of $A$, retain its disk component with the original boundary, and discard the sphere component. This disk is embedded because $\operatorname{int}A$ missed the old auxiliary disk. Push the retained copy of $A$ slightly off its disk component to the side of the retained auxiliary collar and round the seam. It removes the chosen circle and possibly others, adds no intersection with any disk of $F$, and preserves the original boundary collar. The push and seam lie in $\operatorname{int}V$, away from $E$. Iteration strictly decreases the finite number of intersection circles and terminates with none. [step 2.1, step 3.1, construct]

5.1 Call the final auxiliary disk $Q$. Its interior is in $\operatorname{int}V\subset\operatorname{int}B$ and misses all other components by step 4.1; it misses $E$ except along $\beta$ by steps 2.1–4.1. Its unchanged boundary is $\beta\cup\rho^+$ with the prescribed endpoints. The initial push could be arbitrarily small and the later operations fixed its boundary collar, so $\rho^+$ has the stipulated closeness. This proves the bridge disk assertion. [step 1.1, step 2.1, step 3.1, step 4.1] ∎
