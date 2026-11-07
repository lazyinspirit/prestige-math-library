---
id: thm-finite-residue-class-sieve-correctness
kind: theorem
title: "Correctness of the finite residue-class sieve"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - alg-finite-residue-class-sieve
  - def-sifted-sum-and-sieve-density-product
  - thm-induction-principle
  - def-prime
  - thm-canonical-prime-factorisation
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Kiran Kedlaya, Notes on Analytic Number Theory, Chapter 12, §12.1"
      url: "https://kskedlaya.org/ant/chap-brun.html"
    - title: "D. R. Heath-Brown, Lectures on sieves, §1"
      url: "https://arxiv.org/pdf/math/0209360"
verification:
  precheck: pass
---

## Statement

Run the finite residue-class sieve on an interval $\{1,\ldots,N\}$ with an
integer cutoff $z\ge2$, nonnegative weights $a(n)$, and forbidden residue sets
$\Omega_p\subseteq\mathbb Z/p\mathbb Z$ for each prime $p<z$. The returned set
is exactly

$$C=\{n\in\{1,\ldots,N\}:[n]_p\notin\Omega_p\text{ for every prime }p<z\}.$$

For each squarefree divisor $d$ of the product of those primes, the returned
count is

$$A_d=\sum_{\substack{1\le n\le N\\[n]_p\in\Omega_p\text{ for every }p\mid d}}a(n),$$

and the returned total weight is the sifted sum $S(A,z)$.

The procedure terminates for every such input. For a complexity bound, let
$r$ be the number of primes below $z$. Count each integer comparison,
divisibility test, modular reduction, membership query to a given set
$\Omega_p$, arithmetic operation, list operation, and Boolean or table update
as one unit; store the survivor set by $N$ Boolean flags. In this unit-cost
model, the operation count is

$$O\!\left(z^2+(N+1)(r+1)2^r\right).$$

This is not a bit-complexity bound.

## Statement references

[Kedlaya, *Notes on Analytic Number Theory*, Ch. 12, §12.1](https://kskedlaya.org/ant/chap-brun.html)

[Heath-Brown, *Lectures on sieves*, §1](https://arxiv.org/pdf/math/0209360)

## Facts & Assumptions

**Given:** $N\ge1$, an integer cutoff $z\ge2$, weights $a(n)\ge0$, and the
finite family of forbidden residue sets described in the Statement; the prime
list $p_0,\ldots,p_{r-1}$ constructed by the procedure; and its divisor list
$\mathcal D$.

[F1] [[alg-finite-residue-class-sieve]]: the procedure tests all possible
divisors when identifying primes below $z$, builds the divisor list by
successive doublings, scans each interval index against every sieve prime,
updates its survivor flag, and accumulates the local counts.

[F2] [[def-sifted-sum-and-sieve-density-product]]: $S(A,z)$ is the total
weight of indices avoiding all forbidden residue classes, and $A_d$ counts the
weight satisfying all local conditions for $p\mid d$.

[F3] [[def-prime]]: an integer $m>1$ is prime exactly when no integer $d$ with
$1<d<m$ divides $m$.

[F4] [[thm-canonical-prime-factorisation]]: the subset products of the distinct
primes below $z$ are precisely the squarefree divisors of their product, each
appearing once.

[F5] [[thm-induction-principle]]: an invariant true at $0$ and preserved at
each successor holds at every natural number.

## Proof

**Given:** The input data and algorithm in Facts & Assumptions.

1.1 Termination. Step 1 tests only the finitely many pairs $(m,d)$ with
$2\le m<z$ and $2\le d<m$. Step 2 has $r$ stages, each forming a finite
list. Step 3 has $N$ iterations; each tests the finite prime list and scans the
finite divisor list, with at most $r$ local tests per divisor. Step 4 and the
returned sums are finite. Therefore the procedure terminates. [F1, given]

1.2 Complexity. Step 1 performs at most
$\sum_{m=2}^{z-1}(m-2)=O(z^2)$ divisibility tests. Step 2 starts with one
entry and doubles the list length at each stage, so induction on $i$ gives
$2^i$ entries after stage $i$ and total list work $O(2^r)$. Each of the $N$
iterations in step 3 makes $r$ prime tests and at most $r$ tests for each of
the $2^r$ divisor entries, with at most $2^r$ count updates. Step 4 uses at most
$N$ flag reads and additions. Under the stated cost model, the total is
$O(z^2+(N+1)(r+1)2^r)$. [F1, given]

2.1 In step 1, each integer $m$ with $2\le m<z$ is retained exactly when it
has no divisor $d$ with $1<d<m$. By [F3], the resulting list is exactly the
primes below $z$, in increasing order. [given, F1, F3]

2.2 After $i$ stages of step 2, the current list contains exactly the products
of subsets of $p_0,\ldots,p_{i-1}$, each once. This holds for $i=0$, when the
only entry is the empty product $1$. At the next stage the old entries encode
subsets omitting $p_i$, and the appended entries encode subsets including
$p_i$. These entries have no repetitions within or between the two lists by
uniqueness of prime factorisation [F4]. Induction gives all subset products
exactly once, which by [F4] are exactly the squarefree divisors of $P(z)$.
The list length doubles at each stage, so $|\mathcal D|=2^r$. [F1, F4, F5]

3.1 Outer-index invariant. After the first $k$ indices have been processed,
where $0\le k\le N$, the true flags are exactly those $m\le k$ that avoid
every forbidden class, all flags for $m>k$ remain true, and for every
$d\in\mathcal D$ the table entry is
$$A_d^{(k)}=\sum_{\substack{1\le m\le k\\[m]_p\in\Omega_p\text{ for every }p\mid d}}a(m).$$
At $k=0$ this holds because all flags start true and all entries start at zero.
Suppose it holds after $k<N$ indices. The next iteration tests every sieve
prime for $n=k+1$, setting its flag false exactly when at least one forbidden
residue occurs. For each $d$, it adds $a(n)$ exactly when all conditions for
$p\mid d$ hold. Thus the invariant holds at $k+1$. By [F5] it holds after all
$N$ indices. [given, F1, F5]

4.1 At $k=N$, step 3.1 gives exactly the stated set $C$ and all the stated
counts $A_d$. The sum of the weights over $C$ is $S(A,z)$ by [F2]. Together
with steps 1.1 and 1.2, this proves termination, the complexity bound, and all
correctness claims. [step 1.1, step 1.2, step 2.1, step 2.2, step 3.1, F2] ∎
