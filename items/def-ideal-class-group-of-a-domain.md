---
id: def-ideal-class-group-of-a-domain
kind: definition
title: "The ideal class group"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-unique-factorisation-of-ideals-in-dedekind-domains]
justified_by: [lem-ideal-class-group-well-defined]
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Mircea Mustata, Introduction to Commutative Algebra, §8.5"
      url: "https://websites.umich.edu/~mmustata/CAnotes.pdf"
    - title: "J. S. Milne, A Primer of Commutative Algebra, §20"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
pipeline_run: null
---

## Definition

Let $R$ be a Dedekind domain. Its **ideal class group** $\operatorname{Cl}(R)$
is the quotient of the multiplicative group of nonzero fractional ideals by the
subgroup of nonzero principal fractional ideals.

Multiplication of fractional ideals is intended to descend to the quotient; the
next lemma proves that it does.
