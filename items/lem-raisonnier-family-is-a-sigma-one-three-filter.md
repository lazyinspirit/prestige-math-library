---
id: lem-raisonnier-family-is-a-sigma-one-three-filter
kind: lemma
title: The Raisonnier family is a Sigma-one-three filter
status: draft
origin: pipeline
deps: [def-rapid-and-raisonnier-filters, def-filter, def-boldface-sigma-one-three-measurability, thm-canonical-definable-global-well-order-of-l, def-countable-choice, lem-closed-subsets-of-baire-space-are-tree-bodies, lem-cantor-and-baire-sequence-coding, cor-countable-choice-and-omega-one-cofinality]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - {title: "Hiromi Ishii, Regularity Properties and Inaccessible Cardinals", url: "https://tsukuba.repo.nii.ac.jp/record/37187/files/Hiromi%20ISHII.pdf", locator: "Lemma 3.8 and the complexity discussion before Theorem 3.12, pp. 46-48"}
    - {title: "Thomas Jech, Set Theory, Chapter 25", url: "https://fa.ewi.tudelft.nl/~hart/onderwijs/set_theory/Jech/25-descriptive_set_theory.pdf", locator: "Theorem 25.26 and Lemma 25.27, pp. 494-495"}
---

## Statement

Assume Countable Choice and $\omega_1^{L[x]}=\omega_1$. Then $F(x)$ is a proper
filter on $\omega$ extending the Fréchet filter, and membership $a\in F(x)$ is a
$\Sigma^1_3(x)$ property of the real $a$.

## Facts & Assumptions

**Given:** Countable Choice, a real $x$ with $\omega_1^{L[x]}=\omega_1$, and the Raisonnier family $F(x)$ of the definition item.

[F1] [[def-rapid-and-raisonnier-filters]]: the definition of $F(x)$ by countable covers of $L[x]\cap 2^\omega$, the first-difference function $h$, the set $H(X)$, and the invariance $H(\overline X)=H(X)$.

[F2] [[def-filter]]: the filter axioms: upward closure, closure under intersections of two members, and properness.

[F3] The relativized hierarchy of [F1] carries the coherent definition-code order obtained from [[thm-canonical-definable-global-well-order-of-l]]. Countable well-founded level certificates show in ZF that $z\in L[x]$ is $\Sigma^1_2(x)$, and canonical least codes of the $L[x]$-countable ordinals inject $\omega_1^{L[x]}$ into $L[x]\cap2^\omega$; both facts are proved where used below.

[F4] [[def-countable-choice]] with [[cor-countable-choice-and-omega-one-cofinality]]: Countable Choice makes $\omega_1$ regular, and a countable union of countable sets is countable.

[F5] [[lem-closed-subsets-of-baire-space-are-tree-bodies]] with [[lem-cantor-and-baire-sequence-coding]]: closed subsets of the sequence spaces are bodies of trees, and a countable sequence of reals can be coded by a single real.

[F6] [[def-boldface-sigma-one-three-measurability]]: the pointclass $\Sigma^1_3(x)$ and the fact that a $\Sigma^1_2(x)$ matrix preceded by one real existential is $\Sigma^1_3(x)$.

## Proof

1.1 Upward closure: if $a\in F(x)$ is witnessed by a cover $\langle F_n\rangle$ and $a\subseteq b$, the same cover witnesses $b\in F(x)$. [F1, F2]

1.2 For later use, here is the choice-free relativized coding fact in [F3]. A real $p$ can code a well-founded extensional relation on $\omega$ whose collapse is a correct countable level $L_\beta[x]$ containing a specified real $z$. Well-foundedness is $\Pi^1_1$, and the definition recursion, satisfaction relation and distinguished element checks are arithmetic. Every $z\in L[x]\cap\omega^\omega$ has such a certificate: take the canonical Skolem hull of $\omega\cup\{x,z\}$ in a sufficiently large level and collapse it; least Skolem witnesses canonically enumerate the hull, so no choice is used. Conversely collapse and induction through the hierarchy make every certificate correct. Thus $z\in L[x]$ is $\Sigma^1_2(x)$. [F1, F3]

