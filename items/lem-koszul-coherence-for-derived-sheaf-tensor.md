---
id: "lem-koszul-coherence-for-derived-sheaf-tensor"
kind: "lemma"
title: "Koszul coherence of derived sheaf tensor"
status: published
origin: pipeline
deps: [lem-flatness-criteria-and-flat-covers-for-abelian-sheaves, def-topological-space, def-tensor-product-of-abelian-sheaves, lem-stalks-and-colimits-of-the-abelian-sheaf-tensor-product, lem-derived-tensor-product-of-abelian-sheaves, lem-koszul-structure-of-the-abelian-sheaf-tensor-product, lem-abelian-sheaves-admit-bounded-above-flat-resolutions, def-derived-category-of-an-abelian-category, prop-the-localization-functor-sends-quasi-isomorphisms-to-isomorphisms, def-bounded-bounded-below-and-bounded-above-complex, def-zero-and-stalk-complex, def-cochain-map, def-quasi-isomorphism, def-left-roof-representing-a-localized-morphism, lem-quasi-isomorphisms-admit-the-roof-calculus-in-the-homotopy-category, lem-composition-of-roofs-is-well-defined, def-k-flat-complex-of-abelian-sheaves, def-flat-abelian-sheaf, lem-constant-sheaf-is-the-sheaf-of-locally-constant-functions, lem-k-flat-abelian-sheaf-complexes-preserve-quasi-isomorphisms]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "The Stacks Project, Cohomology of Sheaves"
      url: https://stacks.math.columbia.edu/download/cohomology.pdf
      locator: "Section 26 (K-flat complexes and the derived tensor product), Section 31 (the cup product)"
verification:
  audited: 2026-09-27
---

## Statement

Let $X$ be a topological space, let $\otimes_{\mathbb Z}$ be the tensor
product of abelian sheaves with total complex $\operatorname{Tot}$
([[def-tensor-product-of-abelian-sheaves]]), let $\mathcal P$ be the canonical
bounded-above flat replacement with augmentation
$\alpha_{\mathcal C}:\mathcal P(\mathcal C)\to\mathcal C$ of clause 1 of
[[lem-derived-tensor-product-of-abelian-sheaves]], and let
$\otimes^{\mathbf L}_{\mathbb Z}$ be the derived tensor product of clause 2 of
that lemma on $D^-(\mathrm{Ab}(X))$, under the standing smallness or supplied
cofinal-denominator hypothesis of
[[def-derived-category-of-an-abelian-category]]. Let $\mathbb Z_X$ be the
constant sheaf with value $\mathbb Z$
([[lem-constant-sheaf-is-the-sheaf-of-locally-constant-functions]]), write
$Z[k]$ for the shift with $Z[k]^n=Z^{n+k}$
([[def-derived-category-of-an-abelian-category]]), and let $A,S,\Lambda$ and
$\mathrm P$ be the Koszul structure maps on total complexes and
$\alpha,\sigma,\lambda,\rho$ the sheaf-level associator, symmetry and unitors of
[[lem-koszul-structure-of-the-abelian-sheaf-tensor-product]] (clauses 2 and 3),
where $\Lambda(\mathcal F^\bullet)$ and $\mathrm P(\mathcal F^\bullet)$ are the
cochain maps with components $\lambda_{\mathcal F^n}$ and
$\rho_{\mathcal F^n}$ (the unitors of clause 2 of
[[lem-koszul-structure-of-the-abelian-sheaf-tensor-product]]); let
$c_{\mathcal F,\mathcal G}$ be the comparison of clause 4 of
[[lem-derived-tensor-product-of-abelian-sheaves]]. For bounded-above cochain
complexes $\mathcal F^\bullet,\mathcal G^\bullet,\mathcal H^\bullet$ of abelian
sheaves:

1. **(Symmetry.)** $\sigma^{\mathbf L}(\mathcal F,\mathcal G):=
   Q\bigl(S(\mathcal P\mathcal F,\mathcal P\mathcal G)\bigr)$ is a morphism
   $\mathcal F^\bullet\otimes^{\mathbf L}_{\mathbb Z}\mathcal G^\bullet\to
   \mathcal G^\bullet\otimes^{\mathbf L}_{\mathbb Z}\mathcal F^\bullet$ in
   $D^-$, it is an isomorphism, natural in $\mathcal F$ and $\mathcal G$,
   involutive
   ($\sigma^{\mathbf L}(\mathcal G,\mathcal F)\circ
   \sigma^{\mathbf L}(\mathcal F,\mathcal G)=\operatorname{id}$), and on the
   summand $\mathcal P^i(\mathcal F)\otimes_{\mathbb Z}\mathcal P^j(\mathcal G)$
   it is the Koszul symmetry $x\otimes y\mapsto(-1)^{ij}y\otimes x$.

2. **(Unit and shifted-unit identifications.)** The composites
   $$\lambda^{\mathbf L}(\mathcal F):=Q(\alpha_{\mathcal F})\circ Q\bigl(\Lambda(\mathcal P\mathcal F)\bigr)\circ Q\bigl(\operatorname{Tot}(\alpha_{\mathbb Z_X[0]}\otimes \operatorname{id}_{\mathcal P\mathcal F})\bigr),$$
   $$\rho^{\mathbf L}(\mathcal F):=Q(\alpha_{\mathcal F})\circ Q\bigl(\mathrm P(\mathcal P\mathcal F)\bigr)\circ Q\bigl(\operatorname{Tot}(\operatorname{id}_{\mathcal P\mathcal F}\otimes \alpha_{\mathbb Z_X[0]})\bigr)$$
   are canonical isomorphisms
   $\lambda^{\mathbf L}(\mathcal F):\mathbb Z_X\otimes^{\mathbf L}_{\mathbb Z}
   \mathcal F\to\mathcal F$ and
   $\rho^{\mathbf L}(\mathcal F):\mathcal F\otimes^{\mathbf L}_{\mathbb Z}
   \mathbb Z_X\to\mathcal F$, natural in $\mathcal F$; equivalently, using the
   naturality of the unitors and of the augmentation,
   $\lambda^{\mathbf L}(\mathcal F)=
   Q\bigl(\Lambda(\mathcal F^\bullet)\circ
   \operatorname{Tot}(\alpha_{\mathbb Z_X[0]}\otimes\alpha_{\mathcal F})\bigr)$
   and $\rho^{\mathbf L}(\mathcal F)=
   Q\bigl(\mathrm P(\mathcal F^\bullet)\circ
   \operatorname{Tot}(\alpha_{\mathcal F}\otimes\alpha_{\mathbb Z_X[0]})\bigr)$,
   and for an abelian sheaf $\mathcal F$ read in degree zero,
   $\lambda^{\mathbf L}(\mathcal F_0)=Q(\lambda_{\mathcal F})\circ
   c_{\mathbb Z_X,\mathcal F}$ and
   $\rho^{\mathbf L}(\mathcal F_0)=Q(\rho_{\mathcal F})\circ
   c_{\mathcal F,\mathbb Z_X}$. Moreover for all $p,q\ge0$ the morphism
   $$\kappa(p,q):=Q\bigl(\operatorname{Tot}(\alpha_{\mathbb Z_X[-p]}\otimes \alpha_{\mathbb Z_X[-q]})\bigr)^{-1}\circ Q\bigl(\kappa_{p,q}^{-1}\bigr): \mathbb Z_X[-p-q]\longrightarrow \mathbb Z_X[-p]\otimes^{\mathbf L}_{\mathbb Z}\mathbb Z_X[-q],$$
   where $\kappa_{p,q}:\operatorname{Tot}(\mathbb Z_X[-p]\otimes_{\mathbb Z}
   \mathbb Z_X[-q])\to\mathbb Z_X[-p-q]$ is the cochain map whose only nonzero
   component is the degree-$(p+q)$ multiplication $\mathbb Z_X\otimes_{\mathbb Z}
   \mathbb Z_X\to\mathbb Z_X$ of clause 3 of
   [[lem-koszul-structure-of-the-abelian-sheaf-tensor-product]], is a canonical
   isomorphism, and the unit laws
   $$\lambda^{\mathbf L}(\mathbb Z_X[-q])\circ\kappa(0,q)=\operatorname{id}, \qquad \rho^{\mathbf L}(\mathbb Z_X[-q])\circ\kappa(q,0)=\operatorname{id}$$
   hold for every $q\ge0$.

