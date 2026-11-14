---
id: post-qec-distinguishability-four-level-model
kind: postulate
domain: physics
title: Four-level spontaneous-decay model
status: draft
origin: session
deps:
  - def-qec-prereq-finite-operator-conventions
  - def-qec-prereq-restricted-logical-channel
  - def-qec-prereq-finite-gksl-channel-interface
  - math:def-qc-density-operator
dependency_roles:
  def-qec-prereq-finite-operator-conventions: mathematical-premise
  def-qec-prereq-restricted-logical-channel: mathematical-premise
  def-qec-prereq-finite-gksl-channel-interface: mathematical-premise
  math:def-qc-density-operator: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Monolithic Quantum Error Correction in the Presence of Distinguishability
      url: https://arxiv.org/abs/2609.26946
      locator: PDF p. 2, Eqs. (2)–(3), Fig. 1(a), and surrounding four-level-system
        discussion
      statement: The four-level model has the stated unperturbed Hamiltonian, a single
        coherent decay jump, code space, and degeneracy-lifting Hamiltonian.
      hypotheses: Idealized four-level Lindblad model, with the indicated decay rate
        and units hbar equal to one.
      reading_limits: The supplied extracted article text at PDF page 2 was read for
        this formulation. This citation attributes the model; it does not
        establish an experimental observation or an independent derivation.
physical_scope: Idealized four-level spontaneous-decay model with a fixed
  coherent jump and a diagonal energy lift; no measured atomic spectrum or
  experimental realization is asserted.
dependency_level: 1
---

## Postulate

Take a four-dimensional complex state space with ordered orthonormal basis $|0\rangle,|1\rangle,|2\rangle,|3\rangle$, using the ket, bra and outer-product conventions of [[def-qec-prereq-finite-operator-conventions]]. Set $\hbar=1$ and let $\omega_0,\Delta\in\mathbb R$ and $\gamma\geq0$. The unperturbed Hamiltonian and the degeneracy-lifting term are $H_S=\omega_0(|0\rangle\langle0|+|1\rangle\langle1|)$ and $H_\Delta=\Delta|3\rangle\langle3|$. The total Hamiltonian is $H=H_S+H_\Delta$. The single jump operator is $L=\sqrt\gamma(|2\rangle\langle0|+|3\rangle\langle1|)$; $\gamma$ is the decay rate, and the two terms occur in the same coherent jump.

Postulate that, for $t\geq0$, the system's density operator evolves by the finite GKSL channel $\mathcal N_t=e^{t\mathcal L}$, with $\mathcal L(X)=-i[H,X]+LXL^\dagger-\tfrac12\{L^\dagger L,X\}$. Here $[A,B]=AB-BA$, $\{A,B\}=AB+BA$, and $L^\dagger$ is the adjoint. This is a model assumption, not an experimental observation.

The code space is $\mathcal C=\operatorname{span}\{|0\rangle,|1\rangle\}$, in the sense of the code interface [[def-qec-prereq-restricted-logical-channel]]. The jump maps $a|0\rangle+b|1\rangle$ to $\sqrt\gamma(a|2\rangle+b|3\rangle)$; its range on the code is contained in the orthogonal decay space $\operatorname{span}\{|2\rangle,|3\rangle\}$. A degeneracy lift is the added energy term $H_\Delta$; it changes the energy assigned to $|3\rangle$ while the postulated jump is held fixed.

## Facts & Assumptions

[F1] The finite operator conventions define bras, adjoints and outer products in the chosen orthonormal bases. [[def-qec-prereq-finite-operator-conventions]]

[F2] An isometric encoding specifies a code as its image, with an orthogonal code projector. [[def-qec-prereq-restricted-logical-channel]]

[F3] For a Hermitian finite matrix $H$ and a finite family of jump matrices, the displayed GKSL generator defines a channel $e^{t\mathcal L}$ for nonnegative time. [[def-qec-prereq-finite-gksl-channel-interface]]

[F4] A density operator on a nonzero finite-dimensional complex inner-product space is a non-negative endomorphism with trace one. [[math:def-qc-density-operator]]

## Explanation

The basis is orthonormal, so the two displayed spans are orthogonal. The formula for the image of a code vector follows directly from the outer-product action in [F1]. The parameters make $H$ Hermitian, so the mathematical construction in [F3] applies. The physical assertion that this construction describes the emitter is the postulate above; channel existence alone does not establish it.
