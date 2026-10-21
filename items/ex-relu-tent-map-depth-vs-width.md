---
id: ex-relu-tent-map-depth-vs-width
kind: example
title: "Tent-map composition gives exponentially many intervals"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 5
deps: [lem-relu-tent-iterate-depth, thm-relu-linear-region-upper-bound]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Matus Telgarsky, Benefits of Depth in Neural Networks, §3.4"
      url: "https://proceedings.mlr.press/v49/telgarsky16.pdf"
      locator: "§3.4, iterated tent map as a depth witness."
    - title: "Matus Telgarsky, Deep learning theory lecture notes, Chapter 5"
      url: "https://mjt.cs.illinois.edu/dlt/index.html"
      locator: "Chapter 5, Benefits of depth; supplementary context. The exact mathematical argument is given locally and the primary source is cited separately."
---

## Example

The scalar ReLU network computing the tenth iterate of the tent map has $20$ hidden units, depth $12$ counting the input and output layers, and $1024$ affine intervals on $[0,1]$, each with a distinct full-dimensional activation pattern on its interior. Any one-hidden-layer scalar-input ReLU network of width $20$ has at most $21$ full-dimensional activation-pattern regions.

## Example references

[Telgarsky, §3.4: tent-map iterates](https://proceedings.mlr.press/v49/telgarsky16.pdf)

[Telgarsky, Chapter 5: depth and approximation context](https://mjt.cs.illinois.edu/dlt/index.html)

## Facts & Assumptions

**Given:** The tent map and region-count conventions in the statement.

[F1] The $q$th tent-map iterate has $2^q$ affine intervals and is implemented with $2q$ hidden ReLU units at depth $q+2$ ([[lem-relu-tent-iterate-depth]]).

[F2] For a one-hidden-layer scalar-input ReLU network of width $n_1$, the upper region sum is $\sum_{j=0}^{\min(1,n_1)}\binom{n_1}{j}$ ([[thm-relu-linear-region-upper-bound]]).

## Verification

1.1 Set $q=10$ in [F1]. Then the iterate has $2^{10}=1024$ dyadic affine intervals, $20$ hidden units, and depth $12$. In the construction, each layer's second unit is active exactly when its preceding iterate value is greater than $1/2$. The two restrictions of the tent map to $[0,1/2]$ and $[1/2,1]$ are bijections onto $[0,1]$, so induction gives a one-to-one correspondence between length-ten branch words and the dyadic intervals. These branch bits are activation bits, and each word is constant on the interior of its interval. Hence the intervals give distinct full-dimensional activation-pattern regions under the zero-inactive convention. [given, F1, algebra, induction]

2.1 With $n_0=1$ and $n_1=20$, [F2] gives at most $\binom{20}{0}+\binom{20}{1}=21$ regions. Since the deep network has $1024$ full-dimensional activation-pattern regions by step 1.1, while the shallow bound counts the same quantity, $1024>21$ proves the claimed depth-width difference. [step 1.1, F2, algebra] ∎
