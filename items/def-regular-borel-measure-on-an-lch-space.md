---
id: def-regular-borel-measure-on-an-lch-space
kind: definition
title: "Regular Borel measure on an LCH space"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-radon-measure-on-an-lch-space]
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Donald L. Cohn, Measure Theory, 2nd ed., §7.3"
      url: "https://math.bme.hu/~pitrik/2023_24_2/Measure_Cohn.pdf"
---

## Definition

A **regular Borel measure** here is a Radon measure $\mu$ for which every
Borel $E$ satisfies $\mu(E)=\sup_{K\subseteq E,\ K\text{ compact}}\mu(K)$,
with equality allowed at $+\infty$. Thus regularity strengthens the preceding
open-set formula; it is not being used as a synonym for Radon.
