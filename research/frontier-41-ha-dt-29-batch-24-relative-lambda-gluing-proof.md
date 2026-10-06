# Batch 24: a local proof of the relative Milnor gluing bridge

Research-only construction, 2026-10-05. Current batch24 now contains the mixed-square lemma, the lambda candidate, the two gluing carriers, and the detector; the gluing strategies still explicitly mark their collar/cochain comparisons open. Batch12's actual `cor-eight-dimensional-signature-formula` is the closed oriented smooth formula `45σ(N)=7p₂[N]−p₁²[N]`, assuming AC. The following closes the mathematical bridge using existing suppliers plus short local interface lemmas; it does not certify or edit those carriers. No canonical artifacts, receipts, gates, or state were changed.

The proof uses excision-supported classes rather than extending arbitrary singular cocycles by zero across a cut. Such naive zero extension on all singular simplices need not be a cochain map because a simplex can cross the seam. The published cover-small/excision construction provides exactly the required map.

## 1. Relative evaluation and mixed products

For a pair `(X,A)`, a relative cochain is a function on singular simplices which vanishes on all simplices lying in A: `def-relative-singular-cochain-complex`. Define relative Kronecker evaluation by `⟨[α],[z]⟩=α(z)`, where z is a chain representing a cycle modulo C(A). If z changes by `∂b+c_A`, the change is `δα(b)+α(c_A)=0`; if α changes by `δβ`, its evaluation changes by `β(∂z)=0` because ∂z lies in C(A). This proves descent, bilinearity, coefficient compatibility and naturality for pair maps. This is the relative version of the actual published `def-kronecker-evaluation-pairing` and `lem-the-kronecker-pairing-is-independent-of-cocycle-and-cycle-representatives`; add a short local lemma **`lem-relative-kronecker-evaluation-is-well-defined-and-natural`** if the item strategy needs an explicit supplier contract.

Let `j:H⁴(W,M;Z)→H⁴(W;Z)` be the forgetful map and a be represented by relative cocycle α. For both-relative product use A=B=M; each member is open in its union M, and `C(M)+C(M)=C(M)`, so the quotient comparison in `def-relative-cup-product` is the identity. For relative/absolute product use A=M,B=∅, where the comparison is again the identity. Both `a∪a` and `a∪j(a)` are therefore represented by the identical cochain `α∪α` in C⁸(W,M). In particular

`⟨a∪a,[W,M]⟩=⟨a∪j(a),[W,M]⟩`.

This is a complete strategy for the current **`lem-relative-pontryagin-square-equals-mixed-evaluation`**. Dependencies: `def-relative-cup-product`, `prop-relative-cup-products-are-natural-and-compatible-with-connectors`, `def-relative-singular-cochain-complex`, and the proposed evaluation lemma. No choice principle enters this step.

One also needs relative/mixed symmetry in degree4. The published absolute statement `thm-singular-cohomology-is-graded-commutative` alone is not a relative theorem, but its actual supplier **`lem-simplex-factor-reversal-is-chain-homotopic-to-the-identity-diagonal`** supplies a specified *natural* diagonal homotopy H. By naturality under A→X, H carries C(A) into C(A)⊗C(A). If α,β vanish on A, the primitive JH in the published proof also vanishes on A. Thus the proof descends to C*(X,A), giving `a∪b=b∪a` in degree4; forgetting either factor gives `a∪j(b)=b∪j(a)`. Add local lemma **`lem-relative-middle-cup-products-are-symmetric`** with that explicit primitive argument. This avoids assuming a relative commutativity theorem whose published Statement only treats absolute classes.

The same front/back formula gives the relative cap/evaluation identity

`⟨a∪x,[W,M]⟩=⟨x,a∩[W,M]⟩`,

for relative a and absolute x: on a singular eight-simplex, evaluate a on the front four-face and x on the back four-face. `def-relative-cap-product` makes the resulting cap cycle absolute; its boundary identity and the vanishing of a on M justify descent. The formula has no extra sign in the published cohomology-first convention. Dependencies: `def-relative-cap-product`, `def-singular-cup-product-on-cochains`, the proposed relative evaluation lemma. It is the boundary analogue of step1.1 in `cor-poincare-duality-gives-a-nonsingular-cup-pairing`.

