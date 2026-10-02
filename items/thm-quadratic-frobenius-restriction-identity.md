---
id: thm-quadratic-frobenius-restriction-identity
kind: theorem
title: Quadratic reciprocity as a Frobenius restriction identity
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - lem-arithmetic-frobenius-on-a-cyclotomic-field
  - lem-galois-action-on-the-quadratic-gauss-sum
  - thm-quadratic-subfield-of-a-prime-cyclotomic-field
  - thm-eulers-criterion-for-legendre-symbol
  - thm-quadratic-gauss-sum-square
  - def-quadratic-gauss-sum-in-a-cyclotomic-field
  - def-legendre-symbol
  - def-prime-above-and-residue-degree
  - def-cyclotomic-extension
  - def-arithmetic-frobenius-coset
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "J. S. Milne, Algebraic Number Theory, Ch. 8, Example 8.19"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
      locator: "Example 8.19, pp. 143-144: (q, K/Q) acts on zeta_p by zeta_p -> zeta_p^q, restricts to (q/p) on the quadratic subfield, and this restriction is also (d/q) for d = (-1)^{(p-1)/2}p."
    - title: "Jerry Shurman, Math 361 Ninth Lecture, section 4"
      url: "https://people.reed.edu/~jerry/361/lectures/lec09.pdf"
      locator: "Lecture 9, section 4, pp. 7-8: Frob_{q,K} sends zeta to zeta^q, Frob_{q,F} sends sqrt(p*) to (p*/q) sqrt(p*), and Frob_{q,F} is the restriction of Frob_{q,K} to F = Q(sqrt(p*))."
    - title: "Conrad-Landesman, Math 154 Algebraic Number Theory, Ch. 12"
      url: "https://math.stanford.edu/~conrad/154Page/handouts/undergraduate-number-theory.pdf"
      locator: "Ch. 12, pp. 63-65: Frobenius restrictions in abelian Galois extensions and the identification of the quadratic sign with a Legendre symbol."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

Let $p\ne q$ be odd primes, let $\zeta_p$ be a fixed primitive $p$-th root of
unity, let $\tau_p=\sum_{a\bmod p}(a/p)\zeta_p^{\,a}$ be the quadratic Gauss sum
attached to it, and put $p^{*}=(-1)^{(p-1)/2}p$. The arithmetic Frobenius
$\operatorname{Frob}_q$ of $q$ in $\mathbb Q(\zeta_p)$ sends
$$\zeta_p\longmapsto\zeta_p^{\,q},\qquad\tau_p\longmapsto\left(\frac qp\right)\tau_p .$$
Its restriction to the quadratic subfield $\mathbb Q(\sqrt{p^{*}})$ acts by
$$\tau_p\longmapsto\left(\frac{p^{*}}q\right)\tau_p,$$
and consequently
$$\left(\frac{p^{*}}q\right)=\left(\frac qp\right).$$

## Facts & Assumptions

**Given:** Distinct odd primes $p$ and $q$, a fixed primitive $p$-th root of
unity $\zeta=\zeta_p$, the Gauss sum $\tau=\tau_p$ attached to it, the field
$K=\mathbb Q(\zeta)$, the element $p^{*}=(-1)^{(p-1)/2}p$, and the automorphism
$\sigma_q\in\operatorname{Gal}(K/\mathbb Q)$ with
$\sigma_q(\zeta)=\zeta^{\,q}$.

[F1] The index $p$ is reduced and $q\nmid p$; hence $\sigma_q$ is the arithmetic
Frobenius at every prime $\mathfrak P$ of $\mathcal O_K$ above $q$: it is the
unique element of $\operatorname{Gal}(K/\mathbb Q)$ with
$\sigma_q(x)\equiv x^{q}\pmod{\mathfrak P}$ for all $x\in\mathcal O_K$, and it
does not depend on the choice of $\mathfrak P$
([[lem-arithmetic-frobenius-on-a-cyclotomic-field]],
[[def-arithmetic-frobenius-coset]]).

[F2] For every integer $b$ not divisible by $p$ one has
$\sigma_b(\tau)=(b/p)\tau$, where $\sigma_b(\zeta)=\zeta^{\,b}$; in particular
$\sigma_q(\tau)=(q/p)\tau$
([[lem-galois-action-on-the-quadratic-gauss-sum]]).

[F3] $\tau^{2}=p^{*}$ and $\mathbb Q(\tau)=\mathbb Q(\sqrt{p^{*}})$ is the
unique intermediate field $\mathbb Q\subseteq F\subseteq K$ with
$[F:\mathbb Q]=2$; moreover $\tau\in\mathcal O_K$ and $\tau\notin\mathbb Q$
([[thm-quadratic-gauss-sum-square]],
[[thm-quadratic-subfield-of-a-prime-cyclotomic-field]],
[[def-quadratic-gauss-sum-in-a-cyclotomic-field]]).

