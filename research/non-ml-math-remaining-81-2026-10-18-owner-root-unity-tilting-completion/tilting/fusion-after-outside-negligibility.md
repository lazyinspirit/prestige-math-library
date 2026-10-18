# Exact downstream fusion proof; one unproved hypothesis isolated

This is research proof construction, not a canonical supplier and not a claim of completed PA37. All root/lattice/parameter conventions are those of the eleven installed tilting proposals. The additional hypothesis **(N)** below is still a missing local proof obligation:

**(N)** Every indecomposable tilting T(τ) whose dominant label is outside the closed bottom alcove has quantum dimension zero.

The upper-wall labels have quantum dimension zero already by the installed closed-bottom simplicity and quantum-dimension suppliers. The following deduction needs no modularity or invertible monodromy matrix.

## Alcove labels

Let A be the dominant labels ν satisfying 0 < (ν+ρ,α_i) and (ν+ρ,θ)<ℓ. Each T(ν)=Δ(ν) is simple and has nonzero quantum dimension. Every singular label has zero quantum dimension: all Weyl sections belong to its singular affine orbit by weak linkage, and each section has zero dimension by the product formula. Assumption (N) treats the remaining regular labels. The parent's proved negligible-quotient algebra therefore says that the surviving simple objects are exactly T(ν), ν∈A. The set A is finite because its Dynkin coordinates are nonnegative and their highest-root-mark weighted sum is at most ℓ−h. This assertion does not identify simplicity in the original module category outside A.

## Alternating coefficient functionals

Fix ν∈A. Define a linear functional on the free abelian group of formal Weyl characters by

    a_ν(ch Δ(η)) = det(w), if η=w·ν is dominant for w∈W⋉ℓQ,
                    0, otherwise.

The element w is unique because ν+ρ is regular and the affine group acts freely on alcoves. Weyl characters are linearly independent: in any finite linear relation choose a maximal label and compare its highest-weight coefficient. Hence a_ν is well-defined. Only finite character sums occur.

For any indecomposable tilting T(τ), weak linkage places every Weyl section in the affine orbit of τ. If that orbit differs from ν's, a_ν(ch T(τ))=0. If it is ν's, affine signs give

    qdim T(τ) = qdim Δ(ν) · a_ν(ch T(τ)).

Since qdim Δ(ν)≠0, (N) and the already proved singular/upper-wall cases imply a_ν(ch T(τ))=0 except when τ=ν. In the latter case T(ν)=Δ(ν), and the functional is 1. Thus a_ν counts precisely the T(ν)-summands of every tilting module. No positivity of complex quantum dimensions is used.

## Affine Racah formula

For λ,μ∈A the tensor T(λ)⊗T(μ)=Δ(λ)⊗Δ(μ) is tilting. Its saturated integral Weyl filtration has multiplicities equal to the classical tensor multiplicities c^η_{λμ}: specialization preserves each Weyl character and comparing highest terms determines the finite expansion. Therefore its surviving ν multiplicity is

    N^ν_{λμ} = Σ_{w∈W⋉ℓQ, w·ν dominant} det(w)c^{w·ν}_{λμ}.

This is already the affine Weyl fusion rule. To obtain the weight-multiplicity version, the actual published Steinberg/Racah–Speiser supplier gives

    c^η_{λμ} = Σ_{v∈W} det(v) dim Δ(λ)_{v^{-1}·η−μ}.

Every regular affine-orbit point a·ν has exactly one finite-Weyl conjugate in the dominant chamber. Consequently the pairs (w,v) in the preceding two sums are in bijection with all a∈W⋉ℓQ by a=v^{-1}w, and det(v)det(w)=det(a). It follows that

    N^ν_{λμ} = Σ_{a∈W⋉ℓQ} det(a) dim Δ(λ)_{a·ν−μ}.

The latter sum is finite: a·ν must lie in μ plus the finite weight set of Δ(λ), and a is unique for any such point. These are ordinary integral nonnegative tensor multiplicities because the first definition counts actual surviving summands. Degeneracy of the chosen braiding's S matrix has no bearing on this calculation.

Actual local classical suppliers read for this deduction: `cor-racah-speiser-tensor-product-algorithm` and `prop-tensor-product-multiplicities-are-character-structure-constants`; the former explicitly binds `thm-steinberg-tensor-product-multiplicity-formula` as its finite-Weyl formula.
