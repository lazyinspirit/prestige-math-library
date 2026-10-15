---
id: thm-particle-gibbs-conditional-sweep-is-gibbs
kind: theorem
title: The conditional particle Gibbs sweep is a Gibbs update
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 6
deps:
  - thm-disintegration-of-a-joint-law-on-standard-borel-spaces
  - def-axiom-of-choice
  - def-particle-gibbs-extended-target
  - alg-conditional-particle-gibbs
  - thm-particle-gibbs-selected-path-marginal
  - alg-sequential-importance-resampling
  - thm-feynman-kac-path-radon-nikodym-weight
proof_strategy: direct
axiom_use: "Assume AC through the path and kernel Radon–Nikodym suppliers. Standard-Borel conditional versions also use the stated AC assumption; finite categorical draws add no arbitrary choice."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Andrieu, Doucet, and Holenstein, Particle Markov chain Monte Carlo methods, §§4.3 and 4.5, equations (33) and (36)"
      url: "https://www.stats.ox.ac.uk/~doucet/andrieu_doucet_holenstein_PMCMC.pdf"
    - title: "Lindsten and Schön, On the use of backward simulation in particle Markov chain Monte Carlo methods (arXiv 1110.2873v2), §4.1"
      url: "https://arxiv.org/pdf/1110.2873.pdf"
---

## Statement

Under [[def-particle-gibbs-extended-target]] and
[[alg-conditional-particle-gibbs]], for $\varphi_N$-almost every extended
state the conditional law of the terminal index $K$ given $(\theta,U)$ is
$\mathrm{Categorical}(W_T^{1:N})$. For posterior-almost every retained parameter-trajectory-lineage value, the remaining particles and
ancestor indices have exactly the conditional-particle-filter law in
[[alg-conditional-particle-gibbs]]. In a joint sweep, the parameter draw from
its posterior full conditional given the selected path, followed by
regeneration of the remaining particles and ancestors from the
conditional-particle-filter law, is the joint conditional-block update of
those variables given the retained selected path and lineage. The terminal
index is then drawn from its categorical conditional given the particle
system. These two updates preserve the extended target; the measurable
exceptional-state identity fallback specified by the algorithm is included.
The selected marginal is the exact joint parameter-path posterior. This
invariance does not assert fast mixing.

## Facts & Assumptions

**Given:** A finite-horizon Feynman–Kac target, proposal path support, the multinomial SIR particle system with ancestor labels in sampled order, $N\ge2$, and the extended target $\varphi_N$.

[A1] [[def-axiom-of-choice]]: AC is assumed through the Radon–Nikodym weight versions and the standard-Borel disintegration supplying conditional versions.

[F1] [[def-particle-gibbs-extended-target]]: $\varphi_N=C^{-1}\pi_0(d\theta)\psi_\theta(du)\widehat Z_T(u)W_T^K(u)$; the selected trajectory is the ancestry-traced path of $K$.

[F2] [[alg-sequential-importance-resampling]]: the SIR forward law draws initial particles from $\nu_0$, resamples each next ancestor from $W_{t-1}$, propagates from the proposal kernel, and uses incremental weights $G_t,dM_t/dR_t$.

[F3] [[alg-conditional-particle-gibbs]]: it fixes the reference path and lineage, samples every other particle and ancestor by those same SIR conditionals, and fixes each reference ancestor to the preceding reference index.

[F4] [[thm-feynman-kac-path-radon-nikodym-weight]]: the initial and transition proposal ratios convert $\nu_0$ and $R_t$ factors into the Feynman–Kac path measure under the stated support hypotheses.

[F5] [[thm-particle-gibbs-selected-path-marginal]]: $\varphi_N$ is a probability measure with the exact joint parameter-smoothing posterior as selected marginal.

[F6] [[thm-disintegration-of-a-joint-law-on-standard-borel-spaces]]: under AC a probability on a product of standard-Borel spaces has conditional probability kernels unique outside a single measurable marginal-null set.

## Proof

**Given:** [A1] and the hypotheses in the Statement.

1.1 Since the only $K$-dependent factor in [F1] is $W_T^K$, and the final normalized weights sum to one, $\varphi_N(K=k\mid\theta,U)=W_T^k$. [F1, F2, given]

