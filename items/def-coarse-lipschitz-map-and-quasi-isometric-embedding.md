---
id: def-coarse-lipschitz-map-and-quasi-isometric-embedding
kind: definition
title: "Coarse Lipschitz maps and quasi-isometric embeddings"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-metric-space, def-lipschitz-holder-contraction]
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "C. Drutu and M. Kapovich, Geometric Group Theory, Section 8.1"
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf"
    - title: "C. Loh, Geometric Group Theory: An Introduction (2015 course version), Section 5.1"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ws1415/lecture_notes_old.pdf"
---

## Definition

Let $(X,d_X)$ and $(Y,d_Y)$ be metric spaces and let $f:X \to Y$.

The map $f$ is **coarse Lipschitz** if there are reals $A \ge 0$ and $B \ge 0$
such that

$$d_Y(f(x),f(x')) \le A\,d_X(x,x') + B \qquad \text{for all } x,x' \in X.$$

It is a **quasi-isometric embedding** if there are reals $\lambda \ge 1$ and
$c \ge 0$ such that

$$\lambda^{-1} d_X(x,x') - c \le d_Y(f(x),f(x')) \le \lambda d_X(x,x') + c \qquad \text{for all } x,x' \in X.$$

Thus a quasi-isometric embedding is a coarse Lipschitz map whose distances are
also controlled from below, up to the same kind of additive error.
