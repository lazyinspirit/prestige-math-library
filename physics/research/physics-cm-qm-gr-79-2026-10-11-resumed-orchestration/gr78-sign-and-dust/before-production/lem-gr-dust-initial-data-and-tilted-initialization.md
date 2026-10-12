---
id: lem-gr-dust-initial-data-and-tilted-initialization
kind: lemma
title: "Dust initial data: curvature and connection from (h,K), and the tilted constrained initialization of the Bianchi residuals"
status: draft
origin: session
domain: mathematics
dependency_level: 12
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-dust-reduction-variables-and-gauge, def-gr-dust-electric-magnetic-weyl-variables-and-schouten, def-gr-dust-torsion-and-curvature-residuals, thm-gr-constraint-equations-in-normal-frame, def-gr-spacelike-hypersurfaces-and-cauchy-sets, lem-gr-spacelike-hypersurface-normal-and-second-fundamental-form, def-gr-metric-selected-connection, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, def-gr-tensor-fields-and-components, thm-gr-dust-subsidiary-and-residual-vanishing]
dependency_roles:
  def-gr-dust-reduction-variables-and-gauge: mathematical-premise
  def-gr-dust-electric-magnetic-weyl-variables-and-schouten: mathematical-premise
  def-gr-dust-torsion-and-curvature-residuals: mathematical-premise
  thm-gr-constraint-equations-in-normal-frame: mathematical-premise
  def-gr-spacelike-hypersurfaces-and-cauchy-sets: mathematical-premise
  lem-gr-spacelike-hypersurface-normal-and-second-fundamental-form: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-gr-tensor-fields-and-components: mathematical-premise
  thm-gr-dust-subsidiary-and-residual-vanishing: mathematical-premise
sources:
  references:
    - title: "H. Friedrich and A. D. Rendall, The Cauchy Problem for the Einstein Equations, Living Reviews in Relativity 3 (2000), article 1 (arXiv:gr-qc/0002074), Section 4.2 (The Einstein-Euler System): the hyperbolic reduction of the Einstein-Euler system, the positivity conditions on specific enthalpy and speed of sound (4.38), the frame variables and their reduced equations, and the pressure-free (dust) subsidiary system of Sections 4.2.4-4.2.5, equations (4.26)-(4.48) and (4.56)-(4.63)"
      url: "https://arxiv.org/pdf/gr-qc/0002074"
    - title: "H. Friedrich and A. D. Rendall, The Cauchy Problem for the Einstein Equations, Living Reviews in Relativity 3 (2000), article 1 (arXiv:gr-qc/0002074), Section 5.1 (Local Existence Theorems for the Einstein Equations): harmonic-map gauge, the reduced initial data constructed from (h,chi), the propagation of the gauge by the homogeneous wave system for the gauge residual Delta^alpha, and the local existence theorem"
      url: "https://arxiv.org/pdf/gr-qc/0002074"
verification:
  precheck: pending
---

## Statement

Work in the reduction conventions of [[def-gr-dust-reduction-variables-and-gauge]]
with an initial spacelike surface $\Sigma$ given by $s=0$, on which the dust
data consist of the induced metric $h$, the second fundamental form $K$ with
respect to the future unit normal $N$, and the prescribed future unit dust
velocity $U$ (tilted relative to $\Sigma$ in general). Then:

**(a) [curvature data]** in a normal-adapted tetrad $(N,e_i)$ the Gauss equation
fixes the six purely spatial components of the curvature from $(h,K)$, the
Codazzi equation fixes the eight mixed components (with their cyclic relation),
and the six spatial Ricci equations fix the symmetric part of $R_{0i0j}$; the
remaining four Ricci equations are the Hamiltonian and momentum constraints of
[[thm-gr-constraint-equations-in-normal-frame]]. Transforming this full
algebraic curvature by the Lorentz basis change from the $N$-frame to the
$U$-frame determines the initial electric and magnetic parts $E_{ij}=C_{0i0j}$,
$B_{ij}=C^*{}_{0i0j}$ of the Weyl tensor uniquely;

**(b) [connection data]** the initial connection in the $U$-frame is
determined by the spatial Levi--Civita connection of $h$, the second fundamental
form $K$ and the spatial derivatives and frame components of $U$; its
$U$-component is fixed by the parallel gauge $\Gamma_0{}^i{}_j=0$. Since $U$ is
transverse to $\Sigma$, the tangential directions together with $U$ span the
tangent space, so these data determine all initial connection coefficients;

**(c) [vanishing initial residuals]** with the data of (a),(b) one has
$T^i{}_{jk}=0$ and $\Delta^i{}_{jkl}=0$ on $\Sigma$: the zero tangential torsion
and curvature residuals are the Gauss--Codazzi--Ricci data, the zero
$U$-components are the reduction identities, and the spatial Ricci equations
plus the constraints give the remaining components;

