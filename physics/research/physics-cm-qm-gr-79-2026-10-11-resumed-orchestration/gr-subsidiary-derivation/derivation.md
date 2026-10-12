# Exact Cartan subsidiary construction (research proposal)

This construction uses the geometric curvature of the tentative metric connection, including the actual frame bracket. It does not set all residuals to zero in the reduced premise. It applies with smooth r>=0, including r=0, provided a smooth unit timelike gauge field U is prescribed through vacuum. No division by r occurs. The cosmological constant is constant and contributes only a parallel multiple of the metric to S.

## Conventions and reduced premises

Use gamma=diag(1,-1,-1,-1), U=e0, Gamma_0=0, Gamma metric-compatible. Write T^i_jk=Theta^i(ej,ek), Omega^i_jkl for actual curvature, Rbar=C+gamma_[ S ] for algebraic prescribed curvature, and Delta=Omega-Rbar. C has every algebraic Weyl symmetry; S=κr(U U−gamma/3)+constant gamma. The dust reduced equations impose only

T^i_0a=0, Delta^i_j0a=0, P_ab=Q_ab=0, q=U(r)+r chi=0.

They do not impose T^0_ab=0 (which would suppress generic vorticity), spatial Delta=0, or the vectors P,Q=0. The gauge implies a=∇_U U=0; hence the full conservation vector q_j=∇^i(rU_iU_j)=qU_j+ra_j vanishes for every r, including zero. Distinguish this full vector from its spatial part in older source notation.

Set F_jkl=∇^i(C_ijkl−gamma_i[k S_l]j), P_a=F_0a0 and Q_a=−ε_a^{bc}F_0bc/2. Algebraic Weyl cyclic/trace identities and ∇^j S_lj=∇_l tr S yield the exact reduced splitting

F_jkl=2U_jP_[k U_l]+h_j[k P_l]+Q_i(U_j ε^i_kl−ε^i_j[k U_l]).

The full unreduced splitting additionally contains −2P_j[k U_l]−Q_ji ε^i_kl−κh_j[k q_l]/2−κq h_j[k U_l]/3. Here P_ab,Q_ab denote the symmetric tracefree evolution projections, whereas P_a,Q_a are constraint vectors. Brackets have weight 1/2.

## Commutator, including its derivative slot

For every covariant tensor A define (K_R_ab A)_i1...in=−sum_v R^p_ivab A_i1...p...in. The full antisymmetrized second covariant derivative obeys

[∇_a,∇_b]A=K_Omega_ab A−T^p_ab ∇_p A.

The derivative slot itself is differentiated. The literal operators (∇_ea∇_eb−∇_eb∇_ea) on tensors instead contain ∇_[ea,eb]; these are different formulas.

## An explicit homogeneous double-divergence operator

Define the following *actual* coefficient-linear function of spatial T,Delta (the time components already vanish):

H_kl(T,Delta)= (1/2) gamma^{ja}gamma^{ib}(K_Delta_ab C)_ijkl − gamma^{ja}(K_Delta_a[k S)_l]j − (1/2)gamma^{ja}gamma^{ib}T^p_ab ∇_p C_ijkl + gamma^{ja}T^p_a[k ∇_p S_l]j − (κ/6)T^p_kl ∇_p r.

Then ∇^j F_jkl=H_kl. This formula avoids the potentially incorrect practice of copying an off-shell curvature formula whose bracket has already been replaced by antisymmetrized connection coefficients.

