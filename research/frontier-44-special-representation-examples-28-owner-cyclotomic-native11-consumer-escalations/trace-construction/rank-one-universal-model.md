# Universal rank-one nil-Hecke model: algebra, forms, and candidate triangles

**Native sign binding:** All source crossing/divided-difference formulas below use κ=−τ_native for every color pair, as proved and recorded in `native-sign-dictionary-pass1.md`; source operators must not be identified directly with native generators.

Construction for frontier-44-special-representation-examples-28 by /root/repair_klr_global_basis/cyclotomic_trace_construction. This is a local algebraic proof on the universal rank-one model; lifting its conclusion to the actual generic cyclotomic representation still requires the universal endpoint comparison documented separately. The rank-one forms here are proved from polynomial division, not assumed from cyclotomic Frobenius.

## Polynomial and nil-Hecke matrix algebra

Fix N≥0. Work over an arbitrary field k, without a characteristic restriction. Set P=k[X_1,...,X_N], S=P^{S_N}=k[c_1,...,c_N], deg X_j=2d and deg c_j=2dj. For 0≤a≤N put T_a=P^{S_a×S_{[a+1,N]}}. Let NH_a act on k[X_1,...,X_a] by X_j multiplication and ∂_j(f)=(s_jf-f)/(X_j-X_{j+1}). These satisfy ∂_j²=0, the braid/far relations and ∂_jX_{j+1}-X_j∂_j=1. This is the source convention; the actual native crossing is its negative for every color pair, independently of chronological word order. Define H_a=NH_a⊗k[X_{a+1},...,X_N]^{S_{[a+1,N]} ⊂ NH_N. The natural inclusions H_a⊂H_{a+1} are the string's induction algebras.

The elementary-symmetric theorem and repeated monic division show P is free over S with Artin basis X_1^{b_1}...X_N^{b_N}, 0≤b_j≤N-j: first adjoin X_1 as a root of the monic degree-N polynomial z^N-c_1z^{N-1}+...+(-1)^Nc_N, next X_2 as a root of the divided polynomial, and continue. At each stage the residual elementary symmetric functions are determined recursively by c_l=e_l(residual)+X_je_{l-1}(residual); this gives both spanning and linear independence, since the resulting successive monic extensions reconstruct P. The same argument applies within either block and makes P free over T_a of rank a!(N-a)!.

For any monic extension C[z]/p(z), degree p=q, the coefficient of z^{q-1} is a perfect C-linear form: in the power basis, the pairing entries are 0 below the anti-diagonal and 1 on it, so after reversing one basis the Gram matrix is triangular with diagonal1. Successive composition yields a perfect Artin form P→S. Its equality to (-1)^{N(N-1)/2}∂_{w_N} follows on the Artin basis: all basis monomials except the staircase have lower total degree and their images vanish by degree, while ∂_{w_N}(X_1^{N-1}X_2^{N-2}...X_{N-1})=(-1)^{N(N-1)/2} by successive divided differences. Thus no factorial denominator is used.

Within the first block, the same perfect pairing gives matrix units on P_a=k[X_1,...,X_a] over C_a=P_a^{S_a}: if {u_b},{v_b} are dual Artin bases, E_{bc}(f)=u_b δ_a(v_cf), where δ_a=(-1)^{a(a-1)/2}∂_{w_a} is the normalized Artin form. These lie in NH_a, multiply as matrix units and span End_{C_a}(P_a). The polynomial representation is injective: in the fraction field the ∂_w have distinct leading permutation terms, so the PBW expressions Σ_w f_w∂_w are independent. Hence NH_a=End_{C_a}(P_a) and H_a=End_{T_a}(P_a⊗k[X_{a+1},...,X_N]^{S_{[a+1,N]}}), a graded matrix algebra of size a! over T_a.

Define I_a:T_a→S by ∂_{w_Nw_aw_{[a+1,N]}} restricted to T_a. The length-additive factorization gives ∂_{w_N}=I_a∘∂_{w_aw_{[a+1,N]}}. The upper block form is perfect by the Artin argument. T_a is finite projective over S: choose an upper Artin staircase u with ∂_{w_aw_{[a+1,N]}}u=1; the map f↦∂_{w_aw_{[a+1,N]}}(uf) is an S-linear retraction P→T_a. Perfectness of I_a follows by faithfully-flat descent of the two perfect forms: P is a nonzero free T_a-module, and tensoring the map T_a→HOM_S(T_a,S), b↦[b'↦I_a(bb')], with P identifies it, using the upper dual Artin bases, with the composition of the perfect P/S and P/T_a pairing maps. Thus the tensor is an isomorphism and so is the original map. This proves T_a/S perfect without presuming a Grassmannian cohomology theorem. It is also graded freeS: choose a homogeneous basis of T_a/S_+T_a and lift it to T_a. Graded Nakayama gives a surjection from the corresponding finite graded freeS-module; graded projectivity splits it, and the split kernel has zero S_+ fiber, hence vanishes by graded Nakayama. Its rank is N!/[a!(N-a)!]=binom(N,a), because P has the indicated Artin ranks over S and T_a. This remains finite free after any monic coefficient basechange.

