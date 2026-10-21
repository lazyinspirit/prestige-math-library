---
id: ex-ip-inversebench-first-born-scattering
kind: example
title: First-Born optical scattering benchmark
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 7
deps:
  - def-ip-benchmark-risk-and-compute-budget
  - rem-ip-inversebench-scoped-findings
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
axiom_use: "No choice axiom is used; the finite real contrast grid and fixed measurement operators are explicit inputs."
sources:
  references:
    - title: "Hongkai Zheng et al., InverseBench: Benchmarking Plug-and-Play Diffusion Priors for Inverse Problems in Physical Sciences, ICLR 2025, full paper and appendices"
      url: "https://proceedings.iclr.cc/paper_files/paper/2025/file/e297068f5ec7f483a017948715b591fb-Paper-Conference.pdf"
      locator: "§4.1, PDF p. 6, and Appendix B.1, PDF pp. 22–23: 128×128 first-Born optical-scattering setup, fixed physical dimensions, 20 transmitters, receiver counts 360/180/60, and train/validation/test split. Appendix A.1, Table 3: measurement-noise level $\\sigma_y=10^{-4}$."
    - title: "InverseBench source implementation, pinned revision 1db5932bc2995504491663d1e2c498e7317c5404, inverse_problems/inverse_scatter.py"
      url: "https://raw.githubusercontent.com/devzhk/InverseBench/1db5932bc2995504491663d1e2c498e7317c5404/inverse_problems/inverse_scatter.py"
      locator: "Lines 326–445: fixed incident field is passed to `full_propagate_to_sensor`; the cached matrix is formed from that field and the sensor Green function."
---

## Example

In the implemented first-Born optical-scattering benchmark, the unknown is a real $128\times128$ array $z$ of cellwise permittivity contrasts, each equal to the object's permittivity minus the background permittivity. For each transmitter $j\in\{1,\dots,20\}$, $u_{\rm in}^{(j)}$ is its fixed incident illumination field, and $H_{m,r}$ is the fixed Green response from cell $r$ to receiver $m$. The released forward implementation reports measurements

$$y_{j,m}=\Delta x\Delta y\sum_r z_r\,\overline{u_{\rm in}^{(j)}(r)}\,H_{m,r}+e_{j,m},$$

where $m$ indexes receivers, $r$ indexes grid cells, $\Delta x=\Delta y=18\,\mathrm{cm}/128$ are the grid spacings, and $e$ is additive Gaussian measurement noise with reported level $\sigma_y=10^{-4}$. Thus the implemented map is real-linear in $z$. The reported physical field is $18\,\mathrm{cm}\times18\,\mathrm{cm}$, the wavelength is $0.84\,\mathrm{cm}$, the background permittivity is $1$, and the receiver count is $360$, $180$, or $60$. The paper reports $10{,}000$ training images of HL60-cell permittivity, $10$ validation images, and $100$ test images; it curates the test samples so their cosine similarities to training images are below $0.6$, where cosine similarity of nonzero image arrays $a,b$ is $\langle a,b\rangle/(\|a\|_2\|b\|_2)$. The paper's Appendix B.1 also prints a contrast-dependent total-field formula; this example follows the fixed-incident-field implementation and does not infer linearity from that printed formula.

## Example references

[[def-ip-benchmark-risk-and-compute-budget|A benchmark fixes its data law, forward solver, metric, and compute budget]]

[[rem-ip-inversebench-scoped-findings|InverseBench findings and the paper/implementation notation discrepancy]]

[Zheng et al., *InverseBench*, §4.1 and Appendix B.1](https://proceedings.iclr.cc/paper_files/paper/2025/file/e297068f5ec7f483a017948715b591fb-Paper-Conference.pdf)

[InverseBench `inverse_scatter.py`, pinned implementation](https://raw.githubusercontent.com/devzhk/InverseBench/1db5932bc2995504491663d1e2c498e7317c5404/inverse_problems/inverse_scatter.py)

## Facts & Assumptions

**Given:** The real contrast grid, fixed incident fields and sensor Green coefficients, the finite grid and data split stated in the Example, and the released implementation's fixed-incident-field forward routine.

[F1] [[def-ip-benchmark-risk-and-compute-budget]]: a benchmark instance declares its truth/target spaces, forward observation model, noise, metric, and evaluation protocol.

[F2] [[rem-ip-inversebench-scoped-findings]]: the paper/code discrepancy is resolved for this example by following the implementation, which passes a fixed incident field and builds the linear matrix from that field.

## Verification

1.1 For each fixed pair $(j,m)$, all coefficients multiplying $z_r$ in the displayed finite sum are fixed independently of $z$. Therefore the signal part is a real-linear function of the real vector $z$; adding the specified noise yields the stated measurement model. [given, algebra]

2.1 The listed spaces, fixed forward routine, observation noise, and finite train/validation/test split instantiate the benchmark fields in [F1]. The scope matches the source/code resolution in [F2]; no conclusion is drawn from the paper's contrast-dependent printed expression. [F1, F2, given] ∎
