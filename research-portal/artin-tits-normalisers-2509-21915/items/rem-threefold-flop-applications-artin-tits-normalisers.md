---
id: rem-threefold-flop-applications-artin-tits-normalisers
kind: remark
title: Threefold-flop realization of relative arrangements and derived actions
status: published
domain: mathematics
origin: pipeline
deps:
  - def-author-5f10a31d9e26-complete-local-flop-setting
  - prop-author-5f10a31d9e26-slice-restriction-contract
  - def-relative-cone-artin-tits-normalisers
  - def-relative-complement-artin-tits-normalisers
  - def-geodesic-path-artin-tits-normalisers
  - math:def-axiom-of-choice
  - lem-author-5f10a31d9e26-finite-ade-complement-identification
  - prop-author-5f10a31d9e26-chamber-flop-nccr-dictionary
  - prop-author-5f10a31d9e26-flop-deligne-action-contract
  - def-chambers-walls-artin-tits-normalisers
dependency_roles:
  def-author-5f10a31d9e26-complete-local-flop-setting: mathematical-premise
  prop-author-5f10a31d9e26-slice-restriction-contract: mathematical-premise
  def-relative-cone-artin-tits-normalisers: mathematical-premise
  def-relative-complement-artin-tits-normalisers: mathematical-premise
  def-geodesic-path-artin-tits-normalisers: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  lem-author-5f10a31d9e26-finite-ade-complement-identification: mathematical-premise
  prop-author-5f10a31d9e26-chamber-flop-nccr-dictionary: mathematical-premise
  prop-author-5f10a31d9e26-flop-deligne-action-contract: mathematical-premise
  def-chambers-walls-artin-tits-normalisers: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Normalisers of parabolic subgroups of Artin–Tits groups and Tits cone
        intersections
      url: https://arxiv.org/abs/2509.21915v3
      locator: §1.1.2, second paragraph, PDF p.2
      statement: The article reports that threefold-flop arrangements label minimal
        models/NCCRs, their geodesics give isomorphic flop composites and their
        complex-complement fundamental groups act on derived categories; it
        reports low-rank classifications.
      hypotheses: Contextual threefold-flop setting; the precise independent
        realization used here is the complete-local isolated-cDV smooth
        resolution setting.
      reading_limits: Read the frozen extracted §1.1.2 paragraph and inspected the
        original PDF p.2 image for this proposal. This reference supplies
        article attribution and the bibliographical report only, not an
        independent mathematical premise. The cited Iyama–Wemyss low-rank
        classification has not been read.
proof_strategy: direct
formulation_deps:
  - def-author-5f10a31d9e26-complete-local-flop-setting
  - prop-author-5f10a31d9e26-slice-restriction-contract
  - def-relative-cone-artin-tits-normalisers
  - def-relative-complement-artin-tits-normalisers
  - def-geodesic-path-artin-tits-normalisers
  - math:def-axiom-of-choice
  - lem-author-5f10a31d9e26-finite-ade-complement-identification
  - prop-author-5f10a31d9e26-chamber-flop-nccr-dictionary
  - prop-author-5f10a31d9e26-flop-deligne-action-contract
  - def-chambers-walls-artin-tits-normalisers
argument_deps:
  - def-author-5f10a31d9e26-complete-local-flop-setting
  - prop-author-5f10a31d9e26-slice-restriction-contract
  - def-relative-cone-artin-tits-normalisers
  - def-relative-complement-artin-tits-normalisers
  - def-geodesic-path-artin-tits-normalisers
  - math:def-axiom-of-choice
  - lem-author-5f10a31d9e26-finite-ade-complement-identification
  - prop-author-5f10a31d9e26-chamber-flop-nccr-dictionary
  - prop-author-5f10a31d9e26-flop-deligne-action-contract
  - def-chambers-walls-artin-tits-normalisers
dependency_level: 18
---

## Statement

The relative arrangements discussed by the article occur in the homological minimal model programme for threefold flops. Precisely, work over $\mathbb C$ with the Axiom of Choice in the complete-local isolated cDV smooth flopping setting. Fix its projective crepant resolution $f:X\to\operatorname{Spec}R$, with nonsingular source, nonempty exceptional union of curves, and an isomorphism away from the closed point. Form the generic ADE slice pair $(\Delta,J)$ from this chosen resolution, and use the setting's specified basic Van den Bergh bundle and NCCR. For the finite ADE Coxeter system on $\Delta$, the relative arrangement $(\operatorname{Cone}(J)^\circ,\mathcal H^J)$ identifies with the finite geometric flop arrangement, and its relative complement $\mathcal X_J^{\mathbb C}$ identifies with that arrangement's complexified complement. Its chambers label minimal models and their corresponding NCCR derived categories. Adjacency means sharing a wall and corresponds to flop equivalences with the chamber dictionary's convention. Geodesics, meaning chamber paths of minimum length for their endpoints, give naturally isomorphic composites when their source and target agree. At a chosen chamber and basepoint, $\pi_1(\mathcal X_J^{\mathbb C})$ acts by derived autoequivalences modulo natural isomorphism.

