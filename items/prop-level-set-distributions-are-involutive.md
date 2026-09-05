---
id: prop-level-set-distributions-are-involutive
kind: proposition
title: "Level-set distributions are involutive"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-involutive-distribution,
       def-differential-of-a-smooth-map,
       def-lie-bracket-of-smooth-vector-fields,
       prop-tangent-space-of-a-regular-level-set-is-the-kernel]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---

## Statement

Let $F:M \to \mathbb R^r$ be smooth, and let
$\mathcal D_p := \ker dF_p$ for each $p \in M$. Then every smooth vector field
tangent to $\mathcal D$ is closed under Lie bracket; in particular, when
$\mathcal D$ has constant rank it is involutive.

## Facts & Assumptions

**Given:** A smooth map $F:M \to \mathbb R^r$.

[A1] Let $X$ and $Y$ be smooth vector fields with values in $\ker dF$.

## Proof

**Proof technique:** direct.

1.1 Write $F = (f^1,\dots,f^r)$. The tangency assumption says [given]
$X(f^a) = 0 = Y(f^a)$ for every component $f^a$. [given]

1.2 Therefore [given]
$$ [X,Y](f^a) = X(Y(f^a)) - Y(X(f^a)) = 0 $$
for every $a$. This means $dF([X,Y]) = 0$, so $[X,Y]$ is again tangent to the
kernel family. [given, algebra]

1.3 Thus kernel distributions are closed under brackets whenever they are [given]
defined as smooth distributions. [given] ∎
