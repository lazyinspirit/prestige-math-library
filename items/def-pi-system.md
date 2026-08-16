---
id: def-pi-system
kind: definition
title: "Pi-systems"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "A. Dembo, Probability Theory lecture notes, Definition 1.1.36"
      url: "https://adembo.su.domains/stat-310b/lnotes.pdf"
pipeline_run: null
---

## Definition

Let $X$ be a set. A **pi-system on $X$** is a nonempty family
$\mathcal P\subseteq\mathcal P(X)$ closed under binary intersections: if
$A,B\in\mathcal P$, then $A\cap B\in\mathcal P$.

The nonempty-family requirement is the convention used here. It does not require
$X\in\mathcal P$ and it does not add an empty-intersection axiom.
