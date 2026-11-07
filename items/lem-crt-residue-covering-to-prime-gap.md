---
id: lem-crt-residue-covering-to-prime-gap
kind: lemma
title: "A prime residue cover gives a prime-free interval and a prime gap"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
proof_strategy: direct
dependency_level: 3
deps:
  - def-prime-gap-functions
  - def-prime-residue-covering-length
  - def-prime
  - def-divides-in-z
  - lem-divisibility-basic
  - thm-int-comm-ring
  - def-integers
  - def-int-operations
  - def-generated-and-principal-ideals
  - thm-generated-ideal-description-in-a-commutative-ring
  - def-sum-and-product-of-ideals
  - thm-int-ordered-ring
  - def-int-order
  - lem-divisor-bound
  - def-int-abs
  - lem-int-abs-properties
  - def-monoid-finite-product
  - def-prime-counting-function
  - lem-prime-not-dividing-is-coprime
  - thm-bezout-identity
  - thm-chinese-remainder-theorem-for-comaximal-ideals
  - thm-standard-representatives-modulo-n
  - thm-generalised-associativity
  - lem-prime-gap-functions-are-well-defined
  - lem-prime-residue-covering-length-is-finite
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Dimitris Koukoulopoulos, The Distribution of Prime Numbers, Chapter 29, Lemma 29.4"
      url: "https://dms.umontreal.ca/~koukoulo/documents/publications/primes.pdf"
    - title: "Kevin Ford, Ben Green, Sergei Konyagin, and Terence Tao, Large gaps between consecutive prime numbers, Lemma 1.1"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v183-n3-p04-p.pdf"
---

## Statement

For every real $z\ge2$, every integer $H\ge1$, and every residue assignment at cutoff $z$ that covers $[1,H]\cap\mathbb Z$, there are consecutive primes $p_n<p_{n+1}$ with $p_n\le2P(z)$ and $p_{n+1}-p_n\ge H+1$. In particular, for $H=Y(z)$ the maximal prime gap satisfies $G(2P(z))\ge Y(z)+1$.

## Statement references

[[def-prime-gap-functions]]

[[def-prime-residue-covering-length]]

