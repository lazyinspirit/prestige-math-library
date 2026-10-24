---
id: def-split-extension-class
kind: definition
title: "The split extension class"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-extension-of-an-object-by-an-object-in-an-abelian-category, def-split-short-exact-sequence-in-an-abelian-category]
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

The **split extension class** of $(M,N)$ is the equivalence class of
$$0\longrightarrow N\xrightarrow{n\mapsto(n,0)}N\oplus M\xrightarrow{(n,m)\mapsto m}M\longrightarrow0.$$
An extension is called split precisely when it is equivalent to this displayed extension; it is the distinguished class later used as the additive zero.
