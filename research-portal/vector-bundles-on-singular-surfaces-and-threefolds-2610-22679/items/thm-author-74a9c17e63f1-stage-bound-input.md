---
id: thm-author-74a9c17e63f1-stage-bound-input
kind: theorem
title: External actual motivic stagewise boundedness
status: published
domain: mathematics
deps:
  - math:def-axiom-of-choice
  - thm-author-98a750efd0cc-motivic-filtration-input
  - def-motivic-filtration
  - def-valuative-dimension-and-boundedness
  - def-stable-spectra-interface
  - math:def-scheme-over-base
  - math:def-quasi-compact-and-quasi-separated-scheme
dependency_roles:
  math:def-axiom-of-choice: mathematical-premise
  thm-author-98a750efd0cc-motivic-filtration-input: mathematical-premise
  def-motivic-filtration: mathematical-premise
  def-valuative-dimension-and-boundedness: mathematical-premise
  def-stable-spectra-interface: mathematical-premise
  math:def-scheme-over-base: mathematical-premise
  math:def-quasi-compact-and-quasi-separated-scheme: mathematical-premise
provenance:
  statement: ai-altered
  proof: literature-derived
proof_strategy: direct
external_input: true
sources:
  references:
    - title: Elden Elmanto and Matthew Morrow, Motivic cohomology of
        equicharacteristic schemes
      url: https://arxiv.org/pdf/2309.08463v1
      locator: §2.2 pp.11–12; Theorem4.12(1) p.22 and Theorem4.27(1) p.29;
        Theorem1.1(1) p.3
      statement: "For a qcqs scheme over Q or F_p of finite valuative dimension, the
        actual multiplicative motivic filtration is bounded in the explicit §2.2
        sense: there exists an integer B≥0 such that stage r is supported in
        cohomological degrees≤B−r, equivalently homotopical degrees≥r−B. It is
        N-indexed and stage0 is K. Boundedness yields completeness and a bounded
        multiplicative spectral sequence."
      hypotheses: Qcqs over the selected prime field; finite valuative dimension in
        the Jaffard/EHIK convention. Noetherianity is not required for this
        statement. No particular numerical value B=dim_vX+c is imported.
      reading_limits: "Historical reading record retained from the incoming generated
        item: For this repair, freshly read the primary arXiv:2309.08463v1 PDF
        text at Theorem 1.1(1), printed p.3; all of section 2.2, pp.11–12; and
        Theorems 4.12 and 4.27 with their printed proofs, pp.22–23 and 29. These
        passages assert qualitative stagewise boundedness, define its uniform
        linear support convention on integer stages, and supply the bounded
        multiplicative spectral sequence. No new page-image inspection or
        byte-pinned download was performed. Existing findings about numerical
        estimates are retained historically; those estimates are not premises.
        The deep trace/descent arguments, spectral-sequence foundations and
        optimal bounds were not reconstructed. The source theorem is applied to
        the actual tower identified by the declared suppliers under their Choice
        and size conventions; the cohomological-to-homotopical reindexing is
        local. Current maintenance read the assigned body and current supplier
        interfaces; no fresh primary-source or page-image reading, independent
        review or acceptance is claimed."
dependency_level: 14
local_argument_provenance: ai-generated
formulation_deps:
  - math:def-axiom-of-choice
  - thm-author-98a750efd0cc-motivic-filtration-input
  - def-motivic-filtration
  - def-valuative-dimension-and-boundedness
  - def-stable-spectra-interface
  - math:def-scheme-over-base
  - math:def-quasi-compact-and-quasi-separated-scheme
argument_deps:
  - math:def-axiom-of-choice
  - thm-author-98a750efd0cc-motivic-filtration-input
  - def-motivic-filtration
  - def-valuative-dimension-and-boundedness
  - def-stable-spectra-interface
  - math:def-scheme-over-base
  - math:def-quasi-compact-and-quasi-separated-scheme
---

