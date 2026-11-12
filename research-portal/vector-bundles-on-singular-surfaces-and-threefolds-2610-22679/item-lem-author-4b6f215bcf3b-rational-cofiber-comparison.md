---
title: Rational cofiber implies finite-coefficient equivalence
status: published
research_item: lem-author-4b6f215bcf3b-rational-cofiber-comparison
dependency_level: 3
---

PDF p. 6: Finite-coefficient comparison

## Prerequisites

- [lem-author-4b6f215bcf3b-rational-derived-quotient](item-lem-author-4b6f215bcf3b-rational-derived-quotient)
- [lem-author-4b6f215bcf3b-quotient-cofiber](item-lem-author-4b6f215bcf3b-quotient-cofiber)
- [math:def-cochain-complex-in-an-abelian-category](https://alphabetamath.cc/item/def-cochain-complex-in-an-abelian-category)
- [math:def-derived-category-of-an-abelian-category](https://alphabetamath.cc/item/def-derived-category-of-an-abelian-category)
- [math:thm-the-canonical-mapping-cone-sequence-is-degreewise-split-short-exact](https://alphabetamath.cc/item/thm-the-canonical-mapping-cone-sequence-is-degreewise-split-short-exact)
- [math:thm-long-exact-sequence-in-cohomology](https://alphabetamath.cc/item/thm-long-exact-sequence-in-cohomology)
- [math:prop-the-localization-functor-sends-quasi-isomorphisms-to-isomorphisms](https://alphabetamath.cc/item/prop-the-localization-functor-sends-quasi-isomorphisms-to-isomorphisms)
- [math:prop-cohomology-factors-through-the-derived-category](https://alphabetamath.cc/item/prop-cohomology-factors-through-the-derived-category)


## Statement
Let $f:A\to B$ be a morphism in $D(\mathbb Z)$ whose cofiber is isomorphic in $D(\mathbb Z)$ to the underlying complex of a complex of $\mathbb Q$-vector spaces. For every positive integer $n$, $f\otimes_{\mathbb Z}^{\mathbf L}\mathbb Z/n$ is an isomorphism in $D(\mathbb Z)$, and consequently induces an isomorphism on $H^i$ for every integer $i$.

## Facts & Assumptions

**Given:** $f$ and $n$ as stated, with the standing size convention in [F3].

**Goal:** Prove the finite-coefficient equivalence and its cohomological consequence.

[F1] If an object of $D(\mathbb Z)$ is isomorphic to the underlying complex of a complex of $\mathbb Q$-vector spaces, its derived tensor product with $\mathbb Z/n$ is zero for every $n>0$. [lem-author-4b6f215bcf3b-rational-derived-quotient](item-lem-author-4b6f215bcf3b-rational-derived-quotient)

[F2] The finite-coefficient functor preserves cofibers. Fix $P=[\mathbb Z\xrightarrow{n}\mathbb Z]$ in degrees $-1,0$ and write $T_n(C)=\operatorname{Tot}(C\otimes P)$ and $T_n(g)=g\otimes1_P$. This functor on complexes preserves quasi-isomorphisms and descends to the derived finite-coefficient functor. Every derived morphism $f:A\to B$ has a roof $A\xleftarrow{s}A'\xrightarrow{g}B$ with $s$ a quasi-isomorphism, and its finite-coefficient morphism is $Q(T_n(g))Q(T_n(s))^{-1}$. The complex $\operatorname{Cone}(T_n(g))$ represents a cofiber of that morphism, isomorphic in $D(\mathbb Z)$ to $\operatorname{cofib}(f)\otimes^{\mathbf L}_{\mathbb Z}\mathbb Z/n$. A cofiber means the third object in a distinguished triangle beginning with the given morphism; only its isomorphism class is used. [lem-author-4b6f215bcf3b-quotient-cofiber](item-lem-author-4b6f215bcf3b-quotient-cofiber)

[F3] We use cochain complexes of abelian groups, with $d^i:C^i\to C^{i+1}$ and $d^{i+1}d^i=0$; a cochain map commutes with these differentials. Cochain-to-chain reindexing is $(C^\sharp)_k=C^{-k}$ with differential $d^{-k}$. [math:def-cochain-complex-in-an-abelian-category](https://alphabetamath.cc/item/def-cochain-complex-in-an-abelian-category) Write $Q:K(\mathbb Z)\to D(\mathbb Z)=K(\mathbb Z)[\mathrm{qis}^{-1}]$ for localization of the homotopy category at quasi-isomorphisms, under the supplied interface's standing size hypothesis (a small model of complexes or supplied small cofinal denominator families). Set $H^i(C)=\ker d_C^i/\operatorname{im}d_C^{i-1}$; acyclic means all these groups are zero, and a quasi-isomorphism induces isomorphisms on all of them. The conventions are $C[1]^i=C^{i+1}$, $d_{C[1]}=-d_C$, and $\operatorname{Cone}(u)^i=Y^i\oplus X^{i+1}$ for $u:X\to Y$, with differential $(y,x)\mapsto(d_Yy+u(x),-d_Xx)$. [math:def-derived-category-of-an-abelian-category](https://alphabetamath.cc/item/def-derived-category-of-an-abelian-category)

[F4] The canonical cone sequence is degreewise split short exact. For cochains, reindexing by $(C^\sharp)_k=C^{-k}$ gives $0\to Y\xrightarrow{j}\operatorname{Cone}(u)\xrightarrow{q}X[1]\to0$, where $j(y)=(y,0)$ and $q(y,x)=x$. [math:thm-the-canonical-mapping-cone-sequence-is-degreewise-split-short-exact](https://alphabetamath.cc/item/thm-the-canonical-mapping-cone-sequence-is-degreewise-split-short-exact)

[F5] A short exact sequence of cochain complexes has a long exact cohomology sequence with connecting maps $H^k(C)\to H^{k+1}(A)$. [math:thm-long-exact-sequence-in-cohomology](https://alphabetamath.cc/item/thm-long-exact-sequence-in-cohomology)

[F6] The localization functor $Q$ sends quasi-isomorphisms to isomorphisms in the derived category. [math:prop-the-localization-functor-sends-quasi-isomorphisms-to-isomorphisms](https://alphabetamath.cc/item/prop-the-localization-functor-sends-quasi-isomorphisms-to-isomorphisms)

[F7] For each integer $i$, cohomology factors through the derived category as a functor $H^i:D(\mathbb Z)\to\mathrm{Ab}$, agreeing with cochain cohomology and sending the zero complex to zero. In particular, it sends isomorphisms to group isomorphisms. [math:prop-cohomology-factors-through-the-derived-category](https://alphabetamath.cc/item/prop-cohomology-factors-through-the-derived-category)

## Proof

1.1 Use [F2] to choose a roof $A\xleftarrow{s}A'\xrightarrow{g}B$ for $f$, and put $X=T_n(A')$, $Y=T_n(B)$ and $u=T_n(g):X\to Y$. By [F2], $Q(\operatorname{Cone}(u))$ is isomorphic to $\operatorname{cofib}(f)\otimes^{\mathbf L}_{\mathbb Z}\mathbb Z/n$. The given rationality of $\operatorname{cofib}(f)$ and [F1] make this object zero. Applying [F7] shows that $H^i(\operatorname{Cone}(u))=0$ for every $i$, so this actual cochain cone is acyclic. [F1, F2, F3, F7, given, construct]

2.1 Apply [F4] to $u$, obtaining $0\to Y\to\operatorname{Cone}(u)\to X[1]\to0$. By [F5] and step 1.1 its connecting map $H^{i-1}(X[1])\to H^i(Y)$ is an isomorphism for every $i$. Under $H^{i-1}(X[1])=H^i(X)$ it is $H^i(u)$: a cocycle $x\in X^i$ lifts to $(0,x)\in\operatorname{Cone}(u)^{i-1}$, whose differential is $(u(x),0)$, so the connecting class is $[u(x)]$. Thus $u$ is a quasi-isomorphism, and $Q(u)$ is invertible by [F6]. Also $T_n(s)$ is a quasi-isomorphism by [F2], hence its localization is invertible by [F6]. The roof formula in [F2] now makes $f\otimes^{\mathbf L}_{\mathbb Z}\mathbb Z/n=Q(u)Q(T_n(s))^{-1}$ an isomorphism. Applying the functor $H^i$ from [F7] gives precisely the claimed cohomology isomorphisms. [F2, F3, F4, F5, F6, F7, step 1.1, algebra] ∎