3. **(Associator.)** With
   $$\Theta:=Q\bigl(\operatorname{Tot}(\alpha_{\operatorname{Tot}(\mathcal P \mathcal F\otimes_{\mathbb Z}\mathcal P\mathcal G)}\otimes \operatorname{id}_{\mathcal P\mathcal H})\bigr),\qquad \Xi:=Q\bigl(\operatorname{Tot}(\operatorname{id}_{\mathcal P\mathcal F}\otimes \alpha_{\operatorname{Tot}(\mathcal P\mathcal G\otimes_{\mathbb Z} \mathcal P\mathcal H)})\bigr),$$
   which are isomorphisms
   $(\mathcal F\otimes^{\mathbf L}\mathcal G)\otimes^{\mathbf L}\mathcal H\to
   \operatorname{Tot}(\operatorname{Tot}(\mathcal P\mathcal F\otimes_{\mathbb Z}
   \mathcal P\mathcal G)\otimes_{\mathbb Z}\mathcal P\mathcal H)$ and
   $\mathcal F\otimes^{\mathbf L}(\mathcal G\otimes^{\mathbf L}\mathcal H)\to
   \operatorname{Tot}(\mathcal P\mathcal F\otimes_{\mathbb Z}
   \operatorname{Tot}(\mathcal P\mathcal G\otimes_{\mathbb Z}
   \mathcal P\mathcal H))$, the morphism
   $$\alpha^{\mathbf L}(\mathcal F,\mathcal G,\mathcal H):=\Xi^{-1}\circ Q\bigl(A(\mathcal P\mathcal F,\mathcal P\mathcal G,\mathcal P\mathcal H)\bigr)\circ\Theta$$
   is a canonical isomorphism
   $(\mathcal F\otimes^{\mathbf L}\mathcal G)\otimes^{\mathbf L}\mathcal H\to
   \mathcal F\otimes^{\mathbf L}(\mathcal G\otimes^{\mathbf L}\mathcal H)$ in
   $D^-$, natural in the three arguments.

4. **(Coherence and compatibility.)**
   (a) On ordinary total tensors of the canonical replacements, with
   the actual unit complex $Z:=\mathbb Z_X[0]$, the maps $Q(A)$, $Q(S)$,
   $Q(\Lambda)$ and $Q(\mathrm P)$ satisfy the pentagon, triangle and hexagon
   identities of clause 3 of
   [[lem-koszul-structure-of-the-abelian-sheaf-tensor-product]], and $Q(S)$
   is involutive. In particular the ordinary triangle uses
   $A(\mathcal P\mathcal F,Z,\mathcal P\mathcal G)$ and reads
   $$Q(\operatorname{Tot}(\operatorname{id}\otimes\Lambda(\mathcal P\mathcal G)))\circ Q(A(\mathcal P\mathcal F,Z,\mathcal P\mathcal G))=Q(\operatorname{Tot}(\mathrm P(\mathcal P\mathcal F)\otimes\operatorname{id})).$$
   The transported derived associator, symmetry and unitors of clauses 1--3
   satisfy the same pentagon, triangle and hexagon identities, and the
   derived symmetry is involutive.
   (b) The comparison is compatible with the structure: for abelian sheaves
   $\mathcal F,\mathcal G,\mathcal H$ read in degree zero,
   $$c_{\mathcal G,\mathcal F}\circ\sigma^{\mathbf L}(\mathcal F,\mathcal G)= Q(\sigma_{\mathcal F,\mathcal G})\circ c_{\mathcal F,\mathcal G},\qquad c_{\mathcal F,\mathcal G\otimes_{\mathbb Z}\mathcal H}\circ (\operatorname{id}_{\mathcal F}\otimes^{\mathbf L} c_{\mathcal G,\mathcal H})\circ\alpha^{\mathbf L}(\mathcal F,\mathcal G, \mathcal H)=Q(\alpha_{\mathcal F,\mathcal G,\mathcal H})\circ c_{\mathcal F\otimes_{\mathbb Z}\mathcal G,\mathcal H}\circ (c_{\mathcal F,\mathcal G}\otimes^{\mathbf L}\operatorname{id}_{\mathcal H}).$$
   (c) The symmetry at shifted units is the sign: for all $p,q\ge0$,
   $$\sigma^{\mathbf L}(\mathbb Z_X[-p],\mathbb Z_X[-q])=\kappa(q,p)\circ \bigl((-1)^{pq}\operatorname{id}_{\mathbb Z_X[-p-q]}\bigr)\circ \kappa(p,q)^{-1}.$$

   No choice principle is used: $\mathcal P$, $\alpha$ and the structure maps
   are canonical.

## Facts & Assumptions

[F1] The canonical replacement is functorial with natural augmentation and preserves quasi-isomorphisms, and it uses no choice: $\mathcal P(\operatorname{id})=\operatorname{id}$, $\mathcal P(g\circ f)=\mathcal P(g)\circ\mathcal P(f)$, $\alpha_{\mathcal D}\circ\mathcal P(f)=f\circ\alpha_{\mathcal C}$ and $\mathcal P(f)$ is a quasi-isomorphism whenever $f$ is ([[lem-derived-tensor-product-of-abelian-sheaves]]).

