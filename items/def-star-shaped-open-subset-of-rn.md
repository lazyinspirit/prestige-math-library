---
id: def-star-shaped-open-subset-of-rn
kind: definition
title: "Star-shaped open subsets of Euclidean space"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-convex-subset-of-euclidean-space]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "J.-B. Campesato, Poincare Lemma, sections 1 and 2"
      url: "https://www.math.toronto.edu/campesat/ens/1920/poincare.pdf"
pipeline_run: null
---

## Definition

A nonempty open set $U\subseteq\mathbb R^n$ is **star-shaped with respect to** $a\in U$ when

$$a+t(x-a)\in U\qquad\text{for every }x\in U\text{ and }0\le t\le1.$$

The point $a$ is a **star centre**. Every convex open set of [[def-convex-subset-of-euclidean-space]] is star-shaped with respect to each of its points. The nonemptiness and the chosen centre are part of the definition.
