---
id: pthm-tgrx-noether-first-law
kind: physics-theorem
title: Stationary first law from the covariant boundary identity
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 3
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-tgrx-noether-horizon-data
  - lem-tgrx-noether-charge-decomposition
  - pthm-tgrx-noether-horizon-entropy-variation
  - thm-cartans-magic-formula
  - thm-stokes-theorem-for-smooth-singular-chains
dependency_roles:
  def-tgrx-noether-horizon-data: physical-assumption
  lem-tgrx-noether-charge-decomposition: mathematical-premise
  pthm-tgrx-noether-horizon-entropy-variation: physical-result
  thm-cartans-magic-formula: mathematical-premise
  thm-stokes-theorem-for-smooth-singular-chains: mathematical-premise
physical_scope: >
  Conditional first law for a classical stationary nondegenerate bifurcate
  horizon with the specified covariant potential, globally compatible Noether
  charge, vanishing linearized constraint variation, and integrable asymptotic
  Hamiltonian charge. It is not a dynamical law, a quantum result, or empirical
  confirmation of a gravity model.
sources:
  references:
    - title: "Vivek Iyer and Robert M. Wald, Some Properties of Noether Charge and a Proposal for Dynamical Black Hole Entropy, §6, equations (73)–(102)"
      url: "https://arxiv.org/pdf/gr-qc/9403028"
    - title: "Geoffrey Compère and Adrien Fiorucci, Advanced Lectures on General Relativity, §§1.3.3–1.4.2"
      url: "https://arxiv.org/pdf/1801.07064"
    - title: "Daniel Harlow and Jie-qiang Wu, Covariant phase space with boundaries, §§2.2–2.4"
      url: "https://arxiv.org/pdf/1906.08616"
verification:
  precheck: pending
---

## Statement

For the stationary Noether data of the definition, choose $Q_\xi$ in the canonical local representative class of [[lem-tgrx-noether-charge-decomposition]]. Let $\delta\phi$ be an admitted linearized solution with fixed $\xi$ and $\delta C_\xi=0$. Let $C_R$ be finite oriented smooth singular hypersurface chains with $\partial C_R=S_R-B$, where the boundary orientations are outward at $S_R$ and inward at $B$. Then
$$d(\delta Q_\xi-\iota_\xi\theta)=0$$
on each $C_R$, and
$$\delta H_\xi=\lim_{R\to\infty}\int_{S_R}(\delta Q_\xi-\iota_\xi\theta)
=\int_B\delta Q_\xi
=\frac{\hbar\kappa}{2\pi k_B}\,\delta S_W.$$
The last equality uses the derivative-free curvature hypothesis and the Noether entropy functional of the preceding theorem. The identity is conditional on the exact boundary-charge and vanishing-constraint assumptions; $\kappa$ is the unperturbed surface gravity. For the Einstein-Hilbert Lagrangian $\mathcal L_{\rm EH}=R\boldsymbol\epsilon_g/(16\pi G)$ with Newton constant $G>0$ in the same $c=1$ action normalization, it gives $S_W=k_BA_B/(4G\hbar)$, where $A_B:=\int_B dA_B$.

## Facts & Assumptions

**Given:** The stationary Noether data, the compact boundaryless bifurcation surface and the admitted smooth linearized perturbation in the Statement.

[A1] [[def-tgrx-noether-horizon-data]]: $J_\xi=\theta(\phi;\mathcal L_\xi\phi)-\iota_\xi\mathcal L$, $C_\xi=J_\xi-dQ_\xi$, $\mathcal L_\xi\phi=0$, $E_\phi=0$, and $\delta C_\xi=0$. The boundary one-form is exactly $\lim_R\int_{S_R}(\delta Q_\xi-\iota_\xi\theta)$ and satisfies $d_{\mathcal S}H_\xi=\alpha_\xi$.

[F1] [[thm-cartans-magic-formula]]: $\mathcal L_\xi\alpha=d(\iota_\xi\alpha)+\iota_\xi d\alpha$ for every differential form $\alpha$.

[F2] [[thm-stokes-theorem-for-smooth-singular-chains]]: $\int_{C_R}d\alpha=\int_{\partial C_R}\alpha$ for each finite smooth singular chain $C_R$ and smooth form $\alpha$.

