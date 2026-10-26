---
id: rem-ip-inversebench-scoped-findings
kind: remark
title: Scope of InverseBench findings
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 6
deps:
  - def-ip-benchmark-risk-and-compute-budget
  - def-ip-inverse-risk-under-train-and-test-laws
  - def-ip-learned-reconstruction-estimator
  - def-ip-operator-and-prior-mismatch
  - def-ip-pde-solver-admissibility-contract
  - def-ip-diffusion-prior-score-and-measurement-score
justified_by: []
forward_refs: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  precheck: n/a
axiom_use: "No choice axiom is used; the item reports finite experimental observations and source scope."
sources:
  references:
    - title: "Hongkai Zheng et al., InverseBench: Benchmarking Plug-and-Play Diffusion Priors for Inverse Problems in Physical Sciences, ICLR 2025, full 29-page paper and appendices"
      url: "https://proceedings.iclr.cc/paper_files/paper/2025/file/e297068f5ec7f483a017948715b591fb-Paper-Conference.pdf"
      locator: "§§3–5, PDF pp. 4–10; Appendix A.1–A.2, PDF pp. 20–22; Appendix B.1–B.7, PDF pp. 22–28; Appendix C, PDF pp. 28–29."
    - title: "InverseBench source implementation, pinned revision 1db5932bc2995504491663d1e2c498e7317c5404, inverse_problems/inverse_scatter.py"
      url: "https://raw.githubusercontent.com/devzhk/InverseBench/1db5932bc2995504491663d1e2c498e7317c5404/inverse_problems/inverse_scatter.py"
      locator: "Lines 326–445: `full_propagate_to_sensor`, `InverseScatter.forward`, and `compute_svd`; fixed incident field is passed to the forward routine and used to construct the fixed linear matrix."
---

## Remark

Zheng et al.'s InverseBench reports 14 plug-and-play diffusion-prior algorithms and domain-specific baselines on five selected cases: first-Born optical scattering, raw multi-coil knee MRI, black-hole very-long-baseline interferometry, full waveform inversion, and two-dimensional vorticity-form Navier–Stokes inversion. For these experiments, the authors report that diffusion-prior methods often outperform conventional baselines when the training data are suitable, while a classical full-waveform-inversion optimizer initialized from a smoothed ground truth outperforms the tested diffusion-prior methods. In cases with closed-form forward models, methods using more forward-gradient queries can be more accurate and more expensive; the paper reports that this trend fails for its numerical PDE cases. Its Navier–Stokes split has one validation case and ten test cases. The paper reports step-size/Courant–Friedrichs–Lewy (CFL) failures in its PDE experiments. Its [Figure 5](https://proceedings.iclr.cc/paper_files/paper/2025/file/e297068f5ec7f483a017948715b591fb-Paper-Conference.pdf#page=10) out-of-distribution diagnostics feed digit images to a black-hole prior trained on simulated black-hole images, and nine-cell scattering sources to a prior trained on one-to-six-cell sources; for the black-hole case, the authors report outputs with the prior's characteristic ring feature. These are empirical observations for the named data, solvers, methods, tuning protocol, and hardware; they establish no universal ranking, stability bound, posterior exactness, risk-transfer bound, or robustness theorem.

There is a first-Born notation discrepancy between the paper and its released implementation. Appendix B.1 defines a contrast-dependent total field and then displays a sensor equation with that field multiplied by the contrast, which does not itself exhibit a fixed linear map. The pinned implementation instead passes the fixed incident field into the sensor-propagation routine and constructs its cached linear matrix from that fixed field. This page therefore identifies the implemented benchmark as the first-Born linear case and does not infer linearity from the printed contrast-dependent expression.

## Remark references

[[def-ip-benchmark-risk-and-compute-budget|Benchmark specification and reporting protocol]]

[[def-ip-inverse-risk-under-train-and-test-laws|Risk under a named joint evaluation law]]

[[def-ip-learned-reconstruction-estimator|Learned estimators, score fields, and posterior samplers carry no automatic guarantee]]

[[def-ip-operator-and-prior-mismatch|Operator and prior mismatch are distinct and imply no automatic robustness bound]]

[[def-ip-pde-solver-admissibility-contract|Solver admissibility and CFL thresholds are model-specific]]

[[def-ip-diffusion-prior-score-and-measurement-score|Exact diffusion scores versus learned or plug-in approximations]]

[Zheng et al., *InverseBench*, ICLR 2025, full paper and appendices](https://proceedings.iclr.cc/paper_files/paper/2025/file/e297068f5ec7f483a017948715b591fb-Paper-Conference.pdf)

[InverseBench implementation, pinned `inverse_scatter.py` source](https://raw.githubusercontent.com/devzhk/InverseBench/1db5932bc2995504491663d1e2c498e7317c5404/inverse_problems/inverse_scatter.py)
