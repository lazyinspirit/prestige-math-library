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
$$0=Q_{ij}=\mathcal L_UB_{ij}-D_kE_{l(i}\epsilon_{j)}{}^{kl}-\chi^l{}_{(i}B_{j)l}-2\chi_{(i}{}^lB_{j)l}+\chi B_{ij}+\chi^{kl}B^{pq}\epsilon_{pk(i}\epsilon_{qlj)},$$
where $\mathcal L_U$ is the Lie derivative along $U$ and the bracket on the
indices $i,j$ has weight $\tfrac12$; they are obtained by projecting the
Bianchi identity of the prescribed curvature onto the symmetric tracefree
spatial parts, the density-derivative terms cancelling by $q=0$;

**(b) [trace preservation]** extend the displayed symmetric equations of (a) algebraically to all symmetric spatial $E,B$. Contracting this extension with $h^{ij}$ gives $U(t_E)+2\chi t_E=0$ and $U(t_B)=0$, where $t_T=h^{ij}T_{ij}$. Thus
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

[L1] The metric-compatible parallel frame has $h_{ij}=-\delta_{ij}$, $\epsilon_{ijk}=\epsilon_{0ijk}$, $\Gamma_0{}^i{}_j=0$, and $\Gamma_a{}^b{}_0=\Gamma_a{}^0{}_b=-\chi_{ab}$. The projected derivative $D$ retains the arbitrary spatial connection coefficients; the independent-frame curvature uses the actual frame bracket. The curvature-Bianchi residual to be projected is $F_{jkl}=\nabla^iC_{ijkl}-\tfrac12(\nabla_kS_{lj}-\nabla_lS_{kj})$, and $q_j=\nabla_i(rU^iU_j)=qU_j$ in this acceleration-free gauge ([[def-gr-dust-reduction-variables-and-gauge]], [[def-gr-dust-torsion-and-curvature-residuals]]).

[L2] Exact reconstruction: $C_{0i0j}=E_{ij}$, $C_{0ijk}=B_{ip}\epsilon_{pjk}$ and $C_{aipj}=-\delta_{ip}E_{ja}+\delta_{ij}E_{pa}+\delta_{ap}E_{ji}-\delta_{aj}E_{pi}$, with $l_{00}=l_{ab}\delta^{ab}/3=-1$. The Schouten components are those of [[def-gr-dust-electric-magnetic-weyl-variables-and-schouten]]; constant $\Lambda$ differentiates to zero because $\nabla\gamma=0$ ([[lem-gr-dust-weyl-reconstruction-from-electric-magnetic]], [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]).

[L3] Curl symbol: the operator $C(\xi)$ on symmetric spatial tensors is skew-adjoint for the positive Frobenius product and has norm at most $|\xi|$ ([[lem-gr-dust-symmetric-hyperbolic-reduction]]). $h^{ij}\mathcal L_Uh_{ij}$-type contractions satisfy $\mathcal L_Uh_{ij}=2\chi_{(ij)}$ in the acceleration-free comoving gauge. [L3]

## Proof

**Proof technique:** direct.

1.1 (Electric projection.) Put $X_{ij}=\chi_{ij}$, $\theta=\chi=-\operatorname{tr}X$, and $\dot T_{ij}=(\nabla_UT)_{ij}=\partial_sT_{ij}$ for parallel-frame components. Spatial repeated indices in this step denote explicit Euclidean sums. The four lower-index connection actions in $\nabla^aC_{ai0j}$ give $\dot E_{ij}+\epsilon_{iap}D_aB_{jp}-\operatorname{tr}(X)E_{ij}+X_{ai}E_{aj}-X_{ap}C_{aipj}$; inserting [L2] makes this $\dot E_{ij}+\epsilon_{iap}D_aB_{jp}+2X_{ai}E_{aj}+X_{jp}E_{pi}-2\operatorname{tr}(X)E_{ij}-\delta_{ij}X_{ap}E_{ap}$. Also $\nabla_0S_{ji}=\kappa\dot r\delta_{ij}/3$ and $\nabla_jS_{0i}=\kappa rX_{ji}$, so the symmetric Schouten contribution is $\kappa rX_{(ij)}/2-\kappa\dot r\delta_{ij}/6$. Its Euclidean trace is $-\kappa q/2$; imposing $q=0$ or removing the trace yields $\kappa r(X_{(ij)}+\theta\delta_{ij}/3)/2$. Symmetrize the Weyl terms and use $(\mathcal L_UT)_{ij}=\dot T_{ij}-X_{ik}T_{kj}-X_{jk}T_{ik}$, $\chi_i{}^l=-X_{il}$ and $\chi^l{}_i=-X_{li}$ to obtain exactly the displayed $P_{ij}$. The derivative term is the displayed positive symmetric curl of $B$. [L1, L2, algebra]

