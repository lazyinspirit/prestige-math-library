---
id: thm-qsmx-finite-modular-density
kind: theorem
title: Faithful matrix modular flow and Gibbs time
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 5
physical_scope: null
deps:
  - def-qsmx-standard-modular-data
  - def-qsmx-von-neumann-algebra
  - thm-double-commutant-theorem-for-concrete-von-neumann-algebras
  - lem-qsm-matrix-state-calculus
  - def-qsm-density-trace-state
  - def-qsm-kms-state
  - def-axiom-of-choice
dependency_roles:
  def-qsmx-standard-modular-data: mathematical-premise
  def-qsmx-von-neumann-algebra: mathematical-premise
  thm-double-commutant-theorem-for-concrete-von-neumann-algebras: mathematical-premise
  lem-qsm-matrix-state-calculus: mathematical-premise
  def-qsm-density-trace-state: mathematical-premise
  def-qsm-kms-state: mathematical-premise
  def-axiom-of-choice: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Edward Witten, Notes on Some Entanglement Properties of Quantum Field Theory
      url: https://arxiv.org/pdf/1803.04993
      locator: §4.1, equations (4.4)–(4.14), printed pp. 33–35 (PDF pp. 34–36)
    - title: F. Hiai, Concise lectures on selected topics of von Neumann algebras
      url: https://arxiv.org/pdf/2004.02383
      locator: §2.1, Example 2.4 and §2.2, Theorem 2.14, printed pp. 11 and 18
---
## Statement

Assume the Axiom of Choice. Let $n\geq1$, let $\mathcal H=\mathbb C^n$, and let $\rho$ be a positive-definite Hermitian matrix, meaning $\langle\rho v,v\rangle>0$ for each nonzero $v\in\mathcal H$, with $\operatorname{Tr}\rho=1$. Write $\mathcal H_{\rm HS}=M_n(\mathbb C)$ with inner product $\langle X,Y\rangle_{\rm HS}=\operatorname{Tr}(Y^*X)$, linear in the first argument, and let $M_n(\mathbb C)$ act on $\mathcal H_{\rm HS}$ by left multiplication. For $\Omega=\rho^{1/2}$, the standard modular data are
$$JX=X^*,\qquad \Delta X=\rho X\rho^{-1},\qquad \sigma_t(A)=\rho^{it}A\rho^{-it}\quad(A\in M_n(\mathbb C),\ t\in\mathbb R).$$
The vector state of $\Omega$ is $\omega(A)=\operatorname{Tr}(\rho A)$. If $H=H^*$ has energy unit joules, $\beta>0$ has unit joules$^{-1}$, $\hbar>0$ has unit joule-seconds, and $\rho=e^{-\beta H}/Z$ with $Z=\operatorname{Tr}(e^{-\beta H})$, then the physical-time dynamics
$$\alpha_s(A)=e^{isH/\hbar}Ae^{-isH/\hbar}\quad(s\text{ in seconds})$$
satisfies
$$\alpha_s=\sigma_{-s/(\beta\hbar)}.$$
On the finite-dimensional C$^*$-algebra $M_n(\mathbb C)$, $\omega$ is a $\beta$-KMS state for $\alpha$ in the physical-time convention of the stated KMS definition, with strip width $\beta\hbar$ seconds. If $\beta=(k_BT)^{-1}$, then $k_B$ has units joules per kelvin and $T$ has units kelvins.

## Statement references

[[def-qsmx-standard-modular-data]]

[[def-qsmx-von-neumann-algebra]]

[[lem-qsm-matrix-state-calculus]]

[[def-qsm-density-trace-state]]

[[def-qsm-kms-state]]

[[def-axiom-of-choice]]

## Facts & Assumptions

**Given:** The Axiom of Choice, $n\geq1$, a positive-definite Hermitian $\rho\in M_n(\mathbb C)$ with trace one, and, for the Gibbs clause, a Hermitian $H$, $\beta>0$, and $\hbar>0$ with the units in the Statement.

[A1] Assume the Axiom of Choice ([[def-axiom-of-choice]]).

[F1] Hermitian matrices have orthonormal eigenbases; the positive square root and matrix powers are defined spectrally; finite trace is cyclic; and the density pairing is $\operatorname{Tr}(\rho A)$ ([[lem-qsm-matrix-state-calculus]], [[def-qsm-density-trace-state]]).

[F2] A concrete von Neumann algebra is a unital star subalgebra satisfying the double-commutant condition; under Choice, weak-operator closure is equivalent to that condition ([[def-qsmx-von-neumann-algebra]], [[thm-double-commutant-theorem-for-concrete-von-neumann-algebras]]).

[F3] The physical-time KMS boundary convention requires bounded strip functions with $F(t)=\omega(A\alpha_t(B))$ and $F(t+i\beta\hbar)=\omega(\alpha_t(B)A)$ ([[def-qsm-kms-state]]).

