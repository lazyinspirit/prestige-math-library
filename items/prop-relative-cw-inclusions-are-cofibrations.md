---
id: prop-relative-cw-inclusions-are-cofibrations
kind: proposition
title: Relative CW inclusions are cofibrations
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-skeleta-cw-subcomplex-and-relative-cw-complex]
proof_strategy: direct
verification:
  audited: 2026-09-07
  precheck: pass
sources:
  references:
    - title: Allen Hatcher, Algebraic Topology, Proposition 0.16
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
---

## Statement

If $(X,A)$ is a relative CW complex, then $A\hookrightarrow X$ has the homotopy extension property; in particular it is a cofibration.

## Facts & Assumptions

**Given:** A map $g:X\to Y$ and a homotopy $H:A\times I\to Y$ with $H(a,0)=g(a)$.

## Proof

**Proof technique:** direct.

1.1 On each attached disk, the already-defined map on $S^{n-1}\times I\cup D^n\times\{0\}$ extends over $D^n\times I$ because this subspace is a deformation retract of a collar-containing neighborhood in the disk cylinder. [given, construct]

2.1 Induct over attachment stages, choosing these extensions; their restrictions agree on prior stages. The weak topology of the relative CW construction makes the assembled map $X\times I\to Y$ continuous and it extends $H$. [step 1.1, discharge-construct] ∎
