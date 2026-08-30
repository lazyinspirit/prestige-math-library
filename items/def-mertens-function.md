---
id: def-mertens-function
kind: definition
title: "The Mertens function $M(x)$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-number-theoretic-mobius-function]
justified_by: []
aliases: []
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Tom Sanders, Topics in Analytic Number Theory, Chapter 1"
      url: "https://people.maths.ox.ac.uk/~sanders/tant/notes.pdf"
pipeline_run: null
---

## Definition

For a real number $x\ge1$, the **Mertens function** is

$$
M(x):=\sum_{1\le n\le x}\mu(n),
$$

where $\mu$ is the number-theoretic Möbius function of
[[def-number-theoretic-mobius-function]].

## Remarks

- The index condition is $n\le x$, so for every integer $m\ge1$ the function
  $M(x)$ is constant on $[m,m+1)$ and jumps only at integers.