Compose I_a with (-1)^{a(a-1)/2} times the matrix trace on H_a (the scalar fixes the nil-Hecke convention below). The resulting t_a:H_a→S is cyclic and perfect: in matrix units its pairing pairs E_bc with E_cb and uses the perfect I_a form. It has degree -2da(N-a). Degree comes from the parabolic divided-difference length a(N-a); the matrix trace has degree0.

## Exact monomial specialization and canonical Mackey maps

Set c_1=...=c_N=0. Eliminating the suffix elementary functions from ∏_{j=1}^N(1+X_jz)=1 gives

T_a⊗_S k ≅ k[e_1,...,e_a]/(h_{N-a+1},...,h_N),

where h_j are defined by (1-e_1z+e_2z²-...+(-1)^ae_az^a)^{-1}=Σ_{j≥0}h_jz^j. Indeed the suffix polynomial has degree N-a; its coefficients equal (-1)^jh_j for j≤N-a, and coefficients above that degree vanish. The recurrence for h_j implies all further h_j vanish once these a consecutive ones vanish.

The two-sided ideal generated by X_1^N in NH_a, under its matrix presentation, is the matrix ideal generated by the coefficients of the remainder of z^N modulo p_a(z)=z^a-e_1z^{a-1}+...+(-1)^ae_a. To see this, first split P_a as the monic extension C_a[X_1]/p_a and then the free residual splitting algebra. The multiplication matrix of X_1^N is a repeated block of the multiplication matrix of that remainder; its first column contains all remainder coefficients, and every other entry lies in their ideal. In a full matrix algebra, the two-sided ideal generated by a matrix consists exactly of matrices whose entries lie in the ideal of its entries, by multiplying matrix units on both sides.

Monic long division, or the displayed generating function, gives remainder coefficients successively as h_{N-a+1}, h_{N-a+2}-e_1h_{N-a+1}, ..., h_N-e_1h_{N-1}+...+(-1)^{a-1}e_{a-1}h_{N-a+1}. These are a triangular change of generators with diagonal1. Therefore

NH_a/(X_1^N) ≅ Mat_{a!}(k[e_1,...,e_a]/(h_{N-a+1},...,h_N)) ≅ H_a⊗_S k.

For a>N the remainder ideal contains h_0=1, so the quotient is0. The a=0 case is k.

Now use the action helper's proved canonical rank-one commutator, specialized to λ_i=N. This supplier proves the crossing/dot/unit/counit maps themselves are isomorphisms, without Frobenius or second adjunction. Under the above identifications its maps are exactly

