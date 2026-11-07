---
id: ex-three-and-four-term-simplex-progression-encoding
kind: example
title: "Three- and four-term progression simplex encodings"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - lem-partite-simplex-encoding-of-cyclic-arithmetic-progressions
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Terence Tao, A variant of the hypergraph removal lemma, arXiv:math/0503572v2"
      url: "https://arxiv.org/pdf/math/0503572v2"
      locator: "Finite application following Corollary 1.14, printed p. 6; the explicit k=3,4 formulas are reconstructed locally."
    - title: "Terence Tao and Van H. Vu, Additive Combinatorics (2006), Chapter 11, §11.6"
      url: "https://www.cs.umd.edu/~gasarch/COURSES/752/S22/AddComb.pdf"
      locator: "Printed pp. 454–462 (PDF pp. 474–482), simplex-removal framework only; the exact all-order derivation and these finite examples are local."
---

## Example

Let $k\in\{3,4\}$, let $p>k$ be prime, and let $A\subseteq\mathbb F_p$. For each face omitting $j$, define
$$\lambda_j(\mathbf x)=\sum_{i\ne j}(i-j)x_i,\qquad a=\sum_i i x_i,\qquad r=-\sum_i x_i.$$
At $k=3$ the face forms are
$$\lambda_0=x_1+2x_2,\qquad \lambda_1=-x_0+x_2,\qquad \lambda_2=-2x_0-x_1,$$
and at $k=4$ they are
$$\lambda_0=x_1+2x_2+3x_3,\quad \lambda_1=-x_0+x_2+2x_3,\quad \lambda_2=-2x_0-x_1+x_3,\quad \lambda_3=-3x_0-2x_1-x_2.$$
In both cases $\lambda_j=a+jr$. Every pair $(a,r)\in\mathbb F_p^2$ has exactly $p^{k-2}$ coordinate tuples, so the face conditions $\lambda_j\in A$ have exactly $|A|p^{k-2}$ labelled copies with $r=0$; if $A=\varnothing$, this number is zero. For each fixed omitted class $j$, a face tuple occurs in at most one such $r=0$ copy, so these trivial copies are edge-disjoint within each face class.

The diagram shows the incidence patterns only: the triangle has one edge for each omitted class when $k=3$, and the tetrahedron has one triangular face for each omitted class when $k=4$. The face opposite vertex $j$ is the one tested by $\lambda_j$; the drawing does not represent the coordinate values.

```tikz
\begin{tikzpicture}
\coordinate (u0) at (0,0);
\coordinate (u1) at (2,0);
\coordinate (u2) at (1,1.5);
\node[below left] at (u0) {$0$};
\node[below right] at (u1) {$1$};
\node[above] at (u2) {$2$};
\draw (u0)--(u1)--(u2)--cycle;
\node at (1,-0.55) {$k=3$};

\coordinate (v0) at (4,0);
\coordinate (v1) at (6,0);
\coordinate (v2) at (5,1.5);
\coordinate (v3) at (5,0.65);
\node[below left] at (v0) {$0$};
\node[below right] at (v1) {$1$};
\node[above] at (v2) {$2$};
\node[right] at (v3) {$3$};
\draw (v0)--(v1)--(v2)--cycle;
\draw[dashed] (v0)--(v3);
\draw (v1)--(v3);
\draw (v2)--(v3);
\node at (5,-0.55) {$k=4$};
\end{tikzpicture}
```

## Example references

[Tao, application following Corollary 1.14](https://arxiv.org/pdf/math/0503572v2)

[Tao and Van H. Vu, *Additive Combinatorics*, Chapter 11, §11.6](https://www.cs.umd.edu/~gasarch/COURSES/752/S22/AddComb.pdf)

## Facts & Assumptions

**Given:** $k\in\{3,4\}$, a prime $p>k$, a set $A\subseteq\mathbb F_p$, and the face forms $\lambda_j$ from the Example.

[F1] For each $k\ge3$ and prime $p>k$, the face forms equal $a+jr$, each progression pair has exactly $p^{k-2}$ preimages, and the $r=0$ copies are edge-disjoint in every fixed face ([[lem-partite-simplex-encoding-of-cyclic-arithmetic-progressions]]).

## Verification

1.1 For $k=3$, expanding $a,r$ gives $a=x_1+2x_2$, $a+r=-x_0+x_2$, and $a+2r=-2x_0-x_1$, exactly the three displayed face forms. Given $(a,r)$ and $x_2$, the equations force $x_1=a-2x_2$ and $x_0=-r-x_1-x_2$, so there are exactly $p$ tuples for each pair. [given, F1, algebra]

1.2 For $k=4$, expansion gives $a=x_1+2x_2+3x_3$, $a+r=-x_0+x_2+2x_3$, $a+2r=-2x_0-x_1+x_3$, and $a+3r=-3x_0-2x_1-x_2$. Given $(a,r)$ and arbitrary $x_2,x_3$, the equations force $x_1=a-2x_2-3x_3$ and $x_0=-r-x_1-x_2-x_3$, so there are exactly $p^2$ tuples for each pair. [given, F1, algebra]

2.1 In either case, when $r=0$ all face values equal $a$, so precisely $a\in A$ give trivial copies. The fibre counts in steps 1.1 and 1.2 give $|A|p^{k-2}$ copies, including none when $A=\varnothing$; fixing all coordinates but $x_j$ and requiring $r=0$ uniquely determines the omitted coordinate, proving edge-disjointness in each face class. [step 1.1, step 1.2, F1, algebra] ∎
