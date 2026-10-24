---
id: ex-orthogonal-projection-has-one-borsuk-ulam-pair
kind: example
title: 'Orthogonal projection $S^2\to\mathbb R^2$ has exactly one antipodal pair with equal image'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-borsuk-ulam-in-dimension-two, def-euclidean-spheres-and-closed-balls, thm-componentwise-limits-and-continuity]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
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
    - title: "Allen Hatcher, Algebraic Topology, example after Theorem 1.10"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf"
pipeline_run: null
---

## Example

For the coordinate projection

$$q:S^2\longrightarrow\mathbb R^2,\qquad q(x,y,z)=(x,y),$$

the only antipodal pair with equal image is the unordered north-south pair $\{(0,0,1),(0,0,-1)\}$.

## Facts & Assumptions

**Given:** The unit sphere $S^2\subseteq\mathbb R^3$ and the coordinate projection $q(x,y,z)=(x,y)$.

[L1] Every continuous map $S^2\to\mathbb R^2$ has an antipodal pair with equal image ([[thm-borsuk-ulam-in-dimension-two]]).

[F1] The sphere $S^2$ consists of triples $(x,y,z)$ satisfying $x^2+y^2+z^2=1$ ([[def-euclidean-spheres-and-closed-balls]]).

[L2] Continuity of a map into $\mathbb R^2$ is equivalent to continuity of its coordinate functions ([[thm-componentwise-limits-and-continuity]]).

## Verification

**Proof technique:** direct.

1.1 Both coordinate functions of $q$ are continuous, so $q$ is continuous by [L2]. [given, L2]

2.1 If $v=(x,y,z)\in S^2$ satisfies $q(v)=q(-v)$, then $(x,y)=(-x,-y)$ and hence $x=y=0$. The unit-sphere equation gives $z^2=1$, so $v=(0,0,1)$ or $v=(0,0,-1)$. These are two points forming exactly one antipodal pair, and they do have equal image $(0,0)$, in agreement with [L1]. [step 1.1, F1, L1, algebra] ∎
