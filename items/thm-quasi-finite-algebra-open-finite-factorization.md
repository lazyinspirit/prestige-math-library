---
id: thm-quasi-finite-algebra-open-finite-factorization
kind: theorem
title: A quasi-finite algebra factors openly through a finite algebra
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-quasi-finite-at-a-prime-for-finite-type-algebras, def-finite-type-and-module-finite-algebras, def-integral-subalgebra-of-an-arbitrary-ring-map, thm-algebraic-zariski-main-localization, lem-algebra-generated-by-finitely-many-integral-elements-is-module-finite, prop-iterated-localisation, thm-prime-spectrum-is-compact, lem-spectrum-compactness-open-cover-to-unit-ideal, lem-localisation-spectrum-map-homeomorphism-onto-image, def-principal-distinguished-subset-of-spectrum, lem-zariski-closed-set-axioms, cor-spectrum-is-a-contravariant-topological-functor, thm-prime-spectrum-of-a-localisation-bijection, def-principal-localisation, lem-localisation-preserves-injectivity, def-axiom-of-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Commutative Algebra, Section 10.123, Lemma 10.123.14 with its proof"
      url: "https://stacks.math.columbia.edu/tag/00PI"
      locator: "Section 10.123, Lemma 10.123.14, using Theorem 10.123.12; the published proof of part (3) ends with 'Details omitted'"
    - title: "J. S. Milne, A Primer of Commutative Algebra, version 4.03, Corollary 17.12"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
      locator: "Section 17, Corollary 17.12 (a) and (b)"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $R\to S$ be a ring
map of finite type ([[def-finite-type-and-module-finite-algebras]]) that is
quasi-finite at every prime of $S$
([[def-quasi-finite-at-a-prime-for-finite-type-algebras]]), and let
$S'\subseteq S$ be the integral closure of the image of $R$ in $S$
([[def-integral-subalgebra-of-an-arbitrary-ring-map]]). Then the following
hold.

1. There are a finite $R$-subalgebra $T\subseteq S'$ that is module-finite
   over $R$ and finitely many elements $g_1,\ldots,g_n\in T$ such that
   $$ U:=D_T(g_1)\cup\cdots\cup D_T(g_n) $$
   is an open subset of $\operatorname{Spec}(T)$
   ([[def-principal-distinguished-subset-of-spectrum]]), the contraction map
   $\operatorname{Spec}(S)\to\operatorname{Spec}(T)$
   ([[cor-spectrum-is-a-contravariant-topological-functor]]) is a
   homeomorphism onto $U$, and the inclusion $T\to S$ induces an isomorphism
   $T_{g_i}\to S_{g_i}$ of principal localisations
   ([[def-principal-localisation]]) for every $i$.

2. For every $g\in T$ with $D_T(g)\subseteq U$ the inclusion induces an
   isomorphism $T_g\to S_g$.

Thus a quasi-finite finite-type algebra is, after replacing the base by a
finite subalgebra of the relative integral closure, an open piece of that
finite algebra: locally on the source it is a principal localisation of a
finite algebra, and globally on the source the map is a homeomorphism onto an
open subset. The proof is a finite-principal-open patching, with the Axiom of
Choice used for the compactness of the spectrum and for turning a finite open
cover by distinguished opens into a unit-ideal expression; the published Stacks
proof of the finite-algebra part is the phrase "Details omitted", which is
spelled out here.

## Facts & Assumptions

**Given:** A ring map $R\to S$ of finite type that is quasi-finite at every prime of $S$, the relative integral closure $S'=\operatorname{Int}_R(S)\subseteq S$ of the image of $R$ in $S$, and the Axiom of Choice, assumed throughout.

[L1] The map $R\to S$ is **quasi-finite at $\mathfrak q$** when the $\kappa(\mathfrak p)$-algebra $S_{\mathfrak q}/\mathfrak pS_{\mathfrak q}$ is finite over $\kappa(\mathfrak p)$, and $R\to S$ is quasi-finite when it is of finite type and quasi-finite at every prime of $S$ ([[def-quasi-finite-at-a-prime-for-finite-type-algebras]]).

