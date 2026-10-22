---
id: pthm-tgrx-noether-horizon-entropy-variation
kind: physics-theorem
title: Stationary horizon Noether-charge entropy variation
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 2
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-tgrx-noether-horizon-data
  - lem-tgrx-noether-charge-decomposition
  - def-lie-derivative-of-a-tensor-field
  - def-lie-derivative-of-a-differential-form
  - thm-cartans-magic-formula
  - thm-stokes-theorem-for-smooth-singular-chains
dependency_roles:
  def-tgrx-noether-horizon-data: physical-assumption
  lem-tgrx-noether-charge-decomposition: mathematical-premise
  def-lie-derivative-of-a-tensor-field: mathematical-premise
  def-lie-derivative-of-a-differential-form: mathematical-premise
  thm-cartans-magic-formula: mathematical-premise
  thm-stokes-theorem-for-smooth-singular-chains: mathematical-premise
physical_scope: >
  Classical stationary nondegenerate bifurcate horizons in smooth
  diffeomorphism-covariant metric theories whose Lagrangian depends
  algebraically on curvature and has no covariant derivatives of curvature.
  The result is a conditional Noether-charge identity, not a dynamical second
  law or an empirical or quantum statement.
sources:
  references:
    - title: "Vivek Iyer and Robert M. Wald, Some Properties of Noether Charge and a Proposal for Dynamical Black Hole Entropy, §§3–4, equations (38)–(60)"
      url: "https://arxiv.org/pdf/gr-qc/9403028"
    - title: "Geoffrey Compère and Adrien Fiorucci, Advanced Lectures on General Relativity, §§1.3.1–1.3.3"
      url: "https://arxiv.org/pdf/1801.07064"
    - title: "Daniel Harlow and Jie-qiang Wu, Covariant phase space with boundaries, §§2.2–2.4"
      url: "https://arxiv.org/pdf/1906.08616"
verification:
  precheck: pending
---

## Statement

Use the stationary Noether data of the preceding definition, with fixed $\xi$, compact boundaryless bifurcation surface $B$, and surface gravity $\kappa>0$. Choose the covariant first-variation potential and $Q_\xi$ in the canonical local representative class of [[lem-tgrx-noether-charge-decomposition]]. Let $\nabla$ be the Levi-Civita connection of $g$, use the curvature convention
$$R(X,Y)Z=\nabla_X\nabla_YZ-\nabla_Y\nabla_XZ-\nabla_{[X,Y]}Z,$$
and write $R_{abcd}:=g(R(e_c,e_d)e_b,e_a)$ in any local frame and $R:=g^{ac}g^{bd}R_{abcd}$. Write $\mathcal L=\ell(g,\psi,\nabla\psi,\ldots,R)\,\boldsymbol\epsilon_g$, where $\boldsymbol\epsilon_g$ is the oriented metric volume form and $\ell$ depends smoothly on the Riemann tensor algebraically, with no covariant derivatives of $R$. Define $P^{abcd}$ to be the Riemann-symmetric metric representative of the differential of $\ell$ in its curvature argument:
$$\delta\ell\big|_{g,\psi,\nabla\psi,\ldots}=P^{abcd}\delta R_{abcd}.$$
Here $P$ satisfies $P^{abcd}=-P^{bacd}=-P^{abdc}=P^{cdab}$ and $P^{a[bcd]}=0$. Let $dA_B$ be the positive volume form of the induced Riemannian metric on $B$ (in local coordinates with induced metric $h$, $dA_B=\sqrt{\det h}\,dy^1\cdots dy^{n-2}$), and define the stationary Wald Noether-charge functional
$$S_W:=-\frac{2\pi k_B}{\hbar}\int_B P^{abcd}\epsilon_{ab}\epsilon_{cd}\,dA_B.$$
For every admitted smooth linearized perturbation at the stationary solution, with $\xi$ and $B$ fixed and the residual constraint variation $\delta C_\xi=0$, the chosen Noether charge satisfies
$$\delta\int_B Q_\xi=\frac{\hbar\kappa}{2\pi k_B}\,\delta S_W.$$
Here $\hbar>0$ is Planck's constant, $k_B>0$ is Boltzmann's constant, and the action normalization is $c=1$. The identity is evaluated at the unperturbed value of $\kappa$; it does not include a $\delta\kappa$ term.

## Facts & Assumptions

**Given:** A smooth stationary solution and a smooth linearized perturbation as in the Statement, with the covariant Lagrangian, Noether potential and fixed generator of [[def-tgrx-noether-horizon-data]].

[A1] [[def-tgrx-noether-horizon-data]]: $\xi$ and $B$ are fixed; $\mathcal L_\xi\phi=0$; the first variation is $\delta\mathcal L=E_\phi[\delta\phi]+d\theta(\phi;\delta\phi)$; $B$ is compact, spacelike and boundaryless; $\nabla_a\xi_b=\kappa\epsilon_{ab}$ with constant $\kappa>0$; and $Q_\xi$ is a smooth covariant Noether potential.

