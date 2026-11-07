---
id: lem-opposite-definite-spanning-surfaces-admit-circle-free-intersection
kind: lemma
title: "Opposite definite spanning surfaces admit circle-free intersection"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - lem-opposite-definite-normal-pairings-force-common-circles-to-bound-disks
  - thm-smooth-schoenflies-for-embedded-two-sphere-in-s-three
  - lem-smooth-ball-windows-and-boundary-disk-absorption
  - thm-isotopy-extension
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Full AC is inherited from the opposite-definite common-circle supplier; it implies countable choice for smooth Schoenflies, ball windows and supported isotopy extension."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Joshua E. Greene, Alternating links and definite surfaces, Lemma 3.4, printed p.6"
      url: "https://people.maths.ox.ac.uk/lackenby/Fox.pdf"
    - title: "Thomas Kindred, A geometric proof of the flyping theorem, Procedure 2.24(1), printed p.11"
      url: "https://arxiv.org/pdf/2008.06490v3"
---

## Statement

Assume full AC. Let $F_+,F_-$ be connected compact smooth spanning surfaces for the same nonempty smooth link $L\subset S^3$, equipped with respectively positive and negative definite rational quadratic forms satisfying the normal-transfer linking identity. Suppose their interior intersection is transverse and consists of finitely many embedded circles and properly ending embedded arcs, with the arcs ending only on $L$, and that near $L$ a fixed collar arrangement has already been supplied. Then there is an ambient isotopy $H_t$ of $S^3$, fixed on a neighborhood of $L$, such that the intersection of $H_1(F_+)$ with the original comparison surface $F_-$ has no interior circle components. The arc components and the supplied boundary collar arrangement are unchanged. The endpoint surface $H_1(F_+)$ retains its positive definite normal-transfer form by transport. The finite construction removes at least one circle at each step.

The comparison surface in this statement is held at its original position when intersections are measured; the ambient maps $H_t$ are not required to fix its points.

## Statement references

[[def-axiom-of-choice]]

[[lem-opposite-definite-normal-pairings-force-common-circles-to-bound-disks|The normal-transfer identity and definiteness hypotheses]]

## Facts & Assumptions

**Given:** Full AC, the two connected spanning surfaces with opposite definite normal-transfer pairings, their finite transverse interior intersection, and their fixed boundary collar arrangement.

[F1] Every common transverse interior circle bounds a disk in each of the two opposite definite surfaces, under the supplied normal-transfer hypotheses. ([[lem-opposite-definite-normal-pairings-force-common-circles-to-bound-disks]])

[F2] Every smooth sphere in $S^3$ has two smooth ball sides, compatibly identified on their boundary, under countable choice. ([[thm-smooth-schoenflies-for-embedded-two-sphere-in-s-three]])

[F3] A ball with a smooth boundary disk window is a standard ball-window pair; a short disk collar can be absorbed into that ball, and a disk-attached ball can be removed after corner smoothing. ([[lem-smooth-ball-windows-and-boundary-disk-absorption]])

[F4] Under countable choice an isotopy of a compact smooth source extends to an ambient isotopy supported in any prescribed neighborhood of its compact track. ([[thm-isotopy-extension]])

[F5] Full AC implies countable choice. ([[thm-choice-implies-dependent-implies-countable-choice]])

## Proof

1.1 If no circle is present use the identity isotopy. Otherwise [F1] gives disk regions for all the finitely many common circles in $F_-$. Choose one innermost among those disk regions, denoted $D_-$ with boundary $\gamma$. Its interior contains no other circle component. It also contains no arc component: such an arc would have endpoints on $L\subset\partial F_-$ outside this interior disk and would have to cross $\gamma$ to enter it, whereas the transverse intersection components are disjoint. Thus $\operatorname{int}D_-\cap F_+=\varnothing$. Let $D_+\subset F_+$ be its disk from [F1]. For the same reason no intersection arc enters $D_+$. Both disks are disjoint from $L$. [given, F1, construct]

