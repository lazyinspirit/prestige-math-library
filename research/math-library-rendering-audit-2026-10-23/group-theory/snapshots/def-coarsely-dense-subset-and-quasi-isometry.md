---
id: def-coarsely-dense-subset-and-quasi-isometry
kind: definition
title: "Coarsely dense subsets, quasi-inverses and quasi-isometries"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-coarse-lipschitz-map-and-quasi-isometric-embedding, def-bounded-distance-between-maps, def-metric-space, def-metric-bounded-diameter]
aliases: []
landmark: true
verification:
  audited: 2026-08-26
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "C. Drutu and M. Kapovich, Geometric Group Theory, Section 8.1"
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf"
    - title: "C. Loh, Geometric Group Theory: An Introduction (2015 course version), Section 5.1"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ws1415/lecture_notes_old.pdf"
---

## Definition

Let $(X,d_X)$ and $(Y,d_Y)$ be metric spaces.

A subset $A \subseteq Y$ is **coarsely dense** in $Y$ if there is a real
$R\ge0$ such that for every $y\in Y$ there is an $a\in A$ with
$d_Y(y,a)\le R$. Thus every point of $Y$ lies within one uniform bound of an
actual point of $A$. When $A$ is nonempty this is equivalent, after enlarging
the bound if necessary, to boundedness of the point-to-set distance from
[[def-metric-bounded-diameter]]. The quantified form also covers the empty
space without invoking the undefined expression $d(y,\varnothing)$.

Let $f:X \to Y$ and $g:Y \to X$ be coarse Lipschitz maps. Then $g$ is a
**quasi-inverse** of $f$ if both composites $g \circ f$ and $\operatorname{id}_X$,
and $f \circ g$ and $\operatorname{id}_Y$, are at bounded distance in the sense
of [[def-bounded-distance-between-maps]].

A **quasi-isometry** is a coarse Lipschitz map that admits a coarse Lipschitz
quasi-inverse. Two metric spaces are **quasi-isometric** if some quasi-isometry
between them exists.
