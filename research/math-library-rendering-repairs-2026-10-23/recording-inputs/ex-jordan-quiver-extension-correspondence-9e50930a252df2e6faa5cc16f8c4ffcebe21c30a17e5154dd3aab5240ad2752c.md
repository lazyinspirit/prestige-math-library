---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/ex-jordan-quiver-extension-correspondence.json
  precheck: pass
id: ex-jordan-quiver-extension-correspondence
kind: example
title: "The one-loop quiver extension correspondence in dimension two"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps:
  - def-axiom-of-choice
  - def-quiver-representation-stacks-and-exact-sequence-correspondences
  - lem-quiver-exact-sequence-correspondence-is-smooth-and-proper
  - def-grassmannian-subspaces
  - lem-flag-variety-of-a-vector-space
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered

sources:
  references:
    - title: "Maxim Kontsevich and Yan Soibelman, Cohomological Hall algebra, exponential Hodge structures and motivic Donaldson-Thomas invariants, §2.5"
      url: "https://arxiv.org/pdf/1006.2706v2"
    - title: "Dominic Joyce, Cohomological Hall Algebras, Week 2 notes, Geometry Advanced Class Trinity Term 2026, §4.1"
      url: "https://people.maths.ox.ac.uk/joyce/AdvancedClassTT26/Week2.pdf"
---

## Example

Let $Q$ have one vertex and one loop $x$:

```tikz
\begin{tikzpicture}[>=stealth,scale=2,transform shape]
  \node[circle,draw,inner sep=2.5pt] (v) at (0,0) {$\bullet$};
  \draw[->] (v) edge[loop above] node {$x$} (v);
\end{tikzpicture}
```

Take $\mathbf a=\mathbf b=1$. Then
$\operatorname{Rep}_Q(1)=\mathbb C$ and
$\operatorname{Rep}_Q(2)=\operatorname{Mat}_2(\mathbb C)$. The group
$\operatorname{GL}_1$ acts trivially on $\operatorname{Rep}_Q(1)$, while
$\operatorname{GL}_2$ acts on $\operatorname{Rep}_Q(2)$ by conjugation.
The extension atlas consists of pairs $(A,L)$ with $L$ a line in
$\mathbb C^2$ and $A(L)\subseteq L$. In a basis adapted to $L$,
$
A=\begin{pmatrix}\lambda&c\\0&\mu\end{pmatrix}.
$
The map $q$ records the scalars $(\lambda,\mu)$, and the map $p$ forgets
$L$.

## Facts & Assumptions

**Given:** AC, the one-vertex, one-loop quiver, the dimension vectors $\mathbf a=\mathbf b=1$, and the extension correspondence of [[def-quiver-representation-stacks-and-exact-sequence-correspondences]].

[F1] [[def-quiver-representation-stacks-and-exact-sequence-correspondences]]: for the loop arrow the off-diagonal extension coordinate belongs to $\operatorname{Hom}(\mathbb C,\mathbb C)$, and $q$ records the diagonal blocks while $p$ forgets the subrepresentation.

[F2] [[lem-quiver-exact-sequence-correspondence-is-smooth-and-proper]]: the map $q$ has relative stack dimension $\sum_{h:i\to j}b_i a_j-\sum_i a_i b_i$, and $p$ is proper.

[F3] [[def-grassmannian-subspaces]] and [[lem-flag-variety-of-a-vector-space]]: the space of lines in $\mathbb C^2$ is the projective Grassmannian $\mathbb P^1$.

[A1] [[def-axiom-of-choice]]: AC is inherited through the smoothness and properness supplier [F2] and the projective flag-variety supplier [F3]; the matrix and invariant-line calculations are choice-free.


## Verification

1.1 A one-loop representation of dimension one is a scalar, and change of basis by $\operatorname{GL}_1$ fixes it because conjugation by a scalar is trivial. A dimension-two representation is a $2\times2$ matrix with conjugation action. Preserving a chosen line makes the matrix upper triangular in an adapted basis, as displayed. [F1, given]

1.2 For this quiver the off-diagonal rank is $e=1$ and the unipotent vertex-block rank is $u=1$; hence $q$ has relative stack dimension $e-u=0$, agreeing with $-\chi_Q(1,1)=0$. For the splitting change represented by $t\in\operatorname{Hom}(\mathbb C,\mathbb C)$, the change-of-basis matrix $g_t=\begin{pmatrix}1&t\\0&1\end{pmatrix}$ acts by $A\mapsto g_tAg_t^{-1}$, sending $c$ to $c+(\mu-\lambda)t$. Thus when $\lambda\ne\mu$ the extension coordinate is removed by a unique splitting change, whereas when $\lambda=\mu$ it is unchanged; this is consistent with a zero-dimensional stack morphism, not a claim that all extension fibers are points. [F1, F2, algebra]

1.3 The fiber of $p$ at a scalar matrix $\lambda I$ is all of $\mathbb P^1$, so it is positive-dimensional. For a diagonal matrix with distinct eigenvalues, an invariant line must be an eigenspace, giving exactly two points. For a non-scalar Jordan matrix $\lambda I+N$ with $N^2=0$ and $\operatorname{rank}N=1$, an invariant line is $N$-stable; the nilpotent map induced on a one-dimensional line is zero, so the line lies in $\ker N$, which is the unique invariant line. These fibers agree with the closed incidence projection to $\operatorname{Mat}_2(\mathbb C)\times\mathbb P^1$ and do not affect properness. [F3, given]

2.1 The incidence equations $A(L)\subseteq L$ are closed in $\operatorname{Mat}_2(\mathbb C)\times\mathbb P^1$, so the forgetful map $p$ is projective and proper by [F2]. The example includes a loop and checks why stack-relative dimension and properness must be read from the specified correspondence, not from finiteness of its fibers. AC is inherited through [A1]. [A1, F2, F3, step 1.3] ∎
