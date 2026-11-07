---
id: thm-dirichlet-rational-approximation-with-denominator-range
kind: theorem
title: "Dirichlet Approximation with a Chosen Denominator Range"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - thm-continued-fraction-algorithm-for-real-numbers
  - thm-rational-continued-fraction-termination
  - lem-continued-fraction-convergent-recurrence
  - def-convergents-of-regular-continued-fraction
  - def-regular-continued-fraction
  - lem-continued-fraction-error-bound
  - cor-continued-fraction-convergents-are-reduced
  - lem-integer-part
  - def-common-divisor-and-gcd
  - def-coprime
  - cor-gcd-quotients-coprime
  - thm-int-ordered-ring
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "N. Assing, The Circle Method and Waring's Problem (2022 lecture notes)"
      url: "https://www.math.uni-bonn.de/people/assing/lectures/circle_method.pdf"
      locator: "Exercise Block 4(a), Dirichlet approximation, printed pp. 103–104"
---

## Statement

For every real number $\alpha$ and every integer $Q\ge1$, there are integers
$a$ and $q$ with $q\ge1$, $\gcd(a,q)=1$, and
$$q\le Q,\qquad \left|\alpha-\frac aq\right|\le\frac1{qQ}\le\frac1{q^2}.$$
Here $\gcd$ is the nonnegative greatest common divisor, and $\gcd(a,q)=1$
means that $a$ and $q$ are coprime.

## Statement references

[Assing, Exercise Block 4(a), Dirichlet approximation](https://www.math.uni-bonn.de/people/assing/lectures/circle_method.pdf)

## Facts & Assumptions

**Given:** A real number $\alpha$ and an integer $Q\ge1$.

[F1] [[thm-continued-fraction-algorithm-for-real-numbers]]: the continued-fraction algorithm either terminates with a finite regular continued fraction equal to $\alpha$, or gives an infinite regular continued fraction whose convergents approach $\alpha$.

[F2] [[thm-rational-continued-fraction-termination]]: the algorithm terminates exactly when $\alpha$ is rational.

[F3] [[def-regular-continued-fraction]] and [[def-convergents-of-regular-continued-fraction]]: every partial quotient after the first is a positive integer, $q_0=1$, and $q_{n+1}=a_{n+1}q_n+q_{n-1}$ with positive denominators.

[F4] [[lem-continued-fraction-convergent-recurrence]]: a finite regular continued fraction $[a_0;\ldots,a_m]$ equals its last convergent $p_m/q_m$.

[F5] [[lem-continued-fraction-error-bound]]: if $\alpha$ is irrational, its convergents satisfy $\left|\alpha-p_n/q_n\right|<1/(q_nq_{n+1})$.

[F6] [[cor-continued-fraction-convergents-are-reduced]]: each convergent numerator and denominator are relatively prime.

[F7] [[lem-integer-part]]: for every real $x$ there is a unique integer $\lfloor x\rfloor$ with $\lfloor x\rfloor\le x<\lfloor x\rfloor+1$.

[F8] [[def-common-divisor-and-gcd]] and [[def-coprime]]: for a pair not both zero, its greatest common divisor is the nonnegative greatest common divisor, and the pair is coprime exactly when that divisor is $1$.

[F9] [[cor-gcd-quotients-coprime]]: if $d=\gcd(b,c)\ne0$, the unique integer quotients $b/d$ and $c/d$ are coprime.

[F10] [[thm-int-ordered-ring]]: if integers $d,c,q$ satisfy $d\ge1$ and $c=dq>0$, then $q>0$ and $q\le c$.

## Proof

**Proof technique:** direct.

1.1 Suppose the continued-fraction algorithm does not terminate. By [F1] it gives convergents $p_n/q_n$, and [F2] makes $\alpha$ irrational. By [F3], $q_0=1$, $q_1\ge1$, and for every $n\ge1$, $$q_{n+1}=a_{n+1}q_n+q_{n-1}\ge q_n+1,$$ since $a_{n+1}\ge1$ and $q_{n-1}\ge1$. Thus $q_n$ is unbounded and strictly increasing from $n=1$ onward. Choose the largest index $n$ with $q_n\le Q$; then $q_{n+1}>Q$. By [F5] and [F6], $a:=p_n$ and $q:=q_n$ are relatively prime and $$\left|\alpha-\frac aq\right|<\frac1{q_nq_{n+1}}<\frac1{qQ}\le\frac1{q^2},$$ where the last inequality uses $q\le Q$. [given, F1, F2, F3, F5, F6, choose, algebra]

1.2 Suppose the algorithm terminates, and let $p_m/q_m$ be its last convergent. By [F1] and [F4] it equals $\alpha$; [F3] gives $q_m\ge1$, and [F6] makes it reduced. If $q_m\le Q$, choose $a=p_m$ and $q=q_m$; then the error is zero. [given, F1, F3, F4, F6, algebra]

1.3 It remains in this terminating case to treat $q_m>Q$. For $\ell=0,1,\ldots,Q$ put $x_\ell=\ell\alpha-\lfloor\ell\alpha\rfloor\in[0,1)$ using [F7]. Partition $[0,1)$ into the $Q$ half-open intervals $[i/Q,(i+1)/Q)$ for $0\le i<Q$. Among the $Q+1$ values $x_\ell$, two with indices $u>v$ lie in the same interval, so for $q_0:=u-v$ and $b:=\lfloor u\alpha\rfloor-\lfloor v\alpha\rfloor$ one has $1\le q_0\le Q$ and $|q_0\alpha-b|=|x_u-x_v|<1/Q$. Let $d:=\gcd(b,q_0)$. Since $q_0\ge1$, [F8] gives $d\ge1$; by [F9] there are unique integers $a=b/d$ and $q=q_0/d$ that are coprime. Then $q\ge1$ and $q\le q_0\le Q$ by [F10]. Since $a/q=b/q_0$, $$\left|\alpha-\frac aq\right|<\frac1{q_0Q}\le\frac1{qQ}\le\frac1{q^2}.$$ [given, F7, F8, F9, F10, choose, construct, algebra]

2.1 The nonterminating case of step 1.1 and the two terminating subcases of steps 1.2 and 1.3 exhaust the algorithm's outcomes. Each supplies the required reduced fraction and denominator bounds. [step 1.1, step 1.2, step 1.3, F1, given] ∎

