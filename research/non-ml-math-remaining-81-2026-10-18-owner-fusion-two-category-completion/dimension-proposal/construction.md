# Arbitrary fusion global dimension: local construction

Scope: the PA-48 canonical-Frobenius separability interface over an algebraically closed field of characteristic zero. This research proposal does not modify canonical items or record acceptance stamps. In particular, a pivotal or unitary structure on the original fusion category is **not** a hypothesis.

## Source reading and conventions

Read in full the locally retained EGNO author-copy text, §§7.18–7.21, including the actual printed proofs of Theorem 7.19.1, Corollary 7.19.3, Lemma 7.21.5, Theorem 7.21.7, Corollary 7.21.8, Theorem 7.21.12 and Proposition 7.21.18. Also read the complete proofs of Propositions 4.8.1 and 4.8.4 and the description in Example 7.9.14. Source URL: https://math.mit.edu/~etingof/egnobookfinal.pdf . Local carrier: `../deformation-proposal/egno.txt`, lines 11234–12035 and 5450–5495. The approved scope was read in `research/plan-physics-algebras-track.md` and the complete `research/non-ml-math-remaining-81-2026-10-18-owner-drift-repair/modular-higher/construction.md`.

For the formulas below, use right duality (X\mapsto X^\vee), with evaluation (X^\vee\otimes X\to1) and coevaluation (1\to X\otimes X^\vee). Write (F=(-)^{\vee\vee}), and use the coherent inverse double-left-dual (F^{-1}). The sibling uses the opposite dual convention for the summands of K; translate before integration, rather than identifying a left dual and a right dual without their comparison map.

## Elementary squared norms, proved without pivotality

For a simple object X, its left and right duals are isomorphic: the unique simple Y for which Hom(1,X⊗Y) is nonzero and the unique simple Y for which Hom(X⊗Y,1) is nonzero coincide. Indeed, semisimplicity identifies both dimensions with the multiplicity of 1 in X⊗Y, while the two duality adjunctions identify the respective unique objects as the right and left duals. Consequently X≅F(X).

Choose an isomorphism a_X:X→F(X). Put

    L(a_X)=ev_{X^vee}(a_X⊗id)coev_X,
    n_X=L(a_X)L((a_X^{-1})^vee).

The second trace uses the compatible duality identifications. If a_X is multiplied by t, its first trace is multiplied by t and its second trace by t^{-1}; thus n_X is independent of the choice. Both traces are nonzero. For the first, both arrows in 1→X⊗X^vee→1 are nonzero, and the unit occurs with multiplicity exactly dim End(X)=1. In a semisimple category any nonzero inclusion and nonzero projection for a multiplicity-one simple summand have nonzero composite. Apply the same argument to the dual for the second trace. Hence n_X≠0. In particular n_1=1.

Define G(C)=Σ_X n_X. Nonzero individual summands do **not** prove this sum nonzero over a general field.

## Positivity lemma with complete linear-algebra proof

Suppose first that C is pivotal over C, with pivotal isomorphism a:id→F. Set d_X=L(a_X). Pivotal duality gives n_X=d_Xd_{X^vee}. Additivity follows by inserting inclusions/projections for a direct sum into evaluation and coevaluation. Multiplicativity follows by substituting

    coev_{X⊗Y}=(id_X⊗coev_Y⊗id_{X^vee})coev_X

and the reverse-order evaluation into L(a_{X⊗Y}), and then using a_{X⊗Y}=a_X⊗a_Y with the tensor constraint of F. The two inner evaluation/coevaluation contractions give d_Y and d_X. Thus d_Xd_Y=Σ_Z N_{XY}^Z d_Z.

Index the finite simple set by I. Define the real matrix M_X by (M_X)_{Y,Z}=N_{XY}^Z and let d=(d_Y)_{Y∈I}. The preceding identity is M_Xd=d_Xd, and d≠0 since d_1=1. Rigidity gives

    N_{XY}^Z=dim Hom(Z,X⊗Y)
             =dim Hom(X^vee⊗Z,Y)
             =N_{X^vee Z}^Y.

Therefore M_{X^vee}=M_X^t. It follows that

    (M_X M_X^t)d=d_Xd_{X^vee}d=n_Xd.

For a nonzero complex eigenvector d of the real symmetric matrix B=M_XM_X^t, multiply Bd=n_Xd by its conjugate transpose. One obtains

    n_X=(d* B d)/(d* d)=||M_X^t d||²/||d||²≥0.

The previously proved n_X≠0 makes this inequality strict. Thus all squared norms in every pivotal complex fusion category are strictly positive. This argument does not require d_X to be positive or even real, and does not assume M_X itself is symmetric or normal. It also does not assume a braiding.

