---
id: def-polynomial-subexponential-exponential-and-intermediate-growth
kind: definition
title: "Polynomial, subexponential, exponential, and intermediate growth"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-growth-comparison-and-growth-type, def-growth-function-of-a-finitely-generated-group, lem-growth-comparison-is-a-preorder, thm-growth-type-is-independent-of-the-finite-generating-set]
justified_by: []
aliases: []
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "C. Löh, Geometric Group Theory, Sections 5.1-5.3"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ss22/lecture_notes.pdf"
    - title: "C. Drutu and M. Kapovich, Lectures on Geometric Group Theory, Chapter 5"
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/kapovich_drutu.pdf"
pipeline_run: null
---

## Definition

Let $G$ be a finitely generated group, and let $S$ be any finite generating set.
Write $\beta_G := \beta_{G,S}$.

By [[thm-growth-type-is-independent-of-the-finite-generating-set]] and the
transitivity of $\preccurlyeq$ from [[lem-growth-comparison-is-a-preorder]],
the following conditions do not depend on the choice of $S$.

- $G$ has **polynomial growth** if $\beta_G \preccurlyeq n^d$ for some
  integer $d \ge 0$.
- $G$ has **exponential growth** if $a^n \preccurlyeq \beta_G$ for some natural
  number $a \ge 2$.
- $G$ has **subexponential growth** if it does not have exponential growth.
- $G$ has **intermediate growth** if it has subexponential growth but not
  polynomial growth.

The comparison relation $\preccurlyeq$ is that of
[[def-growth-comparison-and-growth-type]], and $\beta_{G,S}$ is from
[[def-growth-function-of-a-finitely-generated-group]].
