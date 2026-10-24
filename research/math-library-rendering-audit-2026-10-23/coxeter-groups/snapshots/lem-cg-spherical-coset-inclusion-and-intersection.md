---
id: "lem-cg-spherical-coset-inclusion-and-intersection"
kind: lemma
title: "Equality, inclusion and intersection of spherical cosets, and the quotient poset"
status: published
origin: pipeline
dependency_level: 13
deps: ["def-cg-spherical-nerve-coset-poset-and-davis-realization", "thm-hh-parabolic-minimal-representatives-and-length-additivity", "thm-cg-parabolic-intersections-and-coset-factorization", "def-coset", "def-subgroup", "def-group", "lem-coset-membership-and-equality"]
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: "M. W. Davis, The Geometry and Topology of Coxeter Groups, author manuscript of the first edition (Princeton Univ. Press, 2008)"
      url: "https://people.math.osu.edu/davis.12/davisbook.pdf"
      locator: "Theorem 4.1.6(iii) (as quoted in §7.1); §7.1, pp. 123-126"
    - title: "R. Boyd, Homology of Coxeter and Artin groups, PhD thesis, University of Aberdeen, 2018 (with corrections)"
      url: "https://www.maths.gla.ac.uk/~rboyd/Boyd%20Thesis%20with%20corrections.pdf"
      locator: "Lemma 1.3.2 and Definition 1.3.4, printed pp. 20-21"
---

## Statement

Let $(S,m)$, $W$, $\ell$, $\mathbb S$, the parabolics $W_T$ and the poset $WS$ be as in [[def-cg-spherical-nerve-coset-poset-and-davis-realization]]; keep the convention that $S(w)$ is the set of letters of any reduced expression of $w$ ([[thm-hh-parabolic-minimal-representatives-and-length-additivity]] (1)). Let $T,T'\in\mathbb S$ and $w,w'\in W$.

**(1) Equality.** $wW_T=w'W_{T'}$ if and only if $T=T'$ and $w^{-1}w'\in W_T$. Hence the projection $\pi\colon WS\to\mathbb S$, $wW_T\mapsto T$, is well-defined, the members of $WS$ are exactly the left cosets of the subgroups $W_T$ ($T\in\mathbb S$), and the left cosets of any one $W_T$ are pairwise disjoint while cosets of distinct parabolics are distinct.