[F4] Euler's criterion: for every integer $a$ and the odd prime $q$,
$(a/q)\equiv a^{(q-1)/2}\pmod q$, and $(a/q)\in\{-1,0,1\}$
([[thm-eulers-criterion-for-legendre-symbol]], [[def-legendre-symbol]]).

[F5] $q\nmid p^{*}$: indeed $p^{*}=\pm p$ with $q\ne p$, so $p^{*}\not\equiv0\pmod q$. [given, arithmetic]

## Proof

**Proof technique:** direct.

1.1 By [F1] the automorphism $\sigma_q$ sends $\zeta$ to $\zeta^{q}$ and is the arithmetic Frobenius at each prime above $q$, while by [F2] it sends $\sigma_q(\tau)=(q/p)\tau$; since $(q/p)=\pm1$, it maps $\tau$ to $\pm\tau$ and therefore preserves $F=\mathbb Q(\tau)$. [F1, F2, F3]

1.2 Let $\mathfrak P$ be a prime of $\mathcal O_K$ above $q$ and let $\kappa=\mathcal O_K/\mathfrak P$ be its residue field. Since $\tau^{2}=p^{*}$ and $q\nmid p^{*}$ by [F5], we have $\tau^{2}\equiv p^{*}\not\equiv0\pmod{\mathfrak P}$, so the residue class of $\tau$ in the field $\kappa$ is nonzero. [F3, F5]

1.3 Euler's criterion [F4] with $a=p^{*}$ gives $(p^{*})^{(q-1)/2}\equiv(p^{*}/q)\pmod q$. [F4]

1.4 By the congruence property of [F1] applied to $x=\tau\in\mathcal O_K$, for every prime $\mathfrak P$ above $q$ one has $\sigma_q(\tau)\equiv\tau^{q}\pmod{\mathfrak P}$. [F1, F3]

2.1 In $\kappa$ one has $\tau^{q}=\tau\cdot(\tau^{2})^{(q-1)/2}=\tau\cdot(p^{*})^{(q-1)/2}=(p^{*}/q)\,\tau$, the last equality because $(p^{*})^{(q-1)/2}\equiv(p^{*}/q)\pmod q$ by step 1.3 and $\mathfrak P$ contains $q$. [F3, step 1.3]

3.1 Fix $\mathfrak P$ above $q$. Steps 1.1, 1.4 and 2.1 compare the same element in the field $\kappa$ and give $(q/p)\tau=\sigma_q(\tau)\equiv\tau^{q}=(p^{*}/q)\tau\pmod{\mathfrak P}$; the residue class of $\tau$ is nonzero by step 1.2, so cancellation gives $\left(\frac qp\right)\equiv\left(\frac{p^{*}}q\right)\pmod{\mathfrak P}$. [step 1.1, step 1.2, step 1.4, step 2.1]

4.1 Both $\left(\frac qp\right)$ and $\left(\frac{p^{*}}q\right)$ lie in $\{-1,1\}$; their difference lies in $\mathfrak P\cap\mathbb Z$, which is the prime ideal $(q)$ because $\mathfrak P$ lies above $q$ and $q\mathbb Z$ is maximal. A difference of two elements of $\{-1,1\}$ that is divisible by the odd prime $q$ must be $0$; hence $\left(\frac{p^{*}}q\right)=\left(\frac qp\right)$. [step 3.1, F4]

5.1 The element $\tau$ generates $F=\mathbb Q(\sqrt{p^{*}})$ over $\mathbb Q$ by [F3], and step 1.1 together with step 4.1 gives $\sigma_q(\tau)=\left(\frac qp\right)\tau=\left(\frac{p^{*}}q\right)\tau$; therefore the restriction of the arithmetic Frobenius to the quadratic subfield $\mathbb Q(\sqrt{p^{*}})$ acts on $\tau$ by multiplication by $\left(\frac{p^{*}}q\right)$, that is, it is the identity if $\left(\frac{p^{*}}q\right)=1$ and the nontrivial automorphism if $\left(\frac{p^{*}}q\right)=-1$. [step 1.1, step 4.1, F3] ∎

## Remarks

- **Arithmetic convention.** The result uses the arithmetic Frobenius
  $\zeta\mapsto\zeta^{q}$; the geometric inverse would send $\zeta$ to
  $\zeta^{q^{-1}}$, whose exponent is a different nonzero class modulo $p$ in
  general, and the identity with $\left(\frac qp\right)$ would then read with
  the inverse symbol.
- **No prior reciprocity.** Neither this theorem nor its supplier
  [[thm-quadratic-gauss-sum-square]] uses quadratic reciprocity: the comparison
  is between two independently computed signs for the same residue class.
