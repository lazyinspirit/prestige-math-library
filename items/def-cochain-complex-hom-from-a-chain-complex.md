---
id: def-cochain-complex-hom-from-a-chain-complex
title: "The Hom cochain complex of a chain complex"
kind: definition
status: draft
origin: pipeline
deps: ["def-chain-complex-in-an-abelian-category", "def-cochain-complex-in-an-abelian-category"]
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

For a chain complex $C$ of $R$-modules and an $R$-module $G$, define $\operatorname{Hom}_R(C,G)^n=\operatorname{Hom}_R(C_n,G)$ and $\delta^n(f)=f\circ d_{n+1}$.
