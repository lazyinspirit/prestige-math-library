# NEW50 ordinary DJ/Murphy bridge construction

Author: `/root/repair_cell_head_classification/native50_pairing_constructor`.
Scope: the two bridge theorem IDs assigned by the parent. This note writes no native prototype, gate, state, decision, source-attempt counter or source20 carrier. It is a construction, not an independent audit. The integral constructor's final carrier was read and its Sections 1 and 3 checked as described below. The independent Murphy cellular prerequisite remains a parent-owned prerequisite check.

Work over A=Z[q,q^{-1}]. Put μ=λ', L=ell(wλ), N=ell(w0(Sμ)), and Pν(q)=Σ_{u∈Sν}q^{ell(u)}. Use exactly the rowmodule, DJ generator, Murphy quotient, star and θ normalizations of NEW50. In particular z=xλ T_wλ yμ, θ(Ti)=q−1−Ti, and θ(xμ)=q^N yμ. All coefficient computations below are in this Laurent ring; no quantum factorial is inverted in the integral module construction.

## Exact integral input and its boundary

The independent integral constructor supplies these precise lemmas in `../integral-constructor/constructive-proof.md`, Sections 1 and 3:

* xα H yν=0 whenever α is not dominated by ν'. This is a Laurent-polynomial identity proved by minimal double cosets and a row/column collision, with the factor (1+Ti)(1−q^{-1}Ti)=0.
* For t standard of shape μ, e_t=z T_{d(t)} has rowtabloid support weakly below t' in tableau-prefix dominance, with coefficient q^{ell(d(t))} at t'. Thus the minor obtained by projecting onto the standard λ rowtabloids is triangular with diagonal Laurent units. The e_t are independent and their span is a split submodule of Mλ.

The signed cell surjection constructed next supplies the missing spanning assertion. Consequently these two input lemmas, together with the independent Murphy cellular basis, prove the full split free DJ basis; this avoids assuming a DJ spanning theorem before using the map that proves it. The formula indexes e_t by standard μ tableaux, not by rowreading d(t) for standard λ tableaux.

## Signed conjugate map, with no guessed relations

The sign-twisted cell module identifies with θ(Mμ)/θ(Kμ), where Kμ=Mμ∩I^{▷μ}, via a↦θ(a). On θ(Mμ) define

F(θ(xμ)h)=q^{-N} xλ T_wλ θ(xμ)h=z h.

This is well defined as literal left multiplication followed by multiplication by a Laurent unit. Every higher Murphy basis element of shape ν▷μ has the form T_a^* xν T_b; its θ-image is a Laurent unit times θ(T_a)^* yν θ(T_b). The annihilation lemma gives xλ H yν=0, because ν▷λ' implies λ is not dominated by ν'. Therefore xλ T_wλ θ(I^{▷μ})=0, so F kills θ(Kμ). It induces an H-linear surjection C_M(μ)^θ→Pλ with F(c0)=z. It is surjective because z generates Pλ.

Let E=span(e_t), and let π:Mλ→E be the explicit retraction obtained by inverting the unit triangular pivot matrix. The composite πF:C_M(μ)^θ→E is surjective, because F is onto Pλ and E⊂Pλ. Both modules are free of rank f^μ. Choose the finitely many preimages of the basis vectors of E: their coordinate columns form a right inverse of the square matrix of πF. Taking determinants shows that its determinant is a unit, hence πF is an isomorphism. If p∈Pλ and π(p)=0, choose u with F(u)=p; injectivity of πF gives u=0 and p=0. For any p∈Pλ the difference p−π(p) is in this kernel, so Pλ=E. This proves simultaneously that F is an isomorphism and Pλ is split free. No field rank calculation is used.

Define Φλ=F^{-1}. Then Φλ(z)=c0 and, for every h∈H,

Φλ(z h)=c0 θ(h),

where the right side is computed using the ordinary action on C_M(μ), and regarded as a vector in its θ twist. In particular Φλ(e_t)=c0 θ(T_{d(t)}). This is an actual relation-respecting map, not an assignment to the untransformed Murphy standard vector c_t. The latter assignment would generally be wrong.

