---
id: "lem-derived-tensor-product-of-abelian-sheaves"
kind: "lemma"
title: "Derived tensor product of abelian sheaves"
status: draft
origin: pipeline
deps: [def-topological-space, lem-abelian-sheaves-admit-bounded-above-flat-resolutions, lem-k-flat-abelian-sheaf-complexes-preserve-quasi-isomorphisms, lem-flatness-criteria-and-flat-covers-for-abelian-sheaves, def-tensor-product-of-abelian-sheaves, lem-stalks-and-colimits-of-the-abelian-sheaf-tensor-product, def-flat-abelian-sheaf, def-k-flat-complex-of-abelian-sheaves, def-derived-tensor-product-in-the-bounded-above-setting, def-derived-category-of-an-abelian-category, lem-quasi-isomorphisms-admit-the-roof-calculus-in-the-homotopy-category, thm-the-calculus-of-fractions-constructs-the-localization, def-localization-of-a-category-at-a-class-of-morphisms, prop-the-localization-functor-sends-quasi-isomorphisms-to-isomorphisms, def-multiplicative-system-in-a-category, def-left-roof-representing-a-localized-morphism, def-common-refinement-equivalence-of-roofs, lem-composition-of-roofs-is-well-defined, lem-addition-of-roofs-makes-an-additive-localization, prop-a-complex-is-zero-in-the-derived-category-exactly-when-it-is-acyclic, def-quasi-isomorphism, def-cohomology-object-of-a-cochain-complex, thm-a-chain-map-induces-a-well-defined-map-on-homology, thm-long-exact-sequence-in-homology, def-short-exact-sequence-of-complexes, def-cochain-map, def-cochain-complex-in-an-abelian-category, def-bounded-bounded-below-and-bounded-above-complex, def-exactness-of-a-complex-at-a-degree-and-acyclic-complex, def-kernel-cokernel-image-sheaves, thm-exactness-of-sheaves-stalkwise, thm-sheaf-morphism-isomorphism-stalkwise, def-stalk-of-presheaf, lem-abelian-sheaves-form-a-grothendieck-category, def-direct-sum-of-a-family-of-modules]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "The Stacks Project, Cohomology of Sheaves"
      url: https://stacks.math.columbia.edu/download/cohomology.pdf
      locator: "Definitions 26.2 and 26.14 and Lemmas 26.4, 26.9; derived tensor product of Section 26"
    - title: "The Stacks Project, Derived Categories"
      url: https://stacks.math.columbia.edu/download/derived.pdf
      locator: "Section 13.22 (K-flat complexes) and Section 13.26 (derived tensor product)"
---

## Statement

Let $X$ be a topological space, let $\mathrm{Ab}(X)$ be the abelian
category of sheaves of abelian groups on $X$, and let $\otimes_{\mathbb Z}$ and
$\operatorname{Tot}$ be as in [[def-tensor-product-of-abelian-sheaves]].

1. **(Functoriality of the canonical flat replacement.)** For every bounded-above
   cochain complex $\mathcal C^\bullet$ of abelian sheaves let
   $\alpha_{\mathcal C}:\mathcal P^\bullet(\mathcal C)\to\mathcal C^\bullet$ be the
   canonical bounded-above flat replacement of clause 1 of
   [[lem-abelian-sheaves-admit-bounded-above-flat-resolutions]]. Then there is a
   functor $\mathcal C\mapsto\mathcal P(\mathcal C)$ on bounded-above complexes and
   cochain maps with $\mathcal P(\operatorname{id})=\operatorname{id}$ and
   $\mathcal P(g\circ f)=\mathcal P(g)\circ\mathcal P(f)$, such that
   $\alpha$ is a natural transformation
   ($\alpha_{\mathcal D}\circ\mathcal P(f)=f\circ\alpha_{\mathcal C}$ for every
   cochain map $f:\mathcal C^\bullet\to\mathcal D^\bullet$), and
   $\mathcal P(f)$ is a quasi-isomorphism whenever $f$ is. No choice principle is
   used.

