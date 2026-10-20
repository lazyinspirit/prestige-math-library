---
id: ex-pc-chain-versus-collider-separating-sets
kind: example
title: "PC distinguishes a chain from an unshielded collider"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - alg-pc-causal-discovery
  - def-causal-discovery-oracle-regime
  - def-cpdag-markov-equivalence-class
  - lem-pc-separating-set-collider
  - thm-gaussian-zero-partial-correlation-is-conditional-independence
  - def-standard-normal-and-normal-laws
  - def-independent-random-elements
  - def-multivariate-normal-law
  - def-recursive-structural-causal-model-and-dag
  - def-d-separation-in-a-dag
  - def-axiom-of-choice
proof_strategy: direct
axiom_use: "Assume AC for the standard-normal and Gaussian conditional-independence interfaces; the covariance calculations are finite-dimensional."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Kalisch and Bühlmann, Estimating High-Dimensional Directed Acyclic Graphs with the PC-Algorithm, §2.3"
      url: "https://www.jmlr.org/papers/volume8/kalisch07a/kalisch07a.pdf"
    - title: "Meek, Causal Inference and Causal Explanation with Background Knowledge, §2.1"
      url: "https://arxiv.org/pdf/1302.4972"
---

## Example

Let all exogenous variables below be mutually independent standard normals.
The chain model is $X=U_X$, $Y=X+U_Y$, $Z=Y+U_Z$, with graph
$X\to Y\to Z$. The collider model is $X=U_X$, $Z=U_Z$, $Y=X+Z+U_Y$, with
graph $X\to Y\leftarrow Z$. For a perfect conditional-independence oracle,
PC retains an undirected chain in the first model and orients both arrows into
$Y$ in the second: the chain's unique endpoint separator contains $Y$, whereas
the collider's endpoint separator is empty.

```tikz
\begin{tikzpicture}[>=stealth, node distance=19mm]
  \node at (0,0) (x1) {$X$}; \node at (1.7,0) (y1) {$Y$}; \node at (3.4,0) (z1) {$Z$};
  \draw[->] (x1) -- (y1); \draw[->] (y1) -- (z1);
  \node at (1.7,-0.55) {chain};
  \node at (0,-1.5) (x2) {$X$}; \node at (1.7,-1.5) (y2) {$Y$}; \node at (3.4,-1.5) (z2) {$Z$};
  \draw[->] (x2) -- (y2); \draw[<-] (y2) -- (z2);
  \node at (1.7,-2.05) {collider};
\end{tikzpicture}
```

The diagrams use vertices for variables and arrows for structural parenthood;
they illustrate the two DAGs but are not used in the verification.

## Example references

