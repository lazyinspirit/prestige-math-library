---
id: ex-quadratic-gauss-sum-for-three
kind: example
title: Quadratic Gauss sum at p=3
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-quadratic-gauss-sum-in-a-cyclotomic-field
  - thm-quadratic-gauss-sum-square
  - def-legendre-symbol
  - thm-complex-nth-roots-and-roots-of-unity
  - thm-eulers-formula
  - thm-cofunction-supplementary-and-reflection-identities
  - cor-pi-is-the-first-positive-sine-zero
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Jerry Shurman, Math 361 Ninth Lecture, sections 2-3"
      url: "https://people.reed.edu/~jerry/361/lectures/lec09.pdf"
      locator: "Lecture 9 section 3, p. 7: worked evaluation tau_3 = zeta_3 - zeta_3^2 = i sqrt 3."
    - title: "J. S. Milne, Algebraic Number Theory, Ch. 8, Example 8.19"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
      locator: "Ch. 8, Example 8.19, p. 144: the Gauss sum at p = 3 equals i sqrt 3 with square -3."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Example

For the standard complex primitive third root of unity
$\zeta_3=e^{2\pi i/3}$, the quadratic Gauss sum is
$$\tau_3=\zeta_3-\zeta_3^{2}=i\sqrt3,\qquad \tau_3^{2}=-3 .$$

## Facts & Assumptions

**Given:** The prime $p=3$, the primitive third root of unity
$\zeta=\zeta_3=e^{2\pi i/3}$, and the Gauss sum
$\tau=\tau_3=\sum_{a\bmod 3}(a/3)\zeta^{a}$.

[L1] $(1/3)=1$ and $(2/3)=-1$, so
$\tau=(1/3)\zeta+(2/3)\zeta^{2}=\zeta-\zeta^{2}$
([[def-quadratic-gauss-sum-in-a-cyclotomic-field]],
[[def-legendre-symbol]]).

[L2] For every odd prime $p$, $\tau_p^{2}=p^{*}=(-1)^{(p-1)/2}p$, so here
$\tau^{2}=-3$ ([[thm-quadratic-gauss-sum-square]]).

[L3] The third roots of unity are $\zeta^{k}=\exp(2\pi ik/3)$ for $k=0,1,2$,
so $\zeta=\exp(2\pi i/3)$ and $\zeta^{3}=1$
([[thm-complex-nth-roots-and-roots-of-unity]]).

[L4] Euler's formula $\exp(i\theta)=\cos\theta+i\sin\theta$ holds for real
$\theta$ ([[thm-eulers-formula]]), and $\sin(-x)=-\sin x$,
$\sin(\pi-x)=\sin x$ for real $x$
([[thm-cofunction-supplementary-and-reflection-identities]]); moreover
$\sin x>0$ for $0<x<\pi$ ([[cor-pi-is-the-first-positive-sine-zero]]).

[L5] $|\exp(i\theta)|=1$ for real $\theta$, so $\overline{\zeta}=\zeta^{-1}$
([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]).

## Verification

**Proof technique:** direct.

1.1 Substituting the Legendre values, $\tau=\zeta-\zeta^{2}$. [L1]

2.1 Since $\zeta^{3}=1$ we have $\zeta^{2}=\zeta^{-1}$, and by [L5] also $\zeta^{2}=\overline{\zeta}$; thus $\tau=\zeta-\zeta^{-1}=\exp(2\pi i/3)-\exp(-2\pi i/3)=2i\sin(2\pi/3)=2i\sin(\pi/3)$, using Euler's formula and the reflection identity. [L3, L4, L5, step 1.1]

3.1 From step 2.1, $\tau^{2}=(2i\sin(\pi/3))^{2}=-4\sin^{2}(\pi/3)$, while [L2] gives $\tau^{2}=-3$; hence $\sin^{2}(\pi/3)=3/4$, and $\sin(\pi/3)>0$ because $0<\pi/3<\pi$, so $\sin(\pi/3)=\sqrt3/2$. [L2, L4, step 2.1]

4.1 Substituting back, $\tau=2i\cdot(\sqrt3/2)=i\sqrt3$, and $\tau^{2}=(i\sqrt3)^{2}=-3$, in agreement with the general square formula. [L2, step 2.1, step 3.1] ∎

## Remarks

- **The choice of root matters for the sign.** With $\zeta_3=e^{2\pi i/3}$
  the sum is $+i\sqrt3$; replacing $\zeta_3$ by $\zeta_3^{2}$ multiplies
  $\tau_3$ by $(2/3)=-1$ and gives $-i\sqrt3$. The square $-3$ is the same in
  both cases.
