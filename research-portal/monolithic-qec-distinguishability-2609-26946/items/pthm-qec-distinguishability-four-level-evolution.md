---
id: pthm-qec-distinguishability-four-level-evolution
kind: physics-theorem
domain: physics
title: Exact state evolution from a four-level codeword
status: published
origin: session
deps:
  - post-qec-distinguishability-four-level-model
  - def-qec-prereq-finite-operator-conventions
  - def-qec-prereq-finite-gksl-channel-interface
  - lem-qec-prereq-trajectory-dyson-expansion
  - math:def-qc-density-operator
  - math:def-qc-pure-state-and-ray
  - math:thm-qc-unit-vector-projector-is-density
dependency_roles:
  post-qec-distinguishability-four-level-model: physical-assumption
  def-qec-prereq-finite-operator-conventions: mathematical-premise
  def-qec-prereq-finite-gksl-channel-interface: mathematical-premise
  lem-qec-prereq-trajectory-dyson-expansion: mathematical-premise
  math:def-qc-density-operator: mathematical-premise
  math:def-qc-pure-state-and-ray: mathematical-premise
  math:thm-qc-unit-vector-projector-is-density: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Monolithic Quantum Error Correction in the Presence of Distinguishability
      url: https://arxiv.org/abs/2609.26946
      locator: PDF p. 8, Eq. (S1.1) and opening model paragraph
      statement: The article gives the displayed evolved density matrix for an initial
        four-level code state under its coherent-jump model.
      hypotheses: The four-level model with the Hamiltonian, lifting term and jump
        operator stated in the opening paragraph of section S1; an initial
        normalized code state.
      reading_limits: The supplied extracted article text at PDF p. 8 was read for the
        model and equation. This citation attributes the article-origin
        statement; the argument below is a local calculation, not a claim to
        have reconstructed an article proof.
physical_scope: Conditional prediction of the idealized four-level GKSL model,
  not an experimental observation.
dependency_level: 2
formulation_deps:
  - post-qec-distinguishability-four-level-model
  - def-qec-prereq-finite-operator-conventions
  - def-qec-prereq-finite-gksl-channel-interface
  - math:def-qc-density-operator
  - math:def-qc-pure-state-and-ray
argument_deps:
  - post-qec-distinguishability-four-level-model
  - def-qec-prereq-finite-operator-conventions
  - def-qec-prereq-finite-gksl-channel-interface
  - lem-qec-prereq-trajectory-dyson-expansion
  - math:def-qc-density-operator
  - math:def-qc-pure-state-and-ray
  - math:thm-qc-unit-vector-projector-is-density
---

## Statement

Assume the four-level model with real $\omega_0,\Delta$, decay rate $\gamma\geq0$, and $t\geq0$. For a normalized initial code state $|\psi\rangle=a|0\rangle+b|1\rangle$, its evolved density operator is

$$\rho(t)=e^{-\gamma t}|\psi\rangle\langle\psi|+(1-e^{-\gamma t})(|a|^2|2\rangle\langle2|+|b|^2|3\rangle\langle3|)+[ab^*c(t)|2\rangle\langle3|+\mathrm{h.c.}],$$

where $c(t)=\gamma(e^{i\Delta t}-e^{-\gamma t})/(\gamma+i\Delta)$ when $(\gamma,\Delta)\ne(0,0)$ and $c(t)=0$ at $(\gamma,\Delta)=(0,0)$. Here h.c. denotes the Hermitian conjugate of the preceding off-diagonal term. The value at the origin is the continuous extension.

## Facts & Assumptions

[F1] In the postulated model, $H=\omega_0(|0\rangle\langle0|+|1\rangle\langle1|)+\Delta|3\rangle\langle3|$, $L=\sqrt\gamma(|2\rangle\langle0|+|3\rangle\langle1|)$, and the state evolves by the corresponding finite GKSL channel. [[post-qec-distinguishability-four-level-model]]

[F2] The ordered basis is orthonormal; bras, adjoints and outer products act according to the finite operator conventions. [[def-qec-prereq-finite-operator-conventions]]

