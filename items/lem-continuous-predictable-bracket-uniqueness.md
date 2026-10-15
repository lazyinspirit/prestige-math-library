---
id: lem-continuous-predictable-bracket-uniqueness
kind: lemma
title: "Uniqueness of continuous predictable brackets"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 2
deps:
  - def-optional-and-predictable-brackets-for-counting-processes
  - lem-continuous-finite-variation-martingale-is-zero
  - def-continuous-time-adapted-process-and-martingale
  - thm-basic-algebra-and-order-properties-of-conditional-expectation
  - def-law-modification-and-indistinguishability-of-processes
  - def-axiom-of-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Richard F. Bass, SDEs with Jumps, Section 2.4, PDF pp. 4–6"
      url: "https://sites.math.duke.edu/~rtd/CPSS2007/Basscornell.pdf"
    - title: "Lu Tian, STAT331 Unit 9: Some Key Results for Counting Process Martingales, PDF pp. 9–12"
      url: "https://web.stanford.edu/~lutian/coursepdf/martingale2.pdf"

---

## Statement

Let $X$ be an adapted process on $[0,T]$. Suppose $C,D$ are continuous,
predictable finite-variation processes with $C_0=D_0=0$,
$\mathbb E[\operatorname{Var}(C)_T+\operatorname{Var}(D)_T]<\infty$, and
both $X-C$ and $X-D$ are martingales. Then $C$ and $D$ are indistinguishable.

## Facts & Assumptions

**Given:** The hypotheses of the Statement and the continuous predictable compensator convention of [[def-optional-and-predictable-brackets-for-counting-processes]].

[F1] A continuous finite-variation martingale with integrable total variation and initial value zero is indistinguishably zero. ([[lem-continuous-finite-variation-martingale-is-zero]])

[F2] A martingale is an adapted integrable process satisfying the all-pairs conditional-expectation identity. ([[def-continuous-time-adapted-process-and-martingale]])

[F3] Conditional expectation is linear, so differences of martingales are martingales. ([[thm-basic-algebra-and-order-properties-of-conditional-expectation]])

[F4] Indistinguishability means equality for all times outside one probability-one event. ([[def-law-modification-and-indistinguishability-of-processes]])

[A1] AC is inherited from the conditional-expectation interface in [F2]. ([[def-axiom-of-choice]])

## Proof

1.1 The difference $D-C=(X-C)-(X-D)$ is a martingale by [F3]. It is continuous, has finite variation, starts at zero, and $\mathbb E\operatorname{Var}(D-C)_T\le\mathbb E\operatorname{Var}(D)_T+\mathbb E\operatorname{Var}(C)_T<\infty$, so it satisfies [F1]. [A1, F1, F2, F3, given]

2.1 By [F1], $D-C$ is zero outside one probability-one event, which is indistinguishability by [F4]. Hence $C=D$ indistinguishably, proving uniqueness for both scalar and cross-bracket compensators in the stated continuous class. [F1, F4, step 1.1] ∎

## Source notes

The cited sources formulate predictable brackets through predictable
compensators. The local uniqueness proof reduces that convention to the
finite-variation martingale lemma, rather than assuming a continuous-time
Doob–Meyer uniqueness result not otherwise supplied on this page.

