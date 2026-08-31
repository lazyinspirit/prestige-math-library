---
id: ex-relative-homology-of-a-map-between-stalk-complexes
kind: example
title: "Relative homology of a map between stalk complexes"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-relative-homology-of-a-chain-map, ex-the-cone-of-multiplication-by-m-on-the-integers, thm-abelian-groups-form-an-abelian-category]
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

## Example

For the stalk-complex map $\times m:\mathbb Z[0]\to\mathbb Z[0]$ with $m\neq0$,
the relative homology objects are
$$H_0(\mathbb Z,\mathbb Z;\times m)\cong \mathbb Z/m\mathbb Z,\qquad H_n(\mathbb Z,\mathbb Z;\times m)=0\ \text{for }n\neq0.$$

## Facts & Assumptions

**Given:** A nonzero integer $m$.

[L1] Relative homology is the homology of the mapping cone
([[def-relative-homology-of-a-chain-map]]).

[L2] The cone of multiplication by $m$ on $\mathbb Z[0]$ has homology
$H_0\cong\mathbb Z/m\mathbb Z$ and $H_n=0$ for $n\neq0$
([[ex-the-cone-of-multiplication-by-m-on-the-integers]]).

## Verification

**Proof technique:** direct.

1.1 By [L1], $$H_n(\mathbb Z,\mathbb Z;\times m)=H_n(\operatorname{Cone}(\times m)).$$ [L1, given, algebra]

2.1 Substituting the explicit cone homology from [L2] gives the displayed relative homology groups. [L2, step 1.1, algebra] ∎
