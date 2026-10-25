---
id: thm-number-field-integral-ideal-factorisation-in-zf
kind: theorem
title: "Integral ideal factorisation in a number field, in ZF"
status: published
origin: pipeline
deps: [lem-nonzero-number-field-ideal-has-finite-quotient, thm-ring-of-integers-free-of-rank-degree, lem-subgroups-of-z-are-cyclic, def-ring-of-integers-of-a-number-field, thm-integral-closure-is-integrally-closed, thm-integrality-commutes-with-localisation, thm-localisation-at-a-prime-is-local, thm-localisation-equivalence-and-ring-laws, prop-localisation-zero-equality-and-kernel-criteria, thm-correspondence-theorem-ideals, thm-adjugate-identity-over-a-commutative-ring]
proof_strategy: constructive
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  audited: 2026-09-30
sources:
  references:
    - title: "J. S. Milne, Algebraic Number Theory, Theorem 3.7"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
---

## Statement

Every nonzero integral ideal $\mathfrak a$ of $\mathcal O_K$ has a unique
finite factorisation $\mathfrak a=\prod_{i=1}^r\mathfrak p_i^{e_i}$ into
distinct nonzero prime ideals, with $e_i>0$.  The finite choices in this
construction are least-coded finite choices, so the assertion uses no Choice.

## Facts & Assumptions

**Given:** A number field $K$, its ring of integers $R=\mathcal O_K$, and a
nonzero integral ideal $\mathfrak a\subseteq R$.

[F1] $R$ is a free $\mathbb Z$-module of finite rank $n=[K:\mathbb Q]$
([[thm-ring-of-integers-free-of-rank-degree]]).

[F2] Every subgroup of $\mathbb Z$ is $d\mathbb Z$ for a unique $d\geq0$;
when it is nonzero, $d$ is its least positive element
([[lem-subgroups-of-z-are-cyclic]]).

[F3] Every nonzero integral ideal of $R$ has finite additive quotient
([[lem-nonzero-number-field-ideal-has-finite-quotient]]).

[F4] Ideals of $R/I$ correspond by inverse image to ideals of $R$ containing
$I$ ([[thm-correspondence-theorem-ideals]]).

[F5] $R$ is the integral closure of $\mathbb Z$ in $K$
([[def-ring-of-integers-of-a-number-field]]), and an integral closure of a
domain in a field extension is integrally closed
([[thm-integral-closure-is-integrally-closed]]).

[F6] Integral closure commutes with localization: if $A$ is a domain and
$\overline A$ its integral closure in a field $L$, then for every multiplicative
$T\subseteq A\setminus\{0\}$ the integral closure of $T^{-1}A$ in $L$ is
$T^{-1}\overline A$ ([[thm-integrality-commutes-with-localisation]]).

[F7] For a prime ideal $\mathfrak p$ of a domain, $R_{\mathfrak p}$ is local
with unique maximal ideal $\mathfrak pR_{\mathfrak p}$; its units are exactly
the fractions whose numerator is outside $\mathfrak p$
([[thm-localisation-at-a-prime-is-local]]).

[F8] In a localization at a prime, $x/1\in\mathfrak aR_{\mathfrak q}$ implies
$sx\in\mathfrak a$ for some $s\notin\mathfrak q$; this follows from the
fraction equality criterion ([[prop-localisation-zero-equality-and-kernel-criteria]]).

[F9] For a commutative ring and a positive-sized square matrix $M$,
$M\operatorname{adj}(M)=\det(M)I$
([[thm-adjugate-identity-over-a-commutative-ring]]).

[F10] The localization fractions have the usual well-defined ring operations,
the map $r\mapsto r/1$ is a ring homomorphism, and every denominator class
$s/1$ is a unit with inverse $1/s$
([[thm-localisation-equivalence-and-ring-laws]]).

## Proof

**Proof technique:** direct finite-rank and finite-quotient construction.

