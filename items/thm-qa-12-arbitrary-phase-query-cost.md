---
id: thm-qa-12-arbitrary-phase-query-cost
kind: theorem
title: "Arbitrary-phase amplification query count"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 19
deps:
  - alg-qa-12-arbitrary-phase-amplification
  - def-qa-quantum-query-complexity
  - def-qc-circuit-cost-model
  - def-qc-inverse-unitary-access
  - def-qc-reflection
  - def-qc-controlled-unitary-access
  - thm-qc-controlled-global-phase-is-relative-phase
justified_by: []
proof_strategy: direct
axiom_use: "None; the number of factors is the supplied finite integer m."
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
    - title: "Peter Høyer, On Arbitrary Phases in Quantum Amplitude Amplification"
      url: "https://arxiv.org/pdf/quant-ph/0006031"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Statement

With $m$ arbitrary-phase iterates, the procedure uses one initial forward $A$, then $m$ forward $A$ calls, $m$ inverse $A^\dagger$ calls, $m$ $S_0(\phi)$ calls, and $m$ $S_{\mathrm{good}}(\varphi)$ calls. It uses one final projective instrument and at most one separately supplied classical verification. Controlled forms are charged only under explicit access, and the outer minus sign is retained under any control.

## Facts & Assumptions

**Given:** The finite integer $m$, the arbitrary-phase algorithm, and the declared access/cost model.

[F1] [[alg-qa-12-arbitrary-phase-amplification]]: $Q=-A S_0(\phi)A^\dagger S_{\mathrm{good}}(\varphi)$ is applied exactly $m$ times after one initial preparation.

[F2] [[def-qc-inverse-unitary-access]]: inverse calls are distinct declared access operations.

[F3] [[def-qc-circuit-cost-model]] and [[def-qa-quantum-query-complexity]]: query calls, phase gates, measurements, and classical costs are separate coordinates.

[F4] [[def-qc-controlled-unitary-access]] and [[thm-qc-controlled-global-phase-is-relative-phase]]: controlled access is explicit, and the scalar phase of a controlled block is observable relative to the other control branch.

## Proof

1.1 The initial preparation in [F1] uses one forward call to $A$. Each of the $m$ factors of $Q$ contributes exactly one $A$, one $A^\dagger$, one $S_0(\phi)$, and one $S_{\mathrm{good}}(\varphi)$, giving the stated counts. The projective instrument and optional verifier occur once after the loop. [given, F1, F2, algebra]

2.1 The access and cost conventions in [F3]–[F4] keep any controlled access, phase-gate synthesis, state preparation, and verification in their own coordinates. In particular, replacing $Q$ by $-Q$ inside a controlled call changes the relative control phase and is not a free rewrite. [F3, F4, step 1.1] ∎
