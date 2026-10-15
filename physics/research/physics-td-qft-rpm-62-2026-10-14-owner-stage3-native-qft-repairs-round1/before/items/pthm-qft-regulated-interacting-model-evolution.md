---
id: pthm-qft-regulated-interacting-model-evolution
kind: physics-theorem
domain: physics
library: physics
title: Constructed regulated polynomial-model evolution
status: draft
origin: pipeline
pipeline_run: physics-td-qft-rpm-62-2026-10-14
dependency_level: 6
deps:
  - post-qft-regulated-polynomial-model
  - post-qft-constructed-model-and-measurement
  - thm-qft-self-adjoint-regulated-interaction
  - thm-qft-regulated-global-unitary-evolution
  - def-countable-choice
dependency_roles:
  post-qft-regulated-polynomial-model: physical-assumption
  post-qft-constructed-model-and-measurement: physical-assumption
  thm-qft-self-adjoint-regulated-interaction: mathematical-premise
  thm-qft-regulated-global-unitary-evolution: mathematical-premise
  def-countable-choice: mathematical-premise
physical_scope: "Global Schrödinger evolution at one fixed finite regulator, with the form-selected unbounded Hamiltonian and its exact domain. No continuum or empirical claim."
empirical_premises: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Mathematical Methods in Quantum Mechanics, 2nd ed., §5.1, the time evolution and Stone's theorem"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe2.pdf"
      locator: "Printed pp.145–149, strongly continuous unitary groups and differentiability on the generator domain."
    - title: "Richard S. Laugesen, Spectral Theory of Partial Differential Equations — Lecture Notes, Ch.4 and Ch.8"
      url: "https://arxiv.org/pdf/1203.2344v1"
      locator: "Printed pp.27–32 and 48–50, compact-form spectral theory and confining Schrödinger operators."
---

## Statement

Assume Countable Choice. Use one fixed finite-regulator data set from
[[post-qft-regulated-polynomial-model]], and let $h$ be the self-adjoint form
realization supplied by
[[thm-qft-self-adjoint-regulated-interaction]], with domain $D(h)$ and
eigenpairs $(\psi_n,\lambda_n)$. Let $E_*>0$ joules and set
$H_{\rm phys}:=E_*h$ on $D(h)$. For physical time $\tau$ in seconds define

$$U_{\rm phys}(\tau):=U(E_*\tau/\hbar),$$

where $U(s)$ is the dimensionless-parameter group of
[[thm-qft-regulated-global-unitary-evolution]]. Then $U_{\rm phys}$ is a
strongly continuous unitary group, $U_{\rm phys}(0)=I$,
$U_{\rm phys}(\tau_1+\tau_2)=U_{\rm phys}(\tau_1)U_{\rm phys}(\tau_2)$,
and $\|U_{\rm phys}(\tau)\psi\|=\|\psi\|$ for every $\psi\in H_N$.
Its norm derivative exists exactly for $\psi\in D(h)$, and then

$$\frac{d}{d\tau}U_{\rm phys}(\tau)\psi=-\frac{i}{\hbar}H_{\rm phys}U_{\rm phys}(\tau)\psi.$$

The result is a conditional deduction for the selected finite-regulator
model. It is not an empirical observation or a continuum-limit theorem.

## Facts & Assumptions

**Given:** Countable Choice; a fixed finite-regulator model; $E_*>0$ joules; $\hbar>0$ in joule-seconds; the operator and domain of the mathematical finite-regulator construction.

[A1] [[def-countable-choice]]: every countable family of nonempty sets has a choice function. The mathematical QFT-IR01 spectral construction assumes this principle.

[A2] [[post-qft-regulated-polynomial-model]]: the regulator and polynomial data are fixed, and the physical Hamiltonian is $E_*h$ when the form realization $h$ is actually constructed; $E_*$ is a positive energy scale.

[A3] [[post-qft-constructed-model-and-measurement]]: only after a selected model has an actually constructed self-adjoint Hamiltonian and unitary evolution, adopt the Schrödinger convention $U(t)=\exp(-it\widehat H/\hbar)$. This postulate itself constructs neither operator nor group.

[F1] [[thm-qft-self-adjoint-regulated-interaction]]: under Countable Choice and the finite-mode coercivity hypotheses, $h$ is the specified self-adjoint form realization, with complete eigenfamily $(\psi_n)$, real eigenvalues $\lambda_n$, and $D(h)=\{\sum_nc_n\psi_n:\sum_n\lambda_n^2|c_n|^2<\infty\}$.

[F2] [[thm-qft-regulated-global-unitary-evolution]]: under Countable Choice, $U(s)=\sum_ne^{-is\lambda_n}\langle\psi,\psi_n\rangle\psi_n$ is a strongly continuous unitary group for dimensionless $s\in\mathbb R$; its norm derivative exists exactly on $D(h)$ and equals $-ihU(s)\psi$ there.

## Proof

**Proof technique:** direct.

1.1 Under Countable Choice [A1], the hypotheses of [F1] hold, so $h$ is self-adjoint on $D(h)$. Multiplication by the positive real scalar $E_*$ preserves self-adjointness and the domain, so $H_{\rm phys}=E_*h$ is self-adjoint on $D(h)$ with eigenvalues $E_*\lambda_n$. The units in [A2] make $E_*\tau/\hbar$ dimensionless. [A1, A2, F1, algebra]

2.1 Put $s=E_*\tau/\hbar$. Since this is a real linear change of parameter, Countable Choice [A1] discharges the hypothesis of [F2], which gives unitarity, strong continuity, the identity at zero, and the group law for $U_{\rm phys}(\tau)=U(s)$. Unitarity also gives $\|U_{\rm phys}(\tau)\psi\|=\|\psi\|$. [A1, F2, step 1.1, algebra]

3.1 If $\psi\in D(h)$, the chain rule and [F2] give $\frac{d}{d\tau}U(E_*\tau/\hbar)\psi =-i(E_*/\hbar)hU(E_*\tau/\hbar)\psi =-iH_{\rm phys}U_{\rm phys}(\tau)\psi/\hbar$. Conversely, because $E_*/\hbar>0$, the change $s=E_*\tau/\hbar$ is invertible, so norm differentiability in $\tau$ is equivalent to differentiability in $s$; [F2] makes its domain exactly $D(h)$. [A1, F1, F2, step 1.1, step 2.1, algebra]

4.1 [A3] supplies the physical reading of this already constructed self-adjoint Hamiltonian and group as the selected model's Schrödinger evolution. It adds no existence claim beyond [F1] and [F2], and no empirical premise is used. [A1, A3, F1, F2, step 1.1, step 2.1] ∎
