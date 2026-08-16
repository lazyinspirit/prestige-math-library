---
id: thm-euclidean-algorithm-for-jacobi-symbol
kind: theorem
title: "The Euclidean algorithm computes the Jacobi symbol without factoring the denominator"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-jacobi-symbol, prop-jacobi-symbol-well-defined,
       thm-jacobi-symbol-multiplicativity, thm-jacobi-symbol-supplements,
       thm-jacobi-symbol-reciprocity, thm-division-algorithm-in-z,
       lem-p-adic-valuation-basic]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "V. Shoup, A Computational Introduction to Number Theory and Algebra, 2nd ed., §12.3"
      url: "https://www.shoup.net/ntb/ntb-v2.pdf"
    - title: "P. Hackman, Elementary Number Theory, §D.II"
      url: "https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf"
    - title: "A. Gorodnik, Number Theory, Lecture 10, §1"
      url: "https://www.math.uzh.ch/gorodnik/nt/lecture10.pdf"
pipeline_run: null
---

## Statement

Let $a\in\mathbb Z$ and let $n\ge1$ be odd. Starting from $(\varepsilon,A,N)=(1,a,n)$, repeat the following deterministic procedure:

- if $N=1$, return $\varepsilon$;
- otherwise let $r$ be the least nonnegative remainder of $A$ modulo $N$, and return $0$ if $r=0$;
- write $r=2^s b$ with $b$ odd, replace $\varepsilon$ by $\varepsilon(-1)^{s(N^2-1)/8}$, then replace it by $\varepsilon(-1)^{(b-1)(N-1)/4}$ and replace $(A,N)$ by $(N,b)$.

The Euclidean Jacobi algorithm terminates and returns $\left(\frac an\right)$ without factoring the odd denominator $n$.

## Facts & Assumptions

**Given:** An integer $a$, an odd positive integer $n$, and the algorithmic state described in the Statement.

[L1] The Jacobi symbol satisfies $\left(\frac a1\right)=1$ and is zero exactly when $\gcd(a,n)>1$ ([[def-jacobi-symbol]]).

[L2] The Jacobi symbol depends only on its numerator modulo the odd positive denominator ([[prop-jacobi-symbol-well-defined]]).

[L3] For odd positive $N$, $\left(\frac{uv}{N}\right)=\left(\frac uN\right)\left(\frac vN\right)$ ([[thm-jacobi-symbol-multiplicativity]]).

[L4] For odd positive $N$, $\left(\frac2N\right)=(-1)^{(N^2-1)/8}$ ([[thm-jacobi-symbol-supplements]]).

[L5] For coprime odd positive $b,N$, $\left(\frac bN\right)\left(\frac Nb\right)=(-1)^{(b-1)(N-1)/4}$ ([[thm-jacobi-symbol-reciprocity]]).

[L6] Division by a positive integer has a unique remainder $r$ with $0\le r<N$ ([[thm-division-algorithm-in-z]]).

[L7] Every nonzero integer $r$ has a uniquely determined maximal power $2^s$ dividing it and can be written $r=2^s b$ with $b$ odd ([[lem-p-adic-valuation-basic]]).

## Proof

**Proof technique:** direct.

1.1 Maintain the invariant $\left(\frac an\right)=\varepsilon\left(\frac AN\right)$. By [L2] and [L6], replacing $A$ by $r$ preserves the current symbol. If $r=2^sb$, then [L3] and [L4] give $\left(\frac rN\right)=(-1)^{s(N^2-1)/8}\left(\frac bN\right)$. When $\gcd(b,N)=1$, [L5] gives $\left(\frac bN\right)=(-1)^{(b-1)(N-1)/4}\left(\frac Nb\right)$; when the gcd exceeds $1$, [L1] makes both Jacobi symbols zero, so the same signed equality remains true. Thus every nonterminal update preserves the invariant. [L1, L2, L3, L4, L5, L6, L7, algebra]

2.1 At a nonterminal update, $0<r<N$ and the new denominator is the positive odd part $b\le r$, so it is strictly smaller than $N$. A strictly decreasing chain of positive integers cannot have more terms than its initial value, so the procedure reaches a terminal state. [step 1.1, L6, algebra]

3.1 If $N=1$, [L1] and the invariant give $\left(\frac an\right)=\varepsilon$. If $r=0$ while $N>1$, then $N$ divides $A$, so [L1] gives $\left(\frac AN\right)=0$ and the invariant gives the returned value $0$. These are all terminal states, proving correctness and termination; only division, extraction of powers of $2$, and sign updates were used, not a factorisation of $n$. [step 1.1, step 2.1, L1, L6] ∎
