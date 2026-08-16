---
id: def-normal-closure-of-an-algebraic-extension
kind: definition
title: "The normal closure of an algebraic extension inside a fixed algebraic closure"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-normal-algebraic-extension, def-algebraic-closure, prop-nonempty-intersections-of-normal-subextensions-are-normal]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 9.15: Normal extensions"
      url: "https://stacks.math.columbia.edu/tag/09HL"
    - title: "J. S. Milne, Fields and Galois Theory, Chapter 6"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
pipeline_run: null
---

## Definition

Let $F\subseteq K\subseteq\Omega$, where $K/F$ is algebraic and $\Omega/F$ is
a fixed algebraic closure ([[def-algebraic-closure]]). The **normal closure of
$K/F$ in $\Omega$** is

$$N_{\Omega}(K/F):=\bigcap\{E:K\subseteq E\subseteq\Omega\text{ and }E/F\text{ is normal}\}.$$

The family being intersected is nonempty: $\Omega/F$ is normal because every
minimal polynomial over $F$ splits in the algebraically closed field $\Omega$
([[def-normal-algebraic-extension]]). Its intersection is normal by
[[prop-nonempty-intersections-of-normal-subextensions-are-normal]], so the
definition produces the smallest normal intermediate extension containing $K$.
