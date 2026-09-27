---
id: thm-evaluated-double-leaves-form-bases-of-type-a-soergel-bimodule-homs
kind: theorem
title: "Evaluated double leaves form bases of type-A Soergel bimodule homs"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [thm-double-leaves-form-graded-r-bases-of-type-a-diagrammatic-hom-spaces, thm-light-leaf-maps-form-bases-of-type-a-soergel-homs-to-the-unit, lem-type-a-soergel-frobenius-biadjunction, def-type-a-diagrammatic-soergel-category-and-its-bimodule-functor, lem-the-type-a-diagrammatic-relations-hold-for-soergel-bimodules, def-the-type-a-soergel-category, def-bott-samelson-bimodule-of-a-word]
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
    - title: "Libedinsky, Sur la catégorie des bimodules de Soergel, §6 Definition 6.1 with Lemma 3.3"
      url: "https://arxiv.org/pdf/0707.3603"
    - title: "Libedinsky, Gentle Introduction to Soergel Bimodules I, §§6.4–6.5, Theorems 6.3–6.4"
      url: "https://arxiv.org/pdf/1702.00039"
    - title: "Elias–Williamson, Soergel Calculus, §6.2–6.3, Theorem 6.11 with Proposition 6.9, PDF pp. 61–63"
      url: "https://arxiv.org/pdf/1309.0865"
verification:
  precheck: pass
---

## Statement

Let $n\ge2$ over $k=\mathbb Q$ and let $\underline x=(x_1,\ldots,x_p)$ and
$\underline y=(y_1,\ldots,y_q)$ be two words in simple reflections, with
Bott–Samelson bimodules $B_{\underline x}$ and $B_{\underline y}$ in
$\mathrm{BSBim}$ ([[def-bott-samelson-bimodule-of-a-word]],
[[def-the-type-a-soergel-category]]). Fix once and for all the light leaves of
the diagrammatic category $D$
([[def-type-a-diagrammatic-soergel-category-and-its-bimodule-functor]]) and let
$\mathcal F:D\to\mathrm{BSBim}^{\bullet}$ be the graded monoidal functor of
[[lem-the-type-a-diagrammatic-relations-hold-for-soergel-bimodules]]. Write
$\overline{\mathrm{LL}}_{\underline y,f}$ for the vertical flip of
$\mathrm{LL}_{\underline y,f}$. Then the evaluated double leaves
$$\mathcal F\bigl(\overline{\mathrm{LL}}_{\underline y,f}\circ\mathrm{LL}_{\underline x,e}\bigr) \;\in\;\operatorname{Hom}_{R\text{-}R}(B_{\underline x},B_{\underline y}),$$
one for each pair $(e,f)$ of subexpressions of $\underline x,\underline y$
expressing the same element $w\in S_n$, form a homogeneous free left $R$-basis of
$\operatorname{Hom}_{R\text{-}R}(B_{\underline x},B_{\underline y})$, with the same
indexing and the same degrees $d(e)+d(f)$ as the diagrammatic double leaves of
[[thm-double-leaves-form-graded-r-bases-of-type-a-diagrammatic-hom-spaces]]. In
particular the total graded Hom module for this pair of word objects has
graded rank $\sum_w\sum_{e,f:\,w_e=w_f=w}v^{d(e)+d(f)}$.
Here and throughout this item $\operatorname{Hom}_{R\text{-}R}$ means the
total graded module $\operatorname{Hom}^{\bullet}$, not just its degree-zero part.
For arbitrary objects
$M=\bigoplus_a B_{\underline x_a}(r_a)$ and
$N=\bigoplus_b B_{\underline y_b}(s_b)$ of $\mathrm{BSBim}$, the matrix entries
of these bases give a homogeneous free basis of
$\operatorname{Hom}^{\bullet}(M,N)$, with graded rank
$$\sum_{a,b}v^{r_a-s_b}\sum_w\sum_{e,f:\,w_e=w_f=w}v^{d(e)+d(f)},$$
where the inner sum uses subexpressions of $\underline x_a,\underline y_b$.
The categorical morphism space is its degree-zero part.

## Facts & Assumptions

**Given:** Words $\underline x,\underline y$, the word $\underline u=\underline x\operatorname{rev}(\underline y)$, and the graded monoidal evaluation functor $\mathcal F:D\to\mathrm{BSBim}^{\bullet}$.

[F1] The fixed double leaves form a homogeneous free left $R$-basis of $\operatorname{Hom}_D(\underline x,\underline y)$, of degrees $d(e)+d(f)$, and the light leaves to the empty word form such a basis when the target is the unit ([[thm-double-leaves-form-graded-r-bases-of-type-a-diagrammatic-hom-spaces]]). Common intermediate reduced words are fixed as in that theorem.

[F2] The images of these unit-target light leaves are a homogeneous free left $R$-basis of $\operatorname{Hom}_{R\text{-}R}(B_{\underline u},R)$ ([[thm-light-leaf-maps-form-bases-of-type-a-soergel-homs-to-the-unit]]).

