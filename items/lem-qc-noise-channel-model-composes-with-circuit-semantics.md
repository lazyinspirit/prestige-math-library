---
id: lem-qc-noise-channel-model-composes-with-circuit-semantics
kind: lemma
title: "The Local Noise Model Composes With Circuit Semantics"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
  - def-qc-finite-channel-location-schedule
  - def-qc-quantum-channel
  - def-finite-probability-space-and-event
  - thm-qc-channels-compose-and-tensor
dependency_level: 9
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "D. Aharonov and M. Ben-Or, Fault-Tolerant Quantum Computation With Constant Error"
      url: "https://arxiv.org/pdf/quant-ph/9611025"
    - title: "John Preskill, Quantum Computation, Chapter 7: Quantum Error Correction"
      url: "https://www.preskill.caltech.edu/ph219/chap7_26_6A.pdf"
---

## Statement

For a finite channel-location schedule and any finite probability law on its fault patterns, suppose each conditional pattern replaces faulty locations by CPTP maps on their declared supports. Every conditional denotation is a CPTP channel, and the probability-weighted average of these denotations is a CPTP channel. No independence assumption on the fault-pattern law is required.

## Facts & Assumptions


**Given:** A finite channel-location schedule, a finite probability law on its fault patterns, and one local CPTP replacement map for each faulty location in each pattern. Prove that the averaged noisy denotation is CPTP.

[F1] [[def-finite-probability-space-and-event]]: The outcome weights of a finite probability space are nonnegative and sum to one.

[F2] [[thm-qc-channels-compose-and-tensor]]: The composition of finite-dimensional quantum channels is a quantum channel.

[F3] [[def-qc-finite-channel-location-schedule]]: A schedule is a finite ordered list of full-register channels, and its denotation composes them in chronological order.

## Proof

1.1 Fix a fault pattern $F$. At each $\ell\in F$, insert its declared local CPTP replacement; at each $\ell\notin F$, use the ideal CPTP location map. Each is a full-register channel by the schedule definition [F3]. Applying [F2] successively in chronological order shows the finite composition $\Phi_F$ is CPTP. [given, F2, F3]

1.2 Let $w_F$ be the probability of pattern $F$. The mutually disjoint pattern events cover the finite sample space, so their weights are nonnegative and sum to one by [F1]. [given, F1, algebra]

2.1 Define $\overline\Phi=\sum_Fw_F\Phi_F$. It is completely positive: for every finite reference $R$ and positive $X$, $(\overline\Phi\otimes\operatorname{id}_R)(X)=\sum_Fw_F(\Phi_F\otimes\operatorname{id}_R)(X)$ is a nonnegative weighted sum of positive operators. It is trace-preserving because $\operatorname{tr}\overline\Phi(X)=\sum_Fw_F\operatorname{tr}\Phi_F(X)=\sum_Fw_F\operatorname{tr}(X)=\operatorname{tr}(X)$ by steps 1.1 and 1.2. [F1, step 1.1, step 1.2, algebra]

3.1 For each input operator, averaging the conditional schedule outputs is exactly application of $\overline\Phi$. Thus the finite stochastic schedule has a well-defined CPTP denotation. [given, step 1.1, step 1.2, step 2.1, algebra] ∎

## Remarks

The proof uses the finite channel-location schedule, finite probability law, and channel-composition result. It applies to both the independent and local-stochastic fault-set branches.

