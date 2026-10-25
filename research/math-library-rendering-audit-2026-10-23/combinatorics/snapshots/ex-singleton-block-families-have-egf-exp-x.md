---
id: ex-singleton-block-families-have-egf-exp-x
kind: example
title: "Set partitions whose blocks are all singletons have EGF $e^x$"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: not-supplied
generation:
  role: example
deps: [thm-labelled-symbolic-method-rules-for-exponential-generating-functions]
aliases: []
landmark: false
verification:
  audited: 2026-08-27
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Philippe Flajolet and Robert Sedgewick, Analytic Combinatorics — Symbolic Combinatorics"
      url: "https://algo.inria.fr/flajolet/Publications/FlSe02.pdf"
pipeline_run: null
---

## Example

There is exactly one partition of $[n]$ into singleton blocks, namely

$$\{\{1\},\{2\},\dots,\{n\}\}.$$

So the counting sequence is constantly $1$, and the corresponding exponential
generating function is

$$\sum_{n\geq0}\frac{x^n}{n!}=e^x.$$
