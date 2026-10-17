---
id: thm-one-closed-class-augmented-stationary-system-is-nonsingular
kind: theorem
title: "One closed class makes the normalized stationary system nonsingular"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-finite-column-stochastic-matrix-and-law
  - alg-finite-markov-closed-class-decomposition
  - lem-finite-transient-block-geometric-escape
  - thm-irreducible-finite-class-has-unique-invariant-vector
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Charles M. Grinstead and J. Laurie Snell, Introduction to Probability, Chapter 11"
      url: "https://math.dartmouth.edu/~prob/prob/OLD/prob.pdf"
      locator: "§§11.2–11.3, printed pp. 415–438; transient/closed block form and finite irreducible classes."
verification:
  precheck: pass
axiom_use: "No choice principle is used; all block operations are finite."
---

## Statement

Let $P$ be a finite real column-stochastic matrix. Suppose its positive-transition graph, defined in [[alg-finite-markov-closed-class-decomposition]], has exactly one closed class $C$, with transient remainder $U$. Then $\ker(I-P)$ is one-dimensional, and the system

$$(I-P)x=0,\qquad \mathbf 1^{\mathsf T}x=1$$

has exactly one real solution, a probability vector. More strongly, replacing any one row of $I-P$ by $\mathbf 1^{\mathsf T}$ gives a nonsingular $n\times n$ matrix, so the normalized stationary system can be reduced to a square solve.

## Facts & Assumptions

**Given:** A finite column-stochastic matrix $P$ with exactly one closed communicating class $C$.

[F1] [[def-finite-column-stochastic-matrix-and-law]]: $P$ is column-stochastic and $K=P^{\mathsf T}$ is the equivalent row-stochastic transition matrix.

[F2] [[alg-finite-markov-closed-class-decomposition]] defines the positive-transition graph by $j\to i$ when $P_{ij}>0$; its strongly connected components partition the state set, and a component is closed exactly when it has no outgoing edge.

[F3] [[lem-finite-transient-block-geometric-escape]]: a transient row block $T$ has $T^L\mathbf 1\le(1-\varepsilon)\mathbf 1$ for some $L$ and $\varepsilon>0$.

[F4] [[thm-irreducible-finite-class-has-unique-invariant-vector]]: on a finite irreducible class, every real invariant row vector is a scalar multiple of its positive invariant probability.


## Proof

**Given:** $P,C,U$ as above, and set $K=P^{\mathsf T}$.

**Proof technique:** block the row transition matrix into its closed class and transient states, then add the normalization row to the one-dimensional fixed space.

1.1 If $U=\varnothing$, $K=K_C$ is irreducible and row-stochastic. Otherwise, contract the strongly connected components of the finite positive-transition graph to form its component graph. This graph is acyclic, since a directed cycle would make its components mutually reachable and hence a single component. Every component therefore reaches a sink by following outgoing edges; the process terminates because the component graph is finite and acyclic. By [F2], sinks are exactly closed classes; C is the unique sink class. From each state in U, follow a component path to C. Each component edge is realized by a positive transition, and strong connectivity supplies finite positive paths from the current state to the source of each such transition and from its endpoint to the next transition's source. Concatenating these paths gives a positive path to C; before its first entry into C it stays in U. Order the states as $C,U$. Closedness makes the block form $K=\begin{pmatrix}K_C&0\\R&T\end{pmatrix}$, where T is row-substochastic; the path property gives the escape hypothesis in [F3]. [F1, F2, F3, given, construct]

2.1 Let $x$ satisfy $Px=x$ and put $w=x^{\mathsf T}$, so $wK=w$. In the block form of step 1.1, $w_U=w_UT$. If $U\ne\varnothing$, iterating $w_U=w_UT$ gives $w_U=w_UT^L$, and [F3] gives $T^L\mathbf 1\le(1-\varepsilon)\mathbf 1$. Hence $\|w_U\|_1=\|w_UT^L\|_1\le\sum_{i\in U}|(w_U)_i|\sum_{j\in U}(T^L)_{ij}\le(1-\varepsilon)\|w_U\|_1$, so $w_U=0$. With no transient states this conclusion is immediate. [F1, F3, step 1.1, algebra]

3.1 The remaining block satisfies $w_CK_C=w_C$. The class $C$ is strongly connected, so [F4] gives $w_C=s\pi_C$ for some real $s$ and the unique invariant probability $\pi_C$. Thus every real fixed vector of $P$ is a scalar multiple of $\pi_C^{\mathsf T}$, and $\ker(I-P)$ is one-dimensional. [F2, F4, step 2.1]

4.1 Fix any row index $r$, and let $A_r$ be $I-P$ with row $r$ replaced by $\mathbf 1^{\mathsf T}$. If $A_rz=0$, then $(I-P)z$ is zero outside coordinate $r$. But $\mathbf 1^{\mathsf T}(I-P)=0$ because P is column-stochastic, so its remaining coordinate is also zero. Hence $z=c\pi_C^{\mathsf T}$ by step 3.1; the replacement row gives $0=\mathbf 1^{\mathsf T}z=c$, so $z=0$. Therefore $A_r$ is nonsingular. [F1, step 3.1, algebra]

5.1 The vector $\pi_C^{\mathsf T}$ satisfies $(I-P)\pi_C^{\mathsf T}=0$ and has coordinate sum one. Any real solution of the normalized system is fixed by P and has the same normalization, so step 3.1 makes it $\pi_C^{\mathsf T}$. Thus it is the unique solution, including the one-state boundary case. [F1, F4, step 3.1, algebra] ∎
