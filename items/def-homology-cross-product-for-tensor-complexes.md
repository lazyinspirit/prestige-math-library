---
id: def-homology-cross-product-for-tensor-complexes
title: "The homology cross product for tensor complexes"
kind: definition
status: draft
origin: pipeline
deps: ["def-tensor-product-total-complex-of-chain-complexes", "def-homology-object-of-a-chain-complex"]
proof_strategy: direct
sources:
  references:
    - title: "Weibel, An Introduction to Homological Algebra"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
---

## Definition

For cycles $x\in C_p$ and $y\in D_q$, define the cross product $[x]\times[y]=[x\otimes y]\in H_{p+q}(C\otimes_RD)$.