[F3] The finite GKSL interface defines $\mathcal N_t=e^{t\mathcal L}$ for the stated Hermitian Hamiltonian and jump. [[def-qec-prereq-finite-gksl-channel-interface]]

[F4] For finite GKSL data, the channel is the sum of the no-jump term and ordered integrals of jump amplitudes, with $G=-iH-L^\dagger L/2$ and $E(u)=e^{uG}$. [[lem-qec-prereq-trajectory-dyson-expansion]]

[F5] A density operator on a nonzero finite-dimensional complex inner-product space is a non-negative endomorphism with trace one. [[math:def-qc-density-operator]]

[F6] A pure state is a ray, and a unit representative $u$ has operator representative $|u\rangle\langle u|$. Use this operator representative for the initial code state. [[math:def-qc-pure-state-and-ray]]

[F7] On a nonzero finite-dimensional complex inner-product space with the root pairing linear in its first argument, the outer product $|u\rangle\langle u|$ of a unit vector is non-negative and has trace one, hence is a density operator. [[math:thm-qc-unit-vector-projector-is-density]]

## Proof

**Given:** The model, normalized $|\psi\rangle$, and nonnegative time in the statement.

**Goal:** Calculate $\mathcal N_t(|\psi\rangle\langle\psi|)$ and establish the stated extension.

1.1 By [F6], the initial pure code state has operator representative $\rho(0)=|\psi\rangle\langle\psi|$. Its underlying space is $\mathbb C^4$ with the root pairing linear in its first argument, and the normalized vector $|\psi\rangle$ is unit. The outer-product action in [F2] is $|\psi\rangle\langle\psi|x=\psi(\psi^\dagger x)=\langle x,\psi\rangle_{\rm root}\psi$, which agrees with the convention in [F7]. Thus [F7] and [F5] make $\rho(0)$ a density operator. By [F1] and [F3], its physical model evolution is $\rho(t)=\mathcal N_t(\rho(0))$. [given, F1, F2, F3, F5, F6, F7, algebra]

2.1 By [F1] and [F2], $L^\dagger L=\gamma(|0\rangle\langle0|+|1\rangle\langle1|)$. Thus $E(u)$ acts by $e^{(-i\omega_0-\gamma/2)u}$ on both code basis vectors, by $1$ on $|2\rangle$, and by $e^{-i\Delta u}$ on $|3\rangle$. In particular, the no-jump contribution in [F4] is $e^{-\gamma t}|\psi\rangle\langle\psi|$. [given, F1, F2, F4, step 1.1, algebra]

3.1 For $0\leq s\leq t$, the single-jump amplitude on the initial state is $E(t-s)LE(s)|\psi\rangle=\sqrt\gamma e^{(-i\omega_0-\gamma/2)s}(a|2\rangle+b e^{-i\Delta(t-s)}|3\rangle)$. Its image lies in the span of $|2\rangle,|3\rangle$, which is preserved by $E(u)$ and annihilated by $L$. Hence every term with two or more jumps vanishes on the initial density operator. The single-jump diagonal coefficients are $|a|^2(1-e^{-\gamma t})$ and $|b|^2(1-e^{-\gamma t})$. [given, F1, F2, F4, step 2.1, algebra]

4.1 The single-jump $|2\rangle\langle3|$ coefficient is $ab^*\gamma\int_0^t e^{-\gamma s}e^{i\Delta(t-s)}\,ds$. For $(\gamma,\Delta)\ne(0,0)$, direct integration gives $ab^*\gamma(e^{i\Delta t}-e^{-\gamma t})/(\gamma+i\Delta)$; the opposite coefficient is its complex conjugate. At $(0,0)$ the integral is zero, and its absolute value is at most $\gamma t$, so this value is continuous as $(\gamma,\Delta)\to(0,0)$ within $\gamma\geq0$. Combining the no-jump and single-jump terms gives the displayed density operator. [given, F3, F4, step 2.1, step 3.1, algebra] ∎