**(2) Inclusion.** $wW_T\subseteq w'W_{T'}$ if and only if $T\subseteq T'$ and $w^{-1}w'\in W_{T'}$ (equivalently $w\in w'W_{T'}$, equivalently $wW_{T'}=w'W_{T'}$). In particular $W_T\subseteq W_{T'}$ if and only if $T\subseteq T'$.

**(3) Intersections are parabolic cosets.** If $wW_T\cap w'W_{T'}\neq\emptyset$, then $$wW_T\cap w'W_{T'}=uW_{T\cap T'}\qquad\text{for every }u\in wW_T\cap w'W_{T'};$$ moreover $wW_T\cap w'W_{T'}\neq\emptyset$ if and only if $w^{-1}w'\in W_TW_{T'}$, where $W_TW_{T'}=\{ab:a\in W_T,\ b\in W_{T'}\}$. Thus the meet of two spherical cosets in the inclusion order, when their intersection is nonempty, is that intersection coset, of type $T\cap T'$; disjoint spherical cosets have no common lower bound in $WS$.

**(4) The quotient poset.** The left action of (4) of [[def-cg-spherical-nerve-coset-poset-and-davis-realization]] is order-preserving and $\pi$-invariant, and it is transitive on the cosets of each fixed parabolic; the induced map of posets $W\backslash WS\to\mathbb S$ is an isomorphism. Consequently the action on $WS$ is free on the minimal elements $wW_\emptyset$.

## Facts & Assumptions

**Given:** A finite Coxeter matrix $(S,m)$ with presented group $W$ and length $\ell$; spherical subsets $T,T'\in\mathbb S$; elements $w,w'\in W$.

[F1] The support criterion is $W_T=\{x\in W:S(x)\subseteq T\}$ ([[thm-hh-parabolic-minimal-representatives-and-length-additivity]] (1)).

[F2] For each $T\subseteq S$, $W_T\cap S=T$ ([[thm-hh-parabolic-minimal-representatives-and-length-additivity]] (2)).

[F3] Intersections of standard parabolic subgroups: $W_I\cap W_J=W_{I\cap J}$ for all $I,J\subseteq S$ ([[thm-cg-parabolic-intersections-and-coset-factorization]] (1)).

[F4] Multiplication in $W$ is associative, has identity $1$, and every element has a two-sided inverse ([[def-group]]).

[F5] The spherical subsets are downward closed and $W_\emptyset=\{1\}$ ([[def-cg-spherical-nerve-coset-poset-and-davis-realization]] (1)).

[L1] Coset membership and equality: for a subgroup $H\le G$ and $a,b\in G$, one has $b\in aH$ if and only if $a^{-1}b\in H$, and $aH=bH$ if and only if $a^{-1}b\in H$ ([[lem-coset-membership-and-equality]]).

[L2] A left coset of $H\le G$ is the set $gH=\{gh:h\in H\}$ ([[def-coset]]).

[L3] Every subgroup contains the identity and is closed under products and inverses ([[def-subgroup]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $wW_T=w'W_{T'}$. Since $1\in W_T$ and $1\in W_{T'}$ by [L3], the element $w$ lies in $wW_T=w'W_{T'}$ and $w'$ lies in $w'W_{T'}=wW_T$; by [L1] this gives $w^{-1}w'\in W_{T'}$ and $w'^{-1}w\in W_T$. Left-multiplying the coset equality by $w^{-1}$ and using $(w^{-1}w)W_T=W_T$ and $(w^{-1}w')W_{T'}=uW_{T'}$ with $u:=w^{-1}w'$ gives $W_T=uW_{T'}$; since $u^{-1}=w'^{-1}w\in W_T$ by [L3], also $W_{T'}=u^{-1}W_T=W_T$. Intersecting with $S$ and applying [F2] yields $T=T'$, and $w^{-1}w'=u\in W_{T'}=W_T$. [given, F2, L1, L2, L3, algebra]

1.2 Conversely, if $T=T'$ and $w^{-1}w'\in W_T$, then $w'\in wW_T$ by [L1], so $w'W_T=wW_T$ by [L1]; together with $T=T'$ this is $wW_T=w'W_{T'}$. [given, L1, algebra]

1.3 Suppose $wW_T\subseteq w'W_{T'}$. Then $w\in w'W_{T'}$, so $w^{-1}w'\in W_{T'}$ by [L1]; left-multiplying the inclusion by $w^{-1}$ gives $W_T=w^{-1}(wW_T)\subseteq w^{-1}(w'W_{T'})=(w^{-1}w')W_{T'}=W_{T'}$ by [L3]. Hence $T=W_T\cap S\subseteq W_{T'}\cap S=T'$ by [F2]. [given, F2, L1, L2, L3, algebra]

1.4 Conversely, if $T\subseteq T'$ and $w^{-1}w'\in W_{T'}$, then $W_T\le W_{T'}$ by [F1], so $wW_T\subseteq wW_{T'}=w'W_{T'}$ by [L2]. This also covers the two reformulations: $w\in w'W_{T'}$ is equivalent to $w^{-1}w'\in W_{T'}$ by [L1], and $wW_{T'}=w'W_{T'}$ is equivalent to $w^{-1}w'\in W_{T'}$ by [L1] applied with $T=T'$. Taking $w=w'=1$ gives $W_T\subseteq W_{T'}$ if and only if $T\subseteq T'$. [given, F1, F2, L1, L2, algebra]

1.5 Assume $u\in wW_T\cap w'W_{T'}$. Then $uW_T=wW_T$ and $uW_{T'}=w'W_{T'}$ by [L1]. Left multiplication by $u$ is a bijection with inverse left multiplication by $u^{-1}$, by [F4], so it takes intersections to intersections; hence $wW_T\cap w'W_{T'}=uW_T\cap uW_{T'}=u(W_T\cap W_{T'})=uW_{T\cap T'}$, the last equality by [F3]. [given, F3, F4, L1, L2, algebra]

1.6 The intersection is nonempty if and only if $w^{-1}w'\in W_TW_{T'}$: indeed $wW_T\cap w'W_{T'}\neq\emptyset$ means that $wa=w'b$ for some $a\in W_T$, $b\in W_{T'}$, which is equivalent by the group laws [F4] to $w^{-1}w'=ab^{-1}\in W_TW_{T'}$ because $W_{T'}$ is closed under inverses by [L3]. [given, F4, L2, L3, algebra]

2.1 The projection $\pi$ is well-defined by [step 1.1]; for fixed $T$ the criterion $wW_T=w'W_T\iff w^{-1}w'\in W_T$ is [step 1.1] and [step 1.2] together; and two cosets of $W_T$ are disjoint when they are unequal, since if $u$ lies in both then $wW_T=uW_T=w'W_T$ by [L1]. Thus the members of $WS$ are exactly the left cosets of the subgroups $W_T$ ($T\in\mathbb S$). [step 1.1, step 1.2, L1]

2.2 The meet statement of (3): by [step 1.5] the intersection $p=wW_T\cap w'W_{T'}$ of two cosets is a member of $WS$ when nonempty, with $\pi(p)=T\cap T'$ (spherical, since $T\cap T'\subseteq T\in\mathbb S$ and $\mathbb S$ is downward closed by [F5]); it is contained in both cosets, so it is a lower bound. If $r=vW_V\in WS$ satisfies $r\subseteq wW_T$ and $r\subseteq w'W_{T'}$, then $r\subseteq p$ by definition of intersection. Hence $p$ is the greatest lower bound, and no member of $WS$ is contained in two disjoint cosets because members of $WS$ are nonempty. [step 1.5, F5, given, algebra]

