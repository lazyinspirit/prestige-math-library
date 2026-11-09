---
id: prop-filtration-eventual-vanishing
kind: proposition
title: Eventual homotopy vanishing of the motivic tower
status: draft
domain: mathematics
deps:
  - lem-adjudicate-5eb16844831b-empty-motivic-stages
  - math:def-axiom-of-choice
  - def-motivic-filtration
  - def-valuative-dimension-and-boundedness
  - lem-author-0cc80c1b5792-valuative-conventions
  - lem-author-0cc80c1b5792-noetherian-scope
  - lem-author-0cc80c1b5792-actual-bound
  - lem-author-0cc80c1b5792-threshold
  - lem-author-0cc80c1b5792-finite-degrees
dependency_roles:
  lem-adjudicate-5eb16844831b-empty-motivic-stages: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  def-motivic-filtration: mathematical-premise
  def-valuative-dimension-and-boundedness: mathematical-premise
  lem-author-0cc80c1b5792-valuative-conventions: mathematical-premise
  lem-author-0cc80c1b5792-noetherian-scope: mathematical-premise
  lem-author-0cc80c1b5792-actual-bound: mathematical-premise
  lem-author-0cc80c1b5792-threshold: mathematical-premise
  lem-author-0cc80c1b5792-finite-degrees: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: Fasel–Yakerson
      url: https://arxiv.org/abs/2610.22679v1
      locator: p. 9, Lemma 4.2 proof
    - title: Elmanto–Morrow
      url: https://arxiv.org/pdf/2309.08463v1
      locator: arXiv v1, header September 15, 2023; internal date September 18, 2023;
        Section 2.2 pp.11–12; Theorems 4.12(1) p.22 and 4.27(1) p.29;
        boundedness paragraphs pp.23 and29
      reading_limits: Read the extracted PDF text at these locators. Import only
        qualitative boundedness under Section 2.2; exclude the erroneous printed
        numerical homological estimates. Trace/descent foundations and optimal
        constants were not reconstructed. Both requested page screenshots failed
        with cache misses; no fresh visual or byte-pinned PDF verification is
        claimed.
dependency_level: 16
---

## Statement
Assume the Axiom of Choice. Let $X$ be a finite-dimensional Noetherian equicharacteristic scheme of Krull dimension $d$, with equicharacteristic meaning that its structure map factors through $\operatorname{Spec}\mathbb Q$ or $\operatorname{Spec}\mathbb F_p$. Use the actual source motivic filtration on that prime-field category; on schemes over the standing field this is exactly the completed local filtration. Then for each fixed integer $q\leq0$ used in the article there is $\ell_0(q)$ such that
$$\pi_qF^{d+\ell}_{\mathrm{mot}}K(X)=0\qquad(\ell\geq\ell_0(q)).$$
Indeed the same eventual vanishing holds in every fixed integer homotopy degree. The threshold may depend on that degree. The finite-valuative-dimension requirement of the source is satisfied because $\dim_vX=\dim X$ for Noetherian schemes. This is vanishing of the actual stage groups, stronger than merely vanishing of their images in $K_q(X)$.

## Facts & Assumptions
**Given:** The Axiom of Choice and the stated Noetherian finite-dimensional scheme and actual compatible source filtration.

**Goal:** Supply the exact eventual-stage assertion used in the article without narrowing the original scheme scope.

[F1] [[lem-author-0cc80c1b5792-valuative-conventions]] and [[lem-author-0cc80c1b5792-noetherian-scope]] match the dimension convention and check the complete source domain.

[F2] [[lem-author-0cc80c1b5792-actual-bound]] supplies the actual stagewise bound; [[lem-author-0cc80c1b5792-threshold]] produces the required thresholds.

[F3] [[lem-author-0cc80c1b5792-finite-degrees]] records the equivalent degreewise property and finite-degree compatibility without asserting an unqualified uniform bound.

[F4] The assumed [[math:def-axiom-of-choice]] discharges the inherited Choice premises of [F1]–[F3] and [[def-motivic-filtration]] when their selected actual source tower and perfect-complex $K$-theory realization are used. It adds no restriction to the geometric scope of $X$.

[F5] [[lem-adjudicate-5eb16844831b-empty-motivic-stages]] proves zero actual stages on the empty scheme without invoking nonempty-scheme suppliers or a descent property of the stages.

## Proof
1.1 If $X$ is empty, [F5] gives all stage vanishings at every integer index, so the eventual assertion holds for any integer anchor without using a source empty-dimension convention. Suppose henceforth that $X$ is nonempty. Under the inherited Choice premise in [F4], by [F1] the scheme is in the source’s qcqs prime-field domain and has finite source valuative dimension. The source boundedness theorem therefore gives $B(X)$ and the stagewise homotopy interpretation of [F2]. When $X$ is over the standing field, these are the same actual stage maps as the completed local definition. [F1, F2, F4, F5, given]

2.1 Apply the threshold lemma of [F2] with anchor $t=d$. It gives the conclusion for each fixed $q$, including all the nonpositive degrees required by the article. The local degreewise statement and finite-set version are [F3]. This proves the full proposition. [F1, F2, F3, step 1.1] ∎
