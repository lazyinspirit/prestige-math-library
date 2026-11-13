---
title: Both-sided divisors of the longest positive lift
status: draft
research_item: lem-author-f758f7dd29a6-longest-lift-divisors
dependency_level: 2
---

## Prerequisites

- [lem-author-f758f7dd29a6-positive-degree](item-lem-author-f758f7dd29a6-positive-degree)
- [lem-author-f758f7dd29a6-monoid-reduced-lifts](item-lem-author-f758f7dd29a6-monoid-reduced-lifts)
- [math:thm-cg-finite-parabolic-longest-element-and-opposition](https://alphabetamath.cc/item/thm-cg-finite-parabolic-longest-element-and-opposition)


## Statement

Let $(W,S)$ be finite, let $M$ be the presented positive Artin monoid, and let $w_0$ be the longest Coxeter element. Put $\Delta=\boldsymbol{w_0}$ using the monoid reduced-word lift. A left divisor of $\Delta$ means $x\in M$ for which $xy=\Delta$ for some $y\in M$; a right divisor means $yx=\Delta$ for some $y$. The left divisors and the right divisors of $\Delta$ coincide, and both sets are exactly $\{\boldsymbol w:w\in W\}$. These elements generate $M$ and form a finite set.

## Statement references

[lem-author-f758f7dd29a6-positive-degree](item-lem-author-f758f7dd29a6-positive-degree)

[lem-author-f758f7dd29a6-monoid-reduced-lifts](item-lem-author-f758f7dd29a6-monoid-reduced-lifts)

[math:thm-cg-finite-parabolic-longest-element-and-opposition](https://alphabetamath.cc/item/thm-cg-finite-parabolic-longest-element-and-opposition)

## Facts & Assumptions

[F1] The longest element satisfies $\ell(w_0w)=\ell(ww_0)=\ell(w_0)-\ell(w)$ and $w_0^2=1$. Word reversal gives $\ell(w^-1)=\ell(w)$. ([math:thm-cg-finite-parabolic-longest-element-and-opposition](https://alphabetamath.cc/item/thm-cg-finite-parabolic-longest-element-and-opposition), part (1))

[F2] Monoid lifts are well defined, have degree equal to Coxeter length and multiply along length-additive products. ([lem-author-f758f7dd29a6-monoid-reduced-lifts](item-lem-author-f758f7dd29a6-monoid-reduced-lifts))

[F3] The monoid degree is additive and equals the length of every representing word. ([lem-author-f758f7dd29a6-positive-degree](item-lem-author-f758f7dd29a6-positive-degree))

## Proof



**Given:** The objects and hypotheses in the statement.

**Goal:** Establish all assertions of the statement.

1.1 For any $w\in W$, [F1] gives $\ell(w^{-1}w_0)=\ell(w_0)-\ell(w)$ and $\ell(w_0w^{-1})=\ell(w_0)-\ell(w)$. Applying [F2] to $w(w^{-1}w_0)=w_0$ and $(w_0w^{-1})w=w_0$ proves that $\boldsymbol w$ is both a left and a right divisor of $\Delta$. [F1, F2]

2.1 Conversely, suppose $xy=\Delta$. Choose words $X,Y$ representing $x,y$. By [F3] their concatenation has length $d(x)+d(y)=d(\Delta)=\ell(w_0)$, and its image in $W$ is $w_0$. Thus it is a reduced word for $w_0$. Each of its initial and final subwords is reduced: a shorter expression for either would shorten the whole word. Consequently $X$ and $Y$ are reduced expressions for their images, and [F2] gives $x=\boldsymbol{q(x)}$ and $y=\boldsymbol{q(y)}$. The same argument applies to $yx=\Delta$. Together with step 1.1 this identifies both divisor sets. They are finite since $W$ is finite, and they contain each generator $a_s=\boldsymbol s$, hence generate $M$. [F2, F3, step 1.1] ∎
