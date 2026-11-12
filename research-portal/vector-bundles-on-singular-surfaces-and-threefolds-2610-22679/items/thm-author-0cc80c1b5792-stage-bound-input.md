---
id: thm-author-0cc80c1b5792-stage-bound-input
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
  - prop-tower-exact-couple-interface
  - math:def-quasi-compact-and-quasi-separated-scheme
  - math:def-scheme-over-base
dependency_roles:
  math:def-axiom-of-choice: mathematical-premise
  thm-author-98a750efd0cc-motivic-filtration-input: mathematical-premise
  def-motivic-filtration: mathematical-premise
  def-valuative-dimension-and-boundedness: mathematical-premise
  def-stable-spectra-interface: mathematical-premise
  prop-tower-exact-couple-interface: mathematical-premise
  math:def-quasi-compact-and-quasi-separated-scheme: mathematical-premise
  math:def-scheme-over-base: mathematical-premise
provenance:
  statement: literature-derived
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
      reading_limits: Earlier carriers record reading the same v1 passages. This
        repair reread Theorem1.1(1), all of section2.2, and the statements and
        printed proofs of Theorems4.12 and4.27 in primary arXiv PDF text. The
        qualitative theorem assertions, indexing and boundedness definition are
        imported; their printed numerical homological estimates are excluded, as
        already recorded in the historical findings. No page-image inspection,
        byte-pinned download, reconstruction of trace/descent foundations, cited
        prerequisite proofs or optimal numerical constants is claimed.
dependency_level: 14
local_argument_provenance: ai-altered
formulation_deps:
  - math:def-axiom-of-choice
  - thm-author-98a750efd0cc-motivic-filtration-input
  - def-motivic-filtration
  - def-valuative-dimension-and-boundedness
  - def-stable-spectra-interface
  - prop-tower-exact-couple-interface
  - math:def-quasi-compact-and-quasi-separated-scheme
  - math:def-scheme-over-base
argument_deps:
  - math:def-axiom-of-choice
  - thm-author-98a750efd0cc-motivic-filtration-input
  - def-motivic-filtration
  - def-valuative-dimension-and-boundedness
  - def-stable-spectra-interface
  - prop-tower-exact-couple-interface
  - math:def-quasi-compact-and-quasi-separated-scheme
  - math:def-scheme-over-base
---

## Statement
Assume the Axiom of Choice. For a qcqs scheme $X$ over a prime field $F=\mathbb Q$ or $\mathbb F_p$ with finite valuative dimension, there exists an integer $B(X)\geq0$ such that the actual EM filtration satisfies
$$F^r_{\mathrm{mot}}K(X)\in\mathrm{Sp}_{\geq r-B(X)}$$
for every integer stage $r$ under the source’s constant extension to $r\leq0$. Equivalently its cohomological support, with $H^m(E)=\pi_{-m}E$, is in degrees $\leq B(X)-r$. The same actual tower is nonnegative, augmented by $F^0=K$, multiplicative, and induces the source’s bounded multiplicative spectral sequence. The value of $B$ need not equal a Krull or valuative dimension.

## Facts & Assumptions
**Given:** The Axiom of Choice and the actual source filtration of the completed filtration input and the source valuative convention.

**Goal:** Import the precise stagewise, rather than merely graded or total-K, boundedness statement.

[F1] EM Theorems4.12(1) and4.27(1) explicitly assert boundedness. Section2.2 defines boundedness exactly by a common cohomological upper bound $B-r$ on the individual stages. The same theorem statements assert the bounded multiplicative Atiyah–Hirzebruch spectral sequence for this actual filtration.

[F2] [[def-motivic-filtration]] specifies the actual source filtration, its augmentation and integer extension. The assumed [[math:def-axiom-of-choice]] discharges that definition’s Choice premise when its common-family perfect-complex realization of $K$ and essentially small nonconnective-functor domain are used. [[thm-author-98a750efd0cc-motivic-filtration-input]] supplies the source existence and multiplicativity; [[def-valuative-dimension-and-boundedness]] specifies the dimension convention. This is an inherited assumption of the selected local realization, not an additional geometric restriction on $X$ or a claim of logical necessity for the external theorem.

[F3] [[def-stable-spectra-interface]] supplies spectra and their integer homotopy groups, under its fixed compatible universe and ZFC conventions. Here $\mathrm{Sp}_{\geq c}$ denotes the spectra $E$ for which $\pi_qE=0$ whenever $q<c$, and $H^m(E)$ abbreviates $\pi_{-m}E$; these are inline support conventions.

[F4] [[prop-tower-exact-couple-interface]] constructs the spectral sequence of a coherent augmented decreasing tower. Under its hypotheses that each degree has an isomorphic low-stage augmentation and vanishing high stages, it gives finite stabilization in each bidegree and convergence to the finite image filtration on the homotopy of the augmented spectrum. Its ZFC and compatible size hypotheses are those retained in [F2] and [F3].

[F5] [[math:def-quasi-compact-and-quasi-separated-scheme]] specifies the qcqs condition: the underlying space is quasi-compact and every intersection of two affine opens is quasi-compact. [[math:def-scheme-over-base]] specifies a scheme over $F$ as a scheme with a structure morphism to $\operatorname{Spec}F$. These are the formulation hypotheses used in [F1] and [F2].

## Proof
1.1 Under the assumed Choice premise and compatible size conventions in [F2] and [F3], use [F2] for the selected actual filtration and its prime-field realization. With the scheme hypotheses interpreted by [F5], the hypotheses on $X$ are precisely the qcqs and finite-valuative-dimension hypotheses of the appropriate characteristic case in [F1]. Thus the imported boundedness assertion applies to this tower. [F1, F2, F3, F5, given]

2.1 By the definition of boundedness in [F1], one integer $B(X)\geq0$ bounds every stage in cohomological degrees $\leq B(X)-r$. The convention $H^m(E)=\pi_{-m}E$ of [F3] gives exactly $F^r_{\mathrm{mot}}K(X)\in\mathrm{Sp}_{\geq r-B(X)}$. For each integer $n$, set $L_n=0$ and $U_n=\max\{1,n+B(X)+1\}$. The constant extension and augmentation in [F2] give $\pi_nF^r_{\mathrm{mot}}K(X)\cong\pi_nK(X)$ via the augmentation for $r\leq L_n$. If $r\geq U_n$, then $n<r-B(X)$, so $\pi_nF^r_{\mathrm{mot}}K(X)=0$ by the stage bound. Also $L_n\leq U_n$. The coherent tower therefore satisfies both degreewise hypotheses of [F4], which supplies its spectral sequence, finite stabilization in every bidegree, and convergence to the finite image filtration on $\pi_*K(X)$. The multiplicativity of this source spectral sequence is imported from [F1], together with the actual multiplicative tower of [F2]. These conclusions use the qualitative boundedness assertion, with no numerical value of $B(X)$ inferred from the printed estimates. [F1, F2, F3, F4, step 1.1, algebra] ∎

## External input
Import [F1] with the full source records and reading limits. This actual bound is additional input beyond the completed existence-only supplier. The printed proof paragraphs contain false homological sign/type inequalities recorded in the assistance findings; those estimates are not used. Only the explicit theorem assertion interpreted by its definition, with some finite $B(X)$, is imported. No deduction of stagewise vanishing from total K-theory vanishing is made.

The spectral-sequence construction and finite image-filtration convergence are applied locally through [F4]; the multiplicativity assertion is imported from the explicit theorem statements in [F1].
