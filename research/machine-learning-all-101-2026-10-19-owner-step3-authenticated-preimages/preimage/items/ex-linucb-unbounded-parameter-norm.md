---
id: ex-linucb-unbounded-parameter-norm
kind: example
title: No common confidence radius without a parameter norm bound
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 5
verification:
  precheck: pass
deps: [def-linear-contextual-bandit-model,
       thm-self-normalized-linear-confidence-ellipsoid]
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
      locator: "§20.1, Theorem 20.5 parameter-norm bias term."
    - title: "Yasin Abbasi-Yadkori, Dávid Pál, and Csaba Szepesvári, Online Least Squares Estimation with Self-Normalized Processes: An Application to Bandit Problems"
      url: "https://arxiv.org/pdf/1102.2670"
      locator: "§5, regularized confidence bounds and parameter-norm term."
---

## Example

Fix $\delta=1/2$. For each $M>0$, take a one-round model with $d=1$, $\lambda=L=1$, $m_2=M$, $\theta^*=M$, one available feature $A_1=1$, and zero noise on a one-point probability space. Consider a proposed time-1 confidence radius obtained from the stated self-normalized formula by omitting its $\sqrt\lambda m_2$ term. Then no single such radius covers the family as $M$ ranges over all positive reals.

## Example references

[[def-linear-contextual-bandit-model]]: each model in the family has a finite parameter norm bound $m_2=M$.

[[thm-self-normalized-linear-confidence-ellipsoid]]: the raw radius includes the term $\sqrt\lambda m_2$.

[Tor Lattimore and Csaba Szepesvári, *Bandit Algorithms*, §20.1, Theorem 20.5](https://tor-lattimore.com/downloads/book/book.pdf)

[Abbasi-Yadkori, Pál, and Szepesvári, §5](https://arxiv.org/pdf/1102.2670)

## Facts & Assumptions

**Given:** The family of one-round models in the Example and the confidence-radius formula with its parameter-norm term omitted for comparison.

[F1] [[def-linear-contextual-bandit-model]]: $V_0=\lambda I_d$, $\widehat\theta_0=0$, and each member of the family has $\|\theta^*\|_2\le m_2$ with $m_2=M$.

[F2] [[thm-self-normalized-linear-confidence-ellipsoid]]: at time $1$ the confidence radius is $\sqrt\lambda m_2+\sqrt{2\log(1/\delta)+\log(\det(V_0)/\lambda^d)}$.

## Verification

1.1 For the proposed radius with $\sqrt\lambda m_2$ omitted, $\delta=1/2$, $\lambda=1$, $V_0=1$, and $\det(V_0)/\lambda^d=1$, the time-1 radius equals $r=\sqrt{2\log2}$. [given, F1, F2, algebra]

2.1 The time-1 estimate is $\widehat\theta_0=0$ and its information norm is $\|\theta^*-\widehat\theta_0\|_{V_0}=M$. Choosing $M>r$ puts the true parameter outside the proposed interval. Since $M$ is arbitrary across the family, a radius omitting a uniform parameter-norm bound cannot cover the family. [given, F1, step 1.1, algebra] ∎
