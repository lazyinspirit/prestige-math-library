---
id: ex-lp-banach-space-dictionary
kind: example
title: "Dictionary of the classical $L^p$ and $\\ell^p$ Banach spaces"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [rem-lp-spaces-are-banach-spaces,
       ex-finite-sequences-c00-with-standard-norms]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Theo Buhler and Dietmar A. Salamon, Functional Analysis"
      url: "https://www.scribd.com/document/978968885/Functional-Analysis-1st-Edition-Theo-Bhler-Dietmar-A-Salamon"
    - title: "Gerald Teschl, Topics in Real and Functional Analysis"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
pipeline_run: frontier-27
---

## Example

The standard Banach-space dictionary is:

- $L^p(\mu)$ is Banach for every $1\le p\le\infty$;
- $\ell^p$ is the counting-measure instance of $L^p$;
- $c_{00}$ is dense in $\ell^p$ for $1\le p<\infty$ and dense in $c_0$ for the
  supremum norm.

## Facts & Assumptions

**Given:** The classical spaces listed above.

[L1] The classical $L^p$ spaces are Banach ([[rem-lp-spaces-are-banach-spaces]]).

[L2] The example of $c_{00}$ records its dense embeddings into $c_0$ and $\ell^p$ ([[ex-finite-sequences-c00-with-standard-norms]]).

## Verification

**Proof technique:** direct.

1.1 The first two bullets are exactly the content of [L1]. [L1]

1.2 The third bullet is exactly the content of [L2]. [L2]

2.1 Combining steps 1.1 and 1.2 gives the stated dictionary. [step 1.1, step 1.2] ∎
