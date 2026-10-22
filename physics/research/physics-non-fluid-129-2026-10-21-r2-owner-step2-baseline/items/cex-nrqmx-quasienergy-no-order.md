---
id: cex-nrqmx-quasienergy-no-order
kind: counterexample
domain: mathematics
library: mathematics
title: Quasienergy has no canonical ground value
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 3
deps:
  - def-countable-choice
  - thm-nrqm-controlled-dynamics-norm-dyson-series-and-uniqueness
  - thm-nrqmx-finite-floquet-normal-form
  - def-nrqmx-finite-hermitian-matrix-exponential
  - thm-kernel-and-fibres-of-complex-exponential
dependency_roles:
  def-countable-choice: mathematical-premise
  thm-nrqm-controlled-dynamics-norm-dyson-series-and-uniqueness: mathematical-premise
  thm-nrqmx-finite-floquet-normal-form: mathematical-premise
  def-nrqmx-finite-hermitian-matrix-exponential: mathematical-premise
  thm-kernel-and-fibres-of-complex-exponential: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
sources:
  references:
    - title: Konrad Viebahn, Introduction to Floquet theory, lecture notes (2020)
      url: https://boulderschool.yale.edu/sites/default/files/files/floquetlecture_Konrad%20Viebahn.pdf
      locator: Section II, equations (15)-(20), Hermitian logarithm choices for the period unitary.
    - title: André Eckardt and Egidijus Anisimovas, High-frequency approximation for periodically driven quantum systems from a Floquet-space perspective, New Journal of Physics 17 (2015), 093039
      url: https://arxiv.org/pdf/1502.06477
      locator: Section 2.3, equations (14)-(16), quasienergies differing by integer multiples of $\hbar\omega$.
verification:
  precheck: pass
---

## Statement refuted

The one-period unitary of a finite-dimensional periodic system determines a distinguished least real quasienergy that is independent of the chosen Hermitian logarithm.

## Statement references

[[thm-nrqmx-finite-floquet-normal-form]]

## Facts & Assumptions

**Given:** Countable Choice, $T>0$, $\hbar>0$, $\omega=2\pi/T$, and the one-dimensional state space $\mathbb C$.

[A1] Countable Choice is assumed by the finite Floquet normal-form result ([[def-countable-choice]], [[thm-nrqmx-finite-floquet-normal-form]]).

[F1] [[thm-nrqmx-finite-floquet-normal-form]] defines a quasienergy as a real eigenvalue of a chosen Hermitian logarithm of $U(T,0)$, with representatives taken modulo $\hbar\omega$.

[F2] The finite matrix exponential is defined by [[def-nrqmx-finite-hermitian-matrix-exponential]], and equality of scalar exponential values is characterized by [[thm-kernel-and-fibres-of-complex-exponential]].

[F3] [[thm-nrqm-controlled-dynamics-norm-dyson-series-and-uniqueness]] supplies the unique propagator for the constant zero Hamiltonian.

## Counterexample

**Given:** [A1], [F1]–[F3], $T>0$, $\hbar>0$, and $\omega=2\pi/T$.

1.1 Take the constant zero Hamiltonian $H(t)=0$ on $\mathbb C$. Its propagator is $U(t,0)=1$ by [F3]. For each integer $n$, the Hermitian scalar $H_F^{(n)}=n\hbar\omega$ satisfies $e^{-iTH_F^{(n)}/\hbar}=e^{-i2\pi n}=1=U(T,0)$, so each is a valid logarithm of the same monodromy. [A1, F1, F2, F3, algebra]

2.1 In dimension one the only eigenvalue of $H_F^{(n)}$, and hence its least quasienergy representative, is $n\hbar\omega$. It varies with $n$, while all representatives have the same class modulo $\hbar\omega$ by [F1, F2]. Therefore the period unitary determines a quasienergy class but no branch-independent least real quasienergy. [F1, F2, step 1.1] ∎
