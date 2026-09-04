---
id: def-primary-decomposition-minimal-and-isolated-components
kind: definition
title: "Primary decompositions, minimality, and isolated components"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-left-right-and-two-sided-ideal, def-radical-of-an-ideal, def-primary-submodule-and-primary-ideal]
verification:
  audited: 2026-08-28
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., (18.13)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, Definition 19.7"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
---

## Definition

Let $R$ be a commutative ring, let $M$ be a left $R$-module, and let
$N \subseteq M$ be a submodule.

A **primary decomposition** of $N$ in $M$ is an expression
$$ N=Q_1\cap\cdots\cap Q_r $$
with each $Q_i \subsetneq M$ a primary submodule.

Such a decomposition is **minimal** when:

1. no component is redundant, so omitting any $Q_i$ changes the intersection;
2. the radicals $\sqrt{\operatorname{Ann}_R(M/Q_i)}$ are pairwise distinct.

These radicals are well-defined because
[[def-primary-submodule-and-primary-ideal]] establishes that each module
annihilator $\operatorname{Ann}_R(M/Q_i)$ is an ideal of $R$.

In a minimal decomposition, a component $Q_i$ is **isolated** when its radical
is minimal, under inclusion, among the radicals occurring in the decomposition.
