---
id: fs-every-triangle-free-graph-is-bipartite
kind: false-statement
title: "Every triangle-free graph is bipartite"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-standard-complete-bipartite-path-and-cycle-graphs, thm-bipartite-iff-no-odd-cycle]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Yufei Zhao, Graph Theory and Additive Combinatorics"
      url: "https://ocw.mit.edu/courses/18-225-graph-theory-and-additive-combinatorics-fall-2023/mit18_225_f23_lec_full.pdf"
pipeline_run: null
---

## False Statement

Every triangle-free graph is bipartite.

## Facts & Assumptions

**Given:** The hypotheses and notation of the statement above.

[F1] For $n\ge3$, $C_n$ has the consecutive edges $\{i,i+1\}$ and the closing edge $\{n-1,0\}$ ([[def-standard-complete-bipartite-path-and-cycle-graphs]]).

[F2] A finite simple graph is bipartite if and only if it contains no odd cycle ([[thm-bipartite-iff-no-odd-cycle]]).

## Refutation

**Proof technique:** give the five-cycle.

1.1 The only cycle in $C_5$ using three edges would require a chord, and $C_5$ has only its five consecutive edges. Hence $C_5$ is triangle-free. [given, F1]

1.2 The graph $C_5$ is itself an odd cycle, so the cited equivalence says it is not bipartite. [given, F2]

2.1 Thus $C_5$ satisfies the premise and fails the conclusion, refuting the statement. [step 1.1, step 1.2] ∎
