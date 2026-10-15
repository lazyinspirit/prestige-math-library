---
id: alg-holdout-loo-lpo-v-fold-and-repeated-cv
kind: algorithm
title: "Holdout, leave-out, V-fold, and repeated cross-validation"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - def-cross-validation-split-and-risk-target
justified_by: []
verification:
  precheck: n/a
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Sylvain Arlot and Alain Celisse, A survey of cross-validation procedures for model selection, §4"
      url: "https://arxiv.org/pdf/0907.4728"
    - title: "Gareth James, Daniela Witten, Trevor Hastie, and Robert Tibshirani, An Introduction to Statistical Learning, 7th printing, Chapter 5 §5.1"
      url: "https://www.statlearning.com/s/ISLR-Seventh-Printing.pdf"
---

## Definition

**Input:** observations $z_1,\ldots,z_n$, learning rules $A_k$, a loss $L$, and a finite split schedule $((T_r,V_r,w_r))_{r=1}^B$. Each $(T_r,V_r)$ is a split as in [[def-cross-validation-split-and-risk-target]], $w_r\ge0$, and $\sum_{r=1}^B w_r=1$. A randomized schedule is admissible only when its law is specified and is independent of the observations.

**Output:** the cross-validation estimate

$$\widehat R:=\sum_{r=1}^B w_r\frac1{|V_r|}\sum_{i\in V_r}L\bigl(A_{|T_r|}(z_{T_r}),z_i\bigr),$$

with each training tuple ordered by increasing index.

**Instructions:** fit the rule on each training set, evaluate its loss on every observation in that split's validation set, average within that validation set, then combine the split averages using the declared weights. To compare two or more candidate rules, apply the same schedule and subtract their validation losses within each split before averaging; this is the paired comparison.

The following choices give standard procedures:

- **Holdout:** one split, with $T$ the chosen training set, $V=T^c$, and weight $1$.
- **Leave-one-out:** for $n\ge2$, use $n$ splits $T_i=[n]\setminus\{i\}$, $V_i=\{i\}$, with weights $1/n$.
- **Leave-$p$-out:** for $n\ge2$ and $1\le p<n$, use one split for every $p$-element subset $J\subseteq[n]$, with $T_J=J^c$, $V_J=J$, and weight $1/\binom np$.
- **$K$-fold:** for $2\le K\le n$ and a partition $I_1,\ldots,I_K$ into nonempty folds, use $T_j=I_j^c$, $V_j=I_j$, and $w_j=|I_j|/n$; for equal folds this is $1/K$.
- **Repeated $K$-fold:** for $n\ge2$, $2\le K\le n$ and $R\ge1$, apply the $K$-fold schedule to each of $R$ declared partitions and give fold $I_{rj}$ weight $|I_{rj}|/(Rn)$. If partitions are randomized, record their independent randomization law and average under that law or over the declared finite repetitions.

These instructions define estimates only. Their validity as estimates of a deployment target depends on matching the split, sampling unit, training size, and averaging law to that target.
