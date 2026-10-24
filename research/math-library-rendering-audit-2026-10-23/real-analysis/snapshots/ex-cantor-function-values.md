---
id: ex-cantor-function-values
kind: example
title: "The Cantor function takes the value $1/2$ on all of $[1/3, 2/3]$, and its values at $1/9$, $1/4$ and $7/9$"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-cantor-function-properties, def-cantor-function, ex-cantor-set-in-ternary, thm-cantor-set-ternary-description, def-cantor-set, thm-geometric-series, def-series, lem-series-linearity, thm-nonnegative-series-bounded-partial-sums, def-interval, def-integer-power, lem-power-laws, def-complete-ordered-field, def-ordered-field, cor-of-one-positive, lem-of-add-order, lem-of-sign-rules]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Cantor function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cantor_function"
    - title: "Cantor set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cantor_set"
pipeline_run: null
---

## Example

Let $c$ be the Cantor function ([[def-cantor-function]]). Then

$$c(x) = \tfrac12 \ \text{ for every } x \in [\tfrac13, \tfrac23], \qquad c(\tfrac19) = \tfrac14, \qquad c(\tfrac14) = \tfrac13, \qquad c(\tfrac79) = \tfrac34 .$$

Each value is computed by halving the ternary digits and reading the result in
base two, which is what [[def-cantor-function]] prescribes on $C$, and by the
constancy across gaps of [[thm-cantor-function-properties]] off $C$.

## Facts & Assumptions

**Given:** The Cantor set $C$, the bijection $\Phi$ of [[thm-cantor-set-ternary-description]], and the functions $\gamma$ and $c$ of [[def-cantor-function]]. Write $\sigma a$ for the shifted sequence.

[L1] $\Phi(a) = \sum_{k \ge 0}a_k3^{-k-1}$ is a bijection from the $\{0,2\}$-valued sequences onto $C$, and $\gamma(\Phi(a)) = \sum_{k \ge 0}(a_k 2^{-1})2^{-k-1}$ ([[thm-cantor-set-ternary-description]], [[def-cantor-function]], [[def-series]]).

[L2] Geometric tails: $\sum_{k \ge m} 2 \cdot 3^{-k-1} = 3^{-m}$ and $\sum_{k \ge m} 2^{-k-1} = 2^{-m}$; convergent series add and scale termwise, and $\sum_{k \ge 0}t_k = t_0 + \sum_{k \ge 1}t_k$ ([[thm-geometric-series]], [[lem-series-linearity]], [[def-series]], [[thm-nonnegative-series-bounded-partial-sums]], [[def-integer-power]], [[lem-power-laws]]).

[L3] Digit sequences: $\tfrac13 = \Phi(0,2,2,2,\dots)$, $\tfrac23 = \Phi(2,0,0,0,\dots)$, $\tfrac19 = \Phi(0,0,2,2,2,\dots)$ and $\tfrac14 = \Phi(0,2,0,2,\dots)$, the alternating sequence ([[ex-cantor-set-in-ternary]]).

[L4] $c(t) = \gamma(t)$ for $t \in C$; $c$ is constant on $[u,v]$ whenever $u < v$, $u,v \in C$ and $(u,v) \cap C = \varnothing$ ([[thm-cantor-function-properties]], claims 1 and 4).

[L5] $C \subseteq C_1 = [0,\tfrac13] \cup [\tfrac23, 1]$ ([[def-cantor-set]], [[def-interval]]).

