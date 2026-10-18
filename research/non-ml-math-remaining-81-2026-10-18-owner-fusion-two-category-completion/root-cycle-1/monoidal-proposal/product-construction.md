# Relative Deligne product: constructive proof proposal

This proof requires the inverse left-conversion associator corrected in convention-and-separability.md. Preserve the positive braided tensor algebra K=A⊗B. Let P=Mod^l_C(K). Define b(M,N)=M⊗N, with K-action

`(l_M⊗l_N)(1_A⊗c_{B,M}⊗1_N)`.

Naturality and the hexagons prove its action equation exactly as for the positive tensor-algebra multiplication. Define balance by `1_M⊗c_{N,X}^{-1}: MXN→MNX`; this is K-linear: expand c_{B,MX}, cancel the c_{B,X} against c_{N,X}^{-1} by naturality with l_N, and the remaining composite is the target K-action. The balance/unit, balance/associativity and outer right-module equations are the inverse hexagon identities spelled out in convention-and-separability.md. Hence b is a balanced right-module functor. It is exact and bilinear because all tensor functors in a fusion category are exact.

Here is a proof of universality which also specifies its action on transformations. A right K-object d in a finite semisimple right C-module category D is an object equipped with r:d⊙K→d satisfying the algebra action equations. It determines a module functor H_d:P→D by

`H_d(L)=d⊙_K L`,

constructed as the image of the separability idempotent `(r⊙l_L)(1_d⊙e_K⊙1_L)` on d⊙L. Its image exists because D is finite semisimple. The usual centrality and unit equations for e_K show this image corepresents K-balanced maps, just as for the ordinary bimodule supplier: the idempotent is fixed by every balanced map; conversely its projection is balanced. No new coequalizer existence theorem is being assumed. This construction is functorial in L and K-linear maps d→d'.

Conversely any module functor H:P→D is canonically H_d with d=H(K). Its right action is H(m_K):H(K⊗K)≅H(K)⊙K→H(K). On free modules K⊗X, its module constraint gives H(K⊗X)≅d⊙X. Every K-module L is a retract of K⊗L: the action is the retraction and the section is `(1_K⊗l_L)(e_K⊗1_L)`. This section is K-linear by centrality, and its action composite is 1_L. Hence the free-module comparison extends uniquely to all retracts. To check naturality it suffices to check free maps. Such a map K⊗X→K⊗Y is uniquely `(m_K⊗1_Y)(1_K⊗f)` for f:X→K⊗Y obtained by inserting η_K; H and H_d agree on this expression by the definition of r. Transformations agree precisely when their value at K is K-linear. This proves an equivalence of categories, including transformations, between module functors P→D and right K-objects in D.

For a balanced module functor F:Mod^l(A)×Mod^l(B)→D, put d=F(A,B). Denote its outer constraint by `δ:F(M,NX)→F(M,N)⊙X` and its balance by β. Put `θ=δβ:F(MX,N)→F(M,N)⊙X`. Define

`r_A=F(m_A,1_B) θ_{A,A,B}^{-1}:d⊙A→d`,

`r_B=F(1_A,m_B) δ_{A,B,B}^{-1}:d⊙B→d`.

Naturality with the algebra multiplications proves their associative/unital action equations. Expanding the balance/outer compatibility square gives the precise exchange equation

`r_A(r_B⊙1_A)=r_B(r_A⊙1_B)(1_d⊙c_{B,A}):d⊙B⊙A→d`.

For an explicit verification, replace θ by δβ, move each multiplication through δ by its naturality, and through β by naturality in its module arguments. The residual two routes move the free B slot past the free A slot. The balance-associativity equation for the chosen inverse left conversion replaces that move by c_{B,A}; its inverse crossing is cancelled by the inverse in θ^-1. The remaining maps are F(m_A,m_B) on both routes. Thus `r=r_B(r_A⊙1_B)` is a right K-action: its iterated action on dABAB first moves the middle B past A by c_{B,A}, then uses the two individual action equations, exactly giving r(1_d⊙m_K). This proves the action equation without assuming ordinary commuting actions.

The functor H_d b is canonically equivalent to F. On free pairs use θ and δ to obtain

`F(A⊗X,B⊗Y)≅d⊙X⊙Y`.

Meanwhile the positive crossing `1_A⊗c_{B,X}⊗1_Y` is a K-linear isomorphism

`K⊗X⊗Y→b(A⊗X,B⊗Y)`;

it identifies H_d b on this pair with d⊙X⊙Y. The two identifications commute with arbitrary free A-module and B-module morphisms: express such morphisms by their adjoint maps X→A⊗X' and Y→B⊗Y', then use r_A,r_B respectively. For a simultaneous morphism the exchange equation is exactly the required compatibility of the two orders. Every M,N is a retract of its free module by the displayed separability section, so this natural equivalence extends to all pairs by taking images of the two commuting retract idempotents. The construction respects the balance and outer action because it does so on free pairs, where these equations are the already verified β,δ equations. Thus composition with b is essentially surjective on balanced functors.

A transformation between two balanced functors is determined on free pairs by its component at (A,B), using θ,δ, and then on all pairs by retracts. Naturality with m_A and m_B says exactly that this component preserves r_A,r_B, equivalently the K-action r. Conversely any K-linear component gives such a transformation via H_d. Consequently composition with b is fully faithful and is the required equivalence of categories. This proves the exact stated universal property, not merely existence of a bilinear functor.

Finite semisimplicity of P follows from separability of K: module Hom spaces are images of the averaging idempotent on Hom_C(M,N), so are finite dimensional; every module is a retract of a free module, and the finitely many free modules K⊗S_i for simple S_i of C form a finite additive generator. Its endomorphism algebra is semisimple because any module subobject splits by averaging an underlying splitting. Therefore the module category is finite semisimple. It is a right C-module category by the inherited tensor action. The preceding argument applies to arbitrary D, so uniqueness of representing objects makes the answer independent of the chosen algebra presentations, with a canonical equivalence preserving b.

For module functors G:M→M',H:N→N', apply the universal property to b'(G×H); its balanced structure is inherited from the module constraints of G,H. This defines G⊠H. For module-natural transformations use full faithfulness to define their product. Identity and composite comparison maps are the unique maps whose pullbacks to b equal the identity or the corresponding composite constraint. Their associativity, unit and interchange equations hold by full faithfulness, since after pullback they are the same equation for ordinary functor composition.

Both parenthesizations of three module categories represent the category of three-variable exact functors balanced in the two adjacent slots, with outer right-module compatibility. This follows by applying the just-proved equivalence twice; the same free/retract argument shows that no balanced transformations are lost. Their comparison is therefore the unique equivalence preserving the universal three-variable functor, with its specified natural isomorphism. For the regular module category C, the action functor M×C→M (and the converted left action C×M→M) has the universal property by inserting the unit object and applying balance. These give the unitors. On four variables the two pentagon composites have the same pullback comparison to the universal four-variable functor. Full faithfulness gives the unique pentagonator modification; on five variables the two composites of these modifications have identical pullback, hence are equal. The unitor triangle modification and all its compatibility equations follow in exactly the same way from the three-variable functor with a unit slot. This is the weak monoidal 2-category coherence assertion: one should say 'canonical modifications' rather than incorrectly demanding literal equality of unchosen equivalences. Naturality with G,H and their transformations follows by pulling back to the same multivariable functor. Thus the product supplies all morphism levels and weak coherence required in the carrier statement.
