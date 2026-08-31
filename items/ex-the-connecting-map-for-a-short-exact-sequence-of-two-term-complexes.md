---
id: ex-the-connecting-map-for-a-short-exact-sequence-of-two-term-complexes
kind: example
title: "The connecting map for a short exact sequence of two-term complexes"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [prop-elementwise-formula-for-the-connecting-map-in-module-categories]
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
pipeline_run: frontier-27
---

## Example

Fix a nonzero integer $m$. Consider the chain map $\times m:\mathbb Z[0]\to
\mathbb Z[0]$ and its canonical short exact cone sequence
$$0\to \mathbb Z[0]\to \operatorname{Cone}(\times m)\to \mathbb Z[1]\to0.$$
The middle term is a two-term complex, and its connecting morphism
$$\partial_1:H_1(\mathbb Z[1])\to H_0(\mathbb Z[0])$$
is multiplication by $m$.

## Facts & Assumptions

**Given:** A nonzero integer $m$.

[L1] In module categories, the connecting map is computed by lifting a cycle and taking the boundary of the lift ([[prop-elementwise-formula-for-the-connecting-map-in-module-categories]]).

## Verification

**Proof technique:** direct.

1.1 A class in $H_1(\mathbb Z[1])$ is represented by an integer $x\in\mathbb Z=C_0$. In the cone sequence, $(0,x)$ is a lift of that cycle to degree $1$ of $\operatorname{Cone}(\times m)$. [L1, given, construct]

2.1 The cone differential sends $(0,x)$ to $(mx,0)$. Therefore [L1] gives $$\partial_1([x])=[mx]\in H_0(\mathbb Z[0])=\mathbb Z.$$ So the connecting morphism is multiplication by $m$. [L1, step 1.1, algebra] ∎

