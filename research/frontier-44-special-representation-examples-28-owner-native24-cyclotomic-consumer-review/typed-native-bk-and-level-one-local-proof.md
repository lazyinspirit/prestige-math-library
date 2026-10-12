# Typed native BK translation and independent level-one inverse

Construction for the SAME pending first native24 repair. The primitive-content claim has separate still-open NG prerequisite construction; these calculations do not discharge it. The grading variable is v, the affine Hecke parameter is q_H. All calculations are over the actual field F and use only the standard first-strand quotient. No native/readiness/audit writes or acceptance claim.

## 1. Exact native-to-BK presentation

Use native10 x_a,τ_a and put y_a=x_a,ψ_a=−τ_a. The source mixed equations become ψ_a y_(a+1)−y_a ψ_a=1 and y_(a+1)ψ_a−ψ_a y_a=1 on equal colors, with zero on unequal colors. ψ²=τ², so Q does not change. Crucially, define the source braid difference

D_ψ=ψ_a ψ_(a+1) ψ_a−ψ_(a+1) ψ_a ψ_(a+1).

Since there are THREE crossing signs, D_ψ=τ_(a+1)τ_aτ_(a+1)−τ_aτ_(a+1)τ_a, the native displayed braid difference. For outer colors equal, its exact correction is [Q(u,v)−Q(w,v)]/(w−u). In forward orientation Q=v−u this is+1; in backward Q=u−v it is−1; with the e=2 Q=−(u−v)² it is u+w−2v. These are exactly BK(1.15), in its actual displayed ORDER. The opposite order has the negative correction, but is not the source equation used by this page. All far and idempotent relations survive the global sign and the individual first-strand power generators are unchanged. Thus the native specialization is the source presentation over every allowed field, including characteristic two in the DG e=2 branch.

## 2. Fill the all-equal-color exercises in both source directions

The full BK source proof §§3–4 was read, including its explicitly omitted all-equal cases. They have this short local calculation. Write A=ψ_1, B=ψ_2, variables u,y_2=z,w, and ∂_a f=(s_a f−f)/(y_a−y_(a+1)). Already verified mixed/quadratic relations give fA=A s_1 f+∂_1 f, fB=B s_2 f+∂_2 f, A²=B²=0. Set

a=c−u+q_H z, b=c−z+q_H w, k=c−u+q_H w,

using (q_H,c)=(1,1) in DG and c=1−q_H in NG. On the all-equal component the Hecke generator is H_1=Aa−1,H_2=Bb−1. The relevant finite derivatives are

∂_2 a=−q_H, s_2a=k; ∂_1b=−1,s_1b=k;
∂_1k=1,s_1k=b; ∂_2k=q_H,s_2k=a;
∂_1a=∂_2b=q_H+1.

In particular ∂_1(kb)=0 and ∂_2(ka)=0. Expand the eight terms of each triple, move polynomials to the right with these identities, and remove A²,B². The exact two expressions are

H_1H_2H_1=ABA·abk−AB·kb−BA·ka+A(a+q_H b)+B(a+b)−1,
H_2H_1H_2=BAB·abk−AB·kb−BA·ka+A(a+q_H b)+B(a+b)−1.

Therefore H_1H_2H_1−H_2H_1H_2=(ABA−BAB)abk. The product abk is a UNIT in the actual nilpotent-variable algebra: its constant is1 in DG or(1−q_H)³≠0 in NG. In the forward direction Hecke braid implies the required ψ braid by multiplication by that inverse. In the inverse direction the established ψ braid implies Hecke braid. The same mixed rule gives H_i²=(q_H−1)H_i+q_H in NG and H_i²=1 in DG (the relation is uniform at q_H=1). Hence no unproved “Case5: exercise” remains at the actual consumer seam. The source's remaining four color-pattern cases have full explicit expansions in the retrieved §§3–4; their outer-equal unequal-middle correction is the polynomial in §1, not its negative.

## 3. Independent level-one inverse, without the late full basis

Let Λ=Λ_j and let the finite Hecke algebra have the EXISTING native20 normalization T_r²=(q_H−1)T_r+q_H. Its Jucys–Murphy elements are L_1=0,L_r=Σ_(a<r)q_H^(a−r)T_(a,r). Their actual commuting clause is the existing native20 supplier. The defining finite braid/quadratic calculation gives

T_r L_r T_r=q_H L_(r+1)−T_r,
T_r L_s=L_s T_r for s≠r,r+1.

The first equality follows by separating the term a=r in L_(r+1) and using T_r T_(a,r) T_r=T_(a,r+1), for a<r; the scalar powers agree after multiplying byq_H. The distant formula follows by the finite braid relation on the three affected transpositions, with all other terms commuting. Put M_r=1+(q_H−1)L_r. Then M_1=1 and T_r M_r T_r=q_H M_(r+1); recursively every M_r is invertible. They commute because the L_r do. Thus X_r=q_H^j M_r, together with the same T_r, satisfies the actual affine Hecke presentation, and X_1=q_H^j satisfies the level-one first relation. This constructs an inverse homomorphism from the cyclotomic algebra to the finite Hecke algebra. The other map fixes T_r and is surjective, since X_(r+1)=q_H^(-1)T_rX_rT_r generates all X_r from X_1. Both maps fix the finite generating T_r, hence are inverse. No dimension or cyclotomic monomial basis theorem is used.

For DG, set x_r=j+L_r with L_r=Σ_(a<r)(a r) in FS_d. The same transposition calculation gives L_(r+1)=s_r L_r s_r+s_r, the L_r commute, and distant generators commute. These are exactly the degenerate affine relations with x_1=j. The two maps again fix all simple transpositions and are inverse. This treats charF=e, including2, without a semisimplicity assumption. The NG level-one JM spectral value on a tableau node of contentm is q_H^(j+m), since M_r has value1+(q_H−1)[m]_(q_H)=q_H^m; DG has valuej+m. This records the necessary actual dictionary from the native20 ADDITIVE L_r to the native24 MULTIPLICATIVE X_r.

## 4. Field and zero-component seams of the explicit BK maps

The source's p_r/P_r and q_r/Q_r are explicit power series over F with invertible constant coefficients; no algebraic closure or square root is used. Finite nilpotent-variable evaluation is supplied independently by the finite/spectral lemma on the Hecke side and the current native11 dot lemma on the KLR side. Thus the forward and inverse relation calculations define maps over F itself. Their generator composites are literally identity by the displayed inverse formulas and the CRT projection identities. They apply to every content component, not merely a nonzero Hecke component. If e_α=0 in H, the inverse map to R^Λ_α still satisfies σ(e_α)=1_R by its split-weight action on the regular KLR module; therefore1_R=0 and R^Λ_α=0. Conversely a zero R component forces its Hecke component zero by the same maps. This is the zero-content correspondence needed by the late TOTAL-dimension/basis proof. “Block” primitivity is not used to prove any of these algebra maps; central-content components suffice at this logical stage. The later separate primitive-content theorem must nevertheless justify the retained unconditional block classification.

This route has the acyclic order: affine presentation/early bounded spanning or resultant finiteness → split spectrum/CRT central components + explicit level-one inverse → explicit BK maps (all fields, including zero components) → independent current11 ordinary-Hom dimension → late strong ordered-monomial Hecke basis → center/Schur/Jantzen primitivity theory. The full basis and primitivity clauses must not be logical prerequisites of their own earlier BK construction.