[L2] An $R$-algebra $A$ is of finite type over $R$ when $A=R[a_1,\ldots,a_n]$ for finitely many elements, equivalently a quotient of a polynomial ring, and module-finite over $R$ when it is finitely generated as an $R$-module ([[def-finite-type-and-module-finite-algebras]]).

[L3] Assume the Axiom of Choice. For a finite type map $R\to S$ quasi-finite at $\mathfrak q\in\operatorname{Spec}(S)$ there is $g\in S'\setminus\mathfrak q$ with $S'\to S$ inducing an isomorphism $S'_g\cong S_g$ ([[thm-algebraic-zariski-main-localization]]).

[L4] For a unital ring map $R\to S$ the relative integral closure $\operatorname{Int}_R(S)$ is the set of elements of $S$ integral over the map, an $R$-subalgebra of $S$ containing the image of $R$ and equal to the integral closure of that image ([[def-integral-subalgebra-of-an-arbitrary-ring-map]]).

[L5] If $A\subseteq B$ is a subring and $b_1,\ldots,b_n\in B$ are integral over $A$, then $A[b_1,\ldots,b_n]$ is module-finite over $A$ ([[lem-algebra-generated-by-finitely-many-integral-elements-is-module-finite]]).

[L6] For multiplicative subsets $S,T\subseteq R$ with image $\bar T$ in $S^{-1}R$ and $U$ generated by $S\cup T$ there is a unique $R$-algebra isomorphism $\bar T^{-1}(S^{-1}R)\cong U^{-1}R$; in particular $(R_f)_g\cong R_{fg}$ ([[prop-iterated-localisation]]).

[L7] Assume the Axiom of Choice. For every commutative ring $R$ the space $\operatorname{Spec}(R)$ is compact ([[thm-prime-spectrum-is-compact]]).

[L8] Assume the Axiom of Choice. If a family of elements $f_\lambda$ of $R$ satisfies $\operatorname{Spec}(R)=\bigcup_\lambda D(f_\lambda)$, then the ideal generated by the family is the unit ideal $R$ ([[lem-spectrum-compactness-open-cover-to-unit-ideal]]).

[L9] For a multiplicative subset $S\subseteq R$ the contraction map along $R\to S^{-1}R$ is a homeomorphism from $\operatorname{Spec}(S^{-1}R)$ onto $\{\mathfrak p\in\operatorname{Spec}(R):\mathfrak p\cap S=\varnothing\}$ ([[lem-localisation-spectrum-map-homeomorphism-onto-image]]).

[L10] For $f\in R$ the principal distinguished subset is $D(f)=\{\mathfrak p:f\notin\mathfrak p\}$, the complement of $V((f))$ ([[def-principal-distinguished-subset-of-spectrum]]).

[L11] The subsets $V(I)$ of $\operatorname{Spec}(R)$, as $I$ ranges over the ideals of $R$, contain $\operatorname{Spec}(R)$ and $\varnothing$, are closed under arbitrary intersections and finite unions, and define a topology on $\operatorname{Spec}(R)$ ([[lem-zariski-closed-set-axioms]]).

[L12] For every ring homomorphism $\varphi:R\to A$ contraction defines a continuous map $\operatorname{Spec}(A)\to\operatorname{Spec}(R)$, and these maps compose contravariantly ([[cor-spectrum-is-a-contravariant-topological-functor]]).

[L13] For a multiplicative subset $S\subseteq R$ contraction along $R\to S^{-1}R$ is an inclusion-preserving bijection onto the primes disjoint from $S$, with inverse $\mathfrak p\mapsto S^{-1}\mathfrak p$ ([[thm-prime-spectrum-of-a-localisation-bijection]]).

[L14] For $f$ in a commutative ring $R$ the principal localisation is $R_f=S_f^{-1}R$ with $S_f=\{1,f,f^2,\ldots\}$, and its elements may be written $r/f^n$ ([[def-principal-localisation]]).

