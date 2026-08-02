---
id: def-annihilator-and-torsion-of-a-module
kind: definition
title: "Annihilators, torsion elements and the torsion subset of a module"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-left-and-right-modules, def-left-right-and-two-sided-ideal, def-zero-divisor-and-integral-domain]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "McGerty, Algebra II: Rings and Modules, Section 3"
      url: "https://people.maths.ox.ac.uk/mcgerty/Algebra%20II.pdf"
pipeline_run: null
---

## Definition

For a left $R$-module $M$ and $m\in M$, the **annihilator of $m$** is

$$\operatorname{Ann}_R(m):=\{r\in R:rm=0_M\},$$

and the **annihilator of $M$** is

$$\operatorname{Ann}_R(M):=\{r\in R:rm=0_M\text{ for every }m\in M\}.$$

If $R$ is an integral domain, an element $m\in M$ is a **torsion element** when
$rm=0_M$ for some nonzero $r\in R$. The set of all torsion elements is denoted
$\operatorname{Tor}(M)$; $M$ is **torsion-free** when
$\operatorname{Tor}(M)=\{0_M\}$.
