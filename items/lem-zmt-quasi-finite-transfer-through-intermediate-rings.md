---
id: lem-zmt-quasi-finite-transfer-through-intermediate-rings
kind: lemma
title: Quasi-finite local fibres transfer through quotients and intermediate rings
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-quasi-finite-at-a-prime-for-finite-type-algebras, def-finite-type-and-module-finite-algebras, def-multiplicative-subset-and-localisation, def-field-of-fractions, thm-universal-property-of-localisation, thm-localisation-commutes-with-quotients, thm-prime-spectrum-of-a-quotient-bijection, cor-tensor-product-with-a-quotient-ring, lem-tensor-ring-presentations-for-base-change]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Commutative Algebra, Section 10.122, Lemmas 10.122.2, 10.122.6, 10.122.7, 10.122.9 and 10.122.10"
      url: "https://stacks.math.columbia.edu/tag/02MK"
      locator: "Section 10.122, Lemmas 10.122.6, 10.122.7, 10.122.9 and 10.122.10 with their proofs (tag 02MK)"
    - title: "J. S. Milne, A Primer of Commutative Algebra, version 4.03, Section 17"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
---

## Statement

Let $R\to S$ be a ring map of finite type that is quasi-finite at the prime
$\mathfrak q\in\operatorname{Spec}(S)$, and put
$\mathfrak p=\mathfrak q\cap R$. Then the following hold.

1. For every intermediate $R$-subalgebra $T$, that is
   $\operatorname{Im}(R)\subseteq T\subseteq S$, with
   $\mathfrak r=\mathfrak q\cap T$, the map $T\to S$ is of finite type and is
   quasi-finite at $\mathfrak q$.

2. Let $T$ be an intermediate $R$-subalgebra that is of finite type over $R$,
   let $u\in T\setminus\mathfrak q$ and suppose that $T_u=S_u$ as subrings of
   $S_u$, with $\mathfrak r=\mathfrak q\cap T$. Then $R\to T$ is quasi-finite
   at $\mathfrak r$.

3. Let $R\to R'$ be an arbitrary ring map, put $S'=S\otimes_RR'$ and let
   $\mathfrak q'\in\operatorname{Spec}(S')$ be a prime of $S'$ that lies over
   $\mathfrak q$, i.e. $\mathfrak q'\cap S=\mathfrak q$. Then $R'\to S'$ is of
   finite type and quasi-finite at $\mathfrak q'$.

4. Let $J\subseteq\mathfrak q$ be an ideal of $S$, put
   $\bar S=S/J$ and let $\bar{\mathfrak q}=\mathfrak q/J$ be the image of
   $\mathfrak q$. Then $R\to\bar S$ is of finite type and quasi-finite at
   $\bar{\mathfrak q}$. Consequently, if a quotient $\bar S=S/J$ with
   $J\subseteq\mathfrak q$ is not quasi-finite over $R$ at the image of
   $\mathfrak q$, then $R\to S$ is not quasi-finite at $\mathfrak q$.

The transfers of (3) and (4) are the ones used later on this page to move
quasi-finiteness between a finite-type algebra and its quotients and base
changes; no Noetherian hypothesis is imposed anywhere.

## Facts & Assumptions

**Given:** A finite-type ring map $R\to S$, a prime $\mathfrak q\in\operatorname{Spec}(S)$ with contraction $\mathfrak p=\mathfrak q\cap R$, and the hypothesis that $R\to S$ is quasi-finite at $\mathfrak q$.

[L1] The map $R\to S$ is **quasi-finite at $\mathfrak q$** when the $\kappa(\mathfrak p)$-algebra $S_{\mathfrak q}/\mathfrak pS_{\mathfrak q}$ is finite over $\kappa(\mathfrak p)$, that is, finitely generated as a $\kappa(\mathfrak p)$-module, equivalently finite-dimensional over $\kappa(\mathfrak p)$; the map is quasi-finite when it is of finite type and quasi-finite at every prime of $S$ ([[def-quasi-finite-at-a-prime-for-finite-type-algebras]]).