[L15] Localisation preserves injectivity: if $f:M'\to M$ is an injective $R$-module homomorphism and $S\subseteq R$ is multiplicative, then $S^{-1}f:S^{-1}M'\to S^{-1}M$ is injective ([[lem-localisation-preserves-injectivity]]).

[L16] The **Axiom of Choice** (AC) is the statement that every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 We assume the Axiom of Choice as recorded in [L16]. By [L2] the finite type $R$-algebra $S$ has the form $S=R[s_1,\ldots,s_m]$, and $S'=\operatorname{Int}_R(S)$ is an $R$-subalgebra of $S$ containing the image of $R$ by [L4]. The hypothesis is that $R\to S$ is quasi-finite at every prime of $S$ in the sense of [L1]. [given, L1, L2, L4, L16]


2.1 For each prime $\mathfrak q\in\operatorname{Spec}(S)$ the local theorem [L3] applies and produces an element $g_{\mathfrak q}\in S'\setminus\mathfrak q$ such that the inclusion $S'\to S$ induces an isomorphism $S'_{g_{\mathfrak q}}\to S_{g_{\mathfrak q}}$. Since $\mathfrak q\in D_S(g_{\mathfrak q})=\{\mathfrak r:g_{\mathfrak q}\notin\mathfrak r\}$, and each $D_S(g_{\mathfrak q})$ is open in the topology of [L11] because it is the complement of $V((g_{\mathfrak q}))$ by [L10], the family $\{D_S(g_{\mathfrak q})\}_{\mathfrak q}$ is an open cover of $\operatorname{Spec}(S)$. [given, step 1.1, L3, L10, L11]


3.1 By compactness [L7] there are finitely many elements $g_1,\ldots,g_n\in S'$ with $$\operatorname{Spec}(S)=D_S(g_1)\cup\cdots\cup D_S(g_n),$$ and then the ideal generated by $g_1,\ldots,g_n$ is the unit ideal of $S$ by [L8]. [given, step 2.1, L7, L8]


3.2 For each $i$ the localisation $S_{g_i}$ is a finitely generated $R$-algebra: by [L2] the images of $s_1,\ldots,s_m$ together with the inverse of (the image of) $g_i$ generate it over $R$, and $1/g_i$ is an element of $S_{g_i}$ by [L14]. Hence for each $i$ there are finitely many elements $z_{i1},\ldots,z_{iN_i}\in S_{g_i}$ generating $S_{g_i}$ as an $R$-algebra; using the isomorphism $S'_{g_i}\cong S_{g_i}$ of step 2.1 and [L14] we may write $$ z_{ij}=y_{ij}/g_i^{m_{ij}}\qquad\text{with }y_{ij}\in S',\ m_{ij}\ge0. $$ Put $$ T:=R[\,g_1,\ldots,g_n,\ y_{ij}\ (1\le i\le n,\ 1\le j\le N_i)\,]\subseteq S'. $$ Then $T_{g_i}=S_{g_i}$ for every $i$: the inclusion $T\subseteq S'$ gives $T_{g_i}\subseteq S'_{g_i}=S_{g_i}$, while every generator $z_{ij}=y_{ij}/g_i^{m_{ij}}$ of $S_{g_i}$ over $R$ lies in $T_{g_i}$, so $S_{g_i}\subseteq T_{g_i}$. [given, step 2.1, L2, L14]


4.1 Every generator $g_i$, $y_{ij}$ of $T$ lies in $S'$ and hence is integral over $R$ by [L4]. Writing $A$ for the image of $R$ in $S$, [L5] shows that $T=A[g_i,y_{ij}]$ is module-finite over $A$, and the same finite list generates $T$ as an $R$-module, so $T$ is module-finite over $R$; in particular $T$ is of finite type over $R$ by [L2], and it is a subalgebra of $S'$ by step 3.2. [given, step 3.2, L2, L4, L5]


