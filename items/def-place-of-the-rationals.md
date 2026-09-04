---
id: def-place-of-the-rationals
kind: definition
title: "Places of the rationals"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-ostrowskis-theorem-for-the-rationals]
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Number Theory, Chapter 7"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
pipeline_run: null
---

## Definition

A **place** of $\mathbb Q$ is an equivalence class of nontrivial absolute values
on $\mathbb Q$. By [[thm-ostrowskis-theorem-for-the-rationals]], every place is
represented either by the usual absolute value or by a unique $p$-adic absolute
value. We therefore write

$$\infty,\ p$$

for the archimedean place and the place represented by $|\cdot|_p$.