2. **(Derived tensor product.)** Under the standing smallness or supplied
   cofinal-denominator hypothesis of [[def-derived-category-of-an-abelian-category]],
   the assignments
   $$\mathcal F^\bullet\otimes^{\mathbf L}_{\mathbb Z}\mathcal G^\bullet :=\operatorname{Tot}\bigl(\mathcal P(\mathcal F)\otimes_{\mathbb Z}\mathcal P(\mathcal G)\bigr)$$
   on bounded-above complexes and, on left roofs
   $(\mathcal F\xleftarrow{\ s\ }\mathcal V\xrightarrow{\ h\ }\mathcal F')$ and
   $(\mathcal G\xleftarrow{\ t\ }\mathcal W\xrightarrow{\ k\ }\mathcal G')$ with
   $s,t$ quasi-isomorphisms,
   $$(s,h)\otimes(t,k):= Q\bigl(\operatorname{Tot}(\mathcal P h\otimes_{\mathbb Z}\mathcal P k)\bigr) \circ Q\bigl(\operatorname{Tot}(\mathcal P s\otimes_{\mathbb Z}\mathcal P t)\bigr)^{-1}$$
   define a bifunctor
   $$\otimes^{\mathbf L}_{\mathbb Z}:D^-(\mathrm{Ab}(X))\times D^-(\mathrm{Ab}(X)) \longrightarrow D^-(\mathrm{Ab}(X)),$$
   additive in each variable, with $u\otimes^{\mathbf L}\operatorname{id}$
   invertible in $D^-$ whenever $u$ is an isomorphism. In particular a
   quasi-isomorphism in either variable induces an isomorphism of derived tensor
   products.

3. **(Independence of flat replacements.)** Let
   $\mathcal K^\bullet\to\mathcal F^\bullet$ and
   $\mathcal L^\bullet\to\mathcal G^\bullet$ be bounded-above flat replacements,
   that is, cochain maps from bounded-above complexes of flat sheaves
   ([[def-flat-abelian-sheaf]]) that are quasi-isomorphisms. Then
   $Q\operatorname{Tot}(\mathcal K\otimes_{\mathbb Z}\mathcal L)$ is canonically
   isomorphic in $D^-(\mathrm{Ab}(X))$ to
   $\mathcal F^\bullet\otimes^{\mathbf L}_{\mathbb Z}\mathcal G^\bullet$: the
   canonical isomorphism is exhibited by the two quasi-isomorphisms with common
   source $\operatorname{Tot}(\mathcal P(\mathcal K)\otimes_{\mathbb Z}\mathcal P(\mathcal L))$,
   one induced by the canonical replacements $\mathcal P(\mathcal K)\to\mathcal K$,
   $\mathcal P(\mathcal L)\to\mathcal L$ of the given replacement complexes and the
   other by the functorial maps $\mathcal P(\kappa),\mathcal P(\lambda)$ of clause 1;
   these isomorphisms are compatible with the assignments of clause 2. In particular the derived tensor product does not depend on the
   chosen bounded-above flat replacements in either variable.

4. **(Comparison with the ordinary tensor product.)** For abelian sheaves
   $\mathcal F,\mathcal G$, read in degree zero, the morphisms
   $\alpha_{\mathcal F[0]},\alpha_{\mathcal G[0]}$ induce a morphism of complexes
   $$\operatorname{Tot}(\alpha_{\mathcal F[0]}\otimes_{\mathbb Z}\alpha_{\mathcal G[0]}) :\operatorname{Tot}\bigl(\mathcal P(\mathcal F[0])\otimes_{\mathbb Z}\mathcal P(\mathcal G[0])\bigr) \longrightarrow\mathcal F\otimes_{\mathbb Z}\mathcal G,$$
   the target being concentrated in degree zero
   ([[def-tensor-product-of-abelian-sheaves]]), hence a morphism
   $$c_{\mathcal F,\mathcal G}:\mathcal F\otimes^{\mathbf L}_{\mathbb Z}\mathcal G \longrightarrow\mathcal F\otimes_{\mathbb Z}\mathcal G$$
   in $D^-(\mathrm{Ab}(X))$. This comparison is natural in $\mathcal F$ and
   $\mathcal G$, and the map it induces on $H^0$ is an isomorphism
   $$H^0\bigl(\mathcal F\otimes^{\mathbf L}_{\mathbb Z}\mathcal G\bigr) \xrightarrow{\ \sim\ }\mathcal F\otimes_{\mathbb Z}\mathcal G.$$

5. **(Stalks.)** For every $x\in X$ the chosen representative of the derived tensor
   product has stalk canonically isomorphic to the module-level total complex of
   the stalk replacements,
   $$\bigl(\operatorname{Tot}(\mathcal P(\mathcal F)\otimes_{\mathbb Z}\mathcal P(\mathcal G))\bigr)_x \cong\operatorname{Tot}\bigl(\mathcal P(\mathcal F)^\bullet_x\otimes_{\mathbb Z}\mathcal P(\mathcal G)^\bullet_x\bigr),$$
   where $\mathcal P(\mathcal F)^\bullet_x\to\mathcal F^\bullet_x$ is a
   bounded-above flat replacement of the stalk complex; consequently
   $H^n(\mathcal F^\bullet\otimes^{\mathbf L}_{\mathbb Z}\mathcal G^\bullet)_x$ is
   the $n$th cohomology of that module-level total complex, the computation of
   [[def-derived-tensor-product-in-the-bounded-above-setting]].

## Facts & Assumptions

[F1] The canonical replacement of clause 1 of [[lem-abelian-sheaves-admit-bounded-above-flat-resolutions]] is a bounded-above, termwise stalk-surjective quasi-isomorphism out of a bounded-above complex of flat sheaves.

[F2] The replacement $\mathcal P^\bullet(\mathcal C)$ and its augmentation $\alpha_{\mathcal C}$ are canonically determined by $\mathcal C^\bullet$, being built from the canonical flat covers of the covering flat sheaf construction, so no choice principle enters ([[lem-abelian-sheaves-admit-bounded-above-flat-resolutions]]).

[F3] For every abelian sheaf $\mathcal F$, the reduced covering flat sheaf $G_{\mathrm{red}}(\mathcal F)=\bigoplus_{(U,s),\,s\ne0}j_{U!}\mathbb Z_U$ with its canonical flat epimorphism $\Phi_{\mathcal F}:G_{\mathrm{red}}(\mathcal F)\to\mathcal F$ is the nonzero-section direct summand used by [[lem-abelian-sheaves-admit-bounded-above-flat-resolutions]], clause 1; its full covering flat sheaf supplier is [[lem-flatness-criteria-and-flat-covers-for-abelian-sheaves]].

[F4] A bounded-above complex $\mathcal K^\bullet$ of flat abelian sheaves is K-flat ([[lem-abelian-sheaves-admit-bounded-above-flat-resolutions]], clause 2).

[F5] If $\mathcal K^\bullet$ is K-flat and $s:\mathcal A^\bullet\to\mathcal B^\bullet$ is a quasi-isomorphism of bounded-above complexes, then $\operatorname{Tot}(s\otimes\operatorname{id}_{\mathcal K})$ is a quasi-isomorphism ([[lem-k-flat-abelian-sheaf-complexes-preserve-quasi-isomorphisms]], clause 1).

[F6] The same holds with the K-flat factor on the left: a K-flat bounded-above complex $\mathcal K^\bullet$ and a quasi-isomorphism $s$ give a quasi-isomorphism $\operatorname{Tot}(\operatorname{id}_{\mathcal K}\otimes s)$ ([[lem-k-flat-abelian-sheaf-complexes-preserve-quasi-isomorphisms]], clause 2).

[F7] For sheaves $\mathcal F,\mathcal G$ concentrated in degree zero the tensor-product total complex is $\mathcal F\otimes_{\mathbb Z}\mathcal G$ in degree zero with zero terms elsewhere ([[def-tensor-product-of-abelian-sheaves]]).

[F8] A cochain map is a quasi-isomorphism when its induced maps on cohomology are isomorphisms in every degree ([[def-quasi-isomorphism]]).

[F9] The $n$th cocycle and coboundary subobjects of a cochain complex are $Z^n(C)=\ker(d^n)\hookrightarrow C^n$ and $B^n(C)=\operatorname{im}(d^{n-1})\hookrightarrow C^n$, and $H^n(C)=\operatorname{coker}(B^n(C)\to Z^n(C))=Z^n(C)/B^n(C)$ ([[def-cohomology-object-of-a-cochain-complex]]).

[F10] The kernel sheaf of a morphism of abelian sheaves is the subsheaf defined objectwise, with the universal property of a kernel ([[def-kernel-cokernel-image-sheaves]]).

[F11] The category $\mathrm{Ab}(X)$ is locally small and cocomplete (AB3), so coproducts of abelian sheaves and their universal property are available ([[lem-abelian-sheaves-form-a-grothendieck-category]]).

[F12] Quasi-isomorphisms satisfy the Ore axiom: given $f:U\to Y$ and $t:V\to Y$ in the system $S$ there exist $a:W\to U$ in $S$ and $b:W\to V$ with $fa=tb$ ([[def-multiplicative-system-in-a-category]]).

[F13] In the cochain homotopy category $K(\mathcal A)$ of an abelian category, quasi-isomorphisms form a two-sided multiplicative system, and the same holds in $K^-$ ([[lem-quasi-isomorphisms-admit-the-roof-calculus-in-the-homotopy-category]]).

[F14] A left roof $(s,f)$ with $s:U\to X$ in $S$ and $f:U\to Y$ has intended localized value $Q(f)Q(s)^{-1}$ ([[def-left-roof-representing-a-localized-morphism]]).

[F15] Two left roofs are common-refinement equivalent when there are $a:V\to U$, $b:V\to U'$ with $sa=tb\in S$ and $fa=gb$ ([[def-common-refinement-equivalence-of-roofs]]).

[F16] The composite of the roofs $(s,f)$ and $(t,g)$ is the class of $(sa,gb)$ for an Ore square $fa=tb$; it is independent of the representatives and the square, associative, with identity roof $(1_X,1_X)$ ([[lem-composition-of-roofs-is-well-defined]]).

[F17] Addition of left roofs by a common denominator makes the localization $S^{-1}\mathcal C$ additive, and composition there is bilinear ([[lem-addition-of-roofs-makes-an-additive-localization]]).

[F18] For every quasi-isomorphism $s$, $Q(s)$ is invertible in the derived category ([[prop-the-localization-functor-sends-quasi-isomorphisms-to-isomorphisms]]).

[F19] $D^-$ is the localization of the termwise bounded-above homotopy category at the quasi-isomorphisms ([[def-derived-category-of-an-abelian-category]]).

[F20] For bounded-above complexes the stalk of the tensor-product total complex is canonically isomorphic to the module-level total complex of the stalks ([[lem-stalks-and-colimits-of-the-abelian-sheaf-tensor-product]], clause 3).

[F21] An abelian sheaf is flat when its stalk is a flat $\mathbb Z$-module at every point ([[def-flat-abelian-sheaf]]).

[F22] The sheaf tensor product is right exact in each variable: a short exact sequence $0\to\mathcal G'\to\mathcal G\to\mathcal G''\to0$ gives an exact sequence $\mathcal F\otimes\mathcal G'\to\mathcal F\otimes\mathcal G\to\mathcal F\otimes\mathcal G''\to0$; injectivity of the first tensor map is not asserted ([[lem-stalks-and-colimits-of-the-abelian-sheaf-tensor-product]], clause 4).

[F23] A complex becomes a zero object in the derived category exactly when all its cohomology objects vanish ([[prop-a-complex-is-zero-in-the-derived-category-exactly-when-it-is-acyclic]]).

[F24] A complex is acyclic when it is exact at every degree ([[def-exactness-of-a-complex-at-a-degree-and-acyclic-complex]]).

[F25] The maps induced on cohomology are compatible with composition: $H^n(g\circ f)=H^n(g)\circ H^n(f)$ and $H^n(\operatorname{id})=\operatorname{id}$, by the uniqueness in [[thm-a-chain-map-induces-a-well-defined-map-on-homology]].

[F26] Cochain maps are the morphisms commuting with the differentials, $d_D^n\circ f^n=f^{n+1}\circ d_C^n$ ([[def-cochain-map]]).

[F27] A bounded-above complex is bounded above in the sense that $\mathcal C^n=0$ for all $n\gg0$ ([[def-bounded-bounded-below-and-bounded-above-complex]]).

[F28] A sequence of sheaves is exact exactly when its stalk sequence is exact at every point, so acyclicity of a complex of sheaves is a stalkwise condition ([[thm-exactness-of-sheaves-stalkwise]]).

## Proof

**Given:** The canonical replacement of clause 1 of [[lem-abelian-sheaves-admit-bounded-above-flat-resolutions]] is constructed by descending induction: in degree $n-1$ one forms the kernel $\mathcal Q$ of the difference morphism $\mathcal C^{n-1}\oplus\ker(d_{\mathcal P}^n)\to\mathcal C^n$ and puts $\mathcal P^{n-1}:=G_{\mathrm{red}}(\mathcal Q)$ with cover $\Phi_{\mathcal Q}$, where $G_{\mathrm{red}}(\mathcal Q)=\bigoplus_{(U,s),\,s\ne0}j_{U!}\mathbb Z_U$ uses only nonzero sections $s\in\mathcal Q(U)$; this recorded construction is used throughout, while the quoted facts supply existence, flatness, stalk-surjectivity, the quasi-isomorphism property and canonicity.

**Proof technique:** direct.

1.1 Let $f:\mathcal C^\bullet\to\mathcal D^\bullet$ be a cochain map of bounded-above complexes and fix $a$ with $\mathcal C^j=\mathcal D^j=0$ for every $j>a$ ([[def-bounded-bounded-below-and-bounded-above-complex]]). In degrees $j>a$ both canonical replacement complexes vanish by the construction of [F1], so declaring $\mathcal P^j(f)$ to be the zero map is the unique map between zero objects; the cochain identity ([[def-cochain-map]]) and the augmentation identity hold there because all four maps involved are zero, and the same trivial assignment shows the identity and composition laws in those degrees. [F1, F2, F27] [given]

1.2 Assume the maps $\mathcal P^j(f)$, $j\ge n$, have been constructed with $\alpha_{\mathcal D}^j\circ\mathcal P^j(f)=f^j\circ\alpha_{\mathcal C}^j$ and $d_{\mathcal D}^j\circ\mathcal P^j(f)=\mathcal P^{j+1}(f)\circ d_{\mathcal C}^j$ for all $j\ge n$, and assume the analogous data for identities and composites. Put $\mathcal K_{\mathcal P}(\mathcal C):=\ker(d_{\mathcal P}^n)$, $\mathcal K_{\mathcal P}(\mathcal D):=\ker(d_{\mathcal P}^n)$, $\mathcal K_{\mathcal C}:=\ker(d_{\mathcal C}^n)$ and $\mathcal K_{\mathcal D}:=\ker(d_{\mathcal D}^n)$ ([[def-kernel-cokernel-image-sheaves]]). The cochain identity in degree $n$ makes $\mathcal P^n(f)$ restrict to a morphism $\mathcal K_{\mathcal P}(\mathcal C)\to\mathcal K_{\mathcal P}(\mathcal D)$, and $f^n$ restrict to $\mathcal K_{\mathcal C}\to\mathcal K_{\mathcal D}$; these restrictions are unique, since the kernel inclusion is a monomorphism and the composite with it is prescribed. The morphism $\delta_{\mathcal C}:\mathcal C^{n-1}\oplus\mathcal K_{\mathcal P}(\mathcal C)\to\mathcal C^n$ whose components are $d_{\mathcal C}^{n-1}$ and the negative of the restriction of $\alpha_{\mathcal C}^n$ and the analogous morphism $\delta_{\mathcal D}$ commute with $f^{n-1}\oplus\mathcal P^n(f)$ restricted to these kernels, because the two components do; hence there is a morphism $\varphi:\mathcal Q(\mathcal C):=\ker\delta_{\mathcal C}\to\ker\delta_{\mathcal D}=:\mathcal Q(\mathcal D)$ of the kernels, again unique. [F1, F10, F26, given] [given]

1.3 For a morphism $\varphi:\mathcal Q\to\mathcal Q'$ of abelian sheaves, send the summand of $G_{\mathrm{red}}(\mathcal Q)$ indexed by $(U,s)$ through the identity of $j_{U!}\mathbb Z_U$ to the $(U,\varphi_U(s))$ summand of $G_{\mathrm{red}}(\mathcal Q')$ when $\varphi_U(s)\ne0$, and by the zero morphism when $\varphi_U(s)=0$. The coproduct universal property ([[lem-abelian-sheaves-form-a-grothendieck-category]]) defines $G_{\mathrm{red}}(\varphi)$. The covering map on that summand sends $g\in(j_{U!}\mathbb Z_U)(V)$ to the gluing of $g\cdot s$ on $V\cap U$ and zero on $V\setminus\operatorname{Supp}(g)$ [F3]. Applying $\varphi$ before or after this gluing gives respectively the gluing of $g\cdot\varphi(s)$ and zero, including when $\varphi(s)=0$; uniqueness of gluing yields $\Phi_{\mathcal Q'}\circ G_{\mathrm{red}}(\varphi)=\varphi\circ\Phi_{\mathcal Q}$. On each source summand, a composite targets the final nonzero-image summand exactly when both successive images are nonzero, and is zero otherwise; thus $G_{\mathrm{red}}(\operatorname{id})=\operatorname{id}$ and $G_{\mathrm{red}}(\psi\circ\varphi)=G_{\mathrm{red}}(\psi)\circ G_{\mathrm{red}}(\varphi)$. [F3, F11] [algebra]

2.1 Define $\mathcal P^{n-1}(f)$ to be the morphism $G_{\mathrm{red}}(\varphi)$ attached in step 1.3 to the morphism $\varphi$ of step 1.2. Writing $\alpha^{n-1}=\pi_1\circ\Phi$ and $d_{\mathcal P}^{n-1}=\iota\circ\pi_2\circ\Phi$ for the two structure maps of the construction, step 1.3 gives $\alpha_{\mathcal D}^{n-1}\circ\mathcal P^{n-1}(f)=\pi_1^{\mathcal D}\circ\varphi\circ\Phi_{\mathcal Q(\mathcal C)}=f^{n-1}\circ\alpha_{\mathcal C}^{n-1}$, because $\varphi$ was defined by its two components $f^{n-1}$ and the restriction of $\mathcal P^n(f)$; the same substitution gives $d_{\mathcal P}^{n-1}\circ\mathcal P^{n-1}(f)=\mathcal P^n(f)\circ d_{\mathcal P}^{n-1}$. Hence the two identities extend to degree $n-1$, and descending induction from step 1.1 constructs a cochain map $\mathcal P(f):\mathcal P(\mathcal C)\to\mathcal P(\mathcal D)$ for every $f$. [F26, steps step 1.1, step 1.2, step 1.3] [algebra]

3.1 The induction is unambiguous: at each stage the morphism on the complexes $\mathcal Q$ is unique, as recorded in step 1.2, and the morphism on the covering flat sheaves is then determined by step 1.3. Taking $f=\operatorname{id}$ gives the identity morphism on $\mathcal Q$ at every stage by uniqueness, hence $\mathcal P(\operatorname{id})=\operatorname{id}$ since $G_{\mathrm{red}}(\operatorname{id})=\operatorname{id}$; for composable cochain maps the induced morphisms on the complexes $\mathcal Q$ compose by uniqueness, so $\mathcal P(g\circ f)=\mathcal P(g)\circ\mathcal P(f)$. The augmentation identity produced in step 2.1 is exactly the naturality of $\alpha$, so clause 1 holds: $\mathcal P$ is a functor on bounded-above complexes, $\alpha$ is a natural transformation, and no selection occurs beyond the canonical covers of step 1.3. [F1, F2, F3, steps step 1.2, step 1.3, step 2.1] [algebra]

3.2 If $f$ is a quasi-isomorphism, then so is $\mathcal P(f)$: applying the functor $H^n$ to the naturality identity of step 2.1 gives $H^n(\alpha_{\mathcal D})\circ H^n(\mathcal P f)=H^n(f)\circ H^n(\alpha_{\mathcal C})$ ([[thm-a-chain-map-induces-a-well-defined-map-on-homology]], whose maps are compatible with composition), and the three outer maps are isomorphisms because $\alpha_{\mathcal C},\alpha_{\mathcal D}$ [F1] and $f$ are quasi-isomorphisms [F8]; hence $H^n(\mathcal P f)$ is an isomorphism for every $n$ and $\mathcal P(f)$ is a quasi-isomorphism [F8]. [F1, F8, F25, step step 2.1] [algebra]

3.3 The construction respects cochain homotopy before roof localization, although the canonical replacement functor need not itself preserve a chosen homotopy. If $f,g:\mathcal C\to\mathcal D$ are homotopic, then $(f-g)\alpha_{\mathcal C}$ is null-homotopic. Naturality gives $\alpha_{\mathcal D}(\mathcal P f-\mathcal P g)=(f-g)\alpha_{\mathcal C}$ [step 2.1], so after tensoring with the flat replacement $\mathcal P\mathcal E$ the composite of $\operatorname{Tot}((\mathcal P f-\mathcal P g)\otimes\operatorname{id}_{\mathcal P\mathcal E})$ with $\operatorname{Tot}(\alpha_{\mathcal D}\otimes\operatorname{id}_{\mathcal P\mathcal E})$ is null-homotopic. The latter map is a quasi-isomorphism because $\mathcal P\mathcal E$ is K-flat [F1, F4, F5], hence invertible in $D^-$ [F18]; therefore the former map is zero in $D^-$. The analogous argument in the second variable, or the symmetry of total tensor, gives the same conclusion there. Thus homotopic representatives of either input chain map induce equal derived tensor morphisms. Equalities of roof legs in the homotopy category may consequently be used after applying $\mathcal P$ and total tensor as equalities in $D^-$. [F1, F4, F5, F18, step 2.1] [algebra]

4.1 Let $s:\mathcal A^\bullet\to\mathcal B^\bullet$ and $t:\mathcal C^\bullet\to\mathcal D^\bullet$ be quasi-isomorphisms of bounded-above complexes and let $\mathcal E^\bullet$ be a bounded-above complex. By step 3.2 the maps $\mathcal P(s),\mathcal P(t)$ are quasi-isomorphisms, and $\mathcal P(\mathcal E)$ is a bounded-above complex of flat sheaves [F1], hence K-flat [F4]; therefore $\operatorname{Tot}(\mathcal P s\otimes\operatorname{id}_{\mathcal P\mathcal E})$ and $\operatorname{Tot}(\operatorname{id}_{\mathcal P\mathcal E}\otimes\mathcal P t)$ are quasi-isomorphisms [F5, F6], as is their composite $\operatorname{Tot}(\mathcal P s\otimes\mathcal P t)$ in the variables of the first two complexes. Consequently $Q$ carries each of these maps to an isomorphism of $D^-$ [F18, F19]. [F1, F4, F5, F6, F18, F19, step step 3.2] [algebra]

4.2 The bifunctor is additive in each variable. First, for cochain maps $f,g:\mathcal R\to\mathcal F'$ and a cochain map $k:\mathcal W\to\mathcal G'$ the complex map $\operatorname{Tot}\bigl((\mathcal P(f+g)-\mathcal P(f)-\mathcal P(g))\otimes\mathcal P k\bigr)$ is zero in $D^-$. Indeed $D:=\mathcal P(f+g)-\mathcal P(f)-\mathcal P(g)$ satisfies $\alpha_{\mathcal F'}\circ D=(f+g)\circ\alpha_{\mathcal R}-f\circ\alpha_{\mathcal R}-g\circ\alpha_{\mathcal R}=0$ by naturality (step 2.1, step 3.1), so $D=\iota\circ u$ factors through the kernel $\mathcal K:=\ker(\alpha_{\mathcal F'})$ ([[def-kernel-cokernel-image-sheaves]]); the complex $\mathcal K$ is acyclic in the sense of [F24], because the short exact sequence of complexes $0\to\mathcal K\to\mathcal P(\mathcal F')\xrightarrow{\alpha}\mathcal F'\to0$ has an exact long cohomology sequence ([[thm-long-exact-sequence-in-homology]]) in which the maps $H^n(\mathcal P(\mathcal F'))\to H^n(\mathcal F')$ are isomorphisms [F1, F8], forcing every $H^n(\mathcal K)$ to vanish; here termwise exactness uses the stalk surjectivity of $\alpha$ [F1] and stalkwise exactness [F28]. Since $\mathcal P(\mathcal G')$ is a bounded-above complex of flat sheaves [F1] and hence K-flat [F4], $\operatorname{Tot}(\mathcal K\otimes\mathcal P(\mathcal G'))$ is acyclic, so it is a zero object of $D^-$ [F23]; bifunctoriality of the total complex gives $\operatorname{Tot}(D\otimes\mathcal P k)=\operatorname{Tot}(\iota\otimes\operatorname{id})\circ\operatorname{Tot}(u\otimes\mathcal P k)$, and a composite through a zero object is zero. Now let two morphisms $\mathcal F\to\mathcal F'$ be represented by left roofs with a common denominator $r:\mathcal R\to\mathcal F$ and numerators $ha$, $h'b$ as in [[lem-addition-of-roofs-makes-an-additive-localization]]; their sum is represented by the roof $(r,ha+h'b)$, and subtracting the two summands gives the complex map just computed to be zero in $D^-$, so $(u+u')\otimes v=u\otimes v+u'\otimes v$; the denominator factor is literally the same on all three sides, so composition by its inverse is additive. Exchanging the variables gives additivity in the second variable. [F1, F4, F8, F10, F16, F17, F23, F28, steps step 2.1, step 3.1] [algebra]

5.1 Let $(s:\mathcal V\to\mathcal F,\,h:\mathcal V\to\mathcal F')$ and $(t:\mathcal W\to\mathcal G,\,k:\mathcal W\to\mathcal G')$ be left roofs whose denominators are quasi-isomorphisms ([[def-left-roof-representing-a-localized-morphism]]); quasi-isomorphisms form a two-sided multiplicative system in $K^-$ [F13], so these roofs represent morphisms $u=Q(h)Q(s)^{-1}$ and $v=Q(k)Q(t)^{-1}$ of $D^-$ [F14, F19]. By step 4.1 the morphism $Q(\operatorname{Tot}(\mathcal P s\otimes\mathcal P t))$ is invertible in $D^-$, so $$\Theta(h,s,k,t):=Q\bigl(\operatorname{Tot}(\mathcal P h\otimes\mathcal P k)\bigr)\circ Q\bigl(\operatorname{Tot}(\mathcal P s\otimes\mathcal P t)\bigr)^{-1}$$ is a morphism $\mathcal F\otimes^{\mathbf L}_{\mathbb Z}\mathcal G\to\mathcal F'\otimes^{\mathbf L}_{\mathbb Z}\mathcal G'$ in $D^-$. [step step 4.1, F19] [given]

5.2 The map induced by $c_{\mathcal F,\mathcal G}$ on $H^0$ is an isomorphism. The complex $\operatorname{Tot}(\mathcal P(\mathcal F[0])\otimes\mathcal P(\mathcal G[0]))$ has $n$th term $\bigoplus_{i+j=n}\mathcal P^i(\mathcal F[0])\otimes\mathcal P^j(\mathcal G[0])$ [F7]; the cochain map $\operatorname{Tot}(\operatorname{id}\otimes\alpha_{\mathcal G[0]})$ into $\operatorname{Tot}(\mathcal P(\mathcal F[0])\otimes\mathcal G[0])$ is a quasi-isomorphism by step 4.1, because $\mathcal P(\mathcal F[0])$ is a K-flat bounded-above complex of flat sheaves [F1, F4], so it suffices to identify $H^0$ of the second complex. Its $n$th term is $\mathcal P^n(\mathcal F[0])\otimes_{\mathbb Z}\mathcal G$ with differential $d_{\mathcal P}^n\otimes\operatorname{id}$, and all terms vanish for $n>0$ because $\mathcal P(\mathcal F[0])$ is the canonical replacement of a complex concentrated in degree zero; hence $H^0=\operatorname{coker}\bigl(d_{\mathcal P}^{-1}\otimes\operatorname{id}_{\mathcal G}\bigr)$ [F9]. The augmentation $\alpha_{\mathcal F[0]}^0:\mathcal P^0(\mathcal F[0])\to\mathcal F$ is an epimorphism with kernel $\operatorname{im}(d_{\mathcal P}^{-1})$, since $H^0(\alpha)$ is an isomorphism between $\mathcal P^0(\mathcal F[0])/\operatorname{im}(d^{-1})$ and $H^0(\mathcal F[0])=\mathcal F$ [F8, F9]; applying the right exact functor $-\otimes_{\mathbb Z}\mathcal G$ to the right-exact sequence $\mathcal P^{-1}(\mathcal F[0])\xrightarrow{d^{-1}}\mathcal P^0(\mathcal F[0])\xrightarrow{\alpha^0}\mathcal F\to0$ [F22] gives $\operatorname{coker}(d_{\mathcal P}^{-1}\otimes\operatorname{id}_{\mathcal G})\cong\mathcal F\otimes_{\mathbb Z}\mathcal G$. The composite $c_{\mathcal F,\mathcal G}=\operatorname{Tot}(\alpha\otimes\operatorname{id})\circ\operatorname{Tot}(\operatorname{id}\otimes\alpha)$ therefore induces an isomorphism on $H^0$. [F1, F4, F7, F8, F9, F22, step step 4.1] [algebra]

6.1 Let the first roof be common-refinement equivalent to a roof $(s':\mathcal V'\to\mathcal F,h':\mathcal V'\to\mathcal F')$ through legs $a:\mathcal R\to\mathcal V$, $b:\mathcal R\to\mathcal V'$ with $sa=s'b\in S$ and $ha=h'b$, and similarly let the second roof be equivalent to $(t',k')$ through legs $c:\mathcal S\to\mathcal W$, $d:\mathcal S\to\mathcal W'$ with $tc=t'd$, $kc=k'd$ ([[def-common-refinement-equivalence-of-roofs]]). Write $H:=\operatorname{Tot}(\mathcal P h\otimes\mathcal P k)$, $S:=\operatorname{Tot}(\mathcal P s\otimes\mathcal P t)$, $H':=\operatorname{Tot}(\mathcal P h'\otimes\mathcal P k')$, $S':=\operatorname{Tot}(\mathcal P s'\otimes\mathcal P t')$, $A:=\operatorname{Tot}(\mathcal P a\otimes\mathcal P c)$ and $B:=\operatorname{Tot}(\mathcal P b\otimes\mathcal P d)$. Functoriality of $\mathcal P$ (step 3.1) and of the total complex give $SA=\operatorname{Tot}(\mathcal P(sa)\otimes\mathcal P(tc))=\operatorname{Tot}(\mathcal P(s'b)\otimes\mathcal P(t'd))=S'B$ and $HA=\operatorname{Tot}(\mathcal P(ha)\otimes\mathcal P(kc))=\operatorname{Tot}(\mathcal P(h'b)\otimes\mathcal P(k'd))=H'B$. The composites $sa=s'b$ and $tc=t'd$ are quasi-isomorphisms; since $s,s',t,t'$ are quasi-isomorphisms, two-out-of-three shows that $a,b,c,d$ are quasi-isomorphisms, and step 4.1 makes $Q(A)$ and $Q(B)$ invertible. The equalities of common-refinement legs hold in the homotopy category, and remain equal in $D^-$ after total tensor by step 3.3. Since $Q(S')$ and $Q(B)$ are invertible, $Q(S)=Q(S')Q(B)Q(A)^{-1}$, so $Q(H)Q(S)^{-1}=Q(HA)Q(B)^{-1}Q(S')^{-1}=Q(H'B)Q(B)^{-1}Q(S')^{-1}=Q(H')Q(S')^{-1}$; that is, $\Theta(h,s,k,t)=\Theta(h',s',k',t')$. Hence $\Theta$ depends only on the two classes, that is, on the morphisms $u$ and $v$ of $D^-$. [F15, F18, steps step 3.1, step 5.1] [algebra]

7.1 The identity morphism of a complex is the class of the roof $(\operatorname{id},\operatorname{id})$ [F16], and $\Theta$ of that roof is $Q(\operatorname{Tot}(\operatorname{id}\otimes\operatorname{id}))\circ Q(\operatorname{Tot}(\operatorname{id}\otimes\operatorname{id}))^{-1}=\operatorname{id}$ because $\mathcal P(\operatorname{id})=\operatorname{id}$ (step 3.1). If $u'$ has roof $(s',h')$ with $s'$ a quasi-isomorphism into the target of $u$, the composite $u'\circ u$ is the class of the roof $(sa,h'b)$ for an Ore square $ha=s'b$, which exists by the Ore axiom [F12, F16]; substituting $Q(H'A)=Q(H'B)$ and $Q(S A)=Q(S'B)$ with $A:=\operatorname{Tot}(\mathcal P a\otimes\mathcal P c)$, $B:=\operatorname{Tot}(\mathcal P b\otimes\mathcal P d)$ for the chosen refinements in both variables gives, exactly as in step 6.1, $\Theta(\text{composite roof})=\Theta(h',s',k',t')\circ\Theta(h,s,k,t)$. Hence the assignment of step 5.1 preserves identities and composition and defines a bifunctor $D^-(\mathrm{Ab}(X))\times D^-(\mathrm{Ab}(X))\to D^-(\mathrm{Ab}(X))$. [F16, F18, steps step 6.1, step 5.1] [algebra]

