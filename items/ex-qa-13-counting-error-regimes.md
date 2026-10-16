---
id: ex-qa-13-counting-error-regimes
kind: example
title: "Counting bounds at zero, one, half, and all marked"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 22
deps:
  - alg-qa-13-counting-from-amplitude-estimation
  - thm-qa-13-counting-error-guarantee
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; all constructions and measurement schedules are finite, and the analytic estimates use the stated real-analysis suppliers."
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Brassard, Høyer, Mosca, and Tapp, Quantum Amplitude Amplification and Estimation, complete article, §§4–5, Theorems 11–18"
      url: "https://arxiv.org/pdf/quant-ph/0005055"
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, complete lecture notes, §§19.1–19.3"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, complete 239-page notes, §7.3"
      url: "https://arxiv.org/pdf/1907.09415"
---
## Example

Take $N=16$, $M=4$, and $k=1$. Evaluate the generic raw count error expression at $t=0,1,8,16$ and compare it with the endpoint certainty claims.

## Facts & Assumptions

**Given:** $N=16$, $M=4$, $k=1$, and counts $t\in\{0,1,8,16\}$.

[F1] The raw count error expression is $2\pi k\sqrt{t(N-t)}/M+\pi^2k^2N/M^2$ ([[thm-qa-13-counting-error-guarantee]]).

[F2] Counts $t=0$ and $t=N$ are returned exactly when $M$ is even ([[thm-qa-13-counting-error-guarantee]]).

## Verification

1.1 Substituting $N=16,M=4,k=1$ into [F1] gives the generic expression $E(t)=\frac{\pi}{2}\sqrt{t(16-t)}+\pi^2$. [given, F1, algebra]

2.1 At $t=0$, this expression is $\pi^2$ but [F2] sharpens the actual error to zero. At $t=1$, it is $\frac{\pi\sqrt{15}}2+\pi^2$. At $t=8$, it is $4\pi+\pi^2$. At $t=16$, the expression again equals $\pi^2$, while [F2] gives exact output $16$. [given, F1, F2, step 1.1, algebra]

3.1 The first-order term is zero at both endpoints and largest here at the half-count $t=8$; the second-order uniform term alone does not encode the exact endpoint behavior. All four substitutions agree with the theorem, and the endpoint cases use its explicit certainty clause. [F1, F2, step 2.1] ∎

