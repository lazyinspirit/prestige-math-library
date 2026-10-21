---
id: ex-ip-inversebench-black-hole-imaging
kind: example
title: Black-hole VLBI benchmark
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
axiom_use: "No choice axiom is used; the finite telescope, image, and sample sets are supplied inputs."
sources:
  references:
    - title: "Hongkai Zheng et al., InverseBench: Benchmarking Plug-and-Play Diffusion Priors for Inverse Problems in Physical Sciences, ICLR 2025, full paper and appendices"
      url: "https://proceedings.iclr.cc/paper_files/paper/2025/file/e297068f5ec7f483a017948715b591fb-Paper-Conference.pdf"
      locator: "§3 and §4.1, PDF pp. 4–6; Appendix B.3, PDF pp. 24–25: visibility and closure-quantity model, GRMHD training images, synthetic validation/test data, and multi-modal behavior."
    - title: "InverseBench source implementation, pinned revision 1db5932bc2995504491663d1e2c498e7317c5404, inverse_problems/blackhole.py"
      url: "https://raw.githubusercontent.com/devzhk/InverseBench/1db5932bc2995504491663d1e2c498e7317c5404/inverse_problems/blackhole.py"
      locator: "Lines 110–197 and 231–267: orientation-corrected directed triangle products, closure-phase argument, and ordered quadruple log-amplitude ratio."
---

## Example

In the InverseBench black-hole-imaging case, very-long-baseline interferometry correlates telescope electric-field signals to produce complex visibilities of a nonnegative source-brightness image $z(\rho,\delta)$ on angular coordinates $(\rho,\delta)$. For a telescope pair $(a,b)$ at time $t$, the ideal visibility is the corresponding Fourier sample

$$I^t_{a,b}(z)=\iint z(\rho,\delta)e^{-2\pi i(u^t_{a,b}\rho+v^t_{a,b}\delta)}\,d\rho\,d\delta,$$

where $(u^t_{a,b},v^t_{a,b})$ is the projected baseline. The observed visibility is

$$V^t_{a,b}=g^t_ag^t_be^{-i(\phi^t_a-\phi^t_b)}I^t_{a,b}(z)+\eta^t_{a,b},$$

where $g^t_a,g^t_b$ are telescope amplitude gains, $\phi^t_a,\phi^t_b$ are phase errors, and $\eta^t_{a,b}$ is additive Gaussian thermal noise. For an oriented telescope triangle $(a,b,c)$, the closure phase is $\arg(V^t_{a,b}V^t_{b,c}V^t_{c,a})$; when a stored visibility has the opposite baseline orientation, the implementation uses its complex conjugate. For the ordered quadrangle $(a,b,c,d)$ returned by the implementation's closure-amplitude routine, the log closure amplitude is $\log\!\bigl(|V^t_{a,b}||V^t_{c,d}|/(|V^t_{a,d}||V^t_{b,c}|)\bigr)$. The closure phase is defined only when its triangle product is nonzero, and a log closure amplitude is defined only when all four relevant visibility amplitudes are nonzero. No value is assigned by these formulas at an undefined zero visibility; this domain restriction does not assert an implementation masking or rejection rule. The benchmark also uses total flux $\iint z(\rho,\delta)\,d\rho\,d\delta$. These derived data are nonlinear functions of the visibilities, so their noise is not additive. The training images are $50{,}000$ simulated general-relativistic magnetohydrodynamic images resized to $64\times64$. Because those images are not public, the paper generates $5$ validation and $100$ test images from a pretrained diffusion model. The sparse, nonconvex closure-data model has multiple solutions compatible with the observations; the reported tests do not make a general uniqueness or posterior-calibration claim.

## Example references

[[def-ip-benchmark-risk-and-compute-budget|A benchmark declares its observation model, metric, test law, and uncertainty diagnostic]]

[[rem-ip-inversebench-scoped-findings|The reported scope and empirical limitations of InverseBench]]

[Zheng et al., *InverseBench*, §§3 and 4.1, Appendix B.3](https://proceedings.iclr.cc/paper_files/paper/2025/file/e297068f5ec7f483a017948715b591fb-Paper-Conference.pdf)

[InverseBench `blackhole.py`, pinned implementation](https://raw.githubusercontent.com/devzhk/InverseBench/1db5932bc2995504491663d1e2c498e7317c5404/inverse_problems/blackhole.py)

## Facts & Assumptions

**Given:** A nonnegative image, telescope pairs and projected baselines, the complex visibility and gain/noise model, closure-data transformations on their stated nonzero-visibility domains, and the data-generation split stated in the Example.

[F1] [[def-ip-benchmark-risk-and-compute-budget]]: a benchmark instance fixes its forward/observation model, noise description, metric, and evaluation population.

[F2] [[rem-ip-inversebench-scoped-findings]]: the black-hole results are empirical for the paper's selected image/data setup and do not imply a general ranking or calibration result.

## Verification

1.1 Substitution of the ideal Fourier visibility into the displayed gain/phase/noise equation gives the paper's complex observation model; on the stated nonzero-visibility domains, applying the displayed argument and log-amplitude functions gives the stated closure data. [given, algebra]

2.1 The source-specific image sizes and finite train/validation/test split, together with the observation and closure maps, specify the benchmark fields in [F1]. The empirical scope is exactly the one recorded in [F2]; no uniqueness or posterior-calibration theorem is used. [F1, F2, given] ∎