[L2] An $R$-algebra $A$ is **of finite type** over $R$ when $A=R[a_1,\ldots,a_n]$ for some $n\ge0$ and some elements $a_i\in A$; equivalently $A$ is isomorphic as an $R$-algebra to a quotient $R[x_1,\ldots,x_n]/\mathfrak a$ ([[def-finite-type-and-module-finite-algebras]]).

[L3] For a multiplicative subset $T\subseteq A$ of a commutative ring, $T^{-1}A$ consists of the classes of pairs $(a,t)$, written $a/t$, with $a/t=a'/t'$ if and only if $v(at'-a't)=0$ for some $v\in T$; every $t\in T$ maps to a unit of $T^{-1}A$ ([[def-multiplicative-subset-and-localisation]]).

[L4] For an ideal $I$ of a commutative ring $A$ and a multiplicative subset $T\subseteq A$ there is a canonical isomorphism $(T^{-1}A)/(T^{-1}I)\cong\bar T^{-1}(A/I)$, where $\bar T$ is the image of $T$ in $A/I$ ([[thm-localisation-commutes-with-quotients]]).

[L5] For an ideal $I\mathrel{\trianglelefteq}A$ and an $A$-module $M$ there is a natural isomorphism $M\otimes_A(A/I)\cong M/IM$ ([[cor-tensor-product-with-a-quotient-ring]]).

[L6] Contraction along the quotient map $A\to A/I$ is an inclusion-preserving bijection from $\operatorname{Spec}(A/I)$ onto the primes of $A$ containing $I$, with inverse $\mathfrak p\mapsto\mathfrak p/I$ ([[thm-prime-spectrum-of-a-quotient-bijection]]).

[L7] If $f:A\to B$ is a unital homomorphism of commutative rings and $f(t)$ is a unit of $B$ for every $t\in T$, then there is a unique unital ring homomorphism $\widetilde f:T^{-1}A\to B$ with $\widetilde f\circ\lambda_T=f$ ([[thm-universal-property-of-localisation]]).

[L8] For a domain $D$ the field of fractions is $\operatorname{Frac}(D)=(D\setminus\{0\})^{-1}D$, with elements fractions $a/b$ for $a,b\in D$, $b\ne0$ ([[def-field-of-fractions]]).

[L9] If $M$ is a multiplicative subset of a commutative ring $A$ and $A\to C$ is a ring map, then $(M^{-1}A)\otimes_A C$ is canonically isomorphic to the localization of $C$ at the image of $M$ ([[lem-tensor-ring-presentations-for-base-change]]).

## Proof

**Proof technique:** direct.

1.1 Let $T$ be an intermediate $R$-subalgebra, so that the given map factors as $R\to T\to S$, and let $\mathfrak r=\mathfrak q\cap T$. By [L2] the $R$-algebra $S$ is generated by finitely many elements $s_1,\ldots,s_n\in S$; these same elements generate $S$ as a $T$-algebra, so $T\to S$ is of finite type by [L2]. Moreover $\mathfrak r$ is a prime of $T$ and $\mathfrak p=\mathfrak r\cap R$, since $\mathfrak p=\mathfrak q\cap R=(\mathfrak q\cap T)\cap R$. [given, L2]

1.2 Now assume in addition that $T$ is of finite type over $R$, that $u\in T\setminus\mathfrak q$, and that $T_u=S_u$; set $\mathfrak r=\mathfrak q\cap T$, so that $u\notin\mathfrak r$ and $\mathfrak p=\mathfrak r\cap R$. Both $T_{\mathfrak r}$ and $S_{\mathfrak q}$ are localisations of the common ring $A:=T_u=S_u$: the former is $A$ localised at the multiplicative subset generated by the image of $T\setminus\mathfrak r$, the latter at the multiplicative subset generated by the image of $S\setminus\mathfrak q$, and every element of $S_u$ is a fraction $a/u^k$ with $a\in T$ by [L3]. [given, L3]

