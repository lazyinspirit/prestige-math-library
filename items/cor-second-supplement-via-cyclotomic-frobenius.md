---
id: cor-second-supplement-via-cyclotomic-frobenius
kind: corollary
title: Second supplement from Frobenius on Q(zeta_8)
status: draft
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
    - title: "Jerry Shurman, Math 361 Ninth Lecture, sections 3-4"
      url: "https://people.reed.edu/~jerry/361/lectures/lec09.pdf"
      locator: "Lecture 9 sections 3-4, pp. 6-8: sqrt 2 = zeta_8 + zeta_8^{-1}, and Frobenius at odd q multiplies sqrt 2 by (2/q)."
    - title: "J. S. Milne, Algebraic Number Theory, Ch. 8, Example 8.18"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
      locator: "Ch. 8, Example 8.18, p. 144: the quadratic subfield Q(sqrt 2) of Q(zeta_8) and the second supplement."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

For every odd prime $q$, the element $t=\zeta_8+\zeta_8^{-1}$ satisfies
$t^{2}=2$, so $\mathbb Q(\sqrt2)=\mathbb Q(t)$ is a quadratic subfield of
$\mathbb Q(\zeta_8)$, and the arithmetic Frobenius of $q$ acts on it by
$$\operatorname{Frob}_q(t)=\left(\frac2q\right)t=(-1)^{(q^{2}-1)/8}\,t .$$

## Facts & Assumptions

**Given:** An odd prime $q$, a primitive eighth root of unity $\zeta=\zeta_8$, and the element $t:=\zeta+\zeta^{-1}\in\mathbb Q(\zeta)$.

[F1] The index $f=8$ is reduced, and $q\nmid8$; hence the arithmetic Frobenius of $q$ in $\mathbb Q(\zeta_8)/\mathbb Q$ is the power map $\sigma_q(\zeta)=\zeta^{\,q}$ ([[lem-arithmetic-frobenius-on-a-cyclotomic-field]], [[def-cyclotomic-extension]]).

[F2] $\zeta^{2}=\zeta_4$ has order $4$, so $\zeta^{2}+\zeta^{-2}=i+(-i)=0$ and $t^{2}=\zeta^{2}+2+\zeta^{-2}=2$; in particular $t$ is a square root of $2$ and $\mathbb Q(t)=\mathbb Q(\sqrt2)$ is a degree-two subfield of $\mathbb Q(\zeta_8)$ ([[thm-cyclotomic-ring-of-integers]], [[def-cyclotomic-extension]]).

[F3] For every odd integer $m$, writing the residue of $m$ modulo $8$ gives $\zeta^{m}+\zeta^{-m}=t$ when $m\equiv\pm1\pmod8$ and $\zeta^{m}+\zeta^{-m}=-t$ when $m\equiv\pm3\pmod8$, because $\zeta^{4}=-1$ and $\zeta^{3}=-\zeta^{-1}$. For residues $1,7$ the integer $(m^{2}-1)/8$ is even, and for residues $3,5$ it is odd. Thus $\sigma_q(t)=(-1)^{(q^{2}-1)/8}t$. [F1, algebra]

[F4] Euler's criterion: for every integer $a$ and odd prime $q$, $(a/q)\equiv a^{(q-1)/2}\pmod q$, and $(a/q)\in\{-1,0,1\}$ ([[thm-eulers-criterion-for-legendre-symbol]], [[def-legendre-symbol]]).

## Proof

**Proof technique:** direct.

1.1 By [F2], $t$ generates the quadratic field $\mathbb Q(\sqrt2)$ inside $\mathbb Q(\zeta_8)$, and $t\ne0$. [F2]

1.2 By [F3] there is a sign $\varepsilon\in\{\pm1\}$ with $\sigma_q(t)=\varepsilon t$, namely $\varepsilon=(-1)^{(q^{2}-1)/8}$. [F3]

2.1 Since $\sigma_q$ is the arithmetic Frobenius, $\sigma_q(t)\equiv t^{q}\pmod{\mathfrak P}$ for every prime $\mathfrak P$ above $q$; here $t^{q}=t\,(t^{2})^{(q-1)/2}=2^{(q-1)/2}t$, and $t\not\equiv0\pmod{\mathfrak P}$ because $t^{2}=2$ and $q$ is odd. Hence $\varepsilon\equiv2^{(q-1)/2}\pmod q$ as integers. [F1, F2, step 1.2]

3.1 Euler's criterion with $a=2$ gives $2^{(q-1)/2}\equiv(2/q)\pmod q$; since both $\varepsilon$ and $(2/q)$ lie in $\{-1,1\}$ and their difference is divisible by the odd prime $q$, they are equal. Therefore $\operatorname{Frob}_q(t)=(2/q)t$. [F4, step 2.1]

4.1 Finally $(2/q)=(-1)^{(q^{2}-1)/8}$, the exponent $(q^{2}-1)/8$ being an integer for odd $q$ and even exactly when $q\equiv\pm1\pmod8$, which matches the sign computed in step 1.2. [step 1.2, step 3.1] ∎

## Remarks

- **The quadratic field $\mathbb Q(\sqrt2)$ is a subfield of $\mathbb Q(\zeta_8)$** because $\zeta_8+\zeta_8^{-1}=\sqrt2$ up to sign; no uniqueness statement for the quadratic subfield is needed for the Frobenius restriction.
- **Consistency of the two signs.** The combinatorial sign in step 1.2 and the Legendre sign in step 3.1 are computed by different means and then compared modulo $q$; this is what fixes $(2/q)=(-1)^{(q^{2}-1)/8}$ without invoking the earlier second-supplement theorem.
