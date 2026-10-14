---
id: thm-conditional-test-controls-unconditional-level
kind: theorem
title: "Conditional level implies unconditional level"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 7
deps:
  - def-test-size-and-power
  - def-conditional-test-given-statistic
  - def-conditional-expectation-given-a-sigma-algebra
  - cor-expectation-linearity-monotonicity-and-modulus-bound
proof_strategy: direct
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "George Deligiannidis, Foundations of Statistical Inference, Chapter 13, PDF pp. 77–78"
      url: "https://www.stats.ox.ac.uk/~deligian/pdf/sb21/sb21_notes.pdf"
    - title: "Berkeley Stat 210A Course Reader, Testing with Nuisance Parameters, Conditional testing section"
      url: "https://stat210a.berkeley.edu/fall-2025/reader/testing-nuisance.html"
---

## Statement

Let $\varphi$ be a test for nonempty disjoint null and alternative parameter sets $\Theta_0,\Theta_1$ as in [[def-test-size-and-power]], let $S$ be a statistic, and let $\alpha\in[0,1]$. If for every $\theta\in\Theta_0$ there is a conditional-expectation version $q_\theta=E_\theta[\varphi(X)\mid\sigma(S)]$ with $q_\theta\le\alpha$ $P_\theta$-almost surely, then $E_\theta[\varphi(X)]\le\alpha$ for every $\theta\in\Theta_0$. Consequently, the test has size at most $\alpha$, where size is the supremum of its rejection expectation over the null family as in [[def-test-size-and-power]].

## Facts & Assumptions

**Given:** A test $\varphi$, null family $\Theta_0$, statistic $S$, and conditional level bound $\alpha$.

[F1] Conditional level at most $\alpha$ means that for each null parameter a supplied conditional-expectation version $q_\theta$ satisfies $q_\theta\le\alpha$ almost surely. [[def-conditional-test-given-statistic]]

[F2] A conditional-expectation version satisfies $\int_A q_\theta\,dP_\theta=\int_A\varphi\,dP_\theta$ for every $A\in\sigma(S)$; in particular $\Omega\in\sigma(S)$. [[def-conditional-expectation-given-a-sigma-algebra]]

[F3] For integrable real random variables, almost-sure pointwise order implies the same order of expectations. [[cor-expectation-linearity-monotonicity-and-modulus-bound]]

[A1] The test size convention is $\sup_{\theta\in\Theta_0}E_\theta\varphi(X)$ as in [[def-test-size-and-power]].

## Proof

1.1 Fix $\theta\in\Theta_0$ and choose the conditional version $q_\theta$ supplied by [F1]. Taking $A=\Omega$ in [F2] gives $E_\theta q_\theta=E_\theta\varphi(X)$. [F1, F2, given, choose]

2.1 Since $q_\theta\le\alpha$ almost surely and both variables are integrable, [F3] gives $E_\theta q_\theta\le E_\theta\alpha=\alpha$. Combining with step 1.1 yields $E_\theta\varphi(X)\le\alpha$. [F3, step 1.1, algebra]

3.1 The argument holds for every $\theta\in\Theta_0$, so taking the supremum of these rejection expectations gives size at most $\alpha$ under the convention [A1]. No common exceptional null set across parameter values is needed. [A1, step 2.1] ∎
