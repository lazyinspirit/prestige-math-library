---
title: Two-generator minimal common left multiple
status: published
research_item: lem-two-generator-minimal-artin-tits-normalisers
dependency_level: 18
sources:
  references:
    - title: Normalisers of parabolic subgroups of Artin–Tits groups and Tits cone
        intersections
      url: https://arxiv.org/abs/2509.21915v3
      locator: PDF pp. 19; Lemma 4.15; (4.16)
      statement: Let $I$ be an associate of $J$ and let distinct $a,b\in I^c$ satisfy
        $|\Phi_{I+a+b}\setminus\Phi_I|<\infty$. There exist an associate $K$ and
        $v_{a,b,I}\in\mathrm{Hom}_{\mathcal{BH}}(I,K)$ such that
        $v_{a,I},v_{b,I}$ are left divisors of $v_{a,b,I}$ in $W$. It has
        exactly two standard expressions, of the same length, one starting with
        $v_{a,I}$ and one with $v_{b,I}$. Any Brink–Howlett morphism from $I$
        left-divisible by both $v_{a,I},v_{b,I}$ is left-divisible by
        $v_{a,b,I}$. Thus $v_{a,b,I}$ is minimal both for left divisibility and
        for standard-expression length among such morphisms.
      hypotheses: The hypotheses in the extracted statement; standing Coxeter-system
        notation of §§2–3. Spherical type is imposed only where explicitly
        stated.
      reading_limits: Original PDF p. 19, Lemma 4.15 and its proof, read as extracted
        text and visually inspected. Attribution only; no original-article
        result supplies its own prerequisite proof.
---

PDF p. 19: ` Lemma 4.15; (4.16) `

## Prerequisites

- [def-coxeter-data-artin-tits-normalisers](item-def-coxeter-data-artin-tits-normalisers)
- [def-standard-expressions-artin-tits-normalisers](item-def-standard-expressions-artin-tits-normalisers)
- [def-parabolic-subgroups-artin-tits-normalisers](item-def-parabolic-subgroups-artin-tits-normalisers)
- [cor-brink-howlett-generators-length-artin-tits-normalisers](item-cor-brink-howlett-generators-length-artin-tits-normalisers)
- [lem-author-a7d202611130-finite-relative-longest](item-lem-author-a7d202611130-finite-relative-longest)
- [lem-author-a7d202611130-elementary-root-prefix](item-lem-author-a7d202611130-elementary-root-prefix)
- [lem-author-a7d202611130-simultaneous-prefix](item-lem-author-a7d202611130-simultaneous-prefix)
- [lem-author-a7d202611130-rank-two-standard-words](item-lem-author-a7d202611130-rank-two-standard-words)
- [lem-author-b19d43a8e520-bh-standard-factor-count](item-lem-author-b19d43a8e520-bh-standard-factor-count)


## Statement

Let $I$ be an associate of $J$ and let distinct $a,b\in I^c$ satisfy $|\Phi_{I+a+b}\setminus\Phi_I|<\infty$. There exist an associate $K$ and $v_{a,b,I}\in\mathrm{Hom}_{\mathcal{BH}}(I,K)$ such that $v_{a,I},v_{b,I}$ are left divisors of $v_{a,b,I}$ in $W$. It has exactly two standard expressions, of the same length, one starting with $v_{a,I}$ and one with $v_{b,I}$. Any Brink–Howlett morphism from $I$ left-divisible by both $v_{a,I},v_{b,I}$ is left-divisible by $v_{a,b,I}$. Thus $v_{a,b,I}$ is minimal both for left divisibility and for standard-expression length among such morphisms.

More explicitly, put $T=I\cup\{a,b\}$, and let $D$ be the union of the connected components of the diagram induced on $T$ that meet $\{a,b\}$. Then $W_D$ is finite, and we choose the morphism above to be $v_{a,b,I}=(w_Dw_{D\cap I})^{-1}$, with $K$ the associate target supplied by the finite-relative-longest construction. Here $w_L$ denotes the longest element of the finite parabolic subgroup $W_L$.

## Facts & Assumptions

