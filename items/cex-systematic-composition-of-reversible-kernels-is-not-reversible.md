---
id: cex-systematic-composition-of-reversible-kernels-is-not-reversible
kind: counterexample
title: A systematic composition of reversible kernels need not be reversible
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - def-probability-measure
  - def-measure-kernel-and-probability-kernel
  - def-composition-of-probability-kernels
  - lem-kernel-composition-is-well-defined-and-associative
  - def-general-state-reversibility-by-symmetric-flow-measure
  - def-invariant-and-stationary-distribution-for-a-markov-kernel
  - thm-general-state-reversibility-implies-invariance
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
---

## Statement refuted

The chronological composition of two probability kernels that are each
reversible with respect to the same invariant probability must itself be
reversible with respect to that probability.

## Facts & Assumptions

**Given:** $\mathsf X=\{0,1,2\}$ with its full sigma-algebra,
$\pi(i)=1/3$, the transposition $\sigma_1$ swapping $0$ and $1$, and the
transposition $\sigma_2$ swapping $1$ and $2$; each transposition fixes the
remaining state.

[A1] $\mathsf X$, $\pi$, $\sigma_1$, and $\sigma_2$ are as specified above.

[F1] Reversibility means that the joint flow measure is symmetric under
coordinate swap. ([[def-general-state-reversibility-by-symmetric-flow-measure]])

[F2] Reversibility of a probability kernel with respect to a probability
implies invariance of that probability. ([[thm-general-state-reversibility-implies-invariance]])

[F3] Kernel composition is in chronological order: $K_1K_2$ first applies
$K_1$ and then $K_2$. ([[def-composition-of-probability-kernels]])

[F4] The composition of two probability kernels is again a probability
kernel. ([[lem-kernel-composition-is-well-defined-and-associative]])

[F5] Invariance means $\pi K(A)=\int K(x,A)\,\pi(dx)=\pi(A)$ for each
measurable $A$. ([[def-invariant-and-stationary-distribution-for-a-markov-kernel]])

[F6] A probability measure has total mass one. ([[def-probability-measure]])

[F7] A probability kernel has probability-measure rows and measurable event
evaluations. ([[def-measure-kernel-and-probability-kernel]])

## Counterexample

**Given:** The data in [A1]. Define $K_j(i,A)=\mathbf1_A(\sigma_j(i))$ for
$j=1,2$ and $i\in\mathsf X$.

**Proof technique:** Check the symmetric flow of each involution, compute the
chronological composition, and compare one off-diagonal flow atom with its
transpose.

1.1 The uniform values sum to one, so [F6] makes $\pi$ a probability; for every set $A$, $K_j(i,A)=1$ exactly when $\sigma_j(i)\in A$ and is otherwise zero, so each row is a probability measure and its evaluations are measurable on the finite space by [F7]. The flow has mass $1/3$ at $(i,\sigma_j(i))$; since $\sigma_j^2$ is the identity, its support and masses are symmetric, so both kernels are reversible by [F1]. [A1, F1, F6, F7, given]

1.2 Chronological composition [F3] gives $Q=K_1K_2$ with updates $0\mapsto2$, $1\mapsto0$, and $2\mapsto1$; [F4] makes it a probability kernel. Each state has exactly one predecessor, so $\pi Q(\{j\})=1/3=\pi(j)$ for every j and [F5] gives $\pi Q=\pi$. [A1, F3, F4, F5, given]

2.1 By [F2] and step 1.1, each component kernel preserves the same uniform probability $\pi$. [F2, step 1.1]

3.1 The composite flow has $\Lambda_{\pi,Q}(\{0\}\times\{2\})=1/3$ but $\Lambda_{\pi,Q}(\{2\}\times\{0\})=0$, so it is not symmetric by [F1]. Thus the composition is invariant but not reversible, although both updates are reversible and invariant by steps 1.1 and 2.1. [A1, F1, step 1.1, step 1.2, step 2.1, given, algebra] ∎
