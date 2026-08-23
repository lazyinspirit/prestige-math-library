---
id: thm-borsuk-ulam-in-dimension-two
kind: theorem
title: "Borsuk–Ulam theorem in dimension two"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-antipodal-circle-map-has-odd-lift-increment, thm-higher-dimensional-spheres-are-simply-connected, def-euclidean-spheres-and-closed-balls, lem-radial-normalisation-is-continuous, thm-real-line-mod-integers-is-homeomorphic-to-the-unit-circle, thm-composition-respects-homotopy, thm-componentwise-limits-and-continuity]
justified_by: []
aliases: []
landmark: true
short: "Borsuk–Ulam on $S^2$"
proof_strategy: contradiction
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology, Theorem 1.10"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf"
pipeline_run: null
---

## Statement

For every continuous map $f:S^2\to\mathbb R^2$, there is an $x\in S^2$ with $f(x)=f(-x)$.

## Facts & Assumptions

**Given:** A continuous map $f:S^2\to\mathbb R^2$.

[F1] The sphere $S^2$ is the unit sphere in $\mathbb R^3$, and its equator is the image of $e:\mathbb R/\mathbb Z\to S^2$, $e([t])=(\cos2\pi t,\sin2\pi t,0)$ ([[def-euclidean-spheres-and-closed-balls]], [[thm-real-line-mod-integers-is-homeomorphic-to-the-unit-circle]]).

[L1] Every continuous antipodal map $S^1\to S^1$ has an odd lift increment and is not nullhomotopic ([[lem-antipodal-circle-map-has-odd-lift-increment]]).

[L2] The sphere $S^2$ is simply connected ([[thm-higher-dimensional-spheres-are-simply-connected]]).

[L3] Radial normalization $\rho:\mathbb R^2\setminus\{0\}\to S^1$, $\rho(y)=y/\lVert y\rVert_2$, is continuous ([[lem-radial-normalisation-is-continuous]]).

[L4] Postcomposition by a continuous map preserves a homotopy relative to its fixed subspace ([[thm-composition-respects-homotopy]]).

[L5] Continuity of maps into Euclidean space is componentwise, and sums and scalar multiples of continuous Euclidean-valued maps are continuous ([[thm-componentwise-limits-and-continuity]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose $f(x)\ne f(-x)$ for every $x\in S^2$. [given, assume-contra]

2.1 The difference $d(x)=f(x)-f(-x)$ is continuous by [L5] and nonzero by step 1.1, so $g(x)=\rho(d(x))$ defines a continuous map $g:S^2\to S^1$. Since $d(-x)=-d(x)$, one has $g(-x)=-g(x)$. [step 1.1, L3, L5, construct, algebra]

3.1 Let $h:\mathbb R/\mathbb Z\to S^1$ be the homeomorphism in [F1] and put $b=h^{-1}\circ g\circ e$. The map $e$ is continuous componentwise by [L5]; since $e([t+1/2])=-e([t])$ and $h([u+1/2])=-h([u])$, the continuous map $b$ is antipodal. Hence the loop $t\mapsto b([t])$ is not nullhomotopic by [L1]. [step 2.1, F1, L1, L5]

3.2 The loop $t\mapsto e([t])$ in $S^2$ is nullhomotopic because $S^2$ is simply connected. Postcomposing such a nullhomotopy with the continuous map $h^{-1}\circ g$ makes $t\mapsto b([t])$ nullhomotopic in $\mathbb R/\mathbb Z$. [step 2.1, F1, L2, L4]

4.1 Steps 3.1 and 3.2 contradict one another. Therefore the assumption in step 1.1 is false, and some $x\in S^2$ satisfies $f(x)=f(-x)$. [step 1.1, step 3.1, step 3.2, discharge-contradiction] ∎
