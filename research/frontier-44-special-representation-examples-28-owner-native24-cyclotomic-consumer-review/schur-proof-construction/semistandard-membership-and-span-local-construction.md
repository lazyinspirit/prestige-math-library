# S1: exact semistandard membership and universal spanning

Author: `/root/repair_klr_global_basis/native24_cyclotomic_schur_construction`. This continues the same pending native24 prerequisite construction, not a consumer review. It replaces the earlier two S1 unknown identities with the route below. Parent still owns mathematical review, integration, exact ordinary supplier closure, and the perfect universal trace for S2. No new source citation is used as a proof.

## Incoming data and notation

Work over `R=Z[z^{±1},U_1^{±1},...,U_ℓ^{±1}]`; write P for the Laurent polynomial ring in X_1,...,X_n and K for the fraction field of R. The actual cyclotomic Murphy basis/cell law and component/JM identities are those constructed in `murphy-and-jm-local-construction.md`. The ordinary finite-Hecke inputs are its standard basis, Young row-coset formulas, ordinary Specht cellularity, and the **ordinary** semistandard permutation-module basis/Specht filtration from the full Mathas manuscript PDFpp45–46. We explicitly use the ordinary theorem only within a single physical component. We do not assume the cyclotomic S1 statement.

For shape λ let `A_k=Σ_(b≤k)|λ^(b)|`; for type µ let `B_k=Σ_(a≤k)|µ^(a)|`. A standard λ-tableau s is µ-flagged when an integer of µ-component a occupies a physical component b≤a. Equivalently, for every k, its initial B_k integers occupy nodes in the first k physical components. A semistandard S of typeµ is row-weak, column-strict, and flagged as before. Fix any standard t of shapeλ. All the identities below hold first in the universal affine algebra before the cyclotomic quotient, where cancellation of a nonzero polynomial is legitimate.

## 1. Affine PBW and the localization used only to prove divisibility

Here is a local PBW proof so that polynomial divisibility does not depend on an unproved affine independence assertion. Bernstein commutation moves every polynomial to the left, and the finite standard-basis relations then give spanning by `X^a T_w`. Set

`c_ij=(z-1)X_j/(X_j-X_i)` and `d_ij=(X_j-zX_i)/(X_j-X_i)`.

In the rational crossed product of the polynomial fraction field with S_n, represent `T_i=c_(i,i+1)+d_(i,i+1)s_i`. These operators satisfy Bernstein commutation and the finite Hecke relations. The quadratic relation uses `c_ij+c_ji=z-1` and `d_ij d_ji=z+(z-1)c_ij-c_ij²`. For three distinct variables the single identity

`c_ij c_jk=c_ik(c_ij+c_jk-(z-1))`

proves the braid relation: coefficients of the longest permutation are both `d_ij d_ik d_jk`; coefficients of the two length2 permutations agree by commutativity; the two length1 coefficients reduce to that displayed identity; the identity coefficient reduces to `(c_ij-c_jk)[c_ij c_jk-c_ik(c_ij+c_jk-(z-1))]=0`. Distant generators involve disjoint variable pairs. These equalities are obtained by substituting their displayed rational functions and clearing the three nonzero differences. Thus this is an actual representation of the universal presentation.

For a reduced word w, the coefficient of its permutation in T_w is a nonzero product of d-functions. All other terms are proper Bruhat subwords. Distinct permutations are independent in the crossed product; if desired this is verified as operators by applying a putative dependence to powers of `f=Σ_j j X_j`: the distinct polynomials w(f) form a Vandermonde matrix over the fraction field. A maximal Bruhat term in a putative PBW dependence therefore has nonzero leading coefficient and cannot cancel. This proves independence and hence affine PBW. The same argument gives right PBW by the involution. In particular left multiplication by a nonzero element of P is injective. All this occurs over the universal characteristic-zero domain; its actual polynomial identities then specialize.

Localize P at the differences `X_i-X_j`, i≠j. Define

`Φ_i=T_i-c_(i,i+1)`.

The Bernstein relation gives `Φ_i f=s_i(f)Φ_i` for every polynomial or localized rational f. Expanding a reduced word T_w as a product of Φ_i+c_i shows that `T_w f` is a sum of terms each containing `v(f)` on the left, where v is the permutation of a subword of that reduced word, multiplied by a coefficient whose only denominators are products of variable differences. Every such v is Bruhat-below w: deletion of adjacent cancelling pairs reduces a subword to a reduced subexpression, or equivalently the standard subword characterization gives this inequality. No denominators `U_a-U_b`, quantum factorials, or Gram determinants are inverted.

## 2. The flag condition is Bruhat-downward closed

Use the permutation convention in which the transport of the physical initial variable X_r through `T_d(s)^*` is the variable whose integer labels that node in s. For its corresponding permutation π, being µ-flagged is the rank-matrix condition

