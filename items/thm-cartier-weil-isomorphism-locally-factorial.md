---
id: thm-cartier-weil-isomorphism-locally-factorial
kind: theorem
title: "Under AC, Cartier and Weil divisors agree on a locally factorial Noetherian integral scheme"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - def-locally-factorial-scheme
  - def-weil-divisor-normal-noetherian-scheme
  - def-locally-noetherian-and-noetherian-scheme
  - def-integral-scheme
  - def-unique-factorisation-domain
  - def-irreducible-and-prime-elements-in-a-domain
  - def-divisibility-and-associates-in-a-domain
  - def-field-of-fractions
  - def-integral-closure-and-integrally-closed-domain
  - def-normal-noetherian-ring
  - def-localisation-at-a-prime-ideal
  - def-height-of-a-prime-ideal
  - def-krull-dimension-of-a-ring
  - def-generated-and-principal-ideals
  - def-prime-and-maximal-ideals
  - def-noetherian-ring-and-module
  - def-ideal-sheaf
  - def-closed-immersion-schemes
  - def-effective-cartier-divisor
  - def-cartier-divisor
  - def-picard-group-scheme
  - def-principal-weil-divisor-and-class-group
  - def-order-codimension-one-rational-function
  - def-discrete-valuation-ring
  - def-group-homomorphism
  - def-group-isomorphism-and-automorphism
  - def-sheaf-total-quotient-rings
  - def-affine-scheme
  - def-affine-open-subscheme
  - def-generic-point-irreducible-closed-subset
  - thm-stalk-structure-sheaf-prime-localization
  - lem-distinguished-open-refinement-at-a-point
  - lem-closed-immersion-affine-quotient-and-base-change
  - thm-affine-closed-immersions-quotient-rings
  - lem-irreducibility-criteria-and-open-subspaces
  - thm-effective-cartier-divisor-closed-immersion
  - thm-cartier-to-weil-divisor-normal-scheme
  - lem-cartier-to-weil-respects-principal-and-addition
  - lem-cartier-to-weil-injective-normal
  - thm-choice-implies-dependent-implies-countable-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Divisors, Lemma 31.16.7 (tag 0AGA: a codimension-one integral closed subscheme whose local rings are UFDs is an effective Cartier divisor) and Lemma 31.28.7 (tag 0BE9: for UFD local rings Pic(X) is isomorphic to Cl(X))"
      url: "https://stacks.math.columbia.edu/download/divisors.pdf"
    - title: "The Stacks Project, Algebra, Lemma 10.120.11 (tag 0AFV: a unique factorisation domain is normal) and Lemma 10.120.6 (tag 0AFT: a height one prime of a UFD is principal)"
      url: "https://stacks.math.columbia.edu/tag/0AFV"
    - title: "Ravi Vakil, The Rising Sea, Ch. 15 §§15.1-15.3"
      url: "https://math.stanford.edu/~vakil/216blog/FOAgoct2111public.pdf"
verification:
  audited: 2026-10-02
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $X$ be a locally
factorial Noetherian integral scheme ([[def-locally-factorial-scheme]],
[[def-locally-noetherian-and-noetherian-scheme]], [[def-integral-scheme]]).
Then:

1. $X$ is normal ([[def-weil-divisor-normal-noetherian-scheme]]); in
   particular the cycle map
   $\operatorname{cyc}:\operatorname{CaDiv}(X)\to\operatorname{Div}(X)$
   ([[thm-cartier-to-weil-divisor-normal-scheme]]) and the canonical
   homomorphism $\operatorname{Pic}(X)\to\operatorname{Cl}(X)$
   ([[lem-cartier-to-weil-respects-principal-and-addition]]) are defined;
2. every prime divisor $Z\subseteq X$
   ([[def-weil-divisor-normal-noetherian-scheme]]) is an effective Cartier
   divisor ([[def-effective-cartier-divisor]]), and its associated Weil
   divisor is $\operatorname{cyc}(D_Z)=[Z]$;
3. every Weil divisor on $X$ is locally Cartier; equivalently the cycle map
   is surjective, so every Weil divisor is the associated Weil divisor
   $\operatorname{cyc}(D)$ of a Cartier divisor $D$ on $X$
   ([[def-cartier-divisor]]). In fact, the cycle map is an isomorphism of
   divisor groups, using its injectivity on normal schemes
   ([[lem-cartier-to-weil-injective-normal]]);
