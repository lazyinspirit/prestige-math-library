---
id: thm-intrinsic-finite-category-hypotheses-give-a-finite-projective-generator
kind: theorem
title: "Intrinsic finite category hypotheses give a finite projective generator"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 2
justified_by: []
aliases: []
deps: [def-abelian-category, def-algebra-over-a-commutative-ring, def-biproduct, def-composition-series-and-composition-factors-of-an-object, def-dimension, def-finite-k-linear-abelian-category, def-full-faithful-and-essentially-surjective-functor, def-generator-and-cogenerator-of-a-category, def-image-and-coimage-in-a-category-with-kernels-and-cokernels, def-k-linear-category-and-k-linear-functor, def-locally-finite-k-linear-abelian-category, def-monomorphism-and-epimorphism, def-object-of-finite-length, def-opposite-ring, def-projective-object, def-separating-set-and-coseparating-set, def-simple-object, def-subobject-and-quotient-object, def-superfluous-subobject-and-projective-cover-in-an-abelian-category, lem-endomorphism-ring-of-an-object-in-a-preadditive-category, lem-projectives-covering-the-simple-objects-generate-every-finite-length-object, prop-basic-calculus-of-monomorphisms-and-epimorphisms, prop-finite-dimensional-module-categories-are-intrinsically-finite, thm-epimorphism-monomorphism-factorisation-exists-and-is-unique-up-to-unique-isomorphism, thm-projective-covers-exist-and-are-unique-for-finite-dimensional-algebras, thm-projective-object-characterisations]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Etingof, Gelaki, Nikshych, Ostrik, Tensor Categories, §1.8 (Definitions 1.8.1–1.8.6, Proposition 1.8.10, Corollary 1.8.11, Remark 1.8.7), printed pp.9–11"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
    - title: "Fuchs, Schaumann, Schweigert, Eilenberg–Watts calculus for finite categories and a bimodule Radford S^4 theorem, arXiv:1612.04561v3, §2.1 (Lemma 2.1, Lemma 2.2, Corollary 2.3, equation (2.1))"
      url: "https://arxiv.org/pdf/1612.04561v3"
---

## Statement

Let $\mathcal C$ be a finite $k$-linear abelian category, with simple
representatives $S_1,\dots,S_n$ and chosen projective covers
$Q_i\twoheadrightarrow S_i$, and put $P=\bigoplus_{i=1}^nQ_i$ and
$A=\operatorname{End}_{\mathcal C}(P)^{\mathrm{op}}$. Then: (i) $P$ is
projective; (ii) $P$ is a generator of $\mathcal C$, that is, $\{P\}$ is
separating; (iii) $A$ is a finite-dimensional unital $k$-algebra; (iv)
$\mathcal C(P,-)$ is exact and faithful; and (v) every object of $\mathcal C$ is
a quotient of a finite direct sum of copies of $P$. The proof uses only that
each $Q_i\twoheadrightarrow S_i$ is a projective epimorphism, never the
superfluity of its kernel, so the same conclusions hold if "enough projectives"
is read as "every simple object admits a projective epimorphism onto it"; for
the finite module categories of
[[prop-finite-dimensional-module-categories-are-intrinsically-finite]] the two
readings coincide. Only the finitely many covers $Q_i$ are selected; no further
choice is used.

## Facts & Assumptions

**Given:** A field $k$, a finite $k$-linear abelian category $\mathcal C$ in the sense of [[def-finite-k-linear-abelian-category]], simple representatives $S_1,\dots,S_n$ for all isomorphism classes of simple objects, and chosen projective epimorphisms $Q_i\twoheadrightarrow S_i$, $i=1,\dots,n$. Put $P=\bigoplus_{i=1}^nQ_i$ and $A=\operatorname{End}_{\mathcal C}(P)^{\mathrm{op}}$.

[F1] For an object $P$ of an abelian category the following are equivalent: $P$ is projective; the functor $\mathcal C(P,-)$ carries every short exact sequence to a short exact sequence; and every epimorphism onto $P$ splits ([[thm-projective-object-characterisations]], [[def-projective-object]]).

[F2] A biproduct $\bigoplus_iQ_i$ is a coproduct with injections $\mathrm{inj}_i$ and a product with projections $\mathrm{pr}_i$ satisfying $\mathrm{pr}_i\mathrm{inj}_i=1_{Q_i}$; the projections are split epimorphisms, hence epimorphisms, and morphisms out of a coproduct are determined by their composites with the injections ([[def-biproduct]], [[prop-basic-calculus-of-monomorphisms-and-epimorphisms]]).

