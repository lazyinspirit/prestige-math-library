---
id: ex-mixed-sign-vorticity-needs-signed-distance
kind: example
title: A mixed-sign vorticity is not a probability for W1
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-signed-measure
  - def-total-variation-of-a-signed-or-complex-measure
  - def-bounded-lipschitz-dual-norm-for-signed-measures
  - def-p-one-wasserstein-one
  - thm-cauchy-schwarz-and-the-euclidean-norm
proof_strategy: direct
axiom_use: No choice principle is used.
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pending
---

## Example

On $\mathbb R^2$, let $\omega=\delta_0-\delta_{(1,0)}$. It is a nonzero finite signed measure of total mass zero and total variation two. The probability $W_1$ in [[def-p-one-wasserstein-one]] cannot be applied to $\omega$.

## Facts & Assumptions

**Given:** The signed measure $\omega$ of the Example.

[F1] $W_1$ is defined only for probability measures with finite first moment ([[def-p-one-wasserstein-one]]).

[F2] $d_{BL}$ is the dual supremum over functions bounded by one with Lipschitz constant at most one ([[def-bounded-lipschitz-dual-norm-for-signed-measures]]).

[F3] Total variation is the supremum over measurable partition sums ([[def-total-variation-of-a-signed-or-complex-measure]]).

[F4] The reverse triangle inequality gives $||x|-|y||\le|x-y|$ for the Euclidean norm ([[thm-cauchy-schwarz-and-the-euclidean-norm]]).

## Verification

**Given:** $\omega=\delta_0-\delta_{(1,0)}$.

1.1 Among any countable partition, at most two cells have nonzero signed mass, each of magnitude one; the partition into the two singleton atoms and their complement attains the sum two. Thus $|\omega|(\mathbb R^2)=2$ by [F3], while its signed mass is $1-1=0$. Therefore $\omega$ is neither a nonnegative probability measure nor normalizable by its net mass, so the domain condition in [F1] fails. [given, F1, F3, algebra]

2.1 The function $\phi(x)=\min(1,|x|)$ is bounded by one and 1-Lipschitz by [F4], with $\phi(0)=0$ and $\phi(1,0)=1$. Hence $|\int\phi d\omega|=1$, so $d_{BL}(\omega,0)\ge1$. This finite signed dual quantity remains meaningful by [F2], whereas probability $W_1(\omega,0)$ is undefined. [F2, F4, step 1.1, algebra] ∎
