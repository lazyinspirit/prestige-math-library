# Unseparated regular-module sliding interface

Use `lem-modc-internal-end-reconstruction-and-eilenberg-watts` (algebra constructor's independent, nonseparable reconstruction lemma). Apply its left-action version to D=C⊠C^rev acting on C, and generator 1. This generator meets the hypothesis because every V=(V⊠1)⋅1. Thus H(V)=internalHom_D(1,V) is an equivalence C→right-K-mod. In particular it is fully faithful. This application assumes no separability of K and no categorical Maschke lemma.

Two free right K-modules represent H(V):

L_V=(V⊠1)⊗K,     R_V=(1⊠V)⊗K.

To see the representations explicitly, their evaluations are

L_V⋅1=⊕_i V⊗i⊗i* → V,     id_V⊗ev_i,

R_V⋅1=⊕_i i⊗i*⊗V → V,     ev_i⊗id_V.

For X⊠Y, the first adjunction is

Hom_D(X⊠Y,L_V)=⊕_i Hom_C(X,V⊗i)⊗Hom_C(Y,i*) ≅ Hom_C(X⊗Y,V).

Indeed move Y using its specified right adjoint and insert the simple decomposition of the resulting object. The second is

Hom_D(X⊠Y,R_V)=⊕_i Hom_C(X,i)⊗Hom_C(Y,i*⊗V) ≅ Hom_C(X⊗Y,V).

The inverse of each is obtained by the duality coevaluation and the decomposition identity ∑qp=id; hence these are true adjunction isomorphisms natural in X,Y,V. Compatibility with the free right K-action follows by evaluating: acting by K on the right composes a further evaluation, and this is precisely the internal-Hom right action. Therefore the unique map rho_V:L_V→R_V identifying the two represented functors is an isomorphism of right K-modules, natural in V.

Its sliding equation is the equality between rho_(V⊗W) and the composite

(V⊠1)(W⊠1)K → (V⊠1)(1⊠W)K = (1⊠W)(V⊠1)K → (1⊠W)(1⊠V)K = (1⊠(V⊗W))K,

where the arrows are id⊗rho_W and id⊗rho_V and the middle equality interchanges factors belonging to the separate Deligne factors (not objects within C). To verify equality, take the preceding adjunction to Hom_C(X⊗Y,V⊗W) for an arbitrary X⊠Y. The composite inserts the simple decomposition once to perform the W adjunction and once for the V adjunction. The decomposition identities ∑qp=id erase both insertions; its image is the original morphism X⊗Y→V⊗W. The direct rho_(V⊗W) has that same image by definition. Naturality of the adjunction and Yoneda prove the equation. The unit equation rho_1=id follows from the same adjunction. This is the precise tensor-sliding coherence used in EGNO (7.57), without treating rho as a tensor transformation for the ordinary tensor product on free K-modules.

In particular any right K-linear transformation (V⊠1)K→(W⊠1)K is uniquely f⊗id_K for f:V→W. This is exactly the full-faithfulness interface needed to descend the twice-dual rho construction to Radford's natural transformation.