2.3 The quotient poset of (4): left multiplication is order-preserving and $\pi$-invariant because $(v\cdot wW_T)=(vw)W_T$ has type $T$ ([step 1.1]); it is transitive on the cosets of a fixed parabolic, as $v:=w'w^{-1}$ sends $wW_T$ to $w'W_T$ by [F4]. The induced map $\bar\pi\colon W\backslash WS\to\mathbb S$ is well-defined by $\pi$-invariance, surjective because the orbit of $W_T$ has type $T$, and injective because two cosets of type $T$ are $wW_T$ and $w'W_T$, and $v:=w'w^{-1}$ carries the first to the second. It preserves order: if orbits satisfy $[q]\le[q']$ with representatives $vq\subseteq v'q'$, then [step 1.3] gives $\pi(vq)\subseteq\pi(v'q')$ in $\mathbb S$; it reflects order: if $T\subseteq T'$, then $W_T\subseteq W_{T'}$ by [step 1.4], so the corresponding orbits are comparable. Hence $\bar\pi$ is an isomorphism of posets. [step 1.1, step 1.3, step 1.4, F4, algebra]

3.1 The minimal elements of $WS$ are exactly the singletons $wW_\emptyset=\{w\}$. If $T\neq\emptyset$, choose $s\in T$. By [F2], $s\in W_T$ and $W_\emptyset\cap S=\emptyset$; with [F5] and $1\in W_T$ by [L3], this gives $s\notin W_\emptyset$ and $W_\emptyset=\{1\}\subsetneq W_T$, hence $wW_\emptyset\subsetneq wW_T$. Conversely, if $vW_V\subseteq wW_\emptyset$, then [step 1.3] gives $V\subseteq\emptyset$, so $V=\emptyset$; the inclusion of singletons is equality, and [step 1.1] gives $v=w$. The action is free on them because $v\cdot wW_\emptyset=wW_\emptyset$ forces $vw=w$ and hence $v=1$ by [F4]. This completes (1)-(4). No Choice is used: every argument is set algebra in the fixed group $W$ and the finite set $S$. [F2, F4, F5, L2, L3, step 1.1, step 1.3, step 2.3, given] ∎