`#{r≤A_k : π(r)≤B_k}=B_k` for all k.

The left side cannot exceed B_k. In the Bruhat order, a smaller permutation has at least as many entries in each upper-left rank rectangle. Thus if π satisfies these equalities, every Bruhat-smaller permutation does too. This rank characterization follows directly from the usual distinguished-row/Bruhat prefix criterion used in the ordinary Murphy proof; it is also unchanged upon inverting permutations, so either conventional word-action convention gives the same conclusion after transport is fixed.

If π is flagged, a variable X_j whose µ-component is a came from a physical component b≤a. The transported polynomial `π(uλ)` therefore contains every factor `(X_j-U_k)` with k>b. In particular it contains every factor with k>a that appears in uµ. The exact quotient is the monic polynomial

`π(uλ)/uµ = ∏_j ∏_(b(j)<k≤a(j))(X_j-U_k)`.

This is actual polynomial divisibility, including all overlapping row-label classes; no parameter difference is divided out.

## 3. Exact affine membership, with an explicit finite algorithm for h

Let s0 be the least distinguished standard refinement of S, and let D be the row double coset `Sµ d(s0)^(-1) Sλ`. Every row-standard refinement of S is standard: repeated equal row labels never share a column, and distinct row-label classes correspond to disjoint increasing intervals of integers. Hence the ordinary length-additive **left** row-double-coset expansion gives

`Σ_(s:µ(s)=S) T_d(s)^* xλ = Σ_(w∈D)T_w`.

One may enumerate D using representatives of the row intersection, with each element once. This is exactly the finite disjoint coset sum; it does not replace it by `xµ T_d(s0)^* xλ`, which would introduce intersection quantum-factorial multiplicities. Since xλ commutes with uλ, the explicit sum defining m_(S,t) is

`m_(S,t)=(Σ_(w∈D)T_w)uλ T_d(t)`.

Every w in D is flagged. The left/right row subgroups preserve the relevant µ/λ component intervals, and the least refinement is flagged by hypothesis. Thus every Bruhat subword v of w is flagged by §2. Apply the Φ-expansion in §1 with f=uλ. Each transported v(uλ) is divisible by uµ, so `T_w uλ` belongs to `uµ H_aff` after localization at variable differences.

Expand the actual unlocalized element in the left affine PBW basis. Its coefficients are Laurent polynomials in P. Localized membership says each coefficient lies in `uµ P[(X_i-X_j)^(-1)]`. Every factor `X_j-U_k` of uµ is prime in P and is not associated to, and does not divide, any variable difference. The same holds for its multiplicity if needed. Therefore localization at those differences cannot remove any required uµ factor; every coefficient is already divisible by uµ in P. This proves an exact unlocalized equality

`(Σ_(w∈D)T_w)uλ=uµ b`

with b in the actual universal affine algebra.

For each simple generator inside a µ row, the finite double-coset sum has left eigenvalue z; multiplication by uλ on the right retains that eigenvalue. Also that generator commutes with uµ, which is symmetric on every µ component interval. Cancelling uµ in the affine PBW module gives `T_i b=z b` for all those row generators.

Write b in the **right** PBW basis `Σ_w T_w f_w(X)`. The left-eigenvalue equation for a pair w,s_iw forces `f_w=f_(s_iw)`: if the latter has greater length, comparison of the two coefficients using `T_i²=(z-1)T_i+z` gives `z f_(s_iw)=z f_w` and the second equation agrees. Thus the coefficients are constant on each left Sµ coset. Its distinguished representative r has the length-additive expansion `xµ T_r=Σ_(v∈Sµ)T_(vr)`. Consequently

`b=xµ h0`, where `h0=Σ_(r∈Sµ\S_n distinguished)T_r f_r(X)`.

Since uµ commutes with xµ, the exact membership identity is

`m_(S,t)=mµ h`, with `h=h0 T_d(t)`.

This constructs h by a finite algorithm: enumerate the row double coset once; compute its Bernstein/PBW expansion with uλ; divide each polynomial coefficient by the explicit monic uµ (the divisibility proof guarantees zero remainder); normalize to right PBW; take one common coefficient for each left row coset; append T_d(t). It is an actual affine element and has no inverted quantum factorial. The equality is exact, so its coefficient at the selected Murphy pivot is1 and its other coefficients are precisely the other1's in that same fibre. No higher-shape remainder is being assumed admissible. Passing to the cyclotomic quotient and then specializing any commutative R-algebra preserves this identity.

## 4. The flag-supported Murphy span is a right ideal

Let Wµ be the free subspace spanned by `m_st` with left tableau s µ-flagged. The proved Murphy generator construction tracks its support as follows.

