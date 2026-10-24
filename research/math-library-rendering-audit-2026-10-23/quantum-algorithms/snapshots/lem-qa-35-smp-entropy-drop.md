---
id: lem-qa-35-smp-entropy-drop
kind: lemma
title: "Private-message conditioning lowers output entropy"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 2
deps: ["def-qa-35-finite-probability-entropy-and-stochastic-matrices", "lem-qa-35-kl-event-separation", "lem-qa-35-smp-prior-message-decomposition"]
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; all distributions, sums, bases, and selection sets are finite."
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Ilan Newman and Mario Szegedy, Public vs. Private Coin Flips in One Round Communication Games"
      url: https://dl.acm.org/doi/10.1145/237814.238004
      locator: "§4.1–4.2, PDF pp.4–9, matrix packing theorem and complete proof."
---

## Statement

Under the hypotheses and decomposition of [[lem-qa-35-smp-prior-message-decomposition]], the weights and posteriors can be chosen so that Σ_jq_j H(D_jA)≤H(DA)−1/2.

## Facts & Assumptions

**Given:** Matrices and distribution as in [[lem-qa-35-smp-prior-message-decomposition]], with the resulting $q_j,D^{(j)},X_j$.

[F1] [[lem-qa-35-smp-prior-message-decomposition]]: For rows $X_j$ equal to the transposes of the columns of $M$, $\sum_jq_j(DA)X_j^{\mathsf T}\le0.02$ and $\sum_jq_j(D^{(j)}A)X_j^{\mathsf T}\ge0.99$, with $D=\sum_jq_jD^{(j)}$.

[F2] [[lem-qa-35-kl-event-separation]]: If $P X^{\mathsf T}\le0.06$ and $QX^{\mathsf T}\ge0.94$, then $D(Q\|P)\ge1$.

## Proof

**Proof technique:** direct.

1.1 Put $P=DA$ and $Q_j=D^{(j)}A$. These are probability vectors and $P=\sum_jq_jQ_j$. The weighted acceptance gap in [F1] is at least $0.97$. Since every difference $\beta_j=(Q_j-P)X_j^{\mathsf T}$ lies in $[-1,1]$, the set $U=\{j:\beta_j\ge0.94\}$ has weight at least $1/2$: otherwise the weighted average is less than $0.94+0.06\cdot(1/2)=0.97$. For $j\in U$, $Q_jX_j^{\mathsf T}\ge0.94$ and $PX_j^{\mathsf T}=Q_jX_j^{\mathsf T}-\beta_j\le0.06$. [given, F1, algebra]

2.1 By [F2], $D(Q_j\|P)\ge1$ for each $j\in U$. Direct expansion of the finite sums, using $P_i=\sum_jq_j(Q_j)_i$, gives $H(P)-\sum_jq_jH(Q_j)=\sum_jq_jD(Q_j\|P).$ If $P_i=0$, every positive-weight $(Q_j)_i$ is zero, so no undefined logarithm enters. The right side is at least the weight of $U$, hence at least $1/2$. Substituting $P=DA$ and $Q_j=D^{(j)}A$ proves the entropy drop. [step 1.1, F1, F2, algebra] ∎
