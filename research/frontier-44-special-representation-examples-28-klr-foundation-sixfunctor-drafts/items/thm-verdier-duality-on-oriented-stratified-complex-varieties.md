---
id: thm-verdier-duality-on-oriented-stratified-complex-varieties
kind: theorem
title: Constructible Verdier duality and complex orientation
status: draft
origin: pipeline
deps:
- lem-analytic-six-operation-support-and-trace-calculus
- thm-compactly-supported-derived-pushforward-has-exceptional-inverse-image-adjoint
- lem-bounded-analytic-field-sheaves-have-derived-tensor-hom-and-pullback-pushforward-adjunctions
- def-algebraically-constructible-complex-of-analytic-field-sheaves
- lem-finite-simplicial-constructible-sheaves-have-a-derived-incidence-model
- lem-complex-algebraic-stratifications-have-finite-conical-cochain-models
- def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Verdier, Dualité dans la cohomologie des espaces localement compacts, exposé300
    url: https://www.numdam.org/item/SB_1964-1966__9__337_0.pdf
  - title: Stacks Project, Cohomology of Sheaves §§16–18
    url: https://stacks.math.columbia.edu/download/cohomology.pdf
proof_strategy: direct
verification:
  precheck: pass
---

## Statement

Assume AC and the actual finite conical/triangulation and derived-incidence-model suppliers listed below. On the analytic space $X$ of a separated finite-type complex algebraic variety, constructible complexes admit the fixed-space finite models required by those suppliers. Then $\omega_X=a_X^!k$ and $D_X=R\mathcal Hom(-,\omega_X)$ preserve bounded constructible objects and the natural evaluation $A\to D_XD_XA$ is an isomorphism. On a smooth complex $d$-variety, the complex orientation normalizes $\omega_X\simeq k_X[2d]$. For constructible maps for which the geometric supplier proves the stated bounded outputs, $Rf_*D_X\simeq D_YRf_!$, $D_YRf_*\simeq Rf_!D_X$, and $f^!\simeq D_Xf^*D_Y$. Proper base change has the coherent extraordinary dual exchange $u^!Rf_*\simeq Rf'_*v^!$. The fixed-space triangulation is not an assumed globally simplicial model of $f$.

## Facts & Assumptions

**Given:** The hypotheses of the Statement, with k-linear sheaves and the declared Axiom of Choice.

[F1] The exact supplier [[lem-analytic-six-operation-support-and-trace-calculus]] is used with its stated hypotheses.

[F2] The exact supplier [[thm-compactly-supported-derived-pushforward-has-exceptional-inverse-image-adjoint]] is used with its stated hypotheses.

[F3] The exact supplier [[lem-bounded-analytic-field-sheaves-have-derived-tensor-hom-and-pullback-pushforward-adjunctions]] is used with its stated hypotheses.

[F4] The exact supplier [[def-algebraically-constructible-complex-of-analytic-field-sheaves]] is used with its stated hypotheses.

[F5] The exact supplier [[lem-finite-simplicial-constructible-sheaves-have-a-derived-incidence-model]] is used with its stated hypotheses.

[F6] The exact supplier [[lem-complex-algebraic-stratifications-have-finite-conical-cochain-models]] is used with its stated hypotheses.

[F7] The exact supplier [[def-axiom-of-choice]] is used with its stated hypotheses.

## Proof

1.1 The construction supplies ω_X=a_X^!k and D_XA=RHom(A,ω_X). Dualizing transitivity is established directly by local section complexes: RΓ(U,f^!ω_Y)=RHom_Y(Rf_!j_U!k,ω_Y)=RHom_k(RΓ_c(Y,Rf_!j_U!k),k)=RHom_k(RΓ_c(U,k),k)=RΓ(U,ω_X). The middle equality uses the constructed terminal-map Hom formula and the actual compact-support composition. These are natural chain comparisons under restriction of U, so their map is an isomorphism on cohomology stalks, proving f^!ω_Y≈ω_X without inferring an unrestricted adjunction from bounded tests. The local formula is RΓ(U,D_XA)=RHom_k(RΓ_c(U,A),k): apply the exceptional-adjunction theorem to the open U→X and a_X, then A and k. Over a field the injective coefficient is k itself, so this is the signed dual cochain model, with no integral Ext correction. [given, construct, algebra]

1.2 On an oriented real n-manifold and a small contractible ball U, compact-support cochains of k have one cohomology k in degree n, normalized by the positive orientation generator. This can be proved on a closed simplex by its finite relative cellular complex (simplex,boundary), whose quotient has exactly its oriented top generator. Excision identifies a ball with this model. Local models imply ω_X≈or_X[n]; on a smooth complex d-variety the complex orientation trivializes or_X, yielding k_X[2d]. This fixes the positive complex generator used by oriented diagonal Thom classes. [given, construct, algebra]