## 2. A collar-supported excision lemma

Let W and W' be compact oriented smooth eight-manifolds with boundary identified to the same oriented M by an orientation-preserving boundary diffeomorphism. Glue `N=W∪_M(−W')`. Use `thm-collar-neighborhood-theorem` and **`lem-collar-gluing-and-corner-smoothing-give-transitivity`** to construct the smooth closed N. These suppliers already prescribe outward-normal-first boundary orientations; the orientation on the second piece is negative. Near the seam write `M×(−2a,2a)`, negative t on W and positive t on W'.

Choose the open cover

`U = int(W) ∪ (M×(−2a,a))`,

`V = int(W') ∪ (M×(−a,2a))`.

Then U retracts onto W, V onto W', and U∩V is the collar `M×(−a,a)`. To obtain an equivalence of pairs `(U,U∩V)≃(W,M)`, use a collar-height map that sends t≥−a to zero and is the identity for t≤−2a, with monotone interpolation in between. It is extended by the identity outside the collar. A linear interpolation with the identity gives a homotopy of pairs; in U∩V all intermediate heights remain in that overlap. Conversely inclusion `(W,M)→(U,U∩V)` and these homotopies give the inverse pair equivalence. The corresponding construction on V gives `(V,U∩V)≃(W',M)`. In particular the restriction from H*(U,U∩V) to H*(W,M) is an isomorphism: use the inclusion and the explicit inverse pair homotopies, not an unsupported equality of open and closed pairs.

Excision, removing Z=N\U from `(N,V)`, is applicable because Z is closed and contained in the open V. It gives

`r_W:H*(N,V;R) ≅ H*(U,U∩V;R) ≅ H*(W,M;R)`.

Similarly

`r_W':H*(N,U;R) ≅ H*(W',M;R)`.

The same maps are isomorphisms in relative homology in the reverse direction. Every claimed excision hypothesis has now been checked. Dependencies: `thm-excision-for-singular-cohomology`, `thm-excision-for-singular-homology`, `thm-singular-chain-homotopy-formula` for pair homotopies, `thm-homotopic-maps-induce-equal-maps-in-singular-cohomology`, and the relative cochain definitions. Published excision explicitly supplies quotient chain maps and a relative homotopy inverse from cover-small chains; its cohomology inverse is not arbitrary zero extension.

Let `E_W=r_W⁻¹` and `E_W'=r_W'⁻¹`. Naturality of the relative product gives, for relative a,b on W,

`r_W(E_W(a)∪E_W(b))=a∪b`.

The homology image of [N] in H₈(N,V) maps to [W,M]. Indeed its restriction at every interior point of W is the given local orientation generator of W. Excision and the collar pair homotopies preserve that generator; uniqueness in **`def-relative-fundamental-class-and-boundary-orientation`**, justified by **`lem-a-collar-identifies-boundary-local-homology-with-the-pair-fundamental-class`**, identifies the class. For the second side its image maps to `−[W',M]`, since N has the reversed orientation there. This proves the evaluation comparison, for η in H⁸(N,V),

`⟨j_Vη,[N]⟩=⟨r_Wη,[W,M]⟩`,

and with N,U and W' the analogous comparison has a minus sign. The equality is ordinary naturality of quotient evaluation; no chosen split fundamental cycle is needed.

Package this construction as local lemma **`lem-collared-gluing-has-relative-excision-and-evaluation-maps`**. It requires no new external theory. Include disconnected/closed filling components: they lie entirely in U or V, their relative pair is absolute, and their supplied local orientations yield the same comparisons componentwise.

## 3. Orthogonal difference and the Pontryagin square

Assume `H³(M;Z)=H⁴(M;Z)=0`. The actual pair sequence **`thm-long-exact-sequence-of-a-pair-in-singular-cohomology`** has segment

`H³(M)→H⁴(W,M) --j_W→ H⁴(W)→H⁴(M)`.

Thus `j_W` and `j_W'` are integral isomorphisms. The vanishing of H³ supplies uniqueness of a relative lift; the vanishing of H⁴ supplies its existence. MV on the open U,V above, **`thm-mayer-vietoris-sequence-in-singular-cohomology`**, has segment

`H³(U∩V)→H⁴(N) --ρ→ H⁴(U)⊕H⁴(V)→H⁴(U∩V)`.

The explicit deformation retractions identify overlap cohomology with H*(M); hence ρ, followed by restrictions to W,W', is an integral isomorphism. Define

`L_W(x)=j_V E_W(j_W⁻¹x)`,

`L_W'(x')=j_U E_W'(j_W'⁻¹x')`.

Their restrictions to the two pieces are `(x,0)` and `(0,x')`: the first restriction follows from the commutative forgetful/excision square; the restriction to the opposite side is zero because the relative cochain vanishes on V or U, respectively. Since ρ is an isomorphism, `L_W(x)+L_W'(x')` is the unique global class with those restrictions.

For a in H⁴(W,M), b in H⁴(W',M), the product

`E_W(a)∪E_W'(b)`

lies in H⁸(N,V∪U)=H⁸(N,N)=0. Here U and V are open, so the precise excisive-triad hypothesis in `def-relative-cup-product` holds. Forgetting relative conditions is natural by **`prop-relative-cup-products-are-natural-and-compatible-with-connectors`** (or directly by its cochain quotient maps), giving

`L_W(j_Wa)∪L_W'(j_W'b)=0` in H⁸(N).

The reverse product is zero for the same reason. No claim about pointwise vanishing of arbitrary singular cross products is needed.

For same-side classes x,y, sections1–2 give

`⟨L_W(x)∪L_W(y),[N]⟩ = ⟨j_W⁻¹x ∪ y,[W,M]⟩`,

and on W' the evaluation is the negative of its own oriented form. This proves the full orthogonal-difference pairing, integrally as well as over real coefficients.

The stable tangent identification on the seam is also explicit. Pulling TN back to each filling gives its tangent bundle: on a collar both charts have tangent `TM⊕R`, and the gluing reverses the normal coordinate. The derivative gives a real bundle isomorphism; orientation of the real bundle is irrelevant to p₁. **`thm-naturality-stability-and-mod-two-reduction-of-pontryagin-classes`** therefore gives restrictions `(p₁(TW),p₁(TW'))`, with **no minus on the second Pontryagin class**. MV uniqueness identifies

`p₁(TN)=L_W(p₁(TW))+L_W'(p₁(TW'))`.

Expanding its square, using both cross-term zeros and the same-side evaluation formula, proves

`p₁²[N]=q(W)−q(W')`.

This is a complete local strategy for current **`lem-relative-pontryagin-square-glues-across-a-seven-boundary`**. Add the named collar/evaluation lemma and the actual tangent/naturality/pair-sequence dependencies. There is no unresolved mathematical blocker.

## 4. Boundary form and signature

The currently defined form can be justified on its full stated scope, rather than only the vanishing-boundary case. Over F=R set A=H⁴(W,M;F), B=H⁴(W;F), j:A→B, I=im j, and

`T(a,x)=⟨a∪x,[W,M]⟩`.

PL duality **`thm-poincare-lefschetz-duality`**, the relative cap/evaluation identity of section1, and field UCT give a perfect pairing A×B. For field UCT use the actual free-complex supplier **`lem-singular-uct-extension-from-cycle-projections`** on C*(W;F), exactly as in step1.2 of `cor-poincare-duality-gives-a-nonsingular-cup-pairing`; the Ext term vanishes because a vector space is free under AC. Finite dimensionality can be proved without adding a triangulation theorem: double W along its collar to a closed oriented D(W), and fold the second copy back to W. W is a retract of D(W), so its homology is a direct summand of the finitely generated groups given by **`lem-closed-oriented-pid-manifolds-have-finitely-generated-homology`**. Field UCT gives finite-dimensional B; PL gives finite-dimensional A. Add local lemma **`lem-compact-oriented-boundary-manifolds-have-finite-dimensional-cohomology`** if needed.

Relative symmetry gives `T(a,jb)=T(b,ja)`. If ja=0, then T(a,jb)=0 for every b, so T(a,y)=0 for y∈I. Thus `Q_W(x,y)=T(a,y)` for ja=x is independent of the lift. The same identity proves symmetry. If x=ja∈I is in the radical, then T(a,jb)=0 for all b; hence T(b,x)=0 for all b. Perfectness in the B variable implies x=0. Consequently the image form Q_W is **already nondegenerate**. Quotienting its radical, as the current definition says, yields the identical form; there is no additional nonzero radical on I.

For the gluing hypotheses, integral vanishing implies real H³,H⁴ vanishing. An explicit bridge uses **`lem-closed-oriented-pid-manifolds-have-finitely-generated-homology`** for M, **`thm-topological-universal-coefficient-short-exact-sequence-for-cohomology`** with integral homology and Z/R coefficients, and the finite abelian group decomposition: H^k(M;Z)=0 implies the free part of H_k(M;Z) is zero, so Hom(H_k,R)=0; Ext(H_(k−1),R)=0 because multiplication by every nonzero integer is onto R. Thus H^k(M;R)=0 for k=3,4. Include this as local lemma **`lem-integral-middle-cohomology-vanishing-implies-real-vanishing`**, with the finite cyclic resolution calculation. No integral-versus-real substitution is implicit.

Therefore j_W,j_W' are real isomorphisms and I=B on both sides. The orthogonal-difference comparison in section3 identifies batch12's closed form Q_N with `Q_W⊕(−Q_W')`. By **`thm-sylvesters-law-of-inertia`** the signature of the block diagonal sum is the sum of signatures, and negation exchanges positive and negative inertia. Hence

`σ(N)=σ(W)−σ(W')`.

This completes current **`lem-boundary-middle-form-is-well-defined-and-glues`**, including definition justification. Relevant same-run interface: batch12 `def-middle-dimensional-intersection-form` and `def-signature-of-a-closed-oriented-four-k-manifold`. The nondegeneracy and signature here are proved from PL and the displayed comparison; the closed signature definition is not applied directly to W.

## 5. Filling independence modulo seven

The previous sections prove both difference equations for the closed oriented smooth eight-manifold N. Batch12's actual **`cor-eight-dimensional-signature-formula`** gives

`45σ(N)=7p₂[N]−p₁²[N]`.

The right evaluations are integers by the published Pontryagin definition and evaluation pairing. Reducing modulo7 gives `3σ(N)+p₁²[N]=0`, hence `p₁²[N]=4σ(N)` modulo7 and

`2p₁²[N]−σ(N)=0` modulo7.

Consequently

`(2q(W)−σ(W))−(2q(W')−σ(W'))=0` modulo7.

This proves independence for a supplied filling. If f:M→M' preserves orientation, use f to identify the collared boundaries of their fillings and apply exactly this proof; this proves boundary-diffeomorphism invariance without a separate arbitrary-filling existence theorem. Reversing the orientation of a filling reverses [W,M], negates Q and its signature, fixes the underlying p₁, and therefore negates lambda. The zero invariant is fixed even by orientation reversal, which suffices for comparison with the standard sphere.

Dependencies for current **`thm-milnor-lambda-invariant-is-well-defined-modulo-seven`** are its candidate definition, the now-proved square/signature gluing lemmas, batch12's closed formula, and `def-axiom-of-choice`. All prerequisite bridge lemmas above admit local proofs; this core detector should not be relabelled `not-supplied` on account of the seam.

## 6. Disk-bundle specialization, including the Thom sign

Let ξ=ξ_(h,j) have e(ξ)=εu and p₁(ξ)=2ku for ε=h+j=±1, k=h−j, and `⟨u,[S⁴]⟩=1`. The oriented disk bundle W=D(ξ) has projection π, zero section s and boundary M=S(ξ). Write x=π*u. The actual Thom theorem **`thm-thom-isomorphism-for-oriented-vector-bundles`** gives H⁴(W,M;Z)=ZU with normalized fiber Thom class U; fiber contraction identifies H⁴(W;Z)=Zx. Euler definition **`def-euler-class-by-zero-section-pullback-of-the-thom-class`**, with naturality and s*π*=id, gives

`j(U)=εx`.

The normalization `⟨U∪x,[W,M]⟩=1` must be **proved**, not imposed after choosing U. A short local proof uses the double N=D(W) and the collar-supported maps of section2. The zero section is a closed oriented embedded S⁴ in N with normal ξ. Its Thom class supported in the first half is E_W(U). Batch2's actual **`lem-normal-thom-class-realizes-the-poincare-dual-of-a-submanifold`** says its absolute image is PD(s*[S⁴]) in N. Since ε=±1, x has unique relative lift εU; set X=L_W(x). Restriction s*X=u. The closed cap/evaluation identity and that PD identification yield

`⟨j_VE_W(U)∪X,[N]⟩=⟨s*X,[S⁴]⟩=1`.

Section2's evaluation comparison identifies the left side with `⟨U∪x,[W,M]⟩`. All orientations agree: the total-space orientation is base followed by fiber; rank4 makes swapping the two blocks positive. The normal orientation is thus the stipulated orientation of ξ. Add local lemma **`lem-thom-class-of-a-disk-bundle-pairs-with-the-base-generator`** before the relative Pontryagin evaluation consumer. This proof relies on the actual batch2 normal-Thom/PD statement and does not extend it directly to a boundary ambient without justification.

The tangent exact sequence of the vector bundle total space has vertical π*ξ and quotient π*TS⁴. A smooth connection splits it, using **`thm-every-smooth-vector-bundle-admits-a-connection`** and its local horizontal lifts, or the published bundle short-exact splitting interface. Restrict to the disk bundle to get

`TW≅π*(TS⁴⊕ξ)`.

The explicit bundle map `(v,t)↦v+tb` at b∈S⁴ identifies TS⁴⊕R with trivial R⁵. Pontryagin stability/naturality then gives `p₁(TW)=2kx`. If using the Whitney formula, the integral formula here is valid in degree4: c₁ of a real complexification is two-torsion and H²(S⁴)=0, so the offending product is zero. Alternatively split the added trivial line first: TW⊕R≅π*(ξ⊕R⁵), and use stability alone. Add local **`lem-tangent-of-the-milnor-disk-bundle-has-the-required-stable-splitting`** if no existing strategy supplies the actual map/connection argument.

Since j(U)=εx, the unique relative lift of p₁(TW) is `bar p₁=2kεU`. Section1's mixed-square equality gives

`q(W)=⟨(2kεU)∪(2kx),[W,M]⟩=4εk²`.

On absolute cohomology Q_W(x,x)=`⟨εU∪x,[W,M]⟩=ε`, so its rank-one signature is ε. Batch2's **`thm-self-intersection-is-the-euler-number-of-the-normal-bundle`** confirms the zero-section self-intersection ε in the boundaryless interior, but the cup-form computation just given independently supplies the relative algebraic interface. Therefore

`λ(M)=2q(W)−σ(W)=ε(8k²−1)=ε(k²−1)` modulo7.

For (h,j)=(1,0), ε=1,k=1, lambda0; for (2,−1), ε=1,k=3, lambda1. The standard eight-disk has H⁴=0, q=0 and signature0. Topological sphere recognition is a separate preceding h-cobordism/Alexander argument; no sphere-recognition claim was used to manufacture the characteristic invariant.

The new local interface lemmas named here are finite collar/cochain/orientation comparisons and inherit AC only where duality/characteristic suppliers require it. They are suitable additions before the existing consumers and do not require a new external prerequisite or substantial theory rebuild.
