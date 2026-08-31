---
id: def-invertible-fractional-ideal
kind: definition
title: "Invertible fractional ideals"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-product-and-colon-of-fractional-ideals]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "J. P. May, Notes on Dedekind Rings"
      url: "https://www.math.uchicago.edu/~may/MISC/Dedekind.pdf"
    - title: "Mircea Mustata, Introduction to Commutative Algebra, §8.5"
      url: "https://websites.umich.edu/~mmustata/CAnotes.pdf"
pipeline_run: null
---

## Definition

A fractional ideal $I$ of a domain $R$ is **invertible** if
$$
I(R:I)=R.
$$
Equivalently, $I$ is invertible when there exists a fractional ideal $J$ with
$IJ=R$, in which case necessarily $J=(R:I)$.