[F2] The derived tensor product is $\mathcal F^\bullet\otimes^{\mathbf L}_{\mathbb Z}\mathcal G^\bullet:=\operatorname{Tot}(\mathcal P(\mathcal F)\otimes_{\mathbb Z}\mathcal P(\mathcal G))$ ([[lem-derived-tensor-product-of-abelian-sheaves]]).

[F3] On left roofs with quasi-isomorphism denominators the derived tensor is $(s,h)\otimes(t,k)=Q\operatorname{Tot}(\mathcal P h\otimes_{\mathbb Z}\mathcal P k)\circ Q\operatorname{Tot}(\mathcal P s\otimes_{\mathbb Z}\mathcal P t)^{-1}$, it is a bifunctor additive in each variable, and $u\otimes^{\mathbf L}\operatorname{id}$ is invertible for invertible $u$ ([[lem-derived-tensor-product-of-abelian-sheaves]]).

[F4] The comparison $c_{\mathcal F,\mathcal G}:\mathcal F\otimes^{\mathbf L}_{\mathbb Z}\mathcal G\to\mathcal F\otimes_{\mathbb Z}\mathcal G$ of clause 4 is the morphism induced by $\operatorname{Tot}(\alpha_{\mathcal F[0]}\otimes_{\mathbb Z}\alpha_{\mathcal G[0]})$, it is defined for abelian sheaves read in degree zero, and it is natural in $\mathcal F$ and $\mathcal G$ ([[lem-derived-tensor-product-of-abelian-sheaves]]).

[F5] The Koszul maps $A,S,\Lambda,\mathrm P$ are isomorphisms of cochain complexes, natural in the arguments; $A$ is equal on the summand $\mathcal F^i\otimes_{\mathbb Z}\mathcal G^j\otimes_{\mathbb Z}\mathcal H^k$ to the sheaf-level associator of clause 2, and $S$ sends $x\otimes y$ to $(-1)^{ij}y\otimes x$ for $x\in\mathcal F^i$, $y\in\mathcal G^j$ ([[lem-koszul-structure-of-the-abelian-sheaf-tensor-product]], clause 3).

[F6] These isomorphisms satisfy the pentagon, triangle and hexagon identities of clause 3, $S$ is involutive, and on $\operatorname{Tot}(\mathbb Z_X[-p]\otimes_{\mathbb Z}\mathbb Z_X[-q])$ the symmetry is $(-1)^{pq}$ times the exchange of the factors, hence multiplication by $(-1)^{pq}$ under the unit identification with $\mathbb Z_X[-p-q]$ ([[lem-koszul-structure-of-the-abelian-sheaf-tensor-product]], clause 3).

[F7] The sheaf-level associator, symmetry and unitors exist, are natural, satisfy the pentagon, triangle and hexagon identities, $\sigma$ is involutive, and $\lambda(f\otimes s)=f\cdot s=\rho(s\otimes f)$ ([[lem-koszul-structure-of-the-abelian-sheaf-tensor-product]], clause 2).

[F8] The sheaf-level unitors $\lambda,\rho$ are natural and, for sheaves concentrated in degree zero, they are the degree-zero identifications of the tensor-product total complex ([[lem-koszul-structure-of-the-abelian-sheaf-tensor-product]], clauses 2 and 3); in particular the degreewise unitors $\Lambda(\mathcal F^\bullet)$ and $\mathrm P(\mathcal F^\bullet)$ are natural cochain maps, while for a sheaf $\mathcal F$ in degree zero $\Lambda(\mathcal F_0)$ and $\mathrm P(\mathcal F_0)$ are the cochain maps induced by $\lambda_{\mathcal F}$ and $\rho_{\mathcal F}$ respectively.

[F9] $Q:K(\mathcal A)\to D(\mathcal A)$ is the localization functor, so $Q(\operatorname{id})=\operatorname{id}$, $Q(g\circ f)=Q(g)\circ Q(f)$, and $Q$ sends quasi-isomorphisms to isomorphisms ([[def-derived-category-of-an-abelian-category]], [[prop-the-localization-functor-sends-quasi-isomorphisms-to-isomorphisms]]).

[F10] If $\mathcal K^\bullet$ is a bounded-above complex of flat abelian sheaves and $s$ is a quasi-isomorphism, then $\operatorname{Tot}(s\otimes\operatorname{id}_{\mathcal K})$ and $\operatorname{Tot}(\operatorname{id}_{\mathcal K}\otimes s)$ are quasi-isomorphisms ([[lem-k-flat-abelian-sheaf-complexes-preserve-quasi-isomorphisms]]).

[F11] The tensor-product total complex of bounded-above complexes is again bounded above, its degree-$n$ term is $\bigoplus_{i+j=n}\mathcal F^i\otimes_{\mathbb Z}\mathcal G^j$, and for sheaves concentrated in degree zero it is their tensor product in degree zero with zero terms elsewhere ([[def-tensor-product-of-abelian-sheaves]]).

[F12] A bounded-above complex of flat abelian sheaves is K-flat, and it preserves quasi-isomorphisms under the tensor-product total complex ([[lem-abelian-sheaves-admit-bounded-above-flat-resolutions]], clause 2).

[F13] Left roofs $(s,f)$ with $s$ a quasi-isomorphism represent the morphisms $Q(f)Q(s)^{-1}$ of the localization, and composition of roofs is the class of $(sa,gb)$ for an Ore square $fa=tb$, independently of the representatives ([[def-left-roof-representing-a-localized-morphism]], [[lem-composition-of-roofs-is-well-defined]]).

[F14] A morphism of $D^-$ is a composite of images under $Q$ of cochain maps and inverses of images of quasi-isomorphisms, since $D^-$ is the localization of the bounded-above homotopy category at the quasi-isomorphisms, where quasi-isomorphisms form a two-sided multiplicative system ([[def-derived-category-of-an-abelian-category]], [[lem-quasi-isomorphisms-admit-the-roof-calculus-in-the-homotopy-category]]).

[F15] A cochain map $f:C^\bullet\to D^\bullet$ is a family of morphisms $f^n:C^n\to D^n$ with $d_D^n\circ f^n=f^{n+1}\circ d_C^n$ for every $n$; in particular a cochain map into a complex concentrated in degree $0$ is determined by its degree-$0$ component ([[def-cochain-map]]).

[F16] The stalk complex $\mathbb Z_X[k]$ has $\mathbb Z_X$ in degree $-k$ in the cochain reading $X[k]^n=X^{n+k}$, so $\mathbb Z_X[-p]$ has its single nonzero term in degree $p$ ([[def-zero-and-stalk-complex]], [[def-derived-category-of-an-abelian-category]]).

[F17] The constant sheaf $\mathbb Z_X$ is flat, so each shifted unit complex is a bounded-above complex of flat sheaves ([[lem-flatness-criteria-and-flat-covers-for-abelian-sheaves]], clause 2; [[lem-abelian-sheaves-admit-bounded-above-flat-resolutions]], clause 2).



