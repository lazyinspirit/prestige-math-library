---
id: ex-selberg-upper-bound-twin-prime-candidates
kind: example
title: "Selberg's upper bound for twin-prime candidates"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - thm-selberg-sieve-upper-bound-with-remainders
  - def-sieve-sequence-local-density-and-remainders
  - def-selberg-upper-bound-sieve-weights
  - def-prime
  - thm-chinese-remainder-theorem
  - def-number-theoretic-mobius-function
  - thm-canonical-prime-factorisation
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Kiran Kedlaya, Notes on Analytic Number Theory, Chapter 13, §13.2"
      url: "https://kskedlaya.org/ant/chap-selberg.html"
    - title: "Kiran Kedlaya, Notes on Analytic Number Theory, Chapter 14, Exercise 14.4.6"
      url: "https://kskedlaya.org/ant/chap-selberg2.html"
    - title: "D. R. Heath-Brown, Lectures on sieves, §2"
      url: "https://arxiv.org/pdf/math/0209360"
verification:
  precheck: pass
---

## Example

Take $N=20$, $z=5$, unit weights $a(n)=1$ for $1\le n\le20$, and the
quadratic sequence $F(n)=n(n+2)$. For each prime $p<5$, forbid the residue
classes $n\pmod p$ for which $p\mid F(n)$. The sifted candidate indices are
$\{5,11,17\}$, so $S(A,5)=3$. At Selberg level $y=25$, the divisor set is
$\mathcal D(25,5)=\{1,2,3\}$, its normalizing sum is $H(25,5)=4$, and the
weights are

$$\rho(1)=1,\qquad \rho(2)=-\frac12,\qquad \rho(3)=-\frac34,$$

$$\lambda^+(1)=1,\quad\lambda^+(2)=-\frac34,\quad
\lambda^+(3)=-\frac{15}{16},\quad\lambda^+(6)=\frac34.$$

The local counts are $A_1=20$, $A_2=10$, $A_3=13$, and $A_6=6$; the
corresponding remainders are $r_1=r_2=0$, $r_3=-1/3$, and $r_6=-2/3$. The
Selberg inequality gives $S(A,5)\le77/16<5$, hence the integer candidate count
is at most $4$. This finite calculation bounds only the displayed candidate
set; it asserts no asymptotic estimate for twin primes.

## Example references

[Kedlaya, *Notes on Analytic Number Theory*, Ch. 13, §13.2](https://kskedlaya.org/ant/chap-selberg.html)

[Kedlaya, *Notes on Analytic Number Theory*, Ch. 14, Exercise 14.4.6](https://kskedlaya.org/ant/chap-selberg2.html)

[Heath-Brown, *Lectures on sieves*, §2](https://arxiv.org/pdf/math/0209360)

## Facts & Assumptions

**Given:** The finite sieve sequence $F(n)=n(n+2)$ on $1\le n\le20$, unit
weights, the forbidden local residues for primes $2$ and $3$, and the Selberg
level $y=25$.

[F1] [[def-sieve-sequence-local-density-and-remainders]]: $A_d$ counts indices
whose residues lie in every $\Omega_p$ for $p\mid d$, and $g(d)$ is the
product of the local proportions $|\Omega_p|/p$.

[F2] [[def-selberg-upper-bound-sieve-weights]]: $\mathcal D(y,z)$ consists of
squarefree $d\mid P(z)$ with $d<\sqrt y$; $h(p)=g(p)/(1-g(p))$;
$H=\sum_{d\in\mathcal D}h(d)$; and $\rho,\lambda^+$ have the displayed
explicit formulae.

[F3] [[thm-selberg-sieve-upper-bound-with-remainders]]: if
$A_d=g(d)X+r_d$ and $0<g(p)<1$, then
$S(A,z)\le X/H+\sum_{q\mid P(z),q<y}\lambda^+(q)r_q$.

[F4] [[def-prime]]: a positive integer $p>1$ is prime exactly when its only
positive divisors are $1$ and $p$.

[F5] [[thm-chinese-remainder-theorem]]: for the pairwise-coprime moduli $2,3$,
each pair of residue classes determines one residue class modulo $6$.

[F6] [[def-number-theoretic-mobius-function]]: $\mu(1)=1$ and
$\mu(p)=-1$ for every prime $p$.

[F7] [[thm-canonical-prime-factorisation]]: the divisors of $P(5)=2\cdot3$
are exactly $1,2,3,6$.

## Verification

**Given:** The finite model and suppliers in Facts & Assumptions.

1.1 Direct evaluation modulo $2$ gives $F(n)\equiv n^2\pmod2$, so $\Omega_2=\{[0]_2\}$. Modulo $3$, evaluating $n=0,1,2$ gives $F(n)\equiv 0,0,2$, respectively, so $\Omega_3=\{[0]_3,[1]_3\}$. Avoiding both sets requires $n$ odd and $n\equiv2\pmod3$; among $1,\ldots,20$ these are exactly $5,11,17$. Thus $S(A,5)=3$. [given, F1, F4, algebra]

1.2 By [F5], the local bad residue pairs modulo $(2,3)$ give the classes $[0]_6$ and $[4]_6$: an even number congruent to $0$ modulo $3$ is $0$ modulo $6$, and an even number congruent to $1$ modulo $3$ is $4$ modulo $6$. In $1,\ldots,20$ there are $10$ even indices, $6$ indices congruent to $0$ modulo $3$, $7$ congruent to $1$ modulo $3$, and $3+3=6$ in the two bad classes modulo $6$. Therefore $A_1=20,\quad A_2=10,\quad A_3=13,\quad A_6=6,$ and $g(1)=1$, $g(2)=1/2$, $g(3)=2/3$, $g(6)=1/3$. With $X=20$ this gives $r_1=0,\quad r_2=0,\quad r_3=13-\frac{40}{3}=-\frac13,\quad r_6=6-\frac{20}{3}=-\frac23.$ [given, F1, F5, F7, algebra]

1.3 Since $\sqrt{25}=5$ and the divisors of $P(5)=6$ are those in [F7], $\mathcal D(25,5)=\{1,2,3\}$. The local ratios are $h(2)=1$ and $h(3)=2$, so $H=1+1+2=4$. In the formula [F2], the only $m$ for $d=2$ or $d=3$ is $m=1$; using [F6] gives $\rho(2)=-1/( (1/2)4)=-1/2$ and $\rho(3)=-2/((2/3)4)=-3/4$, while $\rho(1)=1$. [F2, F6, F7, algebra]

2.1 Grouping pairs $(d,e)\in\{1,2,3\}^2$ by their least common multiple in the definition [F2] gives $\lambda^+(1)=1,\quad \lambda^+(2)=2\rho(1)\rho(2)+\rho(2)^2=-\frac34,\quad \lambda^+(3)=2\rho(1)\rho(3)+\rho(3)^2=-\frac{15}{16},\quad \lambda^+(6)=2\rho(2)\rho(3)=\frac34.$ [step 1.3, F2, algebra]

3.1 The signed remainder is $\sum_{q\mid6,\ q<25}\lambda^+(q)r_q =\left(-\frac{15}{16}\right)\left(-\frac13\right) +\left(\frac34\right)\left(-\frac23\right)=-\frac3{16}.$ Applying [F3] gives $S(A,5)\le20/4-3/16=77/16<5$. Since $S(A,5)$ is an integer, it is at most $4$, consistent with the exact candidate count $3$ in step 1.1. This bounds the finite candidate set only. [step 1.1, step 1.2, step 1.3, step 2.1, F3, algebra] ∎
