---
id: lem-gr-dust-reduced-evolution-equations
kind: lemma
title: "The reduced dust evolution equations: Weyl system, trace preservation, transport equations and symmetric hyperbolicity"
status: draft
origin: session
domain: mathematics
dependency_level: 10
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-dust-reduction-variables-and-gauge, def-gr-dust-electric-magnetic-weyl-variables-and-schouten, lem-gr-dust-weyl-reconstruction-from-electric-magnetic, def-gr-curvature-tensor-and-derived-tensors, def-gr-metric-selected-connection, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, lem-gr-dust-symmetric-hyperbolic-reduction, def-ck-and-multi-index-notation-in-several-variables, def-c-r-and-smooth-maps-between-smooth-manifolds, def-gr-dust-torsion-and-curvature-residuals]
dependency_roles:
  def-gr-dust-reduction-variables-and-gauge: mathematical-premise
  def-gr-dust-electric-magnetic-weyl-variables-and-schouten: mathematical-premise
  lem-gr-dust-weyl-reconstruction-from-electric-magnetic: mathematical-premise
  def-gr-curvature-tensor-and-derived-tensors: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  lem-gr-dust-symmetric-hyperbolic-reduction: mathematical-premise
  def-ck-and-multi-index-notation-in-several-variables: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  def-gr-dust-torsion-and-curvature-residuals: mathematical-premise
sources:
  references:
    - title: "H. Friedrich and A. D. Rendall, The Cauchy Problem for the Einstein Equations, Living Reviews in Relativity 3 (2000), article 1 (arXiv:gr-qc/0002074), Section 4.2 (The Einstein-Euler System): the hyperbolic reduction of the Einstein-Euler system, the positivity conditions on specific enthalpy and speed of sound (4.38), the frame variables and their reduced equations, and the pressure-free (dust) subsidiary system of Sections 4.2.4-4.2.5, equations (4.26)-(4.48) and (4.56)-(4.63)"
      url: "https://arxiv.org/pdf/gr-qc/0002074"
verification:
  precheck: pending
---

## Statement

Work in the reduction conventions of
[[def-gr-dust-reduction-variables-and-gauge]] with $q:=U(r)+r\chi=0$ (the
dust continuity equation in the comoving gauge) and let $E,B$ be the
electric-magnetic variables of
[[def-gr-dust-electric-magnetic-weyl-variables-and-schouten]]. Then:

**(a) [Weyl evolution]** the reduced Weyl equations are
$$0=P_{ij}=\mathcal L_UE_{ij}+D_kB_{l(i}\epsilon_{j)}{}^{kl}-3\chi_{(i}{}^lE_{j)l}-2\chi^l{}_{(i}E_{j)l}+h_{ij}\chi^{kl}E_{kl}+2\chi E_{ij}+\tfrac12\kappa r\bigl(\chi_{(ij)}-\tfrac13\chi h_{ij}\bigr),$$
$$0=Q_{ij}=\mathcal L_UB_{ij}-D_kE_{l(i}\epsilon_{j)}{}^{kl}-\chi^l{}_{(i}B_{j)l}-2\chi_{(i}{}^lB_{j)l}+\chi B_{ij}-\chi^{kl}B^{pq}\epsilon_{pk(i}\epsilon_{qlj)},$$
where $\mathcal L_U$ is the Lie derivative along $U$ and the bracket on the
indices $i,j$ has weight $\tfrac12$; they are obtained by projecting the
Bianchi identity of the prescribed curvature onto the symmetric tracefree
spatial parts, the density-derivative terms cancelling by $q=0$;

**(b) [trace preservation]** contracting (a) with $h^{ij}$ shows that
$h^{ij}E_{ij}$ and $h^{ij}B_{ij}$ satisfy homogeneous transport equations along
$U$; consequently zero initial traces remain zero, and the evolution may be
restricted to the five-dimensional tracefree space;

**(c) [transport equations]** with the parallel-comoving gauge one has
$$\partial_se_a{}^\mu=-\Gamma_a{}^j{}_0e_j{}^\mu,\qquad \partial_s\Gamma_a{}^i{}_j=R^{\mathrm{pre}\,i}{}_{j0a}-\Gamma_k{}^i{}_j\Gamma_a{}^k{}_0,\qquad \partial_sr=-r\chi,$$
the first two expressing zero time torsion and zero time-curvature residual, the
third the continuity equation; for tentative data the frame bracket is used in
the curvature definition so that these hold identically;

**(d) [symmetric hyperbolicity]** the system of (a) and (c), together with the
definition of the extrinsic curvature variables, is a first-order quasilinear
system for $(e_a{}^\mu,\Gamma_a{}^i{}_j,E_{ij},B_{ij},r)$ which is symmetric
hyperbolic on a spacelike initial surface: with the positive spatial Frobenius
product, the principal symmetric-tensor curl
$$(C(\xi)B)_{ij}=\epsilon_{kl(i}\xi^kB_{j)}{}^l$$
is skew-adjoint with operator norm at most $|\xi|$ ([[lem-gr-dust-symmetric-hyperbolic-reduction]]), so the coupled block
$\left(\begin{smallmatrix}0&C(\xi)\\-C(\xi)&0\end{smallmatrix}\right)$ is
symmetric with the same bound, every other block is transport along $U$, and a
future-positive timelike conormal $\zeta$ (satisfying
$\zeta(U)>|\zeta_\perp|$) makes the total time matrix positive definite; in
particular the local well-posedness theorem for symmetric hyperbolic systems
applies to the reduced dust system.