[F3] Composites of epimorphisms are epimorphisms; if $\pi h\ne0$ then $h\ne0$; a monomorphism composed with a nonzero morphism is nonzero; and if $e$ is epic and $fe=0$ then $f=0$ ([[prop-basic-calculus-of-monomorphisms-and-epimorphisms]], [[def-monomorphism-and-epimorphism]]).

[F4] Every morphism $f:X\to Y$ of an abelian category factors as $f=m\circ e$ with $e$ an epimorphism and $m$ a monomorphism, with $m$ representing $\operatorname{im}f$; in particular $f\ne0$ exactly when $\operatorname{im}f\ne0$ ([[thm-epimorphism-monomorphism-factorisation-exists-and-is-unique-up-to-unique-isomorphism]], [[def-image-and-coimage-in-a-category-with-kernels-and-cokernels]]).

[F5] Every nonzero object of finite length has a composition series whose last factor $Z\twoheadrightarrow S$ is a simple quotient, and every simple object of $\mathcal C$ is isomorphic to one of $S_1,\dots,S_n$ ([[def-composition-series-and-composition-factors-of-an-object]], [[def-simple-object]], given).

[F6] An object $G$ is a generator when the singleton $\{G\}$ is separating, that is, when for every pair of distinct parallel morphisms $u\ne v:X\to Y$ there is $g:G\to X$ with $ug\ne vg$ ([[def-separating-set-and-coseparating-set]], [[def-generator-and-cogenerator-of-a-category]]).

[F7] A functor is faithful when it is injective on every hom-set; for $\mathcal C(P,-)$ this means that $u\ne v:X\to Y$ yields $u\circ-\ne v\circ-$, that is, some $g:P\to X$ has $ug\ne vg$ ([[def-full-faithful-and-essentially-surjective-functor]]).

[F8] Under the hypotheses of the statement, every object of finite length, in particular every object of $\mathcal C$, admits an epimorphism $P^m\twoheadrightarrow X$ for some $m\ge0$, using only that the $Q_i\twoheadrightarrow S_i$ are projective epimorphisms ([[lem-projectives-covering-the-simple-objects-generate-every-finite-length-object]], [[def-locally-finite-k-linear-abelian-category]]).

[F9] For an object $P$ of a preadditive category, $\operatorname{End}_{\mathcal C}(P)=\mathcal C(P,P)$ with addition from the hom-group and multiplication given by composition is a unital ring with identity $1_P$, composition is bilinear in both variables, and reversing the multiplication gives the opposite ring ([[lem-endomorphism-ring-of-an-object-in-a-preadditive-category]], [[def-opposite-ring]]).

[F10] A finite $k$-linear abelian category is locally finite: every object has finite length and every hom-space is finite-dimensional over $k$ ([[def-finite-k-linear-abelian-category]], [[def-locally-finite-k-linear-abelian-category]], [[def-dimension]]). A $k$-algebra is a unital ring with a central unital structure map $k\to A$, equivalently a $k$-vector space with a bilinear unital multiplication ([[def-algebra-over-a-commutative-ring]], [[def-k-linear-category-and-k-linear-functor]]).

[F11] For the finite module categories of [[prop-finite-dimensional-module-categories-are-intrinsically-finite]] the stronger reading holds: the published cover theorem gives every simple module a projective cover ([[thm-projective-covers-exist-and-are-unique-for-finite-dimensional-algebras]]).



## Proof

**Proof technique:** direct.

1.1 (i) $P$ is projective. Let $q:E\twoheadrightarrow P$ be an epimorphism. Projectivity of each $Q_i$ gives a lift $s_i:Q_i\to E$ of the injection $\mathrm{inj}_i:Q_i\to P$, so $qs_i=\mathrm{inj}_i$. The coproduct property [F2] gives $s:P\to E$ with $s\mathrm{inj}_i=s_i$. Thus $qs\mathrm{inj}_i=\mathrm{inj}_i$ for every $i$, and equality on all injections implies $qs=1_P$. Hence every epimorphism onto $P$ splits, so $P$ is projective by [F1]. [F1, F2, given, choose, construct]

