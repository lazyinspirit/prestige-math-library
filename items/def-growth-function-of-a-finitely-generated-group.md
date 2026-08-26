---
id: def-growth-function-of-a-finitely-generated-group
kind: definition
title: "The growth function of a finitely generated group"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-finitely-generated-group, def-word-metric, def-word-length-with-respect-to-a-generating-set]
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
    - title: "C. Löh, Geometric Group Theory, Sections 5.1-5.3"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ss22/lecture_notes.pdf"
    - title: "C. Drutu and M. Kapovich, Lectures on Geometric Group Theory, Chapter 5"
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/kapovich_drutu.pdf"
pipeline_run: null
---

## Definition

Let $G$ be a finitely generated group, and let $S$ be a finite generating set
([[def-finitely-generated-group]]).

The **growth function** of $G$ with respect to $S$ is
$$\beta_{G,S} : \mathbb N \to \mathbb N, \qquad \beta_{G,S}(n) := \bigl| \{\, g \in G : |g|_S \le n \,\} \bigr|.$$

Since $d_S(e,g)=|g|_S$ ([[def-word-metric]],
[[def-word-length-with-respect-to-a-generating-set]]), this is exactly the
cardinality of the closed word-metric ball of radius $n$ about the identity.
