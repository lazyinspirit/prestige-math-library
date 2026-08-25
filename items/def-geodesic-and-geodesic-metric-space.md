---
id: def-geodesic-and-geodesic-metric-space
kind: definition
title: "Geodesics and geodesic metric spaces"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-metric-space]
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "C. Loh, Geometric Group Theory: An Introduction (2015 course version), Section 5.3"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ws1415/lecture_notes_old.pdf"
---

## Definition

Let $(X,d)$ be a metric space and let $x,y \in X$.

A **geodesic segment** from $x$ to $y$ is a map
$$\gamma : [0,\ell] \to X$$
for some real $\ell \ge 0$ such that

$$\gamma(0)=x,\qquad \gamma(\ell)=y,\qquad d(\gamma(s),\gamma(t)) = |s-t| \text{ for all } s,t \in [0,\ell].$$

Necessarily $\ell=d(x,y)$, by substituting $s=0$ and $t=\ell$.

The metric space $X$ is **geodesic** if every two points of $X$ are joined by a
geodesic segment.
