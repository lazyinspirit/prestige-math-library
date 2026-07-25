---
id: lem-power-laws
kind: lemma
title: "Laws of integer exponents"
status: draft
origin: session
deps: [def-integer-power, thm-induction-principle, def-field, def-int-operations, lem-of-inverse-unique, lem-of-no-zero-divisors, lem-nat-embeds-int, thm-int-comm-ring]
justified_by: []
aliases: []
landmark: false
proof_strategy: induction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Exponentiation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Exponentiation"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §4.3"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

Let $a, b$ be elements of a field ([[def-field]]) and let integer powers be as in
[[def-integer-power]].

1. For all $m, n \in \mathbb{N}$: $a^{m+n} = a^m a^n$, $(a^m)^n = a^{mn}$ and $(ab)^n = a^n b^n$.
2. If $a \ne 0$ then $a^n \ne 0$ for every $n \in \mathbb{N}$, and $a^{-m} = (a^m)^{-1}$ for every $m \in \mathbb{Z}$ ([[def-int-operations]]).
3. If $a \ne 0$ and $b \ne 0$ then all three identities of claim 1 hold for all $m, n \in \mathbb{Z}$.

## Facts & Assumptions

**Given:** Elements $a, b$ of a field $F$, naturals $m, n, p, q, k$ and integers ranged over by $m, n$ in claims 2 and 3.

[L1] Definition of powers ([[def-integer-power]]): $a^0 = 1$ and $a^{n+1} = a^n a$ for $n \in \mathbb{N}$; and $a^{-n} := (a^n)^{-1}$ for $a \ne 0$ and $n \ge 1$, the two clauses agreeing at $n = 0$.

[L2] Induction principle ([[thm-induction-principle]]).

[L3] Field arithmetic: multiplication is associative and commutative with identity $1$; inverses are unique, $(xy)^{-1} = x^{-1} y^{-1}$ and $(x^{-1})^{-1} = x$ for $x, y \ne 0$ ([[def-field]], [[lem-of-inverse-unique]]).

[L4] A field has no zero divisors: $xy = 0$ implies $x = 0$ or $y = 0$ ([[lem-of-no-zero-divisors]]).

[L5] $\mathbb{Z}$ is a commutative ring in which every element is $\iota(k)$ or $-\iota(k)$ for a unique natural $k$ ([[thm-int-comm-ring]], [[lem-nat-embeds-int]], [[def-int-operations]]); we write $k$ for $\iota(k)$.

## Proof

**Proof technique:** induction.

1.1 Base cases at $n = 0$: $a^{m+0} = a^m = a^m \cdot 1 = a^m a^0$; $(a^m)^0 = 1 = a^0 = a^{m \cdot 0}$; $(ab)^0 = 1 = 1 \cdot 1 = a^0 b^0$; and if $a \ne 0$ then $a^0 = 1 \ne 0$. [base, L1, L3]

1.2 Inductive hypothesis: fix $n \in \mathbb{N}$ and assume $a^{m+n} = a^m a^n$ for all $m \in \mathbb{N}$, $(a^m)^n = a^{mn}$ for all $m \in \mathbb{N}$, $(ab)^n = a^n b^n$, and $a^n \ne 0$ whenever $a \ne 0$. [ih]

1.3 For $a \ne 0$ and every integer $j$, $a^{-j} = (a^j)^{-1}$: for $j \ge 0$ this is the definition together with the agreement of the two clauses at $j = 0$, and for $j = -k$ with $k \ge 1$ it reads $a^{k} = (a^{-k})^{-1}$, which holds because $a^{-k} = (a^k)^{-1}$ and $(x^{-1})^{-1} = x$. [L1, L3, L5]

2.1 Successor step for the three natural-exponent laws and for nonvanishing: $a^{m+(n+1)} = a^{(m+n)+1} = a^{m+n} a = (a^m a^n) a = a^m (a^n a) = a^m a^{n+1}$; $(a^m)^{n+1} = (a^m)^n a^m = a^{mn} a^m = a^{mn+m} = a^{m(n+1)}$, where the third equality is the addition law just proved for natural exponents; $(ab)^{n+1} = (ab)^n (ab) = (a^n b^n)(ab) = (a^n a)(b^n b) = a^{n+1} b^{n+1}$; and if $a \ne 0$ then $a^{n+1} = a^n a$ is a product of two nonzero elements, hence nonzero. [step 1.2, L1, L3, L4]

3.1 By the induction principle, claim 1 holds for all $m, n \in \mathbb{N}$, and $a^n \ne 0$ for all $n \in \mathbb{N}$ whenever $a \ne 0$. [step 1.1, step 2.1, L2]

4.1 For $a \ne 0$ and every integer $j$, $a^{j+1} = a^j a$: for $j \ge 0$ this is the recursion clause, and for $j = -k$ with $k \ge 1$ we compute $a^{-k} a = (a^k)^{-1} a = (a^{k-1} a)^{-1} a = (a^{k-1})^{-1} a^{-1} a = (a^{k-1})^{-1} = a^{-(k-1)} = a^{-k+1}$. [step 3.1, step 1.3, L1, L3]

4.2 For $a, b \ne 0$ the product law holds for all integers $n$: for $n \ge 0$ it is claim 1, and for $n = -k$ with $k \ge 1$ we get $(ab)^{-k} = ((ab)^k)^{-1} = (a^k b^k)^{-1} = (a^k)^{-1}(b^k)^{-1} = a^{-k} b^{-k}$. [step 3.1, step 1.3, L3, L5]

5.1 For $a \ne 0$, every integer $j$ and every natural $k$, $a^{j+k} = a^j a^k$, by induction on $k$: the case $k = 0$ is $a^j = a^j \cdot 1$, and if $a^{j+k} = a^j a^k$ then $a^{j+k+1} = a^{j+k} a = a^j a^k a = a^j a^{k+1}$ by step 4.1 applied to the integer $j+k$ and by the recursion clause. [step 4.1, L1, L2, L3]

6.1 For $a \ne 0$ the addition law holds for all integers $m, n$: writing $n = k$ or $n = -k$ with $k \in \mathbb{N}$, the case $n = k$ is step 5.1, while for $n = -k$ step 5.1 applied to the integer $m - k$ gives $a^m = a^{(m-k)+k} = a^{m-k} a^k$, hence $a^{m-k} = a^m (a^k)^{-1} = a^m a^{-k}$. [step 5.1, step 1.3, L3, L5]

7.1 For $a \ne 0$ the iterated-power law holds for all integers $m, n$: for $n \ge 0$ induction on $n$ gives $(a^m)^{n+1} = (a^m)^n a^m = a^{mn} a^m = a^{mn+m} = a^{m(n+1)}$ using step 6.1, with base $(a^m)^0 = 1 = a^0$; and for $n = -q$ with $q \ge 1$, $(a^m)^{-q} = ((a^m)^q)^{-1} = (a^{mq})^{-1} = a^{-mq} = a^{m(-q)}$, using that $a^m \ne 0$ by step 3.1 and step 1.3. [step 6.1, step 3.1, step 1.3, L2, L3, L5]

8.1 Claims 1, 2 and 3 are therefore established: the natural-exponent laws and nonvanishing by induction, and the integer-exponent laws by reduction to them through $a^{-j} = (a^j)^{-1}$. [step 3.1, step 1.3, step 6.1, step 4.2, step 7.1, discharge-induction] ∎
