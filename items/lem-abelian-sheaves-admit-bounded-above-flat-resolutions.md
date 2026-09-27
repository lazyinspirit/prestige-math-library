---
id: "lem-abelian-sheaves-admit-bounded-above-flat-resolutions"
kind: "lemma"
title: "Flat resolutions of abelian sheaves and K-flatness of bounded-above flat complexes"
status: published
origin: pipeline
deps: [def-topological-space, def-flat-abelian-sheaf, def-k-flat-complex-of-abelian-sheaves, lem-flatness-criteria-and-flat-covers-for-abelian-sheaves, def-tensor-product-of-abelian-sheaves, lem-stalks-and-colimits-of-the-abelian-sheaf-tensor-product, def-tensor-product-total-complex-of-chain-complexes, lem-bounded-above-flat-tensor-complexes-preserve-quasi-isomorphisms, def-derived-tensor-product-in-the-bounded-above-setting, def-cochain-complex-in-an-abelian-category, def-cochain-map, def-quasi-isomorphism, def-cohomology-object-of-a-cochain-complex, def-kernel-cokernel-image-sheaves, def-bounded-bounded-below-and-bounded-above-complex, def-exactness-of-a-complex-at-a-degree-and-acyclic-complex, thm-exactness-of-sheaves-stalkwise, thm-sheaf-morphism-isomorphism-stalkwise, thm-a-chain-map-induces-a-well-defined-map-on-homology, cor-a-morphism-in-an-abelian-category-is-monic-exactly-when-its-kernel-is-zero-and-epic-exactly-when-its-cokernel-is-zero, lem-abelian-sheaves-form-a-grothendieck-category, def-stalk-of-presheaf, lem-k-flat-abelian-sheaf-complexes-preserve-quasi-isomorphisms]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "The Stacks Project, Derived Categories"
      url: https://stacks.math.columbia.edu/download/derived.pdf
      locator: "Lemma 13.15.4 (tag 05T7), parts (1) and (2); the construction here takes the canonical flat cover in place of an arbitrary element of a class of quotients"
    - title: "The Stacks Project, Cohomology of Sheaves"
      url: https://stacks.math.columbia.edu/download/cohomology.pdf
      locator: "Definition 26.2, Lemmas 26.4 and 26.9"
verification:
  audited: 2026-09-27
---

## Statement

Let $X$ be a topological space.

1. **(Flat resolutions.)** Let $\mathcal C^\bullet$ be a bounded-above cochain
   complex of abelian sheaves on $X$ ([[def-cochain-complex-in-an-abelian-category]]),
   so that $\mathcal C^n=0$ for all $n\gg0$
   ([[def-bounded-bounded-below-and-bounded-above-complex]]); fix $a$ with
   $\mathcal C^n=0$ for $n>a$. Then there are a cochain complex
   $\mathcal P^\bullet$ of abelian sheaves with $\mathcal P^n$ flat for every
   $n$ ([[def-flat-abelian-sheaf]]) and $\mathcal P^n=0$ for every $n>a$, and a
   cochain map ([[def-cochain-map]]) $\alpha:\mathcal P^\bullet\to\mathcal C^\bullet$
   that is surjective on stalks in every degree and induces an isomorphism
   $H^n(\alpha):H^n(\mathcal P^\bullet)\to H^n(\mathcal C^\bullet)$ for every $n$
   ([[def-quasi-isomorphism]], [[def-cohomology-object-of-a-cochain-complex]]):
   a bounded-above, termwise surjective quasi-isomorphism out of a bounded-above
   complex of flat sheaves. Moreover $\mathcal P^\bullet$ and $\alpha$ are
   canonically determined by $\mathcal C^\bullet$, being built from the canonical
   flat epimorphisms of [[lem-flatness-criteria-and-flat-covers-for-abelian-sheaves]]
   after discarding their zero-section summands. Explicitly use
   $G_{\mathrm{red}}(\mathcal E):=\bigoplus_{(U,s),\,s\ne0}j_{U!}\mathbb Z_U$,
   with its induced epimorphism to $\mathcal E$, in the recursion. Since
   $G_{\mathrm{red}}(0)=0$, increasing the initial bound adds only zero terms;
   the construction is independent of $a$. No choice principle is used.

