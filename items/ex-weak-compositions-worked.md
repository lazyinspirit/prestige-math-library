---
id: ex-weak-compositions-worked
kind: example
title: "The $15$ weak compositions of $4$ into $3$ parts, listed and matched against stars and bars"
status: draft
origin: session
deps: [thm-stars-and-bars, def-composition-of-a-natural-number, def-multinomial-coefficient,
       def-binomial-coefficient, thm-binomial-closed-formula, def-nat-finite-sum-and-product,
       def-factorial-and-falling-factorial, lem-nat-mult-cancellative]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Stars and bars (combinatorics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Stars_and_bars_(combinatorics)"
    - title: "Composition (combinatorics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Composition_(combinatorics)"
    - title: "Binomial coefficient (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Binomial_coefficient"
pipeline_run: null
---

## Example

Take $n = 4$ and $m = 3$. The weak compositions of $4$ into $3$ parts
([[def-composition-of-a-natural-number]]) are the triples
$(k_0,k_1,k_2)$ of naturals with $k_0+k_1+k_2 = 4$. Listed in decreasing
lexicographic order they are

$$\begin{array}{lllll} (4,0,0) & (3,1,0) & (3,0,1) & (2,2,0) & (2,1,1) \\ (2,0,2) & (1,3,0) & (1,2,1) & (1,1,2) & (1,0,3) \\ (0,4,0) & (0,3,1) & (0,2,2) & (0,1,3) & (0,0,4) \end{array}$$

fifteen in all, matching $\binom{n+m-1}{m-1} = \binom{6}{2} = 15$ from
[[thm-stars-and-bars]]. Of these, three have every part nonzero, namely
$(2,1,1)$, $(1,2,1)$ and $(1,1,2)$, matching $\binom{n-1}{m-1} = \binom{3}{2} = 3$.

## Facts & Assumptions

**Given:** $n = 4$, $m = 3$, so $M := m-1 = 2$ and $n+M = 6$; the sets $\mathcal{W}(4,3)$ and $\mathcal{C}(4,3)$ of [[def-composition-of-a-natural-number]]; and $2! = 2$, $4! = 24$, $6! = 720$, $3! = 6$ ([[def-factorial-and-falling-factorial]]).

[L1] For $m \ge 1$, $\lvert\mathcal{W}(n,m)\rvert = \binom{n+m-1}{m-1}$, and the map $k \mapsto S(k) := \{\,(\sum_{j<\sigma(i)}k_j) + i : i < M\,\}$ is a bijection onto the set of $M$-element subsets of $n+M$ ([[thm-stars-and-bars]]).

[L2] For $m \ge 1$ and $n \ge 1$, $\lvert\mathcal{C}(n,m)\rvert = \binom{n-1}{m-1}$ ([[thm-stars-and-bars]]).

[L3] $\binom{n}{k}k!(n-k)! = n!$ for $k \le n$ ([[thm-binomial-closed-formula]]), and cancellation by a nonzero natural ([[lem-nat-mult-cancellative]]).

[L4] $\binom{3}{2} = \binom{3}{1} = 3$ from the closed formula, and finite sums in $\mathbb{N}$ ([[def-binomial-coefficient]], [[def-nat-finite-sum-and-product]]).

## Verification

**Proof technique:** direct.

1.1 The list above is exhaustive and has no repetitions: it is organised by the value of $k_0$, which runs over $4, 3, 2, 1, 0$, and for each $k_0$ the pair $(k_1,k_2)$ runs over all solutions of $k_1+k_2 = 4-k_0$, of which there are $5-k_0$, namely $(4-k_0,0), (3-k_0,1), \dots, (0,4-k_0)$. The block sizes are therefore $1, 2, 3, 4, 5$, and $1+2+3+4+5 = 15$. [given, L4]

2.1 The formula agrees. By [L3] with $n = 6$, $k = 2$: $\binom{6}{2}\cdot 2!\cdot 4! = 6!$, that is $\binom{6}{2}\cdot 2 \cdot 24 = 720$, so $\binom{6}{2}\cdot 48 = 720$ and $\binom{6}{2} = 15$. By [L1] with $n = 4$, $m = 3$ this is $\lvert\mathcal{W}(4,3)\rvert$, matching step 1.1. [step 1.1, L1, L3]

2.2 The bijection of [L1] made concrete. Here $M = 2$, so $S(k) = \{k_0,\ k_0+k_1+1\}$, a two-element subset of $6 = \{0,1,2,3,4,5\}$. For $(4,0,0)$: $S = \{4,\ 5\}$. For $(2,1,1)$: $S = \{2,\ 4\}$. For $(1,2,1)$: $S = \{1,\ 4\}$. For $(0,0,4)$: $S = \{0,\ 1\}$. Each is indeed a $2$-element subset of $6$, and the four are distinct, as injectivity requires. Reading the picture backwards, the two elements of $S$ are the positions of the two bars in a row of four stars and two bars, and the parts are the lengths of the three runs of stars. [step 1.1, L1]

3.1 The compositions. A weak composition has all parts nonzero exactly when none of $k_0,k_1,k_2$ is $0$, and inspection of the list leaves $(2,1,1)$, $(1,2,1)$ and $(1,1,2)$, three in all. By [L2] the predicted count is $\binom{4-1}{3-1} = \binom{3}{2} = 3$, which agrees. The bijection behind [L2] subtracts $1$ from every part, sending these three to $(1,0,0)$, $(0,1,0)$ and $(0,0,1)$, the three weak compositions of $1$ into $3$ parts. [step 1.1, step 2.1, L2, L4]

4.1 So $\lvert\mathcal{W}(4,3)\rvert = 15 = \binom{6}{2}$ and $\lvert\mathcal{C}(4,3)\rvert = 3 = \binom{3}{2}$, both by direct enumeration and by the formulas. [step 2.1, step 2.2, step 3.1] ∎

## Remarks

- **A stars-and-bars example that only checks the number is the weaker example.**
  Step 2.2 exhibits the bijection on four of the fifteen tuples, so the reader
  sees which subset of $6$ each composition corresponds to rather than being told
  that some correspondence exists.

- **The count $1+2+3+4+5$ in step 1.1 is itself an instance of the theorem**, at
  $m = 2$: the number of weak compositions of $j$ into $2$ parts is
  $\binom{j+1}{1} = j+1$.
