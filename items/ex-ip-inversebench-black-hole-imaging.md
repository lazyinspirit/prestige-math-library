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
      locator: "Lines 110–140: baseline-orientation flags and ordered triangle/quadrangle indices; lines 208–233: complex-conjugation correction and closure-phase argument; lines 241–260: ordered log-closure-amplitude ratio."
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

[A1] For an explicit conditional finite-data benchmark, supply the actual nonempty training, validation, and test lists of the stated sizes, including realized observations, target images, operator metadata, and valid discrete forward values. All closure values in these lists must satisfy the stated nonzero-visibility restrictions. Let $X=U=C$ be the finite set of labelled cases, with its full power-set sigma-algebra; labels distinguish repeated images. Let $Q=\mathbb R^{64^2}$ with Euclidean distance and Borel sets, and let $Y$ be the finite-dimensional observation-and-operator-metadata space with Borel sets. For case $i$, set $q(i)=a_i$ (its target image), $F(i)=f_i$ (its discrete noiseless forward data), and $K(\cdot\mid i)=\delta_{y_i}$ (its recorded data, with the same metadata). Thus $K$ describes replay conditional on these realized lists, not fresh telescope noise. Set $P_{\rm test}=N^{-1}\sum_{i\in T}\delta_{(y_i,a_i)}$, where $T$ is the test index set and $N=100$; use the analogous uniform empirical validation law. Take $P_{\rm train}$ to be the point mass at the entire supplied fitting record, including training/tuning lists and seeds. This conditional specialization supplies laws, not just sample counts, and is not a reconstruction of the paper's full evaluation protocol.

[A2] Supply each candidate's complete fitting/tuning procedure and deployed measurable rule $g:Y\to Q$, with all seeds fixed. Fix the loss $\ell(a,b)=\|a-b\|_2^2$ and a radius $r>0$ before testing. The uncertainty diagnostic is empirical coverage $N^{-1}\sum_{i\in T}\mathbf1\{\|g(y_i)-a_i\|_2\le r\}$, targeting coverage of the balls of radius $r$ centered at $g(y)$ under $P_{\rm test}$. Evaluate every test case once and average its loss; no shift alignment is used in this chosen squared-error score. Before fitting or evaluation, supply finite upper bounds for every applicable forward, adjoint, gradient, ODE-evaluation, iteration/sampling, and runtime count, marking inapplicable entries as not applicable, together with hardware, precision, software/model versions, seeds, tuning data, and stopping tolerances. A procedure must return within these bounds or record failure; its deployed rule returns the zero image on failure. Retain that case in both aggregates and report every status and realized count. These supplied procedures and budget records are parameters of this mathematical specialization; the coverage statistic is not a reported InverseBench calibration result.

## Verification

1.1 Substitution of the ideal Fourier visibility into the displayed gain/phase/noise equation gives the paper's complex observation model; on the stated nonzero-visibility domains, applying the displayed argument and log-amplitude functions gives the stated closure data. [given, algebra]

1.2 On the finite labelled truth space in [A1], $q$ and $F$ are measurable and each $K(\cdot\mid i)$ is a probability measure; for every Borel set $B\subseteq Y$, $i\mapsto\mathbf1_B(y_i)$ is measurable. Thus $K$ is a probability kernel. The empirical test and validation laws and the point-mass fitting law are specified probability measures. They complete the case data with the law fields of [F1]; the split sizes alone do not determine those laws. [A1, F1]

2.1 The squared loss and the ball-membership event in [A2] are product-measurable, since $g$ is measurable and the Euclidean distance is continuous. Their integrals under the empirical test law are exactly the declared finite averages, including the prescribed fallback outputs. Together with the supplied procedures, finite budgets, metadata, and failure records, these instantiate the remaining fields of [F1]. This verifies the conditional specialization, while the source's empirical scope remains [F2]; neither empirical coverage nor the physical observation formulas imply population calibration or uniqueness. [A1, A2, F1, F2] ∎
