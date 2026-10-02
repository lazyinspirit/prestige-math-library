---
id: thm-modular-simple-modules-of-sn-are-the-p-regular-specht-heads
kind: theorem
title: Modular simple modules of the symmetric group
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
landmark: false
proof_strategy: direct
deps:
  - thm-specht-radical-quotient-is-nonzero-exactly-for-p-regular-partitions
  - lem-nonzero-maps-between-specht-quotients-force-dominance
  - def-modular-specht-form-and-radical-quotient
  - def-splitting-p-modular-system-for-a-finite-group
  - def-module-radical-socle-head-and-loewy-series
  - def-p-regular-and-p-restricted-partitions
  - def-p-regular-and-p-singular-elements
  - def-permutation-support-disjoint-cycles-and-cycle-type
  - cor-order-of-a-permutation-from-its-cycle-lengths
  - cor-symmetric-conjugacy-classes-are-indexed-by-cycle-types
  - cor-number-of-simple-kg-modules-equals-number-of-p-regular-conjugacy-classes
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "G. D. James, The Representation Theory of the Symmetric Groups, Lecture Notes in Mathematics 682, §10.2, Lemma 10.2, Theorem 11.5 and Theorem 11.1, printed pp. 36-37 and 39-41"
      url: "https://www-users.cse.umn.edu/~webb/oldteaching/Year2010-11/the-representation-theory-of-the-symmetric-groups-SLN.pdf"
    - title: "Stacey Law, notes by Leonard Tomczak, Representation Theory of Symmetric Groups, Theorem 2.15 (Brauer) and Proposition 2.16, printed pp. 16-17"
      url: "https://math.berkeley.edu/~ltomczak/notes/Mich2022/RepSn_Notes.pdf"
    - title: "David A. Craven, Groups, Geometries and Representation Theory, §2.3, Theorem 2.5 and Corollary 2.11, printed pp. 24-26"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/groupsgeomreptheory2013.pdf"
verification:
  audited: 2026-10-02
  precheck: pass
---

## Statement

Let $p$ be a prime, let $n\ge0$, and let $(K,\mathcal O,k)$ be a splitting
$p$-modular system for $S_n$, so that $k$ is a splitting field of
characteristic $p$ for $S_n$ and all its subgroups
([[def-splitting-p-modular-system-for-a-finite-group]]). For a partition
$\lambda\vdash n$ let
$$S^\lambda_k=k\otimes_{\mathbb Z}S^\lambda_{\mathbb Z},\qquad R^\lambda=S^\lambda_k\cap(S^\lambda_k)^{\perp},\qquad D^\lambda=S^\lambda_k/R^\lambda$$
be the modular Specht quotient of
[[def-modular-specht-form-and-radical-quotient]], defined using the reduced
integral tabloid form on $M^\lambda_k$.

1. **Simple heads.** If $\lambda$ is $p$-regular, then $D^\lambda\ne0$ is
   self-dual and absolutely irreducible, and it is the simple head of
   $S^\lambda_k$, whose unique maximal submodule is
   $R^\lambda=\operatorname{rad}(S^\lambda_k)$. If $\lambda$ is not
   $p$-regular, then $D^\lambda=0$.
2. **Pairwise inequivalent.** If $\lambda,\mu\vdash n$ are both $p$-regular
   and $D^\lambda\cong D^\mu$ as $k[S_n]$-modules, then $\lambda=\mu$.
3. **Complete set.** Every simple $k[S_n]$-module is isomorphic to $D^\lambda$
   for exactly one $p$-regular partition $\lambda\vdash n$. Equivalently, as
   $\lambda$ ranges over the $p$-regular partitions of $n$, the modules
   $D^\lambda$ form a complete set of representatives of the isomorphism
   classes of simple $k[S_n]$-modules; in particular the number of simple
   $k[S_n]$-modules equals the number of $p$-regular partitions of $n$.

No absolutely irreducible module outside the family $\{D^\lambda\}$ is
constructed, and the statement asserts nothing about fields that are not
splitting fields for $S_n$. The proof uses no averaging and no division by a
group order, and the case $n=0$ and characteristic $2$ are included.

## Facts & Assumptions

**Given:** A prime $p$, an integer $n\ge0$, a splitting $p$-modular system $(K,\mathcal O,k)$ for $S_n$, and the objects above.

[F1] $\lambda\vdash n$ is $p$-regular if and only if $z_j(\lambda)<p$ for every $j\ge1$, where $z_j(\lambda)$ is the number of parts of $\lambda$ equal to $j$ ([[def-p-regular-and-p-restricted-partitions]]).

