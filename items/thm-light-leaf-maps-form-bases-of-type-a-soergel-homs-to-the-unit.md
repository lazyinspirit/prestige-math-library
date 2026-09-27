---
id: thm-light-leaf-maps-form-bases-of-type-a-soergel-homs-to-the-unit
kind: theorem
title: "Light leaf maps form bases of type-A Soergel homs to the unit"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [lem-the-type-a-diagrammatic-relations-hold-for-soergel-bimodules, thm-the-type-a-soergel-hom-formula, def-type-a-diagrammatic-soergel-category-and-its-bimodule-functor, def-the-type-a-soergel-category, def-type-a-standard-graph-bimodules-support-filtrations-and-character, thm-double-leaves-form-graded-r-bases-of-type-a-diagrammatic-hom-spaces]
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
    - title: "Libedinsky, Sur la catégorie des bimodules de Soergel, §§3–5"
      url: "https://arxiv.org/pdf/0707.3603"
    - title: "Elias–Williamson, Soergel Calculus, §6.1 Construction 6.1, §6.2 Proposition 6.12, §6.7 Remark 6.29, PDF pp. 57–63, 69"
      url: "https://arxiv.org/pdf/1309.0865"
verification:
  precheck: pass
---

## Statement

Let $n\ge2$ over $k=\mathbb Q$, let $\underline x=(x_1,\ldots,x_r)$ be a word in
simple reflections with Bott–Samelson bimodule
$B_{\underline x}=B_{x_1}\otimes_R\cdots\otimes_RB_{x_r}$, and let
$\mathcal F:D\to\mathrm{BSBim}^{\bullet}$ be the graded monoidal functor of
[[lem-the-type-a-diagrammatic-relations-hold-for-soergel-bimodules]] carrying
the word $\underline x$ to $B_{\underline x}$ and the empty word to $R$. Fix once
and for all a choice of light leaves
$\mathrm{LL}_{\underline x,e}\in\operatorname{Hom}_D(\underline x,\emptyset)$ as in
[[def-type-a-diagrammatic-soergel-category-and-its-bimodule-functor]], one for
each subexpression $e$ of $\underline x$ expressing the identity element
$e\in S_n$, and write again $\mathrm{LL}_{\underline x,e}$ for the evaluated
bimodule map $\mathcal F(\mathrm{LL}_{\underline x,e}):B_{\underline x}\to R$.
Then the evaluated light leaves ending at the identity form a homogeneous free
left $R$-basis of the graded $R$-module
$\operatorname{Hom}_{R\text{-}R}(B_{\underline x},R)$: the leaf indexed by $e$ is
homogeneous of degree $d(e)=\#U_0-\#D_0$, the graded rank of
$\operatorname{Hom}_{R\text{-}R}(B_{\underline x},R)$ is
$\sum_{e:\,w_e=e}v^{d(e)}$, the sum over the subexpressions of $\underline x$
expressing the identity, and every $R$-linear combination of the leaves is
therefore the unique one representing a given map. In particular
$\mathcal F$ induces a surjection
$\operatorname{Hom}_D(\underline x,\emptyset)\to\operatorname{Hom}_{R\text{-}R}(B_{\underline x},R)$
on hom spaces to the unit.

## Facts & Assumptions
**Given:** A word $\underline x=(x_1,\ldots,x_r)$ in simple reflections, its Bott–Samelson bimodule $B_{\underline x}$, the diagrammatic category $D$ with its light leaves, and the functor $\mathcal F:D\to\mathrm{BSBim}^{\bullet}$ of [[lem-the-type-a-diagrammatic-relations-hold-for-soergel-bimodules]].

