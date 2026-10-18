---
id: def-it-general-rate-distortion-function
kind: definition
title: "General single-letter information rate-distortion function"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps:
  - def-axiom-of-choice
  - def-it-general-mutual-information
  - def-it-single-letter-distortion-and-block-distortion
  - def-standard-borel-space
justified_by: []
aliases: []
axiom_use: "AC is inherited from the general KL-based mutual-information definition."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Robert M. Gray, Source Coding Theory, first edition"
      url: "https://ee.stanford.edu/~gray/sourcecodingtheory_rmg.pdf"
      locator: "Chapter 4, §§4.5–4.6, printed pp. 97–102; continuous-alphabet rate-distortion scope and Gaussian squared-error formula."
    - title: "Robert M. Gray, Entropy and Information Theory, corrected first edition"
      url: "https://ee.stanford.edu/~gray/it.pdf"
      locator: "Chapter 5, §5.5, printed pp. 113–121: standard-alphabet mutual information as joint-law relative entropy."
---

## Definition

Assume AC. Let $\mathcal X,\widehat{\mathcal X}$ be standard-Borel spaces, let $P_X$ be a probability law on $\mathcal X$, and let $d:\mathcal X\times\widehat{\mathcal X}\to[0,+\infty]$ be measurable. A feasible joint law, or coupling, is a probability measure $\pi$ on $\mathcal X\times\widehat{\mathcal X}$ whose $\mathcal X$-marginal is $P_X$. For each distortion budget $D\ge0$, define

$$R_{\mathrm{std}}(D):=\inf_{\substack{\pi_{\mathcal X}=P_X\\ \int d\,d\pi\le D}}\frac{D(\pi\|P_X\otimes\pi_{\widehat{\mathcal X}})}{\ln2}=\inf_{\substack{\pi_{\mathcal X}=P_X\\ \int d\,d\pi\le D}}\frac{I_{\mathrm{nat}}(X;\widehat X)}{\ln2}.$$

The infimum of an empty feasible set is $+\infty$. Values are in bits. This definition makes no general existence or attainment claim and supplies no operational coding theorem for arbitrary standard-Borel alphabets.
