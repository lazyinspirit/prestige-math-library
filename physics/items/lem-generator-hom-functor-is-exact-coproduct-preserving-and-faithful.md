---
id: lem-generator-hom-functor-is-exact-coproduct-preserving-and-faithful
kind: lemma
title: "The Hom functor of a small projective generator is exact, coproduct-preserving, and faithful"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 1
justified_by: []
aliases: []
deps: [def-small-projective-generator-and-progenerator, def-abelian-category, def-preadditive-category, thm-projective-object-characterisations, thm-the-cancellation-and-epimorphism-descriptions-of-a-generator-agree, def-products-and-coproducts, prop-empty-limits-and-colimits-are-terminal-and-initial-objects, def-the-axioms-ab3-and-ab3-star, def-small-finite-and-large-limits-completeness-and-cocompleteness, cor-hom-functors-on-a-preadditive-category-are-left-exact, thm-the-hom-bifunctor-of-a-preadditive-category-takes-values-in-abelian-groups, thm-an-additive-functor-is-exact-exactly-when-it-preserves-kernels-and-cokernels, prop-the-cokernel-of-a-zero-morphism-out-of-the-zero-object-is-an-isomorphism, def-hom-functors-and-hom-bifunctor, lem-endomorphism-ring-of-an-object-in-a-preadditive-category, prop-modules-and-homomorphisms-form-category-rmod, cor-a-morphism-in-an-abelian-category-is-monic-exactly-when-its-kernel-is-zero-and-epic-exactly-when-its-cokernel-is-zero, def-exact-functor-between-abelian-categories, def-left-exact-and-right-exact-functor, def-additive-functor]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "P. Etingen, S. Gelaki, D. Nikshych, V. Ostrik, Tensor Categories, printed p.10 (projectivity gives exactness, the generator condition gives faithfulness)"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
    - title: "W. Crawley-Boevey, Noncommutative Algebra, §3.12 (finitely generated projective generator; faithfulness argument for Hom(P,-))"
      url: "https://www.math.uni-bielefeld.de/~wcrawley/1617noncommalg/Noncommutative%20algebra.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Let $\mathcal C$ be a locally small cocomplete abelian category and $P$ a small projective generator of $\mathcal C$. Put $E=\operatorname{End}_{\mathcal C}(P)$, $A=E^{\mathrm{op}}$, and $H=\mathcal C(P,-):\mathcal C\to A\text{-Mod}$, where $H(Y)$ carries the left $A$-action $(e^{\mathrm{op}}\cdot h)=h\circ e$. Then:
1. $H$ is an additive functor.
2. $H$ is exact: it preserves kernels, cokernels, and every finite limit and colimit that exists in $\mathcal C$.
3. $H$ preserves every set-indexed coproduct.
4. $H$ is faithful: for all $u\neq v:X\to Y$ there is $h:P\to X$ with $uh\neq vh$.
5. If $H(Z)=0$ then $Z=0$.
No choice is used.

## Facts & Assumptions

**Given:** A locally small cocomplete abelian category $\mathcal C$, a small projective generator $P$ of $\mathcal C$, $E=\operatorname{End}_{\mathcal C}(P)$, $A=E^{\mathrm{op}}$, and $H=\mathcal C(P,-)$ with the left $A$-action $(e^{\mathrm{op}}\cdot h)=h\circ e$ on $H(Y)=\mathcal C(P,Y)$.

[F1] $P$ is projective, is a generator, and $\mathcal C(P,-)$ preserves every set-indexed coproduct; $\mathcal C$ is locally small, cocomplete and abelian ([[def-small-projective-generator-and-progenerator]], [[def-abelian-category]], [[def-small-finite-and-large-limits-completeness-and-cocompleteness]]).

[F2] $E=\mathcal C(P,P)$ is a unital ring under addition and composition with identity $1_P$, composition is bilinear, and $A=E^{\mathrm{op}}$ is a unital ring; left $A$-modules and their homomorphisms form the category $A\text{-Mod}$ ([[lem-endomorphism-ring-of-an-object-in-a-preadditive-category]], [[def-preadditive-category]], [[prop-modules-and-homomorphisms-form-category-rmod]]).

