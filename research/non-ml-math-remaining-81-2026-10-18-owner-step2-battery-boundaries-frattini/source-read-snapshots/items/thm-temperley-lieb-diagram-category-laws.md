---
id: thm-temperley-lieb-diagram-category-laws
kind: theorem
title: "Stacking is associative and horizontal juxtaposition is strict monoidal"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps: [def-temperley-lieb-diagram-category, def-category, def-product-category, def-functor-and-contravariant-functor, def-natural-transformation, def-natural-isomorphism, def-monoidal-category, def-algebra-over-a-commutative-ring, def-free-module-on-a-set-and-standard-basis, lem-nat-add-associative]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "David Ridout and Yvan Saint-Aubin, Standard Modules, Induction and the Structure of the Temperley-Lieb Algebra, §2"
      url: "https://arxiv.org/pdf/1204.4505"
      locator: "§2, PDF/printed pp. 4–5: stacking, loop removal, and the associative diagram algebra."
    - title: "Dana C. Ernst, Michael G. Hastings, and Sarah K. Salmon, Factorization of Temperley–Lieb diagrams"
      url: "https://msp.org/involve/2017/10-1/involve-v10-n1-p07-s.pdf"
      locator: "§3, printed pp. 98–99: pseudo-diagram multiplication and diagram-algebra conventions."
---

## Statement

For every commutative ring $R$, loop value $\delta\in R$, and objects $m,n,p,q\ge0$, the raw diagram data of [[def-temperley-lieb-diagram-category]] form a strict monoidal category $\mathcal{TL}_R(\delta)$ with hom-modules $M_R(m,n)$ and the stated $R$-bilinear stacking composition. Composition is associative, the identity diagrams are two-sided identities, and horizontal juxtaposition is a strict monoidal bifunctor with unit object $0$. Consequently $\operatorname{End}_{\mathcal{TL}_R(\delta)}(n)=\mathrm{TL}_n(R,\delta)$ is a unital associative $R$-algebra whose underlying $R$-module is free on its noncrossing pairing diagrams.

## Facts & Assumptions

**Given:** A commutative ring $R$, $\delta\in R$, nonnegative objects $m,n,p,q$, and the diagram modules and stacking rule in [[def-temperley-lieb-diagram-category]].

[F1] For object labels $m,n$, $M_R(m,n)$ is the free $R$-module on the boundary-matchings set $\mathcal D(m,n)$. ([[def-temperley-lieb-diagram-category]])

[F2] Stacking a diagram $E:n\to p$ above $D:m\to n$ removes each closed cycle for a factor $\delta$, leaves the exterior matching, and extends bilinearly. ([[def-temperley-lieb-diagram-category]])

[F3] The identity is the vertical matching; horizontal juxtaposition with the left diagram first uses object addition and extends bilinearly on diagram modules. ([[def-temperley-lieb-diagram-category]])

[F4] A category has objects and a morphism class with domain and codomain functions; when morphisms are specified by hom-collections, their union is disjoint and each morphism is tagged by its endpoints. Identities and composition must satisfy associativity and the two identity laws. ([[def-category]])

[F5] The product category has ordered-pair objects and morphisms with componentwise composition; a covariant functor preserves identities and composition. ([[def-product-category]], [[def-functor-and-contravariant-functor]])

[F6] A natural transformation has components satisfying the naturality equation, and a natural isomorphism has a natural inverse. ([[def-natural-transformation]], [[def-natural-isomorphism]])

[F7] A monoidal category has a bifunctor, unit object, associator and unitors satisfying the pentagon and triangle axioms. ([[def-monoidal-category]])

[F8] An $R$-algebra is a unital ring with a central unital structure map from $R$; its multiplication is $R$-bilinear. ([[def-algebra-over-a-commutative-ring]])

[F9] Natural-number addition is associative: $(a+b)+c=a+(b+c)$ for all nonnegative integers $a,b,c$. ([[lem-nat-add-associative]])

## Proof

**Proof technique:** direct.

