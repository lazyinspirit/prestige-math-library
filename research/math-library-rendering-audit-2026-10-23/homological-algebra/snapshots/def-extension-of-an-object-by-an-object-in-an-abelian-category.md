---
id: def-extension-of-an-object-by-an-object-in-an-abelian-category
kind: definition
title: "An extension of an object by an object in an abelian category"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-exact-sequence-and-short-exact-sequence-in-an-abelian-category]
verification:
  audited: 2026-09-06
  precheck: n/a
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
## Definition

An **extension of $M$ by $N$** is a short exact sequence
$$0\longrightarrow N\xrightarrow{i}E\xrightarrow{p}M\longrightarrow0.$$
Thus $N$ is the subobject and $M$ the quotient. This order is fixed throughout: such an extension will represent a class in $\operatorname{Ext}^{1}(M,N)$, not in $\operatorname{Ext}^{1}(N,M)$.
