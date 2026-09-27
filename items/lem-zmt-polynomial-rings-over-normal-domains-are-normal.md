---
id: lem-zmt-polynomial-rings-over-normal-domains-are-normal
kind: lemma
title: Polynomial rings over normal domains are normal
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-integral-closure-and-integrally-closed-domain, def-integral-element-and-algebraic-integer, def-field-of-fractions, thm-universal-property-of-localisation, def-polynomial-ring-over-a-commutative-ring, cor-polynomial-ring-over-a-domain-is-a-domain, def-polynomial-degree-leading-coefficient-and-monic, prop-polynomial-degree-laws-over-a-commutative-ring, def-zero-divisor-and-integral-domain, def-subring, thm-bezout-identity-for-polynomials, cor-polynomial-ring-over-a-field-is-euclidean, thm-integrality-and-finite-module-equivalences, def-noetherian-ring, def-noetherian-module, thm-generated-ideal-description-in-a-commutative-ring, lem-subgroups-of-z-are-cyclic, prop-canonical-quotient-ring-map, thm-correspondence-theorem-ideals]
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
    - title: "The Stacks Project, Commutative Algebra, Section 10.37, Lemmas 10.37.4, 10.37.6, 10.37.7 and 10.37.8"
      url: "https://stacks.math.columbia.edu/tag/037B"
      locator: "Section 10.37, Lemmas 10.37.4-10.37.8 with their proofs (tag 037B)"
    - title: "J. S. Milne, A Primer of Commutative Algebra, version 4.03, Section 6"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
---

## Statement

Let $R$ be an integrally closed domain
([[def-integral-closure-and-integrally-closed-domain]]) with fraction field
$K=\operatorname{Frac}(R)$ ([[def-field-of-fractions]]). Then the polynomial ring
$R[x]$ ([[def-polynomial-ring-over-a-commutative-ring]]) is integrally closed:
every element of $\operatorname{Frac}(R[x])$ that is integral over $R[x]$
([[def-integral-element-and-algebraic-integer]]) already lies in $R[x]$.

No Noetherian hypothesis is imposed on $R$: the proof reduces an arbitrary
monic equation to a finitely generated $\mathbb Z$-subalgebra of $R$ and
proves that this subalgebra is Noetherian by a direct finite-generator
argument. The argument is choice-free.

## Facts & Assumptions

**Given:** An integrally closed domain $R$ with fraction field $K=\operatorname{Frac}(R)$, and an element $z\in\operatorname{Frac}(R[x])$ integral over $R[x]$.

[L1] A domain $A$ is **integrally closed** when every element of $\operatorname{Frac}(A)$ integral over $A$ already lies in $A$ ([[def-integral-closure-and-integrally-closed-domain]]).

[L2] If $D$ is an integral domain then $\operatorname{Frac}(D)=(D\setminus\{0\})^{-1}D$, and its elements are fractions $a/b$ with $a,b\in D$ and $b\ne0$ ([[def-field-of-fractions]]).

[L3] If $f:R\to A$ is a unital homomorphism of commutative rings and $f(s)$ is a unit of $A$ for every $s\in S$, then there is a unique unital ring homomorphism $\widetilde f:S^{-1}R\to A$ with $\widetilde f\circ\lambda_S=f$, namely $\widetilde f(r/s)=f(r)f(s)^{-1}$ ([[thm-universal-property-of-localisation]]).

[L4] If $R$ is an integral domain then $R[x]$ is an integral domain ([[cor-polynomial-ring-over-a-domain-is-a-domain]]).

[L5] For $0\ne f=\sum_ia_ix^i\in R[x]$ the **degree** $\deg f$ is the largest $n$ with $a_n\ne0$ and the **leading coefficient** is $\operatorname{lc}(f)=a_{\deg f}$; the zero polynomial has no degree and no leading coefficient ([[def-polynomial-degree-leading-coefficient-and-monic]]).

[L6] Let $R$ be a commutative ring and $f,g\in R[x]$ nonzero. If $f+g\ne0$ then $\deg(f+g)\le\max\{\deg f,\deg g\}$; the coefficient of $x^{\deg f+\deg g}$ in $fg$ is $\operatorname{lc}(f)\operatorname{lc}(g)$ ([[prop-polynomial-degree-laws-over-a-commutative-ring]]).

