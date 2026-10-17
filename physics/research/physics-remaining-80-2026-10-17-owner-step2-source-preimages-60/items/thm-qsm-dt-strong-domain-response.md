---
id: thm-qsm-dt-strong-domain-response
kind: theorem
title: Bounded-commutator graph-domain Schrödinger response
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
dependency_level: 2
deps:
  - def-axiom-of-choice
  - def-symmetric-self-adjoint-and-essentially-self-adjoint
  - lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group
  - lem-qsm-dt-banach-volterra-dyson
  - thm-qsm-dt-normal-state-kubo
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group: mathematical-premise
  lem-qsm-dt-banach-volterra-dyson: mathematical-premise
  thm-qsm-dt-normal-state-kubo: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Steven H. Simon, Lecture Notes for Quantum Matter, Chapter 8 §8.2, printed pp. 118–122
      url: https://www-thphys.physics.ox.ac.uk/people/SteveSimon/QCM2023/QuantumMatter.pdf
    - title: Ryogo Kubo, Statistical-Mechanical Theory of Irreversible Processes I, Journal of the Physical Society of Japan 12 (1957), §2, printed pp. 572–575
      url: https://staff.ulsu.ru/moliver/ref/kubo/kubo57.pdf
---

## Statement

Assume the Axiom of Choice. Let $\mathcal H\ne\{0\}$ be separable, $H=H^*$ a densely defined Hamiltonian on $D(H)$ with unit J, $\hbar>0$ with unit J s, $\rho$ a positive trace-class density with $\operatorname{Tr}\rho=1$ and $\rho U_0(t)=U_0(t)\rho$, and $A=A^*\in\mathcal B(\mathcal H)$. Let $B=B^*\in\mathcal B(\mathcal H)$ with unit $[B]$. Assume $B(D(H))\subseteq D(H)$ and that $[H,B]\psi=HB\psi-BH\psi$ on $D(H)$ extends to a bounded operator $C$ on $\mathcal H$. Let $h:[0,T]\to\mathbb R$ be continuous for finite $T>0$ with $h(t)B$ in J, and let $\epsilon\in\mathbb R$ be dimensionless. Then the bounded-observable response and remainder from [[thm-qsm-dt-normal-state-kubo]] hold. In addition, with $U_0(t)=e^{-itH/\hbar}$, $B_t=U_0(t)^*BU_0(t)$, and $W_\epsilon'(t)=i\epsilon h(t)B_tW_\epsilon(t)/\hbar$, $W_\epsilon(0)=I$, the interaction-picture propagator maps $D(H)$ onto itself, and
$$\Psi(t)=U_0(t)W_\epsilon(t)\psi$$
is a strong solution in $\mathcal H$ of $i\hbar\Psi'(t)=(H-\epsilon h(t)B)\Psi(t)$ for each $\psi\in D(H)$. No domain-preservation claim is made for a general bounded $B$ without the stated commutator hypothesis.

## Facts & Assumptions

**Given:** The Axiom of Choice; self-adjoint $H$; bounded self-adjoint $B$ preserving $D(H)$; bounded extension $C$ of $[H,B]$; continuous real $h$; and the trace-class response inputs from [[thm-qsm-dt-normal-state-kubo]].

[A1] [[def-axiom-of-choice]]: full Choice is assumed by the unbounded spectral calculus and carried from the normal-state response theorem.

[F1] [[thm-qsm-dt-normal-state-kubo]]: for bounded observables and a trace-class density commuting with $U_0(t)$, the response formula holds with the stated finite-time remainder, without an energy or entropy moment assumption.

[F2] [[lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group]]: $U_0(t)$ is strongly continuous, preserves $D(H)$, and differentiates there; its parameter is rescaled by $-t/\hbar$ from the supplier's $e^{isH}$ convention.

[F3] [[def-symmetric-self-adjoint-and-essentially-self-adjoint]]: a self-adjoint operator is densely defined, closed, and equals its adjoint.

