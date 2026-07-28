---
id: thm-binomial-closed-formula
kind: theorem
title: "$\\binom{n}{k}\\,k!\\,(n-k)! = n!$ for $k \\le n$; hence $\\binom{n}{k}\\,k! = n^{\\underline{k}}$, the quotient $n!/(k!(n-k)!)$ is a natural number, and $\\binom{n}{k} = \\binom{n}{n-k}$"
status: draft
origin: session
deps: [def-binomial-coefficient, thm-number-of-bijections-of-a-finite-set,
       def-factorial-and-falling-factorial, thm-sum-rule, thm-product-rule,
       def-sum-over-a-finite-index-set, def-finite-cardinality, thm-subset-of-a-finite-set,
       lem-nat-mult-cancellative, lem-nat-mult-associative, lem-nat-mult-commutative,
       lem-nat-finite-sum-laws-and-the-canonical-embedding, def-canonical-natural,
       lem-of-inverse-unique, def-field, def-nat-order, lem-nat-add-cancellative,
       def-injection-surjection-bijection, def-equinumerous]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Binomial coefficient (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Binomial_coefficient"
    - title: "Double counting (proof technique) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Double_counting_(proof_technique)"
    - title: "R. Stanley, Enumerative Combinatorics, Vol. 1, Ch. 1"
      url: "https://en.wikipedia.org/wiki/Enumerative_Combinatorics"
pipeline_run: null
---

## Statement

Let $n, k \in \mathbb{N}$ with $k \le n$. Then, in $\mathbb{N}$,

$$\binom{n}{k}\cdot k!\cdot (n-k)! = n! ,$$

and consequently:

1. $\binom{n}{k}\cdot k! = n^{\underline{k}}$
   ([[def-factorial-and-falling-factorial]]);
2. **integrality**: in $\mathbb{R}$,
   $\iota\binom{n}{k} = \dfrac{\iota(n!)}{\iota(k!)\,\iota((n-k)!)}$, so the
   familiar quotient $n!/(k!\,(n-k)!)$ is the canonical natural of a natural
   number, namely of the count $\binom{n}{k}$;
3. **symmetry**: $\binom{n}{k} = \binom{n}{n-k}$.

Here $\iota$ is the canonical natural of [[def-canonical-natural]] and $n-k$ the
truncated difference, which for $k \le n$ is the ordinary one.

## Facts & Assumptions

**Given:** Naturals $n, k$ with $k \le n$; the initial segment $k = \{\,i : i<k\,\}$, which satisfies $k \subseteq n$; and $\operatorname{Bij}(X,Y)$ for the set of bijections $X \to Y$.

[L1] $\binom{m}{j} = \lvert [X]^{j}\rvert$ for every finite $X$ with $\lvert X\rvert = m$; $[X]^{j}$ is finite ([[def-binomial-coefficient]]).

[L2] $\lvert\operatorname{Bij}(X,Y)\rvert = m!$ when $\lvert X\rvert = \lvert Y\rvert = m$, and such a set is finite ([[thm-number-of-bijections-of-a-finite-set]]).

[L3] The sum rule ([[thm-sum-rule]]) and $\sum_{i \in S} c = \lvert S\rvert\cdot c$ ([[def-sum-over-a-finite-index-set]]).

[L4] The product rule $\lvert X \times Y\rvert = \lvert X\rvert\lvert Y\rvert$ ([[thm-product-rule]]).

[L5] Factorials ([[def-factorial-and-falling-factorial]]): $m! \ne 0$ for every $m$; $n^{\underline{k}}(n-k)! = n!$ for $k \le n$.

[L6] Cardinality and subsets ([[def-finite-cardinality]], [[thm-subset-of-a-finite-set]]): transport along a bijection; $\lvert m\rvert = m$; a subset of a finite set is finite.

[L7] Arithmetic of $\mathbb{N}$: multiplication is associative and commutative, and $x\cdot c = y\cdot c$ with $c \ne 0$ gives $x = y$ ([[lem-nat-mult-associative]], [[lem-nat-mult-commutative]], [[lem-nat-mult-cancellative]]); $k + t = n$ determines $t = n-k$ ([[def-nat-order]], [[lem-nat-add-cancellative]]).

[L8] The embedding $\iota$ is multiplicative and injective, and $\iota(m) \ne 0$ for $m \ne 0$ (clauses 0 and 7 of [[lem-nat-finite-sum-laws-and-the-canonical-embedding]], [[def-canonical-natural]]); a nonzero element of a field has a unique inverse, so division by it is legitimate ([[lem-of-inverse-unique]], [[def-field]]).

[L9] Maps ([[def-injection-surjection-bijection]], [[def-equinumerous]]): a map with a two-sided inverse is a bijection; a bijection of $n$ carries a subset onto a subset and the complement onto the complement.

## Proof

**Proof technique:** direct.

1.1 The set to be counted twice is $\operatorname{Bij}(n)$, of cardinality $n!$ by [L2]. For $S \in [n]^{k}$ put $\operatorname{Bij}_S := \{\, f \in \operatorname{Bij}(n) : f[k] = S \,\}$. These sets are pairwise disjoint, since $f$ determines $f[k]$, and their union over $S \in [n]^{k}$ is all of $\operatorname{Bij}(n)$, because $f[k]$ is a subset of $n$ of cardinality $k$ for every bijection $f$ of $n$. [L1, L2, L6, L9, construct]

1.2 For any $X \subseteq n$ with $\lvert X\rvert = k$ one has $\lvert n \setminus X\rvert = n-k$: the sets $X$ and $n \setminus X$ are disjoint with union $n$, so $n = k + \lvert n\setminus X\rvert$ by [L3], and [L7] identifies the second summand as $n-k$. [L3, L6, L7]

2.1 $\lvert\operatorname{Bij}_S\rvert = k!\,(n-k)!$ for every $S \in [n]^{k}$. Indeed $f \mapsto (f\restriction k,\ f\restriction (n\setminus k))$ maps $\operatorname{Bij}_S$ to $\operatorname{Bij}(k, S) \times \operatorname{Bij}(n\setminus k,\ n\setminus S)$: if $f[k] = S$ then $f$ restricted to $k$ is a bijection onto $S$, and, $f$ being a bijection of $n$, it carries $n \setminus k$ onto $n \setminus S$. The map $(u,v) \mapsto u \cup v$ is a two-sided inverse, the union of the two functions being a function on $k \cup (n\setminus k) = n$ and a bijection onto $S \cup (n\setminus S) = n$. Since $\lvert k\rvert = \lvert S\rvert = k$ and $\lvert n\setminus k\rvert = \lvert n\setminus S\rvert = n-k$ by step 1.2, [L2] and [L4] give the cardinality $k!\,(n-k)!$. [step 1.1, step 1.2, L2, L4, L6, L9]

2.2 Symmetry. The map $S \mapsto n \setminus S$ sends $[n]^{k}$ into $[n]^{\,n-k}$ by step 1.2, and $T \mapsto n\setminus T$ sends $[n]^{\,n-k}$ into $[n]^{k}$, again by step 1.2 together with $n-(n-k) = k$, which holds because $(n-k) + k = n$. The two are mutually inverse, since $n\setminus(n\setminus S) = S$ for $S \subseteq n$. Hence $\binom{n}{k} = \binom{n}{n-k}$. [step 1.2, L1, L6, L7, L9, construct]

3.1 Counting $\operatorname{Bij}(n)$ by the blocks of step 1.1 and using [L3], $n! = \lvert\operatorname{Bij}(n)\rvert = \sum_{S \in [n]^{k}}\lvert\operatorname{Bij}_S\rvert = \sum_{S \in [n]^{k}} k!\,(n-k)! = \big\lvert [n]^{k}\big\rvert\cdot k!\,(n-k)! = \binom{n}{k}\,k!\,(n-k)!$, the summand being constant. [step 1.1, step 2.1, L1, L3]

4.1 Clause 1. By [L5], $n^{\underline{k}}(n-k)! = n!$, so $\big(\binom{n}{k}k!\big)(n-k)! = n^{\underline{k}}(n-k)!$ by step 3.1 and associativity; since $(n-k)! \ne 0$, cancellation gives $\binom{n}{k}\,k! = n^{\underline{k}}$. [step 3.1, L5, L7]

4.2 Clause 2. Applying $\iota$ to step 3.1 and using multiplicativity, $\iota(n!) = \iota\binom{n}{k}\,\iota(k!)\,\iota((n-k)!)$. Both $\iota(k!)$ and $\iota((n-k)!)$ are nonzero by [L5] and [L8], so their product is invertible in $\mathbb{R}$ and $\iota\binom{n}{k} = \iota(n!)\big/\big(\iota(k!)\iota((n-k)!)\big)$. The left-hand side is the canonical natural of the count $\binom{n}{k}$, which is what the word *integrality* means here. [step 3.1, L5, L8]

5.1 The displayed identity is step 3.1, clause 1 is step 4.1, clause 2 is step 4.2 and clause 3 is step 2.2. [step 2.2, step 3.1, step 4.1, step 4.2] ∎

## Remarks

- **Why the symmetry is proved by a bijection.** Complementation is shorter than
  manipulating the closed formula, it needs no hypothesis beyond $k \le n$, and
  it is the argument that survives to the multinomial coefficient, where no
  single closed formula is available until the analogous count has been made.

- **Where $k \le n$ is used.** In step 1.1, so that $k$ is a subset of $n$ of
  cardinality $k$ and $[n]^{k}$ is nonempty; and in step 1.2, so that $n-k$ is a
  genuine difference. For $k > n$ both sides of the displayed identity are still
  defined, but the left-hand side is $0$ while $n!$ is not, so the hypothesis is
  not removable.

- **The quotient formula is a theorem about a natural number.** A reader who
  starts from $n!/(k!(n-k)!)$ has to prove that the division comes out exact.
  Starting from the count, the exactness is what step 3.1 says, and the quotient
  is a consequence.