4. the canonical homomorphism $\operatorname{Pic}(X)\to\operatorname{Cl}(X)$
   of (1) is an isomorphism, so
   $\operatorname{Pic}(X)\cong\operatorname{Cl}(X)$
   ([[def-picard-group-scheme]],
   [[def-principal-weil-divisor-and-class-group]],
   [[def-group-isomorphism-and-automorphism]]).

The Axiom of Choice is used exactly through the injectivity input
[[lem-cartier-to-weil-injective-normal]], whose $(S_2)$ suppliers assume it,
and through the implication $\mathrm{AC}\Rightarrow\mathrm{DC}$
([[thm-choice-implies-dependent-implies-countable-choice]]) that makes the
Dependent-Choice suppliers of the cycle map available; the unique
factorisation arguments of steps 1.1, 2.1 and 2.2 are choice-free.

## Facts & Assumptions

**Given:** a locally factorial Noetherian integral scheme $X$, the Axiom of Choice, and the algebraic and sheaf-theoretic vocabulary recorded below.

[F1] **Local factoriality.** Every local ring $\mathcal O_{X,x}$ is a unique factorisation domain ([[def-locally-factorial-scheme]]); the scheme is Noetherian, that is, it has a finite affine open cover by spectra of Noetherian rings ([[def-locally-noetherian-and-noetherian-scheme]]), and integral, that is, nonempty, reduced and irreducible, so that every nonempty affine open subscheme is the spectrum of a domain ([[def-integral-scheme]], [[def-affine-open-subscheme]]).

[F2] **Unique factorisation.** In a domain $R$, $a\mid b$ means $b=ac$ for some $c\in R$, and $a,b$ are associates when $a=ub$ for a unit $u$; a nonzero nonunit element is irreducible when every factorisation into two factors has a unit factor, and a nonzero nonunit element is prime when it divides a product only by dividing a factor. A UFD is a domain in which every nonzero nonunit is a finite product of irreducible elements and in which any two such factorisations have the same number of factors, matching up to associates after a permutation ([[def-divisibility-and-associates-in-a-domain]], [[def-irreducible-and-prime-elements-in-a-domain]], [[def-unique-factorisation-domain]]).

[F3] **Fractions, integrality, normality.** The fraction field $\operatorname{Frac}(R)$ of a domain consists of fractions $a/b$ with $b\ne 0$ ([[def-field-of-fractions]]). An element of $\operatorname{Frac}(R)$ is integral over $R$ when it satisfies a monic polynomial with coefficients in $R$, and $R$ is integrally closed when every such element lies in $R$ ([[def-integral-closure-and-integrally-closed-domain]]). A Noetherian scheme is normal when all its local rings are integrally closed domains ([[def-normal-noetherian-ring]], [[def-weil-divisor-normal-noetherian-scheme]]).

[F4] **Localisation, height, dimension, finite generation.** For a prime $\mathfrak p$ of a commutative ring $R$ the localisation $R_{\mathfrak p}=(R\setminus\mathfrak p)^{-1}R$ has elements $r/s$ with $s\notin\mathfrak p$ ([[def-localisation-at-a-prime-ideal]]); the height is $\operatorname{ht}(\mathfrak p)=\dim(R_{\mathfrak p})$, and the Krull dimension of a ring is the supremum of lengths of chains of prime ideals ([[def-height-of-a-prime-ideal]], [[def-krull-dimension-of-a-ring]]). A commutative ring is Noetherian exactly when every ideal is finitely generated ([[def-noetherian-ring-and-module]]), $(a)$ denotes the principal ideal generated by $a$ ([[def-generated-and-principal-ideals]]), and prime and maximal ideals are as in [[def-prime-and-maximal-ideals]].

[F5] **Stalks of affine charts.** For $\mathfrak p\in\operatorname{Spec}A$ there is a canonical isomorphism $\mathcal O_{\operatorname{Spec}A,\mathfrak p}\cong A_{\mathfrak p}$ ([[thm-stalk-structure-sheaf-prime-localization]], [[def-affine-scheme]]); on an affine open $U=\operatorname{Spec}A$ of $X$ the stalk at the point corresponding to $\mathfrak p$ is therefore $A_{\mathfrak p}$, and dimensions of rings are preserved by isomorphism ([[def-krull-dimension-of-a-ring]]).