[Koukoulopoulos, The Distribution of Prime Numbers, Lemma 29.4](https://dms.umontreal.ca/~koukoulo/documents/publications/primes.pdf)

[Ford, Green, Konyagin, and Tao, Large gaps between consecutive prime numbers, Lemma 1.1](https://annals.math.princeton.edu/wp-content/uploads/annals-v183-n3-p04-p.pdf)

## Facts & Assumptions

**Given:** A real $z\ge2$, an integer $H\ge1$, the primorial $P(z)$, and residues $0\le a_p<p$ covering every integer from $1$ to $H$.

[F1] $p_1=2$ and $p_n$ enumerates the positive primes in increasing order; $G(X)$ is the maximum of $p_{n+1}-p_n$ over $p_n\le X$ ([[def-prime-gap-functions]], [[lem-prime-gap-functions-are-well-defined]]).

[F2] For each real $z\ge2$, $P(z)$ is the finite product of the primes at most $z$, the finite prime list is justified by the residue-length finiteness lemma, and covering means each $1\le h\le H$ has some prime $p\le z$ with $p\mid h-a_p$ ([[def-prime-residue-covering-length]], [[lem-prime-residue-covering-length-is-finite]], [[def-prime-counting-function]], [[def-divides-in-z]]).

[F3] A prime is greater than $1$ and its only positive divisors are $1$ and itself ([[def-prime]]).

[F4] If $p$ is prime and $p\nmid q$, then $\gcd(p,q)=1$ ([[lem-prime-not-dividing-is-coprime]]).

[F5] If $\gcd(p,q)=1$, there are integers $u,v$ with $up+vq=1$ ([[thm-bezout-identity]]).

[F6] In the commutative ring $\mathbb Z$, the principal ideal $(p)$ is $\mathbb Zp$, and $I+J=\{i+j:i\in I,\ j\in J\}$ ([[thm-int-comm-ring]], [[def-generated-and-principal-ideals]], [[thm-generated-ideal-description-in-a-commutative-ring]], [[def-sum-and-product-of-ideals]]).

[F7] For pairwise comaximal ideals in a commutative ring, the canonical map into the product of quotient rings is surjective ([[thm-chinese-remainder-theorem-for-comaximal-ideals]]).

[F8] Every integer class modulo $M>0$ has a representative $r$ with $0\le r<M$ ([[thm-standard-representatives-modulo-n]]).

[F9] Each listed prime divides the finite product $P(z)$, and $P(z)>0$ because it is a product of positive primes ([[thm-generalised-associativity]], [[def-monoid-finite-product]], [[thm-int-ordered-ring]]).

[F10] If $d\mid a$ and $a\ne0$, then $|d|\le|a|$; for positive $p$ and $P(z)$ this gives $p\le P(z)$ ([[lem-divisor-bound]], [[def-int-abs]], [[lem-int-abs-properties]]).

[F11] Divisibility is transitive and closed under integer linear combinations ([[def-divides-in-z]], [[lem-divisibility-basic]]).

## Proof

1.1 List the primes at most $z$ as $p_1,\ldots,p_r$. For distinct $p_i,p_j$, if $p_i\mid p_j$ then $p_i>1$ is a positive divisor of the prime $p_j$, so [F3] forces $p_i=p_j$, a contradiction. Thus $p_i\nmid p_j$, and [F4] gives $\gcd(p_i,p_j)=1$. [F3, F4, given]

2.1 By [F5], choose $u,v\in\mathbb Z$ with $up_i+vp_j=1$. The two summands lie in $(p_i)$ and $(p_j)$ by [F6], so $(p_i)+(p_j)=\mathbb Z$. The ideals $(p_i)$ are therefore pairwise comaximal. [F5, F6, step 1.1]

3.1 Apply [F7] in the commutative ring $\mathbb Z$ to the quotient classes $-a_p+(p)$. Surjectivity gives $m_0\in\mathbb Z$ with $m_0+a_p\in(p)$, so $p\mid(m_0+a_p)$ for every $p\le z$ by [F2] and [F6]. [F2, F6, F7, step 2.1, construct]

4.1 Put $M=P(z)$. By [F8], choose $r\in\mathbb Z$ with $0\le r<M$ and $M\mid(m_0-r)$. Set $m=r+M$ if $r>0$, and $m=2M$ if $r=0$. Then $M<m\le2M$, $M\mid(m-m_0)$, and every $p\le z$ divides $M$ by [F9]; transitivity gives $p\mid(m-m_0)$ and hence $p\mid(m+a_p)$. [F8, F9, F11, step 3.1, algebra, choose]

5.1 For every integer $h$ with $1\le h\le H$, choose a covering prime $p$ with $p\mid(h-a_p)$. Step 4.1 and divisibility closure under addition give $p\mid(m+h)$. Since $p\mid M$, [F10] gives $p\le M<m<m+h$, so $1<p<m+h$ and the prime-divisor clause in [F3] implies $m+h$ is composite. Thus $m+1,\ldots,m+H$ contain no primes. [F2, F3, F9, F10, F11, step 4.1, construct]

6.1 Since $p_1=2\le z$, one has $M\ge2$ and therefore $m\ge M\ge2$. The sequence in [F1] enumerates all primes, there is an index $n$ with $p_n\le m<p_{n+1}$. The prime-free interval in step 5.1 forces $p_{n+1}\ge m+H+1$, so $p_{n+1}-p_n\ge H+1$. Also $p_n\le m\le2P(z)$, and the definition of $G$ in [F1] gives $G(2P(z))\ge H+1$. For the final specialization, $Y(z)\ge1$: since $2\le z$, set $a_2=1$ and all other residues to $0$, which covers $1$. Thus the case $H=Y(z)$ meets the required positive-length hypothesis. [F1, F2, F9, step 5.1, algebra] ∎

## CRT diagram

The horizontal map records the residue class modulo each prime ideal. The vertical map reduces modulo the primorial ideal, and the diagonal map is the induced collection of reductions; the triangle commutes because every prime $p\le z$ divides $P(z)$. This diagram illustrates the map used in step 3.1; the proof above relies on the stated CRT theorem and integer congruences, not on the diagram.

```tikzcd
\mathbb{Z} \arrow[r, "\rho"] \arrow[d, two heads, "\bmod P(z)"'] &
\prod_{p\le z}\mathbb{Z}/(p)\\
\mathbb{Z}/(P(z)) \arrow[ur, "\overline{\rho}"'] &
```
