---
id: lem-efficient-prime-field-for-a-polynomial-soundness-budget
kind: lemma
title: "A polynomial-size prime field meets the soundness budget"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-prime, thm-standard-representatives-modulo-n, thm-z-mod-p-is-a-field, thm-bertrands-postulate]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  scraped: []
  references:
    - title: "Arora and Barak, Computational Complexity: A Modern Approach, §8.5.2 (prime p in (2^n, 2^{2n}]) and §8.5.3, author-hosted draft"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
    - title: "A. Shen, IP = PSPACE: Simplified Proof, JACM 39(4) 1992, pp. 878–880 (\"p can be chosen by P or V because primality testing is trivial for numbers of this size\")"
      url: "https://users.cs.fiu.edu/~giri/teach/5420/f01/IP_Pspace2.pdf"
---

## Statement

Let $T\ge 1$ and $D\ge 1$ be integers and put $N:=\max\{2,\,12TD+1\}$. Then:

1. **(Existence and size.)** There is a prime $p$ with $N<p<2N$, and every such prime satisfies $p>12TD$ and $p<2N\le\max\{4,\,24TD+2\}$. Hence $p=O(TD)$ and $\lceil\log_2 p\rceil=O(\log(TD))$.
2. **(Deterministic search.)** Call an integer $m$ with $N<m<2N$ *admissible* when no integer $d$ with $2\le d\le N$ divides $m$. The first admissible $m$ in the order $N+1,N+2,\dots,2N-1$ is prime; a search that tests every candidate against every such $d$ performs at most $N^2$ trial divisions and $O(N^2\log^2 N)$ bit operations, using no randomness and no primality test.
3. **(Residue arithmetic.)** In $F:=\mathbb Z/p$ addition and multiplication make $F$ a field in which each class has exactly one representative in $\{0,1,\dots,p-1\}$; representatives are stored in $\lceil\log_2 p\rceil$ bits, adding or subtracting two representatives costs $O(\log p)$ bit operations and multiplying them costs $O(\log^2 p)$ bit operations. Consequently Horner evaluation of a polynomial of degree at most $D$ at a point of $F$ costs $O(D)$ operations in $F$, hence $O(D\log^2 p)$ bit operations.
4. **(Sampler with point mass at most $2/p$.)** Let $k:=2\lceil\log_2 p\rceil$, let $U$ be uniform on $\{0,1\}^k$ and let $r$ be the integer $U\in\{0,\dots,2^k-1\}$ reduced modulo $p$. Then $\Pr[r=a]\le 2/p$ for each $a\in\{0,\dots,p-1\}$, and $\Pr[r\in S]\le 2|S|/p$ for every set $S$ of residues.

## Facts & Assumptions

**Given:** Integers $T\ge 1$ and $D\ge 1$, $N=\max\{2,12TD+1\}$, and a uniform string $U\in\{0,1\}^k$.

[A1] For every integer $n>1$ there is a prime $p$ with $n<p<2n$ ([[thm-bertrands-postulate]]).

[A2] An integer $p$ is prime when $p>1$ and every positive divisor $d$ of $p$ satisfies $d=1$ or $d=p$; an integer $n>1$ that is not prime is composite, and then $n$ has a positive divisor $d$ with $d\ne1$ and $d\ne n$ ([[def-prime]]).

[A3] For every prime $p$ the operations of addition and multiplication on $\mathbb Z/p$ make it a field ([[thm-z-mod-p-is-a-field]]).

[A4] For every positive integer $n$, each class in $\mathbb Z/n$ contains exactly one integer $r$ with $0\le r<n$, and $|\mathbb Z/n|=n$ ([[thm-standard-representatives-modulo-n]]).

## Proof

**Proof technique:** direct.

1.1 Since $T,D\ge1$ we have $N\ge\max\{2,13\}=13>1$, so [A1] with $n:=N$ yields a prime $p$ with $N<p<2N$. Writing $N=\max\{2,12TD+1\}$ gives $p>N\ge12TD+1>12TD$ in both cases of the maximum, and $p<2N\le\max\{4,24TD+2\}$; since $T,D\ge1$, also $24TD+2\le26TD$, so $p=O(TD)$ and $\lceil\log_2p\rceil\le\log_2p+1=O(\log(TD))$. This is claim (1). [A1, given, algebra]