## Finite pivotal cover: the exact sufficient interface

The sufficient interface is a monoidal natural isomorphism g:id→F². Its compatibility with duality is automatic, and is proved here: apply naturality and the monoidal equation to evaluation X^vee⊗X→1 and coevaluation 1→X⊗X^vee. The resulting equations say exactly that g_{X^vee} is the inverse dual of g_X, under the canonical identifications F²(X^vee)=F²(X)^vee. The dual mate is unique by the two snake identities, so g_{X^vee}=(g_X^vee)^{-1}. Applying this equation twice gives g_{X^{vee vee}}=g_X^{vee vee}, or F(g_X)=g_{F(X)}. This implication uses F=double dual; it is not true for a general unrelated autoequivalence. The same inverse-dual equation supplies the dual compatibility for the pairs below.

Define C_g to have objects (V,f), f:V→F(V) an isomorphism satisfying F(f)f=g_V, and arrows h satisfying F(h)f=f'h. Tensor product uses f⊗f' and the tensor constraint of F. The equation for a tensor product follows from monoidality of g. For the tautological map f:(V,f)→(F(V),F(f)) to be an equivariant arrow, the equation is F(f)f=g_V; for its target to be an object the required equation follows from F(g_V)=g_{F(V)}. Its naturality is exactly the definition of arrows. Thus the tautological f is a pivotal structure once the stated dual compatibility has been supplied.

Here is the finite semisimplicity check, often omitted. Since every simple X is F-stable, choose b_X:X→F(X). There is a nonzero scalar c_X with F(b_X)b_X=c_Xg_X. Algebraic closedness supplies t_X with t_X²c_X=1. There are exactly two solutions f_X=±t_Xb_X because char(k)≠2. On a multiplicity space V_X, write a general f as f_X⊗T_X. Naturality of g reduces its equation to T_X²=id. The projections (id±T_X)/2 split V_X into the ±1 eigenspaces. Therefore every object is a direct sum of the two lifts X_+,X_−, each lift is simple, there are exactly 2|I| simple classes, and Hom between distinct lifts vanishes. The tensor unit is (1,id), and its endomorphisms are k. Dual compatibility supplies rigidity. Hence C_g is a fusion category.

The forgetful tensor functor U:C_g→C preserves evaluation, coevaluation and their composites. Thus it preserves n_X. Every simple X of C is the underlying object of X_+. The positivity lemma applied to C_g gives n_X>0 for every X of C over C. In particular G(C)>0. No spherical cover is needed for this implication; pivotality is enough. This avoids adding the extra trace-identity obligation needed to call C_g spherical.

## Descent from an arbitrary algebraically closed characteristic-zero field

Choose a skeletal finite presentation of C: bases for all finitely many simple Hom spaces; tensor multiplicity decompositions; matrices of associators and unitors and their inverses; evaluation and coevaluation matrices; the chosen a_X and their inverses. Adjoin to Q the finitely many scalar entries of these matrices. The resulting finitely generated characteristic-zero field k_0 embeds in C: choose a transcendence basis, send it to an algebraically independent finite tuple of complex numbers, and extend the remaining finite algebraic extension into the algebraically closed field C.

The category with finite tuples of finite-dimensional multiplicity spaces and these structure matrices is already split semisimple over k_0, since its simple endomorphism rings are k_0 and all Hom spaces between distinct simple labels vanish by construction. Its defining pentagon, triangle and snake equations are finite matrix polynomial identities over k_0. They remain valid after embedding into C. The squared norms and G(C) belong to k_0 and are given by the same matrix compositions after embedding. If G(C) were zero in k, its image in C would vanish, contradicting strict positivity. Thus G(C)≠0 in k. This descent does not require the original category to be defined over the algebraic numbers.

## Frobenius trace identity and separability

Let (K,m,η,Δ,ε) be the sibling's canonical Frobenius algebra in C⊠C^rev. Put b=εm and c=Δη. The Frobenius and counit equations imply

    (id⊗b)(c⊗id)=id_K,
    (b⊗id)(id⊗c)=id_K.

For example the first composite is (id⊗ε)(id⊗m)(Δη⊗id)=(id⊗ε)Δm(η⊗id)=id. The other uses the other Frobenius equality. Hence b,c exhibit K as its own left and right dual.

Let φ:K^vee→K be the induced isomorphism, using the convention for which

    ev_K=εm(φ⊗id),
    coev_K=(id⊗φ^{-1})Δη.

The canonical double-dual comparison is q=φ^vee φ^{-1}:K→K^{vee vee}. Substituting the displayed evaluation and coevaluation into its categorical trace and cancelling φ and its inverse gives exactly

    L(q)=εmΔη.

This is a scalar identity valid for every Frobenius algebra in every rigid category; it does not assert yet that this scalar is G(C).

