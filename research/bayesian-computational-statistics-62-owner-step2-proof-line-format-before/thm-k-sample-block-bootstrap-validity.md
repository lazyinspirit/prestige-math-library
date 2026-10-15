---
id: thm-k-sample-block-bootstrap-validity
kind: theorem
title: Conditional K-sample block-bootstrap validity under a joint CLT
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
deps:
  - alg-k-sample-null-constrained-block-bootstrap
  - alg-tapered-block-bootstrap
  - def-conditional-weak-convergence-in-probability
  - lem-k-sample-null-centering
  - thm-conditional-bootstrap-hadamard-delta-method
  - thm-continuous-mapping-theorem
  - thm-portmanteau-theorem
  - thm-subsequence-characterization-of-convergence-in-probability
  - def-weak-convergence-of-borel-probability-measures
  - thm-continuity-from-above-for-measures
proof_strategy: contrast the common null location, apply the joint conditional limit, and use the continuous mapping theorem
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: D. Pilavakis, E. Paparoditis, and T. Sapatinas, Moving block and tapered block bootstrap for functional time series with an application to the K-sample mean problem, Bernoulli 25 (2019), Sections 3.1-3.3, Theorem 3.1
      url: https://arxiv.org/pdf/1711.01070
dependency_level: 4
---

## Statement

Let $H$ be a real separable Hilbert space. Fix $K\ge2$. Let $Y_{i,1},\ldots,Y_{i,n_i}\in H$, $1\le i\le K$, be independent functional time-series samples, $M=\sum_i n_i\to\infty$, and suppose $n_i/M\to\theta_i\in(0,1)$. Under the null hypothesis $\mu_1=\cdots=\mu_K=\mu$, let $\bar Y_i$ be the sample means and let $\bar Y_P=M^{-1}\sum_i n_i\bar Y_i$. Apply [[alg-k-sample-null-constrained-block-bootstrap]] to these observations with integer block lengths $1\le b_i\le n_i$ for every sample size used and a specified moving or tapered mode. In tapered mode supply the admissible windows and strictly positive block norms required by [[alg-tapered-block-bootstrap]] at each $b_i$. Draw the starts conditionally independently across series and blocks, and write $\bar Y_i^*$ for the resulting pseudo-series means.

Assume the original centered mean vector

$$U_M=\bigl(\sqrt{n_i}(\bar Y_i-\mu)\bigr)_{i=1}^K$$

converges weakly to a joint law $\mathcal L(G_1,\ldots,G_K)$, and assume the conditional law of

$$U_M^*=\bigl(\sqrt{n_i}(\bar Y_i^*-\bar Y_P)\bigr)_{i=1}^K$$

converges conditionally weakly in probability to that same joint law and is conditionally tight in probability: for every $\epsilon,\eta>0$ there is a deterministic compact $C\subset H^K$ such that $\limsup_M\Pr\{\Pr^*(U_M^*\notin C)>\epsilon\}<\eta$. These are explicit joint-limit hypotheses; this theorem does not derive them from the MBB or TBB conditions.

Define the contrast maps

$$L_M(z_1,\ldots,z_K)=\bigl(\sqrt{M/n_i}\,z_i-\sqrt{M/n_K}\,z_K\bigr)_{i=1}^{K-1},\qquad L_\theta(z)=\bigl(z_i/\sqrt{\theta_i}-z_K/\sqrt{\theta_K}\bigr)_{i=1}^{K-1}.$$

For every continuous $\Psi:H^{K-1}\to S$ into a metric space $S$, the conditional law of $\Psi(L_MU_M^*)$ converges testwise in probability to the law of $\Psi(L_\theta(G_1,\ldots,G_K))$: for every bounded continuous $f:S\to\mathbb R$, the corresponding conditional expectation tends in probability to $E f(\Psi(L_\theta(G_1,\ldots,G_K)))$. If $S$ is separable and complete and a weak-convergence metric with measurable conditional distances is supplied, the conclusion is also conditional weak convergence in probability in the sense of [[def-conditional-weak-convergence-in-probability]]. Under the null, the sampling law of $\Psi(L_MU_M)$ has the same limit. The maps may be squared norms, integrated linear contrasts, or any other continuous statistic of this scaled contrast.

## Facts & Assumptions

**Given:** The samples, null, sample-size proportions, joint sampling limit and joint conditional bootstrap limit in the Statement.

[F1] [[alg-k-sample-null-constrained-block-bootstrap]]: Every pseudo-series has conditional mean equal to the pooled sample mean $\bar Y_P$.

[F2] [[lem-k-sample-null-centering]]: For each $i$, $E^*\bar Y_i^*=\bar Y_P$.

[F3] [[def-conditional-weak-convergence-in-probability]]: The conditional law converges in probability in a metric that generates weak convergence.

[F4] [[thm-continuous-mapping-theorem]]: Weak convergence is preserved by a measurable map whose discontinuity set has limiting probability zero; in particular this applies to continuous maps.

