---
id: ex-ip-inversebench-multicoil-mri
kind: example
title: Multi-coil MRI benchmark
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
axiom_use: "No choice axiom is used; the finite coil operators and image data split are supplied inputs."
sources:
  references:
    - title: "Hongkai Zheng et al., InverseBench: Benchmarking Plug-and-Play Diffusion Priors for Inverse Problems in Physical Sciences, ICLR 2025, full paper and appendices"
      url: "https://proceedings.iclr.cc/paper_files/paper/2025/file/e297068f5ec7f483a017948715b591fb-Paper-Conference.pdf"
      locator: "§4.1, PDF p. 7, and Appendix B.2, PDF pp. 23–24: fastMRI raw knee data, ESPIRiT sensitivity maps, 320×320 preprocessing, and training/tuning/test counts; Table 4, PDF p. 20, reports metrics over 94 test cases."
---

## Example

In the InverseBench multi-coil knee MRI case, a complex image $z\in\mathbb C^n$ with $n=320^2$ produces one k-space data vector per receiver coil:

$$y_j=PFS_jz+n_j\in\mathbb C^m,\qquad j=1,\ldots,J.$$

Here $J$ is the number of coils, $S_j$ is multiplication by the sensitivity map of coil $j$, estimated for each slice using ESPIRiT as implemented in SigPy, $F$ is the discrete Fourier transform, k-space is the Fourier-coefficient data space, $P\in\{0,1\}^{m\times n}$ selects the acquired k-space entries, and $n_j$ is the raw measurement noise in that coil. With these operators fixed, the measurement map is linear in $z$; the paper does not assume Gaussian noise for the raw-data benchmark. Its fastMRI knee split contains $25{,}012$ training images, $6$ hyperparameter-search images, and $94$ test images, preprocessed to $320\times320$. For the reported metrics in Tables 4 and 5, the reference ground-truth image is the magnitude image of the minimum-variance unbiased estimator (MVUE); these magnitude-MVUE images are also used as training ground truths for Residual UNet and E2E-VarNet. The reported test metrics include peak signal-to-noise ratio (PSNR), structural similarity index measure (SSIM), and data misfit.

## Example references

[[def-ip-benchmark-risk-and-compute-budget|A benchmark declares its noise, metric, and test population]]

[[rem-ip-inversebench-scoped-findings|Empirical findings remain confined to the named InverseBench tasks]]

[Zheng et al., *InverseBench*, §4.1, Appendix B.2, and Table 4](https://proceedings.iclr.cc/paper_files/paper/2025/file/e297068f5ec7f483a017948715b591fb-Paper-Conference.pdf)

## Facts & Assumptions

**Given:** The finite complex image space, per-slice ESPIRiT-estimated coil sensitivity maps, the fixed Fourier/subsampling operators, raw coil measurement vectors, the magnitude-MVUE ground-truth convention for the reported metrics, and the train/search/test split stated in the Example.

[F1] [[def-ip-benchmark-risk-and-compute-budget]]: a benchmark fixes its observation model, noise description, loss/metric, evaluation law, and tuning protocol.

[F2] [[rem-ip-inversebench-scoped-findings]]: the empirical MRI results are for the specified multi-coil knee data and test split, not a theorem for other image populations.

[A1] For an explicit conditional finite-data benchmark, supply the actual nonempty training, validation, and test lists of the stated sizes, including realized observations, target images, operator metadata, and valid discrete forward values. Let $X=U=C$ be the finite set of labelled cases, with its full power-set sigma-algebra; labels distinguish repeated images. Let $Q=\mathbb R^{320^2}$ with Euclidean distance and Borel sets, and let $Y$ be the observation-and-operator-metadata space, a finite disjoint union of finite-dimensional Borel spaces if coil counts or data shapes vary; include each case's coil sensitivities and mask in its observation metadata. For case $i$, set $q(i)=a_i$ (its magnitude-MVUE reference image), $F(i)=f_i$ (its discrete noiseless forward data), and $K(\cdot\mid i)=\delta_{y_i}$ (its recorded data, with the same metadata). For the coil data, the conditional residual law is the point mass at the recorded residual $y_i^{\rm data}-f_i^{\rm data}$; it is not asserted Gaussian, independent of the state, or a law for unobserved acquisitions. Thus $K$ describes replay conditional on these realized lists, not a physical law for repeated MRI acquisitions. Set $P_{\rm test}=N^{-1}\sum_{i\in T}\delta_{(y_i,a_i)}$, where $T$ is the test index set and $N=94$; use the analogous uniform empirical validation law. Take $P_{\rm train}$ to be the point mass at the entire supplied fitting record, including training/tuning lists and seeds. This conditional specialization supplies laws, not just sample counts, and is not a reconstruction of the paper's full evaluation protocol.

[A2] Supply each candidate's complete fitting/tuning procedure and deployed measurable rule $g:Y\to Q$, with all seeds fixed. Fix the loss $\ell(a,b)=\|a-b\|_2^2$ and a radius $r>0$ before testing. The uncertainty diagnostic is empirical coverage $N^{-1}\sum_{i\in T}\mathbf1\{\|g(y_i)-a_i\|_2\le r\}$, targeting coverage of the balls of radius $r$ centered at $g(y)$ under $P_{\rm test}$. Evaluate every test case once and average its loss. Before fitting or evaluation, supply finite upper bounds for every applicable forward, adjoint, gradient, ODE-evaluation, iteration/sampling, and runtime count, marking inapplicable entries as not applicable, together with hardware, precision, software/model versions, seeds, tuning data, and stopping tolerances. A procedure must return within these bounds or record failure; its deployed rule returns the zero image on failure. Retain that case in both aggregates and report every status and realized count. These supplied procedures and budget records are parameters of this mathematical specialization; the coverage statistic is not a reported InverseBench calibration result.

## Verification

1.1 With $P$, $F$, and each $S_j$ fixed, $PFS_j$ is a linear map on $\mathbb C^n$; therefore the displayed observation equation is a linear multi-coil measurement model for each $j$. [given, algebra]

1.2 For each labelled case in [A1], $K(\cdot\mid i)=\delta_{y_i}$ is a probability measure. Every function on the finite truth space is measurable, including $i\mapsto K(B\mid i)$ for each Borel observation set $B$. Thus this is an explicitly specified probability kernel, and $q$, $F$, and the empirical test/validation and point-mass fitting laws are measurable or probability-valued as required by [F1]. This conditional construction uses recorded raw data and makes no inference of a physical noise law from the term "raw noise." [A1, F1]

2.1 The squared loss and ball-membership event in [A2] are product-measurable for the magnitude-image targets and measurable deployed rule. Their empirical-law integrals equal the declared averages, including fallback outputs. The procedures, budgets, metadata, and retained statuses in [A2] complete this finite-data instance of [F1]. The paper's PSNR/SSIM/data-misfit reports retain their original meaning and scope in [F2]; the chosen squared-error and coverage protocol is an explicit specialization, not a claim that the paper specified this diagnostic or a physical observation kernel. [A1, A2, F1, F2] ∎
