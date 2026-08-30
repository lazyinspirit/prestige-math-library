---
id: def-quotient-complex
kind: definition
title: "Quotient complex"
status: published
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-subcomplex,
       lem-the-differential-descends-to-a-quotient-complex]
  audited: 2026-08-30
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
pipeline_run: frontier-24
---

## Definition

Let $S_\bullet\hookrightarrow C_\bullet$ be a subcomplex. The **quotient
complex** $C/S$ is the chain complex whose degree-$n$ term is the quotient
object $C_n/S_n$ and whose differential is the descended morphism
$$\bar d_n:C_n/S_n\to C_{n-1}/S_{n-1}$$
constructed in
[[lem-the-differential-descends-to-a-quotient-complex]].
