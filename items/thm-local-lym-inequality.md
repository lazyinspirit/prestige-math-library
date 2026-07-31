---
id: thm-local-lym-inequality
kind: theorem
title: "Local LYM inequality comparing a uniform family with its upper shadow"
status: published
origin: session
deps: [def-shadow-of-a-uniform-family, def-binomial-coefficient, def-finite-cardinality, def-injection-surjection-bijection, thm-sum-rule, def-nat-order, lem-nat-add-cancellative, thm-product-rule, def-sum-over-a-finite-index-set, thm-binomial-closed-formula]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-07-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "M. Keller and W. T. Trotter, Applied Combinatorics, §6.2"
      url: "https://appliedcombinatorics.org/book/s_posets_subset-lattice.html"
pipeline_run: null
---

## Statement

Let $A$ be an $n$-element set, let $0\le k<n$, and let
$\mathcal F\subseteq[A]^k$. Then

$$\frac{|\mathcal F|}{\binom nk}\le\frac{|\nabla\mathcal F|}{\binom n{k+1}}.$$

Equality holds exactly when every $T\in\nabla\mathcal F$ contains all of its
$k$-element subsets in $\mathcal F$.

## Facts & Assumptions

**Given:** An $n$-element set $A$, a natural $k<n$, a family $\mathcal F\subseteq[A]^k$, and its upper shadow $\nabla\mathcal F$.

[F1] The upper shadow consists of the $(k+1)$-sets containing at least one member of $\mathcal F$ ([[def-shadow-of-a-uniform-family]]).

[L1] A disjoint union of finite sets has cardinality the sum of the cardinalities; cardinality is transported by a bijection; and if $k+t=n$ then $t=n-k$ ([[thm-sum-rule]], [[def-finite-cardinality]], [[def-injection-surjection-bijection]], [[def-nat-order]], [[lem-nat-add-cancellative]]).

[L2] The binomial closed formula implies $\binom nk(n-k)=\binom n{k+1}(k+1)$ for $k<n$ ([[thm-binomial-closed-formula]], [[def-binomial-coefficient]]).

## Proof

**Proof technique:** direct.

1.1 Fix $S\in[A]^k$. Since $A$ is the disjoint union of $S$ and $A\setminus S$, [L1] gives $|A\setminus S|=n-k$. The map $x\mapsto S\cup\{x\}$ is a bijection from $A\setminus S$ to the $(k+1)$-subsets of $A$ properly containing $S$: its inverse sends such a set to its unique element outside $S$. Thus every $S\in[A]^k$ has exactly $n-k$ one-element extensions. [given, L1, construct]

1.2 Fix $T\in[A]^{k+1}$. The map $y\mapsto T\setminus\{y\}$ is a bijection from $T$ to its $k$-element subsets, with inverse sending a $k$-subset to its unique omitted element. Hence $T$ has exactly $k+1$ such subsets. [given, L1, construct]

2.1 Count pairs $(S,T)$ with $S\in\mathcal F$, $T\in[A]^{k+1}$, and $S\subset T$. By step 1.1, there are $|\mathcal F|(n-k)$ pairs. [step 1.1]

2.2 Every second coordinate lies in $\nabla\mathcal F$, and step 1.2 shows that a fixed $T\in\nabla\mathcal F$ contains at most $k+1$ members of $\mathcal F$. Thus the same number of pairs is at most $|\nabla\mathcal F|(k+1)$. [step 1.2, F1]

3.1 Steps 2.1 and 2.2 give $|\mathcal F|(n-k)\le|\nabla\mathcal F|(k+1)$. Using [L2] and dividing by the positive binomial coefficients gives the stated normalized inequality. [step 2.1, step 2.2, L2, algebra]

3.2 Equality in step 2.2 holds precisely when every $T\in\nabla\mathcal F$ contributes all of its $k+1$ possible $k$-subsets, which is precisely the equality condition in the Statement. [step 2.2, F1]

4.1 Therefore the normalized local LYM inequality holds, with the asserted equality characterization. [step 3.1, step 3.2] ∎

## Remarks

Applying the same result to complements gives the equivalent lower-shadow form

$$\frac{|\partial\mathcal F|}{\binom n{k-1}} \ge \frac{|\mathcal F|}{\binom nk}$$

for $1\le k\le n$.
