---
id: ex-particle-gibbs-invariant-but-sticky
kind: example
title: An invariant particle Gibbs chain can be sticky
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 7
deps:
  - alg-conditional-particle-gibbs
  - thm-particle-gibbs-selected-path-marginal
  - thm-particle-gibbs-conditional-sweep-is-gibbs
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Andrieu, Doucet, and Holenstein, Particle Markov chain Monte Carlo methods, §4.5 and discussion of path degeneracy"
      url: "https://www.stats.ox.ac.uk/~doucet/andrieu_doucet_holenstein_PMCMC.pdf"
    - title: "Lindsten and Schön, On the use of backward simulation in particle Markov chain Monte Carlo methods (arXiv 1110.2873v2), §§1 and 4"
      url: "https://arxiv.org/pdf/1110.2873.pdf"
---

## Example

Take the one-time model $T=0$ with state space $\{0,1\}$, target
$\pi(0)=99/100$, $\pi(1)=1/100$, and proposal
$q(0)=1/100$, $q(1)=99/100$. Both target states are in proposal support. Use
$N=2$ particles: one is the retained reference state, the other is sampled
from $q$, and the next state is drawn from the two importance weights
$w(x)=\pi(x)/q(x)$. This is the one-time conditional particle Gibbs update.

## Facts & Assumptions

**Given:** The conditional particle filter and invariance results in [[alg-conditional-particle-gibbs]], [[thm-particle-gibbs-selected-path-marginal]], and [[thm-particle-gibbs-conditional-sweep-is-gibbs]].

[F1] [[alg-conditional-particle-gibbs]]: with one free particle at $T=0$, draw it from $q$ and select between it and the fixed reference particle in proportion to their target-to-proposal weights.

[F2] [[thm-particle-gibbs-conditional-sweep-is-gibbs]]: the finite particle Gibbs update preserves the extended target and has the exact posterior marginal.

## Verification

**Given:** The finite two-state model in the Example.

1.1 The importance weights are $w(0)=(99/100)/(1/100)=99$ and $w(1)=(1/100)/(99/100)=1/99$. From reference state $0$, the free particle is $1$ with probability $99/100$ and is selected with probability $(1/99)/(99+1/99)=1/9802$. Therefore $P(0,1)=99/980200$. [F1, given, algebra]

1.2 From reference state $1$, the free particle is $0$ with probability $1/100$ and is selected with probability $99/(99+1/99)=9801/9802$. Therefore $P(1,0)=9801/980200$. [F1, given, algebra]

2.1 The detailed-balance flows agree: $(99/100)P(0,1)=9801/98020000=(1/100)P(1,0)$, consistent with the exact invariance in [F2]. Yet the probability of leaving state $0$ is only $99/980200<1/9000$, so exact invariance alone gives no useful lower bound on movement. [F2, step 1.1, step 1.2, algebra] ∎
