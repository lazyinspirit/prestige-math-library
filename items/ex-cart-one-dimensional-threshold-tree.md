---
id: ex-cart-one-dimensional-threshold-tree
kind: example
title: "A one-dimensional regression threshold tree"
status: published
origin: pipeline
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
dependency_level: 4
deps:
  - def-empirical-decision-tree
  - alg-cart-greedy-split
  - thm-cart-greedy-split-is-best-listed-split-and-terminates
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
pipeline_run: machine-learning-all-101-2026-10-19
---

## Example

Take a single predictor and the regression sample $(x_i,y_i)=(0,0),(1,0),(2,1),(3,1)$, with maximum depth $1$. Its candidate thresholds are the midpoints $0.5$, $1.5$, and $2.5$. The child-weighted squared-error score is $2/3$ at $0.5$, $0$ at $1.5$, and $2/3$ at $2.5$. Thus greedy growth chooses the unique split $x_1\le1.5$, producing leaves on feature values $\{0,1\}$ and $\{2,3\}$ with predictions $0$ and $1$.

The internal label in the diagram is the split predicate. The left edge means the predicate holds and the right edge means it fails. Each leaf gives the feature values reaching it and its constant prediction.

```tikz
\begin{tikzpicture}[
  box/.style={draw,rounded corners,align=center,font=\small,inner sep=3pt}
]
\node[box] (root) at (0,0) {split: x1 <= 1.5};
\node[box] (left) at (-2,-1.5) {x values: 0,1\\prediction: 0};
\node[box] (right) at (2,-1.5) {x values: 2,3\\prediction: 1};
\draw (root.south) -- (left.north);
\draw (root.south) -- (right.north);
\end{tikzpicture}
```

## Facts & Assumptions

**Given:** The four regression observations and the greedy growth procedure with maximum depth $1$.

[F1] [[def-empirical-decision-tree]]: A nonempty regression leaf predicts its sample mean and has residual sum of squares $\sum_{i\in I}(y_i-\bar y_I)^2$.

[F2] [[alg-cart-greedy-split]]: Candidate thresholds lie between adjacent distinct coordinate values, and the procedure chooses the candidate minimizing the child score.

[F3] [[thm-cart-greedy-split-is-best-listed-split-and-terminates]]: Every nonempty coordinate-threshold partition occurs among the midpoint candidates, and the chosen split minimizes the child loss on that finite list.

## Verification

1.1 The four distinct coordinate values are $0<1<2<3$, so the midpoint candidates are exactly $0.5$, $1.5$, and $2.5$. At $0.5$, the right child has responses $0,1,1$, mean $2/3$, and residual sum $2/3$. At $1.5$, both children have constant responses, so the score is $0$. At $2.5$, the left child has responses $0,0,1$, mean $1/3$, and residual sum $2/3$. [given, F1, F2, algebra]

2.1 The middle threshold is therefore the unique minimum-scoring candidate. By [F3], it is the best listed split and the procedure chooses it. Its two leaves have means $0$ and $1$, as displayed. [F1, F3, step 1.1, algebra]

3.1 The root split has depth $1=d_{\max}$, so the procedure stops there and returns the stated two-leaf tree. The diagram merely records the split and leaf predictions; the previously computed scores and the depth cap establish the output independently of the diagram. [F2, step 2.1, algebra] ∎