## Statement
Assume the Axiom of Choice and the fixed universe bounds of the selected perfect-K-theory and motivic-filtration constructions. For a qcqs scheme $X$ over a prime field $F=\mathbb Q$ or $\mathbb F_p$ with finite valuative dimension, there exists an integer $B(X)\geq0$ such that the actual EM filtration satisfies
$$F^r_{\mathrm{mot}}K(X)\in\mathrm{Sp}_{\geq r-B(X)}$$
for every integer stage $r$ under the source’s constant extension to $r\leq0$. Equivalently its cohomological support, with $H^m(E)=\pi_{-m}E$, is in degrees $\leq B(X)-r$. The same actual tower is nonnegative, augmented by $F^0=K$, multiplicative, and induces the source’s bounded multiplicative spectral sequence. The value of $B$ need not equal a Krull or valuative dimension.

## Facts & Assumptions
**Given:** The Axiom of Choice, the fixed universe bounds, a qcqs scheme $X$ over the specified prime field with finite valuative dimension, the actual source filtration, and the source valuative convention.

**Goal:** Import the precise stagewise, rather than merely graded or total-$K$, boundedness statement.

[A1] The Axiom of Choice in [[math:def-axiom-of-choice]] is inherited through [[def-motivic-filtration]]. It is used to invoke the selected common-family perfect-$K$-theory realization when applying the source theorem to that local tower.

[F1] EM Theorems 4.12(1) and 4.27(1), in the exact version and at the locators recorded above, assert boundedness for the stated qcqs schemes of finite valuative dimension. Section 2.2 defines this by a common cohomological upper bound $B-r$ on the individual stages for all integer indices.

[F2] [[thm-author-98a750efd0cc-motivic-filtration-input]] supplies the source tower, its multiplication and zeroth-stage equivalence. [[def-motivic-filtration]] identifies the local tower and its constant nonpositive extension. [[def-valuative-dimension-and-boundedness]] fixes the valuative convention.

[F3] [[def-stable-spectra-interface]] supplies the category $\mathrm{Sp}$, integer homotopy groups and their compatible universe conventions. Here $\mathrm{Sp}_{\geq n}$ denotes the full subcategory of spectra $E$ satisfying $\pi_i(E)=0$ for every integer $i<n$. We use $H^m(E):=\pi_{-m}(E)$ as cohomological notation for these groups; support in degrees $\leq t$ means $H^m(E)=0$ for $m>t$. These are notation and vanishing conditions on the supplied homotopy groups, not a new imported comparison theorem.

[F4] A scheme over $F$ is a scheme with structure morphism to $\operatorname{Spec}F$, as in [[math:def-scheme-over-base]]. The abbreviation qcqs means quasi-compact and quasi-separated in the sense of [[math:def-quasi-compact-and-quasi-separated-scheme]]. These are the scheme hypotheses of the imported theorem; no finite-type or Noetherian restriction is added.

## External input
Import [F1] with the full source records and reading limits. This actual bound is additional input beyond the completed existence-only supplier. The printed proof paragraphs contain false homological sign/type inequalities recorded in the assistance findings; those estimates are not used. Only the explicit theorem assertion interpreted by its definition, with some finite $B(X)$, is imported. No deduction of stagewise vanishing from total K-theory vanishing is made.

## Proof

1.1 Under [A1], use the actual tower of [F2], with the scheme hypotheses interpreted as in [F4]. Apply Theorem 4.12(1) in characteristic zero or Theorem 4.27(1) in characteristic $p$, as specified in [F1]. The hypotheses are exactly that $X$ is qcqs over the selected prime field and has finite valuative dimension. Import the qualitative boundedness assertion with its section 2.2 definition, giving a finite integer $B(X)\geq0$ with cohomological support in degrees $\leq B(X)-r$ for every integer $r$, including the constant nonpositive stages. This applies the external theorem without reconstructing its proof. [A1, F1, F2, F4, given]

2.1 By the notation in [F3], since $H^m(E)=\pi_{-m}E$, step 1.1 is equivalent to $\pi_iF^r_{\mathrm{mot}}K(X)=0$ for $i<r-B(X)$, which is the displayed connectivity assertion. The indexing, augmentation and multiplication are the data of [F2]; the bounded multiplicative spectral sequence is included in [F1]. No particular dimension formula for $B(X)$ is claimed, and the erroneous numerical estimates in the printed proofs are not used. [F1, F2, F3, step 1.1] ∎
