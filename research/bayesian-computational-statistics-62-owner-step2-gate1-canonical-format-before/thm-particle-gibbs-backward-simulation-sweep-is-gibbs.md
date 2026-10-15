---
id: thm-particle-gibbs-backward-simulation-sweep-is-gibbs
kind: theorem
title: The backward-simulation sweep is a Gibbs update
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 7
deps:
  - thm-disintegration-of-a-joint-law-on-standard-borel-spaces
  - def-axiom-of-choice
  - def-particle-gibbs-backward-simulation-extended-target
  - alg-particle-gibbs-backward-simulation
  - thm-feynman-kac-path-radon-nikodym-weight
  - def-feynman-kac-path-targets-and-normalizers
proof_strategy: direct
axiom_use: "Assume AC through the path-density and Radon–Nikodym suppliers. Standard-Borel conditional versions also use AC; particle indices remain finite categorical variables."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Lindsten and Schön, On the use of backward simulation in the particle Gibbs sampler, §4.1, Propositions 1–3, Appendix A"
      url: "https://arxiv.org/pdf/1110.2873.pdf"
    - title: "Andrieu, Doucet, and Holenstein, Particle Markov chain Monte Carlo methods, §4.5 and Appendix A"
      url: "https://www.stats.ox.ac.uk/~doucet/andrieu_doucet_holenstein_PMCMC.pdf"
---

## Statement

Under [[def-particle-gibbs-backward-simulation-extended-target]] and
[[alg-particle-gibbs-backward-simulation]], for posterior-almost every retained state in the stated good set, the conditional law of the
remaining particle system given $(\theta,x^*,j)$ is the stated conditional
auxiliary particle filter, and the conditional law of the index sequence given
$(\theta,U)$ is the backward simulator with terminal weights $W_T$ and
backward probabilities $B_t$. In a joint sweep, the posterior draw of
$\theta'$ given the selected path, followed by conditional auxiliary-particle
filter regeneration, is the joint conditional-block update of the parameter
and remaining particle variables given the retained path and index sequence.
The backward-index draw is then its conditional update given $(\theta',U')$.
The extended target is a probability measure whose selected $(\theta,x^*)$
marginal is the exact joint smoothing posterior. With the measurable identity
fallback on exceptional retained states, these updates preserve the extended
target for every fixed $N\ge2$. No fast-mixing or ergodicity claim follows.

## Facts & Assumptions

**Given:** The density-based finite-horizon target, full target-path support,
positive finite backward denominators, and the multinomial SIR particle law with ancestor labels in sampled order.

[A1] [[def-axiom-of-choice]]: AC is assumed through the Radon–Nikodym path weights and standard-Borel disintegration.

[F1] [[def-particle-gibbs-backward-simulation-extended-target]]: the extended density is the target path density times the SIR forward density divided by the selected particles' proposal densities, with the product of backward probabilities $B_t$ and uniform index factor $N^{-(T+1)}$.

[F2] [[alg-particle-gibbs-backward-simulation]]: the conditional auxiliary particle filter fixes reference states, draws their ancestors from $B$, and uses SIR transitions for the other particles; the backward simulator draws $J_T$ by $W_T$ and then each $J_t$ by $B_t$.

[F3] [[thm-feynman-kac-path-radon-nikodym-weight]]: on target support, each proposal weight is the target path factor divided by the corresponding proposal factor.

[F4] [[def-feynman-kac-path-targets-and-normalizers]]: $\gamma_{\theta,T}$ is the unnormalized state-path measure, and $C^{-1}\pi_0(d\theta)\gamma_{\theta,T}(dx)$ is a probability posterior when $0<C<\infty$.

[F5] [[thm-disintegration-of-a-joint-law-on-standard-borel-spaces]]: under AC conditional probability kernels exist and are unique outside a single measurable marginal-null set on standard-Borel products.

## Proof

**Given:** The hypotheses in the Statement.

1.1 At each $t$, the one-step importance weight is $w_t=G_t f_t/q_t$ (and initially $w_0=G_0\,d\mu_0/d\nu_0$). For any two previous particles $i,\ell$ and a candidate state $z$, cancellation of the common potential gives $w_t(z,X_{t-1}^i)=w_t(z,X_{t-1}^\ell)\frac{f_t(z\mid X_{t-1}^i)q_t(z\mid X_{t-1}^\ell)}{f_t(z\mid X_{t-1}^\ell)q_t(z\mid X_{t-1}^i)}.$ This identity is valid on the support in [F3]. [A1, F1, F3, given, algebra]