7.2 Let $\kappa:\mathcal K^\bullet\to\mathcal F^\bullet$ and $\lambda:\mathcal L^\bullet\to\mathcal G^\bullet$ be bounded-above flat replacements. By step 3.1 and step 3.2 the induced maps $\mathcal P(\kappa):\mathcal P(\mathcal K)\to\mathcal P(\mathcal F)$ and $\mathcal P(\lambda):\mathcal P(\mathcal L)\to\mathcal P(\mathcal G)$ are quasi-isomorphisms between bounded-above complexes of flat sheaves [F1], hence so are the maps $\operatorname{Tot}(\mathcal P\kappa\otimes\operatorname{id})$, $\operatorname{Tot}(\operatorname{id}\otimes\mathcal P\lambda)$, $\operatorname{Tot}(\alpha_{\mathcal K}\otimes\operatorname{id})$ and $\operatorname{Tot}(\operatorname{id}\otimes\alpha_{\mathcal L})$ by step 4.1. Composing the last two gives a quasi-isomorphism $\operatorname{Tot}(\mathcal P(\mathcal K)\otimes\mathcal P(\mathcal L))\to\operatorname{Tot}(\mathcal K\otimes\mathcal L)$ and composing the first two gives a quasi-isomorphism $\operatorname{Tot}(\mathcal P(\mathcal K)\otimes\mathcal P(\mathcal L))\to\operatorname{Tot}(\mathcal P(\mathcal F)\otimes\mathcal P(\mathcal G))$; both become isomorphisms under $Q$ [F18, F19], so $Q\operatorname{Tot}(\mathcal K\otimes\mathcal L)$ is canonically isomorphic in $D^-$ to $\mathcal F^\bullet\otimes^{\mathbf L}_{\mathbb Z}\mathcal G^\bullet$. The zig-zag is built from the canonical replacements alone, and replacing the roof data by a common refinement changes it only by the comparisons of step 6.1, so the isomorphism is compatible with the assignments of clause 2. [F1, F18, F19, steps step 4.1, step 3.2, step 6.1] [construct]

