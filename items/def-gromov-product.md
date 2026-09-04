---
id: def-gromov-product
kind: definition
title: "The Gromov product based at a point"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-metric-space]
verification:
  audited: 2026-08-27
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Clara Löh, Geometric Group Theory, Section 6.2.1"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ss22/lecture_notes.pdf"
---

## Definition

Let $(X,d)$ be a metric space, let $o \in X$, and let $x,y \in X$. The
**Gromov product** of $x$ and $y$ with respect to $o$ is

$$ (x,y)_o := \frac{1}{2}\bigl(d(x,o)+d(y,o)-d(x,y)\bigr). $$
