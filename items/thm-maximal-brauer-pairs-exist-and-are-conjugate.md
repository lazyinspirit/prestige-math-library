---
id: thm-maximal-brauer-pairs-exist-and-are-conjugate
kind: theorem
title: Maximal Brauer pairs exist and are conjugate
deps: [thm-every-brauer-pair-determines-a-unique-global-block, thm-defect-groups-are-maximal-brauer-support, lem-brauer-maps-kill-nontrivial-idempotent-orbit-sums, lem-idempotents-lift-through-finite-commutative-algebra-quotients, thm-brauer-homomorphism-is-multiplicative, def-brauer-homomorphism-for-a-p-subgroup, thm-sylow-second-theorem, thm-brauer-pair-order-is-independent-of-the-normal-chain]
provenance:
  statement: literature-derived
  proof: ai-altered
status: draft
origin: pipeline
sources:
  references:
    - title: Jacobsen, Block fusion systems and the center of the group ring, Lemma 2.32 and Theorem 2.33, pp.18–19; general-field lifting proved locally
      url: https://www.math.ku.dk/bibliotek/arkivet/phd-theses/phd14mwj.pdf
proof_strategy: direct
---

## Statement

For a block $b$ of $kG$, maximal $b$-Brauer pairs exist and form one $G$-conjugacy class. If $(P,e)$ is maximal, $P$ is a defect group and $\operatorname{Br}_P(b)$ is the sum of the distinct $N_G(P)$-conjugates of $e$.

## Facts & Assumptions

**Given:** A finite group $G$, a field of characteristic $p$, and a nonzero primitive central block $b$.

[F1] Membership equals descent from $(1,b)$; comparable and conjugate pairs have the same block. ([[thm-every-brauer-pair-determines-a-unique-global-block]])

[F2] Maximal nonzero Brauer-support subgroups are defect groups, and these are conjugate. ([[thm-defect-groups-are-maximal-brauer-support]])

[F3] Non-singleton orbits vanish under a normal relative Brauer map. ([[lem-brauer-maps-kill-nontrivial-idempotent-orbit-sums]])

[F4] Idempotents lift through finite commutative quotients. ([[lem-idempotents-lift-through-finite-commutative-algebra-quotients]])

[F5] Brauer projection is a unital algebra map. ([[thm-brauer-homomorphism-is-multiplicative]])

[F6] Brauer projection on invariant elements retains precisely the centralizing basis coefficients. ([[def-brauer-homomorphism-for-a-p-subgroup]])

[F7] Sylow subgroups are conjugate and contain any given $p$-subgroup up to the stated conjugacy. ([[thm-sylow-second-theorem]])

[F8] Pair inclusion is a partial order, and for a normal subgroup it is exactly the stability and relative Brauer-product criterion. ([[thm-brauer-pair-order-is-independent-of-the-normal-chain]])

## Proof

**Proof technique:** direct.

1.1 There are finitely many $p$-subgroups and finitely many central primitive idempotents in each centralizer algebra. The set of $b$-pairs is nonempty because it contains $(1,b)$, and therefore it has a maximal pair $(P,e)$. Let $z$ be the sum of the distinct $N_G(P)$-conjugates of $e$. They are orthogonal block idempotents of $kC_G(P)$, so $z^2=z$, and $z$ is $N_G(P)$-fixed. Every such conjugate pair belongs to $b$ by [F1], so $\operatorname{Br}_P(b)z=z$. The pair relation is a partial order by [F8]. [F1, F5, F8]

1.2 We use the elementary normalizer condition for a finite $p$-group $T$: if $P<T$, then $P<N_T(P)$. Indeed let $P$ act on $T/P$ by left multiplication. Nonfixed orbits have size divisible by $p$ by orbit-stabilizer. The number of fixed cosets is therefore congruent to $[T:P]=0$ modulo $p$. It is positive since $P$ is fixed, and fixed cosets are exactly $N_T(P)/P$. Hence that quotient has at least $p$ elements. [given]

