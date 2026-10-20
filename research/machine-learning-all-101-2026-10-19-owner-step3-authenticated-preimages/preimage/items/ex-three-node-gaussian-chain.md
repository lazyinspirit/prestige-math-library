---
id: ex-three-node-gaussian-chain
kind: example
title: "A three-node Gaussian chain has conditionally independent endpoints"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-undirected-graphical-model-and-markov-properties
  - thm-gaussian-precision-zero-conditional-independence
  - def-multivariate-normal-law
  - def-axiom-of-choice
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "The Elements of Statistical Learning, second edition"
      url: "https://course.ccs.neu.edu/ds4420sp20/readings/ESLII.pdf"
      locator: "§17.3.1, printed pp. 630–631"
    - title: "Robin Evans, Graphical Models course notes"
      url: "https://www.stats.ox.ac.uk/~evans/gms/lecturenotes.pdf"
      locator: "§5.1, printed p. 23"
---

## Example

Assume AC. Let $\Theta=\begin{pmatrix}2&-1&0\\-1&2&-1\\0&-1&2\end{pmatrix}$, $\Sigma=\Theta^{-1}$, and $X\sim N_3(0,\Sigma)$. Put an edge between $i$ and $j$ exactly when $\Theta_{ij}\ne0$. Then the graph is the path $1-2-3$, and $X_1$ and $X_3$ are conditionally independent given $X_2$.

## Example references

[The Elements of Statistical Learning, §17.3.1](https://course.ccs.neu.edu/ds4420sp20/readings/ESLII.pdf)

[Evans, Graphical Models, §5.1](https://www.stats.ox.ac.uk/~evans/gms/lecturenotes.pdf)

## Graph diagram

The vertices are the variables $X_1,X_2,X_3$; an edge is drawn exactly when the corresponding off-diagonal precision entry is nonzero. The missing $1-3$ edge records $\Theta_{13}=0$. The verification uses the quadratic form and the proved Gaussian theorem, not the diagram.

```tikz
\begin{tikzpicture}[every node/.style={draw,circle,minimum size=8mm}]
  \node (x1) at (0,0) {$X_1$};
  \node (x2) at (1.6,0) {$X_2$};
  \node (x3) at (3.2,0) {$X_3$};
  \draw (x1)--(x2);
  \draw (x2)--(x3);
\end{tikzpicture}
```

## Facts & Assumptions

**Given:** The Gaussian vector, precision matrix and graph convention in the Example.

[F1] The Gaussian precision-zero theorem says that $\Theta_{ij}=0$ exactly when $X_i$ and $X_j$ are conditionally independent given all other coordinates, for positive-definite covariance. [[thm-gaussian-precision-zero-conditional-independence]].

[F2] In a finite undirected graph, an edge is the unordered pair of its endpoints. [[def-undirected-graphical-model-and-markov-properties]].

[A1] AC is the explicit hypothesis of the Gaussian theorem; here it means every family of nonempty sets has a choice function. [[thm-gaussian-precision-zero-conditional-independence]] [[def-axiom-of-choice]].

## Verification

**Proof technique:** direct.

1.1 For $x=(x_1,x_2,x_3)^T$, $x^T\Theta x=x_1^2+x_3^2+(x_1-x_2)^2+(x_2-x_3)^2$. This is positive for every nonzero $x$: if the sum vanished, each square would vanish and successively $x_1=x_3=0$, $x_2=x_1=x_3=0$. Hence $\Theta$ is positive definite and $\Sigma=\Theta^{-1}$ is a valid positive-definite covariance. [given, algebra]

1.2 The only nonzero off-diagonal entries are $\Theta_{12}=\Theta_{21}=-1$ and $\Theta_{23}=\Theta_{32}=-1$, while $\Theta_{13}=\Theta_{31}=0$. By [F2], the graph is exactly the path $1-2-3$. [F2, given, algebra]

2.1 Theorem [F1] applies with $p=3$, covariance $\Sigma\succ0$ from step 1.1 and precision $\Theta=\Sigma^{-1}$. Since $\Theta_{13}=0$, it gives $X_1\perp\!\!\!\perp X_3\mid\sigma(X_2)$. [A1, F1, step 1.1, step 1.2] ∎
