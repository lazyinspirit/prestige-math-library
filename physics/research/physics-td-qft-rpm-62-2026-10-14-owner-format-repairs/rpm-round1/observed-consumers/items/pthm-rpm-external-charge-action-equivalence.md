---
id: pthm-rpm-external-charge-action-equivalence
kind: physics-theorem
title: "Stationary charged action and Lorentz force"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 3
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A conditional equivalence for finite fixed-endpoint timelike curve variations in a local potential domain of the prescribed curved background model: stationarity of the adopted external charged-particle action is equivalent to the covariant Lorentz-force equation with the RPM SI sign convention. It asserts no global potential, local or global trajectory existence, self-field, radiation reaction, or empirical claim."
empirical_premises: []
deps:
  - def-rpm-charge-spin-model
  - def-em-electromagnetic-tensor
  - post-rpm-external-charge-action
  - lem-rpm-curved-charge-action-variation
  - def-countable-choice
dependency_roles:
  def-rpm-charge-spin-model: formulation-prerequisite
  def-em-electromagnetic-tensor: formulation-prerequisite
  post-rpm-external-charge-action: physical-assumption
  lem-rpm-curved-charge-action-variation: mathematical-premise
  def-countable-choice: mathematical-premise
sources:
  references:
    - title: "David Tong, General Relativity, author-hosted Chapter 1 lecture-note excerpt"
      url: "https://www.davidtong.org/pdfs/teaching/general-relativity/gr1.pdf"
      locator: "Complete 55-page Chapter 1 excerpt; §1.1 fixed-endpoint Euler–Lagrange variation and §1.2.3, especially equation (1.21), printed pp. 8–28. The curved local variation is proved from inspected mathematical suppliers."
    - title: "Eric Poisson, Adam Pound and Ian Vega, The Motion of Point Particles in Curved Spacetime, author manuscript arXiv:1102.0529v3 (2011)"
      url: "https://arxiv.org/html/1102.0529v3"
      locator: "Complete author manuscript, arXiv v3, §5.2.1: curved charged-particle interaction/action and worldline equation, with the singular self-field limitation kept separate from the prescribed external-field model."
verification: {}
---

## Statement

Assume the charged test-body quantities and local potential domain of [[def-rpm-charge-spin-model]], the flat-space sign convention of [[def-em-electromagnetic-tensor]], and the adopted fixed-endpoint action postulate [[post-rpm-external-charge-action]], and assume $\mathrm{AC}_\omega$ for the canonical tangent-bundle smooth structure. For a finite $C^2$ future-timelike curve segment $z:[a,b]\to O$ in that domain, where $a<b$ are proper-time endpoints, and the local $C^2$ fixed-endpoint variations of the postulate, choose the orientation-preserving parameter $\lambda=\tau$; the segment is stationary for the adopted action if and only if

$$m\nabla_UU=qF^\sharp(U),\qquad (\nabla_UU)_a=\frac qm F_{ab}U^b.$$

This is a model deduction: it establishes the equation equivalent to stationarity of the postulated functional, not the physical truth of the postulate.

## Facts & Assumptions

**Given:** The charged test-body definitions and fixed external potential of [[def-rpm-charge-spin-model]], the local field convention of [[def-em-electromagnetic-tensor]], and the physical action adoption of [[post-rpm-external-charge-action]], together with $\mathrm{AC}_\omega$ for the canonical tangent-bundle smooth structure.

[A1] [[post-rpm-external-charge-action]]: the model's trajectories are stationary points of $S[z]=-mc\int\sqrt{-g(z',z')}\,d\lambda+q\int A(z')\,d\lambda$ under finite fixed-endpoint timelike variations in a local potential domain.

[A2] [[def-countable-choice]]: assume the axiom of countable choice $\mathrm{AC}_\omega$ for the canonical tangent-bundle smooth structure.

[F1] [[def-rpm-charge-spin-model]]: $F=dA$ on the potential domain, $F^\sharp$ is defined by $g(F^\sharp(v),w)=F(w,v)$, and $m,c>0$ with constant charge $q$ are the model parameters.

[F2] [[lem-rpm-curved-charge-action-variation]]: under $\mathrm{AC}_\omega$, for these $C^2$ fixed-endpoint timelike variations, the first variation equals $\int[-m g(J,\nabla_UU)+qF(J,U)]\,d\tau$ and vanishes for every local variation exactly when $m(\nabla_UU)_a=qF_{ab}U^b$.

## Proof

**Proof technique:** direct.

1.1 By [A1], [A2] and [F1], choose $\lambda=\tau$ in the orientation-preserving parameter of the postulate; the functional and the local curve, potential and endpoint hypotheses then match the mathematical variation statement [F2]. [given, A1, A2, F1, F2]

2.1 Applying [F2] under [A2], stationarity for every local fixed-endpoint variation is equivalent to $m(\nabla_UU)_a=qF_{ab}U^b$. Raising the covector index with the nondegenerate metric and using the definition of $F^\sharp$ in [F1] gives the equivalent vector equation $m\nabla_UU=qF^\sharp(U)$. [step 1.1, A2, F1, F2, algebra] ∎
