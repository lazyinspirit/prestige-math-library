---
id: ex-pc-latent-confounding-limitations
kind: example
title: "A hidden common cause is observationally indistinguishable from an edge"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - alg-pc-causal-discovery
  - def-causal-discovery-oracle-regime
  - def-recursive-structural-causal-model-and-dag
  - def-independent-random-elements
  - def-standard-normal-and-normal-laws
  - def-multivariate-normal-law
  - thm-uniqueness-of-a-law-from-its-characteristic-function
  - def-cpdag-markov-equivalence-class
  - thm-dag-markov-equivalence-skeleton-vstructures
  - def-axiom-of-choice
  - lem-characteristic-function-of-a-normal-law
  - lem-characteristic-functions-under-affine-maps-and-independent-sums
  - lem-characteristic-function-of-a-multivariate-normal-law
  - thm-pc-oracle-correctness
proof_strategy: direct
axiom_use: "Assume AC for the Gaussian-law construction and uniqueness interfaces."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Kalisch and Bühlmann, Estimating High-Dimensional Directed Acyclic Graphs with the PC-Algorithm, §2.1"
      url: "https://www.jmlr.org/papers/volume8/kalisch07a/kalisch07a.pdf"
    - title: "Meek, Causal Inference and Causal Explanation with Background Knowledge, §1.1"
      url: "https://arxiv.org/pdf/1302.4972"
---

## Example

Let $L,U_X,U_Y$ be independent standard normals and set
$X=L+U_X$, $Y=L+U_Y$, with latent common-cause graph $L\to X$ and $L\to Y$;
only $X,Y$ are observed. Their joint law is the same as that of the observed
direct-edge model $X=V_X$, $Y=\tfrac12X+\varepsilon$, where
$V_X\sim N(0,2)$ and $\varepsilon\sim N(0,\tfrac32)$ are independent. A
perfect observational PC oracle therefore returns the undirected edge $X-Y$.
This identifies an association but cannot distinguish the hidden common cause
from a direct causal edge, and the latent model violates the observed-only
causal-sufficiency requirement.

```tikz
\begin{tikzpicture}[>=stealth, node distance=16mm]
  \node[draw,dashed,rounded corners,inner sep=2pt] at (0,0) (l) {$L$};
  \node at (1.6,0) (x) {$X$}; \node at (1.6,-1.3) (y) {$Y$};
  \draw[->] (l) -- (x); \draw[->] (l) -- (y);
  \node at (0,0.6) {latent model};
  \node at (4,0) (x2) {$X$}; \node at (5.6,0) (y2) {$Y$};
  \draw[->] (x2) -- (y2);
  \node at (4.8,0.6) {observed direct-edge model};
\end{tikzpicture}
```

Arrows represent structural causes, the dashed box marks the unobserved vertex,
and the second graph is a different model with the same observed law. The
diagram is explanatory; equality of laws and the PC output are verified below.

## Example references

