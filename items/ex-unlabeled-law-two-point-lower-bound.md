---
id: ex-unlabeled-law-two-point-lower-bound
kind: example
title: "Two indistinguishable laws leave error on an unseen atom"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - thm-unlabeled-law-alone-does-not-identify-labels
  - def-population-and-empirical-risk
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

Let $\mathcal X=\{a,b\}$ with the discrete sigma-algebra and feature marginal $P_X(a)=P_X(b)=1/2$, and observe only the labeled pair $(a,0)$. Under $P_0$, the labels at $a,b$ are $0,0$; under $P_1$, they are $0,1$. The common learner input consists of this labeled pair and the full marginal $P_X$. Let $\mathcal H=\{g:\mathcal X\to\{0,1\}\}$, and let $Q:\mathcal H\to[0,1]$ satisfy $\sum_{g\in\mathcal H}Q(g)=1$, selected from that common input, so it is the same under both laws. For $g\in\mathcal H$, define
$$R_{P_0}(g)=\tfrac12\mathbf1\{g(a)\ne0\}+\tfrac12\mathbf1\{g(b)\ne0\},\qquad R_{P_1}(g)=\tfrac12\mathbf1\{g(a)\ne0\}+\tfrac12\mathbf1\{g(b)\ne1\}.$$
The expected population risks satisfy $\max_{j\in\{0,1\}}\sum_{g\in\mathcal H}Q(g)R_{P_j}(g)\ge1/4$.

## Two-law diagram

Each panel gives feature, label, and mass. The input at $a$ is observed in both panels; the feature masses agree, while only the unobserved label at $b$ changes.

```tikz
\begin{tikzpicture}
\draw (0,0) rectangle (3.5,1.8);
\node at (1.75,1.45) {$P_0$};
\node at (0.9,0.9) {$a:0$};
\node at (2.6,0.9) {$b:0$};
\node at (0.9,0.35) {$1/2$};
\node at (2.6,0.35) {$1/2$};
\draw (4,0) rectangle (7.5,1.8);
\node at (5.75,1.45) {$P_1$};
\node at (4.9,0.9) {$a:0$};
\node at (6.6,0.9) {$b:1$};
\node at (4.9,0.35) {$1/2$};
\node at (6.6,0.35) {$1/2$};
\end{tikzpicture}
```

## Facts & Assumptions

**Given:** The finite feature set $\{a,b\}$, common masses $1/2$ at each point, observed label 0 at $a$, and the two deterministic label laws in the Example.

[F1] [[thm-unlabeled-law-alone-does-not-identify-labels]]: for an unseen atom of mass $q>0$, the maximum expected risk under two label laws differing only at that atom is at least $q/2$ for any common predictor distribution.

[F2] [[def-population-and-empirical-risk]]: population risk is the expected loss under the joint law; for the finite zero-one laws in this Example it is the sum of each atom mass times its error probability.

## Verification

1.1 Here the unseen atom is $b$ and $q=P_X(b)=1/2$. The two laws agree at the observed point $a$ and have the same $P_X$, so the theorem in [F1] applies and gives a maximum expected risk of at least $q/2=1/4$. [given, F1, algebra]

2.1 Directly, let $p=Q\{g\in\mathcal H:g(b)=1\}$. The two expected risks have the same nonnegative contribution from $a$. Their contributions at $b$ are respectively $p/2$ under $P_0$ and $(1-p)/2$ under $P_1$, so their sum is at least $1/2$ and their maximum is at least $1/4$. [given, F2, step 1.1, algebra] ∎
