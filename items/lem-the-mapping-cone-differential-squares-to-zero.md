---
id: lem-the-mapping-cone-differential-squares-to-zero
kind: lemma
title: "The mapping-cone differential squares to zero"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-mapping-cone-of-a-chain-map, def-chain-map]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
    - title: "Romyar Sharifi, Homological Algebra"
      url: "https://math.ucla.edu/~sharifi/homalg.pdf"
pipeline_run: frontier-26
---

## Statement

For every chain map $f:C_\bullet\to D_\bullet$, the differential of
[[def-mapping-cone-of-a-chain-map]] satisfies
$$d_{n-1}^{\operatorname{Cone}(f)}d_n^{\operatorname{Cone}(f)}=0$$
for every $n$.

## Facts & Assumptions

**Given:** A chain map $f:C_\bullet\to D_\bullet$, an integer $n$, and an
element $(y,x)\in D_n\oplus C_{n-1}$.

[L1] The cone differential is
$$d_n^{\operatorname{Cone}(f)}(y,x)=(d_n^D(y)+f_{n-1}(x),-d_{n-1}^C(x))$$
([[def-mapping-cone-of-a-chain-map]]).

[L2] A chain map satisfies
$$d_{n-1}^D f_{n-1}=f_{n-2}d_{n-1}^C$$
([[def-chain-map]]).

## Proof

**Proof technique:** direct.

1.1 Applying [L1] twice gives $$d_{n-1}^{\operatorname{Cone}(f)}d_n^{\operatorname{Cone}(f)}(y,x)=\bigl(d_{n-1}^Dd_n^D(y)+d_{n-1}^Df_{n-1}(x)-f_{n-2}d_{n-1}^C(x),d_{n-2}^Cd_{n-1}^C(x)\bigr).$$ [L1, given, algebra]

2.1 The diagonal terms vanish because $C_\bullet$ and $D_\bullet$ are chain complexes, and [L2] makes the mixed terms cancel. Therefore the displayed pair is $(0,0)$ for every $(y,x)$, so the cone differential squares to zero. [L2, step 1.1, algebra] ∎
