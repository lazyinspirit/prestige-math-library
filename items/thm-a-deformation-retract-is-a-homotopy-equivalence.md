---
id: thm-a-deformation-retract-is-a-homotopy-equivalence
kind: theorem
title: "The inclusion of a deformation retract is a homotopy equivalence with the retraction as homotopy inverse"
status: published
origin: session
deps: [def-retraction-and-deformation-retract, def-homotopy-equivalence]
aliases: []
landmark: true
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

If $A$ is a deformation retract of $X$, with inclusion $i:A\hookrightarrow X$ and retraction $r:X\to A$, then $i$ is a homotopy equivalence and $r$ is a homotopy inverse of $i$.

## Facts & Assumptions

**Given:** A deformation retraction $(r,H)$ of $X$ onto $A$, with inclusion $i:A\hookrightarrow X$.

[A1] Retraction gives $r\circ i=\operatorname{id}_A$, and deformation retraction gives $i\circ r\simeq_A\operatorname{id}_X$ ([[def-retraction-and-deformation-retract]]).

[A2] A continuous map is a homotopy equivalence when it has a continuous map whose composites with it are homotopic to the identity maps ([[def-homotopy-equivalence]]).

## Proof

**Proof technique:** direct.

1.1 The equality $r\circ i=\operatorname{id}_A$ is in particular a homotopy $r\circ i\simeq\operatorname{id}_A$, while $i\circ r\simeq_A\operatorname{id}_X$ is in particular an ordinary homotopy. [A1]

2.1 Hence $r$ satisfies both homotopy-inverse conditions for $i$, so $i$ is a homotopy equivalence with homotopy inverse $r$. [step 1.1, A2] ∎
