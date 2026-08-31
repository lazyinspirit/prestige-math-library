---
id: prop-isomorphic-chain-maps-have-isomorphic-cones
kind: proposition
title: "Isomorphic chain maps have isomorphic cones"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-mapping-cone-of-a-chain-map, def-chain-map, prop-identities-and-composites-of-chain-maps-are-chain-maps]
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
    - title: "The Stacks Project, Section 13.9: Cones and termwise split sequences"
      url: "https://stacks.math.columbia.edu/tag/014D"
pipeline_run: frontier-26
---

## Statement

Suppose
$$\begin{array}{ccc} C_\bullet & \xrightarrow{f} & D_\bullet \\ \downarrow^{u}_{\sim} & & \downarrow^{v}_{\sim} \\ C'_\bullet & \xrightarrow{f'} & D'_\bullet \end{array}$$
is a strictly commuting square of chain maps with vertical chain isomorphisms.
Then $\operatorname{Cone}(f)$ and $\operatorname{Cone}(f')$ are isomorphic as
chain complexes.

## Facts & Assumptions

**Given:** A commuting square as displayed in the statement.

[L1] The cone differential is
$$d(y,x)=(d^D(y)+f(x),-d^C(x))$$
([[def-mapping-cone-of-a-chain-map]]).

[L2] A chain map commutes with differentials ([[def-chain-map]]).

[L3] Identities and composites of chain maps are chain maps
([[prop-identities-and-composites-of-chain-maps-are-chain-maps]]).

## Proof

**Proof technique:** direct.

1.1 Define $\Phi_n:\operatorname{Cone}(f)_n\to\operatorname{Cone}(f')_n$ by $$\Phi_n(y,x):=(v_n(y),u_{n-1}(x)).$$ Using the commutative square together with [L1] and [L2], one gets $$d^{\operatorname{Cone}(f')}\Phi=\Phi\,d^{\operatorname{Cone}(f)},$$ so $\Phi$ is a chain map. [L1, L2, given, construct, algebra]

2.1 Because $u$ and $v$ are chain isomorphisms, their inverses are again chain maps by [L3], and the same block-diagonal formula with $u^{-1}$ and $v^{-1}$ defines the inverse chain map to $\Phi$. Hence $\Phi$ is a chain isomorphism. [L3, step 1.1, algebra] ∎
