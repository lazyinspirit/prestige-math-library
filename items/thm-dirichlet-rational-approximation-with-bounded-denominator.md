---
dependency_level: 0
id: thm-dirichlet-rational-approximation-with-bounded-denominator
kind: theorem
title: "Dirichlet rational approximation with bounded denominator"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-coprime
  - def-common-divisor-and-gcd
  - def-divides-in-z
  - def-int-abs
  - lem-int-cancellation
  - lem-integer-part
  - lem-gcd-basic-values
  - lem-gcd-scaling
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Glyn Harman, Metric Number Theory, Chapter 2, Theorem 2.1"
      url: "https://djvu.online/file/DZdHsCBaK3OrN"
    - title: "Victor Beresnevich, Felipe Ramírez, and Sanju Velani, Metric Diophantine Approximation: Aspects of Recent Work, §2.1"
      url: "https://eprints.whiterose.ac.uk/id/eprint/113590/1/Metric_Diophantine_Approximation._Aspects_of_recent_work.pdf"
---

## Statement

For every real number $\alpha$ and every real $Q\ge1$, there are integers $a$ and $q$ with $q\ge1$, $q\le Q$, $\gcd(a,q)=1$, and

$$
\left|\alpha-\frac aq\right|\le\frac1{qQ}.
$$

## Statement references

[[def-coprime|Coprimality of integers]]

[Harman, *Metric Number Theory*, Chapter 2, Theorem 2.1](https://djvu.online/file/DZdHsCBaK3OrN)

[Beresnevich, Ramírez, and Velani, *Metric Diophantine Approximation: Aspects of Recent Work*, §2.1](https://eprints.whiterose.ac.uk/id/eprint/113590/1/Metric_Diophantine_Approximation._Aspects_of_recent_work.pdf)

## Facts & Assumptions

**Given:** A real number $\alpha$ and a real number $Q\ge1$.

[F1] For every real $x$ there is a unique integer $m$ with $m\le x<m+1$; hence $x=m+t$ for a unique $t\in[0,1)$. ([[lem-integer-part]])

[F2] Integers $u,v$ are coprime exactly when $\gcd(u,v)=1$. ([[def-coprime]])

[F3] If $(u,v)\ne(0,0)$, then $\gcd(u,v)\ge1$; in particular $\gcd(u,q)\ge1$ for $q\ge1$. ([[lem-gcd-basic-values]])

[F4] For integers $c,u,v$, $\gcd(cu,cv)=|c|\gcd(u,v)$. ([[lem-gcd-scaling]])

[F5] $\gcd(a,q)$ is a common divisor of $a$ and $q$, and $d\mid n$ means $n=dk$ for some integer $k$. ([[def-common-divisor-and-gcd]], [[def-divides-in-z]])

[F6] If $d\ne0$ and $dx=dy$ for integers $x,y$, then $x=y$. ([[lem-int-cancellation]])

[F7] If $d\ge0$ then $|d|=d$. ([[def-int-abs]])

## Proof

1.1 Let $N=\lfloor Q\rfloor$, where the floor is the integer in [F1]. Then $1\le N\le Q<N+1$. [given, F1, algebra]

1.2 For each integer $j$ with $0\le j\le N$, write $j\alpha=m_j+x_j$ with $m_j\in\mathbb Z$ and $x_j\in[0,1)$, using [F1]. [given, F1, construct]

2.1 If $x_i=x_j$ for some $0\le i<j\le N$, set $q=j-i$ and $a=m_j-m_i$. Then $1\le q\le N$ and $q\alpha=a$, so this pair has zero approximation error. [step 1.2, algebra]

2.2 Otherwise the $N+1$ points $x_0,\ldots,x_N$ are distinct modulo $1$. List them in circular order, including the final gap back to the first point; the $N+1$ positive gaps sum to $1$. At least one gap has length $\delta\le1/(N+1)$, since otherwise their sum would exceed $1$. [step 1.2, algebra, construct]

3.1 Let $x_i,x_j$ be the endpoints of that gap, with $i<j$, and set $q=j-i$. The difference $x_j-x_i$ is congruent modulo $1$ to either $\delta$ or $-\delta$; since $\delta\le1/(N+1)\le1/2$, its distance to the nearest integer is $\delta$. Since $q\alpha=(m_j-m_i)+(x_j-x_i)$, one of $m_j-m_i-1,m_j-m_i,m_j-m_i+1$ is a nearest integer to $q\alpha$; take it as $a$. Then $1\le q\le N$ and $|\alpha-a/q|\le1/(q(N+1))<1/(qQ)$. [step 1.2, step 2.2, algebra, construct]

4.1 In either branch let $d=\gcd(a,q)$. By [F3], $d\ge1$. [step 2.1, step 3.1, F3]

5.1 Since $d$ is a common divisor, [F5] gives $d\mid a$ and $d\mid q$; write $a=da'$ and $q=dq'$. Then $q'\ge1$ and $q'\le q\le Q$. Also [F7] gives $|d|=d$. [step 4.1, F5, F7, algebra]

6.1 By [F4], $d=\gcd(a,q)=\gcd(da',dq')=|d|\gcd(a',q')=d\gcd(a',q')$. Since $d\ne0$, [F6] cancels $d$ and gives $\gcd(a',q')=1$. [step 4.1, step 5.1, F4, F6, algebra]

7.1 By [F2], the reduced pair $(a',q')$ is coprime. [step 6.1, F2]

8.1 Reduction preserves the rational number, and $q'\le q$ gives $|\alpha-a'/q'|=|\alpha-a/q|\le1/(qQ)\le1/(q'Q)$. The pair $(a',q')$ therefore satisfies all the stated conclusions. [step 2.1, step 3.1, step 5.1, step 7.1, algebra] ∎
