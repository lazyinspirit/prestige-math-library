---
id: pthm-rpm-relativistic-coulomb-scattering
kind: physics-theorem
title: "Exact repulsive relativistic Coulomb scattering in the fixed-source test-body model"
status: draft
origin: session
domain: physics
library: physics
dependency_level: 5
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
deps:
  - def-rpm-charge-spin-model
  - def-em-electromagnetic-tensor
  - def-em-si-conventions
  - post-rpm-external-charge-action
  - pthm-rpm-external-charge-action-equivalence
  - lem-rpm-external-charge-local-ivp
  - pthm-rpm-charge-mass-shell
  - post-sr-massive-particle-dynamics
  - def-countable-choice
  - def-rpm-relativistic-coulomb-phase-system
  - prop-rpm-relativistic-coulomb-scattering-branch
dependency_roles:
  def-rpm-charge-spin-model: formulation-prerequisite
  def-em-electromagnetic-tensor: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  post-rpm-external-charge-action: physical-assumption
  pthm-rpm-external-charge-action-equivalence: physical-result
  lem-rpm-external-charge-local-ivp: mathematical-premise
  pthm-rpm-charge-mass-shell: physical-result
  post-sr-massive-particle-dynamics: physical-assumption
  def-countable-choice: mathematical-premise
  def-rpm-relativistic-coulomb-phase-system: mathematical-premise
  prop-rpm-relativistic-coulomb-scattering-branch: mathematical-premise
physical_scope: "Conditional model deduction for a single massive charged test body in flat spacetime moving in a prescribed, fixed, repulsive point-source Coulomb field, under the explicitly stated ACω and flat massive-particle assumptions. The exact angle applies only for W>mc² and J>κ/c. Source recoil, radiation, self-field, collisions, measurement, and empirical applicability are excluded."
sources:
  references:
    - title: "L. D. Landau and E. M. Lifshitz, The Classical Theory of Fields, 4th English edition, §§16–17, 19, 39 and Problem 1"
      url: "https://pierre.ag.gerard.web.ulb.be/textbooks/books/Landau_Lifshitz_T2.pdf"
    - title: "Timothy H. Boyer, “Unfamiliar trajectories for a relativistic particle in a Kepler or Coulomb potential,” Am. J. Phys. 72 (2004), arXiv:physics/0405090v1, complete paper"
      url: "https://arxiv.org/html/physics/0405090v1"
verification: {}
---

## Statement

Let a massive charged test body of mass $m>0$ and charge $q$ move in flat Minkowski spacetime in the prescribed field of a fixed point source with charge $Q$, where $qQ>0$. Use SI units, $x^0=ct$, $A_0=-\phi/c$, $A_i=0$, and

$$\phi(r)=\frac{Q}{4\pi\varepsilon_0r},\qquad \mathbf E(r)=\frac{Q\mathbf x}{4\pi\varepsilon_0r^3},\qquad \mathbf B=0,\qquad \kappa:=\frac{qQ}{4\pi\varepsilon_0}>0.$$

Under the adopted fixed-endpoint charged-particle action and its proved Lorentz-force consequence, assume $\mathrm{AC}_\omega$ for the canonical tangent-bundle smooth structure as required by those suppliers. In the flat specialization also adopt the massive-particle momentum model of [[post-sr-massive-particle-dynamics]]. Then the canonical spatial momentum equals the kinetic momentum $\mathbf p=m\gamma\mathbf v$, and the coordinate-time Hamiltonian is

$$H(\mathbf x,\mathbf p)=\sqrt{m^2c^4+c^2|\mathbf p|^2}+\frac{\kappa}{r}.$$

Thus the trajectories are those of [[def-rpm-relativistic-coulomb-phase-system]]. On a scattering branch of energy $W>mc^2$ and angular-momentum magnitude $J>\kappa/c$, define

$$A=\frac{W^2-m^2c^4}{c^2},\qquad d=\frac{W\kappa}{c^2},\qquad C=J^2-\frac{\kappa^2}{c^2}.$$

Its exact angle between incoming and outgoing momenta is

$$\theta=\pi-\frac{2J}{\sqrt C}\arctan\left(\frac{\sqrt{CA}}{d}\right)\in(0,\pi).$$

This is a model deduction, not a measured scattering law. The inequality $J>\kappa/c$ is part of the result's domain; no conclusion is made for $J\le\kappa/c$.

## Facts & Assumptions

**Given:** A fixed source, a single test body, $qQ>0$, the stated SI potential and field convention, the adopted external-charge action, and a scattering state with $W>mc^2$ and $J>\kappa/c$.

