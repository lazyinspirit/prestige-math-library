---
id: prop-the-cone-construction-commutes-with-shift-up-to-the-canonical-sign-isomorphism
kind: proposition
title: "The cone construction commutes with shift up to the canonical sign isomorphism"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-mapping-cone-of-a-chain-map, def-shift-of-a-chain-complex, def-shift-of-a-chain-map-and-chain-homotopy, prop-identities-and-composites-of-chain-maps-are-chain-maps]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Romyar Sharifi, Homological Algebra"
      url: "https://math.ucla.edu/~sharifi/homalg.pdf"
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
pipeline_run: frontier-26
---

## Statement

For every chain map $f:C_\bullet\to D_\bullet$, there is a canonical chain
isomorphism
$$\sigma_f:\operatorname{Cone}(f[1])\xrightarrow{\sim}\operatorname{Cone}(f)[1].$$

## Facts & Assumptions

**Given:** A chain map $f:C_\bullet\to D_\bullet$.

[L1] The shift satisfies $C[1]_n=C_{n-1}$ and $d^{C[1]}=-d^C$
([[def-shift-of-a-chain-complex]]).

[L2] The shifted map satisfies $f[1]_n=f_{n-1}$
([[def-shift-of-a-chain-map-and-chain-homotopy]]).

[L3] The cone differential is
$$d(y,x)=(d(y)+f(x),-d(x))$$
([[def-mapping-cone-of-a-chain-map]]).

## Proof

**Proof technique:** direct.

1.1 The two complexes have the same degree-$n$ object $$\operatorname{Cone}(f[1])_n=D_{n-1}\oplus C_{n-2}=\operatorname{Cone}(f)[1]_n.$$ Define $$\sigma_{f,n}(y,x):=(-y,x).$$ [L1, L2, L3, given, construct]

2.1 By [L1], [L2], and [L3], the differential on $\operatorname{Cone}(f[1])$ is $$(-d^D(y)+f(x),d^C(x)),$$ while the shifted differential on $\operatorname{Cone}(f)[1]$ is $$(-d^D(y)-f(x),d^C(x)).$$ The sign in $\sigma_f$ changes the first component exactly enough to intertwine these two formulas, so $\sigma_f$ is a chain isomorphism. [L1, L2, L3, step 1.1, algebra] ∎