## Proof

**Given:** A topological space $X$, bounded-above cochain complexes $\mathcal F^\bullet,\mathcal G^\bullet,\mathcal H^\bullet$ of abelian sheaves, the canonical flat replacement $\mathcal P$ with augmentation $\alpha$, and the published structure maps $A,S,\Lambda,\mathrm P$ and $\alpha,\sigma,\lambda,\rho$.

1.1 For bounded-above complexes $\mathcal F^\bullet,\mathcal G^\bullet$ the Koszul symmetry $S(\mathcal P\mathcal F,\mathcal P\mathcal G)$ is an isomorphism of cochain complexes, natural in the two arguments, and on the summand $\mathcal P^i(\mathcal F)\otimes_{\mathbb Z}\mathcal P^j(\mathcal G)$ it is the Koszul map $x\otimes y\mapsto(-1)^{ij}y\otimes x$ [F5]. By the definition of the derived tensor product [F2] its source and target are $\mathcal F^\bullet\otimes^{\mathbf L}_{\mathbb Z}\mathcal G^\bullet$ and $\mathcal G^\bullet\otimes^{\mathbf L}_{\mathbb Z}\mathcal F^\bullet$, so $Q(S(\mathcal P\mathcal F,\mathcal P\mathcal G))$ is a morphism between them in $D^-$ acting on each summand by the displayed rule, and it is an isomorphism with inverse $Q(S(\mathcal P\mathcal G,\mathcal P\mathcal F))$: $Q(S(\mathcal P\mathcal G,\mathcal P\mathcal F))\circ Q(S(\mathcal P\mathcal F,\mathcal P\mathcal G))=Q(S(\mathcal P\mathcal G,\mathcal P\mathcal F)\circ S(\mathcal P\mathcal F,\mathcal P\mathcal G))=Q(\operatorname{id})=\operatorname{id}$ and symmetrically, because $S$ is involutive [F6] and $Q$ is a functor [F9]. [F2, F5, F6, F9]

1.2 For cochain maps $\varphi:\mathcal F^\bullet\to\mathcal F'^\bullet$ and $\psi:\mathcal G^\bullet\to\mathcal G'^\bullet$ naturality of $S$ [F5] gives the cochain-map identity $S(\mathcal P\mathcal F',\mathcal P\mathcal G')\circ\operatorname{Tot}(\mathcal P\varphi\otimes_{\mathbb Z}\mathcal P\psi)=\operatorname{Tot}(\mathcal P\psi\otimes_{\mathbb Z}\mathcal P\varphi)\circ S(\mathcal P\mathcal F,\mathcal P\mathcal G)$. A cochain map is represented in the localization by the left roof with identity denominator [F13], so the bifunctor formula [F3] gives $\varphi\otimes^{\mathbf L}\psi=Q(\operatorname{Tot}(\mathcal P\varphi\otimes_{\mathbb Z}\mathcal P\psi))$ and $\psi\otimes^{\mathbf L}\varphi=Q(\operatorname{Tot}(\mathcal P\psi\otimes_{\mathbb Z}\mathcal P\varphi))$; applying the functor $Q$ to the displayed identity therefore yields $\sigma^{\mathbf L}(\mathcal F',\mathcal G')\circ(\varphi\otimes^{\mathbf L}\psi)=(\psi\otimes^{\mathbf L}\varphi)\circ\sigma^{\mathbf L}(\mathcal F,\mathcal G)$, so $\sigma^{\mathbf L}$ is natural with respect to cochain maps [F9]. [F3, F5, F9, F13]

1.3 The four factors of $\lambda^{\mathbf L}(\mathcal F)$ and $\rho^{\mathbf L}(\mathcal F)$ are invertible in $D^-$: $Q(\alpha_{\mathcal F})$ because $\alpha_{\mathcal F}$ is a quasi-isomorphism [F1, F9]; $Q(\Lambda(\mathcal P\mathcal F))$ and $Q(\mathrm P(\mathcal P\mathcal F))$ because $\Lambda,\mathrm P$ are isomorphisms of cochain complexes [F5]; and $Q(\operatorname{Tot}(\alpha_{\mathbb Z[0]}\otimes\operatorname{id}_{\mathcal P\mathcal F}))$, $Q(\operatorname{Tot}(\operatorname{id}_{\mathcal P\mathcal F}\otimes\alpha_{\mathbb Z[0]}))$ because $\alpha_{\mathbb Z[0]}$ is a quasi-isomorphism, $\mathcal P(\mathcal F)$ and $\mathcal P(\mathbb Z[0])$ are bounded-above complexes of flat sheaves [F1] hence K-flat [F12], so [F10] makes these maps quasi-isomorphisms. Hence $\lambda^{\mathbf L}(\mathcal F)$ and $\rho^{\mathbf L}(\mathcal F)$ are isomorphisms in $D^-$ from the derived tensor products to $\mathcal F^\bullet$ as displayed [F2, F9]. [F1, F2, F5, F9, F10, F12]

1.4 Because $Q$ is a functor [F9], the defining composite is $Q(\alpha_{\mathcal F}\circ\Lambda(\mathcal P\mathcal F)\circ\operatorname{Tot}(\alpha_{\mathbb Z[0]}\otimes\operatorname{id}_{\mathcal P\mathcal F}))$. Naturality of the sheaf-level unitor in each degree [F8] says $\lambda_{\mathcal F^n}\circ(\operatorname{id}_{\mathbb Z_X}\otimes\alpha_{\mathcal F}^n)=\alpha_{\mathcal F}^n\circ\lambda_{(\mathcal P\mathcal F)^n}$ for every $n$, which by [F15] is the cochain-map identity $\Lambda(\mathcal F^\bullet)\circ\operatorname{Tot}(\operatorname{id}_{\mathbb Z[0]}\otimes\alpha_{\mathcal F})=\alpha_{\mathcal F}\circ\Lambda(\mathcal P\mathcal F)$; substituting it and using functoriality of $\operatorname{Tot}$ and the identity $(\operatorname{id}_{\mathbb Z_X}\otimes\alpha_{\mathcal F})\circ(\alpha_{\mathbb Z[0]}\otimes\operatorname{id}_{\mathcal P\mathcal F})=\alpha_{\mathbb Z[0]}\otimes\alpha_{\mathcal F}$ gives $\lambda^{\mathbf L}(\mathcal F)=Q(\Lambda(\mathcal F^\bullet)\circ\operatorname{Tot}(\alpha_{\mathbb Z[0]}\otimes\alpha_{\mathcal F}))$, and the same computation with $\rho$ and $\mathrm P$ [F7] gives $\rho^{\mathbf L}(\mathcal F)=Q(\mathrm P(\mathcal F^\bullet)\circ\operatorname{Tot}(\alpha_{\mathcal F}\otimes\alpha_{\mathbb Z[0]}))$. For an abelian sheaf $\mathcal F$ read in degree zero the complex $\mathcal F_0$ is concentrated in degree zero, so $\Lambda(\mathcal F_0)$ and $\mathrm P(\mathcal F_0)$ are the sheaf-level unitors $\lambda_{\mathcal F}$ and $\rho_{\mathcal F}$ in degree zero and zero in all other degrees [F8, F11], and $\operatorname{Tot}(\alpha_{\mathbb Z[0]}\otimes\alpha_{\mathcal F_0})$ is the comparison $c_{\mathbb Z_X,\mathcal F}$ [F4]; hence $\lambda^{\mathbf L}(\mathcal F_0)=Q(\lambda_{\mathcal F})\circ c_{\mathbb Z_X,\mathcal F}$ and $\rho^{\mathbf L}(\mathcal F_0)=Q(\rho_{\mathcal F})\circ c_{\mathcal F,\mathbb Z_X}$. [F1, F4, F7, F8, F9, F11, F15]