For any R and unit q_R, tensor this isomorphism. Because Pλ is split in Mλ and Mλ is split free in H by the distinguished coset basis, its tensor image is exactly the actual right ideal z_R H_R. The Murphy quotient, its higher kernel and their bases commute with base change. Hence the result holds over every commutative coefficient ring, including rings with zero divisors.

## Same-shape perfect cross-pairing

Let τ:H→A take the coefficient of T_1. The standard-basis multiplication gives τ(T_u^* T_v)=δ_{u,v}q^{ell(u)}, and τ(ab)=τ(ba). These identities follow by induction from the quadratic multiplication rule. For distinguished d,e∈Dλ, length-additive row-coset multiplication gives

τ(T_d^* xλ T_e)=δ_{d,e}q^{ell(d)}.

Therefore, for a=xλ h and b=xλ g,

τ(a^*b)=Pλ(q) β(a,b).

This equality is first a polynomial identity on distinguished basis vectors and then follows by bilinearity.

If a∈Kλ=Mλ∩I^{▷λ} and p∈Pλ, then a^*p=0. Indeed every higher Murphy element of shape ν▷λ is T_r^* xν T_s, and each product with p=xλ T_wλ yλ' h vanishes by xν H yλ'=0, since ν is not dominated by λ. Thus Pλ(q) β(a,p)=0. The Laurent ring is a domain and Pλ(q) is a nonzero Laurent polynomial, so β(a,p)=0. No cancellation is performed in a specialized ring: the identity is established universally and then specialized with the supplied base-change-compatible kernel basis.

The formula

Bλ(a+Kλ,p)=β(a,p)

is consequently well defined and star-balanced. It gives a homomorphism C_M(λ)→Pλ^circ. The diagonal matrix of β on the rowmodule has unit entries q^{ell(d)}, so Mλ→Mλ^* is an isomorphism. Since Pλ is a split submodule, restriction Mλ^*→Pλ^* is surjective. Hence Mλ→Pλ^* is surjective, and because Kλ is killed it factors as a surjection C_M(λ)→Pλ^circ. Both are free of rank f^λ. Its determinant is a unit, hence it is an isomorphism. Its kernel in Mλ is exactly Kλ=Pλ^⊥. After every base change the same inverse matrix proves perfectness and the same kernel identity.

This is a genuine perfect cross-pairing and requires no nondegeneracy of the restricted DJ form. Explicit entries on the actual bases are finite formulas: expand e_t in the distinguished rowbasis as e_t=Σ_d a_{td} xλT_d; for a standard λ tableau s,

Bλ(c_s,e_t)=q^{ell(d(s))}a_{t,d(s)}.

The coefficients a_{td} are obtained by expanding the finite signed symmetrizer and the word T_wλ T_u T_{d(t)} with the quadratic multiplication rules. The inverse pairing matrix is det(B)^{-1}adj(B); det(B) is a Laurent unit by the preceding proof. This is a finite tableau formula, not an unspecified inverse in a generic field.

## Universal form identity and the exact unit

The initial DJ generator expands as

z=Σ_{u∈Sμ}(-q)^{-ell(u)} xλ T_{wλu}.

Each wλu is distinguished for the λ rowmodule, these cosets are distinct, and ell(wλu)=L+ell(u). To see rowstandardness, each λ row picks one entry from each consecutive interval corresponding to a column of λ; permuting within the separate intervals preserves its increasing order. Minimality and length additivity are the standard minimal-double-coset property. Thus

β(z,z)=q^L Σ_{u∈Sμ}q^{-ell(u)}=q^{L-N}Pμ(q).

The last equality pairs u with w0(Sμ)u. On the independent Murphy cell, xμ^2=Pμ(q)xμ gives Gμ(c0,c0)=Pμ(q). Therefore the only possible proportionality factor with Φ(z)=c0 is

uλ(q)=q^{N-L}.

