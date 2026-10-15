---
id: ex-death-is-not-missingness
kind: example
title: "Death is not automatically a missing outcome"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 1
deps:
  - def-full-observed-and-missing-data
  - def-random-element-and-real-random-variable
  - def-estimand-on-a-statistical-model
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Hernán and Robins, Causal Inference: What If, Chapter 8, §§8.4–8.5, and §12.6"
      url: "https://miguelhernan.org/s/hernanrobins_WhatIf_19aug26.pdf"
    - title: "National Research Council, The Prevention and Treatment of Missing Data in Clinical Trials, Chapter 4, pp. 47–49"
      url: "https://www.nationalacademies.org/read/12955/chapter/6"
    - title: "Lu Mao, Missing Data: Foundations and Methods, Chapter 1, §1.1"
      url: "https://lmaowisc.github.io/missing_data/chapter-1.html"
---

## Example

Suppose the scientific target is a quality-of-life score at time $t$ for all
participants enrolled at baseline, with positive probability of death before
$t$, and the score is defined only for people alive at $t$. If death before
$t$ makes the score itself undefined, those post-death values are not merely
unrecorded full-data components. An unconditional mean over all enrolled
participants has no value until the scientist specifies a different target,
such as a composite outcome or a survivor-specific target.

## Facts & Assumptions

**Given:** A population probability space of all baseline-enrolled participants with $P(D=1)>0$; $D=1$ means death before $t$; and the proposed score $Q_t$ is defined only when $D=0$, with no post-death value stipulated.

[F1] [[def-random-element-and-real-random-variable]]: a real random variable is a measurable map from the entire probability space to $\mathbb R$.

[F2] [[def-full-observed-and-missing-data]]: the full-data vector contains the values that define the target, while the response pattern records which of those values are available.

[F3] [[def-estimand-on-a-statistical-model]]: an estimand is a specified function on the model's parameter set.

## Verification

1.1 Since $Q_t$ has no value stipulated on the event $\{D=1\}$, it is only a function on $\{D=0\}$ and is not a map from the whole baseline probability space to $\mathbb R$. It therefore is not a real random variable on the stated population by [F1]. [F1, given]

2.1 The observed-pattern construction [F2] can mask a coordinate of a full-data vector, but it does not define a value where the scientific outcome itself does not exist. Thus $E(Q_t)$ over all enrolled participants is not a well-defined target function as required by [F3]. Assigning a post-death value, using a composite outcome, or restricting to survivors defines a different scientific target and must be stated separately. [F2, F3, step 1.1, given] ∎