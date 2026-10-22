---
id: pthm-nrqmx-amplitude-damping-model
kind: physics-theorem
title: Amplitude damping with operational time units
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 1
deps:
  - post-nrqmx-finite-open-model
  - def-qsm-dt-gksl-definition
  - def-qsm-dt-channel-definition
  - thm-qsm-dt-gksl-sufficient
  - cor-finite-dimensional-normed-spaces-are-banach
  - lem-qsm-dt-finite-matrix-trace-ideal
  - lem-exponential-series-of-a-bounded-operator
  - def-complex-exponential
  - thm-complex-exponential-addition-and-real-extension
dependency_roles:
  post-nrqmx-finite-open-model: physical-assumption
  def-qsm-dt-gksl-definition: mathematical-premise
  def-qsm-dt-channel-definition: mathematical-premise
  thm-qsm-dt-gksl-sufficient: mathematical-premise
  cor-finite-dimensional-normed-spaces-are-banach: mathematical-premise
  lem-qsm-dt-finite-matrix-trace-ideal: mathematical-premise
  lem-exponential-series-of-a-bounded-operator: mathematical-premise
  def-complex-exponential: mathematical-premise
  thm-complex-exponential-addition-and-real-extension: mathematical-premise
proof_strategy: direct
physical_scope: "The exact finite-dimensional qubit time-homogeneous GKSL model with one amplitude-damping jump operator. The formulas are conditional model predictions; no vacuum continuum, reservoir limit, detector record, or empirical decay rate is asserted."
empirical_premises: []
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Lin Lin and Nathan Wiebe, Quantum Algorithms for Scientific Computation, Chapter 21, §21.1"
      url: "https://math.berkeley.edu/~linlin/qasc/live_notes_0315.pdf"
      locator: "Equations (21.1)–(21.5), printed pp. 307–308, and Theorem 21.2, printed pp. 309–311: finite GKSL channel semigroups."
---

## Statement

For the separately selected qubit GKSL model, let $H=\hbar\omega|1\rangle\langle1|$ with $\omega\in\mathbb R$ in $\mathrm{s}^{-1}$ and $\hbar>0$ in joule-seconds, and let $L=\sqrt{\gamma}|0\rangle\langle1|$ with $\gamma\geq0$ in $\mathrm{s}^{-1}$, so $L$ has units $\mathrm{s}^{-1/2}$. For any initial density matrix $\rho(0)$ in the ordered basis $(|0\rangle,|1\rangle)$, the solution $\rho(t)=e^{t\mathcal L}\rho(0)$ for $t\geq0$ satisfies $\rho_{11}(t)=e^{-\gamma t}\rho_{11}(0)$, $\rho_{00}(t)=\rho_{00}(0)+(1-e^{-\gamma t})\rho_{11}(0)$, $\rho_{01}(t)=e^{(i\omega-\gamma/2)t}\rho_{01}(0)$, and $\rho_{10}(t)=e^{(-i\omega-\gamma/2)t}\rho_{10}(0)$.

## Statement references

[[post-nrqmx-finite-open-model]]

[[def-qsm-dt-gksl-definition]]

[[thm-qsm-dt-gksl-sufficient]]

[[cor-finite-dimensional-normed-spaces-are-banach]]

[[lem-qsm-dt-finite-matrix-trace-ideal]]

[[lem-exponential-series-of-a-bounded-operator]]

[[def-complex-exponential]]

[[thm-complex-exponential-addition-and-real-extension]]

## Facts & Assumptions

**Given:** The selected finite GKSL model, $\omega\in\mathbb R$, $\gamma\geq0$, and a qubit density matrix $\rho(0)$.

[A1] [[post-nrqmx-finite-open-model]]: the time-homogeneous finite GKSL equation is a separately adopted approximation, not inferred from the finite system-environment reduction; its time parameter $t$ is elapsed physical time measured in seconds, so $t\mathcal L$ is dimensionless.

