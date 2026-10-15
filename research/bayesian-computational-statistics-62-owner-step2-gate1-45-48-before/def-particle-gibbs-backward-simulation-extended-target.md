---
id: def-particle-gibbs-backward-simulation-extended-target
kind: definition
title: Backward-simulation particle Gibbs extended target
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 5
deps:
  - thm-disintegration-of-a-joint-law-on-standard-borel-spaces
  - def-particle-gibbs-extended-target
  - def-feynman-kac-path-targets-and-normalizers
  - thm-feynman-kac-path-radon-nikodym-weight
  - alg-sequential-importance-resampling
justified_by:
  - thm-particle-gibbs-backward-simulation-sweep-is-gibbs
axiom_use: "Assume AC through the finite path densities and Radon–Nikodym weights. Backward indices range over finite sets."
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Andrieu, Doucet, and Holenstein, Particle Markov chain Monte Carlo methods, §§4.3 and 4.5"
      url: "https://www.stats.ox.ac.uk/~doucet/andrieu_doucet_holenstein_PMCMC.pdf"
    - title: "Lindsten and Schön, On the use of backward simulation in the particle Gibbs sampler, §4.1, equations (6)–(7), Propositions 1–3, Appendix A"
      url: "https://arxiv.org/pdf/1110.2873.pdf"
---

## Definition

Assume the finite-horizon Feynman–Kac model and proposal support conditions in
[[def-feynman-kac-path-targets-and-normalizers]] and
[[thm-feynman-kac-path-radon-nikodym-weight]]. Use the multinomial SIR law with ancestor indices in sampled order. Residual resampling is not included in this labeled-density construction. For this variant, additionally
assume that the initial target law has a measurable density $\mu_{\theta,0}$,
each target transition $M_{\theta,t}$ has a jointly measurable density
$f_{\theta,t}(x_t\mid x_{t-1})$, and each proposal transition $R_{\theta,t}$ has
a density $q_{\theta,t}(x_t\mid x_{t-1})$, all with respect to declared
sigma-finite coordinate reference measures. Let $q_{\theta,0}$ be the proposal
initial density with respect to the initial coordinate reference measure.
Retain the proper-prior and positive-finite-evidence assumptions of
[[def-particle-gibbs-extended-target]]. Then
the path measure has density
$$\gamma_{\theta,T}(x_{0:T})=\mu_{\theta,0}(x_0)G_0(x_0)\prod_{t=1}^Tf_{\theta,t}(x_t\mid x_{t-1})G_t(x_t).$$
Require positive finite denominators in the backward probabilities below on
the extended-target support.

Write $U$ for all SIR particles and ancestor indices, $\psi_\theta(u)$ for
their forward joint density, and $j=(j_0,\ldots,j_T)$ for a sequence of
particle indices. Let $x^j_{0:T}$ be the path formed from states
$X_t^{j_t}$, without requiring $A_t^{j_t}=j_{t-1}$. For
$t=0,\ldots,T-1$, define
$$B_t^i(z;U)=\frac{W_t^i f_{\theta,t+1}(z\mid X_t^i)}{\sum_{\ell=1}^NW_t^\ell f_{\theta,t+1}(z\mid X_t^\ell)}.$$
The backward-simulation extended target is
$$\varphi_N^{\rm BS}(d\theta,du,j)=\frac{\pi_0(d\theta)\,\gamma_{\theta,T}(x^j_{0:T})}{C\,N^{T+1}}\frac{\psi_\theta(u)}{q_{\theta,0}(X_0^{j_0})\prod_{t=1}^TW_{t-1}^{A_t^{j_t}}q_{\theta,t}(X_t^{j_t}\mid X_{t-1}^{A_t^{j_t}})}\prod_{t=1}^TB_{t-1}^{A_t^{j_t}}(X_t^{j_t};U).$$
where the displayed expression is a density with respect to the common
particle reference measures, counting measure on ancestor and selected indices,
and the prior measure on $\theta$. The complete SIR forward density
$\psi_\theta$ includes the normalized ancestor probabilities and proposal
densities for every particle. This is the backward-simulation extension of the
particle Gibbs target; its exact selected-path marginal and Gibbs conditionals
are proved in
[[thm-particle-gibbs-backward-simulation-sweep-is-gibbs]].

## Conditional-version convention

Interpret all displayed ratios on their common positive finite denominator sets and set the density to zero elsewhere. The theorem below proves these versions agree with the extended target and its conditional laws almost everywhere. By [[thm-disintegration-of-a-joint-law-on-standard-borel-spaces]], fix a common measurable full-posterior-measure good set $D_{\rm BS}$ of retained parameter-path-index values on which the normalized conditional auxiliary filter and backward-index formulas are valid. This also excludes exceptional reference values of the chosen density/Radon–Nikodym versions. Off this set, the sweep is the identity on the retained state. A reference value being in topological support is not a replacement for this almost-everywhere convention.
