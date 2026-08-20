---
id: def-jordan-exhaustion-of-an-open-set
kind: definition
title: "Compact Jordan exhaustions of open subsets of $\\mathbb{R}^n$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-jordan-inner-and-outer-content, def-metric-interior-closure-boundary, def-metric-compactness]
justified_by: []
aliases: []
landmark: true
short: "Compact Jordan exhaustion"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "V. Guillemin, MIT 18.101 Analysis II Lecture Notes, §§3.7–3.8"
      url: "https://ocw.mit.edu/courses/18-101-analysis-ii-fall-2005/babd982be745679b6d691f78b1c18f53_lectures.pdf"
pipeline_run: null
---

## Definition

Let $n\ge1$ and let $D\subseteq\mathbb R^n$ be open. A **compact Jordan exhaustion** of $D$ is a sequence $(K_j)_{j\in\mathbb N}$ such that:

1. every $K_j\subseteq D$ is compact ([[def-metric-compactness]]) and Jordan measurable ([[def-jordan-inner-and-outer-content]]);
2. $K_j\subseteq\operatorname{int}K_{j+1}$ for every $j$ ([[def-metric-interior-closure-boundary]]);
3. $D=\bigcup_{j\in\mathbb N}K_j$.

These clauses imply **compact cofinality**: every compact $C\subseteq D$ is contained in some $K_j$. Indeed, the open sets $\operatorname{int}K_{j+1}$ cover $C$; compactness gives a finite subcover, and nesting places all of $C$ in the member with largest index. For $D=\varnothing$, the constant sequence $K_j=\varnothing$ is an exhaustion.
