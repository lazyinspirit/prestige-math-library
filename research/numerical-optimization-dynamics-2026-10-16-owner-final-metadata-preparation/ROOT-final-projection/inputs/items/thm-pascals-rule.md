---
id: thm-pascals-rule
kind: theorem
title: "Pascal's rule $\\binom{n+1}{k+1} = \\binom{n}{k} + \\binom{n}{k+1}$, and the hockey-stick identity $\\sum_{i \\le n}\\binom{i}{k} = \\binom{n+1}{k+1}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-binomial-coefficient, thm-sum-rule, def-nat-finite-sum-and-product,
       lem-nat-finite-sum-laws-and-the-canonical-embedding, def-finite-cardinality,
       thm-subset-of-a-finite-set, def-injection-surjection-bijection,
       thm-induction-principle, def-nat-order, lem-nat-add-cancellative,
       lem-nat-trichotomy, def-natural-numbers]
justified_by: []
aliases: []
landmark: true
proof_strategy: induction
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-08-02
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Pascal's rule (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Pascal%27s_rule"
    - title: "Hockey-stick identity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hockey-stick_identity"
    - title: "Pascal's triangle (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Pascal%27s_triangle"
pipeline_run: null
---

## Statement

For all $n, k \in \mathbb{N}$:

1. **Pascal's rule.**
   $\displaystyle\binom{n+1}{k+1} = \binom{n}{k} + \binom{n}{k+1}$, with **no**
   restriction relating $k$ to $n$;
2. **The hockey-stick identity.**
   $\displaystyle\sum_{i<n+1}\binom{i}{k} = \binom{n+1}{k+1}$, the sum being the
   $\mathbb{N}$-valued finite sum of [[def-nat-finite-sum-and-product]] over
   $i = 0, 1, \dots, n$.

```tikz
\begin{tikzpicture}[x=1cm,y=1cm]
  \node at (0,3.8) {$|A|=n+1$};
  \node[draw,rounded corners] (all) at (0,3) {$[A]^{k+1}$, with $A'=A\setminus\{a\}$};
  \node[draw,rounded corners] (yes) at (-3,1.75) {$P=\{S:a\in S\}$};
  \node[draw,rounded corners] (no) at (3,1.75) {$Q=\{S:a\notin S\}$};
  \node[draw,rounded corners] (left) at (-3,0.35) {$[A']^k$};
  \node[draw,rounded corners] (right) at (3,0.35) {$[A']^{k+1}$};
  \draw[->] (all) -- (yes);
  \draw[->] (all) -- (no);
  \draw[->] (yes) -- node[left] {$S\mapsto S\setminus\{a\}$} (left);
  \draw[->] (no) -- node[right] {$S\mapsto S$} (right);
  \node at (0,-0.75) {${n+1\choose k+1}={n\choose k}+{n\choose k+1}$};
\end{tikzpicture}
```

## Facts & Assumptions

**Given:** Naturals $n$, $k$; $\sigma(m) = m+1$; and $\binom{m}{j} = \lvert [X]^{j}\rvert$ for any finite $X$ with $\lvert X\rvert = m$.

[L1] Induction ([[thm-induction-principle]]).

[L2] Binomial coefficients ([[def-binomial-coefficient]]): $\lvert [X]^{j}\rvert = \binom{\lvert X\rvert}{j}$; $\binom{m}{0} = 1$; $\binom{m}{j} = 0$ for $j > m$; $\binom{m}{m} = 1$; $\binom{m}{1} = m$.

[L3] The sum rule for two disjoint blocks, and the recursion clause $\sum_{i<\sigma(n)} c_i = \sum_{i<n} c_i + c_n$ ([[thm-sum-rule]], [[def-nat-finite-sum-and-product]]).

[L4] Cardinality ([[def-finite-cardinality]], [[thm-subset-of-a-finite-set]]): transport along a bijection; a subset of a finite set is finite; $\lvert\{a\}\rvert = 1$; $\lvert X\rvert = 0$ exactly when $X = \varnothing$.

[L5] Cancellation and order in $\mathbb{N}$: $x+1 = y+1$ implies $x = y$; trichotomy ([[lem-nat-add-cancellative]], [[lem-nat-trichotomy]], [[def-nat-order]]).

[L6] Maps ([[def-injection-surjection-bijection]]): a map with a two-sided inverse is a bijection.

[L7] Naturals: $\sigma(m) = m \cup \{m\}$ and $m \notin m$ ([[def-natural-numbers]]).

## Proof

**Proof technique:** induction.