For right finite generators, same-shape terms retain s. Higher terms come from ordinary straightening inside physical component intervals; these do not change their sizes. Before straightening, their left permutations are products of d(s) with permutations inside those physical intervals. Such permutations only rearrange which nodes of an old component receive its allowed µ-labels. They therefore stay flagged. Finite quadratic expansion of such products consists at each step of retaining the preceding permutation or multiplying it by an internal generator; both preserve the physical component sets. Row normalization and ordinary straightening inside components preserve those sets as well. This verifies flagged support for every finite-generator correction, rather than assuming that all higher shapes have it.

For right X1, the same-shape term again has the old left s. In the higher component-shift term of the proved formula, one node of physical component k moves to physical component k−1. The left row-coset representatives used in `xλu_b=Σ_v T_v* mν` are in the old row subgroup, hence preserve every old physical component. Their products with d(s) can only transport an integer from that old component k to the new earlier component k−1. Its µ-component was at least k, so it is still admissible. In cumulative-profile language the new boundary A_(k−1) increases by1 and no other boundary decreases. Every previously valid rank rectangle remains valid. Sorting ν and the subsequent finite Murphy straightening take place inside the new component intervals and keep that compatibility. The k=1 term is zero. Thus X1 corrections preserve the flag condition too.

This proves Wµ is a right ideal. It contains mµ because its initial tableau has physical/type components equal. Therefore `Mµ=mµH_R⊆Wµ`. The same support tracking for left generators inside a µ row preserves the flag condition, because they exchange integers of the same µ-component; their finite straightening keeps physical component sizes. Thus Wµ and its cellular-ideal filtration are left modules for the µ-row parabolic algebra. Every element of Mµ also has the left eigenvalue z for all µ-row generators, since `mµ=xµuµ`. These are the exact support/eigen constraints used in the next dimension bound.

## 5. Generic upper bound by an ordinary finite-Hecke Mackey count

Over K the finite type-A Hecke algebra, and every row parabolic, is split semisimple: z is indeterminate and the ordinary Specht modules are simple (the ordinary JM words are distinct, or the corresponding narrow ordinary generic theorem). We use its exactness only here, not an inference of integral module freeness. The trivial character sends each row generator to z. Consequently its multiplicity/invariant functor is exact on finite K-modules.

The shapeλ left cell module restricted to the finite Hecke algebra is the induction of the tensor product of ordinary Specht modules of its physical components, from their component parabolic. This follows directly from the component-shuffle basis in the proved finite-generator construction: a standard multitableau is an internal standard tableau in each component followed by a component shuffle, the lengths add, and internal higher-shape errors are exactly the ordinary Specht quotient relations. The resulting induced-module map carries these basis vectors bijectively to the Murphy cell vectors, and their finite-generator actions agree. This verifies the restriction statement without a cyclotomic semistandard theorem.

Restrict that induced module to the µ-row parabolic. The finite double-coset decomposition is a direct bimodule decomposition: the basis elements T_w for each row/component double coset form a sub-bimodule, since multiplying by a parabolic simple generator retains its double coset under either term of the length/quadratic formula. For a distinguished minimal double-coset representative, length-additive row cosets identify its bimodule with induction from the row/component intersection. This gives the usual Mackey decomposition by an explicit basis map, not an abstract unproved assertion. The double cosets are indexed by the nonnegative allocation matrix `N_(r,b)`: how many integers in µ row r enter physical component b. Its row totals are the µ-row sizes and column totals the component sizes of λ. The flag-supported part keeps precisely those matrices with `N_(r,b)=0` whenever b exceeds the µ-component containing row r. Its basis assignments form entire µ-row orbits, so this is exactly the direct sum of those Mackey summands.

The intersection parabolic inside physical component b has composition `ρ_b=(N_(r,b))_r`, in the fixed type-row order. The dimension of its trivial-character multiplicity in the ordinary Specht module of shape λ^(b) is the ordinary semistandard number `K_(λ^(b),ρ_b)`. To see this using only ordinary suppliers, apply induction/restriction adjunction to the ordinary permutation module `x_(ρ_b)H`; its proved ordinary semistandard Specht filtration has exactly this multiplicity, and generic semisimplicity converts the filtration multiplicity to the required Hom dimension. Likewise induction from an intersection to the µ-row group preserves this trivial multiplicity: in semisimple modules it is the dimension of Hom to the trivial module, and induction adjunction identifies that Hom with the corresponding one at the intersection. No separate Frobenius-trace claim is needed.

Therefore the trivial-character multiplicity in the flagged left cell module equals

`Σ_(flag-compatible N) ∏_b K_(λ^(b),ρ_b)`.

This is exactly `#SStdµ(λ)`: a semistandard multitableau determines such a matrix and, separately in each physical component, an ordinary semistandard tableau with those row-label multiplicities; conversely those component tableaux assemble uniquely, and compatibility is exactly the flag condition. This is a finite combinatorial bijection.

