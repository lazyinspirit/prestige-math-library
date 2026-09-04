---
id: ex-the-zig-zag-identities-checked-in-finite-dimensional-vector-spaces
kind: example
title: "The zig-zag identities in finite-dimensional vector spaces"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-the-zig-zag-identities, thm-finite-dimensional-vector-spaces-are-rigid]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Michael Muger, Tensor Categories: A Selective Guided Tour, Section 1.5"
      url: "https://arxiv.org/pdf/0804.3587"
---

## Example

For a finite-dimensional vector space $V$ with basis $(v_i)$ and dual basis
$(v_i^*)$, the two zig-zag identities become ordinary Kronecker-delta
computations.

## Facts & Assumptions

**Given:** A finite-dimensional vector space $V$ with basis $(v_i)$ and dual
basis $(v_i^*)$.

[L1] The standard duality data on $V$ and $V^*$ exist
([[thm-finite-dimensional-vector-spaces-are-rigid]]).

## Verification

**Proof technique:** direct.

1.1 By [[thm-finite-dimensional-vector-spaces-are-rigid]], the categorical dual data are $V^*$, the evaluation pairing, and the coevaluation $1\mapsto\sum_i v_i\otimes v_i^*$. [given, L1]

2.1 On a basis vector $v_j$, the first zig-zag gives $\sum_i v_i^*(v_j)v_i=\sum_i\delta_{ij}v_i=v_j$. On a dual basis vector $v_j^*$, the second zig-zag gives $\sum_i v_j^*(v_i)v_i^*=\sum_i\delta_{ji}v_i^*=v_j^*$. [step 1.1, algebra]

3.1 Hence the abstract zig-zag identities of [[def-the-zig-zag-identities]] reduce here to the familiar basis-and-dual-basis calculation. [step 2.1] ∎