[F3] The hom-assignment $\mathcal C(P,-)$ is a functor whose values are abelian groups and whose action on morphisms is postcomposition $u\mapsto u_*$, where $u_*(h)=u\circ h$, and postcomposition is additive ([[def-hom-functors-and-hom-bifunctor]], [[thm-the-hom-bifunctor-of-a-preadditive-category-takes-values-in-abelian-groups]]).

[F4] Because $P$ is projective, every short exact sequence $0\to K\to E'\to M\to0$ in $\mathcal C$ induces an exact sequence $0\to H(K)\to H(E')\to H(M)\to0$; equivalently every epimorphism onto $P$ splits ([[thm-projective-object-characterisations]]).

[F5] The covariant hom-functor $\mathcal C(P,-)$ preserves every existing finite limit ([[cor-hom-functors-on-a-preadditive-category-are-left-exact]]).

[F6] Because $P$ is a generator and $\mathcal C$ is a locally small abelian category satisfying AB3, the functor $\mathcal C(P,-)$ is faithful, and for every object $Z$ the canonical morphism $\coprod_{u\in\mathcal C(P,Z)}P\to Z$ is an epimorphism ([[thm-the-cancellation-and-epimorphism-descriptions-of-a-generator-agree]], [[def-the-axioms-ab3-and-ab3-star]], [[def-products-and-coproducts]]).

[F7] A one-object coproduct is canonically the object itself, and the empty coproduct is an initial object ([[def-products-and-coproducts]], [[prop-empty-limits-and-colimits-are-terminal-and-initial-objects]]).

[F8] For every object $Z$, the identity $1_Z$ is a cokernel of the zero morphism $0\to Z$ out of the zero object ([[prop-the-cokernel-of-a-zero-morphism-out-of-the-zero-object-is-an-isomorphism]]).

[F9] In an abelian category a morphism is epic exactly when its cokernel is zero ([[cor-a-morphism-in-an-abelian-category-is-monic-exactly-when-its-kernel-is-zero-and-epic-exactly-when-its-cokernel-is-zero]]).

[F10] A functor between additive categories is additive when its maps on hom-groups are group homomorphisms ([[def-additive-functor]]); a functor is exact when it is additive, left exact and right exact, and one-sided exactness means preservation of the corresponding finite limits or colimits ([[def-exact-functor-between-abelian-categories]], [[def-left-exact-and-right-exact-functor]]).

[F11] An additive functor between abelian categories is exact exactly when it preserves kernels and cokernels ([[thm-an-additive-functor-is-exact-exactly-when-it-preserves-kernels-and-cokernels]]).

## Proof

**Proof technique:** direct.

1.1 ($H$ is an additive functor to $A\text{-Mod}$.) By [F2] the ring $A=E^{\mathrm{op}}$ is unital with identity $1_P^{\mathrm{op}}$ and composition in $E$ is bilinear. For $Y\in\mathcal C$, $H(Y)=\mathcal C(P,Y)$ is an abelian group by [F3], and the prescription $e^{\mathrm{op}}\cdot h:=h\circ e$ makes it a left $A$-module: $((e+f)^{\mathrm{op}})\cdot h=h\circ(e+f)=h\circ e+h\circ f$ and $(e^{\mathrm{op}}+f^{\mathrm{op}})\cdot h$ agree, $(e^{\mathrm{op}}f^{\mathrm{op}})\cdot h=((fe)^{\mathrm{op}})\cdot h=h\circ(fe)=(h\circ f)\circ e=e^{\mathrm{op}}\cdot(f^{\mathrm{op}}\cdot h)$, and $1_P^{\mathrm{op}}\cdot h=h\circ1_P=h$. For $u:X\to Y$, postcomposition $u_*=H(u)$ is additive by [F3] and $A$-linear: $u_*(e^{\mathrm{op}}\cdot h)=u\circ h\circ e=e^{\mathrm{op}}\cdot u_*(h)$. Identities and composites are preserved because postcomposition is associative and unital, so $H$ is a functor $\mathcal C\to A\text{-Mod}$ whose hom-maps are group homomorphisms, that is, an additive functor by [F10]. [F2, F3, F10, given]

