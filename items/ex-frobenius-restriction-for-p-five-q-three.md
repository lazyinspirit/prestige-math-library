---
id: ex-frobenius-restriction-for-p-five-q-three
kind: example
title: Frobenius restriction for p=5 and q=3
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - thm-quadratic-frobenius-restriction-identity
  - ex-quadratic-gauss-sum-for-five
  - thm-quadratic-subfield-of-a-prime-cyclotomic-field
  - thm-quadratic-gauss-sum-square
  - def-quadratic-gauss-sum-in-a-cyclotomic-field
  - def-legendre-symbol
  - def-quadratic-residue-modulo-n
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Jerry Shurman, Math 361 Ninth Lecture, section 4"
      url: "https://people.reed.edu/~jerry/361/lectures/lec09.pdf"
      locator: "Lecture 9, section 4, pp. 7-8: for p = 5 the quadratic subfield is Q(sqrt 5) and Frob_q acts on sqrt(p*) by (p*/q); the p = 3, q = 5 case is the reciprocity check."
    - title: "J. S. Milne, Algebraic Number Theory, Ch. 8, Example 8.19"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
      locator: "Example 8.19, pp. 143-144: the Frobenius in Q(zeta_5) restricts to Q(sqrt 5) with sign (5/q), and (5/3) = (3/5) = -1."
verification:
  precheck: pass
---

## Example

In $\mathbb Q(\zeta_5)$ the arithmetic Frobenius of the prime $3$ acts on the
quadratic subfield $\mathbb Q(\sqrt5)$ by
$$\operatorname{Frob}_3(\sqrt5)=-\sqrt5,$$
that is, nontrivially; the two Legendre symbols agree,
$$\left(\frac35\right)=\left(\frac53\right)=-1 .$$

## Facts & Assumptions

**Given:** The distinct odd primes $p=5$ and $q=3$, a fixed primitive fifth
root of unity $\zeta_5$, the Gauss sum $\tau_5$ attached to it, and
$p^{*}=(-1)^{(p-1)/2}p$
([[def-quadratic-gauss-sum-in-a-cyclotomic-field]]).

[F1] For distinct odd primes $p,q$, the arithmetic Frobenius of $q$ in
$\mathbb Q(\zeta_p)$ acts on the quadratic subfield $\mathbb Q(\sqrt{p^{*}})$
by $\tau_p\mapsto\left(\frac{p^{*}}q\right)\tau_p$, and
$\left(\frac{p^{*}}q\right)=\left(\frac qp\right)$
([[thm-quadratic-frobenius-restriction-identity]]).

[F2] For $p=5$ one has $p^{*}=(-1)^{2}\cdot5=5$ and $\tau_5^2=5$, so
$\tau_5=\varepsilon\sqrt5$ for some $\varepsilon\in\{1,-1\}$
([[thm-quadratic-gauss-sum-square]]). For the standard complex
root $\zeta_5=e^{2\pi i/5}$ one has $\varepsilon=1$; moreover
$\mathbb Q(\tau_5)=\mathbb Q(\sqrt5)$ is the unique quadratic subfield of
$\mathbb Q(\zeta_5)$
([[ex-quadratic-gauss-sum-for-five]],
[[thm-quadratic-subfield-of-a-prime-cyclotomic-field]]).

[F3] Legendre symbols: $\left(\frac35\right)=-1$ because the nonzero squares
modulo $5$ are $1,4$ and $3$ is not among them, and
$\left(\frac53\right)=\left(\frac23\right)=-1$ because $5\equiv2\pmod3$ and
the only nonzero square modulo $3$ is $1$
([[def-legendre-symbol]], [[def-quadratic-residue-modulo-n]]).

## Verification

**Proof technique:** direct.

1.1 For $p=5$ the quadratic subfield is $\mathbb Q(\sqrt{p^{*}})=\mathbb Q(\sqrt5)=\mathbb Q(\tau_5)$, with $\tau_5=\varepsilon\sqrt5\ne0$ for some rational sign $\varepsilon\in\{1,-1\}$. [F2]

1.2 $\left(\frac35\right)=-1$ and $\left(\frac53\right)=\left(\frac23\right)=-1$. [F3]

2.1 By [F1] with $p=5$, $q=3$, the arithmetic Frobenius satisfies $\operatorname{Frob}_3(\tau_5)=\left(\frac53\right)\tau_5=-\tau_5$. Since it fixes $\varepsilon\in\mathbb Q$, step 1.1 gives $\varepsilon\operatorname{Frob}_3(\sqrt5)=-\varepsilon\sqrt5$, hence $\operatorname{Frob}_3(\sqrt5)=-\sqrt5$. The restriction identity gives $\left(\frac53\right)=\left(\frac35\right)=-1$. [F1, step 1.1, step 1.2]

3.1 Since $\tau_5\ne0$, one has $\operatorname{Frob}_3(\tau_5)=-\tau_5\ne\tau_5$, so the arithmetic Frobenius of $3$ acts nontrivially on $\mathbb Q(\sqrt5)$: it is the nontrivial element of $\operatorname{Gal}(\mathbb Q(\sqrt5)/\mathbb Q)$, and the two Legendre symbols both equal $-1$, in agreement with the reciprocity law $(3/5)(5/3)=(-1)^{2\cdot1}=1$. [step 1.1, step 2.1] ∎

## Remarks

- **Nontrivial restriction means non-splitting.** The Frobenius of $3$
  restricting nontrivially to $\mathbb Q(\sqrt5)$ is the Frobenius form of the
  statement that $3$ does not split in $\mathbb Q(\sqrt5)$, equivalently
  $\left(\frac53\right)=-1$.
- **Reciprocity check.** The equality $\left(\frac53\right)=\left(\frac35\right)$
  is the special case $p=5$, $q=3$ of
  [[thm-quadratic-frobenius-restriction-identity]]; note
  $(p-1)(q-1)/4=2\cdot1=2$ is even, so the general reciprocity sign is $+1$,
  as displayed.
