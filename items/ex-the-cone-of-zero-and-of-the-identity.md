---
id: ex-the-cone-of-zero-and-of-the-identity
kind: example
title: "The cone of zero and of the identity"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [prop-the-cone-of-the-zero-map-is-the-direct-sum-with-a-shift, thm-the-cone-of-an-identity-map-is-contractible, thm-abelian-groups-form-an-abelian-category]
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

For any chain complex $C_\bullet$,
$$\operatorname{Cone}(0:C_\bullet\to C_\bullet)\cong C_\bullet\oplus C[1]_\bullet,$$
whereas $\operatorname{Cone}(1_C)$ is contractible.

## Facts & Assumptions

**Given:** A chain complex $C_\bullet$.

[L1] The cone of the zero map is the direct sum with a shift
([[prop-the-cone-of-the-zero-map-is-the-direct-sum-with-a-shift]]).

[L2] The cone of an identity map is contractible
([[thm-the-cone-of-an-identity-map-is-contractible]]).

## Verification

**Proof technique:** direct.

1.1 Apply [L1] to the zero map $0:C_\bullet\to C_\bullet$. This gives the first displayed isomorphism. [L1, given, algebra]

2.1 Apply [L2] to the identity map $1_C:C_\bullet\to C_\bullet$. This gives the second displayed conclusion. [L2, step 1.1, algebra] ∎
