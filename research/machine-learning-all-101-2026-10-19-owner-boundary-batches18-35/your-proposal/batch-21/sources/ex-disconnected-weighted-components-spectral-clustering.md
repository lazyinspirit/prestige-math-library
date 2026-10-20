---
id: ex-disconnected-weighted-components-spectral-clustering
kind: example
title: "Disconnected weighted components are zero-cut clusters"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 5
deps:
  - def-finite-weighted-graph-laplacian
  - def-ratio-cut-and-normalized-cut
  - lem-weighted-graph-laplacian-quadratic-form-and-kernel
  - alg-weighted-spectral-clustering
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Ulrike von Luxburg, A Tutorial on Spectral Clustering, Statistics and Computing 17(4), 2007"
      url: "https://cs.brown.edu/courses/csci1820/spring-2022/resources/vonLuxburg_2007.pdf"
    - title: "Jean Gallier, Notes on Elementary Spectral Graph Theory: Applications to Graph Clustering Using Normalized Cuts, 2013"
      url: "https://arxiv.org/pdf/1311.2492"
verification:
  precheck: pass
---

## Example

Let $V=\{1,2,3,4\}$ and set $w_{12}=w_{21}=2$, $w_{34}=w_{43}=3$, with every other entry zero. For the algorithm inputs, take $n=4$, $p=1$, $x_i=i\in\mathbb R$ for $1\le i\le4$, and the constant deterministic graph builder $G:(\mathbb R^1)^4\to\mathbb R^{4\times4}$ defined by $G(y_1,y_2,y_3,y_4)=W=(w_{ij})$ for every input tuple. Use mode $\texttt{ratio}$ and $k=2$. The partition $\{1,2\},\{3,4\}$ has RatioCut and Ncut equal to $0$, and deterministic unnormalized spectral clustering with $k=2$ returns these two components under the specified eigenspace and farthest-first tie rules.

## Example references

[Ulrike von Luxburg, A Tutorial on Spectral Clustering, Statistics and Computing 17(4), 2007](https://cs.brown.edu/courses/csci1820/spring-2022/resources/vonLuxburg_2007.pdf)

[Jean Gallier, Notes on Elementary Spectral Graph Theory: Applications to Graph Clustering Using Normalized Cuts, 2013](https://arxiv.org/pdf/1311.2492)

## Graph diagram

The four circles are vertices; the left edge has weight $2$ and the right edge has weight $3$. There are no other edges. The drawing separates components for readability; the verification uses the explicit matrix.

```tikz
\begin{tikzpicture}
\node[draw,circle] (v1) at (0,0) {$1$};
\node[draw,circle] (v2) at (1.5,0) {$2$};
\draw (v1)--node[above] {$2$}(v2);
\node[draw,circle] (v3) at (4,0) {$3$};
\node[draw,circle] (v4) at (5.5,0) {$4$};
\draw (v3)--node[above] {$3$}(v4);
\end{tikzpicture}
```

## Facts & Assumptions

**Given:** $V=\{1,2,3,4\}$ with the only positive weights $w_{12}=w_{21}=2$ and $w_{34}=w_{43}=3$; the data, dimensions, constant graph builder $G$, mode $\texttt{ratio}$, and $k=2$ are as specified in the Example, so the algorithm computes exactly this $W$; RatioCut and Ncut use the definitions in the cited supplier.

[F1] [[def-finite-weighted-graph-laplacian]]: $d_i=\sum_jw_{ij}$, $L=D-W$, and support components are determined by edges with positive weight.

[F2] [[def-ratio-cut-and-normalized-cut]]: RatioCut divides each part cut by cardinality; Ncut divides by volume.

[F3] [[lem-weighted-graph-laplacian-quadratic-form-and-kernel]]: $\ker L$ consists of vectors constant on each support component.

[F4] [[alg-weighted-spectral-clustering]]: the algorithm selects the first $k$ eigenvectors ordered by the eigenvalues of $L$, then applies the stated deterministic farthest-first and Lloyd rules.

## Verification

1.1 The degrees are $(2,2,3,3)$ and $$L=\begin{pmatrix}2&-2&0&0\\-2&2&0&0\\0&0&3&-3\\0&0&-3&3\end{pmatrix}.$$ Each $2\times2$ block with edge weight $a$ has eigenvectors $(1,1)$ and $(1,-1)$ with eigenvalues $0$ and $2a$. Thus the eigenvalues of $L$ are $0,0,4,6$, and [F3] identifies the zero eigenspace as the componentwise-constant vectors. [given, F1, F3, algebra]

2.1 For $A_1=\{1,2\}$ and $A_2=\{3,4\}$ there is no crossing edge, so both cuts are $0$; the part sizes are $2,2$ and volumes are $4,6$. Therefore both RatioCut and Ncut equal $0$. Since their summands are nonnegative, this partition attains the combinatorial minimum for both objectives. [given, F2, step 1.1, algebra]

2.2 The prescribed first zero-mode vector is $q_0=\frac12(1,1,1,1)$. The projection of $e_1$ onto the zero eigenspace is $(1/2,1/2,0,0)$; subtracting its projection onto $q_0$ gives $(1/4,1/4,-1/4,-1/4)$, whose norm is $1/2$. Thus the second basis vector is $q_1=\frac12(1,1,-1,-1)$. The first two eigenvectors therefore give the two row values $(1/2,1/2)$ on vertices $1,2$ and $(1/2,-1/2)$ on vertices $3,4$. [given, F3, F4, step 1.1, construct, algebra]

3.1 The first farthest-first center is the row for vertex $1$; a farthest row is in the second component, and the smallest-index tie rule selects vertex $3$. Each component's row has distance $0$ to its corresponding center and distance $1$ to the other. The initial assignments are therefore exactly $\{1,2\}$ and $\{3,4\}$; their means equal the two centers, so the first Lloyd update leaves both labels and centers unchanged and the algorithm returns this partition. Together with steps 2.1 and 2.2, this verifies the stated exact example output. [F4, step 2.1, step 2.2, algebra] ∎