1.5 For $p,q\ge0$ the cochain map $\kappa_{p,q}$ is an isomorphism: by [F16] its source and target have $\mathbb Z_X\otimes_{\mathbb Z}\mathbb Z_X$ resp. $\mathbb Z_X$ as only nonzero term, in degree $p+q$, its only nonzero component is the unit identification $\mathbb Z_X\otimes_{\mathbb Z}\mathbb Z_X\to\mathbb Z_X$ [F8], which is an isomorphism, and all other components are zero maps between zero objects. Hence $Q(\kappa_{p,q})$ is invertible in $D^-$ [F9]. The factor $Q(\operatorname{Tot}(\alpha_{\mathbb Z[-p]}\otimes\alpha_{\mathbb Z[-q]}))$ is invertible as well: $\alpha_{\mathbb Z[-p]},\alpha_{\mathbb Z[-q]}$ are quasi-isomorphisms and $\mathcal P(\mathbb Z[-p]),\mathcal P(\mathbb Z[-q])$ are bounded-above complexes of flat sheaves [F1] hence K-flat [F12], and the target shifted units are K-flat by [F17]. Factoring the tensor of the two augmentations into two maps, each with a K-flat other factor, shows that $\operatorname{Tot}(\alpha_{\mathbb Z[-p]}\otimes\alpha_{\mathbb Z[-q]})$ is a quasi-isomorphism [F10] and $Q$ carries it to an isomorphism [F9]. Therefore $\kappa(p,q)$ is a canonical isomorphism [F3]. [F1, F3, F8, F9, F10, F12, F16]

1.6 $\Theta$ and $\Xi$ are invertible in $D^-$: the augmentations are quasi-isomorphisms [F1] and the other factors are bounded-above complexes of flat sheaves [F1] hence K-flat [F12], so [F10] makes the total tensor maps quasi-isomorphisms and [F9] makes their images under $Q$ invertible; $Q(A(\mathcal P\mathcal F,\mathcal P\mathcal G,\mathcal P\mathcal H))$ is invertible because $A$ is an isomorphism of cochain complexes [F5]. Hence $\alpha^{\mathbf L}(\mathcal F,\mathcal G,\mathcal H)=\Xi^{-1}\circ Q(A)\circ\Theta$ is a canonical isomorphism in $D^-$ [F3, F9], its source and target being the two parenthesizations $(\mathcal F\otimes^{\mathbf L}\mathcal G)\otimes^{\mathbf L}\mathcal H$ and $\mathcal F\otimes^{\mathbf L}(\mathcal G\otimes^{\mathbf L}\mathcal H)$ of the triple derived tensor product [F2]. [F1, F2, F3, F5, F9, F10, F12]

1.7 Let $\mathcal F,\mathcal G$ be abelian sheaves read in degree zero and write $\mathcal F[0]$ for the complex concentrated in that degree [F16]. Naturality of $S$ [F5] applied to the cochain maps $\alpha_{\mathcal F[0]},\alpha_{\mathcal G[0]}$ gives $S(\mathcal F[0],\mathcal G[0])\circ\operatorname{Tot}(\alpha_{\mathcal F[0]}\otimes_{\mathbb Z}\alpha_{\mathcal G[0]})=\operatorname{Tot}(\alpha_{\mathcal G[0]}\otimes_{\mathbb Z}\alpha_{\mathcal F[0]})\circ S(\mathcal P\mathcal F,\mathcal P\mathcal G)$. Both total complexes in the outer positions are concentrated in degree zero with single term $\mathcal G\otimes_{\mathbb Z}\mathcal F$ resp. $\mathcal F\otimes_{\mathbb Z}\mathcal G$ [F11], so their cochain maps are determined by their degree-zero components [F15]; in degree zero the Koszul sign is $(-1)^{0\cdot0}=1$ [F5], so $S(\mathcal F[0],\mathcal G[0])=\sigma_{\mathcal F,\mathcal G}$ as cochain maps, comparing with the sheaf-level symmetry of [F7]. Applying $Q$, using that $c_{\mathcal G,\mathcal F}=Q(\operatorname{Tot}(\alpha_{\mathcal G[0]}\otimes\alpha_{\mathcal F[0]}))$ and $c_{\mathcal F,\mathcal G}=Q(\operatorname{Tot}(\alpha_{\mathcal F[0]}\otimes\alpha_{\mathcal G[0]}))$ [F4] and $\sigma^{\mathbf L}(\mathcal F,\mathcal G)=Q(S(\mathcal P\mathcal F,\mathcal P\mathcal G))$, gives the first identity of clause 4(b). [F4, F5, F7, F11, F15, F16]

