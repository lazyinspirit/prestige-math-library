---
id: ex-binary-identity-channel-with-cost-and-feedback
kind: example
title: Cost-constrained capacity of a binary identity channel with feedback
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 11
deps: [def-cost-constrained-dmc-code-and-capacity, def-finite-dmc-cost-model, def-natural-logarithm, def-qa-35-finite-probability-entropy-and-stochastic-matrices, lem-finite-simplex-entropy-continuity-and-concavity, thm-cost-constrained-dmc-capacity-formula, thm-feedback-does-not-increase-cost-constrained-dmc-capacity, thm-it-finite-entropy-chain-rule]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: No choice axiom is used; the example is a finite binary calculation.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, Chapter 20 §20.1"
      url: https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf
    - title: "Yury Polyanskiy, MIT 6.441 Information Theory, Chapter 21 §21.1"
      url: https://ocw.mit.edu/courses/6-441-information-theory-spring-2016/a5ff16d929efde1d8313e12e372aa94b_MIT6_441S16_chapter_21.pdf
---

## Example

Let $\mathcal X=\mathcal Y=\{0,1\}$, let $W(y\mid x)=\mathbf1_{\{y=x\}}$, and let $c(0)=0,c(1)=1$. For every budget $\Gamma\ge0$, both ordinary and feedback capacities are
$$C(\Gamma)=C_{\rm fb}(\Gamma)=h_2(\min\{\Gamma,1/2\}),$$
where $h_2(p)=-p\ln p-(1-p)\ln(1-p)$ and $0\ln0=0$. In particular the values at $\Gamma=0,1/2,1$ are $0,\ln2,\ln2$.

## Facts & Assumptions

**Given:** The binary identity transition law, letter costs $0,1$, and a nonnegative budget $\Gamma$.

[F1] [[def-finite-dmc-cost-model]]: an input law with $p=P_X(1)$ has expected cost $p$.

[F2] [[thm-it-finite-entropy-chain-rule]]: for the identity channel, $I(X;Y)=H(X)-H(X\mid Y)=H(X)$.

[F3] [[lem-finite-simplex-entropy-continuity-and-concavity]]: binary entropy is continuous, concave, and symmetric under $p\mapsto1-p$ by its formula.

[F4] [[def-cost-constrained-dmc-code-and-capacity]], [[thm-cost-constrained-dmc-capacity-formula]], and [[thm-feedback-does-not-increase-cost-constrained-dmc-capacity]]: ordinary and feedback capacities use the stated average-cost conventions and equal the maximum feasible mutual information: ordinary and feedback capacities equal the maximum feasible mutual information.

[F5] [[def-natural-logarithm]] and [[def-qa-35-finite-probability-entropy-and-stochastic-matrices]]: entropy is in natural-log nats, with $0\ln0=0$.

## Verification

1.1 An input law is feasible exactly when $0\le p\le\min\{\Gamma,1\}$, and [F2] makes its mutual information $h_2(p)$. If $0\le p\le q\le1/2$ and $p<1/2$, put $\theta=(1-p-q)/(1-2p)\in[1/2,1]$. Then $q=\theta p+(1-\theta)(1-p)$; concavity and symmetry in [F3] imply $h_2(q)\ge\theta h_2(p)+(1-\theta)h_2(1-p)=h_2(p)$. Thus $h_2$ is nondecreasing on $[0,1/2]$. [F1, F2, F3, F5, given, algebra]

2.1 For any $p\in[0,1]$, concavity and symmetry give $h_2(1/2)\ge\frac12h_2(p)+\frac12h_2(1-p)=h_2(p)$. Therefore the maximum over the feasible interval occurs at $p=\min\{\Gamma,1/2\}$ and equals the displayed formula. Substitution yields $C(0)=0$, $C(1/2)=\ln2$, and $C(1)=\ln2$. [F1, F3, F5, step 1.1, given, algebra]

3.1 The feedback theorem in [F4] makes the feedback capacity equal to the same ordinary constrained capacity. This identifies the values for all three requested budgets. [F4, step 2.1, given] ∎