[F4] [[lem-qsm-dt-banach-volterra-dyson]]: on any complete normed space, a strongly continuous bounded coefficient has a unique norm-convergent Volterra solution; the same construction applies to the graph norm once that space is shown complete.

## Proof


**Proof technique:** construct the control evolution on the graph Banach space, then differentiate the Schrödinger-picture product.

**Given:** [A1], [F1]–[F4] and the domain/commutator hypotheses in the Statement.

1.1 Define $\|\psi\|_G=\|\psi\|+\|H\psi\|/E_0$ on $D(H)$ for a fixed reference energy $E_0>0$ J. If $(\psi_n)$ is Cauchy in this norm, then $\psi_n\to\psi$ and $H\psi_n\to\xi$ in $\mathcal H$; closedness of $H$ from [F3] gives $\psi\in D(H)$ and $H\psi=\xi$, so the graph norm is complete. [given, F3, construct]


2.1 For $B_t=U_0(t)^*BU_0(t)$ and $\psi\in D(H)$, invariance and commutation in [F2] give $HB_t\psi=B_tH\psi+U_0(t)^*CU_0(t)\psi$. Hence $B_t$ is uniformly bounded on the graph space by a constant depending only on $\|B\|,\|C\|,E_0$. To check graph-norm continuity at $t_0$, the Hilbert-norm part follows from strong continuity of $U_0$; for the $H$-part use the displayed identity and continuity of $t\mapsto B_tH\psi$ and $t\mapsto U_0(t)^*CU_0(t)\psi$. The latter follows from $$\|U_0(t)^*CU_0(t)\psi-U_0(t_0)^*CU_0(t_0)\psi\|\le\|C\|\|U_0(t)\psi-U_0(t_0)\psi\|+\|(U_0(t)^*-U_0(t_0)^*)CU_0(t_0)\psi\|,$$ whose two terms tend to zero by strong continuity of $U_0$ and the group law. [given, F2, step 1.1, algebra]


3.1 Apply [F4] on the graph Banach space with coefficient $K_t=i h(t)B_t/\hbar$; its Volterra series defines $W_\epsilon(t)$ on $D(H)$. For any $y\in D(H)$, solve the reversed-time graph equation $z'(s)=-\epsilon K_{t-s}z(s)$ with $z(0)=y$ on $[0,t]$; then $x(s)=z(t-s)$ solves the forward equation and $W_\epsilon(t)x(0)=y$. Hence $W_\epsilon(t)D(H)=D(H)$. On the Hilbert space the same coefficient is skew-adjoint, and the Hilbert clause of [F4] gives the unitary propagator used in the Statement; uniqueness identifies both constructions. The domain-preservation conclusion therefore uses the full-Choice spectral group hypothesis [A1] together with [F2], [F4] and the commutator condition. [given, A1, F2, F4, step 1.1, step 2.1, algebra]


4.1 For $\psi\in D(H)$, graph-norm differentiability keeps $W_\epsilon(t)\psi$ in $D(H)$ and permits the product rule. Using $U_0(t)B_t=BU_0(t)$ and $i\hbar W_\epsilon'=-\epsilon h(t)B_tW_\epsilon$, we obtain $i\hbar\Psi'=H\Psi-\epsilon h(t)B\Psi$. For each fixed $t$, $H-\epsilon h(t)B$ is self-adjoint on $D(H)$: it is symmetric, and if $y\in D((H-\epsilon h(t)B)^*)$, subtracting the bounded $B$ term in the adjoint functional shows $y\in D(H^*)=D(H)$, proving equality of the adjoint domain. [F2, F3, step 3.1, algebra]


5.1 The trace-class response assertion is exactly [F1] under its stated density, stationarity, bounded-observable and control hypotheses; step 4.1 adds the strong Schrödinger realization only for the graph-domain class in this Statement. The two conclusions therefore retain their separate hypotheses. [F1, step 4.1] ∎