---
id: thm-qa-13-counting-error-guarantee
kind: theorem
title: "Quantum counting error and boundary cases"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 21
deps:
  - alg-qa-13-counting-from-amplitude-estimation
  - thm-qa-13-amplitude-estimation-guarantee
  - lem-qa-13-grover-eigenphase-relation
  - thm-qa-phase-estimation-exact-grid
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; all constructions and measurement schedules are finite, and the analytic estimates use the stated real-analysis suppliers."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Brassard, Høyer, Mosca, and Tapp, Quantum Amplitude Amplification and Estimation, complete article, §§4–5, Theorems 11–18"
      url: "https://arxiv.org/pdf/quant-ph/0005055"
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, complete lecture notes, §§19.1–19.3"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, complete 239-page notes, §7.3"
      url: "https://arxiv.org/pdf/1907.09415"
---
## Statement

For an integer $n\ge0$, $N=2^n$, $t$ marked addresses among $N$, and $M=2^m\ge4$, the raw estimate satisfies
$$|\widetilde t-t|\le\frac{2\pi k\sqrt{t(N-t)}}M+\frac{\pi^2k^2N}{M^2}$$
with the same success probabilities as the amplitude-estimation theorem for integer $k\ge1$. If $t=0$, the raw estimate is zero with certainty. If $t=N$, the raw estimate is $N$ with certainty because $M$ is even.

## Facts & Assumptions

**Given:** an integer $n\ge0$, $N=2^n$, a predicate with exactly $t$ marked addresses, and the counting estimator with $M\ge4$.

[F1] Counting uses fraction amplitude $a=t/N$ and raw count $\widetilde t=N\widetilde a$ ([[alg-qa-13-counting-from-amplitude-estimation]]).

[F2] The amplitude-estimation error and confidence bound are stated in [[thm-qa-13-amplitude-estimation-guarantee]].

[F3] The endpoint Grover phases are exactly $0$ for $a=0$ and $1/2$ for $a=1$ ([[lem-qa-13-grover-eigenphase-relation]]).

[F4] A phase on the QPE grid is returned at its exact label with probability one ([[thm-qa-phase-estimation-exact-grid]]).

## Proof

1.1 Substitute $a=t/N$ in [F2] and multiply its error bound by $N$. Since $N\sqrt{a(1-a)}=\sqrt{t(N-t)}$ and $N(a)=t$, the result is the displayed inequality with unchanged event probability. [given, F1, F2, algebra]

2.1 If $t=0$, the phase is the exact grid phase zero, so QPE returns $y=0$ and $\widetilde t=0$. If $t=N$, the phase is $1/2$; the even grid size has exact label $M/2$, which returns $\widetilde t=N$. [given, F1, F3, F4, step 1.1, algebra] ∎