[F6] **Closed subschemes in affine charts.** For a closed immersion $i:Z\to X$ and an affine open $U=\operatorname{Spec}A$ of $X$ there is a unique ideal $I\subseteq A$ with $Z\cap U=\operatorname{Spec}(A/I)$ ([[lem-closed-immersion-affine-quotient-and-base-change]], [[thm-affine-closed-immersions-quotient-rings]]); the ideal sheaf of $Z$ is $I_Z=\ker(\mathcal O_X\to i_*\mathcal O_Z)$, a subsheaf of ideals of $\mathcal O_X$ ([[def-closed-immersion-schemes]], [[def-ideal-sheaf]]).

[F7] **Prime divisors and Weil divisors.** For an integral closed subscheme $Z\subseteq X$ with generic point $\xi$, $Z$ is a prime divisor when $\dim\mathcal O_{X,\xi}=1$ ([[def-weil-divisor-normal-noetherian-scheme]], [[def-generic-point-irreducible-closed-subset]]). A Weil divisor is a formal sum $D=\sum_Zn_Z[Z]$ over the prime divisors with locally finite support; since $X$ is quasi-compact the support is finite, addition is coefficientwise, so $D=D'$ exactly when all coefficients agree ([[def-weil-divisor-normal-noetherian-scheme]]).

[F8] **Cartier divisors.** $\operatorname{CaDiv}(X)$ is the group of global sections of $\mathcal K_X^\times/\mathcal O_X^\times$: a Cartier divisor is represented by an open cover $\{U_i\}$ and meromorphic units $f_i\in\mathcal K_X(U_i)^\times$ with $f_i/f_j\in\mathcal O_X^\times(U_i\cap U_j)$, sums are represented by products of equations, and local data with unit ratios glue along the cover ([[def-cartier-divisor]], [[def-sheaf-total-quotient-rings]]). An effective Cartier divisor has local equations that are regular sections and an ideal sheaf $I_D$ with $I_D|_U=f\mathcal O_U$ for every local equation $f$ ([[def-effective-cartier-divisor]]).

[F9] **Locally principal closed subschemes are effective Cartier divisors.** If a closed subscheme $Z\hookrightarrow X$ is locally cut out by nonzerodivisors, meaning that every point of $X$ has an affine open neighbourhood $U=\operatorname{Spec}A$ with $Z\cap U=\operatorname{Spec}(A/fA)$ for some nonzerodivisor $f\in A$, then the local equations $f$ form an effective Cartier divisor $D_Z$ with $I_{D_Z}=I_Z$; in particular the closed subscheme cut out by $D_Z$ is $Z$ ([[thm-effective-cartier-divisor-closed-immersion]]).

[F10] **The cycle map and the class map.** Assume Dependent Choice. On a normal Noetherian scheme a Cartier divisor $D$ with local equations $f_i$ has a well-defined associated Weil divisor $\operatorname{cyc}(D)=\sum_Zv_\xi(f_{i,\xi})[Z]$, independent of the data, and on an integral scheme $\operatorname{cyc}(\operatorname{div}_C(f))=\operatorname{div}_W(f)$ ([[thm-cartier-to-weil-divisor-normal-scheme]]). On a normal Noetherian integral scheme $\operatorname{cyc}$ is a homomorphism of abelian groups and induces the canonical homomorphism $\operatorname{Pic}(X)\to\operatorname{Cl}(X)$ carrying $[\mathcal O_X(D)]$ to $[\operatorname{cyc}(D)]$, where $\operatorname{Cl}(X)=\operatorname{Div}(X)/P(X)$ ([[lem-cartier-to-weil-respects-principal-and-addition]], [[def-picard-group-scheme]], [[def-principal-weil-divisor-and-class-group]]).

[F11] **Orders and valuations.** For a prime divisor $Z$ with generic point $\xi$ the local ring $\mathcal O_{X,\xi}$ is a discrete valuation ring with normalised valuation $v_\xi$; the order of a meromorphic unit along $Z$ is $\operatorname{ord}_Z(f)=v_\xi(f_\xi)$, and $v_\xi$ vanishes on the units of $\mathcal O_{X,\xi}$ and takes the value $1$ on a generator of its maximal ideal ([[def-order-codimension-one-rational-function]], [[def-discrete-valuation-ring]]).

