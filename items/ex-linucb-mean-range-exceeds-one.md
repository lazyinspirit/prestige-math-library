---
id: ex-linucb-mean-range-exceeds-one
kind: example
title: An action set whose linear-mean range exceeds one
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 6
verification:
  precheck: pass
deps: [def-linear-contextual-bandit-model,
       thm-linucb-regret]
justified_by: []
aliases: []
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Tor Lattimore and Csaba Szepesvári, Bandit Algorithms"
      url: "https://tor-lattimore.com/downloads/book/book.pdf"
      locator: "§19.3, Theorem 19.2 mean-range hypothesis."
    - title: "Yasin Abbasi-Yadkori, Dávid Pál, and Csaba Szepesvári, Online Least Squares Estimation with Self-Normalized Processes: An Application to Bandit Problems"
      url: "https://arxiv.org/pdf/1102.2670"
      locator: "Theorem 13, reward-range normalization."
---

## Example

Consider one round with dimension $d=1$, regularization $\lambda=1$, feature bound $L=2$, parameter bound $m_2=1$, and deterministic parameter $\theta^*=1$. Let the context be constant and let the two available actions have scalar features $0$ and $2$. Use zero reward noise. Both candidate features satisfy the model's bound, but their true means are $0$ and $2$, so the linear-mean range is $2$.

## Example references

[[def-linear-contextual-bandit-model]]: all candidate features must have norm at most $L$ and the conditional noise MGF must be bounded by $e^{q^2/2}$.

[[thm-linucb-regret]]: the regret guarantee additionally assumes the true-mean range within each available action set is at most $1$.

[Tor Lattimore and Csaba Szepesvári, *Bandit Algorithms*, §19.3, Theorem 19.2](https://tor-lattimore.com/downloads/book/book.pdf)

[Abbasi-Yadkori, Pál, and Szepesvári, Theorem 13](https://arxiv.org/pdf/1102.2670)

## Facts & Assumptions

**Given:** The one-round finite-dimensional linear contextual bandit instance in the Example.

[F1] [[def-linear-contextual-bandit-model]]: each candidate feature has Euclidean norm at most $L$, rewards are $\langle\theta^*,A_t\rangle+\eta_t$, and the conditional noise MGF bound is $e^{q^2/2}$.

[F2] [[thm-linucb-regret]]: its stated guarantee requires $\sup_{a,b\in\mathcal A_t}\langle\theta^*,a-b\rangle\le1$.

## Verification

1.1 The candidate features are $0$ and $2$, so both have absolute value at most $L=2$. The parameter satisfies $|\theta^*|=1=m_2$, and zero noise has conditional MGF $\mathbb E[e^{q\eta_1}\mid\mathcal F_1]=1\le e^{q^2/2}$ for every real $q$. Thus the instance satisfies the model hypotheses. [given, F1, algebra]

2.1 The true means are $\theta^*\cdot0=0$ and $\theta^*\cdot2=2$. Consequently $\sup_{a,b\in\{0,2\}}\theta^*(a-b)=2>1$, so the additional range premise of [F2] fails. This example therefore lies outside that theorem's stated guarantee and does not refute its conclusion under its hypotheses. [given, F1, F2, step 1.1, algebra] ∎
