---
id: thm-a-morphism-of-chain-maps-induces-a-chain-map-of-cones
kind: theorem
title: "A morphism of chain maps induces a chain map of cones"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-morphism-of-chain-maps, def-mapping-cone-of-a-chain-map]
proof_strategy: direct
verification:
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

Let $(a,b):f\to g$ be a morphism of chain maps. Then the degreewise formula
$$\operatorname{Cone}(a,b)_n(y,x):=(b_n(y),a_{n-1}(x))$$
defines a chain map
$$\operatorname{Cone}(f)\to\operatorname{Cone}(g).$$

## Facts & Assumptions

**Given:** A morphism of chain maps
$(a,b):f:C_\bullet\to D_\bullet\to g:C'_\bullet\to D'_\bullet$.

[L1] A morphism of chain maps is a commuting square $bf=ga$
([[def-morphism-of-chain-maps]]).

[L2] The cone differential is
$$d(y,x)=(d^D(y)+f(x),-d^C(x))$$
([[def-mapping-cone-of-a-chain-map]]).

## Proof

**Proof technique:** direct.

1.1 Define $\Phi_n(y,x):=(b_n(y),a_{n-1}(x))$. Using [L2], the composite $d^{\operatorname{Cone}(g)}\Phi$ has first component $$d^{D'}b(y)+g\,a(x).$$ [L2, given, construct, algebra]

2.1 Since $a$ and $b$ are chain maps and [L1] gives $ga=bf$, the same first component is $b(d^D(y)+f(x))$, while the second component is $-a(d^C(x))$. Hence $d^{\operatorname{Cone}(g)}\Phi=\Phi d^{\operatorname{Cone}(f)}$, so $\Phi$ is a chain map. [L1, step 1.1, algebra] ∎
