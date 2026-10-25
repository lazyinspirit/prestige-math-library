---
id: lem-arithmetic-frobenius-on-a-cyclotomic-field
kind: lemma
title: Arithmetic Frobenius is the power map in an unramified cyclotomic field
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - thm-cyclotomic-ring-of-integers
  - cor-the-galois-group-of-a-rational-cyclotomic-field
  - thm-factorisation-of-the-cyclotomic-polynomial-over-a-finite-field
  - lem-monogenic-prime-factorisation-by-polynomial-reduction
  - thm-cyclotomic-polynomials-are-irreducible-over-the-rationals
  - thm-cyclotomic-polynomials-are-monic-integer-polynomials-of-degree-euler-totient
  - thm-the-roots-of-the-cyclotomic-polynomial-are-the-primitive-roots-of-unity
  - thm-unramified-frobenius-element-exists-uniquely
  - def-prime-above-and-residue-degree
  - def-cyclotomic-extension
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "J. S. Milne, Algebraic Number Theory, Ch. 8, Example 8.18 and Ch. 6 Remark 6.6"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
      locator: "Ch. 8, Example 8.18, pp. 143-144: for l not dividing n the Frobenius of Q(zeta_n) is zeta -> zeta^l, and the residue degree is the order of l modulo n."
    - title: "Conrad-Landesman, Math 154 Algebraic Number Theory, Chs. 11-12"
      url: "https://math.stanford.edu/~conrad/154Page/handouts/undergraduate-number-theory.pdf"
      locator: "Ch. 11, Remark 11.7 and Ch. 12, pp. 60-65: the reduced-index unramified criterion and the identification of Frobenius with the power map on roots of unity."
verification:
  audited: 2026-10-02
---

## Statement

Let $f\ge1$ be a reduced index, that is $f$ is odd or $4\mid f$, let $\ell$ be
a rational prime with $\ell\nmid f$, let $\zeta_f$ be a primitive $f$-th root
of unity and $K=\mathbb Q(\zeta_f)$. Let $\sigma_\ell$ be the automorphism of
$K$ with $\sigma_\ell(\zeta_f)=\zeta_f^{\,\ell}$. Then for every prime
$\mathfrak P$ of $\mathcal O_K$ above $\ell$, the element $\sigma_\ell$ is the
arithmetic Frobenius $\operatorname{Frob}_{\mathfrak P}$: it is the unique
$\sigma\in\operatorname{Gal}(K/\mathbb Q)$ with $\sigma(\mathfrak P)=\mathfrak P$
and $\sigma(a)\equiv a^{\ell}\pmod{\mathfrak P}$ for all $a\in\mathcal O_K$. In
particular it does not depend on the chosen prime above $\ell$, the Galois group
being abelian.

## Facts & Assumptions

**Given:** A reduced index $f\ge1$, a rational prime $\ell$ with $\ell\nmid f$, a primitive $f$-th root of unity $\zeta=\zeta_f$, the field $K=\mathbb Q(\zeta)$, and the automorphism $\sigma_\ell\in\operatorname{Gal}(K/\mathbb Q)$ with $\sigma_\ell(\zeta)=\zeta^{\ell}$.

[F1] $\mathcal O_K=\mathbb Z[\zeta]$, and $1,\zeta,\dots,\zeta^{\varphi(f)-1}$ is an integral basis ([[thm-cyclotomic-ring-of-integers]]).

[F2] $\Phi_f$ is the monic minimal polynomial of $\zeta$ over $\mathbb Q$ and has degree $\varphi(f)$ ([[thm-cyclotomic-polynomials-are-irreducible-over-the-rationals]], [[thm-cyclotomic-polynomials-are-monic-integer-polynomials-of-degree-euler-totient]]).

[F3] $K/\mathbb Q$ is Galois with $\operatorname{Gal}(K/\mathbb Q)\cong(\mathbb Z/f)^{\times}$ via $\sigma_b(\zeta)=\zeta^{b}$; this group is abelian and every automorphism has this form ([[cor-the-galois-group-of-a-rational-cyclotomic-field]]).

[F4] For $\gcd(f,\ell)=1$, the reduction of $\Phi_f$ in $\mathbb F_\ell[t]$ is a product of pairwise distinct monic irreducibles, each of degree $d:=\operatorname{ord}_f(\ell)$ ([[thm-factorisation-of-the-cyclotomic-polynomial-over-a-finite-field]]).

[F5] Since $\mathcal O_K=\mathbb Z[\zeta]$, applying the monogenic factorisation lemma to $\bar\Phi_f=\prod_i g_i$ gives $\ell\mathcal O_K=\prod_i\mathfrak P_i$ where $\mathfrak P_i=(\ell,\widetilde g_i(\zeta))$ are distinct primes above $\ell$, each of residue degree $d$, where $\widetilde g_i\in\mathbb Z[t]$ is the coefficientwise lift of $g_i$ with coefficients in $\{0,\ldots,\ell-1\}$ ([[lem-monogenic-prime-factorisation-by-polynomial-reduction]], [[def-prime-above-and-residue-degree]]).