7.3 Now let $\mathcal F,\mathcal G$ be abelian sheaves, read as complexes concentrated in degree zero. The maps $\alpha_{\mathcal F[0]}$ and $\alpha_{\mathcal G[0]}$ are cochain maps, so their tensor product is a cochain map $\operatorname{Tot}(\alpha_{\mathcal F[0]}\otimes\alpha_{\mathcal G[0]})$ whose target is $\operatorname{Tot}(\mathcal F[0]\otimes_{\mathbb Z}\mathcal G[0])=\mathcal F\otimes_{\mathbb Z}\mathcal G$ concentrated in degree zero [F7]; write $c_{\mathcal F,\mathcal G}$ for the morphism it defines in $D^-$. For a morphism $\varphi:\mathcal F\to\mathcal G$ of abelian sheaves the naturality of $\alpha$ (step 2.1) gives $\alpha_{\mathcal G[0]}\circ\mathcal P(\varphi)=\varphi\circ\alpha_{\mathcal F[0]}$, and the same identity with the second variable gives $\operatorname{Tot}(\alpha\otimes\alpha)\circ\operatorname{Tot}(\mathcal P\varphi\otimes\operatorname{id})=\operatorname{Tot}(\varphi\otimes\operatorname{id})\circ\operatorname{Tot}(\alpha\otimes\alpha)$; combined with step 6.1 this says that $c$ is natural in each variable. [F7, F26, steps step 2.1, step 6.1] [construct]