[L7] A domain has no zero divisors, so a product of nonzero elements is nonzero and cancellation of a nonzero factor is legitimate ([[def-zero-divisor-and-integral-domain]]).

[L8] Let $F$ be a field and $f,g\in F[x]$ not both zero. There are $A,B\in F[x]$ with $Af+Bg=d$, where $d$ is the monic greatest common divisor of $f,g$, and $d$ divides both $f$ and $g$ ([[thm-bezout-identity-for-polynomials]]).

[L9] Let $A\subseteq B$ be commutative rings with $A\ne0$ and $b\in B$. Then $b$ is integral over $A$ if and only if $A[b]$ is finitely generated as an $A$-module ([[thm-integrality-and-finite-module-equivalences]]).

[L10] A commutative ring is Noetherian exactly when every ideal of it is finitely generated ([[def-noetherian-ring]], [[def-noetherian-module]]).

[L11] In a commutative ring, $(S)$ consists of the finite sums $\sum_ir_is_i$ with $r_i\in R$ and $s_i\in S$, and the principal ideal $(a)$ equals $Ra$; the empty sum is included and equals $0$ ([[thm-generated-ideal-description-in-a-commutative-ring]]).

[L12] Every subgroup of $(\mathbb Z,+)$ equals $n\mathbb Z=\langle n\rangle$ for exactly one natural number $n$ ([[lem-subgroups-of-z-are-cyclic]]).

[L13] For an ideal $I\mathrel{\trianglelefteq}R$ the canonical projection $\pi:R\to R/I$, $\pi(r)=r+I$, is a surjective ring homomorphism with kernel $I$ ([[prop-canonical-quotient-ring-map]]).

[L14] For $I\mathrel{\trianglelefteq}R$, the maps $J\mapsto J/I$ and $K\mapsto\pi^{-1}(K)$ are inverse inclusion-preserving bijections between the ideals $J$ of $R$ containing $I$ and the ideals $K$ of $R/I$ ([[thm-correspondence-theorem-ideals]]).

[L15] A subring $S\subseteq R$ contains $1_R$ and is closed under addition, negation and multiplication ([[def-subring]]).

## Proof

**Proof technique:** direct.

1.1 We first prove the field case. Let $K$ be a field and let $z\in K(x)=\operatorname{Frac}(K[x])$ be integral over $K[x]$; here $K[x]$ is a domain by [L4], so [L2] lets us write $z=f/g$ with $f,g\in K[x]$ and $g\ne0$. If $f=0$ then $z=0\in K[x]$. Otherwise $f,g$ are not both zero, so [L8] provides $A,B\in K[x]$ and the monic greatest common divisor $d=\gcd(f,g)$ with $d=Af+Bg$, $d\mid f$ and $d\mid g$. Write $f=df_1$ and $g=dg_1$ with $f_1,g_1\in K[x]$. The polynomial $d$ is monic, hence nonzero, so cancellation in the domain $K[x]$ of [L4] gives $Af_1+Bg_1=1$ from $d(Af_1+Bg_1)=d\cdot1$, and the same cancellation in $K(x)$ gives $z=f_1/g_1$. [given, L2, L4, L7, L8]

1.2 Let $D$ be a domain with fraction field $L$. Call an element $u\in L$ **almost integral over $D$** when there is a nonzero $d\in D$ with $du^n\in D$ for every integer $n\ge0$. Every element of $D$ is almost integral over $D$ with multiplier $1$, the fraction field $L$ of $D$ being that of [L2] and $D$ being a domain in the sense of [L7]. This is a convention internal to the proof; the following steps establish the three properties of it that the argument uses. [given, L2, L7, construct]

1.3 Every ideal $I$ of $\mathbb Z$ is an additive subgroup of $(\mathbb Z,+)$, hence equals $n\mathbb Z=(n)$ for some natural number $n$ by [L12] and [L11]. So every ideal of $\mathbb Z$ is finitely generated and $\mathbb Z$ is Noetherian by [L10]. [L10, L11, L12]

