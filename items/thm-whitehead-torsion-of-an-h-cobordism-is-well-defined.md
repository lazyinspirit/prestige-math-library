---
id: thm-whitehead-torsion-of-an-h-cobordism-is-well-defined
kind: theorem
title: "The Whitehead torsion of an h-cobordism is well defined for a fixed presentation and its elementary moves"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 12
deps: ["def-whitehead-torsion-of-an-h-cobordism", "def-based-handle-chain-complex-over-the-fundamental-group-ring", "lem-relative-handle-complex-torsion-agrees-with-the-inclusion", "lem-h-cobordism-handle-complex-is-contractible-over-the-group-ring", "thm-composition-and-sum-formulas-for-whitehead-torsion", "def-finite-based-free-chain-complex-and-its-contraction-torsion", "lem-contraction-torsion-is-independent-of-the-contracting-homotopy", "def-whitehead-torsion-of-a-finite-cw-homotopy-equivalence", "thm-whitehead-torsion-is-independent-of-cellular-approximation-basepaths-lifts-orientations-orders-and-contraction", "lem-elementary-basis-changes-orientations-and-deck-lift-changes-die-in-the-whitehead-group", "lem-handle-slides-and-cancelling-pair-creations-preserve-whitehead-torsion", "def-h-cobordism", "def-countable-choice"]
provenance:
  statement: ai-altered
  proof: literature-derived
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  scraped: []
  references:
    - title: "Wolfgang Lück, A Basic Introduction to Surgery Theory (ICTP lecture notes, 27 October 2004; complete author text)"
      url: "https://him-lueck.uni-bonn.de/data/ictp.pdf"
      locator: "Chapter 2 §2.2, Theorem 2.1 and equations (2.12)--(2.14), printed pp. 23--32"
    - title: "Andrew Ranicki, Algebraic and Geometric Surgery (Oxford Mathematical Monographs, electronic edition)"
      url: "https://www.maths.ed.ac.uk/~v1ranick/books/surgery.pdf"
      locator: "Propositions 8.11 and 8.19, printed pp. 174 and 178; PDF pages 182, 186"
---
## Statement

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]). Let $(W;M_0,M_1)$ be a nonempty connected smooth h-cobordism with a fixed finite handle
presentation $H$ relative to $M_0$. The class $\tau_H(W,M_0)$ is independent
of the auxiliary choices in its definition: cellular representatives, basepoint
paths, the universal-cover identification and chosen lifts, core orientations,
the order of handles, and the chain contraction. If $H,H'$ are related by the
elementary handle modifications listed in
[[lem-handle-slides-and-cancelling-pair-creations-preserve-whitehead-torsion]],
then $\tau_H(W,M_0)=\tau_{H'}(W,M_0)$. For each fixed presentation it also
agrees with AT-22's torsion of the inclusion $M_0\hookrightarrow W$ computed
using the associated finite CW structure. No invariance under arbitrary changes
of handle presentation is asserted.

## Facts & Assumptions

**Given:** A nonempty connected smooth h-cobordism $(W;M_0,M_1)$ and a fixed finite handle presentation $H$ of $(W,M_0)$.

[F1] The presentation-indexed torsion is the contraction torsion of the based handle complex, taken in $\operatorname{Wh}(\pi_1(M_0))$, and by the comparison lemma it agrees with the Whitehead torsion of the inclusion $M_0\hookrightarrow W$ for the CW structure associated with the presentation ([[def-whitehead-torsion-of-an-h-cobordism]], [[lem-relative-handle-complex-torsion-agrees-with-the-inclusion]], [[lem-h-cobordism-handle-complex-is-contractible-over-the-group-ring]], [[def-based-handle-chain-complex-over-the-fundamental-group-ring]]).

[F2] AT-22's independence theorem: the Whitehead torsion of a finite CW homotopy equivalence is independent of the cellular representative, the basepoint paths, the universal-cover identification, the chosen lifts, the cell orientations and order, and the chain contraction; the contraction torsion of a contractible based complex is independent of the contraction ([[thm-whitehead-torsion-is-independent-of-cellular-approximation-basepaths-lifts-orientations-orders-and-contraction]], [[def-whitehead-torsion-of-a-finite-cw-homotopy-equivalence]], [[lem-contraction-torsion-is-independent-of-the-contracting-homotopy]], [[def-finite-based-free-chain-complex-and-its-contraction-torsion]]).

[F3] Basis changes of the displayed handle bases given by elementary matrices, permutations, signs or units $\pm g$ die in the Whitehead group ([[lem-elementary-basis-changes-orientations-and-deck-lift-changes-die-in-the-whitehead-group]]).

[F4] The elementary handle modifications of the listed kinds preserve the presentation-indexed torsion class ([[lem-handle-slides-and-cancelling-pair-creations-preserve-whitehead-torsion]], [[thm-composition-and-sum-formulas-for-whitehead-torsion]], [[def-h-cobordism]]).

## Proof

1.1 The class $\tau_H(W,M_0)$ is defined as the contraction torsion of the based handle complex of the presentation, and by [F1] it equals the AT-22 torsion of the inclusion $M_0\hookrightarrow W$ for the associated finite CW structure; consequently the auxiliary choices made in the handle-complex definition (lifts of handles, core orientations, handle order) are exactly the choices controlled by the AT-22 independence theorem and the basis-change lemma. [F1, F3]

2.1 Independence of the chain contraction is the contraction-independence lemma for contraction torsion, and independence of the cellular representative, basepoint paths, cover identification, lifts, orientations and order is [F2] applied to the inclusion with the associated CW structures. [F2, step 1.1]

3.1 If $H$ and $H'$ differ by the listed elementary modifications, then by [F4] each modification preserves the class, so $\tau_H(W,M_0)=\tau_{H'}(W,M_0)$; this argument covers exactly the listed moves, and the elementary modifications of the previous lemma include cancelling-pair creation and deletion, handle slides of equal-index handles, reordering and re-choices of oriented lifts. [F3, F4, step 2.1]

4.1 Steps 2.1 and 3.1 give fixed-presentation auxiliary-choice independence and invariance under the listed elementary moves, and step 1.1 gives agreement with AT-22's torsion of the inclusion for the associated CW structure; nothing in the argument compares presentations that are not connected by the listed moves, so no invariance under arbitrary changes of handle presentation is asserted. [F1, step 3.1] ∎
