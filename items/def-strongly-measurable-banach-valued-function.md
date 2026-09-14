---
id: def-strongly-measurable-banach-valued-function
kind: definition
title: "Strongly measurable Banach-valued function"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-banach-valued-simple-function-and-integral, def-measure-null-set-and-almost-everywhere]
justified_by: []
forward_refs: []
aliases: []
landmark: false
verification:
  audited: 2026-09-14
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  scraped: []
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
      locator: "Section 11.6, definition and Lemma 11.30, printed pp. 332--333"
pipeline_run: phase-2-next-18
---

## Definition

Let $(\Omega,\mathcal A,\mu)$ be a measure space and $X$ a real or complex
Banach space. A function $f:\Omega\to X$ is **strongly measurable** (or
**Bochner measurable**) if there are measurable $X$-valued simple functions
$s_n$ and a measurable null set $N$ such that

$$\lim_{n\to\infty}\|s_n(\omega)-f(\omega)\|=0$$

for every $\omega\in\Omega\setminus N$.

This is a norm-convergence condition. It is not, by definition, merely Borel
measurability of $f$ or measurability of every scalar function $x^*\circ f$.
Changing $f$ on a null set preserves strong measurability: enlarge $N$ by that
null set and retain the same approximants.

## Remarks

- The zero function is strongly measurable, witnessed by the constant zero
  simple sequence.
- A single measurable simple function is strongly measurable, witnessed by the
  constant sequence $s_n=s$ and $N=\varnothing$.
