---
id: ex-affine-coupling-triangular-jacobian
kind: example
title: "A unit-scale affine coupling has a triangular Jacobian"
status: draft
dependency_level: 2
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
  - def-normalizing-flow
  - thm-change-of-variables-density-for-diffeomorphic-flow
  - def-countable-choice
  - def-measure-with-density
  - def-jacobian-determinant-of-a-c-one-map
  - def-jacobian-matrix-and-gradient
  - thm-determinant-of-a-triangular-matrix
aliases: []
sources:
  references:
    - title: "George Papamakarios, Eric Nalisnick, Danilo Jimenez Rezende, Shakir Mohamed, and Balaji Lakshminarayanan, Normalizing Flows for Probabilistic Modeling and Inference, arXiv:1912.02762v1"
      url: "https://arxiv.org/pdf/1912.02762v1"
    - title: "Dan Sheldon, COMPSCI 688: Probabilistic Graphical Models, Lecture 23: Normalizing Flows (annotated course notes)"
      url: "https://people.cs.umass.edu/~sheldon/teaching/cs688/lec/lec23-annotated.pdf"
---

## Example

Assume the Axiom of Countable Choice and let $p_U$ be a Lebesgue probability density on $\mathbb R^2$. Define the unit-scale affine coupling $T:\mathbb R^2\to\mathbb R^2$ by
$$T(u,v)=(u,u+v).$$
It is a global $C^1$ diffeomorphism with inverse $T^{-1}(x,y)=(x,y-x)$. Its Jacobian matrix is lower triangular,
$$DT(u,v)=\begin{pmatrix}1&0\\1&1\end{pmatrix},\qquad \det DT(u,v)=1.$$
The transformed model has density $p_X(x,y)=p_U(x,y-x)$. The first coordinate is unchanged and the second is shifted by the first.

## Example references

[Papamakarios et al., §3.1.1, PDF pp. 13–14](https://arxiv.org/pdf/1912.02762v1)

[Sheldon, COMPSCI 688 Lecture 23, Real-NVP, PDF pp. 5–6](https://people.cs.umass.edu/~sheldon/teaching/cs688/lec/lec23-annotated.pdf)

## Facts & Assumptions

**Given:** Countable Choice and a Lebesgue probability density $p_U$ on $\mathbb R^2$.

[A1] The Axiom of Countable Choice, written $\mathrm{AC}_\omega$, asserts that every sequence of nonempty sets has a choice function. [[def-countable-choice]]

[F1] A $C^1$ map is totally differentiable at every point with continuous derivative matrix; a global $C^1$ diffeomorphism has a $C^1$ inverse, and a flow transports its base measure by $\mu_X(B)=\mu_U(T^{-1}(B))$. [[def-normalizing-flow]]

[F2] Under Countable Choice, a $C^1$ diffeomorphism transforms density $p_U$ by $p_U\circ T^{-1}\,|\det D(T^{-1})|$. [[thm-change-of-variables-density-for-diffeomorphic-flow]]

[F3] The Jacobian matrix records the total derivative in standard coordinates, and the Jacobian determinant is its determinant. [[def-jacobian-matrix-and-gradient]], [[def-jacobian-determinant-of-a-c-one-map]]

[F4] The determinant of a lower triangular matrix is the product of its diagonal entries. [[thm-determinant-of-a-triangular-matrix]]

## Verification

**Given:** The objects and hypotheses in the Example.

1.1 Define $\widehat T(x,y)=(x,y-x)$. Direct substitution gives $\widehat T(T(u,v))=(u,v)$ and $T(\widehat T(x,y))=(x,y)$. Both maps are linear, so their first-order remainders vanish and their derivative matrices are constant; by [F1] they are $C^1$. Thus they are inverse bijections and $T$ is a global $C^1$ diffeomorphism. [given, F1, construct, algebra]

1.2 The linear map $T(u,v)=(u,u+v)$ has matrix $\begin{pmatrix}1&0\\1&1\end{pmatrix}$, which is its Jacobian matrix by [F3]. It is lower triangular, so [F4] gives determinant $1\cdot1=1$. Its inverse has Jacobian matrix $\begin{pmatrix}1&0\\-1&1\end{pmatrix}$, also lower triangular with determinant $1$. [given, F3, F4, algebra]

2.1 Apply [F2] to the base density $p_U$ and the inverse from step 1.1. Step 1.2 gives $|\det D(T^{-1})(x,y)|=1$, so the transformed density version is $p_X(x,y)=p_U(x,y-x)$. [A1, F1, F2, step 1.1, step 1.2] ∎
