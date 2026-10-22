---
id: lem-three-dimensional-relative-face-presentations-have-fixed-height-morse-realizations
kind: lemma
title: "Relative face presentations in dimension three have fixed-height Morse realizations"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-countable-choice
  - lem-three-dimensional-relative-face-handles-can-be-ordered-without-extrema
  - lem-gluing-handle-morse-models-along-collars
  - lem-standard-handle-admits-an-adapted-morse-function
  - thm-euclidean-inverse-function-theorem
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Countable choice is inherited from the relative face handle presentation and smooth collar gluing. The doubled handle pairs and the final increasing collar-coordinate correction are finite."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "C. McA. Gordon and R. A. Litherland, On the Signature of a Link, Inventiones Mathematicae 47 (1978), 53–69, Theorem 11 Proof II, printed p.67"
      url: "https://gdz.sub.uni-goettingen.de/download/pdf/PPN356556735_0047/PPN356556735_0047.pdf"
    - title: "John Milnor, Lectures on the h-Cobordism Theorem, Theorem 3.12, printed pp.30–31; the fixed vertical-face realization is supplied locally"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/surgery/hcobord.pdf"
---

## Statement

Assume countable choice. Let $M$ be a compact connected smooth three-manifold with incoming and outgoing faces $A_0,A_1$, both nonempty, and vertical face $B\times[0,1]$, with supplied compatible product collars and boundary parametrizations. Neither the manifold nor its horizontal faces is required to be orientable or to have connected horizontal faces. Then there is an excellent Morse function $f:M\to[0,1]$ with $f^{-1}(i)=A_i$, equal to the prescribed height $t$ on a smaller full vertical product collar, with no boundary critical points, and with all its critical points of index one or two. All index-one values precede all index-two values.

More precisely, take the ordered relative handle presentation with no extrema supplied by the relative face handle lemma. The critical values can be any assigned finite strictly increasing list in $(0,1)$ in that handle order. Thus all index-one values may be assigned below $1/2$ and all index-two values above $1/2$. The resulting function retains the original boundary parametrizations and is product near every boundary face and corner.

## Statement references

[[def-countable-choice]]

[[lem-three-dimensional-relative-face-handles-can-be-ordered-without-extrema]]

## Facts & Assumptions

**Given:** Countable choice and the compact three-dimensional face cobordism with its prescribed product boundary data and nonempty horizontal ends.

[F1] Such a cobordism has a finite relative presentation with only one- and two-handles in index order, attaching away from a fixed vertical strip, and with the original boundary parametrizations retained as presentation data. ([[lem-three-dimensional-relative-face-handles-can-be-ordered-without-extrema]])

[F2] A standard handle has a quadratic Morse model, product attaching and outgoing collars, and no other critical point. The explicit gluing construction builds an elementary one-critical-point band with the prescribed attaching embedding and a product complementary band; its proof retains the attaching framing and allows rescaling its height to a chosen interval. It does not fix a whole old outgoing face pointwise while adding a new band. ([[lem-standard-handle-admits-an-adapted-morse-function]], [[lem-gluing-handle-morse-models-along-collars]])

[F3] The inverse function theorem supplies the inverse of a smooth increasing collar-coordinate change, with smoothness obtained from its derivative formula. ([[thm-euclidean-inverse-function-theorem]])

## Proof

1.1 Choose the presentation in [F1], retaining its incoming and outgoing identifications and its vertical product strip. List its finitely many handles in their stated order and fix the requested distinct critical heights $c_1<\cdots<c_N$. Choose disjoint closed height intervals about them inside $(0,1)$, in that order. If the list is empty, the presentation is a product relative to the supplied vertical data, and its product height suffices. Henceforth allow any finite nonempty list. [given, F1, construct]

1.2 Double the presentation across the vertical face. In the supplied signed product collars this reflection identifies two copies of the face cobordism to an ordinary smooth cobordism with closed incoming and outgoing faces, and exchanges its two halves. Each handle lies away from the gluing strip and appears in a disjoint reflected pair. The doubled initial stage is the product on the doubled incoming face, and the unaffected strip along the reflection locus stays a product throughout. If $B$ is empty, take the disjoint union of two copies with the exchanging involution; the same construction works componentwise. The reflection fixes the original vertical face when $B$ is nonempty. [step 1.1, construct]

2.1 For the $j$th pair use two identical copies of the elementary band constructed in [F2], rescaled to the chosen interval about $c_j$, and glue their product complements at the same height. The two attaching regions are disjoint and exchanged by reflection, so the same local formulas make the height reflection invariant, with exactly those two quadratic critical points. On the complement of their attaching regions use the interval height, exactly as in the product complement of the explicit band construction in [F2]. Concatenate the finite bands and the intervening products, using their signed height collars. All stage maps and later attaching maps are the supplied presentation maps; any added collar is absorbed by a smooth increasing interval parametrization. Do these choices identically on the two halves and as products in the normal coordinate near the reflection locus. This gives a smooth Morse height $g$ on the doubled cobordism, whose restriction to one half has one critical point per handle, with the assigned values and indices. The function need not be excellent on the double, because reflected pairs have equal values; it is excellent on either half. On a smaller strip of the original vertical face it has the form $g(b,t,r)=\psi(b,t)$, independent of the inward strip coordinate $r$, where $\partial_t\psi>0$ and $\psi(b,0)=0$, $\psi(b,1)=1$. Indeed the product complements and every collar absorption are increasing interval parametrizations there, and the original vertical parametrization was retained in [F1]. No handle model meets that strip. [step 1.1, step 1.2, F2, construct]

3.1 Restore the exact prescribed vertical height by a domain-coordinate change. In the strip set $\Psi(b,t,r)=(b,(1-\chi(r))t+\chi(r)\psi(b,t),r)$, with $\chi=1$ on a smaller strip and zero near its inner edge. Its $t$ derivative is $(1-\chi)+\chi\partial_t\psi>0$. Each fiber map is an increasing bijection of $[0,1]$ fixing its endpoints, so [F3] gives a smooth diffeomorphism; it is the identity near the inner edge and hence extends by the identity to the rest of $M$. It fixes the incoming and outgoing faces pointwise. Put $f=g\circ\Psi^{-1}$ on the chosen half. On the smaller vertical strip, $\Psi$ has $t$ coordinate $\psi(b,t)$ and $g$ is independent of $r$, so $f(b,t,r)=t$ there. Pullback by this diffeomorphism preserves all critical values, nondegeneracy and indices. Thus no new critical point is introduced by correcting the vertical height. For an empty vertical face no correction is needed. [step 2.1, F3, construct, algebra]

4.1 The band construction already makes the function product in its horizontal collars. Near the vertical corners the preceding correction gives exactly the common height $t$, agreeing with those collars; shrink the collars to their common product charts. Hence $f$ has the prescribed endpoint fibers, no boundary critical point and the full fixed vertical height. Its critical list is exactly the original one- and two-handle list, at the assigned values by steps 2.1–3.1. In particular choosing the one-handle intervals in $(0,1/2)$ and the two-handle intervals in $(1/2,1)$ gives the required common middle height. The identifications of all boundary faces are the original presentation data, since the construction used those maps and the final correction fixes the horizontal faces and restores the specified vertical parametrization. [step 1.1, step 2.1, step 3.1, F1, F2, construct] ∎
