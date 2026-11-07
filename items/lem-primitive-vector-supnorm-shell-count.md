---
id: lem-primitive-vector-supnorm-shell-count
kind: lemma
title: "Lower bounds for primitive vectors on sup-norm shells"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-gcd-of-finite-integer-tuple
  - def-number-theoretic-mobius-function
  - def-unit-group-modulo-n-and-euler-totient
  - thm-standard-representatives-modulo-n
  - thm-unit-criterion-modulo-n
  - thm-fundamental-theorem-of-arithmetic
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Victor Beresnevich and Sanju Velani, Classical Metric Diophantine Approximation Revisited: the Khintchine–Groshev Theorem, §4"
      url: "https://arxiv.org/pdf/0811.0809v3"
    - title: "Glyn Harman, Metric Number Theory, Chapter 4"
      url: "https://djvu.online/file/DZdHsCBaK3OrN"
---

## Statement

For integers $n\ge2$ and $r\ge1$, let

$$P_n(r):=\{q\in\mathbb Z^n:\ \|q\|_\infty=r,\ \gcd(q_1,\ldots,q_n)=1\},$$

where $\|q\|_\infty=\max_i|q_i|$ and the tuple gcd is nonnegative. Write $\varphi(r)$ for the number of invertible residue classes modulo $r$, with $\varphi(1)=1$. Then $|P_2(r)|=8\varphi(r)$ for every $r\ge1$, and for every $n\ge3$,

$$|P_n(r)|\ge \frac12 r^{n-1}.$$

## Statement references

[Beresnevich and Velani, *Classical Metric Diophantine Approximation Revisited*, §4](https://arxiv.org/pdf/0811.0809v3)

[Harman, *Metric Number Theory*, Chapter 4](https://djvu.online/file/DZdHsCBaK3OrN)

## Facts & Assumptions

**Given:** Integers $n\ge2$, $r\ge1$, the sup norm, and the tuple-gcd convention.

[F1] The tuple gcd is divisible by every common divisor and is itself a common divisor. ([[def-gcd-of-finite-integer-tuple]])

[F2] Every integer $r>1$ has a prime factorization; an integer is relatively prime to $r$ exactly when no prime divisor of $r$ divides it. ([[thm-fundamental-theorem-of-arithmetic]], [[thm-unit-criterion-modulo-n]])

[F3] Standard representatives give one representative of each residue class modulo $r$; the Möbius divisor sum over squarefree divisors expands as a product over the distinct prime divisors. ([[thm-standard-representatives-modulo-n]], [[def-number-theoretic-mobius-function]], [[thm-fundamental-theorem-of-arithmetic]])

[F4] The number of unit residue classes modulo $r$ is $\varphi(r)$. ([[def-unit-group-modulo-n-and-euler-totient]])

## Proof




1.1 Suppose $n=2$ and $r\ge2$. On the face $q_1=r$, the admissible second coordinates are the integers $y$ with $-r\le y\le r$ and $\gcd(r,y)=1$. The endpoints $y=\pm r$ are not admissible. Each unit residue class modulo $r$ has exactly two representatives among $-r+1,\ldots,r-1$, so [F2]–[F4] give $2\varphi(r)$ admissible points on that face. The same count holds on each of the four faces. Their intersections are the corners $(\pm r,\pm r)$, which have gcd $r>1$ and are excluded by [F1], so the face counts are disjoint and sum to $8\varphi(r)$. [given, F1, F2, F3, F4, algebra]

1.2 If $n=2$ and $r=1$, the shell has the eight vectors with coordinates in $\{-1,0,1\}$ and at least one coordinate of absolute value $1$; all are primitive, so its size is $8=8\varphi(1)$. [given, algebra]

1.3 Suppose $n\ge3$. Restrict to vectors $q=(r,a_2,\ldots,a_n)$ with $0\le a_i<r$. For each prime $p\mid r$, primitivity requires that not all $a_2,\ldots,a_n$ be divisible by $p$. Möbius inclusion-exclusion over the prime divisors of $r$ counts the admissible vectors as $\displaystyle \sum_{d\mid r}\mu(d)\left(\frac rd\right)^{n-1} =r^{n-1}\prod_{p\mid r}\left(1-p^{-(n-1)}\right).$ Indeed, for a squarefree divisor $d$, exactly $(r/d)^{n-1}$ vectors have every coordinate divisible by $d$; nonsquarefree divisors contribute zero, and expansion over prime divisors gives the product by [F3]. These vectors lie on the shell and are primitive by [F1]–[F2]. [given, F1, F2, F3, algebra]

2.1 Since $n-1\ge2$, every factor in the product in step 1.3 is at least $1-p^{-2}$. For any finite set of primes, the product of these factors is at least $\prod_{k=2}^{R}(1-k^{-2})=(R+1)/(2R)>1/2$, where $R$ is at least its largest prime; the identity follows by writing $1-k^{-2}=(k-1)(k+1)/k^2$ and canceling. If $r=1$, the product is empty and equals $1$. Thus the restricted face alone contains at least $r^{n-1}/2$ primitive vectors, proving the bound. [given, step 1.3, algebra] ∎
