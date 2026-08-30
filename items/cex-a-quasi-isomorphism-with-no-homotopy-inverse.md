---
id: cex-a-quasi-isomorphism-with-no-homotopy-inverse
kind: counterexample
title: "A quasi-isomorphism with no homotopy inverse"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cex-an-acyclic-noncontractible-complex-from-a-nonsplit-extension, def-quasi-isomorphism, thm-a-chain-homotopy-equivalence-is-a-quasi-isomorphism]
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
pipeline_run: frontier-25
---

## Statement refuted

Every quasi-isomorphism is a chain homotopy equivalence.

## Facts & Assumptions

**Given:** The zero map from the acyclic noncontractible complex of [[cex-an-acyclic-noncontractible-complex-from-a-nonsplit-extension]] to the zero complex.

[L1] The source complex is acyclic but not contractible ([[cex-an-acyclic-noncontractible-complex-from-a-nonsplit-extension]]).

[L2] A quasi-isomorphism is a chain map inducing isomorphisms on homology ([[def-quasi-isomorphism]]).

[L3] Every chain homotopy equivalence is a quasi-isomorphism ([[thm-a-chain-homotopy-equivalence-is-a-quasi-isomorphism]]).

## Counterexample

**Proof technique:** direct.

1.1 Because the source and target are both acyclic, the zero map induces isomorphisms on all homology groups. Hence [L2] makes it a quasi-isomorphism. [L1, L2, given, algebra]

2.1 If this map had a homotopy inverse, the source complex would be homotopy equivalent to the zero complex and therefore contractible, contradicting [L1]. So the map is not a chain homotopy equivalence, and the statement refuted is false. This is consistent with [L3], which gives only the forward implication. [L1, L3, step 1.1, algebra] ∎
