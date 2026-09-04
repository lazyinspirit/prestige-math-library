---
id: cex-savitch-stores-the-whole-configuration-graph
kind: counterexample
title: "A Savitch recursion that never materializes the full configuration graph"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [fs-savitch-stores-the-whole-configuration-graph]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Eric Blais, Models of Computation, 17. Space Complexity"
      url: "https://cs.uwaterloo.ca/~eblais/cs365/w25/space"
---

## Statement refuted

Savitch's algorithm stores the whole configuration graph.

## Facts & Assumptions

**Given:** a Savitch reachability search on a graph with many midpoint candidates.

[L1] The false statement being refuted is exactly the claim above ([[fs-savitch-stores-the-whole-configuration-graph]]).

## Counterexample

**Proof technique:** direct.

1.1 Take a graph with start vertex $s$, target vertex $t$, and many possible midpoints $z_1,\dots,z_m$, but suppose only $z_7$ actually lies on a short path from $s$ to $t$. This is a legitimate instance of the claim in [L1]. [L1, given]

2.1 Savitch's recursion tests the midpoint candidates one by one. At any moment it stores only the current pair of endpoints, the current candidate $z_j$, and the recursion stack for the shorter subproblems. When the test for $z_j$ fails, that local data is discarded before $z_{j+1}$ is tried. Hence no stage materializes the whole graph at once, even though the algorithm still eventually finds the successful midpoint $z_7$. [step 1.1, algebra] ∎
