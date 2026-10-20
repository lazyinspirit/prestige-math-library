---
id: lem-lmnn-explicit-subgradient-and-data-bound
kind: lemma
title: "LMNN hinge subgradient formula and a uniform data-dependent bound"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-lmnn-fixed-target-objective
  - def-finite-sum
  - thm-lmnn-fixed-target-objective-is-convex
  - def-subgradient-and-subdifferential
  - def-frobenius-matrix-norm
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-altered
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
proof_strategy: direct
---

## Statement

Fix the finite labeled sample, fixed target sets, and $\mu\in[0,1]$ of the LMNN objective. For each $j\in N_i$ and each impostor index $l$ with $y_l\ne y_i$, set $C_{ij}=(x_i-x_j)(x_i-x_j)^T$, $D_{ijl}=C_{ij}-C_{il}$, and $h_{ijl}(M)=1+\langle M,D_{ijl}\rangle_F$, where $\langle A,B\rangle_F=\sum_{r,s}A_{rs}B_{rs}$. Define $\gamma_{ijl}(M)=1$ if $h_{ijl}(M)>0$ and $\gamma_{ijl}(M)=0$ if $h_{ijl}(M)\le0$. Put

$$G(M)=(1-\mu)\sum_i\sum_{j\in N_i}C_{ij}+\mu\sum_i\sum_{j\in N_i}\sum_{l:y_l\ne y_i}\gamma_{ijl}(M)D_{ijl}.$$

For the convex objective $F_\mu$ on $\mathbb S_+^d$, a Frobenius subgradient at $M$ means a symmetric matrix $G$ such that $F_\mu(N)\ge F_\mu(M)+\langle G,N-M\rangle_F$ for every $N\in\mathbb S_+^d$. Then $G(M)$ is a subgradient at every $M\in\mathbb S_+^d$. Moreover, uniformly in $M$,

$$\|G(M)\|_F\le B_{\rm data}:=(1-\mu)\sum_i\sum_{j\in N_i}\|x_i-x_j\|_2^2+\mu\sum_i\sum_{j\in N_i}\sum_{l:y_l\ne y_i}\bigl(\|x_i-x_j\|_2^2+\|x_i-x_l\|_2^2\bigr).$$

At an exact hinge kink $h_{ijl}(M)=0$, the selected subgradient coefficient is $0$.

## Statement references

[[def-lmnn-fixed-target-objective|Fixed-target pull/push objective]]

[[thm-lmnn-fixed-target-objective-is-convex|Convexity on the PSD cone]]

[[def-subgradient-and-subdifferential|Subgradient inequality]]

[[def-frobenius-matrix-norm|Frobenius norm and its triangle inequality]]

[Weinberger and Saul, §3.2, printed pp. 216–218, and Appendix A.1, pp. 238–239](https://jmlr.org/papers/volume10/weinberger09a/weinberger09a.pdf)

[Bubeck, §3.1, printed pp. 262–266](https://arxiv.org/pdf/1405.4980)

[Bertsekas, MIT 6.253 Lecture 15, printed pp. 200–205](https://ocw.mit.edu/courses/6-253-convex-analysis-and-optimization-spring-2012/6c63c6219c60378bc27d5b4a9167f1bc_MIT6_253S12_lec_comp.pdf)

## Facts & Assumptions

**Given:** The finite sample, fixed target sets and weight $\mu$ in the Statement, and $M\in\mathbb S_+^d$.

[F1] The objective is the finite weighted sum of linear pull terms and positive-part hinge terms with affine arguments ([[def-lmnn-fixed-target-objective]]).

[F2] The objective is convex on $\mathbb S_+^d$ ([[thm-lmnn-fixed-target-objective-is-convex]]).

[F3] A subgradient is a vector whose inner product gives a global supporting affine lower bound on the convex function ([[def-subgradient-and-subdifferential]]).

[F4] The Frobenius norm is the Euclidean entry norm and satisfies the triangle inequality ([[def-frobenius-matrix-norm]]).

## Proof

1.1 For $a_{ij}=x_i-x_j$, the entrywise inner product satisfies $\langle M,C_{ij}\rangle_F=\sum_{r,s}M_{rs}(a_{ij})_r(a_{ij})_s=a_{ij}^TMa_{ij}=q_M(x_i,x_j)$. Thus each hinge has the form $\phi(M)=\max\{0,1+\langle M,D_{ijl}\rangle_F\}$, with affine argument $h_{ijl}(M)$. [F1, algebra]

1.2 For any $a\in\mathbb R^d$, $\|aa^T\|_F^2=\sum_{r,s}(a_ra_s)^2=(\sum_r a_r^2)^2$, so $\|C_{ij}\|_F=\|x_i-x_j\|_2^2$. By [F4], $\|D_{ijl}\|_F\le\|C_{ij}\|_F+\|C_{il}\|_F=\|x_i-x_j\|_2^2+\|x_i-x_l\|_2^2$. [F4, algebra]

2.1 If $h_{ijl}(M)>0$, then $\phi(M)=h_{ijl}(M)$ and $\phi(N)\ge h_{ijl}(N)=\phi(M)+\langle D_{ijl},N-M\rangle_F$ for every $N$. If $h_{ijl}(M)\le0$, then $\phi(M)=0$ and $\phi(N)\ge0=\phi(M)+\langle0,N-M\rangle_F$ for every $N$. Hence $\gamma_{ijl}(M)D_{ijl}$ is a subgradient of this hinge, including the selected zero coefficient at equality. [step 1.1, algebra]

3.1 Each $C_{ij}$ and $D_{ijl}$ is symmetric, so their weighted sum $G(M)$ is symmetric. Each pull term is linear with Frobenius subgradient $C_{ij}$. Adding its supporting equality to the hinge supporting inequalities in step 2.1, weighted by the nonnegative coefficients $1-\mu$ and $\mu$, proves $F_\mu(N)\ge F_\mu(M)+\langle G(M),N-M\rangle_F$ for every $N\in\mathbb S_+^d$. Thus $G(M)$ is a subgradient by [F3]. [step 1.1, step 2.1, F2, F3, algebra]

4.1 Since each $\gamma_{ijl}(M)\in\{0,1\}$, the triangle inequality and step 1.2 give $\|G(M)\|_F\le(1-\mu)\sum_{i,j\in N_i}\|C_{ij}\|_F+\mu\sum_{i,j\in N_i,l:y_l\ne y_i}\|D_{ijl}\|_F\le B_{\rm data}$. The bound is finite because the sample and all index sets are finite, and it is independent of $M$. [step 1.2, given, F4, algebra] ∎
