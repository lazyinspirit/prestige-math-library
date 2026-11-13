---
title: Standard expressions correspond to geodesics
status: draft
research_item: lem-standard-geodesic-artin-tits-normalisers
dependency_level: 19
sources:
  references:
    - title: Normalisers of parabolic subgroups of Artin–Tits groups and Tits cone
        intersections
      url: https://arxiv.org/abs/2509.21915v3
      locator: PDF p. 18, Lemma 4.10 and proof
      statement: A concatenation of simple wall crossings is a well-defined geodesic
        exactly when its wall word is a standard expression; every Brink–Howlett
        morphism has a standard expression.
      hypotheses: The article's relative chamber and Brink–Howlett groupoid
        conventions. The completed geometric suppliers used here have finite
        rank, with arbitrary Coxeter type and arbitrary J.
      reading_limits: The frozen article text of Lemma 4.10 and its proof was read,
        and PDF page 18 was visually inspected for this repair. This reference
        attributes the claim and lifting method; it is not used as a proof
        premise. Specified chamber crossings and successive lifts are
        distinguished using the existing chamber-path definition.
---

PDF p. 18: ` Lemma 4.10; (4.11)–(4.12) `

## Prerequisites

- [def-relative-cone-artin-tits-normalisers](item-def-relative-cone-artin-tits-normalisers)
- [def-coxeter-data-artin-tits-normalisers](item-def-coxeter-data-artin-tits-normalisers)
- [def-brink-howlett-artin-tits-normalisers](item-def-brink-howlett-artin-tits-normalisers)
- [def-standard-expressions-artin-tits-normalisers](item-def-standard-expressions-artin-tits-normalisers)
- [def-simple-wall-crossing-artin-tits-normalisers](item-def-simple-wall-crossing-artin-tits-normalisers)
- [def-chamber-paths-artin-tits-normalisers](item-def-chamber-paths-artin-tits-normalisers)
- [def-geodesic-path-artin-tits-normalisers](item-def-geodesic-path-artin-tits-normalisers)
- [prop-geodesic-additivity-artin-tits-normalisers](item-prop-geodesic-additivity-artin-tits-normalisers)
- [prop-chambers-morphisms-artin-tits-normalisers](item-prop-chambers-morphisms-artin-tits-normalisers)
- [thm-universal-brink-howlett-cover-artin-tits-normalisers](item-thm-universal-brink-howlett-cover-artin-tits-normalisers)
- [prop-universal-generators-artin-tits-normalisers](item-prop-universal-generators-artin-tits-normalisers)
- [lem-author-4ac39e6f1702-component-crossing-label](item-lem-author-4ac39e6f1702-component-crossing-label)


## Statement

Let $(W,S)$ be a finite-rank Coxeter system with vertex set $\Gamma_0$, and fix $J\subseteq\Gamma_0$. In the associated relative arrangement, chambers have labels $(x,I)$; a chamber path is a finite nonempty sequence of labels with consecutive chambers adjacent, and is geodesic if its number of crossings is minimal among paths with the same endpoints. The Brink–Howlett groupoid $\mathcal{BH}(J)$ has associates of $J$ as objects, and its morphisms are the elements carrying the target's simple-root set onto the source's simple-root set. Labels of composable morphisms multiply from left to right.

For $a\notin I$, let $D=[I,a]$ be the component containing $a$ in the diagram induced on $I\cup\{a\}$, and suppose $W_D$ is finite. Write $w_L$ for the longest element of a finite standard parabolic $W_L$, put $v_{a,I}=w_{D\setminus\{a\}}w_D$ for the simple wall-crossing element, and write $\omega_{a,I}$ for the corresponding crossing. A standard expression is a composable sequence of such elements whose Coxeter lengths sum to the length of their product.

Given a nonempty finite sequence of specified simple crossings, their concatenation is a well-defined geodesic path exactly when each target chamber equals the next source chamber and their elements form a standard expression with the same initial object. Every standard expression beginning at $I$ lifts, from any chamber $(x,I)$, to a unique geodesic crossing path. If its product is $w:I\to K$, this lift ends at $(xw,K)$. Every morphism $w:I\to K$ has a standard expression. The identity is represented by the empty expression and the corresponding one-chamber path.

