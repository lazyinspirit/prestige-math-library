---
id: lem-opposite-definite-spans-of-a-nonsplit-link-admit-circle-free-intersection
kind: lemma
title: "Opposite definite spans of a nonsplit link admit circle-free intersection"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - def-split-link
  - lem-normal-transfer-pairing-and-signature-under-component-connecting-tubes
  - lem-normal-transfer-linking-defines-a-symmetric-surface-pairing
  - lem-opposite-definite-normal-pairings-force-common-circles-to-bound-disks
  - thm-smooth-schoenflies-for-embedded-two-sphere-in-s-three
  - lem-smooth-ball-windows-and-boundary-disk-absorption
  - thm-isotopy-extension
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Full AC is inherited from the opposite-definite common-circle and full normal-transfer pairing suppliers. It supplies countable choice for smooth Schoenflies, ball-window normalization and compact supported isotopy extension. All circle reductions are finite."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Joshua Evan Greene, Alternating links and definite surfaces, Lemma 3.4, PDF p.6; local disk-removal argument in the nonsplit case"
      url: "https://people.maths.ox.ac.uk/lackenby/Fox.pdf"
    - title: "Thomas Kindred, A geometric proof of the flyping theorem, Procedure 2.24(1), PDF pp.11–12"
      url: "https://arxiv.org/pdf/2008.06490v3"
---

## Statement

Assume full AC. Let $F_+,F_-$ be compact smooth embedded spanning surfaces without closed components for the same nonempty nonsplit link $L\subset S^3$, with respectively positive and negative definite full rational normal-transfer pairings. They may be disconnected and nonorientable. Suppose their interior intersection is transverse and consists of finitely many embedded circles and properly ending embedded arcs, whose endpoints lie only on $L$, with a fixed boundary collar arrangement already supplied. Then an ambient isotopy of $F_+$ fixed near $L$ removes all interior circle components of its intersection with the original comparison surface $F_-$, while retaining its arc components and the boundary collar arrangement. Its full positive definite pairing is transported by the isotopy. The finite construction strictly reduces the circle count at each stage. The ambient isotopy need not fix the comparison surface pointwise; that surface is retained at its original position when intersections are measured.

## Statement references

[[def-axiom-of-choice]]

[[def-split-link]]

[[lem-normal-transfer-pairing-and-signature-under-component-connecting-tubes]]

## Facts & Assumptions

**Given:** Full AC, the two opposite definite spanning surfaces without closed components, their common nonsplit boundary link, and the stated finite intersection and fixed boundary collar arrangement.

[F1] The full normal-transfer pairing restricts on each connected component to its canonical normal-transfer pairing and is transported by ambient isotopy. Every transverse interior common circle of two connected boundary surfaces with opposite definite normal-transfer forms bounds a disk on each. ([[lem-normal-transfer-pairing-and-signature-under-component-connecting-tubes]], [[lem-normal-transfer-linking-defines-a-symmetric-surface-pairing]], [[lem-opposite-definite-normal-pairings-force-common-circles-to-bound-disks]])

[F2] A splitting sphere is a smooth embedded sphere disjoint from the link with nonempty parts of the link on both complementary sides. ([[def-split-link]])

[F3] A smooth sphere in $S^3$ bounds two smooth balls, under countable choice. ([[thm-smooth-schoenflies-for-embedded-two-sphere-in-s-three]])

[F4] A smooth ball with a disk window is standard as a ball-window pair. A short disk collar can be absorbed into it, compatibly with the window and its collar. ([[lem-smooth-ball-windows-and-boundary-disk-absorption]])

[F5] An isotopy of a compact smooth source extends to an ambient isotopy with support in any prescribed open neighborhood of its compact track, under countable choice. ([[thm-isotopy-extension]])

## Proof

