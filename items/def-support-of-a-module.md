---
id: def-support-of-a-module
kind: definition
title: "Support of a module"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-localisation-at-a-prime-ideal, def-left-and-right-modules]
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., (13.26)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "The Stacks Project, Section 10.40: Support"
      url: "https://stacks.math.columbia.edu/tag/080S"
pipeline_run: null
---

## Definition

Let $R$ be a commutative ring and let $M$ be a left $R$-module. The **support** of $M$ is
$$
\operatorname{Supp}_R(M):=\{\mathfrak p : M_{\mathfrak p}\neq 0\},
$$
where $\mathfrak p$ ranges over the prime ideals of $R$ and $M_{\mathfrak p}$ denotes localisation at the multiplicative set $R \setminus \mathfrak p$ ([[def-localisation-at-a-prime-ideal]]).

On this page, before the separate spectrum page is built, $\operatorname{Supp}_R(M)$ is read simply as a set of prime ideals.
