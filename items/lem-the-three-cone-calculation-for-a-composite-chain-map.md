---
id: lem-the-three-cone-calculation-for-a-composite-chain-map
kind: lemma
title: "The three-cone calculation for a composite chain map"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-mapping-cone-of-a-chain-map, thm-a-morphism-of-chain-maps-induces-a-chain-map-of-cones, prop-cones-preserve-chain-homotopy-equivalences-of-arrows, def-chain-homotopy-equivalence, thm-the-cone-of-an-identity-map-is-contractible]
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 13.9: Cones and termwise split sequences"
      url: "https://stacks.math.columbia.edu/tag/014D"
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
pipeline_run: frontier-26
---

## Statement

For composable chain maps
$$C_\bullet\xrightarrow{f}D_\bullet\xrightarrow{g}E_\bullet,$$
let
$$\alpha:\operatorname{Cone}(f)\to\operatorname{Cone}(gf),\qquad \beta:\operatorname{Cone}(gf)\to\operatorname{Cone}(g)$$
be the cone maps induced by the strict squares $(1_C,g)$ and $(f,1_E)$. Then
$\operatorname{Cone}(\alpha)$ is chain-isomorphic to
$$\operatorname{Cone}(g)\oplus\operatorname{Cone}(1_{C[1]}),$$
hence chain-homotopy equivalent to $\operatorname{Cone}(g)$.

## Facts & Assumptions

**Given:** Composable chain maps $C_\bullet\xrightarrow{f}D_\bullet\xrightarrow{g}E_\bullet$.

[L1] A strict square of chain maps induces a chain map of cones
([[thm-a-morphism-of-chain-maps-induces-a-chain-map-of-cones]]).

[L2] The cone differential is
$$d(y,x)=(d(y)+f(x),-d(x))$$
with the relevant map in the upper-right corner
([[def-mapping-cone-of-a-chain-map]]).

[L3] The cone of an identity map is contractible
([[thm-the-cone-of-an-identity-map-is-contractible]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the map $\alpha$ is $$\alpha_n(d,c)=(g_n(d),c).$$ Writing out the cone differential from [L2] shows that $\operatorname{Cone}(\alpha)_n=E_n\oplus C_{n-1}\oplus D_{n-1}\oplus C_{n-2}$. The change of coordinates $$\Theta_n(e,c,d,c'):=((e,d+f_{n-1}(c)),(c,c'))$$ is a degreewise isomorphism from $\operatorname{Cone}(\alpha)_n$ to $\operatorname{Cone}(g)_n\oplus\operatorname{Cone}(1_{C[1]})_n$. [L1, L2, given, construct, algebra]

2.1 A direct substitution into the differential formulas shows that $\Theta$ is a chain map. Therefore $\operatorname{Cone}(\alpha)$ is chain-isomorphic to $\operatorname{Cone}(g)\oplus\operatorname{Cone}(1_{C[1]})$. The second summand is contractible by [L3], so the direct sum is chain-homotopy equivalent to $\operatorname{Cone}(g)$. [L3, step 1.1, algebra] ∎