1.1 The first homology of a connected component injects as its summand in that of the disjoint union. Therefore the restriction of the positive or negative definite full pairing to each component is still definite of that sign. By [F1] a common transverse interior circle consequently bounds a disk on both its containing components, without needing their boundary links to agree. If no circle is present use the identity isotopy. Otherwise choose a common circle $\gamma$ whose disk $D_-$ in $F_-$ is innermost among the finitely many such disks. Its interior contains no other common circle. It contains no intersection arc either: the endpoints of an arc lie on $L$ outside this interior disk, so an arc entering it would have to cross $\gamma$, whereas distinct transverse intersection components are disjoint. Thus $\operatorname{int}D_-\cap F_+=\varnothing$. Let $D_+\subset F_+$ be the disk supplied by [F1]. The same endpoint argument shows no intersection arc enters $D_+$. [given, F1, construct]

2.1 The two disks have disjoint interiors, since $\operatorname{int}D_-$ misses the whole of $F_+$. Perform two-copy disk surgery on $F_+$ along $D_-$, cutting out a thin annulus at $\gamma$, capping its two sides by nearby copies of $D_-$, and smoothing the seams in their transverse disk charts. This splits off a smooth sphere $S_0$ made from $D_+$ and one cap; the rest is a surface $F_1$ obtained from the one affected component by replacing its disk. That component stays connected and retains its original nonempty boundary, and every other component of $F_+$ is retained. Thus $F_1$ has no closed components and boundary exactly $L$. Choose the new cap of $F_1$ on the side of $F_-$ occupied by the retained part near $\gamma$, rounding its seam to that same side. It and its seam then miss $F_-$. The two-copy surgery makes $S_0$ disjoint from the whole $F_1$ and from $L$. Its sphere smoothing and all caps may be chosen arbitrarily close to the original disks, with no other intersection changed outside the discarded disk. [step 1.1, construct]

3.1 By [F3] the sphere $S_0$ has two ball sides. Because $L$ is nonsplit and disjoint from it, [F2] implies all of $L$ lies on one side. Every component of $F_1$ lies entirely on one side, since it is connected and disjoint from $S_0$. It has nonempty boundary contained in $L$, so it must lie on the side containing $L$. Consequently the opposite ball $V$ misses the entire $F_1$ and $L$, not just the affected component. Reverse the two-copy surgery by joining $S_0$ to $F_1$ through their short original product collar. Absorb this collar into $V$ by [F4]. The resulting ball $V'$ meets $F_1$ in exactly one disk window and has interior disjoint from $F_1$ and $L$. Replacing that window by its other boundary disk recovers the original $F_+$ up to the arbitrarily small seam choices of step 2.1. This is where nonsplitting replaces a connectedness assumption on the entire spanning surface. [step 2.1, F2, F3, F4, construct]

4.1 In the ball-window coordinates of [F4], flatten the window cap and shrink the other cap in its normal coordinate. After smoothing its edge the bulged disk is a graph $t=g(x)$, $g\ge0$ smooth and zero on a boundary collar, while the window is $t=0$. The graph interpolation $t=(1-u)g(x)$ removes this bulge through embedded disks fixed on that collar. Extend by the identity on the rest of the surface and make it stationary near the time endpoints. Its compact track has a neighborhood missing $L$ and every other component and missing the retained surface outside the fixed collar. Apply [F5] there to obtain an ambient isotopy carrying $F_+$ to $F_1$ and fixed near $L$. Hence the endpoint pairing is the transported full pairing by [F1], including all cross-component terms. There is no requirement to avoid the comparison surface during the isotopy. [step 3.1, F1, F4, F5, construct]

5.1 At the endpoint the new cap and seam miss $F_-$ by step 2.1. The circle $\gamma$ and any circles inside $D_+$ are gone, all other intersection components outside that disk are retained, and no arc has changed by step 1.1. Thus the finite circle count strictly decreases. The retained transverse family and unchanged collar arrangement satisfy the hypotheses again, so repeat the construction until that count is zero. A decreasing nonnegative integer permits at most the original number of stages. Concatenate the finitely many isotopies; their finite common fixed neighborhood is still a neighborhood of $L$. This proves every asserted relative and endpoint property without assuming the initial surfaces connected. [step 1.1, step 2.1, step 4.1, F1, construct] ∎