2.1 Closure under intersections: if $a,b\in F(x)$ are witnessed by covers $\langle F^a_n:n<\omega\rangle$, $\langle F^b_m:m<\omega\rangle$, fix a bijection $\pi:\omega\to\omega\times\omega$ and, for $\pi(k)=(n,m)$, put $F_k:=F^a_n\cap F^b_m$. These pairwise intersections cover $L[x]\cap2^\omega$: for any $z$ in that set, choose $n$ and $m$ with $z\in F^a_n$ and $z\in F^b_m$, and then $z\in F_k$ for the unique $k$ with $\pi(k)=(n,m)$. Moreover $H(F_k)\subseteq H(F^a_n)\cap H(F^b_m)$, because a first difference of two points lying in the intersection is a first difference of points of each factor. Hence $\bigcup_k H(F_k)\subseteq a\cap b$ and $a\cap b\in F(x)$. [F1, step 1.1]

2.2 By [F1] and [F5] replace each cover member by a closed body $[T_n]$ of a binary tree $T_n\subseteq2^{<\omega}$ and code the sequence by one real $y$. Membership $a\in F(x)$ is equivalent to the existence of $y$ such that (i) every **binary** constructible real lies in some $[T_n]$, that is, $\forall z\in2^\omega\ (z\in L[x]\longrightarrow z\in\bigcup_n[T_n])$, and (ii) every first difference of two points of one $[T_n]$ lies in $a$. Using the certificate form from step 1.2, clause (i) is $\Pi^1_2(x)$: universally quantify a binary real and a proposed certificate, and require either failure of its $\Pi^1_1$ certificate or membership in one tree body. Clause (ii) is $\Pi^1_1$, not arithmetic: universally quantify two binary proposed branches and then check the arithmetic first-difference implication. It is therefore also $\Pi^1_2$. Their conjunction preceded by the existential tree-sequence code $y$ is $\Sigma^1_3(x)$ in the sense of [F6]. [F1, F5, F6, step 1.2]

3.1 For every $\alpha<\omega_1^{L[x]}$, $L[x]$ contains a real coding a well-order of a subset of $\omega$ of type $\alpha$: use the domain $\alpha$ for finite $\alpha$ (including the empty domain for $0$), and a bijective enumeration by $\omega$ for infinite $\alpha$. Encode both the domain and the relation by binary coordinates using the fixed pairing. Choose the $<_{L[x]}$-least such code; uniqueness gives an injection $\alpha\mapsto c_\alpha$ from $\omega_1^{L[x]}$ into $L[x]\cap2^\omega$ without any simultaneous choice. Hence the Given equality makes $L[x]\cap2^\omega$ uncountable in the ambient universe. If $\varnothing\in F(x)$, a witnessing cover would have $H(F_n)=\varnothing$ for every $n$, so every $F_n$ would have at most one point; Countable Choice would make their union countable, contradicting that uncountability. Thus $F(x)$ is proper. [F1, F3, F4, step 2.1]

3.2 The Fréchet filter is contained in $F(x)$: fix $n$ and let the cover consist of the $2^n$ cylinders $[s]$, $s\in 2^n$, padded by empty sets. Two distinct reals in one cylinder agree on the first $n$ coordinates, so their first differing coordinate is at least $n$ and their prefix length $h$ is at least $n+1$. In particular $\bigcup_s H([s])\subseteq\{k:k\ge n\}=\omega\setminus n$, so the cofinite set $\omega\setminus n$ belongs to $F(x)$. Together with the steps above this makes $F(x)$ a proper filter extending the Fréchet filter. [F1, F2, step 2.1]

4.1 The steps above establish that $F(x)$ is a proper filter extending the Fréchet filter, and step 2.2 that membership is $\Sigma^1_3(x)$; this is the Statement. [step 3.2, step 2.2] ∎