[F2] For every field $F$ of characteristic $p$ the form quotient $D^\lambda_F=S^\lambda_F/R^\lambda_F$ of [[def-modular-specht-form-and-radical-quotient]] satisfies: $D^\lambda_F=0$ if and only if $\lambda$ is not $p$-regular; and if $\lambda$ is $p$-regular then $D^\lambda_F\ne0$ is self-dual and absolutely irreducible, $R^\lambda_F$ is the unique maximal submodule of $S^\lambda_F$ and equals $\operatorname{rad}(S^\lambda_F)$, and $D^\lambda_F$ is the simple head of $S^\lambda_F$ ([[thm-specht-radical-quotient-is-nonzero-exactly-for-p-regular-partitions]], [[def-module-radical-socle-head-and-loewy-series]]).

[F3] If $F$ has characteristic $p$, $\lambda$ is $p$-regular, and $D^\lambda_F\cong D^\mu_F$ for some $\mu\vdash n$, then $\mu$ is $p$-regular and $\mu=\lambda$ ([[lem-nonzero-maps-between-specht-quotients-force-dominance]]).

[F4] An element $\sigma\in S_n$ is $p$-regular, i.e. $p\nmid|\sigma|$, if and only if no cycle length in its disjoint-cycle decomposition is divisible by $p$ ([[def-p-regular-and-p-singular-elements]], [[def-permutation-support-disjoint-cycles-and-cycle-type]]).

[F5] The order of a permutation is the least positive common multiple of its nontrivial cycle lengths, and $1$ for the identity ([[cor-order-of-a-permutation-from-its-cycle-lengths]]); as $p$ is prime, $p$ divides such a least common multiple if and only if it divides one of the cycle lengths.

[F6] Conjugacy classes of $S_n$ are in bijection with the tuples $(c_1,\dots,c_n)$ of nonnegative integers with $\sum_{k=1}^n kc_k=n$, the class of $\sigma$ corresponding to its cycle type $c_k=\#\{$orbits of $\sigma$ of size $k\}$ ([[cor-symmetric-conjugacy-classes-are-indexed-by-cycle-types]], [[def-permutation-support-disjoint-cycles-and-cycle-type]]).

[F7] For a finite group $G$ over a splitting field $k$ of characteristic $p$, the number of isomorphism classes of simple $kG$-modules equals the number of $p$-regular conjugacy classes of $G$ ([[cor-number-of-simple-kg-modules-equals-number-of-p-regular-conjugacy-classes]]).

## Proof

**Proof technique:** direct.

1.1 Fix a partition $\lambda\vdash n$. By [F2] applied to $F=k$: $D^\lambda=0$ if and only if $\lambda$ is not $p$-regular, and if $\lambda$ is $p$-regular then $D^\lambda\ne0$ is self-dual and absolutely irreducible, $R^\lambda=\operatorname{rad}(S^\lambda_k)$ is the unique maximal submodule of $S^\lambda_k$, and $D^\lambda$ is the simple head of $S^\lambda_k$. This is assertion 1. [given, F2]

1.2 By [F4] and [F5], $\sigma\in S_n$ is $p$-regular if and only if no cycle length of $\sigma$ is divisible by $p$; in the cycle-type notation of [F6] this says $c_k(\sigma)=0$ whenever $p\mid k$. [given, F4, F5, F6]

1.3 We prove the generating-function identity $$\prod_{j\ge1}\bigl(1+x^j+\cdots+x^{(p-1)j}\bigr) =\prod_{p\nmid j}\bigl(1-x^j\bigr)^{-1}$$ in the formal power series ring $\mathbb Z[\![x]\!]$, coefficient by coefficient. Fix $N\ge1$ and use $1+x^j+\cdots+x^{(p-1)j}=(1-x^{pj})(1-x^j)^{-1}$ in $\mathbb Z[x]$: $$\prod_{j=1}^{N}\bigl(1+x^j+\cdots+x^{(p-1)j}\bigr) =\Bigl(\prod_{\substack{m\le pN\\ p\mid m}}(1-x^m)\Bigr) \Bigl(\prod_{m\le N}(1-x^m)\Bigr)^{-1} =\prod_{\substack{N<m\le pN\\ p\mid m}}(1-x^m) \prod_{\substack{m\le N\\ p\nmid m}}(1-x^m)^{-1},$$ because the factors $(1-x^m)$ with $p\mid m$ and $m\le N$ occur in numerator and denominator and cancel. Every factor of the first product after the cancellation has exponent $m>N$, so the product is $1$ modulo $x^{N+1}$. Therefore the two sides of the displayed identity have equal coefficients of $x^n$ for every $n$: taking $N\ge n$ and reducing the finite truncations modulo $x^{n+1}$ shows that any coefficient of $x^n$ is a finite sum of $\pm1$'s on both sides. [given, algebra]

