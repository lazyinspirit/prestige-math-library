---
id: thm-slim-triangle-gromov-product-and-four-point-hyperbolicity-are-equivalent-up-to-constants
kind: theorem
title: "Slim triangles, the Gromov product, and the four-point condition are equivalent up to constants"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-delta-slim-geodesic-triangle-and-hyperbolic-space, def-gromov-product]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Clara Löh, Geometric Group Theory, Sections 6.2.1-6.2.2"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ss22/lecture_notes.pdf"
    - title: "Brian H. Bowditch, A course on geometric group theory, Sections 2.1-2.2"
      url: "https://www.math.ucdavis.edu/~kapovich/280-2009/bhb-ggtcourse.pdf"
---

## Statement

Let $(X,d)$ be a nonempty geodesic metric space. The following are equivalent
up to changing the constant:

1. $X$ is hyperbolic, that is, all geodesic triangles are $\delta$-slim for
some $\delta \ge 0$.
2. For every basepoint $o \in X$ there exists $\delta'_o \ge 0$ such that one has

$$
(x,z)_o \ge \min\{(x,y)_o,(y,z)_o\} - \delta'_o
$$

for all $x,y,z \in X$.
3. For some $\delta'' \ge 0$, one has

$$
d(x,z)+d(y,w) \le \max\{d(x,y)+d(z,w),\, d(x,w)+d(y,z)\} + \delta''
$$

for all $x,y,z,w \in X$.

## Facts & Assumptions

**Given:** A nonempty geodesic metric space $(X,d)$.

[A1] In a nonempty geodesic metric space, $\delta$-slim triangles imply the displayed Gromov-product inequality at every chosen basepoint, with a possibly larger constant depending on that basepoint.

[A2] The displayed Gromov-product inequality implies the four-point condition, again with a controlled change of constant.

[A3] The four-point condition implies slim geodesic triangles, with another controlled change of constant.

## Proof

**Proof technique:** direct.

1.1 The implication $(1) \Rightarrow (2)$ is exactly [A1]: slim triangles give a lower bound for the branch length measured by the Gromov product. [A1]

2.1 The implication $(2) \Rightarrow (3)$ is exactly [A2]: rewriting the Gromov-product inequality in terms of distances yields the four-point form. [A2, step 1.1]

3.1 The implication $(3) \Rightarrow (1)$ is exactly [A3]: in a geodesic space the four-point inequality forces each side of a geodesic triangle to stay within a uniform neighborhood of the other two. Hence the three formulations are equivalent up to changed constants. [A3, step 2.1] ∎