[F12] **Injectivity input.** Assume the Axiom of Choice. On a normal Noetherian integral scheme the canonical homomorphism $\operatorname{Pic}(X)\to\operatorname{Cl}(X)$ is injective, and the cycle homomorphism $\operatorname{CaDiv}(X)\to\operatorname{Div}(X)$ is injective as well: a Cartier divisor with zero associated Weil divisor is zero ([[lem-cartier-to-weil-injective-normal]]).

[F13] **$\mathrm{AC}\Rightarrow\mathrm{DC}$** ([[thm-choice-implies-dependent-implies-countable-choice]]), where AC is the statement that every family of nonempty sets has a choice function ([[def-axiom-of-choice]]) and DC is the dependent choice principle ([[def-dependent-choice]]).

[F14] **Irreducible spaces and affine refinements.** A nonempty open subset of an irreducible space is dense, hence the closure of a nonempty open subset of an integral scheme is the whole scheme ([[lem-irreducibility-criteria-and-open-subspaces]], [[def-integral-scheme]]); and for every open $U\subseteq\operatorname{Spec}R$ and $\mathfrak p\in U$ there is $f\in R$ with $\mathfrak p\in D(f)\subseteq U$ ([[lem-distinguished-open-refinement-at-a-point]]). An isomorphism of groups is a bijective group homomorphism ([[def-group-isomorphism-and-automorphism]], [[def-group-homomorphism]]).

## Proof

1.1 **Irreducible elements of a UFD are prime.** Let $R$ be a UFD, let $\pi\in R$ be irreducible, and let $a,b\in R$ with $\pi\mid ab$, say $ab=\pi c$. If $a=0$ or $b=0$ then $\pi\mid a$ or $\pi\mid b$; if $a$ is a unit then $b=a^{-1}ab$ is divisible by $\pi$, and if $b$ is a unit then $a=b^{-1}ab$ is. Otherwise $a,b$ are nonzero nonunits, hence $ab$ is a nonzero nonunit and $c\ne 0$. By [F2] factor $a=p_1\cdots p_m$ and $b=q_1\cdots q_n$ into irreducibles. If $c$ is a unit then $\pi=c^{-1}p_1\cdots p_mq_1\cdots q_n$ is associate to a product of $m+n$ irreducibles, and since $\pi$ is irreducible uniqueness in [F2] forces $m+n=1$, so $\pi$ is associate to the single factor, which lies among the $p_i$ or the $q_j$; if $c$ is a nonunit, factor $c=r_1\cdots r_k$ and compare the two factorisations $p_1\cdots p_mq_1\cdots q_n=\pi r_1\cdots r_k$ of $ab$, so that uniqueness again makes $\pi$ associate to some $p_i$ or $q_j$. In either case $\pi\mid a$ or $\pi\mid b$, so $\pi$ is prime and $(\pi)$ is a nonzero prime ideal. [F2, F4]

2.1 **A UFD is integrally closed.** Let $R$ be a UFD with fraction field $K$ and let $x\in K$ be integral over $R$; by [F3] write $x=a/b$ with $a,b\in R$, $b\ne 0$, subject to a monic relation $x^n+c_{n-1}x^{n-1}+\cdots+c_1x+c_0=0$ with $c_j\in R$ and $n\ge 1$. For a nonzero $b_0\in R$ let $N(b_0)$ be the number of irreducible factors in a factorisation of $b_0$, and set $N(b_0)=0$ when $b_0$ is a unit; by the uniqueness part of [F2] the number $N(b_0)$ is well defined. Among all representations $x=a'/b'$ with $b'\ne 0$ choose one with $N(b)$ minimal. If $b$ is a unit then $x=ab^{-1}\in R$; assume it is not. If $a=0$ then $x=0\in R$, so assume $a\ne 0$. The nonzero nonunit $b$ has an irreducible factor $\pi$ by [F2], say $b=\pi b_1$ with $b_1\ne 0$; multiplying the monic relation by $b^n$ gives $a^n=-b\,(c_{n-1}a^{n-1}+c_{n-2}a^{n-2}b+\cdots+c_0b^{n-1})$, so $\pi\mid a^n$, and since $\pi$ is prime by step 1.1 we get $\pi\mid a$. Writing $a=\pi a_1$ gives $x=a_1/b_1$, and $N(b_1)=N(b)-1$: if $b_1$ is a unit then $b$ is associate to $\pi$, hence irreducible (a factorisation $u\pi=cd$ gives $\pi=(u^{-1}c)d$, so $u^{-1}c$ or $d$ is a unit), and $N(b)=1$; otherwise appending a factorisation of $b_1$ to $\pi$ factorises $b$. This contradicts the minimality of $N(b)$, so $b$ is a unit and $x\in R$: every UFD is integrally closed. [F2, F3, step 1.1, algebra]

