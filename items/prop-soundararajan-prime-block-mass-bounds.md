---
id: prop-soundararajan-prime-block-mass-bounds
kind: proposition
title: "Prime-block mass bounds for a Hecke-multiplicative sequence"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - def-hecke-multiplicative-maass-eigenvalue-sequence
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "K. Soundararajan, Quantum Unique Ergodicity for the modular surface"
      url: "https://arxiv.org/pdf/0901.4060v1"
      locator: "§3, Proposition 3.3 and its proof, printed pp. 6–7."
    - title: "Manfred Einsiedler, Arithmetic Quantum Unique Ergodicity, Arizona Winter School lecture notes"
      url: "https://swc-math.github.io/aws/2010/2010EinsiedlerLectureNotes1.pdf"
      locator: "§2, discussion of Hecke eigenvalues, pp. 11–13."
---

## Statement

Let $f:\mathbb N\to\mathbb C$ be Hecke-multiplicative, let $x\ge y\ge1$, and let $P$ be a finite set of primes all at most $\sqrt y$. Partition $P=P_0\sqcup P_1\sqcup\cdots\sqcup P_J$ so that $|f(p)|\le1/2$ for $p\in P_0$ and $2^{j-2}<|f(p)|\le2^{j-1}$ for $p\in P_j$, $1\le j\le J$. For a positive integer $k$, let $N_0(k)$ be the set of positive integers divisible by at most $k$ distinct prime squares $p^2$ with $p\in P_0$, and let $N_j(k)$ be the set of positive integers divisible by at most $k$ distinct primes from $P_j$. Put $S_x=\sum_{n\le x}|f(n)|^2$. If $2\le k\le |P_0|/4$, then
$$\sum_{\substack{n\le x/y\\n\in N_0(k)}}|f(n)|^2\le\frac{4k}{|P_0|}S_x.$$
If $1\le j\le J$ and $1\le k\le |P_j|/4-1$, then
$$\sum_{\substack{n\le x/y\\n\in N_j(k)}}|f(n)|^2
\le\frac{2^{12}k^2}{2^{4j}|P_j|^2}S_x.$$

## Statement references

[K. Soundararajan, Quantum Unique Ergodicity for the modular surface, §3, Proposition 3.3, printed pp. 6–7.](https://arxiv.org/pdf/0901.4060v1)

[Manfred Einsiedler, Arithmetic Quantum Unique Ergodicity, §2, pp. 11–13.](https://swc-math.github.io/aws/2010/2010EinsiedlerLectureNotes1.pdf)

## Facts & Assumptions

**Given:** The Hecke-multiplicative sequence and the finite prime partition in the Statement.

[F1] $f(1)=1$ and $f(m)f(n)=\sum_{d\mid\gcd(m,n)}f(mn/d^2)$ for all positive $m,n$ ([[def-hecke-multiplicative-maass-eigenvalue-sequence]]).

## Proof

1.1 For $p\in P_0$, [F1] gives $f(p^2)=f(p)^2-1$, so $|f(p^2)|\ge1-|f(p)|^2\ge3/4$. Fix $n\in N_0(k)$. At least $|P_0|-k$ primes in $P_0$ satisfy $p^2\nmid n$, and hence
$$\sum_{\substack{p\in P_0\\p^2\nmid n}}|f(p^2)|^2\ge\frac9{16}(|P_0|-k).$$
For every such $p$, $|f(n)f(p^2)|\le|f(np^2)|$. If $p\nmid n$, coprime multiplicativity gives equality. If $p\mid n$ but $p^2\nmid n$, write $n=pm$ with $p\nmid m$; then coprime multiplicativity reduces the inequality to $|f(p)|\,|f(p^2)|\le|f(p^3)|$. From [F1], $f(p^3)=f(p)(f(p)^2-2)$ and $f(p^2)=f(p)^2-1$; with $w=f(p)^2$, $|w|\le1/4$ and $|w-2|^2-|w-1|^2=3-2\operatorname{Re}w>0$, proving it. [F1, given, algebra]

1.2 Sum the inequality of step 1.1 over $n\le x/y$, $n\in N_0(k)$, and the eligible primes $p$. Since $p^2\le y$, every resulting $m=np^2$ is at most $x$. Also $m$ is divisible by at most $k+1$ distinct prime squares from $P_0$, so it arises from at most $k+1$ pairs $(n,p)$. Therefore
$$\frac9{16}(|P_0|-k)\sum_{\substack{n\le x/y\\n\in N_0(k)}}|f(n)|^2
\le(k+1)S_x.$$
When $k\le|P_0|/4$, the coefficient on the left is at least $27|P_0|/64$. Since $k\ge2$ gives $64(k+1)/27\le4k$, the first bound follows. [step 1.1, given, cases, algebra]

2.1 Fix $j\ge1$ and write $q=|P_j|$. If $n\in N_j(k)$, at least $q-k$ primes in $P_j$ do not divide $n$. For any two distinct such primes $p_1,p_2$, coprime multiplicativity gives
$$|f(p_1p_2)|^2=|f(p_1)|^2|f(p_2)|^2>2^{4j-8}.$$
The condition $k\le q/4-1$ implies $\binom{q-k}{2}\ge9q^2/32$. Thus the sum of $|f(p_1p_2)|^2$ over the eligible pairs is at least $9\cdot2^{4j-13}q^2$. [F1, given, algebra, cases]

2.2 Multiply the pair sum in step 2.1 by $|f(n)|^2$ and sum over $n\le x/y$ in $N_j(k)$. Each output $m=np_1p_2$ is at most $x$, because $p_1p_2\le y$. It has at most $k+2$ distinct prime divisors in $P_j$, so it occurs for at most $\binom{k+2}{2}\le3k^2$ pairs. Consequently
$$9\cdot2^{4j-13}q^2\sum_{\substack{n\le x/y\\n\in N_j(k)}}|f(n)|^2
\le3k^2S_x.$$
Rearranging yields a coefficient at most $2^{12}k^2/(2^{4j}q^2)$, since $3/(9\cdot2^{4j-13})\le2^{12}/2^{4j}$. This is the second bound. [step 2.1, given, cases, algebra] ∎
