---
id: fs-every-quasi-isomorphism-is-a-chain-homotopy-equivalence
kind: false-statement
title: "FALSE: every quasi-isomorphism is a chain homotopy equivalence"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-quasi-isomorphism, thm-a-chain-homotopy-equivalence-is-a-quasi-isomorphism, prop-zero-homology-does-not-make-an-object-zero-in-the-homotopy-category]
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

## Statement

Every quasi-isomorphism is a chain homotopy equivalence.

## Facts & Assumptions

**Given:** The acyclic noncontractible complex $$0\to\mathbb Z\xrightarrow{2}\mathbb Z\xrightarrow{\bmod 2}\mathbb Z/2\to0,$$ and the zero map from it to the zero complex.

[A1] The statement refuted is: every quasi-isomorphism is a chain homotopy equivalence.

[L1] A quasi-isomorphism is a chain map inducing isomorphisms on all homology objects ([[def-quasi-isomorphism]]).

[L2] Every chain homotopy equivalence is a quasi-isomorphism ([[thm-a-chain-homotopy-equivalence-is-a-quasi-isomorphism]]).

[L3] A complex is zero in the homotopy category exactly when it is contractible ([[prop-zero-homology-does-not-make-an-object-zero-in-the-homotopy-category]]).

## Refutation

**Proof technique:** direct.

1.1 Both the source complex and the zero complex have zero homology in every degree, so the zero map between them is a quasi-isomorphism by [L1]. [L1, given, algebra]

2.1 If that map were a chain homotopy equivalence, its source would be isomorphic to the zero object in the homotopy category. By [L3], the source would then be contractible, contrary to the explicit nonsplit example. Hence [A1] is false. This does not contradict [L2], which gives only the forward implication. [A1, L2, L3, step 1.1, algebra] ∎
