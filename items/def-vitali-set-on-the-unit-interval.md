---
id: def-vitali-set-on-the-unit-interval
kind: definition
title: "Vitali set on $[0,1]$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-interval]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "Jacek Cichoń, Aleksander Kharazishvili, and Bogdan Węglorz, Subsets of the Real Line, Chapter 8"
      url: "https://ki.pwr.edu.pl/cichon/Materialy/BOOK.pdf"
    - title: "Vitali set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Vitali_set"
pipeline_run: null
---

## Definition

Define an equivalence relation on $[0,1]$ by

$$x \sim y \quad:\Longleftrightarrow\quad x-y \in \mathbb{Q}.$$

A subset $V \subseteq [0,1]$ is a **Vitali set on $[0,1]$** when every
equivalence class of this relation meets $V$ in exactly one point. Equivalently,
for every $x \in [0,1]$ there is a unique $v \in V$ with $x-v \in \mathbb{Q}$.

## Remarks

- The definition names **a** Vitali set, not **the** Vitali set. Different
  choice functions produce different selectors.

- The relation is taken on $[0,1]$, not on all of $\mathbb{R}$, because the
  later countable-translate argument only needs one selector on one bounded
  interval.
