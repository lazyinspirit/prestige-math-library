---
id: thm-qa-12-exact-success-query-cost
kind: theorem
title: "Exact-success amplitude amplification query cost"
status: published
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

For $0<a\le1$, the exact-success procedure uses $O(a^{-1/2})$ forward calls to $A$, inverse calls to $A^\dagger$, and calls in each declared flag/reflection coordinate. In the $0<a<1$ branch, the explicit preparation and $m$ iterates use $m+1$ forward $A$ calls, $m$ inverse $A^\dagger$ calls, and $2m+1$ controlled flag rotations or their inverses.

With constructed good reflections, the total number of $C_{\mathrm{good}}$ or inverse calls is $6m+2$ and there are $m$ $CZ$ gates. With directly supplied enlarged good reflections, these counts are instead $4m+2$ flag calls and $m$ direct $S'_{\mathrm{good}}$ calls. Either mode implements exactly $m$ logical good reflections.

With constructed zero reflections, there are $m$ controlled-$S_0$ calls, $2m$ Toffolis and $4m$ $X$ gates. With direct enlarged-zero access, there are instead $m$ direct $S'_0$ calls. One external clean scratch bit suffices for all constructed reflections and is reusable; no controlled $A$ call is used.

These counts exclude the one explicitly supplied terminal projective instrument and any final classical verification. If the terminal instrument is constructed as in the algorithm, add two flag calls, two Toffolis, one bit measurement and a second external clean scratch bit; thus the constructed-good-reflection total becomes $6m+4$ flag calls (or $4m+4$ with direct good reflections). Both scratch bits reset exactly. Exact-real arithmetic, qubit gates, workspace, measurement, gate synthesis, preparation and any final verifier retain their separate costs.

## Facts & Assumptions

**Given:** The exact-success algorithm and the separate access/cost coordinates.

[F1] [[alg-qa-12-exact-success-amplification]]: $m=\lceil\pi/(4\theta)-1/2\rceil$, $\theta$ satisfies $\sin^2\theta=a$, and each use of $A'$ computes and uncomputes the good flag once.

[F2] [[def-qa-quantum-query-complexity]]: query calls are counted separately from gates.

[F3] [[def-qc-controlled-unitary-access]] and [[def-qc-inverse-unitary-access]]: controlled and inverse capabilities are explicit and separately charged.

[F4] [[def-qc-clean-and-dirty-ancillas]] and [[def-qc-circuit-cost-model]]: clean workspace and gate, preparation, and classical costs are separate coordinates.

[F5] [[cor-sine-and-cosine-are-one-lipschitz]]: $\sin\theta\le\theta$ for $\theta\ge0$.

## Proof

1.1 In the nontrivial branch $0<a<1$, $m\le\pi/(4\theta)+1/2$. Since $\sqrt a=\sin\theta\le\theta$ by [F5] and $a\le1$, $m\le(\pi/4+1/2)/\sqrt a$. The direct $a=1$ branch uses a constant number of calls. [given, F1, F5, algebra]

1.2 The initial $A'$ contributes one forward $A$, two flag calls and one controlled flag rotation. Each of the $m$ iterates contains one $A'$ and one $A'^\dagger$, contributing one forward and one inverse $A$, four flag calls and two controlled rotations. Thus these parts contribute $m+1$ forward $A$, $m$ inverse $A^\dagger$, $4m+2$ flag calls and $2m+1$ rotations. Each constructed good reflection contributes two further flag calls and one $CZ$, giving $6m+2$ flag calls and $m$ $CZ$ gates. Direct good-reflection access instead contributes $m$ calls of its own coordinate and leaves the flag total $4m+2$. [given, F1, F3, F4, algebra]

1.3 Each constructed zero reflection uses one controlled-$S_0$, two Toffolis and four $X$ gates; $m$ repetitions give $m,2m,4m$, respectively. Direct zero-reflection access instead uses $m$ direct $S'_0$ calls. The same external clean scratch is reused, since the exact reflection constructions return it to zero. The optional terminal construction uses two flag calls and two Toffolis around one bit measurement, with a second external bit, so its addition gives the stated $6m+4$ or $4m+4$ flag total. No other step invokes $C_{\mathrm{good}}$; the separately supplied terminal mode has no constituent flag count inferred. [given, F1, F3, F4, algebra]

2.1 The bounds in steps 1.1–1.3 are $O(a^{-1/2})$. By [F2]–[F4], they count only the declared query and access coordinates; exact arithmetic, synthesis, preparation, measurement, and any final verifier retain their separate costs. The success guarantee is [F1] together with [[thm-qa-12-exact-success-guarantee]]. [F1, F2, F3, F4, step 1.1, step 1.2, step 1.3] ∎
