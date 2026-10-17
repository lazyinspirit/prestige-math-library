---
id: ex-sir-zero-particle-prefix-positive-event
kind: example
title: A zero-particle prefix does not prove a zero event probability
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-nested-rare-event-levels
  - alg-fixed-level-sir-splitting
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: n/a
---

## Example

Take $\Omega=\{0,1\}$ with uniform law, a single level $A_1=\{0\}$, and $N=2$ SIR particles. The event probability is positive, but the branch on which both initial particles equal $1$ has positive probability and returns the zero estimate.

## Facts & Assumptions

**Given:** $P$ is uniform on $\{0,1\}$, $A_1=\{0\}$, and the full-resampling SIR splitting algorithm is used with $L=1,N=2$.

[F1] [[def-nested-rare-event-levels]]: A one-level target has probability $P(A_1)$.

[F2] [[alg-fixed-level-sir-splitting]]: If any incremental event-weight average is zero, the algorithm returns status zero-particle-prefix and estimate zero.

[F3] [[alg-fixed-level-sir-splitting]]: The initial potential is $G_0\equiv1$, multinomial resampling occurs before the identity transition $M_1$, and the first event potential is $G_1=\mathbf1_{A_1}$.

## Verification

**Proof technique:** direct.

1.1 $P(A_1)=1/2>0$. The two initial particles are IID from $P$, so the probability that both equal $1$ and therefore both have zero $A_1$-weight is $(1/2)^2=1/4$. [F1, given, algebra]

2.1 On this branch resampling and the identity transition can only copy particles equal to $1$, so the first average event weight is zero and [F2] returns estimate zero despite $P(A_1)>0$. To compute the mean directly, let $S$ be the number of initial particles equal to $0$. By [F3], the initial weights are both one, and, conditional on the initial particles, each resampled particle equals $0$ with probability $S/2$. The returned estimate is the average of the two corresponding indicators, so its conditional mean is $S/2$. Averaging this finite sum gives $\mathbb E\widehat p=\mathbb E S/2=1/2=P(A_1)$. Thus unbiasedness averages over all branches and does not imply that each realization is positive. [F2, F3, step 1.1, given, finite probability sums] ∎
