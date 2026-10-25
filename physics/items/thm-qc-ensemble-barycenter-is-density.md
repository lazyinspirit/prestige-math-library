---
id: thm-qc-ensemble-barycenter-is-density
kind: theorem
title: Finite ensemble barycenters are density operators
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 4
deps: [def-qc-ensemble-and-purification, def-qc-density-operator, thm-qc-density-operator-existence, def-non-negative-and-positive-operator, def-trace-of-an-endomorphism, prop-trace-is-linear]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: John Watrous, The Theory of Quantum Information, §2.1.2
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf
    - title: "John Preskill, Quantum Computation, Chapter 2: Foundations I: States and Ensembles"
      url: https://www.preskill.caltech.edu/ph219/chap2_15.pdf
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, §15.1"
      url: https://arxiv.org/pdf/1907.09415
---

## Statement

For a finite ensemble $(p_a,\rho_a)_{a=1}^n$ of density operators on a nonzero finite-dimensional complex-inner-product space $H$, its barycenter $\bar\rho=\sum_{a=1}^np_a\rho_a$ is a density operator. Regrouping the finite outcomes into blocks and assigning each block its normalized barycenter when its total weight is positive preserves the overall barycenter; zero-total-weight blocks contribute zero.

## Facts & Assumptions

**Given:** $n\ge1$, real weights $p_a\ge0$ with $\sum_ap_a=1$, and density operators $\rho_a$ on $H$.

[F1] [[def-qc-ensemble-and-purification]]: an ensemble has finite probability weights and density-operator components; its barycenter is their weighted sum.

[F2] [[def-qc-density-operator]]: a density operator is non-negative with trace one.

[F3] [[def-non-negative-and-positive-operator]]: a non-negative operator is self-adjoint and has nonnegative quadratic form.

[F4] [[prop-trace-is-linear]]: matrix trace preserves finite sums and scalar multiples; with [[def-trace-of-an-endomorphism]], this applies to endomorphism trace in a fixed basis.

[F5] [[thm-qc-density-operator-existence]]: every nonzero finite-dimensional complex-inner-product space has at least one density operator.

## Proof

1.1 Set $\bar\rho=\sum_{a=1}^np_a\rho_a$, the barycenter in [F1]. It is self-adjoint because it is a finite real linear combination of self-adjoint operators. For every $x\in H$, $\langle\bar\rho x,x\rangle=\sum_ap_a\langle\rho_ax,x\rangle\ge0$ by [F2]–[F3], so $\bar\rho$ is non-negative. [given, F1, F2, F3, algebra]

2.1 By trace linearity [F4], $\operatorname{tr}(\bar\rho)=\sum_ap_a\operatorname{tr}(\rho_a)=\sum_ap_a=1$. Thus $\bar\rho$ is a density operator by [F2]. [given, F2, F4, step 1.1, algebra]

3.1 Let $B_1,\ldots,B_m$ partition the outcome indices and put $q_b=\sum_{a\in B_b}p_a$. If $q_b>0$, the weights $p_a/q_b$ within block $B_b$ sum to one, so the argument in steps 1.1–2.1, applied to this finite normalized subensemble, shows that $\sigma_b=q_b^{-1}\sum_{a\in B_b}p_a\rho_a$ is a density operator and $q_b\sigma_b=\sum_{a\in B_b}p_a\rho_a$. [given, F1, F2, F3, F4, step 1.1, step 2.1, algebra]

4.1 If $q_b=0$, nonnegativity of the weights forces every $p_a=0$ in $B_b$. Choose any density operator $\sigma_b$ using [F5]; then $q_b\sigma_b=0=\sum_{a\in B_b}p_a\rho_a$. Summing the block identities gives $\sum_bq_b\sigma_b=\sum_ap_a\rho_a$, so regrouping preserves the barycenter, including zero-weight blocks. [given, F5, step 3.1, algebra, choose] ∎
