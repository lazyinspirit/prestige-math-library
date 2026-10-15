---
id: pthm-rpm-charge-mass-shell
kind: physics-theorem
title: "Charged test-body mass shell and laboratory work"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 4
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "Local solutions of the external-field charged test-body model with constant $m>0$ and $q$ preserve the future timelike four-velocity shell in a fixed curved Lorentzian background. The laboratory three-force and power identities are asserted only in the flat Minkowski specialization with a named inertial SI chart and the compatible EM tensor convention. No global completeness, self-force, radiation reaction, measurement or empirical claim is included."
empirical_premises: []
deps:
  - def-rpm-charge-spin-model
  - def-em-electromagnetic-tensor
  - lem-rpm-external-charge-local-ivp
  - pthm-rpm-external-charge-action-equivalence
  - pthm-sr-momentum-and-four-force
  - def-countable-choice
dependency_roles:
  def-rpm-charge-spin-model: formulation-prerequisite
  def-em-electromagnetic-tensor: formulation-prerequisite
  lem-rpm-external-charge-local-ivp: mathematical-premise
  pthm-rpm-external-charge-action-equivalence: physical-result
  pthm-sr-momentum-and-four-force: physical-result
  def-countable-choice: mathematical-premise
sources:
  references:
    - title: "Eric Poisson, Adam Pound and Ian Vega, The Motion of Point Particles in Curved Spacetime, author manuscript arXiv:1102.0529v3 (2011)"
      url: "https://arxiv.org/html/1102.0529v3"
      locator: "Complete author manuscript, arXiv v3, §5.2.1: curved charged-particle interaction/action and worldline equation, with the singular self-field limitation kept separate from the prescribed external-field model."
    - title: "David Tong, Electromagnetism, University of Cambridge Part II lecture notes, Chapter 5 “Electromagnetism and Relativity”"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro4.pdf"
      locator: "Complete 39-page chapter; §§5.3.1–5.3.2 on potentials and the electromagnetic tensor and §5.4.1 on Lorentz force and power, printed pp. 105–116 (chapter PDF pp. 10–22). Source conventions are compared explicitly with the RPM convention."
verification: {}
---

## Statement

Assume the charged test-body quantities of [[def-rpm-charge-spin-model]], the field convention of [[def-em-electromagnetic-tensor]], and the stationary-action equivalence [[pthm-rpm-external-charge-action-equivalence]], and assume $\mathrm{AC}_\omega$ for the canonical tangent-bundle smooth structure. For every future-timelike initial datum $(x_0,U_0)$ with $g(U_0,U_0)=-c^2$, the equation of motion has a unique local solution by [[lem-rpm-external-charge-local-ivp]]. Along it the kinetic four-momentum $P=mU$ remains future timelike and satisfies

$$g(P,P)=-m^2c^2.$$

In the flat Minkowski specialization, use the massive-particle momentum result [[pthm-sr-momentum-and-four-force]] under its stated model assumptions, and choose a named inertial chart with $x^0=ct$, $E,B$ defined by [[def-em-electromagnetic-tensor]], and $\mathbf v$ the Euclidean spatial chart velocity. Set $\gamma:=(1-|\mathbf v|^2/c^2)^{-1/2}$. Then, with $\mathbf p=m\gamma\mathbf v$ and $E_{\rm part}=\gamma mc^2$ supplied by [[pthm-sr-momentum-and-four-force]], the same equation gives

$$\frac{d\mathbf p}{dt}=q(\mathbf E+\mathbf v\times\mathbf B),\qquad \frac{dE_{\rm part}}{dt}=q\,\mathbf E\cdot\mathbf v.$$

The mass-shell and force statements are conditional deductions within the specified model; they do not establish empirical applicability.

## Facts & Assumptions

**Given:** A fixed smooth time-oriented Lorentzian background and prescribed external $C^1$ two-form; $m>0$ and constant $q$; future-timelike initial data; assume $\mathrm{AC}_\omega$ for the canonical tangent-bundle smooth structure, and, for the laboratory clause, use the flat Minkowski and SI inertial-chart specialization.

[F1] [[def-rpm-charge-spin-model]]: the kinetic four-momentum is $P=mU$, the external field is a prescribed alternating two-form, and $g(U,U)=-c^2$ is the massive-worldline normalization.

[F2] [[pthm-rpm-external-charge-action-equivalence]]: trajectories stationary for the adopted local action satisfy $m\nabla_UU=qF^\sharp(U)$.

[F3] [[lem-rpm-external-charge-local-ivp]]: for future-timelike initial data, the equation has a unique local solution and preserves $g(U,U)=-c^2$ and the future direction.

[A1] [[def-countable-choice]]: assume the axiom of countable choice $\mathrm{AC}_\omega$ for the canonical tangent-bundle smooth structure.

[F4] [[pthm-sr-momentum-and-four-force]]: in the flat massive-particle model, $P=mU$ has inertial components $(E_{\rm part}/c,\mathbf p)$ with $E_{\rm part}=\gamma mc^2$ and $\mathbf p=m\gamma\mathbf v$, where the chart Lorentz factor is $\gamma=(1-|\mathbf v|^2/c^2)^{-1/2}$.

[F5] [[def-em-electromagnetic-tensor]]: in the named flat SI chart, $F_{0i}=-E_i/c$, $F_{ij}=\epsilon_{ijk}B_k$, hence $F^i{}_0=E_i/c$, $F^i{}_j=\epsilon_{ijk}B_k$, and $F^0{}_j=E_j/c$.

## Proof

1.1 By [F2] and [F3], the action model's equation has a unique local solution through the given data, with $g(U,U)=-c^2$ and future direction preserved. From [F1], $P=mU$; therefore $g(P,P)=m^2g(U,U)=-m^2c^2$, and $P$ is future timelike because $m>0$. [given, A1, F1, F2, F3, algebra]

1.2 In the flat inertial chart, [F4] gives $U^0=\gamma c$, $U^i=\gamma v^i$, $P^i=p^i$, and $E_{\rm part}=cP^0$, while [F2] gives $m\,dU^\mu/d\tau=qF^\mu{}_{\nu}U^\nu$. Since $dt/d\tau=\gamma$, [F5] yields $m\,dU^i/d\tau=q\gamma(E_i+(\mathbf v\times\mathbf B)_i)$ and $m\,dU^0/d\tau=q\gamma(\mathbf E\cdot\mathbf v)/c$; multiplying by $1/\gamma$ and, for the temporal equation, by $c/\gamma$, gives the two displayed laboratory identities. [given, A1, F2, F4, F5, algebra]

2.1 The curved-space shell conclusion is step 1.1, and the flat coordinate force and power conclusions are step 1.2; both inherit exactly the prescribed-field and test-body assumptions stated above. No empirical premise is used. [step 1.1, step 1.2] ∎
