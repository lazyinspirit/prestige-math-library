---
id: thm-sum-of-totients-over-divisors
kind: theorem
title: "For every positive integer $n$, $\\sum_{d\\mid n,\\ d>0}\\varphi(d)=n$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-unit-group-modulo-n-and-euler-totient, thm-unit-criterion-modulo-n, thm-standard-representatives-modulo-n, def-common-divisor-and-gcd, def-divides-in-z, lem-divisor-bound, def-sum-over-a-finite-index-set, thm-sum-rule, thm-subset-of-a-finite-set, lem-gcd-scaling, lem-int-cancellation]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Mathematics LibreTexts, Euler's phi Function"
      url: "https://math.libretexts.org/Bookshelves/Combinatorics_and_Discrete_Mathematics/Yet_Another_Introductory_Number_Theory_Textbook_-_Cryptology_Emphasis_%28Poritz%29/02%3A_Congruences/2.05%3A_Euler%27s__%CF%95__Function"
    - title: "J. J. P. Veerman, sum of Euler phi over divisors"
      url: "https://math.libretexts.org/Bookshelves/Combinatorics_and_Discrete_Mathematics/An_Introduction_to_Number_Theory_%28Veerman%29/04%3A_Number_Theoretic_Functions/4.04%3A_New_Page"
pipeline_run: null
---

## Statement

For every positive integer $n$,

$$\sum_{\substack{d\mid n\\d>0}}\varphi(d)=n.$$

The sum is over the finite set of positive divisors of $n$
([[def-sum-over-a-finite-index-set]]).

## Facts & Assumptions

**Given:** A positive integer $n$, its standard representative set $X:=\{a\in\mathbb Z:0\le a<n\}$, and its positive-divisor set $D:=\{d\in\mathbb Z:d\mid n,\ d>0\}$.

[L1] The set $X$ has cardinality $n$, and the units modulo a positive $d$ are represented exactly once by the $u$ with $0\le u<d$ and $\gcd(u,d)=1$; their number is $\varphi(d)$ ([[thm-standard-representatives-modulo-n]], [[thm-unit-criterion-modulo-n]], [[def-unit-group-modulo-n-and-euler-totient]]).

[L2] The gcd is a nonnegative common divisor, and $\gcd(ca,cb)=|c|\gcd(a,b)$ ([[def-common-divisor-and-gcd]], [[lem-gcd-scaling]]).

[L3] A divisor of a nonzero integer has bounded absolute value; hence $D$ is a subset of a finite integer interval and is finite ([[lem-divisor-bound]], [[thm-subset-of-a-finite-set]]).

[L4] A finite set partitioned into finite blocks has cardinality equal to the sum of their cardinalities ([[thm-sum-rule]], [[def-sum-over-a-finite-index-set]]).

[L5] Integer divisibility gives quotient witnesses, and nonzero integer factors cancel ([[def-divides-in-z]], [[lem-int-cancellation]]).

## Proof

**Proof technique:** direct.

1.1 For each $d\in D$, put $X_d:=\{a\in X:n/\gcd(a,n)=d\}$. Every $a\in X$ lies in exactly one such block: its positive gcd $g=\gcd(a,n)$ divides $n$, and $d=n/g$ is a positive divisor of $n$. Thus the $X_d$ form a partition of $X$. [L2, L5]

1.2 Fix $d\in D$ and put $c:=n/d>0$. Multiplication by $c$ sends each standard unit representative $u$ modulo $d$ to $a:=cu\in X$, because $0\le u<d$ gives $0\le cu<n$; moreover $\gcd(a,n)=\gcd(cu,cd)=c\gcd(u,d)=c$, so $n/\gcd(a,n)=d$ and $a\in X_d$. [L1, L2]

1.3 Conversely, if $a\in X_d$, then $\gcd(a,n)=n/d=c$, so $c\mid a$ and $a=cu$ for a unique integer $u$. The bounds on $a$ give $0\le u<d$, and $c=c\gcd(u,d)$ by [L2], so cancellation gives $\gcd(u,d)=1$. Thus $u$ is a standard unit representative modulo $d$. [L1, L2, L5]

2.1 Steps 1.2 and 1.3 are inverse constructions, so $|X_d|=\varphi(d)$ for every $d\in D$. [step 1.2, step 1.3, L1]

3.1 The index set $D$ is finite by [L3]. Applying the sum rule to the partition in step 1.1 and using step 2.1 gives $n=|X|=\sum_{d\in D}|X_d|=\sum_{d\in D}\varphi(d)$. [step 1.1, step 2.1, L1, L3, L4] ∎

## Remarks

- The partition by $n/\gcd(a,n)$ is an incidence identity: each residue is assigned to one positive divisor, and the block over $d$ is counted by the units modulo $d$.
