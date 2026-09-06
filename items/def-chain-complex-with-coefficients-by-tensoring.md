---
id: def-chain-complex-with-coefficients-by-tensoring
title: "A chain complex with coefficients obtained by tensoring"
kind: definition
status: published
origin: pipeline
deps: ["def-tensor-product-total-complex-of-chain-complexes", "def-chain-complex-in-an-abelian-category"]
proof_strategy: direct
sources:
  references:
    - title: "Weibel, An Introduction to Homological Algebra"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-06
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Definition

If $C$ is a chain complex of right $R$-modules and $G$ a left $R$-module, $C\otimes_RG$ denotes the chain complex with $(C\otimes_RG)_n=C_n\otimes_RG$ and differential $d_C\otimes1$.
