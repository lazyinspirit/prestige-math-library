---
id: thm-vdc-third-derivative-test
kind: theorem
title: "Van der Corput's Third-Derivative Test"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 5
deps:
  - def-discrete-exponential-sum
  - def-finite-sum-in-a-commutative-monoid
  - def-first-second-third-derivative-test-hypotheses
  - lem-weyl-van-der-corput-differencing-inequality
  - lem-geometric-progression-exponential-sum
  - thm-vdc-second-derivative-test
  - def-derivative
  - cor-mean-value-theorem
  - thm-induction-principle
  - def-rational-power
  - lem-rational-power-well-defined
  - lem-rational-power-laws
  - lem-rational-power-monotone
  - lem-integer-part
  - lem-of-inverse-positive
  - lem-complex-conjugation-and-modulus-laws
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "H. W. E. Elkies, Math 229, Exponential sums III: the van der Corput inequalities"
      url: "https://people.math.harvard.edu/~elkies/M229.09/vdc.pdf"
      locator: "Third-derivative estimate III, differencing proof, and optimization, complete handout, printed pp. 2-3"
    - title: "Ramdinmawia Vanlalngaia, Hardy's functions of L-series and distribution of primes in arithmetic progressions"
      url: "https://pro.univ-lille.fr/fileadmin/user_upload/pages_pros/gautami_bhowmik/Encadrements/these_RV.pdf"
      locator: "Part I, Chapter 1 §1.10, printed pp. 40-41"
---

## Statement

Let $A<B$ be integers, put $N=B-A+1$, and let $f\in C^3([A,B])$ be
real-valued. Suppose that for some $\lambda>0$ and constants $0<c\le C$,
either
$
c\lambda\le f'''(x)\le C\lambda\qquad(x\in[A,B])
$
or
$
c\lambda\le -f'''(x)\le C\lambda\qquad(x\in[A,B]).
$
Then, with the implied constant depending only on $c,C$,
$
|S(f;A,B)|\ll_{c,C}N\lambda^{1/6}+N^{1/2}\lambda^{-1/6}.
$

## Statement references

