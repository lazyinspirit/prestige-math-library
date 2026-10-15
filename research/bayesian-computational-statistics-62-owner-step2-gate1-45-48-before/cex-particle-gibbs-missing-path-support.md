---
id: cex-particle-gibbs-missing-path-support
kind: counterexample
title: A particle Gibbs proposal that misses posterior path support
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 6
deps:
  - alg-conditional-particle-gibbs
  - thm-particle-gibbs-selected-path-marginal
  - thm-feynman-kac-path-radon-nikodym-weight
proof_strategy: direct
generation:
  role: counterexample
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Andrieu, Doucet, and Holenstein, Particle Markov chain Monte Carlo methods, Assumption 5 and Theorem 5"
      url: "https://www.stats.ox.ac.uk/~doucet/andrieu_doucet_holenstein_PMCMC.pdf"
    - title: "Lindsten and Schön, On the use of backward simulation in the particle Gibbs sampler, Assumption 1 and §4.1"
      url: "https://arxiv.org/pdf/1110.2873.pdf"
---

## Statement refuted

A particle Gibbs exactness construction remains well-defined with its usual
finite importance weights even if its proposal assigns zero probability to a
positive-mass posterior path.

## Facts & Assumptions

**Given:** The support requirements in
[[alg-conditional-particle-gibbs]] and
[[thm-feynman-kac-path-radon-nikodym-weight]].

[F1] [[alg-conditional-particle-gibbs]]: its reference path and proposal weights must be defined under the full target-path support condition.

[F2] [[thm-feynman-kac-path-radon-nikodym-weight]]: the target path measure is absolutely continuous with respect to the proposal path measure and the displayed importance weight is its Radon–Nikodym density.

## Counterexample

Use the one-time path space $\{0,1\}$ with posterior
$\pi=(\delta_0+\delta_1)/2$ and proposal $q=\delta_0$. The posterior assigns
positive mass to state $1$, but the proposal assigns it zero mass.

1.1 Since $q(\{1\})=0$ while $\pi(\{1\})=1/2$, $\pi\not\ll q$. Therefore the Radon–Nikodym weight required by [F2] does not exist on the full target support, so the stated conditional particle filter hypotheses fail. [F1, F2, given]

2.1 Starting from reference state $0$, every free particle is also $0$ because it is drawn from $q=\delta_0$. The particle filter therefore cannot represent the positive posterior mass at state $1$ by a weighted proposal path. The exact conditional particle filter in [F1] is not defined with the required target-to-proposal weight on the full posterior support. Thus the support-free exactness claim is false as stated. [F1, F2, step 1.1, given] ∎