1.8 For $p,q\ge0$ put $m:=(-1)^{pq}\operatorname{id}_{\mathbb Z_X[-p-q]}$. The complexes $\operatorname{Tot}(\mathbb Z_X[-p]\otimes_{\mathbb Z}\mathbb Z_X[-q])$ and $\operatorname{Tot}(\mathbb Z_X[-q]\otimes_{\mathbb Z}\mathbb Z_X[-p])$ have a single nonzero term in degree $p+q$ [F16], so cochain maps between them are determined by their component in that degree [F15]. On that component the cochain map $S(\mathbb Z_X[-p],\mathbb Z_X[-q])$ is $(-1)^{pq}$ times the exchange of the two factors [F6], the composite $\kappa_{q,p}^{-1}\circ m\circ\kappa_{p,q}$ is multiplication of the two generators followed by $(-1)^{pq}$ followed by the inverse of multiplication, and both are therefore the map $\mathbb Z_X\otimes_{\mathbb Z}\mathbb Z_X\to\mathbb Z_X\otimes_{\mathbb Z}\mathbb Z_X$ sending $1\otimes1$ to $(-1)^{pq}(1\otimes1)$; hence $S(\mathbb Z_X[-p],\mathbb Z_X[-q])=\kappa_{q,p}^{-1}\circ m\circ\kappa_{p,q}$ as cochain maps. Naturality of $S$ [F5] applied to the cochain maps $\alpha_{\mathbb Z[-p]},\alpha_{\mathbb Z[-q]}$ gives $S(\mathbb Z_X[-p],\mathbb Z_X[-q])\circ\operatorname{Tot}(\alpha_{\mathbb Z[-p]}\otimes\alpha_{\mathbb Z[-q]})=\operatorname{Tot}(\alpha_{\mathbb Z[-q]}\otimes\alpha_{\mathbb Z[-p]})\circ S(\mathcal P\mathbb Z[-p],\mathcal P\mathbb Z[-q])$, that is $Q(c_{q,p})\circ\sigma^{\mathbf L}(\mathbb Z_X[-p],\mathbb Z_X[-q])=Q(\kappa_{q,p}^{-1}\circ m\circ\kappa_{p,q})\circ Q(c_{p,q})$ with $c_{p,q}=\operatorname{Tot}(\alpha_{\mathbb Z[-p]}\otimes\alpha_{\mathbb Z[-q]})$. The comparison $c_{q,p}$ is a quasi-isomorphism [F1, F10, F12], so its image under $Q$ is invertible [F9], and multiplying the displayed identity by $Q(c_{q,p})^{-1}$ on the left gives $\sigma^{\mathbf L}(\mathbb Z_X[-p],\mathbb Z_X[-q])=Q(c_{q,p})^{-1}\circ Q(\kappa_{q,p}^{-1})\circ Q(m)\circ Q(\kappa_{p,q})\circ Q(c_{p,q})=\kappa(q,p)\circ((-1)^{pq}\operatorname{id})\circ\kappa(p,q)^{-1}$, which is clause 4(c). [F1, F5, F6, F9, F10, F12, F15, F16]

2.1 For cochain maps $f:\mathcal F\to\mathcal F'$, $g:\mathcal G\to\mathcal G'$ and $h:\mathcal H\to\mathcal H'$, put $T(C,D)=\operatorname{Tot}(C\otimes_{\mathbb Z}D)$, $L=T(\mathcal P\mathcal F,\mathcal P\mathcal G)$, $L'=T(\mathcal P\mathcal F',\mathcal P\mathcal G')$, $R=T(\mathcal P\mathcal G,\mathcal P\mathcal H)$, $R'=T(\mathcal P\mathcal G',\mathcal P\mathcal H')$, $u=T(\mathcal P f,\mathcal P g):L\to L'$ and $v=T(\mathcal P g,\mathcal P h):R\to R'$. Naturality of the augmentation [F1] yields the typed comparison squares $\Theta'\circ Q T(\mathcal P u,\mathcal P h)=Q T(u,\mathcal P h)\circ\Theta$ and $\Xi'\circ Q T(\mathcal P f,\mathcal P v)=Q T(\mathcal P f,v)\circ\Xi$. Naturality of the strict associator [F5] gives $Q A(\mathcal P\mathcal F',\mathcal P\mathcal G',\mathcal P\mathcal H')\circ Q T(u,\mathcal P h)=Q T(\mathcal P f,v)\circ Q A(\mathcal P\mathcal F,\mathcal P\mathcal G,\mathcal P\mathcal H)$. Composing these three squares and inverting $\Xi,\Xi'$ [step 1.6] proves $\alpha^{\mathbf L}(\mathcal F',\mathcal G',\mathcal H')\circ((Qf\otimes^{\mathbf L}Qg)\otimes^{\mathbf L}Qh)=(Qf\otimes^{\mathbf L}(Qg\otimes^{\mathbf L}Qh))\circ\alpha^{\mathbf L}(\mathcal F,\mathcal G,\mathcal H)$. The intermediate objects are $T(\mathcal P L,\mathcal P\mathcal H)$, $T(L,\mathcal P\mathcal H)$, $T(\mathcal P\mathcal F,\mathcal P R)$ and $T(\mathcal P\mathcal F,R)$ and their primed counterparts, so every composite is typed. [F1, F3, F5, F9, step 1.6]

2.2 Let $\mathcal F,\mathcal G,\mathcal H$ be abelian sheaves in degree zero, put $T(C,D)=\operatorname{Tot}(C\otimes_{\mathbb Z}D)$, $L=T(\mathcal P\mathcal F,\mathcal P\mathcal G)$, $R=T(\mathcal P\mathcal G,\mathcal P\mathcal H)$, $W=(\mathcal F\otimes\mathcal G)[0]$ and $V=(\mathcal G\otimes\mathcal H)[0]$. Write $m_{FG}=T(\alpha_{\mathcal F},\alpha_{\mathcal G}):L\to W$ and $m_{GH}=T(\alpha_{\mathcal G},\alpha_{\mathcal H}):R\to V$ for the cochain representatives of $c_{\mathcal F,\mathcal G}$ and $c_{\mathcal G,\mathcal H}$ [F4]. The left side of the associator-comparison identity of clause 4(b) uses $\mathcal P(m_{GH})$ and the right side uses $\mathcal P(m_{FG})$ [F3]. Naturality of the augmentation [F1] gives the typed identities $\alpha_V\circ\mathcal P(m_{GH})=m_{GH}\circ\alpha_R$ and $\alpha_W\circ\mathcal P(m_{FG})=m_{FG}\circ\alpha_L$. Tensor the first with $\operatorname{id}_{\mathcal P\mathcal F}$ and the second with $\operatorname{id}_{\mathcal P\mathcal H}$, then use the definitions of $\Xi,\Theta$ [step 1.6]. The two composites in clause 4(b) reduce to the routes of the strict naturality square $A(\mathcal F[0],\mathcal G[0],\mathcal H[0])\circ T(T(\alpha_{\mathcal F},\alpha_{\mathcal G}),\alpha_{\mathcal H})=T(\alpha_{\mathcal F},T(\alpha_{\mathcal G},\alpha_{\mathcal H}))\circ A(\mathcal P\mathcal F,\mathcal P\mathcal G,\mathcal P\mathcal H)$. This is an equality of cochain maps by strict associator naturality [F5]. Its degree-zero target map is the sheaf-level associator $\alpha_{\mathcal F,\mathcal G,\mathcal H}$ [F7, F11]. Applying $Q$ proves clause 4(b), without inverting any comparison $c$. [F1, F3, F4, F5, F7, F9, F11, step 1.6]

