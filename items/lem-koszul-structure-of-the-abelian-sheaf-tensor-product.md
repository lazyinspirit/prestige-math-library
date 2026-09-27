---
id: "lem-koszul-structure-of-the-abelian-sheaf-tensor-product"
kind: "lemma"
title: "Associator, symmetry and unitors of the abelian sheaf tensor product"
status: draft
origin: pipeline
deps: [def-topological-space, def-tensor-product-of-abelian-sheaves, lem-stalks-and-colimits-of-the-abelian-sheaf-tensor-product, def-sheafification, def-presheaf-on-topological-space, def-presheaf-of-groups-rings-modules, thm-associativity-of-balanced-tensor-products, thm-hom-tensor-adjunction-for-modules, cor-left-adjoints-preserve-colimits, def-stalk-of-presheaf, thm-sheafification-preserves-stalks, thm-sheaf-morphism-isomorphism-stalkwise, lem-morphisms-of-sheaves-determined-by-stalks, thm-sheafification-universal-property, def-products-and-coproducts, lem-abelian-sheaves-form-a-grothendieck-category, prop-products-and-coproducts-of-complexes-are-degreewise-when-they-exist-and-preserve-differentials, def-cochain-complex-in-an-abelian-category, def-cochain-map, def-bounded-bounded-below-and-bounded-above-complex, def-zero-and-stalk-complex, def-direct-sum-of-a-family-of-modules, lem-constant-sheaf-is-the-sheaf-of-locally-constant-functions]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "The Stacks Project, Algebra"
      url: https://stacks.math.columbia.edu/download/algebra.pdf
      locator: "Section 12 (tensor products of modules) and Section 13 (tensor products and colimits)"
    - title: "The Stacks Project, Sheaves on Spaces"
      url: https://stacks.math.columbia.edu/download/sheaves.pdf
      locator: "Section 17: sheafification, stalks and the universal property"
---

## Statement

Let $X$ be a topological space and let $\otimes_{\mathbb Z}$ be the
tensor product of abelian sheaves with presheaf tensor
$\otimes_{p,\mathbb Z}$ and total complex
$\operatorname{Tot}$ of [[def-tensor-product-of-abelian-sheaves]]; let
$\mathbb Z_X$ be the constant sheaf with value $\mathbb Z$
([[lem-constant-sheaf-is-the-sheaf-of-locally-constant-functions]]).

1. **(Sheafification comparison.)** For presheaves of abelian groups
   $\mathcal P,\mathcal Q$ on $X$ the canonical morphism of sheaves induced by
   the sheafification maps,
   $$\varphi_{\mathcal P,\mathcal Q}:a(\mathcal P\otimes_{p,\mathbb Z}\mathcal Q)\longrightarrow a\mathcal P\otimes_{\mathbb Z}a\mathcal Q,$$
   is an isomorphism of sheaves of abelian groups, natural in $\mathcal P$ and
   $\mathcal Q$.

2. **(Sheaf-level structure.)** For abelian sheaves
   $\mathcal F,\mathcal G,\mathcal H$ there is a canonical isomorphism, natural
   in each variable,
   $$\alpha_{\mathcal F,\mathcal G,\mathcal H}:(\mathcal F\otimes_{\mathbb Z}\mathcal G)\otimes_{\mathbb Z}\mathcal H\longrightarrow\mathcal F\otimes_{\mathbb Z}(\mathcal G\otimes_{\mathbb Z}\mathcal H),$$
   determined by $(f\otimes g)\otimes h\mapsto f\otimes(g\otimes h)$ on pure
   sections, and together with the symmetry
   $\sigma_{\mathcal F,\mathcal G}:\mathcal F\otimes_{\mathbb Z}\mathcal G\to\mathcal G\otimes_{\mathbb Z}\mathcal F$
   and the unitors
   $\lambda_{\mathcal F}:\mathbb Z_X\otimes_{\mathbb Z}\mathcal F\to\mathcal F$,
   $\rho_{\mathcal F}:\mathcal F\otimes_{\mathbb Z}\mathbb Z_X\to\mathcal F$
   where $\sigma$ and $\lambda$ are supplied by
   [[lem-stalks-and-colimits-of-the-abelian-sheaf-tensor-product]] and
   $\rho_{\mathcal F}:=\lambda_{\mathcal F}\circ\sigma_{\mathcal F,\mathbb Z_X}$
   ($\lambda(f\otimes s)=f\cdot s=\rho(s\otimes f)$) it satisfies, as
   identities between morphisms of sheaves, the **pentagon** for
   $\alpha$ on a fourfold product, the **triangle**
   $(\operatorname{id}\otimes\lambda)\circ\alpha=\rho\otimes\operatorname{id}$
   and the **hexagon** identities expressing
   $\sigma_{\mathcal F,\mathcal G\otimes\mathcal H}$ and
   $\sigma_{\mathcal F\otimes\mathcal G,\mathcal H}$ through $\alpha$ and the
   symmetries of the factors; $\sigma$ is involutive,
   $\sigma_{\mathcal G,\mathcal F}\circ\sigma_{\mathcal F,\mathcal G}=\operatorname{id}$.

