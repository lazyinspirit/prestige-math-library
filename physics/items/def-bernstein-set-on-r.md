---
id: def-bernstein-set-on-r
kind: definition
title: "Bernstein subset of $\\mathbb{R}$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-perfect-set-r]
justified_by: []
aliases: []
landmark: true
verification:
  audited: 2026-08-26
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
    - title: "Bernstein set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Bernstein_set"
pipeline_run: null
---

## Definition

A set $B \subseteq \mathbb{R}$ is a **Bernstein set** when every nonempty
perfect subset of $\mathbb{R}$ meets both $B$ and $\mathbb{R}\setminus B$.

## Remarks

- The definition is symmetric in $B$ and its complement, so
  $\mathbb{R}\setminus B$ is Bernstein whenever $B$ is.

- A Bernstein set cannot contain any nonempty perfect set, and its complement
  cannot either, by the definition itself.
