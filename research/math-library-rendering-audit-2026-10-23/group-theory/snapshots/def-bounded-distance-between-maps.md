---
id: def-bounded-distance-between-maps
kind: definition
title: "Bounded distance between two maps into a metric space"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-metric-space]
aliases: []
landmark: false
verification:
  audited: 2026-08-26
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "C. Loh, Geometric Group Theory: An Introduction (2015 course version), Section 5.1"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ws1415/lecture_notes_old.pdf"
---

## Definition

Let $X$ be a set, let $(Y,d_Y)$ be a metric space, and let $f,g:X \to Y$.

The maps $f$ and $g$ are at **bounded distance** from one another if there is a
real $C \ge 0$ such that

$$d_Y(f(x),g(x)) \le C \qquad \text{for every } x \in X.$$

In that case one also says that $f$ and $g$ are at **finite distance**.