2. **(Flat complexes are K-flat.)** If $\mathcal K^\bullet$ is a bounded-above
   complex of flat abelian sheaves on $X$, then $\mathcal K^\bullet$ is K-flat in
   the sense of [[def-k-flat-complex-of-abelian-sheaves]]: for every acyclic
   bounded-above complex $\mathcal F^\bullet$ of abelian sheaves
   ([[def-exactness-of-a-complex-at-a-degree-and-acyclic-complex]]) the
   tensor-product total complex
   $\operatorname{Tot}(\mathcal F^\bullet\otimes_{\mathbb Z}\mathcal K^\bullet)$
   of [[def-tensor-product-of-abelian-sheaves]] is acyclic. Consequently
   $\operatorname{Tot}(-\otimes_{\mathbb Z}\mathcal K^\bullet)$ preserves
   quasi-isomorphisms
   ([[lem-k-flat-abelian-sheaf-complexes-preserve-quasi-isomorphisms]]).

## Facts & Assumptions

[F1] For every abelian sheaf $\mathcal F$ on $X$ the canonical morphism $\Phi_{\mathcal F}:\bigoplus_{(U,s)}j_{U!}\mathbb Z_U\to\mathcal F$ of the covering flat sheaf is an epimorphism whose source is a flat abelian sheaf; each summand $j_{U!}\mathbb Z_U$ is flat, and coproducts of flat sheaves are flat (clauses 2 and 3 of [[lem-flatness-criteria-and-flat-covers-for-abelian-sheaves]]).

[F2] The covering flat sheaf $G(\mathcal F):=\bigoplus_{(U,s)}j_{U!}\mathbb Z_U$ and the morphism $\Phi_{\mathcal F}$ are canonically determined by $\mathcal F$, with no selection ([[lem-flatness-criteria-and-flat-covers-for-abelian-sheaves]]).

[F3] An abelian sheaf is flat exactly when each of its stalks is a flat $\mathbb Z$-module; in particular the zero sheaf is flat ([[def-flat-abelian-sheaf]]).

[F4] A bounded-above cochain complex $\mathcal K^\bullet$ of abelian sheaves is K-flat when for every acyclic bounded-above complex $\mathcal F^\bullet$ of abelian sheaves the total complex $\operatorname{Tot}(\mathcal F^\bullet\otimes_{\mathbb Z}\mathcal K^\bullet)$ is acyclic ([[def-k-flat-complex-of-abelian-sheaves]]).

[F5] For bounded-above complexes $\mathcal F^\bullet,\mathcal G^\bullet$ of abelian sheaves on $X$ the tensor-product total complex of [[def-tensor-product-of-abelian-sheaves]] is a cochain complex whose stalk at every $x\in X$ is canonically isomorphic, as a complex, to $\operatorname{Tot}(\mathcal F_x^\bullet\otimes_{\mathbb Z}\mathcal G_x^\bullet)$ ([[lem-stalks-and-colimits-of-the-abelian-sheaf-tensor-product]]).

[F6] In that isomorphism the right-hand total complex is the module-level Koszul total complex of [[def-tensor-product-total-complex-of-chain-complexes]] reindexed to cochains, whose differential is $d(p\otimes q)=d_Pp\otimes q+(-1)^pp\otimes d_Qq$ on the $(p,q)$-summand ([[lem-stalks-and-colimits-of-the-abelian-sheaf-tensor-product]]).

[F7] For a family $(\mathcal G_i)_{i\in I}$ of abelian sheaves the stalk of the coproduct is the coproduct of the stalks, $\bigl(\bigoplus_{i\in I}\mathcal G_i\bigr)_x\cong\bigoplus_{i\in I}(\mathcal G_i)_x$; in particular a finite direct sum of abelian sheaves has stalk the direct sum of the stalks ([[lem-stalks-and-colimits-of-the-abelian-sheaf-tensor-product]]).

[F8] A sequence of sheaves of abelian groups is exact if and only if every one of its stalk sequences is exact; consequently kernels, images and cokernels of morphisms of abelian sheaves are computed stalkwise ([[thm-exactness-of-sheaves-stalkwise]]).

[F9] A cochain complex is bounded above when $\mathcal C^n=0$ for all $n\gg0$ ([[def-bounded-bounded-below-and-bounded-above-complex]]).