## Facts & Assumptions


[F1] For a chamber path with crossing elements $v_1,\ldots,v_m$, its endpoint is obtained by successive right multiplication by these elements. It is geodesic exactly when $\ell(v_1\cdots v_m)=\sum_{i=1}^m\ell(v_i)$. [def-chamber-paths-artin-tits-normalisers](item-def-chamber-paths-artin-tits-normalisers) [def-simple-wall-crossing-artin-tits-normalisers](item-def-simple-wall-crossing-artin-tits-normalisers) [prop-geodesic-additivity-artin-tits-normalisers](item-prop-geodesic-additivity-artin-tits-normalisers)

[F2] A finite crossing component gives a chamber on the opposite side of the corresponding common facet, with label prescribed by $\omega_{a,I}$. Thus each such factor has an adjacent-crossing lift at every chamber of its source type. [lem-author-4ac39e6f1702-component-crossing-label](item-lem-author-4ac39e6f1702-component-crossing-label) [def-simple-wall-crossing-artin-tits-normalisers](item-def-simple-wall-crossing-artin-tits-normalisers)

[F3] The universal wall groupoid has one arrow between any two chamber labels, and its covering functor to $\mathcal{BH}(J)$ has unique arrow lifts from a prescribed source. A morphism $w:I\to K$ lifted from $(x,I)$ ends at $(xw,K)$. [thm-universal-brink-howlett-cover-artin-tits-normalisers](item-thm-universal-brink-howlett-cover-artin-tits-normalisers) [prop-chambers-morphisms-artin-tits-normalisers](item-prop-chambers-morphisms-artin-tits-normalisers)

[F4] Any two chamber labels are joined by a finite chamber path. A path of least crossing number among paths with fixed endpoints is geodesic. [prop-universal-generators-artin-tits-normalisers](item-prop-universal-generators-artin-tits-normalisers) [def-geodesic-path-artin-tits-normalisers](item-def-geodesic-path-artin-tits-normalisers)

## Proof


**Given:** The finite-rank system, subset $J$, relative chambers and groupoid in the Statement. No finiteness of $W$ or $W_J$ is assumed.

**Proof technique:** direct.

**Goal:** Establish the equivalence, endpoint formula and existence, including empty expressions.

1.1 By the definition of concatenation, a nonempty finite sequence of specified simple crossings concatenates to a chamber path exactly when each target chamber equals the next source chamber. Suppose this matching condition holds, giving a path from $(x,I)$ to $(y,K)$. Their source and target types are composable, their product is $x^{-1}y$, and it is a morphism $I\to K$ by [F3]. By [F1], the path is geodesic exactly when the Coxeter length of this product is the sum of the lengths of its factors. This is precisely the defining condition for the displayed composable sequence to be a standard expression. [F1, F3, given]

2.1 Conversely, let $v_1,\ldots,v_m$ be a standard expression from $I$ to $K$, and choose a chamber $(x,I)$. Starting there, use [F2] successively: composability supplies the source type for each next factor, so the factors give a chamber path. Each crossing is the unique lift of its factor from its source by [F3]; hence the path is unique. The standard-expression length equality and [F1] make it geodesic. Successive multiplication gives its endpoint $(xw,K)$, where $w=v_1\cdots v_m$. [F1, F2, F3, step 1.1]

3.1 Given any morphism $w:I\to K$, choose a chamber $(x,I)$ over $I$. By [F3], $(xw,K)$ is a chamber. By [F4], the set of lengths of paths between these chambers is a nonempty set of nonnegative integers, so it has a least member; a path attaining it is geodesic. Its wall word is the label $w$ of the unique arrow between the endpoints. Step 1.1 therefore gives a standard expression for $w$. For the identity, the one-chamber path has zero crossings and gives the empty expression, whose product and length sum are respectively the identity and zero. [F3, F4, step 1.1] ∎

## Source notes

The article reference attributes the statement and the lifting argument. The local proof uses the completed suppliers above; it does not use the article lemma as a premise.
