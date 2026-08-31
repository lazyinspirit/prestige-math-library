---
id: ex-a-quasi-isomorphism-detected-by-an-acyclic-cone
kind: example
title: "A quasi-isomorphism detected by an acyclic cone"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-a-chain-map-is-a-quasi-isomorphism-exactly-when-its-cone-is-acyclic, ex-the-cone-of-zero-and-of-the-identity]
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
pipeline_run: frontier-26
---

## Example

For every chain complex $C_\bullet$, the identity map $1_C:C_\bullet\to C_\bullet$
is a quasi-isomorphism because its cone is contractible, hence acyclic.

## Facts & Assumptions

**Given:** A chain complex $C_\bullet$.

[L1] The cone of an identity map is contractible
([[ex-the-cone-of-zero-and-of-the-identity]]).

[L2] A chain map is a quasi-isomorphism exactly when its cone is acyclic
([[thm-a-chain-map-is-a-quasi-isomorphism-exactly-when-its-cone-is-acyclic]]).

## Verification

**Proof technique:** direct.

1.1 By [L1], $\operatorname{Cone}(1_C)$ is contractible, so in particular it is acyclic. [L1, given, algebra]

2.1 Applying [L2] to the identity map gives that $1_C$ is a quasi-isomorphism. [L2, step 1.1, algebra] ∎