[F1] $\mathcal F$ respects every defining relation of $D$, hence descends to a graded $\mathbb Q$-linear monoidal functor $D\to\mathrm{BSBim}^{\bullet}$ with $\underline x\mapsto B_{\underline x}$ and $\emptyset\mapsto R$; a diagram of degree $d$ is carried to a bimodule map of degree $d$. After finite sums and shifts and restriction to degree-zero maps, it extends by idempotent completion to $\operatorname{Kar}(D)\to\mathrm{SBim}_n$ ([[lem-the-type-a-diagrammatic-relations-hold-for-soergel-bimodules]], [[def-type-a-diagrammatic-soergel-category-and-its-bimodule-functor]]).

[F2] Light leaves: for every word $\underline x$, every $w\in S_n$ and every subexpression $e$ of $\underline x$ expressing $w$ after fixing a reduced word $\underline w$ for $w$, there is a light leaf $\mathrm{LL}_{\underline x,e}:\underline x\to\underline w$ in $D$ of degree $d(e)=\#U_0-\#D_0$; for $\underline y=\emptyset$ the only admissible product is $w=e$, and the light leaves $\mathrm{LL}_{\underline x,e}$ with $e$ expressing the identity form a homogeneous free $R$-basis of $\operatorname{Hom}_D(\underline x,\emptyset)$ ([[def-type-a-diagrammatic-soergel-category-and-its-bimodule-functor]], [[thm-double-leaves-form-graded-r-bases-of-type-a-diagrammatic-hom-spaces]]).

[F3] Imported defect expansion (Elias–Williamson, §2.4, Lemma 2.10 with Corollary 2.11, in the normalization $H_s=vT_s+v$): for a word $\underline x=(x_1,\ldots,x_m)$ one has $\sum_e v^{d(e)}\widetilde T_{w_e}=H_{x_1}\cdots H_{x_m}$, and equivalently the $\Delta$-multiplicity of the standard bimodule $\Delta_w(d)$ in $B_{\underline x}$ is the number of subexpressions of $\underline x$ expressing $w$ with defect $d$, $(B_{\underline x}:\Delta_w(d))=\#\{e:w_e=w,\ d(e)=d\}$ ([[def-type-a-diagrammatic-soergel-category-and-its-bimodule-functor]]).

[F4] Soergel's Hom formula: for objects $M,N$ of $\mathrm{SBim}_n$, $\operatorname{Hom}_{R\text{-}R}(M,N)$ is graded free of graded rank $\sum_{x,d,e}(M:\Delta_x(d))(N:\nabla_x(e))v^{d-e}$ ([[thm-the-type-a-soergel-hom-formula]]).

[F5] The trivial bimodule is $\Delta_e(0)=\nabla_e(0)=R$, generated in degree $0$, and $\Delta_e(d)=\nabla_e(d)=R(d)$ in general; a standard bimodule $R_x$ with $x\ne e$ has $\nabla$-multiplicity concentrated on the single graph $Gr(x)$ ([[def-type-a-standard-graph-bimodules-support-filtrations-and-character]]).

[F6] Imported localised independence (Elias–Williamson, §6.7, Remark 6.29 with the localisation argument of the proof of Corollary 6.8): with the light leaves chosen once and for all, each $\mathcal F(\mathrm{LL}_{\underline x,e})$ is a composition of the images of dots, trivalent vertices and $2m_{st}$-valent vertices, and the images of the light leaves $\mathrm{LL}_{\underline x,e}$ for $e$ expressing a fixed $w$ are linearly independent over $R$ in $\operatorname{Hom}(B_{\underline x},B_{\underline w})$ ([[def-type-a-diagrammatic-soergel-category-and-its-bimodule-functor]]).


## Proof

1.1 The evaluated leaves are well defined and homogeneous: by [F1] the functor $\mathcal F$ is defined on $D$ and preserves degrees in total graded Hom, and by [F2] each $\mathrm{LL}_{\underline x,e}$ with $e$ expressing the identity is a morphism $\underline x\to\emptyset$ in $D$ of degree $d(e)$; its image is therefore an element of $\operatorname{Hom}_{R\text{-}R}(B_{\underline x},R)$ homogeneous of degree $d(e)$, and the family is indexed by the finite set of subexpressions of $\underline x$ expressing the identity together with their target choice. [F1, F2]

