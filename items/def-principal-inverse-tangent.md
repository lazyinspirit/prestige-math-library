---
id: def-principal-inverse-tangent
kind: definition
title: "The principal inverse tangent $\\arctan:\\mathbb R\\to(-\\pi/2,\\pi/2)$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [lem-tangent-principal-branch-is-bijective, thm-continuous-inverse]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-03
sources:
  scraped: []
  references:
    - title: "NIST Digital Library of Mathematical Functions, §4.23 Inverse Trigonometric Functions"
      url: "https://dlmf.nist.gov/4.23"
pipeline_run: null
---

## Definition

By [[lem-tangent-principal-branch-is-bijective]], tangent restricts to a
continuous strictly increasing bijection

$$\tan:(-\pi/2,\pi/2)\longrightarrow\mathbb R.$$

Its inverse is the **principal inverse tangent**

$$\arctan:\mathbb R\longrightarrow(-\pi/2,\pi/2).$$

Thus $\tan(\arctan y)=y$ for every real $y$, while
$\arctan(\tan x)=x$ precisely for $x$ in the displayed principal interval.
The inverse is continuous and strictly increasing by [[thm-continuous-inverse]].