[F5] [[def-weak-convergence-of-borel-probability-measures]] gives convergence of bounded continuous test integrals. [[thm-continuity-from-above-for-measures]] gives vanishing tails of the finite random norm $\|G\|$; the radial-cutoff argument in step 2.1 uses no compact-tightness theorem or additional choice axiom.

[F6] [[thm-subsequence-characterization-of-convergence-in-probability]] gives the almost-sure further-subsequence criterion for scalar convergence in probability. [[thm-portmanteau-theorem]] gives the closed-set criterion for weak convergence.


## Proof

**Given:** The hypotheses and facts in the Statement and Facts & Assumptions.

1.1 Since every pseudo-series has conditional mean $\bar Y_P$ by [F1]-[F2], that common location cancels in every contrast. Direct substitution gives $L_MU_M^*=\bigl(\sqrt M(\bar Y_i^*-\bar Y_K^*)\bigr)_{i=1}^{K-1}$ and $L_MU_M=\bigl(\sqrt M(\bar Y_i-\bar Y_K)\bigr)_{i=1}^{K-1}$. Thus the two statistics use the same contrast map; under the null the common population mean also cancels from $L_MU_M$. [F1, F2, given, algebra]

2.1 Endow the finite products with their Hilbert product norms. The coefficients in $L_M$ converge to those of $L_\theta$, hence $a_M=\|L_M-L_\theta\|_{\mathrm{op}}\to0$. For $R>0$, the function $\chi_R(z)=\min\{1,\max\{0,\|z\|-R\}\}$ is bounded and continuous, vanishes when $\|z\|\le R$, and equals one when $\|z\|\ge R+1$. Thus [F5] and the given weak convergence imply
$$\limsup_M\Pr(\|U_M\|\ge R+1)\le E\chi_R(G)\le\Pr(\|G\|>R)\longrightarrow0\quad(R\to\infty).$$
The last limit follows from continuity from above since $G$ has finite norm. Given $\delta>0$, eventually $a_M(R+1)\le\delta$, so $\Pr(\|(L_M-L_\theta)U_M\|>\delta)\le\Pr(\|U_M\|>R+1)$. First take the limit superior in $M$ and then let $R\to\infty$. Hence $(L_M-L_\theta)U_M\to0$ in probability, without a compact-tightness or AC premise. For the conditional discrepancy, every supplied compact $C\subset H^K$ is norm bounded, say by $R_C$. For arbitrary $\epsilon,\eta>0$, conditional tightness supplies such a $C$ with $\limsup_M\Pr\{\Pr^*(U_M^*\notin C)>\epsilon\}<\eta$. Eventually $a_MR_C\le\delta$, so $\Pr^*(\|(L_M-L_\theta)U_M^*\|>\delta)\le\Pr^*(U_M^*\notin C)$. Since $\eta$ is arbitrary, each conditional discrepancy probability tends to zero in probability. [F3, F5, given, step 1.1, algebra]

2.2 By [F4], $L_\theta U_M\Rightarrow L_\theta G$. For a closed $B\subset H^{K-1}$, the sampling probability of $L_MU_M\in B$ is at most the discrepancy probability from step 2.1 plus $\Pr(L_\theta U_M\in B^\delta)$, where $B^\delta$ is the closed $\delta$-neighbourhood. Apply [F6] and let $\delta\downarrow0$ to obtain $L_MU_M\Rightarrow L_\theta G$. For the conditional version, combine the input weak-metric distance, truncated at one, with the weighted sum $\sum_{j\ge1}2^{-j}\Pr^*(\|(L_M-L_\theta)U_M^*\|>1/j)$. This scalar tends to zero in probability by truncation of the geometric tail and step 2.1. Every subsequence therefore has a further subsequence on which it tends to zero almost surely by [F6]. On each such outcome, [F4] gives weak convergence of the fixed-map conditional laws, and the same closed-neighbourhood inequality proves weak convergence of the varying-map conditional laws to $\mathcal L(L_\theta G)$. [F3, F4, F6, step 2.1]

3.1 Apply [F4] to $\Psi$ for the sampling convergence and, on every almost-sure subsequence outcome of step 2.2, for conditional convergence. Every bounded continuous $f:S\to\mathbb R$ then has convergent conditional expectations on those outcomes; [F6] gives their convergence in probability along the whole sequence. This proves the stated testwise conclusion for arbitrary metric $S$. When the supplied output weak-convergence metric is available on separable complete $S$, the same outcome-wise weak convergence says its distance to the fixed limiting law tends to zero. Applying [F6] to that measurable scalar distance proves the metric conditional conclusion as well. [F3, F4, F6, step 2.2] ∎

## Remarks

For a statistic expressed as a differentiable functional of the unscaled mean vector, the conditional delta theorem [[thm-conditional-bootstrap-hadamard-delta-method]] supplies the required Hadamard-differentiability route. The single-series conditional CLTs and tightness bounds are supplied by [[thm-moving-block-bootstrap-clt-for-dependent-data]] and [[thm-tapered-block-bootstrap-clt-for-dependent-data]] under their respective hypotheses. This theorem retains its explicit joint-limit hypotheses; those hypotheses must be checked for the chosen independent-series and resampling construction.
