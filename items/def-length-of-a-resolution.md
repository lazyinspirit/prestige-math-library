---
id: def-length-of-a-resolution
kind: definition
title: "The length of a resolution"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-projective-resolution-in-an-abelian-category, def-injective-resolution-in-an-abelian-category]
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra"
      url: "https://djvu.online/file/WrPctxOTQCdBj"
    - title: "Romyar Sharifi, Homological Algebra"
      url: "https://math.ucla.edu/~sharifi/homalg.pdf"
pipeline_run: frontier-28
---
## Definition

A projective resolution $$\cdots \to P_2\to P_1\to P_0\to A\to0$$ has **length at most $n$** when $P_i=0$ for every $i>n$. Its **length** is the least such $n$ when one exists, and is infinite otherwise.

Dually, an injective resolution $$0\to A\to I^0\to I^1\to I^2\to\cdots$$ has **length at most $n$** when $I^i=0$ for every $i>n$, with length defined in the same way.
