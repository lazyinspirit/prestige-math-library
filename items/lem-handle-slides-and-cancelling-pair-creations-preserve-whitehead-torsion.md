---
id: lem-handle-slides-and-cancelling-pair-creations-preserve-whitehead-torsion
kind: lemma
title: "Handle slides and cancelling-pair creations preserve Whitehead torsion"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 11
deps: ["def-based-handle-chain-complex-over-the-fundamental-group-ring", "def-whitehead-torsion-of-an-h-cobordism", "lem-relative-handle-complex-torsion-agrees-with-the-inclusion", "lem-h-cobordism-handle-complex-is-contractible-over-the-group-ring", "thm-creation-of-a-cancelling-handle-pair", "thm-handle-cancellation", "def-handle-slide-of-one-k-handle-over-another", "lem-handle-slides-preserve-the-relative-diffeomorphism-type", "lem-handle-slides-act-by-elementary-basis-change-on-handle-chains", "prop-elementary-matrix-operations-are-realized-by-handle-slides", "lem-attaching-handles-along-isotopic-attaching-embeddings-preserves-the-diffeomorphism-type", "lem-an-elementary-expansion-has-zero-whitehead-torsion", "thm-composition-and-sum-formulas-for-whitehead-torsion", "lem-elementary-basis-changes-orientations-and-deck-lift-changes-die-in-the-whitehead-group", "lem-cell-slides-and-stabilizations-realize-elementary-group-ring-matrices", "def-k-one-of-a-ring-and-the-whitehead-group-of-a-discrete-group", "def-countable-choice"]
provenance:
  statement: ai-altered
  proof: ai-altered
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Wolfgang Lück, A Basic Introduction to Surgery Theory (ICTP lecture notes, 27 October 2004; complete author text)"
      url: "https://him-lueck.uni-bonn.de/data/ictp.pdf"
      locator: "Chapter 1 §1.4, proof of Lemma 1.27(1), printed pp. 19--20"
    - title: "Andrew Ranicki, Algebraic and Geometric Surgery (Oxford Mathematical Monographs, electronic edition)"
      url: "https://www.maths.ed.ac.uk/~v1ranick/books/surgery.pdf"
      locator: "Proposition 8.19 and the proof of Theorem 8.33, printed pp. 178 and 184--185; PDF pages 186, 192, 193"