2.1 By [F6] the map sending a conjugacy class to the cycle type of any representative is a bijection onto the tuples $(c_1,\dots,c_n)$ with $\sum_k kc_k=n$, and by step 1.2 a class is $p$-regular exactly when its tuple satisfies $c_k=0$ for every $k$ divisible by $p$. Such tuples are exactly the partitions of $n$ all of whose parts are not divisible by $p$. Hence $$\#\{p\text{-regular classes of }S_n\} =\#\{\text{partitions of }n\text{ into parts not divisible by }p\}.$$ [given, F6, step 1.2]

2.2 The coefficient of $x^n$ in $\prod_{j\ge1}(1+x^j+\cdots+x^{(p-1)j})$ is the number of tuples $(e_j)_{j\ge1}$ with $0\le e_j\le p-1$ and $\sum_j je_j=n$; only $j\le n$ can contribute, so this is a finite count, and such a tuple records exactly the partition of $n$ in which the part $j$ occurs $e_j<p$ times. Hence this coefficient is the number of $p$-regular partitions of $n$. The coefficient of $x^n$ in $\prod_{p\nmid j}(1-x^j)^{-1}$ is likewise the number of partitions of $n$ all of whose parts are not divisible by $p$. By step 1.3 the two coefficients are equal, so $$\#\{p\text{-regular }\lambda\vdash n\} =\#\{\text{partitions of }n\text{ into parts not divisible by }p\}.$$ [given, F1, step 1.3, algebra]

2.3 Every $p$-regular $\lambda\vdash n$ gives a nonzero simple module $D^\lambda$ by step 1.1, and distinct $p$-regular partitions give non-isomorphic modules: if $D^\lambda\cong D^\mu$ with $\lambda,\mu$ $p$-regular, then $\lambda=\mu$ by [F3] applied to $F=k$. Hence $\lambda\mapsto[D^\lambda]$ is an injection from the set of $p$-regular partitions of $n$ into the set of isomorphism classes of simple $k[S_n]$-modules, and therefore the number of isomorphism classes of simple $k[S_n]$-modules is at least the number of $p$-regular partitions of $n$. [given, F3, step 1.1]

3.1 Combining steps 2.1 and 2.2 gives $$\#\{p\text{-regular }\lambda\vdash n\} =\#\{p\text{-regular classes of }S_n\},$$ and by [F7] applied to the finite group $S_n$ over its splitting field $k$ this common number equals the number of isomorphism classes of simple $k[S_n]$-modules. [given, F7, step 2.1, step 2.2]

4.1 By step 3.1 the number of isomorphism classes of simple $k[S_n]$-modules equals the number of $p$-regular partitions of $n$, while step 2.3 exhibits an injection between the same two finite sets. An injection between finite sets of equal cardinality is a bijection, so every simple $k[S_n]$-module is isomorphic to $D^\lambda$ for exactly one $p$-regular $\lambda\vdash n$. Combined with the self-duality and absolute irreducibility of step 1.1, this is assertions 2 and 3. [given, step 1.1, step 2.3, step 3.1]

5.1 Assertion 1 is step 1.1, assertion 2 is step 2.3, and assertion 3 is step 4.1; no part of the argument assumes more about $k$ than that it is a splitting field of characteristic $p$ for $S_n$ and its subgroups. For $n=0$ there is exactly one partition, $\varnothing$, of $0$, and it is $p$-regular by [F1]; $S_0$ has one element, of order $1$, so its unique class is $p$-regular and the counts $1=1=1$ hold; $D^\varnothing\cong k$ is the one simple $k[S_0]$-module. For $p=2$ the same count applies: the $2$-regular partitions of $n$ are those with distinct parts, the $2$-regular classes of $S_n$ are those with all cycle lengths odd, and both are counted by the same coefficient. All counting is coefficient-wise finite, and no step divides by $p$, by a group order, or averages over a group. [given, F1, F7, step 1.1, step 1.2, step 1.3, step 2.1, step 2.2, step 2.3, step 3.1, step 4.1] ∎
