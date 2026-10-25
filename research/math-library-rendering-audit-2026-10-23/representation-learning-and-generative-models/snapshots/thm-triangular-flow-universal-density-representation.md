---
id: thm-triangular-flow-universal-density-representation
kind: theorem
title: "Positive densities with smooth conditional CDFs admit an exact triangular-flow representation"
status: published
dependency_level: 2
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-normalizing-flow
  - thm-change-of-variables-density-for-diffeomorphic-flow
  - def-countable-choice
  - def-measure-with-density
  - def-jacobian-determinant-of-a-c-one-map
  - def-jacobian-matrix-and-gradient
  - thm-determinant-of-a-triangular-matrix
  - thm-euclidean-inverse-function-theorem
  - thm-lebesgue-measure-of-a-box-of-every-kind
aliases: []
sources:
  references:
    - title: "George Papamakarios, Eric Nalisnick, Danilo Jimenez Rezende, Shakir Mohamed, and Balaji Lakshminarayanan, Normalizing Flows for Probabilistic Modeling and Inference, arXiv:1912.02762v1"
      url: "https://arxiv.org/pdf/1912.02762v1"
    - title: "Dan Sheldon, COMPSCI 688: Probabilistic Graphical Models, Lecture 23: Normalizing Flows (annotated course notes)"
      url: "https://people.cs.umass.edu/~sheldon/teaching/cs688/lec/lec23-annotated.pdf"
---

## Statement

Assume the Axiom of Countable Choice. Let $d\ge1$ and let $p:\mathbb R^d\to(0,\infty)$ be a Lebesgue probability density. For $i=1,\ldots,d$, write $x_{<i}=(x_1,\ldots,x_{i-1})$, with $x_{<1}$ the unique element of $\mathbb R^0$. For each $i$, let $q_i:\mathbb R\times\mathbb R^{i-1}\to(0,\infty)$ be a positive continuous function, written $q_i(t\mid x_{<i})$, and suppose
$$p(x)=\prod_{i=1}^d q_i(x_i\mid x_{<i}),\qquad \int_{\mathbb R}q_i(t\mid x_{<i})\,dt=1$$
for every $x\in\mathbb R^d$ and every preceding-coordinate vector $x_{<i}$. Define the conditional cumulative distribution functions
$$F_i(t\mid x_{<i})=\int_{-\infty}^t q_i(s\mid x_{<i})\,ds.$$
Assume each $F_i$ is jointly $C^1$ in $(t,x_{<i})$, satisfies $\partial_tF_i(t\mid x_{<i})=q_i(t\mid x_{<i})$, and, for every fixed $x_{<i}$, the slice $t\mapsto F_i(t\mid x_{<i})$ is a strictly increasing bijection from $\mathbb R$ onto $(0,1)$. In each inverse below, $F_i^{-1}$ means the inverse in its first argument with the preceding coordinates held fixed.

Then there is a global $C^1$ diffeomorphism $T:(0,1)^d\to\mathbb R^d$ whose $i$th output coordinate depends only on the first $i$ input coordinates and which maps the uniform density $1$ on $(0,1)^d$ to the density $p$. Its inverse is
$$S_i(x)=F_i(x_i\mid x_{<i}),$$
and $T=S^{-1}$ is determined recursively by
$$x_1=F_1^{-1}(u_1),\qquad x_i=F_i^{-1}(u_i\mid x_{<i})\quad (i=2,\ldots,d).$$
This is an exact representational existence result; it makes no claim about finite-network approximation, trainability, or numerical performance.

## Statement references

[[def-countable-choice]] — Countable Choice is used by the change-of-variables and box-volume suppliers.

