---
id: ex-it-degraded-wiretap-capacity
kind: example
title: "A degraded binary erasure wiretap channel"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 10
deps: [def-it-degraded-wiretap-channel, thm-it-degraded-wiretap-secrecy-capacity, def-it-finite-mutual-information, thm-it-finite-entropy-chain-rule, thm-it-finite-kl-nonnegative-equality, def-qa-35-finite-probability-entropy-and-stochastic-matrices]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "No choice axiom is used; the channel and input simplex are finite."
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "Abbas El Gamal and Young-Han Kim, Network Information Theory, arXiv:1001.3404v3"
      url: https://arxiv.org/pdf/1001.3404v3
      locator: "The Wiretap Channel, printed pp. 23-9–23-10: degraded-channel capacity formula; the binary-erasure specialization is derived locally."
    - title: "Paul Cuff, Princeton ELE 538: Information Theoretic Security, Lecture 11"
      url: https://www.princeton.edu/~cuff/ele538/files/lecture_11.pdf
      locator: "PDF p. 4: degraded wiretap secrecy-capacity formula (weak secrecy); the binary-erasure calculation is derived locally."
---

## Statement

Bob observes a binary erasure channel (BEC) with input alphabet $\{0,1\}$, output alphabet $\{0,1,e\}$, and erasure probability $1/4$. Eve observes Bob's output after independently erasing each surviving bit with probability $1/3$, while an erasure remains an erasure. This is a finite degraded wiretap channel. Its strong- and weak-secrecy capacities under average or maximal error are all $\ln2/4$ nats per use. Define $h(p):=-p\ln p-(1-p)\ln(1-p)$ with $0\ln0:=0$. For Bernoulli-$p$ input the single-letter difference is $h(p)/4$, which is zero at $p=0,1$ and maximal at $p=1/2$.

## Facts & Assumptions

**Given:** Bob's channel is BEC$(1/4)$ and Eve's output is obtained by an independent BEC$(1/3)$ erasure of Bob's non-erased symbols.

[F1] [[def-it-degraded-wiretap-channel]]: a degraded wiretap channel has factorization $W(y,z\mid x)=W_Y(y\mid x)V(z\mid y)$.

[F2] [[thm-it-degraded-wiretap-secrecy-capacity]]: all four operational secrecy capacities equal $\max_{P_X}[I(X;Y)-I(X;Z)]$.

[F3] [[def-it-finite-mutual-information]]: mutual information is finite joint-law KL in nats.

[F4] [[thm-it-finite-entropy-chain-rule]]: finite mutual information satisfies $I(X;Y)=H(X)-H(X\mid Y)$ and the entropy chain rule.

[F5] [[thm-it-finite-kl-nonnegative-equality]]: finite KL divergence is nonnegative and vanishes exactly for equal laws.

[F6] [[def-qa-35-finite-probability-entropy-and-stochastic-matrices]]: $h(p)=-p\ln p-(1-p)\ln(1-p)$ with zero terms omitted, and the uniform binary entropy is $\ln2$.

## Proof

1.1 Define $V(e\mid e)=1$, $V(y\mid y)=2/3$, and $V(e\mid y)=1/3$ for $y\in\{0,1\}$, with all other entries zero. Each row sums to one. Given input $x$, the joint probabilities are $W_Y(e\mid x)V(e\mid e)=1/4$ for $(Y,Z)=(e,e)$, $W_Y(x\mid x)V(x\mid x)=(3/4)(2/3)=1/2$ for $(x,x)$, and $W_Y(x\mid x)V(e\mid x)=(3/4)(1/3)=1/4$ for $(x,e)$; all other pairs have probability zero. Thus $W(y,z\mid x)=W_Y(y\mid x)V(z\mid y)$ and [F1] applies. [F1, given, construct, algebra]

2.1 For a Bernoulli-$p$ input, a BEC with erasure probability $\epsilon$ has $H(X\mid Y)=\epsilon h(p)$: on a received bit the conditional entropy is zero, and on erasure it is $H(X)=h(p)$. Since $I(X;Y)=H(X)-H(X\mid Y)$ by [F4], Bob's mutual information is $(3/4)h(p)$ and Eve's is $(1/2)h(p)$. Their difference is $h(p)/4$. [F3, F4, F6, step 1.1, algebra]

3.1 For every $p\in[0,1]$, compare the Bernoulli-$p$ law with the uniform binary law. By [F5], $0\le D\bigl((p,1-p)\|(1/2,1/2)\bigr)=\ln2-h(p),$ with equality exactly when $p=1/2$. At $p=0$ and $p=1$, the zero-term convention in [F6] gives $h(p)=0$. Thus $h(p)/4$ has maximum $\ln2/4$ at the fair input and vanishes at both deterministic endpoints. The capacity claim follows from [F2] and step 2.1. [F2, F5, F6, step 2.1, algebra] ∎
