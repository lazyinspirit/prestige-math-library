---
title: Atomic Matsumoto theorem
status: draft
research_item: thm-atomic-matsumoto-artin-tits-normalisers
dependency_level: 20
sources:
  references:
    - title: Normalisers of parabolic subgroups of Artin–Tits groups and Tits cone
        intersections
      url: https://arxiv.org/abs/2509.21915v3
      locator: Theorems 1.4 and 4.21, PDF pp. 3 and 20
      statement: Any two standard expressions of a Brink–Howlett morphism are related
        by atomic braid relations.
      hypotheses: A Coxeter diagram, a subset J of its vertices, and a morphism
        between associates of J.
      reading_limits: The frozen extracted text of Theorem 4.21 and its proof was
        read. This reference attributes the article claim and induction method;
        it is not a proof premise.
    - title: Root systems, Tits cones and imaginary cones of Brink-Howlett groupoids
      url: https://arxiv.org/html/2606.12937v1
      locator: Lemma 1.25(a), Remark 1.26, and Lemma 3.12(a) and its proof
      statement: For a root-action morphism u taking the simple roots of I onto those
        of K, if a set L of simple roots is sent negative by u, then the
        positive roots in the I-union-L subsystem outside the I subsystem are
        all sent negative by u and hence form a finite set. For a defined
        elementary generator, Lemma 1.25(a) identifies its inverse's positive
        inversion set with the positive roots of the enlarged subsystem outside
        the original subsystem.
      hypotheses: An arbitrary-rank Coxeter system with its standard based root
        system; the indicated root-action morphism and the stated sign
        condition. The elementary generator is defined when its added component
        is spherical.
      reading_limits: The HTML statements of Lemma 1.25 and Remark 1.26 and the
        statement and proof of Lemma 3.12 were read. No complete reading of the
        paper or reconstruction of its other results is claimed.
    - title: Root systems, Tits cones and imaginary cones of Brink-Howlett groupoids
      url: https://arxiv.org/html/2606.12937v1
      locator: §1.4, rank convention and equation (1.4.4); §1.5, first displayed
        equivalence defining weak right order
      statement: For $x,y\in W$, $\Phi_x\subseteq\Phi_y$ if and only if
        $\ell(y)=\ell(x)+\ell(x^{-1}y)$, where $\Phi_x=\Phi^+\cap x(-\Phi^+)$.
        Also $|\Phi_x|=\ell(x)$.
      hypotheses: A Coxeter system with its based root system as in §1.3. The explicit
        convention in §1.4 permits arbitrary rank. No finiteness assumption on
        the simple generating set or Coxeter group is imposed.
      reading_limits: Read the HTML definitions and statements in §§1.3–1.5, including
        the rank convention and equation (1.4.4). Applied the displayed
        weak-order equivalence with x=p and y=w. The cited background proofs
        were not reconstructed. The source uses Φ_x for the root inversion set
        denoted N(x) here; its N(x) instead denotes a set of reflections.
---

PDF p. 1: ` Theorems 1.4 and 4.21 `; PDF p. 3: ` Theorems 1.4 and 4.21 `; PDF p. 20: ` Theorems 1.4 and 4.21 `

## Prerequisites

