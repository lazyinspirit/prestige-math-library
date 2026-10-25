---
id: cor-a-map-homotopic-to-a-homotopy-equivalence-is-a-homotopy-equivalence
kind: corollary
title: "A continuous map homotopic to a homotopy equivalence is itself a homotopy equivalence"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-homotopy-equivalence, thm-composition-respects-homotopy, cor-homotopy-relative-and-path-homotopy-are-equivalence-relations]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "A. Hatcher, Algebraic Topology, Section 0"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
pipeline_run: null
---

## Statement

Let $f_0,f:X\to Y$ be continuous maps with $f\simeq f_0$. If $f_0$ is a homotopy equivalence, then $f$ is a homotopy equivalence. Every homotopy inverse of $f_0$ is also a homotopy inverse of $f$.

## Facts & Assumptions

**Given:** Continuous maps $f_0,f:X\to Y$, a homotopy $f\simeq f_0$, and a homotopy inverse $g:Y\to X$ of $f_0$.

[A1] $g\circ f_0\simeq\operatorname{id}_X$ and $f_0\circ g\simeq\operatorname{id}_Y$ ([[def-homotopy-equivalence]]).

[L1] Precomposition and postcomposition by continuous maps preserve homotopies ([[thm-composition-respects-homotopy]]).

[L2] Homotopy is transitive ([[cor-homotopy-relative-and-path-homotopy-are-equivalence-relations]]).

## Proof

**Proof technique:** direct.

1.1 Postcomposing $f\simeq f_0$ by $g$ gives $g\circ f\simeq g\circ f_0$ by [L1], and [A1] with transitivity gives $g\circ f\simeq\operatorname{id}_X$. [L1, A1, L2]

1.2 Precomposing $f\simeq f_0$ by $g$ gives $f\circ g\simeq f_0\circ g$ by [L1], and [A1] with transitivity gives $f\circ g\simeq\operatorname{id}_Y$. [L1, A1, L2]

2.1 Steps 1.1 and 1.2 show that $g$ is a homotopy inverse of $f$, so $f$ is a homotopy equivalence. [step 1.1, step 1.2, A1] ∎
