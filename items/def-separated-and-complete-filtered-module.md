---
id: def-separated-and-complete-filtered-module
kind: definition
title: "Separated and complete filtered modules"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-filtration-and-adic-filtration, def-inverse-system-and-inverse-limit-of-modules]
aliases: []
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., §22.1"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "The Stacks Project, Definition 10.96.2"
      url: "https://stacks.math.columbia.edu/tag/00M9"
pipeline_run: null
---

## Definition

Let $R$ be a commutative ring and let
$$M=F^0M \supseteq F^1M \supseteq F^2M \supseteq \cdots$$
be a decreasing filtration on an $R$-module $M$.

The module is **separated** for this filtration if
$$\bigcap_{n \ge 0} F^nM = 0.$$

The module is **complete** for this filtration if it is separated and the
canonical map
$$\kappa_M \colon M \longrightarrow \varprojlim_{n\ge1} M/F^nM, \qquad m \longmapsto (m \bmod F^nM)_{n \ge 1},$$
is an isomorphism.

For the $I$-adic filtration $F^nM:=I^nM$, this says that $M$ is
**$I$-adically separated** when $\bigcap_{n \ge 0} I^nM=0$, and
**$I$-adically complete** when it is separated and
$$M \xrightarrow{\sim} \varprojlim_{n\ge1} M/I^nM.$$
