---
id: def-von-mangoldt-function
kind: definition
title: "The von Mangoldt function"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-arithmetic-function, def-natural-logarithm, thm-fundamental-theorem-of-arithmetic]
justified_by: []
aliases: []
verification:
  audited: 2026-08-31
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Kiran S. Kedlaya, An Introduction to Analytic Number Theory, Definition 3.9"
      url: "https://kskedlaya.org/ant/chapter-3.html"
    - title: "Tom Sanders, Topics in Analytic Number Theory, Chapter 1"
      url: "https://people.maths.ox.ac.uk/~sanders/tant/notes.pdf"
pipeline_run: null
---

## Definition

The **von Mangoldt function** is the arithmetic function $\Lambda$ defined by

$$
\Lambda(n):=\begin{cases}\log p,& n=p^k\text{ for some prime }p\text{ and some }k\ge1,\\0,& \text{otherwise.}\end{cases}
$$

## Remarks

- The prime $p$ in the first case is unique by
  [[thm-fundamental-theorem-of-arithmetic]], so the definition does not depend
  on a choice.
