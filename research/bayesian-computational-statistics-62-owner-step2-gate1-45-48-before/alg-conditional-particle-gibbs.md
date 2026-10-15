---
id: alg-conditional-particle-gibbs
kind: algorithm
title: Conditional particle filter for particle Gibbs
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 5
deps:
  - def-particle-gibbs-extended-target
  - alg-sequential-importance-resampling
  - def-feynman-kac-path-targets-and-normalizers
  - thm-feynman-kac-path-radon-nikodym-weight
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Andrieu, Doucet, and Holenstein, Particle Markov chain Monte Carlo methods, §§4.3 and 4.5"
      url: "https://www.stats.ox.ac.uk/~doucet/andrieu_doucet_holenstein_PMCMC.pdf"
    - title: "Lindsten and Schön, On the use of backward simulation in the particle Gibbs sampler, §4.1"
      url: "https://arxiv.org/pdf/1110.2873.pdf"
---

## Definition

Fix $N\ge2$, a finite horizon $T$, a parameter $\theta$, and a reference
trajectory $x^*_{0:T}$ with a reference lineage of particle indices
$b_0,\ldots,b_T\in\{1,\ldots,N\}$. Use the proposal kernels, incremental
weights, and normalized resampling weights of
[[alg-sequential-importance-resampling]]. Use multinomial resampling with indices in sampled order. Require target-path domination as in [[thm-feynman-kac-path-radon-nikodym-weight]] and a retained $(\theta,x^*,b)$ in the measurable full-measure good set $D$ of [[def-particle-gibbs-extended-target]]. The formulas are conditional-law versions for posterior-almost every reference path; membership in topological support alone is insufficient. Outside $D$, return status “unavailable” and leave the retained parameter-path-lineage state unchanged in the sweep. If an arithmetic operation in a sampled particle system is undefined or a required normalizing sum is zero/nonfinite, also return “unavailable” and retain the old state; on $D$ these events have conditional probability zero by the factorization theorem.

At fixed $\theta$, use the parameter-specific proposal kernels and weights in
[[alg-sequential-importance-resampling]], writing its normalized resampling
weights $\bar w_t^i$ as $W_t^i$. The input is $(\theta,x^*_{0:T},b_{0:T})$;
the output is the conditional particle system, its normalized weights, its
ancestry arrays, and either a successful status or “unavailable”.

1. At time $0$, draw each $X_0^i$ for $i\ne b_0$ independently from $\nu_0$
   and set $X_0^{b_0}=x_0^*$. Compute the SIR initial weights
   $a_0^i=G_0(X_0^i)\rho_0(X_0^i)$ and set
   $\widehat Z_0=N^{-1}\sum_i a_0^i$. If $\sum_i a_0^i>0$, put
   $W_0^i=a_0^i/\sum_j a_0^j$; otherwise use the SIR zero-weight convention
   $W_0^i=1/N$. A zero or nonfinite normalizing sum makes the sweep unavailable
   and returns the unchanged retained state.
2. For $t=1,\ldots,T$, for every $i\ne b_t$ draw an ancestor $A_t^i$ from the
   categorical distribution with probabilities $W_{t-1}^{1:N}$ and then draw
   $X_t^i$ from the proposal kernel conditional on $X_{t-1}^{A_t^i}$. Set
   $A_t^{b_t}=b_{t-1}$ and $X_t^{b_t}=x_t^*$. Compute the SIR incremental
   weights $a_t^i=G_t(X_t^i)r_t(X_{t-1}^{A_t^i},X_t^i)$ and update
   $\widehat Z_t=\widehat Z_{t-1}(N^{-1}\sum_i a_t^i)$. If the weight sum is
   positive, put $W_t^i=a_t^i/\sum_j a_t^j$; otherwise use the SIR zero-weight
   convention $W_t^i=1/N$. A zero or nonfinite normalizing sum makes the sweep
   unavailable and returns the unchanged retained state.
3. Return the conditional particle system, its normalized weights, and its
   ancestry arrays.

For a joint parameter-path sweep, retain the current selected path $x^*$ and
its lineage $b$, draw $\theta'$ from its exact posterior full conditional
given $x^*$, and apply Steps 1–3 at $\theta'$. This parameter draw followed by
conditional-particle-filter regeneration is one joint conditional-block
update. Then draw $K'\sim\mathrm{Categorical}(W_T^{1:N})$ and trace its
ancestry to obtain the next selected path. Output the new extended state
$(\theta',U',K')$ together with that path. The correctness of this sweep is a
separate result.