3. **(Koszul structure on total complexes.)** For bounded-above cochain
   complexes $\mathcal F^\bullet,\mathcal G^\bullet,\mathcal H^\bullet$ of
   abelian sheaves ([[def-bounded-bounded-below-and-bounded-above-complex]])
   there are isomorphisms of cochain complexes ([[def-cochain-map]]), natural in
   the arguments,
   $$A:\operatorname{Tot}(\operatorname{Tot}(\mathcal F^\bullet\otimes_{\mathbb Z}\mathcal G^\bullet)\otimes_{\mathbb Z}\mathcal H^\bullet)\longrightarrow\operatorname{Tot}(\mathcal F^\bullet\otimes_{\mathbb Z}\operatorname{Tot}(\mathcal G^\bullet\otimes_{\mathbb Z}\mathcal H^\bullet)),$$
   equal on the summand
   $\mathcal F^i\otimes_{\mathbb Z}\mathcal G^j\otimes_{\mathbb Z}\mathcal H^k$
   to the sheaf-level associator of clause 2,
   $$S:\operatorname{Tot}(\mathcal F^\bullet\otimes_{\mathbb Z}\mathcal G^\bullet)\longrightarrow\operatorname{Tot}(\mathcal G^\bullet\otimes_{\mathbb Z}\mathcal F^\bullet),\qquad x\otimes y\mapsto(-1)^{ij}y\otimes x$$
   for $x\in\mathcal F^i$, $y\in\mathcal G^j$, and
   $$\Lambda:\operatorname{Tot}(\mathbb Z_X[0]\otimes_{\mathbb Z}\mathcal F^\bullet)\longrightarrow\mathcal F^\bullet,\qquad \mathrm P:\operatorname{Tot}(\mathcal F^\bullet\otimes_{\mathbb Z}\mathbb Z_X[0])\longrightarrow\mathcal F^\bullet,$$
   the unitors, where $\mathbb Z_X[0]$ is the stalk complex concentrated in
   degree $0$ in the cochain reading ([[def-zero-and-stalk-complex]]). These
   isomorphisms satisfy the same pentagon, triangle and hexagon identities, $S$
   is involutive, and for $p,q\ge0$ the symmetry $S$ on
   $\operatorname{Tot}(\mathbb Z_X[-p]\otimes_{\mathbb Z}\mathbb Z_X[-q])$,
   whose only nonzero term is
   $\mathbb Z_X\otimes_{\mathbb Z}\mathbb Z_X$ in degree $p+q$, is $(-1)^{pq}$
   times the exchange of the factors, so that under the unit identification
   with $\mathbb Z_X[-p-q]$ it is multiplication by $(-1)^{pq}$.

## Facts & Assumptions

[F1] The tensor product of abelian sheaves is the sheafification of the presheaf tensor: $\mathcal F\otimes_{\mathbb Z}\mathcal G:=a(\mathcal F\otimes_{p,\mathbb Z}\mathcal G)$ ([[def-tensor-product-of-abelian-sheaves]]).

