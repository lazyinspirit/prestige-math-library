---
id: thm-gr-dust-subsidiary-and-residual-vanishing
kind: theorem
title: "Subsidiary system of the dust reduction: Cartan identities, closed homogeneous residual system and vanishing of the residuals"
status: draft
origin: session
domain: mathematics
dependency_level: 11
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-dust-torsion-and-curvature-residuals, def-gr-dust-reduction-variables-and-gauge, def-gr-dust-electric-magnetic-weyl-variables-and-schouten, lem-gr-dust-reduced-evolution-equations, lem-gr-dust-weyl-reconstruction-from-electric-magnetic, thm-gr-periodic-symmetric-hyperbolic-uniqueness-stability, lem-gr-dust-symmetric-hyperbolic-reduction, def-gr-metric-selected-connection, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, def-ck-and-multi-index-notation-in-several-variables]
dependency_roles:
  def-gr-dust-torsion-and-curvature-residuals: mathematical-premise
  def-gr-dust-reduction-variables-and-gauge: mathematical-premise
  def-gr-dust-electric-magnetic-weyl-variables-and-schouten: mathematical-premise
  lem-gr-dust-reduced-evolution-equations: mathematical-premise
  lem-gr-dust-weyl-reconstruction-from-electric-magnetic: mathematical-premise
  thm-gr-periodic-symmetric-hyperbolic-uniqueness-stability: mathematical-premise
  lem-gr-dust-symmetric-hyperbolic-reduction: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-ck-and-multi-index-notation-in-several-variables: mathematical-premise
sources:
  references:
    - title: "H. Friedrich and A. D. Rendall, The Cauchy Problem for the Einstein Equations, Living Reviews in Relativity 3 (2000), article 1 (arXiv:gr-qc/0002074), Section 4.2 (The Einstein-Euler System): the hyperbolic reduction of the Einstein-Euler system, the positivity conditions on specific enthalpy and speed of sound (4.38), the frame variables and their reduced equations, and the pressure-free (dust) subsidiary system of Sections 4.2.4-4.2.5, equations (4.26)-(4.48) and (4.56)-(4.63)"
      url: "https://arxiv.org/pdf/gr-qc/0002074"
    - title: "H. Friedrich and A. D. Rendall, The Cauchy Problem for the Einstein Equations, Living Reviews in Relativity 3 (2000), article 1 (arXiv:gr-qc/0002074), Section 3.1 (Symmetric Hyperbolic Systems): the definition of a quasilinear symmetric hyperbolic system, the finite-dimensional mollifier approximation (3.1) solved by ODE theory, the energy and Moser product/composition estimates, the higher-order energy inequality, uniqueness, the Rellich/Ascoli compactness step and the passage to a classical solution, with Remarks 1-6 on smooth persistence, the continuation criterion, Cauchy stability and the non-identity time matrix"
      url: "https://arxiv.org/pdf/gr-qc/0002074"
verification:
  precheck: pending
---

## Statement

Work in the reduction conventions of [[def-gr-dust-reduction-variables-and-gauge]]
and with the zero quantities $z=(T,\Delta,F,q)$ of
[[def-gr-dust-torsion-and-curvature-residuals]]; assume the gauge conditions
$e_0=U$, $\Gamma_0{}^i{}_j=0$ and $q_k=0$ of that item and the reduced system of
[[lem-gr-dust-reduced-evolution-equations]], so that $P_{ij}=Q_{ij}=0$,
$T^0{}_{ab}=0=\Delta^i{}_{j0a}$ and the transport equations hold. Then:

**(a) [Cartan identities]** exterior differentiation of the structure equations
gives exactly $D_\omega\Theta^i=\Omega^i{}_j\wedge\theta^j$ and
$D_\omega\Omega^i{}_j=0$; and the algebraic Bianchi identity of the prescribed
curvature gives $R^{\mathrm{pre}}\wedge\theta=0$;

**(b) [reduction identities]** $\iota_U\Theta=0$ and $\iota_U\Delta=0$
identically; consequently the first Cartan identity gives a transport equation
for the spatial torsion, $e_0(\Theta^a{}_{ib})=N(z)$, and the spatial
derivatives of the vanishing time components may be dropped;

**(c) [commutator identity]** for a tensor field $A$,
$$(\nabla_i\nabla_j-\nabla_j\nabla_i)A=\Omega_{ij}\cdot A-\Theta_{ij}{}^p\nabla_pA,$$
where the second covariant derivative differentiates its lower derivative index
covariantly as well as every index of $A$; a literal commutator omitting the
derivative-slot terms has instead a frame-bracket term and is not this identity;

