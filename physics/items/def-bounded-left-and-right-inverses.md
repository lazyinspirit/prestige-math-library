---
id: def-bounded-left-and-right-inverses
kind: definition
title: "Bounded left inverses and bounded right inverses"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-bounded-linear-operator]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-09-01
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations"
      url: "https://math.jhu.edu/~sire/brezis.pdf"
    - title: "Gerald Teschl, Topics in Real and Functional Analysis"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
pipeline_run: frontier-28
---

## Definition

Let $T:X\to Y$ be a bounded linear operator.

- A bounded linear operator $S:Y\to X$ is a **bounded left inverse** for $T$
  when
  $$ST = I_X.$$
- A bounded linear operator $S:Y\to X$ is a **bounded right inverse** for $T$
  when
  $$TS = I_Y.$$

Here $I_X$ and $I_Y$ denote the identity operators on $X$ and $Y$.

## Remarks

- A left inverse forces injectivity, and a right inverse forces surjectivity.
- Neither condition implies the other without extra hypotheses.
