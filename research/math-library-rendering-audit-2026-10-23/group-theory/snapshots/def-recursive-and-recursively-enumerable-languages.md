---
id: def-recursive-and-recursively-enumerable-languages
kind: definition
title: "Recursive and recursively enumerable languages"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-finite-alphabet-encoding-and-algorithm]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-08-29
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Charles F. Miller III, Decision Problems for Groups - Survey and Reflections"
      url: "https://web.archive.org/web/20240413212033/https://citeseerx.ist.psu.edu/document?repid=rep1&type=pdf&doi=fcda888d3e64f281e85977c474764527421ce852"
    - title: "Alex Bishop, Minicourse: On Decision Problems in Groups"
      url: "https://alexbishop.github.io/blog/talks/2025/02/07/on-decision-problems-in-groups"
pipeline_run: null
---

## Definition

Let $L\subseteq\Sigma^\ast$ for a finite alphabet $\Sigma$.

- $L$ is **recursive** if some decision algorithm halts on every input word and
  accepts exactly the elements of $L$.
- $L$ is **recursively enumerable** if some algorithm halts exactly on the
  elements of $L$; equivalently, some procedure lists all elements of $L$, with
  repetition allowed, and nothing else.

Thus recursive means membership is decidable on both positive and negative
instances, while recursively enumerable means only the positive instances are
guaranteed to appear.
