---
id: pthm-qec-distinguishability-degenerate-null
kind: physics-theorem
domain: physics
title: Degenerate no-decay state is preserved
status: published
origin: session
deps:
  - pthm-qec-distinguishability-null-projection
  - pthm-qec-distinguishability-uniform-decay-rate
  - pthm-qec-distinguishability-short-time-kraus
  - lem-qec-prereq-trajectory-dyson-expansion
  - def-qec-prereq-finite-gksl-channel-interface
dependency_roles:
  pthm-qec-distinguishability-null-projection: physical-result
  pthm-qec-distinguishability-uniform-decay-rate: physical-result
  pthm-qec-distinguishability-short-time-kraus: physical-result
  lem-qec-prereq-trajectory-dyson-expansion: mathematical-premise
  def-qec-prereq-finite-gksl-channel-interface: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Monolithic Quantum Error Correction in the Presence of Distinguishability
      url: https://arxiv.org/abs/2609.26946
      locator: PDF p. 15, Eq. (S4.6) and following paragraph
      statement: In the degenerate case the article gives the first-order null
        numerator and says the normalized null state is the initial state, so a
        null measurement resets the checking clock.
      hypotheses: Initial state in one excited J manifold, the equal-rate model and
        the fast-check setting of Section S4.
      reading_limits: The supplied extracted article text at the cited passage was
        read for attribution. The article is not used as proof of the
        conditional deduction below.
physical_scope: Conditional prediction for the idealized finite-block equal-rate
  model and ideal projective checks; it is not a laboratory observation.
dependency_level: 19
---

## Statement

Adopt the finite lifted model and all physical, spectral and choice hypotheses of the first-order fast-check channel and uniform-decay result, including the Axiom of Choice, Countable Choice and Dependent Choice. Its orthonormal basis is $|J,m\rangle$ for integer $J=0,\ldots,N$ and $m=-J,\ldots,J$, with $N\geq1$ and decay-rate parameter $\gamma>0$. Set every lift $\Delta(J,m)$ to zero. Let $J_0\geq1$ be an available block, $P=\sum_{m=-J_0}^{J_0}|J_0,m\rangle\langle J_0,m|$, and let $\rho_0$ be a density operator supported on that block: $P\rho_0P=\rho_0$. A density operator is positive semidefinite with trace one.

Write $H$ for the model Hamiltonian, $L_\delta$ for its downward jumps, $V=-\frac12\sum_\delta L_\delta^\dagger L_\delta$, and $K_{\rm null}=I+\tau(-iH+V)$. Then $[H,\rho_0]=0$ and, as $\tau\downarrow0$ at fixed model parameters, $K_{\rm null}\rho_0K_{\rm null}^\dagger=(1-\gamma\tau)\rho_0+O(\tau^2)$ in matrix spectral norm. The normalized approximate null output equals $\rho_0$ whenever its trace is positive.

For the exact finite GKSL channel $\mathcal N_\tau$, an ideal projective check with null projector $P$ has unnormalized null output $P\mathcal N_\tau(\rho_0)P=e^{-\gamma\tau}\rho_0$ for every finite $\tau\geq0$. Its normalized null state is therefore exactly $\rho_0$. Repeating such checks after intervals of model evolution leaves the state unchanged on every all-null record; because the same time-homogeneous channel starts from the same state after each check, the checking clock can be reset. This is a conditional model prediction, not a claim of an observed measurement.

## Facts & Assumptions

[F1] In the finite model, $H=\sum_{J,m}[\omega_0J(J+1)+\Delta(J,m)]|J,m\rangle\langle J,m|$; each $L_\delta$ lowers $J$ by one and $H$ and $V$ are block diagonal. The model carries the physical, spectral and choice hypotheses stated above. [[pthm-qec-distinguishability-short-time-kraus]]

[F2] In the equal-rate benchmark, $V=-\frac\gamma2\sum_{J=1}^{N}\sum_m|J,m\rangle\langle J,m|$. [[pthm-qec-distinguishability-uniform-decay-rate]]

[F3] The ideal syndrome check has unnormalized null output $P\mathcal N_\tau(\rho_0)P$ and normalizes it by its trace when positive. Its first-order approximation has null numerator $K_{\rm null}\rho_0K_{\rm null}^\dagger$. [[pthm-qec-distinguishability-null-projection]]

[F4] For the finite GKSL channel, the ordered-jump expansion has no-jump amplitude $e^{tG}$, where $G=-iH+V$, and every other term contains at least one jump separated by factors $e^{uG}$. The series converges in induced matrix norm. [[lem-qec-prereq-trajectory-dyson-expansion]]

[F5] The finite GKSL channel is $\mathcal N_t=e^{t\mathcal L}$ for a time-independent generator $\mathcal L$; matrix adjoints are conjugate transposes. [[def-qec-prereq-finite-gksl-channel-interface]]

## Proof

**Given:** The finite model, its inherited hypotheses, vanishing lifts, supported density operator and ideal check in the Statement.

**Goal:** Prove the first-order numerator and the normalized approximate and exact null-state conclusions.

1.1 Put $h=\omega_0J_0(J_0+1)$. By [F1], $HP=hP$ because the lifts vanish. The support condition therefore gives $H\rho_0=\rho_0H=h\rho_0$, so $[H,\rho_0]=0$. By [F2], $VP=-\gamma P/2$. Hence $GP=(-ih-\gamma/2)P$ and $K_{\rm null}P=(1-ih\tau-\gamma\tau/2)P$. [given, F1, F2, algebra]

2.1 Consequently $K_{\rm null}\rho_0K_{\rm null}^\dagger=|1-ih\tau-\gamma\tau/2|^2\rho_0=(1-\gamma\tau)\rho_0+O(\tau^2)$ in spectral norm at fixed $h$ and $\gamma$. Its trace is the same nonnegative scalar since $\operatorname{Tr}\rho_0=1$. Whenever this scalar is positive, normalization gives exactly $\rho_0$, as prescribed by [F3]. [step 1.1, F3, algebra]

2.2 By [F4] and step 1.1, $e^{\tau G}P=e^{(-ih-\gamma/2)\tau}P$, so the no-jump term projected onto $P$ is $e^{-\gamma\tau}\rho_0$. Each propagation factor in any other ordered term preserves every $J$ block, while each jump lowers $J$ by one by [F1]. Thus any term containing a jump maps the input block strictly below $J_0$ and is killed by the final projection $P$. Projection is continuous in this finite-dimensional norm, so the convergent expansion in [F4] gives $P\mathcal N_\tau(\rho_0)P=e^{-\gamma\tau}\rho_0$. [step 1.1, F1, F4, algebra]

3.1 The exact null weight is $e^{-\gamma\tau}>0$ for finite $\tau\geq0$, so [F3] gives conditional state $\rho_0$. After each null check the state is again $\rho_0$; applying the same argument successively proves the all-null assertion. The time-independent generator in [F5] makes each subsequent interval use the same channel family from that restored state, giving the stated clock-reset interpretation. [step 2.2, F3, F5, algebra] ∎
