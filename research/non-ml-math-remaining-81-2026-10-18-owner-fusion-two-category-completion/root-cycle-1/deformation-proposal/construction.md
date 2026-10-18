# Exact deformation contraction proposal

This is isolated research authoring, not a canonical edit or an acceptance stamp. The full EGNO PDF was fetched from https://math.mit.edu/~etingof/egnobookfinal.pdf and extracted with PyMuPDF. Read §§7.18–7.22 and 9.1, especially 7.20.1, 7.21.18–19, 7.22.7, 9.1.1–3 and 9.1.6. EGNO's “same computation” is expanded below. The nonzero global-dimension proof is assigned to the independent dimension proposal; it is a genuine prerequisite, not an implicit pivotality assumption.

## Conventions and exact supplier boundary

Let k be algebraically closed of characteristic zero and C a fusion category. Strict notation suppresses coherent associators; every formula is invariant under insertion of the given associators. Fix duals X* with ev_X:X⊗X*→1 and coev_X:1→X*⊗X. Write C^rev for reversal of tensor product, not reversal of arrows. D=C⊠C^rev acts on C by (X⊠Y)⋅V=X⊗V⊗Y.

The only global-dimension interface needed below is this: for the canonical algebra K=internalEnd_D(1), with the normalized Frobenius functional λ:K→1⊠1 satisfying λη=1, its Frobenius comultiplication Δ satisfies λμΔη≠0. This is proved by identifying it with the sum of squared norms of simple objects and proving that sum nonzero by sphericalization. No choice of pivotal or spherical structure on C is assumed.

## Canonical algebra and Frobenius structure

For simple representatives i (including 1), K=⊕_i i⊠i*. It represents Hom_C(X⊗Y,1). The universal evaluation K⋅1→1 induces η and μ by composing evaluations. Explicitly, choose split matrix units q^r_a:r→i⊗j and p^r_a:i⊗j→r with p^r_a q^s_b=δ_rsδ_ab id_r and ∑_{r,a}q^r_a p^r_a=id_{i⊗j}. The (i,j)-to-r component of μ is ∑_a p^r_a⊠(q^r_a)*. This is independent of matrix units. The equation ∑qp=id makes both triple products equal composition of three universal evaluations; it proves associativity. The unit is inclusion of 1⊠1.

Let λ be projection to the unit summand. The pairing β=λμ:K⊗K→1⊠1 is nondegenerate. Indeed its (i,j) block vanishes unless j≅i*, and its nonzero block is the tensor product of the two evaluation pairings obtained from a nonzero projection i⊗i*→1 and its splitting. Each is a nonzero pairing of mutually dual simple objects, hence perfect by the duality snake equations. Thus every simple block of the adjoint K→K* is an isomorphism. This does not choose compatible identifications i≅i** and does not assert a pivotal structure.

Let c:1→K⊗K be the inverse pairing, characterized by (β⊗id)(id⊗c)=id_K=(id⊗β)(c⊗id), with the duality orientations implicit in these two displayed morphisms. Associativity of μ gives β(μ⊗id)=β(id⊗μ). Taking mates with respect to β proves

Δ=(μ⊗id)(id⊗c)=(id⊗μ)(c⊗id),

(μ⊗id)(id⊗Δ)=Δμ=(id⊗μ)(Δ⊗id),

and (λ⊗id)Δ=id=(id⊗λ)Δ. For clarity, the mate calculation for the first equality consists of composing each candidate K→K⊗K with id⊗β:K⊗K⊗K→K; both composites, evaluated on three formal inputs x,y,z, are μ(x,μ(y,z)), equal to μ(μ(x,y),z). The two snake equations make taking this mate injective. The same calculation gives the two bimodule equations and the counit equations. Repeating it twice gives coassociativity. These formal inputs encode composites of morphisms, not elements of an object of C.