[F2] The tensor-product total complex has degree-$n$ term $\bigoplus_{i+j=n}\mathcal F^i\otimes_{\mathbb Z}\mathcal G^j$ and differential equal on the summand $\mathcal F^i\otimes_{\mathbb Z}\mathcal G^j$ to $d_{\mathcal F}^i\otimes\operatorname{id}_{\mathcal G^j}+(-1)^i\operatorname{id}_{\mathcal F^i}\otimes d_{\mathcal G}^j$ ([[def-tensor-product-of-abelian-sheaves]]).

[F3] For every $x\in X$ there is a canonical isomorphism $(\mathcal F\otimes_{\mathbb Z}\mathcal G)_x\cong\mathcal F_x\otimes_{\mathbb Z}\mathcal G_x$, natural in $\mathcal F$ and $\mathcal G$ ([[lem-stalks-and-colimits-of-the-abelian-sheaf-tensor-product]]).

[F4] The symmetry $\sigma$, the unitor $\lambda$ with $\lambda(f\otimes s)=f\cdot s$ and the identification $\mathbb Z_X\otimes_{\mathbb Z}\mathbb Z_X\cong\mathbb Z_X$ are canonical natural isomorphisms, and for sheaves concentrated in degree zero they are the degree-zero identifications of the tensor-product total complex ([[lem-stalks-and-colimits-of-the-abelian-sheaf-tensor-product]]).

[F5] For abelian groups there is a canonical isomorphism $(M\otimes_{\mathbb Z}N)\otimes_{\mathbb Z}P\to M\otimes_{\mathbb Z}(N\otimes_{\mathbb Z}P)$ with $(m\otimes n)\otimes p\mapsto m\otimes(n\otimes p)$, natural in $M,N,P$ ([[thm-associativity-of-balanced-tensor-products]]).

[F6] For $\mathbb Z$-modules there is a natural isomorphism $\operatorname{Hom}_{\mathbb Z}(M\otimes_{\mathbb Z}N,P)\cong\operatorname{Hom}_{\mathbb Z}(M,\operatorname{Hom}_{\mathbb Z}(N,P))$, so $-\otimes_{\mathbb Z}N$ is a left adjoint and $\otimes_{\mathbb Z}$ preserves colimits in each variable ([[thm-hom-tensor-adjunction-for-modules]], [[cor-left-adjoints-preserve-colimits]]).

[F7] The stalk of a presheaf is the filtered colimit $\mathcal F_x=\varinjlim_{\mathcal N_x^{\operatorname{op}}}\mathcal F(U)$ over the open neighbourhoods of $x$ ([[def-stalk-of-presheaf]]).

[F8] Sheafification induces a bijection on stalks, $\eta_{\mathcal F,x}:\mathcal F_x\to(a\mathcal F)_x$ ([[thm-sheafification-preserves-stalks]]).

[F9] A morphism of sheaves is an isomorphism if and only if its maps on stalks are bijections ([[thm-sheaf-morphism-isomorphism-stalkwise]]), and two morphisms of sheaves with equal maps on every stalk are equal ([[lem-morphisms-of-sheaves-determined-by-stalks]]).

[F10] Every morphism of presheaves into a sheaf factors uniquely through the sheafification map, so a morphism out of a tensor product of sheaves is determined by its values on pure sections ([[thm-sheafification-universal-property]]).

[F11] A coproduct is a colimit: it comes with injections $\iota_i:A_i\to Q$ such that every family $f_i:A_i\to X$ has a unique copairing, so a morphism out of a direct sum is determined by its components ([[def-products-and-coproducts]]).

[F12] $\mathrm{Ab}(X)$ is locally small and cocomplete (AB3), so the coproducts of abelian sheaves appearing in the diagonals of the total complex exist ([[lem-abelian-sheaves-form-a-grothendieck-category]]).

[F13] A family of cochain complexes has a coproduct whose differential is characterized by the component differentials, and this coproduct is the coproduct in the category of complexes ([[prop-products-and-coproducts-of-complexes-are-degreewise-when-they-exist-and-preserve-differentials]]).

