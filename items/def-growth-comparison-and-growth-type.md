---
id: def-growth-comparison-and-growth-type
kind: definition
title: "Growth comparison and growth type"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-growth-function-of-a-finitely-generated-group]
justified_by: []
aliases: []
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
    - title: "C. Löh, Geometric Group Theory, Sections 5.1-5.3"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ss22/lecture_notes.pdf"
    - title: "C. Drutu and M. Kapovich, Lectures on Geometric Group Theory, Chapter 5"
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/kapovich_drutu.pdf"
pipeline_run: null
---

## Definition

Let $f,g : \mathbb N \to \mathbb N$ be nondecreasing functions.

Write
$$f \preccurlyeq g$$
if there is a natural number $C \ge 1$ such that
$$f(n) \le C\, g(Cn+C) + C \qquad \text{for every } n \in \mathbb N.$$

Write
$$f \simeq g$$
if both $f \preccurlyeq g$ and $g \preccurlyeq f$ hold.

For a finitely generated group $G$ and a finite generating set $S$, the
equivalence class of the growth function $\beta_{G,S}$
([[def-growth-function-of-a-finitely-generated-group]]) under $\simeq$ is the
**growth type** of $G$ with respect to $S$.
