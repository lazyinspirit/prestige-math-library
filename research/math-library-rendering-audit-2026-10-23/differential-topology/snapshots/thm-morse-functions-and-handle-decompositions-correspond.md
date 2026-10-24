---
id: thm-morse-functions-and-handle-decompositions-correspond
kind: theorem
title: "Morse functions and handle decompositions correspond"
status: published
origin: pipeline
dependency_level: 3
deps: [def-morse-function-adapted-to-a-cobordism, thm-adapted-excellent-morse-functions-exist-on-compact-cobordisms, def-handle-decomposition-relative-to-the-incoming-boundary, lem-interior-slab-handle-attachment, lem-standard-handle-admits-an-adapted-morse-function, lem-gluing-handle-morse-models-along-collars, cor-unstable-disk-is-the-handle-core, prop-simultaneous-attachment-at-a-morse-critical-value, lem-smooth-handle-attachment-is-independent-of-corner-rounding-up-to-diffeomorphism, thm-one-critical-point-handle-attachment, def-closed-sublevel-and-level-set-of-a-smooth-function, thm-regular-interval-diffeomorphism, def-morse-function-and-excellent-morse-function, cor-a-morse-function-on-a-compact-manifold-has-finitely-many-critical-points, def-countable-choice]
justified_by: []
provenance:
  statement: literature-derived
  proof: literature-derived
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "C. T. C. Wall, Differential Topology (Cambridge Studies in Advanced Mathematics 156), Sections 5.1-5.4, printed pp. 129-148"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/Wall.pdf"
    - title: "Andrei Pajitnov, Circle-Valued Morse Theory (de Gruyter Studies in Mathematics 32), Chapter 5 Sections 1-3 (pp. 163-189) and Chapter 4 Section 3 (pp. 132-162)"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/pajbook.pdf"
proof_strategy: "critical bands one at a time in one direction, collar gluing in the other"
---


## Statement

Assume $\mathrm{AC}_\omega$. On a compact collared triad $(W;M_0,M_1)$, every adapted excellent Morse function determines a finite handle decomposition relative to $M_0$, with one handle of index $\operatorname{ind}(p)$ per critical point. Given an adapted field, the attaching sphere is the boundary of its local unstable disk transported to the lower regular level. Conversely every finite handle decomposition relative to $M_0$ is realized by an adapted excellent Morse function with one critical point per handle, of the same index, ordered by the prescribed handle order.


## Facts & Assumptions

[F1] [[cor-a-morse-function-on-a-compact-manifold-has-finitely-many-critical-points]] gives finiteness; for the boundary version the same proof applies because the critical set is compact inside the interior and has no accumulation there.

[F2] [[lem-interior-slab-handle-attachment]] gives the interior handle bands, fixing $M_0$ and respecting the lower sublevel up to homotopy of pairs.

[F3] [[thm-regular-interval-diffeomorphism]] gives the regular products. At a face the same normalized-flow proof uses its signed collar chart.

[F4] [[lem-gluing-handle-morse-models-along-collars]] extends a stage across one prescribed handle, changing only the outgoing collar, preserving old critical values, and placing the new one at $1-\varepsilon/2$.

[F5] [[def-handle-decomposition-relative-to-the-incoming-boundary]] specifies the attaching maps, order and incoming face.

[F6] [[def-morse-function-adapted-to-a-cobordism]] and [[def-morse-function-and-excellent-morse-function]] give adaptedness and excellence.



## Proof

**Given:** The compact collared triad; in the forward direction an adapted excellent $f$ and adapted field, and in the reverse direction a finite handle presentation.

1.1 There are finitely many critical points by [F1], with distinct interior values. Choose disjoint small closed bands about those values, with regular endpoints, and with no boundary point in a band. Between these bands use the products of [F3]. At the two ends, compactness and absence of boundary critical points give small regular bands that are products on $M_0$ and $M_1$, respectively; if a face is empty, the corresponding end band is empty by the positive endpoint margin on compact $W$. If there are no critical points, the entire triad is the regular product. [F1, F3, F6, given, choose]

1.2 Conversely, begin with $M_0\times[0,1]$ and its height function, or the empty stage if $M_0$ is empty. It has no critical points and product face collars. Inductively apply [F4] to the next specified attaching map, choosing $\varepsilon$ small enough that its altered outgoing strip contains no old critical point and $1-\varepsilon/2$ exceeds all old critical values. The new function retains the old points and values, adds exactly one point of the handle index, and has a regular outgoing collar for the next gluing. This also works if the outgoing face is empty: only a zero-handle can then be attached, and it is a disjoint new disk. [F4, F5, given, construct]

2.1 Cross the bands in increasing value order. By [F2] each contributes one handle of the correct index and its flow-transported attaching sphere. Absorb the regular products into the stage collars. All identifications fix the incoming face, so they assemble a handle presentation of $W$ relative to $M_0$ as in [F5]. They do not fix an original level boundary once it becomes an interior seam. [F2, F3, F5, step 1.1, construct]

3.1 Finite induction gives one point per handle, with strictly increasing distinct critical values. It is zero exactly on $M_0$, one exactly on $M_1$, and regular on the face collars. Transport it by the presentation diffeomorphism to $W$; the elementary bands were built using the given framed attaching maps, so the recovered presentation is the prescribed one up to its collar and corner choices. All uses of collars and handle suppliers assume $\mathrm{AC}_\omega$; selections of stages and parameters are finite. [F4, F5, F6, step 1.2, algebra] ∎