[F10] Tensoring a bounded-above acyclic left $R$-complex $A$ with a bounded-above complex $P$ of flat right $R$-modules gives an acyclic total complex; for $R=\mathbb Z$ this applies to complexes of $\mathbb Z$-modules ([[lem-bounded-above-flat-tensor-complexes-preserve-quasi-isomorphisms]]).

[F11] That module statement is applied in the literature-derived setting on the page to bounded-above complexes read through the cochain reindexing of the tensor total complex: with the cochain reindexing in force it yields the natural quasi-isomorphisms between tensor products of bounded-above complexes of modules ([[def-derived-tensor-product-in-the-bounded-above-setting]]).

[F12] For a cochain complex the $n$th cohomology object is $H^n(C)=\operatorname{coker}(B^n(C)\to Z^n(C))$, the quotient of the cocycles by the coboundaries ([[def-cohomology-object-of-a-cochain-complex]]).

[F13] For a chain map $f$ and every $n$ there is a unique morphism $H_n(f):H_n(C)\to H_n(D)$ such that the quotient maps from cycles commute with $Z_n(f)$ ([[thm-a-chain-map-induces-a-well-defined-map-on-homology]]).

[F14] A map of complexes is a quasi-isomorphism when the induced maps on cohomology are isomorphisms in every degree ([[def-quasi-isomorphism]]).

[F15] Cochain complexes may be read as chain complexes by the reindexing convention that sends $C^\sharp_n:=C^{-n}$ with $d^\sharp_n:=d^{-n}$, so that upper and lower indexing differ only by the sign of the grading ([[def-cochain-complex-in-an-abelian-category]]).

[F16] The kernel sheaf of a morphism of abelian sheaves is the subsheaf defined objectwise by $\ker(\varphi)(U)=\ker(\varphi_U)$ ([[def-kernel-cokernel-image-sheaves]]).

[F17] A complex is acyclic when it is exact at every degree ([[def-exactness-of-a-complex-at-a-degree-and-acyclic-complex]]).

[F18] A morphism $f$ in an abelian category, in particular a morphism of abelian sheaves, is epic if and only if its cokernel is zero ([[cor-a-morphism-in-an-abelian-category-is-monic-exactly-when-its-kernel-is-zero-and-epic-exactly-when-its-cokernel-is-zero]]).

[F19] A morphism of abelian sheaves is an isomorphism if and only if its induced maps on stalks are bijections; in particular a morphism of abelian sheaves is zero, and two morphisms are equal, exactly when all their stalk maps are zero respectively equal ([[thm-sheaf-morphism-isomorphism-stalkwise]]).

[F20] The stalk at $x$ is the filtered colimit of the section groups over the open neighbourhoods of $x$, so it is a functor on abelian sheaves and a morphism of sheaves induces a map of stalks compatible with composition and with zero morphisms ([[def-stalk-of-presheaf]]).

[F21] A cochain map satisfies $d_D^n\circ f^n=f^{n+1}\circ d_C^n$ in every degree ([[def-cochain-map]]).

[F22] The category of abelian sheaves on a topological space whose open sets form a set is locally small and cocomplete (AB3), so coproducts, in particular finite direct sums, of abelian sheaves exist ([[lem-abelian-sheaves-form-a-grothendieck-category]]).



## Proof

**Given:** A topological space $X$, an abelian sheaf $\mathcal F$ on $X$, a bounded-above cochain complex $\mathcal C^\bullet$ of abelian sheaves with $\mathcal C^n=0$ for $n>a$, a bounded-above complex $\mathcal K^\bullet$ of flat abelian sheaves, an acyclic bounded-above complex $\mathcal F^\bullet$ of abelian sheaves, and a point $x\in X$.