2.1 Fix a selected index $K$ and trace its lineage $b_0,\ldots,b_T$. On the positive-mass support of [F1], write $\bar w_t=N^{-1}\sum_iw_t^i$, so $\widehat Z_TW_T^K=(\prod_{t=0}^{T-1}\bar w_t)w_T^{b_T}/N$. In the forward density [F2], the selected lineage contributes $\prod_{t=1}^TW_{t-1}^{b_{t-1}}R_t(x_{t-1}^{b_{t-1}},dx_t^{b_t})$ and its initial proposal $\nu_0(dx_0^{b_0})$. Substituting $W_{t-1}^{b_{t-1}}=w_{t-1}^{b_{t-1}}/(N\bar w_{t-1})$ cancels each $\bar w_{t-1}$, leaving the selected path factor $N^{-(T+1)}\nu_0(dx_0^{b_0})w_0^{b_0}\prod_{t=1}^TR_t(x_{t-1}^{b_{t-1}},dx_t^{b_t})w_t^{b_t}$. If any average weight is zero, [F1] assigns the configuration zero extended-target mass, so its conditional law need not be specified there. [A1, F1, F2, step 1.1, algebra]

3.1 By the initial and transition Radon–Nikodym weight identities in [F4], the selected path factor in step 2.1 equals $N^{-(T+1)}\gamma_{\theta,T}(dx_{0:T}^{b})$. All remaining factors are exactly the conditional SIR laws for the non-reference particles and ancestors in [F3]. Thus, conditional on the selected path and lineage, the remaining particle variables have the stated conditional-particle-filter law; the same factorization makes the lineage indices uniform given the selected path. [A1, F1, F2, F3, F4, step 2.1, algebra]

4.1 By [F5], the extended target is a probability on a standard-Borel product. Apply [F6] to the particle system conditional on its retained parameter-path-lineage variables. The normalized factorization in step 3.1 identifies its conditional kernel outside a single measurable marginal-null set; pull their exceptional events back to the common extended-state space and take the finite union over lineages and update blocks. This union has target mass zero. Its conditional probability given the retained parameter-path-lineage is therefore zero outside a measurable marginal-null set, by the defining integral identity in [F6]; remove that set to obtain $D$ in [F3]. The same restriction excludes infinite or zero denominators on the positive extended-target support. On the exceptional set the algorithm uses the identity transition on the retained state, so it remains an everywhere measurable probability kernel without claiming pointwise Radon–Nikodym identities at null reference values. [A1, F1, F3, F5, F6, step 3.1, construct]

4.2 In the coordinates consisting of the selected path $x^b$, its lineage $b$, and the remaining particle variables $U_{-b}$, the factorization in step 3.1 gives the conditional law of $(\theta,U_{-b})$ given $(x^b,b)$. Its leading factor is $\pi_0(d\theta)\gamma_{\theta,T}(dx^b)/(C N^{T+1})$; the factor $N^{-(T+1)}$ makes $b$ uniform given $x^b$ and independent of $\theta$, while the conditional law of $U_{-b}$ given $(\theta,x^b,b)$ is exactly the conditional-particle-filter law in [F3]. Thus the posterior draw of $\theta$ given $x^b$, followed by regeneration of $U_{-b}$ with that filter, samples the joint conditional law of $(\theta,U_{-b})$ given $(x^b,b)$. This is a conditional-block update; the parameter draw alone is not asserted to be conditional on the old full particle system. [F1, F3, F5, step 3.1]

5.1 The block in step 4.2 is the conditional law of $(\theta,U_{-b})$ given the retained $(x^b,b)$, so replacing that block preserves $\varphi_N$ by the defining conditional-probability identity. By step 1.1, the subsequent draw of $K$ given the regenerated particle system is its conditional law $\mathrm{Categorical}(W_T^{1:N})$ and also preserves $\varphi_N$. The exceptional-state identity modification changes the target integral only on a target-null set by step 4.1. Therefore their composition preserves $\varphi_N$, whose selected marginal is the exact posterior by [F5]. [F1, F5, step 1.1, step 3.1, step 4.1, step 4.2, algebra] ∎
