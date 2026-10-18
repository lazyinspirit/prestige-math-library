---
id: lem-cost-constrained-dmc-achievability
kind: lemma
title: Strictly feasible DMC input laws achieve every lower mutual-information rate
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 8
deps: [def-cost-constrained-dmc-code-and-capacity, def-discrete-memoryless-channel, def-discrete-memoryless-channel-information-capacity, def-discrete-memoryless-channel-information-density, def-finite-dmc-cost-model, def-finite-stochastic-kernel, def-fixed-length-channel-code, def-fixed-length-channel-code-errors, lem-cost-pruned-random-code, lem-density-channel-threshold-random-coding-bound, lem-discrete-memoryless-channel-iid-information-density-converges, lem-cost-constrained-dmc-information-capacity-properties, thm-chebyshev-inequality]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: No choice axiom is used; all alphabets and codebooks are finite at each blocklength.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, Chapter 20 §20.1"
      url: https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf
    - title: "Yury Polyanskiy, MIT 6.441 Information Theory, Chapter 17 §17.2"
      url: https://ocw.mit.edu/courses/6-441-information-theory-spring-2016/24fb44b6a101e847c32ffe38bbeeea6e_MIT6_441S16_chapter_17.pdf
---

## Statement

Let $W$ be a finite DMC with cost $c$, feasible budget $\Gamma\ge c_{\min}$, and cost-constrained information capacity $C_I(\Gamma)$. For every $0\le R<C_I(\Gamma)$, there are deterministic ordinary codes with rate tending to at least $R$, average error tending to zero, and average block cost at most $\Gamma$.

## Facts & Assumptions

**Given:** The finite DMC and cost model, the feasible budget, and a rate $R$ strictly below $C_I(\Gamma)$.

[A1] [[def-discrete-memoryless-channel]], [[def-finite-dmc-cost-model]], [[def-cost-constrained-dmc-code-and-capacity]], [[def-fixed-length-channel-code]], and [[def-fixed-length-channel-code-errors]]: the product DMC, finite letter cost, deterministic code, uniform-message average error, and constrained information-capacity convention.

[F1] [[lem-cost-constrained-dmc-information-capacity-properties]]: the constrained maximum is attained, and for $\Gamma>c_{\min}$ its value can be approached by input laws of strictly smaller cost.

[F2] [[lem-discrete-memoryless-channel-iid-information-density-converges]]: for a fixed finite DMC input law, the normalized IID information density converges in probability to $I(P_X;W)$.

[F3] [[lem-density-channel-threshold-random-coding-bound]]: an IID random code's expected average error is bounded by the information-density miss probability plus the threshold false-alarm term.

[F4] [[lem-cost-pruned-random-code]]: if expected cost-violating fraction and ensemble average error both tend to zero, pruning yields feasible deterministic subcodes with vanishing error and vanishing rate loss.

[F5] [[thm-chebyshev-inequality]]: a finite random variable $V$ satisfies $\Pr(|V-\mathbb EV|\ge t)\le\operatorname{Var}(V)/t^2$ for $t>0$.

[F6] [[def-discrete-memoryless-channel-information-capacity]], [[def-discrete-memoryless-channel-information-density]], and [[def-finite-stochastic-kernel]]: the induced law determines mutual information and information density; each finite channel row sums to one.

## Proof

1.1 If $R=0$, the one-message code that repeats a minimum-cost symbol has zero error and cost $c_{\min}\le\Gamma$. Suppose $R>0$. If $\Gamma>c_{\min}$, [F1] gives an input law $P_X$ with $\bar c(P_X)<\Gamma$ and $I(P_X;W)>R$. If $\Gamma=c_{\min}$, choose an attaining law from [F1]. Feasibility gives $\sum_xP_X(x)(c(x)-c_{\min})\le0$; every summand is nonnegative, so this law is supported on minimum-cost symbols and its mutual information exceeds $R$. [F1, given, cases]

2.1 Choose $\delta>0$ with $R+2\delta<I(P_X;W)$ and $M_n=\lceil e^{nR}\rceil$. For the IID input and product DMC, [F2] makes the miss probability at threshold $\ln(M_n-1)+n\delta$ tend to zero, since the threshold divided by $n$ tends to $R+\delta<I(P_X;W)$. [F2, step 1.1, given, algebra]

3.1 By [F3], the IID random-code ensemble has expected average error $a_n\to0$. If $\Gamma>c_{\min}$, the letter costs are bounded on the finite alphabet, so the variance of their $n$-letter average is $\operatorname{Var}(c(X_1))/n$; [F5] implies the expected fraction $q_n$ of codewords whose average cost exceeds $\Gamma$ tends to zero because $\mathbb E c(X_1)<\Gamma$. Apply [F4] to obtain deterministic subcodes with every retained word feasible, error tending to zero, and rate loss tending to zero. If $\Gamma=c_{\min}$, every drawn input letter has minimum cost, so every random codeword has cost exactly $\Gamma$ and no pruning is needed; [F3] supplies deterministic codes with vanishing error. [A1, F3, F4, F5, F6, step 1.1, step 2.1, given, cases, algebra] ∎