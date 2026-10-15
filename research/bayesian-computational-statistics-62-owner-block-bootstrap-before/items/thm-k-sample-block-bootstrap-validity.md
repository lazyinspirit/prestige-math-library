---
id: thm-k-sample-block-bootstrap-validity
kind: theorem
title: Conditional K-sample block-bootstrap validity under a joint CLT
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 4
deps: [alg-k-sample-null-constrained-block-bootstrap, def-conditional-weak-convergence-in-probability, lem-k-sample-null-centering, thm-conditional-bootstrap-hadamard-delta-method, thm-continuous-mapping-theorem]
proof_strategy: contrast the common null location, apply the joint conditional limit, and use the continuous mapping theorem
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "D. Pilavakis, E. Paparoditis, and T. Sapatinas, Moving block and tapered block bootstrap for functional time series with an application to the K-sample mean problem, Bernoulli 25 (2019), Sections 3.1-3.3, Theorem 3.1"
      url: https://arxiv.org/pdf/1711.01070
---

## Statement

Fix $K\ge2$. Let $Y_{i,1},\ldots,Y_{i,n_i}\in H$, $1\le i\le K$, be independent functional time-series samples, $M=\sum_i n_i$, and suppose $n_i/M\to\theta_i\in(0,1)$. Under the null hypothesis $\mu_1=\cdots=\mu_K=\mu$, let $\bar Y_i$ be the sample means and let $\bar Y_P=M^{-1}\sum_i n_i\bar Y_i$. Generate pseudo-series by [[alg-k-sample-null-constrained-block-bootstrap]], and write $\bar Y_i^*$ for their means.

Assume the original centered mean vector

$$U_M=\bigl(\sqrt{n_i}(\bar Y_i-\mu)\bigr)_{i=1}^K$$

converges weakly to a joint law $\mathcal L(G_1,\ldots,G_K)$, and assume the conditional law of

$$U_M^*=\bigl(\sqrt{n_i}(\bar Y_i^*-\bar Y_P)\bigr)_{i=1}^K$$

converges conditionally weakly in probability to that same joint law and is conditionally tight in probability. These are explicit joint-limit hypotheses; this theorem does not derive them from the MBB or TBB conditions.

Define the contrast maps

$$L_M(z_1,\ldots,z_K)=\bigl(\sqrt{M/n_i}\,z_i-\sqrt{M/n_K}\,z_K\bigr)_{i=1}^{K-1},\qquad L_\theta(z)=\bigl(z_i/\sqrt{\theta_i}-z_K/\sqrt{\theta_K}\bigr)_{i=1}^{K-1}.$$

For every continuous $\Psi:H^{K-1}\to S$ into a metric space $S$, the conditional law of $\Psi(L_MU_M^*)$ converges weakly in probability to the law of $\Psi(L_\theta(G_1,\ldots,G_K))$. Under the null, the sampling law of $\Psi(L_MU_M)$ has the same limit. The maps may be squared norms, integrated linear contrasts, or any other continuous statistic of this scaled contrast.

## Facts & Assumptions

**Given:** The samples, null, sample-size proportions, joint sampling limit and joint conditional bootstrap limit in the Statement.

[F1] [[alg-k-sample-null-constrained-block-bootstrap]]: Every pseudo-series has conditional mean equal to the pooled sample mean $\bar Y_P$.

[F2] [[lem-k-sample-null-centering]]: For each $i$, $E^*\bar Y_i^*=\bar Y_P$.

[F3] [[def-conditional-weak-convergence-in-probability]]: The conditional law converges in probability in a metric that generates weak convergence.

[F4] [[thm-continuous-mapping-theorem]]: Weak convergence is preserved by a measurable map whose discontinuity set has limiting probability zero; in particular this applies to continuous maps.

## Proof

**Given:** The hypotheses and facts in the Statement and Facts & Assumptions.

1.1 Since every pseudo-series has conditional mean $\bar Y_P$ by [F1]-[F2], that common location cancels in every contrast. Direct substitution gives $L_MU_M^*=\bigl(\sqrt M(\bar Y_i^*-\bar Y_K^*)\bigr)_{i=1}^{K-1}$ and $L_MU_M=\bigl(\sqrt M(\bar Y_i-\bar Y_K)\bigr)_{i=1}^{K-1}$. Thus the two statistics use the same contrast map; under the null the common population mean also cancels from $L_MU_M$. [F1, F2, given, algebra]

2.1 The coefficients in $L_M$ converge to those of $L_\theta$, so $L_M\to L_\theta$ in operator norm. The assumed joint weak limits and tightness therefore give $L_MU_M\Rightarrow L_\theta(G_1,\ldots,G_K)$, and the conditional version gives $L_MU_M^*\Rightarrow L_\theta(G_1,\ldots,G_K)$ in probability. [F3, given, step 1.1, algebra]

3.1 Apply [F4] to the continuous map $\Psi$. It sends both contrast limits to the same law $\mathcal L(\Psi(L_\theta(G_1,\ldots,G_K)))$, proving the sampling and conditional conclusions. [F4, step 2.1] ∎

## Remarks

For a statistic expressed as a differentiable functional of the unscaled mean vector, the conditional delta theorem [[thm-conditional-bootstrap-hadamard-delta-method]] supplies the required Hadamard-differentiability route. To use this K-sample theorem for MBB or TBB, the single-series conditional CLT and tightness statements in the two escalated items on this page still have to be proved.
