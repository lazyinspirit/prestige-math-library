---
id: ex-cart-subtrees-same-fit-different-penalties
kind: example
title: "Two fitted subtrees with different leaf penalties"
status: published
origin: pipeline
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
dependency_level: 3
deps:
  - def-empirical-decision-tree
  - def-cost-complexity-pruning
  - alg-weakest-link-pruning
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

Take one predictor and the sample $(x_i,y_i)=(0,0),(1,0),(2,1)$ in regression. Let $T_1$ split at $x_1\le1.5$, and let $T_2$ add a split at $x_1\le0.5$ inside $T_1$'s left branch. Thus $T_1$ has leaves with feature values $\{0,1\}$ and $\{2\}$, with predictions $0$ and $1$; $T_2$ has leaves $\{0\}$, $\{1\}$, and $\{2\}$, with predictions $0$, $0$, and $1$. Both trees have training residual sum of squares $0$, but they have $2$ and $3$ leaves respectively. With penalty $\alpha=1$ per leaf, their costs (training residual sum of squares plus $\alpha$ times the number of leaves) are $2$ and $3$. For a nonterminal node $t$, define $g(t)$ as its loss after collapse minus its current descendant-leaf loss, divided by the number of descendant leaves removed. In $T_2$, the left branch has $g=0$, while the root has $g=1/3$, so the first weakest-link collapse is the left branch.

Each internal label in the diagrams is its split predicate. The left edge means the predicate holds and the right edge means it fails. Each leaf gives the feature values reaching it and its constant prediction.

```tikz
\begin{tikzpicture}[
  box/.style={draw,rounded corners,align=center,font=\scriptsize,inner sep=3pt}
]
\node[box] (t1r) at (-4,0) {T1 root: x1 <= 1.5};
\node[box] (t1l) at (-5.2,-1.5) {x values: 0,1\\prediction: 0};
\node[box] (t1rr) at (-2.8,-1.5) {x value: 2\\prediction: 1};
\draw (t1r.south) -- (t1l.north);
\draw (t1r.south) -- (t1rr.north);

\node[box] (t2r) at (2,0) {T2 root: x1 <= 1.5};
\node[box] (t2l) at (0.7,-1.35) {left node: x1 <= 0.5};
\node[box] (t2rr) at (3.5,-1.35) {x value: 2\\prediction: 1};
\node[box] (t2ll) at (-0.3,-2.7) {x value: 0\\prediction: 0};
\node[box] (t2lr) at (1.7,-2.7) {x value: 1\\prediction: 0};
\draw (t2r.south) -- (t2l.north);
\draw (t2r.south) -- (t2rr.north);
\draw (t2l.south) -- (t2ll.north);
\draw (t2l.south) -- (t2lr.north);
\end{tikzpicture}
```

## Facts & Assumptions

**Given:** The three regression observations and the two subtrees described in the example.

[F1] [[def-empirical-decision-tree]]: A nonempty regression leaf predicts its sample mean, and its residual sum of squares is $N_IQ_I=\sum_{i\in I}(y_i-\bar y_I)^2$.

[F2] [[def-cost-complexity-pruning]]: The cost-complexity criterion is $C_\alpha(T)=R(T)+\alpha|T|$.

[F3] [[def-cost-complexity-pruning]]: For a current nonterminal node, $g(t)=[R(t)-R(T_t)]/(|T_t|-1)$.

[F4] [[alg-weakest-link-pruning]]: The current nonterminal node with least $g(t)$ is collapsed, with the stated fixed tie rule.

## Verification

1.1 In $T_1$, the leaf on $\{0,1\}$ has mean $0$ and the leaf on $\{2\}$ has mean $1$, so both residual sums are $0$. Splitting the first leaf in $T_2$ gives singleton leaves with responses $0$ and $0$, so $T_2$ also has residual sum $0$ and has one additional leaf. [given, F1, algebra]

2.1 By [F2], $C_1(T_1)=0+1\cdot2=2$ and $C_1(T_2)=0+1\cdot3=3$. Thus the subtrees have equal fit and different leaf penalties. [F2, step 1.1, algebra]

3.1 Collapsing the left branch of $T_2$ has loss $0$, equal to its descendant-leaf loss, and removes one leaf, so $g(t_L)=0$. Collapsing the root predicts the full-sample mean $1/3$ and has loss $(0-1/3)^2+(0-1/3)^2+(1-1/3)^2=2/3$; the current three leaves have loss $0$, so $g(\mathrm{root})=(2/3-0)/(3-1)=1/3$. By [F4], the first collapse is therefore the left branch. [F1, F3, F4, step 1.1, algebra] ∎