Such intersection arrangements need not be Coxeter arrangements. The original article also reports Iyama--Wemyss low-rank classifications; that bibliographical report is attribution rather than a classification theorem supplied here.

## Statement references

[[def-author-5f10a31d9e26-complete-local-flop-setting]]

[[prop-author-5f10a31d9e26-slice-restriction-contract]]

[[def-relative-cone-artin-tits-normalisers]]

[[def-relative-complement-artin-tits-normalisers]]

[[def-geodesic-path-artin-tits-normalisers]]

[[math:def-axiom-of-choice]]

[[lem-author-5f10a31d9e26-finite-ade-complement-identification]]

[[prop-author-5f10a31d9e26-chamber-flop-nccr-dictionary]]

[[prop-author-5f10a31d9e26-flop-deligne-action-contract]]

[[def-chambers-walls-artin-tits-normalisers]]

## Facts & Assumptions

[F1] The generic-slice coordinate dictionary and the full finite-ADE complement identification are [[lem-author-5f10a31d9e26-finite-ade-complement-identification]]. The relative arrangement and complement have the definitions in [[def-relative-cone-artin-tits-normalisers]] and [[def-relative-complement-artin-tits-normalisers]].

[F2] Chambers carry the geometric and algebraic categories, with the flop/mutation convention, by [[prop-author-5f10a31d9e26-chamber-flop-nccr-dictionary]]. Chamber adjacency uses [[def-chambers-walls-artin-tits-normalisers]].

[F3] The geometric minimum-path relation and the Deligne groupoid action are [[prop-author-5f10a31d9e26-flop-deligne-action-contract]]. The geodesic convention is [[def-geodesic-path-artin-tits-normalisers]].

[F4] The fixed resolution, generic slice pair, bundle choice and category conventions are those of [[def-author-5f10a31d9e26-complete-local-flop-setting]]. Its assumption [[math:def-axiom-of-choice]] is retained for the construction of small category models and the associated choices of representatives.

[F5] The finite geometric arrangement is an ADE restriction arrangement and need not itself be Coxeter, as stated in [[prop-author-5f10a31d9e26-slice-restriction-contract]].

## Justification

**Given:** The complete-local isolated complex cDV smooth flopping setting of [F4], including its Axiom of Choice, fixed projective crepant resolution with nonempty exceptional union of curves, isomorphism away from the closed point, and the associated generic ADE slice and bundle data.

1.1 Specialize the Coxeter data to the finite ADE slice diagram, and use $J$ for precisely the curves contracted in the partial surface resolution of the chosen $f$. The hypotheses and bundle choice in [F4] are those required by the slice contract [F5] and the interfaces [F1]--[F3]. Choice is inherited from [F4] for the small category models and representative choices used in [F2]--[F3]; this composition makes no further choice claim. [F4, F5]

2.1 With the relative arrangement and complement definitions in [F1], the coordinate identification in that fact is an isomorphism of arrangements. It identifies the real domains, the proper restricted hyperplanes, the chamber graph and the complexified complements. [F1, step 1.1]

3.1 Apply the chamber dictionary to obtain the geometric categories and their NCCR presentations. Its adjacency is the shared-wall convention in [F2]. The path-length-preserving graph identification from step 2.1 identifies a relative geodesic, as defined in [F3], with a minimum flop chain; the geometric relation in [F3] gives the stated natural isomorphism of composite functors. [F1, F2, F3, step 1.1, step 2.1]

4.1 At a chosen chamber, choose the basepoint and the Deligne vertex-group isomorphism supplied by [F3]. Transport the resulting fundamental-group action through the complement homeomorphism in [F1] and the category equivalence in [F2]. Composition yields the asserted homomorphism to derived autoequivalences modulo natural isomorphism; no canonical vertex-group identification is required. [F1, F2, F3, step 2.1, step 3.1]

5.1 Finally, the non-Coxeter assertion is the last assertion of the slice contract [F5], applied to the arrangements identified in step 2.1. The low-rank-classification sentence records only the original article's bibliographical report and is not used in any deduction. [F5, step 2.1] ∎



The original p.2 paragraph supplies motivation and attribution, not proof of a prerequisite. The independent imported contracts above establish its concrete finite-ADE threefold realization with explicit hypotheses. They do not assert that arbitrary Coxeter systems are realizable by flopping contractions. The stated realization uses the finite geometric arrangement and assumes smoothness and isolatedness. The low-rank-classification bibliography [24] has not been read for this proposal, and its classification is not used. No original-article defect is inferred from the contextual paragraph's terse formulation.

## Source notes

The original p.2 paragraph supplies motivation and attribution, not proof of a prerequisite. The independent imported contracts above establish its concrete finite-ADE threefold realization with explicit hypotheses. They do not assert that arbitrary Coxeter systems are realizable by flopping contractions. The stated realization uses the finite geometric arrangement and assumes smoothness and isolatedness. The low-rank-classification bibliography [24] has not been read for this proposal, and its classification is not used. No original-article defect is inferred from the contextual paragraph's terse formulation.
