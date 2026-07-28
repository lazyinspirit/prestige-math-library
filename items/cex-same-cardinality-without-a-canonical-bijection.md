---
id: cex-same-cardinality-without-a-canonical-bijection
kind: counterexample
title: "Two sets of the same finite cardinality between which no bijection is distinguished"
status: draft
origin: session
deps: [def-finite-cardinality, lem-pigeonhole, thm-number-of-bijections-of-a-finite-set,
       def-binomial-coefficient, def-equinumerous, def-injection-surjection-bijection,
       def-factorial-and-falling-factorial, def-natural-numbers]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
cx_machine_verified: false
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Cardinality (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cardinality"
    - title: "Bijective proof (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Bijective_proof"
    - title: "P. Halmos, Naive Set Theory, §13"
      url: "https://en.wikipedia.org/wiki/Naive_Set_Theory_(book)"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** for finite sets $A$ and $B$, the equality
$\lvert A\rvert = \lvert B\rvert$ determines a bijection $A \to B$; equivalently,
two equinumerous finite sets admit **exactly one** bijection between them.

The witness is $A := 2 = \{\varnothing,\{\varnothing\}\} = \{0,1\}$ and
$B := [2]^{1} = \{\{0\},\{1\}\}$, the set of one-element subsets of $2$. Both have
cardinality $2$, and there are exactly two bijections between them, neither
distinguished from the other by anything in this library.

## Facts & Assumptions

**Given:** $A = 2 = \{0,1\}$ with $0 = \varnothing$ and $1 = \{0\}$ ([[def-natural-numbers]]), and $B = [2]^{1}$, the set of $1$-element subsets of $2$.

[L1] $\lvert n\rvert = n$ for a natural $n$, and $\lvert A\rvert$ is the unique natural equinumerous with $A$ ([[def-finite-cardinality]]).

[L2] $\lvert [X]^{k}\rvert = \binom{\lvert X\rvert}{k}$ and $\binom{n}{1} = n$ ([[def-binomial-coefficient]]).

[L3] The set of bijections between two finite sets of common cardinality $n$ has exactly $n!$ elements ([[thm-number-of-bijections-of-a-finite-set]]), and $2! = 2$ ([[def-factorial-and-falling-factorial]]).

[L4] A bijection is an injective surjection ([[def-injection-surjection-bijection]], [[def-equinumerous]]).

[L5] Claim 3 of [[lem-pigeonhole]]: a finite set is equinumerous with exactly one natural number.

## Counterexample

**Proof technique:** direct.

1.1 The two sets and their cardinalities. $A = 2$ has $\lvert A\rvert = 2$ by [L1]. The elements of $B = [2]^{1}$ are the one-element subsets of $\{0,1\}$, namely $\{0\}$ and $\{1\}$, so $\lvert B\rvert = \binom{2}{1} = 2$ by [L2]. Hence $\lvert A\rvert = \lvert B\rvert$. [given, L1, L2]

2.1 Two distinct bijections. Let $f : A \to B$ be $f(0) = \{0\}$, $f(1) = \{1\}$, and let $g : A \to B$ be $g(0) = \{1\}$, $g(1) = \{0\}$. Each is injective, its two values being distinct, and each is surjective, its image being all of $B$; so both are bijections by [L4]. They are distinct, since $f(0) = \{0\} \ne \{1\} = g(0)$. [step 1.1, L4, construct]

3.1 There are exactly two. By [L3] the set of bijections $A \to B$ has $2! = 2$ elements, so $f$ and $g$ of step 2.1 are all of them. [step 1.1, L3]

4.1 The refuted claim fails: $\lvert A\rvert = \lvert B\rvert$ holds, and there are two bijections $A \to B$, not one. Nothing in [[def-finite-cardinality]] selects either: that definition asserts only that **some** bijection $A \to \lvert A\rvert$ exists, and what makes the resulting number unambiguous is [L5], a statement about natural numbers, not about maps. So the cardinality is canonical while the bijection realising it is not. [step 2.1, step 3.1, L1, L5] ∎

## Remarks

- **What is canonical and what is not.** Cardinality is a well-defined function
  of the set; a bijection witnessing an equality of cardinalities is not. The
  distinction matters whenever a construction is made "along a bijection": one
  has to check, as [[def-sum-over-a-finite-index-set]] does, that the result does
  not depend on which bijection was used.

- **The count grows fast.** For $\lvert A\rvert = n$ there are $n!$ bijections
  onto any set of the same cardinality
  ([[thm-number-of-bijections-of-a-finite-set]]), so a distinguished one exists
  only for $n \le 1$.
