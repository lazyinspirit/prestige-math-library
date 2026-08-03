---
id: ex-the-onto-functions-from-a-five-set-to-a-three-set-counted-both-ways
kind: example
title: "The surjections from a five-element set onto a three-element set counted by the sieve formula and by direct subtraction"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-the-number-of-surjections, thm-cardinality-of-a-set-of-functions, def-nat-power,
       def-binomial-coefficient, def-canonical-natural, def-integer-power, def-finite-cardinality,
       thm-sum-rule, def-sum-over-a-finite-index-set, def-injection-surjection-bijection,
       thm-subset-of-a-finite-set, lem-nat-finite-sum-laws-and-the-canonical-embedding,
       def-ordered-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Surjective function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Surjective_function"
    - title: "Twelvefold way (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Twelvefold_way"
    - title: "Inclusion-exclusion principle (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Inclusion%E2%80%93exclusion_principle"
    - title: "Algebraic Combinatorics Blueprint: Surjections"
      url: "https://faabian.github.io/algebraic-combinatorics/blueprint/sect0032.html"
pipeline_run: null
---

## Example

Take $A := 5$ and $B := 3$, so $n = \lvert A\rvert = 5$ and $k = \lvert B\rvert = 3$.

**By the formula.** [[thm-the-number-of-surjections]] gives

$$\iota\lvert\operatorname{Surj}(A,B)\rvert = \sum_{i<4}(-1)^{i}\,\iota\binom{3}{i}\,\iota\big((3-i)^{5}\big),$$

whose four terms are

| $i$ | $\binom{3}{i}$ | $(3-i)^{5}$ | term |
|---|---|---|---|
| $0$ | $1$ | $3^{5} = 243$ | $+243$ |
| $1$ | $3$ | $2^{5} = 32$ | $-96$ |
| $2$ | $3$ | $1^{5} = 1$ | $+3$ |
| $3$ | $1$ | $0^{5} = 0$ | $-0$ |

so the count is $243 - 96 + 3 - 0 = 150$.

**By direct subtraction.** Every function $A \to B$ has an image
$S := f[A] \subseteq B$, and the sets $\{\, f : f[A] = S \,\}$ for $S \subseteq B$
partition the set of all $3^{5} = 243$ functions $A \to B$. A function with image
exactly $S$ is precisely a surjection $A \to S$, so the number of functions with
image of size $j$ is $\binom{3}{j}$ times the number of surjections from a
five-element set onto a $j$-element set. Those numbers are $0$ for $j = 0$, since
$A \ne \varnothing$; $1$ for $j = 1$, the constant function; and $2^{5} - 2 = 30$
for $j = 2$, since a function into a two-element set fails to be onto exactly when
it is one of the two constants. Hence

$$243 = \binom{3}{0}\cdot 0 + \binom{3}{1}\cdot 1 + \binom{3}{2}\cdot 30 + \binom{3}{3}\cdot \lvert\operatorname{Surj}(A,B)\rvert = 0 + 3 + 90 + \lvert\operatorname{Surj}(A,B)\rvert,$$

so $\lvert\operatorname{Surj}(A,B)\rvert = 243 - 93 = 150$, in agreement.

## Facts & Assumptions

**Given:** $A = 5$, $B = 3$, the set $\operatorname{Map}(A,B)$ of all functions $A \to B$, and the canonical natural $\iota$ ([[def-canonical-natural]]).

[L1] $\lvert\operatorname{Map}(A,S)\rvert = \lvert S\rvert^{\,5}$ for every finite $S$ ([[thm-cardinality-of-a-set-of-functions]], [[def-nat-power]], [[def-finite-cardinality]]); and $3^{5} = 243$, $2^{5} = 32$, $1^{5} = 1$, $0^{5} = 0$, the last by clause (a) of [[def-nat-power]] since $5 \ge 1$.

[L2] $\binom{3}{0} = \binom{3}{3} = 1$ and $\binom{3}{1} = \binom{3}{2} = 3$ ([[def-binomial-coefficient]]).

[L3] If $A,B$ are finite with $|A|=n$ and $|B|=k$, then $\iota|\operatorname{Surj}(A,B)|=\sum_{i<k+1}(-1)^i\iota\binom{k}{i}\,\iota((k-i)^n)$ ([[thm-the-number-of-surjections]]).