[F1] The definitions and results used in this argument are supplied, under their stated hypotheses, by [def-standard-expressions-artin-tits-normalisers](item-def-standard-expressions-artin-tits-normalisers); [def-parabolic-subgroups-artin-tits-normalisers](item-def-parabolic-subgroups-artin-tits-normalisers); [cor-brink-howlett-generators-length-artin-tits-normalisers](item-cor-brink-howlett-generators-length-artin-tits-normalisers); [lem-author-a7d202611130-finite-relative-longest](item-lem-author-a7d202611130-finite-relative-longest); [lem-author-a7d202611130-elementary-root-prefix](item-lem-author-a7d202611130-elementary-root-prefix); [lem-author-a7d202611130-simultaneous-prefix](item-lem-author-a7d202611130-simultaneous-prefix); [lem-author-a7d202611130-rank-two-standard-words](item-lem-author-a7d202611130-rank-two-standard-words); [lem-author-b19d43a8e520-bh-standard-factor-count](item-lem-author-b19d43a8e520-bh-standard-factor-count).

[F2] By [def-coxeter-data-artin-tits-normalisers](item-def-coxeter-data-artin-tits-normalisers), a left divisor $u$ of $w$ in $W$ means $w=ux$ with $\ell(w)=\ell(u)+\ell(x)$; equivalently, $\ell(w)=\ell(u)+\ell(u^{-1}w)$. This is the prefix weak order used below.

## Proof


**Given:** The stated Coxeter system, associate $I$, and distinct $a,b$ with finite relative root difference.

**Goal:** Establish the assertion in the Statement.

1.1 Put $T=I\cup\{a,b\}$ and let $D$ be the union of its connected components meeting $\{a,b\}$. By [lem-author-a7d202611130-finite-relative-longest](item-lem-author-a7d202611130-finite-relative-longest), $D$ is spherical and $r=w_Dw_{D\cap I}$ has inverse $q=r^{-1}$, an article morphism with source $I$ and associate target $K$. Set $v_{a,b,I}=q=(w_Dw_{D\cap I})^{-1}$. The finite-root-difference hypothesis supplies this construction without assuming $I$, $J$ or the ambient system spherical. [given, F1]

2.1 By [lem-author-a7d202611130-elementary-root-prefix](item-lem-author-a7d202611130-elementary-root-prefix), both elementary generators exist and left-divide $q$. By [lem-author-a7d202611130-rank-two-standard-words](item-lem-author-a7d202611130-rank-two-standard-words), $q$ has exactly two standard expressions, one beginning with each generator, and their factor counts coincide. [F2, step 1.1]

2.2 For any competing morphism $w$ as in the statement, [lem-author-a7d202611130-simultaneous-prefix](item-lem-author-a7d202611130-simultaneous-prefix) gives $w=qz$ with $z$ an article morphism and $\ell(w)=\ell(q)+\ell(z)$. This proves the universal prefix property. [given, F2, step 1.1]

3.1 Use a standard expression for $q$ from step 2.1 and take a standard expression for the remainder $z$ from [lem-author-b19d43a8e520-bh-standard-factor-count](item-lem-author-b19d43a8e520-bh-standard-factor-count), which supplies one for every article morphism. The length-additive equality in step 2.2 makes their concatenation standard for $w$ by [def-standard-expressions-artin-tits-normalisers](item-def-standard-expressions-artin-tits-normalisers). Expression-length invariance from [cor-brink-howlett-generators-length-artin-tits-normalisers](item-cor-brink-howlett-generators-length-artin-tits-normalisers) gives $\ell_{\mathcal{BH}}(w)=\ell_{\mathcal{BH}}(q)+\ell_{\mathcal{BH}}(z)\ge\ell_{\mathcal{BH}}(q)$. Thus both asserted minimalities hold. [F1, step 2.1, step 2.2] ∎

## Source notes

The article cites Brink–Howlett (1999), p. 326 Type R2, Proposition 2.4 and Lemma 4.1. That source was not read; an earlier scaffold reference to “Lemma 7” did not identify the article’s actual citation and is not used. The five intermediate items instead use independently inspected Dyer–Gimenez Lemma 1.25, Lemma 3.12(a), Theorem 1.22(b) and the exactly-two assertion in §1.27, with explicit reading limits. Prefix minimality and the initial factors are derived independently of the malformed indexing in the latter paragraph. No defect in the original article is asserted.
