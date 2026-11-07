---
id: lem-kuzmin-first-derivative-test
kind: lemma
title: "Kuzmin's First-Derivative Test for Discrete Phase Sums"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - def-discrete-exponential-sum
  - def-finite-sum-in-a-commutative-monoid
  - def-first-second-third-derivative-test-hypotheses
  - lem-geometric-progression-exponential-sum
  - lem-complex-conjugation-and-modulus-laws
  - thm-induction-principle
  - cor-mean-value-theorem
  - thm-intermediate-value
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "H. W. E. Elkies, Math 229, Exponential sums II: the Kuzmin and Montgomery-Vaughan estimates"
      url: "https://people.math.harvard.edu/~elkies/M229.09/kmv.pdf"
      locator: "Kuzmin proposition and complete telescoping proof, printed pp. 1-2"
    - title: "H. W. E. Elkies, Math 229, Exponential sums III: the van der Corput inequalities"
      url: "https://people.math.harvard.edu/~elkies/M229.09/vdc.pdf"
      locator: "First-derivative statement I, printed p. 1"
    - title: "Ramdinmawia Vanlalngaia, Hardy's functions of L-series and distribution of primes in arithmetic progressions"
      url: "https://pro.univ-lille.fr/fileadmin/user_upload/pages_pros/gautami_bhowmik/Encadrements/these_RV.pdf"
      locator: "Part I, Chapter 1 §1.10, printed p. 40, Theorem 15"
---

## Statement

Let $A<B$ be integers and let $f\in C^1([A,B])$ be real-valued. Suppose
that $f'$ is monotone and that
$
\|f'(x)\|_{\mathbb T}\ge\lambda
\qquad(x\in[A,B])
$
for some $0<\lambda\le\tfrac12$. Then
$
|S(f;A,B)|\le \frac{2}{\lambda}.
$

## Statement references

[Elkies, Math 229, “Exponential sums II: the Kuzmin and Montgomery–Vaughan estimates,” complete handout](https://people.math.harvard.edu/~elkies/M229.09/kmv.pdf)

[Elkies, Math 229, “Exponential sums III: the van der Corput inequalities,” complete handout](https://people.math.harvard.edu/~elkies/M229.09/vdc.pdf)

[Vanlalngaia, Chapter 1 §1.10, complete relevant thesis text](https://pro.univ-lille.fr/fileadmin/user_upload/pages_pros/gautami_bhowmik/Encadrements/these_RV.pdf)

## Facts & Assumptions

**Given:** Integers $A<B$, a real $C^1$ phase $f$ on $[A,B]$, a
monotone derivative satisfying the displayed distance condition, and
$0<\lambda\le\tfrac12$. Prove the displayed bound.

[F1] [[def-discrete-exponential-sum]]:
$S(f;A,B)=\sum_{j<B-A+1}e(f(A+j))$, with both integer endpoints included.

[F2] [[def-first-second-third-derivative-test-hypotheses]]:
$f\in C^1([A,B])$ means $f$ is continuous on the closed interval and its
first derivative exists on the interior and extends continuously to the
endpoints; monotone means nondecreasing or nonincreasing.

[F3] [[lem-geometric-progression-exponential-sum]]:
$e(s+t)=e(s)e(t)$, $|e(t)|=1$, and, on a strip
$[m+\lambda,m+1-\lambda]$, $\zeta(t)=(1-e(t))^{-1}$ has
$|\zeta(t)|\le(4\lambda)^{-1}$, real part $\tfrac12$, and monotone
imaginary part.

[F4] [[cor-mean-value-theorem]]:
for $g$ continuous on $[a,b]$ and differentiable on $(a,b)$, there is
$c\in(a,b)$ with $g(b)-g(a)=g'(c)(b-a)$.

[F5] [[thm-intermediate-value]]:
a continuous real function on $[a,b]$ takes every value between its endpoint
values.

[F6] [[lem-complex-conjugation-and-modulus-laws]],
[[thm-induction-principle]], and
[[def-finite-sum-in-a-commutative-monoid]]: the two-term triangle inequality
$|z+w|\le|z|+|w|$ gives $|\sum_{j<m}z_j|\le\sum_{j<m}|z_j|$ for every finite
complex initial segment by induction, using the initial-segment finite-sum
recursion.

## Proof

1.1 By the endpoint-continuous extension in [F2], $f'$ is continuous on $[A,B]$. The intermediate value theorem [F5] therefore shows that its image is the interval between its endpoint values. The distance hypothesis places that interval inside the union of strips $[m+\lambda,m+1-\lambda]$, $m\in\mathbb Z$. If two image values lay in different strips, the interval between them would contain a value in one of the intervening gaps, whose distance from an integer is less than $\lambda$; this contradicts the hypothesis. Thus one integer $m$ satisfies $m+\lambda\le f'(x)\le m+1-\lambda$ for every $x\in[A,B]$. [given, F2, F5]

2.1 For $1\le j\le B-A$, put $\delta_j=f(A+j)-f(A+j-1)$. By [F4], each $\delta_j=f'(c_j)$ for some $c_j\in(A+j-1,A+j)$; hence every increment lies in the strip of step 1.1. Because the intervals containing $c_j$ are ordered and $f'$ is monotone, the finite sequence $(\delta_j)$ is monotone. Define $\zeta_j=(1-e(\delta_j))^{-1}$. By [F3], $|\zeta_j|\le(4\lambda)^{-1}$, their real parts are all $\tfrac12$, and their imaginary parts are monotone. [given, F3, F4, step 1.1, construct]

3.1 Write $z_j=e(f(A+j))$. From $z_{j-1}-z_j=z_{j-1}(1-e(\delta_j))$, the definition of $\zeta_j$ gives $z_{j-1}=(z_{j-1}-z_j)\zeta_j$. Thus $S(f;A,B)=z_{B-A}+\sum_{j=1}^{B-A}(z_{j-1}-z_j)\zeta_j$; expanding and grouping each coefficient of $z_j$ gives $ S(f;A,B) =(1-\zeta_{B-A})z_{B-A}+\zeta_1z_0+ \sum_{j=1}^{B-A-1}z_j(\zeta_{j+1}-\zeta_j). $ Since the $\zeta_j$ lie on one vertical line with monotone imaginary parts, $\sum_{j=1}^{B-A-1}|\zeta_{j+1}-\zeta_j| =|\zeta_{B-A}-\zeta_1|\le|\zeta_{B-A}|+|\zeta_1| \le(2\lambda)^{-1}$. Also $|1-\zeta_{B-A}|\le1+(4\lambda)^{-1}\le3(4\lambda)^{-1}$, since $\lambda\le\tfrac12$, and $|\zeta_1|\le(4\lambda)^{-1}$. [given, F1, F3, F6, step 2.1, algebra]

4.1 Every $|z_j|=1$ by [F3]. Applying the finite-sum triangle inequality in [F6] to step 3.1 therefore gives $ |S(f;A,B)|\le\frac{3}{4\lambda}+\frac{1}{4\lambda} +\frac{1}{2\lambda}=\frac{3}{2\lambda}\le\frac{2}{\lambda}, $ as required. [given, F3, F6, step 3.1, algebra] ∎
