---
title: Ribbon lcms lift two-generator Brink–Howlett elements
status: published
research_item: lem-ribbon-lcm-lift-artin-tits-normalisers
dependency_level: 19
sources:
  references:
    - title: Normalisers of parabolic subgroups of Artin–Tits groups and Tits cone
        intersections
      url: https://arxiv.org/abs/2509.21915v3
      locator: PDF pp. 22–23, Lemma 5.9
      statement: The two expressions of the ribbon lcm agree with the positive lifts
        of the two standard expressions of the two-generator Brink–Howlett
        element; their lengths coincide, its image is that element, and that
        element is the weak-order join.
      hypotheses: Spherical Coxeter type, an associate I of J, and vertices a and b
        outside I; the two-expression formulation requires distinct vertices.
      reading_limits: The frozen article text of Lemma 5.9 and its proof was read.
        This reference attributes the original claim and is not a proof premise.
---

PDF p. 22: ` Lemma 5.9 `; PDF p. 23: ` Lemma 5.9 `

## Prerequisites

- [def-reduced-ribbon-artin-tits-normalisers](item-def-reduced-ribbon-artin-tits-normalisers)
- [def-standard-expressions-artin-tits-normalisers](item-def-standard-expressions-artin-tits-normalisers)
- [prop-ribbon-lcm-relations-artin-tits-normalisers](item-prop-ribbon-lcm-relations-artin-tits-normalisers)
- [lem-two-generator-minimal-artin-tits-normalisers](item-lem-two-generator-minimal-artin-tits-normalisers)
- [prop-positive-lift-posets-artin-tits-normalisers](item-prop-positive-lift-posets-artin-tits-normalisers)
- [lem-ribbon-generator-lift-artin-tits-normalisers](item-lem-ribbon-generator-lift-artin-tits-normalisers)
- [prop-positive-lift-interface-artin-tits-prerequisites](item-prop-positive-lift-interface-artin-tits-prerequisites)
- [lem-author-f758f7dd29a6-positive-degree](item-lem-author-f758f7dd29a6-positive-degree)
- [def-coxeter-data-artin-tits-normalisers](item-def-coxeter-data-artin-tits-normalisers)
- [def-parabolic-subgroups-artin-tits-normalisers](item-def-parabolic-subgroups-artin-tits-normalisers)


## Statement

Let $(W,S)$ be a finite-rank spherical Coxeter system, so $W$ is finite, and let $A$ be its Artin group with positive submonoid $A^+$ and natural homomorphism $\pi:A\to W$. Fix $J\subseteq S$ and an associate $I$ of $J$, meaning that $W_I$ is conjugate to $W_J$. For $a\in S\setminus I$, let $\mu_{a,I}$ be the elementary ribbon and $v_{a,I}$ its corresponding elementary Brink–Howlett morphism, with the conventions of [def-reduced-ribbon-artin-tits-normalisers](item-def-reduced-ribbon-artin-tits-normalisers) and [def-standard-expressions-artin-tits-normalisers](item-def-standard-expressions-artin-tits-normalisers). A positive lift $\sigma_w$ of $w\in W$ is the Artin word obtained from a reduced Coxeter word for $w$.

For distinct $a,b\in S\setminus I$, let $q=v_{a,b,I}$ be the two-generator morphism of [lem-two-generator-minimal-artin-tits-normalisers](item-lem-two-generator-minimal-artin-tits-normalisers), and let $L=\mu_{a,I}\vee\mu_{b,I}$ be the least common multiple for left divisibility in $A^+$. Its two elementary-ribbon expressions, beginning respectively with $\mu_{a,I}$ and $\mu_{b,I}$, are precisely the factorwise positive lifts of the two standard expressions of $q$. Let $m$ and $n$ be the respective numbers of elementary factors in these two ribbon expressions. Then $m=n$, and $\pi(L)=q$. Moreover $q$ is the join of $v_{a,I}$ and $v_{b,I}$ in the prefix weak order: $u\leq v$ means $v=ux$ with $\ell(v)=\ell(u)+\ell(x)$. This is the order called weak left Bruhat order in the article.

For $a=b$, the lcm is $\mu_{a,I}$ and the join is $v_{a,I}$; the assertion of two distinct expressions is not made in this case.

## Facts & Assumptions


[F1] Every elementary ribbon $\mu_{c,H}$ is the positive lift of the corresponding elementary Brink–Howlett morphism $v_{c,H}$, with the same source and target. [lem-ribbon-generator-lift-artin-tits-normalisers](item-lem-ribbon-generator-lift-artin-tits-normalisers) [def-reduced-ribbon-artin-tits-normalisers](item-def-reduced-ribbon-artin-tits-normalisers) [def-standard-expressions-artin-tits-normalisers](item-def-standard-expressions-artin-tits-normalisers)

