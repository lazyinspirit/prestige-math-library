---
id: fs-every-solvable-group-is-abelian
kind: false-statement
title: "Every solvable group is abelian"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-derived-series-solvable-group-and-derived-length, cor-derived-subgroups-of-symmetric-and-alternating-groups]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Group Theory, Chapter 6"
      url: "https://www.jmilne.org/math/CourseNotes/GT.pdf"
    - title: "K. Conrad, Subgroup Series I"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/subgpseries1.pdf"
    - title: "K. Igusa, Notes on Jordan-Hölder, section 5"
      url: "https://people.brandeis.edu/~igusa/Math131b/JH.pdf"
pipeline_run: null
---

## Statement

> **False.** Every solvable group is abelian.

## Facts & Assumptions

**Given:** The symmetric group $S_3$.

[F1] A group is solvable when its derived series reaches $1$ ([[def-derived-series-solvable-group-and-derived-length]]).

[L1] $S_3'=A_3$ and $A_3'=1$ ([[cor-derived-subgroups-of-symmetric-and-alternating-groups]]).

## Refutation

**Proof technique:** direct.

1.1 By [L1], the derived series $S_3>A_3>1$ reaches $1$, so $S_3$ is solvable by [F1]. [L1, F1]

1.2 The transpositions $(12)$ and $(23)$ do not commute, since $(12)(23)=(123)$ while $(23)(12)=(132)$. [algebra]

2.1 Thus the solvable group $S_3$ is nonabelian, refuting the statement. [step 1.1, step 1.2] ∎
