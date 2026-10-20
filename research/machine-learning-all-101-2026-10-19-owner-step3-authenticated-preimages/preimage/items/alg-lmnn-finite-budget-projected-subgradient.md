---
id: alg-lmnn-finite-budget-projected-subgradient
kind: algorithm
title: "Finite-budget projected-subgradient training for fixed-target LMNN"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - def-lmnn-fixed-target-objective
  - def-finite-sum
  - thm-lmnn-fixed-target-objective-is-convex
  - lem-lmnn-explicit-subgradient-and-data-bound
  - lem-symmetric-matrix-frobenius-isometry
  - lem-positive-semidefinite-cone-is-frobenius-closed
  - lem-svec-transports-frobenius-subgradients
  - thm-frobenius-projection-onto-psd-cone-is-spectral-clipping
  - alg-projected-subgradient-method
  - thm-projection-onto-a-nonempty-closed-convex-set
  - def-countable-choice
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Kilian Q. Weinberger and Lawrence K. Saul, Distance Metric Learning for Large Margin Nearest Neighbor Classification, JMLR 10 (2009), 207–244"
      url: "https://jmlr.org/papers/volume10/weinberger09a/weinberger09a.pdf"
    - title: "Sébastien Bubeck, Convex Optimization: Algorithms and Complexity, Foundations and Trends in Machine Learning 8(3–4) (2015)"
      url: "https://arxiv.org/pdf/1405.4980"
    - title: "Dimitri P. Bertsekas, Convex Analysis and Optimization, MIT 6.253 Complete Lecture Notes"
      url: "https://ocw.mit.edu/courses/6-253-convex-analysis-and-optimization-spring-2012/6c63c6219c60378bc27d5b4a9167f1bc_MIT6_253S12_lec_comp.pdf"
aliases: []
landmark: false
---

## Definition

Use the finite sample, fixed target sets, weight $\mu\in[0,1]$, and objective $F_\mu$ defined by the LMNN objective item. The inputs are an integer budget $T\ge1$, an initial matrix $M_0\in\mathbb S_+^d$, and positive step sizes $\eta_0,\ldots,\eta_{T-1}$. Let $m=d(d+1)/2$ and use $\operatorname{svec}:\mathbb S^d\to\mathbb R^m$, the linear isometry that lists the diagonal entries followed by the $\sqrt2$-scaled upper-triangle entries in lexicographic order. Set $C'=\operatorname{svec}(\mathbb S_+^d)$ and $f(z)=F_\mu(\operatorname{svec}^{-1}(z))$; this is a nonempty closed convex domain and $f$ is convex.

Initialize $z_0=\operatorname{svec}(M_0)$. At each $t=0,\ldots,T-1$, put $M_t=\operatorname{svec}^{-1}(z_t)$ and compute the Frobenius subgradient

$$G_t=(1-\mu)\sum_i\sum_{j\in N_i}C_{ij}+\mu\sum_i\sum_{j\in N_i}\sum_{l:y_l\ne y_i}\gamma_{ijl}(M_t)(C_{ij}-C_{il}),$$

where $C_{ij}=(x_i-x_j)(x_i-x_j)^T$, $h_{ijl}(M)=1+\langle M,C_{ij}-C_{il}\rangle_F$, $\gamma_{ijl}(M)=1$ when $h_{ijl}(M)>0$, and $\gamma_{ijl}(M)=0$ when $h_{ijl}(M)\le0$. Supply the successful oracle response $(f(z_t),\operatorname{svec}(G_t))$ to the finite-budget projected-subgradient method on $C'$ with step size $\eta_t$. It updates $z_{t+1}=P_{C'}(z_t-\eta_t\operatorname{svec}(G_t))$, where $P_{C'}$ is the unique nearest point in the Euclidean norm. Equivalently, form $A_t=M_t-\eta_tG_t$, choose an orthogonal eigendecomposition $A_t=U_t\operatorname{diag}(\lambda_{t,1},\ldots,\lambda_{t,d})U_t^T$, and set

$$M_{t+1}=U_t\operatorname{diag}\bigl(\max\{\lambda_{t,1},0\},\ldots,\max\{\lambda_{t,d},0\}\bigr)U_t^T.$$

All $T$ oracle calls succeed; the generic method reports budget-exhausted after $T$ updates. The requested final iterate is $M_T$; its status, completed update count, weighted average, and least-index best observed iterate are also defined by the generic method. The explicit spectral-clipping implementation is choice-free. The equivalent abstract Hilbert-projection interface assumes Countable Choice, as in the general closest-point theorem; that axiom branch is retained separately for the conditional analysis. This finite procedure makes no unconditional convergence, optimality, empirical-error, or generalization claim.

## Definition references

[[def-lmnn-fixed-target-objective|Sample, fixed targets, and objective]]

[[def-finite-sum|Finite-sum convention]]

[[thm-lmnn-fixed-target-objective-is-convex|Convexity of the objective and feasible cone]]

[[lem-lmnn-explicit-subgradient-and-data-bound|Explicit subgradient, kink convention, and uniform bound]]

[[lem-symmetric-matrix-frobenius-isometry|Symmetric vectorization]]

[[lem-positive-semidefinite-cone-is-frobenius-closed|Closedness of the feasible cone]]

[[lem-svec-transports-frobenius-subgradients|Transport of domain properties and subgradients]]

[[thm-frobenius-projection-onto-psd-cone-is-spectral-clipping|Exact Frobenius projection formula]]

[[alg-projected-subgradient-method|Published finite-budget projected-subgradient procedure]]

[[thm-projection-onto-a-nonempty-closed-convex-set|Abstract Hilbert projection interface]]

[[def-countable-choice|Countable Choice for that abstract interface]]

[Weinberger and Saul, Appendix A.1–A.3, printed pp. 238–241](https://jmlr.org/papers/volume10/weinberger09a/weinberger09a.pdf)

[Bubeck, §3.1, printed pp. 262–266](https://arxiv.org/pdf/1405.4980)

[Bertsekas, MIT 6.253 Lecture 15, printed pp. 200–205](https://ocw.mit.edu/courses/6-253-convex-analysis-and-optimization-spring-2012/6c63c6219c60378bc27d5b4a9167f1bc_MIT6_253S12_lec_comp.pdf)