1.1 By [F1] the canonical morphism $\Phi_{\mathcal F}:G(\mathcal F)\to\mathcal F$ of the covering flat sheaf is an epimorphism with $G(\mathcal F)$ flat, and by [F2] it is canonically determined by $\mathcal F$. To obtain a criterion for stalkwise surjectivity, use the exact sequence $G(\mathcal F)\to\mathcal F\to\operatorname{coker}(\Phi_{\mathcal F})\to0$: by [F8] it is exact exactly when all its stalk sequences are exact, that is, when the cokernel of $(\Phi_{\mathcal F})_x$ is $(\operatorname{coker}\Phi_{\mathcal F})_x$ for every $x$; by [F18] the epimorphism $\Phi_{\mathcal F}$ has zero cokernel, and by [F19] a sheaf is zero exactly when all its stalks are zero, so $(\Phi_{\mathcal F})_x:G(\mathcal F)_x\to\mathcal F_x$ is surjective for every $x\in X$, and conversely a morphism all of whose stalk maps are surjective is an epimorphism. [F1, F2, F8, F18, F19]

1.2 Fix a morphism $\varphi:\mathcal A\to\mathcal B$ of abelian sheaves and $x\in X$. Applying [F8] to the exact sequences $0\to\ker\varphi\to\mathcal A\to\mathcal B$, $\mathcal A\to\operatorname{im}\varphi\to0$ and $\mathcal A\to\mathcal B\to\operatorname{coker}\varphi\to0$ gives $(\ker\varphi)_x=\ker(\varphi_x)$, $(\operatorname{im}\varphi)_x=\operatorname{im}(\varphi_x)$ and $(\operatorname{coker}\varphi)_x=\operatorname{coker}(\varphi_x)$. By [F20] the stalk construction is functorial, so $(\psi\circ\varphi)_x=\psi_x\circ\varphi_x$ for composable morphisms $\varphi,\psi$ of abelian sheaves. By [F7] the stalk of a coproduct of abelian sheaves is the coproduct of the stalks. Finally, for a cochain complex $\mathcal C^\bullet$ of abelian sheaves with cocycles $Z^n$ and coboundaries $B^n$ the identities just recorded give $\bigl(H^n(\mathcal C^\bullet)\bigr)_x\cong H^n(\mathcal C^\bullet_x)$ for every $n\in\mathbb Z$, because $H^n$ is the cokernel of $B^n\to Z^n$ by [F12] and the stalk of that cokernel is the cokernel of the stalk map. [F7, F8, F12, F20]

1.3 $\mathrm{IH}_{a+1}$ holds with $\mathcal P^j:=0$, $d_{\mathcal P}^j:=0$ and $\alpha^j:=0$ for $j\ge a+1$: for such $j$ we have $j>a$, so $\mathcal C^j=0$ by the choice of $a$ [F9] and the maps are zero maps between zero sheaves, whence (i), (ii) and (iii); each $\mathcal P^j=0$ is flat [F3]; for (iv) let $j>a+1$, then $\mathcal P^j=\mathcal P^{j+1}=0$, so $Z^j=B^j=0$ and $Z^j/B^j=0$, while $\mathcal C^j=\mathcal C^{j+1}=0$ gives $H^j(\mathcal C^\bullet)=0$ [F12], and the zero morphism between zero objects is an isomorphism; for (v) the induced morphism $\ker(d_{\mathcal P}^{a+1})\to\ker(d_{\mathcal C}^{a+1})$ is the zero morphism between the zero sheaves $\mathcal P^{a+1}$ and $\mathcal C^{a+1}$, which is surjective on stalks. [F3, F9, F12]