Because Δ is a bimodule map, u=μΔ is a bimodule endomorphism of K and u=μ(id⊗uη). Since Hom_D(1,K)=kη, write uη=tη. Thus u=t id_K and t=λμΔη. The dimension supplier proves t≠0. Consequently s=t^(-1)Δ is a bimodule section of μ and e=sη satisfies

μe=η,  (μ⊗id)(id⊗e)=(id⊗μ)(e⊗id).

These are the complete separability identities used subsequently.

## Categorical Maschke, without circular semisimplicity

For any finite semisimple D-module category E and any left K-modules U,V therein, average a plain morphism a:U→V by

P(a)=ρ_V(id_K⊗a)(id_K⊗ρ_U)(e⊗id_U).

The centrality identity for e gives P(a)ρ_U=ρ_V(id_K⊗P(a)); μe=η gives P(a)=a whenever a is K-linear. If p:V→U is K-linear and pa=id_U, then pP(a)=P(pa)=id_U. Thus all pointwise split epimorphisms of K-modules split as K-modules. Kernels and cokernels acquire K-actions because the action is exact; this proves semisimplicity, rather than presupposing it.

For left C-modules M,N, take E=Fun_k(M,N), with (X⊠Y)⋅T=N_X∘T∘M_Y. A K-action consists of maps N_i T M_i*→T, equivalently by adjunction maps N_i T→T M_i. Additivity extends these from simples to all X. The displayed μ formula says exactly that these maps obey the module-functor product equation; η says the unit equation. Their inverses are obtained by inserting coev_X and using the X* component, and the two composites are identities by the product equation at X⊗X* and the snake equations. Thus K-modules in E are precisely module functors, and K-linear maps precisely module-natural transformations. This gives the exact categorical Maschke interface required by the algebra constructor, without assuming internal algebra separability or semisimplicity of module functors.

## Hochschild complex and all-degree homotopy

More generally let A be an algebra object in a k-linear monoidal category and e:1→A⊗A a separability element as above. Let B be an A-bimodule. Put C^n(A,B)=Hom(A^⊗n,B), including C^0=Hom(1,B). Write λ_B and ρ_B for the two actions. Its differential is

(df)(a_1,...,a_{n+1})=a_1⋅f(a_2,...,a_{n+1})+∑_{j=1}^n(-1)^j f(a_1,...,a_ja_{j+1},...,a_{n+1})+(-1)^(n+1)f(a_1,...,a_n)⋅a_{n+1}.

This is an equality of composites of morphisms. Set

h_n(f)=λ_B(id_A⊗f)(e⊗id_{A^⊗(n-1)}), n≥1.

In formal Sweedler notation e=∑_r x_r⊗y_r, this is h_nf(a_1,...,a_{n-1})=∑_r x_r⋅f(y_r,a_1,...,a_{n-1}). No braiding is used in this formula.

Here is the full cancellation on arbitrary cochains, not just cocycles. For n≥1,

(h_{n+1}df)(a_1,...,a_n)=f(a_1,...,a_n)-∑_r x_r⋅f(y_ra_1,a_2,...,a_n)+∑_{j=1}^{n-1}(-1)^(j+1)∑_r x_r⋅f(y_r,a_1,...,a_ja_{j+1},...,a_n)+(-1)^(n+1)∑_r x_r⋅f(y_r,a_1,...,a_{n-1})⋅a_n.

The leading term uses ∑x_ry_r=1. Meanwhile

(dh_nf)(a_1,...,a_n)=∑_r a_1x_r⋅f(y_r,a_2,...,a_n)+∑_{j=1}^{n-1}(-1)^j∑_r x_r⋅f(y_r,a_1,...,a_ja_{j+1},...,a_n)+(-1)^n∑_r x_r⋅f(y_r,a_1,...,a_{n-1})⋅a_n.