1.1 Work temporarily with one finite integral basis of $R$ supplied by [F1]; fixing this single existential witness is not a choice from a family. It identifies the additive group of $R$ with $\mathbb Z^n$, on which fix an explicit natural-number code (the usual sign code and a finite tuple-pairing code). An integral basis is $\mathbb Q$-independent: clearing denominators in a rational relation gives an integer relation. Its $[K:\mathbb Q]$ elements therefore form a $\mathbb Q$-basis of $K$. For any $z\in K$, clearing the finitely many rational coordinates gives a nonzero integer $c$ with $cz\in R$; hence $K=\operatorname{Frac}(R)$. We first prove by induction on $m$ that every subgroup $H\leq\mathbb Z^m$ has a finite basis. The case $m=0$ is immediate. For $m>0$, project onto the first coordinate. By [F2], the image is either zero or $d\mathbb Z$ for its least positive element $d$. In the zero case apply induction to the kernel, viewed in the last $m-1$ coordinates. Otherwise take the least-coded $h\in H$ with first coordinate $d$; the kernel has a finite basis by induction, and that basis together with $h$ spans $H$. Their independence follows by taking first coordinates and then using independence in the kernel. This finite induction uses only least natural numbers and one least-coded lift at each nonzero stage. [F1, F2, given, construct]

1.2 If $\mathfrak a=R$, its factorisation is the empty product. A nonempty finite product of proper prime ideals is contained in any one of its factors, so it cannot equal $R$. Hence this factorisation is unique. [given, algebra]

2.1 Every ideal $I\subseteq R$ is an additive subgroup of $\mathbb Z^n$; step 1.1 gives it a finite $\mathbb Z$-basis, which also generates it as an $R$-ideal because $\mathbb Z\subseteq R$. If $S=R_{\mathfrak p}$ and $J\subseteq S$ is an ideal, its contraction $I=J\cap R$ is finitely generated by step 1.1, and $J=IS$: for $r/s\in J$ with $s\notin\mathfrak p$, the unit $s/1$ gives $r/1\in J\cap R$, and the reverse inclusion is immediate. Consequently every ideal of $S$ is finitely generated. Any ascending chain of ideals of $S$ stabilizes: its union is an ideal, hence has finitely many generators. If the union is zero, every member is zero. Otherwise its finite generating list is nonempty, and its generators all lie in one common chain member, which then equals the union. No maximal-condition or dependent-choice implication is used. [step 1.1, F7, F10, algebra]

2.2 Now suppose $0\ne\mathfrak a\subsetneq R$. Put $A=R/\mathfrak a$; [F3] makes $A$ finite. The fixed basis code on $R$ gives each coset of $\mathfrak a$ the least code of its representatives. Order the finite set $A$ by these codes. Code each subset of $A$ by its bit mask in this ordering; this gives a definite code to every ideal of $A$. The maximal ideals of $A$ form a finite nonempty set: among its proper ideals, take the least bit-mask code among those of greatest finite cardinality. List all maximal ideals in increasing bit-mask order. By [F4], their inverse images are exactly the maximal ideals of $R$ containing $\mathfrak a$. Every nonzero prime containing $\mathfrak a$ is on this list: its quotient is finite by [F3] and is a domain, hence a field, so that prime is maximal. Conversely every maximal ideal is prime. The list is therefore exact, finite, and canonically ordered. [F3, F4, step 1.1, construct]

2.3 Fix a prime $\mathfrak p$ in this list and put $S=R_{\mathfrak p}$ and $\mathfrak m=\mathfrak pS$. This is a local domain by [F7], and $\mathfrak m\ne0$ because $\mathfrak p$ contains $\mathfrak a\ne0$ and localization of the domain $R$ is injective. By [F5], $R$ is integrally closed; applying [F6] with base domain $R$, field $K=\operatorname{Frac}(R)$ from step 1.1, integral closure $R$ from [F5], and multiplicative set $R\setminus\mathfrak p$ shows that $S$ is integrally closed in $K$. Step 1.1 also gives a finite generating list for $\mathfrak p$, whose images generate $\mathfrak m$. [F5, F6, F7, step 1.1]

