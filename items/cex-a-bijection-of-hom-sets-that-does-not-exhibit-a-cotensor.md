---
id: cex-a-bijection-of-hom-sets-that-does-not-exhibit-a-cotensor
kind: counterexample
title: "A bijection of hom-sets that does not exhibit a cotensor"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cex-a-bijection-of-underlying-hom-sets-does-not-establish-a-cotensor]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "G. M. Kelly, Basic Concepts of Enriched Category Theory, equation (3.45)"
      url: "https://www.scribd.com/document/891660167/tr10"
---

## Statement refuted

If one finds the expected bijection of ordinary hom-sets for a candidate
cotensor object, then the candidate is a cotensor.

## Facts & Assumptions

**Given:** The one-object Cat-enriched witness from the theorem page.

[L1] There is a candidate object with the right underlying hom-set bijection but the wrong enriched hom-object, so it is not a cotensor ([[cex-a-bijection-of-underlying-hom-sets-does-not-establish-a-cotensor]]).

## Counterexample

**Proof technique:** direct.

1.1 In the witness of [L1], the sole hom-category is the one-object category $E$ with endomorphism monoid $\mathbb N$, and the weight $X$ is the discrete two-object category. The candidate is the sole enriched object. Its underlying hom-set and the underlying set of $[X,E]$ are both singletons, so the required underlying bijection is present and is natural in the only test object. [L1, given]

2.1 The enriched cotensor property would require $E\cong[X,E]\cong E\times E$. This is impossible because the endomorphism monoids $\mathbb N$ and $\mathbb N^2$ are not isomorphic. Thus the candidate has the expected natural underlying hom-set bijection but is not a cotensor. [L1, step 1.1] ∎
