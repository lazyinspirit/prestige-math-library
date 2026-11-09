---
title: The precise source stage bound and its homotopy interpretation
status: draft
research_item: lem-author-0cc80c1b5792-actual-bound
dependency_level: 13
---

PDF p. 4: Motivic graded spectral sequence; PDF p. 9: Eventual filtration vanishing

## Prerequisites

- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [thm-author-0cc80c1b5792-stage-bound-input](item-thm-author-0cc80c1b5792-stage-bound-input)
- [lem-author-0cc80c1b5792-noetherian-scope](item-lem-author-0cc80c1b5792-noetherian-scope)
- [def-stable-spectra-interface](item-def-stable-spectra-interface)


## Statement
Assume the Axiom of Choice. For every $X$ in the preceding full Noetherian equicharacteristic scope, there exists an integer $B(X)\geq0$ such that
$$\pi_qF^r_{\mathrm{mot}}K(X)=0\quad\text{whenever }q<r-B(X).$$
This is a bound on the actual stages, not just on the image filtration or the associated graded groups.

## Facts & Assumptions
**Given:** The Axiom of Choice and the actual source filtration and its full-scope finite-valuative-dimension hypothesis.

**Goal:** Translate the source’s cohomological boundedness convention with the correct sign.

[F1] [lem-author-0cc80c1b5792-noetherian-scope](item-lem-author-0cc80c1b5792-noetherian-scope) checks the source hypothesis. [thm-author-0cc80c1b5792-stage-bound-input](item-thm-author-0cc80c1b5792-stage-bound-input) imports actual stagewise boundedness in the source’s §2.2 convention.

[F2] [def-stable-spectra-interface](item-def-stable-spectra-interface) indexes homotopy so that cohomological degree $m$ corresponds to homotopical degree $-m$.

[F3] The assumed [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) discharges the inherited Choice premises of both suppliers in [F1] for their selected actual filtration and perfect-complex $K$-theory realization. The sign conversion in [F2] requires no additional choice.

## Proof
1.1 Under the Choice premise in [F3], apply [F1] to obtain one finite $B(X)$ with each $F^r$ supported in cohomological degrees $\leq B(X)-r$. The input is the explicit boundedness theorem, not the misprinted numerical homological estimates in its proof. [F1, F3, given]

2.1 If $q<r-B(X)$ then $-q>B(X)-r$, so the degree $-q$ cohomology group vanishes. By [F2] it is $\pi_qF^r$, giving the displayed formula. This is a stagewise conclusion and does not follow merely by knowing anything about total $K_q(X)$. [F1, F2, step 1.1, algebra] ∎
