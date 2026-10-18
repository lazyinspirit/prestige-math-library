---
id: ex-binary-erasure-channel-capacity
kind: example
title: "Capacity of the binary erasure channel"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 9
deps: [def-discrete-memoryless-channel, def-discrete-memoryless-channel-information-capacity, thm-discrete-memoryless-channel-capacity-formula, def-it-finite-mutual-information, def-it-finite-conditional-entropy, def-qa-35-finite-probability-entropy-and-stochastic-matrices, def-natural-logarithm, thm-it-finite-entropy-chain-rule, thm-it-finite-kl-nonnegative-equality, def-finite-probability-vector, def-finite-stochastic-kernel]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "No choice axiom is used; all alphabets and sums are finite."
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "MIT 6.441 Information Theory, Lecture 8, Binary Erasure Channel"
      url: "https://web.mit.edu/6.441/spring05/lectures/6441Lecture8.pdf"
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, Chapter 19 §19.3"
      url: "https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf"
---

## Example

The binary erasure channel outputs the input bit with probability $1-\epsilon$ and the erasure symbol $e$ with probability $\epsilon$, independently at each use. For $\epsilon\in[0,1]$, its capacity is $(1-\epsilon)\ln2$ nats per use, attained by a uniform input.

## Facts & Assumptions

**Given:** A binary erasure channel with erasure probability $\epsilon\in[0,1]$ and input law $P(X=1)=r$.

[F1] [[def-discrete-memoryless-channel]]: conditional on $X=x$, the output is $x$ with probability $1-\epsilon$ and $e$ with probability $\epsilon$.

[F2] [[thm-discrete-memoryless-channel-capacity-formula]]: capacity is the maximum of finite mutual information over input laws.

[F3] [[thm-it-finite-entropy-chain-rule]]: $I(X;Y)=H(X)-H(X\mid Y)$.

[F4] [[def-it-finite-conditional-entropy]] and [[def-qa-35-finite-probability-entropy-and-stochastic-matrices]]: conditional entropy averages the entropy of each positive-mass conditional law; zero coordinates contribute $0\ln0=0$.

[F5] [[thm-it-finite-kl-nonnegative-equality]]: for a binary law $\operatorname{Bern}(r)$, $D(\operatorname{Bern}(r)\|\operatorname{Bern}(1/2))=\ln2-h(r)\ge0$, with equality at $r=1/2$.

## Verification

**Given:** $X\sim\operatorname{Bern}(r)$ and the independent erasure mechanism.

1.1 On the events $Y=0$ and $Y=1$, $X$ is known exactly. The erasure indicator is independent of $X$ because [F1] gives the same conditional erasure probability $\epsilon$ for both input symbols. Hence on $Y=e$ the conditional law of $X$ remains $\operatorname{Bern}(r)$. By [F4], $H(X\mid Y)=\epsilon h(r)$, and [F3] gives $I(X;Y)=(1-\epsilon)h(r)$. [F1, F3, F4, given, cases]

2.1 By [F5], $h(r)\le\ln2$, with equality at $r=1/2$. Therefore the maximum mutual information is $(1-\epsilon)\ln2$ by [F2]. At $\epsilon=0$ the channel is noiseless and has capacity $\ln2$; at $\epsilon=1$ its output is constant and the capacity is $0$. [F2, F5, step 1.1, algebra, cases] ∎