1.2 Linear independence: by [F6], the images of the light leaves $\mathrm{LL}_{\underline x,e}$ with $e$ expressing the identity are linearly independent over $R$ inside $\operatorname{Hom}(B_{\underline x},R)$; since $R$ is a domain this is the same as independence over the fraction field of $R$. [F6]

2.1 Rank of the target: by [F4] applied to $M=B_{\underline x}$ and $N=R=\nabla_e(0)$, and by [F5], only the terms with $x=e$ and $e=0$ survive, so that $\operatorname{Hom}_{R\text{-}R}(B_{\underline x},R)$ is graded free of graded rank $\sum_d(B_{\underline x}:\Delta_e(d))v^{d}$; by [F3] this multiplicity is the number of subexpressions of $\underline x$ expressing the identity with defect $d$, so the rank is $\sum_{e:\,w_e=e}v^{d(e)}$, the same finite sum of monomials as in step 1.1. [F3, F4, F5]

3.1 Dimension count: let $V$ be the free graded $R$-module with a homogeneous basis element $b_e$ of degree $d(e)$, one for each subexpression $e$ of $\underline x$ expressing the identity; the $R$-linear map $V\to\operatorname{Hom}_{R\text{-}R}(B_{\underline x},R)$, $b_e\mapsto\mathrm{LL}_{\underline x,e}$, is degree preserving and injective by step 1.2. By step 2.1 the target is graded free with the same graded rank as $V$, hence in every degree $k$ the source and target of the $k$-th degree piece are $\mathbb Q$-vector spaces of the same finite dimension, and the injective degree-$k$ map is an isomorphism; therefore the evaluated light leaves span as well as being independent, and they are a basis. [step 2.1, step 1.2]

4.1 Conclusion: the evaluated light leaves ending at the identity form a homogeneous free left $R$-basis of $\operatorname{Hom}_{R\text{-}R}(B_{\underline x},R)$, their degrees are the defects $d(e)$, and the graded rank is $\sum_{e:\,w_e=e}v^{d(e)}$; in particular $\mathcal F$ is surjective on $\operatorname{Hom}_D(\underline x,\emptyset)\to\operatorname{Hom}_{R\text{-}R}(B_{\underline x},R)$, because the images of the diagrammatic basis already span the target. For $\underline x=\emptyset$ the family has the single member $e=\emptyset$ of defect $0$, and $\operatorname{Hom}_{R\text{-}R}(R,R)=R$ is the free $R$-module of rank $v^0$ generated by the identity, so the statement specialises to the unit. ∎ [F2, step 3.1]





## Remark

**(a) Which input is imported and which is checked here.** The content of Libedinsky's Théorème 5.1 (Elias–Williamson, §7, Proposition 7.6 in the diagrammatic formulation) is recorded as imported results 8 and 1 of [[def-type-a-diagrammatic-soergel-category-and-its-bimodule-functor]]; the linear independence of the evaluated leaves is recorded there as imported result 11 and is not reproved here. What this item does is to identify the graded rank of the target with the total defect count using the library's Hom formula of [[thm-the-type-a-soergel-hom-formula]] and the defect expansion of imported result 10, and to deduce the basis statement from independence and that rank.

**(b) Basis here, span there.** The same argument without step 2.1 gives only that the evaluated leaves are independent; the degree comparison is what upgrades independence to a basis, exactly as in the source's Remark 6.29. The span statement for the whole hom space between Bott–Samelson bimodules is the next item, obtained from this one by Frobenius biadjunction.

**(c) Choice.** No choice principle is used. The finitely many light leaves have to be chosen once and for all, as the sources note; the subexpressions of a word are finite, $R$ is a domain, and the dimension count is performed degree by degree on finitely generated free modules.
