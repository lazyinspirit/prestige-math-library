---
id: thm-type-a-diagrammatic-and-bimodule-soergel-categories-are-equivalent
kind: theorem
title: "The type-A diagrammatic and bimodule Soergel categories are equivalent"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [thm-double-leaves-form-graded-r-bases-of-type-a-diagrammatic-hom-spaces, thm-evaluated-double-leaves-form-bases-of-type-a-soergel-bimodule-homs, def-type-a-reflection-realization-and-polynomial-ring, lem-the-type-a-diagrammatic-relations-hold-for-soergel-bimodules, def-type-a-diagrammatic-soergel-category-and-its-bimodule-functor, def-the-type-a-soergel-category, def-the-idempotent-completion-of-a-preadditive-category]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Elias–Williamson, Soergel Calculus, §§3, 5–7"
      url: "https://arxiv.org/pdf/1309.0865"
    - title: "Libedinsky, Sur la catégorie des bimodules de Soergel, §§3–5"
      url: "https://arxiv.org/pdf/0707.3603"
verification:
  precheck: pass
---

## Statement

Let $n\ge2$ and $k=\mathbb Q$, let $D=D_n$ be the type-A diagrammatic Soergel
category over $\mathbb Q$ with Karoubi envelope $\operatorname{Kar}(D)$
([[def-type-a-diagrammatic-soergel-category-and-its-bimodule-functor]]), and let
$\mathrm{SBim}_n$ be the type-A Soergel category of
[[def-the-type-a-soergel-category]]. Let
$\mathcal F:D\to\mathrm{BSBim}^{\bullet}$ be the graded monoidal word functor of
[[lem-the-type-a-diagrammatic-relations-hold-for-soergel-bimodules]] and let
$\operatorname{Kar}(\mathcal F):\operatorname{Kar}(D)\to\mathrm{SBim}_n$ be its
extension after adjoining finite sums and shifts, restricting to degree-zero
maps, and taking idempotent completions. Then:

1. $\operatorname{Kar}(\mathcal F)$ is faithful and full: for all words
   $\underline x,\underline y$ the map
   $$\operatorname{Hom}_D(\underline x,\underline y)\longrightarrow \operatorname{Hom}_{R\text{-}R}(B_{\underline x},B_{\underline y}),\qquad g\longmapsto\mathcal F(g),$$ is an isomorphism of graded left $R$-modules,
   and the restriction of $\operatorname{Kar}(\mathcal F)$ to every hom space of
   $\operatorname{Kar}(D)$ is a bijection;
2. $\operatorname{Kar}(\mathcal F)$ is essentially surjective: every object of
   $\mathrm{SBim}_n$ is isomorphic to the image of an object of
   $\operatorname{Kar}(D)$ under $\operatorname{Kar}(\mathcal F)$;
3. $\operatorname{Kar}(\mathcal F)$ is a graded monoidal functor, so that
   $\operatorname{Kar}(\mathcal F)$ is an equivalence of graded monoidal
   categories.

For $n\le1$ both categories are generated under finite sums, shifts and summands by $R$ up to the fixed
identification and $\mathcal F$ is that identification, so the conclusion holds
there as well.

## Facts & Assumptions
**Given:** The standard type-A realization over $k=\mathbb Q$ with $n\ge2$, the diagrammatic category $D$ of words with its Karoubi envelope $\operatorname{Kar}(D)$, the bimodule category $\mathrm{SBim}_n$, the word functor $\mathcal F:D\to\mathrm{BSBim}^{\bullet}$ and its degree-zero additive and Karoubi extension $\operatorname{Kar}(\mathcal F)$.

[F1] $\mathcal F$ respects every defining relation of $D$, hence descends to a graded $\mathbb Q$-linear monoidal functor $D\to\mathrm{BSBim}^{\bullet}$, $\underline i\mapsto B_{i_1}\otimes_R\cdots\otimes_RB_{i_r}$. After adjoining finite sums and shifts and restricting to degree-zero maps, it extends by degree-zero idempotent completion to a graded monoidal functor $\operatorname{Kar}(D)\to\mathrm{SBim}_n$; the extension is additive and carries a finite direct sum of shifts of words to the corresponding direct sum of shifts of Bott–Samelson bimodules ([[lem-the-type-a-diagrammatic-relations-hold-for-soergel-bimodules]], [[def-type-a-diagrammatic-soergel-category-and-its-bimodule-functor]]).

[F2] Double leaves: the double leaves $\overline{\mathrm{LL}}_{\underline y,f}\circ\mathrm{LL}_{\underline x,e}$, one for each pair of subexpressions $e,f$ of $\underline x,\underline y$ expressing a common element $w\in S_n$ and using the same fixed reduced target word $\underline w$, form a homogeneous free left $R$-basis of the graded left $R$-module $\operatorname{Hom}_D(\underline x,\underline y)$, of degrees $d(e)+d(f)$ ([[thm-double-leaves-form-graded-r-bases-of-type-a-diagrammatic-hom-spaces]]).