2.1 If $P\trianglelefteq R$ for a strictly larger $p$-subgroup $R$, partition these summands into $R$-orbits. Non-singletons have zero relative image by [F3]. For an $R$-fixed summand $f$, a nonzero relative image is a central idempotent and hence contains a block $d$ of $kC_G(R)$. Centrality follows because $f$ commutes with that algebra; multiplicativity gives idempotence. The stable block and this product satisfy the normal criterion [F8], so $(P,f)\trianglelefteq(R,d)$, and [F1] makes this a larger $b$-pair. Conjugating back by a normalizer element contradicts maximality of $(P,e)$. Thus $\operatorname{Br}_{R/P}(z)=0$ for every such $R$. [F1, F3, F5, F8, step 1.1]

3.1 If $x\in C_G(P)$ has nonzero coefficient in $z$, take a Sylow subgroup $T$ of $C_G(x)$ containing $P$, using [F7]. If $T>P$, put $R=N_T(P)>P$ by step 1.2. Then $P\trianglelefteq R$, and $x\in C_G(R)$, so its nonzero coefficient survives $\operatorname{Br}_{R/P}(z)$, contradicting step 2.1. Thus $P$ is Sylow in $C_G(x)$ for every support element $x$. [F6, F7, step 2.1, step 1.2]

4.1 Suppose $x$ is in this support and $y=gxg^{-1}\in C_G(P)$. The groups $gPg^{-1}$ and $P$ are Sylow in $C_G(y)$: the former by step 3.1 and conjugation, the latter by equality of centralizer orders. Choose $c\in C_G(y)$ with $cgPg^{-1}c^{-1}=P$ by [F7]. Then $cg\in N_G(P)$ and $(cg)x(cg)^{-1}=y$. Normalizer invariance of $z$ gives equal coefficients at $x,y$. Consequently each $G$-conjugacy class meeting the support has constant coefficient on its whole intersection with $C_G(P)$; classes not meeting the support have coefficient zero throughout. Summing these coefficients times full $G$-class sums constructs $a\in Z(kG)$ with $\operatorname{Br}_P(a)=z$. [F6, F7, step 1.1, step 3.1]

5.1 The restriction of $\operatorname{Br}_P$ to $Z(kG)$ identifies its image with a finite commutative quotient by its kernel, by [F5]. Lift its idempotent $z$ to a central idempotent $c$ by [F4]. Then $bc$ is a central idempotent beneath primitive $b$, hence is $0$ or $b$. Its image is $\operatorname{Br}_P(b)z=z\ne0$, so $bc=b$. Also $\operatorname{Br}_P(bc)=\operatorname{Br}_P(b)$ and equals $z$, proving $\operatorname{Br}_P(b)=z$. [F4, F5, step 1.1, step 4.1]

6.1 If $S>P$ had $\operatorname{Br}_S(b)\ne0$, let $R=N_S(P)>P$. Coefficient projection gives $\operatorname{Br}_R(b)=\operatorname{Br}_{R/P}(\operatorname{Br}_P(b))=0$ by steps 2.1 and 5.1. Since $C_G(S)\subseteq C_G(R)$, projecting further would give $\operatorname{Br}_S(b)=0$, a contradiction. Thus $P$ is maximal nonzero support, hence a defect group by [F2]. [F2, F6, step 2.1, step 1.2, step 5.1]

7.1 For any other maximal pair $(Q,f)$, step 6.1 makes $Q$ a defect group. By [F2] conjugate it so that $Q=P$. Membership says $\operatorname{Br}_P(b)f=f$. Step 5.1 writes this image as exactly the sum of the distinct normalizer conjugates of $e$. Orthogonality of central blocks forces $f$ to be one of these conjugates. This proves the single $G$-conjugacy class, as well as the asserted image formula. [F1, F2, step 5.1, step 6.1] ∎

## Sources

Jacobsen, Block fusion systems and the center of the group ring, Lemma 2.32 and Theorem 2.33, pp.18–19; general-field lifting proved locally. Local argument and conventions as displayed above.
