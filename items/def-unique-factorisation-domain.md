---
id: def-unique-factorisation-domain
kind: definition
title: "Unique factorisation domain"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-divisibility-and-associates-in-a-domain, def-irreducible-and-prime-elements-in-a-domain]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-03
sources:
  scraped: []
  references:
    - title: "Sharifi, Abstract Algebra, Advanced Ring Theory"
      url: "https://math.ucla.edu/~sharifi/algebra.pdf"
pipeline_run: null
---

## Definition

An integral domain $R$ is a **unique factorisation domain** (UFD) when every
nonzero nonunit is a finite product of irreducible elements, and whenever

$$a=p_1\cdots p_m=q_1\cdots q_n$$

are products of irreducibles, then $m=n$ and, after a permutation, each $p_i$
is associate to the corresponding $q_i$. Thus uniqueness is only up to order
and multiplication of factors by units.