3.1 Code a fraction in $S$ by the least code of a representing pair $(r,s)\in R\times(R\setminus\mathfrak p)$, using the fixed code on $R$. Thus every nonempty subset of $S$ has a least-coded element. Take the least-coded nonzero $x\in\mathfrak m$ and write $x=a/s$ with $0\ne a\in\mathfrak p$ and $s\notin\mathfrak p$; then $xS=aS$. The map from the localization of $R/aR$ at the image of $R\setminus\mathfrak p$ to $S/aS$ sending $(r+aR)/(s+aR)$ to $r/s+xS$ is a surjective ring homomorphism by [F10]. If its value is zero, then $r/s\in aS=xS$; since $s/1$ is a unit, $r/1\in aS$, and [F8] gives some $t\notin\mathfrak p$ with $tr\in aR$. Thus $(r+aR)/(s+aR)$ is already zero in that localization, so the map is injective. The source is finite because it is represented by pairs from the two finite sets $R/aR$ and the image of $R\setminus\mathfrak p$, using [F3]. Code its classes by least codes of representing pairs. It is local with maximal ideal $\mathfrak n=\mathfrak m/xS$: every class outside $\mathfrak n$ has a representative outside $\mathfrak m$, hence a unit by [F7]. For any $y\in\mathfrak n$, two powers repeat in this finite ring, say $y^i=y^{i+\ell}$ with $\ell>0$. Since $1-y^\ell$ is outside $\mathfrak n$, it is a unit, so $y^i=0$; necessarily $i>0$, since $1\notin\mathfrak n$. The finite set $\mathfrak n$, ordered by these class codes, has a list $y_1,\ldots,y_q$; take for each the least positive nilpotence exponent $k_i$. Every product of $1+\sum_i(k_i-1)$ elements of $\mathfrak n$ contains some $y_i$ at least $k_i$ times. Thus $\mathfrak n^N=0$ for some positive $N$, and $\mathfrak m^N\subseteq xS$. [F3, F7, F8, F10, step 2.3, construct, algebra]

4.1 Take the least positive $N$ with $\mathfrak m^N\subseteq xS$. If $N=1$, then $\mathfrak m=xS$. If $N>1$, choose the least-coded $y\in\mathfrak m^{N-1}\setminus xS$ and put $z=y/x\in K$. Then $z\notin S$ and $z\mathfrak m\subseteq S$. If $z\mathfrak m\subseteq\mathfrak m$, take finite generators $h_1,\ldots,h_q$ of $\mathfrak m$ from step 2.3 and take for each $i$ the least-coded coefficient tuple $(a_{ij})_j\in S^q$ with $zh_i=\sum_j a_{ij}h_j$. The matrix $zI-(a_{ij})$ kills the column of generators. By [F9] its adjugate shows that $\det(zI-(a_{ij}))h_i=0$ for every $i$. Some $h_i\ne0$, so the domain property gives $\det(zI-(a_{ij}))=0$. The polynomial $\det(TI-(a_{ij}))$ is monic over $S$, making $z$ integral over $S$, contrary to its integral closedness and $z\notin S$. Thus take the least-coded $h\in\mathfrak m$ with $zh\notin\mathfrak m$. Then $zh\in S\setminus\mathfrak m$ is a unit by [F7], and for every $t\in\mathfrak m$, $t/h=(zt)/(zh)\in S$. Hence $\mathfrak m=hS$. In either case $\mathfrak m=(\pi)$ for a nonzero nonunit $\pi$, chosen by the least codes just specified. [F7, F9, step 2.3, step 3.1, algebra]

5.1 Every nonzero $s\in S$ has a unique expression $s=u\pi^k$ with $u$ outside $\mathfrak m$ and $k\ge0$. Divide by $\pi$ whenever the current element lies in $\mathfrak m$; the quotient is unique because $S$ is a domain. If division never stopped, the resulting principal ideals would form a strictly ascending chain: equality at a step would make $\pi$ a unit. Step 2.1 rules out such a chain, so division stops at a unit. Uniqueness follows by cancellation: if two exponents differ, a unit would be a multiple of $\pi$, which lies in $\mathfrak m$. The recursive divisions are unique, not choices from families. [F7, step 2.1, step 4.1, algebra]

6.1 The ideal $\mathfrak aS$ is nonzero and finitely generated by step 2.1. Write each nonzero generator in the form of step 5.1 and take the least of the finitely many exponents, say $e_{\mathfrak p}$. Among the finite listed generators attaining that exponent take the least-coded one; it yields $\pi^{e_{\mathfrak p}}\in\mathfrak aS$ after multiplying by a unit inverse; every generator is divisible by that power. Thus $\mathfrak aS=(\pi^{e_{\mathfrak p}})=\mathfrak m^{e_{\mathfrak p}}$. Since $\mathfrak a\subseteq\mathfrak p$, this ideal is proper and $e_{\mathfrak p}>0$. If $e<f$ and $(\pi^e)=(\pi^f)$, cancellation of the nonzero $\pi^e$ would make $1$ a multiple of $\pi$, impossible because $\pi\in\mathfrak m$. Thus the exponent is unique. [step 2.1, step 5.1, algebra]