For the canonical K, the trace-summand calculation can be replaced by a completely explicit calculation of βc, avoiding any assertion about the restriction of q. The following calculation uses **the sibling's left-dual convention**, ev_i:i⊗i*→1 and coev_i:1→i*⊗i, and all tensor products in C^rev are reversed.

Write K_i=i⊠i*. Put j=i*. Choose any a:i→i**. Set

    d=ev_{i*}(id_{i*}⊗a)coev_i,
    e=ev_i(a^{-1}⊗id_{i*})coev_{i*}.

Both scalars are nonzero by the multiplicity-one argument above. They are exactly the two trace loops whose product is n_i. Choose the following projections and their normalized sections:

    p_ij=ev_i,                       q_ij=(a^{-1}⊗id_{i*})coev_{i*}/e,
    p_ji=ev_{i*}(id_{i*}⊗a),         q_ji=coev_i/d.

They satisfy p_ij q_ij=p_ji q_ji=1. As always, if the chosen representative for j differs from i*, transport all four maps across one chosen isomorphism; the isomorphism and its inverse cancel in every displayed composite.

The explicit canonical multiplication gives

    β_ij=p_ij ⊠ q_ij*.

The inverse pairing has an (i,j) component of the form

    c_ij=A_i q_ij ⊠ p_ij*

because both relevant Hom spaces from the tensor unit are one-dimensional. In the snake composite (id_K⊗β)(c⊗id_K) on K_i, only this summand contributes. Its first exterior factor is

    A_i (id_i⊗p_ji)(q_ij⊗id_i),

and its second exterior factor is

    (q_ji*⊗id_{i*})(id_{i*}⊗p_ij*).

The latter is the left dual of (p_ij⊗id_i)(id_i⊗q_ji). Direct substitution and the two snake identities give

    (id_i⊗p_ji)(q_ij⊗id_i)=(1/e)id_i,
    (p_ij⊗id_i)(id_i⊗q_ji)=(1/d)id_i.

For the first equality, the numerator is a^{-1}(id_{i**}⊗ev_{i*})(coev_{i*}⊗id_{i**})a=id_i; for the second the numerator is (ev_i⊗id_i)(id_i⊗coev_i)=id_i. Therefore the snake equation is A_i/(de)=1, and A_i=de=n_i. Finally,

    β_ij c_ij=A_i(p_ij q_ij)⊠(q_ij* p_ij*)=A_i=n_i.

Summing over i proves

    εmΔη=βc=Σ_i n_i=G(C).

This is a direct local proof of the requested dimension identity, with both scalar loops and their normalizing factors exposed. It does not assume that C is pivotal, and does not use the trace characterization of Radford's isomorphism.

Once εmΔη=G(C)≠0 is established, mΔ is invertible. Indeed it is a K-bimodule endomorphism. By the regular-module equivalence its bimodule endomorphisms identify with End_C(1)=k, so mΔ=β id_K. Then β εη=G(C), and the nonzero right-hand side forces β≠0 (and εη≠0). Hence s=Δ(mΔ)^{-1} is a K-bimodule section of m. Equivalently, if the sibling normalizes εη=1, then mΔ=G(C)id and s=G(C)^{-1}Δ.

## Fourth-dual construction: explicit formula, and what still needs local verification

This section records the actual EGNO construction rather than treating Radford as an established local supplier. Let H be right K-modules in C⊠C^rev. Needed inputs from the sibling are full faithfulness of J(V)=(V⊠1)⊗K and the tensor sliding isomorphism

    ρ_V:(V⊠1)⊗K → (1⊠V)⊗K.

Its tensor equation says that sliding W and then V past K agrees with sliding V⊗W, after commuting distinct exterior factors. A suitable tensor structure on H is convolution (composition after identifying C⊠C^rev with endofunctors of C), rather than the ambient tensor product of right modules.

The sibling's Frobenius pairing gives a right K-module isomorphism φ:K^vee→K. Thus no distinguished-invertible-object or Frobenius–Perron argument is needed in this fusion-case proof. In the general finite-tensor version, this is the step where the distinguished invertible object occurs; the fusion-case Frobenius pairing has already removed it.

The dual of ρ_V has source and target involving K^{vee vee}. If q:K→K^{vee vee} is an algebra isomorphism and identifies their right-module structures, transport the twice-dual sliding map across q to obtain

    ρ~_V:(F(V)⊠1)K → (1⊠F^{-1}(V))K.

Compose with ρ_{F^{-1}(V)}^{-1}. Full faithfulness of J gives a unique

    δ_V:F(V) → F^{-1}(V)

