---
id: thm-kronecker-root-of-unity-criterion
kind: theorem
title: Kronecker root-of-unity criterion
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - cor-algebraic-integer-minimal-polynomial-criterion
  - cor-algebraic-extensions-of-perfect-fields-are-separable
  - cor-element-algebraic-iff-simple-extension-finite
  - cor-fields-of-characteristic-zero-and-finite-fields-are-perfect
  - cor-integral-elements-form-a-subring
  - cor-intermediate-field-degrees-divide
  - cor-trace-and-norm-of-an-algebraic-integer
  - def-archimedean-embeddings-and-number-field-signature
  - def-conjugate-elements-over-a-field
  - def-field-norm-and-trace
  - def-number-field
  - def-ring-of-integers-of-a-number-field
  - def-roots-of-unity-in-a-field
  - lem-bounded-conjugates-give-finitely-many-integral-polynomials
  - lem-complex-conjugation-and-modulus-laws
  - lem-restriction-fibres-for-embeddings-in-a-finite-tower
  - thm-embeddings-of-a-simple-algebraic-extension-correspond-to-distinct-roots
  - thm-field-norm-and-trace-by-embeddings
  - thm-root-bound-for-polynomials-over-a-domain
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "J. S. Milne, Algebraic Number Theory v3.08"
      url: "https://www.jmilne.org/math/CourseNotes/ANTc.pdf"
      locator: "Ch. 5 Prop. 5.5 and Cor. 5.6 p.87 (Kronecker's criterion)."
    - title: "William A. Stein, Algebraic Number Theory: A Computational Approach"
      url: "https://wstein.org/books/ant/ant.pdf"
      locator: "§8.1 Lemma 8.1.8 p.90 (an algebraic integer all of whose conjugates have modulus at most 1 is a root of unity)."
    - title: "Andrew V. Sutherland, MIT 18.785 Lecture 15: Dirichlet's Unit Theorem (Fall 2021)"
      url: "https://math.mit.edu/classes/18.785/2021fa/LectureNotes15.pdf"
      locator: "Cor. 15.8 pp.5-6 (the torsion of K^× is the group of roots of unity in K)."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

Let $K$ be a number field and let $0\ne\alpha\in\mathcal O_K$ be an algebraic
integer all of whose complex conjugates satisfy $|\sigma(\alpha)|\le1$. Then
$\alpha$ is a root of unity.

## Facts & Assumptions

**Given:** A number field $K$ of degree $n=[K:\mathbb Q]$, the set $\Sigma=\operatorname{Hom}_{\mathbb Q}(K,\mathbb C)$ of its $n$ embeddings into $\mathbb C$, and an element $0\ne\alpha\in\mathcal O_K$ with $|\sigma(\alpha)|\le1$ for every $\sigma\in\Sigma$.

[F1] $K/\mathbb Q$ is separable, because $\mathbb Q$ has characteristic zero, hence is perfect, and algebraic extensions of perfect fields are separable ([[cor-fields-of-characteristic-zero-and-finite-fields-are-perfect]], [[cor-algebraic-extensions-of-perfect-fields-are-separable]]); so the norm is the product over the distinct embeddings, $N_{K/\mathbb Q}(\alpha)=\prod_{\sigma\in\Sigma}\sigma(\alpha)$, with $|\Sigma|=n=[K:\mathbb Q]$ ([[thm-field-norm-and-trace-by-embeddings]], [[def-archimedean-embeddings-and-number-field-signature]]).

[F2] For $\alpha\in\mathcal O_K$ the norm $N_{K/\mathbb Q}(\alpha)$ is an integer ([[cor-trace-and-norm-of-an-algebraic-integer]]); if $\alpha\ne0$ then multiplication by $\alpha$ is an invertible linear map, so $N_{K/\mathbb Q}(\alpha)\ne0$ ([[def-field-norm-and-trace]], [[def-ring-of-integers-of-a-number-field]]).

[F3] An element $\beta$ is conjugate to $\alpha$ over $\mathbb Q$ exactly when $\beta$ is a complex root of the minimal polynomial $m_\alpha\in\mathbb Q[X]$ ([[def-conjugate-elements-over-a-field]]). Sending an embedding $\tau:\mathbb Q(\alpha)\to\mathbb C$ to $\tau(\alpha)$ is a bijection onto the set of distinct complex roots of $m_\alpha$ ([[thm-embeddings-of-a-simple-algebraic-extension-correspond-to-distinct-roots]]); restriction $\Sigma\to\operatorname{Hom}_{\mathbb Q}(\mathbb Q(\alpha),\mathbb C)$ is surjective ([[lem-restriction-fibres-for-embeddings-in-a-finite-tower]]); and for $\sigma\in\Sigma$ one has $m_\alpha(\sigma(\alpha))=\sigma(m_\alpha(\alpha))=0$. Hence the set of complex roots of $m_\alpha$ is exactly $\{\sigma(\alpha):\sigma\in\Sigma\}$.

[F4] Complex modulus is multiplicative, $|zw|=|z|\,|w|$, and $|z|=0$ only for $z=0$ ([[lem-complex-conjugation-and-modulus-laws]]).