[F3] Evaluated double leaves: the evaluated double leaves $\mathcal F(\overline{\mathrm{LL}}_{\underline y,f}\circ\mathrm{LL}_{\underline x,e})$ form a homogeneous free left $R$-basis of $\operatorname{Hom}_{R\text{-}R}(B_{\underline x},B_{\underline y})$ with the same indexing by pairs of subexpressions expressing a common element and the same degrees $d(e)+d(f)$ ([[thm-evaluated-double-leaves-form-bases-of-type-a-soergel-bimodule-homs]]).

[F4] $\mathrm{SBim}_n$ is the idempotent completion $\operatorname{Kar}(\mathrm{BSBim}_n)$ of the category of Bott–Samelson bimodules: its objects are pairs $(M,e)$ with $M$ a finite direct sum of shifted Bott–Samelson products and $e$ a degree-zero idempotent, its morphisms $(M,e)\to(N,f)$ are the maps $u$ with $fu=u=ue$, and the tensor product is $(M,e)\otimes_R(N,f)=(M\otimes_RN,e\otimes f)$, so every object is a finite direct sum of shifts of summands of Bott–Samelson products ([[def-the-type-a-soergel-category]]); the Karoubi envelope of a preadditive category has the same description of objects, morphisms and composition ([[def-the-idempotent-completion-of-a-preadditive-category]]).

[F5] The standard type-A realization over $\mathbb Q$ with $n\ge2$ satisfies the hypotheses of the Soergel-calculus results imported by [F1]–[F3]: $k=\mathbb Q$ is a field, every finite dihedral integer $2m_{st}$ is invertible in $k$, and the realization is faithful, reflection faithful, balanced and Demazure-surjective ([[def-type-a-reflection-realization-and-polynomial-ring]]).

[F6] Idempotent completion of hom sets: a morphism $u:(M,e)\to(N,f)$ of the idempotent completion satisfies $fu=u=ue$, so each hom set is a subgroup of the ambient hom group of the ambient category, and a functor that is an isomorphism on the ambient hom groups restricts to a bijection on these subgroups ([[def-the-idempotent-completion-of-a-preadditive-category]]).

## Proof

1.1 Hypotheses and the functor: by [F5] the type-A realization over $\mathbb Q$ with $n\ge2$ satisfies exactly the standing hypotheses of the imported results, so the functor statement [F1] and the two basis statements [F2] and [F3] apply in the stated form; by [F1] $\mathcal F$ is a graded $\mathbb Q$-linear monoidal word functor to total graded Hom with $\underline i\mapsto B_{\underline i}$ and $\emptyset\mapsto R$. Its finite-sum and shifted extension restricts to degree-zero morphisms before idempotent completion, yielding $\operatorname{Kar}(\mathcal F):\operatorname{Kar}(D)\to\operatorname{Kar}(\mathrm{BSBim})=\mathrm{SBim}_n$, given on objects by $(M,e)\mapsto(\mathcal F M,\mathcal F e)$ and on morphisms by $u\mapsto\mathcal F u$; the degree-zero idempotent $\mathcal F e$ is well defined because $\mathcal F$ preserves degrees, composition and identities. [F1, F4, F5]

1.2 Bijection on the homs of $D$: fix words $\underline x,\underline y$; by [F2] the double leaves are a homogeneous free left $R$-basis of $\operatorname{Hom}_D(\underline x,\underline y)$ and by [F3] their images under $\mathcal F$ are a homogeneous free left $R$-basis of $\operatorname{Hom}_{R\text{-}R}(B_{\underline x},B_{\underline y})$ with the same indexing and the same degrees, so the $\mathbb Q$-linear map $g\mapsto\mathcal F(g)$ takes a basis to a basis of free graded $R$-modules of the same graded rank and is therefore an isomorphism of graded left $R$-modules. For finite sums of shifted words, Hom maps are matrices of shifted word-Hom entries, and [F3] gives the same matrix basis after evaluation; thus the isomorphism extends to total graded Hom for these sums and restricts to a bijection on its degree-zero part. [F2, F3]

1.3 Monoidal and graded structure: by [F1] $\mathcal F$ is a graded monoidal functor, so $\mathcal F(X\otimes Y)\cong\mathcal F X\otimes\mathcal F Y$ compatibly with the associativity and unit constraints, $\mathcal F(\emptyset)=R$ is the unit, and $\mathcal F(X\{k\})=(\mathcal F X)\{k\}$; the tensor product and shifts on the idempotent completions are $(M,e)\otimes(N,f)=(M\otimes N,e\otimes f)$ and $(M,e)\{k\}=(M\{k\},e\{k\})$ by [F4], and $\mathcal F(e\otimes f)=\mathcal F e\otimes\mathcal F f$ because $\mathcal F$ is monoidal; hence $\operatorname{Kar}(\mathcal F)$ is monoidal and preserves the shifts, and it preserves degrees of morphisms by [F1]. [F1, F4]