1.4 Now let $\mathcal K^\bullet$ be a bounded-above complex of flat abelian sheaves and let $\mathcal F^\bullet$ be an acyclic bounded-above complex of abelian sheaves, with $\mathcal F^n=\mathcal K^n=0$ for all $n>b$ [F9]. Fix $x\in X$. The stalk complex $\mathcal F_x^\bullet$ is bounded above, since $(\mathcal F^n)_x=0$ for $n>b$ (the zero sheaf has zero stalk by [F20]), and it is acyclic: acyclicity of $\mathcal F^\bullet$ means exactness at every degree [F17], and by [F8] every stalk sequence of $\mathcal F^\bullet$ is exact in every degree, that is $H^n(\mathcal F^\bullet_x)=0$ for all $n$ [F12]. The stalk complex $\mathcal K^\bullet_x$ is a bounded-above complex of flat $\mathbb Z$-modules, because each $\mathcal K^n$ is flat [F3] and $\mathcal K^n_x=0$ for $n>b$ [F20]. This is exactly the situation of [F10], whose bounded-above hypothesis is read through the cochain reindexing of the total complex as recorded in [F11]; the total complex reindexed there is the module total complex of [F6] with $d(x\otimes y)=d_{\mathcal F}x\otimes y+(-1)^ix\otimes d_{\mathcal K}y$, since under the reindexing $(-1)^p$ becomes $(-1)^i$. Applying [F10] with $R=\mathbb Z$, $A=\mathcal F^\bullet_x$ and $P=\mathcal K^\bullet_x$ therefore gives that $\operatorname{Tot}(\mathcal F^\bullet_x\otimes_{\mathbb Z}\mathcal K^\bullet_x)$ is acyclic. By [F5] and [F6] the stalk of $\operatorname{Tot}(\mathcal F^\bullet\otimes_{\mathbb Z}\mathcal K^\bullet)$ at $x$ is canonically isomorphic to that module total complex, hence acyclic. As $x$ was arbitrary, each stalk of $\operatorname{Tot}(\mathcal F^\bullet\otimes_{\mathbb Z}\mathcal K^\bullet)$ is acyclic, so by [F8] the complex $\operatorname{Tot}(\mathcal F^\bullet\otimes_{\mathbb Z}\mathcal K^\bullet)$ is exact in every degree, i.e. acyclic [F17]. Since $\mathcal F^\bullet$ was an arbitrary acyclic bounded-above complex, $\mathcal K^\bullet$ is K-flat [F4]. This is clause 2. [F3, F4, F5, F6, F8, F9, F10, F11, F12, F17, F20]

2.1 The full source in [F1] splits as the coproduct of the summands with $s\ne0$ and the summands with $s=0$. The latter map to zero under $\Phi_{\mathcal E}$, so restricting to $G_{\mathrm{red}}(\mathcal E)$ is still surjective on stalks: a nonzero germ is represented by a nonzero section, and the zero germ is hit by zero. Every summand is flat and coproducts of these are flat by [F1]. Thus this restriction is a canonical flat epimorphism, and $G_{\mathrm{red}}(0)=0$. For a sheaf map $f:\mathcal E\to\mathcal E'$, send the summand $(U,s)$ to $(U,f_U(s))$ by the identity if $f_U(s)\ne0$, and by zero if $f_U(s)=0$. These prescriptions commute with the epimorphisms and preserve identities and composition, including the case where a section becomes zero. [F1, F2, F8, step 1.1]

3.1 Clause 1 is proved by descending induction using the reduced flat epimorphisms of step 2.1. Let us say that $\mathrm{IH}_n$ holds, for an integer $n\le a+1$, when there are sheaves $\mathcal P^j$ for $j\ge n$, with $\mathcal P^j$ flat and $\mathcal P^j=0$ for every $j>a$, morphisms $d_{\mathcal P}^j:\mathcal P^j\to\mathcal P^{j+1}$ and $\alpha^j:\mathcal P^j\to\mathcal C^j$ for $j\ge n$, such that (i) each $\alpha^j$ is surjective on stalks, (ii) $\alpha^{j+1}\circ d_{\mathcal P}^j=d_{\mathcal C}^j\circ\alpha^j$ for $j\ge n$, (iii) $d_{\mathcal P}^{j+1}\circ d_{\mathcal P}^j=0$ for $j\ge n$, (iv) for every $j>n$ the morphism $Z^j(\mathcal P^\bullet)/B^j(\mathcal P^\bullet)\to H^j(\mathcal C^\bullet)$ induced on quotients by $\alpha^j$ -- well defined by (ii) -- is an isomorphism, and (v) the morphism $\ker(d_{\mathcal P}^n)\to\ker(d_{\mathcal C}^n)$ induced by $\alpha^n$ -- well defined by (ii) and (iii), since $d_{\mathcal C}^n\alpha^n=\alpha^{n+1}d_{\mathcal P}^n=0$ on $\ker(d_{\mathcal P}^n)$ [F12, F16] -- is surjective on stalks. The data of $\mathrm{IH}_n$ at degrees $j\ge n'$ are the data of $\mathrm{IH}_{n'}$ for $n'>n$, and the induction step below adds objects and maps only in degree $n-1$, so the hypotheses for different $n$ are compatible and yield a single cochain complex $\mathcal P^\bullet$. [F12, F16]

