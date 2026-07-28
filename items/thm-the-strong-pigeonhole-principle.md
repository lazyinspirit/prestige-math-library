---
id: thm-the-strong-pigeonhole-principle
kind: theorem
title: "If $\\lvert A\\rvert > k\\lvert B\\rvert$ then every $f : A \\to B$ has a fibre with more than $k$ elements, and for nonempty $B$ some fibre has at least $\\lceil \\lvert A\\rvert / \\lvert B\\rvert\\rceil$ elements"
status: draft
origin: session
deps: [def-the-ceiling-of-a-quotient-of-naturals, thm-sum-rule, def-sum-over-a-finite-index-set,
       lem-nat-finite-sum-laws-and-the-canonical-embedding, def-finite-cardinality,
       thm-subset-of-a-finite-set, def-injection-surjection-bijection, def-nat-order,
       lem-nat-mult-commutative, lem-nat-trichotomy, lem-nat-discrete,
       lem-nat-nonzero-is-successor, def-finite-sum]
justified_by: []
aliases: []
landmark: true
proof_strategy: contradiction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Pigeonhole principle (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Pigeonhole_principle"
    - title: "Floor and ceiling functions (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Floor_and_ceiling_functions"
pipeline_run: null
---

## Statement

Let $A$ and $B$ be finite sets, let $k \in \mathbb{N}$, let $f : A \to B$, and
for $b \in B$ write

$$f^{-1}[\{b\}] \;:=\; \{\, a \in A \ :\ f(a) = b \,\}$$

for the **fibre** of $f$ over $b$ ([[def-injection-surjection-bijection]]). Then:

1. **The counting form.** If $\lvert A\rvert > k\,\lvert B\rvert$ then there is
   $b \in B$ with $\lvert f^{-1}[\{b\}]\rvert > k$.
2. **The ceiling form.** If $B \ne \varnothing$ then there is $b \in B$ with
   $\lvert f^{-1}[\{b\}]\rvert \ge \big\lceil \lvert A\rvert/\lvert B\rvert\big\rceil$
   ([[def-the-ceiling-of-a-quotient-of-naturals]], which is defined because
   $\lvert B\rvert \ge 1$).

Every quantity here is a natural number and the comparisons are those of
$\mathbb{N}$ ([[def-nat-order]]). Clause 1 at $k = 0$ says that a nonempty $A$
has a nonempty fibre. Clause 1 is vacuous when $B = \varnothing$, since then
$k\,\lvert B\rvert = 0$, the hypothesis says $A \ne \varnothing$, and there is no
function from a nonempty set to $\varnothing$ for the conclusion to be about.
Clause 2 at $A = \varnothing$ says only that some fibre has at least $0$
elements, since $\lceil 0/\lvert B\rvert\rceil = 0$.

## Facts & Assumptions

**Given:** Finite sets $A$ and $B$, a natural number $k$, a function $f : A \to B$, and the fibres $f^{-1}[\{b\}]$ for $b \in B$.

[L1] The fibres are pairwise disjoint subsets of $A$ whose union is $A$: distinct values of $f$ give disjoint fibres, and every $a \in A$ lies in the fibre over $f(a)$. Each fibre is finite ([[thm-subset-of-a-finite-set]], clause 1), so [[thm-sum-rule]] clause 2 gives $\lvert A\rvert = \sum_{b \in B}\lvert f^{-1}[\{b\}]\rvert$ in $\mathbb{N}$ ([[def-sum-over-a-finite-index-set]], [[def-finite-cardinality]]).

[L2] Monotonicity over a finite index set: if $c, d : S \to \mathbb{N}$ satisfy $c_i \le d_i$ for every $i \in S$, then $\sum_{i \in S}c_i \le \sum_{i \in S}d_i$. Both sums are computed through one enumeration $\psi : \lvert S\rvert \to S$ ([[def-sum-over-a-finite-index-set]]), and $c_{\psi(j)} \le d_{\psi(j)}$ for every $j < \lvert S\rvert$, so clause 4 of [[lem-nat-finite-sum-laws-and-the-canonical-embedding]] applies ([[def-finite-sum]]).

[L3] A constant natural summand: $\sum_{i \in S}k = \lvert S\rvert\cdot k$ ([[def-sum-over-a-finite-index-set]], clause (c)).

[L4] Order and arithmetic of $\mathbb{N}$: multiplication is commutative ([[lem-nat-mult-commutative]]); exactly one of $p < q$, $p = q$, $q < p$ holds ([[lem-nat-trichotomy]]); $p < q$ if and only if $\sigma(p) \le q$ ([[lem-nat-discrete]]); every nonzero natural is a successor ([[lem-nat-nonzero-is-successor]]); and $0 \le p$ for every $p$ ([[def-nat-order]]).

[L5] The ceiling ([[def-the-ceiling-of-a-quotient-of-naturals]]): for $n \ge 1$, $\lceil m/n\rceil$ is the least $q \in \mathbb{N}$ with $m \le nq$, so any $q < \lceil m/n\rceil$ satisfies $nq < m$.

[L6] $\lvert B\rvert = 0$ if and only if $B = \varnothing$ ([[def-finite-cardinality]], clause (b)).

## Proof

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that $\lvert A\rvert > k\,\lvert B\rvert$ and yet $\lvert f^{-1}[\{b\}]\rvert \le k$ for every $b \in B$. [assume-contra]

1.2 By [L1], $\lvert A\rvert = \sum_{b \in B}\lvert f^{-1}[\{b\}]\rvert$. [L1]

1.3 For clause 2, assume $B \ne \varnothing$; then $\lvert B\rvert \ne 0$ by [L6], so $\lvert B\rvert \ge 1$ and $c := \big\lceil\lvert A\rvert/\lvert B\rvert\big\rceil$ is defined, and $B$ has at least one element. [L4, L5, L6]

2.1 Clause 1. Under the assumption of step 1.1, monotonicity and the constant sum give $\lvert A\rvert = \sum_{b \in B}\lvert f^{-1}[\{b\}]\rvert \le \sum_{b \in B}k = \lvert B\rvert\cdot k = k\,\lvert B\rvert$, which contradicts $\lvert A\rvert > k\,\lvert B\rvert$ by trichotomy. So the supposition of step 1.1 is untenable and clause 1 holds. [step 1.1, step 1.2, L2, L3, L4]

2.2 Clause 2 when $c = 0$. Choose any $b \in B$, available by step 1.3; then $\lvert f^{-1}[\{b\}]\rvert \ge 0 = c$ by [L4]. [step 1.3, L4]

3.1 Clause 2 when $c \ne 0$. Write $c = \sigma(q)$ by [L4]. Then $q < c$, so [L5] gives $\lvert B\rvert\, q < \lvert A\rvert$, that is $\lvert A\rvert > q\,\lvert B\rvert$ by commutativity; clause 1, established in step 2.1, therefore produces $b \in B$ with $\lvert f^{-1}[\{b\}]\rvert > q$, and $\lvert f^{-1}[\{b\}]\rvert \ge \sigma(q) = c$ by [L4]. [step 1.3, step 2.1, L4, L5]

4.1 Clause 1 is step 2.1, and clause 2 is steps 2.2 and 3.1, whose two cases are exhaustive. [step 2.1, step 2.2, step 3.1, discharge-contradiction] ∎

## Remarks

- **Where the ceiling earns its keep.** Clause 2 is not a separate argument: it is clause 1 applied at the single value $q$ with $\sigma(q) = c$, and the only thing that has to be checked is that this $q$ satisfies $\lvert A\rvert > q\lvert B\rvert$, which is exactly the minimality of $c$. That is the whole reason the ceiling was defined by minimality rather than by a division.

- **The case $c = 0$ is not a degenerate nuisance.** It occurs precisely when $A = \varnothing$, where the conclusion is empty of content but still needs an element of $B$ to be stated about, and that is where $B \ne \varnothing$ is spent in clause 2.

- **Disjointness of the fibres is free**, since a fibre is determined by the value it lies over. This is what lets the sum rule be applied with no hypothesis beyond finiteness, in contrast to a union of arbitrary sets.
