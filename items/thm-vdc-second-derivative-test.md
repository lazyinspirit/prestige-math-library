---
id: thm-vdc-second-derivative-test
kind: theorem
title: "Van der Corput's Second-Derivative Test"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - def-discrete-exponential-sum
  - def-first-second-third-derivative-test-hypotheses
  - lem-kuzmin-first-derivative-test
  - lem-geometric-progression-exponential-sum
  - cor-mean-value-theorem
  - lem-integer-part
  - lem-complex-conjugation-and-modulus-laws
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "H. W. E. Elkies, Math 229, Exponential sums III: the van der Corput inequalities"
      url: "https://people.math.harvard.edu/~elkies/M229.09/vdc.pdf"
      locator: "Second-derivative estimate II and its proof, complete handout, printed pp. 1-2"
    - title: "Ramdinmawia Vanlalngaia, Hardy's functions of L-series and distribution of primes in arithmetic progressions"
      url: "https://pro.univ-lille.fr/fileadmin/user_upload/pages_pros/gautami_bhowmik/Encadrements/these_RV.pdf"
      locator: "Part I, Chapter 1 §1.10, printed pp. 40-41"
---

## Statement

Let $A<B$ be integers, put $N=B-A+1$, and let $f\in C^2([A,B])$ be
real-valued. Suppose that for some $\lambda>0$ and constants $0<c\le C$,
either
$
c\lambda\le f''(x)\le C\lambda\qquad(x\in[A,B])
$
or
$
c\lambda\le -f''(x)\le C\lambda\qquad(x\in[A,B]).
$
Then, with the implied constant depending only on $c,C$,
$
|S(f;A,B)|\ll_{c,C}N\lambda^{1/2}+\lambda^{-1/2}.
$

## Statement references

[Elkies, Math 229, “Exponential sums III: the van der Corput inequalities,” complete handout](https://people.math.harvard.edu/~elkies/M229.09/vdc.pdf)

[Vanlalngaia, Chapter 1 §1.10, complete relevant thesis text](https://pro.univ-lille.fr/fileadmin/user_upload/pages_pros/gautami_bhowmik/Encadrements/these_RV.pdf)

## Facts & Assumptions

**Given:** Integers $A<B$, $N=B-A+1$, a real-valued $f\in C^2([A,B])$,
and $\lambda>0$, $0<c\le C$, with one of the two displayed second-
derivative bounds. Prove the displayed estimate.

[F1] [[def-discrete-exponential-sum]]:
$S(f;A,B)=\sum_{j<N}e(f(A+j))$, with both endpoints included.

[F2] [[def-first-second-third-derivative-test-hypotheses]]:
$C^2([A,B])$ includes continuity of $f,f',f''$ on the closed interval
and differentiability through order two on its interior; the square root is
the positive-base rational power.

[F3] [[lem-kuzmin-first-derivative-test]]:
if $g\in C^1([p,q])$ on an integer interval, $g'$ is monotone, and
$\|g'(x)\|_{\mathbb T}\ge\eta$ throughout it for $0<\eta\le1/2$, then
$|S(g;p,q)|\le2/\eta$.

[F4] [[lem-geometric-progression-exponential-sum]]:
$e(-t)=\overline{e(t)}$ for every real $t$.

[F5] [[cor-mean-value-theorem]]:
for a function continuous on a closed interval and differentiable in its
interior, its endpoint difference equals its derivative at an interior point
times the interval length.

[F6] [[lem-complex-conjugation-and-modulus-laws]]:
$|\overline z|=|z|$ and $|z+w|\le|z|+|w|$.

[F7] [[lem-integer-part]]: if integers $m<n$, then $n\ge m+1$; in
particular, distinct integers are separated by at least one.

## Proof

1.1 If $f''\le-c\lambda$, replace $f$ by $-f$: the positive-curvature hypothesis then holds, and [F4] shows that the new sum is the conjugate of the old sum, so their moduli agree. We may therefore assume $c\lambda\le f''\le C\lambda$. If $N=1$, the single summand has modulus one. If $\lambda\ge1/16$, [F1] and [F6] give $|S(f;A,B)|\le N\le4N\lambda^{1/2}$. It remains to prove the estimate when $N\ge2$ and $0<\lambda<1/16$. [given, F1, F2, F4, F6]

2.1 Put $L=B-A=N-1$ and $\delta=\lambda^{1/2}$, so $0<\delta<1/4$. The mean value theorem [F5] applied to $f'$ shows that $f'$ is strictly increasing and that its image has length $f'(B)-f'(A)\le C\lambda L$. For each integer $k$, let $E_k=\{x\in[A,B]:k-\delta<f'(x)<k+\delta\}$. Each nonempty $E_k$ is an interval, and if $x<y$ lie in it, [F5] gives $c\lambda(y-x)\le f'(y)-f'(x)<2\delta$; hence its diameter is at most $2\delta/(c\lambda)$. Let $K$ be the number of nonempty $E_k$. Such integers $k$ lie in an interval of length at most $C\lambda L+2\delta$. By [F7], $K\le C\lambda L+2$. [given, F2, F5, F7, step 1.1, construct]

3.1 For each nonempty $E_k$, mark all integer points of $[A,B]$ within distance at most one of its closure. The closure has diameter at most $2\delta/(c\lambda)$, so the marked set for this $k$ contains at most $2\delta/(c\lambda)+3$ integers: an interval of length $d$ contains at most $d+1$ integers by [F7], and the one-unit enlargement has length at most $2\delta/(c\lambda)+2$. Thus the total number of marked integers is at most $K(2\delta/(c\lambda)+3)$. Each marked set is an interval of integer points, so their union has at most $K$ consecutive blocks; its complement in $\{A,\ldots,B\}$ has at most $K+1$ consecutive blocks. For any such complement block $p,\ldots,q$, no $E_k$ meets any unit interval between its successive integers: if $E_k$ met $[n,n+1]$, both integer endpoints would be within distance one of its closure and marked. Consequently $\|f'(x)\|_{\mathbb T}\ge\delta$ throughout $[p,q]$. [given, F2, F7, step 2.1]

4.1 On each complement block with at least two integers, the derivative is monotone and the first-derivative hypothesis in [F3] holds with parameter $\delta$; its sum has modulus at most $2/\delta$. A one-integer block obeys the same bound by [F6] and $\delta<1/4$. The marked summands have modulus one. The triangle inequality [F6], the counts in step 3.1, and $K\le C\lambda L+2$ therefore yield $ |S(f;A,B)|\le K\left(\frac{2\delta}{c\lambda}+3\right) +(K+1)\frac2\delta \ll_{c,C}L\lambda^{1/2}+\lambda^{-1/2}. $ Indeed, substituting $\delta=\lambda^{1/2}$ gives terms bounded by constant multiples of $L\lambda^{1/2}$, $L\lambda$, $\lambda^{-1/2}$, and $1$; since $\lambda<1$, these are bounded by the displayed right side. Finally $L\le N$, proving the claim. [given, F1, F2, F3, F6, step 2.1, step 3.1, algebra] ∎