2.2 **Height one primes of a UFD are principal.** Let $R$ be a UFD and let $\mathfrak p\subseteq R$ be a prime ideal of height one. Then $\mathfrak p\ne (0)$, so choose $0\ne a\in\mathfrak p$. The element $a$ is a nonzero nonunit, so by [F2] it factors as $a=\pi_1\cdots\pi_m$ with $m\ge 1$ and all $\pi_i$ irreducible; since $\mathfrak p$ is prime, some $\pi_i$ lies in $\mathfrak p$. The ideal $(\pi_i)$ is then contained in $\mathfrak p$, is nonzero, and is prime by step 1.1. Were the inclusion strict, the chain $(0)\subsetneq(\pi_i)\subsetneq\mathfrak p$ of prime ideals would force $\dim R_{\mathfrak p}\ge 2$, contradicting $\operatorname{ht}\mathfrak p=1$ by [F4]. Hence $\mathfrak p=(\pi_i)$ is principal. [F2, F4, step 1.1]

3.1 **$X$ is normal and the cycle and class maps exist.** By [F1] every local ring of $X$ is a UFD, hence integrally closed by step 2.1, and hence $X$ is normal because it is Noetherian: every local ring is an integrally closed domain, as required by [F3]. Since $X$ is in addition integral, the implication of [F13] provides Dependent Choice, so the cycle map $\operatorname{cyc}:\operatorname{CaDiv}(X)\to\operatorname{Div}(X)$ and the canonical homomorphism $\operatorname{Pic}(X)\to\operatorname{Cl}(X)$ are defined by [F10], and $\operatorname{cyc}$ is additive. [F1, F3, F10, F13, step 2.1]

3.2 **Prime divisors are locally cut out by nonzerodivisors.** Let $Z\subseteq X$ be a prime divisor and fix $x\in X$. If $x\notin Z$, then $X\setminus Z$ is an open neighbourhood of $x$ (Z is closed), and picking any affine chart of $X$ through $x$ and applying the distinguished-open refinement of [F14] inside that chart produces an affine open $W=\operatorname{Spec}B$ with $x\in W\subseteq X\setminus Z$; then $Z\cap W=\varnothing=\operatorname{Spec}(B/1\cdot B)$ by [F6], and $1$ is a nonzerodivisor. Now suppose $x\in Z$, choose a Noetherian affine chart $U=\operatorname{Spec}A$ containing $x$ from the cover in [F1], let $\mathfrak q\subseteq A$ be the prime of $x$ and $\mathfrak p=I_Z(U)$ the prime with $Z\cap U=\operatorname{Spec}(A/\mathfrak p)$ given by [F6], so that $\mathfrak p\subseteq\mathfrak q$. The closed subset $Z\cap U$ is a nonempty open subset of the integral scheme $Z$, hence dense by [F14], so its generic point, the point $\xi\in U$ corresponding to $\mathfrak p$, is the generic point of $Z$; by [F5] $A_{\mathfrak p}=\mathcal O_{X,\xi}$, and therefore $\operatorname{ht}\mathfrak p=\dim A_{\mathfrak p}=\dim\mathcal O_{X,\xi}=1$ by [F4] and [F7]. The stalk $A_{\mathfrak q}=\mathcal O_{X,x}$ is a UFD by [F1]; the natural map $A_{\mathfrak p}\to(A_{\mathfrak q})_{\mathfrak pA_{\mathfrak q}}$ is an isomorphism, since both rings are the localisation of $A$ at the multiplicative set $A\setminus\mathfrak p$ (every denominator $s\notin\mathfrak q$ also lies outside $\mathfrak p$, because $\mathfrak p\subseteq\mathfrak q$; and an element $a/s$ of $A_{\mathfrak q}$ lies outside $\mathfrak pA_{\mathfrak q}$ exactly when $a\notin\mathfrak p$, so the second localization inverts precisely the remaining numerators outside $\mathfrak p$), so $\operatorname{ht}(\mathfrak pA_{\mathfrak q})=\dim(A_{\mathfrak q})_{\mathfrak pA_{\mathfrak q}}=\dim A_{\mathfrak p}=1$ by [F4]. Applying step 2.2 in the UFD $A_{\mathfrak q}$ gives $\mathfrak pA_{\mathfrak q}=fA_{\mathfrak q}$ for some $f\in A_{\mathfrak q}$; write $f=a/s$ with $a\in A$, $s\notin\mathfrak q$. Then $a=sf\in\mathfrak pA_{\mathfrak q}$ and $aA_{\mathfrak q}=\mathfrak pA_{\mathfrak q}$. By [F4] the ideal $\mathfrak p=(g_1,\dots,g_m)$ is finitely generated, and each $g_i\in\mathfrak pA_{\mathfrak q}=aA_{\mathfrak q}$, so there are $s_i\notin\mathfrak q$ with $s_ig_i\in aA$; also $a\in\mathfrak pA_{\mathfrak q}$ gives $v\notin\mathfrak q$ with $va\in\mathfrak p$. Put $t=vs_1\cdots s_m\notin\mathfrak q$, $B=A_t$ and $W=D(t)=\operatorname{Spec}B$, an affine open with $x\in W$. In $B$ one has $a\in\mathfrak p B$ and $\mathfrak p B=aB$: each $g_i=(s_ig_i)/s_i$ lies in $aB$, so $\mathfrak p B\subseteq aB$, while $a\in\mathfrak p B$ gives the reverse inclusion. Finally $a\ne 0$ because $aA_{\mathfrak q}=\mathfrak pA_{\mathfrak q}\ne 0$, and $B$ is a domain, so $a$ is a nonzerodivisor; applying [F6] on the affine open $W$ with $I_Z(W)=\mathfrak p B=aB$ gives $Z\cap W=\operatorname{Spec}(B/aB)$. [F1, F4, F5, F6, F7, F14, step 2.2]