[F3] The degree-zero Frobenius evaluation and coevaluation make $B_s$ self-dual and satisfy both triangle identities ([[lem-type-a-soergel-frobenius-biadjunction]]). The diagrammatic cup and cap satisfy the same identities by isotopy, and evaluation sends them to these bimodule maps: the cap is multiplication after the merge, $(a\otimes b)\otimes(c\otimes d)\mapsto a\partial_s(bc)d$, and the cup is the split after the dot, $1\mapsto\delta_s\otimes1\otimes1+1\otimes1\otimes\delta_s$ ([[def-type-a-diagrammatic-soergel-category-and-its-bimodule-functor]], [[lem-the-type-a-diagrammatic-relations-hold-for-soergel-bimodules]]).

## Proof

1.1 Unit evaluation is an isomorphism: [F1] gives a basis of $\operatorname{Hom}_D(\underline u,\emptyset)$, and [F2] says its evaluated images form a basis of $\operatorname{Hom}_{R\text{-}R}(B_{\underline u},R)$. Evaluation is left $R$-linear because a polynomial in the leftmost region acts by left multiplication on the output. Thus the map $E_{\underline u,\emptyset}$ on these Hom spaces is an isomorphism of graded left $R$-modules. [F1, F2]

1.2 Right bending: write $X=\underline x$, $Y=\underline y$ and $Y^*=\operatorname{rev}(\underline y)$. The cups and caps of [F3], nested in reverse order, give $\varepsilon_Y:Y\otimes Y^*\to\mathbf1$ and $\eta_Y:\mathbf1\to Y^*\otimes Y$. In either category the maps $$\beta(f)=\varepsilon_Y\circ(f\otimes\operatorname{id}_{Y^*}),\qquad \beta^{-1}(g)=(g\otimes\operatorname{id}_Y)\circ(\operatorname{id}_X\otimes\eta_Y)$$ are inverse degree-zero bijections between $\operatorname{Hom}(X,Y)$ and $\operatorname{Hom}(X\otimes Y^*,\mathbf1)$ by the two triangle identities. They are left $R$-linear: bending takes place on the right and leaves the leftmost polynomial region fixed; the same assertion for bimodules follows from left linearity of the evaluation map. [F3]

2.1 Compatibility: because $\mathcal F$ preserves composition, tensor products and the specified cups and caps, the two bending maps satisfy $$\beta_{\mathrm{bim}}\circ E_{\underline x,\underline y} =E_{\underline u,\emptyset}\circ\beta_D.$$ Both bending maps are isomorphisms by step 1.2 and the unit evaluation map is an isomorphism by step 1.1. Hence $E_{\underline x,\underline y}=\beta_{\mathrm{bim}}^{-1}E_{\underline u,\emptyset}\beta_D$ is an isomorphism of graded left $R$-modules. This conclusion uses no identification of the bending of an individual double leaf with an individual unit-target light leaf. [F3, step 1.1, step 1.2]

3.1 The double leaves of [F1] are a homogeneous basis of the source of $E_{\underline x,\underline y}$, so their images are a homogeneous basis of its target by step 2.1. A graded functor preserves their degrees $d(e)+d(f)$. There are finitely many indexing pairs, since each word has finitely many subexpressions. Thus the graded rank is exactly $\sum_w\sum_{e,f:\,w_e=w_f=w}v^{d(e)+d(f)}$, for this pair of words. [F1, step 2.1]

4.1 For finite direct sums a bimodule map is uniquely a matrix of maps between the summands. A degree-$d$ map $B_{\underline x_a}\to B_{\underline y_b}$ has degree $d+r_a-s_b$ when viewed from $B_{\underline x_a}(r_a)$ to $B_{\underline y_b}(s_b)$, because these shifts lower element degrees by $r_a$ and $s_b$. Thus the individual evaluated bases, placed in one matrix entry at a time, form a free homogeneous basis of the total Hom module, with the displayed sum of shifted ranks. Empty sums give the zero module and rank zero; for $M=R\oplus R$, $N=R$ there are two degree-zero basis entries and rank two. Taking degree zero recovers categorical morphisms, without asserting they form an $R$-submodule. ∎ [given, step 3.1]

## Remark

The proof transfers the evaluation isomorphism through adjunction, rather than
identifying two different leaf constructions. Elias–Williamson Remark 6.10
explicitly distinguishes vertical flips from rotations; §6.7 and Remark 6.29
use adjunction to pass from the unit-target calculation to arbitrary Hom spaces.
If either word is empty the same bending identities apply, and if both are
empty evaluation sends the empty diagram to $\operatorname{id}_R$, giving
$R\cong\operatorname{Hom}_{R\text{-}R}(R,R)$. Only finite words and finitely many
fixed leaves occur; no choice principle is needed.
