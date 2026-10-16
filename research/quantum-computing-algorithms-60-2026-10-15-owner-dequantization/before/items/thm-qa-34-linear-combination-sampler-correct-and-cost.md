---
id: thm-qa-34-linear-combination-sampler-correct-and-cost
kind: theorem
title: Correctness and cost of the linear-combination sampler
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 17
deps:
  - alg-qa-34-rejection-sampler-linear-combination
  - def-qa-34-l2-sample-query-access
  - def-finite-probability-space-and-event
  - def-independence-of-finite-random-variables
  - lem-finite-probability-basic-laws
  - lem-exponential-dominates-one-plus-x
  - thm-qa-34-adaptive-failure-union-bound
  - thm-cauchy-schwarz-and-the-euclidean-norm
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: Ewin Tang, A quantum-inspired classical algorithm for recommendation systems, version 3
      url: https://arxiv.org/pdf/1807.04271v3
---

## Statement

Use the sampler of [[alg-qa-34-rejection-sampler-linear-combination]] with $k\ge1$, $x=\sum_{j=1}^kw_jv_j\ne0$, and $C_0\ge C:=\sum_j\|w_jv_j\|_2^2/\|x\|_2^2$. A proposal is accepted with probability $1/(kC)$, and conditional on acceptance its index has law $D_x$. With cap $R\ge kC_0\ln(1/\delta)$, the probability of returning FAIL is at most $\delta$. Each trial uses $O(k)$ entry queries plus the declared mixture/sample access costs, so the worst-case query cost is $O(kR)$; as $R\to\infty$, the capped expected number of trials tends to $kC$.

## Facts & Assumptions

**Given:** The access and coefficient hypotheses of the Statement, with $x\ne0$.

[F1] [[alg-qa-34-rejection-sampler-linear-combination]]: the proposal chooses term $j$ proportionally to $\|w_jv_j\|_2^2$ and then samples from $D_{v_j}$; its acceptance probability is the displayed ratio.

[F2] [[def-qa-34-l2-sample-query-access]]: each nonzero term sampler has law $D_{v_j}$ and entry queries are charged.

[F3] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: $|\sum_j a_jb_j|^2\le k\sum_j|a_jb_j|^2$.

[F4] [[lem-exponential-dominates-one-plus-x]]: for $0\le p\le1$, $(1-p)^R\le e^{-Rp}$.

[F5] [[thm-qa-34-adaptive-failure-union-bound]]: for independent trials of success probability $p>0$, the expected capped number of trials tends to $1/p$ as the cap tends to infinity.

## Proof



1.1 Put $S=\sum_j\|w_jv_j\|_2^2>0$. The proposal probability of coordinate $i$ is $P(i)=\sum_j(w_jv_{j,i})^2/S$, because choosing $j$ has weight $\|w_jv_j\|_2^2/S$ and the conditional coordinate law is $v_{j,i}^2/\|v_j\|_2^2$. Its target probability is $Q(i)=x_i^2/\|x\|_2^2$. [given, F1, F2, algebra]

2.1 When $\sum_j(w_jv_{j,i})^2>0$, [F3] shows the acceptance ratio $Q(i)/(kC P(i))=x_i^2/[k\sum_j(w_jv_{j,i})^2]$ lies in $[0,1]$. If the denominator is zero, then every $w_jv_{j,i}=0$, so $x_i=0$ and the prescribed acceptance is $0$. [step 1.1, F3, algebra]

3.1 Multiplying proposal and acceptance probabilities gives $P(i)a_i=Q(i)/(kC)$. Summing over $i$ shows total acceptance probability is $1/(kC)$, and conditioning on acceptance yields $Q(i)$. Also $kC\ge1$ by [F3] applied to each coordinate and summed. [step 1.1, step 2.1, F3, algebra]

4.1 Independent trials miss with probability $(1-1/(kC))^R$. Since $C\le C_0$, this is at most $e^{-R/(kC_0)}\le\delta$ by [F4] and the cap hypothesis. A trial queries the $k$ entries at its sampled coordinate, so at most $O(kR)$ entry queries are used. With per-trial success probability $1/(kC)$, [F5] shows the capped expected trial count tends to $kC$ as $R\to\infty$. [given, F1, F2, F4, F5, algebra] ∎
