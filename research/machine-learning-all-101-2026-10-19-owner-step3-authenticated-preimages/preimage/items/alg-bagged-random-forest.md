---
id: alg-bagged-random-forest
kind: algorithm
title: "Bagged random-forest construction on a fixed finite sample"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: not-applicable
dependency_level: 3
deps:
  - def-empirical-decision-tree
  - alg-cart-greedy-split
aliases: []
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: 'Leo Breiman, "Random Forests," Machine Learning 45 (2001), 5–32; full text hosted by the University of Chicago Macro Finance Research Program'
      url: 'https://mfm.uchicago.edu/wp-content/uploads/2020/06/Breiman-Random-Forests.pdf'
    - title: 'Trevor Hastie, Robert Tibshirani, and Jerome Friedman, The Elements of Statistical Learning, 2nd ed., corrected 12th printing, Chapter 15'
      url: 'https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS'
pipeline_run: machine-learning-all-101-2026-10-19
---

## Definition

Fix training data $D=((x_i,y_i))_{i=1}^n$ with $n\ge1$, features $x_i\in\mathbb R^p$ with $p\ge1$, and one response mode: regression with $y_i\in\mathbb R$, or classification with labels in a fixed ordered finite set $\mathcal C=\{c_1<\cdots<c_J\}$, $J\ge1$. Choose a finite depth cap $d_{\max}\ge0$, a tree count $B\ge1$, and a feature count $m\in\{1,\ldots,p\}$. Choosing $m=p$ disables feature randomization.

For every tree index $b\in\{1,\ldots,B\}$, draw $n$ independent uniform indices $I_{b1},\ldots,I_{bn}$ from $\{1,\ldots,n\}$ and put $N_{bi}=|\{r:I_{br}=i\}|$. For every possible binary node address $\nu$ of depth less than $d_{\max}$, draw a subset $M_{b,\nu}$ uniformly from the $m$-element subsets of $\{1,\ldots,p\}$. All bootstrap-index and feature-subset draws are mutually independent across trees, index positions, and node addresses. Write $\Theta_b=(N_{b1},\ldots,N_{bn},(M_{b,\nu})_\nu)$; thus the $\Theta_b$ are independent with a common law conditional on the fixed data and chosen settings.

At a node with bootstrap position set $I$, define $\bar y_I=|I|^{-1}\sum_{r\in I}y_{I_{br}}$ in regression. In classification define $q_{Ik}=|I|^{-1}|\{r\in I:y_{I_{br}}=c_k\}|$ and choose one fixed impurity, either misclassification $1-\max_kq_{Ik}$, Gini $1-\sum_kq_{Ik}^2$, or entropy $-\sum_kq_{Ik}\log q_{Ik}$, with $0\log0=0$.

For tree $b$, write the resampled rows as $D_b^*=((x_{I_{br}},y_{I_{br}}))_{r=1}^n$, so bootstrap positions remain distinct even when they contain the same original row. Build $T_b$ from $D_b^*$, starting at the root with position set $I=\{1,\ldots,n\}$. At a node of depth $d<d_{\max}$, form the candidate midpoint thresholds between consecutive distinct observed values using the coordinates in that node's set $M_{b,\nu}$. A candidate at coordinate $j$ and threshold $t$ partitions the current bootstrap positions into $I_L=\{r\in I:x_{I_{br},j}\le t\}$ and $I_R=\{r\in I:x_{I_{br},j}>t\}$; only candidates with both children nonempty are used. Score each candidate by $\sum_{r\in I_L}(y_{I_{br}}-\bar y_{I_L})^2+\sum_{r\in I_R}(y_{I_{br}}-\bar y_{I_R})^2$ in regression or by $|I_L|Q_{I_L}+|I_R|Q_{I_R}$ in classification, where $Q$ is the chosen impurity. Select a candidate of least score, breaking ties by coordinate index and then cut index, and recurse on its two children. If $d=d_{\max}$ or there is no candidate, make the node a leaf. When $m=p$, this is the greedy CART growth procedure on the bootstrap sample; when $m<p$, the same procedure restricts each node's candidate coordinates to its sampled subset. Each regression leaf predicts its sample mean; each classification leaf predicts its most frequent class, choosing the least class index in a tie. Define $h(x,\Theta_b)$ by following the unique tree path for $x$.

For regression, the finite-forest prediction is $B^{-1}\sum_{b=1}^B h(x,\Theta_b)$. For classification, it is the class receiving the largest number of votes, with the least class index breaking ties. For a training observation $i$, let $O_i=\{b:N_{bi}=0\}$. Its out-of-bag prediction is formed using only trees indexed by $O_i$, with the same regression average or classification vote rule; if $O_i=\varnothing$, no out-of-bag prediction is returned. An out-of-bag prediction is a diagnostic computed from this finite forest, not an exact identity for its full-forest prediction or risk.

The data flow is shown below. The arrows mean that the same fixed $D$ and the independent randomization vector determine each tree, and the stated aggregation combines the resulting predictions; the diagram records the procedure and is not a proof of a performance claim.

```tikz
\begin{tikzpicture}[>=stealth]
  \node[draw,rounded corners] (data) at (0,0) {fixed data $D$};
  \node[draw,rounded corners] (random) at (0,-1.2) {IID $\Theta_b$};
  \node[draw,rounded corners] (tree) at (3,-0.6) {$T_b(x)=h(x,\Theta_b)$};
  \node[draw,rounded corners] (aggregate) at (6,-0.6) {vote or average over $b=1,\ldots,B$};
  \draw[->] (data) -- (tree);
  \draw[->] (random) -- (tree);
  \draw[->] (tree) -- (aggregate);
\end{tikzpicture}
```

## Definition references

[[def-empirical-decision-tree|Finite tree structure, leaf predictions, and classification impurities]]

[[alg-cart-greedy-split|Greedy CART split scores, midpoint candidates, and deterministic ties]]

[Breiman, “Random Forests,” §§1, 3.1, and 11, printed pp. 5–7, 11, and 25–26](https://mfm.uchicago.edu/wp-content/uploads/2020/06/Breiman-Random-Forests.pdf)

[Hastie, Tibshirani, and Friedman, *The Elements of Statistical Learning*, §15.2, Algorithm 15.1, and §15.3.1, printed pp. 587–593](https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS)
