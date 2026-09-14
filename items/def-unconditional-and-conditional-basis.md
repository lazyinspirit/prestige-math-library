---
id: def-unconditional-and-conditional-basis
kind: definition
title: "Unconditional and conditional Schauder bases"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-schauder-basis-and-coordinate-functionals, def-unconditional-convergence-of-a-banach-space-series]
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
    - title: "Thomas Schlumprecht, Course Notes in Functional Analysis, Math 655"
      url: "https://people.tamu.edu/~t-schlumprecht/course_notes_math655_23c.pdf"
      locator: "§3.1 discussion of unconditional bases following the canonical projections"
pipeline_run: phase-2-next-18
---

## Definition

A Schauder basis $(e_n)$ of a Banach space $X$ is **unconditional** if, for
every $x\in X$, its uniquely determined basis expansion

$$\sum_{n=1}^{\infty}e_n^*(x)e_n$$

converges unconditionally. It is **conditional** if it is not unconditional;
equivalently, at least one vector has a basis expansion that is not
unconditionally convergent.

The quantifier is over all basis expansions. It does not assert convergence of
the formal unweighted series $\sum_ne_n$.
