---
id: thm-particle-gibbs-selected-path-marginal
kind: theorem
title: The particle Gibbs extended target has the exact smoothing marginal
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 5
deps:
  - def-axiom-of-choice
  - def-particle-gibbs-extended-target
  - alg-sequential-importance-resampling
  - def-feynman-kac-path-targets-and-normalizers
  - thm-feynman-kac-path-radon-nikodym-weight
proof_strategy: direct
axiom_use: "Assume AC through the particle path law and its Radon–Nikodym weights. The index sum is finite and choice-free."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Andrieu, Doucet, and Holenstein, Particle Markov chain Monte Carlo methods, §4.5, equations (36)–(37), and Theorem 5"
      url: "https://www.stats.ox.ac.uk/~doucet/andrieu_doucet_holenstein_PMCMC.pdf"
    - title: "Lindsten and Schön, On the use of backward simulation in the particle Gibbs sampler, §4.1 and Proposition 1"
      url: "https://arxiv.org/pdf/1110.2873.pdf"
---

## Statement

Assume the hypotheses of [[def-particle-gibbs-extended-target]] and
[[alg-sequential-importance-resampling]], including the finite-horizon support
conditions and $0<L_\theta<\infty$ for prior-almost every $\theta$, with
$0<C=\int L_\theta\,\pi_0(d\theta)<\infty$. Then $\varphi_N$ in
[[def-particle-gibbs-extended-target]] is a probability measure and its
selected $(\theta,X_{0:T}^{K})$ marginal is
$$C^{-1}\pi_0(d\theta)\gamma_{\theta,T}(dx_{0:T}),$$
the exact joint parameter and smoothing posterior, for every $N\ge2$.

## Facts & Assumptions

**Given:** The finite-horizon path model, full-support proposal conditions, SIR
particle system, and $N\ge2$.

[A1] [[def-axiom-of-choice]]: AC is assumed through the path Radon–Nikodym and probability-kernel suppliers.

[F1] [[def-particle-gibbs-extended-target]]: $\varphi_N=C^{-1}\pi_0(d\theta)\psi_\theta(du)\widehat Z_T(u)W_T^k(u)$ and $X_{0:T}^k$ is the ancestry-traced path.

[F2] [[alg-sequential-importance-resampling]]: the terminal weights sum to one, $\widehat Z_T$ is the product of average incremental weights, and the output weighted path measure is $\widehat\pi_T^N=\sum_kW_T^k\delta_{X_{0:T}^k}$.

[F3] [[thm-feynman-kac-path-radon-nikodym-weight]]: the initial and incremental SIR weights convert each proposal path factor into the corresponding Feynman–Kac path factor under the stated support conditions.

[F4] [[def-feynman-kac-path-targets-and-normalizers]]: the normalized smoothing path target is $\gamma_{\theta,T}/L_\theta$ when $0<L_\theta<\infty$.

## Proof

**Given:** [A1] and the hypotheses in the Statement.

1.1 Fix a terminal index $k$ and let $b_0,\ldots,b_T$ be its ancestry, so $A_t^{b_t}=b_{t-1}$. On a positive-weight particle system, [F1] has $\widehat Z_TW_T^k=(\prod_{t=0}^{T-1}\bar w_t)w_T^{b_T}/N$. In the forward SIR law [F2], the selected lineage contributes $\prod_{t=1}^TW_{t-1}^{b_{t-1}}R_t(x_{t-1}^{b_{t-1}},dx_t^{b_t})$ and its initial proposal $\nu_0(dx_0^{b_0})$. Substituting $W_{t-1}^{b_{t-1}}=w_{t-1}^{b_{t-1}}/(N\bar w_{t-1})$ cancels all average-weight denominators, giving $\varphi_N(d\theta,du,k)=\frac{\pi_0(d\theta)\gamma_{\theta,T}(dx_{0:T}^{b})}{C N^{T+1}}\prod_{i\ne b_0}\nu_0(dx_0^i)\prod_{t=1}^T\prod_{i\ne b_t}W_{t-1}^{A_t^i}R_t(x_{t-1}^{A_t^i},dx_t^i)$. The selected path factors are $\nu_0w_0=G_0\mu_0$ and $R_tw_t=G_tM_t$ by [F3]; all off-path factors are probability proposal/resampling kernels by [F2]. If any average weight is zero, the extended-target mass and selected target path measure are both zero at that step. [A1, F1, F2, F3, given, algebra]

2.1 For each fixed lineage $b$, the right side of step 1.1 integrates over the off-path variables to $C^{-1}\pi_0(d\theta)\gamma_{\theta,T}(dx^b)/N^{T+1}$ because those variables have the normalized SIR conditional law. There are exactly $N^{T+1}$ index sequences $b$, and summing over them gives total mass one and selected $(\theta,X_{0:T}^K)$ marginal $C^{-1}\pi_0(d\theta)\gamma_{\theta,T}(dx_{0:T})$, which is the posterior by [F4]. [F1, F2, F3, F4, step 1.1, algebra] ∎