3.2 Assume $\mathrm{IH}_n$ with $n\le a+1$ and construct the data of $\mathrm{IH}_{n-1}$ in degree $n-1$. Put $\mathcal K_{\mathcal P}:=\ker(d_{\mathcal P}^n:\mathcal P^n\to\mathcal P^{n+1})$ and $\mathcal K_{\mathcal C}:=\ker(d_{\mathcal C}^n:\mathcal C^n\to\mathcal C^{n+1})$ [F16]; by (v) the morphism $e:\mathcal K_{\mathcal P}\to\mathcal K_{\mathcal C}$ induced by $\alpha^n$ is surjective on stalks. Since coproducts exist [F22], form the direct sum $\mathcal C^{n-1}\oplus\mathcal K_{\mathcal P}$ with its two structure maps and define $\delta:\mathcal C^{n-1}\oplus\mathcal K_{\mathcal P}\to\mathcal C^n$ to be the morphism whose components are $d_{\mathcal C}^{n-1}$ and the negative of the composite $\mathcal K_{\mathcal P}\xrightarrow{\ e\ }\mathcal K_{\mathcal C}\hookrightarrow\mathcal C^n$. Put $\mathcal Q:=\ker\delta$ [F16], let $\pi_1:\mathcal Q\to\mathcal C^{n-1}$ and $\pi_2:\mathcal Q\to\mathcal K_{\mathcal P}$ be the composites of the inclusion $\mathcal Q\subseteq\mathcal C^{n-1}\oplus\mathcal K_{\mathcal P}$ with the two projections, and let $\mathcal P^{n-1}:=G_{\mathrm{red}}(\mathcal Q)$ with $\beta:=\Phi_{\mathcal Q}|_{G_{\mathrm{red}}(\mathcal Q)}:\mathcal P^{n-1}\to\mathcal Q$ the reduced flat epimorphism of step 2.1; define $\alpha^{n-1}:=\pi_1\circ\beta:\mathcal P^{n-1}\to\mathcal C^{n-1}$ and $d_{\mathcal P}^{n-1}:=\iota\circ\pi_2\circ\beta:\mathcal P^{n-1}\to\mathcal P^n$, where $\iota:\mathcal K_{\mathcal P}\hookrightarrow\mathcal P^n$ is the inclusion. The sheaf $\mathcal P^{n-1}$ is flat and canonically determined by $\mathcal Q$ by step 2.1. By step 2.1 the map $\beta$ is surjective on stalks, and by step 1.2 and [F7] the stalk of $\mathcal Q=\ker\delta$ at a point $x$ is $\mathcal Q_x=\{(a,y)\in(\mathcal C^{n-1})_x\oplus(\mathcal K_{\mathcal P})_x:(d_{\mathcal C}^{n-1})_x(a)=(\alpha^n)_x(y)\}$, with $(\pi_1)_x,(d_{\mathcal P}^{n-1})_x$ given by the two components composed with $\beta_x$ and $\iota_x$. [F1, F2, F7, F16, F22, step 1.1, step 1.2]

4.1 (i) for degree $n-1$: the map $\alpha^{n-1}$ is surjective on stalks. Let $x\in X$ and $a\in(\mathcal C^{n-1})_x$. Since $d_{\mathcal C}^nd_{\mathcal C}^{n-1}=0$, the element $(d_{\mathcal C}^{n-1})_x(a)$ lies in $\ker((d_{\mathcal C}^n)_x)=(\mathcal K_{\mathcal C})_x$ [F8]; as $e_x:(\mathcal K_{\mathcal P})_x\to(\mathcal K_{\mathcal C})_x$ is surjective by (v), there is $y\in(\mathcal K_{\mathcal P})_x$ with $(\alpha^n)_x(y)=(d_{\mathcal C}^{n-1})_x(a)$, so $(a,y)\in\mathcal Q_x$ by step 3.2. Since $\beta_x$ is surjective by step 2.1 there is $p\in(\mathcal P^{n-1})_x$ with $\beta_x(p)=(a,y)$, and then $(\alpha^{n-1})_x(p)=(\pi_1)_x(a,y)=a$. Hence $(\alpha^{n-1})_x$ is surjective; as $x$ was arbitrary, $\alpha^{n-1}$ is an epimorphism by step 1.1 and surjective on stalks. [F8, step 3.2, step 1.1]