**(d) [F splitting]** with $P_i=F_{0i0}$ and
$Q_i=-\tfrac12\epsilon_i{}^{kl}F_{0kl}$ one has
$$F_{jkl}=2U_jP_{[k}U_{l]}+h_{j[k}P_{l]}+Q_i\bigl(U_j\epsilon^i{}_{kl}-\epsilon^i{}_{j[k}U_{l]}\bigr)-2P_{j[k}U_{l]}-Q_{ji}\epsilon^i{}_{kl}-\tfrac12\kappa\,h_{j[k}q_{l]}-\tfrac13\kappa\,q\,h_{j[k}U_{l]},$$
with $q=U(r)+r\chi$ and $q_l$ the spatial part of the zero vector; the four rest-frame components $F_{0a0},F_{0ab},F_{a0b},F_{abc}$ are recovered by $P,Q$, the symmetric tracefree evolution equations, the traces $q,q_a$ and the curvature cyclic/trace relations, so every Bianchi residual is represented;

**(e) [divergence identity]** the double divergence of the reconstructed Weyl part satisfies
$$\nabla^jF_{jkl}=-\Delta^p{}_{[i}{}^{i}{}_{j}C^{j]}{}_{pkl}+C^{ij}{}_{p[l}\Delta^p{}_{k]ij}+\tfrac12\Theta_i{}^p{}_j\nabla_pC^{ij}{}_{kl}+\Delta^p{}_{[l}{}^j{}_{k]}S_{pj}-\Delta^p{}_j{}^j{}_{[k}S_{l]p}+\nabla_pS^j{}_{[l}\Theta_{k]}{}^p{}_j,$$
every term of which contains an undifferentiated residual $\Theta$ or $\Delta$ times a smooth coefficient built from the reduced solution or its derivatives (in particular no untracked derivatives of residuals);

**(f) [closed subsidiary system]** the components (b), (d), (e) together with the identity $D_\omega\Delta=-D_\omega R^{\mathrm{pre}}$ expressed through $F$ and the conservation of the prescribed Schouten tensor form a closed linear homogeneous first-order system in $(\Theta,\Delta,P,Q)$ with smooth locally bounded coefficients: the spatial torsion and the spatial curvature residual satisfy transport equations along $U$, the pair $(P,Q)$ satisfies the symmetric-hyperbolic curl pair
$$0=\mathcal L_UP_k+\tfrac12\epsilon_k{}^{ij}D_iQ_j+N(z),\qquad 0=\mathcal L_UQ_k-\tfrac12\epsilon_k{}^{ij}D_iP_j+N(z),$$
with curl speed at most $\tfrac12$ and transport speed zero, and its time matrix is positive definite on the spacelike initial surface; hence by the energy uniqueness of the local well-posedness theorem the residuals vanish from zero initial data: if $z=0$ on a spacelike surface and the constraints hold there, then $z=0$ on the domain of determination;

**(g) [conclusion]** zero residuals imply that the tentative connection is torsion-free and metric-compatible, hence Levi--Civita; that the reconstructed curvature is the actual curvature, with Ricci trace the prescribed Einstein Ricci and all remaining Bianchi constraints satisfied; hence the metric solves the full Einstein-dust field equation.

## Facts & Assumptions

**Given:** the reduction data and gauge, the zero-quantity definition, the reduced system, and the Cartan/commutator calculus.

[L1] Cartan calculus: the structure equations and the Bianchi identities $D_\omega\Theta=\Omega\wedge\theta$, $D_\omega\Omega=0$ follow from $d^2=0$; the terms $d\omega\wedge\theta$ survive in the first and the two $\omega\wedge d\theta$ terms cancel; in the second, $d(\omega\wedge\omega)=d\omega\wedge\omega-\omega\wedge d\omega$ cancels the connection commutator ([[def-gr-dust-torsion-and-curvature-residuals]]).

[L2] The prescribed curvature has the algebraic Bianchi identity and its Schouten part is constructed so that $R^{\mathrm{pre}}\wedge\theta=0$ and the prescribed Ricci is the dust Einstein Ricci ([[def-gr-dust-electric-magnetic-weyl-variables-and-schouten]]).

