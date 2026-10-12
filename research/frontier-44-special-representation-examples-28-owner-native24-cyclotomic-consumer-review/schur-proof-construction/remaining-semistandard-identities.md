# Exact remaining semistandard identities

Author `/root/repair_klr_global_basis/native24_cyclotomic_schur_construction`; proof construction only. The missing part is narrower than the whole Q stack: arbitrary-level Murphy cellularity and JM content now have the explicit route in the preceding file. General cellular simple labels, cell purity/shared-factor linkage, the center correspondence, and the Schur radical/multiplicity/quasiheredity consequences have full local algebraic arguments. The following two semistandard constructions remain unproved by this worker and must not be stamped as Q completion.

## Data and the finite term order

Work universally over `R=Z[z^{±1},U_1^{±1},...,U_ℓ^{±1}]`, then specialize to the field or the LM deformation DVR. Shapes λ and types µ,ν are all ℓ-multipartitions of n. Order labels `(i,a)` by component first and row second. A semistandard λ-tableau of typeµ has weakly increasing rows, strictly increasing columns, and every label `(i,a)` in physical componentb satisfies `a≥b`. For a standard λ-tableau s, µ(s) replaces every integer by its row/component in `tµ`. Write

`m_(S,t)=Σ_(s standard of shapeλ, µ(s)=S)m_st`,

`m_(S,T)=Σ_(t standard of shapeλ, ν(t)=T)m_(S,t)`.

All coefficients are1. The fibres of the replacement map partition the standard left/right indices, so these sums, for distinct admissible S,t or S,T, are independent in the actual Murphy basis. A semistandard S has a nonempty fibre: fill each repeated row-label class increasingly along its rows; labels from smaller row classes have smaller integers and strict column increase of S ensures standardness. This proves the independence/leading-coefficient1 assertions without a denominator. The unsupported assertions are membership and spanning, not independence.

A concrete finite elimination order is: a fixed linear extension of multipartition dominance, higher shapes first; then the lexicographic list of row-label multiplicities in physical component,row,column order; then a fixed dominance-compatible order on standard right tableaux. Choose the least standard refinement in each fibre as its pivot. In the Murphy coordinate basis, the semistandard sum has coefficient1 at that pivot, coefficient1 at its other fibre coordinates, and0 elsewhere. Fibres are disjoint. Once the membership/span identities below hold, no torsion, specialization, or generic-rank argument is needed for their independence.

## Remaining leaf S1: cyclotomic row-type sum membership and straightening

Proposed necessary precise local ID: `lem-cyclotomic-semistandard-row-type-sums-give-permutation-module-bases`.

The exact target is

`mµ H_R = ⊕_(λ,S∈SStdµ(λ),t∈Stdλ) R m_(S,t)`.

The row-type sums are explicit, the right side is already known free by the disjoint-fibre argument. The finite type-A semistandard identities handle the row/column labels inside one component; the unresolved arbitrary-level addition is the compatibility with the `uµ` factors when labels move to earlier physical components. The minimal identities needed to finish the target are these finite generator and pivot assertions:

1. For every admissible S,t and each generator `g∈{T_1,...,T_(n−1),X_1}`, the **computed Murphy coefficient vector** of `m_(S,t)g` has zero coefficients at nonadmissible typeµ fibres and constant coefficients on each admissible left fibre for each fixed right tableau. Equivalently it is an R-linear combination of the displayed `m_(U,v)` with shapesρ≥λ. All coefficients here are determined by the proved Murphy generator construction; the unknown assertion is their fibre constancy/admissibility after summing left indices. This makes the free right-hand span a right ideal.
2. For each S,t, a length-additive cyclotomic row-coset expansion must produce an actual h in H_R such that `mµ h` has the pivot of `m_(S,t)` with coefficient1 and only already-eliminated semistandard pivots otherwise. Descending elimination then puts `m_(S,t)` in `mµH_R` without dividing by a quantum factorial. It is not enough to obtain a scalar multiple `[a]_z! m_(S,t)`; that scalar can vanish at the target parameters.

The unique tableau of shape/typeµ gives `m_(Tµ,tµ)=mµ`. Thus assertion1 proves `mµH_R` is contained in the proposed span; assertion2 proves the reverse inclusion. This supplies an exact finite termination argument and identifies the unresolved combinatorial coefficient identity. It is not presented as an established algorithm: the actual h and its coefficient equality have not yet been derived for cross-component fibres.

## Remaining leaf S2: double-annihilator/intersection and Schur map multiplication

Proposed precise ID: `lem-cyclotomic-semistandard-sums-give-schur-endomorphism-basis`.

For typesµ,ν, the exact map assertion is

`Hom_H(mνH,mµH) → H`, `f↦f(mν)`,

has image exactly `mµH∩H mν`, and that intersection has R-basis `{m_(S,T):S∈SStdµ(λ), T∈SStdν(λ)}`. Injectivity of evaluation is immediate from cyclicity; the missing well-definedness equality is