1.1 Fix $n$ and $k$, let $A$ be a set with $\lvert A\rvert = \sigma(n)$, and fix $a \in A$, possible because $A \ne \varnothing$ by [L4]. Put $A' := A \setminus \{a\}$, which is finite with $\lvert A'\rvert = n$: indeed $A = A' \cup \{a\}$ is a disjoint union, so $\sigma(n) = \lvert A'\rvert + 1$ by [L3], and [L5] applies. Split $[A]^{\sigma(k)}$ into $P := \{S \in [A]^{\sigma(k)} : a \in S\}$ and $Q := \{S \in [A]^{\sigma(k)} : a \notin S\}$, which are disjoint with union $[A]^{\sigma(k)}$. [L3, L4, L5, L7]

1.2 The two blocks are counted by $\binom{n}{k}$ and $\binom{n}{\sigma(k)}$. First, $Q = [A']^{\sigma(k)}$, since a subset of $A$ avoiding $a$ is exactly a subset of $A'$; so $\lvert Q\rvert = \binom{n}{\sigma(k)}$ by [L2]. Second, $S \mapsto S \setminus \{a\}$ maps $P$ into $[A']^{k}$: for $S \in P$ the set $S$ is the disjoint union of $S\setminus\{a\}$ and $\{a\}$, so $\sigma(k) = \lvert S\setminus\{a\}\rvert + 1$ and $\lvert S\setminus\{a\}\rvert = k$ by [L5]. Its two-sided inverse is $T \mapsto T \cup \{a\}$, which lands in $P$ because $a \notin T \subseteq A'$ gives $\lvert T \cup \{a\}\rvert = k+1 = \sigma(k)$ by [L3]. Hence $\lvert P\rvert = \binom{n}{k}$ by [L2] and [L4]. [L2, L3, L4, L5, L6, construct]

1.3 Base case of clause 2, at $n = 0$. The left-hand side is $\sum_{i<1}\binom{i}{k} = \binom{0}{k}$ by [L3], and the right-hand side is $\binom{1}{\sigma(k)}$. If $k = 0$ both are $1$, by $\binom{0}{0} = 1$ and $\binom{1}{1} = 1$ from [L2]. If $k \ge 1$ then $k > 0$ and $\sigma(k) > 1$, so both are $0$ by [L2]. [base, L2, L3, L5]

1.4 Inductive hypothesis for clause 2: fix $n$ and assume $\sum_{i<\sigma(n)}\binom{i}{k} = \binom{\sigma(n)}{\sigma(k)}$ for every $k$. [ih]

2.1 Clause 1. By step 1.1, step 1.2 and the sum rule, $\binom{\sigma(n)}{\sigma(k)} = \big\lvert [A]^{\sigma(k)}\big\rvert = \lvert P\rvert + \lvert Q\rvert = \binom{n}{k} + \binom{n}{\sigma(k)}$. No relation between $k$ and $n$ was used, and the identity is correct beyond the range as well: for $k > n$ all three coefficients are $0$ by [L2], and at $k = 0$ it reads $\binom{\sigma(n)}{1} = 1 + \binom{n}{1}$, which is $\sigma(n) = 1 + n$. [step 1.1, step 1.2, L2, L3]

3.1 Inductive step for clause 2. Using the recursion clause and then the hypothesis of step 1.4, $\sum_{i<\sigma(\sigma(n))}\binom{i}{k} = \sum_{i<\sigma(n)}\binom{i}{k} + \binom{\sigma(n)}{k} = \binom{\sigma(n)}{\sigma(k)} + \binom{\sigma(n)}{k}$, and clause 1 applied with $\sigma(n)$ in place of $n$ says exactly that this is $\binom{\sigma(\sigma(n))}{\sigma(k)}$. [step 1.4, step 2.1, L3]

4.1 By step 1.3, step 3.1 and induction, clause 2 holds for every $n$ and every $k$. [step 1.3, step 3.1, L1]

5.1 Clause 1 is step 2.1 and clause 2 is step 4.1. [step 2.1, step 4.1, discharge-induction] ∎

## Remarks

- **The rule needs no range hypothesis** because the boundary values of [[def-binomial-coefficient]] make every out-of-range coefficient $0$ rather than undefined. Both edges were checked in step 2.1 rather than assumed.

- **The hockey stick sums a column, not a row.** The index $i$ runs over $0, 1, \dots, n$ with $k$ fixed, and the terms with $i < k$ vanish, so the identity is a statement about the entries $\binom{k}{k}, \binom{k+1}{k}, \dots$ of one column of Pascal's triangle. The base case $n = 0$ is the only place where the two readings $k = 0$ and $k \ge 1$ have to be separated.

- **Everything here is an identity in $\mathbb{N}$.** No embedding into $\mathbb{R}$ is used or needed; the sum is the $\mathbb{N}$-valued one.
