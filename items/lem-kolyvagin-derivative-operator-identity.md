---
id: lem-kolyvagin-derivative-operator-identity
kind: lemma
title: "The Kolyvagin Derivative Operator Telescope Identity"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-kolyvagin-derivative-operator
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Benjamin Howard, The Heegner Point Kolyvagin System"
      url: "https://arxiv.org/pdf/1202.6340"
      locator: '§1.7, printed p. 20: $(\sigma_\ell-1)D_\ell=\ell+1-N_\ell$.'
verification: {}
---

## Statement

For the cyclic group and elements $N_\ell,D_\ell$ defined in the Kolyvagin derivative operator, one has
$$(\sigma_\ell-1)D_\ell=(\ell+1)-N_\ell$$
in $\mathbb Z_p[\Gamma_\ell]$.

## Statement references

[[def-kolyvagin-derivative-operator]]

[Howard, *The Heegner Point Kolyvagin System*, §1.7](https://arxiv.org/pdf/1202.6340)

## Facts & Assumptions

**Given:** A prime $\ell$, the cyclic group $\Gamma_\ell=\langle\sigma_\ell\rangle$ of order $\ell+1$, and the derivative operator $D_\ell$.

[F1] [[def-kolyvagin-derivative-operator]]: $D_\ell=\sum_{i=1}^{\ell}i\sigma_\ell^i$ and $N_\ell=\sum_{i=0}^{\ell}\sigma_\ell^i$.

## Proof

1.1 Expanding the product in the group ring gives $(\sigma_\ell-1)D_\ell=\ell\sigma_\ell^{\ell+1}-\sum_{j=1}^{\ell}\sigma_\ell^j$, because the coefficient of each $\sigma_\ell^j$ for $1\le j\le\ell$ is $(j-1)-j=-1$. [given, F1, algebra]

2.1 Since $\sigma_\ell^{\ell+1}=1$ and $N_\ell=1+\sum_{j=1}^{\ell}\sigma_\ell^j$, the expression in step 1.1 equals $\ell+1-N_\ell$. [F1, step 1.1, algebra] ∎
