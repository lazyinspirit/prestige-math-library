---
id: def-quasi-geodesic-and-quasi-geodesic-metric-space
kind: definition
title: "Quasi-geodesics and quasi-geodesic metric spaces"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-metric-space, def-coarse-lipschitz-map-and-quasi-isometric-embedding]
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "C. Loh, Geometric Group Theory: An Introduction (2015 course version), Section 5.3"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ws1415/lecture_notes_old.pdf"
    - title: "C. Drutu and M. Kapovich, Geometric Group Theory, Section 8.1"
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf"
---

## Definition

Let $(X,d)$ be a metric space.

A map $\gamma:I \to X$ from an interval $I \subseteq \mathbb{R}$ is a
**$(\lambda,c)$-quasi-geodesic** if $\lambda \ge 1$, $c \ge 0$, and

$$\lambda^{-1}|s-t| - c \le d(\gamma(s),\gamma(t)) \le \lambda |s-t| + c \qquad \text{for all } s,t \in I.$$

A **$(\lambda,c)$-quasi-geodesic segment from $x$ to $y$** is such a map with
domain a closed bounded interval $[a,b]$ and with
$\gamma(a)=x$, $\gamma(b)=y$.

The metric space $X$ is **quasi-geodesic** if there are constants
$\lambda \ge 1$ and $c \ge 0$ such that every two points of $X$ are the
endpoints of some $(\lambda,c)$-quasi-geodesic segment.
