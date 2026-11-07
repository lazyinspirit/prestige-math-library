---
id: lem-alternating-bubble-standard-words-exclude-a-single-saddle-block
kind: lemma
title: "Alternating bubble-standard words exclude one saddle block"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-countable-choice
  - def-flype-crossing-ball-and-alternating-tangle-data
  - lem-alternating-bubble-word-side-parity
  - lem-projected-saddle-arcs-have-explicit-nested-intersection-order
  - lem-single-saddle-bubble-word-forces-an-opposite-repeat
  - lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Countable choice is inherited from the surface Jordan-disk supplier. All arc orders, outermost selections and component traces are finite."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "William Menasco, Closed incompressible surfaces in alternating knot and link complements, Topology 23 (1984), 37–44, Lemma 2, printed p.41, Figure 7(a–c)"
      url: "https://doi.org/10.1016/0040-9383(84)90023-5"
---

## Statement

Assume countable choice. Let $D$ be a connected alternating regular link diagram with at least one crossing, and let a closed embedded surface be transverse to the represented link and both shifted spheres. Suppose its crossing-ball pieces are finite ordered levels of the explicit quadrilateral saddle model and it is in bubble standard position. Then no cyclic bubble word has the form $P^iS^j$ with $i\ge0$ and $j>0$. Moreover every bubble word has at least two $P$'s. The assertion applies to both shifted spheres and does not require reducedness of the diagram.

## Statement references

[[def-countable-choice]]

[[def-flype-crossing-ball-and-alternating-tangle-data]]

## Facts & Assumptions

**Given:** Countable choice, the connected alternating diagram with crossings, and the supplied ordered-model surface in bubble standard position.

[F1] Standard position means that every bubble word is nonempty and no shifted-sphere circle visits one crossing ball twice. A labelled lower arc means the lower hemisphere arc of a particular saddle, with its original curve-component connection retained. ([[def-flype-crossing-ball-and-alternating-tangle-data]])

[F2] Successive overpasses along an upper circle lie on opposite sides if the number of intervening punctures is even and on the same side if it is odd. Every bubble word has even length. The lower assertion is reflected. ([[lem-alternating-bubble-word-side-parity]])

[F3] Projected upper and lower model arcs have the explicit nested intersection order. After common-face segments shared with the upper circle are pushed outside its chosen disk side, an upper visit with its overpass inside that disk has two same-level end crossings and the lower-level crossings between. An outside visit has only the lower-level crossings. Each labelled lower arc crosses the upper circle at most once in that ball. When there is a crossing nearest an equatorial end, it belongs to the same saddle in the inside case and the next lower saddle in the outside case. These perturbations preserve all labelled lower arcs and their connections. ([[lem-projected-saddle-arcs-have-explicit-nested-intersection-order]])

[F4] A word with one saddle visit forces a component on the opposite shifted sphere to repeat that bubble, independently of alternation. ([[lem-single-saddle-bubble-word-forces-an-opposite-repeat]])

[F5] A simple circle on a sphere bounds complementary disk regions under countable choice, using a stereographic linear nullhomotopy. Proper disjoint arcs cut a disk into disk regions by successive use of the same Jordan-disk assertion. ([[lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups]])

## Proof

1.1 Suppose an upper circle $C$ has the cyclic word $P^iS^j$ with $j>0$. If $j=1$, [F4] contradicts the lower no-repeat condition in [F1]. Hence assume $j\ge2$. The visited bubbles are distinct by [F1]. Project $C$ to the projection sphere and choose either of its disk sides $A$ using [F5]. All punctures are in the one common-face interval between the last and first saddle visits; choose a closed subinterval $I$ of that interval containing them. If $i=0$, choose any small nonempty subinterval there instead. [given, F1, F4, F5, construct]

2.1 Project the lower intersection curves as well, and perform the small outside-$A$ perturbation of [F3]. It preserves their labelled arcs and all component connections, so a repeated label ball on a resulting curve is already a repeated ball on its original lower curve. All intersections with $C$ are now transverse and lie in the visited bubble disks; the common-face portions that originally agreed with $C$ are now outside $A$. Between the first two consecutive saddle visits there is no puncture, so [F2] puts their overpasses on opposite sides. Therefore at least one visited overpass is inside $A$, for either choice of $A$. At that visit [F3] gives two lower crossings of $C$. Thus the lower curves have a nonempty finite family of proper arc pieces in $A$, possibly together with closed circles contained there. [step 1.1, F1, F2, F3, construct]