2.3 Let $u:\mathcal F^\bullet\to\mathcal F'^\bullet$ and $v:\mathcal G^\bullet\to\mathcal G'^\bullet$ be arbitrary morphisms of $D^-$; by the roof calculus [F13, F14] they are represented by left roofs $u=Q(h)Q(s)^{-1}$ and $v=Q(k)Q(t)^{-1}$ with quasi-isomorphism denominators $s:\mathcal V\to\mathcal F$, $t:\mathcal W\to\mathcal G$. The formula of [F3] gives $$(u\otimes^{\mathbf L}v)=Q(\operatorname{Tot}(\mathcal Ph\otimes_{\mathbb Z}\mathcal Pk))\circ Q(\operatorname{Tot}(\mathcal Ps\otimes_{\mathbb Z}\mathcal Pt))^{-1},\qquad (v\otimes^{\mathbf L}u)=Q(\operatorname{Tot}(\mathcal Pk\otimes_{\mathbb Z}\mathcal Ph))\circ Q(\operatorname{Tot}(\mathcal Pt\otimes_{\mathbb Z}\mathcal Ps))^{-1},$$ and the two denominator factors are invertible in $D^-$, since $\mathcal P s,\mathcal P t$ are quasi-isomorphisms and a quasi-isomorphism in either variable induces an isomorphism of derived tensor products [F1, F3, F9]. Naturality of $S$ [F5] applied to the cochain maps $\mathcal Ps,\mathcal Pt,\mathcal Ph,\mathcal Pk$ gives $S(\mathcal P\mathcal F',\mathcal P\mathcal G')\circ\operatorname{Tot}(\mathcal Ph\otimes\mathcal Pk)=\operatorname{Tot}(\mathcal Pk\otimes\mathcal Ph)\circ S(\mathcal P\mathcal V,\mathcal P\mathcal W)$ and $S(\mathcal P\mathcal F,\mathcal P\mathcal G)\circ\operatorname{Tot}(\mathcal Ps\otimes\mathcal Pt)=\operatorname{Tot}(\mathcal Pt\otimes\mathcal Ps)\circ S(\mathcal P\mathcal V,\mathcal P\mathcal W)$; the second rearranges, by invertibility of the two outer factors [F9], to $Q(\operatorname{Tot}(\mathcal Pt\otimes\mathcal Ps))^{-1}\circ Q(S(\mathcal P\mathcal F,\mathcal P\mathcal G))=Q(S(\mathcal P\mathcal V,\mathcal P\mathcal W))\circ Q(\operatorname{Tot}(\mathcal Ps\otimes\mathcal Pt))^{-1}$. Substituting this and the first identity into the two displayed composites shows $\sigma^{\mathbf L}(\mathcal F',\mathcal G')\circ(u\otimes^{\mathbf L}v)=(v\otimes^{\mathbf L}u)\circ\sigma^{\mathbf L}(\mathcal F,\mathcal G)$, so $\sigma^{\mathbf L}$ is natural in both variables; with [step 1.1] this proves clause 1. [F1, F3, F5, F9, F13, F14, step 1.1]