[F14] A cochain map $f:C^\bullet\to D^\bullet$ is a family $f^n:C^n\to D^n$ with $d_D^n\circ f^n=f^{n+1}\circ d_C^n$ for every $n$ ([[def-cochain-map]]).

[F15] The stalk complex has a single nonzero term in its degree and all differentials zero, so a sheaf concentrated in degree $0$ has zero differential, and $\mathbb Z_X[-p]$ has its only nonzero term in degree $p$ ([[def-zero-and-stalk-complex]]).

## Proof

**Given:** A topological space $X$, abelian sheaves $\mathcal F,\mathcal G,\mathcal H$ on $X$, presheaves of abelian groups $\mathcal P,\mathcal Q$, bounded-above cochain complexes $\mathcal F^\bullet,\mathcal G^\bullet,\mathcal H^\bullet$ of abelian sheaves, and the structure isomorphisms $\sigma,\lambda$ and $\rho:=\lambda\circ\sigma$ of the sheaf tensor product.

1.1 For presheaves $\mathcal P,\mathcal Q$ the morphism $\varphi_{\mathcal P,\mathcal Q}:a(\mathcal P\otimes_{p,\mathbb Z}\mathcal Q)\to a\mathcal P\otimes_{\mathbb Z}a\mathcal Q$ is defined by the universal property of sheafification [F10] from the presheaf map $\mathcal P\otimes_{p,\mathbb Z}\mathcal Q\to a\mathcal P\otimes_{\mathbb Z}a\mathcal Q$ given on $U$ by the sheafification maps $\eta_{\mathcal P,U},\eta_{\mathcal Q,U}$ composed with the presheaf-tensor map into the sheaf tensor [F1]. On stalks it is the canonical map $$(\mathcal P\otimes_{p,\mathbb Z}\mathcal Q)_x=\varinjlim_U\bigl(\mathcal P(U)\otimes_{\mathbb Z}\mathcal Q(U)\bigr)\longrightarrow\Bigl(\varinjlim_U\mathcal P(U)\Bigr)\otimes_{\mathbb Z}\Bigl(\varinjlim_U\mathcal Q(U)\Bigr)=(a\mathcal P)_x\otimes_{\mathbb Z}(a\mathcal Q)_x,$$ which is an isomorphism because $\otimes_{\mathbb Z}$ preserves colimits in each variable [F6] and the stalks are the filtered colimits of [F7], while the right-hand side is the stalk of $a\mathcal P\otimes_{\mathbb Z}a\mathcal Q$ by [F3] and [F8]; hence $\varphi_{\mathcal P,\mathcal Q}$ is an isomorphism [F9]. It is natural in $\mathcal P,\mathcal Q$ because each defining ingredient is. [F1, F3, F6, F7, F8, F9, F10]

1.2 For $x\otimes y\in\mathcal F^i\otimes_{\mathbb Z}\mathcal G^j$ the map $S$ sends $x\otimes y$ to $(-1)^{ij}y\otimes x$. It is a cochain map: by [F2] the differential of $\operatorname{Tot}(\mathcal F^\bullet\otimes_{\mathbb Z}\mathcal G^\bullet)$ sends $x\otimes y$ to $d_{\mathcal F}x\otimes y+(-1)^ix\otimes d_{\mathcal G}y$, and applying $S$ gives $(-1)^{(i+1)j}y\otimes d_{\mathcal F}x+(-1)^{i+i(j+1)}d_{\mathcal G}y\otimes x$, while the differential of $\operatorname{Tot}(\mathcal G^\bullet\otimes_{\mathbb Z}\mathcal F^\bullet)$ sends $S(x\otimes y)=(-1)^{ij}y\otimes x$ to $(-1)^{ij}\bigl(d_{\mathcal G}y\otimes x+(-1)^jy\otimes d_{\mathcal F}x\bigr)=(-1)^{ij}d_{\mathcal G}y\otimes x+(-1)^{ij+j}y\otimes d_{\mathcal F}x$, and the two expressions agree because $(-1)^{i+i(j+1)}=(-1)^{ij}$ and $(-1)^{ij+j}=(-1)^{(i+1)j}$. This is the Koszul sign rule; it is verified on pure tensors, and a morphism of total complexes is determined by its components on the summands [F13] and by its values on pure sections inside each summand [F10]. Composing $S$ with the symmetry in the opposite direction gives $(-1)^{ij}(-1)^{ji}=1$ on each summand, so $S$ is an isomorphism and is involutive, and it is natural in the two complex arguments because the exchange of pure tensors is. [F2, F10, F13, F14]