4.2 (ii) and (iii) in degree $n-1$: $d_{\mathcal P}^n\circ d_{\mathcal P}^{n-1}=d_{\mathcal P}^n\circ\iota\circ\pi_2\circ\beta=0$ because $d_{\mathcal P}^n\circ\iota=0$ by the definition of $\mathcal K_{\mathcal P}=\ker(d_{\mathcal P}^n)$ [F16]. For the cochain identity, both $\alpha^n\circ d_{\mathcal P}^{n-1}$ and $d_{\mathcal C}^{n-1}\circ\alpha^{n-1}$ are morphisms $\mathcal P^{n-1}\to\mathcal C^n$, and by [F19] it suffices to compare their stalk maps at every point. Let $x\in X$ and $p\in(\mathcal P^{n-1})_x$ with $\beta_x(p)=(a,y)\in\mathcal Q_x$; by step 3.2 the defining relation of $\mathcal Q_x$ is $(d_{\mathcal C}^{n-1})_x(a)=(\alpha^n)_x(y)$, so the left-hand stalk map sends $p$ to $(\alpha^n)_x(\iota_x(y))=(d_{\mathcal C}^{n-1})_x(a)$, which is the image of $p$ under the right-hand stalk map. Hence $\alpha^n\circ d_{\mathcal P}^{n-1}=d_{\mathcal C}^{n-1}\circ\alpha^{n-1}$, which is (ii) for $j=n-1$, while (ii) and (iii) for $j\ge n$ are those of $\mathrm{IH}_n$; together with the computation of $d_{\mathcal P}^n\circ d_{\mathcal P}^{n-1}=0$ this is (ii) and (iii) for $\mathrm{IH}_{n-1}$. [F16, F19, step 3.2]

4.3 (iv) for degree $n$, and (iv) of $\mathrm{IH}_{n-1}$: the morphism $\varphi_n:Z^n(\mathcal P^\bullet)/B^n(\mathcal P^\bullet)\to H^n(\mathcal C^\bullet)$ induced by $\alpha^n$ is an isomorphism. By [F19] it suffices to show that its stalk at every $x$ is bijective. By step 1.2 the stalk of $Z^n(\mathcal P^\bullet)/B^n(\mathcal P^\bullet)$ is $\ker((d_{\mathcal P}^n)_x)/\operatorname{im}((d_{\mathcal P}^{n-1})_x)$ and the stalk of $H^n(\mathcal C^\bullet)$ is $H^n(\mathcal C^\bullet_x)$, the map between them being induced by $(\alpha^n)_x$ restricted to the cocycles; as $\beta_x$ is surjective and $\iota_x$ is injective, step 3.2 gives $\operatorname{im}((d_{\mathcal P}^{n-1})_x)=(\pi_2)_x(\mathcal Q_x)=\{\,y\in(\mathcal K_{\mathcal P})_x:(\alpha^n)_x(y)\in\operatorname{im}((d_{\mathcal C}^{n-1})_x)\,\}$. That displayed set is exactly the preimage $M$ of the coboundaries $\operatorname{im}((d_{\mathcal C}^{n-1})_x)$ under the restriction of $(\alpha^n)_x$ to $\ker((d_{\mathcal P}^n)_x)$: the inclusion $\subseteq$ is the defining relation of $\mathcal Q_x$ in step 3.2, and conversely a cocycle $y$ with $(\alpha^n)_x(y)=(d_{\mathcal C}^{n-1})_x(a)$ for some $a$ satisfies $(a,y)\in\mathcal Q_x$. Hence the kernel of the induced map on quotients is $M/\operatorname{im}((d_{\mathcal P}^{n-1})_x)=0$, and the induced map is surjective because $e_x$ is surjective onto $\ker((d_{\mathcal C}^n)_x)$ by (v); so the stalk map is bijective and $\varphi_n$ is an isomorphism. For $j>n$ the maps of (iv) are the isomorphisms of $\mathrm{IH}_n$, unchanged. This proves (iv) for $\mathrm{IH}_{n-1}$. [F8, F19, step 3.2, step 1.2]

