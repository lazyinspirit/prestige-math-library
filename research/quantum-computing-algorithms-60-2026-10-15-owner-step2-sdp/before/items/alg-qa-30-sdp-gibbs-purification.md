---
id: alg-qa-30-sdp-gibbs-purification
kind: algorithm
title: "Sparse-oracle Gibbs-state purification"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 18
deps:
  - def-qa-30-sdp-sparse-oracle-model
  - def-qa-30-sdp-reference-state-access
  - lem-qa-30-spectral-minimum-shift
  - thm-qa-30-smooth-fourier-approximation
  - alg-qa-22-lcu-block-encoding
  - lem-qa-30-capamplify-state-output-bound
  - def-qc-controlled-unitary-access
  - def-qc-inverse-unitary-access
justified_by: [thm-qa-30-sdp-gibbs-state-error-cost]
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "https://arxiv.org/pdf/1705.01843v4"
      url: "https://arxiv.org/pdf/1705.01843v4"
    - title: "https://arxiv.org/pdf/1806.01838"
      url: "https://arxiv.org/pdf/1806.01838"
verification:
  precheck: n/a
---

## Definition

Input a finite Hermitian matrix $H$, a nonnegative coefficient $\eta$, a rational certified bound $K\ge\|\eta H\|$, dimension $d\ge1$, costed reference preparation $\Phi_d$, controlled sparse evolution circuits and their inverses, an output accuracy, and confidence and implementation budgets. All access, coefficient generation, rotations, arithmetic, precision synthesis, reference preparation and memory operations have declared costs. The supplied finite decoded matrix may approximate the target matrix only with a stated operator-norm error budget included below.

1. **Freeze the energy shift.** Choose $0<e\le1/2$ and an exact finite decoded Hermitian $\widehat L$ with $\|\widehat L-\eta H\|\le\delta\le\min(1/8,e/100)$ and certified norm bound $K+\delta$. Run the explicit finite coherent spectral sampler and capped generalized minimum procedure in [[lem-qa-30-spectral-minimum-shift]] on $\widehat L$. Measure its rational output once, set $\widetilde\lambda=s-1/8$, and freeze the decoded $\widehat G=\widehat L-(\widetilde\lambda-3/2)I$ and target $G=\eta H-(\widetilde\lambda-3/2)I$, their norm certificates and all ensuing circuit parameters. On the shift good event the decoded minimum is in $[3/2,7/4]$; the variational bound $|\lambda_{min}(\widehat L)-\lambda_{min}(\eta H)|\le\delta$ puts the target minimum in $[1,2]$. For $\eta=0$ the normalized output is the supplied $\Phi_d$ directly. A shift failure belongs to the declared confidence budget.
2. **Generate the finite block.** Choose $0<e\le1/2$ and a rational $K_G\ge\max(\|G\|,\|\widehat G\|)/2$. Construct the block for $\widehat G$ and include its target perturbation $\|e^{-\widehat G/2}-e^{-G/2}\|\le\delta/2$ in the allocated error. For $f(x)=e^{-x/2}$ use $x_0=K_G+1/2$, $r=K_G$, $\Delta=1/2$, $B=1$. Its Taylor coefficients are $a_k=e^{-x_0/2}(-1/2)^k/k!$. Execute the finite arcsine convolution, truncation, signed-binomial coefficient construction, coefficient rounding and normalization in [[thm-qa-30-smooth-fourier-approximation]]. Use its explicit finite $K,L,M$ cutoffs, enlarged by certified upper enclosures when necessary. Prepare the finite coefficient vector, apply the signed-frequency controlled evolutions, unprepare it and dilute the clean flag to common normalization $B_G^+=1+e/8$. Allocate coefficient, rotation, evolution and decoded-matrix errors so the final successful compression differs from $e^{-G/2}/B_G^+$ by at most $e$. Their sum is an input certificate, and every circuit is retained with its actual adjoint and controlled implementation.
3. **Unmeasured flag interface.** Prepare $\Phi_d$ and apply the block on its first factor. The ideal zero-work vector is $((e^{-G/2}/B_G^+)\otimes I)\Phi_d$, with probability $\operatorname{tr}(e^{-G})/[d(B_G^+)^2]$. Return this entire unmeasured circuit and its actual inverse when a coherent flagged sampler is requested. A caller constructing indexed trace samplers reuses these frozen parameters; it does not rerun ShiftMin within that sampler.
4. **Optional normalized output.** To output a normalized purification, choose $e\le\varepsilon_{out}/(10000\sqrt d)$, invoke the finite direct-sample/random-iteration capped amplification construction of [[lem-qa-30-capamplify-state-output-bound]] with lower floor $1/(64d)$ and the declared confidence, and measure the success projector. Return its normalized good projection or explicit `FAIL`. The amplification lemma supplies the finite success contract; no exact Grover peak or unbounded rejection loop is used. A caller needing an inverse uses the unmeasured circuit from step 3, rather than an inverse of this measured conditional output.

The identity energy shift changes no normalized Gibbs state. Non-power-of-two dimensions use the declared $C_\Phi$ input. The algorithm supplies no uncharged matrix exponential, spectral projector, coefficient oracle or sparse-sum oracle. Its successful-vector and normalized-state bounds are proved separately in [[thm-qa-30-sdp-gibbs-state-error-cost]].
