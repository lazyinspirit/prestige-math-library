---
id: thm-weighted-rt-tqft-and-factorization
kind: theorem
title: "The weighted Reshetikhin–Turaev TQFT and modular-functor factorization"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 9
deps: [lem-modular-gauss-sums-and-kirby-color, def-weighted-lagrangian-ribbon-bordism, lem-maslov-index-four-lagrangian-cocycle, lem-relative-three-bordism-surgery-presentation, def-rt-state-spaces, lem-rt-handlebody-pairing-and-surgery-gluing, def-rigid-object-and-rigid-monoidal-category, def-countable-choice, def-axiom-of-choice]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Bakalov and Kirillov, Lectures on Tensor Categories and Modular Functor, §§5.1–5.8"
      url: "https://www.math.stonybrook.edu/~kirillov/tensor/tensor.ps.gz"
    - title: "Kevin Walker, On Witten's 3-manifold invariants, §§7 and 18–19"
      url: "https://canyon23.net/math/1991TQFTNotes.pdf"
---

## Statement

Let $\mathcal C$ be a complex modular ribbon fusion category. The weighted bordism category has the objects and weight-corrected composition of [[def-weighted-lagrangian-ribbon-bordism]]. Its state space on a labeled surface is [[def-rt-state-spaces]]. For a bordism $M$, cap its incoming and outgoing boundaries by standard handlebodies and dual coupons; evaluate the resulting framed surgery graph with the normalization

$$D^{-m-1}\kappa^{-\sigma(B)-n}F(L_\Omega),$$

where $m$ is the number of surgery components, $B$ is the linking matrix, $\sigma(B)$ its signature, and $n$ the bordism weight. The claimed maps are independent of all surgery and coupon choices and define a symmetric monoidal functor; the ordinary unweighted functor is asserted only when the framing anomaly is canceled.

For every compatible cut of a surface along a circle, the claimed factorization isomorphism is

$$V(\Sigma_{\mathrm{glued}};\vec W)\cong \bigoplus_{i\in I}V(\Sigma_{\mathrm{cut}};\vec W,i,i^*).$$

The inverse is the cut map obtained by inserting the complete dual-basis identity on the cut object. Separating and nonseparating cuts, naturality, commuting disjoint cuts, and iterated gluing are included in the claim.

## Facts & Assumptions

**Given:** A complex modular ribbon fusion category, weighted parametrized bordisms with colored ribbon graphs, and compatible Lagrangians on all boundary surfaces.

[F1] The Maslov correction satisfies the four-Lagrangian cocycle and has the Wall sign convention fixed in [[lem-maslov-index-four-lagrangian-cocycle]].

[F2] State spaces are finite-dimensional Hom spaces with handle object $H$ ([[def-rt-state-spaces]]); their handlebody pairings and $D,d_i$ loop factors are in [[lem-rt-handlebody-pairing-and-surgery-gluing]], and the duality snakes used to cancel an evaluation/coevaluation pair are those of [[def-rigid-object-and-rigid-monoidal-category]].

[F3] The Gauss, projector, and blow-up formulas are in [[lem-modular-gauss-sums-and-kirby-color]].

[F4] Relative surgery presentations and their complete boundary/coupon move list are required in [[lem-relative-three-bordism-surgery-presentation]].

[A1] The cited A-item bodies leave the relative Kirby move theorem, full colored handle slide, coupon cancellation, and hence presentation-independent bordism maps unproved.

[A2] Full AC is used through Poincaré–Lefschetz duality for the boundary Lagrangians; $\mathrm{AC}_\omega$ is used through framed-tangle evaluation ([[def-axiom-of-choice]], [[def-countable-choice]]).

## Proof

**Given:** The data in the Statement.

1.1 The proposed map is characterized by its pairing against every dual handlebody state. If a normalized capped surgery functional is well-defined, the perfect pairing of [F2] determines at most one vector. For two possible presentations to give the same vector, their evaluations must agree under every relative Kirby move and every coupon change. The actual relative move supplier [F4] does not yet prove the required move-completeness assertion, while [F3] does not yet prove the colored handle-slide identity. Thus the definition in the Statement is a construction route, not yet a well-defined map. [F2, F3, F4, A1, A2, given]

1.2 If these maps are well-defined, composition is checked by gluing the capped surgery diagrams, canceling each paired boundary 1/2-handle pair, and inserting the dual-basis identity $\mathrm{id}_X=\sum_{i,\alpha}e_{i,\alpha}e_i^\alpha$ at every cut. The scalar from each removed $\Omega$ meridian is canceled by its $D$ normalization from [F3]; the signature defect is exactly the Maslov correction in [F1]. This describes the required equality of composites, but the local handle/coupon cancellation calculation is the missing step recorded in [A1]. [F1, F2, F3, A1, step 1.1]

2.1 For the proposed cut map, choose a semisimple decomposition $X\cong\bigoplus_i i^{\oplus m_i}$ and inclusions $e_{i,\alpha}:i\to X$ and projections $e_i^\alpha:X\to i$ from this direct sum. The direct-sum identities are $e_i^\alpha e_{j,\beta}=\delta_{ij}\delta_{\alpha\beta}1_i$ and $\sum_{i,\alpha}e_{i,\alpha}e_i^\alpha=1_X$: both follow by composing the canonical inclusion and projection matrices. Sewing with evaluation/coevaluation coupons defines the forward map; cutting and inserting this sum defines its inverse. On either composite, the adjacent evaluation and coevaluation cancel by the duality snakes of [F2], and the sum reduces to $1_X$. This verifies the algebraic inverse once the bordism sewing map has been constructed. [F2, F1, step 1.2, algebra]

2.2 The same identity is local to the cut circle, so the inverse calculation applies to separating and nonseparating cuts. Two disjoint cuts insert two commuting resolutions of the identity on distinct tensor factors; iterated cutting inserts their product, independent of order. Naturality follows because a morphism commutes with the identity resolution. These formal checks do not establish that the geometric sewing maps respect surgery choices, which still depends on the unresolved assertion in [A1]. [F1, A1, step 2.1, algebra]

## Unresolved proof obligation

This theorem remains escalated until the explicit relative Kirby move proof, full Kirby-color slide/coupon calculation, gluing-handle cancellation, cylinder identity, disjoint-union and duality laws, and compatibility of all surgery signatures with the Maslov correction are supplied. The inverse for the algebraic cut resolution is verified conditionally, but that alone does not give a modular functor or TQFT.
