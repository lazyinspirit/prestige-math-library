---
id: lem-primary-quotient-class-formation-ext-duality
kind: lemma
title: Primary finite-module Ext duality for a quotient class formation
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 8
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - def-class-formation
  - lem-quotient-class-formation-primary-invariants
  - lem-tate-nakayama-cup-product-criterion
  - thm-module-categories-have-enough-injectives
  - def-injective-object
  - def-ext-via-an-injective-resolution-of-the-second-variable
  - thm-long-exact-sequence-in-cohomology
  - thm-continuous-profinite-cohomology-as-direct-limit-of-finite-quotients
  - prop-finite-groups-have-torsion-annihilation-in-positive-cohomology
  - lem-subgroups-of-free-abelian-groups-are-free
  - thm-injective-modules-over-a-pid-are-exactly-divisible
  - thm-higher-yoneda-ext-agrees-with-derived-ext
  - prop-yoneda-product-is-composition-in-the-derived-category
  - thm-restriction-corestriction-composite-is-multiplication-by-the-index
proof_strategy: direct
axiom_use: AC and DC are explicit for discrete continuous injective Ext, dual exactness and the supplied complete-resolution convention. Tate–Nakayama is applied only to finite free integer lattices, never to finite torsion modules.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: J. S. Milne, Arithmetic Duality Theorems, 2nd ed.
      url: https://www.jmilne.org/math/Books/ADTnot.pdf
      locator: Chapter I, Theorem 1.8 and Lemma 1.9, printed pp.21–23, together with the quotient-formation generalization p.25. The primary lattice and finite-coinduction argument is supplied below.
verification: {}
---

## Statement

Assume AC and DC and the supplied ordinary and complete cohomology conventions. Let $(G_0,C,(\operatorname{inv}_U))$ be a class formation, let $H\trianglelefteq G_0$ be closed, and put $G=G_0/H$, $B=C^H$. Let $\ell$ be a prime for which the $\ell$-valuations of the orders of finite quotients of $G$ are unbounded. Let $M$ be a finite discrete continuous $G$-module killed by a power of $\ell$, and set $D(A)=\operatorname{Hom}(A,\mathbb Q/\mathbb Z)$.

The actual Yoneda product followed by inflation and $\operatorname{inv}_{G_0}$ defines
$$\alpha_r(G,M):\operatorname{Ext}^r_G(M,B)\longrightarrow D(H^{2-r}(G,M))\qquad(r\ge1),$$
where negative cohomology is zero. The map is an isomorphism for $r\ge2$, so $\operatorname{Ext}^r_G(M,B)=0$ for $r\ge3$. If, in addition, for every open subgroup $V\le G$ and $n\ge1$ the actual cyclic-coefficient map
$$\alpha_1(V,\mathbb Z/\ell^n):B^V/\ell^n B^V\longrightarrow D(H^1(V,\mathbb Z/\ell^n))$$
is an isomorphism, then $\alpha_1(G,M)$ is an isomorphism as well. No conclusion about degree zero is asserted.

## Facts & Assumptions

**Given:** The class formation, closed subgroup, unbounded prime, finite primary module and explicit AC/DC in the Statement. The degree-one conclusion additionally assumes precisely the displayed cyclic maps.

[A1] AC and DC supply the named resolution conventions. [[def-axiom-of-choice]] [[def-dependent-choice]]

[F1] For every open $V\le G$, $H^1(V,B)=0$ and inflation followed by the ambient invariant injects $H^2(V,B)$ into $\mathbb Q/\mathbb Z$ with image containing its whole $\ell$-primary subgroup. Restriction multiplies the invariant by the index. For every open normal $W\trianglelefteq V$, the actual finite relative degree-two group has order $[V:W]$, with fundamental class of invariant $1/[V:W]$. [[lem-quotient-class-formation-primary-invariants]]

[F2] The finite-group double-boundary Tate–Nakayama map is an isomorphism when the stated Tor vanishes and the relative fundamental class restricts to a generator for every subgroup. [[lem-tate-nakayama-cup-product-criterion]]