[F5] Sums and products of elements integral over $\mathbb Z$ are integral ([[cor-integral-elements-form-a-subring]]), so for $m\ge1$ the power $\alpha^{m}$ is a nonzero element of $\mathcal O_K$, the integral closure of $\mathbb Z$ in $K$ ([[def-ring-of-integers-of-a-number-field]]).

[F6] For every $m\ge1$ the minimal polynomial $m_{\alpha^{m}}$ of the algebraic element $\alpha^{m}$ has coefficients in $\mathbb Z$, and $\deg m_{\alpha^{m}}=[\mathbb Q(\alpha^{m}):\mathbb Q]$ divides $[K:\mathbb Q]=n$ ([[cor-algebraic-integer-minimal-polynomial-criterion]], [[cor-element-algebraic-iff-simple-extension-finite]], [[cor-intermediate-field-degrees-divide]]).

[F7] Every complex root $w$ of $m_{\alpha^m}$ is the image of $\alpha^m$ under a $\mathbb Q$-embedding of $\mathbb Q(\alpha^m)$ into $\mathbb C$ ([[thm-embeddings-of-a-simple-algebraic-extension-correspond-to-distinct-roots]]). Such an embedding extends to a $\mathbb Q$-embedding $\sigma:K\to\mathbb C$ ([[lem-restriction-fibres-for-embeddings-in-a-finite-tower]]), so $w=\sigma(\alpha)^m$.

[F8] For fixed $n\ge1$ and $R=1$ there are only finitely many monic integer polynomials of degree at most $n$ whose complex roots, counted with multiplicity, all have modulus at most $1$ ([[lem-bounded-conjugates-give-finitely-many-integral-polynomials]]); this is the supplier consumed here, and the exact obligation used is this instance $R=1$.

[F9] A nonzero polynomial of degree at most $n$ over the integral domain $\mathbb C$ has at most $n$ distinct roots ([[thm-root-bound-for-polynomials-over-a-domain]]).

[F10] An element $\zeta$ of $K$ is a root of unity exactly when $\zeta^{N}=1$ for some $N\ge1$ ([[def-roots-of-unity-in-a-field]]).

## Proof

**Proof technique:** the norm bounds every conjugate of $\alpha$ above by $1$ and below by $1$ simultaneously; the powers $\alpha^{m}$ then have norm-controlled minimal polynomials of bounded degree, and only finitely many such polynomials exist.

1.1 Since $0\ne\alpha\in\mathcal O_K$, the norm $N_{K/\mathbb Q}(\alpha)$ is a nonzero integer, so $|N_{K/\mathbb Q}(\alpha)|\ge1$. [F2]

1.2 The set $\Sigma$ of $\mathbb Q$-embeddings $K\to\mathbb C$ has $n$ elements and $N_{K/\mathbb Q}(\alpha)=\prod_{\sigma\in\Sigma}\sigma(\alpha)$. [F1]

1.3 The complex roots of $m_\alpha$ are exactly the numbers $\sigma(\alpha)$ with $\sigma\in\Sigma$; each is a conjugate of $\alpha$, so by the hypothesis $|\sigma(\alpha)|\le1$ for every $\sigma\in\Sigma$. [F3, given]

2.1 By multiplicativity of the modulus, $|N_{K/\mathbb Q}(\alpha)|=\prod_{\sigma\in\Sigma}|\sigma(\alpha)|$, and every factor is at most $1$ by step 1.3, so $|N_{K/\mathbb Q}(\alpha)|\le1$. [F4, step 1.2, step 1.3]

3.1 Steps 1.1 and 2.1 give $1\le|N_{K/\mathbb Q}(\alpha)|\le1$, so $|N_{K/\mathbb Q}(\alpha)|=1$; a product of finitely many real numbers in $[0,1]$ equals $1$ only if every factor equals $1$, so $|\sigma(\alpha)|=1$ for every $\sigma\in\Sigma$, and every complex root of $m_\alpha$ has modulus exactly $1$. [step 1.1, step 1.3, step 2.1]

4.1 Let $m\ge1$. Then $m_{\alpha^{m}}\in\mathbb Z[X]$ is monic of degree at most $n$. By [F7], every complex root $w$ of $m_{\alpha^m}$ equals $\sigma(\alpha)^m$ for some $\sigma\in\Sigma$; hence $|w|=|\sigma(\alpha)|^m=1$ by step 3.1. [F4, F5, F6, F7, step 3.1]

5.1 By [F8] there are only finitely many monic integer polynomials of degree at most $n$ whose complex roots all have modulus at most $1$, and each of them has at most $n$ distinct complex roots by [F9]; hence the union of the complex root sets of these finitely many polynomials is finite. [F8, F9, step 4.1]

6.1 For every $m\ge1$, $\alpha^{m}$ is a complex root of $m_{\alpha^{m}}$, so the set $\{\alpha^{m}:m\ge1\}$ is contained in the finite union of step 5.1 and is finite. [step 4.1, step 5.1]

7.1 Two distinct powers therefore coincide: $\alpha^{k}=\alpha^{m}$ for integers $k>m\ge1$, and since $\alpha\ne0$ this gives $\alpha^{k-m}=1$, so $\alpha$ is a root of unity. [F10, step 6.1] ∎
