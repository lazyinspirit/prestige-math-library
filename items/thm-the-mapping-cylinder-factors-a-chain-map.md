---
id: thm-the-mapping-cylinder-factors-a-chain-map
kind: theorem
title: "The mapping cylinder factors a chain map"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-mapping-cylinder-of-a-chain-map, def-chain-homotopy-equivalence, lem-the-mapping-cylinder-differential-squares-to-zero, def-split-short-exact-sequence-in-an-abelian-category, prop-finite-biproducts-of-complexes-are-computed-degreewise, prop-identities-and-composites-of-chain-maps-are-chain-maps]
proof_strategy: direct
verification:
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

For every chain map $f:C_\bullet\to D_\bullet$, the mapping cylinder gives a
factorization
$$C_\bullet\xrightarrow{i}\operatorname{Cyl}(f)_\bullet\xrightarrow{p}D_\bullet$$
with $pi=f$, where $i$ is degreewise split monic and $p$ is a chain-homotopy
equivalence.

## Facts & Assumptions

**Given:** A chain map $f:C_\bullet\to D_\bullet$.

[L1] The maps for the mapping cylinder are $$i(x)=(x,0,0),\qquad p(x,y,z)=f(x)+y,\qquad j(y)=(0,y,0)$$ ([[def-mapping-cylinder-of-a-chain-map]]).

[L2] A chain homotopy equivalence is a chain map admitting a homotopy inverse ([[def-chain-homotopy-equivalence]]).

[L3] Identities and composites of chain maps are chain maps ([[prop-identities-and-composites-of-chain-maps-are-chain-maps]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], $pi=f$ and $pj=1_D$. The map $r_n:\operatorname{Cyl}(f)_n\to C_n$, $r_n(x,y,z)=x$, satisfies $r_ni_n=1_{C_n}$, so $i_n$ is split monic in every degree. [L1, given, algebra]

2.1 Define $H_n:\operatorname{Cyl}(f)_n\to\operatorname{Cyl}(f)_{n+1}$ by $$H_n(x,y,z):=(0,0,x).$$ Using the cylinder differential, one computes $$dH+Hd=1_{\operatorname{Cyl}(f)}-jp.$$ Thus $j$ is a homotopy inverse for $p$, so [L2] shows that $p$ is a chain-homotopy equivalence; [L3] guarantees all composites involved are chain maps. [L2, L3, step 1.1, construct, algebra] ∎