3.1 Choose a proper arc $\alpha$ in $A$ cutting off an outermost disk $A_0$ whose boundary interval $\beta\subset C$ avoids $I$. Such a choice exists with no other proper arc inside $A_0$. Indeed successive cuts along the finite disjoint proper arcs give disk regions by [F5]; their adjacency graph is a finite tree, since each additional cut splits one disk into two. It has at least two leaves. The connected interval $I$, which contains no lower crossing of $C$, belongs to only one region, so at most one leaf contains it; take a different leaf. Its boundary is one proper arc and one interval on $C$. Closed lower circles may lie in this disk but have no boundary endpoints and do not affect the choice. In particular the interior of $\beta$ has no lower crossing, and contains no puncture. Let $Q$ denote the one perturbed lower circle containing $\alpha$. [step 1.1, step 2.1, F5, construct]

4.1 If the two endpoints of $\alpha$ lie in the same bubble, they lie on two different labelled lower arcs there: [F3] says one labelled arc cannot meet $C$ twice in that ball, and $C$ has only one upper arc in it. Both lower arcs belong to $Q$, so it repeats that bubble. By step 2.1 the original lower circle repeats as well, contradicting [F1]. [step 2.1, step 3.1, F1, F3, construct, contradiction]

4.2 Otherwise let $a,b$ be the distinct endpoint bubbles, ordered along $\beta$ from $a$ to $b$. Any complete intervening bubble visit has its overpass outside $A$: an inside visit would contribute its two same-level crossings by [F3], forbidden in the interior of $\beta$. Because $\beta$ has no puncture, [F2] alternates the inside/outside status at each successive visit. Thus there is at most one intervening visit. If none intervenes, exactly one endpoint visit is inside. If one, called $k$, intervenes, both endpoint visits are inside and the visit at $k$ is outside. At an endpoint of $\alpha$, the intersection is the nearest one to the corresponding equatorial end of its upper arc, since the remainder of that arc on $\beta$ has no further lower crossing. Hence [F3] applies with its exact nearest-end rule. [step 3.1, F2, F3, construct]

5.1 First suppose no bubble intervenes. If the inside endpoint is $a$, its endpoint arc of $Q$ is the same-saddle lower arc attached to the common-face path from $a$ to $b$. That unchanged path connects it to the same-saddle lower arc of the upper visit at $b$, so that latter arc also belongs to $Q$. But the actual endpoint of $\alpha$ at $b$ is an arc of the next lower saddle there, by the outside nearest-end rule in [F3]. These are two different labelled lower arcs in bubble $b$, both on $Q$, a contradiction. If the inside endpoint is $b$, reverse the tracing: the same common-face path instead gives two distinct labelled lower arcs in bubble $a$ on $Q$. This is again forbidden by [F1]. [step 2.1, step 4.2, F1, F3, construct, contradiction]

5.2 Finally suppose one bubble $k$ intervenes. Both endpoint arcs of $\alpha$ are the same-saddle lower arcs at $a,b$ by step 4.2. The common-face path from $a$ to $k$ connects the first to one lower arc of the saddle visited at $k$, while the path from $k$ to $b$ connects the second to the other lower arc of that same saddle. Both arcs at $k$ therefore belong to $Q$. They are distinct east and west lower arcs of one saddle, so $Q$ repeats bubble $k$, contrary to [F1]. All endpoint possibilities have now contradicted no-repeat. No upper word $P^iS^j$ with $j>0$ exists. Reflection gives the lower conclusion using the reflected assertions in [F2]–[F4]. [step 2.1, step 4.2, F1, F3, F4, construct, contradiction]

6.1 A word with no saddle letters consists of a positive number of puncture letters by [F1]; its even length in [F2] makes that number at least two. A word with saddle letters and at most one puncture has cyclically the form $S^j$ or $PS^j$, excluded by steps 1.1–5.2. Thus every word has at least two punctures, as asserted. [step 1.1, step 5.2, F1, F2, construct] ∎