[F3] Ordinary injectives exist; injective Ext is calculated by actual injective resolutions, and exact cochain rows yield long exact sequences. [[thm-module-categories-have-enough-injectives]] [[def-injective-object]] [[def-ext-via-an-injective-resolution-of-the-second-variable]] [[thm-long-exact-sequence-in-cohomology]]

[F4] Continuous cohomology is the filtered limit of finite-quotient cohomology; positive cohomology of a finite group is annihilated by its order. [[thm-continuous-profinite-cohomology-as-direct-limit-of-finite-quotients]] [[prop-finite-groups-have-torsion-annihilation-in-positive-cohomology]]

[F5] Subgroups of free abelian groups are free, and $\mathbb Q/\mathbb Z$ is injective, making $D$ exact. [[lem-subgroups-of-free-abelian-groups-are-free]] [[thm-injective-modules-over-a-pid-are-exactly-divisible]]

[F6] Yoneda Ext agrees with injective Ext, and Yoneda products are derived compositions. Finite-index corestriction after restriction multiplies by the index. [[thm-higher-yoneda-ext-agrees-with-derived-ext]] [[prop-yoneda-product-is-composition-in-the-derived-category]] [[thm-restriction-corestriction-composite-is-multiplication-by-the-index]]

## Proof

**Proof technique:** kill only primary lattice classes by finite fundamental-class inflation, then use exact finite-coinduction diagrams.

1.1 The category of discrete continuous $G$-modules has enough injectives. For an injective abelian group $I$, the continuous-function module $J(I)=C_{\mathrm{cts}}(G,I)$ with $(g f)(h)=f(hg)$ is discrete, and evaluation at one identifies $\operatorname{Hom}_G(X,J(I))$ with $\operatorname{Hom}_{\mathbb Z}(X,I)$. Thus it is injective, and an ordinary embedding $B\hookrightarrow I$ induces a $G$-embedding into $J(I)$. Iteration supplies a resolution. Continuous normalized cochains are exact in their coefficient: their finite images can be lifted through a surjection. Homogeneous cochains of $J(I)$ contract by inserting $1$; every injective is a summand of such a module. Therefore continuous cohomology is the derived invariants functor, by the finite-total-degree double-complex argument. Exactness of Hom into injective terms gives the first-variable Ext sequence, and Yoneda comparison gives its natural compatibility with products. The same constructions work over every open subgroup. [A1, F3, F4, F6, construct, algebra]

