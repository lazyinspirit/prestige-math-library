---
id: ex-global-dimension-of-a-field-and-of-the-integers
kind: example
title: "Global dimension of a field and of the integers"
status: draft
origin: pipeline
provenance:
  statement: ai-generated
  proof: ai-altered
deps: [prop-global-dimension-zero-characterises-semisimple-module-categories, thm-the-integers-have-global-dimension-one]
generation:
  role: example
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapters 3–4"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
pipeline_run: frontier-31a
---
## Example

Assuming the Axiom of Choice, every vector space is free, giving global
dimension zero for a field; pair the cyclic-group witness with the
subgroup-freeness argument for global dimension one of Z.

## Facts & Assumptions

**Given:** A field $k$ and the ring $\mathbb Z$, under Choice.

## Verification

**Proof technique:** direct.

1.1 Every $k$-module is a vector space and has a basis, hence is free and projective. Therefore every module has projective dimension zero and $\operatorname{gl.dim}k=0$. [given, construct]

2.1 For every abelian group $A$, a free presentation has free kernel, so $\operatorname{pd}_{\mathbb Z}A\le1$ by [[thm-the-integers-have-global-dimension-one]]. The concrete nonzero group $\operatorname{Ext}^1_{\mathbb Z}(\mathbb Z/2,\mathbb Z)\cong\mathbb Z/2$ supplies a degree-one witness. Hence $\operatorname{gl.dim}\mathbb Z=1$. [step 1.1, algebra] ∎