---
## Statement

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]). Let $(W;M_0,M_1)$ be a nonempty connected smooth h-cobordism and let two finite handle
presentations $H,H'$ of $(W,M_0)$ differ by a finite sequence of elementary
modifications: introducing or deleting a geometrically cancelling consecutive
pair, sliding one handle over another of the same index, reordering equal-index
handles or commuting disjoint attachments, isotoping full attaching embeddings and transporting later data, or re-choosing core orientations or oriented lifts. Then
$\tau_H(W,M_0)=\tau_{H'}(W,M_0)$ in $\operatorname{Wh}(\pi_1(M_0))$.
Algebraically the relative based complexes change by elementary expansions and
contractions, elementary basis changes, and basis changes through units
$\pm g$; each has zero class in $\operatorname{Wh}(\pi)$. This statement
concerns only presentations connected by the listed moves.

## Facts & Assumptions

**Given:** A nonempty connected smooth h-cobordism $(W;M_0,M_1)$ and two finite handle presentations $H,H'$ of $(W,M_0)$ differing by finitely many of the listed elementary modifications.

[F1] Introducing or deleting a geometrically cancelling consecutive pair realizes the insertion or deletion of an elementary contractible two-term complex in the relative based complex, and such an elementary expansion has zero Whitehead torsion; the based exact sequence clause of the AT-22 sum theorem gives the same conclusion in algebraic form ([[thm-creation-of-a-cancelling-handle-pair]], [[thm-handle-cancellation]], [[def-based-handle-chain-complex-over-the-fundamental-group-ring]], [[lem-an-elementary-expansion-has-zero-whitehead-torsion]], [[thm-composition-and-sum-formulas-for-whitehead-torsion]]).

[F2] A handle slide preserves the diffeomorphism type of the presentation relative to $M_0$. Lift its band and the disk-push comparison, including its specified lower-stage homotopy: the new core class is $e_j+e_i r$ with a signed monomial $r=\pm g$, because the lifted second core is the translate selected by that band. Thus it changes the handle chains by an elementary basis change. In right coordinate columns, if $P=I+E_{ij}r$ is a lower-handle basis change and $Q$ is an upper-handle basis change, the differential becomes $P^{-1}AQ$, an elementary row or column operation; the corresponding basis change of the based complex has zero class in $K_1$ and hence in the Whitehead group ([[def-handle-slide-of-one-k-handle-over-another]], [[lem-handle-slides-preserve-the-relative-diffeomorphism-type]], [[lem-handle-slides-act-by-elementary-basis-change-on-handle-chains]], [[lem-cell-slides-and-stabilizations-realize-elementary-group-ring-matrices]], [[lem-elementary-basis-changes-orientations-and-deck-lift-changes-die-in-the-whitehead-group]], [[def-k-one-of-a-ring-and-the-whitehead-group-of-a-discrete-group]]).

[F3] Reordering handles and re-choosing core orientations or oriented lifts change the displayed basis by a permutation, a sign change or a unit $\pm g$; such basis changes have zero class in $\operatorname{Wh}(\pi_1(M_0))$ ([[lem-elementary-basis-changes-orientations-and-deck-lift-changes-die-in-the-whitehead-group]]).

[F4] The presentation-indexed torsion is the contraction torsion of the based handle complex, which is independent of the contraction and agrees with the torsion of the inclusion for the associated CW structure ([[def-whitehead-torsion-of-an-h-cobordism]], [[lem-relative-handle-complex-torsion-agrees-with-the-inclusion]], [[lem-h-cobordism-handle-complex-is-contractible-over-the-group-ring]], [[lem-attaching-handles-along-isotopic-attaching-embeddings-preserves-the-diffeomorphism-type]]).

## Proof

1.1 Consider one elementary modification of $H$ of the listed types. For a cancelling-pair insertion or deletion, [F1] shows that the relative based complex of the presentation changes by an elementary contractible two-term complex, i.e. by an elementary expansion or contraction whose torsion class is $0$; by the based sequence clause of the AT-22 sum theorem the torsion of the complex is unchanged. [F1, given]

2.1 For a slide over handle $h_i$, attach $h_i$ first. Its parallel attaching sphere bounds a core-parallel disk in the new outgoing region, so the framed band sum defining the slid attachment is isotopic to the old attachment in this new boundary: shrink the parallel sphere across that disk and back along the band. The argument includes the attaching $0$-sphere endpoint interpretation for $1$-handles. The isotopy comparison in [F4] preserves the total manifold and carries later data. Lifting the same band gives the core-basis calculation of [F2], which shows that the presented manifold and the CW model are unchanged relative to $M_0$ up to diffeomorphism and homotopy equivalence, while the handle chains change by an elementary basis change; the corresponding change of the based complex is the changes $P^{-1}AQ$ with elementary matrices $P,Q$, whose classes in $K_1$ and hence in $\operatorname{Wh}$ are $0$, so the contraction torsion is unchanged. [F2, step 1.1]

3.1 For a reordering of equal-index handles, a change of core orientation or a change of oriented lift, [F3] identifies the change of the displayed basis as a permutation, a replacement of a basis vector by its negative, or a replacement by a unit $\pm g$; each of these basis changes has zero class in the Whitehead group, so again the contraction torsion is unchanged. For an isotopy of full attaching embeddings, transport every later attachment by the isotopy comparison of [F4]. The resulting filtration comparison takes each oriented lifted handle core to its corresponding core, hence induces the identity in these relative handle bases and commutes with the cellular boundaries. The based complexes therefore have equal torsion. Commuting two disjoint attaching regions leaves their glued manifold and core cells unchanged, so it gives the same cellular complex in its degree-ordered handle bases. [F3, F4, step 2.1]

4.1 By [F4] the presentation-indexed torsion depends only on the contraction torsion of the based handle complex, so each single elementary modification leaves $\tau_H(W,M_0)$ unchanged in $\operatorname{Wh}(\pi_1(M_0))$; composing the finitely many modifications relating $H$ to $H'$ gives $\tau_H(W,M_0)=\tau_{H'}(W,M_0)$. The statement concerns exactly the listed moves, and no claim is made about presentations not connected by them. [F4, step 1.1, step 2.1, step 3.1] ∎