1.2 Let $m$ be an integer with $1<m<2N$ that is not prime, so $m$ is composite and has a positive divisor $d_0$ with $d_0\ne1$ and $d_0\ne m$ by [A2]. Write $m=d_0m_1$; the divisor $d:=d_0$ can be replaced by the smaller of the pair $\{d_0,m_1\}$, so we may take $2\le d\le\sqrt m$. From $m<2N\le N^2$, valid because $N\ge2$, we get $\sqrt m<N$, hence $d\le N$. Therefore every non-prime $m$ with $1<m<2N$ is inadmissible: admissibility forces primality. [A2, given, algebra]

1.3 By [A3] the operations of $\mathbb Z/p$ make it a field, and $p>N\ge2$ is a positive integer, so by [A4] applied to $n:=p$ every class in $\mathbb Z/p$ has exactly one representative in $\{0,1,\dots,p-1\}$ and the field has exactly $p$ elements. Representatives are integers below $2N$, hence below $2^{1+\lceil\log_2N\rceil}$: each occupies at most $1+\lceil\log_2N\rceil=O(\log N)$ bits, and schoolbook add/subtract and multiply on such integers cost $O(\log N)$ and $O(\log^2N)$ bit operations. [A3, A4, algebra]

1.4 Let $a\in\{0,\dots,p-1\}$ and count the strings of $\{0,1\}^k$ whose integer value $U$ satisfies $U\equiv a\pmod p$; these are exactly the integers in the arithmetic progression $a,a+p,a+2p,\dots$ below $2^k$, so there are at most $\lceil 2^k/p\rceil\le 2^k/p+1$ of them. Because $k=2\lceil\log_2p\rceil$ gives $2^k\ge p^2$, division by $2^k$ yields $\Pr[r=a]\le1/p+1/p^2\le2/p$, the last step using $p\ge2$. [A4, given, algebra]

2.1 Run the search of claim (2). By step 1.1 the prime $p$ of the interval $(N,2N)$ is one of the candidates $N+1,\dots,2N-1$, and it is admissible: a divisor $d$ of $p$ with $2\le d\le N$ would satisfy $d\ne p$ because $d\le N<p$, and $d\ne1$, contradicting primality. So the scan halts, and by step 1.2 its first admissible candidate is prime. There are at most $N-1$ candidates and at most $N-1$ divisors tested for each, so at most $N^2$ trial divisions are performed, each on integers below $2N$ with $O(\log N)$ bits, for $O(N^2\log^2N)$ bit operations in total. This is claim (2). [step 1.1, step 1.2, algebra]

2.2 By step 1.3 each class of $\mathbb Z/p$ is represented by a unique integer in $\{0,\dots,p-1\}$ of $O(\log N)=O(\log(TD))$ bits, so one field operation costs $O(\log^2p)$ bit operations: $O(\log p)$ for addition or subtraction of representatives and $O(\log^2p)$ for a schoolbook product followed by reduction modulo $p$. Horner's rule evaluates a polynomial of degree at most $D$ with $D$ multiplications and $D$ additions of representatives, that is $O(D)$ field operations or $O(D\log^2p)$ bit operations. Since $p<2N\le\max\{4,24TD+2\}$ by step 1.1, this is $O(D\log^2(TD))$ bit operations. This is claim (3). [step 1.1, step 1.3, algebra]

2.3 For a set $S$ of residues, $\Pr[r\in S]=\sum_{a\in S}\Pr[r=a]\le2|S|/p$ by step 1.4, the residues outside $\{0,\dots,p-1\}$ being represented by their unique representative in that range. With $|S|=1$ this reduces to step 1.4, and with $S=\varnothing$ the bound reads $0\le0$. This is claim (4). [step 1.4, algebra]

3.1 Claims (1)–(4) are steps 1.1, 2.1, 2.2 and 2.3, so for all integers $T,D\ge1$ the interval $(N,2N)$ contains a prime $p$ above the budget $12TD$, findable deterministically in $O(N^2\log^2N)$ bit operations, whose residue field admits $O(\log^2p)$-cost arithmetic and a $2/p$-point-mass sampler. Every bound is polynomial in $T$ and $D$, which is the content of the statement. ∎ [step 1.1, step 2.1, step 2.2, step 2.3]
