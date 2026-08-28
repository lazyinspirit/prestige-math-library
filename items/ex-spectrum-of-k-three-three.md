---
id: ex-spectrum-of-k-three-three
kind: example
title: "The graph $K_{3,3}$ has adjacency spectrum $\\{3,0,0,0,0,-3\\}$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-spectrum-of-the-complete-bipartite-graph]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Richard P. Stanley, MIT 18.314 handout, Problem 1"
      url: "https://ocw.mit.edu/courses/18-314-combinatorial-analysis-fall-2014/2724112ea36679f82dc04f0b2f4f355e_MIT18_314F14_mt.pdf"
---

## Example

The complete bipartite graph $K_{3,3}$ has adjacency spectrum
$\{3,0,0,0,0,-3\}$.

## Facts & Assumptions

**Given:** The graph $K_{3,3}$.

[L1] The graph $K_{m,n}$ has adjacency spectrum $\{\sqrt{mn},0^{m+n-2},-\sqrt{mn}\}$ ([[thm-spectrum-of-the-complete-bipartite-graph]]).

## Verification

**Proof technique:** direct.

1.1 Applying [L1] with $m=n=3$ gives the eigenvalues $\sqrt{9}=3$, $0^{3+3-2}=0^4$, and $-\sqrt{9}=-3$. [L1, algebra]

2.1 So the ordered spectrum is $\{3,0,0,0,0,-3\}$. [step 1.1] ∎
