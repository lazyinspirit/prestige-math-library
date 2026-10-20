---
id: ex-confident-pseudolabel-can-be-wrong
kind: example
title: "A confident pseudo-label can be wrong and remain fixed"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - alg-finite-round-confidence-pseudolabeling
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
---

## Example

Take $\mathcal X=\{0,1,2,3,4,5\}$ with distance $d(x,y)=|x-y|$ and classes $\{1,2\}$. The true labels at $0,1,2,3,4,5$ are $1,1,1,1,2,2$, but only the examples $(0,1),(1,1),(2,1),(3,1),(4,2)$ are labeled for the procedure. Run the finite confidence-threshold pseudo-labeling algorithm with unlabeled set $\{5\}$, $k=5$, threshold $\tau=4/5$, pseudo-label weight $\lambda=1$, and round cap $T=1$. The nearest labeled examples to $5$ have labels $2,1,1,1,1$, so confidence $4/5$ assigns the wrong label $1$; the no-relabel rule retains that assignment.

## Line diagram

The nodes lie at their feature coordinates on the real line. Labels after a colon are observed labels for positions 0 through 4; the question mark at 5 is unlabeled to the algorithm. The hidden true class at 5 is 2. The drawn line shows distance order only, not a graph edge set.

```tikz
\begin{tikzpicture}
\node[draw,circle] (x0) at (0,0) {$0:1$};
\node[draw,circle] (x1) at (1.5,0) {$1:1$};
\node[draw,circle] (x2) at (3,0) {$2:1$};
\node[draw,circle] (x3) at (4.5,0) {$3:1$};
\node[draw,circle] (x4) at (6,0) {$4:2$};
\node[draw,circle,dashed] (x5) at (7.5,0) {$5:?$};
\draw (x0)--(x1)--(x2)--(x3)--(x4)--(x5);
\node at (7.5,-0.75) {true class 2};
\end{tikzpicture}
```

## Facts & Assumptions

**Given:** The ordered labeled list $(0,1),(1,1),(2,1),(3,1),(4,2)$, unlabeled point $5$, the usual distance, $k=5$, threshold $4/5$, pseudo-label weight $1$, and one round.

[A1] $d(x,y)=|x-y|$ for $x,y\in\mathcal X$, the five labeled records are ordered by feature value, and the hidden true label at point 5 is 2.

[F1] [[alg-finite-round-confidence-pseudolabeling]]: the five closest records vote with their positive record weights; the smallest-index maximizing class is predicted, confidence is the largest weighted vote divided by total weight, selected labels are added simultaneously, and an added label is never revised.

## Verification

1.1 The distances from $5$ to labeled inputs $4,3,2,1,0$ are respectively $1,2,3,4,5$, so all five records are selected in that order. Their votes are $V_1=4$ and $V_2=1$, giving prediction $1$ and confidence $\max(4,1)/(4+1)=4/5$. [given, A1, F1, algebra]

2.1 Since the confidence meets the threshold, the algorithm appends pseudo-label $(5,1)$ with weight $1$ and removes 5 from the unlabeled set. The output status is all-labelled, and the no-relabel rule retains the pseudo-label 1 even though the specified true label is 2. [given, F1, step 1.1] ∎
