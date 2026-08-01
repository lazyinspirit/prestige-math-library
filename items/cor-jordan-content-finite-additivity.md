---
id: cor-jordan-content-finite-additivity
kind: corollary
title: "Jordan content is finitely additive when the overlap has content zero"
status: published
origin: session
deps: [thm-jordan-content-and-indicator-integrability, thm-multidimensional-integral-properties, def-jordan-inner-and-outer-content, def-null-and-content-zero-in-rn, lem-finite-sum-laws]
justified_by: []
aliases: []
landmark: false
proof_strategy: induction
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis, Jordan Measurable Sets"
      url: "https://www.jirka.org/ra/html/sec_jordansets.html"
    - title: "J. Lebl, Basic Analysis, Outer Measure and Null Sets"
      url: "https://www.jirka.org/ra/html/sec_outermeasure.html"
pipeline_run: null
---

## Statement

If bounded Jordan measurable sets $E,F$ have $E\cap F$ of content zero, then
$$\operatorname{cont}(E\cup F)=\operatorname{cont}(E)+\operatorname{cont}(F).$$
In particular Jordan content is additive on disjoint finite families.

## Facts & Assumptions

**Given:** $E,F$ as stated.

[L1] Indicator integrals equal Jordan content ([[thm-jordan-content-and-indicator-integrability]]).

[L2] The integral is linear ([[thm-multidimensional-integral-properties]]).

[L3] Content zero means that for every positive $\varepsilon$ there is a finite cube cover of total volume below $\varepsilon$ ([[def-null-and-content-zero-in-rn]]); Jordan inner and outer content are the inscribed supremum and covering infimum ([[def-jordan-inner-and-outer-content]]).

## Proof

**Proof technique:** induction.

1.1 Pointwise, $1_{E\cup F}=1_E+1_F-1_{E\cap F}$. Cube-cover content zero makes the Jordan outer content of $E\cap F$ at most every positive $\varepsilon$, hence zero; its nonnegative inner content is no larger, so it too is zero. Thus $E\cap F$ is Jordan measurable with content zero, and [L1] gives $\int1_{E\cap F}=0$.   [L1, L3, given]

1.2 The finite-family formula is immediate for a family of length one. [base]

1.3 Assume it holds for a disjoint family of length $r$. [ih]

2.1 Integrate and apply [L2] to obtain the two-set formula. [step 1.1, L2, given]

3.1 Apply the two-set formula to the union of that family and the next set. Their intersection is empty, so this adds the next content and proves the formula at length $r+1$. [step 2.1, step 1.3]

4.1 Hence Jordan content is additive on every finite disjoint family. [step 1.2, step 3.1, discharge-induction] ∎
