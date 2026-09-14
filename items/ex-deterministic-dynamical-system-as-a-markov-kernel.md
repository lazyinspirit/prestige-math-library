---
id: ex-deterministic-dynamical-system-as-a-markov-kernel
kind: example
title: "A deterministic dynamical system as a Markov kernel"
status: draft
origin: pipeline
deps: [def-axiom-of-choice, def-time-homogeneous-markov-chain-with-transition-kernel, def-measure-kernel-and-probability-kernel]
proof_strategy: direct
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
      locator: "Deterministic transition functions under the Markov definition, printed pp. 268-270"
---

## Statement

Assume Choice. If $T:(E,\mathcal E)\to(E,\mathcal E)$ is measurable, then
$$K(x,A)=1_A(Tx)$$
is a probability kernel. Every adapted process satisfying
$X_{n+1}=T(X_n)$ almost surely is a $K$-chain.

## Facts & Assumptions

**Given:** Choice, the measurable map $T$, and the stated adapted process.

[F1] A probability kernel has probability-measure sections and measurable evaluations. ([[def-measure-kernel-and-probability-kernel]])

[F2] The Markov condition is $\mathbb P(X_{n+1}\in A\mid\mathcal F_n)=K(X_n,A)$. ([[def-time-homogeneous-markov-chain-with-transition-kernel]])

## Verification

1.1 For fixed $x$, $K(x,\cdot)=\delta_{Tx}$ is a probability measure. For fixed [F1] $A$, $K(x,A)=1_{T^{-1}A}(x)$ is measurable. Thus [F1] holds, including empty and full $A$ and a one-point state space. [F1]

2.1 For $A\in\mathcal E$, [F2, step 1.1] $$ 1_{\{X_{n+1}\in A\}}=1_A(TX_n)=K(X_n,A)\quad\text{a.s.} $$ The last variable is $\mathcal F_n$-measurable, so it is its own conditional expectation given $\mathcal F_n$. By [F2], $X$ is a $K$-chain. This also covers $n=0$, constant maps, fixed points, and deterministic cycles. Choice is used only for the conditional-expectation class in [F2]; the kernel construction is choice-free. [F2, step 1.1] ∎

