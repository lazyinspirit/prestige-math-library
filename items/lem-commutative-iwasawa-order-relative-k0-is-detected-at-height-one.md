---
dependency_level: 4
id: lem-commutative-iwasawa-order-relative-k0-is-detected-at-height-one
kind: lemma
title: Height-one detection for commutative orders over a normal local base
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-relative-algebraic-k0-group
- thm-relative-k-theory-localization-sequence
- def-axiom-of-choice
- lem-normal-noetherian-domain-intersection-of-height-one-localizations
- thm-nakayama-lemma
- thm-minimal-support-primes-are-associated
- thm-zero-divisors-on-a-module
- thm-noetherian-ring-has-finitely-many-minimal-primes
- thm-localisation-and-polynomial-extension-of-regular-rings
- thm-completion-preserves-regular-local-rings
- thm-completion-of-a-noetherian-local-ring
- thm-regular-local-rings-are-normal
- def-p-adic-integers-as-compatible-residue-classes
- thm-chinese-remainder-theorem-for-comaximal-ideals
- thm-lying-over
- def-projective-module
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
  - title: Johnston–Nickel, An Unconditional Proof of the Abelian EIMC, Proposition 6.5
    url: https://arxiv.org/pdf/2010.03186
verification:
  precheck: pass
---

## Statement

Assume AC. Let $R$ be a commutative normal noetherian local domain with field of fractions $F$. Let $\Lambda$ be a commutative finite projective $R$-algebra, and suppose $Q=F\otimes_R\Lambda$ is a finite product of fields. For a height-one prime $\mathfrak p$ of $R$, write $\Lambda_{\mathfrak p}=R_{\mathfrak p}\otimes_R\Lambda$. Then
$$
K_0(\Lambda,Q)\longrightarrow\bigoplus_{\operatorname{ht}\mathfrak p=1}K_0(\Lambda_{\mathfrak p},Q)
$$
is defined by localization of triples and is injective. This includes $R=\mathbb Z_p[\![T]\!]$, a finite abelian group $H$, an idempotent $e\in R[H]$ and $\Lambda=eR[H]$, with $Q=\operatorname{Frac}(R)\otimes_R\Lambda$. Localization is indexed by base primes, as in the source.

## Statement references