2.1 Let $L$ be a finite free integer $G$-lattice. Since $-\otimes L$ is exact, its equivariant right adjoint $\operatorname{Hom}_{\mathbb Z}(L,-)$ takes injectives to injectives; hence $\operatorname{Ext}^r_G(L,B)=H^r(G,L^*\otimes B)$. Every class has a finite quotient representative on $G/W$, with $W$ acting trivially on $L$. For every subgroup $V/W\le G/W$, the fundamental class of invariant $1/[G:W]$ restricts to invariant $1/[V:W]$; [F1] therefore gives all subgroup generator hypotheses in [F2]. Since $L^*$ is free, its integer Tor with $B^W$ vanishes. For $r\ge3$, the finite representative is the image of some $a\in H^{r-2}(G/W,L^*)$. If its continuous Ext class is $\ell$-primary, multiply a finite representative by an appropriate power of $\ell$ and enlarge $W$ until that multiple is zero; the resulting representative is itself $\ell$-primary because the Tate–Nakayama map is an isomorphism. Choose $W'\subset W$ normal in $G$ with $\ell$-valuation of $[W:W']$ at least the order exponent of $a$, possible by [F1]. Inflation sends the fundamental class to $[W:W']$ times the new fundamental class, so the inflated representative vanishes. Thus $\operatorname{Ext}^r_G(L,B)(\ell)=0$ for $r\ge3$. This applies over every open subgroup. [F1, F2, F4, step 1.1, choose, algebra]

3.1 Every finite continuous $\ell$-primary $M$ has a presentation $0\to L_1\to L_0\to M\to0$ by finite free integer lattices: choose a finite quotient acting on $M$, map finitely many copies of its integral group ring onto $M$, and use [F5] on the kernel. The Ext sequence and step 2.1 show $\operatorname{Ext}^r_G(M,B)(\ell)=0$ for $r\ge4$. As $\ell^n M=0$ for some $n$, functoriality gives $\ell^n\operatorname{Ext}^r_G(M,B)=0$, so this is full vanishing in those degrees. [F3, F5, step 2.1, choose, algebra]

4.1 For the trivial module $\mathbb Z/\ell^n$, the Ext sequence for $0\to\mathbb Z\xrightarrow{\ell^n}\mathbb Z\to\mathbb Z/\ell^n\to0$ and [F1] gives $\operatorname{Ext}^1=B^G/\ell^nB^G$ and $\operatorname{Ext}^2=H^2(G,B)[\ell^n]$. Multiplication by $\ell^n$ is surjective on the invariant image: it is surjective on its full $\ell$-primary component and invertible on every other primary component. Step 2.1 and this surjectivity yield $\operatorname{Ext}^3=0$; higher groups vanish by step 3.1. Yoneda evaluation sends invariant $t$ to $\bar a\mapsto at$, so $\alpha_2$ is the actual isomorphism onto $D(\mathbb Z/\ell^n)$. For degree one the displayed cyclic hypothesis supplies exactly the remaining isomorphism. Finite direct sums give these conclusions for any finite trivial $\ell$-primary module. [F1, F3, F6, step 2.1, step 3.1, algebra]

5.1 Choose $U\trianglelefteq G$ open acting trivially on $M$. Embed $M$ in $P=\operatorname{Coind}_U^G M$ by $m\mapsto(g\mapsto gm)$; evaluation at the identity coset splits this as an abelian group, so $M_1=P/M$ is also finite $\ell$-primary. Finite induction equals finite coinduction and both are exact. Adjunction on injective resolutions gives $\operatorname{Ext}^r_G(P,B)=\operatorname{Ext}^r_U(M,B)$ and $H^s(G,P)=H^s(U,M)$. The Yoneda product under these identifications is finite-coset corestriction. Its invariant is preserved: on the $\ell$-primary component restriction $H^2(G,B)(\ell)\to H^2(U,B)(\ell)$ is surjective by [F1]; lift $x$ to $y$, then [F6] gives $\operatorname{inv}_G\operatorname{Cor}x=[G:U]\operatorname{inv}_G y=\operatorname{inv}_U x$. Therefore all $P$ maps are the actual trivial-module maps of step 4.1 over $U$. [F1, F3, F6, step 4.1, construct, algebra]

6.1 The Ext sequence of $0\to M\to P\to M_1\to0$ and its exact dual cohomology sequence form a commutative diagram under the actual Yoneda products. The outer groups $\operatorname{Ext}^3(P,B)$ and $\operatorname{Ext}^4(M_1,B)$ vanish by steps 4.1, 5.1 and 3.1, so $\operatorname{Ext}^3(M,B)=0$. For degree two, both rows end in a surjection from their $P$ terms, and the $P$ map is an isomorphism. This first gives surjectivity of $\alpha_2$ for every finite primary module. If a class in its kernel is lifted to the $P$ term, its dual image comes from the $M_1$ term; universal surjectivity lifts that image to Ext, and subtracting it proves injectivity. [F3, F5, F6, step 3.1, step 4.1, step 5.1, algebra]

7.1 Under the additional cyclic hypothesis, step 4.1 and finite direct sums make the degree-one $P$ map an isomorphism. In the degree-one diagram, the degree-two isomorphisms from step 6.1 first give surjectivity of $\alpha_1$ for every finite primary module: lift the target's boundary through the $M_1$ isomorphism, use exactness and the $P$ isomorphisms, and correct by a $P$ class. If a degree-one Ext class has zero target, it lifts from the $P$ term; the dual of that lift comes from the $M_1$ term, whose preimage exists by the universal surjectivity just proved. Subtract it and use the $P$ isomorphism. This proves injectivity. The zero module and $n=1$ are included; no degree-zero claim or finite-torsion Tor vanishing has been used. [F3, F5, F6, step 4.1, step 5.1, step 6.1, algebra] ∎