[Kalisch and Bühlmann, §2.1](https://www.jmlr.org/papers/volume8/kalisch07a/kalisch07a.pdf)

[Meek, §1.1](https://arxiv.org/pdf/1302.4972)

## Facts & Assumptions

**Given:** Independent Gaussian exogenous variables in the latent model and independent variables $V_X,\varepsilon$ in the direct-edge model.

[F1] A recursive structural causal model may distinguish observed and latent vertices; its Markovian case uses mutually independent exogenous variables. [[def-recursive-structural-causal-model-and-dag]]

[F2] The causally sufficient discovery regime requires every graph vertex to be observed and the full-joint law to have a parent-kernel factorization, so an omitted latent vertex is outside that regime. [[def-causal-discovery-oracle-regime]]

[F3] Independent scalar normal inputs have product characteristic functions, and finite affine sums use the scalar normal characteristic formula and scalar uniqueness. [[def-independent-random-elements]] [[def-standard-normal-and-normal-laws]] [[lem-characteristic-functions-under-affine-maps-and-independent-sums]] [[lem-characteristic-function-of-a-normal-law]] [[thm-uniqueness-of-a-law-from-its-characteristic-function]]

[F4] A finite vector is multivariate normal when every scalar linear projection has its corresponding normal law. [[def-multivariate-normal-law]]

[F5] A multivariate normal law has characteristic function $\exp(it\cdot m-t^T\Sigma t/2)$, and this function uniquely determines its vector law. [[lem-characteristic-function-of-a-multivariate-normal-law]]

[F6] DAGs with the same skeleton and no unshielded colliders are Markov equivalent. [[thm-dag-markov-equivalence-skeleton-vstructures]]

[F7] With two vertices, a CPDAG leaves the only edge undirected when both orientations occur among equivalent DAGs. [[def-cpdag-markov-equivalence-class]]

[F8] PC retains an edge unless a tested conditioning set establishes independence; with two vertices it has no unshielded triples or Meek-rule configurations. [[alg-pc-causal-discovery]]

[F9] Under the causally sufficient perfect-oracle regime, population PC terminates and returns the DAG's CPDAG. [[thm-pc-oracle-correctness]]

[A1] AC is assumed by the Gaussian-law probability interfaces. [[def-axiom-of-choice]]

## Verification

**Proof technique:** covariance comparison and direct inspection of the two-vertex PC search.

1.1 Let $W_1,\ldots,W_m$ be a finite independent family of scalar normal variables with means $\mu_r$ and variances $\sigma_r^2$. For real coefficients $a_1,\ldots,a_m,b$, [F3] gives the characteristic function of $b+\sum_r a_rW_r$ as $\exp\!\left(it(b+\sum_r a_r\mu_r)-\frac{t^2}{2}\sum_r a_r^2\sigma_r^2\right)$; scalar uniqueness identifies this as the normal law with that mean and variance. Every scalar projection of a finite affine image of $W=(W_1,\ldots,W_m)$ is such a sum, so [F4] proves that every such image is multivariate normal, including when a projection has variance zero. [F3, F4, A1, construct]

2.1 In the latent model, $\mathbb E(X,Y)=(0,0)$, $\operatorname{Var}(X)=\operatorname{Var}(Y)=2$, and $\operatorname{Cov}(X,Y)=1$, by independence of $L,U_X,U_Y$. In the direct-edge model, $\mathbb E(X,Y)=(0,0)$, $\operatorname{Var}(X)=2$, $\operatorname{Cov}(X,Y)=\tfrac12\operatorname{Var}(X)=1$, and $\operatorname{Var}(Y)=\tfrac14(2)+\tfrac32=2$. Both vectors are Gaussian by step 1.1 and have the same positive-definite covariance matrix $\Sigma=\begin{pmatrix}2&1\\1&2\end{pmatrix}$, whose leading principal minors are $2$ and $3$. By [F5], both vector characteristic functions equal $\exp(-t^T\Sigma t/2)$ for every $t\in\mathbb R^2$; the uniqueness clause of [F5] gives equality of the full observed laws. [given, F5, step 1.1, A1, algebra]

3.1 The latent model is a finite recursive Markovian SCM with observed set $\{X,Y\}$ and omitted latent vertex $L$, so it does not satisfy [F2]. The direct-edge model has observed set $\{X,Y\}$ and independent exogenous variables; its full-joint law factors as $N(0,2)(dx)N(x/2,3/2)(dy)$, the root probability kernel for $X$ followed by the probability kernel for $Y$ given its parent $X$. In its two-vertex graph $X\to Y$, the only pair of nonempty disjoint endpoint sets is $\{X\},\{Y\}$, which is not d-separated because of the direct path; step 2.1 gives $\operatorname{Cov}(X,Y)=1$, so they are not independent. Thus this law is faithful to the direct-edge DAG, and the direct-edge model satisfies the observed-only Markovian factorization and faithfulness conditions in the discovery regime. Since the observed laws agree by step 2.1, no procedure using only that law can distinguish the two causal explanations. [F1, F2, step 2.1, algebra]

4.1 The common observed law has $\operatorname{Cov}(X,Y)=1\ne0$, so $X,Y$ are dependent and the perfect oracle does not delete their only edge. With only two vertices there is no unshielded triple and none of R1–R3 applies; by [F9] the regime-compliant run terminates, and its computed output is $X-Y$. Reversing the single edge in the direct-edge DAG keeps the same skeleton and no unshielded collider, so [F6] proves the reverse DAG is equivalent; [F7] therefore gives the same undirected CPDAG. The PC output reports adjacency but cannot recover the latent-versus-direct causal distinction. [F6, F7, F8, F9, step 2.1, step 3.1, A1, algebra] ∎

