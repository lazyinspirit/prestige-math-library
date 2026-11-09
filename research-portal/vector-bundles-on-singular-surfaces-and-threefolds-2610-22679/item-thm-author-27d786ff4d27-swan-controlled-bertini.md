---
title: External Swan finite controlling-family Bertini theorem
status: draft
research_item: thm-author-27d786ff4d27-swan-controlled-bertini
dependency_level: 0
---

PDF p. 15: Theorem6.7 second Bertini application

## Prerequisites

None.

## Statement
Import Swan Theorems1.3–1.4 in the following restricted form. On a smooth affine geometrically integral threefold over an infinite field, for a rank-two projective module there is a finite controlling family such that every finite family containing it has a nonempty open set of coefficients whose corresponding section has empty zero scheme or a smooth geometrically integral one-dimensional zero scheme. In the free case the controlling family can be taken to be a frame and its products by coordinates of an affine embedding, as constructed in the proof. The same remains true after repetitions or extra indexed vectors: coefficients of repetitions map surjectively onto the distinct-vector coefficient space, and the inverse image of its nonempty open is nonempty open.

## Source qualifications
The primary GDZ scans 29–34 (printed pp. 23–28) were inspected for the exact statement and printed proof. Theorem 1.1(1) prints an incorrect intersection dimension; its preceding definition makes the correct value $d+r-n$, whereas the module dimension in Theorem 1.3 is correctly $\dim V-\operatorname{rank}Q$. The identification of all closed coefficient points with rational points in the proof of Theorem 1.1 needs the rational-point qualification over a non-algebraically-closed field.

At the end of the proof of Theorem 1.4, printed pp. 27–28, the fiber condition must be $\ne\varnothing$, not $=\varnothing$. Choose a point of the already nonempty coefficient open $\theta(O)$ and fix its first coordinate; the resulting fiber is nonempty and open. The two retained finding IDs for this sign describe the same error.

The free-chart reduction also calls geometric integrality local, which is false on an arbitrary open cover. That printed inference is not imported as a lemma. The established theorem is used as an external input; its deep Bertini foundations are not reconstructed here. The current local application has separate common-core and gluing arguments, which are not replaced by that inference.

## Source contract
**Given:** Exactly the smooth affine, infinite-field, geometrically integral and constant-rank hypotheses above, using $(q,a)=(0,1)$ in the source.

**Goal:** Import the substantial irreducible Bertini input, with actual source scope.

[F1] Swan p23 defines variety as geometrically integral. Theorems1.3/1.4 and their proof pp26–28 give the finite controlling family and its generic coefficient-open property.

## External input
Import [F1], with its exact reading limits. The source is used only on the smooth affine charts. The extension to the actual quasi-affine $U$, common-core nonemptiness, simultaneous avoidance, and gluing of global irreducibility are separately proved in the five local items. No assertion that irreducibility is merely local on arbitrary covers is imported or used.
