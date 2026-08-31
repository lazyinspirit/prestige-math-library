---
id: fs-the-mapping-cylinder-factorization-is-a-model-category-factorization
kind: false-statement
title: "FALSE: the mapping cylinder by itself supplies model-category data"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cor-every-chain-map-factors-as-a-cofibration-like-inclusion-followed-by-a-homotopy-equivalence]
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
pipeline_run: frontier-26
---

## Statement

The mapping-cylinder factorization by itself specifies a model-category
factorization, without first choosing and verifying a model structure.

## Facts & Assumptions

**Given:** The factorization supplied by the mapping cylinder for an arbitrary
chain map.

[A1] The statement refuted is: the mapping-cylinder factorization by itself
specifies a model-category factorization without a chosen model structure.

[L1] The proven corollary gives only a degreewise split inclusion followed by a
chain-homotopy equivalence
([[cor-every-chain-map-factors-as-a-cofibration-like-inclusion-followed-by-a-homotopy-equivalence]]).

## Refutation

**Proof technique:** direct.

1.1 The result in [L1] does not define a model structure, a class of fibrations, or any lifting axioms. It proves only the chain-level factorization that is actually written. [L1, given, algebra]

2.1 A model-category factorization is defined only relative to specified classes of cofibrations, fibrations, and weak equivalences satisfying the model axioms. Since the data in [A1] omit all of that structure, they do not even determine the predicates needed to call the two maps a model-category factorization. The correct conclusion from this page is exactly [L1]: a degreewise split inclusion followed by a homotopy equivalence. [A1, L1, step 1.1, algebra] ∎