[F1] [[def-qsm-dt-gksl-definition]]: $\mathcal L(X)=-\frac{i}{\hbar}[H,X]+LXL^*-\frac12\{L^*L,X\}$ for the single-jump case.

[F2] [[cor-finite-dimensional-normed-spaces-are-banach]] and [[lem-exponential-series-of-a-bounded-operator]]: the finite matrix space is complete and the bounded-operator exponential is its norm-convergent power series.

[F3] [[def-complex-exponential]]: $\exp z=\sum_{n=0}^{\infty}z^n/n!$ for $z\in\mathbb C$.

[F4] [[lem-qsm-dt-finite-matrix-trace-ideal]]: $\|AXB\|_1\leq\|A\|\,\|X\|_1\,\|B\|$ for finite matrices.

[F5] [[thm-qsm-dt-gksl-sufficient]]: $e^{t\mathcal L}$ is a finite channel for every $t\geq0$.

[F6] [[def-qsm-dt-channel-definition]]: a finite channel is completely positive and trace-preserving on all matrix inputs.

[F7] [[thm-complex-exponential-addition-and-real-extension]]: on real arguments, the complex exponential agrees with the real exponential $e^x$.

## Proof

**Proof technique:** compute powers of the finite GKSL generator on the four matrix units, then sum its defining exponential series.

1.1 Write $E_{jk}=|j\rangle\langle k|$, $j,k\in\{0,1\}$, so $I=E_{00}+E_{11}$. In this basis, $H=\operatorname{diag}(0,\hbar\omega)$, $L=\sqrt\gamma E_{01}$, and $L^*L=\gamma E_{11}$. Direct multiplication in [F1] gives $\mathcal L(E_{00})=0$, $\mathcal L(E_{11})=\gamma(E_{00}-E_{11})$, $\mathcal L(E_{01})=(i\omega-\gamma/2)E_{01}$, and $\mathcal L(E_{10})=(-i\omega-\gamma/2)E_{10}$. [given, A1, F1, algebra]

2.1 The matrix space is finite-dimensional and complete by [F2]. The trace-ideal estimate [F4] applied to the finitely many left and right multiplications in [F1] bounds $\|\mathcal L(X)\|_1$ by a finite constant times $\|X\|_1$, so $\mathcal L$ is bounded; [F2] therefore gives $e^{t\mathcal L}=\sum_{n\geq0}t^n\mathcal L^n/n!$. Put $D=E_{00}-E_{11}$. Step 1.1 gives $\mathcal L(D)=-\gamma D$ and $\mathcal L(E_{11})=\gamma D$; induction therefore gives $\mathcal L^n(E_{11})=\gamma(-\gamma)^{n-1}D$ for $n\geq1$. Summing this scalar series using [F3] and the real-extension clause [F7] yields $e^{t\mathcal L}(E_{11})=E_{11}+(1-e^{-\gamma t})D$, including $\gamma=0$ because both the added coefficient and every positive power term then vanish. Also step 1.1 gives $\mathcal L^n(E_{00})=0$ for $n\geq1$, while the two coherence matrix units are eigenvectors, so [F3] gives $e^{t\mathcal L}(E_{01})=e^{(i\omega-\gamma/2)t}E_{01}$ and $e^{t\mathcal L}(E_{10})=e^{(-i\omega-\gamma/2)t}E_{10}$. Applying these four identities linearly to $\rho(0)=\sum_{j,k}\rho_{jk}(0)E_{jk}$ gives all four formulas in the Statement. [F1, F2, F3, F4, F7, step 1.1, algebra]

3.1 By [F5] and [F6], the full evolution map is completely positive and trace-preserving for $t\geq0$, so it carries each initial density matrix to a density matrix. These formulas are deductions within the selected approximation and assert no microscopic bath limit. [A1, F5, F6, step 2.1] ∎

## Remarks

The parameter $\gamma$ is a model rate. Its numerical value and the regime in which this generator approximates a physical system must be supplied by a specific application; no measurement or statistical estimate is asserted here.