[Papamakarios et al., §2.2, PDF pp. 4–5; §3.1, PDF pp. 10–16](https://arxiv.org/pdf/1912.02762v1)

[Sheldon, COMPSCI 688 Lecture 23, PDF pp. 4–5](https://people.cs.umass.edu/~sheldon/teaching/cs688/lec/lec23-annotated.pdf)

## Facts & Assumptions

**Given:** Countable Choice, the density $p$, the factorization by the positive conditional density factors $q_i$, and the stated smoothness and bijectivity of each $F_i$.

[A1] The Axiom of Countable Choice, written $\mathrm{AC}_\omega$, asserts that every sequence of nonempty sets has a choice function. [[def-countable-choice]]

[F1] A normalizing flow is a finite composition of global $C^1$ diffeomorphisms between open equal-dimensional Euclidean domains; its base density defines a measure by integration. [[def-normalizing-flow]]

[F2] A nonnegative measurable density $f$ defines the measure $A\mapsto\int_A f\,d\lambda_d$. [[def-measure-with-density]]

[F3] The determinant of a triangular matrix is the product of its diagonal entries. [[thm-determinant-of-a-triangular-matrix]]

[F4] If $f:U\to\mathbb R^d$ is $C^1$ and $Df(a)$ is invertible, then $f$ has a $C^1$ local inverse near $a$. [[thm-euclidean-inverse-function-theorem]]

[F5] Under Countable Choice, a $C^1$ diffeomorphism transforms a nonnegative Lebesgue density $r$ by the formula $r\circ T^{-1}\,|\det D(T^{-1})|$. [[thm-change-of-variables-density-for-diffeomorphic-flow]]

[F6] The Jacobian matrix is the matrix of the total derivative in standard bases, and its Jacobian determinant is the determinant of that matrix. [[def-jacobian-matrix-and-gradient]], [[def-jacobian-determinant-of-a-c-one-map]]

[F7] The open box $(0,1)^d$ is Lebesgue measurable and has measure $\prod_{i=1}^d(1-0)=1$ under Countable Choice. [[thm-lebesgue-measure-of-a-box-of-every-kind]]

## Proof

**Proof technique:** direct.

1.1 Define $S:\mathbb R^d\to(0,1)^d$ by $S_i(x)=F_i(x_i\mid x_{<i})$. Joint $C^1$ regularity makes $S$ $C^1$. Each $S_i$ depends only on $x_1,\ldots,x_i$, so $DS(x)$ is lower triangular; its $i$th diagonal entry is $\partial_{x_i}F_i(x_i\mid x_{<i})=q_i(x_i\mid x_{<i})>0$. By [F3] and the factorization hypothesis, $\det DS(x)=\prod_{i=1}^d q_i(x_i\mid x_{<i})=p(x)>0$. [given, F3, F6]

1.2 For any $u\in(0,1)^d$, choose $x_1=F_1^{-1}(u_1)$, then recursively choose the unique $x_i=F_i^{-1}(u_i\mid x_{<i})$. The slice bijections make every coordinate exist and be unique, and construction gives $S(x)=u$. Conversely, any $x$ with $S(x)=u$ must have these same coordinates by induction. Hence $S$ is bijective, and the recursive formula shows that $T=S^{-1}$ is triangular. [given, construct]

2.1 By step 1.1, $DS(x)$ is invertible at every $x$. Applying [F4] at each point gives a $C^1$ local inverse; because $S$ is globally bijective, each local inverse agrees with the same set-theoretic map $S^{-1}$. Therefore $S^{-1}$ is globally $C^1$, so $T$ is a global $C^1$ diffeomorphism. [F4, step 1.1, step 1.2]

3.1 By [F7], density $1$ on $(0,1)^d$ is a probability density. Apply [F5] to $T=S^{-1}$: the output density at $x$ is $1\cdot|\det DS(x)|=p(x)$ by step 1.1. Thus the uniform base pushes forward to the target density $p$, as claimed. Countable Choice is used here through [F5] and [F7]; the recursive inverse construction uses only uniqueness of each conditional quantile. [A1, F1, F2, F5, F7, step 1.1, step 2.1] ∎