1.4 Now let $C$ be a commutative ring in which every ideal is finitely generated, and let $I\subseteq C[x]$ be an ideal. For $n\ge0$ let $S_n$ be the set consisting of $0$ and of the leading coefficients of all elements of $I$ of degree $\le n$ [L5], and put $J_n=(S_n)\subseteq C$ [L11]; then $J_0\subseteq J_1\subseteq\cdots$, since $S_n\subseteq S_{n+1}$, and $J=\bigcup_{n\ge0}J_n$ is an ideal of $C$. By hypothesis $J=(g_1,\dots,g_m)$ for finitely many $g_i\in C$ [L11], and each $g_i\in J_{n_i}$ for some $n_i$ because $J$ is the union of the $J_n$; with $N=\max\{n_1,\dots,n_m\}$ this gives $J=J_N$. For each $n\le N$ the ideal $J_n$ is finitely generated and is generated by $S_n$, so finitely many elements of $S_n$, say the leading coefficients of polynomials $p_{n,1},\dots,p_{n,k_n}\in I$ of degree $\le n$, generate $J_n$ [L11]. Let $W$ be the finite set of all these polynomials for $n\le N$. [given, L5, L11, construct]

1.5 Let $C$ be a commutative ring in which every ideal is finitely generated, let $I\subseteq C$ be an ideal and let $K\subseteq C/I$ be an ideal. By [L14] the preimage $J=\pi^{-1}(K)$ is an ideal of $C$ containing $I$ and $J/I=K$, and $J$ is finitely generated, say $J=(c_1,\dots,c_k)$; by [L13] the projection $\pi$ is surjective, so $K=\pi(J)$ is generated by the images $\pi(c_1),\dots,\pi(c_k)$ [L11]. Hence every ideal of $C/I$ is finitely generated. [given, L11, L13, L14]

2.1 Let $z^n+c_{n-1}z^{n-1}+\cdots+c_0=0$ with $n\ge1$ and $c_j\in K[x]$ be a monic equation for $z$ over $K[x]$, which exists because $z$ is integral over $K[x]$. Substituting $z=f_1/g_1$ and multiplying by $g_1^n$ gives $f_1^n=-(c_{n-1}f_1^{n-1}g_1+\cdots+c_0g_1^n)$, so $f_1^n\in(g_1)$ by [L11]. Raising $Af_1+Bg_1=1$ to the $n$-th power and expanding by the binomial theorem, every term of the expansion contains a factor $f_1^n$ or a factor $g_1$, so $1=A'f_1^n+B'g_1$ for suitable $A',B'\in K[x]$; by [L11] both summands lie in the ideal $(g_1)$, so $1\in(g_1)$, say $g_1w=1$ with $w\in K[x]$. Then $z=f_1/g_1=f_1w\in K[x]$. Hence every element of $K(x)$ integral over $K[x]$ lies in $K[x]$: for every field $K$ the ring $K[x]$ is integrally closed in its fraction field. [step 1.1, L11, algebra]

2.2 Let $u,v\in L$ be almost integral over $D$ with multipliers $d,e\in D\setminus\{0\}$. Then $de\ne0$ by [L7], and for every $n\ge0$ one has $(de)(uv)^n=(du^n)(ev^n)\in D$ and $(de)(u+v)^n=\sum_{j=0}^{n}\binom nj(du^j)(ev^{n-j})\in D$, each summand being a product of two elements of $D$. So the almost integral elements of $L$ form a subring of $L$ containing $D$. [step 1.2, L7, algebra]

2.3 Let $u\in L$ be integral over $D$. By [L9] the ring $D[u]$ is a finitely generated $D$-module; choose generators $h_1,\dots,h_N\in D[u]$ and write $h_i=a_i/d_i$ with $a_i,d_i\in D$ and $d_i\ne0$ by [L2]. Then $d=d_1\cdots d_N\ne0$ by [L7] and $dh_i=a_i\prod_{j\ne i}d_j\in D$ for every $i$, so $d\cdot D[u]\subseteq D$; in particular $du^n\in D$ for all $n\ge0$. Hence every element of $L$ integral over $D$ is almost integral over $D$. [step 1.2, L2, L7, L9]

