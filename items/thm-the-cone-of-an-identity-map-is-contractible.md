---
id: thm-the-cone-of-an-identity-map-is-contractible
kind: theorem
title: "The cone of an identity map is contractible"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-mapping-cone-of-a-chain-map, def-contractible-complex, def-chain-homotopy]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
pipeline_run: frontier-26
---

## Statement

For every chain complex $C_\bullet$, the mapping cone
$$\operatorname{Cone}(1_C)$$
is contractible.

## Facts & Assumptions

**Given:** A chain complex $C_\bullet$.

[L1] A complex is contractible exactly when its identity map is null-homotopic
([[def-contractible-complex]]).

[L2] The cone differential for $1_C$ is
$$d_n(y,x)=(d_n^C(y)+x,-d_{n-1}^C(x))$$
([[def-mapping-cone-of-a-chain-map]]).

[L3] A chain homotopy is a degree-one family whose commutator with the
differential is the difference of two chain maps ([[def-chain-homotopy]]).

## Proof

**Proof technique:** direct.

1.1 Define $h_n:\operatorname{Cone}(1_C)_n\to\operatorname{Cone}(1_C)_{n+1}$ by $$h_n(y,x):=(0,y).$$ Using [L2], one computes $$d_{n+1}h_n(y,x)=(y,-d_n^C(y)),\qquad h_{n-1}d_n(y,x)=(0,d_n^C(y)+x).$$ [L2, given, construct, algebra]

2.1 Adding the two displayed terms yields $$d_{n+1}h_n+h_{n-1}d_n=1_{\operatorname{Cone}(1_C)}.$$ Thus [L3] makes $h$ a null-homotopy of the identity, and then [L1] shows that $\operatorname{Cone}(1_C)$ is contractible. [L1, L3, step 1.1, algebra] ∎
