---
id: lem-author-0cc80c1b5792-actual-bound
kind: lemma
title: The precise source stage bound and its homotopy interpretation
status: published
domain: mathematics
deps:
  - math:def-axiom-of-choice
  - thm-author-0cc80c1b5792-stage-bound-input
  - lem-author-0cc80c1b5792-noetherian-scope
  - def-stable-spectra-interface
  - math:def-grothendieck-universe-closure-convention
dependency_roles:
  math:def-axiom-of-choice: mathematical-premise
  thm-author-0cc80c1b5792-stage-bound-input: mathematical-premise
  lem-author-0cc80c1b5792-noetherian-scope: mathematical-premise
  def-stable-spectra-interface: mathematical-premise
  math:def-grothendieck-universe-closure-convention: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 15
formulation_deps:
  - math:def-axiom-of-choice
  - lem-author-0cc80c1b5792-noetherian-scope
  - def-stable-spectra-interface
  - math:def-grothendieck-universe-closure-convention
argument_deps:
  - math:def-axiom-of-choice
  - thm-author-0cc80c1b5792-stage-bound-input
  - lem-author-0cc80c1b5792-noetherian-scope
  - def-stable-spectra-interface
  - math:def-grothendieck-universe-closure-convention
---

## Statement
Assume the Axiom of Choice. Fix compatible nested Grothendieck universes $\mathcal U\in\mathcal V\in\mathcal W$ with $\omega\in\mathcal U$, containing the field, ring and scheme data in $\mathcal U$, and retain the compatible enlargements and smallness conventions of the Noetherian-scope, spectral and perfect-complex constructions. Their existence is a separate size assumption. Let $X$ be a nonempty finite-dimensional Noetherian scheme whose structure map $X\to\operatorname{Spec}\mathbb Z$ factors through $\operatorname{Spec}\mathbb Q$ or $\operatorname{Spec}\mathbb F_p$ for one prime $p$. Use the actual integer-indexed prime-field motivic tower supplied by the Noetherian-scope lemma, with its constant extension at nonpositive indices. Then there exists an integer $B(X)\geq0$ such that
$$\pi_qF^r_{\mathrm{mot}}K(X)=0\quad\text{whenever }q<r-B(X).$$
This is a bound on the actual stages, not just on the image filtration or the associated graded groups.

## Facts & Assumptions
**Given:** The Axiom of Choice, the fixed compatible size hypotheses, the specified nonempty scheme $X$ and its actual source filtration, with the full-scope finite-valuative-dimension verification of [F1].

**Goal:** Translate the source’s cohomological boundedness convention with the correct sign.

[F1] [[lem-author-0cc80c1b5792-noetherian-scope]] checks the source hypothesis. [[thm-author-0cc80c1b5792-stage-bound-input]] imports actual stagewise boundedness in the source’s §2.2 convention.

[F2] [[def-stable-spectra-interface]] defines the spectrum homotopy groups $\pi_q(E)$. The cohomological convention $H^m(E)=\pi_{-m}(E)$ is supplied by [[thm-author-0cc80c1b5792-stage-bound-input]], so cohomological degree $m$ corresponds to homotopical degree $-m$.

[F3] The assumed [[math:def-axiom-of-choice]] and the fixed compatible universe and smallness premises discharge the inherited hypotheses of both suppliers in [F1] for their selected actual filtration and perfect-complex $K$-theory realization. The universes satisfy [[math:def-grothendieck-universe-closure-convention]] and have exactly the bounds and compatible enlargements specified by the Noetherian-scope supplier. Their existence is assumed separately from Choice. The sign conversion in [F2] requires no additional choice.

## Proof
1.1 Under the Choice and size premises in [F3], apply [F1] to obtain one finite $B(X)$ with each $F^r$ supported in cohomological degrees $\leq B(X)-r$. The input is the explicit boundedness theorem, not the misprinted numerical homological estimates in its proof. [F1, F3, given]

2.1 If $q<r-B(X)$ then $-q>B(X)-r$, so the degree $-q$ cohomology group vanishes. By [F2] it is $\pi_qF^r$, giving the displayed formula. This is a stagewise conclusion and does not follow merely by knowing anything about total $K_q(X)$. [F1, F2, step 1.1, algebra] ∎
