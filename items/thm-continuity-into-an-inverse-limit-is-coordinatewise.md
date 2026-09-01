---
id: thm-continuity-into-an-inverse-limit-is-coordinatewise
kind: theorem
title: "A map into an inverse limit is continuous exactly when all coordinate composites are continuous"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-coordinate-projections-from-an-inverse-limit, def-inverse-limit-topology-for-finite-discrete-groups, def-continuous-map-top]
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

A map into an inverse limit of finite discrete groups is continuous if and only
if all of its coordinate composites are continuous.

## Facts & Assumptions

**Given:** A map $f:Y\to L=\varprojlim G_i$, where $L$ has its inverse-limit
topology.

[L1] The coordinate projections $\pi_i:L\to G_i$ are defined on the inverse
limit ([[def-coordinate-projections-from-an-inverse-limit]]).

[F1] The inverse-limit topology is the subspace topology from the product, and a
map into a product is continuous exactly when every coordinate composite is
continuous ([[def-inverse-limit-topology-for-finite-discrete-groups]],
[[def-continuous-map-top]]).

## Proof

**Proof technique:** direct.

1.1 If $f$ is continuous, then every composite $\pi_i\circ f$ is continuous because it is the composite of two continuous maps, namely $f$ and the coordinate map [L1]. [L1, F1, given]

1.2 Conversely, suppose every $\pi_i\circ f$ is continuous. Regard $f$ as a map into the ambient product. By the product-topology clause of [F1], those coordinatewise continuities imply that the product-valued map is continuous. Since the image already lies in the subspace $L$, the same map is continuous as a map into $L$. [F1, L1, given]

2.1 Steps 1.1 and 1.2 prove the equivalence. [step 1.1, step 1.2] ∎
