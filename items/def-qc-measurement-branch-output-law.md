---
id: def-qc-measurement-branch-output-law
kind: definition
title: "The outcome law and outputs of a measured circuit"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps:
  - def-qc-povm-and-outcome-law
  - def-qc-instrument-and-conditional-state
  - thm-qc-instrument-outcome-law-normalizes
  - thm-qc-instrument-induces-povm
justified_by: []
dependency_level: 8
proof_strategy: direct
axiom_use: "None; the outcome set is finite."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "John Preskill, Quantum Computation, Chapter 3: Foundations II: Measurement and Evolution"
      url: "https://www.preskill.caltech.edu/ph219/chap3_15.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Definition

For a finite instrument $(\mathcal I_a)_{a\in\Omega}$ and input density operator $\rho$, define the unnormalized branch output $\tau_a:=\mathcal I_a(\rho)$ and probability $p_a:=\operatorname{tr}(\tau_a)$. The family $(p_a)_{a\in\Omega}$ is a probability distribution by [[thm-qc-instrument-outcome-law-normalizes]]. Its uniquely induced POVM $(E_a)$ satisfies $p_a=\operatorname{tr}(\rho E_a)$ by [[thm-qc-instrument-induces-povm]] and the outcome-law definition in [[def-qc-povm-and-outcome-law]].

The conditional branch output is $\tau_a/p_a$ when $p_a>0$ and is $\bot$ when $p_a=0$, exactly as specified by [[def-qc-instrument-and-conditional-state]]. No normalized state is assigned to a zero-probability branch. A Kraus representation $\mathcal I_a(X)=\sum_jM_{a,j}XM_{a,j}^\dagger$ is only a representation of the observed branch map: $a$ is the outcome and $j$ is not an additional observed outcome.

## Facts & Assumptions

**Given:** A finite instrument, a density operator $\rho$ on its input space, and its finite outcome set $\Omega$.

[F1] [[def-qc-instrument-and-conditional-state]]: $\tau_a=\mathcal I_a(\rho)$, $p_a=\operatorname{tr}(\tau_a)$, and a conditional output is assigned only for $p_a>0$.

[F2] [[thm-qc-instrument-outcome-law-normalizes]]: the weights $p_a$ are nonnegative and sum to one.

[F3] [[thm-qc-instrument-induces-povm]]: each branch weight equals the induced POVM weight $\operatorname{tr}(\rho E_a)$.

[F4] [[def-qc-povm-and-outcome-law]]: a POVM assigns weights $\operatorname{tr}(\rho E_a)$ and does not specify a conditional output state.

## Proof

1.1 The branch output is the unnormalized operator $\tau_a=\mathcal I_a(\rho)$, and its trace is the branch weight $p_a$, by [F1]. [given, F1]

1.2 The weights form a finite probability law by [F2], and the same law is $\operatorname{tr}(\rho E_a)$ by [F3] and [F4]. This establishes consistency of the instrument and POVM descriptions. [given, F2, F3, F4]

2.1 If $p_a>0$, the conditional output is defined by division by that positive scalar; if $p_a=0$, [F1] assigns $\bot$ and no division is made. The finite Kraus index remains internal to $\mathcal I_a$ and is not part of $\Omega$. [given, F1, step 1.2] ∎