## Proof

**Given:** [A1], [F1]–[F3], the finite-dimensional Hilbert space, and the matrices in the Statement.

1.1 Let $M=\{L_A:A\in M_n(\mathbb C)\}$ on $\mathcal H_{\rm HS}$, where $L_A X=AX$. The Hilbert-Schmidt adjoint satisfies $L_A^*=L_{A^*}$, so $M$ is a unital star subalgebra. The ambient operator space $\mathcal B(\mathcal H_{\rm HS})$ is finite dimensional; hence $M$ is weak-operator closed. By [F2], $M$ is a concrete von Neumann algebra. Since $\rho^{1/2}$ is invertible, every $X\in\mathcal H_{\rm HS}$ equals $L_{X\rho^{-1/2}}\Omega$, so $\Omega$ is cyclic. If $L_A\Omega=0$, then $A\rho^{1/2}=0$ and invertibility gives $A=0$, so $\Omega$ is separating. Finally, $$\langle L_A\Omega,\Omega\rangle_{\rm HS}=\operatorname{Tr}(\rho^{1/2}A\rho^{1/2})=\operatorname{Tr}(\rho A),$$ using finite trace cyclicity. [A1, F1, F2, given, construct]

1.2 For $A,B\in M_n(\mathbb C)$ define $$F_{A,B}(z)=\operatorname{Tr}\!\left(\rho A e^{izH/\hbar}Be^{-izH/\hbar}\right).$$ Finite matrix exponentials are entire, so $F_{A,B}$ is entire. If $0\leq\operatorname{Im}z\leq\beta\hbar$, the real-time factors are unitary and the two imaginary-time factors have norms at most $e^{\beta\|H\|}$ each. Since $\|\rho\|_1=1$, $|F_{A,B}(z)|\leq\|A\|\|B\|e^{2\beta\|H\|}$ uniformly on that strip. The group $\alpha_s$ is norm-continuous because its matrix entries are continuous. [F1, F3, given, algebra]

2.1 Choose an orthonormal eigenbasis of $\rho$, with eigenvalues $p_j>0$, and write $E_{ij}=|i\rangle\langle j|$. Then $E_{ij}\Omega=\sqrt{p_j}E_{ij}$ and $E_{ij}^*\Omega=\sqrt{p_i}E_{ji}$, whence $S(E_{ij})=\sqrt{p_i/p_j}\,E_{ji}$. The maps $JX=X^*$ and $\Delta X=\rho X\rho^{-1}$ satisfy $J\Delta^{1/2}E_{ij}=\sqrt{p_i/p_j}\,E_{ji}$ and $\Delta E_{ij}=(p_i/p_j)E_{ij}$. Thus $S=J\Delta^{1/2}$ on a basis, so uniqueness of the polar decomposition gives the stated modular data. [F1, step 1.1, algebra]

3.1 For $X\in\mathcal H_{\rm HS}$, $$\Delta^{it}L_A\Delta^{-it}X=\rho^{it}A\rho^{-it}X,$$ because $\Delta^{-it}X=\rho^{-it}X\rho^{it}$ and the final right factor $\rho^{it}$ cancels $\rho^{-it}$. Hence $\sigma_t(A)=\rho^{it}A\rho^{-it}$. [step 2.1, algebra]

4.1 For $\rho=e^{-\beta H}/Z$, functional calculus gives $\rho^{it}=Z^{-it}e^{-i\beta tH}$; the scalar factor cancels in conjugation. Substituting $t=-s/(\beta\hbar)$ into step 3.1 yields $\sigma_{-s/(\beta\hbar)}(A)=e^{isH/\hbar}Ae^{-isH/\hbar}=\alpha_s(A)$. Here $\beta\hbar$ has units seconds, so the modular parameter is dimensionless. [given, step 3.1, algebra]

5.1 At $z=t+i\beta\hbar$, write $U=e^{itH/\hbar}$. Since $U$ commutes with $e^{\pm\beta H}$, $$F_{A,B}(t+i\beta\hbar)=Z^{-1}\operatorname{Tr}\!\left(e^{-\beta H}A e^{-\beta H}\alpha_t(B)e^{\beta H}\right) =Z^{-1}\operatorname{Tr}\!\left(Ae^{-\beta H}\alpha_t(B)\right) =\operatorname{Tr}\!\left(\rho\alpha_t(B)A\right).$$ The middle equality cycles $e^{\beta H}$ past the trace, and the last cycles $A$ past the trace. The lower boundary is $F_{A,B}(t)=\operatorname{Tr}(\rho A\alpha_t(B))$. Thus [F3] gives the physical-time $\beta$-KMS condition with width $\beta\hbar$. [F1, F3, step 1.2, algebra] ∎
