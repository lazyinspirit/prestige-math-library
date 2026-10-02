---
id: ex-quadratic-gauss-sum-for-five
kind: example
title: Quadratic Gauss sum at p=5
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-quadratic-gauss-sum-in-a-cyclotomic-field
  - lem-galois-action-on-the-quadratic-gauss-sum
  - thm-quadratic-gauss-sum-square
  - def-legendre-symbol
  - prop-prime-power-cyclotomic-polynomials-and-the-eisenstein-translate
  - thm-the-roots-of-the-cyclotomic-polynomial-are-the-primitive-roots-of-unity
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
      locator: "Lecture 9 sections 2-3, pp. 5-7: tau_5 = sqrt 5 for the standard root and the Galois stabilizer computation."
    - title: "J. S. Milne, Algebraic Number Theory, Ch. 8, Example 8.19"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
      locator: "Ch. 8, Example 8.19, p. 144: tau_5 = 1 + zeta + zeta^4 - zeta^2 - zeta^3 = sqrt 5."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Example

For the standard complex primitive fifth root of unity
$\zeta_5=e^{2\pi i/5}$, the quadratic Gauss sum is
$$\tau_5=\zeta_5-\zeta_5^{2}-\zeta_5^{3}+\zeta_5^{4}=\sqrt5,$$
and its Galois stabilizer
$\{\,b\in(\mathbb Z/5)^{\times}:\sigma_b(\tau_5)=\tau_5\,\}$ is the subgroup of
squares $\{1,4\}$.

## Facts & Assumptions

**Given:** The prime $p=5$, the primitive fifth root of unity
$\zeta=\zeta_5=e^{2\pi i/5}$, and the Gauss sum
$\tau=\tau_5=\sum_{a\bmod 5}(a/5)\zeta^{a}$.

[L1] The nonzero squares modulo $5$ are $1$ and $4$, so $(1/5)=(4/5)=1$ and
$(2/5)=(3/5)=-1$; hence
$\tau=\zeta-\zeta^{2}-\zeta^{3}+\zeta^{4}$
([[def-quadratic-gauss-sum-in-a-cyclotomic-field]],
[[def-legendre-symbol]]).

[L2] $\tau^{2}=p^{*}=(-1)^{(5-1)/2}5=5$
([[thm-quadratic-gauss-sum-square]]).

[L3] For every $b$ not divisible by $5$, the automorphism
$\sigma_b(\zeta)=\zeta^{b}$ satisfies $\sigma_b(\tau)=(b/5)\tau$
([[lem-galois-action-on-the-quadratic-gauss-sum]]).

[L4] $\Phi_5(t)=1+t+t^{2}+t^{3}+t^{4}$ and $\Phi_5(\zeta)=0$
([[prop-prime-power-cyclotomic-polynomials-and-the-eisenstein-translate]],
[[thm-the-roots-of-the-cyclotomic-polynomial-are-the-primitive-roots-of-unity]]).

[L5] The fifth roots of unity are $\zeta^{k}=\exp(2\pi ik/5)$, so
$\zeta=\exp(2\pi i/5)$ and $\zeta^{4}=\zeta^{-1}$; by Euler's formula
$\zeta+\zeta^{-1}=2\cos(2\pi/5)$
([[thm-complex-nth-roots-and-roots-of-unity]],
[[thm-eulers-formula]]). Moreover $\cos(2\pi/5)=\sin(\pi/2-2\pi/5)=\sin(\pi/10)>0$,
using the cofunction identity and positivity of sine on $(0,\pi)$
([[thm-cofunction-supplementary-and-reflection-identities]],
[[cor-pi-is-the-first-positive-sine-zero]]).

[L6] $|\exp(i\theta)|=1$ for real $\theta$
([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]).

## Verification

**Proof technique:** direct.

1.1 By [L1], $\tau=\zeta-\zeta^{2}-\zeta^{3}+\zeta^{4}$. [L1]

1.2 Put $t:=\zeta+\zeta^{4}=\zeta+\zeta^{-1}$. Then $t=2\cos(2\pi/5)>0$ by [L5] and [L6]. [L5, L6]

2.1 Put $s:=\zeta^{2}+\zeta^{3}=\zeta^{2}+\zeta^{-2}$. From $\Phi_5(\zeta)=0$ we get $1+t+s=0$, so $s=-1-t$; therefore $\tau=t-s=t-(-1-t)=1+2t$. [L4, step 1.1, step 1.2]

3.1 Moreover $t^{2}=(\zeta+\zeta^{-1})^{2}=\zeta^{2}+2+\zeta^{-2}=s+2=1-t$, so $t^{2}+t-1=0$ and $t=\frac{-1\pm\sqrt5}{2}$; since $t>0$ we have $t=\frac{\sqrt5-1}{2}$. [step 1.2, step 2.1]

4.1 Substituting into step 2.1, $\tau=1+2t=1+(\sqrt5-1)=\sqrt5$, and this is consistent with the general theorem, which gives $\tau^{2}=5$. [L2, step 2.1, step 3.1]

5.1 The stabilizer of $\tau$ under $\sigma_b$ is the set of $b$ with $(b/5)=1$, because $\sigma_b(\tau)=(b/5)\tau$ and $\tau=\sqrt5\ne0$; as the nonzero squares modulo $5$ are $1$ and $4$, the stabilizer is $\{1,4\}$. [L3, step 4.1] ∎

## Remarks

- **Independence of the primitive root.** Replacing $\zeta_5$ by
  $\zeta_5^{\,b}$ multiplies $\tau_5$ by $(b/5)$, so the value $\sqrt5$ is
  special to the standard positive-orientation root; the square and the
  generated field are unchanged.
- **The stabilizer has index two.** Its two elements are exactly the square
  classes, matching the description of the Galois group of the quadratic
  subfield $\mathbb Q(\sqrt5)$ of $\mathbb Q(\zeta_5)$.