Apply the exact trivial-character multiplicity functor to the cell-ideal filtration of Wµ. Its λ-layer is the flagged left cell space tensored with the full right cell space, so its invariant dimension is `#SStdµ(λ) · #Stdλ`. Summing the layers gives

`dim_K (Wµ)_trivial = Σ_λ #SStdµ(λ) · #Stdλ`.

By §4, Mµ lies in this invariant space. By §3, it already contains that many independent semistandard sums m_(S,t), whose disjoint Murphy fibres give their independence. The upper and lower dimensions agree. Thus over K, `Mµ` is exactly the span of these sums. This proves the upper bound rather than assuming fibre constancy of a generator remainder.

## 6. Return to R by coefficient equalities, and specialize without flatness

For any actual h in `mµH_R`, its Murphy coefficients are in R because the universal Murphy basis was already established. The result over K says that these coefficients are zero outside admissible left fibres and constant on each admissible left fibre for each fixed right tableau. These are literal equalities of coefficients in R, since R injects into K. Reading the common coefficient at the unit pivot expresses h as an R-linear combination of the semistandard sums. Thus `Mµ⊆Vµ` over R. Exact membership from §3 gives the reverse inclusion.

Therefore

`mµH_R = ⊕_(λ,S∈SStdµ(λ),t∈Stdλ) R m_(S,t)`.

This uses generic information only to prove specific zero/equal coefficient identities in an already proved universal free Murphy basis. It does not infer an integral basis from generic rank. For any commutative specialization, every sum m_(S,t) is still in mµH by the explicit affine identity. Conversely each product mµ with a Murphy basis vector has its R-coordinate identity in Vµ, and that identity specializes. These two inclusions prove the same statement after base change, independently of any claim that images commute with tensor products. The semistandard sums retain their disjoint coefficient1 pivots, so are a basis over the specialized ring. This includes arbitrary fields, repeated Q's, finite e≥2, and the LM deformation DVR.

The previously missing finite generator coefficient identities now follow from this actual equality of submodules: every m_(S,t)g belongs to Mµ, hence its computed Murphy coefficients are constant on the permitted fibres and zero outside them. Their higher-shape support is already the Murphy ideal law. This closes S1 relative to the stated narrow ordinary basis/semistandard suppliers and the proved universal Murphy route.

## 7. Generic simple standards: the part that follows before the trace

The universal Murphy/JM result also gives generic split semisimplicity of H. For two different standard multitableaux, their first differing prefix adds two different addable nodes. In a component their contents are different; in different components `U_a z^c` are distinct in K. Thus the entire joint JM words determine the tableaux, even across different shapes. Every cell module has a simultaneous triangular filtration by its own word characters. Every simple quotient Dµ has a nonempty subset of the characters of its own shapeµ. Since all simples are the nonzero cellular heads, any composition factor Dµ of Cλ forces an intersection between the λ and µ character sets. Distinct shapes have disjoint sets, so µ=λ. Existence of a composition factor forces Dλ≠0, and cellular diagonal multiplicity1 then forces Cλ=Dλ simple. Summing their squared dimensions equals the Murphy basis dimension, so the Jacobson radical of H_K is zero and H_K is split semisimple.

For LM's one-variable generic deformation `z=q_H t`, `U_a=Q_a t^(na)`, the same word-separation argument applies in F(t). At the first differing step r≤n, two addable nodes of distinct components have content difference of absolute value at most r−1<n: the sum of their component sizes is at most r−1, and each addable content is bounded by its own component size. A collision would require t exponent `n(a-b)` to equal that content difference; this is impossible for a≠b. In the same component z has infinite order and distinct addable contents remain distinct. This proves word separation and hence generic Hecke semisimplicity for that deformation, without an affine-center or block-classification theorem.

Once S2 identifies the actual Schur algebra's semistandard basis and corner functor, its generic standards are simple as well. Its standard decomposition matrix contains the Hecke one on every nonzero D-column. Here every Dλ is nonzero and every Hecke Specht Sλ is simple, so the multiplicity identity gives `∆λ=Lλ` for every λ. Their cellular forms are nondegenerate. This is exactly the generic nondegeneracy input for the Jantzen filtration, conditional only on the still parent-owned universal perfect-trace/S2 proof. It does not prove the signed rim-hook weight-Gram determinant formula.

## Remaining exact boundary

S1 now has a constructive route: exact affine monic divisibility plus row-coset regrouping proves membership; tracked component flags plus an ordinary finite-Hecke Mackey count proves the coefficient conditions and span; unit pivots give specialization. Parent must review the transport convention, the flag-support tracking and the finite Mackey identification carefully. The perfect universal symmetric trace/double-annihilator identity remains with parent. The Jantzen signed rim-hook weight-Gram factorization remains with its constructor. No claim of overall Q/J completion, native acceptance, or gate closure is made here.