1.3 The total complex $\operatorname{Tot}(\mathbb Z_X[0]\otimes_{\mathbb Z}\mathcal F^\bullet)$ has degree-$n$ term $\mathbb Z_X\otimes_{\mathbb Z}\mathcal F^n$: the only nonzero term of $\mathbb Z_X[0]$ is in degree $0$ [F15], so the degree-$n$ diagonal has the single summand $\mathbb Z_X\otimes_{\mathbb Z}\mathcal F^n$. Its differential is $d_{\mathbb Z_X}\otimes\operatorname{id}+(-1)^0\operatorname{id}\otimes d^n_{\mathcal F}=\operatorname{id}\otimes d^n_{\mathcal F}$ because the differential of the stalk complex is zero [F15] and by the formula of [F2]. The levelwise unitor $\lambda$ of [F4] is therefore an isomorphism of cochain complexes $\Lambda$ [F14], and the same argument in the second variable, using the symmetry of [F4] or the unitor $\rho$, gives $\mathrm P$. Both are natural in $\mathcal F^\bullet$ because $\lambda$ and $\rho$ are natural [F4]. [F2, F4, F14, F15]

2.1 The componentwise module associator of [F5] is natural in $U$ because restriction maps are homomorphisms, so the isomorphisms $(\mathcal F(U)\otimes_{\mathbb Z}\mathcal G(U))\otimes_{\mathbb Z}\mathcal H(U)\to\mathcal F(U)\otimes_{\mathbb Z}(\mathcal G(U)\otimes_{\mathbb Z}\mathcal H(U))$ assemble into an isomorphism of presheaves $(\mathcal F\otimes_{p,\mathbb Z}\mathcal G)\otimes_{p,\mathbb Z}\mathcal H\to\mathcal F\otimes_{p,\mathbb Z}(\mathcal G\otimes_{p,\mathbb Z}\mathcal H)$, which remains an isomorphism after sheafification. Composing this with the isomorphisms of [step 1.1] for the pairs $(\mathcal F\otimes_{p,\mathbb Z}\mathcal G,\mathcal H)$ and $(\mathcal F,\mathcal G\otimes_{p,\mathbb Z}\mathcal H)$ gives the canonical isomorphism $\alpha_{\mathcal F,\mathcal G,\mathcal H}:(\mathcal F\otimes_{\mathbb Z}\mathcal G)\otimes_{\mathbb Z}\mathcal H\to\mathcal F\otimes_{\mathbb Z}(\mathcal G\otimes_{\mathbb Z}\mathcal H)$, natural in each variable, which on pure sections satisfies $(f\otimes g)\otimes h\mapsto f\otimes(g\otimes h)$; indeed this is the image under the sheafification maps of the module-level formula of [F5], and a morphism out of a tensor product is determined by its values on pure sections [F10]. [F5, F10, step 1.1]

3.1 The pentagon, triangle and hexagon identities of clause 2 hold. By [F9] it suffices to compare both sides on every stalk, where all morphisms are computed from module-level maps: the stalk maps of $\alpha$ are the associators of [F5], those of $\sigma$ and $\lambda,\rho$ are the commutativity and unit constraints of the tensor product of abelian groups [F4]. On pure tensors these are the standard identities: in the pentagon both sides are the same reassociation of a pure tensor, in the triangle both sides multiply the tensor by the scalar through $\lambda(f\otimes s)=f\cdot s$ [F4], and in the hexagon both routes send a pure tensor $f\otimes(g\otimes h)$ to $g\otimes(h\otimes f)$ with all signs $+1$. The symmetry is involutive because $\sigma_{\mathcal G,\mathcal F}\sigma_{\mathcal F,\mathcal G}$ sends $m\otimes n$ to $n\otimes m$ and back to $m\otimes n$ [F4, F9]. [F4, F5, F9, step 2.1]

