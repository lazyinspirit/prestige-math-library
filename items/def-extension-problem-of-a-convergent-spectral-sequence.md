---
id: def-extension-problem-of-a-convergent-spectral-sequence
kind: definition
title: Extension problem of a convergent spectral sequence
deps: ["def-abutment-to-a-filtered-object"]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Charles A. Weibel, An Introduction to Homological Algebra, Chapter 5
      url: https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf
    - title: Romyar Sharifi, Homological Algebra
      url: https://math.ucla.edu/~sharifi/homalg.pdf
status: published
origin: pipeline
pipeline_run: phase-2-catchup-24
---



## Definition

For the abutment data of [[def-abutment-to-a-filtered-object]], the **extension problem** is reconstructing the filtered $H_n$ from its successive pieces $\operatorname{gr}_pH_n$. Each step has a subobject and quotient
$$0\longrightarrow F_{p-1}H_n\longrightarrow F_pH_n\longrightarrow\operatorname{gr}_pH_n\longrightarrow0.$$
Specifying the two outside objects does not specify the middle one or the maps. A splitting would supply a section of the quotient map and an identification with the direct sum compatible with the subobject. Neither collapse nor a list of graded pieces supplies such sections. The one-jump case has no nontrivial extension between two nonzero pieces.

## Source notes

[Weibel, Chapter 5](https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf), §5.2 pp.122–125 and Definitions 5.4.2–4 pp.132–133; [Sharifi](https://math.ucla.edu/~sharifi/homalg.pdf), §4.1 pp.87–89 and Definition 4.2.1 p.90.
