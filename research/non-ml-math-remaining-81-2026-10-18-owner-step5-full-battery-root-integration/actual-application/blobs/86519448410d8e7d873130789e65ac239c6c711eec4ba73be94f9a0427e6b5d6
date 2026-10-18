---
id: lem-cost-constrained-dmc-information-capacity-properties
kind: lemma
title: Constrained DMC information capacity is attained, nondecreasing, and concave
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 7
deps: [def-finite-dmc-cost-model, def-cost-constrained-dmc-code-and-capacity, def-discrete-memoryless-channel-information-capacity, def-finite-probability-vector, def-it-finite-mutual-information, def-it-finite-conditional-entropy, def-qa-35-finite-probability-entropy-and-stochastic-matrices, thm-it-finite-entropy-chain-rule, thm-it-finite-kl-nonnegative-equality, thm-euclidean-heine-borel-pseudocompactness-and-extreme-values, lem-finite-simplex-entropy-continuity-and-concavity]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: No choice axiom is used; maximizers are obtained by the finite-dimensional extreme-value theorem.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, Chapter 20 §20.1"
      url: https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf
    - title: "Yury Polyanskiy, MIT 6.441 Information Theory, Chapter 17 §17.1, Proposition 17.1"
      url: https://ocw.mit.edu/courses/6-441-information-theory-spring-2016/24fb44b6a101e847c32ffe38bbeeea6e_MIT6_441S16_chapter_17.pdf
---

## Statement

Let $W$ be a finite DMC, $c:\mathcal X\to[0,\infty)$ a finite letter cost, and $\Gamma\ge c_{\min}$. The feasible set $\{P_X:\bar c(P_X)\le\Gamma\}$ is nonempty and compact, and $C_I(\Gamma)$ from [[def-cost-constrained-dmc-code-and-capacity]] is attained with $0\le C_I(\Gamma)\le\ln|\mathcal X|$. The function $\Gamma\mapsto C_I(\Gamma)$ is nondecreasing and concave on $[c_{\min},\infty)$. If $\Gamma>c_{\min}$, then for every maximizing law $P_X^*$ the laws
$$P_{X,\epsilon}:=(1-\epsilon)P_X^*+\epsilon\delta_{x_{\min}},\qquad 0<\epsilon<1,$$
have cost strictly below $\Gamma$ whenever $P_X^*$ has cost $\Gamma$, and $I(P_{X,\epsilon};W)\to C_I(\Gamma)$ as $\epsilon\downarrow0$.

## Facts & Assumptions

**Given:** A finite DMC $W$, a finite cost $c$, and a budget $\Gamma\ge c_{\min}$.

[F1] [[def-finite-dmc-cost-model]] and [[def-finite-probability-vector]]: $\mathcal X$ is finite and nonempty, $c_{\min}$ is attained, and $\bar c(P_X)=\sum_xP_X(x)c(x)$ is linear in $P_X$.

[F2] [[def-cost-constrained-dmc-code-and-capacity]]: $C_I(\Gamma)=\sup_{\bar c(P_X)\le\Gamma} I(P_X;W)$.

[F3] [[def-discrete-memoryless-channel-information-capacity]], [[def-it-finite-mutual-information]], [[def-it-finite-conditional-entropy]], and [[thm-it-finite-entropy-chain-rule]]: for the induced finite joint law, $I(P_X;W)=H(P_XW)-\sum_xP_X(x)H(W(\cdot\mid x))$.

[F4] [[lem-finite-simplex-entropy-continuity-and-concavity]] and [[def-qa-35-finite-probability-entropy-and-stochastic-matrices]]: finite entropy is continuous and concave on each probability simplex, with $0\le H\le\ln m$. finite entropy is continuous and concave on each probability simplex.

[F5] [[thm-euclidean-heine-borel-pseudocompactness-and-extreme-values]]: a nonempty closed bounded subset of finite-dimensional Euclidean space is compact, and every continuous real-valued function on it attains its maximum.

[F6] [[thm-it-finite-kl-nonnegative-equality]]: finite KL divergence is nonnegative and equals zero only for identical probability vectors.

## Proof

1.1 The probability simplex on $\mathcal X$ is closed and bounded in $\mathbb R^{|\mathcal X|}$. The feasible subset is closed because $P_X\mapsto\bar c(P_X)$ is linear and continuous; it is nonempty because $\delta_{x_{\min}}$ has cost $c_{\min}\le\Gamma$. Hence it is compact by [F5]. The output law $P_XW$ is linear in $P_X$, so [F3]–[F4] show that $P_X\mapsto I(P_X;W)$ is continuous. Nonnegativity of mutual information follows from [F6] applied to the joint law and product marginals. Also $I(P_X;W)=H(P_X)-H(X\mid Y)\le H(P_X)$ by [F3], since conditional entropy is a sum of nonnegative terms. Concavity in [F4] gives $H(P_X)\le\ln|\mathcal X|$: the uniform vector is the average of the finitely many coordinate permutations of $P_X$, all of which have the same entropy. Thus the objective lies in $[0,\ln|\mathcal X|]$, and [F5] proves its supremum is finite and attained. [F1, F3, F4, F5, F6, given, algebra]

2.1 If $\Gamma_0\le\Gamma_1$, the feasible set at $\Gamma_0$ is contained in the one at $\Gamma_1$, proving monotonicity. For $0\le\theta\le1$, let $P_0,P_1$ attain $C_I(\Gamma_0),C_I(\Gamma_1)$. The mixture $P_\theta=\theta P_0+(1-\theta)P_1$ has cost at most $\theta\Gamma_0+(1-\theta)\Gamma_1$. By [F3]–[F4], mutual information is concave in $P_X$: the output entropy is concave and the conditional entropy term is linear. Therefore $C_I(\theta\Gamma_0+(1-\theta)\Gamma_1)\ge\theta C_I(\Gamma_0)+(1-\theta)C_I(\Gamma_1)$. [F1, F2, F3, F4, step 1.1, algebra]

3.1 Suppose $\Gamma>c_{\min}$ and $P_X^*$ attains $C_I(\Gamma)$. If $\bar c(P_X^*)=\Gamma$, choose a minimum-cost symbol $x_{\min}$ from the finite alphabet. Then $\bar c(P_{X,\epsilon})=(1-\epsilon)\Gamma+\epsilon c_{\min}<\Gamma$ for every $\epsilon>0$. Since $P_{X,\epsilon}\to P_X^*$ and the mutual-information objective is continuous by step 1.1, $I(P_{X,\epsilon};W)\to C_I(\Gamma)$. If $P_X^*$ already has strict cost, no approximation is needed. [F1, F3, step 1.1, given, algebra, cases] ∎