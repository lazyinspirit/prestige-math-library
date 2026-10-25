---
id: cor-first-supplement-via-cyclotomic-frobenius
kind: corollary
title: First supplement from Frobenius on Q(i)
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - lem-arithmetic-frobenius-on-a-cyclotomic-field
  - thm-eulers-criterion-for-legendre-symbol
  - thm-cyclotomic-ring-of-integers
  - def-cyclotomic-extension
  - def-legendre-symbol
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "J. S. Milne, Algebraic Number Theory, Ch. 6, Remark 6.3(a) and Ch. 8"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
      locator: "Ch. 6, Remark 6.3 and Ch. 8, Example 8.18: the Frobenius of Q(i) at an odd prime q sends i to i^q = (-1)^{(q-1)/2} i."
    - title: "Conrad-Landesman, Math 154 Algebraic Number Theory, Ch. 12"
      url: "https://math.stanford.edu/~conrad/154Page/handouts/undergraduate-number-theory.pdf"
      locator: "Ch. 12, pp. 63-65: Frobenius on Q(i) and the identification of its sign with (-1/q)."
verification:
  audited: 2026-10-02
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

For every odd prime $q$, the arithmetic Frobenius of $q$ in the quadratic field
$\mathbb Q(i)=\mathbb Q(\zeta_4)$ sends $i$ to
$$\operatorname{Frob}_q(i)=i^{q}=(-1)^{(q-1)/2}i,$$
so it acts on $\mathbb Q(i)$ by the quadratic sign
$(-1/q)=(-1)^{(q-1)/2}$.

## Facts & Assumptions

**Given:** An odd prime $q$, the element $i=\zeta_4$, a primitive fourth root of unity, and the field $K=\mathbb Q(i)=\mathbb Q(\zeta_4)$ of degree $2$ over $\mathbb Q$.

[F1] The index $f=4$ is reduced, and $q\nmid4$; hence the arithmetic Frobenius of $q$ in $\mathbb Q(\zeta_4)/\mathbb Q$ is the power map $\sigma_q(\zeta_4)=\zeta_4^{\,q}$ ([[lem-arithmetic-frobenius-on-a-cyclotomic-field]], [[def-cyclotomic-extension]]).

[F2] $\mathcal O_{\mathbb Q(i)}=\mathbb Z[i]$, and $i^{2}=-1$, so $i^{q}=i\,(i^{2})^{(q-1)/2}=(-1)^{(q-1)/2}i$ for odd $q$ ([[thm-cyclotomic-ring-of-integers]]).

[F3] Euler's criterion: for every integer $a$ and odd prime $q$, $(a/q)\equiv a^{(q-1)/2}\pmod q$ ([[thm-eulers-criterion-for-legendre-symbol]], [[def-legendre-symbol]]); the Legendre symbol satisfies $(a/q)\in\{-1,0,1\}$.

## Proof

**Proof technique:** direct.

1.1 By [F1] the Frobenius of $q$ acts on $K$ as the power map on $\zeta_4=i$, and by [F2] this is $\operatorname{Frob}_q(i)=i^{q}=(-1)^{(q-1)/2}i$. [F1, F2]

1.2 By Euler's criterion with $a=-1$, $(-1/q)\equiv(-1)^{(q-1)/2}\pmod q$; both $(-1/q)$ and $(-1)^{(q-1)/2}$ are elements of $\{-1,1\}$, so their difference is $0$ or $\pm2$, and a multiple of the odd prime $q$; hence the difference is $0$ and $(-1/q)=(-1)^{(q-1)/2}$. [F3]

2.1 Therefore the arithmetic Frobenius acts on $i$ by multiplication by the quadratic sign $(-1/q)$, that is $\operatorname{Frob}_q(i)=(-1/q)\,i$. [step 1.1, step 1.2] ∎

## Remarks

- **Independence from the earlier supplement.** The sign is computed here from the power map and Euler's criterion; the published first-supplement theorem is not used as a supplier, so no circularity arises with the quadratic reciprocity corollary that consumes this item.