[Kalisch and Bühlmann, §2.3](https://www.jmlr.org/papers/volume8/kalisch07a/kalisch07a.pdf)

[Meek, §2.1](https://arxiv.org/pdf/1302.4972)

## Facts & Assumptions

**Given:** Independent $N(0,1)$ exogenous variables and the two recursive Gaussian models in the Example.

[F1] Mutually independent standard-normal variables have a product Gaussian law, and finite affine images are multivariate normal. [[def-standard-normal-and-normal-laws]] [[def-independent-random-elements]] [[def-multivariate-normal-law]]

[F2] For a nondegenerate Gaussian vector, zero conditional covariance between two coordinates is equivalent to conditional independence given the remaining coordinates in the conditioning set. [[thm-gaussian-zero-partial-correlation-is-conditional-independence]]

[F3] PC deletes a pair at the first conditioning level with a separating set, records that set, orients an unshielded triple as a collider exactly when the middle vertex is absent from its recorded set, then applies R1–R3. [[alg-pc-causal-discovery]]

[F4] The middle vertex of an unshielded triple lies outside a valid separating set exactly when the triple is a collider. [[lem-pc-separating-set-collider]]

[F5] A Gaussian law is faithful to a DAG when its conditional independences agree exactly with that DAG's d-separations. [[def-causal-discovery-oracle-regime]]

[F6] A recursive SCM is Markovian when its exogenous variables are mutually independent; its displayed structural functions define the endogenous variables along the graph. [[def-recursive-structural-causal-model-and-dag]]

[F7] D-separation requires every path between the queried vertex sets to be blocked by the conditioning set. [[def-d-separation-in-a-dag]]

[A1] AC is assumed by the supplied Gaussian probability interfaces. [[def-axiom-of-choice]]

## Verification

**Proof technique:** direct covariance calculation and the population PC search.

1.1 The chain model's density is $\phi(x)\phi(y-x)\phi(z-y)$, where $\phi$ is the standard-normal density, so the displayed recursive equations factor along $X\to Y\to Z$; all three vertices are observed and [F6] gives the Markovian SCM condition. Its moments are $\operatorname{Var}(X)=1$, $\operatorname{Var}(Y)=2$, $\operatorname{Var}(Z)=3$, and distinct covariances $\operatorname{Cov}(X,Y)=1$, $\operatorname{Cov}(Y,Z)=2$, $\operatorname{Cov}(X,Z)=1$. The vector is multivariate normal by [F1], and its covariance matrix is positive definite because $(X,Y,Z)$ is an invertible triangular linear transform of $(U_X,U_Y,U_Z)$. The conditional covariance formula gives $\operatorname{Cov}(X,Z\mid Y)=1-\frac{1\cdot2}{2}=0,\quad \operatorname{Cov}(X,Y\mid Z)=1-\frac{1\cdot2}{3}=\frac13,\quad \operatorname{Cov}(Y,Z\mid X)=2-\frac{1\cdot1}{1}=1.$ Together with the nonzero marginal covariances, [F2] shows that the only conditional independence between distinct variables is $X\perp Z\mid Y$. By [F7], the only d-separated vertex pair is also $X,Z$ given $Y$: the adjacent pairs have an active one-edge path, and the $X$–$Z$ path is blocked only by conditioning on $Y$. Any conditional independence between vertex sets would imply the corresponding coordinate independences, so the set-level independence and d-separation models also agree. This verifies faithfulness in [F5]. [given, F1, F2, F5, F6, F7, A1, algebra]

1.2 The collider model's density is $\phi(x)\phi(z)\phi(y-x-z)$, so the equations factor along $X\to Y\leftarrow Z$; all vertices are observed and [F6] gives the Markovian SCM condition. Its variances are $\operatorname{Var}(X)=\operatorname{Var}(Z)=1$, $\operatorname{Var}(Y)=3$, its covariances are $\operatorname{Cov}(X,Y)=\operatorname{Cov}(Z,Y)=1$, and $\operatorname{Cov}(X,Z)=0$. The vector is multivariate normal by [F1], and this covariance matrix is positive definite by the invertible triangular map from the exogenous variables. The conditional covariances are $\operatorname{Cov}(X,Z\mid Y)=0-\frac{1\cdot1}{3}=-\frac13,\quad \operatorname{Cov}(X,Y\mid Z)=1,\quad \operatorname{Cov}(Y,Z\mid X)=1.$ Therefore [F2] shows that $X\perp Z$ marginally, but there is no conditional independence after conditioning on the third variable and no independence for an adjacent pair. By [F7], this is exactly the collider DAG's d-separation list: the collider path is blocked unconditioned and opened by conditioning on $Y$, while each adjacent pair has an active one-edge path. Any set conditional independence would imply coordinate independences, so [F5] holds at the set level as well. [given, F1, F2, F5, F6, F7, A1, algebra]

2.1 Thus PC does not delete any pair at level $0$. At level $1$, $X-Z$ is deleted and its separator is recorded as $\{Y\}$; the other two pairs cannot be deleted because their marginal covariances are nonzero. The sole unshielded triple has its middle vertex in the separator, so [F3] or [F4] leaves both edges undirected. No Meek rule applies without a directed edge, and the output is the undirected chain CPDAG. [F3, F4, step 1.1, cases]

3.1 PC deletes $X-Z$ at level $0$ and records the empty separator. It retains $X-Y$ and $Y-Z$ by their nonzero covariances. Since $Y$ is absent from the separator, [F3] orients $X\to Y\leftarrow Z$; the output is the collider CPDAG. These calculations verify both claimed outputs without relying on the diagrams. [F3, F4, step 1.2, cases] ∎
