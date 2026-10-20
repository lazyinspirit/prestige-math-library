---
id: ex-finite-chain-model-error-accumulates-with-zero-mesh-error
kind: example
title: Finite model error accumulates in a fixed chain
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-total-variation-distance-for-probability-laws
  - thm-finite-chain-reverse-kernel-error-telescope
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "David A. Levin and Yuval Peres, Markov Chains and Mixing Times, second edition"
      url: https://pages.uoregon.edu/dlevin/MARKOV/markovmixing.pdf
      locator: "Chapter 4, §4.1, finite-state total-variation convention"
---

## Example

Let $S=\{0,1\}$, let $N=2$, and start the true and learned chains at $\delta_0$. At both steps the true kernel is the identity. For a fixed $0<\varepsilon<1$, the learned kernel sends $0$ to $1$ with probability $\varepsilon$ and leaves $0$ at $0$ otherwise, while it leaves $1$ at $1$. Each step's largest row total-variation error is $\varepsilon$, but after two learned steps the endpoint law assigns mass $2\varepsilon-\varepsilon^2$ to $1$, whereas the true endpoint law is $\delta_0$. The comparison is with the fixed two-step identity-kernel chain itself, so it has no discretization-error term, while the learned-kernel error is positive.

## Example references

[[thm-finite-chain-reverse-kernel-error-telescope]]: the endpoint bound sums the two uniform row errors and clamps the result at one.

[[def-total-variation-distance-for-probability-laws]]: total variation uses the event-supremum convention.

## Facts & Assumptions

**Given:** $S=\{0,1\}$, the initial point mass $\delta_0$, two identity true kernels, and the two learned kernels in the Example. Verify each row error and the endpoint law.

[F1] [[def-total-variation-distance-for-probability-laws]]: total variation is the supremum of absolute probability differences over events.

[F2] [[thm-finite-chain-reverse-kernel-error-telescope]]: the endpoint total variation is at most the initial error plus the sum of uniform row errors, clamped at one.

## Verification

1.1 At state $0$, the true row is $\delta_0$ and the learned row is $(1-\varepsilon,\varepsilon)$, so their event difference on $\{1\}$ is $\varepsilon$; at state $1$ the rows agree. Since these are the only two states, [F1] gives uniform row error exactly $\varepsilon$ at each step. [given, F1, algebra]

2.1 After one learned step the law is $(1-\varepsilon,\varepsilon)$. Since $1$ is absorbing and $0$ returns to $0$ with probability $1-\varepsilon$, after two steps its mass at $0$ is $(1-\varepsilon)^2$ and its mass at $1$ is $1-(1-\varepsilon)^2=2\varepsilon-\varepsilon^2$. The true identity chain remains $\delta_0$, so [F1] gives endpoint TV $2\varepsilon-\varepsilon^2>0$. [given, F1, step 1.1, algebra]

3.1 For $\varepsilon=1/4$, the endpoint error is $7/16$, while [F2] gives the valid bound $2\varepsilon=1/2$. The example has no time-discretization term because the reference is the fixed two-step chain itself. [F2, step 2.1, algebra] ∎
