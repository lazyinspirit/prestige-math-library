---
id: ex-qsm-oscillator-trace-gibbs
kind: example
title: Oscillator trace Gibbs and divergent normalization
status: published
origin: pipeline
domain: physics
library: physics
dependency_level: 6
physical_scope: Exact canonical formulas for a one-mode diagonal oscillator model and a contrasting infinite-degeneracy model; no measured values or universal normalization claim.
deps:
  - def-axiom-of-choice
  - def-trace-class-operator
  - def-qsm-density-trace-state
  - def-qsm-relative-entropy-domain
  - post-qsm-thermal-gibbs-preparation
  - thm-qsm-trace-gibbs-variational
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-trace-class-operator: mathematical-premise
  def-qsm-density-trace-state: mathematical-premise
  def-qsm-relative-entropy-domain: mathematical-premise
  post-qsm-thermal-gibbs-preparation: physical-assumption
  thm-qsm-trace-gibbs-variational: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Mehran Kardar, Statistical Mechanics I, MIT OpenCourseWare, Lecture 21, Quantum Microstates and Quantum Macrostates
      url: https://live.ocw.mit.edu/courses/8-333-statistical-mechanics-i-statistical-mechanics-of-particles-fall-2013/4f8defd6fcba707a0c691dd8957a43e3_MIT8_333F13_Lec21.pdf
    - title: Mehran Kardar, Statistical Mechanics I, MIT OpenCourseWare, Lecture 23, Canonical and Grand Canonical Formulations
      url: https://live.ocw.mit.edu/courses/8-333-statistical-mechanics-i-statistical-mechanics-of-particles-fall-2013/97bfdfb93240e2f48984629ad0c037de_MIT8_333F13_Lec23.pdf
---

## Example

On $\ell^2(\mathbb N_0)$, take $(e_n)_{n\geq0}$ to be the standard orthonormal basis and define the oscillator Hamiltonian
$
He_n=\hbar\omega(n+\tfrac12)e_n,\qquad
D(H)=\left\{(c_n):\sum_{n\geq0}(n+\tfrac12)^2|c_n|^2<\infty\right\},
$
with $\omega>0$, $\hbar>0$. Its eigenvalues have units J. For $\beta>0$ in J$^{-1}$, put $x=\beta\hbar\omega$ and $r=e^{-x}$. The canonical trace and state are finite and
$
Z_\beta=\frac{e^{-x/2}}{1-e^{-x}},\qquad
U_\beta=\hbar\omega\left(\frac12+\frac{1}{e^x-1}\right),\qquad
S(\rho_\beta)=k_B\left[-\log(1-e^{-x})+\frac{x}{e^x-1}\right].
$
By contrast, on an infinite-dimensional $\ell^2$ space with $H=0$, $e^{-\beta H}=I$ is not trace class, so there is no normalized trace Gibbs density. The preparation in the first model is adopted by [[post-qsm-thermal-gibbs-preparation]]; no experiment is reported.

## Facts & Assumptions

**Given:** The specified diagonal operator, $\omega,\hbar,\beta>0$, $k_B>0$ in J/K, the canonical preparation rule, and the definitions of trace class and normal density.

[A1] [[def-axiom-of-choice]]: the general trace-Gibbs variational branch retains full Choice; the explicit diagonal construction itself uses the given countable basis.

[F1] [[def-trace-class-operator]]: a positive diagonal operator is trace class exactly when its nonnegative eigenvalue series is summable.

[F2] [[def-qsm-density-trace-state]]: a positive trace-class operator of trace one is a normal density state.

[F3] [[def-qsm-relative-entropy-domain]]: the von Neumann entropy is the spectral sum $-k_B\sum_np_n\log p_n$, with $0\log0=0$.

[F4] [[post-qsm-thermal-gibbs-preparation]]: an actually normalizable canonical model adopts $\rho_\beta=e^{-\beta H}/Z_\beta$.

[F5] [[thm-qsm-trace-gibbs-variational]]: under the self-adjoint, lower-bound, trace-class/open-$\beta$-interval and finite-energy hypotheses, the Gibbs density has the stated energy-entropy identity and variational meaning.

## Proof

1.1 Let $\lambda_n=\hbar\omega(n+\tfrac12)$. Finite-support vectors lie in $D(H)$, so the domain is dense. Since each $\lambda_n$ is real, the diagonal operator is symmetric. If $y\in D(H^*)$, there is $z\in\ell^2$ such that $\langle Hc,y\rangle=\langle c,z\rangle$ for every $c\in D(H)$. Testing $c=e_n$ gives $z_n=\lambda_ny_n$, so $(\lambda_ny_n)\in\ell^2$, which is exactly $y\in D(H)$. Conversely, if this sequence is square summable, Cauchy–Schwarz gives $\langle Hc,y\rangle=\langle c,(\lambda_ny_n)\rangle$ for every $c\in D(H)$. Thus $D(H^*)=D(H)$ and $H^*=H$. [given, algebra]

1.2 The diagonal exponential has eigenvalues $e^{-x(n+1/2)}$. The finite geometric sum identity and $r^n\to0$ give $\sum_{n\geq0}r^n=(1-r)^{-1}$, so $Z_\beta=e^{-x/2}/(1-r)<\infty$. Set $E_*:=\hbar\omega>0$ in J. For any compact inverse-energy interval $[b,B]\subset(0,\infty)$, the dimensionless terms $[1+(\lambda_n/E_*)^2]e^{-\beta\lambda_n}$ are bounded by $[1+(n+\tfrac12)^2]e^{-bE_*(n+1/2)}$. The ratio of consecutive terms of this last series tends to $e^{-bE_*}<1$, so it is summable. Since $y\leq1+y^2$ for $y\geq0$, this gives finite trace and first and second energy moments after multiplying the corresponding bounds by $E_*$ or $E_*^2$. Hence [F1] and [F2] make $\rho_\beta$ a normal density, and [F4] identifies it with the adopted canonical preparation. [given, F1, F2, F4, algebra]

2.1 The normalized weights are $p_n=(1-r)r^n$. Absolute convergence permits subtracting the two convergent series to get $(1-r)\sum_{n\geq0}nr^n=\sum_{n\geq1}r^n=r/(1-r)$; therefore $\sum n p_n=r/(1-r)$. This gives $U_\beta=\sum_np_n\lambda_n=\hbar\omega(\tfrac12+r/(1-r))$. Also $\log p_n=\log(1-r)+n\log r$, so summing $-k_Bp_n\log p_n$ using [F3] yields $S=k_B[-\log(1-r)-(\log r)r/(1-r)]=k_B[-\log(1-r)+xr/(1-r)]$. Replacing $r/(1-r)$ by $1/(e^x-1)$ gives the displayed formulas. The direct sums verify the moment hypotheses of [F5], whose energy-entropy identity agrees with this calculation. [given, A1, step 1.2, F3, F5, algebra]

3.1 For $H=0$ on an infinite-dimensional $\ell^2$, every basis vector is an eigenvector of $e^{-\beta H}=I$ with eigenvalue one. Their eigenvalue sum diverges, so [F1] says $I$ is not trace class. Its trace cannot be normalized to a finite partition function, establishing the contrasting failure without assuming a lower-bound-only Hamiltonian is normalizable. [given, F1, algebra] ∎
