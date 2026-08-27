---
id: ex-best-rational-approximations-to-pi
kind: example
title: "The fractions 22/7, 333/106, and 355/113 as approximations to pi"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-continued-fraction-convergents-are-best-approximations, thm-legendre-continued-fraction-criterion]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Bruce Ikenaga, Approximation by Rational Numbers"
      url: "https://sites.millersville.edu/bikenaga/number-theory/approximation-by-rationals/approximation-by-rationals.html"
    - title: "Peter Hackman, Elementary Number Theory"
      url: "https://www.yumpu.com/en/document/view/50680602/elementary-number-theory-linkaaping-university"
    - title: "Ivan Niven, A simple proof that pi is irrational"
      url: "https://www.ams.org/journals/bull/1947-53-06/S0002-9904-1947-08821-2/"
pipeline_run: null
---

## Example

Among the classical fractions
$$\frac{22}{7},\qquad \frac{333}{106},\qquad \frac{355}{113},$$
the best approximation to $\pi$ is $355/113$, and it is already forced by
Legendre's criterion.

## Facts & Assumptions

**Given:** The real number $\pi$ and the three rational numbers above.

[L1] The number $\pi$ is irrational (Ivan Niven, "A simple proof that pi is
irrational", Bulletin of the AMS 53 (1947), 509).

[F1] If $\alpha$ is irrational and a reduced rational number $r/s$ satisfies
$|\alpha-r/s|<1/(2s^2)$, then it is a convergent of $\alpha$
([[thm-legendre-continued-fraction-criterion]]).

[F2] A convergent of an irrational number is the best approximation among all
rationals with smaller next denominator
([[thm-continued-fraction-convergents-are-best-approximations]]).

## Verification

**Proof technique:** direct.

1.1 Direct decimal comparison gives. [given, algebra]
$$\left|\pi-\frac{22}{7}\right|\approx1.264\times10^{-3},\qquad \left|\pi-\frac{333}{106}\right|\approx8.322\times10^{-5},$$
$$\left|\pi-\frac{355}{113}\right|\approx2.668\times10^{-7} <\frac{1}{2\cdot113^2}\approx3.916\times10^{-5}.$$
Moreover $355=3\cdot113+16$ and $113=7\cdot16+1$, so
$\gcd(355,113)=1$. Thus $355/113$ is reduced and satisfies Legendre's
criterion. [given, algebra]

2.1 By [L1] and [F1], the fraction $355/113$ is a convergent of $\pi$. Then [F2] says no. [L1, F1, F2, step 1.1]
rational with denominator at most $113$ approximates $\pi$ more closely. Since
$22/7$ and $333/106$ have denominators $7$ and $106$, neither can beat
$355/113$. [F1, F2, step 1.1]

2.2 The direct errors from step 1.1 also show that $333/106$ improves on. [step 1.1, algebra]
$22/7$, but that both are far worse than $355/113$. [step 1.1, algebra] ∎