1.2 ($H$ is faithful.) By [F6] the functor $\mathcal C(P,-)$ is faithful: for all $u\neq v:X\to Y$ there is $h:P\to X$ with $u\circ h\neq v\circ h$. The underlying functions of $H(u)$ and $\mathcal C(P,-)(u)$ coincide, so $H(u)\neq H(v)$, and $H$ is faithful in the stated elementwise form. [F6, given]

1.3 (Nonzero objects are detected.) Suppose $H(Z)=0$, so $H(Z)$ is the zero group and every morphism $P\to Z$ is zero. By [F6] the canonical morphism $f:\coprod_{u\in\mathcal C(P,Z)}P\to Z$ is an epimorphism; its index set is the singleton $\{0_{P,Z}\}$, so by [F7] the coproduct is $P$ and $f$ is the zero morphism $0:P\to Z$. The image of $0:P\to Z$ is the zero subobject, the same image as that of the zero morphism $0\to Z$ out of the zero object, so $\operatorname{coker}f\cong\operatorname{coker}(0\to Z)\cong Z$ by [F8]. Since $f$ is epic, [F9] gives $\operatorname{coker}f=0$; hence $Z\cong0$, that is, $Z=0$. [F6, F7, F8, F9, given, algebra]

2.1 ($H$ preserves coproducts.) By clause (iii) of [F1], the functor $\mathcal C(P,-)$ preserves every set-indexed coproduct, and the additional $A$-module structure of step 1.1 only adds structure to the values: the canonical comparison maps for $H$ have the same underlying group homomorphisms as those of $\mathcal C(P,-)$, which are isomorphisms. Hence $H$ preserves every set-indexed coproduct. [F1, step 1.1, given]

2.2 ($H$ carries short exact sequences to short exact sequences.) Let $0\to K\to E'\to M\to0$ be short exact in $\mathcal C$. By [F4] the induced sequence $0\to H(K)\to H(E')\to H(M)\to0$ is exact; the maps are $A$-linear by step 1.1, and $H$ is additive by step 1.1. [F4, step 1.1, given]

3.1 ($H$ preserves kernels and cokernels.) Let $g:X\to Y$ be a morphism of $\mathcal C$. Applying step 2.2 to $0\to\ker g\to X\to\operatorname{im}g\to0$ and using left exactness [F5] identifies $H(\ker g)$ with $\ker H(g)$; applying step 2.2 to $0\to\operatorname{im}g\to Y\to\operatorname{coker}g\to0$ and using that $H(X)\to H(\operatorname{im}g)$ is surjective with kernel $H(\ker g)$ identifies $H(\operatorname{coker}g)$ with $\operatorname{coker}H(g)$. Hence $H$ preserves kernels and cokernels. [F5, step 2.2, given]

4.1 ($H$ is exact.) By step 1.1, $H$ is additive, by [F5] it is left exact, and step 3.1 with [F11] makes it right exact as well: an additive functor preserving kernels and cokernels is exact. By the definitions of [F10] this means precisely that $H$ preserves every finite limit and every finite colimit that exists in $\mathcal C$, in addition to the kernels and cokernels just exhibited. [F5, F10, F11, step 1.1, step 3.1]

5.1 Steps 1.1-1.3 establish that $H$ is an additive functor and is faithful, and show that $H(Z)=0$ forces $Z=0$; step 2.1 gives coproduct preservation, and steps 2.2, 3.1 and 4.1 give exactness with preservation of kernels, cokernels and finite limits and colimits. Every construction uses only the given category, the object $P$ and postcomposition, so no element is chosen and no choice principle is used. [step 1.1, step 1.2, step 1.3, step 2.1, step 2.2, step 3.1, step 4.1] ∎
