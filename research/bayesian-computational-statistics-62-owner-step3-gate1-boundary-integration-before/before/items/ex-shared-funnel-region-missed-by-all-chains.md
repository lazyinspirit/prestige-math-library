---
id: ex-shared-funnel-region-missed-by-all-chains
kind: example
title: A shared missed region in a finite funnel-shaped target
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - def-axiom-of-choice
  - def-probability-measure
  - def-transition-matrix-and-n-step-transition-probabilities
  - def-invariant-and-stationary-distribution-for-a-markov-kernel
  - def-time-homogeneous-markov-chain-with-transition-kernel
  - alg-rank-normalized-folded-split-rhat
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
sources:
  references:
    - title: "Aki Vehtari et al., Rank-normalization, folding, and localization, §§1.1 and 5.2"
      url: https://arxiv.org/pdf/1903.08008v5
    - title: "Art B. Owen, Monte Carlo Theory, Methods and Examples, Chapter 11, §11.11"
      url: https://artowen.su.domains/mc/Ch-MCMC.pdf
axiom_use: "The finite transition table is choice-free. The cited general Markov-chain and rank-normal-score interfaces assume the full Axiom of Choice."
---

## Example

This finite funnel-shaped model has state space $E=\{n\}\cup B$ with the
discrete sigma-algebra, where $n=(0,0)$ is the narrow state and
$B=\{(v,x):v\in\{1,2,3,4\},\ x\in\{-2,-1,1,2\}\}$ is the broad region.
Let $\pi(n)=1/2$ and give each state in $B$ mass $1/32$. Let $K$ fix $n$ and
cycle through the 16 states of $B$ in lexicographic order, beginning at
$(1,-2)$. Let $\Pi$ be the independent-refresh kernel
$\Pi(x,\{y\})=\pi(y)$ and put $P=.99K+.01\Pi$. Start four chains at $(1,-2)$
and use independent transition randomness. On an event of probability
$.99^{124}$, all 124 transitions use $K$. Every chain then misses the narrow
state, even though it has target mass $1/2$. On that event the rank-normalized
folded split $\widehat R$ for each coordinate is $\sqrt{15/16}<1$.

## Facts & Assumptions

**Given:** The finite state space, probability vector $\pi$, kernels $K,\Pi,P$,
four chains started at $(1,-2)$, and the algorithm
[[alg-rank-normalized-folded-split-rhat]].

[A1] The full Axiom of Choice assumed by the general time-homogeneous chain and rank-score interfaces.
[[def-axiom-of-choice]]

[F1] A transition matrix on a countable discrete space has probability rows
$p(x,y)=K(x,\{y\})$ summing to one.
[[def-transition-matrix-and-n-step-transition-probabilities]]

[F2] A probability measure $\pi$ is invariant for $K$ when
$\int K(x,A)\,\pi(dx)=\pi(A)$ for every measurable $A$.
[[def-invariant-and-stationary-distribution-for-a-markov-kernel]]

[F3] A probability measure has total mass one.
[[def-probability-measure]]

[F4] The algorithm returns the maximum of rank-normalized split $\widehat R$
on the draws and on their absolute deviations from the pooled median.
[[alg-rank-normalized-folded-split-rhat]]

[F5] A time-homogeneous chain has one-step conditional transition law given by
its probability kernel relative to the stated filtration.
[[def-time-homogeneous-markov-chain-with-transition-kernel]]

## Verification



**Given:** The finite model and event specified in the Example.

1.1 The masses of $\pi$ sum to $1/2+16(1/32)=1$, so $\pi$ is a probability measure by [F3]. The maps $K$ and $\Pi$ have probability rows by construction, so their convex mixture $P$ is also a transition matrix by [F1]. The kernel $K$ fixes the narrow state and permutes sixteen equally weighted broad states, hence $\pi K=\pi$. Every row of $\Pi$ is $\pi$, hence $\pi\Pi=\pi$; linearity gives $\pi P=.99\pi K+.01\pi\Pi=\pi$. [given, F1, F2, F3, algebra]

1.2 By [F5], these are time-homogeneous chains with transition rule $P$. Each has 31 transitions. The independent transition choices all select $K$ with probability $.99^{4\cdot31}$. On this event each chain completes two cycles through $B$ and never visits $n$, despite $\pi(\{n\})=1/2$. [A1, given, F1, F5, algebra]

1.3 Each original chain has length 32 and traverses the same 16-state cycle twice. Splitting gives eight identical length-16 chains. For either coordinate, the rank-normalized split sequences are identical and nonconstant, so $B=0$ and $W>0$. The pooled medians are $2.5$ for $v$ and $0$ for $x$; the folded deviations each have at least two distinct values, so their split sequences are also identical and nonconstant. [A1, given, F4, algebra]

2.1 With split length $N=16$ and $B=0$, the split formula gives $\widehat V^+=(15/16)W$ for the rank-normalized and folded draws of both coordinates. Each statistic is $\sqrt{15/16}$, so [F4] returns $\widehat R=\sqrt{15/16}<1$. These values do not reveal the common missed state. [A1, step 1.3, F4, algebra] ∎