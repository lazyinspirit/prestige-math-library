---
id: ex-ip-inversebench-prior-shift
kind: example
title: Prior-matched and out-of-distribution cases
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 7
deps:
  - def-ip-benchmark-risk-and-compute-budget
  - rem-ip-inversebench-scoped-findings
  - def-ip-inverse-risk-under-train-and-test-laws
  - def-ip-operator-and-prior-mismatch
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
axiom_use: "No choice axiom is used; the empirical training and test splits are supplied finite datasets."
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Hongkai Zheng et al., InverseBench: Benchmarking Plug-and-Play Diffusion Priors for Inverse Problems in Physical Sciences, ICLR 2025, full paper and appendices"
      url: "https://proceedings.iclr.cc/paper_files/paper/2025/file/e297068f5ec7f483a017948715b591fb-Paper-Conference.pdf"
      locator: "§4.1, PDF pp. 6–7: task-specific training/test sets; §4.3 and Figure 5, PDF pp. 9–10: black-hole digit and nine-cell inverse-scattering out-of-distribution cases; Appendix C, PDF pp. 28–29: prior-mismatch discussion and scope."
---

## Example

For an operational within-source reference, InverseBench trains its multi-coil MRI diffusion prior on $25{,}012$ fastMRI knee images and evaluates on $94$ held-out images from the same named data collection. This is a dataset-family match, not a claim that the population training and test laws are equal. Its separate out-of-distribution diagnostics change the source: a black-hole-imaging prior is trained on $50{,}000$ simulated general-relativistic magnetohydrodynamic images, while one stress test uses digit images; in linear inverse scattering, the prior is trained on sources with one through six cells, while the stress test uses nine-cell sources. The paper reports outputs drawn toward black-hole structure in the digit case and more effective recovery when the scattering source is close to the trained prior. These are finite, method- and dataset-specific observations; they provide no risk bound or distribution-shift guarantee.

## Example references

[[def-ip-benchmark-risk-and-compute-budget|Training and test laws are separately specified benchmark fields]]

[[def-ip-inverse-risk-under-train-and-test-laws|Risk depends on the named joint test law]]

[[def-ip-operator-and-prior-mismatch|Prior-support mismatch is distinct from operator or noise mismatch]]

[[rem-ip-inversebench-scoped-findings|InverseBench prior-shift findings are empirical and task-scoped]]

[Zheng et al., *InverseBench*, §4.1, §4.3, Figure 5, and Appendix C](https://proceedings.iclr.cc/paper_files/paper/2025/file/e297068f5ec7f483a017948715b591fb-Paper-Conference.pdf)

## Facts & Assumptions

**Given:** The finite train/test splits, each prior's training-source family, and the paper's selected out-of-distribution stress tests and qualitative observations.

[F1] [[def-ip-benchmark-risk-and-compute-budget]]: the training and test laws are separate inputs and need not be equal.

[F2] [[def-ip-inverse-risk-under-train-and-test-laws]]: test risk is computed under the specified joint test law, and no comparison with training risk follows without an additional premise.

[F3] [[def-ip-operator-and-prior-mismatch]]: prior-support mismatch is a distinct model property and by itself supplies no posterior or risk-robustness theorem.

[F4] [[rem-ip-inversebench-scoped-findings]]: InverseBench's results concern its named data, solver, methods, and tuning protocol.

## Verification

1.1 The MRI training and held-out test splits come from the same named fastMRI knee collection, so they provide an operational within-source comparison; [F1] does not identify their underlying probability laws. [F1, given]

2.1 The black-hole digit and nine-cell scattering cases deliberately change the test-source family from the source used to train each prior. The reported output tendencies are finite observations under [F4], and [F2]–[F3] preclude promoting them to a general test-risk or robustness bound. [F2, F3, F4, given] ∎
