---
id: cex-quasi-finite-morphism-need-not-be-finite
kind: counterexample
title: Quasi-finite does not imply finite
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-quasi-finite-at-a-prime-for-finite-type-algebras, cor-quasi-finite-algebra-is-source-locally-a-localization-of-a-finite-algebra, def-axiom-of-choice, def-finite-type-and-module-finite-algebras, def-product-ring, def-principal-localisation, def-multiplicative-subset-and-localisation, def-polynomial-ring-over-a-commutative-ring, cor-polynomial-ring-over-a-domain-is-a-domain, def-field, def-field-of-fractions, def-polynomial-degree-leading-coefficient-and-monic, prop-polynomial-degree-laws-over-a-commutative-ring, def-integral-element-and-algebraic-integer, def-integral-subalgebra-of-an-arbitrary-ring-map, def-integral-closure-and-integrally-closed-domain, lem-zmt-polynomial-rings-over-normal-domains-are-normal, thm-integrality-and-finite-module-equivalences, cor-residue-field-of-a-localisation-at-a-prime, thm-universal-property-of-a-polynomial-ring, thm-monic-polynomial-division, thm-first-isomorphism-theorem-rings, thm-tensor-products-commute-with-arbitrary-direct-sums, thm-unit-isomorphisms-for-module-tensor-products, lem-tensor-ring-presentations-for-base-change, def-principal-distinguished-subset-of-spectrum, lem-localisation-spectrum-map-homeomorphism-onto-image, lem-quotient-spectrum-map-is-closed, cor-spectrum-is-a-contravariant-topological-functor, def-prime-and-maximal-ideals, def-left-right-and-two-sided-ideal, thm-quasi-finite-algebra-open-finite-factorization]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Commutative Algebra, Section 10.123, Theorem 10.123.12 and Lemma 10.123.14"
      url: "https://stacks.math.columbia.edu/tag/00PI"
      locator: "Section 10.123, the open-piece form of Zariski's Main Theorem"
    - title: "J. S. Milne, A Primer of Commutative Algebra, version 4.03, Aside 17.9 and Corollary 17.12"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
      locator: "Section 17, Aside 17.9 (finite versus quasi-finite) and Corollary 17.12"
verification:
  audited: 2026-09-27
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $k$ be a field, let
$R=k[t]$ and let $B=k[t,t^{-1}]=R_t$ be the principal localisation of $R$ at
$t$ ([[def-principal-localisation]]). Let
$$ S=R\times B $$
be the product ring ([[def-product-ring]]) with the **diagonal** $R$-algebra
structure $r\mapsto(r,r)$, and put
$$ u:=(0,t^{-1})\in S,\qquad e:=(1,0)\in S,\qquad \bar t:=(t,t)\in S. $$
Then:

1. **Finite type.** $\bar t\,u=1_S-e$, and $S=R[u]=R[e,u]$; hence $R\to S$ is a
   ring map of finite type ([[def-finite-type-and-module-finite-algebras]]).

2. **Fibres.** For $\mathfrak p\in\operatorname{Spec}(R)$ the fibre
   ([[def-quasi-finite-at-a-prime-for-finite-type-algebras]]) is
   $S\otimes_R\kappa((t))\cong k$ over the prime $(t)$, and
   $S\otimes_R\kappa(\mathfrak p)\cong\kappa(\mathfrak p)\times\kappa(\mathfrak p)$
   over every prime $\mathfrak p$ with $t\notin\mathfrak p$. In particular every
   fibre of $\operatorname{Spec}(S)\to\operatorname{Spec}(R)$ is finite, of one or
   two points.

3. **Quasi-finite.** $R\to S$ is quasi-finite at every prime of $S$: for
   $\mathfrak q\in\operatorname{Spec}(S)$ with contraction
   $\mathfrak p=\mathfrak q\cap R$ one has
   $S_{\mathfrak q}/\mathfrak pS_{\mathfrak q}\cong\kappa(\mathfrak p)$.

4. **Not finite.** $S$ is not module-finite over $R$, that is, not a finite
   $R$-algebra ([[def-finite-type-and-module-finite-algebras]]). So a
   quasi-finite finite-type algebra need not be finite.

