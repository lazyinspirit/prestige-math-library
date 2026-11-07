---
id: def-bipartite-heegner-euler-system
kind: definition
title: "Bipartite Heegner Euler System"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 28
deps:
  - def-classical-heegner-point-kolyvagin-data
  - def-kolyvagin-system-for-a-selmer-triple
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "A. Burungale, F. Castella, and C.-H. Kim, A Proof of Perrin-Riou’s Heegner Point Main Conjecture"
      url: "https://arxiv.org/pdf/1908.09512"
      locator: "§§2–3: Howard's bipartite Euler systems and reciprocity laws."
verification: {}
---

## Definition

Let $\mathcal X$ be a bipartite graph with vertex sets $V^+$ and $V^-$ and edge set $E(\mathcal X)\subseteq V^+\times V^-$. Assign an $R$-module $M_v$ to each vertex $v$ and an $R$-module $M_e$ to each edge $e$, together with linear maps $\psi_{v,e}:M_v\to M_e$ for its two endpoints. A **bipartite Euler system** on these data is a family $z=(z_v)_{v\in V^+\cup V^-}$ with $z_v\in M_v$ such that $\psi_{v,e}(z_v)=\psi_{w,e}(z_w)$ for every edge $e=(v,w)$. For a Heegner bipartite system, the positive-vertex modules are Selmer stalks containing Heegner Kolyvagin classes, the negative-vertex modules are the associated residual or Iwasawa-algebra coefficient modules, and the maps are the local reciprocity maps; the equalities are the explicit reciprocity laws. The definition makes no existence claim.

## Definition references

[[def-classical-heegner-point-kolyvagin-data]]

[[def-kolyvagin-system-for-a-selmer-triple]]

[Burungale–Castella–Kim, *A Proof of Perrin-Riou’s Heegner Point Main Conjecture*, §§2–3](https://arxiv.org/pdf/1908.09512)

## Facts & Assumptions

**Given:** A bipartite graph, its vertex and edge modules, and the endpoint maps specified in the Definition.

[F1] [[def-kolyvagin-system-for-a-selmer-triple]]: the positive-vertex Kolyvagin classes are required to lie in the specified Selmer stalks and satisfy their local edge relations.

[A1] The graph, modules, and reciprocity maps are input data; the definition asserts no arithmetic construction or nonvanishing.

## Verification

1.1 Each edge equation is an equality in a specified module $M_e$, so it is well-typed because both endpoint maps have codomain $M_e$. [given, A1, algebra]

2.1 Families satisfying these equations are closed under coordinatewise addition and scalar multiplication, since each $\psi_{v,e}$ is linear. They therefore form a well-defined module of compatible sections, which is the stated bipartite Euler-system module. [given, step 1.1, algebra] ∎
