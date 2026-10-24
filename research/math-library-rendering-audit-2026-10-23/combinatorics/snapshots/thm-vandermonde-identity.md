---
id: thm-vandermonde-identity
kind: theorem
title: "Vandermonde's identity $\\binom{m+n}{k} = \\sum_{i<k+1}\\binom{m}{i}\\binom{n}{k-i}$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-binomial-coefficient, thm-sum-rule, thm-product-rule, def-sum-over-a-finite-index-set,
       def-nat-finite-sum-and-product, def-finite-cardinality, thm-subset-of-a-finite-set,
       def-injection-surjection-bijection, def-equinumerous, def-nat-order,
       lem-nat-add-cancellative, lem-nat-order-is-membership]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
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
    - title: "Vandermonde's identity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Vandermonde%27s_identity"
    - title: "Binomial coefficient (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Binomial_coefficient"
    - title: "Bijective proof (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Bijective_proof"
pipeline_run: null
---

## Statement

For all $m, n, k \in \mathbb{N}$, in $\mathbb{N}$,

$$\binom{m+n}{k} \;=\; \sum_{i<k+1}\binom{m}{i}\binom{n}{\,k-i\,},$$

the sum running over $i = 0, 1, \dots, k$ and $k-i$ being an ordinary difference
throughout that range. **No restriction relating $k$ to $m$ and $n$ is needed**:
the terms with $i > m$ or $k-i > n$ vanish because the corresponding binomial
coefficients are $0$ ([[def-binomial-coefficient]]).

## Facts & Assumptions

**Given:** Naturals $m$, $n$, $k$; the disjoint sets $M := m \times \{0\}$ and $N := n \times \{1\}$; and $\sigma(k) = \{0,1,\dots,k\}$.

[L1] Binomial coefficients ([[def-binomial-coefficient]]): $\lvert [X]^{j}\rvert = \binom{\lvert X\rvert}{j}$ for finite $X$, and $[X]^{j}$ is finite.

[L2] Cardinality ([[def-finite-cardinality]]): transport along a bijection; $\lvert X\rvert = \lvert Y\rvert$ iff $X \approx Y$ for finite $X$, $Y$.

[L3] The sum rule ([[thm-sum-rule]]) and the bridge $\sum_{i \in \sigma(k)} u_i = \sum_{i<\sigma(k)} u_i$ ([[def-sum-over-a-finite-index-set]], [[def-nat-finite-sum-and-product]]).

[L4] The product rule $\lvert X \times Y\rvert = \lvert X\rvert\lvert Y\rvert$ ([[thm-product-rule]]).

[L5] Subsets ([[thm-subset-of-a-finite-set]]): a subset of a finite set is finite with cardinality at most that of the set.

[L6] Maps ([[def-injection-surjection-bijection]], [[def-equinumerous]]): a map with a two-sided inverse is a bijection.

[L7] Arithmetic: if $i + t = k$ then $t = k-i$, since $\le$ is defined additively and addition is cancellative; and $j < \sigma(k) \iff j \le k$ for every $j \in \mathbb{N}$, so $\sigma(k) = \{0,1,\dots,k\}$ ([[def-nat-order]], [[lem-nat-add-cancellative]], [[lem-nat-order-is-membership]]). The cardinalities $\lvert M\rvert = m$ and $\lvert N\rvert = n$ are not assumed here; they are computed in step 1.1.

## Proof

**Proof technique:** direct.

1.1 A disjoint pair with the right cardinalities. Put $M := m \times \{0\}$ and $N := n \times \{1\}$. These are disjoint, since an element of $M$ has second coordinate $0$ and one of $N$ has second coordinate $1$; and $x \mapsto (x,0)$ and $x \mapsto (x,1)$ are bijections from $m$ and $n$ onto them, so $\lvert M\rvert = m$ and $\lvert N\rvert = n$ by [L2]. Hence $\lvert M \cup N\rvert = m+n$ by [L3], and $\lvert [M\cup N]^{k}\rvert = \binom{m+n}{k}$ by [L1]. [L1, L2, L3, L6, L7, construct]

