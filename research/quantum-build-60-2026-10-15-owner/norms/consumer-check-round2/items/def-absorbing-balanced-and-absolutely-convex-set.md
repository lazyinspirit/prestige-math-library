---
id: def-absorbing-balanced-and-absolutely-convex-set
kind: definition
title: Absorbing, balanced, and absolutely convex sets
status: published
origin: pipeline
deps: [def-norm-and-normed-space, def-complex-norm-and-complex-normed-space]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Gerald Teschl, Topics in Real and Functional Analysis, §5.1
      url: https://pdfcoffee.com/topics-in-real-and-functional-analysis-gerald-teschl-pdf-free.html
---

## Definition

Let $X$ be a normed space over $\mathbb K\in\{\mathbb R,\mathbb C\}$, with the
scalar convention of [[def-complex-norm-and-complex-normed-space]], and let
$C\subseteq X$.  The set $C$ is **absorbing** if, for every $x\in X$, there is
$t>0$ such that $x\in tC$.  It is **balanced** if $\lambda C\subseteq C$ for
every $\lambda\in\mathbb K$ with $|\lambda|\le1$.  It is **absolutely convex**
if it is both convex and balanced.  No closedness, openness, or positive
definiteness is part of these definitions.