- [def-standard-expressions-artin-tits-normalisers](item-def-standard-expressions-artin-tits-normalisers)
- [def-atomic-braid-artin-tits-normalisers](item-def-atomic-braid-artin-tits-normalisers)
- [cor-brink-howlett-generators-length-artin-tits-normalisers](item-cor-brink-howlett-generators-length-artin-tits-normalisers)
- [lem-two-generator-minimal-artin-tits-normalisers](item-lem-two-generator-minimal-artin-tits-normalisers)
- [rem-standard-concatenation-artin-tits-normalisers](item-rem-standard-concatenation-artin-tits-normalisers)
- [lem-author-b19d43a8e520-bh-standard-factor-count](item-lem-author-b19d43a8e520-bh-standard-factor-count)
- [math:lem-word-length-is-well-defined-and-satisfies-the-length-laws](https://alphabetamath.cc/item/lem-word-length-is-well-defined-and-satisfies-the-length-laws)
- [` Root systems, Tits cones and imaginary cones of Brink-Howlett groupoids · Lemma 1.25(a), Remark 1.26, and Lemma 3.12(a) and its proof `](https://arxiv.org/html/2606.12937v1)
- [` Root systems, Tits cones and imaginary cones of Brink-Howlett groupoids · §1.4, rank convention and equation (1.4.4); §1.5, first displayed equivalence defining weak right order `](https://arxiv.org/html/2606.12937v1)


## Statement

Let $(W,S)$ be a Coxeter system with diagram vertex set $\Gamma_0$, with no restriction on its rank or type, and fix $J\subseteq\Gamma_0$. An associate of $J$ is a subset whose standard parabolic subgroup is conjugate to $W_J$. The Brink–Howlett groupoid $\mathcal{BH}(J)$ has these associates as objects; a morphism $w:I\to K$ is an element of $W$ carrying the simple roots indexed by $K$ onto those indexed by $I$, and composable labels multiply from left to right. A standard expression is a finite composable sequence of elementary wall-crossing morphisms whose Coxeter lengths sum to the length of their product. An atomic braid relation replaces one of the two standard expressions for a two-generator common prefix by the other, under the finite relative-root hypothesis of the atomic braid definition.

For associates $I,K$ of $J$ and $w\in\operatorname{Hom}_{\mathcal{BH}(J)}(I,K)$, any two standard expressions of $w$ are related by a finite sequence of atomic braid relations.

## Statement references

[def-standard-expressions-artin-tits-normalisers](item-def-standard-expressions-artin-tits-normalisers)

[def-atomic-braid-artin-tits-normalisers](item-def-atomic-braid-artin-tits-normalisers)

## Facts & Assumptions

**Given:** The Coxeter system, groupoid and two standard expressions of the same morphism as in the Statement. For $L\subseteq\Gamma_0$, let $\Phi_L$ be the roots of the standard parabolic subgroup $W_L$ and $\Phi_L^+$ its positive roots. Put $N(x)=\Phi^+\cap x\Phi^-$; a prefix $p$ of $x$ means $x=pz$ with $\ell(x)=\ell(p)+\ell(z)$.

[F1] Every morphism has a standard expression, by [lem-author-b19d43a8e520-bh-standard-factor-count](item-lem-author-b19d43a8e520-bh-standard-factor-count), and all its standard expressions have the same number of factors, by [cor-brink-howlett-generators-length-artin-tits-normalisers](item-cor-brink-howlett-generators-length-artin-tits-normalisers).

[F2] For distinct $a,b$ outside an associate $I$, if $\Phi_{I\cup\{a,b\}}\setminus\Phi_I$ is finite, there is a morphism $q:I\to H$ with exactly two standard expressions, beginning respectively with $v_{a,I}$ and $v_{b,I}$, and $q$ is a prefix of every morphism from $I$ having both of these elementary prefixes. [lem-two-generator-minimal-artin-tits-normalisers](item-lem-two-generator-minimal-artin-tits-normalisers)

[F3] The equality of those two expressions is an atomic braid relation. Concatenating standard expressions for composable morphisms with length-additive product gives a standard expression. [def-atomic-braid-artin-tits-normalisers](item-def-atomic-braid-artin-tits-normalisers) [rem-standard-concatenation-artin-tits-normalisers](item-rem-standard-concatenation-artin-tits-normalisers)

[F4] A standard expression is length-additive, its consecutive subsequences are standard expressions for their products, and an elementary factor has positive Coxeter length. The length-additivity condition is part of [def-standard-expressions-artin-tits-normalisers](item-def-standard-expressions-artin-tits-normalisers). The simple generators generate $W$ and are involutions, so their word length equals $\ell$, without a rank restriction. The triangle inequality is supplied by [math:lem-word-length-is-well-defined-and-satisfies-the-length-laws](https://alphabetamath.cc/item/lem-word-length-is-well-defined-and-satisfies-the-length-laws), Proof, step 2.1. A strict inequality for any consecutive block would, by subadditivity for the surrounding products, give a strict inequality for the whole expression; hence each block is length-additive. For positivity, the External input gives $\alpha_c\in N(v_{c,I})$ and $\ell(v_{c,I})=|N(v_{c,I})|\geq 1$, using Lemma 1.25(a) and equation (1.4.4) of Dyer–Gimenez.

## External input

For an elementary factor $v_{c,I}$, the independent Lemma 1.25(a) identifies $N(v_{c,I})$ with $\Phi^+_{I\cup\{c\}}\setminus\Phi_I^+$, which contains $\alpha_c$. Dyer–Gimenez §1.5 gives $N(p)\subseteq N(w)$ whenever $\ell(w)=\ell(p)+\ell(p^{-1}w)$; §1.4, equation (1.4.4), gives $|N(w)|=\ell(w)<\infty$. Their root inversion set $\Phi_w$ is our $N(w)$, and their explicit rank convention permits arbitrary rank. If an article morphism $w:I\to K$ has $\alpha_a,\alpha_b\in N(w)$, apply Lemma 3.12(a) to the root-action arrow $u=w^{-1}$: it maps the simple roots of $I$ onto those of $K$ and sends $\alpha_a,\alpha_b$ negative. The proof of that lemma gives $\Phi^+_{I\cup\{a,b\}}\setminus\Phi_I^+\subseteq N(w)$, a finite set. Root signs then give finiteness of the corresponding full root difference. These inputs are from Dyer and Gimenez, Lemma 1.25(a) and Lemma 3.12(a) and its proof, with the conventions translated by inversion.

## Proof

**Proof technique:** induction on the common number of factors.

**Goal:** Connect the two given standard expressions by finitely many atomic braid relations.

1.1 By [F1] both expressions have a common factor count $n$. For $n=0$ both are empty. For $n=1$ each is the single factor labelled by $w$, with source $I$ and target $K$, so the expressions agree. Assume $n>1$ and the claim for morphisms whose standard expressions have fewer than $n$ factors. [F1, F4, given, base, IH]

2.1 Write the expressions as $v_{a,I}\mathbf{x}$ and $v_{b,I}\mathbf{y}$. Their suffixes are standard expressions by [F4]. If their first factors agree, groupoid cancellation makes the suffix products equal, and the induction hypothesis connects the suffixes; placing the common factor in front gives the required sequence. [F4, step 1.1]

3.1 Otherwise $a\ne b$. Both first factors are prefixes of $w$. The elementary inversion formula and arbitrary-rank prefix inclusion in the External input give $\alpha_a,\alpha_b\in N(w)$ and show that $\Phi_{I\cup\{a,b\}}\setminus\Phi_I$ is finite. By [F2], the resulting two-generator morphism $q:I\to H$ is a prefix of $w$. Put $z=q^{-1}w$; it is a morphism $H\to K$ because $q$ and $w$ are groupoid morphisms, and $\ell(w)=\ell(q)+\ell(z)$. [F2, F4, given, step 2.1]

4.1 Let $v_{a,I}\mathbf{r}$ and $v_{b,I}\mathbf{s}$ be the two standard expressions for $q$ from [F2], and choose a standard expression $\mathbf{z}$ for $z$ using the existence assertion of [lem-author-b19d43a8e520-bh-standard-factor-count](item-lem-author-b19d43a8e520-bh-standard-factor-count) in [F1]. By [F3], each of $v_{a,I}\mathbf{r}\mathbf{z}$ and $v_{b,I}\mathbf{s}\mathbf{z}$ is standard for $w$. Their suffixes after the first factors are standard by [F4] and represent the same respective morphisms as $\mathbf{x}$ and $\mathbf{y}$. Each has $n-1$ factors by [F1]. The induction hypothesis connects $\mathbf{x}$ to $\mathbf{r}\mathbf{z}$ and $\mathbf{y}$ to $\mathbf{s}\mathbf{z}$. [F1, F2, F3, F4, step 3.1]

5.1 Prefix the first and last sequences of moves by their respective elementary factors. Between the resulting expressions, replace $v_{a,I}\mathbf{r}$ by $v_{b,I}\mathbf{s}$ using the atomic braid relation of [F3], leaving $\mathbf{z}$ fixed. This finite chain connects the original expressions and completes the induction. [F3, step 1.1, step 4.1, discharge-induction] ∎

## Source notes

The article citation attributes the statement and the induction method. The proof uses the declared suppliers and the independent input above; it does not use the article theorem as a premise.