2.4 Suppose every ideal of $D$ is finitely generated and $u\in L$ is almost integral over $D$ with multiplier $d\ne0$. Then $D[u]\subseteq d^{-1}D=\{c/d:c\in D\}$, since $du^n\in D$ for every $n\ge0$ and $d^{-1}D$ is a $D$-submodule of $L$. Multiplication by $d$ is an injective $D$-module map $D[u]\to D$, because $L$ is a field and $d\ne0$, and its image $dD[u]$ is an ideal of $D$; by hypothesis $dD[u]=(y_1,\dots,y_k)$ for some $y_j\in D$ [L11]. Then $D[u]=(d^{-1}y_1,\dots,d^{-1}y_k)$ inside $L$: each $d^{-1}y_j$ lies in $D[u]$ because $y_j=dx_j$ for some $x_j\in D[u]$ and cancellation in $L$ gives $d^{-1}y_j=x_j$, while for $x\in D[u]$ the identity $dx=\sum_jc_jy_j$ with $c_j\in D$ gives $x=\sum_jc_j(d^{-1}y_j)$. So $D[u]$ is a finitely generated $D$-module and [L9] makes $u$ integral over $D$. Consequently, over a domain in which every ideal is finitely generated, almost integral and integral elements of the fraction field coincide. [step 1.2, L7, L9, L11]

2.5 We show that the finite set $W$ generates $I$. Let $f\in I$ be nonzero of degree $m$ and leading coefficient $b\ne0$ [L5], and put $m^\ast=\min\{m,N\}$. The leading coefficient $b$ lies in $J_m$, and $J_m=J_{m^\ast}$: for $m\le N$ this is $m^\ast=m$, and for $m>N$ it holds because $J_N\subseteq J_m\subseteq J=J_N$. So $b=\sum_jr_j\operatorname{lc}(p_{m^\ast,j})$ with $r_j\in C$ [L11]. Every $p_{m^\ast,j}$ has degree $\le m^\ast\le m$, and the polynomial $f-\sum_jr_jx^{m-\deg p_{m^\ast,j}}p_{m^\ast,j}$ lies in $I$, is congruent to $f$ modulo $(W)$, and has degree $<m$ by [L6]. Induction on $m$ therefore exhibits every element of $I$ as an element of $(W)$; hence $I$ is finitely generated, and every ideal of $C[x]$ is finitely generated. [step 1.4, L5, L6, L11, algebra]

2.6 Let $C$ be a commutative ring in which every ideal is finitely generated, let $A$ be a commutative $C$-algebra and let $t_1,\dots,t_d\in A$. The $C$-subalgebra of $A$ generated by $t_1,\dots,t_d$ is the image of the evaluation homomorphism $C[x_1,\dots,x_d]\to A$ with $x_i\mapsto t_i$, hence is a quotient of $C[x_1,\dots,x_d]$; iterating step 1.4 and applying step 1.5, every ideal of it is finitely generated. In particular, taking $C=\mathbb Z$ and using step 1.3, every $\mathbb Z$-subalgebra of a commutative ring that is generated by finitely many elements is Noetherian by [L10]. [step 1.3, step 1.4, step 1.5, L10, L15, algebra]

3.1 Let $D$ be a domain with fraction field $K_0$ and let $f=\alpha_0+\alpha_1x+\cdots+\alpha_rx^r\in K_0[x]$ with $\alpha_r\ne0$ be almost integral over $D[x]$, with multiplier $h=b_0+b_1x+\cdots+b_sx^s\in D[x]\setminus\{0\}$ and $b_s\ne0$. For every $n\ge0$ the coefficient of $x^{rn+s}$ in the product $hf^n$ is $b_s\alpha_r^n$ by [L6], and $hf^n\in D[x]$, so $b_s\alpha_r^n\in D$; thus $\alpha_r$ is almost integral over $D$ with multiplier $b_s$. Then $\alpha_rx^r$ is almost integral over $D[x]$ with the same multiplier, because $b_s(\alpha_rx^r)^n=(b_s\alpha_r^n)x^{rn}\in D[x]$, and by step 2.2 the difference $f-\alpha_rx^r\in K_0[x]$, which has degree $<r$, is almost integral over $D[x]$ as well. Induction on $r$ and on the degree of $f$ therefore shows that every coefficient $\alpha_i$ of $f$ is almost integral over $D$. [step 2.2, L4, L5, L6, algebra]

