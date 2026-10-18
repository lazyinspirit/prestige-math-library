---
id: lem-relative-three-bordism-surgery-presentation
kind: lemma
title: "Relative surgery presentations and moves for three-dimensional bordisms"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 7
deps: [def-weighted-lagrangian-ribbon-bordism, def-oriented-smooth-cobordism, def-morse-function-adapted-to-a-cobordism, def-handle-decomposition-relative-to-the-incoming-boundary, thm-morse-functions-and-handle-decompositions-correspond, thm-adapted-excellent-morse-functions-exist-on-compact-cobordisms, thm-parametric-transversality, thm-morse-functions-are-dense-by-relative-jet-transversality, thm-collar-neighborhood-theorem, cor-a-morse-function-on-a-compact-manifold-has-finitely-many-critical-points, def-handle-slide-of-one-k-handle-over-another, thm-handle-cancellation, def-countable-choice, def-axiom-of-choice]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Bakalov and Kirillov, Lectures on Tensor Categories and Modular Functor, §§4.4 and 5.4–5.7"
      url: "https://www.math.stonybrook.edu/~kirillov/tensor/tensor.ps.gz"
    - title: "Kevin Walker, On Witten's 3-manifold invariants, §§7 and 19"
      url: "https://canyon23.net/math/1991TQFTNotes.pdf"
---

## Statement

Assume the full Axiom of Choice. Let $M:\Sigma_0\to\Sigma_1$ be a compact oriented smooth three-dimensional bordism with fixed product collars and boundary parametrizations, together with a properly embedded colored ribbon graph whose boundary endpoints match the labels. A relative surgery presentation is a framed link in the interior of a fixed capped standard boundary-handlebody presentation, together with the ribbon graph and its coupon data, whose surgery recovers the parametrized bordism. The claimed relative Kirby theorem is that every such bordism admits a presentation and any two presentations are connected by isotopy, framed handle slides, creation/removal of canceling $\pm1$ components, and the boundary/coupon moves forced by the fixed collars.

## Facts & Assumptions

**Given:** Full AC; the compact smooth bordism, fixed collars and parametrizations, and its properly embedded colored ribbon graph.

[F1] Relative Morse functions correspond to relative handle decompositions, and compactness gives finitely many critical points; collars can be fixed during the relative construction ([[thm-morse-functions-and-handle-decompositions-correspond]], [[thm-adapted-excellent-morse-functions-exist-on-compact-cobordisms]], [[cor-a-morse-function-on-a-compact-manifold-has-finitely-many-critical-points]], [[thm-collar-neighborhood-theorem]]).

[F2] A relative handle decomposition uses handles attached away from the fixed incoming collar; a framed two-handle attaching circle records its normal framing, and a handle slide is the specified band sum ([[def-handle-decomposition-relative-to-the-incoming-boundary]], [[def-handle-slide-of-one-k-handle-over-another]]).

[A1] The relative Cerf theorem needed to compare two such decompositions, including boundary critical-point events and its complete list of local moves, is not supplied by [F1] or [F2]. Full AC is part of the requested global statement ([[def-axiom-of-choice]]).

## Proof

**Given:** The data in the Statement.

1.1 By [F1], choose a relative Morse function constant on the fixed collars and with distinct critical values. Compactness gives finitely many critical points, so its sublevel sets yield a finite relative handle decomposition. In dimension three the handles have indices $0,1,2,3$. The ribbon graph can be put in general position with respect to the finitely many handle levels while its prescribed boundary endpoints remain fixed in the collars. This proves the finite relative handle presentation portion. [F1, given, construct]

1.2 A one-handle is recorded by its two attaching disks (the dotted-circle notation); a two-handle is recorded by its attaching circle and the framing induced by its attaching map; three-handles cap the remaining spherical boundary components. Capping the fixed standard boundary handlebodies turns the resulting finite handle picture into a surgery diagram in the interior. These replacements preserve the attaching regions and the boundary parametrizations because every modification is inside the collar complement. Thus each chosen handle decomposition gives a relative surgery presentation. [F2, step 1.1, algebra]

2.1 To prove that every pair of such presentations is related by the listed relative Kirby moves, one needs a relative Cerf argument: a generic path between the two Morse functions must be shown to have only critical-value interchanges, births/deaths of adjacent-index pairs, handle slides, and the boundary critical-point moves; each event then needs its explicit local coordinate model and its translation to the corresponding surgery/coupon move. The present suppliers [F1]–[F2] establish existence and cancellation/slide definitions but do not state this complete relative classification, and Walker's §19 is blank. No proof of this move-completeness assertion is supplied in this carrier. [F1, F2, A1, step 1.1, step 1.2]

## Unresolved proof obligation

The relative Kirby move theorem and its boundary/coupon move list remain unproved. The existence result in steps 1.1–1.2 is established; the statement as a whole is escalated because invariance and surgery gluing require the missing completeness argument.