Derivation: antisymmetry in i,j gives ∇^j∇^i C_ijkl=(1/2)[∇^j,∇^i]C_ijkl. Moving ∇^j past ∇_[k in the S term gives −[∇^j,∇_[k]S_l]j−∇_[k∇^jS_l]j. Conservation gives ∇^jS_lj=−κ∇_l r/3, so the last term is κ∇_[k∇_l]r/3=−κT^p_kl∇_p r/6. Substitute the commutator and Omega=Rbar+Delta. The purely algebraic curvature contributions cancel:

(1/2)gamma^{ja}gamma^{ib}(K_Rbar_ab C)_ijkl−gamma^{ja}(K_Rbar_a[k S)_l]j=0.

This cancellation uses pair interchange, the cyclic identity and trace-freeness of C, symmetry of S and Rbar_ijkl=C_ijkl+gamma_i[k S_l]j−gamma_j[k S_l]i. Expanding K gives four C-slot contributions and two S-slot contributions; the contracted i,j C-slot contributions are Ricci contractions, the k,l contributions cancel the C*S terms in the S commutator, and the remaining S*S terms are the antisymmetric part of the symmetric product S^2 and the antisymmetric metric multiple of tr(S). Thus every term left is displayed in H and contains an undifferentiated residual. H is linear, with smooth coefficients from the fixed reduced solution and its first derivatives.

## Exact Cartan transport equations

Let Rbarform^i_j=(1/2)Rbar^i_jkl theta^k wedge theta^l. Cartan gives DTheta=Omega wedge theta and DOmega=0. Algebraic cyclic symmetry gives Rbarform wedge theta=0. Therefore

L_U Theta^i=Delta^i_0,

where the right side is the curvature-residual 2-form with endomorphism input index 0, and the left is the ordinary Lie derivative of form components in the parallel frame. This follows by contracting DTheta=Delta wedge theta with U, using i_UTheta=i_UDelta=0 and i_Uomega=0. It is exact, rather than an unspecified N(z). In frame components its principal derivative is e0(T^i_ab); the other Lie-derivative terms are −Theta^i([U,ea],eb)−Theta^i(ea,[U,eb]), with [U,ea]=−Gamma_a^k_0 e_k.

For curvature let Bbar^i_mjkl=cyclic_(jkl) ∇_j Rbar^i_mkl. The algebraic Hodge identities imply, when q_j=0,

Bbar^i_mjkl=(1/2) ε_jkl^p F_prs ε_m^{irs}.

To check this identity split Rbar into C, the tracefree-Schouten curvature E, and scalar curvature G. Left and right duals agree on C,G and differ by a sign on E. Apply this relation to ∇Rbar, contract the derivative with the right dual and insert F. The trace terms are exactly the conservation combination ∇^jS_lj−∇_l tr S=κq_l and hence vanish. This proves the relation without torsion assumptions because it is algebra in the tensor ∇Rbar, rather than the exterior derivative.

Exterior differentiation includes the explicit torsion correction:

(DRbarform)^i_m(ej,ek,el)=Bbar^i_mjkl+cyclic_(jkl) T^n_jk Rbar^i_mnl.

Consequently the exact curvature transport equation is

L_U Delta^i_m=−i_U(DRbarform)^i_m.

Its right side is given by the preceding two displayed formulas and the reduced F splitting. It contains only undifferentiated P,Q,T. It has no derivative of residuals. This follows from DDelta=−DRbarform, i_UDelta=0 and i_Uomega=0. The principal derivative is e0(Delta^i_mab); the conversion to frame components again adds only smooth coefficient times Delta.

## Curl equations with completely defined lower-order terms

Let A(v)_jkl be the reduced F splitting above, viewed as a linear map of v=(P,Q). Define

L(v)_a=∇^j A(v)_ja0−[e0(P_a)+(1/2)ε_a^{bc} e_b(Q_c)],

M(v)_a=−(1/2)ε_a^{bc}∇^j A(v)_jbc−[e0(Q_a)−(1/2)ε_a^{bc} e_b(P_c)].

Expanding ∇A in the parallel-comoving orthonormal frame cancels all derivatives of P,Q in L,M. Thus L,M are *defined explicit linear algebraic functions* of v with coefficients Gamma (equivalently chi). This definition is useful for integration: it fixes every lower-order coefficient without relying on ambiguous N(z) notation and requires no additional unknown or differentiability beyond the reduced solution.

The exact equations are

e0(P_a)+(1/2)ε_a^{bc} e_b(Q_c)=H_a0−L(v)_a,

e0(Q_a)−(1/2)ε_a^{bc} e_b(P_c)=−(1/2)ε_a^{bc}H_bc−M(v)_a.

Together with the two Cartan transport equations these form a closed linear homogeneous first-order system for spatial T, spatial Delta,P,Q. All remaining residual components are zero by reduced premises or recovered by F=A(v).

## Tilted data, energy and full conclusion

For a future-positive timelike conormal ζ, write z=ζ(U)>0 and w_a=ζ(ea). The P,Q symbol is [[zI,X(w)/2],[-X(w)/2,zI]], where X(w)v=w cross v in the positive spatial Euclidean product. X is skew-adjoint, so this block is symmetric and bounded below by z−|w|/2; transport blocks are zI. A spacelike initial hypersurface has z>|w|, so all time matrices are positive even for tilted dust. Local energy uniqueness yields zero residuals from zero initial data on the metric domain of determination (the subsidiary speeds are at most 1/2 and 0). No hypersurface orthogonality or positive lower bound for r was used.

Zero T makes the tentative metric connection Levi–Civita by uniqueness. Zero Delta identifies actual and prescribed curvature; the Ricci contraction of Rbar is the Einstein-dust Ricci. Zero P,Q gives F=0. The full conservation vector was already zero by gauge and density transport. Thus the reduced solution solves the full Einstein-dust equations through vacuum as long as the smooth gauge and regularity persist.

## Source reading and limitations

Retrieved https://arxiv.org/pdf/gr-qc/0002074 into this directory and extracted it using PyMuPDF. Actually read all of §4.2, PDF pages 47–59, including basic equations (4.26)–(4.48), full subsidiary derivation (4.56)–(4.70), and characteristic discussion. Source equations support the split, dual identity and curl speeds. This note derives its own geometric-curvature double-divergence operator because source equation (4.27) substitutes the torsion-free bracket and cannot be copied uncritically to a tentative torsionful connection. The source's compact-fluid boundary caveat does not obstruct the smooth nonnegative-density dust statement proved here; it does prevent claiming unsupplied jump/interface regularity.

This is a research proof construction, not an independent audit or production acceptance. For integration, the algebraic cancellation and the dual identity should be retained with their actual contraction explanations, rather than replaced by a claim that a source establishes them. Initial-data ownership remains with the initialization reviewer.