[F1] [[def-lie-derivative-of-a-tensor-field]] and [[def-lie-derivative-of-a-differential-form]]: Lie derivatives are derivatives of pullbacks by the local flow; covariance of $\theta$ makes its field variation under the fixed flow equal to its Lie derivative.

[F2] [[thm-cartans-magic-formula]]: $\mathcal L_X\omega=d(\iota_X\omega)+\iota_X(d\omega)$ for every vector field $X$ and differential form $\omega$.

[F3] [[thm-stokes-theorem-for-smooth-singular-chains]]: $\int_c d\omega=\int_{\partial c}\omega$ for every finite smooth singular chain $c$ and smooth form $\omega$.

[F4] [[lem-tgrx-noether-charge-decomposition]]: the chosen first-variation potential and charge are in the canonical covariant integration-by-parts class, and $Q_\xi=W^c\xi_c+X^{cd}\nabla_{[c}\xi_{d]}+\mathbf Y(\phi;\mathcal L_\xi\phi)+dZ$, with $X^{cd}_{a_3\ldots a_n}=-P^{abcd}(\boldsymbol\epsilon_g)_{ab a_3\ldots a_n}$ and only the stated ambiguities.

## Proof

1.1 By [F4], the selected charge has the stated $W^c\xi_c$, $X^{cd}\nabla_{[c}\xi_{d]}$, $\mathbf Y(\mathcal L_\xi\phi)$, and exact-form decomposition. On $B$, $\xi=0$ and $\mathcal L_\xi\phi=0$. The $W^c\xi_c$ and $\mathbf Y$ terms and their field variations vanish there except for $\mathbf Y(\phi;\mathcal L_\xi\delta\phi)$. Covariance identifies this term with $\mathcal L_\xi\mathbf Y(\phi;\delta\phi)$; Cartan's formula [F2] writes it as $\iota_\xi d\mathbf Y+d(\iota_\xi\mathbf Y)$, whose pullback integrates to zero because $\xi=0$ on $B$ and $B$ has no boundary. The $dZ$ variation integrates to zero by Stokes [F3]. The Lagrangian ambiguity $\iota_\xi\mu$ vanishes on $B$, and the exact charge ambiguity also integrates to zero. Therefore $\delta\int_BQ_\xi=\delta\int_BX^{cd}\nabla_{[c}\xi_{d]}$. [A1, F1, F2, F3, F4, algebra]

1.2 Define $w_{cd}:=\nabla_{[c}\xi_{d]}-\kappa\epsilon_{cd}$ along $B$. It vanishes on the background. Since $\xi$ and $B$ are fixed and $\xi=0$ on $B$, $\delta(\nabla_c\xi^a)=\delta\Gamma^a_{ce}\xi^e=0$ there. Lowering the index and using $\nabla_c\xi^a=\kappa\epsilon_c{}^a$ gives $\delta w_{cd}=-\kappa g_{a[d}\delta\epsilon_{c]}{}^a$. The binormal annihilates tangent vectors, so its variation has no tangent-tangent block; its fixed normalization $\epsilon^a{}_b\epsilon^b{}_a=2$ removes the normal-normal antisymmetric block in $g_{a[d}\delta\epsilon_{c]}{}^a$. Thus $\delta w_{cd}$ has only normal-tangent components. The stationary covariant tensor $X$ obeys $\mathcal L_\xi X=0$. At a point of $B$, $\xi=0$, so this equation is invariance under the linear action generated by $\nabla\xi=\kappa\epsilon$, a Lorentz boost in the normal plane. Its tensor components have total normal boost weight zero, and are invariant when both normal directions are reflected. A component with one normal and one tangent index changes sign under this reflection, so it vanishes. The pullback of $X^{cd}\delta w_{cd}$ to $B$ is therefore zero. [A1, F1, algebra]

2.1 On the background, $\nabla_a\xi_b=\kappa\epsilon_{ab}$ and [F4] gives $X^{cd}\epsilon_{cd}=-P^{abcd}\epsilon_{ab}\epsilon_{cd}\,dA_B$. Write the charge term as $X^{cd}(\kappa\epsilon_{cd}+w_{cd})$. Since $w=0$ on the background, its variation is $\kappa\delta(X^{cd}\epsilon_{cd})+X^{cd}\delta w_{cd}$. The second term integrates to zero by step 1.2; the first includes the variations of $P$, the binormal, and the induced area form. Hence $\delta\int_BQ_\xi=\kappa\,\delta\int_BX^{cd}\epsilon_{cd}=-\kappa\,\delta\int_BP^{abcd}\epsilon_{ab}\epsilon_{cd}\,dA_B=(\hbar\kappa/(2\pi k_B))\,\delta S_W$. The coefficient $\kappa$ is the fixed background surface gravity, so no $\delta\kappa$ term appears. [step 1.1, step 1.2, algebra] ∎
## Remarks

The sign is fixed by the displayed curvature, binormal, and Noether-current conventions. Higher-derivative curvature terms require replacing $P$ by the full curvature Euler derivative. This stationary identity provides no dynamical monotonicity theorem and no thermodynamic interpretation without a separate physical assumption.