[A1] The local charged-body model adopts stationary points of $-mc\int\sqrt{-g(z',z')}d\lambda+q\int A(z')d\lambda$ on finite fixed-endpoint timelike segments; $A$ is prescribed, and no self-field, recoil or radiation reaction is included ([[def-rpm-charge-spin-model]], [[post-rpm-external-charge-action]]).

[A2] Assume exactly the axiom of countable choice $\mathrm{AC}_\omega$ for the canonical tangent-bundle smooth structure, as required by the inspected local-IVP and action-variation suppliers ([[def-countable-choice]]).

[A3] In the flat specialization, adopt the massive-particle momentum model that supplies constant positive mass and $P=mU$ ([[post-sr-massive-particle-dynamics]]).

[F1] Under [A2] and [A3], in a named flat inertial SI chart the charged mass-shell theorem gives $d\mathbf p/dt=q(\mathbf E+\mathbf v\times\mathbf B)$, with kinetic momentum $\mathbf p=m\gamma\mathbf v$ ([[pthm-rpm-charge-mass-shell]]).

[F2] The SI convention is $F_{0i}=-E_i/c$ and $F=dA$; with $A_0=-\phi/c$ and $A_i=0$, it gives $E_i=-\partial_i\phi$ ([[def-em-electromagnetic-tensor]], [[def-em-si-conventions]]).

[F3] The mathematical phase system has Hamiltonian $\sqrt{m^2c^4+c^2|p|^2}+\kappa/r$; for $W>mc^2$ and $J>\kappa/c$ its exact deflection is $\pi-2(J/\sqrt C)\arctan(\sqrt{CA}/d)$ ([[def-rpm-relativistic-coulomb-phase-system]], [[prop-rpm-relativistic-coulomb-scattering-branch]]).

## Proof

**Proof technique:** specialize the adopted external action to the static Coulomb potential, compute its canonical Hamiltonian, identify the resulting ODE with the proved mathematical phase system, and apply its exact scattering proposition.


1.1 In the inertial chart, $dx^0/dt=c$ and $|d\mathbf x/dt|=|\mathbf v|$. The action density from [A1] is therefore $L(\mathbf x,\mathbf v)=-mc^2\sqrt{1-|\mathbf v|^2/c^2}+qA_0c=-mc^2\sqrt{1-|\mathbf v|^2/c^2}-q\phi(r).$ Its spatial canonical momentum is $\partial L/\partial\mathbf v=m\gamma\mathbf v$; because $A_i=0$, it is also the kinetic momentum in [F1]. The Legendre expression $\mathbf p\cdot\mathbf v-L$ equals $\gamma mc^2+q\phi=\sqrt{m^2c^4+c^2|\mathbf p|^2}+qQ/(4\pi\varepsilon_0r)$. With $\kappa=qQ/(4\pi\varepsilon_0)>0$, this is precisely the Hamiltonian in [F3]. [given, A1, A2, A3, F1, F2, algebra]

2.1 From [F2], $\mathbf E=-\nabla\phi=Q\mathbf x/(4\pi\varepsilon_0r^3)$. Since $\mathbf B=0$, [F1] gives $\dot{\mathbf p}=q\mathbf E=\kappa\mathbf x/r^3$. The Hamiltonian derivative gives $\dot{\mathbf x}=c^2\mathbf p/\sqrt{m^2c^4+c^2|\mathbf p|^2}$. These are exactly the two phase equations of [F3], so each local physical solution in the prescribed model is a trajectory of that mathematical system. [step 1.1, A2, A3, F1, F2, F3, algebra]

3.1 For $W>mc^2$ and $J>\kappa/c$, all hypotheses of the exact repulsive scattering proposition [F3] hold. It supplies the unique outer turning branch and the stated impact parameter and deflection formula, with $A,d,C$ as defined in the statement. The conclusion is conditional on [A1], [A2], and [A3] and the fixed-source idealization. [step 2.1, A1, A2, A3, F3, given]

4.1 The exact angle is therefore a model prediction for the stated branch. The derivation makes no claim for $J\le\kappa/c$, for source recoil or radiation, or for any experimental result. [step 3.1, A1, A2, A3, given] ∎
## Remarks

- The Coulomb source is an external fixed source, not a second dynamical body. The calculation does not conserve source-plus-particle momentum because the source's response is outside the model.
- Landau and Lifshitz §39 gives the exact orbit relation and scattering angle in Gaussian units. The present argument states its own SI conversion through $\kappa=qQ/(4\pi\varepsilon_0)$ and does not import a Gaussian-unit formula without conversion.
- Boyer's independent paper treats an attractive $-\alpha/r$ potential and displays its exact orbit families. The present item uses the opposite, repulsive sign and proves that branch directly; Boyer's attractive trajectories are not imported as a proof of the repulsive formula.