## Facts & Assumptions

**Given:** the reduction data, the gauge conditions, and the reconstruction of the Weyl tensor from $(E,B)$.

[L1] Projection identities: for a spatial tensor $T$ the fully projected derivative is $DT$, and the actual curvature, torsion and connection coefficients are those of the tentative frame; the Bianchi identity of the prescribed curvature is the identity $\nabla_{[i}R^{\mathrm{pre}}{}_{jk]lm}=0$ plus the residual conventions of [[def-gr-dust-torsion-and-curvature-residuals]] ([[def-gr-dust-reduction-variables-and-gauge]], [[def-gr-curvature-tensor-and-derived-tensors]]).

[L2] Reconstruction and its differential consequences: the reconstruction formula of [[lem-gr-dust-weyl-reconstruction-from-electric-magnetic]] and its first derivatives express the Weyl tensor and its covariant derivative in terms of $E,B$ and the connection, with the Bianchi identity producing exactly the displayed $P_{ij},Q_{ij}$ ([[lem-gr-dust-weyl-reconstruction-from-electric-magnetic]], [[def-gr-metric-selected-connection]], [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]).

[L3] Curl symbol: the operator $C(\xi)$ on symmetric spatial tensors is skew-adjoint for the positive Frobenius product and has norm at most $|\xi|$ ([[lem-gr-dust-symmetric-hyperbolic-reduction]]). $h^{ij}\mathcal L_Uh_{ij}$-type contractions satisfy $\mathcal L_Uh_{ij}=2\chi_{(ij)}$ in the acceleration-free comoving gauge. [L3]

## Proof

**Proof technique:** direct.

1.1 (Derivation of (a).) Insert the reconstructed $C=C[E,B]$ and the Schouten tensor $S$ of [[def-gr-dust-electric-magnetic-weyl-variables-and-schouten]] into the symmetric spatial projections $F_{(i|0|j)}-\tfrac13h_{ij}h^{kl}F_{k0l}$ and $\tfrac12\epsilon_{(i}{}^{kl}F_{j)kl}$ of the curvature-Bianchi residual $F_{jkl}=\nabla^i(C_{ijkl}+S\text{-terms})$ of [L1]. Expanding the projected derivative produces the Lie-derivative terms $\mathcal L_UE,\mathcal L_UB$, the curl terms $D_kB\epsilon$, $D_kE\epsilon$, the $\chi$-coupling terms collected in the displayed equations, and the matter term $\tfrac12\kappa r(\chi_{(ij)}-\tfrac13\chi h_{ij})$ from the Ricci part; the derivative of $r$ in the trace part cancels against $q=U(r)+r\chi=0$, and the spatial derivative of $r$ has no symmetric tracefree component in these projections, which is why no density-derivative coupling appears in the principal block. This gives (a). [L1, L2, algebra]

1.2 (Transport equations (c).) The first equation is the vanishing of the time torsion in the parallel-comoving gauge: with $\Gamma_0{}^i{}_j=0$ and $e_0=U$ the zero-torsion identity is exactly $\partial_se_a{}^\mu=-\Gamma_a{}^j{}_0e_j{}^\mu$, the displayed transport equation. The second is the vanishing of the time-curvature residual $\Delta^i{}_{j0a}=0$ written in the same gauge; for tentative data the actual curvature is defined with the frame bracket, so the identity holds by definition of the tentative curvature in the reduced system. The third is $q=0$ with $r>0$: $U(r)+r\chi=0$ reads $\partial_sr=-r\chi$. [L1, algebra]

2.1 (Trace preservation (b).) Contract the two equations of (a) with $h^{ij}$ and commute $h$ through $\mathcal L_U$ using $\mathcal L_Uh_{ij}=2\chi_{(ij)}$ [L3]; the curl terms contract to divergences of $E,B$ and the coupling terms combine into multiples of the traces, giving homogeneous transport equations for the traces. Hence the subspace of tracefree pairs is invariant, and zero initial traces stay zero. [step 1.1, L3, algebra]

3.1 (Symmetry and positivity (d).) With the positive Frobenius product on spatial symmetric tensors, [L3] gives $C(\xi)^*=-C(\xi)$ and $\|C(\xi)\|\le|\xi|$; hence the $E,B$ block of the principal symbol is the symmetric matrix $\left(\begin{smallmatrix}0&C(\xi)\\-C(\xi)&0\end{smallmatrix}\right)$ with eigenvalues bounded by $|\xi|$, while all other blocks are multiples of the transport direction $U$: their symbol contributions are $\zeta(U)$ times the identity or zero. The full time matrix at a covector $\zeta$ is therefore positive definite whenever $\zeta(U)>|\zeta_\perp|$, which holds exactly for future-positive timelike conormals; the displayed $P,Q$ system with the transport equations is thus symmetric hyperbolic. [step 1.2, L3, algebra] ∎



- **Role.** Clause (d) is the hyperbolicity input for the local dust existence theorem; the residual and subsidiary equations that make the reduced system equivalent to the full Einstein-dust system are analysed in [[thm-gr-dust-subsidiary-and-residual-vanishing]] and [[thm-gr-dust-subsidiary-and-residual-vanishing]].
