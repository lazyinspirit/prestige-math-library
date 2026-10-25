---
id: def-euler-mascheroni-constant
kind: definition
title: "The Euler-Mascheroni constant"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-natural-logarithm]
justified_by: []
verification:
  audited: 2026-08-31
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Tom Sanders, Topics in Analytic Number Theory, Chapter 1"
      url: "https://people.maths.ox.ac.uk/~sanders/tant/notes.pdf"
    - title: "Karl-Dieter Crisman, Number Theory: In Context and Interactive"
      url: "https://math.gordon.edu/ntic/nticoneside.pdf"
pipeline_run: null
---

## Definition

The **Euler-Mascheroni constant** is

$$ \gamma:=\lim_{N\to\infty}\left(\sum_{n=1}^{N}\frac1n-\log N\right), $$

provided the limit exists.

## Remarks

- The next item proves existence and gives the sharper quantitative estimate
  needed later on this page.
