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

## Verification

1.1 With $P$, $F$, and each $S_j$ fixed, $PFS_j$ is a linear map on $\mathbb C^n$; therefore the displayed observation equation is a linear multi-coil measurement model for each $j$. [given, algebra]

2.1 The declared raw-data noise, ESPIRiT-estimated sensitivity maps, fixed forward operators, magnitude-MVUE ground-truth convention, evaluation metrics, tuning split, and held-out test images instantiate the benchmark fields in [F1]. The sample counts and empirical scope agree with [F2]; no risk or calibration claim is inferred. [F1, F2, given] ∎