[F2] For distinct $a,b$, the ribbon lcm $L$ has exactly two elementary-arrow paths from $I$, beginning respectively with the two specified ribbons. [prop-ribbon-lcm-relations-artin-tits-normalisers](item-prop-ribbon-lcm-relations-artin-tits-normalisers)

[F3] For $T\subseteq S$, the parabolic roots are $\Phi_T=\{u\alpha_s:u\in W_T,\ s\in T\}$, and the ambient roots are $\Phi=\{u\alpha_s:u\in W,\ s\in S\}$. [def-coxeter-data-artin-tits-normalisers](item-def-coxeter-data-artin-tits-normalisers) [def-parabolic-subgroups-artin-tits-normalisers](item-def-parabolic-subgroups-artin-tits-normalisers) Under the hypothesis $|\Phi_{I\cup\{a,b\}}\setminus\Phi_I|<\infty$, [lem-two-generator-minimal-artin-tits-normalisers](item-lem-two-generator-minimal-artin-tits-normalisers) supplies $q$ and its two standard expressions, one starting with each elementary morphism, and says $q$ is a prefix of every Brink–Howlett morphism from $I$ having both specified prefixes. These expressions have the same number of factors.

[F4] Positive lifts form a poset isomorphic under $\pi$ to $W$ with prefix weak order; the lcm in $A^+$ of two positive lifts is again a positive lift. [prop-positive-lift-posets-artin-tits-normalisers](item-prop-positive-lift-posets-artin-tits-normalisers)

[F5] Positive lifts multiply over length-additive Coxeter products. The positive-word degree is additive and the degree of $\sigma_w$ is $\ell(w)$. [prop-positive-lift-interface-artin-tits-prerequisites](item-prop-positive-lift-interface-artin-tits-prerequisites) [lem-author-f758f7dd29a6-positive-degree](item-lem-author-f758f7dd29a6-positive-degree) [prop-positive-lift-posets-artin-tits-normalisers](item-prop-positive-lift-posets-artin-tits-normalisers)

## Proof


**Given:** The spherical system, the associate $I$, and vertices $a,b$ of the Statement.

**Proof technique:** direct.

**Goal:** Identify the two paths, the lcm image, and the weak-order join, including the diagonal case.

1.1 Suppose $a\ne b$. The root set $\Phi$ in [F3] is the image of the finite set $W\times S$, so it is finite. Since $W_{I\cup\{a,b\}}\subseteq W$, the set $\Phi_{I\cup\{a,b\}}\setminus\Phi_I$ is a subset of $\Phi$ and is finite. Thus the hypothesis of the two-generator lemma in [F3] holds. By [F1] and [F4], $L$ is a positive lift, say $L=\sigma_w$. Choose either elementary-ribbon path for $L$ from [F2] and replace each factor by its image elementary morphism. The source and target match by [F1], so their product is a Brink–Howlett morphism $w$ from $I$. If the factors are $v_1,\ldots,v_r$, additivity of positive degree gives $\ell(w)=\sum_i\ell(v_i)$ by [F5]. Hence this is a standard expression by the definition in [def-standard-expressions-artin-tits-normalisers](item-def-standard-expressions-artin-tits-normalisers). In particular $w$ has both $v_{a,I}$ and $v_{b,I}$ as prefixes, using the two paths and their length additivity. By [F3], $q$ is a prefix of $w$. [F1, F2, F3, F4, F5, given]

2.1 Each standard expression of $q$ lifts factorwise to $\sigma_q$ by repeated length-additive multiplication. The expressions start with the two elementary morphisms, so [F1] makes both $\mu_{a,I}$ and $\mu_{b,I}$ left divisors of $\sigma_q$. The lcm property yields $L$ left-dividing $\sigma_q$, and [F4] translates this to $w\leq q$. Step 1.1 gives $q\leq w$; antisymmetry of the prefix order gives $w=q$, and therefore $L=\sigma_q$ and $\pi(L)=q$. [F1, F3, F4, F5, step 1.1]

3.1 The factorwise lifts of the two standard expressions of $q$ are elementary-ribbon paths for $L$, starting with different specified arrows. By the exactly-two assertion in [F2], they are precisely the two paths there. Their factor counts are equal by [F3], proving $m=n$. For any common upper bound $z$ of $v_{a,I}$ and $v_{b,I}$ in prefix order, [F4] makes $\sigma_z$ a common multiple of the two ribbons. Thus $L$ divides $\sigma_z$, and [F4] gives $q\leq z$. The two original elements lie below $q$ by [F3], so $q$ is their join. [F1, F2, F3, F4, step 2.1]

4.1 If $a=b$, the lcm of an element with itself is that element, and the join of an order element with itself is that element. This gives the diagonal assertions. [F4, given] ∎

## Source notes

The article citation records attribution. The proof uses the listed completed suppliers; it does not use the article's Lemma 5.9 as a premise.
