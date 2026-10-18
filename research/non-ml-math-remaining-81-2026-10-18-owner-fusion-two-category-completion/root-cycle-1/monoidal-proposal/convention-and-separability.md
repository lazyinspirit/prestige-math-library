# Verified convention correction and separability argument

Read CLAUDE, README, SCHEMA and the complete PA48 portion of construction.md. Source actually read: complete Construction 2.1.19 and adjacent Examples 2.1.20–21 in local Douglas–Reutter full text; complete introduction and §1 preliminaries (printed pp1–4) of downloaded arXiv:2203.10331v4. The latter explicitly gives the positive `c_{B,A}` tensor-algebra formula and left algebra modules as right module categories, but sends the balanced universal property and finite semisimplicity to other sources. Neither text is evidence of a local proof of those omitted parts.

## Necessary definition corrections

1. In def-opposite-algebra-in-braided-fusion-category retain multiplication `m c_{A,A}^{-1}` and change J's tensorator to `c_{Y,X}^{-1}: X⊗Y→Y⊗X`. Its associativity coherence is the inverse hexagon. Transport a separability section by the inverse tensorator: `sigma_op=c_{A,A} sigma_A`. The multiplication/section composite is `m c^{-1} c sigma=id`; bimodule linearity is transport of both module diagrams through J.

2. In def-modc-relative-deligne-product retain the positive tensor product algebra, but change the left-conversion associator from `n⊙c_{X,Y}` to `n⊙c_{Y,X}^{-1}`. Thus `(XY)▷n=nXY→nYX=X▷(Y▷n)` is the inverse crossing. The balancing for `b(M,N)=M⊗N` is `β_{M,X,N}=1_M⊗c_{N,X}^{-1}: MXN→MNX`, and the outer module constraint `b(M,NX)→b(M,N)X` is associativity. Its balance-associativity identity, suppressing associations, is

`β_{M,X,Y▷N} β_{MX,Y,N} = b(1_M,a^l_{X,Y,N}) β_{M,XY,N}`.

Both sides on `MXYN` are the inverse braid taking `XYN` to `NYX`: first move Y behind N and then move X behind NY, or move XY behind N and then interchange X,Y by `c_{Y,X}^{-1}`. Expanding the inverse hexagon leaves the same three inverse crossings; the braid relation is naturality of `c` with `c`. With the original positive left associator the right side has positive `c_{X,Y}` instead of inverse `c_{Y,X}` and is generally different by monodromy. The analogous compatibility with the outer action follows from the same inverse hexagon. These are substantive convention corrections, not a proof of the original inconsistent pairing.

## Complete transport proof of braided tensor separability

Let D=C⊠C, whose objects needed here are pairs, with componentwise tensor. Define `T(U,V)=U⊗V` and strong tensorator

`t_{(U,V),(U',V')}=1_U⊗c_{V,U'}⊗1_{V'} : UVU'V'→UU'VV'`.

The tensorator pentagon compares three such pairs. Expanding crossings past products by the two hexagons leaves crossings V1 past U2,U3 and V2 past U3; the two crossings on disjoint slots commute. Thus the two composites coincide. Unit coherence follows from the braiding unit equation. This proves T strong monoidal without a strictification theorem: insert the given associations and its pentagon throughout.

For R=(A,B), put `mu=(m_A,m_B)`, `s=(sigma_A,sigma_B)`. In D, `mu s=id` and `s mu=(mu⊗id)(id⊗s)=(id⊗mu)(s⊗id)`, componentwise. Put `K=T(R)`, `m=T(mu)t`, `sigma=t^{-1}T(s)`. Naturality of t and its just-proved coherence transport the THREE equations to

`m sigma=id_K`,

`sigma m=(m⊗id_K)(id_K⊗sigma)`,

`sigma m=(id_K⊗m)(sigma⊗id_K)`.

For clarity the first left-linearity transport starts with `t^{-1} T(s mu)t`; replace `s mu` by `(mu⊗id)(id⊗s)`, use naturality to move T(s) to the last two inputs, and use the tensorator pentagon to replace the two intervening tensorators by `(t⊗id)(id⊗t^{-1})`. This is exactly `(T(mu)t⊗id)(id⊗t^{-1}T(s))`. The right-linearity calculation replaces `s mu` by `(id⊗mu)(s⊗id)` and gives `(id⊗T(mu)t)(t^{-1}T(s)⊗id)` in the same way. These are both linearity composites, not merely a multiplication/section cancellation. Expanding t gives exactly the candidate `sigma=(1_A⊗c_{B,A}^{-1}⊗1_B)(sigma_A⊗sigma_B)`.
