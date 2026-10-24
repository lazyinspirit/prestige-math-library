---
id: def-van-der-waerden-number
kind: definition
title: "The van der Waerden number $W(k,c)$ as the least interval length forcing a monochromatic $k$-term arithmetic progression"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-van-der-waerden-with-monochromatic-difference, thm-well-ordering-principle, def-natural-numbers]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "I. B. Leader, Ramsey Theory, Section 1.2"
      url: "https://www.dpmms.cam.ac.uk/~par31/notes/ramsey.pdf"
pipeline_run: null
---

## Definition

For positive naturals $k,c$ ([[def-natural-numbers]]), the **van der Waerden number** $W(k,c)$ is the least positive $N$ such that every $c$-colouring of any interval of $N$ consecutive integers contains a monochromatic $k$-term arithmetic progression with positive common difference.

Such an $N$ exists by [[thm-van-der-waerden-with-monochromatic-difference]], whose stronger conclusion also colours the common difference, and leastness follows from [[thm-well-ordering-principle]]. Translation identifies every interval of $N$ consecutive integers with $\{1,\ldots,N\}$ without changing arithmetic progressions.

