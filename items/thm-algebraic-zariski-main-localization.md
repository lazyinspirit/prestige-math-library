---
id: thm-algebraic-zariski-main-localization
kind: theorem
title: Algebraic Zariski Main localization at a quasi-finite prime
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-quasi-finite-at-a-prime-for-finite-type-algebras, def-finite-type-and-module-finite-algebras, def-integral-subalgebra-of-an-arbitrary-ring-map, def-strongly-transcendental-element, def-axiom-of-choice, def-principal-localisation, def-multiplicative-subset-and-localisation, def-localisation-at-a-prime-ideal, def-radical-of-an-ideal, lem-radical-is-an-ideal, def-nilradical-and-reduced-ring, def-prime-and-maximal-ideals, lem-zmt-quasi-finite-transfer-through-intermediate-rings, lem-zmt-conductor-radical-coefficients, lem-zmt-one-generator-local-integrality, lem-strongly-transcendental-finite-one-variable-algebra-is-nowhere-quasi-finite, thm-transitivity-of-integrality, thm-integrality-and-finite-module-equivalences, lem-algebra-generated-by-finitely-many-integral-elements-is-module-finite, lem-localisation-preserves-injectivity, prop-iterated-localisation, thm-prime-spectrum-of-a-quotient-bijection]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Commutative Algebra, Section 10.123, Theorem 10.123.12 (Zariski's Main Theorem) with its proof"
      url: "https://stacks.math.columbia.edu/tag/00Q9"
      locator: "Section 10.123, Theorem 10.123.12, using Situation 10.123.4 and Lemmas 10.123.1-10.123.11"
    - title: "J. S. Milne, A Primer of Commutative Algebra, version 4.03, Section 17 (Zariski's main theorem, Theorem 17.10)"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
      locator: "Section 17, Theorem 17.10 and Proposition 17.13"
verification:
  audited: 2026-09-27
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $R\to S$ be a ring map
of finite type ([[def-finite-type-and-module-finite-algebras]]), let
$S'\subseteq S$ be the integral closure of the image of $R$ in $S$
([[def-integral-subalgebra-of-an-arbitrary-ring-map]]), and let
$\mathfrak q\in\operatorname{Spec}(S)$ be a prime at which $R\to S$ is
quasi-finite ([[def-quasi-finite-at-a-prime-for-finite-type-algebras]]). Then
there exists $g\in S'$ with $g\notin\mathfrak q$ such that the inclusion
$S'\to S$ induces an isomorphism
$$ S'_g \xrightarrow{\ \cong\ } S_g $$
of localisations at $g$ ([[def-multiplicative-subset-and-localisation]]).

This is the local form of Zariski's main theorem: at a quasi-finite prime a
finite-type algebra is, after inverting one element of its relative integral
closure, a principal localisation of that closure. The proof is an induction on
the least number of elements over which $S$ becomes module-finite over a
polynomial extension of $R$, and its one-variable step is the conductor
argument supplied by [[lem-zmt-conductor-radical-coefficients]]. The Axiom of
Choice is used exactly once, in the nowhere-quasi-finiteness lemma
[[lem-strongly-transcendental-finite-one-variable-algebra-is-nowhere-quasi-finite]]
(going down and lying over); all other steps make finitely many choices only.

## Facts & Assumptions

**Given:** A unital ring map $R\to S$ of finite type that is quasi-finite at a prime $\mathfrak q\in\operatorname{Spec}(S)$, with contraction $\mathfrak p=\mathfrak q\cap R$, together with the relative integral closure $S'=\operatorname{Int}_R(S)\subseteq S$ of the image of $R$ in $S$; the Axiom of Choice is assumed throughout.

[L1] A finite type map $R\to S$ is **quasi-finite at $\mathfrak q$** when the $\kappa(\mathfrak p)$-algebra $S_{\mathfrak q}/\mathfrak pS_{\mathfrak q}$ is finite over $\kappa(\mathfrak p)$, that is finitely generated as a module, equivalently finite-dimensional over $\kappa(\mathfrak p)$ ([[def-quasi-finite-at-a-prime-for-finite-type-algebras]]).

[L2] For a unital ring map $R\to S$ the relative integral closure $\operatorname{Int}_R(S)$ is the set of elements of $S$ integral over the map; it is a subring of $S$ containing the image of $R$, hence an $R$-subalgebra, and it is exactly the integral closure of the image of $R$ in $S$ ([[def-integral-subalgebra-of-an-arbitrary-ring-map]]).

[L3] An $R$-algebra $A$ is of finite type over $R$ when $A=R[a_1,\ldots,a_n]$ for finitely many $a_i\in A$, equivalently when $A$ is isomorphic to a quotient $R[x_1,\ldots,x_n]/\mathfrak a$; it is module-finite over $R$ when it is finitely generated as an $R$-module ([[def-finite-type-and-module-finite-algebras]]).

[L4] Let $R\to S$ be of finite type and quasi-finite at $\mathfrak q$. Then (1) for every intermediate $R$-subalgebra $T$, $\operatorname{Im}(R)\subseteq T\subseteq S$, the map $T\to S$ is of finite type and quasi-finite at $\mathfrak q$; (2) if such a $T$ is of finite type over $R$, if $u\in T\setminus\mathfrak q$ and $T_u=S_u$ as subrings of $S_u$, then $R\to T$ is quasi-finite at $\mathfrak q\cap T$; and (4) for an ideal $J\subseteq\mathfrak q$ the quotient $R\to S/J$ is of finite type and quasi-finite at $\mathfrak q/J$ ([[lem-zmt-quasi-finite-transfer-through-intermediate-rings]]).

[L5] Let $\varphi:R[x]\to S$ be a finite ring map such that every element of $S$ integral over $R$ lies in $\operatorname{Im}(\varphi)$, and put $J=\{g\in S:gS\subseteq\operatorname{Im}(\varphi)\}$. Then $J$ is an ideal of $S$, and for all $u\in S$ and $P=a_0+a_1x+\cdots+a_kx^k\in R[x]$: if $u\varphi(P)\in J$ then $u\varphi(a_k)^m\in J$ for some $m\ge0$, and if $u\varphi(P)\in\sqrt J$ then $u\varphi(a_i)\in\sqrt J$ for every $i$ ([[lem-zmt-conductor-radical-coefficients]]).

[L6] Assume the Axiom of Choice. If $R\subseteq S$ are reduced rings, $x\in S$ is strongly transcendental over $R$ and $S$ is module-finite over $R[x]$, then $R\to S$ is a finite type ring map that is quasi-finite at no prime of $S$ ([[lem-strongly-transcendental-finite-one-variable-algebra-is-nowhere-quasi-finite]]).

[L7] Let $R$ be a commutative ring, $I\mathrel{\trianglelefteq}R[x]$ an ideal, $S=R[x]/I$, $\mathfrak q\in\operatorname{Spec}(S)$, and assume that $R\to S$ is quasi-finite at $\mathfrak q$. Then the integral closure $S'$ of the image of $R$ in $S$ contains an element $g\notin\mathfrak q$ with $S'_g\to S_g$ an isomorphism ([[lem-zmt-one-generator-local-integrality]]).

[L8] For an inclusion $R\subseteq S$ and $x\in S$, the element $x$ is strongly transcendental over $R$ when $u(a_0+a_1x+\cdots+a_kx^k)=0$ with $u\in S$ and $a_i\in R$ implies $ua_i=0$ for every $i$ ([[def-strongly-transcendental-element]]).

[L9] If $A\to B$ and $B\to C$ are integral ring maps then the composite $A\to C$ is integral ([[thm-transitivity-of-integrality]]).

[L10] Let $A\subseteq B$ be commutative rings with $A\ne0$ and $b\in B$: $b$ is integral over $A$ if and only if $A[b]$ is finitely generated as an $A$-module; in particular a module-finite extension is integral ([[thm-integrality-and-finite-module-equivalences]]).

[L11] If $b_1,\ldots,b_n\in B$ are integral over a subring $A\subseteq B$, then the $A$-subalgebra $A[b_1,\ldots,b_n]$ is module-finite over $A$ ([[lem-algebra-generated-by-finitely-many-integral-elements-is-module-finite]]).

[L12] The **Axiom of Choice** is the statement that every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

[L13] An injective module homomorphism remains injective after localisation: the induced map on localised modules is injective ([[lem-localisation-preserves-injectivity]]).

[L14] For multiplicative subsets $S,T\subseteq R$ with image $\bar T$ in $S^{-1}R$ and $U$ the multiplicative subset generated by $S\cup T$ there is a unique $R$-algebra isomorphism $\bar T^{-1}(S^{-1}R)\cong U^{-1}R$; in particular $(R_f)_g\cong R_{fg}$ for $f,g\in R$ ([[prop-iterated-localisation]]).

[L15] For $f$ in a commutative ring $R$ the principal localisation is $R_f=S_f^{-1}R$ with $S_f=\{1,f,f^2,\ldots\}$; in particular $R_1$ is canonically isomorphic to $R$ ([[def-principal-localisation]]).

[L16] A proper ideal $P\subsetneq R$ is **prime** when $ab\in P$ implies $a\in P$ or $b\in P$ ([[def-prime-and-maximal-ideals]]).

[L17] For an ideal $I\mathrel{\trianglelefteq}R$ the radical is $\sqrt I=\{x\in R:x^n\in I\text{ for some integer }n\ge1\}$ ([[def-radical-of-an-ideal]]).

[L18] $\sqrt I$ is an ideal of $R$ containing $I$ ([[lem-radical-is-an-ideal]]).

[L19] The ring $R$ is **reduced** when the only nilpotent element of $R$ is $0$, that is when $\operatorname{Nil}(R)=(0)$ for the radical of the zero ideal ([[def-nilradical-and-reduced-ring]]).

[L20] For an ideal $I\mathrel{\trianglelefteq}R$ contraction along the quotient map $R\to R/I$ is an inclusion-preserving bijection $\operatorname{Spec}(R/I)\to V(I)$, whose inverse sends $\mathfrak p\supseteq I$ to $\mathfrak p/I$ ([[thm-prime-spectrum-of-a-quotient-bijection]]).

[L21] For a prime ideal $\mathfrak p\subset R$ the localisation of $R$ at $\mathfrak p$ is $R_{\mathfrak p}=(R\setminus\mathfrak p)^{-1}R$, with elements fractions $r/s$ where $s\notin\mathfrak p$ ([[def-localisation-at-a-prime-ideal]]).

## Proof

**Proof technique:** direct.

1.1 We assume the Axiom of Choice throughout; it is recorded in [L12] and will be used exactly once below, through [L6] in the nowhere-quasi-finiteness argument. By [L3] the finite type $R$-algebra $S$ has the form $S=R[x_1,\ldots,x_n]$ for some $n\ge0$ and some $x_1,\ldots,x_n\in S$; for these elements $S$ is module-finite over $R[x_1,\ldots,x_n]=S$, generated as a module over itself by $1$. We prove by induction on $n\ge0$ the statement $P(n)$: for every unital ring map $A\to B$ of finite type that is quasi-finite at a prime $\mathfrak q_B\in\operatorname{Spec}(B)$ in the sense of [L1], and every $y_1,\ldots,y_n\in B$ such that $B$ is module-finite over the subalgebra $A[y_1,\ldots,y_n]$ of [L3], there exists $g$ in the relative integral closure $B'$ of the image of $A$ in $B$ with $g\notin\mathfrak q_B$ and $B'_g\to B_g$ an isomorphism. The Theorem is the case $A=R$, $B=S$, $\mathfrak q_B=\mathfrak q$ and $y_i=x_i$, and it is exactly the assertion to be proved. [given, L1, L3, L12]

1.2 We begin with the case $n=0$ of $P(0)$: here $B$ is module-finite over $A[y_1,\ldots,y_0]=A$, so every element of $B$ is integral over $A$ by [L10]; hence $B\subseteq B'$, while $B'\subseteq B$ by [L2], so that $B'=B$. Take $g=1$: the prime $\mathfrak q_B$ is proper by [L16], so $1\notin\mathfrak q_B$, and $B'_1=B'=B=B_1$ by [L15], an isomorphism of localisations. Thus $P(0)$ holds. [given, L2, L10, L15, L16]

2.1 Now suppose $n=1$, write $y=y_1$ and put $T:=B'$, the integral closure of the image of $A$ in $B$, which is an intermediate $A$-subalgebra by [L2]; also $B$ is module-finite over $T[y]$ because $A[y]\subseteq T[y]$. By [L4] the map $T\to B$ is of finite type and quasi-finite at $\mathfrak q_B$, and $T$ is integrally closed in $B$: if $b\in B$ is integral over $T$, then $b$ is integral over $A$ by [L9], since every element of $T$ is integral over $A$ by [L2], so $b\in B'=T$. Consequently, for $P(1)$ it suffices to prove the following special case. $(\dagger)$ If $R$ is a ring integrally closed in a ring $S$, if $R\to S$ is of finite type and quasi-finite at $\mathfrak q\in\operatorname{Spec}(S)$, and if $S$ is module-finite over $R[x]$ for one element $x\in S$, then there is $g\in R\setminus\mathfrak q$ with the canonical map $R_g\to S_g$ an isomorphism. Indeed, applying $(\dagger)$ to $T\to B$ with the element $y$ and the prime $\mathfrak q_B$ produces $g\in T\setminus\mathfrak q_B=B'\setminus\mathfrak q_B$ with $T_g\cong B_g$, which is the conclusion of $P(1)$ because $T=B'$. [given, step 1.1, L2, L4, L9]

2.2 Now let $n\ge2$ and assume $P(m)$ for all $m<n$; suppose $S$ is module-finite over $R[x_1,\ldots,x_n]$ and $R\to S$ is of finite type and quasi-finite at $\mathfrak q$. Put $R':=\operatorname{Int}_{R[x_1,\ldots,x_{n-1}]}(S)$, the integral closure of $R[x_1,\ldots,x_{n-1}]$ in $S$ by [L2], an intermediate $R$-subalgebra containing $x_1,\ldots,x_{n-1}$. By [L4] the map $R'\to S$ is of finite type and quasi-finite at $\mathfrak q$, and $S$ is module-finite over $R'[x_n]$ because $R[x_1,\ldots,x_n]\subseteq R'[x_n]$. [given, step 1.1, L2, L4]

3.1 We now prove $(\dagger)$, so we assume $R=S'=\operatorname{Int}_R(S)$, that $R\to S$ is of finite type and quasi-finite at $\mathfrak q$, and that $S$ is module-finite over $R[x]$ for some $x\in S$. Let $\varphi:R[x]\to S$ be the $R$-algebra homomorphism with $\varphi(x)=x$, put $I=\ker\varphi$ and $A=\operatorname{Im}(\varphi)=R[x]/I$, so that $R=\varphi(R)\subseteq A\subseteq S$; the map $\varphi$ is finite, that is, $S$ is a finitely generated $R[x]$-module. Let $J=\{g\in S:gS\subseteq A\}$ be the conductor of $A$ in $S$. Every element of $S$ integral over $R$ lies in $R\subseteq A$ because $R=S'$, so the hypothesis of [L5] is satisfied and $J$ is an ideal of $S$. [given, step 2.1, L2, L5]

3.2 The ring $R'$ is integrally closed in $S$: if $s\in S$ is integral over $R'$, then $s$ is integral over $R[x_1,\ldots,x_{n-1}]$ by [L9], because every element of $R'$ is integral over $R[x_1,\ldots,x_{n-1}]$ by [L2]; hence $s\in R'$. [given, step 2.2, L2, L9]

4.1 The quotient $\bar S:=S/\sqrt J$ is reduced, and so is its subring $\bar R:=R/(R\cap\sqrt J)$: if $s\in S$ has nilpotent image in $\bar S$, say $s^m\in\sqrt J$ for some $m\ge1$, then by [L17] there is $k\ge1$ with $s^{mk}=(s^m)^k\in J$, so $s\in\sqrt J$ by [L17] again, that is, the image of $s$ in $\bar S$ is zero; thus $\bar S$ has no nonzero nilpotent and is reduced by [L19]. [given, step 3.1, L17, L19]

5.1 The image $\bar x$ of $x$ in $\bar S$ is strongly transcendental over $\bar R$ in the sense of [L8], and $\bar S$ is module-finite over $\bar R[\bar x]$. For the first assertion, let $\bar u\in\bar S$ and $\bar P=\sum_i\bar a_iz^i\in\bar R[z]$ satisfy $\bar u\bar P(\bar x)=0$, and lift $\bar u$, $\bar P$ to $u\in S$, $P=\sum_ia_iz^i\in R[z]$; then $u\varphi(P)\in\sqrt J$, so [L5] gives $u\varphi(a_i)\in\sqrt J$ for every $i$, which says $\bar u\bar a_i=0$ in $\bar S$ for every $i$, exactly the condition of [L8]. Here $\bar R\to\bar S$ is injective, since an element of $R$ lies in $R\cap\sqrt J$ precisely when its image in $\bar S$ vanishes. For the second assertion, the image of $R[x]$ in $\bar S$ is $\bar R[\bar x]$ and the images of finitely many $R[x]$-module generators of $S$ generate $\bar S$ over that subring, so $\bar S$ is module-finite over $\bar R[\bar x]$ by [L3]. [given, step 3.1, step 4.1, L3, L5, L8]

6.1 By [L6], whose hypothesis is exactly the combination of steps 4.1 and 5.1, the map $\bar R\to\bar S$ is of finite type and quasi-finite at no prime of $\bar S$. This is the only step of the proof that uses the Axiom of Choice, through the going down and lying over arguments inside [L6]. [given, step 4.1, step 5.1, L6, L12]

7.1 We deduce that $J\not\subseteq\mathfrak q$. Suppose instead that $\sqrt J\subseteq\mathfrak q$; then $\bar{\mathfrak q}:=\mathfrak q/\sqrt J$ is a prime of $\bar S$, and [L4] applied to the finite type map $R\to S$ and the ideal $\sqrt J\subseteq\mathfrak q$ shows that $R\to\bar S$ is of finite type and quasi-finite at $\bar{\mathfrak q}$. Applying [L4] once more with the intermediate $R$-subalgebra $\bar R=\operatorname{Im}(R\to\bar S)\subseteq\bar S$ gives that $\bar R\to\bar S$ is quasi-finite at $\bar{\mathfrak q}$, contradicting step 6.1. Since the primes containing $J$ are precisely those containing $\sqrt J$, by [L18], the assumption $J\subseteq\mathfrak q$ is therefore impossible, and we may choose $s\in J\setminus\mathfrak q$. [given, step 6.1, L4, L18]

8.1 Because $J=\{g\in S:gS\subseteq A\}\subseteq A$, the element $s$ lies in $A=\operatorname{Im}(\varphi)$, so $s=\varphi(f)$ for some $f\in R[x]$; and $f\notin\mathfrak q_0:=\varphi^{-1}(\mathfrak q)$ because $\varphi(f)=s\notin\mathfrak q$. Put $\mathfrak q':=\mathfrak q_0/I$. By [L20] the ideal $\mathfrak q'$ is a prime of $A=R[x]/I$ with $\mathfrak q'\cap R=\mathfrak q_0\cap R=\mathfrak p$, and $\mathfrak q'=\mathfrak q\cap A$. [given, step 3.1, step 7.1, L20]

9.1 The canonical $R$-algebra homomorphism $A_f\to S_s$ is an isomorphism: it is injective as the localisation of the injective map $A\to S$ by [L13], and it is surjective because $sS\subseteq A$. Indeed, for $\sigma\in S$ the element $s\sigma$ lies in $A$, say $s\sigma=\varphi(r)$ with $r\in R[x]$, so $\sigma/1=(s\sigma)/s=\varphi(r)/s$ is the image of $\varphi(r)/f$ (note $\varphi(f)=s$). [given, step 3.1, step 7.1, step 8.1, L13]

10.1 The map $R\to A$ is quasi-finite at $\mathfrak q'$ by [L4]: the ring $A$ is an intermediate $R$-subalgebra of $S$ that is of finite type over $R$ as a quotient of $R[x]$ by [L3]; the element $f$ lies in $A\setminus\mathfrak q'$ because $\varphi(f)=s\notin\mathfrak q$; and step 9.1 says that $A_f=S_f$ as subrings of $S_f$, with $\mathfrak q'=\mathfrak q\cap A$ by step 8.1. [given, step 8.1, step 9.1, L3, L4]

11.1 The integral closure of the image of $R$ in $A$ is $R$ itself: every element of $A$ that is integral over $R$ is an element of $S$ integral over $R$, hence lies in $S'=R$ because $R$ is integrally closed in $S$; and $R\subseteq A$. Since $A=R[x]/I$ and $R\to A$ is quasi-finite at $\mathfrak q'$ by step 10.1, [L7] provides $h\in R\setminus\mathfrak q'$ such that the canonical map $R_h\to A_h$ is an isomorphism. [given, step 10.1, L2, L7]

12.1 Inside $A_h=R_h$ the element $f\in A$ has the form $f=r/h^k$ for some $r\in R$ and some $k\ge0$. We claim $r\notin\mathfrak q$. Otherwise $r\in\mathfrak q\cap A=\mathfrak q'$; localising $A$ at the prime $\mathfrak q'$ by [L21], the equation $fh^k=r$ would exhibit $fh^k$ as an element of the maximal ideal $\mathfrak q'A_{\mathfrak q'}$, although $f\notin\mathfrak q'$ and $h\notin\mathfrak q'$ make $fh^k$ a unit of $A_{\mathfrak q'}$. [given, step 8.1, step 10.1, step 11.1, L21]

13.1 Set $g:=rh\in R$; then $g\notin\mathfrak q$ because $r\notin\mathfrak q$, $h\notin\mathfrak q$ and $\mathfrak q$ is prime by [L16]. We show that the canonical map $R_g\to S_g$ is an isomorphism. First $A_{fh}\cong S_{sh}$: localising the isomorphism $A_f\cong S_s$ of step 9.1 at the common element $h$ gives $(A_f)_h\cong(S_s)_h$, and $(A_f)_h\cong A_{fh}$, $(S_s)_h\cong S_{sh}$ by [L14]. Second $A_{fh}\cong R_{rh}=R_g$: by step 11.1 we have $A_h\cong R_h$, so $A_{fh}\cong(R_h)_f$ by [L14], and inside $R_h$ the elements $f$ and $r$ differ by the unit $h^{-k}$, so $(R_h)_f\cong(R_h)_r\cong R_{hr}$ by [L14]. Third $S_{sh}\cong S_{rh}=S_g$: the relation $fh^k=r$ holds in $A_h$ and hence in $S_h$, and applying the $R$-algebra map $\varphi$ gives $sh^k=\varphi(fh^k)=\varphi(r)=r$ there; so $s$ and $r$ also differ by the unit $h^{-k}$ in $S_h$, whence $(S_h)_s\cong(S_h)_r$, that is $S_{sh}\cong S_{rh}=S_g$ by [L14]. Composing these isomorphisms gives an isomorphism $R_g\to S_g$; every map in the chain is the canonical localisation of one of the inclusions $R\subseteq A\subseteq S$, so the composite is the map induced by the inclusion $R\subseteq S$. This proves $(\dagger)$. [given, step 9.1, step 11.1, step 12.1, L14, L16]

14.1 Steps 3.1 to 13.1 prove $(\dagger)$, and step 2.1 reduces $P(1)$ to $(\dagger)$. Hence $P(1)$ holds: for a finite type map $A\to B$ quasi-finite at $\mathfrak q_B$ with $B$ module-finite over $A[y_1]$, there is $g\in B'\setminus\mathfrak q_B$ with $B'_g\cong B_g$. [step 2.1, step 13.1]

14.2 By $(\dagger)$, that is by step 13.1 applied under the hypotheses verified in steps 2.2 and 3.2, there is $g'\in R'\setminus\mathfrak q$ with $(R')_{g'}\cong S_{g'}$ via the inclusion. [step 13.1, step 2.2, step 3.2]

15.1 The localisation $S_{g'}$ is a finitely generated $R$-algebra: $S$ is generated as an $R$-algebra by finitely many elements by [L3], and adjoining $1/g'$ exhibits $S_{g'}$ as generated by those elements together with $1/g'$ by [L3]. Choose $z_1,\ldots,z_M\in S_{g'}$ generating $S_{g'}$ over $R$; by step 14.2 each $z_j$ lies in $(R')_{g'}$, so $z_j=y_j/(g')^{n_j}$ for some $y_j\in R'$ and $n_j\ge0$. Put $R'':=R[x_1,\ldots,x_{n-1},y_1,\ldots,y_M,g']\subseteq R'$, an $R$-subalgebra that is of finite type over $R$ by [L3]. Then $(R'')_{g'}=S_{g'}$: the inclusion $(R'')_{g'}\subseteq(R')_{g'}=S_{g'}$ is clear, while each $z_j=y_j/(g')^{n_j}$ lies in $(R'')_{g'}$, so $S_{g'}=R[z_1,\ldots,z_M]\subseteq(R'')_{g'}$. [given, step 14.2, L3]

16.1 The algebra $R''$ is module-finite over $R[x_1,\ldots,x_{n-1}]$: each of $y_1,\ldots,y_M,g'$ lies in $R'$ and is therefore integral over $R[x_1,\ldots,x_{n-1}]$ by [L2], so [L11] applies to $R''=R[x_1,\ldots,x_{n-1}][y_1,\ldots,y_M,g']$. [given, step 15.1, L2, L11]

17.1 By [L4] applied to the intermediate subalgebra $R''$, the element $g'\in R''\setminus\mathfrak q$ and the equality $(R'')_{g'}=S_{g'}$ of step 15.1, the map $R\to R''$ is quasi-finite at $\mathfrak q'':=\mathfrak q\cap R''$; it is of finite type by step 15.1. Since $R''$ is module-finite over $R[x_1,\ldots,x_{n-1}]$ by step 16.1, the induction hypothesis $P(n-1)$ applies to the map $R\to R''$, the prime $\mathfrak q''$ and the elements $x_1,\ldots,x_{n-1}\in R''$: there is $g''\in R'''\setminus\mathfrak q''$ with $(R''')_{g''}\cong(R'')_{g''}$ via the inclusion, where $R'''=\operatorname{Int}_R(R'')\subseteq S'$ is the integral closure of the image of $R$ in $R''$. [given, step 15.1, step 16.1, step 14.1, L2, L4]

18.1 The image of $g'$ in $(R'')_{g''}=(R''')_{g''}$ has the form $g'''/(g'')^m$ for some $g'''\in R'''$ and some $m\ge0$, since the elements of that localisation are fractions with numerator in $R'''$ by [L21]. If $g'''\in\mathfrak q$, then $g'''/(g'')^m$ would lie in the prime $\mathfrak q(R''')_{g''}$ of $(R''')_{g''}$, because $g''\notin\mathfrak q$; but this element is the image of $g'\in R''\setminus\mathfrak q$ under $R''\to(R'')_{g''}$, and $g''\notin\mathfrak q''=\mathfrak q\cap R''$ forces that image to lie outside $\mathfrak q(R'')_{g''}$. Hence $g'''\notin\mathfrak q$, and since also $g''\notin\mathfrak q$ and $\mathfrak q$ is prime by [L16], the product $g:=g''g'''\in R'''\subseteq S'$ satisfies $g\notin\mathfrak q$. [given, step 17.1, L16, L21]

19.1 Finally $(R''')_g\cong S_g$. By [L14], $(R''')_g=((R''')_{g''})_{g'''}\cong((R'')_{g''})_{g'''}$, and inside $(R'')_{g''}$ the element $g'''$ differs from $g'$ by the unit $(g'')^{-m}$: indeed step 18.1 says that the image of $g'$ equals $g'''/(g'')^m$, that is $g'''=g'(g'')^m$. Hence inverting $g'''$ is the same as inverting $g'$, and $((R'')_{g''})_{g'''}\cong((R'')_{g''})_{g'}=(R'')_{g''g'}$ by [L14]. By step 15.1, $(R'')_{g'}=S_{g'}$, so $(R'')_{g''g'}=(S_{g'})_{g''}=S_{g''g'}$ by [L14]. The same relation $g'=g'''/(g'')^m$, read in $S_{g''}$ through the injective map $R''\to S$ and its localisation, shows that $g'$ and $g'''$ differ by a unit of $S_{g''}$, so also $S_{g''g'}\cong S_{g''g'''}=S_g$ by [L14]. Thus $(R''')_g\cong S_g$ via the canonical maps. As $R'''\subseteq S'\subseteq S$, the inclusion $S'\to S$ becomes an isomorphism after inverting $g$, since $S'_g$ lies between the subrings $(R''')_g$ and $S_g$, which coincide. This is the conclusion of $P(n)$. [given, step 15.1, step 18.1, L14]

20.1 Steps 1.2, 14.1 and 15.1 to 19.1 establish $P(m)$ for every $m\ge0$ by induction. Applying $P(n)$ to the originally given map $R\to S$, the prime $\mathfrak q$ and the elements $x_1,\ldots,x_n$ of step 1.1 produces $g\in S'\setminus\mathfrak q$ such that $S'\to S$ induces an isomorphism $S'_g\cong S_g$, which is the assertion of the Theorem. The Axiom of Choice was used only in step 6.1 through [L6]; every other step selected only finitely many elements (the generators $x_i$, the element $s$, the finite lists $y_j$ and $z_j$, the elements $r$ and $g$), so no use of the axiom is hidden elsewhere. ∎ [step 1.1, step 1.2, step 14.1, step 19.1, L12]
