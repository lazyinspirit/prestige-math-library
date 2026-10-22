---
id: pthm-qsm-gibbs-energy-entropy
kind: physics-theorem
title: Gibbs energy, entropy and potential identities
status: published
origin: pipeline
domain: physics
library: physics
dependency_level: 6
physical_scope: Canonical preparation identities for finite Hamiltonians or trace-class self-adjoint Gibbs operators with finite form energy; adopted thermodynamic identification only, with no empirical claim.
deps:
  - def-axiom-of-choice
  - post-qsm-thermal-gibbs-preparation
  - thm-qsm-finite-gibbs-variational
  - thm-qsm-trace-gibbs-variational
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  post-qsm-thermal-gibbs-preparation: physical-assumption
  thm-qsm-finite-gibbs-variational: mathematical-premise
  thm-qsm-trace-gibbs-variational: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: John Watrous, The Theory of Quantum Information, Chapter 5, §§5.1–5.2, author-hosted manuscript
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.5.pdf
    - title: Mehran Kardar, Statistical Mechanics I, MIT OpenCourseWare, Lecture 21, Quantum Microstates and Quantum Macrostates
      url: https://live.ocw.mit.edu/courses/8-333-statistical-mechanics-i-statistical-mechanics-of-particles-fall-2013/4f8defd6fcba707a0c691dd8957a43e3_MIT8_333F13_Lec21.pdf
---

## Statement

Under the adopted canonical preparation [[post-qsm-thermal-gibbs-preparation]], let $k_B>0$ and $\beta=1/(k_BT)>0$, with $\beta$ in J$^{-1}$, $H$ in J, $T$ in K, $k_B$ in J/K, entropy in J/K, and free energy in J. In a finite-dimensional model on a Hilbert space of dimension $d\geq1$, for $\sigma=e^{-\beta H}/Z_\beta$, $U=\operatorname{Tr}(\sigma H)$, and $F_\beta=-\beta^{-1}\log Z_\beta$,
$
S(\sigma)=k_B(\log Z_\beta+\beta U),\qquad F_\beta=U-TS(\sigma).
$
The same identities hold for a self-adjoint Hamiltonian bounded below when its Gibbs exponential is trace class on an open positive-$\beta$ interval and the state has the finite form energy required by [[thm-qsm-trace-gibbs-variational]]. These are mathematical model identities under an adopted preparation rule; they do not establish that a physical system is equilibrated.

## Facts & Assumptions

**Given:** The Axiom of Choice; $k_B>0$; the canonical preparation postulate; and either a finite Hermitian energy matrix on a space of dimension $d\geq1$ or a self-adjoint bounded-below $H$ with the actual trace-class/open-interval and finite-form-energy hypotheses.

[A1] [[def-axiom-of-choice]]: full Choice is retained for the unbounded spectral-theorem branch.

[F1] [[post-qsm-thermal-gibbs-preparation]]: the adopted canonical state is $e^{-\beta H}/Z_\beta$, with $\beta=1/(k_BT)$ and $H$ an energy observable.

[F2] [[thm-qsm-finite-gibbs-variational]]: for finite $H$, the Gibbs state has entropy $k_B(\log Z+\beta\operatorname{Tr}(\sigma H))$ and free energy $F_\beta=\operatorname{Tr}(\sigma H)-TS(\sigma)$.

[F3] [[thm-qsm-trace-gibbs-variational]]: under the stated self-adjoint, lower-bound, trace-class/open-interval, Choice, and finite form-energy conditions, the Gibbs state has finite entropy and obeys $S(\rho_\beta)=k_B(\log Z_\beta+\beta\mathcal E_H(\rho_\beta))$.

## Proof

1.1 In finite dimension, [F2] gives $S(\sigma)=k_B(\log Z_\beta+\beta U)$. Multiplying by $T$ and using $k_BT=\beta^{-1}$ gives $TS=\beta^{-1}\log Z_\beta+U$; since $F_\beta=-\beta^{-1}\log Z_\beta$, rearrangement yields $F_\beta=U-TS$. The units match: both $U$ and $TS$ are joules. [given, F1, F2, algebra]

2.1 In the self-adjoint trace-class case, [F3] supplies the entropy identity with $U=\mathcal E_H(\rho_\beta)$, the scalar spectral first moment. The same multiplication by $T$ and rearrangement prove the displayed free-energy identity on this stated form-energy domain. No trace of an undefined unbounded product is used. [given, A1, F1, F3, algebra] ∎