[L6] Ordered-field arithmetic: $0 < 1$, so $2 > 0$, $3 > 0$, $4 > 0$ and $\tfrac13 < \tfrac23$; adding a constant and multiplying by a positive preserve an inequality ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]], [[def-complete-ordered-field]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Verification

**Proof technique:** direct.

1.1 **One more digit sequence.** $\tfrac79 = \Phi(2,0,2,2,2,\dots)$: by [L2] that value is $2 \cdot 3^{-1} + 0 + \sum_{k \ge 2} 2 \cdot 3^{-k-1} = \tfrac23 + 3^{-2} = \tfrac23 + \tfrac19 = \tfrac79$. [given, L1, L2, L6]

1.2 **The value of $\gamma$ at the alternating sequence.** Let $b$ be the $\{0,1\}$-valued sequence with $b_k = 0$ for even $k$ and $b_k = 1$ for odd $k$, and put $B := \sum_{k \ge 0} b_k 2^{-k-1}$, which converges by [L2]. Splitting off the first term twice as in [L2] gives $B = 0 \cdot 2^{-1} + 2^{-1}B'$ with $B' := \sum_{k \ge 0}b_{k+1}2^{-k-1}$, and $B' = 1 \cdot 2^{-1} + 2^{-1}B$, since shifting twice returns $b$. Hence $B = 2^{-1}(2^{-1} + 2^{-1}B) = 4^{-1} + 4^{-1}B$, so $(1 - 4^{-1})B = 4^{-1}$ and $B = \tfrac13$ by [L6]. [given, L2, L6]

2.1 **The five values of $\gamma$.** By [L1], [L2] and [L3]: $\gamma(\tfrac13) = \sum_{k \ge 1}2^{-k-1} = 2^{-1}$; $\gamma(\tfrac23) = 1 \cdot 2^{-1} = 2^{-1}$; $\gamma(\tfrac19) = \sum_{k \ge 2}2^{-k-1} = 2^{-2} = \tfrac14$; $\gamma(\tfrac14) = B = \tfrac13$ by step 1.2, the halved digits of the alternating ternary sequence being exactly $b$; and $\gamma(\tfrac79) = 2^{-1} + 0 + \sum_{k \ge 2}2^{-k-1} = \tfrac12 + \tfrac14 = \tfrac34$ by step 1.1. [step 1.1, step 1.2, L1, L2, L3, L6]

3.1 **The values of $c$.** All five points lie in $C$, so $c$ agrees with $\gamma$ there by [L4]: $c(\tfrac19) = \tfrac14$, $c(\tfrac14) = \tfrac13$, $c(\tfrac79) = \tfrac34$ and $c(\tfrac13) = c(\tfrac23) = \tfrac12$. Moreover $\tfrac13 < \tfrac23$ by [L6], both lie in $C$, and $(\tfrac13,\tfrac23) \cap C = \varnothing$ by [L5]; so [L4] gives that $c$ is constant on $[\tfrac13,\tfrac23]$, with the value $c(\tfrac13) = \tfrac12$. [step 2.1, L1, L3, L4, L5, L6] ∎

## Remarks

- **The staircase is visible in these five numbers.** $c$ rises from $c(\tfrac19) = \tfrac14$ to $c(\tfrac13) = \tfrac12$ across the second stage, stays at $\tfrac12$ across the whole middle third, and reaches $c(\tfrac79) = \tfrac34$; between those it is constant on each removed interval ([[thm-cantor-function-properties]]). All of the rise happens on $C$, a set of measure zero ([[thm-cantor-set-properties]]).

- **$c(1/4) = 1/3$ is the value at a non-endpoint.** $1/4$ lies in $C$ and is the endpoint of no removed interval ([[cex-cantor-point-that-is-not-an-endpoint]]), so $c$ is not constant on any neighbourhood of it; the computation of step 1.2 is the only one of the five that cannot be read off a finite digit string.

- **Halving digits is a bijection, not an approximation.** The value $\gamma(x)$ is the exact sum of the halved-digit series, and the two series are compared term by term, never numerically; this is why $c(\tfrac13)$ and $c(\tfrac23)$ come out equal, the sequences $(0,2,2,2,\dots)$ and $(2,0,0,0,\dots)$ halving to $(0,1,1,1,\dots)$ and $(1,0,0,0,\dots)$, both summing to $\tfrac12$.