3.2 Now return to the given data: $R$ is an integrally closed domain with fraction field $K$ [L1], and $z\in\operatorname{Frac}(R[x])$ is integral over $R[x]$. The rings $R[x]\subseteq K[x]$ are domains by [L4], $K(x)=\operatorname{Frac}(K[x])$ is a field, and the inclusion $R[x]\to K(x)$ carries every nonzero element of $R[x]$ to a unit, so by [L3] it extends uniquely to a unital ring homomorphism $\operatorname{Frac}(R[x])\to K(x)$, $f/g\mapsto f/g$; this map is injective because its restriction to the domain $R[x]$ is injective. We therefore regard $z$ as an element of $K(x)$. The monic equation for $z$ over $R[x]$ is in particular a monic equation over $K[x]$, so $z$ is integral over $K[x]$, and step 2.1 applied to the field $K$ gives $z\in K[x]$. Write $z=\alpha_0+\alpha_1x+\cdots+\alpha_rx^r$ with $\alpha_i\in K$. [given, step 2.1, L1, L2, L3, L4]

3.3 Choose a monic equation $z^n+c_{n-1}z^{n-1}+\cdots+c_0=0$ with all $c_j\in R[x]$, and write each $\alpha_i=a_i/b_i$ with $a_i,b_i\in R$ and $b_i\ne0$ by [L2]. Let $R_0\subseteq R$ be the $\mathbb Z$-subalgebra generated by the finitely many coefficients of the polynomials $c_j$ together with all the elements $a_i,b_i$. Then $R_0$ is a subring of $R$ containing $1$, hence a domain by [L15] and [L7], and every ideal of $R_0$ is finitely generated by step 2.6 applied with $C=\mathbb Z$ and step 1.3. Moreover $\alpha_i=a_i/b_i$ with $a_i,b_i\in R_0$ and $b_i\ne0$, so $\alpha_i\in K_0:=\operatorname{Frac}(R_0)\subseteq K$ [L2], and $z\in K_0[x]$; since all coefficients of the $c_j$ lie in $R_0$, the displayed monic equation has coefficients in $R_0[x]$. Thus $z\in K_0[x]$ is integral over $R_0[x]$. [given, step 1.3, step 2.6, L2, L7, L15]

4.1 Let $D$ be a domain in which every ideal is finitely generated, put $K_0=\operatorname{Frac}(D)$, and let $f\in K_0[x]$ be integral over $D[x]$. Then every coefficient of $f$ is integral over $D$: the ring $D[x]$ is a domain by [L4] and $f$ lies in its fraction field $K_0(x)=\operatorname{Frac}(K_0[x])$, so step 2.3 makes $f$ almost integral over $D[x]$; step 3.1 makes each coefficient of $f$ almost integral over $D$; and step 2.4 turns almost integrality over $D$ into integrality over $D$. [step 2.3, step 2.4, step 3.1, L4]

5.1 By step 4.1 applied to the domain $R_0$, in which every ideal is finitely generated, each coefficient $\alpha_i$ of $z$ is integral over $R_0$. The monic polynomial over $R_0\subseteq R$ witnessing this has coefficients in $R$, so each $\alpha_i$ is integral over $R$; since $R$ is integrally closed in $K=\operatorname{Frac}(R)$ [L1], each $\alpha_i$ lies in $R$. [step 4.1, step 3.3, L1]

6.1 Consequently $z=\alpha_0+\alpha_1x+\cdots+\alpha_rx^r\in R[x]$. Since the homomorphism of step 3.2 is injective and restricts to the identity on $R[x]$, every element of $\operatorname{Frac}(R[x])$ integral over $R[x]$ is already an element of $R[x]$: the polynomial ring $R[x]$ is an integrally closed domain by [L1] and [L4], for every integrally closed domain $R$ and with no Noetherian hypothesis on $R$. ∎ [step 2.1, step 3.2, step 5.1, L1, L4]
