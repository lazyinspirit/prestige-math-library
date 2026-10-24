---
id: thm-two-square-representation-count
kind: theorem
title: "The divisor formula for the two-square representation count"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-coprime,
       def-divides-in-z,
       def-multiplicative-arithmetic-function,
       lem-finite-sum-reindexing-and-fubini,
       lem-normalized-two-square-count-is-multiplicative,
       thm-multiplicative-functions-determined-by-prime-powers]
justified_by: []
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Peter Hackman, Elementary Number Theory"
      url: "https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf"
    - title: "Karl-Dieter Crisman, Number Theory: In Context and Interactive"
      url: "https://math.gordon.edu/ntic/nticoneside.pdf"
pipeline_run: null
---

## Statement

Define

$$\chi_4(d):=\begin{cases}0,&2\mid d,\\ 1,&d\equiv1\pmod4,\\ -1,&d\equiv3\pmod4.\end{cases}$$

and let $d_1(n)$ and $d_3(n)$ count the positive divisors of $n$ congruent to
$1$ and $3$ modulo $4$, respectively. Then for every positive integer $n$,

$$r_2(n)=4\sum_{d\mid n}\chi_4(d)=4\bigl(d_1(n)-d_3(n)\bigr).$$

## Facts & Assumptions

**Given:** A positive integer $n$, coprime positive integers $m,n'$, and a prime-power input.

## Proof

**Proof technique:** direct.

1.1 Put $g(n):=\sum_{d\mid n}\chi_4(d)$. If $\gcd(m,n')=1$, every positive divisor of $mn'$ is uniquely of the form $ab$ with $a\mid m$ and $b\mid n'$; because odd residue classes modulo $4$ multiply and every even divisor has $\chi_4$-value $0$, one gets $\chi_4(ab)=\chi_4(a)\chi_4(b)$. Therefore $$g(mn')=\sum_{a\mid m,\ b\mid n'}\chi_4(ab)=\left(\sum_{a\mid m}\chi_4(a)\right)\left(\sum_{b\mid n'}\chi_4(b)\right)=g(m)g(n'),$$ so $g$ is multiplicative. [given, algebra]

2.1 The prime-power values of $g$ are immediate from the definition: $g(2^a)=1$ because only the divisor $1$ contributes; if $p\equiv1\pmod4$, then every divisor $p^j$ is $1$ modulo $4$, so $g(p^a)=a+1$; and if $q\equiv3\pmod4$, then the divisor residues alternate, so $$g(q^a)=1-1+1-\cdots=\begin{cases}1,&a\text{ even},\\0,&a\text{ odd}.\end{cases}$$ [step 1.1, given, algebra]

3.1 By [[lem-normalized-two-square-count-is-multiplicative]], the function $r_2/4$ is multiplicative with exactly the same prime-power values as in step 2.1. Hence [[thm-multiplicative-functions-determined-by-prime-powers]] gives $$\frac{r_2(n)}4=g(n)=\sum_{d\mid n}\chi_4(d).$$ [step 1.1, step 2.1, given]

4.1 Among the positive divisors of $n$, the even ones contribute $0$, the divisors congruent to $1$ modulo $4$ contribute $+1$, and the divisors congruent to $3$ modulo $4$ contribute $-1$. Thus $\sum_{d\mid n}\chi_4(d)=d_1(n)-d_3(n)$, and step 3.1 gives the claimed formula for $r_2(n)$. [step 3.1, given, algebra] ∎