3.2 On the summand $\mathcal F^i\otimes_{\mathbb Z}\mathcal G^j\otimes_{\mathbb Z}\mathcal H^k$ of the degree-$n$ term, the complex $\operatorname{Tot}(\operatorname{Tot}(\mathcal F^\bullet\otimes_{\mathbb Z}\mathcal G^\bullet)\otimes_{\mathbb Z}\mathcal H^\bullet)$ has differential $d_{\mathcal F}\otimes\operatorname{id}\otimes\operatorname{id}+(-1)^i\operatorname{id}\otimes d_{\mathcal G}\otimes\operatorname{id}+(-1)^{i+j}\operatorname{id}\otimes\operatorname{id}\otimes d_{\mathcal H}$: apply the total-complex differential of [F2] to the outer tensor variable, whose inner factor is the total complex $\operatorname{Tot}(\mathcal F^\bullet\otimes_{\mathbb Z}\mathcal G^\bullet)$ with differential $d_{\mathcal F}\otimes\operatorname{id}+(-1)^i\operatorname{id}\otimes d_{\mathcal G}$ on its summand. The complex $\operatorname{Tot}(\mathcal F^\bullet\otimes_{\mathbb Z}\operatorname{Tot}(\mathcal G^\bullet\otimes_{\mathbb Z}\mathcal H^\bullet))$ carries the same differential on the same summand, obtained in the opposite order, so the reassociation map $A$, which on each summand is the sheaf-level associator $\alpha$ of [step 2.1] and hence an isomorphism, commutes with the differentials and is an isomorphism of cochain complexes [F14]. Its components are assembled from the coproducts of [F13], which exist by [F12], and it is natural because the copairings are unique [F11] and $\alpha$ is natural. [F2, F11, F12, F13, F14, step 2.1]

4.1 Every coherence identity of clause 3 compares two morphisms of cochain complexes between the same total complexes. A morphism of complexes is determined by its components on the summands [F13], and by [F10] each component out of a sheaf tensor product is determined by its values on pure sections, so it suffices to evaluate both sides on pure tensors, where the identities reduce to the sheaf-level ones of [step 3.1] combined with the sign computation of [step 1.2]: the reassociation identities hold because both sides reassociate a pure tensor in the same way, the triangle identities multiply by the scalar of the unit as in [F4], and the hexagon identities acquire the Koszul signs of [step 1.2], which are multiplicative and cancel in the same way on both routes. For the shift statement, $\mathbb Z_X[-p]$ has its single nonzero term $\mathbb Z_X$ in degree $p$ and $\mathbb Z_X[-q]$ its single nonzero term in degree $q$ [F15]; hence $\operatorname{Tot}(\mathbb Z_X[-p]\otimes_{\mathbb Z}\mathbb Z_X[-q])$ has the single nonzero term $\mathbb Z_X\otimes_{\mathbb Z}\mathbb Z_X$ in degree $p+q$, where $S$ acts as $(-1)^{pq}$ times the exchange of the two factors, and under the unit identification $\mathbb Z_X\otimes_{\mathbb Z}\mathbb Z_X\cong\mathbb Z_X$ of [F4] that is multiplication by $(-1)^{pq}$. [F4, F10, F13, F15, step 1.2, step 3.1]

5.1 Clause 1 is [step 1.1]; clause 2 is [step 2.1] together with [step 3.1] and the symmetry and left unitor of [F4] together with $\rho:=\lambda\circ\sigma$; clause 3 is [step 3.2], [step 1.2], [step 1.3] and [step 4.1]. No choice principle is used anywhere. ∎ [F4, step 1.1, step 2.1, step 3.1, step 3.2, step 1.2, step 1.3, step 4.1]
