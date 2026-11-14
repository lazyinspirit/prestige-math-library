---
id: pthm-qec-distinguishability-ule-equation
kind: physics-theorem
domain: physics
title: Universal Lindblad equation with correction
status: published
origin: session
deps:
  - post-qec-distinguishability-ule-coupling
  - def-qec-prereq-finite-gksl-channel-interface
  - pthm-qec-prereq-ule-jump-and-lamb-contract
  - pthm-qec-prereq-ule-modified-state-error-contract
  - math:def-countable-choice
  - math:def-axiom-of-choice
  - math:prop-matrix-differentials-obey-sum-product-and-adjoint-rules
dependency_roles:
  post-qec-distinguishability-ule-coupling: physical-assumption
  def-qec-prereq-finite-gksl-channel-interface: mathematical-premise
  pthm-qec-prereq-ule-jump-and-lamb-contract: physical-result
  pthm-qec-prereq-ule-modified-state-error-contract: physical-result
  math:def-countable-choice: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:prop-matrix-differentials-obey-sum-product-and-adjoint-rules: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Monolithic Quantum Error Correction in the Presence of Distinguishability
      url: https://arxiv.org/abs/2609.26946
      locator: PDF p. 9, Eq. (S2.3); p. 10, paragraph following Eq. (S2.3)
      statement: The article writes the reduced-state equation with a Lamb shift,
        dissipative jump operators and a correction accounting for deviations
        from exact Markovianity.
      hypotheses: The system–bath coupling and short-memory regime described in
        Supplement S2.
      reading_limits: The supplied extracted text at the cited locations was read.
        This reference attributes the article's formulation; it is not used as
        proof of the equation or a residual bound.
physical_scope: Conditional finite-dimensional, normalized system–bath model
  with the independent ULE suppliers' Gaussian bath, kernel and remote-past
  preparation assumptions. No observation or unconditional finite-preparation
  error bound is asserted.
dependency_level: 6
---

## Statement

Assume the Axiom of Choice and Countable Choice. Adopt the system–bath postulate and the independent ULE jump and modified-state contracts, including their centered stationary Gaussian bath, normalized finite coupling channels, finite kernel moments, remote-past factorized preparation and short-memory regime. Assume that the exact interaction-picture reduced operator $r(t)$ is differentiable and that the system propagator $U(t)$ is differentiable with $\dot U(t)=-iH_S(t)U(t)$. Let $\rho(t)=U(t)r(t)U(t)^\dagger$. The interaction-picture jumps $\widetilde L_\lambda$ and Hermitian Lamb shift $\widetilde\Lambda$ are those of the jump contract; put $L_\lambda=U\widetilde L_\lambda U^\dagger$ and $\Lambda=U\widetilde\Lambda U^\dagger$. The commutator and anticommutator are $[A,B]=AB-BA$ and $\{A,B\}=AB+BA$.

Define $\widetilde{\mathcal D}_t(X)=-i[\widetilde\Lambda(t),X]+\sum_\lambda(\widetilde L_\lambda(t)X\widetilde L_\lambda(t)^\dagger-\tfrac12\{\widetilde L_\lambda(t)^\dagger\widetilde L_\lambda(t),X\})$ and $\xi(t)=U(t)(\dot r(t)-\widetilde{\mathcal D}_t(r(t)))U(t)^\dagger$. Then $\partial_t\rho=-i[H_S(t)+\Lambda(t),\rho]+\sum_\lambda(L_\lambda(t)\rho L_\lambda(t)^\dagger-\tfrac12\{L_\lambda(t)^\dagger L_\lambda(t),\rho\})+\xi(t)$. The correction records the departure of the exact derivative from the stated time-local Lindblad-form generator; the article describes it as accounting for deviations from exact Markovianity.

