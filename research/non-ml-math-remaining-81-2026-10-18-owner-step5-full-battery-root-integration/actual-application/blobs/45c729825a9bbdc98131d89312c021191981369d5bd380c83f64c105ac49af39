---
id: thm-cost-constrained-dmc-capacity-formula
kind: theorem
title: Average-cost capacity formula for a finite DMC
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 9
deps: [def-cost-constrained-dmc-code-and-capacity, def-discrete-memoryless-channel, def-finite-dmc-cost-model, lem-cost-constrained-dmc-achievability, lem-cost-constrained-dmc-information-capacity-properties, lem-cost-constrained-dmc-mutual-information-under-average-cost, thm-it-fano-inequality, thm-it-finite-entropy-chain-rule, thm-it-finite-markov-data-processing]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: No choice axiom is used; all channels, alphabets, and codebooks in each argument are finite.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, Chapter 20 §20.1"
      url: https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf
    - title: "Yury Polyanskiy, MIT 6.441 Information Theory, Chapter 17 §§17.1–17.2"
      url: https://ocw.mit.edu/courses/6-441-information-theory-spring-2016/24fb44b6a101e847c32ffe38bbeeea6e_MIT6_441S16_chapter_17.pdf
---

## Statement

Let $W$ be a finite DMC with finite nonnegative input cost $c$, and let $\Gamma\ge c_{\min}$. Under the uniform-message average block-cost and average-error conventions of [[def-cost-constrained-dmc-code-and-capacity]], the operational capacity is
$$C(\Gamma)=C_I(\Gamma)=\max_{P_X:\,\mathbb E c(X)\le\Gamma} I(P_X;W),$$
with all rates measured in nats per use.

## Facts & Assumptions

**Given:** A finite memoryless channel, a finite letter cost, and a feasible average-cost budget.

[A1] [[def-discrete-memoryless-channel]], [[def-finite-dmc-cost-model]], and [[def-cost-constrained-dmc-code-and-capacity]]: $C(\Gamma)$ uses deterministic length-$n$ codes, uniform-message average error and average block cost; $C_I$ is the supremum over input laws with expected letter cost at most $\Gamma$.

[F1] [[lem-cost-constrained-dmc-information-capacity-properties]]: the feasible input set is compact, the maximum is attained, and $C_I$ is nondecreasing and concave; for $\Gamma>c_{\min}$ its maximum can be approached with strict-cost laws.

[F2] [[lem-cost-constrained-dmc-mutual-information-under-average-cost]]: every block input satisfying the average cost constraint obeys $I(X^n;Y^n)\le nC_I(\Gamma)$.

[F3] [[lem-cost-constrained-dmc-achievability]]: every rate below $C_I(\Gamma)$ is achievable by average-cost feasible ordinary codes, including the minimum-cost endpoint.

[F4] [[thm-it-fano-inequality]]: if an estimate of a uniform $M$-message variable has error $e$, then $H(M\mid\widehat M)\le h_2(e)+e\ln(M-1)$.

[F5] [[thm-it-finite-entropy-chain-rule]]: finite entropy obeys the chain rule and $I(U;V)=H(U)-H(U\mid V)$.

[F6] [[thm-it-finite-markov-data-processing]]: for finite Markov variables $U\to V\to Z$, $I(U;Z)\le I(V;Z)$.

## Proof

1.1 If $M=1$, the rate is zero and the converse is immediate. Suppose $M\ge2$. Then the message and channel variables form the finite Markov chains $M\to X^n\to Y^n$ and $M\to Y^n\to\widehat M$. By [F5] and [F6], $I(M;Y^n)\ge I(M;\widehat M)=\ln M-H(M\mid\widehat M)\ge(1-e)\ln M-\ln2$, using the relaxed Fano bound in [F4]. Feasibility and [A1] give $n^{-1}\sum_t\mathbb E c(X_t)\le\Gamma$, so [F2] applies. Also [F6] gives $I(M;Y^n)\le I(X^n;Y^n)$, and [F2] bounds the latter by $nC_I(\Gamma)$. Hence $(1-e)\ln M\le nC_I(\Gamma)+\ln2$. [A1, F2, F4, F5, F6, given, algebra, cases]

2.1 Along any reliable sequence, $e_n\to0$, so step 1.1 implies $\limsup n^{-1}\ln M_n\le C_I(\Gamma)$. This proves $C(\Gamma)\le C_I(\Gamma)$. [step 1.1, given, algebra]

3.1 For $R=0$, a one-message minimum-cost code is feasible. If $0<R<C_I(\Gamma)$, [F3] constructs a reliable feasible code sequence of rate at least $R$. Therefore every rate below $C_I(\Gamma)$ is operationally achievable, so $C(\Gamma)\ge C_I(\Gamma)$ by the supremum definition, also when $C_I(\Gamma)=0$. Attainment of the displayed maximum is [F1]. [F1, F3, given, cases] ∎