---
id: thm-feedback-does-not-increase-cost-constrained-dmc-capacity
kind: theorem
title: Causal feedback does not increase finite DMC capacity under average cost
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 10
deps: [def-cost-constrained-dmc-code-and-capacity, def-finite-dmc-cost-model, def-finite-dmc-feedback-code, lem-cost-constrained-dmc-information-capacity-properties, lem-jensen-for-integrable-cost-random-variable, thm-cost-constrained-dmc-capacity-formula, thm-it-fano-inequality, thm-it-finite-entropy-chain-rule, thm-it-finite-markov-data-processing]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: No choice axiom is used; the posterior histories and conditional laws are finite.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, Chapter 23 §23.1"
      url: https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf
    - title: "Yury Polyanskiy, MIT 6.441 Information Theory, Chapter 21 §21.1"
      url: https://ocw.mit.edu/courses/6-441-information-theory-spring-2016/a5ff16d929efde1d8313e12e372aa94b_MIT6_441S16_chapter_21.pdf
---

## Statement

For every finite DMC and finite nonnegative letter cost with feasible budget $\Gamma$, the feedback operational capacity $C_{\rm fb}(\Gamma)$ defined in [[def-finite-dmc-feedback-code]] equals the ordinary average-error capacity $C(\Gamma)$ in [[def-cost-constrained-dmc-code-and-capacity]]. Thus $C_{\rm fb}(\Gamma)=C_I(\Gamma)$.

## Facts & Assumptions

**Given:** A finite DMC, its finite letter cost, a feasible budget, and a causal deterministic feedback code with message count $M$ and uniform random message $U\in[M]$.

[A1] [[def-finite-dmc-feedback-code]]: at each time $t$, $X_t=f_t(U,Y^{t-1})$ and the conditional output row is $W(\cdot\mid X_t)$; the cost is expected average letter cost.

[F1] [[thm-it-finite-entropy-chain-rule]]: mutual information expands as $I(U;Y^n)=\sum_t I(U;Y_t\mid Y^{t-1})$.

[F2] [[thm-it-finite-markov-data-processing]]: conditionally on a history $h$, the finite Markov relation $U\to X_t\to Y_t$ implies $I(U;Y_t\mid Y^{t-1}=h)\le I(X_t;Y_t\mid Y^{t-1}=h)$.

[F3] [[def-finite-dmc-cost-model]] and [[lem-cost-constrained-dmc-information-capacity-properties]]: $C_I(u)$ is nondecreasing and concave for $u\ge c_{\min}$ and satisfies $0\le C_I(u)\le\ln|\mathcal X|$.

[F4] [[lem-jensen-for-integrable-cost-random-variable]]: for an integrable random cost $V\ge c_{\min}$ and finite concave $f$, $\mathbb E f(V)\le f(\mathbb E V)$.

[F5] [[thm-it-fano-inequality]]: for $M\ge2$, the decoder $\widehat U=g(Y^n)$ with error $e=\Pr[\widehat U\ne U]$ satisfies $H(U\mid\widehat U)\le h_2(e)+e\ln(M-1)$.

[F6] [[thm-cost-constrained-dmc-capacity-formula]]: the ordinary capacity equals $C_I(\Gamma)$.

## Proof

1.1 For each time $t$ and each positive-probability history $h=y^{t-1}$, the causal encoder and memoryless channel give the finite Markov chain $U\to X_t\to Y_t$. By chain rule [F1] and data processing [F2], $I(U;Y^n)\le\sum_{t=1}^n\mathbb E_{Y^{t-1}}C_I(\mathbb E[c(X_t)\mid Y^{t-1}])$, applying the definition of $C_I$ to each conditional input law, whose cost is at least $c_{\min}$. [A1, F1, F2, F3, given, algebra]

2.1 Give a uniform random index $T\in[n]$ independent of the code and set $V=\mathbb E[c(X_T)\mid T,Y^{T-1}]$. Then $V\ge c_{\min}$, $\mathbb E V=n^{-1}\sum_t\mathbb E c(X_t)\le\Gamma$, and $C_I(V)$ is integrable by [F3]. Applying [F4] and monotonicity in [F3] to step 1.1 yields $I(U;Y^n)\le n\mathbb E C_I(V)\le nC_I(\mathbb E V)\le nC_I(\Gamma)$. [F3, F4, step 1.1, given, algebra]

3.1 If $M=1$, the rate is zero. If $M\ge2$, the relaxed Fano bound [F5] and the deterministic decoder imply $(1-e)\ln M\le I(U;Y^n)+\ln2\le nC_I(\Gamma)+\ln2$. Thus reliable feedback rates are at most $C_I(\Gamma)=C(\Gamma)$ by [F6]. Every ordinary feasible code is a feedback code whose encoders ignore past outputs, so $C_{\rm fb}(\Gamma)\ge C(\Gamma)$; the reverse inequality follows from the converse. [F5, F6, step 2.1, given, algebra, cases] ∎