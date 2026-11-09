---
title: External localization of one marked scheme and tensor family
status: draft
research_item: thm-author-c5bc2838d897-kcoherent-enhanced-localization-input
dependency_level: 0
---

PDF p. 3: Nonconnective algebraic K theory: enhanced prerequisite interface

## Prerequisites

- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

## Statement
Assume AC and suitable universes. Hinich's localization L:Cat_∞^+→Cat_∞ is a functor with a natural localization map. For a marked cocartesian fibration p:(E,V)→(B,W) satisfying Definition 2.1.1, its localization is a cocartesian fibration L(E,V)→L(B,W), with fibers the localized original fibers (Proposition 2.1.4). The four hypotheses are: p is cocartesian; cocartesian lifts of W are marked; all fiber transports preserve markings; and transports over W induce equivalences of localized fibers. Markings are saturated. For a symmetric monoidal cocartesian fibration over Fin_*, if every active transport preserves its componentwise marking, Proposition 3.2.2 gives a symmetric monoidal localization, with the full universal property for symmetric monoidal functors.

The nerve of an ordinary Grothendieck opfibration is a cocartesian fibration (dual of HTT Remark 2.4.2.2). Cocartesian fibrations classify coherent diagrams, as in Hinich §2.1.5–2.1.6/HTT straightening. These facts apply to a single family over a product base, and thus retain coherence in all base variables simultaneously.

For the fiber comparison, retain these formal inputs: the symmetric monoidal relative localization theorem of BGT Proposition 3.5; HA Proposition 1.3.4.5 identifying chain-homotopy localization with the dg nerve under finite-chain-interval closure; HA Proposition 1.3.2.10 and its following paragraph giving stability for full shift/cone-closed complex subcategories; and Drew Theorem 1.3 identifying stable Verdier quotients with localization at the maps whose cones lie in the subcategory.

## Source contract
**Given:** Marked cocartesian families satisfying all four explicit conditions, tensor-stable markings for the monoidal assertion, and the interval/stability conditions for the separate fiber comparison. Use larger universes for the categories of schemes and sheaf complexes.

**Goal:** Import a genuine coherent family-localization theorem, rather than only pointwise localization statements.

[F1] Hinich Definition 2.1.1 and Proposition 2.1.4, with its entire proof, supply the family theorem and its compatibility with the functorial localization map of §1.1.

[F2] Hinich Definition 3.2.1/Proposition 3.2.2 supply the symmetric monoidal universal property; HTT Remark 2.4.2.2 and family classification supply the ordinary-opfibration and coherent-diagram bridge.

[F3] The precise BGT, HA and Drew results in the frontmatter supply the formal fiber comparisons; no field-dependent dg monoidal nerve theorem is used.

## External input
Import [F1]–[F3] with the stated hypotheses and reading limits. In the application, the base is Sch_qcqs^op×Fin_* marked only by equivalences; fiber markings are componentwise quasi-isomorphisms. The local helper constructs its total Grothendieck category before localization and checks every marked-cocartesian and active-tensor hypothesis. The result is one diagram in the scheme and tensor variables at once. It identifies the supplied fiber enhancements; it neither assumes nor claims a natural comparison with a previously specified pullback/tensor diagram on those fibers, because the supplied definition specifies no such diagram.
