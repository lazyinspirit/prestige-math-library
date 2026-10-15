---
id: thm-particle-gibbs-backward-simulation-sweep-is-gibbs
kind: theorem
title: The backward-simulation sweep is a Gibbs update
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 7
deps:
  - def-axiom-of-choice
  - def-particle-gibbs-backward-simulation-extended-target
  - alg-particle-gibbs-backward-simulation
  - thm-feynman-kac-path-radon-nikodym-weight
  - def-feynman-kac-path-targets-and-normalizers
proof_strategy: direct
axiom_use: "Assume AC through the path-density and Radon–Nikodym suppliers. The conditional particle indices are finite categorical variables."
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
[[alg-particle-gibbs-backward-simulation]], the conditional law of the
remaining particle system given $(\theta,x^*,j)$ is the stated conditional
auxiliary particle filter, and the conditional law of the index sequence given
the particle system is the backward simulator with terminal weights $W_T$ and
backward probabilities $B_t$. The extended target is a probability measure
whose selected $(\theta,x^*)$ marginal is the exact joint smoothing posterior.
Each sweep step is a Gibbs update, so the extended target is invariant for
every fixed $N\ge2$. No fast-mixing or ergodicity claim follows.

## Facts & Assumptions

**Given:** The density-based finite-horizon target, full target-path support,
positive finite backward denominators, and the SIR particle law.

[A1] [[def-axiom-of-choice]]: AC is assumed through the Radon–Nikodym path weights.

[F1] [[def-particle-gibbs-backward-simulation-extended-target]]: the extended density is the target path density times the SIR forward density divided by the selected particles' proposal densities, with the product of backward probabilities $B_t$ and uniform index factor $N^{-(T+1)}$.

[F2] [[alg-particle-gibbs-backward-simulation]]: the conditional auxiliary particle filter fixes reference states, draws their ancestors from $B$, and uses SIR transitions for the other particles; the backward simulator draws $J_T$ by $W_T$ and then each $J_t$ by $B_t$.

[F3] [[thm-feynman-kac-path-radon-nikodym-weight]]: on target support, each proposal weight is the target path factor divided by the corresponding proposal factor.

[F4] [[def-feynman-kac-path-targets-and-normalizers]]: $\gamma_{\theta,T}$ is the unnormalized state-path measure, and $C^{-1}\pi_0(d\theta)\gamma_{\theta,T}(dx)$ is a probability posterior when $0<C<\infty$.

## Proof

**Given:** The hypotheses in the Statement.

1.1 At each $t$, the one-step importance weight is $w_t=G_t f_t/q_t$ (and initially $w_0=G_0\,d\mu_0/d\nu_0$). For any two previous particles $i,\ell$ and a candidate state $z$, cancellation of the common potential gives
$$w_t(z,X_{t-1}^i)=w_t(z,X_{t-1}^\ell)\frac{f_t(z\mid X_{t-1}^i)q_t(z\mid X_{t-1}^\ell)}{f_t(z\mid X_{t-1}^\ell)q_t(z\mid X_{t-1}^i)}.$$
This identity is valid on the support in [F3]. [A1, F1, F3, given, algebra]

1.2 Fix a backward index sequence $j$ and its reference path. Expanding the forward density $\psi_\theta$ in [F1] and canceling the selected initial proposal and each selected joint ancestor-proposal factor gives $\varphi_N^{\rm BS}(d\theta,du,j)=\frac{\pi_0(d\theta)\gamma_{\theta,T}(dx^j_{0:T})}{C N^{T+1}}\prod_{i\ne j_0}q_{\theta,0}(x_0^i)\prod_{t=1}^T\left[\prod_{i\ne j_t}\left(W_{t-1}^{A_t^i}q_{\theta,t}(x_t^i\mid x_{t-1}^{A_t^i})\right)\right]\prod_{t=1}^TB_{t-1}^{A_t^{j_t}}(x_t^{j_t};U)$. The bracketed factors are exactly the non-reference resample-and-propagate law and the categorical backward ancestor law in [F2]. Each integrates to one, so this is the conditional auxiliary particle filter factorization and its conditional measure is normalized. [A1, F1, F2, F3, algebra]

2.1 Now fix the full particle system and condition in [F1] on its index sequence. Since $W_t^i=w_t^i/\sum_\ell w_t^\ell$, each backward factor is also $B_t^i(z;U)=w_t^if_{t+1}(z\mid X_t^i)/\sum_\ell w_t^\ell f_{t+1}(z\mid X_t^\ell)$. Replacing each selected-parent weight by the identity in step 1.1 cancels the selected proposal factors successively from $t=T$ to $t=1$, leaving unnormalized index mass $W_T^{j_T}\prod_{t=0}^{T-1}B_t^{j_t}(X_{t+1}^{j_{t+1}};U)$. These factors normalize sequentially: $\sum_{j_T}W_T^{j_T}=1$ and, for each fixed $j_{t+1}$, $\sum_{j_t}B_t^{j_t}(X_{t+1}^{j_{t+1}};U)=1$. Hence the full conditional is exactly the backward simulator in [F2]. [A1, F1, F2, F3, step 1.1, algebra]

2.2 By step 1.2, for each fixed $j$ the other particle variables have a normalized conditional law. The leading factor is $C^{-1}\pi_0(d\theta)\gamma_{\theta,T}(dx^j)/N^{T+1}$ by [F4]. There are $N^{T+1}$ index sequences, so integrating the remaining variables and summing over them gives total mass one and selected $(\theta,x^*)$ marginal $C^{-1}\pi_0(d\theta)\gamma_{\theta,T}(dx^*)$. [F1, F4, step 1.2, algebra]

3.1 Steps 1.2–2.2 and the exact parameter full conditional in [F2] are Gibbs conditionals of the extended target. Integrating a conditional update against the target recovers the same target by the defining conditional-probability identity; the composition of these updates therefore leaves the extended target invariant. The selected marginal in step 2.2 remains exact. [F1, F2, F4, step 1.2, step 2.1, step 2.2] ∎