1.2 The partition. For $i < \sigma(k)$ put $B_i := \{\, S \in [M \cup N]^{k} : \lvert S \cap M\rvert = i \,\}$. Every $S \in [M\cup N]^{k}$ lies in exactly one $B_i$, because $S \cap M \subseteq S$ gives $\lvert S \cap M\rvert \le k$ by [L5], that is $\lvert S\cap M\rvert \in \sigma(k)$; and the $B_i$ are pairwise disjoint since $S$ determines $\lvert S\cap M\rvert$. [L1, L5]

2.1 Counting a block. Fix $i < \sigma(k)$. The map $S \mapsto (S\cap M,\ S\cap N)$ sends $B_i$ into $[M]^{i}\times[N]^{\,k-i}$: for $S \in B_i$ the sets $S \cap M$ and $S \cap N$ are disjoint with union $S$, since $S \subseteq M \cup N$, so $k = i + \lvert S\cap N\rvert$ by [L3] and $\lvert S \cap N\rvert = k-i$ by [L7]. The map $(U,V)\mapsto U \cup V$ is a two-sided inverse: $U \subseteq M$ and $V \subseteq N$ are disjoint, so $\lvert U\cup V\rvert = i + (k-i) = k$ by [L3], and $(U\cup V)\cap M = U$, $(U\cup V)\cap N = V$. Hence $B_i \approx [M]^{i}\times[N]^{\,k-i}$ and $\lvert B_i\rvert = \binom{m}{i}\binom{n}{\,k-i\,}$ by [L1], [L2] and [L4]. [step 1.1, step 1.2, L1, L2, L3, L4, L6, L7, construct]

3.1 Adding the blocks. By step 1.2 the family $(B_i)_{i \in \sigma(k)}$ is a pairwise disjoint family of finite sets with union $[M\cup N]^{k}$, so [L3] gives $\binom{m+n}{k} = \big\lvert [M\cup N]^{k}\big\rvert = \sum_{i \in \sigma(k)}\lvert B_i\rvert = \sum_{i<\sigma(k)}\binom{m}{i}\binom{n}{\,k-i\,}$, using step 2.1 and the bridge for an index set that is a natural number. [step 1.1, step 1.2, step 2.1, L3]

4.1 No range restriction is needed: if $i > m$ then $[M]^{i} = \varnothing$ and $\binom{m}{i} = 0$, and if $k-i > n$ then $\binom{n}{k-i} = 0$, so those blocks are empty and contribute nothing, exactly as the identity says. [step 2.1, step 3.1, L1] ∎

## Remarks

- **Why disjointness is arranged rather than assumed.** The counting argument needs $M$ and $N$ disjoint, and two arbitrary sets of cardinalities $m$ and $n$ need not be. Replacing them by $m\times\{0\}$ and $n\times\{1\}$ costs one line and the transport clause of [[def-finite-cardinality]], and it is what makes the sum rule applicable.

- **Not by generating functions, and not by comparing coefficients.** Both of the usual quick proofs need machinery that is far later in the reading order: formal power series in the first case, and a polynomial ring in the second. The double count needs neither.

- **Pascal's rule is the special case $m = 1$**, read through $\binom{1}{0} = \binom{1}{1} = 1$ and $\binom{1}{i} = 0$ for $i \ge 2$: for $k \ge 1$ the identity collapses to $\binom{1+n}{k} = \binom{n}{k} + \binom{n}{k-1}$, while at $k = 0$ the sum has the single term $\binom{1}{0}\binom{n}{0} = 1 = \binom{n+1}{0}$. The restriction $k \ge 1$ is not cosmetic: $n - m$ is the **truncated** difference throughout this page ([[def-nat-finite-sum-and-product]]), so writing the collapsed identity at $k = 0$ would read $\binom{n}{0-1}$ as $\binom{n}{0} = 1$ and assert $1 = 1 + 1$.