5. **The finite factor.** The relative integral closure
   ([[def-integral-subalgebra-of-an-arbitrary-ring-map]]) is
   $S'=\operatorname{Int}_R(S)=R\times R$, which **is** module-finite over $R$,
   and with $g:=(1,t)\in S'$ one has
   $S'_g=S_g=S$: a single element inverts the whole difference, and the
   contraction map $\operatorname{Spec}(S)\to\operatorname{Spec}(S')$ is a
   homeomorphism onto the open set $D_{S'}(g)$, whose two pieces are the whole
   first component of $\operatorname{Spec}(R\times R)$ and $D(t)$ inside the
   second one. This is the configuration of
   [[thm-quasi-finite-algebra-open-finite-factorization]] and
   [[cor-quasi-finite-algebra-is-source-locally-a-localization-of-a-finite-algebra]]
   with one element working at every prime of $S$ at once.

The Axiom of Choice is recorded because the two general factorization theorems
cited in part 5 assume it; every computation of this item is performed on
finitely many named elements and needs no choice.

## Facts & Assumptions

**Given:** A field $k$, the polynomial ring $R=k[t]$, the principal localisation $B=k[t,t^{-1}]=R_t$ of $R$ at $t$, the product ring $S=R\times B$ with the diagonal $R$-algebra structure $r\mapsto(r,r)$, the elements $u=(0,t^{-1})$, $e=(1,0)$ and $\bar t=(t,t)$ of $S$, and the Axiom of Choice.

[L1] For a commutative ring $R$ the polynomial ring $R[x]$ is the set of finitely supported coefficient functions with convolution product, the indeterminate $x$ being the coefficient function supported at $1$ with value $1_R$ ([[def-polynomial-ring-over-a-commutative-ring]]).

[L2] If $R$ is an integral domain then $R[x]$ is an integral domain; in particular $k[t]$ is a domain with $0\ne1$ ([[cor-polynomial-ring-over-a-domain-is-a-domain]]).

[L3] A field is a commutative unital ring with $0\ne1$ in which every nonzero element has a multiplicative inverse ([[def-field]]).

[L4] The product ring $R\times B$ carries componentwise operations and identity $(1_R,1_B)$, and $(u,v)$ is a unit of $R\times B$ if and only if $u$ and $v$ are units, with $(u,v)^{-1}=(u^{-1},v^{-1})$ ([[def-product-ring]]).

[L5] For $f\in R$ the principal localisation is $R_f=S_f^{-1}R$ with $S_f=\{1,f,f^2,\ldots\}$, its elements may be written $r/f^n$, $R_1$ is canonically isomorphic to $R$, and $R_0$ is the zero ring ([[def-principal-localisation]]).

[L6] In a localisation $S^{-1}R$ the classes are fractions $r/s$, two fractions are equal exactly when $u(rs'-r's)=0$ for some $u\in S$, every $s\in S$ maps to a unit with $(s/1)^{-1}=1/s$, and if $0\in S$ the localisation is the zero ring ([[def-multiplicative-subset-and-localisation]]).

[L7] Let $A$ be a commutative $R$-algebra. For $a_1,\ldots,a_n\in A$ its image under the evaluation homomorphism is written $R[a_1,\ldots,a_n]$ and is the smallest subring of $A$ containing the image of $R$ and the $a_i$; $A$ is **of finite type** over $R$ when $A=R[a_1,\ldots,a_n]$ for finitely many elements, and **module-finite** over $R$ when $A$ is finitely generated as an $R$-module ([[def-finite-type-and-module-finite-algebras]]).

[L8] For $0\ne f\in R[x]$ the degree $\deg f$ is the largest $n$ with $a_n\ne0$ and $\operatorname{lc}(f)=a_{\deg f}$; the zero polynomial has no degree ([[def-polynomial-degree-leading-coefficient-and-monic]]).

[L9] For nonzero $f,g\in R[x]$ the coefficient of $x^{\deg f+\deg g}$ in $fg$ is $\operatorname{lc}(f)\operatorname{lc}(g)$, and if $fg\ne0$ then $\deg(fg)\le\deg f+\deg g$ ([[prop-polynomial-degree-laws-over-a-commutative-ring]]).

[L10] An element $b$ of a commutative ring $B$ is integral over a subring $A\subseteq B$ when it is a root of a monic polynomial in $A[X]$ ([[def-integral-element-and-algebraic-integer]]).

[L11] For a unital ring map $R\to S$ with image $\varphi(R)$, the relative integral closure $\operatorname{Int}_R(S)$ is the set of $s\in S$ satisfying a monic equation $s^d+\varphi(a_{d-1})s^{d-1}+\cdots+\varphi(a_0)=0$, and it is a subring of $S$ containing $\varphi(R)$ ([[def-integral-subalgebra-of-an-arbitrary-ring-map]]).

[L12] A domain $A$ is integrally closed when every element of $\operatorname{Frac}(A)$ that is integral over $A$ already lies in $A$ ([[def-integral-closure-and-integrally-closed-domain]]).

[L13] For an integral domain $D$ the field of fractions is $\operatorname{Frac}(D)=(D\setminus\{0\})^{-1}D$, with elements fractions $a/b$ for $a,b\in D$, $b\ne0$ ([[def-field-of-fractions]]).

[L14] If $R$ is an integrally closed domain then the polynomial ring $R[x]$ is integrally closed ([[lem-zmt-polynomial-rings-over-normal-domains-are-normal]]).

[L15] Let $A\subseteq B$ be commutative rings with $A\ne0$ and let $b\in B$. Then $b$ is integral over $A$ if and only if $A[b]$ is finitely generated as an $A$-module ([[thm-integrality-and-finite-module-equivalences]]).

[L16] For a prime $\mathfrak p$ of $R$ there is a canonical field isomorphism $R_{\mathfrak p}/\mathfrak pR_{\mathfrak p}\cong\operatorname{Frac}(R/\mathfrak p)$; this is the residue field $\kappa(\mathfrak p)$ ([[cor-residue-field-of-a-localisation-at-a-prime]]).

[L17] For commutative rings $R,S$, a unital ring map $\varphi:R\to S$ and $s\in S$ there is a unique unital ring homomorphism $\operatorname{ev}_{\varphi,s}:R[x]\to S$ extending $\varphi$ on constants and sending $x$ to $s$, given by $\operatorname{ev}_{\varphi,s}(\sum_ia_ix^i)=\sum_i\varphi(a_i)s^i$ ([[thm-universal-property-of-a-polynomial-ring]]).

[L18] If $g\in R[x]$ is monic and $f\in R[x]$, there are unique $q,r\in R[x]$ with $f=qg+r$ and $r=0$ or $\deg r<\deg g$ ([[thm-monic-polynomial-division]]).

[L19] A ring homomorphism with kernel $I$ induces an isomorphism from $R/I$ onto its image ([[thm-first-isomorphism-theorem-rings]]).

[L20] For a family of $R$-modules $(M_i)$ and an $R$-module $N$ there is a natural isomorphism $\bigoplus_i(M_i\otimes_RN)\cong(\bigoplus_iM_i)\otimes_RN$; in particular tensoring distributes over finite direct sums ([[thm-tensor-products-commute-with-arbitrary-direct-sums]]).

[L21] For every $R$-module $N$ the multiplication map $R\otimes_RN\to N$, $r\otimes n\mapsto rn$, is an isomorphism ([[thm-unit-isomorphisms-for-module-tensor-products]]).

[L22] For a unital ring map $A\to C$ and a multiplicative subset $M\subseteq A$ there is a ring isomorphism $(M^{-1}A)\otimes_AC\cong\overline M^{-1}C$, where $\overline M$ is the image of $M$ in $C$ ([[lem-tensor-ring-presentations-for-base-change]]).

[L23] For a finite-type map $R\to S$ and $\mathfrak q\in\operatorname{Spec}(S)$ with $\mathfrak p=\mathfrak q\cap R$, the map is **quasi-finite at $\mathfrak q$** when $S_{\mathfrak q}/\mathfrak pS_{\mathfrak q}$ is finite over $\kappa(\mathfrak p)$, and quasi-finite when it is finite type and quasi-finite at every prime; the fibre over $\mathfrak p$ is $\operatorname{Spec}(S\otimes_R\kappa(\mathfrak p))$, the prime $\mathfrak q$ determines a prime $\overline{\mathfrak q}$ of the fibre, and the local ring of the fibre at that prime is $S_{\mathfrak q}/\mathfrak pS_{\mathfrak q}$, either description being usable as the definition ([[def-quasi-finite-at-a-prime-for-finite-type-algebras]]).

[L24] For $f\in R$ the principal distinguished subset is $D(f)=\{\mathfrak p\in\operatorname{Spec}(R):f\notin\mathfrak p\}$ ([[def-principal-distinguished-subset-of-spectrum]]).

[L25] For a multiplicative subset $S\subseteq R$ contraction along the localisation map $R\to S^{-1}R$ is a homeomorphism from $\operatorname{Spec}(S^{-1}R)$ onto $\{\mathfrak p\in\operatorname{Spec}(R):\mathfrak p\cap S=\varnothing\}$ ([[lem-localisation-spectrum-map-homeomorphism-onto-image]]).

[L26] Let $R$ be a commutative ring, $I\trianglelefteq R$ an ideal and $\pi:R\to R/I$ the quotient map. Then contraction along $\pi$ is a homeomorphism from $\operatorname{Spec}(R/I)$ onto the closed subset $V(I)\subseteq\operatorname{Spec}(R)$ ([[lem-quotient-spectrum-map-is-closed]]).

[L27] Contraction along a ring map is a continuous map, $\operatorname{Spec}(\operatorname{id}_R)=\operatorname{id}_{\operatorname{Spec}(R)}$ and $\operatorname{Spec}(\psi\circ\varphi)=\operatorname{Spec}(\varphi)\circ\operatorname{Spec}(\psi)$ ([[cor-spectrum-is-a-contravariant-topological-functor]]).

[L28] The **Axiom of Choice** states that every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

[L29] Assume the Axiom of Choice. If $R\to S$ is finite type and quasi-finite at every prime of $S$, with $S'$ the integral closure of the image of $R$ in $S$, then there are a finite $R$-subalgebra $T\subseteq S'$ that is module-finite over $R$ and finitely many $g_1,\ldots,g_n\in T$ with $U=D_T(g_1)\cup\cdots\cup D_T(g_n)$ open, the contraction map $\operatorname{Spec}(S)\to\operatorname{Spec}(T)$ a homeomorphism onto $U$, and $T_{g_i}\to S_{g_i}$ an isomorphism for every $i$; moreover for every $g\in T$ with $D_T(g)\subseteq U$ the inclusion induces an isomorphism $T_g\to S_g$ ([[thm-quasi-finite-algebra-open-finite-factorization]]).

[L30] Assume the Axiom of Choice. If $R\to S$ is finite type and quasi-finite at every prime of $S$, then for every $\mathfrak q\in\operatorname{Spec}(S)$ there are a finite $R$-subalgebra $T\subseteq S'$ of the relative integral closure, module-finite over $R$, and an element $g\in T$ with $g\notin\mathfrak q$ such that $T_g\cong S_g$ ([[cor-quasi-finite-algebra-is-source-locally-a-localization-of-a-finite-algebra]]).

[L31] A proper ideal $P\subsetneq R$ is prime when $ab\in P$ implies $a\in P$ or $b\in P$; in particular every prime ideal is proper and a unit of $R$ lies in no prime ideal ([[def-prime-and-maximal-ideals]]).

[L32] A **two-sided ideal** $I\mathrel{\trianglelefteq}R$ of a ring $R$ is an additive subgroup of $(R,+)$ with $ri\in I$ for every $r\in R$ and $i\in I$; in a commutative ring the left, right and two-sided ideals agree ([[def-left-right-and-two-sided-ideal]]).

## Proof

**Proof technique:** direct.

1.1 Take the field $k$, the polynomial ring $R=k[t]$ with indeterminate $t$ [L1], and $B=R_t=\{1,t,t^2,\ldots\}^{-1}R=k[t,t^{-1}]$ [L5]. The ring $R$ is a domain with $0\ne1$ [L2], and $B$ is a localisation of it. Let $S=R\times B$ be the product ring [L4], a commutative unital ring, and let $\varphi:R\to S$, $r\mapsto(r,r)$ be the diagonal map: it is a unital ring homomorphism because the operations of $S$ are componentwise [L4], and it is injective, since $(r,r)=0$ forces $r=0$ by componentwise equality [L4]. Thus $S$ is a commutative $R$-algebra with $S\ne0$. [given, L1, L2, L4, L5]

1.2 We record the prime ideals of a product ring. Let $A$ and $C$ be commutative rings and put $e=(1,0)$, $f=(0,1)$ in $A\times C$; then $e+f=1$ and $ef=0$, and for $(a,b)\in A\times C$ the componentwise operations [L4] give $e(a,b)=(a,0)$ and $f(a,b)=(0,b)$. Let $P$ be a prime ideal of $A\times C$. Since $ef=0\in P$, [L31] gives $e\in P$ or $f\in P$; not both, because then $1=e+f\in P$ would contradict the properness of a prime ideal [L31]. Suppose $f\in P$ and put $I=\{a\in A:(a,0)\in P\}$; this is an ideal of $A$: if $(a,0),(a',0)\in P$ then $(a+a',0)=(a,0)+(a',0)\in P$, and if $r\in A$ and $(a,0)\in P$ then $(ra,0)=r(a,0)\in P$, because $P$ is an additive subgroup of $A\times C$ closed under multiplication by elements of $A\times C$ [L4, L32]. For $(a,b)\in P$ the identity $(0,b)=f(a,b)$ shows $(0,b)\in P$, hence $(a,0)=(a,b)-(0,b)\in P$; conversely, if $(a,0)\in P$ then $(a,b)=(a,0)+f(0,b)$ is a sum of two elements of $P$. Hence $P=I\times C$, and $I$ is prime: it is proper, since $(1,0)\in P$ would give $1=(1,0)+(0,1)\in P$; and if $rs\in I$ for $r,s\in A$, then $(r,0)(s,0)=(rs,0)\in P$, so $r\in I$ or $s\in I$ [L31]. Symmetrically, if $e\in P$ then $P=A\times J$ with $J=\{b\in C:(0,b)\in P\}$ a prime ideal of $C$. Conversely, if $I\subseteq A$ is a prime ideal then $I\times C$ is a prime ideal of $A\times C$: it is proper because $1\notin I$, and $(a,b)(a',b')=(aa',bb')\in I\times C$ forces $aa'\in I$, hence $a\in I$ or $a'\in I$, that is $(a,b)\in I\times C$ or $(a',b')\in I\times C$ [L4, L31]; symmetrically $A\times J$ is prime for a prime ideal $J\subseteq C$. Hence the prime ideals of a product ring $A\times C$ are exactly the ideals $I\times C$ with $I$ prime in $A$ and the ideals $A\times J$ with $J$ prime in $C$. [given, L4, L31, L32]

2.1 Put $u:=(0,t^{-1})\in S$, $e:=(1,0)\in S$ and $\bar t:=\varphi(t)=(t,t)$. Multiplying, $\bar t\,u=(t,t)(0,t^{-1})=(0,1)=1_S-e$ [L4]. We claim $S=R[u]$. First, every element of $B=R_t$ is of the form $\sum_{i=0}^{n}a_it^{-i}$ with $a_i\in R$: an element of $R_t$ is $r/t^n$ [L5], and writing $r=\sum_{j=0}^{d}c_jt^j$ in $R=k[t]$ [L1] gives $r/t^n=\sum_{j<n}c_jt^{j-n}+\sum_{j\ge n}c_jt^{j-n}$, where the second sum lies in $R$ and the first is $\sum_{i=1}^{n}c_{n-i}t^{-i}$ [L1]. Second, for $g=a_0+\sum_{i=1}^{n}a_it^{-i}\in B$ and $f\in R$ one has $(f,g)=(f-a_0)e+\varphi(a_0)+\sum_{i=1}^{n}\varphi(a_i)u^i$: indeed $u^i=(0,t^{-i})$ and multiplication by $\varphi(a_i)=(a_i,a_i)$ is componentwise [L4], while $\varphi$ is the structure map [step 1.1]. Hence every element of $S$ is a polynomial in $u$ with coefficients in the image of $R$, so $S=R[u]=R[e,u]$ because $e=1_S-\bar t\,u$ is itself a polynomial in $u$; therefore $R\to S$ is of finite type [L7]. This proves part 1. [given, step 1.1, L1, L4, L5, L7]

2.2 The element $(1,t)\in S$ has inverse $(1,t^{-1})$ because $t^{-1}\in B$ is the inverse of $t\in B$ [L5] and units multiply componentwise [L4]: $(1,t)(1,t^{-1})=(1,1)=1_S$. In particular $t$ is a unit of $B$, so $B_t=B$. [given, step 1.1, L4, L5]

2.3 We compute the residue fields of $R=k[t]$. By [L16] with $\mathfrak p=(t)$ we have $\kappa((t))\cong\operatorname{Frac}(R/(t))$, the residue field being defined by that isomorphism. The evaluation map $\operatorname{ev}_{k,0}:R=k[t]\to k$, $\sum_ia_it^i\mapsto a_0$, is the ring homomorphism of [L17] for $\varphi=\operatorname{id}_k$ and $s=0$; it is surjective, since it is the identity on constants. Its kernel is exactly the principal ideal $(t)$: for $f=\sum_ia_it^i$ the division of [L18] by the monic polynomial $g=t=x$ gives unique $q,r$ with $f=qt+r$ and $r=0$ or $\deg r<1$, that is $r=c$ a constant, and evaluating gives $c=f(0)$; hence $f(0)=0$ if and only if $r=0$, that is $t\mid f$. So [L19] gives $R/(t)\cong k$, and then $\kappa((t))\cong\operatorname{Frac}(k)=k$ by [L13] and [L3]: the field of fractions of a field is the field itself, because all its nonzero elements are already units. Moreover the image of $t$ in $\kappa((t))$ is zero, since $t\in(t)$ and $R\to R/(t)\to\operatorname{Frac}(R/(t))$ is the canonical composite. [given, step 1.1, L3, L13, L16, L17, L18, L19]

3.1 The underlying additive group of $S=R\times B$ is the direct sum $R\oplus B$, the $R$-module structure being componentwise [L4]. Let $\mathfrak p\in\operatorname{Spec}(R)$ and put $\kappa:=\kappa(\mathfrak p)$. Tensoring the decomposition with $\kappa$ over $R$ and applying [L20] and [L21] gives $S\otimes_R\kappa\cong(R\otimes_R\kappa)\oplus(B\otimes_R\kappa)\cong\kappa\oplus(B\otimes_R\kappa)$, and applying [L22] to the multiplicative subset $M=\{1,t,t^2,\ldots\}\subseteq R$ with $A=R$ and $C=\kappa$ gives $B\otimes_R\kappa=R_t\otimes_R\kappa\cong\kappa_t$, the principal localisation of the field $\kappa$ at the image of $t$ [L5]. Now take $\mathfrak p=(t)$: the element $t$ maps to $0\in\kappa((t))$ by step 2.3, and inverting the zero element of a ring gives the zero ring [L6], so $\kappa((t))_t=0$ and $S\otimes_R\kappa((t))\cong\kappa((t))\oplus0\cong k$ by step 2.3. [given, step 1.1, step 2.3, L4, L5, L6, L20, L21, L22]

3.2 Suppose, for contradiction, that $S$ is module-finite over $R$, that is, finitely generated as an $R$-module [L7]. By step 2.1 we have $S=R[u]$, so $R[u]$ is a finitely generated $R$-module, and the image $\varphi(R)$ of $R$ in $S$ is nonzero by step 1.1; applying the equivalence of [L15] with $A=\varphi(R)\cong R$ and $b=u$ — the module structure being the one transported along $\varphi$ [L7] — we conclude that $u$ is integral over $\varphi(R)$. By [L10] and [L11] there are $n\ge1$ and $a_0,\ldots,a_{n-1}\in R$ with $u^n+\varphi(a_{n-1})u^{n-1}+\cdots+\varphi(a_0)=0$ in $S$. [given, step 1.1, step 2.1, L7, L10, L11, L15]

3.3 We compute the relative integral closure $S'=\operatorname{Int}_R(S)$ [L11]. First let $(f,g)\in S$ be integral over $\varphi(R)$. The second projection $\pi_2:S=R\times B\to B$, $(a,b)\mapsto b$, is a unital ring homomorphism — the operations are componentwise [L4] — and it carries $\varphi(a)=(a,a)$ to $a$, so applying it to a monic equation for $(f,g)$ over $\varphi(R)$ produces a monic equation for $g$ over $R$ [L10, L11]; that is, $g$ is integral over $R$. Now $B=R_t\subseteq\operatorname{Frac}(R)$: every element of $B$ is a fraction $r/t^n$ with $r\in R$ and $t^n\ne0$ [L5, L13]. The field $k$ is an integrally closed domain, since $\operatorname{Frac}(k)=k$ by [L3, L13] and every element of $k$ lies in $k$ [L12]; hence $R=k[t]$ is an integrally closed domain by [L14]. So the element $g\in\operatorname{Frac}(R)$, being integral over $R$, lies in $R$. The first coordinate $f$ lies in $R$ by the definition of $S$ [L4]. Conversely, let $f,g\in R$; then $(f,g)=\varphi(g)+(f-g)e$, where $\varphi(g)=(g,g)$ lies in the image of $R$ and hence in $S'$ [L11], while $e=(1,0)$ is integral over $\varphi(R)$ because $e^2-e=0$ [L4, L10], and $(f-g)e$ is a product of two elements of the subring $S'$ [L11]. Hence $(f,g)\in S'$, and $S'=R\times R=\{\varphi(g)+(h,0):g,h\in R\}$. [given, step 1.1, step 2.1, L3, L4, L5, L10, L11, L12, L13, L14]

4.1 Now let $\mathfrak p\in\operatorname{Spec}(R)$ with $t\notin\mathfrak p$ and again put $\kappa=\kappa(\mathfrak p)\cong\operatorname{Frac}(R/\mathfrak p)$ [L16]. The image of $t$ in $R/\mathfrak p$ is nonzero, because $R/\mathfrak p$ is a domain [L2] and $t\notin\mathfrak p$, so its image in the field $\kappa$ is a nonzero element, hence a unit [L3]. Therefore every fraction $r/t^n$ of $\kappa_t$ already lies in $\kappa$ [L5], so the localisation map $\kappa\to\kappa_t$ is surjective as well as injective, that is $\kappa_t=\kappa$; with step 3.1 this gives $S\otimes_R\kappa\cong\kappa\oplus\kappa\cong\kappa\times\kappa$ as rings, a product of two copies of the residue field. This proves part 2. [given, step 3.1, L2, L3, L5, L16]

4.2 We verify quasi-finiteness at a prime in the case $\mathfrak p=(t)$. Let $\mathfrak q\in\operatorname{Spec}(S)$ with $\mathfrak q\cap R=(t)$. By [L23] the quotient $S_{\mathfrak q}/\mathfrak pS_{\mathfrak q}$ is the local ring of the fibre $\operatorname{Spec}(S\otimes_R\kappa(\mathfrak p))$ at the prime $\overline{\mathfrak q}$ determined by $\mathfrak q$, and by step 3.1 the fibre ring is the field $k$. A prime ideal of $k$ is proper, and no unit of a ring lies in a prime ideal — if $u\in P$ were a unit then $1=u\,u^{-1}\in P$ — [L31, L32], while every nonzero element of the field $k$ is a unit [L3]; hence every prime ideal of $k$ is $(0)$, and since the fibre has the prime $\overline{\mathfrak q}$, that prime is $(0)$. The local ring of the fibre there is therefore the localisation $k_{(0)}=(k\setminus\{0\})^{-1}k$ at the prime $(0)$, and every class $a/s$ of that localisation equals $a\cdot s^{-1}/1$, because $s\ne0$ is a unit of $k$ [L3, L6]; so the localisation map $k\to k_{(0)}$ is bijective and Hence $S_{\mathfrak q}/\mathfrak pS_{\mathfrak q}\cong k=\kappa((t))$ — the equality of fields being step 2.3 — a one-dimensional vector space over $\kappa(\mathfrak p)$, hence a finite $\kappa(\mathfrak p)$-module [L23]. [given, step 2.3, step 3.1, L3, L6, L23, L31, L32]

4.3 We compute that equation in the two coordinates of $S=R\times B$ [L4]. Since $u^i=(0,t^{-i})$ and $\varphi(a_i)=(a_i,a_i)$, the second coordinate of the equation is $t^{-n}+a_{n-1}t^{-(n-1)}+\cdots+a_1t^{-1}+a_0=0$ in $B$. Multiplying this equation by $t^n\in B$ gives $1+a_{n-1}t+\cdots+a_1t^{n-1}+a_0t^n=0$ in $B$. All terms of this equation lie in the subring $R\subseteq B$, and $R\to B=R_t$ is injective: if $r/1=0$ in $B$, then $t^mr=0$ in the domain $R$ for some $m$, so $r=0$, by the fraction criterion [L6, L2]. Hence the equation holds in $R$, and $1=-t\,(a_{n-1}+a_{n-2}t+\cdots+a_1t^{n-2}+a_0t^{n-1})$, that is $1\in tR$. [given, step 3.2, L2, L4, L5, L6]

4.4 Put $T:=S'=R\times R$. As an $R$-module, $T$ is generated by $(1,0)$ and $(0,1)$: every $(g,h)\in R\times R$ is $(g,h)=g\cdot(1,0)+h\cdot(0,1)$ with the componentwise action [L4]. Hence $T$ is a finite $R$-algebra [L7], in particular a finite $R$-subalgebra of $S'$ in the sense of [L29]. [step 3.3, L4, L7]

5.1 We verify quasi-finiteness at a prime in the case $t\notin\mathfrak p$, where $\mathfrak p=\mathfrak q\cap R$. By step 4.1 the fibre ring is $K\times K$ with $K:=\kappa(\mathfrak p)$ a field [L3], and by step 1.2, applied to the product ring $K\times K$, its prime ideals are exactly $K\times0$ and $0\times K$. Let $P:=K\times0$; the multiplicative set of the localisation at $P$ is the complement $M=\{(a,b):b\ne0\}$. In $M^{-1}(K\times K)$ the element $(0,1)\in M$ is a unit [L6] and $(0,1)(1,0)=0$ [L4], so $(1,0)/1=0$; consequently the map $\psi:K\to M^{-1}(K\times K)$, $a\mapsto(0,a)/1$, is a well-defined unital ring homomorphism [L6], injective because $(0,a)/1=0$ means $(c,d)(0,a)=(0,da)=0$ for some $(c,d)\in M$, whence $a=0$ as $d\ne0$ and $K$ is a field [L3, L6], and surjective because every class in the localisation equals $0/1$ or $(0,b)/(c,d)=(0,b/d)/1$ for $d\ne0$, again by the fraction criterion [L6]. Hence the local ring of the fibre at the prime over $P$ is $K$, and symmetrically the one at the prime over $0\times K$ is $K$; both are one-dimensional over $\kappa(\mathfrak p)$. By [L23] the map $R\to S$ is quasi-finite at every $\mathfrak q\in\operatorname{Spec}(S)$. [given, step 1.2, step 4.1, L3, L4, L6, L23]

5.2 We show $1\notin tR$. If $1=th$ for some $h\in R$, then $h\ne0$ since $1\ne0$ in the domain $R$ [L2], and $\deg(t)=1$ with $\operatorname{lc}(t)=1$ while $\deg(1)=0$ by [L8]. By [L9] the coefficient of $x^{1+\deg h}$ in $th$ is $\operatorname{lc}(t)\operatorname{lc}(h)=\operatorname{lc}(h)\ne0$, so $\deg(th)\ge1+\deg h\ge1$ and $th\ne0$; but $th=1$ has degree $0$, a contradiction. Hence $1\notin tR$, contradicting step 4.3, and $S$ is not module-finite over $R$. This proves part 4. [step 4.3, L2, L8, L9]

5.3 Put $g:=(1,t)\in T$. For a product ring the localisation at a product element is the product of the localisations: the map $\theta:(A\times A')_{(f,f')}\to A_f\times A'_{f'}$, $(a,a')/(f,f')^n\mapsto(a/f^n,a'/f'^n)$, is well defined and a unital ring homomorphism by the fraction criterion [L6] and the componentwise operations [L4], it is injective because $(f,f')^k(a,a')=0$ for some $k$ means $f^ka=0$ and $f'^ka'=0$, and it is surjective because $(xf^{N-m},x'f'^{N-n})/(f,f')^N$ maps to $(x/f^m,x'/f'^n)$ for $N=\max\{m,n\}$. Applying this with $A=A'=R$, $f=1$, $f'=t$ and [L5] gives $T_g=(R\times R)_{(1,t)}\cong R_1\times R_t=R\times B=S$; applying it with $A=R$, $A'=B$ and [L5] gives $S_g=(R\times B)_{(1,t)}\cong R_1\times B_t=R\times B=S$, since $B_t=B$ by step 2.2. Both isomorphisms are the canonical maps induced by the inclusion $T\subseteq S$, so $T_g=S_g=S$ and the inclusion $T\to S$ induces an isomorphism of principal localisations [L5]. [given, step 2.2, step 3.3, step 4.4, L4, L5, L6]

6.1 By step 2.1 the map $R\to S$ is of finite type and by steps 4.2 and 5.1 it is quasi-finite at every prime of $S$; hence it is quasi-finite [L23], and for every $\mathfrak q$ with contraction $\mathfrak p$ the quotient $S_{\mathfrak q}/\mathfrak pS_{\mathfrak q}$ is isomorphic to $\kappa(\mathfrak p)$, as computed in steps 4.2 and 5.1. This proves part 3. [step 2.1, step 4.2, step 5.1, L23]

6.2 By step 1.2 the primes of $S=R\times B$ are exactly the ideals $\mathfrak p\times B$ with $\mathfrak p\in\operatorname{Spec}(R)$ and the ideals $R\times\mathfrak q$ with $\mathfrak q\in\operatorname{Spec}(B)$, and the primes of $T=R\times R$ are the ideals $\mathfrak p\times R$ and $R\times\mathfrak p'$ with $\mathfrak p,\mathfrak p'\in\operatorname{Spec}(R)$. For a prime $\mathfrak q=\mathfrak p\times B$ of $S$ we compute $\mathfrak q\cap T=(\mathfrak p\times B)\cap(R\times R)=\mathfrak p\times R$, and for $\mathfrak q=R\times\mathfrak q'$ we get $\mathfrak q\cap T=R\times(\mathfrak q'\cap R)$ by the componentwise description of ideals of a product [L4]. Hence the image of the contraction map $\operatorname{Spec}(S)\to\operatorname{Spec}(T)$ is the union of the set of primes $\mathfrak p\times R$, which is the entire first component of $\operatorname{Spec}(T)$, and of the set of primes $R\times\mathfrak p'$ with $\mathfrak p'$ in the image of the contraction $\operatorname{Spec}(B)\to\operatorname{Spec}(R)$. That contraction is the localisation map of $R$ at $M=\{1,t,t^2,\ldots\}$, so by [L25] its image is $\{\mathfrak p\in\operatorname{Spec}(R):\mathfrak p\cap M=\varnothing\}=D(t)$ [L24, L5]. Finally, a prime $\mathfrak p\times R$ contains $g=(1,t)$ only if $1\in\mathfrak p$, which is impossible [L4], while $R\times\mathfrak p'$ contains $(1,t)$ exactly when $t\in\mathfrak p'$ [L4]; so the image is precisely the open set $D_T(g)=\{\mathfrak P\in\operatorname{Spec}(T):g\notin\mathfrak P\}$ [L24]. [given, step 1.2, step 2.2, step 5.3, L4, L5, L24, L25]

7.1 We record the topological form of step 6.2. The first projection $\pi_1^S:S\to R$ of $S=R\times B$ is a surjective unital ring homomorphism with kernel $0\times B$, and the second projection $\pi_2^S:S\to B$ is surjective with kernel $R\times0$ [L4]; by step 1.2 the primes of $S$ are exactly the primes of the two complementary closed sets $V(0\times B)=\{\mathfrak p\times B:\mathfrak p\in\operatorname{Spec}(R)\}$ and $V(R\times0)=\{R\times\mathfrak q:\mathfrak q\in\operatorname{Spec}(B)\}$, and the analogous statements hold for the projections $\pi_1^T,\pi_2^T$ of $T=R\times R$, whose kernels are $0\times R$ and $R\times0$. By [L26] the four contraction maps along these projections are homeomorphisms onto $V(0\times B)$, $V(R\times0)$, $V(0\times R)$ and $V(R\times0)$ respectively, while by functoriality [L27] the contraction map $\varphi=\operatorname{Spec}(\iota)$ along the inclusion $\iota:T\to S$ satisfies $\varphi\circ\operatorname{Spec}(\pi_1^S)=\operatorname{Spec}(\pi_1^T)$ and $\varphi\circ\operatorname{Spec}(\pi_2^S)=\operatorname{Spec}(\iota_B\circ\pi_2^T)$, where $\pi_2^T:T\to R$ is the second projection and $\iota_B:R\to B=R_t$ is the localisation map [L4, L5]. Consequently $\varphi$ carries the piece $V(0\times B)$ homeomorphically onto the piece $V(0\times R)=\{\mathfrak p\times R\}$ of $\operatorname{Spec}(T)$, and carries the piece $V(R\times0)$ homeomorphically onto the image of $\operatorname{Spec}(\iota_B)$, which by [L25] is $D(t)\subseteq\operatorname{Spec}(R)$ carried into the piece $V(R\times0)=\{R\times\mathfrak p'\}$ of $\operatorname{Spec}(T)$. The two target pieces are disjoint by step 1.2, so $\varphi$ is a homeomorphism onto their union, which is the open set $D_T(g)$ of step 6.2. Therefore the data $T=S'=R\times R$, $n=1$ and $g_1=g=(1,t)$ satisfy the conclusion of part 1 of [L29]; and since $g$ is a unit of $S$ by step 2.2, it lies in no prime ideal of $S$ [L31], so the same single element $g$ witnesses the conclusion of [L30] at every prime of $S$ simultaneously. [given, step 1.2, step 2.2, step 5.3, step 6.2, L4, L5, L24, L25, L26, L27, L29, L30, L31]

8.1 The Axiom of Choice [L28] is assumed in the Statement because the two general theorems invoked in step 7.1, namely [L29] and [L30], are stated with it; the proof above selects nothing. Every object used is named explicitly — the field $k$, the rings $R$, $B$, $S$, $T$, the elements $u$, $e$, $\bar t$, $g$, the primes $\mathfrak p$, $\mathfrak q$, $P$ and the finitely many $a_0,\ldots,a_{n-1}$ of step 3.2 arise from fixed data, and the only localisations and tensor products are computed on finitely many explicit elements. Parts 1, 2, 3, 4 and 5 are proved by steps 2.1; 3.1 with 4.1; 6.1; 5.2; and 3.3 with 4.4, 5.3, 6.2 and 7.1 respectively. ∎ [given, step 1.1, step 3.2, step 7.1, L28, L29, L30]
