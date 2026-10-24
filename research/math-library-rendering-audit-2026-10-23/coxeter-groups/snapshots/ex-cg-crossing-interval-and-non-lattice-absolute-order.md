---
id: ex-cg-crossing-interval-and-non-lattice-absolute-order
kind: example
title: "A crossing double transposition whose interval is Boolean, and the two incomparable maximal Coxeter elements of S3"
status: published
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 24
deps:
  - thm-cg-kreweras-complement-and-type-a-partition-model
  - def-cg-reflection-length-absolute-order-and-moved-space
  - def-finite-symmetric-group-and-permutation-notation
  - thm-the-symmetric-group-has-the-coxeter-presentation
justified_by: []
aliases: []
landmark: false
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
proof_strategy: direct
sources:
  references:
    - title: "D. Armstrong, Generalized Noncrossing Partitions and Combinatorics of Coxeter Groups, Memoirs of the AMS 202 (2009), no. 949, arXiv:math/0611106v2"
      url: "https://arxiv.org/pdf/math/0611106"
      locator: "§4.1, printed pp. 82–85, Lemmas 4.1.4–4.1.5 (transposition moves and the cycle-count formula for reflection length), used as context; both examples below are verified by direct multiplication and the type-A formula proved locally in thm-cg-kreweras-complement-and-type-a-partition-model."
verification:
  audited: "2026-10-08"
---

## Example

**(1) A crossing interval that is a lattice.** In $S_4$ let $x=(1\ 3)(2\ 4)$ and $c=(1\ 2\ 3\ 4)$. Then $\ell_T(x)=2$, and its absolute interval is
$$[1,x]_{\le_T}=\{1,(1\ 3),(2\ 4),(1\ 3)(2\ 4)\},$$
a Boolean lattice on two generators. The support partition $\{1,3\}\mid\{2,4\}$ is crossing, so $x\not\le_Tc$ by the type-A criterion ([[thm-cg-kreweras-complement-and-type-a-partition-model]] (2)–(3)). Directly, $x^{-1}c=(1\ 4\ 3\ 2)$ has reflection length $3$, so the absolute-order length equality for $x\le_Tc$ fails ([[def-cg-reflection-length-absolute-order-and-moved-space]] (2)). Thus a non-Coxeter element can have a lattice interval.

**(2) The absolute order of $S_3$ is not a lattice.** With $s_1=(1\ 2)$ and $s_2=(2\ 3)$, the two Coxeter elements are $c=s_1s_2=(1\ 2\ 3)$ and $c'=s_2s_1=(1\ 3\ 2)$ ([[thm-the-symmetric-group-has-the-coxeter-presentation]]). They are distinct maximal and incomparable elements of reflection length $2$ in $\operatorname{Abs}(S_3)$, and have no common upper bound. Each interval $[1,c]_{\le_T}$ and $[1,c']_{\le_T}$ is the five-element lattice $\{1\}\cup T\cup\{c\}$, with the top element replaced by $c'$ in the second interval.

## Facts & Assumptions

**Given:** The symmetric groups $S_3,S_4$, their usual right-to-left permutation composition, the reflection-length absolute order, and the type-A length and interval criterion of [[thm-cg-kreweras-complement-and-type-a-partition-model]].

[F1] In $S_N$, $T$ is the set of transpositions and $\ell_T(w)=N-\#\{\text{cycles of }w\}$, with fixed points counted ([[thm-cg-kreweras-complement-and-type-a-partition-model]] (2)).

[F2] $u\le_Tv$ exactly when $\ell_T(v)=\ell_T(u)+\ell_T(u^{-1}v)$; $\ell_T(g)=0$ exactly for $g=1$ ([[def-cg-reflection-length-absolute-order-and-moved-space]] (1)–(2)).

[F3] In $S_3$, the adjacent transpositions $s_1,s_2$ are the simple reflections of type $A_2$, and composition acts from right to left ([[thm-the-symmetric-group-has-the-coxeter-presentation]], [[def-finite-symmetric-group-and-permutation-notation]]).

## Verification

**Proof technique:** enumerate the reflection-length layers and test the defining length equality, then verify the small absolute intervals directly.

**Given:** The data above.

1.1 (The interval below the crossing element.) By [F1], $\ell_T(x)=4-2=2$. If $t$ is a transposition, then $t^{-1}x=tx$. For $t=(1\ 3)$ or $(2\ 4)$, $tx$ is the other transposition, so $\ell_T(t^{-1}x)=1$ and $t\le_Tx$. The remaining four transpositions join the two cycles of $x$; explicitly, $(1\ 2)x=(1\ 3\ 2\ 4)$, $(1\ 4)x=(1\ 3\ 4\ 2)$, $(2\ 3)x=(1\ 2\ 4\ 3)$, and $(3\ 4)x=(1\ 4\ 2\ 3)$, each a 4-cycle of reflection length $3$. None is below $x$. If $u\le_Tx$, [F2] gives $\ell_T(u)\le2$; length $0$ forces $u=1$, and length $2$ forces $\ell_T(u^{-1}x)=0$, hence $u=x$. Therefore the displayed four elements are the entire interval. Its two distinct atoms have meet $1$ and join $x$, so it is the Boolean lattice on two generators. [F1, F2, algebra]

1.2 (The two maximal elements.) By [F1], the identity, the three transpositions, and the two 3-cycles are exactly the elements of $S_3$, with reflection lengths $0,1,2$, respectively. The products are $s_1s_2=(1\ 2\ 3)$ and $s_2s_1=(1\ 3\ 2)$. They are distinct and have equal length, so [F2] makes them incomparable. No element has length greater than $2$, so each is maximal. A common upper bound would have to be strictly above one of these distinct maximal elements; hence none exists and $\operatorname{Abs}(S_3)$ has no join for this pair. [F1, F2, F3, algebra]

2.1 (The crossing obstruction.) The diagonals joining $1$ to $3$ and $2$ to $4$ cross in the square, so the support partition of $x$ is crossing. Also direct right-to-left multiplication gives $x^{-1}c=(1\ 4\ 3\ 2)$, which has length $3$ by [F1], while $\ell_T(c)=3$ and $\ell_T(x)=2$. Thus $\ell_T(x)+\ell_T(x^{-1}c)=5\ne3=\ell_T(c)$, so $x\not\le_Tc$ by [F2]. This verifies directly the exclusion predicted by the type-A criterion. [F1, F2, step 1.1, algebra]

3.1 (The Coxeter intervals are five-element lattices.) Fix either 3-cycle $d$. For $d=(1\ 2\ 3)$, the products $td$ for $t=(1\ 2),(2\ 3),(1\ 3)$ are $(2\ 3),(1\ 3),(1\ 2)$, respectively; for $d=(1\ 3\ 2)$ they are $(1\ 3),(1\ 2),(2\ 3)$. Hence every $t\in T$ satisfies $\ell_T(d)=1+\ell_T(t^{-1}d)=2$ and lies below $d$. If $w\le_Td$ has length $2$, [F2] forces $\ell_T(w^{-1}d)=0$, so $w=d$. Therefore $[1,d]_{\le_T}=\{1\}\cup T\cup\{d\}$. Its three transpositions are incomparable atoms, any two have meet $1$ and join $d$, so this interval is a five-element lattice. Finally, $s_1(s_1s_2)s_1=s_2s_1$, so the two Coxeter elements are conjugate. [F1, F2, F3, algebra] ∎