The independently supplied quantitative residual bound applies instead to a modified interaction-picture operator $\sigma$, with $\|\sigma-r\|\leq\Gamma\tau$ and $\|\dot\sigma-\widetilde{\mathcal D}_t(\sigma)\|\leq2\Gamma^2\tau$ in spectral norm. Here $\Gamma=4\gamma(\int\|h(s)\|_{2,1}ds)^2$ and $\tau=\int|s|\|h(s)\|_{2,1}ds/\int\|h(s)\|_{2,1}ds$ use the jump contract's kernel $h$. These bounds do not by themselves bound $\xi$ or establish a uniform trajectory error after dropping it.

## Facts & Assumptions

[F1] The postulate supplies the conditional coupling model, the short-memory regime and the kernel definitions, including the remote-past preparation and finite nonzero kernel moments. [[post-qec-distinguishability-ule-coupling]]

[F2] The jump contract supplies the interaction-picture jump operators and Hermitian Lamb shift under the stated independent bath and preparation hypotheses. [[pthm-qec-prereq-ule-jump-and-lamb-contract]]

[F3] The modified-state contract supplies the two spectral-norm bounds for the interaction-picture operator $\sigma$, with the ULE generator identified by the jump contract. [[pthm-qec-prereq-ule-modified-state-error-contract]]

[F4] The finite GKSL interface specifies the displayed commutator, anticommutator and Lindblad-form terms; its time-independent channel result is not invoked for this time-dependent equation. [[def-qec-prereq-finite-gksl-channel-interface]]

[F5] For compatible finite matrices, the real Fréchet differential rules are $d(AB)=dA\,B+A\,dB$ and $d(A^\dagger)=(dA)^\dagger$. [[math:prop-matrix-differentials-obey-sum-product-and-adjoint-rules]]

[A1] Assume the Axiom of Choice for the adopted postulate's self-adjoint bath unitary-group construction, and Countable Choice for its Hilbert-space, trace and kernel constructions and the independent ULE contracts. Assume the differentiability stated above. [[math:def-axiom-of-choice]] [[math:def-countable-choice]]

## Proof

**Given:** The model and regularity hypotheses, the ULE coefficients, and the definitions in the statement.

**Goal:** Obtain the displayed equation for the exact reduced operator and state the scope of the independent modified-operator estimates.

1.1 By definition of $\xi$, $\dot r=\widetilde{\mathcal D}_t(r)+U^\dagger\xi U$. The generator has the displayed finite Lindblad form with coefficients supplied by [F2], using the conventions in [F4]. This identity defines the exact-state residual and does not estimate it. [F2, F4, A1]

2.1 Apply [F5] to the differentiable matrix curves, twice for the three-factor product: substituting their increments $h\dot U+o(h)$ and $h\dot r+o(h)$ into the supplied first-order remainder formulas gives $\dot\rho=\dot U rU^\dagger+U\dot rU^\dagger+Ur(\dot U)^\dagger$. Since $\dot U=-iH_SU$ and $H_S=H_S^\dagger$, the adjoint rule gives $(\dot U)^\dagger=iU^\dagger H_S$. The two derivatives of $U$ give $-i[H_S,\rho]$; conjugating each term of $\widetilde{\mathcal D}_t(r)$ gives the corresponding term with $\Lambda$ and $L_\lambda$, and conjugating $U^\dagger\xi U$ gives $\xi$. This proves the displayed equation. Here [F1] is adopted under [A1], including full Choice for the postulate's bath unitary-group construction. Independently, [F3] gives the stated bounds for $\sigma$ under [F1]; it supplies neither a bound on the derivative of $\sigma-r$ nor the asserted bound for $\xi$. [F1, F3, F5, A1, step 1.1] ∎

## Source notes

The article's reduced-state notation and interpretation are attributed to Eq. (S2.3). The exact-state equation here is an identity with an explicitly defined residual. The nontrivial residual estimate is retained only for the modified operator supplied by the independent ULE contract. The finite-preparation tail and its applicability conditions are stated in the jump contract; no unchanged remote-past residual constant is claimed for arbitrary finite preparation.
