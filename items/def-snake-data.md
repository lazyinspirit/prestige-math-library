---
id: def-snake-data
kind: definition
title: "Snake data"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-exact-sequence-and-short-exact-sequence-in-an-abelian-category]
justified_by: []
landmark: false
  audited: 2026-08-30
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Saunders Mac Lane, Categories for the Working Mathematician, Lemma VIII.4.5"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
    - title: "The Stacks Project, Section 12.5, Lemma 12.5.17"
      url: "https://stacks.math.columbia.edu/tag/00ZX"
pipeline_run: frontier-24
---

## Definition

A piece of **snake data** in an abelian category means one of the following
commutative diagrams.

The Mac Lane shape is a morphism of short exact sequences

```tikzcd
0 \arrow[r] & A \arrow[r, "i"] \arrow[d, "f"'] & B \arrow[r, "p"] \arrow[d, "g"'] & C \arrow[r] \arrow[d, "h"'] & 0 \\
0 \arrow[r] & A' \arrow[r, "i'"'] & B' \arrow[r, "p'"'] & C' \arrow[r] & 0.
```

The weaker Stacks shape is a commutative diagram

```tikzcd
X \arrow[r, "a"] \arrow[d, "\alpha"'] & Y \arrow[r, "b"] \arrow[d, "\beta"'] & Z \arrow[r] \arrow[d, "\gamma"'] & 0 \\
0 \arrow[r] & U \arrow[r, "k"'] & V \arrow[r, "l"'] & W
```
whose top and bottom rows are exact.

This page uses the name only for the data of the diagram and its exact rows.
The connecting morphism and the snake sequence attached to such data are
constructed later.