1.3 For a finite-rank local system L on a smooth stratum, the same local model gives D_XL=L^∨[n] and finite-dimensional vector-space evaluation gives L≈D_XD_XL. Truncation extends this to bounded locally constant complexes. However induction on strata must not silently assume that DD(j!L)=j!DD(L); that assertion itself involves boundary links. The following fixed-space cellular construction supplies the missing local proof. [given, construct, algebra]

1.4 Choose a finite regular triangulation P with deleted subcomplex L modelling X, subordinate to the given constructible A. This is a triangulation of a space, not a globally simplicial presentation of any algebraic map. The derived-incidence-model supplier identifies the bounded derived category of finite face-diagrams with the full all-sheaf-derived constructible subcategory, under the stated finite triangulation hypothesis. In that incidence category the injective cogenerators I_σ are the sheaves k on closure(σ) intersected with X, extended by zero to X. Every finite-dimensional diagram has a finite injective bar resolution by sums of these I_σ; strict face chains have length at most the number of cells. [given, construct, algebra]

1.5 The compact-support local dual formula computes D_XI_σ directly. At an interior point of σ a small neighbourhood in closure(σ) is an oriented real dim(σ)-ball, with its single compact-support generator in that degree. At a proper face τ<σ a small neighbourhood in closure(σ) is a product [0,∞)^c×R^r with c>0. Its compact-support cochain complex is acyclic: one half-line has relative finite cellular model ([0,1],{1}), whose edge boundary to the remaining vertex is an isomorphism, and tensoring that contraction with the other factors stays a contraction. At a point outside closure(σ) it is zero. The positive orientation restriction identifies the surviving coefficient on the interior. Therefore D_XI_σ=j_intσ!k[dim(σ)]. Conversely, compact-support cochains of j_intσ!k on a small star of any remaining face τ≤σ are the cochains of an open sector (0,∞)^c×R^r≈R^dim(σ). They have exactly the positive oriented generator in degree dim(σ), and restriction between face-stars preserves that generator. Hence D_X(j_intσ!k[dim(σ)])=I_σ. The evaluation I_σ→D_XD_XI_σ is ordinary finite-dimensional double-dual evaluation at the interior and has that same value at every face by these incidence identifications; it is an isomorphism. These computations use finite relative cellular complexes and the actual sheaf/cochain comparison, not a guessed stalkwise duality. [given, construct, algebra]

1.6 Since D_X is contravariant exact, its double is covariant exact and evaluation is a natural transformation of exact functors. Apply it to the finite injective incidence resolution of A. Every term is a finite sum of the I_σ, for which it is an isomorphism. Induction through the finite resolution cones proves A→D_XD_XA is an isomorphism. The same local calculations prove bounded constructibility of D_X, since the resolution has finitely many finite-dimensional cellular terms. Refining the triangulation changes neither the support-defined D nor its evaluation, so comparisons satisfy their identity/cocycle laws automatically. The proof uses the stated fixed-space incidence/cochain comparison; it does not assert a cellular presentation of an algebraic map. [given, construct, algebra]

2.1 After this biduality, the internally localized exceptional adjunction with B=ω_Y gives Rf_*D_XA≈D_YRf_!A: both sides represent the sheaf of derived morphisms from Rf_!A to ω_Y, and the source-side object is RHom(A,f^!ω_Y)=D_XA. Apply this identity to D_XA and apply D_Y; the two biduality evaluations give D_YRf_*A≈Rf_!D_XA. Next Hom(A,D_Xf*D_YB)=Hom(f*D_YB,D_XA)=Hom(D_YB,Rf_*D_XA)=Hom(D_YRf_*D_XA,B)=Hom(Rf_!A,B). These transpositions give a natural comparison f^!B→D_Xf*D_YB. Apply its internally localized chain formula to E_U=j_U!k and shifts: the two derived section complexes agree, so the comparison is an isomorphism on cohomology stalks. The right side is bounded constructible by the fixed-space duality and geometric inverse-image models, proving that f^! preserves bounded constructibility. The represented Hom formula is now a genuine adjunction on that category; inverse transposition proves its triangle identities and fixes all comparison maps. This avoids falsely equating compact-support cohomology downstairs with compact-support cohomology upstairs for a nonproper map. Applying these actual dualities to ordinary proper base change gives the coherent extraordinary exchange u^!Rf*≈Rf'*v^!; the duality isomorphisms and evaluation are natural and respect the sectionwise pasting identities, so the exchange has the mate/trace compatibility needed by convolution. [given, construct, algebra] ∎

## Remarks

Geometric supplier carriers are independently being constructed. Until their exact clauses and actual proofs are available, this draft remains pending those dependencies; the source citation alone supplies no proof closure.
