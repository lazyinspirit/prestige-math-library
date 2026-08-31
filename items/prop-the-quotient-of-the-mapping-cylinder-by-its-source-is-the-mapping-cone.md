---
id: prop-the-quotient-of-the-mapping-cylinder-by-its-source-is-the-mapping-cone
kind: proposition
title: "The quotient of the mapping cylinder by its source is the mapping cone"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-mapping-cylinder-of-a-chain-map, def-mapping-cone-of-a-chain-map, lem-the-cokernel-of-a-chain-map-is-computed-degreewise, prop-finite-biproducts-of-complexes-are-computed-degreewise]
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
pipeline_run: frontier-26
---

## Statement

Let $i:C_\bullet\to\operatorname{Cyl}(f)_\bullet$ be the source inclusion of the
mapping cylinder. Then the cokernel complex of $i$ is canonically isomorphic to
$\operatorname{Cone}(f)$.

## Facts & Assumptions

**Given:** A chain map $f:C_\bullet\to D_\bullet$.

[L1] The source inclusion is $i_n(x)=(x,0,0)$ and $\operatorname{Cyl}(f)_n=C_n\oplus D_n\oplus C_{n-1}$ ([[def-mapping-cylinder-of-a-chain-map]]).

[L2] Cokernels of chain maps are computed degreewise ([[lem-the-cokernel-of-a-chain-map-is-computed-degreewise]]).

[L3] The cone differential is $$d_n^{\operatorname{Cone}(f)}(y,z)=(d_n^D(y)+f_{n-1}(z),-d_{n-1}^C(z))$$ ([[def-mapping-cone-of-a-chain-map]]).

## Proof

**Proof technique:** direct.

1.1 In degree $n$, [L1] identifies $i_n$ with the inclusion of the first summand. Therefore [L2] identifies $\operatorname{coker}(i_n)$ with $D_n\oplus C_{n-1}$ via $$\theta_n([(x,y,z)]):=(y,z).$$ Under this identification the induced differential is $$(y,z)\longmapsto(d_n^D(y)-f_{n-1}(z),-d_{n-1}^C(z)),$$ which is the cone differential for the chain map $-f$. [L1, L2, given, construct, algebra]

2.1 The sign map $$\sigma_n:D_n\oplus C_{n-1}\to D_n\oplus C_{n-1},\qquad \sigma_n(y,z):=(-y,z)$$ conjugates the differential from step 1.1 to the cone differential of $f$ in [L3]. Hence the cokernel complex is canonically chain-isomorphic to $\operatorname{Cone}(f)$. [L3, step 1.1, algebra] ∎