4.2 Let $\varphi:\operatorname{Spec}(S)\to\operatorname{Spec}(T)$ be the contraction map along the inclusion $T\subseteq S$, which is continuous by [L12]. For $h\in T\subseteq S$ one has $\varphi^{-1}(D_T(h))=D_S(h)$, because a prime $\mathfrak r\in\operatorname{Spec}(S)$ contracts to a prime containing $h$ exactly when $\mathfrak r$ itself contains $h$. Consequently $$\varphi^{-1}(U)=\bigcup_i\varphi^{-1}(D_T(g_i))=\bigcup_iD_S(g_i)=\operatorname{Spec}(S)$$ for $U:=D_T(g_1)\cup\cdots\cup D_T(g_n)$, so $\varphi$ maps $\operatorname{Spec}(S)$ into $U$; and $U$ is open in $\operatorname{Spec}(T)$ by [L10] and [L11]. [given, step 3.1, L10, L11, L12]


4.3 For each $i$ the restriction of $\varphi$ to $D_S(g_i)$ is a homeomorphism onto $D_T(g_i)$. Indeed [L9] identifies $D_S(g_i)$ with $\operatorname{Spec}(S_{g_i})$ and $D_T(g_i)$ with $\operatorname{Spec}(T_{g_i})$ through the contraction maps of the localisations, and the ring isomorphism $T_{g_i}\cong S_{g_i}$ of step 3.2 induces a homeomorphism $\operatorname{Spec}(S_{g_i})\to\operatorname{Spec}(T_{g_i})$; by [L13] the inverse of each of these identifications is the extension of a prime, and contracting a localised prime back to $T$ recovers the contraction of the original prime, so the composite is exactly the restriction of $\varphi$. [given, step 3.2, L9, L12, L13]


4.4 For every $i$ the inclusion induces an isomorphism $T_{gg_i}\to S_{gg_i}$: localising the isomorphism $T_{g_i}\to S_{g_i}$ of step 3.2 at the element $g$, and rewriting $(T_{g_i})_g\cong T_{g_ig}$ and $(S_{g_i})_g\cong S_{g_ig}$ by [L6], gives the claim. [given, step 3.2, L6]


5.1 Now let $g\in T$ with $D_T(g)\subseteq U$, where the subalgebra $T$, the elements $g_1,\ldots,g_n$ and the open set $U$ are the ones constructed in steps 3.2 and 4.2, and first record that the images of $g_1,\ldots,g_n$ generate the unit ideal of $T_g$. By [L9] applied to the principal localisation $T\to T_g$ the spectrum $\operatorname{Spec}(T_g)$ is identified with $D_T(g)$, and under this identification the subset $D_{T_g}(g_i/1)$ corresponds to $D_T(g)\cap D_T(g_i)$: a prime $\mathfrak p\in D_T(g)$ contains $g_i$ exactly when the corresponding prime of $T_g$ contains $g_i/1$ by [L13] and [L14]. Hence the inclusion $D_T(g)\subseteq\bigcup_iD_T(g_i)$ gives $\operatorname{Spec}(T_g)=\bigcup_iD_{T_g}(g_i/1)$, and [L8] applied to the ring $T_g$ and the finite family $g_i/1$ shows that the ideal generated by the images of $g_1,\ldots,g_n$ in $T_g$ is the unit ideal, say $1=\sum_ia_i(g_i/1)$ with $a_i\in T_g$. [given, step 3.2, step 4.2, L8, L9, L13, L14]


5.2 The map $\varphi$ is injective and has image $U$. For injectivity, let $\mathfrak q_1,\mathfrak q_2\in\operatorname{Spec}(S)$ with $\varphi(\mathfrak q_1)=\varphi(\mathfrak q_2)=:\mathfrak p\in U$; choose $i$ with $\mathfrak p\in D_T(g_i)$. Since $g_i\in T$ and $g_i\notin\mathfrak p=\mathfrak q_j\cap T$, we get $g_i\notin\mathfrak q_j$ for $j=1,2$, so both primes lie in $D_S(g_i)$, where $\varphi$ is injective by step 4.3. For surjectivity onto $U$, let $\mathfrak p\in U$ and choose $i$ with $\mathfrak p\in D_T(g_i)$; the prime $\mathfrak p$ corresponds under [L9] to a prime of $T_{g_i}$, which we transport across the isomorphism $T_{g_i}\cong S_{g_i}$ of step 3.2 to a prime of $S_{g_i}$, and its contraction to $S$ by [L9] is a prime $\mathfrak q\in D_S(g_i)$ with $\varphi(\mathfrak q)=\mathfrak p$ by step 4.3. [given, step 4.2, step 4.3, L9]


