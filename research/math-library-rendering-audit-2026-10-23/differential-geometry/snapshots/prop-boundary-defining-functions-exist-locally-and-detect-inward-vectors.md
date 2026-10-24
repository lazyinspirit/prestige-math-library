---
id: prop-boundary-defining-functions-exist-locally-and-detect-inward-vectors
kind: proposition
title: "Boundary-defining functions exist locally and detect inward vectors"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-boundary-defining-function, def-inward-outward-and-boundary-tangent-vectors, prop-chain-rule-for-smooth-half-space-maps]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  audited: 2026-09-07
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Ioan Mărcuț, Manifolds (2017 lecture notes), §§14.5, 15.1"
      url: "https://www.math.ru.nl/~imarcut/index_files/lectures_2017.pdf"
    - title: "Will Merry, Differential Geometry (2021), Lecture 24"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---

## Statement

Every boundary point has a boundary-defining function; for any such $\rho$, a vector $v$ is inward exactly when $d\rho_p(v)>0$.

## Facts & Assumptions

**Given:** A boundary point $p$ of a smooth manifold $M$, a boundary chart at $p$, and, for the sign assertion, a boundary-defining function $\rho$ near $p$ and a vector $v\in T_pM$.

[L1] A boundary-defining function is nonnegative, vanishes exactly on the boundary, and has nonzero differential there ([[def-boundary-defining-function]]).

[L2] Inward, outward, and boundary-tangent vectors have respectively positive, negative, and zero last coordinate in a boundary chart ([[def-inward-outward-and-boundary-tangent-vectors]]).

## Proof

**Proof technique:** direct.

1.1 In the chosen boundary chart take $\rho=x^n$. It is nonnegative, vanishes precisely on the face, and has nonzero differential, so it is a boundary-defining function by [L1]. [given, L1, construct]

2.1 For any boundary-defining function $\rho$, its restriction to the face is zero, so $d\rho_p$ vanishes on the tangent hyperplane. Its derivative in the positive normal coordinate is nonnegative because $\rho\ge0$ on the half-space and $\rho(p)=0$; by [L1] it is nonzero, hence positive. Therefore $d\rho_p(v)$ has the sign of the last coordinate of $v$, and [L2] gives $d\rho_p(v)>0$ exactly for inward $v$. [given, L1, L2, step 1.1] ∎
