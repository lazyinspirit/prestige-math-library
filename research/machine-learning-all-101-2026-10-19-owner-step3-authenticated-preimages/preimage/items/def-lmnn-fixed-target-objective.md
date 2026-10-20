---
id: def-lmnn-fixed-target-objective
kind: definition
title: "Fixed-target large-margin nearest-neighbor objective"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps: [def-mahalanobis-pseudometric, def-finite-sum, def-trace-of-a-square-matrix]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Kilian Q. Weinberger and Lawrence K. Saul, Distance Metric Learning for Large Margin Nearest Neighbor Classification, JMLR 10 (2009), 207–244"
      url: "https://jmlr.org/papers/volume10/weinberger09a/weinberger09a.pdf"
    - title: "Aurélien Bellet, Amaury Habrard, and Marc Sebban, A Survey on Metric Learning for Feature Vectors and Structured Data, arXiv:1306.6709v4 (2014)"
      url: "https://arxiv.org/pdf/1306.6709"
aliases: []
landmark: false
---

## Definition

Fix positive integers $d,n,C$, a finite labeled sample $(x_i,y_i)_{i=1}^{n}$ with $x_i\in\mathbb R^d$ and $y_i\in\{1,\ldots,C\}$, and a weight $\mu\in[0,1]$. For each $i$, fix in advance an integer $k_i$ with $0\le k_i\le|\{j\ne i:y_j=y_i\}|$ and a fixed target-neighbor set $N_i\subseteq\{j\ne i:y_j=y_i\}$ with $|N_i|=k_i$. These target sets do not change with the matrix being optimized. Let $\mathbb S_+^d$ denote the real symmetric matrices $M$ satisfying $v^TMv\ge0$ for all $v\in\mathbb R^d$, and put $q_M(x,x')=(x-x')^TM(x-x')$. For a real number $z$, let $[z]_+=\max\{z,0\}$. For $M\in\mathbb S_+^d$, define

$$\epsilon_{\rm pull}(M)=\sum_{i=1}^{n}\sum_{j\in N_i}q_M(x_i,x_j),\qquad \epsilon_{\rm push}(M)=\sum_{i=1}^{n}\sum_{j\in N_i}\sum_{\substack{1\le l\le n\\y_l\ne y_i}}[1+q_M(x_i,x_j)-q_M(x_i,x_l)]_+,$$

and $F_\mu(M)=(1-\mu)\epsilon_{\rm pull}(M)+\mu\epsilon_{\rm push}(M)$. This is the fixed-target LMNN training surrogate; it is not a test-error or calibrated/generalization-risk quantity. The quantity $q_M$ is a squared distance, while its square root is the Mahalanobis pseudometric.

## Definition references

[[def-mahalanobis-pseudometric|Positive-semidefinite matrices and squared Mahalanobis distance]]

[[def-finite-sum|Finite sums over the sample and fixed target sets]]

[[def-trace-of-a-square-matrix|Trace as the sum of diagonal entries]]

[Weinberger and Saul, §§3.1–3.2, printed pp. 214–218](https://jmlr.org/papers/volume10/weinberger09a/weinberger09a.pdf)

[Bellet, Habrard, and Sebban, §3.2, printed pp. 12–13](https://arxiv.org/pdf/1306.6709)