whose J-image is ρ_{F^{-1}(V)}^{-1}ρ~_V. The tensor sliding equation gives tensoriality of δ by applying its twice-dual version, conjugating by q, and cancelling the two consecutive slides. Put g_V=δ_{F(V)}^{-1}:V→F²(V), using F^{-1}F=id.

The dual-preservation argument above proves the needed action coherence once δ is known monoidal. The following general Frobenius mate calculation establishes q as an algebra map, independently of the canonical simple-summand calculation.

### Complete Frobenius Nakayama mate calculation

Write A=K for this general lemma. Put ℓ=φ^{-1}:A→A^vee and b_R=ev_{A^vee}(id_{F(A)}⊗ℓ):F(A)⊗A→1. The equation ℓ^vee q=ℓ gives

    b_R(q⊗id_A)=b.

For objects U,V and t:U⊗V→1 define its cyclic right transpose by the **typed composite**

    R_{U,V}(t)=ev_{V^vee}(id_{F(V)}⊗[(t⊗id_{V^vee})(id_U⊗coev_V)]),

which has source F(V)⊗U. This operation is an isomorphism of Hom spaces by the two snake equations. Two elementary rules follow directly by substitution: it is natural in U, and for h:W→V,

    R_{U,W}(t(id_U⊗h))=R_{U,V}(t)(F(h)⊗id_U).

Also moving two consecutive last factors to the front in two applications of R equals moving their tensor product as a block. To check this rule, substitute coev_{V⊗W}=(id_V⊗coev_W⊗id_{V^vee})coev_V and the reverse-order evaluation formula; both expressions become the same nested evaluation/coevaluation composite, with the tensor constraint F(V⊗W)=F(V)⊗F(W).

In particular R_{A,A}(b)=b_R. On Hom(A^⊗n,1) define

    τ_n(t)=R_{A^{⊗(n−1)},A}(t)(q⊗id_{A^{⊗(n−1)}}).

Let t_3=b(m⊗id)=b(id⊗m), where equality is Frobenius invariance/associativity. The first expression, naturality of R in its first argument, and b_R(q⊗id)=b give

    τ_3(t_3)=b_R(q⊗m)=b(id⊗m)=t_3.

Hence τ_3²(t_3)=t_3. The two-factor rotation rule and naturality in the first argument show

    τ_3²(t_3)=R_{A,A⊗A}(t_3)(q⊗q⊗id_A).

Using t_3=b(id⊗m) and the displayed naturality rule in the last argument gives

    τ_3²(t_3)=b_R(F(m)(q⊗q)⊗id_A).

No factor of A is multiplied with a factor of F(A) in these equations. Both inputs to F(m) belong to F(A), and every domain is exactly A⊗A⊗A after the written precomposition. Finally, the nondegenerate pairing b_R makes

    T:Hom(A⊗A,F(A))→Hom(A⊗A⊗A,1),
    T(h)=b_R(h⊗id_A)

injective. The left side of the preceding equality is T(F(m)(q⊗q)), whereas t_3=T(qm). Thus

    q m=F(m)(q⊗q).

For the unit, invariance b(η⊗id)=ε=b(id⊗η) and one cyclic transpose give qη=F(η), by the same nondegenerate mate injection on Hom(1,F(A)). Since q is an isomorphism by construction, q:A→F(A) is an algebra isomorphism. This proves the missing algebra statement, rather than citing the name Nakayama.

### Right-module transport and tensoriality

The double dual of a right K-linear map is right K^{vee vee}-linear: dualize its defining action square twice and use the tensor constraint of double duality. Identifying K and K^{vee vee} by the algebra isomorphism q preserves this action square. Therefore the transported ρ~ above is genuinely right K-linear. The tensor sliding equation for ρ~ is the twice-dual tensor sliding equation for ρ with every occurrence of K^{vee vee} identified through q. Every internal edge labelled q^{-1} is followed by q; the unit and multiplication vertices agree because qη=η^{vee vee} and qm=m^{vee vee}(q⊗q). Thus the resulting equation is exactly the sliding equation for ρ~. Composing that equation with the inverse sliding equation for ρ gives the tensor equation for δ. Full faithfulness of J reflects the equation as an equality in C.

The result is a monoidal δ:F→F^{-1}, hence the monoidal g:id→F² constructed above. Its dual and action coherence follow from the already proved dual-preservation lemma. The finite pivotal cover, positivity, descent and exact scalar computation now give

    εmΔη=Σ_i |i|²≠0

for every algebraically closed characteristic-zero fusion category. The only external **local supplier interface** used in this research construction is the sibling's nonseparable regular-module equivalence J:C≃Mod_K(C⊠C^rev), with its canonical tensor sliding ρ and coherence. That interface must be locally proved before integration. The proof above does not use separability to obtain that equivalence, and must not be integrated against a supplier which does.