2.4 For a cochain map $f:\mathcal F\to\mathcal F'$, write $Z=\mathbb Z_X[0]$ and $T(C,D)=\operatorname{Tot}(C\otimes_{\mathbb Z}D)$. The defining left unitor is $\lambda^{\mathbf L}(\mathcal F)=Q(\alpha_{\mathcal F})\circ Q(\Lambda(\mathcal P\mathcal F))\circ Q(T(\alpha_Z,\operatorname{id}_{\mathcal P\mathcal F}))$ [step 1.3]. Naturality $\alpha_{\mathcal F'}\circ\mathcal P f=f\circ\alpha_{\mathcal F}$ [F1] and $\Lambda(\mathcal P\mathcal F')\circ T(\operatorname{id}_Z,\mathcal P f)=\mathcal P f\circ\Lambda(\mathcal P\mathcal F)$ [F5] give the typed equality $\lambda^{\mathbf L}(\mathcal F')\circ(\operatorname{id}_Z\otimes^{\mathbf L}Qf)=Qf\circ\lambda^{\mathbf L}(\mathcal F)$: the two middle squares are the naturality of $T(\alpha_Z,-)$ and of $\Lambda$. The analogous argument for the right unitor $\mathrm P$ gives $\rho^{\mathbf L}(\mathcal F')\circ(Qf\otimes^{\mathbf L}\operatorname{id}_Z)=Qf\circ\rho^{\mathbf L}(\mathcal F)$. If a derived morphism is represented by a left roof $Qh\circ Qs^{-1}$, apply each equality to $h$ and its quasi-isomorphism denominator $s$, then invert only the equality for $s$; the bifunctor [F3] sends $Qs$ to an isomorphism. This proves naturality of both unitors for arbitrary derived morphisms. [F1, F3, F5, F9, step 1.3]

2.5 By the form of [step 1.4] the unitor is $\lambda^{\mathbf L}(\mathbb Z_X[-q])=Q(\Lambda(\mathbb Z_X[-q])\circ\operatorname{Tot}(\alpha_{\mathbb Z[0]}\otimes\alpha_{\mathbb Z[-q]}))$. The cochain maps $\Lambda(\mathbb Z_X[-q])$ and $\kappa_{0,q}$ have the same source $\operatorname{Tot}(\mathbb Z_X[0]\otimes_{\mathbb Z}\mathbb Z_X[-q])$, the same target $\mathbb Z_X[-q]$, and the same only nonzero component, namely the unit identification in degree $q$: for $\kappa_{0,q}$ this is its definition, and for $\Lambda$ it holds because $\Lambda$ is the degreewise unitor [F5, F8] and $\mathbb Z_X[-q]$ has its only nonzero term in degree $q$ [F16]. Hence $\Lambda(\mathbb Z_X[-q])=\kappa_{0,q}$ and $\lambda^{\mathbf L}(\mathbb Z_X[-q])=Q(\kappa_{0,q}\circ\operatorname{Tot}(\alpha_{\mathbb Z[0]}\otimes\alpha_{\mathbb Z[-q]}))$. Composing with $\kappa(0,q)=Q(\operatorname{Tot}(\alpha_{\mathbb Z[0]}\otimes\alpha_{\mathbb Z[-q]}))^{-1}\circ Q(\kappa_{0,q}^{-1})$ and using functoriality of $Q$ [F9] gives $\lambda^{\mathbf L}(\mathbb Z_X[-q])\circ\kappa(0,q)=Q(\kappa_{0,q})\circ Q(\kappa_{0,q}^{-1})=Q(\operatorname{id})=\operatorname{id}$. The same argument with $\mathrm P(\mathbb Z_X[-q])=\kappa_{q,0}$ in place of $\Lambda$ gives $\rho^{\mathbf L}(\mathbb Z_X[-q])\circ\kappa(q,0)=\operatorname{id}$ [F5, F8, F16]. [F5, F8, F9, F16, step 1.4]

3.1 Write $T(B,C)=\operatorname{Tot}(B\otimes C)$ and $Z=\mathbb Z_X[0]$. The ordinary identities in clause 4(a) follow by applying $Q$ to [F6], with $Z$ as the actual unit. In particular no identification of $\mathcal PZ$ with $Z$ as complexes is used. A total tensor of bounded-above K-flat complexes $B,C$ is K-flat: for acyclic bounded-above $E$, the associator identifies $T(E,T(B,C))$ with $T(T(E,B),C)$, which is acyclic by K-flatness twice. This proves the closure needed below directly from [F5] and the definition of K-flatness; $Z$ is K-flat by [F17]. For a parenthesized derived tensor tree let $M_t$ be its chosen complex model and $B_t$ the corresponding ordinary tensor tree with nonunit leaves $\mathcal P\mathcal F_i$ and unit leaves $Z$. Construct cochain quasi-isomorphisms $b_t:\mathcal P M_t\to B_t$ recursively. At a nonunit leaf use the identity, and at a unit leaf use $\alpha_Z$. At an internal node with children $l,r$, set $M_t=T(\mathcal P M_l,\mathcal P M_r)$, $e_t=T(b_l,b_r):M_t\to B_t$ and $b_t=e_t\alpha_{M_t}$. Both tensor factors of the source and target are K-flat, so [F10] makes $e_t$ a quasi-isomorphism; then $b_t$ is one too. Naturality of $\alpha$ and of the ordinary structure maps makes the comparisons $Q(e_t)$ intertwine each derived associator or symmetry with the corresponding ordinary one: at a binary reassociation these are precisely the $\Theta,\Xi$ squares of step 2.1, and the same squares at an internal node extend the equality recursively. For the unit triangle, insert $\alpha_Z$ in the middle factor. Naturality of $A$ then reduces the two routes to the ordinary identity $$ T(\operatorname{id},\Lambda(\mathcal P\mathcal G))A(\mathcal P\mathcal F,Z,\mathcal P\mathcal G) =T(\mathrm P(\mathcal P\mathcal F),\operatorname{id}), $$ precomposed with $T(T(\operatorname{id},\alpha_Z),\operatorname{id})$; the remaining augmentations are exactly those in the definitions of $\lambda^{\mathbf L},\rho^{\mathbf L}$, and commute by their naturality. Consequently each derived pentagon, triangle and hexagon is conjugate by the invertible comparisons to an ordinary coherence diagram of [F6], so both routes agree. Involutivity likewise reduces to $S^2=1$. [F1, F5, F6, F9, F10, F17, step 1.6, step 2.1]

3.2 Let $u:\mathcal F^\bullet\to\mathcal F'^\bullet$ be a morphism of $D^-$ represented by a left roof $(s:\mathcal V\to\mathcal F,h:\mathcal V\to\mathcal F')$ with $s$ a quasi-isomorphism [F13, F14]. Bifunctoriality [F3] gives $((u\otimes^{\mathbf L}\operatorname{id}_{\mathcal G})\otimes^{\mathbf L}\operatorname{id}_{\mathcal H})=((h\otimes^{\mathbf L}\operatorname{id}_{\mathcal G})\otimes^{\mathbf L}\operatorname{id}_{\mathcal H})\circ((s\otimes^{\mathbf L}\operatorname{id}_{\mathcal G})\otimes^{\mathbf L}\operatorname{id}_{\mathcal H})^{-1}$ and $u\otimes^{\mathbf L}\operatorname{id}_{\mathcal G\otimes^{\mathbf L}\mathcal H}=(h\otimes^{\mathbf L}\operatorname{id}_{\mathcal G\otimes^{\mathbf L}\mathcal H})\circ(s\otimes^{\mathbf L}\operatorname{id}_{\mathcal G\otimes^{\mathbf L}\mathcal H})^{-1}$, the inverse factors being invertible because $s$ is a quasi-isomorphism [F3, F9]. Applying [step 2.1] to the cochain maps $h$ and $s$ gives $\alpha^{\mathbf L}(\mathcal F',\mathcal G,\mathcal H)\circ((h\otimes^{\mathbf L}\operatorname{id}_{\mathcal G})\otimes^{\mathbf L}\operatorname{id}_{\mathcal H})=(h\otimes^{\mathbf L}\operatorname{id}_{\mathcal G\otimes^{\mathbf L}\mathcal H})\circ\alpha^{\mathbf L}(\mathcal V,\mathcal G,\mathcal H)$ and $\alpha^{\mathbf L}(\mathcal F,\mathcal G,\mathcal H)\circ((s\otimes^{\mathbf L}\operatorname{id}_{\mathcal G})\otimes^{\mathbf L}\operatorname{id}_{\mathcal H})=(s\otimes^{\mathbf L}\operatorname{id}_{\mathcal G\otimes^{\mathbf L}\mathcal H})\circ\alpha^{\mathbf L}(\mathcal V,\mathcal G,\mathcal H)$, and the second inverts to $\alpha^{\mathbf L}(\mathcal V,\mathcal G,\mathcal H)\circ((s\otimes^{\mathbf L}\operatorname{id}_{\mathcal G})\otimes^{\mathbf L}\operatorname{id}_{\mathcal H})^{-1}=(s\otimes^{\mathbf L}\operatorname{id}_{\mathcal G\otimes^{\mathbf L}\mathcal H})^{-1}\circ\alpha^{\mathbf L}(\mathcal F,\mathcal G,\mathcal H)$. Substituting these into the composite proves $\alpha^{\mathbf L}(\mathcal F',\mathcal G,\mathcal H)\circ((u\otimes^{\mathbf L}\operatorname{id}_{\mathcal G})\otimes^{\mathbf L}\operatorname{id}_{\mathcal H})=(u\otimes^{\mathbf L}\operatorname{id}_{\mathcal G\otimes^{\mathbf L}\mathcal H})\circ\alpha^{\mathbf L}(\mathcal F,\mathcal G,\mathcal H)$, so $\alpha^{\mathbf L}$ is natural in the first variable; the other two variables are identical computations, and clause 3 follows with [step 1.6]. [F3, F9, F13, F14, step 2.1, step 1.6]

4.1 Clause 1 is [step 1.1] with [step 1.2] and [step 2.3]; clause 2 is [step 1.3], [step 1.4], [step 2.4], [step 1.5] and [step 2.5]; clause 3 is [step 1.6] with [step 2.1] and [step 3.2]; clause 4(a) is [step 3.1], clause 4(b) is [step 1.7] and [step 2.2], and clause 4(c) is [step 1.8]. No choice principle is used: the canonical replacement and its augmentation are choice-free [F1, F12], the structure maps $A,S,\Lambda,\mathrm P$ and $\alpha,\sigma,\lambda,\rho$ are the published canonical maps [F5, F6, F7, F8], and every morphism above is a composite of these with the localization functor [F9]. ∎ [F1, F5, F6, F7, F8, F9, F12, step 1.1, step 1.2, step 2.3, step 1.3, step 1.4, step 2.4, step 1.5, step 2.5, step 1.6, step 2.1, step 3.2, step 3.1, step 1.7, step 2.2, step 1.8]
