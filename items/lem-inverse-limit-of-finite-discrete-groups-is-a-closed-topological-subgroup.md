---
id: lem-inverse-limit-of-finite-discrete-groups-is-a-closed-topological-subgroup
kind: lemma
title: "The inverse limit of finite discrete groups is a closed topological subgroup of the full product"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-compatible-tuples-form-a-subgroup, def-inverse-limit-topology-for-finite-discrete-groups, def-topological-group]
proof_strategy: "direct"
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Brian Osserman, Math 6112 notes on inverse limits and profinite groups"
      url: "https://people.math.osu.edu/cogdell.1/6112-Osserman-www.pdf"
    - title: "H. W. Lenstra, Profinite groups and Galois groups"
      url: "https://websites.math.leidenuniv.nl/algebra/Lenstra-Profinite.pdf"
---

## Statement

The inverse limit of finite discrete groups is a closed topological subgroup of
the ambient product.

## Facts & Assumptions

**Given:** An inverse system of finite discrete groups and its inverse limit
$L$ with the subspace topology.

[L1] The compatible tuples form a subgroup of the ambient product group
([[lem-compatible-tuples-form-a-subgroup]]).

[F1] A topological group is a group with continuous multiplication and inverse
([[def-topological-group]]).

## Proof

**Proof technique:** direct.

1.1 For each $i\le j$, define $$\Psi_{ij}:\prod_k G_k\to G_i\times G_i, \qquad \Psi_{ij}((g_k))=(g_i,\varphi_{ij}(g_j)).$$ Because every factor is discrete, $G_i\times G_i$ is discrete, and the diagonal $\Delta_i=\{(x,x):x\in G_i\}$ is closed. A tuple is compatible at the pair $(i,j)$ exactly when it lies in $\Psi_{ij}^{-1}(\Delta_i)$. Therefore $$L=\bigcap_{i\le j}\Psi_{ij}^{-1}(\Delta_i)$$ is closed in the ambient product. [given, construct]

2.1 By [L1], $L$ is a subgroup of the product group. The product group operations are continuous coordinatewise, and restricting continuous maps to a subspace preserves continuity. Hence $L$ is a topological subgroup in the sense of [F1]. [L1, F1, step 1.1]

3.1 So $L$ is a closed topological subgroup of the product of the finite discrete groups. [step 1.1, step 2.1] ∎
