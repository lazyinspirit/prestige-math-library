---
id: rem-adaptation-rank-and-empirical-transfer
kind: remark
title: "Rank restrictions and empirical transfer claims"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - thm-low-rank-adapter-merging-and-gradients
  - thm-low-rank-adapter-factorization-ambiguity
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Edward Hu et al., LoRA: Low-Rank Adaptation of Large Language Models, arXiv:2106.09685v2, §§4–5"
      url: "https://arxiv.org/pdf/2106.09685"
---

## Remark

Low-rank adaptation constrains the update of one linear layer to rank at most $r$ and uses $r(d+k)$ trainable scalar coordinates for the two factors, excluding the frozen base matrix and any optional biases. These algebraic facts do not imply that a downstream task has an optimal or effective update of rank at most $r$, that a finite-budget training procedure reaches an optimum, that transfer performance improves, or that low rank prevents catastrophic forgetting. Empirical rank, quality, throughput, memory, and latency findings for a particular model, data set, and hardware configuration remain empirical observations under that setup; they are not consequences of the factorization or gradient formulas. Merging the factors has an exact real-arithmetic output identity, but this does not assert bitwise equality, floating-point accuracy, adapter-switching latency, storage savings, or hardware speed.

## Remark references

[[thm-low-rank-adapter-factorization-ambiguity]]: rank capacity and factorization symmetry proved for finite real matrices.

[[thm-low-rank-adapter-merging-and-gradients]]: exact real-arithmetic merge and factor-gradient formulas.

[Hu et al., §§4–5: LoRA parameterization and source-specific empirical context](https://arxiv.org/pdf/2106.09685)