1.1 Take basis diagrams $D:m\to n$ and $E:n\to p$. After identifying the intermediate boundary points, every glued interior point has degree two and every exterior endpoint has degree one. Each connected component is therefore a path with two exterior endpoints or a closed cycle. Keeping the paths and deleting the cycles produces a matching of the exterior labels. The glued arcs are disjoint in the stacked rectangle, so their path components are a representative of a noncrossing pairing; hence the output is again a basis diagram. The number of cycles is the number of cycle components of this finite graph, independent of how its arcs are drawn. Thus the rule is well defined on pairings, and the free-module bases in [F1] give a unique $R$-bilinear extension. [F1, F2, given, construct]

2.1 For basis diagrams $A:m\to n$, $B:n\to p$, and $C:p\to q$, glue all three layers at once. The resulting graph has the same exterior paths and the same total number of cycle components regardless of whether the first interface or the second interface is glued first. Any cycle already removed after composing $B\circ A$ is a component disjoint from the remaining interface, so it contributes one factor $\delta$ in either parenthesization and cannot reconnect to $C$. Hence $(C\circ B)\circ A=C\circ(B\circ A)$ on basis diagrams; $R$-bilinearity gives associativity on all morphisms. [F2, step 1.1, algebra]

2.2 Gluing the vertical matching $1_n$ to either boundary of a diagram creates no cycle and leaves every exterior pair unchanged. Thus $1_n\circ D=D=D\circ1_m$ for each basis diagram $D:m\to n$, and then for every morphism by bilinearity. [F3, step 1.1, algebra]

3.1 Horizontal juxtaposition of basis diagrams is a noncrossing pairing and extends bilinearly by [F3]. For composable pairs of basis diagrams, the two sides of the bifunctor composition law are the same disjoint union of the two stacked graphs; their cycle counts add, so their products agree. Juxtaposition of vertical identity matchings is the vertical identity on the summed object, so juxtaposition preserves identities. By [F5], it is a bifunctor. [F1, F3, F5, step 2.1, step 2.2]

4.1 For three object labels, both bracketings of horizontal juxtaposition have the same left, middle, and right blocks: the right block's offset is $(m+m')+m''$ in one bracketing and $m+(m'+m'')$ in the other, equal by [F9]; the middle block has offset $m$ in both. The same offsets label the boundary points of the juxtaposed diagrams, so their pairings are literally equal as well. Juxtaposition with the empty $0$-diagram changes neither labels nor matchings. The associator and unitors therefore have identity components between strictly equal functors. For every morphism, their naturality equations reduce to equality of that morphism on both sides; their inverses are themselves identity transformations. The pentagon and triangle equations of [F7] are equalities of identity morphisms, so the category is strict monoidal with unit $0$. [F6, F7, F9, step 3.1]

5.1 Take the morphism class to be the disjoint union of the modules $M_R(m,n)$, with each element tagged by its source and target, as required in [F4]. Composition and identities satisfy [F4] by steps 1.1, 2.1 and 2.2, so these data form a category. Its tensor bifunctor and unit satisfy [F7] by steps 3.1–4.1. For each $n$, define $\eta(r)=r1_n$. Module addition gives $\eta(r+s)=\eta(r)+\eta(s)$; bilinearity and $1_n1_n=1_n$ give $\eta(rs)=(rs)1_n=(r1_n)(s1_n)$; and $\eta(1_R)=1_n$. For every $x\in\operatorname{End}(n)$, $(r1_n)x=r(1_nx)=rx=x(r1_n)$, so $\eta$ is central. The composition laws make $\operatorname{End}(n)$ a unital associative ring; [F8] therefore identifies it as a unital $R$-algebra with the diagram basis stated in [F1]. [F1, F4, F7, F8, step 1.1, step 2.1, step 2.2, step 3.1, step 4.1, algebra] ∎

## Remarks

The argument counts components in the glued finite graph. It does not use an isotopy picture to infer associativity, and it uses neither division by $\delta$ nor any field or choice assumption.