4.1 **Every prime divisor is an effective Cartier divisor with $\operatorname{cyc}(D_Z)=[Z]$.** Step 3.2 checked the hypothesis of [F9] for the closed subscheme $Z$ (closed by [F7]): every point of $X$ has an affine open neighbourhood $W=\operatorname{Spec}B$ with $Z\cap W=\operatorname{Spec}(B/aB)$ for a nonzerodivisor $a\in B$. Hence $Z$ carries an effective Cartier divisor $D_Z$ with $I_{D_Z}=I_Z$. To compute $\operatorname{cyc}(D_Z)$, let $Z'$ be a prime divisor with generic point $\xi'$. If $\xi'\notin Z$ then $I_Z$ agrees with $\mathcal O_X$ on the open neighbourhood $X\setminus Z$ of $\xi'$ by [F6], so the local equation of $D_Z$ near $\xi'$ is a unit of $\mathcal O_{X,\xi'}$, and its order is $0$ by [F11]: the coefficient of $Z'$ in $\operatorname{cyc}(D_Z)$ vanishes. If $\xi'\in Z$ then $Z'=\overline{\{\xi'\}}\subseteq Z$; to see that $Z'=Z$, take an affine open $U=\operatorname{Spec}A$ meeting $Z'$, write $Z\cap U=\operatorname{Spec}(A/\mathfrak p)$ and $Z'\cap U=\operatorname{Spec}(A/\mathfrak p')$ with primes $\mathfrak p\subseteq\mathfrak p'$ by [F6], note that the generic points $\xi,\xi'$ both lie in $U$ (each $Z\cap U$ and $Z'\cap U$ is a nonempty open subset of the corresponding integral scheme, hence dense, and contains its generic point), and compute as in step 3.2 that $\operatorname{ht}\mathfrak p=\dim\mathcal O_{X,\xi}=1$ and $\operatorname{ht}\mathfrak p'=\dim\mathcal O_{X,\xi'}=1$; a strict inclusion $\mathfrak p\subsetneq\mathfrak p'$ with $\mathfrak p\ne 0$ would force $\operatorname{ht}\mathfrak p'\ge 2$, so $\mathfrak p=\mathfrak p'$, the two closed subsets $Z\cap U=Z'\cap U$ coincide, and since both $Z$ and $Z'$ are the closure of this common nonempty open subset by [F14], $Z=Z'$. Consequently the only prime divisor whose generic point lies in $Z$ is $Z$ itself. At $\xi$, the stalk $I_{Z,\xi}$ is the kernel of $\mathcal O_{X,\xi}\to\mathcal O_{Z,\xi}$ by [F6], and $\mathcal O_{Z,\xi}$ is a field because $\xi$ is the generic point of the integral scheme $Z$, so $I_{Z,\xi}$ is the maximal ideal of the one-dimensional local domain $\mathcal O_{X,\xi}$; the germ of any local equation of $D_Z$ at $\xi$ generates this ideal by [F8] and [F9], hence equals a unit times a generator of the maximal ideal, and its $v_\xi$-value is $1$ by [F11]. Thus $\operatorname{cyc}(D_Z)$ has coefficient $1$ at $Z$ and $0$ at every other prime divisor, so $\operatorname{cyc}(D_Z)=[Z]$ by [F7]. [F6, F7, F8, F9, F11, F14, step 3.2]

5.1 **The cycle map is surjective.** Let $D=\sum_in_i[Z_i]$ be a Weil divisor on $X$; by [F7] the sum has finite support, so it is a finite combination of prime divisors. For each $i$ step 4.1 provides the effective Cartier divisor $D_{Z_i}$ with $\operatorname{cyc}(D_{Z_i})=[Z_i]$, and $D'=\sum_in_iD_{Z_i}$ is a Cartier divisor by [F8]. Since $\operatorname{cyc}$ is a homomorphism of abelian groups by [F10], $\operatorname{cyc}(D')=\sum_in_i\operatorname{cyc}(D_{Z_i})=\sum_in_i[Z_i]=D$. Hence every Weil divisor is the associated Weil divisor of a Cartier divisor: the cycle map is surjective, and every Weil divisor is locally Cartier, represented near each point by the local equations of such a Cartier divisor on the members of its representing cover. [F7, F8, F10, step 4.1]

6.1 **The cycle map is an isomorphism.** By step 3.1, $X$ is normal and the cycle map is a homomorphism. Its injectivity follows from [F12], and step 5.1 proves surjectivity. Thus it is an isomorphism of divisor groups by [F14]. [F12, F14, step 3.1, step 5.1]

7.1 **The canonical map $\operatorname{Pic}(X)\to\operatorname{Cl}(X)$ is an isomorphism.** By step 3.1 the canonical homomorphism $\varphi:\operatorname{Pic}(X)\to\operatorname{Cl}(X)$ exists, and it is injective by [F12]. For surjectivity let $c\in\operatorname{Cl}(X)=\operatorname{Div}(X)/P(X)$ be the class of a Weil divisor $D$; by step 5.1 there is a Cartier divisor $D'$ with $\operatorname{cyc}(D')=D$, and by [F10] the class $\varphi([\mathcal O_X(D')])$ is the class of $\operatorname{cyc}(D')=D$, namely $c$. So $\varphi$ is bijective, hence an isomorphism of groups by [F14], and $\operatorname{Pic}(X)\cong\operatorname{Cl}(X)$. [F10, F12, F14, step 3.1, step 5.1] ∎

The Axiom of Choice enters exactly through the injectivity input [F12] and through the implication $\mathrm{AC}\Rightarrow\mathrm{DC}$ of [F13] that makes the Dependent-Choice statements [F10] available. The unique factorisation arguments of steps 1.1, 2.1 and 2.2 use only the existence and uniqueness of factorisations and the well-ordering of $\mathbb N$; step 3.2 selects only finitely many denominators in the fixed ring $A$. Such finite selections require no choice axiom.

Two boundary cases are worth recording. First, if $X$ has no prime divisors, for instance $X=\operatorname{Spec}K$ for a field $K$, then $\operatorname{Div}(X)=0$ and $\operatorname{Cl}(X)=0$; the canonical map is injective by [F12] into the zero group, hence an isomorphism, and the construction of the later steps is vacuous. Second, the zero Weil divisor is realised by the Cartier divisor with the constant equation $1$, and $\operatorname{cyc}(0)=0$ by [F10]; a single prime divisor with coefficient one is realised by the effective Cartier divisor of step 4.1, while a single prime divisor with negative coefficient is realised by the inverse of that Cartier divisor in $\operatorname{CaDiv}(X)$, so no sign restriction is imposed. The empty scheme is not integral and is excluded by the hypotheses.