8.1 For $x\in X$ the stalk of the chosen representative is canonically isomorphic to the module-level total complex of the stalk replacements, $$\bigl(\operatorname{Tot}(\mathcal P(\mathcal F)\otimes_{\mathbb Z}\mathcal P(\mathcal G))\bigr)_x\cong \operatorname{Tot}\bigl(\mathcal P(\mathcal F)^\bullet_x\otimes_{\mathbb Z}\mathcal P(\mathcal G)^\bullet_x\bigr),$$ by the stalk computation for the tensor-product total complex [F20]. Each $\mathcal P^n(\mathcal F)$ is flat [F1], so its stalk $\mathcal P^n(\mathcal F)_x$ is a flat $\mathbb Z$-module [F21], and these stalks vanish for $n\gg0$ because $\mathcal P(\mathcal F)$ is bounded above and the stalk of a zero sheaf is zero; the stalk map $\mathcal P(\mathcal F)^\bullet_x\to\mathcal F^\bullet_x$ is a quasi-isomorphism of complexes, because the stalk of $H^n(\alpha)$ is $H^n$ of the stalk map by stalkwise exactness of kernels, cokernels and images [F9, F28], and it is an isomorphism for every $n$ [F8]. Hence $\mathcal P(\mathcal F)^\bullet_x\to\mathcal F^\bullet_x$ is a bounded-above flat replacement of the stalk complex, and by step 7.2 the cohomology of the sheaf-level derived tensor product at $x$ is the cohomology of this module-level total complex, the computation used in the module-level definition of the derived tensor product ([[def-derived-tensor-product-in-the-bounded-above-setting]]). [F1, F8, F9, F20, F21, F28, step step 7.2] [algebra]

9.1 Clause 1 is step 3.1 with step 3.2. Clause 2 is step 7.1 with step 6.1, step 5.1, step 4.2 and step 3.3: the assignments define a bifunctor on the bounded-above derived categories, additive in each variable, and a quasi-isomorphism in either variable induces an isomorphism by step 4.1. Clause 3 is step 7.2, clause 4 is step 7.3 with step 5.2, and clause 5 is step 8.1. ∎ [steps step 3.1, step 3.2, step 7.1, step 6.1, step 5.1, step 4.2, step 4.1, step 7.2, step 7.3, step 5.2, step 8.1] [algebra]
