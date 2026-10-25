---
id: ex-second-supplement-from-q-zeta-eight
kind: example
title: Second supplement in four residue classes modulo eight
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - cor-second-supplement-via-cyclotomic-frobenius
  - lem-arithmetic-frobenius-on-a-cyclotomic-field
  - def-legendre-symbol
  - def-cyclotomic-extension
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
      locator: "Lecture 9 sections 3-4, pp. 6-8: sqrt 2 = zeta_8 + zeta_8^{-1} and the sign (2/q) = (-1)^{(q^2-1)/8} according to q mod 8."
    - title: "J. S. Milne, Algebraic Number Theory, Ch. 8, Example 8.18"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
      locator: "Example 8.18, pp. 143-144: the Frobenius in Q(zeta_8) acts by the power map, giving the four residue-class signs of the second supplement."
verification:
  audited: 2026-10-02
  precheck: pass
---

## Example

Let $\zeta=\zeta_8=e^{\pi i/4}$ and $t=\zeta+\zeta^{-1}=\sqrt2$, where
$\sqrt2$ denotes the positive real square root, so that
$\mathbb Q(\sqrt2)$ is a quadratic subfield of $\mathbb Q(\zeta_8)$. For an
odd prime $q$, the arithmetic Frobenius of $q$ acts on $\sqrt2$ by
$$\operatorname{Frob}_q(\sqrt2)=\left(\frac2q\right)\sqrt2=(-1)^{(q^{2}-1)/8}\sqrt2,$$
with signs $+,-,-,+$ according as $q\equiv1,3,5,7\pmod8$.

## Facts & Assumptions

**Given:** The primitive eighth root of unity $\zeta=e^{\pi i/4}$, the element $t=\zeta+\zeta^{-1}$, and an odd prime $q$.

[F1] $\zeta^{2}=\zeta_4$ has order $4$, so $t^{2}=2$. For every odd prime $q$ the arithmetic Frobenius of $q$ in $\mathbb Q(\zeta_8)$ is the power map $\zeta\mapsto\zeta^{q}$, so it sends $t=\zeta+\zeta^{-1}$ to $\zeta^{q}+\zeta^{-q}$, and $\operatorname{Frob}_q(t)=\left(\frac2q\right)t =(-1)^{(q^{2}-1)/8}t$ ([[cor-second-supplement-via-cyclotomic-frobenius]], [[lem-arithmetic-frobenius-on-a-cyclotomic-field]], [[def-cyclotomic-extension]]).

[F2] $\zeta^{4}=-1$, hence $\zeta^{7}=\zeta^{-1}$, $\zeta^{3}=-\zeta^{-1}$ and $\zeta^{5}=\zeta^{4}\zeta=-\zeta$; consequently, for an odd integer $m$ the value $\zeta^{m}$ depends only on $m$ modulo $8$ and equals $\zeta,-1\cdot\zeta^{-1},-\zeta,\zeta^{-1}$ for $m\equiv1,3,5,7\pmod8$ respectively. [algebra]

[F3] $(2/q)=(-1)^{(q^{2}-1)/8}$, and the exponent $(q^{2}-1)/8$ is an integer for odd $q$, even exactly when $q\equiv\pm1\pmod8$ ([[cor-second-supplement-via-cyclotomic-frobenius]]).

## Verification

**Proof technique:** direct.

1.1 For an odd prime $q$ the residue of $q$ modulo $8$ is one of $1,3,5,7$; by [F2] the four corresponding values of $\zeta^{q}+\zeta^{-q}$ are $\zeta+\zeta^{-1}=t$, $-\zeta^{-1}-\zeta=-t$, $-\zeta-\zeta^{-1}=-t$ and $\zeta^{-1}+\zeta=t$. [F2]

2.1 Since $\operatorname{Frob}_q(t)=\zeta^{q}+\zeta^{-q}$ is induced by the $q$-th power map on $\zeta$, step 1.1 gives $\operatorname{Frob}_q(t)=+t$ for $q\equiv1,7\pmod8$ and $\operatorname{Frob}_q(t)=-t$ for $q\equiv3,5\pmod8$. [F1, step 1.1]

3.1 Comparing with [F1], $\left(\frac2q\right)=+1$ for $q\equiv1,7\pmod8$ and $\left(\frac2q\right)=-1$ for $q\equiv3,5\pmod8$, matching the parity of $(q^{2}-1)/8$ described in [F3]; the signs in the order $q\equiv1,3,5,7$ are $+,-,-,+$. [F1, F3, step 2.1] ∎

## Remarks

- **A single sign computation covers all four classes.** Only the residue of $q$ modulo $8$ enters, because $\zeta^{4}=-1$ makes the power map on $\zeta$ depend on $q\bmod8$.
- **$q=2$ is excluded.** The second supplement concerns odd $q$; the prime $q=2$ is ramified in $\mathbb Q(\zeta_8)$ and does not arise as a Frobenius prime of an unramified extension.