[F3] [[lem-tgrx-noether-charge-decomposition]]: the selected charge is in the local representative class with $X^{cd}_{a_3\ldots a_n}=-P^{abcd}(\boldsymbol\epsilon_g)_{ab a_3\ldots a_n}$.

[L1] [[pthm-tgrx-noether-horizon-entropy-variation]]: for that representative, $\delta\int_BQ_\xi=(\hbar\kappa/(2\pi k_B))\delta S_W$.

## Proof

1.1 Differentiate $J_\xi$ at fixed $\xi$. Since $\mathcal L_\xi\phi=0$ on the stationary background and $\theta$ is linear in its variation argument,
$$\delta J_\xi=\theta(\phi;\delta(\mathcal L_\xi\phi))-\iota_\xi\delta\mathcal L
=\theta(\phi;\mathcal L_\xi\delta\phi)-\iota_\xi\bigl(E_\phi[\delta\phi]+d\theta(\phi;\delta\phi)\bigr).$$
The first equality uses that the coefficient variation of $\theta(\phi;0)$ is zero; the second uses $\delta(\mathcal L_\xi\phi)=\mathcal L_\xi\delta\phi$ because $\xi$ is fixed. Covariance of $\theta$ identifies $\theta(\phi;\mathcal L_\xi\delta\phi)=\mathcal L_\xi\theta(\phi;\delta\phi)$. Since $E_\phi=0$, Cartan's identity [F1] yields $\delta J_\xi=d(\iota_\xi\theta)$. [A1, F1, algebra]

1.2 By [A1], $C_\xi=J_\xi-dQ_\xi$ and $\delta C_\xi=0$. Differentiating this identity gives $\delta J_\xi=d(\delta Q_\xi)$ because $d$ is independent of the field variation and the spacetime coordinates. Combining with step 1.1 gives $d(\delta Q_\xi-\iota_\xi\theta)=0$. This conclusion uses the explicit constraint-variation premise; it is not inferred from the closure of a presymplectic current. [A1, step 1.1, algebra]

2.1 Apply [F2] to $\alpha=\delta Q_\xi-\iota_\xi\theta$ on $C_R$. By step 1.2 and $\partial C_R=S_R-B$,
$$0=\int_{C_R}d\alpha=\int_{S_R}(\delta Q_\xi-\iota_\xi\theta)-\int_B(\delta Q_\xi-\iota_\xi\theta).$$
On $B$, $\xi=0$, so $\iota_\xi\theta=0$. Taking the limit in the first term is permitted by the boundary convergence assumption in [A1], and its value is $\delta H_\xi$ by the specified definition of the Hamiltonian variation. Hence $\delta H_\xi=\int_B\delta Q_\xi$. [A1, F2, step 1.2, algebra]

2.2 By [F3], the charge used here is in the representative class required by [L1]. Apply [L1] to the right-hand side of step 2.1. This gives $\delta H_\xi=(\hbar\kappa/(2\pi k_B))\delta S_W$, with all field variations taken at fixed generator and fixed background $\kappa$. [F3, step 2.1, L1]

3.1 For $\ell_{\rm EH}=R/(16\pi G)$, the curvature convention in the preceding entropy-variation theorem gives $R=g^{ac}g^{bd}R_{abcd}$. Holding $g$ fixed and using $\delta R_{abcd}=-\delta R_{abdc}$, the Riemann-symmetric derivative is
$$P^{abcd}=\frac{1}{32\pi G}(g^{ac}g^{bd}-g^{ad}g^{bc}).$$
Its binormal contraction is $P^{abcd}\epsilon_{ab}\epsilon_{cd}=(-2-2)/(32\pi G)=-1/(8\pi G)$, because $\epsilon_{ab}\epsilon^{ab}=-2$ and $\epsilon_{ab}\epsilon^{ba}=2$. Substitution in the definition of $S_W$ yields $S_W=k_B\int_BdA_B/(4G\hbar)=k_BA_B/(4G\hbar)$. [L1, algebra] ∎

## Remarks

The stationary relation is a model deduction. Calling $S_W$ the physical thermodynamic state entropy requires an additional physical identification; the restricted Kerr–Newman assumption on the earlier thermodynamic page is not generalized here.