[Johnston–Nickel, An Unconditional Proof of the Abelian EIMC, Proposition 6.5](https://arxiv.org/pdf/2010.03186)


## Facts & Assumptions

**Given:** AC and the stated rings.

[F1] [[lem-normal-noetherian-domain-intersection-of-height-one-localizations]]: a normal noetherian domain is the intersection of its height-one localizations, inside its field of fractions (published supplier `lem-normal-noetherian-domain-intersection-of-height-one-localizations`, with AC).

[F2] [[thm-relative-k-theory-localization-sequence]]: the full five-term relative localization sequence, once the balanced-torsion proof is integrated.

[F3] [[thm-nakayama-lemma]]: Nakayama's lemma for finite modules over an ideal contained in the Jacobson radical; finite projective modules over a local ring are free (or its elementary finite-generators proof).

[F4] [[thm-lying-over]], [[thm-minimal-support-primes-are-associated]], and [[thm-zero-divisors-on-a-module]]: finite integral extensions satisfy lying-over; a finite algebra is integral. A nonzero minimal prime in the support of a finite module over a noetherian ring is associated, and the zero-divisors on that module are the union of its associated primes.

[A1] [[def-axiom-of-choice]] is retained from the cited algebra suppliers.

[F5] [[thm-localisation-and-polynomial-extension-of-regular-rings]], [[thm-completion-preserves-regular-local-rings]], [[thm-completion-of-a-noetherian-local-ring]], and [[thm-regular-local-rings-are-normal]] give regularity and normality of the indicated completion.

[F6] [[thm-noetherian-ring-has-finitely-many-minimal-primes]] gives finiteness of minimal primes, applied to the quotient by a principal ideal.

[F7] [[def-p-adic-integers-as-compatible-residue-classes]] gives the compatible-residue construction of the p-adic integers.

[F8] [[thm-chinese-remainder-theorem-for-comaximal-ideals]] gives finite comaximal-ideal decompositions.

## Proof

**Proof technique:** direct.

1.1 The ring $\Lambda$ is noetherian because it is finite as an $R$-module. It is semilocal. A finite algebra is integral: choose finitely many module generators including $1$, represent multiplication by an element on these generators, and apply the adjugate identity to its characteristic matrix to obtain a monic polynomial annihilating $1$. Every maximal ideal therefore contracts to the maximal ideal $\mathfrak m$ of $R$: its field quotient is integral over the contracted domain, and the integral equation of the inverse of any nonzero base element shows that inverse lies in the base domain, making that domain a field. Thus the maximal ideals correspond to maximal ideals of the finite-dimensional $R/\mathfrak m$-algebra $\Lambda/\mathfrak m\Lambda$. There are only finitely many: if there were arbitrarily many distinct maximal ideals, Chinese remainder would give quotients isomorphic to products of arbitrarily many nonzero vector spaces, contradicting its finite dimension. Its Jacobson radical $J$ is their intersection, and Chinese remainder identifies $\Lambda/J$ with the product of its residue fields. [F4, given, algebra]

1.2 For a field $L$, determinant gives $K_1(L)\cong L^\times$: Gaussian elimination reduces any invertible matrix, using elementary operations, to a diagonal matrix; elementary matrices are commutators after stabilization, and $\operatorname{diag}(u,v)$ has the same stable abelianized class as $\operatorname{diag}(uv,1)$ by elementary block operations. Thus a matrix is represented by its determinant; the one-by-one matrix provides the inverse. Entrywise use of the central idempotents proves the same assertion for a finite product of fields, hence $K_1(Q)\cong Q^\times$. Over any commutative ring, determinant is a homomorphism $K_1\to$ units, regardless of injectivity. [construct, algebra]

2.1 Every minimal prime $\mathfrak q$ of $\Lambda$ contracts to zero in $R$. Otherwise it contains a nonzero $r\in R$. By the minimal-support-prime result in [F4], such an $r$ would be a zero-divisor on $\Lambda$. This is impossible because $\Lambda$ is $R$-projective, hence $R$-torsion-free. Thus each minimal prime survives in $Q$; its localization is the corresponding field factor, since $Q$ is a product of fields. Every maximal ideal contains a minimal prime (noetherianity). If finite projectives $P,P'$ have the same class after extension to $Q$, their ranks at these generic points agree, because K0 of a product of fields is the group of dimension vectors, as follows from finite-dimensional bases and split exact sequences. For completeness, ranks of a finite projective are unchanged along a specialization: over a local ring lift a basis modulo the maximal ideal, use Nakayama to obtain a surjection from that finite free module, split it by projectivity, and apply Nakayama to its kernel to get an isomorphism; and a basis and inverse coordinate map spread to one basic neighborhood by clearing the finitely many denominators in their matrix identities. Thus rank is locally constant; along a chain of primes its two values agree, since every open neighborhood of the specialization contains the generalization. Their ranks at every maximal ideal therefore agree. [F4, step 1.1, algebra]

3.1 Finite projectives with these equal ranks are isomorphic over $\Lambda$. Indeed $P/JP\cong P'/JP'$ over the finite product of residue fields. The surjection $P'\to P'/JP'$ and projectivity of $P$ lift this isomorphism to a homomorphism $a:P\to P'$. Its cokernel is finite and zero modulo $J$, hence zero by Nakayama. The surjection $a$ splits since $P'$ is projective. Its finite projective kernel $L$ then has $L/JL=0$ (the induced map modulo $J$ was an isomorphism), so Nakayama gives $L=0$. Thus $a$ is an isomorphism. In particular $K_0(\Lambda)\to K_0(Q)$ is injective: each class is a difference $[P]-[P']$, and zero generic class forces $P\cong P'$. By [F2], the boundary $K_1(Q)\to K_0(\Lambda,Q)$ is consequently surjective. [F2, F3, step 2.1, construct, algebra]

