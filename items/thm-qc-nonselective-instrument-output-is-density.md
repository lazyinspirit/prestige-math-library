---
id: thm-qc-nonselective-instrument-output-is-density
kind: theorem
title: "The nonselective output of an instrument is a density operator"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps: [def-qc-instrument-and-conditional-state, thm-qc-instrument-outcome-law-normalizes, thm-qc-zero-probability-branch-has-no-conditioned-state, def-trace-of-an-endomorphism, prop-trace-is-linear, def-qc-density-operator, def-qc-completely-positive-map, def-non-negative-and-positive-operator]
justified_by: []
dependency_level: 7
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information (2018), §2.3.2"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
    - title: "John Preskill, Quantum Computation, Chapter 3: Foundations II: Measurement and Evolution, §§3.2.4–3.2.5"
      url: "https://www.preskill.caltech.edu/ph219/chap3_15.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
---

## Statement

For an input density operator $\rho$ and a finite instrument $(\mathcal I_a)_{a\in\Omega}$, define its **nonselective output** by $\bar\rho:=\sum_{a\in\Omega}\mathcal I_a(\rho)$. Then $\bar\rho$ is a density operator on the output space. Moreover,

$$\bar\rho=\sum_{a:p_a>0}p_a\rho_a,$$

where $p_a=\operatorname{tr}(\mathcal I_a(\rho))$ and $\rho_a$ is the positive-probability conditional state.

## Facts & Assumptions

**Given:** An input density operator $\rho$ and a finite instrument with outcome set $\Omega$.

[F1] [[def-qc-instrument-and-conditional-state]]: each branch is completely positive, $p_a=\operatorname{tr}(\mathcal I_a(\rho))$, and $\rho_a=\mathcal I_a(\rho)/p_a$ for $p_a>0$.

[F6] [[def-qc-density-operator]]: on a nonzero finite-dimensional complex inner-product space, a density operator is nonnegative and has trace one.

[F2] [[thm-qc-instrument-outcome-law-normalizes]]: $p_a\ge0$ and $\sum_a p_a=1$.

[F3] [[thm-qc-zero-probability-branch-has-no-conditioned-state]]: if $p_a=0$, then $\mathcal I_a(\rho)=0$.

[F4] [[def-qc-completely-positive-map]]: a completely positive branch map sends nonnegative inputs to nonnegative outputs at ancilla dimension one.

[F5] [[prop-trace-is-linear]]: trace preserves finite sums.

[F7] [[def-non-negative-and-positive-operator]]: a nonnegative operator is self-adjoint and has nonnegative quadratic form on every vector.

## Proof

1.1 For each $a$, $\tau_a=\mathcal I_a(\rho)$ is nonnegative by [F1], [F4], and [F6]–[F7]. For all $x,y$, self-adjointness of each $\tau_a$ gives $\langle\bar\rho x,y\rangle=\sum_a\langle\tau_ax,y\rangle=\sum_a\langle x,\tau_ay\rangle=\langle x,\bar\rho y\rangle$, so the finite sum $\bar\rho$ is self-adjoint. For every $x$, its quadratic form is $\langle\bar\rho x,x\rangle=\sum_a\langle\tau_ax,x\rangle\ge0$. Hence $\bar\rho$ is nonnegative by [F7]. By [F5] and [F2], $\operatorname{tr}(\bar\rho)=\sum_a\operatorname{tr}(\tau_a)=\sum_ap_a=1$. Hence $\bar\rho$ is a density operator; its trace one also shows the output space is nonzero. [given, F1, F2, F4, F5, F6, F7]

2.1 If $p_a>0$, the instrument definition [F1] gives $p_a\rho_a=\tau_a$. If $p_a=0$, [F3] gives $\tau_a=0$. Summing these equalities over the finite outcome set yields $\bar\rho=\sum_{a:p_a>0}p_a\rho_a$. [given, F1, F3, step 1.1] ∎