[Elkies, Math 229, “Exponential sums III: the van der Corput inequalities,” complete handout](https://people.math.harvard.edu/~elkies/M229.09/vdc.pdf)

[Vanlalngaia, Chapter 1 §1.10, complete relevant thesis text](https://pro.univ-lille.fr/fileadmin/user_upload/pages_pros/gautami_bhowmik/Encadrements/these_RV.pdf)

## Facts & Assumptions

**Given:** Integers $A<B$, $N=B-A+1$, a real-valued
$f\in C^3([A,B])$, and $\lambda>0$, $0<c\le C$, with one of the two
displayed third-derivative bounds. Prove the displayed estimate.

[F1] [[def-discrete-exponential-sum]]:
$S(f;A,B)=\sum_{j<N}e(f(A+j))$, with both endpoints included.

[F2] [[def-first-second-third-derivative-test-hypotheses]]:
$C^3([A,B])$ includes continuity of $f,f',f'',f'''$ on the closed
interval and differentiability through order three on its interior; the
displayed rational powers use the positive-base convention.

[F3] [[lem-geometric-progression-exponential-sum]]:
$e(s+t)=e(s)e(t)$, $|e(t)|=1$, and
$e(-t)=\overline{e(t)}$ for real $s,t$.

[F4] [[lem-weyl-van-der-corput-differencing-inequality]]:
for a complex sequence $z_0,\ldots,z_{N-1}$, with
$C_h=\sum_{j<N-h}z_{j+h}\overline{z_j}$,
$
\left|\sum_{j<N}z_j\right|^2\le\frac{N+H-1}{H}
\left(\sum_{j<N}|z_j|^2+2\sum_{h=1}^{H-1}(1-h/H)|C_h|\right)
\quad(1\le H\le N).
$

[F5] [[thm-vdc-second-derivative-test]]:
on an integer interval with $M$ terms, a real $C^2$ phase whose second
derivative has one sign and satisfies $c\mu\le|g''|\le C\mu$ has sum
modulus at most a constant depending only on $c,C$ times
$M\mu^{1/2}+\mu^{-1/2}$.

[F6] [[cor-mean-value-theorem]]:
for a function continuous on a closed interval and differentiable in its
interior, its endpoint difference equals its derivative at an interior point
times the interval length.

[F7] [[def-derivative]]: ordinary derivatives are the limits of difference
quotients at points of the domain that are limit points.

[F8] [[def-rational-power]], [[lem-rational-power-well-defined]], and
[[lem-rational-power-laws]]: positive rational powers of a positive base are
well-defined, obey $(a^r)^s=a^{rs}$, and satisfy $a^{-r}=1/a^r$.

[F9] [[lem-rational-power-monotone]]: for every positive rational $r$,
$a\mapsto a^r$ is increasing on positive reals.

[F10] [[lem-of-inverse-positive]]: taking reciprocals reverses order on
positive reals.

[F11] [[lem-integer-part]]: for real $x$, its integer part $H$ satisfies
$H\le x<H+1$; distinct integers differ by at least one.

[F12] [[lem-complex-conjugation-and-modulus-laws]],
[[def-finite-sum-in-a-commutative-monoid]], and
[[thm-induction-principle]]: from $|z+w|\le|z|+|w|$, induction on the length
of a finite complex initial segment gives $|\sum_{j<m}z_j|\le\sum_{j<m}|z_j|$;
the base case uses the empty sum $0$, and the successor step uses the
initial-segment finite-sum recursion.

## Proof

1.1 If $f'''\le-c\lambda$, replace $f$ by $-f$. The positive third-derivative bounds then hold, and [F3] shows that the new sum is the conjugate of the old sum, so their moduli agree. The triangle inequality and $|e(t)|=1$, from [F3] and [F12], give $|S(f;A,B)|\le N$. If $\lambda\ge1$, this is at most $N\lambda^{1/6}$. If $0<\lambda\le N^{-3}$, [F8]-[F10] give $\lambda^{-1/6}\ge(N^{-3})^{-1/6}=N^{1/2}$, so it is at most $N^{1/2}\lambda^{-1/6}$. It remains to consider $N^{-3}<\lambda<1$, with $c\lambda\le f'''\le C\lambda$. [given, F1, F3, F8, F9, F10, F12]

2.1 Set $x=\lambda^{-1/3}$. Since $N^{-3}<\lambda<1$, the positive rational-power monotonicity and reciprocal laws [F8]-[F10] give $1<x<N$. Let $H=\lfloor x\rfloor$. By [F11], $H\le x<H+1$, so $H\le N-1$. Also $H\ge x/2$: if $1<x<2$, then $H=1$; if $x\ge2$, then $H>x-1\ge x/2$. Thus $1\le H\le N$ and $x/2\le H\le x$. [given, F8, F9, F10, F11, step 1.1]

3.1 Put $z_j=e(f(A+j))$, so $|z_j|=1$ by [F3]. Apply [F4] with this sequence and the integer $H$ from step 2.1. Since $N+H-1\le2N$, the diagonal sum is $N$, and every weight $1-h/H\le1$, it follows that $ |S(f;A,B)|^2\le\frac{2N}{H} \left(N+2\sum_{h=1}^{H-1}|C_h|\right), \qquad C_h=\sum_{j<N-h}z_{j+h}\overline{z_j}. $ [given, F1, F3, F4, F12, step 2.1, algebra]

4.1 For $1\le h<H$, define $g_h(x)=f(x+h)-f(x)$ on $[A,B-h]$. Since $h<H\le N-1$, we have $h\le N-2$, so $A<B-h$ and this is a nondegenerate integer interval. By [F3], $z_{j+h}\overline{z_j}=e(g_h(A+j))$, so $C_h=S(g_h;A,B-h)$. For $x\in(A,B-h)$, the difference-quotient definition [F7] gives
$$g_h'(x)=f'(x+h)-f'(x),\qquad g_h''(x)=f''(x+h)-f''(x).$$
Indeed, the first equality is the difference of the two difference-quotient limits for $f$ at $x+h$ and $x$, and the second is the same calculation for $f'$ at those interior points. The formulas for $g_h'$ and $g_h''$ extend continuously to $[A,B-h]$ by [F2], so $g_h\in C^2([A,B-h])$. For every $x\in[A,B-h]$, apply [F6] to $f''$ on $[x,x+h]$: for some $\xi\in(x,x+h)$,
$$g_h''(x)=f''(x+h)-f''(x)=h f'''(\xi),\qquad c h\lambda\le g_h''(x)\le C h\lambda.$$
The MVT applies also at the endpoint values of $x$, since $f''$ is continuous on the closed segment and differentiable on its interior. The interval has $N-h$ integer terms, so [F5] applies with parameter $h\lambda$ and gives, for a constant $K_{c,C}$ independent of $N,h,\lambda$, $ |C_h|\le K_{c,C}\big((N-h)(h\lambda)^{1/2}+(h\lambda)^{-1/2}\big) \le K_{c,C}\big(N\lambda^{1/2}h^{1/2} +\lambda^{-1/2}h^{-1/2}\big). $ [given, F1, F2, F3, F5, F6, F7, F8, step 2.1, step 3.1]

5.1 Positive rational-power monotonicity [F9] gives $\sum_{h=1}^{H-1}h^{1/2}\le H^{3/2}$. For the other sum, for each integer $h\ge1$, $ \frac1{h^{1/2}}\le2\big(h^{1/2}-(h-1)^{1/2}\big), $ because $h^{1/2}-(h-1)^{1/2}=1/(h^{1/2}+(h-1)^{1/2})$ and the denominator is at most $2h^{1/2}$. Summing this telescoping inequality gives $\sum_{h=1}^{H-1}h^{-1/2}\le2H^{1/2}$, also when the sum is empty. Insert these bounds and step 4.1 into step 3.1 to obtain $ |S(f;A,B)|^2\le\frac{2N^2}{H} +4K_{c,C}N^2\lambda^{1/2}H^{1/2} +8K_{c,C}N\lambda^{-1/2}H^{-1/2}. $ [given, F8, F9, F10, step 3.1, step 4.1, algebra]

6.1 From $x/2\le H\le x$, $x=\lambda^{-1/3}$, and [F8]-[F10], $ H^{-1}\le2\lambda^{1/3},\qquad H^{1/2}\le\lambda^{-1/6},\qquad H^{-1/2}\le2^{1/2}\lambda^{1/6}. $ Thus step 5.1 yields $|S(f;A,B)|^2\le K'_{c,C} (N^2\lambda^{1/3}+N\lambda^{-1/3})$ for some constant $K'_{c,C}>0$ depending only on $c,C$. Taking square roots and using $(\sqrt a+\sqrt b)^2\ge a+b$ for nonnegative $a,b$ proves $ |S(f;A,B)|\le (K'_{c,C})^{1/2} \bigl(N\lambda^{1/6}+N^{1/2}\lambda^{-1/6}\bigr), $ which is the asserted bound. [given, F8, F9, F10, F12, step 2.1, step 5.1, algebra] ∎
