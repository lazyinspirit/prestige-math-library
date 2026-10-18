---
id: ex-binary-symmetric-channel-capacity
kind: example
title: "Capacity of the binary symmetric channel"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 7
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
    - title: "MIT 6.441 Information Theory, Lecture 8, Channel Capacity and Binary Symmetric Channels"
      url: "https://web.mit.edu/6.441/spring05/lectures/6441Lecture8.pdf"
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, Chapter 19 §19.3"
      url: "https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf"
---

## Example

The binary symmetric channel has input and output alphabets $\{0,1\}$; independently at each use, the output is the input bit flipped with probability $p\in[0,1]$. Write
$$h(p):=-p\ln p-(1-p)\ln(1-p),\qquad 0\ln0:=0.$$
The channel capacity is $\ln2-h(p)$ nats per use, attained by a uniform input.

## Facts & Assumptions

**Given:** The binary symmetric channel with crossover probability $p\in[0,1]$.

[F1] [[def-discrete-memoryless-channel]]: the row $W(\cdot\mid x)$ assigns probability $1-p$ to $x$ and $p$ to $1-x$.

[F2] [[thm-discrete-memoryless-channel-capacity-formula]]: capacity is the maximum of finite mutual information over input laws.

[F3] [[thm-it-finite-entropy-chain-rule]]: $I(X;Y)=H(Y)-H(Y\mid X)$.

[F4] [[def-it-finite-conditional-entropy]] and [[def-qa-35-finite-probability-entropy-and-stochastic-matrices]]: conditional entropy is the finite weighted average of conditional pmf entropies, with $0\ln0=0$.

[F5] [[thm-it-finite-kl-nonnegative-equality]]: for a binary law $Q=\operatorname{Bern}(q)$, $D(Q\|\operatorname{Bern}(1/2))=\ln2-h(q)\ge0$, with equality exactly when $q=1/2$.

## Verification

**Given:** An input bit $X$ with $P(X=1)=r\in[0,1]$ and the specified channel.

1.1 The output law is Bernoulli with parameter $q=p+r(1-2p)$. Each row has entropy $h(p)$, so [F3] and [F4] give $I(X;Y)=h(q)-h(p)$. [F1, F3, F4, given, algebra]

2.1 By [F5], $0\le D(\operatorname{Bern}(q)\|\operatorname{Bern}(1/2))=\ln2-h(q)$, so $I(X;Y)\le\ln2-h(p)$. Taking $r=1/2$ gives $q=1/2$ and equality. Therefore [F2] gives capacity $\ln2-h(p)$. If $p=0$ or $p=1$, $h(p)=0$ and the channel is a deterministic bijection; if $p=1/2$, every row is the same and the capacity is zero. [F2, F5, step 1.1, algebra, cases] ∎
