---
id: ex-it-meta-converse-binary-channel
kind: example
title: Exact beta value for a one-use BSC meta-converse test
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 7
deps: [thm-it-one-shot-meta-converse, def-finite-hypothesis-testing-beta, def-discrete-memoryless-channel]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: No choice axiom is used; the testing alphabet has four outcomes.
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_obligations:
  - Enumerate true and auxiliary probabilities on all four message-output pairs.
  - Verify the beta orientation and prove the finite linear program's optimum, including randomized tests.
sources:
  references:
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, Chapter 22 §22.3"
      url: https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf
      locator: Chapter 22, §22.3; meta-converse beta function.
    - title: Yury Polyanskiy, H. Vincent Poor, and Sergio Verdú, Channel Coding Rate in the Finite Blocklength Regime
      url: https://people.lids.mit.edu/yp/homepage/data/finite_block.pdf
      locator: "Theorem 27, PDF p. 28; finite-blocklength hypothesis-testing converse."
---

## Example

For the one-use BSC$(p)$ with $0<p<1/2$, the identity encoder/decoder with two equiprobable messages has average error $p$. With its true joint law $P_{MY}$ and the uniform-message/uniform-output auxiliary law $\widetilde Q_{MY}$, the oriented testing value is exactly $\beta_p(P_{MY},\widetilde Q_{MY})=1/2=1/M$.

## Facts & Assumptions

**Given:** Messages $m\in\{0,1\}$ are uniform, the input is $x=m$, the decoder outputs $y$, and the BSC crossover probability is $0<p<1/2$.

[F1] [[def-finite-hypothesis-testing-beta]]: $\beta_\epsilon(P,Q)$ minimizes $\mathbb E_Q(1-\phi)$ over tests $\phi\in[0,1]$ with $\mathbb E_P\phi\le\epsilon$.

[F2] [[thm-it-one-shot-meta-converse]]: every $M$-message code with average error $\epsilon$ satisfies $\beta_\epsilon(P_{MY},\widetilde Q_{MY})\le1/M$ for any auxiliary output law.

[F3] [[def-discrete-memoryless-channel]]: the BSC has transition probability $1-p$ on $y=x$ and $p$ on $y\ne x$.

## Verification


1.1 The four true joint masses are $(1-p)/2$ on $(0,0),(1,1)$ and $p/2$ on $(0,1),(1,0)$. The auxiliary law assigns $1/4$ to each pair. The identity decoder is wrong with total true mass $p$, so its average error is $p$. [F3, given]

2.1 Write $\psi=1-\phi$ for the acceptance probability. The constraint in [F1] is $\mathbb E_P\psi\ge1-p$, and the objective is $\mathbb E_{\widetilde Q}\psi$. Let $s$ be the sum of $\psi$ on the two correct pairs and $t$ its sum on the two crossover pairs. Then $0\le s,t\le2$, the constraint is $(1-p)s/2+pt/2\ge1-p$, and the objective is $(s+t)/4$. [F1, step 1.1, algebra]

3.1 If $s\ge2$, the objective is at least $1/2$. If $s<2$, the constraint forces $t\ge(1-p)(2-s)/p$, so $s+t\ge s+\frac{1-p}{p}(2-s)\ge2,$ where the last inequality follows from $(1-p)/p>1$ and $s<2$. Thus every randomized feasible test has objective at least $1/2$. Taking $\psi=1$ on the two correct pairs and $0$ on the crossover pairs attains constraint equality and objective $1/2$. Hence $\beta_p=1/2=1/M$, as also bounded by [F2]. [F1, F2, step 2.1, cases, algebra] ∎
