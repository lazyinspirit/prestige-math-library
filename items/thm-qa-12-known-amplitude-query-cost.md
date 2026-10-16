---
id: thm-qa-12-known-amplitude-query-cost
kind: theorem
title: "Known-amplitude amplification query cost"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 20
deps:
  - alg-qa-12-known-amplitude-amplification
  - thm-qa-12-known-amplitude-success-bound
  - def-qa-quantum-query-complexity
  - def-qc-circuit-cost-model
  - def-qc-inverse-unitary-access
  - def-qc-reflection
  - thm-qa-12-fixed-amplification-query-cost
justified_by: []
proof_strategy: direct
axiom_use: "None; the iteration count is bounded by an explicit finite integer."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Gilles Brassard, Peter Høyer, Michele Mosca, and Alain Tapp, Quantum Amplitude Amplification and Estimation"
      url: "https://arxiv.org/pdf/quant-ph/0005055"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Statement

For $0<a\le1$, the known-amplitude procedure uses $O(a^{-1/2})$ calls to $A$, $A^\dagger$, and the good-subspace phase operation, with success probability at least $1/2$. State preparation, zero-input reflections, final verification, exact arithmetic, gate synthesis, and any controlled access retain their separately declared costs. The $a=0$ branch returns fail and is outside this bound.

## Facts & Assumptions

**Given:** The known-amplitude algorithm and the query/gate cost coordinates.

[F1] [[alg-qa-12-known-amplitude-amplification]]: the selected integer satisfies $k\le\lceil1/\sqrt a\rceil$, with one optional final verifier.

[F2] [[thm-qa-12-fixed-amplification-query-cost]]: a fixed $k$ uses $k+1$ calls to $A$, $k$ calls to $A^\dagger$, and $k$ calls to each of the good and zero-input phase operations.

[F3] [[thm-qa-12-known-amplitude-success-bound]]: the success probability is at least $\max\{a,1-a\}$ for $0<a<1$, and equals $1$ at $a=1$.

[F4] [[def-qa-quantum-query-complexity]]: query cost counts designated oracle calls, while nonoracle gates use separate coordinates.

[F5] [[def-qc-circuit-cost-model]]: calls, gates, state preparation, and classical computation are distinct charged resources.

## Proof

1.1 For $0<a<1$, [F1] gives $k\le\lceil a^{-1/2}\rceil\le a^{-1/2}+1\le2a^{-1/2}$. By [F2], at most $k+1$ forward calls to $A$, $k$ inverse calls to $A^\dagger$, and $k$ good-phase calls occur. The optional verifier adds at most its one declared call. [given, F1, F2, algebra]

2.1 The count in step 1.1 is $O(a^{-1/2})$ in each of the three named access coordinates. The success lower bound follows from [F3]; at $a=1$ the direct branch uses one preparation and succeeds, which is also $O(a^{-1/2})$. By [F4]–[F5], exact selection of $k$, gate synthesis, and other cost coordinates are not hidden in the query bound. [F3, F4, F5, step 1.1, algebra] ∎
