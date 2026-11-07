---
id: lem-dense-function-has-positive-progression-count
kind: lemma
title: "A bounded dense function has positive normalized progression count"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 13
deps:
  - lem-varnavides-positive-density-of-progression-counts
  - thm-szemeredi-finite-density-arithmetic-progressions
  - def-finite-density-k-term-arithmetic-progression
  - def-relative-density-in-a-finite-group
  - def-integers-modulo-n
  - def-addition-and-multiplication-modulo-n
  - thm-integers-modulo-n-basic-algebra
  - thm-standard-representatives-modulo-n
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Ben Green and Terence Tao, The primes contain arbitrarily long arithmetic progressions, Annals of Mathematics 167 (2008)"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v167-n2-p03.pdf"
      locator: "§2, Proposition 2.3 and its Varnavides averaging argument; the finite-group function extension is proved locally here"
---

## Statement

For every integer $k\ge3$ and real number $0<\delta\le1$, there are constants $c(k,\delta)>0$ and $N_0(k,\delta)$ such that for every integer $N\ge N_0(k,\delta)$ and every function $g:\mathbb Z/N\mathbb Z\to[0,1]$ with $\mathbb E_x g(x)\ge\delta$, the normalized progression count

$$\Lambda_{k,N}(g)=\mathbb E_{x,r\in\mathbb Z/N\mathbb Z}\prod_{j=0}^{k-1}g(x+jr)$$

satisfies $\Lambda_{k,N}(g)\ge c(k,\delta)(1-1/(N\delta^2))$.

## Statement references

[[lem-varnavides-positive-density-of-progression-counts|Positive density forces a positive normalized progression count]]

[[thm-szemeredi-finite-density-arithmetic-progressions|Finite dense subsets of the integers contain long arithmetic progressions]]

[[def-finite-density-k-term-arithmetic-progression|A $k$-term arithmetic progression in an interval or cyclic group]]

[[def-relative-density-in-a-finite-group|Relative density in a finite group]]

[[def-integers-modulo-n|The congruence class $[a]_n$ and the quotient set $\mathbb{Z}/n$]]

[[def-addition-and-multiplication-modulo-n|Addition and multiplication on $\mathbb{Z}/n$ by $[a]_n+[b]_n=[a+b]_n$ and $[a]_n[b]_n=[ab]_n$]]

[[thm-integers-modulo-n-basic-algebra|For every natural $n$, $(\mathbb{Z}/n,+)$ is an abelian group, multiplication is a commutative monoid operation, and both distributive laws hold]]

[[thm-standard-representatives-modulo-n|For $n\ge 1$, every class in $\mathbb{Z}/n$ has one representative $r$ with $0\le r<n$, so $\lvert\mathbb{Z}/n\rvert=n$; while $\mathbb{Z}/0$ is in bijection with $\mathbb{Z}$]]

[Green and Tao, §2, Proposition 2.3](https://annals.math.princeton.edu/wp-content/uploads/annals-v167-n2-p03.pdf)

## Facts & Assumptions

**Given:** Fixed $k\ge3$, $0<\delta\le1$, an integer $N$, the cyclic group $G=\mathbb Z/N\mathbb Z$, and $g:G\to[0,1]$ with $\mathbb E g\ge\delta$.

[F1] There is an integer $M\ge\max\{k,2\}$ such that every subset of $[M]$ of density at least $\delta/4$ contains a proper $k$-term arithmetic progression; for $N\ge M(M+1)$ the Varnavides bound supplies at least $(\delta/2)N^2/(4M^3)$ ordered pairs $(x,r)$ with all terms in a set of density at least $\delta/2$ ([[lem-varnavides-positive-density-of-progression-counts]]).

[F2] The cyclic group has $N$ elements, addition is its group operation, and normalized averages are uniform over its elements ([[def-integers-modulo-n]], [[thm-standard-representatives-modulo-n]], [[thm-integers-modulo-n-basic-algebra]]).

## Proof

1.1 On the finite set of all subsets $A\subseteq G$, assign probability $\mathbb P(A)=\prod_{x\in A}g(x)\prod_{x\notin A}(1-g(x))$. The total mass is $\prod_{x\in G}(g(x)+(1-g(x)))=1$, and the membership indicators are independent Bernoulli variables of means $g(x)$. Thus $\mathbb E|A|=\sum_xg(x)\ge\delta N$ and $\operatorname{Var}(|A|)=\sum_xg(x)(1-g(x))\le N/4$. [given, F2, construct, algebra]

2.1 If $|A|<\delta N/2$, then $||A|-\mathbb E|A||\ge\delta N/2$. Chebyshev's inequality, obtained by bounding $(|A|-\mathbb E|A|)^2$ below by $(\delta N/2)^2$ on that event, gives $\mathbb P(|A|<\delta N/2)\le1/(N\delta^2)$. Therefore the event $|A|/N\ge\delta/2$ has probability at least $1-1/(N\delta^2)$. [given, step 1.1, algebra]

3.1 Choose $M$ as in [F1] and set $c(k,\delta)=\delta/(8M^3)$. For every random subset in the event from step 2.1, [F1] with density parameter $\delta/2$ gives at least $(\delta/2)N^2/(4M^3)=c(k,\delta)N^2$ ordered pairs $(x,r)$ whose $k$ terms belong to $A$ and are pairwise distinct. [given, F1, step 2.1]

4.1 Let $X(A)$ count those pairs from step 3.1. Since the $k$ entries are distinct, independence gives $\mathbb E X(A)=\sum_{(x,r)\,\mathrm{proper}}\prod_{j=0}^{k-1}g(x+jr)$. All summands in $\Lambda_{k,N}(g)$ are nonnegative, so $N^{-2}\mathbb E X(A)\le\Lambda_{k,N}(g)$. On the other hand, step 3.1 and the probability bound in step 2.1 give $N^{-2}\mathbb E X(A)\ge c(k,\delta)(1-1/(N\delta^2))$. Combining proves the claim. The probability space is finite, so no choice principle is used. [given, F2, step 2.1, step 3.1, algebra] ∎