7.1 For every $r\ge0$, multiplication by $\pi^r$ induces a surjection $S/\mathfrak m\to\mathfrak m^r/\mathfrak m^{r+1}$; its kernel is exactly $\mathfrak m$, since cancellation of the nonzero $\pi^r$ shows $c\pi^r\in\pi^{r+1}S$ exactly when $c\in\pi S$. Thus each layer is one-dimensional over the residue field. Also the maximal ideal of $S/\mathfrak aS$ has nilpotency index exactly $e_{\mathfrak p}$: its $e_{\mathfrak p}$-th power vanishes, while its preceding power does not, because the powers of $\mathfrak m$ are strictly distinct as shown in step 6.1. These local quotient facts support the norm and Dedekind--Kummer uses of the local calculation. [step 5.1, step 6.1, algebra]

7.2 In the canonical finite order of step 2.2 define $\mathfrak b=\prod_{\mathfrak p\supseteq\mathfrak a} \mathfrak p^{e_{\mathfrak p}}$. This product is nonzero: choose a least-coded nonzero element in each of its finitely many prime factors and multiply them in the domain $R$. At $R_{\mathfrak p}$ for a listed prime, every other listed prime becomes the unit ideal (distinct maximal ideals are incomparable), so [step 6.1] gives $\mathfrak bR_{\mathfrak p}=\mathfrak aR_{\mathfrak p}$. At any maximal ideal $\mathfrak q$ not on the list, $\mathfrak a\not\subseteq\mathfrak q$; take the least-coded element of $\mathfrak a\setminus\mathfrak q$, which becomes a unit. Each listed prime is distinct from $\mathfrak q$, so take its least-coded element outside $\mathfrak q$; every factor becomes the unit ideal. Thus the same local equality holds there. [F7, step 2.2, step 6.1, construct]

8.1 If $x\in\mathfrak b\setminus\mathfrak a$, its class in the finite ring $R/\mathfrak a$ is nonzero, so its annihilator is proper. The finite, nonempty set of proper ideals containing this annihilator includes the annihilator itself. Take the least bit-mask code among its members of greatest finite cardinality; it is inclusion-maximal among proper ideals, hence a maximal ideal of $R/\mathfrak a$. By [F4], its inverse image is a maximal ideal $\mathfrak q$ of $R$ containing $\mathfrak a$. The local equality in step 7.2 puts $x/1$ in $\mathfrak aR_{\mathfrak q}$ by [F8], so take the least-coded $s\notin\mathfrak q$ with $sx\in\mathfrak a$. This puts the class of $s$ in the annihilator, a contradiction. Hence $\mathfrak b\subseteq\mathfrak a$. For the reverse inclusion, $\mathfrak b\ne0$ by step 7.2, so [F3] makes $R/\mathfrak b$ finite; for a hypothetical $x\in\mathfrak a\setminus\mathfrak b$, its nonzero class has a proper annihilator in $R/\mathfrak b$. The nonempty finite set of proper ideals containing that annihilator includes the annihilator itself. Take the least-bit-mask member of greatest cardinality, using the same quotient coding from step 2.2; it is maximal, and by [F4] its inverse image is a maximal ideal $\mathfrak q$ of $R$. The local equality puts $x/1$ in $\mathfrak bR_{\mathfrak q}$ by [F8], so take the least-coded $s\notin\mathfrak q$ with $sx\in\mathfrak b$. Then $s$ lies in the annihilator, a contradiction. Thus $\mathfrak a\subseteq\mathfrak b$ and $\mathfrak a=\mathfrak b$. [F3, F4, F8, step 7.2, algebra]

9.1 Suppose a second finite factorisation into distinct nonzero prime ideals is given. Each factor contains $\mathfrak a$, so every such prime is maximal by step 2.2. Localizing at any maximal ideal $\mathfrak p$, all distinct prime factors become units; the product is proper exactly when $\mathfrak p$ occurs, and then its local exponent is the unique exponent of the power of $\mathfrak pR_{\mathfrak p}$. The local equality with $\mathfrak a$ therefore forces exactly the same primes and exponents as in step 6.1. The prime list was sorted by least codes, the exponents are unique, and the finite auxiliary choices above were also least-coded. Thus the factorisation is unique and uses no Choice. [step 2.2, step 6.1, step 7.2, step 8.1, discharge-construct] ∎