`{x∈mµH : x Ann_right(mν)=0}=mµH∩H mν`.

The inclusion from the right side is immediate, but the reverse inclusion is not automatic for an arbitrary algebra. Over a field it follows from an independently proved symmetric trace on H: if τ gives a nondegenerate symmetric pairing, then `Ann_right(mν)=(H mν)^⊥`; therefore its left annihilator is H mν by double orthogonal complement. This is a full elementary reduction, but this worker has not supplied that trace proof over universal R or the deformation DVR. A field trace alone does not establish the universal Hom/base-change assertion required by Jantzen theory.

Once S1 gives the two one-sided semistandard bases, applying * gives the corresponding basis of H mν. Because the first module's Murphy coefficients are constant on admissible left fibres and the second's on admissible right fibres, their intersection has coefficients constant on both fibres and zero off their admissible intersection. It is consequently the direct sum of the disjoint rectangular-fibre sums m_(S,T). This proves the intersection-basis step **from S1**, rather than leaving a second unrelated straightening gap. The only additional Hom gap after S1 is the displayed double-annihilator equality.

For each S,T define `φ_ST(mαh)=δ_(α,type T)m_(S,T)h`. The double-annihilator identity proves these are actual H-maps; the intersection basis then proves they are a basis of C. Their cellular multiplication has a complete reduction from these data. For h with `m_(U,V)=m_(type U)h`, the product is zero unless type(U)=type(T); otherwise evaluating it gives `m_(S,T)h`. The Murphy cell law gives its same-shape part as `Σ_(s∈fibre S)Σ_v b_(T,v)(h)m_sv`, where `b_(T,v)=Σ_(t∈fibre T)r_(t,v)(h)` is independent of s and S. Since the product is an actual H-map, the already proved rectangular-fibre basis groups v into its semistandard fibres and proves those b coefficients constant on each right fibre. Thus the resulting coefficient of φ_SW depends on T,W and the multiplier, not S; every remaining term has higher shape. No further coefficient axiom is missing after S1 and the double-annihilator equality.

The transpose rule is also genuinely multiplicative. Write `m_(S,T)=m_(type S)h_ST`; then `m_(T,S)=h_ST* m_(type S)`. For a composable pair with type(T)=type(U), the star of its evaluated product `m_(S,T)h_UV` is `h_UV* m_(T,S)`. But `m_(T,S)=m_(type T)h_TS` and `m_(V,U)=h_UV* m_(type U)`, so this is precisely the evaluated opposite product `m_(V,U)h_TS`. For noncomposable types both products are zero. Evaluation injectivity proves `(φ_ST φ_UV)*=φ_VU φ_TS`. Hence transposition gives an involutory anti-automorphism and the semistandard datum is cellular. A generic split character count is not used.

## Exact optional helper inventory for parent integration

The original aggregate IDs requested by parent can be retained:

- `def-arbitrary-level-cyclotomic-hecke-murphy-cell-and-schur-modules`: actual element definitions, dominance/type conventions, C=End of all multipartition Mλ, Specht and conditional Schur standard definitions; do not smuggle semistandard freeness into the definition before S1/S2.
- `thm-arbitrary-level-cyclotomic-hecke-murphy-basis-is-cellular`: local proof from `murphy-and-jm-local-construction.md` §§1–4, downstream of the independently late dimension proof and ordinary finite Murphy suppliers.
- `lem-arbitrary-level-cyclotomic-murphy-jm-action-is-content-triangular`: same file §§5–6, with every field/repeated-charge finite-e case and the universal deformation extension.
- `lem-cyclotomic-semistandard-row-type-sums-give-permutation-module-bases`: S1, presently unproved cross-component membership/pivot and generator fibre-coefficient identities.
- `lem-cyclotomic-semistandard-sums-give-schur-endomorphism-basis`: S2, presently unproved universal double-annihilator equality, with its intersection and cellularity deductions as stated.
- `thm-cyclotomic-schur-standards-and-schur-functor-control-block-linkage`: the full downstream algebraic proof in `cellular-and-schur-algebraic-consequences.md`, depending on the proved semistandard datum when it becomes available.

General cellular forms/simple labels/purity/shared-factor linkage may use narrow correct native20 suppliers if the parent verifies their literal contracts. In particular, do not consume a supplier that equates “nonzero form” with “nondegenerate form”; the proof in the preceding file supplies the correct result. The independent center-correspondence proof for any M containing H is complete and may be extracted as an additional lemma if it simplifies the parent's block-transfer stack.

Nothing in this packet proves the signed rim-hook Gram determinant factorization, generic standard-form nondegeneracy, the K core reduction, or content-equivalence ⇒ Jantzen-equivalence. Nothing closes clause(iv) until those assigned obligations and S1/S2 are actually supplied.