Here is a choice-free local justification that the comparison of generator norms determines the whole form, without using generic rank to establish an integral lattice claim. Over K=Q(q), the regular trace bilinear form (a,b)↦Tr_K(L_ab) has determinant a polynomial nonzero at q=1: there H is Q[S_n], where its standard-basis matrix is n! times the permutation matrix pairing u with u^{-1}. Thus this form is nondegenerate over K. The Jacobson radical of a finite-dimensional algebra is nilpotent; for a in that radical and any b, L_ab is nilpotent and has trace zero. Nondegeneracy forces the radical to vanish, so H_K is semisimple.

In a semisimple cellular algebra every cell form is nondegenerate and the cell module has full matrix algebra acting on it. One can verify this directly, without a splitting-field or absolute-choice assumption: linearly extend the finite cell order and take the corresponding successive semisimple quotient ideals. A cell layer is C⊗C with multiplication (a⊗b)(c⊗d)=G(b,c)a⊗d. If G were degenerate, (rad G)⊗C would be a nonzero square-zero ideal stable under the surrounding algebra by contravariance and the cell law. This contradicts semisimplicity of the quotient. Invertibility of G then realizes every rank-one operator, so every module endomorphism of C is scalar. This also proves that any two nonzero contravariant forms on C are proportional: use one nonsingular Gram matrix to turn the other into a commuting endomorphism.

After the integral isomorphism F has been established, transfer β to C_M(μ)^θ. The Murphy form Gμ is nondegenerate generically, and the transferred form is nonzero because its initial value q^{L-N}Pμ(q) is nonzero. The preceding endomorphism calculation makes the forms proportional over K. Comparing their initial values gives, for all integral x,y∈Pλ,

Gμ^θ(Φλx,Φλy)=q^{N-L}β(x,y).

Both sides have entries in A. Their equality over its fraction field implies equality in A, so tensoring proves the identity over every commutative R with unit parameter. This method neither divides by Pμ after specialization nor discards a lattice index. It uses generic semisimplicity only for uniqueness of an already integral pair of forms.

## Consequences, including all fields at q=1

The form identity multiplies by a unit, so after every coefficient specialization Φ sends the DJ form radical exactly onto the radical of the twisted conjugate Murphy form. The quotient isomorphism includes the zero-quotient case. Over a PID, for a chosen prime π and every i≥0, x lies in the ith divisibility submodule precisely when β(x,P)⊂π^i; the unit-scaled identity and the isomorphism Φ make this equivalent to the corresponding Murphy condition. Thus all these submodules and reductions correspond.

The perfect pairing gives C_M(λ)≅Pλ^circ; the signed conjugate map for λ' gives Pλ'≅C_M(λ)^θ. Combining them yields Pλ'≅Pλ^{circ,θ}. The conjugate cell itself satisfies C_M(λ')≅Pλ^θ, without an additional dual.

At q=1, all exponents give unit 1, θ is the sign automorphism, and the permutation form is the usual tabloid form. Consequently the module and form comparisons hold over every field, including characteristic two and cases where the form radical is the whole module. Empty shapes use L=N=0 and the scalar 1.

## Current completion boundary

The final integral carrier was read. Its collision factorization in Section 1 and its prefix-count induction in Section 3 check correctly. For completeness, the standard ascending chain used there exists as follows: view standard tableaux as linear extensions of the Young-node partial order. Bubble-sort the desired extension toward rowreading order by adjacent inversions. Any swapped pair is incomparable, because comparable nodes have the same order in both linear extensions. Each swap removes one inversion relative to rowreading; reversing the sorting supplies an ascending standard chain from t^μ, with the exact additive-length permutations required in Section 3. In particular every transpose swap has i in the lower row and i+1 in the upper row, so the q coefficient and the two prefix-count bounds used in that proof apply.

This completes the two bridge constructions relative to the standalone Murphy cellular basis/quotient theorem, which is an explicit independent prerequisite rather than a native-ready label. The parent owns acceptance of that prerequisite and integration. This research note confers no workflow READY decision. No source20 prototype, old repair slot, citation-only fallback, invented full-text reading or native authoring claim was used.
