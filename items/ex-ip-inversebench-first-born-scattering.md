---
id: ex-ip-inversebench-first-born-scattering
kind: example
title: First-Born optical scattering benchmark
status: published
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
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
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

[A1] For an explicit conditional finite-data benchmark, supply the actual nonempty training, validation, and test lists of the stated sizes, including realized observations, target images, operator metadata, and valid discrete forward values. Let $X=U=C$ be the finite set of labelled cases, with its full power-set sigma-algebra; labels distinguish repeated images. Let $Q=\mathbb R^{128^2}$ with Euclidean distance and Borel sets, and let $Y$ be the finite-dimensional observation-and-operator-metadata space with Borel sets. For case $i$, set $q(i)=a_i$ (its target image), $F(i)=f_i$ (its discrete noiseless forward data), and $K(\cdot\mid i)=\delta_{y_i}$ (its recorded data, with the same metadata). Thus $K$ describes replay conditional on these realized lists, not fresh Gaussian noise. Set $P_{\rm test}=N^{-1}\sum_{i\in T}\delta_{(y_i,a_i)}$, where $T$ is the test index set and $N=100$; use the analogous uniform empirical validation law. Take $P_{\rm train}$ to be the point mass at the entire supplied fitting record, including training/tuning lists and seeds. This conditional specialization supplies laws, not just sample counts, and is not a reconstruction of the paper's full evaluation protocol.

[A2] Supply each candidate's complete fitting/tuning procedure and deployed measurable rule $g:Y\to Q$, with all seeds fixed. Fix the loss $\ell(a,b)=\|a-b\|_2^2$ and a radius $r>0$ before testing. The uncertainty diagnostic is empirical coverage $N^{-1}\sum_{i\in T}\mathbf1\{\|g(y_i)-a_i\|_2\le r\}$, targeting coverage of the balls of radius $r$ centered at $g(y)$ under $P_{\rm test}$. Evaluate every test case once and average its loss. Before fitting or evaluation, supply finite upper bounds for every applicable forward, adjoint, gradient, ODE-evaluation, iteration/sampling, and runtime count, marking inapplicable entries as not applicable, together with hardware, precision, software/model versions, seeds, tuning data, and stopping tolerances. A procedure must return within these bounds or record failure; its deployed rule returns the zero image on failure. Retain that case in both aggregates and report every status and realized count. These supplied procedures and budget records are parameters of this mathematical specialization; the coverage statistic is not a reported InverseBench calibration result.

## Verification

1.1 For each fixed pair $(j,m)$, all coefficients multiplying $z_r$ in the displayed finite sum are fixed independently of $z$. Therefore the signal part is a real-linear function of the real vector $z$; adding the specified noise yields the stated measurement model. [given, algebra]

1.2 On the finite labelled truth space in [A1], the target and discrete forward maps are measurable. For each case $i$, $K(\cdot\mid i)=\delta_{y_i}$ is a probability measure, and $i\mapsto K(B\mid i)$ is measurable for every Borel observation set $B$. The declared empirical test/validation laws and point-mass fitting law therefore supply the probability fields of [F1]. Conditioning on a realized noisy list does not identify its replay kernel with the original Gaussian acquisition law. [A1, F1]

2.1 The squared loss and radius-ball membership event in [A2] are product-measurable, and integration against the empirical test law gives exactly the specified average loss and coverage. The supplied procedures, budget records, and failure convention complete the remaining fields of [F1]. Cosine similarity only curates the data; it is not this evaluation loss. The implemented real-linear model and the source/code qualification in [F2] remain unchanged, and no calibration theorem is inferred. [A1, A2, F1, F2] ∎
