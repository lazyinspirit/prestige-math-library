---
id: thm-modc-relative-deligne-product-is-algebra-tensor-product
kind: theorem
title: The relative Deligne product is represented by the braided tensor algebra
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 6
deps:
  - def-modc-relative-deligne-product
  - thm-modc-module-categories-are-separable-algebra-modules
  - thm-braided-category-tensor-product-algebra-structure
  - lem-braided-tensor-product-of-separable-algebras-is-separable
  - def-separable-algebra-and-bimodule-in-fusion-category
  - def-braided-monoidal-category
  - lem-separable-algebra-module-and-bimodule-categories-are-finite-semisimple
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Douglas and Reutter, Fusion 2-Categories and a State-Sum Invariant for 4-Manifolds, Construction 2.1.19
      url: https://arxiv.org/pdf/1812.11933
    - title: Décoppet, The Relative Deligne Tensor Product over Pointed Braided Fusion Categories, §1
      url: https://arxiv.org/pdf/2203.10331
---

## Statement

Let $\mathcal C$ be a braided fusion category and let $\mathcal M\simeq\operatorname{Mod}^{l}_{\mathcal C}(A)$ and $\mathcal N\simeq\operatorname{Mod}^{l}_{\mathcal C}(B)$ be finite semisimple right module categories represented by separable algebras; the left-module notation is fixed in [[def-separable-algebra-and-bimodule-in-fusion-category]]. Their relative Deligne product as fixed in [[def-modc-relative-deligne-product]] exists, is finite semisimple, and is equivalent as a right $\mathcal C$-module category to $\operatorname{Mod}^{l}_{\mathcal C}(A\otimes B)$, where the algebra product uses the braiding $c_{B,A}$. This equivalence is independent, up to canonical equivalence, of the chosen algebra presentations and supplies the object tensor product in the separable-algebra model of $\operatorname{Mod}(\mathcal C)$. The relative products assemble into a weak monoidal $2$-category: associators and unitors are the unique equivalences preserving the relevant universal balanced functors, the pentagon and triangle modifications obey their coherence equations, and the product is compatible with module functors and module-natural transformations.


## Facts & Assumptions

**Given:** A braided fusion category and two right module categories represented by separable algebras $A,B$ as in the statement.

[F1] [[def-modc-relative-deligne-product]] fixes the balanced universal property and the inverse-braiding left conversion.

[F2] [[lem-braided-tensor-product-of-separable-algebras-is-separable]] and [[lem-separable-algebra-module-and-bimodule-categories-are-finite-semisimple]] give separability of $K=A\otimes B$, its finite semisimple module category, and split separability idempotents. [[def-separable-algebra-and-bimodule-in-fusion-category]] fixes module and bimodule conventions.

## Proof

1.1 The left-module presentation reverses the algebra-bimodule $1$-morphism orientation: a module functor $\operatorname{Mod}^l(A)\to\operatorname{Mod}^l(B)$ is represented by a $B$-$A$ bimodule, while the algebra convention $A\to B$ uses $A$-$B$ bimodules. Thus the algebra presentation of this module $2$-category uses the $1$-morphism opposite of that algebra bicategory. Tensor multiplication on objects is unchanged. Under this passage the evaluation and coevaluation arrows exchange, and left and right dual roles exchange; both dual orientations have been constructed separately. Preserve the positive braided tensor algebra K=A⊗B. Let P=Mod^l_C(K). Define b(M,N)=M⊗N, with K-action `(l_M⊗l_N)(1_A⊗c_{B,M}⊗1_N)`. [F1, F2, given, algebra]

1.2 Naturality and the hexagons prove its action equation exactly as for the positive tensor-algebra multiplication. Define balance by `1_M⊗c_{N,X}^{-1}: MXN→MNX`; this is K-linear: expand c_{B,MX}, cancel the c_{B,X} against c_{N,X}^{-1} by naturality with l_N, and the remaining composite is the target K-action. The balance/unit equation is the braiding unit equation. For balance associativity on $MXYN$, both composites are the inverse braid taking $XYN$ to $NYX$: move $Y$ behind $N$ and then $X$ behind $NY$, or move $XY$ behind $N$ and then interchange $X,Y$ by $c_{Y,X}^{-1}$. The inverse hexagon expands both to the same three inverse crossings. Compatibility with the outer right action is the other inverse hexagon. Hence b is a balanced right-module functor. It is exact and bilinear because all tensor functors in a fusion category are exact. [F1, F2, given, algebra]

1.3 Here is a proof of universality which also specifies its action on transformations. A right K-object d in a finite semisimple right C-module category D is an object equipped with r:d⊙K→d satisfying the algebra action equations. It determines a module functor H_d:P→D by `H_d(L)=d⊙_K L`. [F1, F2, given, algebra]

1.4 Construct $H_d(L)$ as the image of the separability idempotent `(r⊙l_L)(1_d⊙e_K⊙1_L)` on d⊙L. Its image exists because D is finite semisimple. The usual centrality and unit equations for e_K show this image corepresents K-balanced maps, just as for the ordinary bimodule supplier: the idempotent is fixed by every balanced map; conversely its projection is balanced. No new coequalizer existence theorem is being assumed. This construction is functorial in L and K-linear maps d→d'. [F1, F2, given, algebra]

