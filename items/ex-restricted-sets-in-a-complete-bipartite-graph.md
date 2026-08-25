---
id: ex-restricted-sets-in-a-complete-bipartite-graph
kind: example
title: "The two sides of a balanced complete bipartite graph are large restricted sets"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-c-sparse-and-c-restricted-vertex-set, def-standard-complete-bipartite-path-and-cycle-graphs, ex-zero-sparse-sets-are-the-stable-sets]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

In the balanced complete bipartite graph $K_{m,m}$ with $m\ge1$, each side is $0$-sparse and
therefore restricted; a set taking linearly many vertices from both sides is not
$\epsilon$-restricted when $0\le\epsilon<1/2$.

## Facts & Assumptions

**Given:** The complete bipartite graph $K_{m,m}$ with $m\ge1$ and bipartition $A\sqcup B$, a real $0\le\epsilon<1/2$, and a set $X$ meeting each side in exactly $a$ vertices.

[L1] Each side of a complete bipartite graph is stable and therefore $0$-sparse ([[def-standard-complete-bipartite-path-and-cycle-graphs]], [[ex-zero-sparse-sets-are-the-stable-sets]]).

[L2] A nonempty set $Y$ is $\epsilon$-restricted when either every vertex of $Y$ has at most $\epsilon|Y|$ neighbours in $Y$, or every vertex of $Y$ has at most $\epsilon|Y|$ non-neighbours in $Y$ other than itself ([[def-c-sparse-and-c-restricted-vertex-set]]).

## Verification

**Proof technique:** direct.

1.1 By [L1], each of $A$ and $B$ is $0$-sparse, so each is a restricted set of size $m$. [L1]

1.2 If $X$ takes $a$ vertices from each side, then every vertex of $X$ has exactly $a$ neighbours and $a-1$ non-neighbours inside $X$, while $|X|=2a$. [given]

2.1 For $0\le\epsilon<1/2$ and large $a$, neither inequality $a\le\epsilon(2a)$ nor $a-1\le\epsilon(2a)$ can hold. Hence such balanced mixed sets are not $\epsilon$-restricted. [step 1.2, L2, algebra] ∎