**(d) [tilted Bianchi initialization]** restricting
$D_\omega\Delta=-D_\omega R^{\mathrm{pre}}$ to three tangent slots of $\Sigma$
and using $\Delta|_\Sigma=0$, the dual Bianchi identity and
$q=q_a=0$, one obtains for the residual components of
[[thm-gr-dust-subsidiary-and-residual-vanishing]] clause (d), with a
future-positive timelike initial conormal $\zeta$, writing $z=\zeta(U)>0$ and
$v=\zeta_\perp$ in the $U$ rest frame,
$$zP+\tfrac12\,v\times Q=0,\qquad zQ-\tfrac12\,v\times P=0 ,$$
up to the fixed orientation signs; the combined $6\times6$ block is symmetric
with quadratic form at least $(z-\tfrac12|v|)(|P|^2+|Q|^2)$; since
$z>|v|$ for timelike $\zeta$, this forces $P=Q=0$ on $\Sigma$. No normal
derivatives of the constraints are assumed to vanish; the tilt of $\Sigma$
relative to $U$ is exactly what makes the conormal argument work.

## Facts & Assumptions

**Given:** the reduction conventions, the initial surface data $(h,K,U)$, the constraint equations, and the zero quantities.

[L1] Gauss--Codazzi--Ricci decomposition and constraints in the normal frame ([[thm-gr-constraint-equations-in-normal-frame]], [[lem-gr-spacelike-hypersurface-normal-and-second-fundamental-form]], [[def-gr-spacelike-hypersurfaces-and-cauchy-sets]]).

[L2] The $U$-frame is related to the $N$-frame by a Lorentz basis transformation; the electric and magnetic parts of a Weyl tensor transform by the corresponding orthogonal transformation of the spatial fields, and the transformation is invertible with the two frames differing by a Lorentz boost of parameter determined by $U$ and $N$ ([[def-gr-dust-electric-magnetic-weyl-variables-and-schouten]], [[def-gr-tensor-fields-and-components]]).

[L3] The reduction identities $T^0{}_{ab}=0$, $\Delta^i{}_{j0a}=0$ hold by the gauge; the remaining components of $T,\Delta$ vanish initially by the Gauss--Codazzi data and the constraints ([[def-gr-dust-torsion-and-curvature-residuals]], [[thm-gr-dust-subsidiary-and-residual-vanishing]]).

[L4] The conormal algebra of the tilted initialization: for the split $F$ of [[thm-gr-dust-subsidiary-and-residual-vanishing]] clause (d), the $(k,0)$ components and the spatial dual components of $\zeta^jF_{jkl}=0$ give the displayed pair; the $6\times6$ symmetric block $\left(\begin{smallmatrix}z&-\frac12 v\times\\ \frac12 v\times&z\end{smallmatrix}\right)$ has quadratic form at least $z-\tfrac12|v|$ because $v\times$ is skew-adjoint of norm $|v|$. [L4]

## Proof

**Proof technique:** direct.

1.1 ((a): curvature data.) In the normal-adapted tetrad, the Gauss equation of [L1] expresses the spatial curvature $R_{ijkl}$ through $R^h_{ijkl},K$; the Codazzi equation gives the mixed components $R_{0ijk}$; the Ricci equation and the Ricci trace give $R_{0i0j}$'s symmetric part; and the Hamiltonian and momentum constraints are the remaining Ricci equations. Inserting these components into the Weyl tensor and expanding in the $U$-frame by the Lorentz transformation [L2] yields $E_{ij}$ and $B_{ij}$ uniquely, because the map from Weyl tensors to $(E,B)$ is injective ([[lem-gr-dust-weyl-reconstruction-from-electric-magnetic]]). [L1, L2, algebra]

1.2 ((b): connection data.) In the $U$-frame, the spatial components of the connection are the metric connection of the induced spatial geometry plus terms involving $K$ and the spatial derivatives of $U$; the frame components along $U$ of the connection are the components $\chi_{ij}$ of $\nabla U$, determined by $K$ and $U$'s spatial derivatives; and the parallel gauge sets $\Gamma_0{}^i{}_j=0$. Since $U$ is transverse to $\Sigma$, these data determine every initial connection component. [L1, algebra]

2.1 ((c): zero initial residuals.) The zero time components are the reduction identities [L3]; the purely spatial torsion vanishes because the tentative connection agrees with the Levi--Civita connection of the induced spatial metric on tangential vectors; the curvature residual vanishes because the constructed curvature equals the prescribed one by (a). [step 1.1, step 1.2, L3, algebra]

3.1 ((d): tilted initialization.) Restrict the dual Bianchi identity to tangent triples and use $\Delta|_\Sigma=0$ to get $\zeta^jF_{jkl}=0$ for the future-positive timelike conormal $\zeta$; substituting the $F$-splitting of [[thm-gr-dust-subsidiary-and-residual-vanishing]] clause (d) into the $(k,0)$ and spatial dual components gives the displayed system up to orientation signs. The block is symmetric; by [L4] its quadratic form on $(P,Q)$ is at least $(z-\tfrac12|v|)(|P|^2+|Q|^2)>0$ unless $P=Q=0$, because $z>|v|$ and $|v|\ge\tfrac12|v|$. Hence $P=Q=0$ on $\Sigma$. [step 2.1, L4, algebra] ∎



- **Role.** This is E3d.2's initialization: it shows that the constrained data force all zero quantities and their remaining Bianchi components to vanish initially, which is the hypothesis of the vanishing theorem.