1.3 Now let $R\to R'$ be a ring map, put $S'=S\otimes_RR'$ and let $\mathfrak q'\in\operatorname{Spec}(S')$ lie over $\mathfrak q$; set $\mathfrak p'=\mathfrak q'\cap R'$, so that $\mathfrak p'\cap R=\mathfrak q'\cap R=\mathfrak q\cap R=\mathfrak p$. By [L2] write $S=R[s_1,\ldots,s_n]$; then $S'$ is generated as an $R'$-algebra by the images of $s_1,\ldots,s_n$, because $S$ is a quotient of a polynomial ring $R[x_1,\ldots,x_n]$ and tensoring the quotient presentation with $R'$ over $R$ gives a quotient presentation of $S'$ over $R'$ by [L5]. In particular $R'\to S'$ is of finite type by [L2]. [given, L2, L5]

1.4 Put $E=S_{\mathfrak q}/\mathfrak pS_{\mathfrak q}$. By hypothesis and [L1], $E$ is finite-dimensional over $\kappa(\mathfrak p)$; choose a basis $x_1,\ldots,x_d$. [given, L1]

1.5 Finally let $J\subseteq\mathfrak q$ be an ideal of $S$, put $\bar S=S/J$ and let $\bar{\mathfrak q}=\mathfrak q/J$. By [L6] the ideal $\bar{\mathfrak q}$ is a prime of $\bar S$ with $\bar{\mathfrak q}\cap R=\mathfrak p$; $\bar S$ is a quotient of the finite-type $R$-algebra $S$, hence of finite type over $R$ by [L2]. By [L4] there is a canonical isomorphism $\bar S_{\bar{\mathfrak q}}\cong S_{\mathfrak q}/JS_{\mathfrak q}$ identifying the extensions of $\mathfrak p$, so $\bar S_{\bar{\mathfrak q}}/\mathfrak p\bar S_{\bar{\mathfrak q}}\cong S_{\mathfrak q}/(\mathfrak pS_{\mathfrak q}+JS_{\mathfrak q})$ is a quotient of $S_{\mathfrak q}/\mathfrak pS_{\mathfrak q}$. [given, L2, L4, L6]

2.1 The inclusion $\mathfrak p\subseteq\mathfrak r$ gives $\mathfrak pS_{\mathfrak q}\subseteq\mathfrak rS_{\mathfrak q}$, so the quotient map $S_{\mathfrak q}/\mathfrak pS_{\mathfrak q}\to S_{\mathfrak q}/\mathfrak rS_{\mathfrak q}$ is a surjective $\kappa(\mathfrak p)$-algebra homomorphism. By hypothesis and [L1] the algebra $S_{\mathfrak q}/\mathfrak pS_{\mathfrak q}$ is finite over $\kappa(\mathfrak p)$, hence so is its quotient $S_{\mathfrak q}/\mathfrak rS_{\mathfrak q}$. [given, step 1.1, L1]

2.2 The homomorphism $T_{\mathfrak r}\to S_{\mathfrak q}$ induced by the inclusion $T\subseteq S$ is injective. Indeed, let $a\in T$ and $s\in T\setminus\mathfrak r$ with $a/s$ mapping to $0$ in $S_{\mathfrak q}$; by [L3] there is $\sigma\in S\setminus\mathfrak q$ with $\sigma a=0$ in $S$. By [L3] again write $\sigma=t/u^k$ with $t\in T$, $k\ge0$. If $t$ lay in $\mathfrak q$, then $\sigma=t/u^k$ would lie in the prime $\mathfrak qS_u$ of $S_u$, contradicting $\sigma\notin\mathfrak q$; hence $t\notin\mathfrak q$, so $t\in T\setminus\mathfrak r$. The vanishing $\sigma a=0$ in $S_u$ means $u^mta=0$ in $S$ for some $m\ge0$ by [L3]; this element lies in $T$, and $u^mt\in T\setminus\mathfrak r$ is inverted in $T_{\mathfrak r}$, so $a/s=0$. [given, step 1.2, L3]

2.3 The composite $S\to S'\to S'_{\mathfrak q'}$ inverts every element of $S\setminus\mathfrak q$, because such an element lies outside $\mathfrak q'\cap S=\mathfrak q$ and hence outside $\mathfrak q'$. It also kills $\mathfrak p$ in the quotient by $\mathfrak p'S'_{\mathfrak q'}$. Thus the map factors through a $\kappa(\mathfrak p)$-algebra homomorphism $E\to E':=S'_{\mathfrak q'}/\mathfrak p'S'_{\mathfrak q'}$, and the residue-field map $\kappa(\mathfrak p)\to\kappa(\mathfrak p')$ is induced by $R\to R'$. [given, step 1.3, step 1.4, L1, L7]

2.4 The quotient of step 1.5 is therefore finite over $\kappa(\mathfrak p)=\kappa(\bar{\mathfrak q}\cap R)$ by hypothesis and [L1], so $R\to\bar S$ is quasi-finite at $\bar{\mathfrak q}$ by [L1]. Contrapositively, if $J\subseteq\mathfrak q$ and the quotient map $R\to S/J$ fails to be quasi-finite at $\mathfrak q/J$, then $R\to S$ is not quasi-finite at $\mathfrak q$. [step 1.5, L1]

3.1 The ring $T/\mathfrak r$ is a domain and the composite $T/\mathfrak r\to S_{\mathfrak q}/\mathfrak rS_{\mathfrak q}$ is injective: an element of $T$ has vanishing image in $S_{\mathfrak q}/\mathfrak rS_{\mathfrak q}$ exactly when it lies in $\mathfrak q$, and $\mathfrak q\cap T=\mathfrak r$. Every class $t+\mathfrak r$ with $t\in T\setminus\mathfrak r$ lies outside $\mathfrak q$, hence is a unit of $S_{\mathfrak q}$ and therefore a unit of the quotient $S_{\mathfrak q}/\mathfrak rS_{\mathfrak q}$; by [L7] and [L8] the field of fractions $\kappa(\mathfrak r)=\operatorname{Frac}(T/\mathfrak r)$ therefore embeds in $S_{\mathfrak q}/\mathfrak rS_{\mathfrak q}$ as a subring containing the image of $\kappa(\mathfrak p)$. [given, step 1.1, step 2.1, L7, L8]

3.2 The homomorphism $T_{\mathfrak r}\to S_{\mathfrak q}$ of step 2.2 is also surjective. An element of $S_{\mathfrak q}$ is a fraction $\sigma/\tau$ with $\sigma,\tau\in S$ and $\tau\notin\mathfrak q$; since $S_u=T_u$ as subrings of $S_u$, and $u\notin\mathfrak q$, we may write $\sigma=t/u^k$ and $\tau=t'/u^l$ with $t,t'\in T$ by [L3]. Then $t'\notin\mathfrak q$, hence $t'\in T\setminus\mathfrak r$, and $\sigma/\tau=t u^l/(t'u^k)$ with numerator $tu^l\in T$ and denominator $t'u^k\in T\setminus\mathfrak r$, so $\sigma/\tau$ is the image of an element of $T_{\mathfrak r}$. [given, step 1.2, L3]

3.3 Let $F=S\otimes_R\kappa(\mathfrak p)$ and let $\bar{\mathfrak q}$ be the prime of this fiber induced by $\mathfrak q$, so $E\cong F_{\bar{\mathfrak q}}$. The prime $\mathfrak q'$ induces a prime $\bar{\mathfrak q}'$ of $F\otimes_{\kappa(\mathfrak p)}\kappa(\mathfrak p')$ lying over $\bar{\mathfrak q}$. By [L9], localization commutes with this scalar extension; localizing further at $\bar{\mathfrak q}'$ gives the canonical isomorphism $$E'\cong\bigl(E\otimes_{\kappa(\mathfrak p)}\kappa(\mathfrak p')\bigr)_{\widetilde{\mathfrak q}'},$$ where $\widetilde{\mathfrak q}'$ is the corresponding prime after the first localization. [given, step 2.3, L9]

4.1 Since $\kappa(\mathfrak r)$ is a $\kappa(\mathfrak p)$-subspace of the finite-dimensional $\kappa(\mathfrak p)$-vector space $S_{\mathfrak q}/\mathfrak rS_{\mathfrak q}$ of step 2.1, the field extension $\kappa(\mathfrak r)/\kappa(\mathfrak p)$ is finite. The algebra $S_{\mathfrak q}/\mathfrak rS_{\mathfrak q}$ of step 2.1 is a module over the field $\kappa(\mathfrak r)$ by step 3.1, and a $\kappa(\mathfrak r)$-linearly independent subset of it is $\kappa(\mathfrak p)$-linearly independent, so $S_{\mathfrak q}/\mathfrak rS_{\mathfrak q}$ is finite-dimensional over $\kappa(\mathfrak r)$; by [L1] the map $T\to S$ is quasi-finite at $\mathfrak q$, which is assertion (1). [step 2.1, step 3.1, L1]

4.2 By steps 2.2 and 3.2 the inclusion induces an isomorphism $T_{\mathfrak r}\cong S_{\mathfrak q}$; it carries $\mathfrak pT_{\mathfrak r}$ onto $\mathfrak pS_{\mathfrak q}$ because it is an isomorphism of $R$-algebras. Hence $T_{\mathfrak r}/\mathfrak pT_{\mathfrak r}\cong S_{\mathfrak q}/\mathfrak pS_{\mathfrak q}$ is finite over $\kappa(\mathfrak p)$ by hypothesis and [L1], and since $\mathfrak p=\mathfrak r\cap R$ this says by [L1] that $R\to T$ is quasi-finite at $\mathfrak r$, which is assertion (2). [given, step 2.2, step 3.2, L1]

4.3 The algebra $E\otimes_{\kappa(\mathfrak p)}\kappa(\mathfrak p')$ is finite-dimensional over $\kappa(\mathfrak p')$, since the images of the basis in step 1.4 span it. Any localization $A_{\mathfrak r}$ of a finite-dimensional algebra $A$ over a field at a prime $\mathfrak r$ is finite-dimensional: for $s\notin\mathfrak r$, the descending chain of vector subspaces $(s^n)\subseteq A$ stabilizes, so for some $N\ge0$ and $a\in A$ one has $s^N=s^{N+1}a$; in $A_{\mathfrak r}$ this gives $1=sa$, so the inverse of every denominator is already in the image of $A$. Hence $A\to A_{\mathfrak r}$ is surjective and its target is finite-dimensional. Applying this to the localization in step 3.3 shows $E'$ is finite-dimensional over $\kappa(\mathfrak p')$. [step 1.4, step 3.3, algebra]

5.1 Thus the $\kappa(\mathfrak p')$-algebra $S'_{\mathfrak q'}/\mathfrak p'S'_{\mathfrak q'}$ is generated as a $\kappa(\mathfrak p')$-module by $y_1,\ldots,y_d$, hence is finite over $\kappa(\mathfrak p')$ by [L1]; that is, $R'\to S'$ is quasi-finite at $\mathfrak q'$ by [L1], which is assertion (3). [step 2.3, step 4.3, L1]

6.1 Assertion (1) is step 4.1, assertion (2) is step 4.2, assertion (3) is step 5.1 and assertion (4) with its contrapositive form is step 2.4; all four reduce to the single finite-dimensionality condition of [L1] at the relevant prime, and no Noetherian hypothesis and no form of the Axiom of Choice was used. ∎ [step 4.1, step 4.2, step 5.1, step 2.4, L1]
