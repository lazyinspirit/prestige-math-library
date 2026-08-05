---
id: thm-open-connected-subsets-of-rn-are-polygonally-connected
kind: theorem
title: "For an open subset of $\\mathbb{R}^n$, connectedness, path-connectedness and polygonal connectedness are equivalent"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-polygonally-reachable-set-is-clopen, thm-path-connected-implies-connected, def-connected-space, def-polygonal-path-and-polygonal-connectedness]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Path-connected space"
      url: "https://en.wikipedia.org/wiki/Path-connected_space"
    - title: "Connected space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Connected_space"
pipeline_run: null
---

## Statement

Let $U\subseteq\mathbb{R}^n$ be open. Then $U$ is connected if and only if it is path-connected, if and only if it is polygonally connected.

## Facts & Assumptions

**Given:** An open subset $U\subseteq\mathbb{R}^n$.

[L1] The polygonally reachable set from a point of $U$ is clopen in $U$ ([[lem-polygonally-reachable-set-is-clopen]]).

[L2] A polygonal path is a path, and every path-connected space is connected ([[def-polygonal-path-and-polygonal-connectedness]], [[thm-path-connected-implies-connected]]).

[L3] A connected space has no nonempty proper clopen subset ([[def-connected-space]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $U$ is connected. If $U=\varnothing$, then polygonal connectedness, path-connectedness, and connectedness all hold vacuously. Otherwise choose $a\in U$. The reachable set $R_a$ is nonempty and clopen by [L1], so [L3] gives $R_a=U$. [L1, L3, cases, choose]

1.2 Polygonal connectedness implies path-connectedness, and path-connectedness implies connectedness, by [L2]. [L2]

2.1 In the nonempty case, every point of $U=R_a$ is joined to $a$ by a polygonal path; reversing one such path and concatenating it with another joins any two points of $U$. Together with the empty case, connectedness implies polygonal connectedness. [step 1.1]

3.1 Steps 2.1 and 1.2 give all three equivalences. [step 2.1, step 1.2] ∎
