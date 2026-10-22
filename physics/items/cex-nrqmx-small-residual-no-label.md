---
id: cex-nrqmx-small-residual-no-label
kind: counterexample
domain: mathematics
library: mathematics
title: A small residual does not label an eigenvalue
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 1
deps:
  - thm-nrqmx-spectral-residual-certificate
  - def-axiom-of-choice
  - def-countable-choice
dependency_roles:
  thm-nrqmx-spectral-residual-certificate: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Statement refuted

Assume Choice and Countable Choice. The following assertion is false: for every lower-bounded self-adjoint operator $H$ with a lowest eigenvalue $E_0$, every normalized $u\in D(H)$, and every real $\lambda$, if $(H-\lambda I)u=0$, then $\lambda=E_0$ and $u$ belongs to the ground eigenspace $\ker(H-E_0I)$.

## Statement references

[[thm-nrqmx-spectral-residual-certificate]]

## Facts & Assumptions

**Given:** Choice and Countable Choice; the residual certificate of [F1]; and the finite-dimensional operator and vector in the counterexample.

[A1] Choice and Countable Choice are the assumptions of the cited residual-certificate supplier ([[def-axiom-of-choice]], [[def-countable-choice]]).

[F1] For a normalized vector, the residual certificate bounds $\operatorname{dist}(\lambda,\sigma(H))$ and, with an explicit spectral cluster and gap, its component outside that cluster; it does not assign an eigenvalue index without such cluster information ([[thm-nrqmx-spectral-residual-certificate]]).

## Proof

1.1 On $H=\mathbb C^2$ with its standard inner product, set $T=\operatorname{diag}(0,100)$ on all of $H$, $u=(0,1)$, and $\lambda=100$. Then $T$ is self-adjoint and bounded below, $\|u\|=1$, $\sigma(T)=\{0,100\}$, the lowest eigenvalue is $E_0=0$, and $(T-100I)u=0$. [A1, F1, given, algebra]

2.1 The ground eigenspace is $\ker T=\operatorname{span}\{(1,0)\}$, while $u=(0,1)$ is orthogonal to it and $\lambda=100\ne E_0$. Thus the zero residual verifies a spectral point, as in [F1], but refutes the asserted ground-state label. [F1, step 1.1, algebra] ∎
