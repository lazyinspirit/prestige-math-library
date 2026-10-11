---
id: lem-wall-crossing-functors-act-on-the-grothendieck-group-by-right-multiplication-by-one-plus-s
kind: lemma
title: The wall-crossing action on the Grothendieck group is multiplication by 1+s
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 4
deps: [lem-wall-crossing-functors-act-on-standard-modules-by-the-two-step-extension,
       def-grothendieck-group-and-character-of-category-o,
       prop-the-grothendieck-group-of-o-has-simple-and-standard-bases,
       def-axiom-of-choice, def-bruhat-order-on-a-finite-weyl-group,
       def-wall-crossing-functor-and-unit-counit]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Wolfgang Soergel, Kategorie O, perverse Garben und Moduln ueber den Koinvarianten zur Weylgruppe, J. Amer. Math. Soc. 3 (1990) 421-445 (MPIM preprint 1989/46 full text)"
      url: "https://archive.mpim-bonn.mpg.de/3653/1/preprint_1989_46.pdf"
      locator: "Section 2.6, Lemma 9 and Theorem 12(i): the W-action on <O_0> defined by sM = theta_s M - M, compatible with the class isomorphism <P_0> -> Z[W] (preprint pp. 18-20)"
    - title: "Arthur Garnier, The classical theory of Soergel bimodules and the link with Lusztig's conjecture, Oberwolfach Arbeitsgemeinschaft note (2022)"
      url: "https://www.lamfa.u-picardie.fr/agarnier/talks/soergel_notes.pdf"
      locator: "Proposition 4.7 (the isomorphism K_0(O_0) -> Z[W], [Delta_w] -> w, intertwining Theta_s and right multiplication by 1+s) and Remark 4.8 (printed pp. 8-9)"
---

## Statement

Assume the Axiom of Choice, inherited from the published items. In the
regular integral block $\mathcal O_\lambda$ of
[[def-regular-integral-category-o-block-and-its-antidominant-weight]] the
assignment
$$c\colon K_0(\mathcal O_\lambda)\longrightarrow\mathbb Z[W],\qquad[\Delta(w\cdot\lambda)]\longmapsto w,$$
is an isomorphism of abelian groups, and for every simple reflection $s$ the
wall-crossing functor $\theta_s$ of
[[def-wall-crossing-functor-and-unit-counit]] satisfies
$$c\,[\theta_sX]=c\,[X]\cdot(1+s)\qquad\text{for all }X\in\mathcal O_\lambda,$$
right multiplication by $1+s$ in the integral group ring $\mathbb Z[W]$.
Consequently, for a reduced word $w=s_1\cdots s_k$ one has
$$c\,[\theta_{s_k}\cdots\theta_{s_1}\Delta(\lambda)]=(1+s_1)(1+s_2)\cdots(1+s_k),$$
the sum of all subexpression products with their actual multiplicities; its top
Bruhat term is $w$ once and all other terms have strictly smaller labels. With
the composition $\theta_{s_1}\cdots\theta_{s_k}$ instead, the factors are
multiplied in the reverse order.

## Facts & Assumptions

**Given:** The regular integral block $\mathcal O_\lambda$, a simple reflection $s$, a reduced word $w=s_1\cdots s_k$, and the class map $c$.

[F1] The classes $[\Delta(v\cdot\lambda)]$, $v\in W$, form a $\mathbb Z$-basis of $K_0(\mathcal O_\lambda)$, of rank $|W|$ ([[prop-the-grothendieck-group-of-o-has-simple-and-standard-bases]], [[def-grothendieck-group-and-character-of-category-o]]).

[F2] $\theta_s$ is exact and satisfies $[\theta_s\Delta(v\cdot\lambda)]=[\Delta(v\cdot\lambda)]+[\Delta(vs\cdot\lambda)]$ for every $v\in W$ ([[lem-wall-crossing-functors-act-on-standard-modules-by-the-two-step-extension]], [[def-wall-crossing-functor-and-unit-counit]]).

[F3] In the Bruhat order of [[def-bruhat-order-on-a-finite-weyl-group]], a product of a subword of the reduced expression $s_1\cdots s_k$ is $\le w$; a proper subword has strictly smaller length and hence a strictly smaller label unless it uses every letter.

## Proof

**Proof technique:** direct.

1.1 The map $c$ is a well-defined homomorphism: every object of $\mathcal O_\lambda$ has a finite Verma flag, its class is the sum of the factor classes, and by [F1] the classes of the standards are a $\mathbb Z$-basis indexed by the $|W|$ elements of $W$; sending the basis element $[\Delta(v\cdot\lambda)]$ to $v$ therefore extends uniquely to an isomorphism of free abelian groups of rank $|W|$. [F1]

2.1 On every Verma class the formula holds: $c[\theta_s\Delta(v\cdot\lambda)]=v+vs=v(1+s)=c[\Delta(v\cdot\lambda)]\cdot(1+s)$ by [F2], using that right multiplication by $s$ in $\mathbb Z[W]$ sends the basis element $v$ to $vs$. Since $\theta_s$ is exact by [F2] and every $X$ carries a finite Verma flag, applying $\theta_s$ to a flag and summing the factorwise classes gives $c[\theta_sX]=c[X](1+s)$ for all $X\in\mathcal O_\lambda$, and both sides are additive in $X$. [F2, step 1.1, algebra]

3.1 Iterate step 2.1 along the word, applying the factors in the order in which they act: the composite $\theta_{s_k}\cdots\theta_{s_1}$ applies $\theta_{s_1}$ first, so $c[\theta_{s_k}\cdots\theta_{s_1}\Delta(\lambda)]=(((1+s_1))(1+s_2))\cdots(1+s_k)=(1+s_1)(1+s_2)\cdots(1+s_k)$; expanding the product gives the sum over all subwords $s_{i_1}\cdots s_{i_r}$, $i_1<\cdots<i_r$, of their products, with the multiplicity with which each product arises. The full subword contributes $w$ once; every proper subword has strictly smaller length, and its product is $\le w$ with smaller length, hence strictly smaller than $w$ in the Bruhat order by [F3]. Reversing the order of composition multiplies the factors in the reverse order, as recorded. [F3, step 2.1, algebra] ∎
