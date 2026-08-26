---
id: cex-quasi-isometric-spaces-without-bounded-geometry-need-not-have-comparable-ball-counts
kind: counterexample
title: "Quasi-isometry without bounded geometry need not preserve local ball counts"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [def-coarsely-dense-subset-and-quasi-isometry]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "C. Löh, Geometric Group Theory, Sections 5.1-5.3"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ss22/lecture_notes.pdf"
pipeline_run: null
---

## Statement refuted

If two metric spaces are quasi-isometric, then the cardinalities of their
radius-one balls are uniformly comparable.

## Facts & Assumptions

**Given:** The graph $X$ obtained from the integer line by attaching $n$ leaves to the vertex $n$ for each integer $n \ge 1$, with every edge of length $1$, and the usual integer line $Y=\mathbb Z$ with graph metric.

[L1] A quasi-isometry is a coarse Lipschitz map admitting a coarse Lipschitz quasi-inverse ([[def-coarsely-dense-subset-and-quasi-isometry]]).

## Counterexample

**Proof technique:** direct.

1.1 Let $p : X \to Y$ collapse every attached leaf at $n$ to the spine vertex $n$, and let $i : Y \to X$ be the inclusion of the spine. Both maps are $1$-Lipschitz, $p \circ i = \operatorname{id}_Y$, and every vertex of $X$ lies at distance at most $1$ from $i(Y)$. So $p$ is a quasi-isometry by [L1]. [L1, algebra]

1.2 The radius-one ball about the spine vertex $n \ge 1$ in $X$ contains the two neighboring spine vertices, the center $n$, and the $n$ attached leaves, so it has cardinality $n+3$. The radius-one ball about $n$ in $Y$ always has cardinality $3$. These ball sizes are not uniformly comparable as $n \to \infty$. [given, algebra]

2.1 Thus $X$ and $Y$ are quasi-isometric by step 1.1, while step 1.2 refutes the stated ball-count conclusion. [step 1.1, step 1.2] ∎
