# Finite-dimensional pivotal trace radical and semisimplification

This is an actual independently derived supplier proof proposal. Its categorical hypotheses must be established for the root tilting category separately; this proposal does not certify those hypotheses.

Let H be a complex Hopf algebra with an invertible grouplike pivot p implementing S². Let C be a full additive, direct-summand-closed, tensor-closed braided rigid category of finite-dimensional H-modules, containing the unit. Use the usual left duals, pivotal map j_X(x)(φ)=φ(px), and trace t_X(a)=Tr_X(pa). Assume the stated pivotal structure is compatible with the braiding; if spherical conclusions are wanted, also assume Tr_X(pa)=Tr_X(p⁻¹a) for all module endomorphisms a. Define N(X,Y) as the f for which t_X(gf)=0 for every module map g:Y→X.

## Trace and ideal proof

For f:X→Y and g:Y→X, rectangular matrix multiplication and the fact that module maps commute with the pivot give t_X(gf)=t_Y(fg). Explicitly, in bases this is Σ_i,j (p_X g)_{ij}f_{ji}=Σ_j,i f_{ji}(p_Xg)_{ij}, and fp_X=p_Yf. Thus pre- and post-composition of negligible maps are negligible: for a:W→X, b:Y→Z, h:Z→W, cyclicity rewrites t_W(hbfa) as t_X(ahbf), whose second factor ahb is a test morphism Y→X.

For h:Y⊗Z→X⊗Z define its right pivotal partial trace k:Y→X by

k=(id_X⊗ev_{Z*}) (id_X⊗j_Z⊗id_{Z*}) (h⊗id_{Z*}) (id_Y⊗coev_Z).

Every displayed map is H-linear because h, the evaluations/coevaluations and j_Z are H-linear; hence k is a legitimate test morphism. In a basis z_i with dual z_i*, it is k(y)=Σ_i(id_X⊗z_i*)(id_X⊗p_Z)h(y⊗z_i). Finite matrix summation gives

Tr_{X⊗Z}((p_X⊗p_Z)h(f⊗id_Z))=Tr_X(p_Xkf).

Thus f⊗id_Z is negligible. Naturality of the braiding gives id_Z⊗f=c_{Y,Z}(f⊗id_Z)c_{X,Z}^{-1}, as a map Z⊗X→Z⊗Y. Composition closure makes it negligible too. More generally tensoring f with any morphism is composition of f⊗id with an identity tensor that morphism. Therefore N is a two-sided tensor ideal. The braiding, evaluations, coevaluations and pivotal maps descend to C/N; their defining identities remain true because quotient is a monoidal functor. Spherical trace identities descend when assumed. This proves the ideal without an outside-alcove theorem.

## Endomorphism and semisimplicity proof

Every object decomposes into finitely many indecomposable module summands: recursively split a nontrivial idempotent, and dimension strictly decreases. All summands lie in C by the hypothesis.

If X is indecomposable and a∈End_H(X), each generalized eigenspace of a is H-stable. Their finite direct sum is X, so only one eigenvalue λ can occur. Thus a=λid_X+n with n nilpotent. Since a commutes with p_X, so does n; then p_Xn is nilpotent, because (p_Xn)^r=p_X^r n^r=0 for sufficiently large r, and its ordinary trace is zero. Consequently t_X(a)=λd_X with d_X=Tr_X(p_X).

The nonunits in End_H(X) form its Jacobson radical: a nonunit has sole eigenvalue zero and is nilpotent. If n is a nonunit and b is arbitrary, then bn cannot be invertible (otherwise n is injective and hence invertible as a finite-dimensional endomorphism); hence bn is nilpotent and 1−bn is invertible. This is precisely the defining radical criterion. The endomorphism ring modulo its radical is C, via a↦λ; no multiplicativity/additivity of an arbitrarily chosen eigenvalue is presumed, since the radical quotient criterion proves it. Scalar endomorphisms give every residue class because a−λid is nilpotent.

If d_X=0, t_X(a)=0 for every a, and id_X is negligible, so X becomes zero. If d_X≠0, a is negligible exactly when λ=0: necessity follows by testing g=id; sufficiency follows because ga lies in the radical for all g and hence has zero pivotal trace. Thus End_{C/N}(X)=C for each retained indecomposable.

If X and Y are nonisomorphic indecomposables and f:X→Y, then gf is noninvertible for every g:Y→X. Indeed invertibility would make X a direct summand of Y via f and (gf)⁻¹g; indecomposability of Y forces an isomorphism. Thus gf is nilpotent, so every such f is negligible. Between isomorphic indecomposables the trace pairing radical is the radical of their endomorphism algebra, transported by an isomorphism. The trace on a finite direct sum is the sum of its diagonal-block traces. Testing a single opposite block shows that the negligible condition is entrywise in any indecomposable decomposition. Hence C/N has morphisms exactly block matrices over C between the finite multiplicity spaces of its retained indecomposables, with zero morphisms between distinct isomorphism classes.

It follows that C/N is semisimple and idempotent complete: every matrix idempotent splits by ordinary finite-dimensional linear algebra within sums of the retained objects. Its simple objects are precisely the nonzero-pivotal-dimension indecomposable classes. The unit is retained and simple because its underlying vector space is one-dimensional and d_1=1. The inherited duals make the quotient rigid; braiding and pivot descend by the ideal proof. If the original trace is spherical, so is the quotient. If exactly finitely many indecomposable classes have nonzero d_X, the quotient is a fusion category. This last finiteness and the identification of those classes with the quantum alcove are separate scientific requirements, not consequences of this algebraic lemma.

## Actual source reading

The integrating owner read EGNO fulltext §8.18.2 Example8.18.5 and Exercise8.18.9(i)–(iii), printed235–236, in the actual retrieved book text. The exercise states the mechanism and hints at nilpotence but does not supply these proofs. The proof above supplies the explicit pivot-weighted nilpotent trace, partial trace, entrywise radical and matrix-splitting arguments. Source: https://math.mit.edu/~etingof/egnobookfinal.pdf . The source's full arbitrary spherical-category exercise is broader than this finite-dimensional Hopf-module proof proposal; no abstract non-module extension is claimed here.
