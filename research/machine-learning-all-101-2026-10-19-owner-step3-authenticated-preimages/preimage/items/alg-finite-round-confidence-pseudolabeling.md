---
id: alg-finite-round-confidence-pseudolabeling
kind: algorithm
title: "Finite-round confidence-threshold pseudo-labeling"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps: []
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Olivier Chapelle, Bernhard Schölkopf, and Alexander Zien (editors), Semi-Supervised Learning, MIT Press, 2006"
      url: "https://mcube.lab.nycu.edu.tw/~cfung/docs/books/chapelle2006semi_supervised_learning.pdf"
verification:
  precheck: n/a
---

## Definition

Let $q\ge2$, let $\mathcal C=\{1,\ldots,q\}$, and let $(\mathcal X,d)$ be a finite metric space, meaning $d:\mathcal X\times\mathcal X\to[0,\infty)$ is symmetric, $d(x,y)=0$ iff $x=y$, and $d(x,z)\le d(x,y)+d(y,z)$ for all $x,y,z$. The input is a nonempty ordered list $S_0=((x_i,y_i))_{i=1}^m$ of labeled examples with $y_i\in\mathcal C$, a finite ordered set $U_0\subseteq\mathcal X\setminus\{x_1,\ldots,x_m\}$ of unlabeled examples, an integer $k$ with $1\le k\le m$, a confidence threshold $\tau\in[1/q,1]$, a pseudo-label weight $\lambda>0$, and a round cap $T\in\mathbb N_0$. A true labeled record has weight $1$; a pseudo-labeled record has weight $\lambda$.

Maintain an ordered training list $R_t$, initially $S_0$, a remaining unlabeled set $U_t$, initially $U_0$, and an initially empty pseudo-label log. To predict at $x\in U_t$, order all records $(x_i,y_i,w_i)\in R_t$ by increasing $(d(x,x_i),i)$, where $i$ is their stable record index, and take the first $k$ records $N_t(x)$. For $c\in\mathcal C$, put $V_{t,c}(x)=\sum_{(x_i,y_i,w_i)\in N_t(x)}w_i\mathbf 1\{y_i=c\}$. Let $\widehat y_t(x)$ be the smallest class index attaining $\max_c V_{t,c}(x)$, and define confidence $\kappa_t(x)=\max_c V_{t,c}(x)/\sum_cV_{t,c}(x)$. The denominator is positive because $k\ge1$ and every record weight is positive.

If $U_0=\varnothing$, set status $\texttt{no-unlabeled-inputs}$ and skip the round loop. Otherwise, for rounds $t=0,\ldots,T-1$, compute all predictions from the same current list $R_t$. Let $A_t=\{x\in U_t:\kappa_t(x)\ge\tau\}$. If $A_t=\varnothing$, set status $\texttt{no-additions}$ and leave the loop. Otherwise append one pseudo-labeled record for each $x\in A_t$, in the supplied order on $U_0$, using its predicted class and weight $\lambda$; append $(t,x,\widehat y_t(x),\lambda)$ to the pseudo-label log, and remove all points in $A_t$ from $U_t$. A pseudo-label is never revised. If the updated $U_t=\varnothing$, set status $\texttt{all-labelled}$ and leave the loop. If all $T$ rounds finish without an earlier stop and points remain in $U_t$, set status $\texttt{round-cap}$; this includes the case $T=0$.

For any query $x\in\mathcal X$, define the returned classifier by the same nearest-record ordering and weighted vote using the final training list, with the smallest-index vote tie rule. In every case return that classifier, the pseudo-label log, the remaining unlabeled set, and the status. The procedure makes no population-risk or pseudo-label-correctness guarantee.

## Definition references

[Chapelle, Schölkopf, and Zien, Semi-Supervised Learning, Chapter 1 §1.3.2](https://mcube.lab.nycu.edu.tw/~cfung/docs/books/chapelle2006semi_supervised_learning.pdf): iterative prediction-and-retraining context; the finite weighted k-nearest-neighbor procedure above is specified locally.
