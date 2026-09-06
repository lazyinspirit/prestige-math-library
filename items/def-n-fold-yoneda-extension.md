---
id: def-n-fold-yoneda-extension
kind: definition
title: "An n-fold Yoneda extension"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-extension-of-an-object-by-an-object-in-an-abelian-category]
verification:
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

For $n\geq1$, an **$n$-fold extension of $M$ by $N$** is an exact sequence
$$0\longrightarrow N\longrightarrow E_{n-1}\longrightarrow\cdots\longrightarrow E_0\longrightarrow M\longrightarrow0.$$
For $n=1$ this is the preceding notion of a short extension. The left endpoint is always the second Ext variable.
