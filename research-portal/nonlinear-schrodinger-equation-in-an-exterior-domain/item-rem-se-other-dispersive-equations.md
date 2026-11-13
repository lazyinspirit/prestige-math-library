---
title: Proposed transfer of the smoothing-control mechanism
status: draft
research_item: rem-se-other-dispersive-equations
dependency_level: 17
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
      locator: Frozen v2 PDF, page 21, Section 5.1 (Scope of the results), second
        paragraph, beginning From the methodological point of view.
      statement: The authors describe local smoothing as replacing the observability
        multiplier identity and avoiding an obstacle-boundary term, and as
        supplying compactness and regularity gain for compactness–uniqueness
        without proving any new microlocal propagation result up to the
        boundary, with geometric information supplied by their reference [9].
        They describe the mechanism as using a bounded uncontrolled region and a
        non-trapping obstacle, and propose extending it to other dispersive
        equations in exterior domains admitting local smoothing.
      hypotheses: Attribution to the authors’ discussion of a non-trapping exterior
        obstacle with bounded uncontrolled region. The extension is a proposed
        direction conditional on a suitable local smoothing effect, not a proved
        general observability or controllability theorem.
      reading_limits: Checked the frozen v2 PDF page 21, Section 5.1, second paragraph
        against the extracted text. Used solely to identify what the article
        says and proposes; no independent smoothing, compactness,
        unique-continuation, observability or other-equation theorem is imported
        from the article.
---

PDF p. 21: ` §5.1, second paragraph `

## Prerequisites

- [prop-se-2-2-homogeneous](item-prop-se-2-2-homogeneous)
- [lem-se-3-2](item-lem-se-3-2)
- [prop-se-3-5](item-prop-se-3-5)
- [lem-se-4-5](item-lem-se-4-5)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)


## Statement

The article describes its local smoothing method as replacing a boundary multiplier identity in the observability argument, thereby avoiding a boundary term at the obstacle. It also describes smoothing as supplying compactness and a gain of regularity for the compactness–uniqueness argument without proving a new microlocal propagation result up to the boundary, with the geometric information contained in the estimates cited as [9]. Here local smoothing means a gain of spatial regularity after localization in space and integration in time; observability means an estimate controlling the initial-data norm by a norm of the observed evolution. Compactness–uniqueness combines a compact remainder with a uniqueness statement to remove that remainder.

The article proposes that the mechanism should apply to other dispersive equations in exterior domains when the uncontrolled region is bounded, the obstacle is non-trapping, and a suitable local smoothing effect is available. This is a proposed direction, not a theorem that these conditions alone imply observability or control for an unspecified equation.

The present Schrödinger results illustrate the components under their stated hypotheses: homogeneous local smoothing, compactness of a localized remainder, free observability, and regularity gain for an invisible trajectory. For these illustrations assume the Axiom of Choice; the precise geometry, scale, observation and trajectory hypotheses are those in the respective results.

## Statement references

[prop-se-2-2-homogeneous](item-prop-se-2-2-homogeneous)

[lem-se-3-2](item-lem-se-3-2)

[prop-se-3-5](item-prop-se-3-5)

[lem-se-4-5](item-lem-se-4-5)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

## Facts & Assumptions

[F1] On the smooth connected non-trapping exterior, [prop-se-2-2-homogeneous](item-prop-se-2-2-homogeneous) gives a localized half-derivative gain in a time-integrated norm for the free Dirichlet Schrödinger evolution, in the range and under the assumptions stated there.

[F2] Under its stated hypotheses, [lem-se-3-2](item-lem-se-3-2) makes the specified localized remainder tend to zero on weakly convergent differences of initial data. The free observability estimate of [prop-se-3-5](item-prop-se-3-5) controls the initial spectral-scale norm by the time-integrated observation for its stated range and cutoff.

[F3] Under its geometry and trajectory hypotheses, [lem-se-4-5](item-lem-se-4-5) raises an invisible adjoint solution from the indicated negative spectral orders to the energy space. Invisible means that its specified observation vanishes throughout the time interval; the result is conditional on the stated equation and regularity assumptions.

[F4] These illustrations are stated under the Axiom of Choice [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice), as required by their supplied formulations. They do not establish the corresponding ingredients for another equation.

## Source notes

The frozen article, PDF page 21, §5.1, is the attribution for the methodological description and proposed extension. The cited Schrödinger items supply the separately stated illustrations; the proposal itself is not used as a premise in their proofs.