1.2 Fix a backward index sequence $j$ and its reference path. Expanding the forward density $\psi_\theta$ in [F1] and canceling the selected initial proposal and each selected joint ancestor-proposal factor gives $\varphi_N^{\rm BS}(d\theta,du,j)=\frac{\pi_0(d\theta)\gamma_{\theta,T}(dx^j_{0:T})}{C N^{T+1}}\prod_{i\ne j_0}q_{\theta,0}(x_0^i)\prod_{t=1}^T\left[\prod_{i\ne j_t}\left(W_{t-1}^{A_t^i}q_{\theta,t}(x_t^i\mid x_{t-1}^{A_t^i})\right)\right]\prod_{t=1}^TB_{t-1}^{A_t^{j_t}}(x_t^{j_t};U)$. The bracketed factors are exactly the non-reference resample-and-propagate law and the categorical backward ancestor law in [F2]. Each integrates to one, so this is the conditional auxiliary particle filter factorization and its conditional measure is normalized. [A1, F1, F2, F3, algebra]

2.1 Now fix $(\theta,U)$ and condition in [F1] on its index sequence. Since $W_t^i=w_t^i/\sum_\ell w_t^\ell$, each backward factor is also $B_t^i(z;U)=w_t^if_{t+1}(z\mid X_t^i)/\sum_\ell w_t^\ell f_{t+1}(z\mid X_t^\ell)$. Replacing each selected-parent weight by the identity in step 1.1 cancels the selected proposal factors successively from $t=T$ to $t=1$, leaving unnormalized index mass $W_T^{j_T}\prod_{t=0}^{T-1}B_t^{j_t}(X_{t+1}^{j_{t+1}};U)$. These factors normalize sequentially: $\sum_{j_T}W_T^{j_T}=1$ and, for each fixed $j_{t+1}$, $\sum_{j_t}B_t^{j_t}(X_{t+1}^{j_{t+1}};U)=1$. Hence the full conditional is exactly the backward simulator in [F2]. [A1, F1, F2, F3, step 1.1, algebra]

2.2 By step 1.2, for each fixed $j$ the other particle variables have a normalized conditional law. The leading factor is $C^{-1}\pi_0(d\theta)\gamma_{\theta,T}(dx^j)/N^{T+1}$ by [F4]. There are $N^{T+1}$ index sequences, so integrating the remaining variables and summing over them gives total mass one and selected $(\theta,x^*)$ marginal $C^{-1}\pi_0(d\theta)\gamma_{\theta,T}(dx^*)$. [F1, F4, step 1.2, algebra]

2.3 The standard-Borel state and particle spaces permit [F5] to be applied to the probability target in step 2.2. The normalized factorizations in steps 1.2 and 2.1 identify its conditional kernels outside measurable marginal-null sets. Pull exceptional events back to the common extended-state space and take their finite union over index sequences and sweep blocks; its target mass is zero. By the conditional integral identity in [F5], its conditional probability given the retained variables is zero outside a measurable marginal-null set. Removing this set gives the good set specified in [F1]–[F2]. On its complement the algorithm retains the old state; undefined ratio or normalization events within a conditional factorization have zero conditional mass on this good set. Thus the stated formulas and their measurable fallback define conditional-law versions almost everywhere, without assuming arbitrary reference points admit valid density ratios. [A1, F1, F2, F5, step 1.2, step 2.1, step 2.2, construct]

3.1 In coordinates consisting of the selected path $x^j$, its index sequence $j$, and the remaining particle variables $U_{-j}$, the factorization in step 1.2 shows that the conditional law of $(\theta,U_{-j})$ given $(x^j,j)$ is obtained by first drawing $\theta$ from its posterior full conditional given $x^j$ and then drawing $U_{-j}$ from the conditional auxiliary-particle-filter law. The factor $N^{-(T+1)}$ is constant in $\theta$ and $x^j$, so the old particle system has been marginalized in this joint conditional block. Thus the first two updates in the algorithm, parameter draw and filter regeneration, together preserve the extended target. By step 2.1, the following backward-index draw is the conditional law of $j$ given $(\theta,U)$ and also preserves that target. The exceptional-state identity modifications do not change its integral by step 2.3, and the selected marginal in step 2.2 remains exact. [F1, F2, F4, step 1.2, step 2.1, step 2.2, step 2.3] ∎