2.1 Their interiors are disjoint because $\operatorname{int}D_-$ misses all of $F_+$. Their union is an embedded sphere with one smooth corner circle. Round that corner in its two transverse disk-face charts, inside an arbitrarily small neighborhood of $\gamma$ disjoint from $L$. In the two-dimensional normal cross-section this replaces the two rays by a smooth convex connecting arc and uses its product along $\gamma$; the disk collars give compatible product coordinates. The result is a smooth sphere. Perform the corresponding two-copy disk surgery on $F_+$: remove a thin annular collar of $\gamma$, cap both sides by nearby copies of $D_-$, and round. One component is the sphere $S_0$ just described; the other is a connected surface $F_1$ with boundary $L$, obtained by replacing $D_+$. Choose its cap on the $F_-$ side occupied by $F_+\setminus D_+$ near $\gamma$, with the seam rounded to that same side. Thus this cap and its seam miss $F_-$. They can be taken arbitrarily close to $D_-$ and $\gamma$, so they miss every other intersection component outside $D_+$. The two-copy construction makes $S_0$ and $F_1$ disjoint. [step 1.1, construct]

3.1 By [F2] and [F5] the sphere $S_0$ bounds two balls. The connected surface $F_1$, disjoint from $S_0$, lies entirely on one side and contains its entire boundary $L$. The opposite ball $V$ therefore misses $F_1$ and $L$. Reversing the two-copy surgery recovers $F_+$ by joining $S_0$ to $F_1$ with a short tube in the chosen product collar. Absorb that short joining collar into $V$ using [F3]. This gives a ball $V'$ whose intersection with $F_1$ is exactly one disk window, and whose interior misses $F_1$ and $L$. Replacing that window by the other boundary disk of $V'$ recovers $F_+$ up to the already arbitrarily small seam choices. All these tracks lie in a neighborhood disjoint from $L$. [step 2.1, F2, F3, F5, construct]

4.1 This replacement is an isotopy. The ball-window construction in [F3] gives coordinates retaining the window's disk parametrization; flatten one boundary cap in its collar and make the other cap thin by a positive normal rescaling. After rounding the edge, the bulged disk is $t=g(x)$ over a planar disk, with $g\ge0$ smooth and zero near that disk's boundary, and the window is $t=0$. The graphs $t=(1-u)g(x)$ form an isotopy through embedded disks, fixed on a boundary collar, which removes the bulge. Extend it by the identity on the rest of the surface and make it stationary near the time endpoints. To obtain the ambient extension with the asserted support, apply [F4] to a slightly larger disk containing this moving patch and a fixed outer collar. Its track has a neighborhood disjoint from $L$ and from the rest of the surface outside that fixed collar. The extension fixes the collar because the disk isotopy does, and fixes the remaining surface because it lies outside the chosen support. Hence it carries $F_+$ to $F_1$ and is the identity near $L$. No restriction on intersections with the comparison surface during this isotopy is imposed. [step 3.1, F3, F4, F5, construct]

5.1 At the endpoint the new cap and seam miss $F_-$ by step 2.1. All intersections outside $D_+$ and its small collar are retained. The original circle $\gamma$ and any further circles inside $D_+$ have disappeared, and no arc was changed by step 1.1. Thus the finite circle count strictly decreases, without changing the supplied arrangement near $L$. Transport the form on $F_+$ by the ambient isotopy. It stays positive definite because the induced homology map is an isomorphism, and its normal-transfer linking identity stays valid because an orientation-preserving ambient isotopy transports both the two-sheeted normal push and the linking number; any sufficiently small normal push is homotopic to the transported transverse push in the complement of its underlying cycle. The negative form and the comparison surface are retained in their original position. [step 1.1, step 2.1, step 4.1, construct]

6.1 Repeat steps 1.1–5.1 with the endpoint surfaces. Their intersection is again the old retained transverse arc and circle family outside the changed disk, with none in the new disk, so the hypotheses for the next step hold. A nonnegative finite integer cannot decrease indefinitely. After at most the original number of circle components this yields a circle-free intersection. Concatenate the finitely many ambient isotopies with stationary time collars. Each fixes a neighborhood of $L$, and their finite common neighborhood is still a neighborhood of $L$; their composition therefore has all the asserted relative and endpoint properties. [step 1.1, step 5.1, construct] ∎
