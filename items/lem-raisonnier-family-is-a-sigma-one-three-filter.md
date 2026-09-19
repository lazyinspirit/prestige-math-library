---
id: lem-raisonnier-family-is-a-sigma-one-three-filter
kind: lemma
title: The Raisonnier family is a Sigma-one-three filter
status: draft
origin: pipeline
deps: [def-rapid-and-raisonnier-filters, def-filter, def-boldface-sigma-one-three-measurability, thm-generalized-continuum-hypothesis-in-l, def-countable-choice, lem-closed-subsets-of-baire-space-are-tree-bodies, lem-cantor-and-baire-sequence-coding, cor-countable-choice-and-omega-one-cofinality]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - {title: "Hiromi Ishii, Regularity Properties and Inaccessible Cardinals", url: "https://tsukuba.repo.nii.ac.jp/record/37187/files/Hiromi%20ISHII.pdf", locator: "Lemma 3.8 and the complexity discussion before Theorem 3.12, pp. 46-48"}
---

## Statement

Assume Countable Choice and $\omega_1^{L[x]}=\omega_1$. Then $F(x)$ is a proper
filter on $\omega$ extending the Fréchet filter, and membership $a\in F(x)$ is a
$\Sigma^1_3(x)$ property of the real $a$.

## Facts & Assumptions

**Given:** Countable Choice, a real $x$ with $\omega_1^{L[x]}=\omega_1$, and the Raisonnier family $F(x)$ of the definition item.

[F1] [[def-rapid-and-raisonnier-filters]]: the definition of $F(x)$ by countable covers of $L[x]\cap 2^\omega$, the first-difference function $h$, the set $H(X)$, and the invariance $H(\overline X)=H(X)$.

[F2] [[def-filter]]: the filter axioms: upward closure, closure under intersections of two members, and properness.

[F3] [[thm-generalized-continuum-hypothesis-in-l]]: GCH holds in $L[x]$, so $2^{\aleph_0}=\aleph_1$ there and $L[x]$ has $\aleph_1$-many reals.

[F4] [[def-countable-choice]] with [[cor-countable-choice-and-omega-one-cofinality]]: Countable Choice makes $\omega_1$ regular, and a countable union of countable sets is countable.

[F5] [[lem-closed-subsets-of-baire-space-are-tree-bodies]] with [[lem-cantor-and-baire-sequence-coding]]: closed subsets of the sequence spaces are bodies of trees, and a countable sequence of reals can be coded by a single real.

[F6] [[def-boldface-sigma-one-three-measurability]]: the pointclass $\Sigma^1_3(x)$ and the fact that a $\Sigma^1_2(x)$ matrix preceded by one real existential is $\Sigma^1_3(x)$.

## Proof

1.1 Upward closure: if $a\in F(x)$ is witnessed by a cover $\langle F_n\rangle$ and $a\subseteq b$, the same cover witnesses $b\in F(x)$. [F1, F2]

2.1 Closure under intersections: if $a,b\in F(x)$ are witnessed by covers $\langle F^a_n:n<\omega\rangle$, $\langle F^b_m:m<\omega\rangle$, fix a bijection $\pi:\omega\to\omega\times\omega$ and, for $\pi(k)=(n,m)$, put $F_k:=F^a_n\cap F^b_m$. These pairwise intersections cover $L[x]\cap2^\omega$: for any $z$ in that set, choose $n$ and $m$ with $z\in F^a_n$ and $z\in F^b_m$, and then $z\in F_k$ for the unique $k$ with $\pi(k)=(n,m)$. Moreover $H(F_k)\subseteq H(F^a_n)\cap H(F^b_m)$, because a first difference of two points lying in the intersection is a first difference of points of each factor. Hence $\bigcup_k H(F_k)\subseteq a\cap b$ and $a\cap b\in F(x)$. [F1, step 1.1]

3.1 $F(x)$ is proper: suppose toward contradiction that $\varnothing\in F(x)$. A witnessing cover $\langle F_n\rangle$ would satisfy $\bigcup_nH(F_n)\subseteq\varnothing$, hence $\bigcup_nH(F_n)=\varnothing$. Then every $F_n$ has at most one point, so every $F_n$ is at most countable, and their union is at most countable by Countable Choice; but the union covers $L[x]\cap 2^\omega$, which has cardinality $\aleph_1$ because GCH holds in $L[x]$ and $\omega_1^{L[x]}=\omega_1$, and $\aleph_1$ is uncountable. This contradiction shows that the empty set is not in $F(x)$. [F1, F3, F4, step 2.1]

3.2 The Fréchet filter is contained in $F(x)$: fix $n$ and let the cover consist of the $2^n$ cylinders $[s]$, $s\in 2^n$, padded by empty sets. Two distinct reals in one cylinder agree on the first $n$ coordinates, so their first difference is at least $n$; hence $\bigcup_s H([s])\subseteq\{k:k\ge n\}=\omega\setminus n$ and the cofinite set $\omega\setminus n$ belongs to $F(x)$. Together with the steps above this makes $F(x)$ a proper filter extending the Fréchet filter. [F1, F2, step 2.1]

4.1 Complexity of membership: by step 3.2 and [F1] we may replace each cover member by its closure and then, by [F5], by the body $[T_n]$ of a tree, so that a countable cover is coded by one real $y$. Membership $a\in F(x)$ is then equivalent to the existence of $y$ such that:

(i) every constructible real lies in some $[T_n]$, that is, $\forall z\,(z\in L[x]\to z\in\bigcup_n[T_n])$; and

(ii) every first difference of two points of one $[T_n]$ lies in $a$.

Using that $z\in L[x]$ is $\Sigma^1_2(x)$, say $\exists w\forall v\,\theta(z,w,v,x)$ with arithmetic $\theta$, clause (i) becomes $\forall z\forall w\exists v\,(\neg\theta\lor z\in\bigcup_n[T_n])$, a $\Pi^1_2$ matrix, while clause (ii) is arithmetic in $a$ and $y$. Hence $a\in F(x)$ is equivalent to a formula $\exists y\,\forall z\,\forall w\,\exists v$ with an arithmetic matrix, which is $\Sigma^1_3(x)$ in the sense of [F6]. [F1, F5, F6, step 3.2]

5.1 The steps above establish that $F(x)$ is a proper filter extending the Fréchet filter, and step 4.1 that membership is $\Sigma^1_3(x)$; this is the Statement. [step 3.2, step 4.1] ∎