4.1 Let $x\in K_0(\Lambda,Q)$ have zero image at every base height-one prime. Choose $y\in K_1(Q)$ mapping to $x$, using step 3.1, and let $u=\det y\in Q^\times$. Exactness of [F2] over each $\Lambda_{\mathfrak p}\to Q$ implies that $y$ is the image of an element of $K_1(\Lambda_{\mathfrak p})$. Determinants therefore give $u\in\Lambda_{\mathfrak p}^{\times}$ for all such primes. No surjectivity of the localized boundary and no injectivity of determinant on $K_1(\Lambda_{\mathfrak p})$ is needed. [F2, step 3.1, step 1.2, algebra]

5.1 One has $\Lambda=\bigcap_{\operatorname{ht}\mathfrak p=1}\Lambda_{\mathfrak p}$ inside $F\otimes_R\Lambda$. To prove it, take an $R$-projective complement $N$ with $\Lambda\oplus N\cong R^n$. A vector of $F\otimes\Lambda$ belonging to every $\Lambda_{\mathfrak p}$ has, in these $n$ coordinates, entries in every $R_{\mathfrak p}$, hence in $R$ by [F1]. The projection idempotent of $R^n$ onto $\Lambda$ fixes the vector generically; it thus fixes its integral coordinate vector, so the vector belongs to $\Lambda$. Apply this to both $u$ and $u^{-1}$ from step 4.1: both belong to $\Lambda$ and multiply to $1$, so $u\in\Lambda^\times$. This unit represents an element of $K_1(\Lambda)$ whose generic determinant is $u$. The determinant isomorphism for $Q$ shows that its image equals $y$. Exactness now gives $x=0$. [F1, F2, step 1.2, step 4.1, construct, algebra]

6.1 The localization map takes values in a direct sum. A relative triple becomes an actual $\Lambda$-module isomorphism after inverting some nonzero $r\in R$: both the generic map and its inverse are maps between finite $R$-modules and hence have finitely many denominators. At a height-one prime not containing $r$ the resulting triple is zero. A nonzero element of a noetherian domain belongs to only finitely many height-one primes: any height-one prime containing it is minimal over its principal ideal (a smaller such prime would be nonzero, giving a longer chain), and an ideal of a noetherian ring has finitely many minimal primes. Finite sums of triples have the same finite-support property. This proves the displayed direct-sum assertion. [F6, step 1.1, step 5.1, algebra]

7.1 For the specialization, $\mathbb Z_p$ is a DVR: a nonzero compatible sequence of residues has a least nonzero p-adic digit; removing its power of $p$ leaves a unit, whose inverses exist compatibly modulo all powers. In each nonzero ideal the minimum such valuation exists and a corresponding element generates it. Its maximal ideal is $(p)$ and it is regular noetherian local of dimension one. The polynomial localization $A=\mathbb Z_p[T]_{(p,T)}$ is regular local by the published polynomial/localization theorem. Its maximal-adic completion is $R=\mathbb Z_p[\![T]\!]$, directly by compatible truncated coefficients, and published completion regularity makes $R$ regular noetherian local; published regular-local normality makes it normal. All these suppliers assume AC, retained here. The group algebra $R[H]$ is finite free and its idempotent summand $eR[H]$ is finite projective. Over $F$ the group algebra of a finite abelian group in characteristic zero is a product of fields: it is a finite-dimensional commutative algebra with no nilpotents, since after extending to an algebraic closure its regular representation diagonalizes the commuting finite-order operators (their polynomials divide $X^{|H|}-1$, which has distinct roots). A finite-dimensional reduced commutative algebra is a product of fields by its finitely many maximal ideals and Chinese remainder. The idempotent summand retains that property. Thus all hypotheses hold. If $e=0$, the algebra and all its projectives are zero, and both relative groups in the asserted injection are trivial. [A1, F5, F7, F8, step 1.1, step 5.1, step 6.1, construct, algebra] ∎