Centrality of e identifies the first term here with ∑_r x_r⋅f(y_ra_1,a_2,...,a_n). Every other displayed term cancels with its opposite sign. Therefore dh+hd=id in every positive degree, including n=1. In degree zero hd=id-P, where P(b)=∑x_r b y_r is the bimodule-invariant projector; consequently this is a contraction onto H^0, not a false claim that H^0 vanishes.

The normalized subcomplex consists of f with f(...,η,...)=0 in every input slot. The differential preserves it by pairwise cancellation at a unit input. The homotopy preserves it because every original input remains an input of f after the new first slot y_r is inserted. Hence the same identity holds on the normalized complex. This is stronger and more explicit than an abstract vanishing argument.

## Exact module-action and module-functor complex comparison

For left modules use M_X(m)=X⋅m. For a module functor T:M→N, let γ_X:N_XT→TM_X denote the inverse of the usual structure map. Define

C^n_T=Nat((X_1,...,X_n)↦N_{X_1}...N_{X_n}T, (X_1,...,X_n)↦TM_{X_1}...M_{X_n}).

Use γ and action constraints to identify source and target, so these may equally be viewed as natural endomorphisms. The outer cofaces are left whiskering by N_{X_1} and right whiskering by M_{X_{n+1}}, with γ used at the intervening T; the internal jth coface merges X_j and X_{j+1} and conjugates by the given module associators. The differential is their alternating sum with signs +,-,+,...,(-1)^(n+1). Normalization means zero when any X_j=1. For T=id_M this is the module-action deformation complex. For a general fixed T it is the module-functor deformation complex. Cochains are natural also in m, not just a collection of numbers on fusion-ring indices.

Here is an explicit identification with the preceding categorical Hochschild complex, including its coefficients. Set Q=End_k(N)⊠End_k(M)^rev. This monoidal category acts on E=Fun_k(M,N) by (U⊠V)⋅S=USV. The tensor functor C⊠C^rev→Q induced by the two actions sends K to a separable algebra A (tensor functors preserve both separability identities). Let B_T=internalEnd_Q(T); it exists by finite semisimplicity and is an algebra by composition of evaluations. The K-module structure of T induces an algebra map A→B_T, making B_T an A-bimodule. For each n, internal-Hom adjunction gives

Hom_Q(A^⊗n,B_T)=Hom_E(A^⊗n⋅T,T)=C^n_T.

Explicitly, the (i_1,...,i_n) summand on the middle side is

Hom_E(N_{i_1...i_n} T M_{(i_1...i_n)*},T),

whose adjoint is Hom_E(N_{i_1...i_n}T,TM_{i_1...i_n}); these components determine a natural transformation because C is semisimple. The two outer Hochschild faces compose with the A-action on T on the corresponding side and become the two whiskering cofaces. For an inner face the formula ∑p⊠q* for μ inserts ∑qp=id in the corresponding adjacent tensor factors and therefore becomes exactly the merge coface. The unit η is the summand X=1, so normalization agrees. Thus this is an isomorphism of normalized complexes, not merely a comparison of cohomology dimensions. Transporting h through this explicitly given adjunction gives the requested categorical separability homotopy in all positive degrees.

For the repository's right modules, replace C by C^rev. Then M_X(m)=m⊙X and the tensor functor into End_k(M) sends X to M_X with product M_Y M_X→M_{X⊗Y}; reverse the displayed variable list when translating cochains. In particular C^2=Nat(M_YM_X,M_YM_X) and its cocycle equation is the linearized module pentagon. Replacing the comparison by (1+εb_X) changes the constraint by the displayed δb, up to the harmless overall sign determined by whether the new constraint is written (1+εz)α or α(1+εz). Consequently H^2=0 supplies precisely the infinitesimal orbit statement required for fixed action functors.

## Verification status

The cancellation identity, normalized preservation, and Maschke formula have been independently checked algebraically in this note. The nonzero scalar t remains a named supplier obligation until the dimension proposal is integrated. Source reading does not replace that supplier. No validator or proof acceptance is claimed here.