[F6] Over a field whose characteristic does not divide $f$, the roots of $\Phi_f$ in a splitting field of $t^f-1$ are exactly the primitive $f$-th roots of unity. For the residue field $\kappa(\mathfrak P_i)$, take a splitting field of $t^f-1$ over it; its natural field embedding is injective and preserves the multiplicative order of each element. Since $\kappa(\mathfrak P_i)$ has characteristic $\ell$ and $\ell\nmid f$, the theorem applies to the image of $\bar\zeta$ there ([[thm-the-roots-of-the-cyclotomic-polynomial-are-the-primitive-roots-of-unity]], [[def-cyclotomic-extension]]).

[F7] For a prime $\mathfrak P$ above an unramified rational prime $\ell$ in a finite Galois extension, there is a unique arithmetic Frobenius $\operatorname{Frob}_{\mathfrak P}$ in the decomposition group satisfying $\operatorname{Frob}_{\mathfrak P}(a)\equiv a^{\ell}\pmod{\mathfrak P}$ for all algebraic integers $a$ ([[thm-unramified-frobenius-element-exists-uniquely]]).

## Proof

**Proof technique:** direct.

1.1 By [F1] and [F2], the ring of integers is $\mathbb Z[\zeta]$, the minimal polynomial of $\zeta$ is $\Phi_f$, and its degree is $\varphi(f)$. By [F3], $K/\mathbb Q$ is abelian and each automorphism is $\sigma_b$ for a unit class $b$ modulo $f$, in particular $\sigma_\ell$ exists. If $f=1$, then $K=\mathbb Q$ and the unique prime over $\ell$ is $\ell\mathbb Z$; the trivial automorphism is its arithmetic Frobenius. [F1, F2, F3]

1.2 Since $\ell\nmid f$, [F4] and [F5] give $\ell\mathcal O_K=\prod_{i=1}^{g}\mathfrak P_i$ with distinct primes $\mathfrak P_i=(\ell,\widetilde g_i(\zeta))$, each of residue degree $d=\operatorname{ord}_f(\ell)$. Thus $\ell$ is unramified and these are all the primes above it. [F4, F5]

1.3 Fix $i$. By [F7] the prime $\mathfrak P_i$ has an arithmetic Frobenius $\operatorname{Frob}_{\mathfrak P_i}$ satisfying the $\ell$-power congruence. Evaluating it at $\zeta$ gives $$\operatorname{Frob}_{\mathfrak P_i}(\zeta)\equiv\zeta^{\ell}\pmod{\mathfrak P_i}.$$ [F7]

1.4 The residue class $\bar\zeta=\zeta+\mathfrak P_i$ is a root of the reduction of $\Phi_f$, since $\Phi_f(\zeta)=0$. Embed the residue field into a splitting field of $t^f-1$ over it. By [F6], the image of $\bar\zeta$ has multiplicative order exactly $f$ there; injectivity of the field embedding gives the same order for $\bar\zeta$ in the residue field. [F6]

2.1 Write $\operatorname{Frob}_{\mathfrak P_i}=\sigma_b$ using [F3]. Reducing the congruence in step 1.3 gives $$\bar\zeta^{\,b}=\bar\zeta^{\,\ell}.$$ Since $\bar\zeta$ has order $f$ by step 1.4, $b\equiv\ell\pmod f$; hence $\sigma_b=\sigma_\ell$. This comparison is made directly in the residue field at $\mathfrak P_i$, so it does not require $\sigma_\ell$ to stabilise $\mathfrak P_i$ in advance. [F3, step 1.3, step 1.4]

3.1 The argument applies to every prime $\mathfrak P_i$ above $\ell$, and each gives the same automorphism $\sigma_\ell$. Thus this arithmetic Frobenius is independent of the prime above $\ell$, as also follows from the abelian Galois group in [F3]. [F3, step 2.1] ∎

## Remarks

- **Reduced index.** The hypothesis that $f$ is odd or $4\mid f$ is the standing reduced-index convention of this pair; for the present lemma the essential hypothesis is $\ell\nmid f$, which makes $\Phi_f$ separable modulo $\ell$.
- **Power map, not inverse.** The identification uses the arithmetic convention $\zeta\mapsto\zeta^{\ell}$; the geometric inverse would send $\zeta$ to $\zeta^{\ell^{-1}}$ and agrees with the arithmetic map exactly when $\ell^2\equiv1\pmod f$, since $\ell$ is a unit modulo $f$.