[L4] The image partition: for $f \in \operatorname{Map}(A,B)$ put $S := f[A]$; the sets $M_S := \{\, f : f[A] = S \,\}$ for $S \subseteq B$ are pairwise disjoint subsets of $\operatorname{Map}(A,B)$ with union $\operatorname{Map}(A,B)$, and $M_S$ is in bijection with $\operatorname{Surj}(A,S)$ by restriction of the codomain, so $\lvert M_S\rvert = \lvert\operatorname{Surj}(A,S)\rvert$. If finite $S,T$ have $|S|=|T|$, finite cardinality supplies a bijection $\phi:S\to T$, and $u\mapsto\phi\circ u$ is a bijection $\operatorname{Surj}(A,S)\to\operatorname{Surj}(A,T)$ with inverse $v\mapsto\phi^{-1}\circ v$; hence these surjection counts depend only on the codomain cardinality ([[def-injection-surjection-bijection]], [[thm-subset-of-a-finite-set]], [[def-finite-cardinality]]).

[L5] The sum rule for a finite partition and the grouping of $\mathcal{P}(B)$ by cardinality, with $\lvert [B]^{j}\rvert = \binom{3}{j}$ ([[thm-sum-rule]], clauses 2 and 3, [[def-sum-over-a-finite-index-set]], [[def-binomial-coefficient]]).

[L6] $\iota$ is additive, multiplicative and injective, and $(-1)^{0} = 1$, $(-1)^{p+1} = -(-1)^{p}$ ([[lem-nat-finite-sum-laws-and-the-canonical-embedding]], clauses 0 and 7, [[def-integer-power]], [[def-ordered-field]]).

## Verification

**Proof technique:** direct.

1.1 The four terms of the formula. By [L2] and [L1] they are $(+1)\cdot 1\cdot 243$, $(-1)\cdot 3\cdot 32$, $(+1)\cdot 3\cdot 1$ and $(-1)\cdot 1\cdot 0$, the signs coming from [L6]. [L1, L2, L6]

1.2 The image partition is a partition, and the number of functions with image of size $j$ is $\binom{3}{j}$ times the number of surjections onto a fixed $j$-element subset: [L4] gives equality of the surjection counts for all $j$-element codomains, and there are $\binom{3}{j}$ such subsets by [L5]. [L4, L5]

1.3 The three easy image sizes. There is no surjection from the nonempty $A$ onto $\varnothing$, so the $j = 0$ contribution is $0$; there is exactly one surjection onto a one-element set, the constant, so the $j = 1$ contribution is $3\cdot 1 = 3$; and a function from $A$ into a two-element set is non-surjective exactly when it is constant, so the number of surjections is $2^{5} - 2 = 30$ by [L1] and the $j = 2$ contribution is $3\cdot 30 = 90$. [L1, L2, L4]

2.1 Summing the four terms of step 1.1 gives $243 - 96 + 3 - 0 = 150$, so $\lvert\operatorname{Surj}(A,B)\rvert = 150$ by [L3] and the injectivity of $\iota$. [step 1.1, L3, L6]

2.2 Summing the partition of step 1.2 gives $243 = 0 + 3 + 90 + \lvert\operatorname{Surj}(A,B)\rvert$ by [L1] and [L5], hence $\lvert\operatorname{Surj}(A,B)\rvert = 150$. [step 1.2, step 1.3, L1, L5]

3.1 The two computations agree, and each was carried out without reference to the other. [step 2.1, step 2.2] ∎

## Remarks

- **The second route is not a rearrangement of the first.** It partitions the functions by their image and uses the surjection counts onto smaller sets, which at sizes $0$, $1$ and $2$ are established directly rather than by the formula. So the agreement is a genuine check on the formula at $n = 5$, $k = 3$.

- **The last term of the formula is $0$ and it is not decoration.** At $i = k$ the factor is $0^{n}$, which vanishes because $n \ge 1$; at $n = 0$ it would be $0^{0} = 1$ instead, and that is the single point where the convention of [[def-nat-power]] is load bearing for this formula.