1.2 (ii) $P$ is separating. Let $u\ne v:X\to Y$ and put $f=u-v\ne0$, using that $\mathcal C$ is additive. By [F4] $f$ factors as $f=m\circ e$ with $e:X\twoheadrightarrow Z$ epic, $m:Z\rightarrowtail Y$ monic and $Z=\operatorname{im}f\ne0$; by [F5] the nonzero object $Z$ of finite length has a simple quotient $\pi:Z\twoheadrightarrow S$, and $S\cong S_i$ for some $i$ by [F5]. Composing the chosen epimorphism $Q_i\twoheadrightarrow S_i$ with an isomorphism $S_i\cong S$ gives an epimorphism $Q_i\twoheadrightarrow S$, which by projectivity of $Q_i$ and [F1] lifts along $\pi$ to $h:Q_i\to Z$ with $\pi h$ epic; then $h\ne0$ because $\pi h$ is an epimorphism onto the nonzero simple $S$. Since $e$ is epic and $Q_i$ projective, $h$ lifts further along $e$ to $\widetilde h:Q_i\to X$ with $e\widetilde h=h$. Then $m h=m e\widetilde h=f\widetilde h$, and $m h\ne0$ by [F3] because $m$ is monic and $h\ne0$; so $f\widetilde h\ne0$, and composing with the split epimorphism $\mathrm{pr}_i:P\twoheadrightarrow Q_i$ of [F2] gives $g:=\widetilde h\,\mathrm{pr}_i:P\to X$ with $fg\ne0$, again by [F3]. Hence $ug\ne vg$ for the distinct morphisms $u,v$, so $\{P\}$ is separating and $P$ is a generator by [F6]. [F1, F2, F3, F4, F5, F6, given]

1.3 (iii) $A$ is a finite-dimensional unital $k$-algebra. By [F9] the endomorphism set $\operatorname{End}_{\mathcal C}(P)=\mathcal C(P,P)$ is a unital ring under composition with identity $1_P$, and reversing the multiplication gives the opposite ring $A$; by [F10] the hom-space is finite-dimensional over $k$ and composition is $k$-bilinear, so both $\operatorname{End}_{\mathcal C}(P)$ and its opposite $A$ are $k$-vector spaces with bilinear unital multiplication. The structure map $\eta:k\to A$, $\eta(c)=c\cdot1_P$, is a unital ring homomorphism whose image is central, because multiplication by scalars commutes with composition by $k$-bilinearity; hence $A$ is a unital $k$-algebra by [F10], finite-dimensional over $k$ since $\mathcal C(P,P)$ is. [F9, F10, given]

1.4 (v) Every object is a quotient of $P^m$ for some $m\ge0$: by [F10] every object of $\mathcal C$ has finite length, so [F8] supplies an epimorphism $P^m\twoheadrightarrow X$ for some $m$, whose target $X$ is therefore a quotient of $P^m$. [F8, F10]

2.1 (iv) $\mathcal C(P,-)$ is exact and faithful. Exactness is condition 2 of [F1] applied to the projective object $P$ of step 1.1. For faithfulness, let $u\ne v:X\to Y$; by step 1.2 there is $g:P\to X$ with $ug\ne vg$, so the induced maps on hom-sets differ and $\mathcal C(P,-)$ is injective on this hom-set; since $u,v$ were arbitrary, $\mathcal C(P,-)$ is faithful in the sense of [F7]. [F1, F7, step 1.1, step 1.2]

3.1 The claims (i), (ii), (iii), (iv) and (v) are steps 1.1, 1.2, 1.3, 2.1 and 1.4. Inspecting these steps and the covering lemma [F8], the only properties of the maps $Q_i\twoheadrightarrow S_i$ that were used are that they are epimorphisms and that their sources are projective; the superfluity of their kernels was never used, so replacing the covers by arbitrary projective epimorphisms onto the simples does not change the argument, which proves the stated reading-independence. For the finite module categories of [[prop-finite-dimensional-module-categories-are-intrinsically-finite]] the stronger reading is available in any case, since by [F11] every simple module there has a projective cover, so the two readings coincide there. The proof selects only the finitely many supplied maps $Q_i\twoheadrightarrow S_i$ and finitely many biproduct and lifting data inside finite-dimensional hom-spaces, so no choice principle is used beyond them. [step 1.1, step 1.2, step 1.3, step 2.1, step 1.4, F8, F11, given] ∎
