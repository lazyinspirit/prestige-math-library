---
id: thm-particle-gibbs-conditional-sweep-is-gibbs
kind: theorem
title: The conditional particle Gibbs sweep is a Gibbs update
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 6
deps:
  - def-axiom-of-choice
  - def-particle-gibbs-extended-target
  - alg-conditional-particle-gibbs
  - thm-particle-gibbs-selected-path-marginal
  - alg-sequential-importance-resampling
  - thm-feynman-kac-path-radon-nikodym-weight
proof_strategy: direct
axiom_use: "Assume AC through the path and kernel Radon–Nikodym suppliers. Finite categorical draws and conditional-kernel integration use no additional choice."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Andrieu, Doucet, and Holenstein, Particle Markov chain Monte Carlo methods, §§4.3 and 4.5, equations (33) and (36)"
      url: "https://www.stats.ox.ac.uk/~doucet/andrieu_doucet_holenstein_PMCMC.pdf"
    - title: "Lindsten and Schön, On the use of backward simulation in the particle Gibbs sampler, §4.1"
      url: "https://arxiv.org/pdf/1110.2873.pdf"
---

## Statement

Under [[def-particle-gibbs-extended-target]] and
[[alg-conditional-particle-gibbs]], for $\varphi_N$-almost every extended
state the conditional law of the terminal index $K$ given the particle cloud
is $\mathrm{Categorical}(W_T^{1:N})$. Given the
retained trajectory and its reference lineage, the remaining particles and
ancestor indices have exactly the conditional-particle-filter law in
[[alg-conditional-particle-gibbs]]. The parameter conditional is the ordinary
posterior full conditional given the selected path. Consequently these are
Gibbs updates of the extended target. Their composition leaves that target
invariant and has the exact joint parameter-path posterior as its selected
marginal. This invariance does not assert fast mixing.

## Facts & Assumptions

**Given:** A finite-horizon Feynman–Kac target, proposal path support, the SIR
particle system, $N\ge2$, and the extended target $\varphi_N$.

[A1] [[def-axiom-of-choice]]: AC is assumed through the Radon–Nikodym weight versions used by SIR.

[F1] [[def-particle-gibbs-extended-target]]: $\varphi_N=C^{-1}\pi_0(d\theta)\psi_\theta(du)\widehat Z_T(u)W_T^K(u)$; the selected trajectory is the ancestry-traced path of $K$.

[F2] [[alg-sequential-importance-resampling]]: the SIR forward law draws initial particles from $\nu_0$, resamples each next ancestor from $W_{t-1}$, propagates from the proposal kernel, and uses incremental weights $G_t,dM_t/dR_t$.

[F3] [[alg-conditional-particle-gibbs]]: it fixes the reference path and lineage, samples every other particle and ancestor by those same SIR conditionals, and fixes each reference ancestor to the preceding reference index.

[F4] [[thm-feynman-kac-path-radon-nikodym-weight]]: the initial and transition proposal ratios convert $\nu_0$ and $R_t$ factors into the Feynman–Kac path measure under the stated support hypotheses.

[F5] [[thm-particle-gibbs-selected-path-marginal]]: $\varphi_N$ is a probability measure with the exact joint parameter-smoothing posterior as selected marginal.

## Proof

**Given:** [A1] and the hypotheses in the Statement.

1.1 Since the only $K$-dependent factor in [F1] is $W_T^K$, and the final normalized weights sum to one, $\varphi_N(K=k\mid\theta,U)=W_T^k$. [F1, F2, given]

2.1 Fix a selected index $K$ and trace its lineage $b_0,\ldots,b_T$. On the positive-mass support of [F1], write $\bar w_t=N^{-1}\sum_iw_t^i$, so $\widehat Z_TW_T^K=(\prod_{t=0}^{T-1}\bar w_t)w_T^{b_T}/N$. In the forward density [F2], the selected lineage contributes $\prod_{t=1}^TW_{t-1}^{b_{t-1}}R_t(x_{t-1}^{b_{t-1}},dx_t^{b_t})$ and its initial proposal $\nu_0(dx_0^{b_0})$. Substituting $W_{t-1}^{b_{t-1}}=w_{t-1}^{b_{t-1}}/(N\bar w_{t-1})$ cancels each $\bar w_{t-1}$, leaving the selected path factor $N^{-(T+1)}\nu_0(dx_0^{b_0})w_0^{b_0}\prod_{t=1}^TR_t(x_{t-1}^{b_{t-1}},dx_t^{b_t})w_t^{b_t}$. If any average weight is zero, [F1] assigns the configuration zero extended-target mass, so its conditional law need not be specified there. [A1, F1, F2, step 1.1, algebra]

3.1 By the initial and transition Radon–Nikodym weight identities in [F4], the selected path factor in step 2.1 equals $N^{-(T+1)}\gamma_{\theta,T}(dx_{0:T}^{b})$. All remaining factors are exactly the conditional SIR laws for the non-reference particles and ancestors in [F3]. Thus, conditional on the selected path and lineage, the remaining particle variables have the stated conditional-particle-filter law; the same factorization makes the lineage indices uniform given the selected path. [A1, F1, F2, F3, F4, step 2.1, algebra]

4.1 Step 3.1 and [F5] identify the selected $(\theta,x^b)$ marginal as the posterior. Therefore its conditional in $\theta$ given $x^b$ is the posterior full conditional. The first update in the joint particle Gibbs sweep is this Gibbs conditional. [F1, F3, F5, step 3.1]

5.1 Each update just identified replaces one coordinate by its conditional law under $\varphi_N$. For any measurable set $E$, integrating first over the old coordinate and then over the replacement coordinate leaves $\varphi_N(E)$ unchanged by the defining conditional-probability identity. Hence each Gibbs update preserves $\varphi_N$, and their composition does too. Its selected marginal remains the exact posterior by [F5]. [F1, F5, step 1.1, step 3.1, step 4.1, algebra] ∎
