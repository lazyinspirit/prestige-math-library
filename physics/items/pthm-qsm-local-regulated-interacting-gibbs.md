---
id: pthm-qsm-local-regulated-interacting-gibbs
kind: physics-theorem
title: Trace-Gibbs predictions for coercive finite regulators
status: published
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: physics
library: physics
dependency_level: 6
deps:
  - def-qsm-local-coercive-regulated-model
  - post-qsm-thermal-gibbs-preparation
  - thm-qft-regulated-gibbs-trace
  - thm-qsm-trace-gibbs-variational
  - post-qsm-normal-measurement-state
  - def-countable-choice
  - def-axiom-of-choice
  - def-qsm-relative-entropy-domain
dependency_roles:
  def-qsm-local-coercive-regulated-model: formulation-prerequisite
  post-qsm-thermal-gibbs-preparation: physical-assumption
  thm-qft-regulated-gibbs-trace: mathematical-premise
  thm-qsm-trace-gibbs-variational: mathematical-premise
  post-qsm-normal-measurement-state: formulation-prerequisite
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-qsm-relative-entropy-domain: mathematical-premise
physical_scope: "Conditional finite-mode, coercive polynomial trace-Gibbs model at positive temperature and finite-form-energy normal competitors. The three QSM batch-36 carriers remain drafts; their repaired mathematical inputs now have exact canonical carriers, with native readiness separate. No data, thermalization, regulator removal, or continuum interacting QFT claim is made."
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Gerald Teschl, Mathematical Methods in Quantum Mechanics, §§2.3 and 6.3
      url: https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe2.pdf
    - title: Richard S. Laugesen, Spectral Theory of Partial Differential Equations, Chapters 8–9
      url: https://arxiv.org/pdf/1203.2344v1
    - title: Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, §§4.3–4.4
      url: https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/STATMECH.pdf
---

## Statement

Assume the Axiom of Choice and the finite regulated model of
[[def-qsm-local-coercive-regulated-model]], the current draft thermal
preparation interface [[post-qsm-thermal-gibbs-preparation]], the current
draft normal-state interface [[post-qsm-normal-measurement-state]], and the
current draft mathematical theorem
[[thm-qsm-trace-gibbs-variational]]. Its inspected exact interface is: for a
nonzero separable complex Hilbert space and a densely defined self-adjoint
$A$ bounded below, if $e^{-\beta A}$ is trace class for every $\beta$ in an
open interval $I\subset(0,\infty)$, then $Z_\beta\in(0,\infty)$ and
$\rho_\beta=e^{-\beta A}/Z_\beta$ is a faithful normal density; every normal
density of finite absolute spectral form energy satisfies
$\mathcal E_A(\rho)-TS(\rho)\ge F_\beta$, with equality exactly at
$\rho=\rho_\beta$. The theorem assumes AC. Under these conditions, for each
$\beta>0$ J$^{-1}$ the model state is
$\rho_\beta=e^{-\beta E_*h}/Z_\beta$, with $0<Z_\beta<\infty$, and the
stated free-energy inequality holds for every normal density $\rho$ whose
spectral law $\mu_\rho(C)=\operatorname{Tr}(\rho E_H(C))$ has finite first
absolute moment $\int|\lambda|\,d\mu_\rho(\lambda)<\infty$. The energy
$\mathcal E_H(\rho)=\int\lambda\,d\mu_\rho(\lambda)$ and free energy are in
joules, entropy $S(\rho)$ is in joules per kelvin, and $T>0$ is in kelvin.
The conditional result is for the selected fixed finite-mode form
realization. It asserts no cutoff removal or empirical realization.

## Facts & Assumptions

**Given:** AC, Countable Choice, finite $r\ge1$, coercive polynomial data
and selected form realization as in the regulated-model definition, energy
scale $E_*>0$ J, and temperature parameter $\beta>0$ J$^{-1}$.

[F1] [[thm-qft-regulated-gibbs-trace]]: for the self-adjoint lower-bounded
finite polynomial form realization, $e^{-b h}$ is positive trace class with
finite positive trace for every $b>0$.

[F2] [[def-qsm-relative-entropy-domain]]: for a trace-class density with
positive eigenvalues $p_i$, spectral entropy is
$S(\rho)=-k_B\sum_i p_i\log p_i$, possibly infinite; the logarithm is
natural and acts on dimensionless density eigenvalues.

[A1] [[post-qsm-thermal-gibbs-preparation]] (current batch-36 draft): for
$T>0$, $\beta=(k_BT)^{-1}$ and the canonical trace-Gibbs density is adopted
when the stated open-interval trace hypotheses hold. This is a preparation
assumption, not thermalization.

[A2] [[thm-qsm-trace-gibbs-variational]] (current batch-36 draft): assume
AC, a nonzero separable Hilbert space, self-adjoint lower-bounded $H$ and
trace class $e^{-\beta H}$ for $\beta$ in an open positive interval. Then
each normal density of finite absolute spectral form energy has finite
entropy and satisfies $\mathcal E_H(\rho)-TS(\rho)\ge F_\beta$, with
equality exactly at the normalized Gibbs density.

[A3] [[post-qsm-normal-measurement-state]] (current batch-36 draft): a
prepared normal state is a trace-class density on a specified separable
Hilbert space, and a sharp self-adjoint measurement with spectral PVM $E_A$
assigns $\mathbb P_\rho\{A\in C\}=\operatorname{Tr}(\rho E_A(C))$.
Algebraic states are not identified with normal states by this postulate.

[A4] [[def-axiom-of-choice]]: assume AC, as required by [A2].

## Proof

1.1 The selected form realization in the model is self-adjoint and bounded
below; write its lower bound as $h\ge-C_0I$. Multiplication by $E_*>0$
preserves self-adjointness and gives $H=E_*h\ge-E_*C_0I$. Theorem [F1]
applies at $b=\beta E_*>0$, yielding
$0<Z_\beta=\operatorname{Tr}(e^{-\beta H})<\infty$ and a positive
trace-class numerator. Dividing by $Z_\beta$ produces a positive
trace-class operator of trace one. [given, F1, algebra]

2.1 Since the same trace finiteness holds for every $b>0$ by [F1] and AC is
assumed explicitly by [A4], the map
$e^{-\beta H}$ is trace class for every $\beta>0$; in particular it is
trace class on an open interval around the chosen positive $\beta$. The
entropy notation for normal densities is fixed by [F2]. The model, units,
and this normal density meet the hypotheses in [A2] under its
stated AC and finite-form-energy competitor conditions. Substitution into
that conditional variational theorem gives the free-energy inequality and
uniqueness on exactly that competitor domain. [given, A2, A4, F1, F2,
step 1.1]

3.1 Under the preparation assumptions [A1] and [A3], the density obtained
in step 1.1 supplies the stipulated normal Born predictions for each
declared sharp measurement with spectral PVM. The batch-36 postulates remain adopted draft physical premises; this conditional argument does not establish native readiness or empirical validity for them. Neither
[A1] nor [A2] asserts a physical process that drives states to the Gibbs
density. [A1, A2, A3, step 1.1] ∎

## Supplier adoption status

The three batch-36 interfaces match the conditional uses above. The trace-Gibbs theorem now cites the exact canonical fixed-temperature trace-Gibbs model and summable canonical differentiation carriers, replacing the historical M33/M16 research placeholders. This supplies its mathematical normalization, discrete spectral and local moment-envelope clauses without extending the finite-form-energy competitor domain. The preparation and normal Born interpretations remain explicit physical assumptions. Native review, input rebinding and readiness are separate obligations; this source adoption is not acceptance.
