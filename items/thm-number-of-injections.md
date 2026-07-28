---
id: thm-number-of-injections
kind: theorem
title: "The number of injections from a $k$-element set into an $n$-element set is $n^{\\underline{k}}$"
status: published
origin: session
deps: [def-factorial-and-falling-factorial, thm-cardinality-of-a-set-of-functions,
       thm-subset-of-a-finite-set, thm-sum-rule, def-sum-over-a-finite-index-set,
       def-nat-finite-sum-and-product, def-finite-cardinality,
       def-injection-surjection-bijection, def-equinumerous, thm-induction-principle,
       def-nat-order, lem-nat-add-cancellative, lem-nat-trichotomy]
justified_by: []
aliases: []
landmark: true
proof_strategy: induction
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Falling and rising factorials (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Falling_and_rising_factorials"
    - title: "Permutation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Permutation"
    - title: "R. Stanley, Enumerative Combinatorics, Vol. 1, Ch. 1"
      url: "https://en.wikipedia.org/wiki/Enumerative_Combinatorics"
pipeline_run: null
---

## Statement

Let $A$ and $B$ be finite sets, $n := \lvert A\rvert$ and $k := \lvert B\rvert$,
and write

$$\operatorname{Inj}(B,A) := \{\, f : B \to A \ :\ f \text{ is injective} \,\}.$$

Then $\operatorname{Inj}(B,A)$ is finite and
$\lvert\operatorname{Inj}(B,A)\rvert = n^{\underline{k}}$
([[def-factorial-and-falling-factorial]]).

The two boundary readings are part of the statement. At $k = 0$ there is exactly
one injection, the empty function, and $n^{\underline{0}} = 1$. For $k > n$ there
is none, and $n^{\underline{k}} = 0$.

## Facts & Assumptions

**Given:** Finite sets $A$, $B$ with $n = \lvert A\rvert$ and $k = \lvert B\rvert$. The truncated difference $n-k$ is that of [[def-nat-finite-sum-and-product]].

[L1] Induction ([[thm-induction-principle]]).

[L2] Cardinality ([[def-finite-cardinality]]): $\lvert X\rvert = 0$ exactly when $X = \varnothing$; a bijection transports finiteness and cardinality; $\lvert m\rvert = m$.

[L3] The falling factorial ([[def-factorial-and-falling-factorial]]): $n^{\underline{0}} = 1$, $n^{\underline{\sigma(k)}} = n^{\underline{k}}\cdot(n-k)$, and $n^{\underline{k}} = 0$ for $k > n$.

[L4] $X^{Y}$ is finite for finite $X$, $Y$ ([[thm-cardinality-of-a-set-of-functions]]), and a subset of a finite set is finite, with $\lvert B'\rvert \le \lvert B\rvert$ ([[thm-subset-of-a-finite-set]], clauses 1 and 2).

[L5] The sum rule ([[thm-sum-rule]]): $\lvert S \cup T\rvert = \lvert S\rvert + \lvert T\rvert$ for disjoint finite $S$, $T$; and a pairwise disjoint family of finite sets indexed by a finite set has finite union with cardinality the sum of the cardinalities. Together with $\sum_{i \in S} c = \lvert S\rvert \cdot c$ ([[def-sum-over-a-finite-index-set]]).

[L6] Maps ([[def-injection-surjection-bijection]], [[def-equinumerous]]): a map with a two-sided inverse is a bijection; the restriction of an injection is an injection; an injection is a bijection onto its image.

[L7] Order and cancellation in $\mathbb{N}$: $x + 1 = y + 1$ implies $x = y$; if $k + t = n$ then $t = n-k$; trichotomy ([[lem-nat-add-cancellative]], [[def-nat-order]], [[lem-nat-trichotomy]]).

## Proof

**Proof technique:** induction.

1.1 Base case $k = 0$. Then $B = \varnothing$, and the only function $\varnothing \to A$ is the empty function, which is injective because injectivity is a condition on pairs of points of the domain and there are none. So $\operatorname{Inj}(B,A) = \{\varnothing\}$ has cardinality $1 = n^{\underline{0}}$. [base, L2, L3, L6]

1.2 Inductive hypothesis: fix $k$ and assume that for all finite $A$, $B'$ with $\lvert A\rvert = n$ and $\lvert B'\rvert = k$ the set $\operatorname{Inj}(B',A)$ is finite with cardinality $n^{\underline{k}}$. [ih]

1.3 Setting up the inductive step. Let $\lvert B\rvert = \sigma(k)$, so $B \ne \varnothing$; fix $b \in B$ and put $B' := B \setminus \{b\}$, which is finite with $\lvert B'\rvert = k$ by [L4], [L5] and cancellation, exactly as in the count of $A^{B}$. Put $T := \{\,(g,a) : g \in \operatorname{Inj}(B',A),\ a \in A \setminus g[B']\,\}$ and define $\Phi : \operatorname{Inj}(B,A) \to T$ by $\Phi(f) = (f\restriction B',\, f(b))$; this lands in $T$ because $f \restriction B'$ is injective and $f(b) \ne f(x)$ for $x \in B'$, so $f(b) \notin f[B']$. The map $(g,a) \mapsto g \cup \{(b,a)\}$ is a two-sided inverse: the extension is injective precisely because $a \notin g[B']$. So $\Phi$ is a bijection. Finally $\operatorname{Inj}(B',A) \subseteq A^{B'}$ is finite by [L4]. [L4, L5, L6, L7, construct]

2.1 The case $k > n$. Then $n^{\underline{k}} = 0$ by [L3], so the hypothesis of step 1.2 gives $\lvert\operatorname{Inj}(B',A)\rvert = 0$, that is $\operatorname{Inj}(B',A) = \varnothing$; hence $T = \varnothing$ and $\operatorname{Inj}(B,A) = \varnothing$ by step 1.3, so its cardinality is $0$. And $\sigma(k) > n$ as well, so $n^{\underline{\sigma(k)}} = 0$ by [L3]. Both sides are $0$. [step 1.2, step 1.3, L2, L3]

2.2 The case $k \le n$. For each $g \in \operatorname{Inj}(B',A)$ the image $g[B']$ is a subset of $A$ with $\lvert g[B']\rvert = \lvert B'\rvert = k$, since $g$ is a bijection onto its image; and $A$ is the disjoint union of $g[B']$ and $A \setminus g[B']$, so $n = k + \lvert A \setminus g[B']\rvert$ by [L5] and therefore $\lvert A \setminus g[B']\rvert = n-k$ by [L7]. Now $T$ is the union of the pairwise disjoint sets $\{g\} \times (A \setminus g[B'])$ indexed by $g \in \operatorname{Inj}(B',A)$, each of cardinality $n-k$ because $a \mapsto (g,a)$ is a bijection; so [L5] gives $\lvert T\rvert = \sum_{g}(n-k) = \lvert\operatorname{Inj}(B',A)\rvert\cdot(n-k) = n^{\underline{k}}\cdot(n-k) = n^{\underline{\sigma(k)}}$, using the hypothesis of step 1.2 and [L3]. With step 1.3 this is $\lvert\operatorname{Inj}(B,A)\rvert$. [step 1.2, step 1.3, L2, L3, L5, L6, L7]

3.1 The two cases are exhaustive by trichotomy, so the statement holds at $\sigma(k)$ whenever it holds at $k$; with step 1.1 it holds for every $k$, and the two boundary readings are step 1.1 and step 2.1. [step 1.1, step 2.1, step 2.2, L1, L7, discharge-induction] ∎

## Remarks

- **The two regimes of the falling factorial are the two cases of the proof.**
  $n^{\underline{k}}$ was defined by a single recursion whose factor $n-k$ is
  truncated at $0$, and step 2.1 is exactly the regime where that truncation
  bites. Writing the cases out is what keeps the theorem true past $k = n$
  instead of only up to it.

- **Pigeonhole is not needed.** That no injection exists when $k > n$ is here a
  consequence of the induction rather than a citation of [[lem-pigeonhole]];
  the two agree, and the lemma remains what makes $\lvert\cdot\rvert$ well posed
  in the first place.

- **The count is of a set of functions.** $\operatorname{Inj}(B,A)$ is a subset of
  $A^{B}$, so its finiteness comes from
  [[thm-cardinality-of-a-set-of-functions]] and
  [[thm-subset-of-a-finite-set]] rather than being assumed.