N-2a≥0: ρ_a:H_a⊗_{H_{a-1}}H_a{−2d} ⊕⊕_{j=0}^{N-2a-1}H_a{2dj}→H_{a+1}, (b⊗b',(b_j))↦b∂_ab'+Σ_jb_jX_{a+1}^j;

N-2a≤0: ρ_a:H_a⊗_{H_{a-1}}H_a{−2d}→H_{a+1}⊕⊕_{j=0}^{2a-N-1}H_a{−2d(j+1)}, b⊗b'↦(b∂_ab',(bX_a^jb')_j).

The monomial specialization is an isomorphism. These maps lift as isomorphisms over S: each source and target is a finite graded free S-module. For H_{a+1} over H_a, the explicit coset/monic-extension basis is {X_{a+1}^j h:0≤j<N-a, h∈{1,∂_a,∂_a∂_{a-1},...,∂_a...∂_1}}. Hence the tensor source is also freeS, and source/target ranks agree because their fibers agree. The cokernel vanishes by graded Nakayama: a nonzero homogeneous element of least degree cannot lie in S_+ times the module. The resulting surjection between same-rank free modules over the polynomial ring S is an isomorphism, as its determinant is a unit. This establishes the universal model's canonical rho by a proved local supplier, not by Chuang–Rouquier's theorem.

## Relative form, actual cups/caps, and both triangles

The cyclic perfect t_a,t_{a+1} and the explicit finite free H_a-basis of H_{a+1} give a unique relative form ε_a:H_{a+1}→H_a with t_a∘ε_a=t_{a+1}. Its bimodule linearity follows from cyclicity/nondegeneracy of t_a. It is perfect: composition with t_a identifies HOM_{H_a}(H_{a+1},H_a) with HOM_S(H_{a+1},S), and t_{a+1} identifies the latter with H_{a+1}. Let {b},{b^∨} be the resulting dual bases. The actual relative unit is η_a(1)=Σ_b b^∨⊗b, and the counit is ε_a. For all z, Σ_b b^∨ε_a(bz)=z and Σ_b ε_a(zb^∨)b=z. Substituting these identities in the two tensor composites proves both triangle identities. The form degree is -2d(N-2a-1), the difference of the two t-degrees; hence the normalized second adjunction has the repository's required shift t_i.

For explicit polynomial computation use ∂_j=(s_j-1)/(X_j-X_{j+1}) and D_a=∂_{N-1}...∂_{a+1}. Direct expansion in the nil-Hecke PBW basis gives

ε_a(P)=D_a(P∏_{l=1}^a(X_l-X_{a+1})),

ε_a(P∂_a)=-D_a(P∏_{l=1}^{a-1}(X_l-X_{a+1})),

for P symmetric in X_{a+2},...,X_N. One way to verify these without guessing a trace is to write s_1...s_a=∏_{l=1}^a(X_l-X_{a+1})∂_a...∂_1 plus terms of lower nil-Hecke length and then apply the top matrix coefficient defining t_{a+1}; the lower terms do not contribute. Multiplying by ∂_a leaves the second formula with one factor removed and a minus sign. Equivalently the map on PT_ws_1...s_a is D_a(P)T_ws_1...s_a when w lies in S_a s_a...s_1 and0 otherwise; commuting ∂_l across P verifies leftH_a-linearity using ∂_lP=s_l(P)∂_l+∂_l(P), and composition with t_a gives t_{a+1}, so uniqueness proves the formula.

The suffix monic extension has power basis {X_{a+1}^j}_{0≤j<N-a} and D_a-dual basis {(-1)^je_{N-a-1-j}(X_{a+2},...,X_N)}. This is verified by expanding e_l(X_{a+2},...)=e_l(X_{a+1},...)-X_{a+1}e_{l-1}(X_{a+2},...) and using Σ_{l=0}^q(-1)^le_lh_{q-l}=δ_{q0}; the value is δ_{jj'}. Put π=Σ_{j=0}^{N-a-1}(-1)^je_{N-a-1-j}⊗X_{a+1}^j. The finite nil-Coxeter coset basis has reverse dual chain {∂_a...∂_1,...,∂_1,1}. Combining it with π gives

η_a(1)=∂_a...∂_1 s_1...s_a π+∂_{a-1}...∂_1 s_1...s_a π∂_a+...+s_1...s_a π∂_a...∂_1.

Thus the unit is explicit, with no inverse Gram matrix left unspecified.

## Verification of candidate components

The above counit formulas show:

If a<N/2, ε_a(∂_a)=ε_a(X_{a+1}^j)=0 for j<N-2a-1, while ε_a(X_{a+1}^{N-2a-1})=(-1)^{N+1}. The last equality follows by expanding the product and observing D_a kills powers below N-a-1; its leading surviving coefficient is (-1)^a and D_a(X_{a+1}^{N-a-1})=(-1)^{N-a-1}.

If a≥N/2, ε_a(∂_a)=(-1)^{N+1}X_a^{2a-N} modulo Σ_{j<2a-N}Z(H_a)X_a^j. Expand the product in elementary functions of X_1,...,X_{a-1}; the recursion e_l(X_1,...,X_{a-1})=(-1)^lX_a^l modulo lower X_a powers with symmetric coefficients gives exactly this leading coefficient. These are precisely the two branches of the candidate counit of §4.1.4 after rho inversion.

For the unit, contract η_a(1) against multiplication by a commuting polynomial P in the overlap algebra. The explicit π and nil-Coxeter chain give

m((1⊗P⊗1⊗1)η_a(1))=(-1)^{N+1}∂_1...∂_a(P∏_{l=a+2}^N(X_{a+1}-X_l)),

m((1⊗∂_{a+1}P⊗1⊗1)η_a(1))=(-1)^N∂_1...∂_a(P∏_{l=a+3}^N(X_{a+1}-X_l)).

To check the contraction, multiply on the left by ∂_{w_{a+2}}, which is injective on polynomials by PBW. All chain summands except the final one vanish by ∂_j²=0; moving the remaining polynomial through the chain applies ∂_1...∂_a. Finally m(π)=∏_{l=a+2}^N(X_l-X_{a+1}), by the elementary-symmetric expansion. Cancelling the PBW-injective left factor gives the displayed identities. The same computation verifies the image is polynomial: it commutes with H_{a+1}, and in the fraction-field crossed-product algebra the centralizer in the relevant overlap consists of the block-symmetric polynomials; PBW then gives the polynomial intersection.

If a>N/2-1, the first contraction on X_{a+1}^j is0 for j<2a-N+1 and equals (-1)^{N+1} at j=2a-N+1; the second contraction on1 vanishes. If a≤N/2-1, the second contraction on1 is (-1)^N X_{a+2}^{N-2a-2} modulo lower powers with Z(H_{a+1}) coefficients. These follow from the same degree and elementary-symmetric recursions as the counit computations. They are precisely the two candidate-unit branches.

Consequently the candidate maps on this universal rank-one model are the dual-basis maps above, up to the harmless specified source normalization signs; both candidate triangle composites are invertible (indeed scalar identities before normalizing). This proves the model calculation uniformly over every k and every specialization of the universal monic coefficients. It does not by itself prove the universal-to-actual-string comparison or different-color crossing mates.