1.2 (Magnetic projection.) Contract the last pair with $\epsilon_i{}^{kl}/2$. The time derivative is $\dot B_{ji}$. The spatial derivative part is $\epsilon_{ijl}D_aE_{la}-\epsilon_{ikl}D_kE_{lj}$, whose first term disappears on symmetrization. The four connection-slot contributions before contraction are $-\operatorname{tr}(X)B_{jp}\epsilon_{pkl}+X_{aj}B_{ap}\epsilon_{pkl}-X_{ak}B_{lp}\epsilon_{paj}+X_{al}B_{kp}\epsilon_{paj}$. The first two contract to $\theta B_{ij}+X_{aj}B_{ai}$. The last two contract to $-\epsilon_{ikl}X_{ak}B_{lp}\epsilon_{paj}$; interchanging dummy indices and using the symmetry of $B$ makes its symmetric part $+X_{kl}B_{pq}\epsilon_{pk(i}\epsilon_{qlj)}$. Hence the symmetric Weyl projection is $\dot B_{ij}-\operatorname{curl}(E)_{ij}+\operatorname{sym}(X^{\mathsf T}B)_{ij}+\theta B_{ij}+X_{kl}B_{pq}\epsilon_{pk(i}\epsilon_{qlj)}$. The Schouten contribution is $-\kappa\epsilon_i{}^{kj}D_kr/6$, antisymmetric in $i,j$, so its symmetric projection vanishes. Converting $\dot B$ to $\mathcal L_UB$ by step 1.1 gives exactly the displayed $Q$ with positive final double-epsilon term. No symmetry of $X$, hypersurface orthogonality or restriction on tilt was used. [L1, L2, step 1.1, algebra]

1.3 (Transport equations (c).) The first equation is the vanishing of the time torsion in the parallel-comoving gauge: with $\Gamma_0{}^i{}_j=0$ and $e_0=U$ the zero-torsion identity is exactly $\partial_se_a{}^\mu=-\Gamma_a{}^j{}_0e_j{}^\mu$, the displayed transport equation. The second is the vanishing of the time-curvature residual $\Delta^i{}_{j0a}=0$ written in the same gauge; for tentative data the actual curvature is defined with the frame bracket, so the independent-frame curvature identity reads $R^{\mathrm{act}\,i}{}_{j0a}=\partial_s\Gamma_a{}^i{}_j+\Gamma_a{}^k{}_0\Gamma_k{}^i{}_j$, giving the displayed equation when the time-curvature residual vanishes. The third is $q=0$, with no division by $r$: $U(r)+r\chi=0$ reads $\partial_sr=-r\chi$. [L1, algebra]

2.1 (Trace preservation (b).) On the algebraic extension to symmetric spatial tensors, let $t_T=h^{ij}T_{ij}$. Since $\mathcal L_Uh_{ij}=2\chi_{(ij)}$, one has $h^{ij}\mathcal L_UT_{ij}=U(t_T)+2\chi^{ij}T_{ij}$. The symmetric curl has identically zero trace: $\epsilon^{ikl}D_kT_{li}=0$ by symmetry in $l,i$. The electric matter term has zero trace. The electric coupling contractions combine to $-2\chi^{ij}E_{ij}+2\chi t_E$, giving $h^{ij}P_{ij}=U(t_E)+2\chi t_E$. For the magnetic double-epsilon term the identity $\sum_i\epsilon_{pki}\epsilon_{qli}=\delta_{pq}\delta_{kl}-\delta_{pl}\delta_{kq}$ gives $h^{ij}\chi^{kl}B^{pq}\epsilon_{pk(i}\epsilon_{qlj)}=\chi^{kl}B_{kl}-\chi t_B$. All magnetic coupling contractions therefore cancel the $2\chi^{ij}B_{ij}$ Lie contribution and yield $h^{ij}Q_{ij}=U(t_B)$. These homogeneous scalar ODEs preserve zero initial traces along every flow line, including where $r=0$; symmetry is preserved by the displayed symmetrizations. Thus the tracefree restriction of the extended system is invariant and is precisely the projected Weyl system derived in steps 1.1–1.2. [step 1.1, step 1.2, L3, algebra]

3.1 (Symmetry and positivity (d).) With the positive Frobenius product on spatial symmetric tensors, [L3] gives $C(\xi)^*=-C(\xi)$ and $\|C(\xi)\|\le|\xi|$; hence the $E,B$ block of the principal symbol is the symmetric matrix $\left(\begin{smallmatrix}0&C(\xi)\\-C(\xi)&0\end{smallmatrix}\right)$ with eigenvalues bounded by $|\xi|$, while all other blocks are multiples of the transport direction $U$: their symbol contributions are $\zeta(U)$ times the identity or zero. The full time matrix at a covector $\zeta$ is therefore positive definite whenever $\zeta(U)>|\zeta_\perp|$, which holds exactly for future-positive timelike conormals; the displayed $P,Q$ system with the transport equations is thus symmetric hyperbolic. [step 1.3, L3, algebra] ∎



- **Role.** Clause (d) is the hyperbolicity input for the local dust existence theorem; the residual and subsidiary equations that make the reduced system equivalent to the full Einstein-dust system are analysed in [[thm-gr-dust-subsidiary-and-residual-vanishing]] and [[thm-gr-dust-subsidiary-and-residual-vanishing]].
