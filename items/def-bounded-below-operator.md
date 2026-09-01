---
id: def-bounded-below-operator
kind: definition
title: "A bounded operator that is bounded below"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-bounded-linear-operator]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
    - title: "Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations"
      url: "https://math.jhu.edu/~sire/brezis.pdf"
pipeline_run: frontier-28
---

## Definition

Let $T:X\to Y$ be a bounded linear operator. It is **bounded below** when there
is a real constant $c>0$ such that

$$\|Tx\| \ge c\|x\| \qquad \text{for all } x \in X.$$

## Remarks

- The inequality forces injectivity, because $\|Tx\|=0$ then implies
  $\|x\|=0$.
- A bounded-below operator need not be surjective.