5.1 (v) for degree $n-1$: the morphism $\ker(d_{\mathcal P}^{n-1})\to\ker(d_{\mathcal C}^{n-1})$ induced by $\alpha^{n-1}$ is surjective on stalks. Let $x\in X$ and $a\in\ker((d_{\mathcal C}^{n-1})_x)$, so that $(d_{\mathcal C}^{n-1})_x(a)=0$. Then $(a,0)\in\mathcal Q_x$, since the defining relation of step 3.2 reads $(d_{\mathcal C}^{n-1})_x(a)=(\alpha^n)_x(0)=0$ and $0\in(\mathcal K_{\mathcal P})_x$; by step 2.1 choose $p\in(\mathcal P^{n-1})_x$ with $\beta_x(p)=(a,0)$. Then $(d_{\mathcal P}^{n-1})_x(p)=\iota_x(\pi_2)_x(a,0)=0$, so $p\in\ker((d_{\mathcal P}^{n-1})_x)$, and by step 4.2 the induced map sends $p$ to $(\alpha^{n-1})_x(p)=(\pi_1)_x(a,0)=a$. Hence the induced morphism is surjective on stalks. [step 3.2, step 1.1, step 4.2]

5.2 By step 1.3 and step 3.2 the hypotheses $\mathrm{IH}_n$ hold for every $n\le a+1$, with the compatibility recorded in step 3.1. Define $\mathcal P^j$ to be the sheaf attached to degree $j$ (this is unambiguous because the data in degree $j$ are fixed at every stage $n\le j$), and similarly $d_{\mathcal P}^j$ and $\alpha^j$; then $\mathcal P^j$ is flat for every $j$ and $\mathcal P^j=0$ for $j>a$ [F1, F3]; $d_{\mathcal P}^{j+1}d_{\mathcal P}^j=0$ for all $j$ by (iii), the case $j\ge a+1$ being a composite of zero maps; $\alpha^j$ is surjective on stalks for every $j$ by (i); and $d_{\mathcal C}^j\alpha^j=\alpha^{j+1}d_{\mathcal P}^j$ for every $j$ by (ii), the case $j\ge a+1$ being zero maps, so $\alpha=(\alpha^j)$ is a cochain map [F21]. For every $j$ the map $Z^j(\mathcal P^\bullet)/B^j(\mathcal P^\bullet)\to H^j(\mathcal C^\bullet)$ induced by $\alpha^j$ is an isomorphism, by (iv) applied with $n=j-1$; since $Z^j/B^j=H^j$ [F12], this is the map $H^j(\alpha)$ of [F13] read through the reindexing convention of [F15]. Hence $H^j(\alpha)$ is an isomorphism for every $j$ and $\alpha:\mathcal P^\bullet\to\mathcal C^\bullet$ is a quasi-isomorphism [F14, F15]. Finally, $\mathcal P^\bullet$ and $\alpha$ are canonically determined by $\mathcal C^\bullet$: increasing the starting bound adds only zero terms since the recursion has $\mathcal Q=0$ and $G_{\mathrm{red}}(0)=0$ above the original bound (step 2.1); at each step $\mathcal Q$ is the kernel of the morphism $\delta$ built from the previous data by the displayed formula [F16], and $\mathcal P^{n-1}=G_{\mathrm{red}}(\mathcal Q)$ with its epimorphism is the canonical reduced flat epimorphism onto $\mathcal Q$ of step 2.1, so no selection is made anywhere in the recursion. This is clause 1. [F1, F2, F3, F12, F13, F14, F15, F16, F21, step 1.3, step 3.2, step 4.1, step 4.2]

6.1 Clause 1 is step 5.2: every bounded-above complex $\mathcal C^\bullet$ of abelian sheaves admits the canonically determined bounded-above, termwise surjective quasi-isomorphism $\alpha:\mathcal P^\bullet\to\mathcal C^\bullet$ out of a complex of flat sheaves, no choice principle entering. Clause 2 is step 1.4: every bounded-above complex of flat sheaves is K-flat, and so tensoring with it preserves quasi-isomorphisms by the K-flat criterion of the page. Together these are the two flatness inputs used by the derived tensor product of abelian sheaves. ∎ [F4, step 5.2, step 1.4]
