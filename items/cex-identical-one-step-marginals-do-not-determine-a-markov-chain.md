---
id: cex-identical-one-step-marginals-do-not-determine-a-markov-chain
kind: counterexample
title: "Identical one-time marginals do not determine a Markov chain"
status: draft
origin: pipeline
deps: [def-axiom-of-choice, thm-markov-chain-law-is-determined-by-initial-law-and-kernel, ex-iid-sequences-as-markov-chains-with-state-independent-kernel, ex-deterministic-dynamical-system-as-a-markov-kernel]
proof_strategy: counterexample
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, Section 5.1"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
      locator: "Finite-dimensional Markov law formula, printed pp. 268-269"
---

## Statement

Assume Choice. On $S=\{0,1\}$, a stationary IID fair-bit chain and a constant
fair-bit chain have the same one-time marginal at every time, but have different
transition kernels and different two-time laws.

## Facts & Assumptions

**Given:** The two fair-bit constructions specified below.

[F1] An IID sequence with common law $\nu$ has the constant-row kernel $K(x,A)=\nu(A)$. ([[ex-iid-sequences-as-markov-chains-with-state-independent-kernel]])

[F2] The identity map gives the deterministic kernel $J(x,A)=1_A(x)$. ([[ex-deterministic-dynamical-system-as-a-markov-kernel]])

## Counterexample

1.1 Let $(X_n)$ be IID with [F1] $\mathbb P(X_n=0)=\mathbb P(X_n=1)=1/2$. By [F1], it is Markov with $$K(x,\{0\})=K(x,\{1\})=\tfrac12$$ for both $x$. Independence gives $$ \mathbb P(X_0=X_1)=\mathbb P(0,0)+\mathbb P(1,1) =\tfrac14+\tfrac14=\tfrac12. $$ [F1]

1.2 Let $B$ be one fair bit and put $Y_n=B$ for every $n$. Then each $Y_n$ is [F2] again fair, while [F2] makes $Y$ Markov with identity kernel $J$. Here $$\mathbb P(Y_0=Y_1)=1.$$ Moreover $J(0,\{0\})=1\ne1/2=K(0,\{0\})$, so the kernels differ. [F2]

2.1 Thus $\mathcal L(X_n)=\mathcal L(Y_n)$ for every $n$, including $n=0$, [step 1.1, step 1.2] but their displayed two-time event probabilities are $1/2$ and $1$. This is a concrete failed conclusion: one-time marginals do not determine even a two-time law, much less the kernel or path law. The state space is nonempty and finite; probabilities zero and one appear explicitly. Choice is inherited only from the Markov-chain interfaces used in [F1]--[F2]. [step 1.1, step 1.2] ∎
