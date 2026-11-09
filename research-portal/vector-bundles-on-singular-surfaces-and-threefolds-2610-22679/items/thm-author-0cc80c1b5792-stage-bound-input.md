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
dependency_roles:
  math:def-axiom-of-choice: mathematical-premise
  thm-author-98a750efd0cc-motivic-filtration-input: mathematical-premise
  def-motivic-filtration: mathematical-premise
  def-valuative-dimension-and-boundedness: mathematical-premise
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
      reading_limits: The prior carrier records reading §2.2, Theorems4.12 and4.27
        with their printed proofs, and Theorem1.1(1). This adjudication reread
        those passages in the retrieved arXiv:2309.08463v1 PDF text (header 15
        September2023; internal date 18 September2023), including §2.2 in full
        and both theorem statements and proofs. Fresh page-image retrieval
        failed; no fresh visual verification or byte-pinned download is claimed.
        The printed homological estimates fail the stage-zero test and are not
        imported. Trace-method/descent foundations, cited prerequisite proofs
        and optimal numerical constants were not reconstructed.
dependency_level: 12
local_argument_provenance: ai-altered
---

## Statement
Assume the Axiom of Choice. For a qcqs scheme $X$ over a prime field $F=\mathbb Q$ or $\mathbb F_p$ with finite valuative dimension, there exists an integer $B(X)\geq0$ such that the actual EM filtration satisfies
$$F^r_{\mathrm{mot}}K(X)\in\mathrm{Sp}_{\geq r-B(X)}$$
for every integer stage $r$ under the source’s constant extension to $r\leq0$. Equivalently its cohomological support, with $H^m(E)=\pi_{-m}E$, is in degrees $\leq B(X)-r$. The same actual tower is nonnegative, augmented by $F^0=K$, multiplicative, and induces the source’s bounded multiplicative spectral sequence. The value of $B$ need not equal a Krull or valuative dimension.

## Facts & Assumptions
**Given:** The Axiom of Choice and the actual source filtration of the completed filtration input and the source valuative convention.

**Goal:** Import the precise stagewise, rather than merely graded or total-K, boundedness statement.

[F1] EM Theorems4.12(1) and4.27(1) explicitly assert boundedness. Section2.2 defines boundedness exactly by a common cohomological upper bound $B-r$ on the individual stages.

[F2] [[def-motivic-filtration]] specifies the actual source filtration, its augmentation and integer extension. The assumed [[math:def-axiom-of-choice]] discharges that definition’s Choice premise when its common-family perfect-complex realization of $K$ and essentially small nonconnective-functor domain are used. [[thm-author-98a750efd0cc-motivic-filtration-input]] supplies the source existence and multiplicativity; [[def-valuative-dimension-and-boundedness]] specifies the dimension convention. This is an inherited assumption of the selected local realization, not an additional geometric restriction on $X$ or a claim of logical necessity for the external theorem.

## Proof
1.1 Under the assumed Choice premise, use [F2] for the selected actual filtration and its prime-field realization. The hypotheses on $X$ are precisely the qcqs and finite-valuative-dimension hypotheses of the appropriate characteristic case in [F1]. Thus the imported boundedness assertion applies to this tower. [F1, F2, given]

2.1 By the definition of boundedness in [F1], one integer $B(X)\geq0$ bounds every stage in cohomological degrees $\leq B(X)-r$. With $H^m(E)=\pi_{-m}E$, this is exactly the displayed homotopical bound. The source convention already includes all integer stages, with the nonpositive stages equivalent to stage zero as in [F2]. The augmentation, multiplicativity and bounded spectral sequence are those of [F1] and [F2]; none uses the erroneous printed numerical estimates. [F1, F2, step 1.1, algebra] ∎

## External input
Import [F1] with the full source records and reading limits. This actual bound is additional input beyond the completed existence-only supplier. The printed proof paragraphs contain false homological sign/type inequalities recorded in the assistance findings; those estimates are not used. Only the explicit theorem assertion interpreted by its definition, with some finite $B(X)$, is imported. No deduction of stagewise vanishing from total K-theory vanishing is made.