1.5 Conversely any module functor H:P→D is canonically H_d with d=H(K). Its right action is H(m_K):H(K⊗K)≅H(K)⊙K→H(K). On free modules K⊗X, its module constraint gives H(K⊗X)≅d⊙X. Every K-module L is a retract of K⊗L: the action is the retraction and the section is `(1_K⊗l_L)(e_K⊗1_L)`. This section is K-linear by centrality, and its action composite is 1_L. Hence the free-module comparison extends uniquely to all retracts. To check naturality it suffices to check free maps. Such a map K⊗X→K⊗Y is uniquely `(m_K⊗1_Y)(1_K⊗f)` for f:X→K⊗Y obtained by inserting η_K; H and H_d agree on this expression by the definition of r. Transformations agree precisely when their value at K is K-linear. This proves an equivalence of categories, including transformations, between module functors P→D and right K-objects in D. For a balanced module functor F:Mod^l(A)×Mod^l(B)→D, put d=F(A,B). Denote its outer constraint by `δ:F(M,NX)→F(M,N)⊙X` and its balance by β. Put `θ=δβ:F(MX,N)→F(M,N)⊙X`. Define `r_A=F(m_A,1_B) θ_{A,A,B}^{-1}:d⊙A→d`, `r_B=F(1_A,m_B) δ_{A,B,B}^{-1}:d⊙B→d`. [F1, F2, given, algebra]

1.6 Naturality with the algebra multiplications proves their associative/unital action equations. Expanding the balance/outer compatibility square gives the precise exchange equation `r_A(r_B⊙1_A)=r_B(r_A⊙1_B)(1_d⊙c_{B,A}):d⊙B⊙A→d`. [F1, F2, given, algebra]

1.7 For an explicit verification, replace θ by δβ, move each multiplication through δ by its naturality, and through β by naturality in its module arguments. The residual two routes move the free B slot past the free A slot. The balance-associativity equation for the chosen inverse left conversion replaces that move by c_{B,A}; its inverse crossing is cancelled by the inverse in θ^-1. The remaining maps are F(m_A,m_B) on both routes. Thus `r=r_B(r_A⊙1_B)` is a right K-action: its iterated action on dABAB first moves the middle B past A by c_{B,A}, then uses the two individual action equations, exactly giving r(1_d⊙m_K). This proves the action equation without assuming ordinary commuting actions. [F1, F2, given, algebra]

1.8 The functor H_d b is canonically equivalent to F. On free pairs first use δ to identify $F(AX,BY)$ with $F(AX,B)\odot Y$, and then θ on the first factor, to obtain `F(A⊗X,B⊗Y)≅d⊙X⊙Y`. Meanwhile the positive crossing `1_A⊗c_{B,X}⊗1_Y` is a K-linear isomorphism `K⊗X⊗Y→b(A⊗X,B⊗Y)`. [F1, F2, given, algebra]

1.9 This free-pair isomorphism identifies H_d b on this pair with d⊙X⊙Y. The two identifications commute with arbitrary free A-module and B-module morphisms: express such morphisms by their adjoint maps X→A⊗X' and Y→B⊗Y', then use r_A,r_B respectively. For a simultaneous morphism the exchange equation is exactly the required compatibility of the two orders. Every M,N is a retract of its free module by the displayed separability section, so this natural equivalence extends to all pairs by taking images of the two commuting retract idempotents. The construction respects the balance and outer action because it does so on free pairs, where these equations are the already verified β,δ equations. Thus composition with b is essentially surjective on balanced functors. [F1, F2, given, algebra]

1.10 A transformation between two balanced functors is determined on free pairs by its component at (A,B), using θ,δ, and then on all pairs by retracts. Naturality with m_A and m_B says exactly that this component preserves r_A,r_B, equivalently the K-action r. Conversely any K-linear component gives such a transformation via H_d. Consequently composition with b is fully faithful and is the required equivalence of categories. This proves the exact stated universal property, not merely existence of a bilinear functor. [F1, F2, given, algebra]

1.11 Finite semisimplicity of P follows from separability of K: module Hom spaces are images of the averaging idempotent on Hom_C(M,N), so are finite dimensional; every module is a retract of a free module, and the finitely many free modules K⊗S_i for simple S_i of C form a finite additive generator. Its endomorphism algebra is semisimple because any module subobject splits by averaging an underlying splitting. Therefore the module category is finite semisimple. It is a right C-module category by the inherited tensor action. The preceding argument applies to arbitrary D, so uniqueness of representing objects makes the answer independent of the chosen algebra presentations, with a canonical equivalence preserving b. [F1, F2, given, algebra]

1.12 For module functors G:M→M',H:N→N', apply the universal property to b'(G×H); its balanced structure is inherited from the module constraints of G,H. This defines G⊠H. For module-natural transformations use full faithfulness to define their product. Identity and composite comparison maps are the unique maps whose pullbacks to b equal the identity or the corresponding composite constraint. Their associativity, unit and interchange equations hold by full faithfulness, since after pullback they are the same equation for ordinary functor composition. [F1, F2, given, algebra]

2.1 Both parenthesizations of three module categories represent the category of three-variable exact functors balanced in the two adjacent slots, with outer right-module compatibility. This follows by applying the just-proved equivalence twice; the same free/retract argument shows that no balanced transformations are lost. Their comparison is therefore the unique equivalence preserving the universal three-variable functor, with its specified natural isomorphism. For the regular module category C, the action functor M×C→M (and the converted left action C×M→M) has the universal property by inserting the unit object and applying balance. These give the unitors. On four variables the two pentagon composites have the same pullback comparison to the universal four-variable functor. Full faithfulness gives the unique pentagonator modification; on five variables the two composites of these modifications have identical pullback, hence are equal. The unitor triangle modification and all its compatibility equations follow in exactly the same way from the three-variable functor with a unit slot. This is the weak monoidal 2-category coherence assertion: one should say 'canonical modifications' rather than incorrectly demanding literal equality of unchosen equivalences. Naturality with G,H and their transformations follows by pulling back to the same multivariable functor. Thus the product supplies all morphism levels and weak coherence required in the carrier statement. [F1, F2, given, algebra] ∎
