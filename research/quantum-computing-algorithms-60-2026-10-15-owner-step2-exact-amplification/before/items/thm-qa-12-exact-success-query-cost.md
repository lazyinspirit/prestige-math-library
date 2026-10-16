---
id: thm-qa-12-exact-success-query-cost
kind: theorem
title: "Exact-success amplitude amplification query cost"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 20
deps:
  - alg-qa-12-exact-success-amplification
  - thm-qa-12-exact-success-guarantee
  - def-qa-quantum-query-complexity
  - def-qc-circuit-cost-model
  - def-qc-controlled-unitary-access
  - def-qc-inverse-unitary-access
  - def-qc-clean-and-dirty-ancillas
  - def-qc-reflection
  - cor-sine-and-cosine-are-one-lipschitz
justified_by: []
proof_strategy: direct
axiom_use: "None; the call counts are finite arithmetic in m."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Gilles Brassard, Peter Høyer, Michele Mosca, and Alain Tapp, Quantum Amplitude Amplification and Estimation"
      url: "https://arxiv.org/pdf/quant-ph/0005055"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Statement

For $0<a\le1$, the exact-success procedure uses $O(a^{-1/2})$ forward calls to $A$, inverse calls to $A^\dagger$, and good-projector or controlled-verifier calls. In the $0<a<1$ branch, the explicit preparation and $m$ iterates use $m+1$ forward $A$ calls, $m$ inverse $A^\dagger$ calls, $4m+2$ calls to $C_{\mathrm{good}}$ or its inverse, and $2m+1$ flag rotations or inverse rotations. There are $m$ good reflections and $m$ zero-input reflections. The final measurement and any classical verification are separately declared. Exact-real arithmetic, gate synthesis, and state preparation costs are not absorbed into the query count.

## Facts & Assumptions

**Given:** The exact-success algorithm and the separate access/cost coordinates.

[F1] [[alg-qa-12-exact-success-amplification]]: $m=\lceil\pi/(4\theta)-1/2\rceil$, $\theta$ satisfies $\sin^2\theta=a$, and each use of $A'$ computes and uncomputes the good flag once.

[F2] [[def-qa-quantum-query-complexity]]: query calls are counted separately from gates.

[F3] [[def-qc-controlled-unitary-access]] and [[def-qc-inverse-unitary-access]]: controlled and inverse capabilities are explicit and separately charged.

[F4] [[def-qc-clean-and-dirty-ancillas]] and [[def-qc-circuit-cost-model]]: clean workspace and gate, preparation, and classical costs are separate coordinates.

[F5] [[cor-sine-and-cosine-are-one-lipschitz]]: $\sin\theta\le\theta$ for $\theta\ge0$.

## Proof

1.1 In the nontrivial branch $0<a<1$, $m\le\pi/(4\theta)+1/2$. Since $\sqrt a=\sin\theta\le\theta$ by [F5] and $a\le1$, $m\le(\pi/4+1/2)/\sqrt a$. The direct $a=1$ branch uses a constant number of calls. [given, F1, F5, algebra]

1.2 The initial $A'$ contributes one forward $A$, two calls to $C_{\mathrm{good}}$ or its inverse, and one flag rotation. Each of the $m$ iterates contains one $A'$ and one $A'^\dagger$, hence two forward-or-inverse $A$ calls, four flag-computation/uncomputation calls, and two flag rotations. The two reflections occur once per iterate. Summing gives $m+1$, $m$, $4m+2$, $2m+1$, and $m$ of each reflection as stated. [given, F1, F3, F4, algebra]

2.1 The bounds in steps 1.1–1.2 are $O(a^{-1/2})$. By [F2]–[F4], they count only the declared query and access coordinates; exact arithmetic, synthesis, preparation, measurement, and any final verifier retain their separate costs. The success guarantee is [F1] together with [[thm-qa-12-exact-success-guarantee]]. [F1, F2, F3, F4, step 1.1, step 1.2] ∎