[L3] The reduction identities $\iota_U\Theta=0$, $\iota_U\Delta=0$ are exactly the assumptions $T^0{}_{ab}=0$, $\Delta^i{}_{j0a}=0$ of the reduced system, restated in form notation ([[lem-gr-dust-reduced-evolution-equations]]). [L3]

[L4] The commutator identity (c) is the exact antisymmetrization formula for a connection with torsion; expanding $\nabla_i=e_i+\Gamma_i\cdot$ and the derivative-slot terms gives the frame-bracket term ([[def-gr-metric-selected-connection]], [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]], [[def-ck-and-multi-index-notation-in-several-variables]]).

[L5] Hyperbolic uniqueness: linear symmetric hyperbolic systems with zero Cauchy data have zero solutions on the domain of determination ([[thm-gr-periodic-symmetric-hyperbolic-uniqueness-stability]], [[lem-gr-dust-symmetric-hyperbolic-reduction]] for the symbol bounds).

## Proof

**Proof technique:** direct.

1.1 (Identities (a), (b).) Exterior-differentiate the structure equations and expand: (a) is the standard Cartan--Bianchi computation of [L1], with $R^{\mathrm{pre}}\wedge\theta=0$ from the algebraic Bianchi identity [L2]; (b) is [L3], and writing the first identity in components and taking the $0ab$ components uses $\iota_U\Theta=0$ to produce the transport equation for the spatial torsion, whose right side is linear in $\Theta,\Delta$ with coefficients from the reduced solution. [L1, L2, L3, algebra]

1.2 (Commutator (c).) Expand $(\nabla_i\nabla_j-\nabla_j\nabla_i)A$ with $\nabla_i=e_i+\Gamma_i\cdot$; the derivative-slot terms produce $[e_i,e_j]-(\Gamma_i{}^p{}_j-\Gamma_j{}^p{}_i)e_p=-\Theta_{ij}{}^p e_p$, the connection terms produce $\Omega_{ij}\cdot A$ acting on the tensor indices, and the remaining terms are the covariant derivative of $A$ in the torsion direction. This is (c); the warning about the derivative-slot terms is part of the computation. [L4, algebra]

2.1 (Splitting and divergence (d), (e).) Insert the reconstruction of the Weyl tensor into the definition of $F$, expand the double divergence, and use the commutator identity (c) with $A\in\{C,S\}$ to move derivatives and expose the curvature terms; the curvature terms with $\Omega=R^{\mathrm{pre}}$ cancel by the reconstructed cyclic/trace identities and the symmetric Schouten formula, and the surviving terms are exactly those displayed in (e), each containing an undifferentiated $\Theta$ or $\Delta$ times a smooth coefficient. For (d), evaluate the four rest-frame component families: $F_{0a0}=P_a$ and $F_{0ab}=-2Q_{[a}U_{b]}$-type by definition, the symmetric tracefree parts are the evolution equations (which vanish by the reduced system), the traces are $q$ and $q_a=r\nabla_UU_a=0$, and the remaining components are fixed by the curvature cyclic/trace relations, giving the displayed splitting. [step 1.2, L2, algebra]

3.1 (Closure and vanishing (f), (g).) Compose the transport equations of (b) and the second Cartan identity, the curl pair obtained from (d) and (e) as in the statement, and the identity $D_\omega\Delta=-D_\omega R^{\mathrm{pre}}$ with the conservation of the prescribed Schouten tensor: all coefficient functions are smooth and locally bounded because they are built from the reduced solution, and the principal part is transport plus the curl block with the symbol analysed in [[lem-gr-dust-symmetric-hyperbolic-reduction]], whose time matrix is positive on the spacelike initial surface. With zero initial data the unique solution of this linear homogeneous symmetric hyperbolic system is zero on the domain of determination [L5]. Thus all zero quantities vanish. [step 2.1, L5, algebra]

4.1 (Conclusion (g).) Vanishing torsion makes the tentative connection torsion-free and metric-compatible (the metric compatibility is built into the reduced variables), hence equal to the Levi--Civita connection; vanishing curvature residual makes the reconstructed curvature the actual one; its Ricci trace is the prescribed Einstein Ricci by the construction of $S$; the vanishing of $F$ supplies the remaining Bianchi constraints; hence the metric solves the Einstein-dust equation. [step 3.1, L2, algebra] ∎



- **Role.** This is E3d.1's closure: it shows that the reduced system plus constraints implies the full system, so the local existence theorem [[thm-gr-dust-local-evolution]] can work entirely within the symmetric hyperbolic reduction.
