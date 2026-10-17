---
id: pthm-qsm-equilibrium-unitary-entropy
kind: physics-theorem
title: Unitary entropy and Gibbs equilibrium identities
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 6
physical_scope: Normal-state unitary model predictions and finite-dimensional canonical stationarity/KMS identity; no irreversible relaxation, infinite-volume KMS theorem, or apparatus claim.
deps:
  - def-axiom-of-choice
  - def-trace-class-operator
  - thm-trace-class-is-a-two-sided-banach-operator-ideal
  - thm-spectral-theorem-for-unbounded-self-adjoint-operators
  - def-unbounded-integral-against-a-pvm
  - thm-pvm-integral-is-a-star-homomorphism
  - supplier-nrqm-M9
  - post-qsm-normal-measurement-state
  - post-qsm-thermal-gibbs-preparation
  - lem-qsm-trace-state-calculus
  - lem-qsm-finite-gibbs-kms
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-trace-class-operator: mathematical-premise
  thm-trace-class-is-a-two-sided-banach-operator-ideal: mathematical-premise
  thm-spectral-theorem-for-unbounded-self-adjoint-operators: mathematical-premise
  def-unbounded-integral-against-a-pvm: mathematical-premise
  thm-pvm-integral-is-a-star-homomorphism: mathematical-premise
  supplier-nrqm-M9: mathematical-premise
  post-qsm-normal-measurement-state: physical-assumption
  post-qsm-thermal-gibbs-preparation: physical-assumption
  lem-qsm-trace-state-calculus: mathematical-premise
  lem-qsm-finite-gibbs-kms: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: John Watrous, The Theory of Quantum Information, Chapter 2, §§2.1–2.3, author-hosted manuscript
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.2.pdf
    - title: Alain Connes and Matilde Marcolli, Noncommutative Geometry, Quantum Fields and Motives, Chapter 3, §2.2, “The KMS condition”
      url: https://alainconnes.org/wp-content/uploads/bookwebfinal-2.pdf
      locator: Complete author-hosted book; Chapter 3, §§2.1–2.2, printed pp. 404–408, especially Definition 3.6 and equation (3.11).
---

## Statement

Assume the normal-state and canonical-preparation interpretations of [[post-qsm-normal-measurement-state]] and [[post-qsm-thermal-gibbs-preparation]], and model an isolated system on a separable complex Hilbert space $\mathcal H$ by the unitary evolution $U(t)=e^{-itH/\hbar}$ for real time $t$, where the self-adjoint Hamiltonian $H=H^*$ has energy units and $\hbar>0$ has action units. For every trace-class normal density $\rho$ on $\mathcal H$, the evolved state $U(t)\rho U(t)^*$ is a normal density and has the same von Neumann entropy, including when that entropy is $+\infty$. For finite-dimensional $\mathcal H$, at inverse-energy parameter $\beta>0$, the canonical density $\sigma_\beta=e^{-\beta H}/Z_\beta$ is stationary under this evolution and obeys the finite Gibbs KMS strip identity
$
F_{A,B}(t+i\beta\hbar)=\operatorname{Tr}(\sigma_\beta\alpha_t(B)A),\qquad
F_{A,B}(z)=\operatorname{Tr}(\sigma_\beta A\alpha_z(B)),\quad
\alpha_z(B)=e^{izH/\hbar}Be^{-izH/\hbar},
$
for bounded matrices $A,B$. These are deductions inside the specified model; they do not imply equilibration, entropy increase, or infinite-volume KMS existence.

## Facts & Assumptions

**Given:** Full Choice as retained by the spectral suppliers; a separable Hilbert space $\mathcal H$, a trace-class density, a self-adjoint Hamiltonian $H$ with energy units, real time $t$, and positive action unit $\hbar$; the adopted normal-state interpretation; and, for the KMS clause, finite dimension with inverse-energy parameter $\beta>0$.

[A1] [[def-axiom-of-choice]]: full Choice is retained by the unbounded spectral and trace-state supplier closure.

[F1] [[post-qsm-normal-measurement-state]]: prepared states are trace-class densities on a specified separable Hilbert space, with the stated probability interpretation.

[F2] [[post-qsm-thermal-gibbs-preparation]]: in the finite canonical model, the adopted preparation is $e^{-\beta H}/\operatorname{Tr}(e^{-\beta H})$.

[F3] [[lem-qsm-trace-state-calculus]]: a trace-class density has a finite or countable positive spectral-weight list; its entropy is the corresponding nonnegative sum, possibly infinite.

[F4] [[lem-qsm-finite-gibbs-kms]]: for finite Hermitian $H$, the unitary is $e^{-itH/\hbar}$, the Gibbs state is stationary, and the stated analytic strip boundary identity holds for bounded matrices.

[F5] [[thm-trace-class-is-a-two-sided-banach-operator-ideal]]: multiplication of a trace-class operator on either side by a bounded operator preserves trace class.

[F6] [[thm-spectral-theorem-for-unbounded-self-adjoint-operators]], [[def-unbounded-integral-against-a-pvm]], and [[thm-pvm-integral-is-a-star-homomorphism]]: the self-adjoint $H$ has a spectral PVM $E_H$; bounded Borel functions define bounded spectral integrals, and the integral preserves products, conjugation, and the constant function. Thus for $f_t(\lambda)=e^{-it\lambda/\hbar}$, $U(t)=f_t(E_H)$ satisfies $U(t)^*U(t)=U(t)U(t)^*=I$, since $\overline{f_t}f_t=1$.

[L1] [[supplier-nrqm-M9]]: for trace-class $T$ and bounded $B$ on a nonzero separable complex Hilbert space, $\operatorname{tr}(BT)=\operatorname{tr}(TB)$, proved first for nuclear rank-one terms and then by trace-norm convergence. The same research result defines the separable partial trace by trace pairing and proves positivity, trace preservation, and basis independence; those clauses are not used here. The complete M9 argument is research prose, not a production item or independent acceptance receipt.

## Proof

1.1 By [F6], the bounded Borel function $f_t(\lambda)=e^{-it\lambda/\hbar}$ defines a unitary $U(t)=f_t(E_H)$ for each real $t$. By [F3], write $\rho=\sum_jp_j|u_j\rangle\langle u_j|$ in trace norm, with $p_j>0$, orthonormal $u_j$, and $\sum_jp_j=1$. Since $U(t)$ is bounded, [F5] preserves trace class under $U(t)\rho U(t)^*$. Its quadratic forms are nonnegative because $\langle U\rho U^*v,v\rangle=\langle \rho U^*v,U^*v\rangle\geq0$. The bounded cyclic trace identity [L1] gives $\operatorname{Tr}(U\rho U^*)=\operatorname{Tr}(\rho U^*U)=1$. The vectors $Uu_j$ are orthonormal eigenvectors with the same eigenvalues $p_j$; the orthogonal complement of their span is the conjugated kernel. Therefore the entropy sum is termwise identical to that of $\rho$. Since all summands are nonnegative, the equality also holds when the sum is $+\infty$. This mathematical statement is interpreted under [F1]. [given, A1, F1, F3, F5, F6, L1, algebra]

2.1 In finite dimension, apply [F4] to the canonical state from [F2]; it gives stationarity and the analytic strip identity under the exact bounded-matrix hypotheses. The entropy invariance in step 1.1 also applies to this finite Gibbs state. The conclusions are conditional predictions of this unitary model, with no claim that a system reaches the canonical state dynamically. [given, step 1.1, F2, F4] ∎