6.1 The map $T_g\to S_g$ induced by the inclusion is an isomorphism. It is injective: $T\to S$ is injective with $S$ viewed as a $T$-module, so [L15] applies to the multiplicative subset $\{1,g,g^2,\ldots\}$ of $T$. For surjectivity let $s\in S_g$. By step 4.4 the localisation $(T_g)_{g_i}\to(S_g)_{g_i}$ is an isomorphism for every $i$, so for each $i$ there are $m_i\ge0$ and $t_i\in T_g$ with $g_i^{m_i}s=t_i$. Put $M:=m_1+\cdots+m_n$ and expand $1=(\sum_ia_i(g_i/1))^M$ from step 5.1: every monomial in the expansion has the form $(\text{product of }a\text{'s})\cdot\prod_ig_i^{\nu_i}$ with $\nu_1+\cdots+\nu_n=M$, hence some $\nu_i\ge m_i$ and the monomial is divisible by $g_i^{m_i}$; consequently $1\in(g_1^{m_1},\ldots,g_n^{m_n})$ in $T_g$, say $1=\sum_ic_ig_i^{m_i}$ with $c_i\in T_g$. Then $s=\sum_ic_ig_i^{m_i}s=\sum_ic_it_i$ lies in $T_g$. Hence $T_g\to S_g$ is bijective, and being a ring homomorphism induced by the inclusion it is an isomorphism. [given, step 5.1, step 4.4, L6, L15]


6.2 The restricted map $\varphi:\operatorname{Spec}(S)\to U$ is a homeomorphism. It is continuous by step 4.2 and bijective by step 5.2. To see that it is open, let $W\subseteq\operatorname{Spec}(S)$ be open and write $W=\bigcup_i(W\cap D_S(g_i))$ using that the $D_S(g_i)$ cover $\operatorname{Spec}(S)$ by step 3.1; each $W\cap D_S(g_i)$ is open in $D_S(g_i)$ and therefore has image $\varphi(W\cap D_S(g_i))$ open in $D_T(g_i)$ by step 4.3, hence open in $U$ because $D_T(g_i)\subseteq U$ is open in $\operatorname{Spec}(T)$. Thus $\varphi(W)=\bigcup_i\varphi(W\cap D_S(g_i))$ is a union of subsets open in $U$ and is open in $U$. A continuous, open bijection onto $U$ is a homeomorphism. [given, step 3.1, step 4.2, step 4.3, step 5.2]


7.1 Part 1 is now established by the objects constructed above: $T$ is a finite $R$-subalgebra of $S'$ by step 4.1, the set $U=D_T(g_1)\cup\cdots\cup D_T(g_n)$ is open by step 4.2, the contraction map $\varphi:\operatorname{Spec}(S)\to\operatorname{Spec}(T)$ is a homeomorphism onto $U$ by step 6.2, and $T_{g_i}\cong S_{g_i}$ for every $i$ by step 3.2. Part 2 is step 6.1. [given, step 3.2, step 4.1, step 4.2, step 6.2, step 6.1]


8.1 The Axiom of Choice was used in step 2.1 through [L3], in step 3.1 through the compactness of $\operatorname{Spec}(S)$ [L7] and the cover-to-unit-ideal statement [L8], and in step 5.1 through [L8] again. Every other selection was finite: the generators $s_i$ of step 1.1, the finitely many $g_i$ of step 3.1, the generators $z_{ij}$ and numerators $y_{ij}$ of step 3.2, the index $i$ in steps 5.2 and 5.1 and the exponents $m_i$ of step 6.1. ∎ [given, step 2.1, step 3.1, step 5.1, L3, L7, L8, L16]