2.1 Faithful on the Karoubi envelope: let $(M,e)$ and $(N,f)$ be objects of $\operatorname{Kar}(D)$ and let $u:(M,e)\to(N,f)$ be a degree-zero morphism, so that $fu=u=ue$ by [F6]; applying $\mathcal F$ gives $\mathcal F(f)\mathcal F(u)=\mathcal F(u)=\mathcal F(u)\mathcal F(e)$, so $\mathcal F u$ is a categorical morphism $(\mathcal F M,\mathcal F e)\to(\mathcal F N,\mathcal F f)$ and $\operatorname{Kar}(\mathcal F)$ on this hom set is the restriction of the degree-zero bijection of step 1.2 to these subgroups; a restriction of an injective map is injective, so $\operatorname{Kar}(\mathcal F)$ is faithful. [F1, F6, step 1.2]

3.1 Full on the Karoubi envelope: let $v:(\mathcal F M,\mathcal F e)\to(\mathcal F N,\mathcal F f)$ be a degree-zero morphism of $\mathrm{SBim}_n$, so that $v=\mathcal F(f)\,v\,\mathcal F(e)$ by [F4]; by the degree-zero surjectivity in step 1.2 there is a degree-zero $u\in\operatorname{Hom}_D(M,N)$ with $\mathcal F(u)=v$, and then $\mathcal F(fue)=\mathcal F(f)\mathcal F(u)\mathcal F(e)=v=\mathcal F(u)$; since $\mathcal F$ is injective on degree-zero $\operatorname{Hom}_D(M,N)$ by step 1.2, $fue=u$, so $u$ is a morphism $(M,e)\to(N,f)$ of $\operatorname{Kar}(D)$ with $\operatorname{Kar}(\mathcal F)(u)=v$. Hence $\operatorname{Kar}(\mathcal F)$ is full. [F1, F4, step 1.2, step 2.1]

3.2 Essential surjectivity: let $(M,e)$ be an object of $\mathrm{SBim}_n$; by [F4] $M$ is a finite direct sum of shifts of Bott–Samelson products, so $M=\mathcal F(X)$ for the corresponding finite direct sum $X$ of shifts of words in the additive closure of $D$, by the additivity and shift preservation of the extension in [F1]; the degree-zero idempotent $e\in\operatorname{End}(M)$ has a degree-zero preimage $\widetilde e\in\operatorname{End}_D(X)$ under the bijection of step 1.2, and $\widetilde e$ is idempotent because $\mathcal F(\widetilde e^2)=\mathcal F(\widetilde e)^2=e^2=e=\mathcal F(\widetilde e)$ and $\mathcal F$ is faithful by step 2.1; therefore $(M,e)=(\mathcal F X,\mathcal F\widetilde e)=\operatorname{Kar}(\mathcal F)(X,\widetilde e)$ and $\operatorname{Kar}(\mathcal F)$ is essentially surjective. [F1, F4, step 1.2, step 2.1]

4.1 Conclusion: steps 2.1, 3.1, 3.2 and 1.3 show that $\operatorname{Kar}(\mathcal F)$ is faithful, full, essentially surjective and a graded monoidal functor, hence an equivalence of graded monoidal categories; the realization hypotheses used are exactly those recalled in [F5], and for $n\le1$ both sides are generated under finite sums, shifts and summands by $R$, with $\operatorname{End}^{\bullet}(R)=R$ and categorical $\operatorname{End}^{0}(R)=\mathbb Q$, and $\mathcal F$ is the identity on this generator, so the conclusion holds in that case too. ∎ [F5, step 2.1, step 3.1, step 3.2, step 1.3]



## Remark

**(a) What is imported and what is proved here.** Both bases are imported: the diagrammatic double-leaf basis of [F2] (Elias–Williamson, Theorem 6.11 with Proposition 6.12 and Corollary 6.13) and its evaluated counterpart of [F3] (the evaluated double-leaf theorem [[thm-evaluated-double-leaves-form-bases-of-type-a-soergel-bimodule-homs]], whose proof transports the unit-target basis through the adjunction principle recorded as imported result 9 of [[def-type-a-diagrammatic-soergel-category-and-its-bimodule-functor]]). The work of this item is the passage to the idempotent completions, where full faithfulness is inherited from the bijection on the ambient hom groups and essential surjectivity uses that every object of $\mathrm{SBim}_n$ is a summand of a finite sum of shifted Bott–Samelson products.

**(b) The role of the realization hypotheses.** The hypotheses listed in [F5] are the Soergel-realization hypotheses under which the sources prove the calculus and its basis theorems; they are recorded here rather than silently assumed, and the case $n\le1$, where there are no colours, is separated out because the sources assume $n\ge2$.

**(c) Choice.** No choice principle is used: the light leaves and path morphisms are fixed once and for all, the subexpression index sets are finite, and the passage to idempotents lifts the finitely many idempotents of the chosen objects one at a time.
