---
id: ex-multinomial-versus-residual-resampling
kind: example
title: "Multinomial and residual resampling on three weights"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - alg-multinomial-and-residual-offspring-resampling
  - thm-multinomial-and-residual-resampling-have-unbiased-offspring-counts
proof_strategy: direct
axiom_use: "No choice axiom is used; the computations are finite sums."
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
verification:
  precheck: pass
sources:
  references:
    - title: "Arnaud Doucet and Adam M. Johansen, A Tutorial on Particle Filtering and Smoothing: Fifteen Years Later, §3.4"
      url: "https://www.stats.ox.ac.uk/~doucet/doucet_johansen_tutorialPF2011.pdf"
    - title: "Simo Särkkä and Lennart Svensson, Bayesian Filtering and Smoothing, 2nd ed., §11.4"
      url: "https://users.aalto.fi/~ssarkka/pub/bfs_book_2023_online.pdf"
    - title: "Nicolas Chopin, Central Limit Theorem for Sequential Monte Carlo Methods and its Application to Bayesian Inference, §2.1"
      url: "https://arxiv.org/pdf/math/0508594"
---

## Example

Resample $N=5$ particles from normalized weights $p=(31/50,7/25,1/10)=(0.62,0.28,0.10)$. Compare the expected offspring counts and marginal count variances for the multinomial and residual schemes.

## Facts & Assumptions

**Given:** The normalized weights and the two procedures in the Example.

[F1] [[alg-multinomial-and-residual-offspring-resampling]]: Multinomial counts are sums of conditionally independent categorical indicators; residual counts add integer floors to categorical draws from normalized fractional remainders.

[F2] [[thm-multinomial-and-residual-resampling-have-unbiased-offspring-counts]]: Both schemes have conditional expected count $Np_j$ for each particle.

## Verification

**Given:** $N=5$ and $p=(31/50,7/25,1/10)$.

1.1 The vector is a probability vector, and $Np=(31/10,7/5,1/2)=(3.1,1.4,0.5)$. By [F2], both schemes therefore have those expected counts. [F2, given, algebra]

1.2 In multinomial resampling each count is a sum of five independent Bernoulli indicators with success probability $p_j$, so its variance is $5p_j(1-p_j)$. The three marginal variances are $1.178$, $1.008$, and $0.45$. [F1, given, algebra]

1.3 Residual resampling has deterministic floors $(3,1,0)$ and fractional remainders $(0.1,0.4,0.5)$, whose sum is $R=1$. It draws one extra index with these probabilities, so the marginal count variances are $0.1(0.9)=0.09$, $0.4(0.6)=0.24$, and $0.5(0.5)=0.25$. [F1, given, algebra]

2.1 The expected counts agree componentwise, while for these weights each residual marginal variance is smaller than the corresponding multinomial marginal variance. This is a calculation for this input vector, not a general variance-ordering claim. [step 1.2, step 1.3, algebra] ∎

## Remarks

The comparison concerns offspring counts only. It does not compare posterior accuracy or claim that residual resampling uniformly improves every statistic.
