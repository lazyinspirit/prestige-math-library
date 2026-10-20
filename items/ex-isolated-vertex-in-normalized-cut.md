---
id: ex-isolated-vertex-in-normalized-cut
kind: example
title: "An isolate is excluded from Ncut and reinserted separately"
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
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
---

## Example

Let $V=\{1,2,3\}$ with $w_{12}=w_{21}=1$ and every other weight zero. For the algorithm inputs, take $n=3$, $p=1$, $x_i=i\in\mathbb R$ for $1\le i\le3$, and the constant deterministic graph builder $G:(\mathbb R^1)^3\to\mathbb R^{3\times3}$ defined by $G(y_1,y_2,y_3)=W=(w_{ij})$ for every input tuple. In mode $\texttt{normalized}$ with $k=1$ and row normalization disabled (the default), the positive-degree vertex set is $V_+=\{1,2\}$, the active Ncut cluster is $\{1,2\}$ with value $0$, and vertex $3$ is returned separately as the singleton $\{3\}$ without entering any Ncut denominator.

## Example references

[Ulrike von Luxburg, A Tutorial on Spectral Clustering, Statistics and Computing 17(4), 2007](https://cs.brown.edu/courses/csci1820/spring-2022/resources/vonLuxburg_2007.pdf)

[Jean Gallier, Notes on Elementary Spectral Graph Theory: Applications to Graph Clustering Using Normalized Cuts, 2013](https://arxiv.org/pdf/1311.2492)

## Graph diagram

Vertices $1$ and $2$ are joined by their unit-weight edge; vertex $3$ is isolated. The relative coordinates are only for display.

```tikz
\begin{tikzpicture}
\node[draw,circle] (v1) at (0,0) {$1$};
\node[draw,circle] (v2) at (1.5,0) {$2$};
\node[draw,circle] (v3) at (4,0) {$3$};
\draw (v1)--node[above] {$1$}(v2);
\end{tikzpicture}
```

## Facts & Assumptions

**Given:** $V=\{1,2,3\}$, with $w_{12}=w_{21}=1$ and every other weight zero, the data, dimensions, and constant graph builder $G$ from the Example (so the computed matrix is exactly $W$), normalized mode, $k=1$, and row normalization disabled.

[F1] [[def-finite-weighted-graph-laplacian]]: $d_i=\sum_jw_{ij}$, $V_+=\{i:d_i>0\}$, and $L_{\mathrm{sym},+}=D_+^{-1/2}L_+D_+^{-1/2}$.

[F2] [[def-ratio-cut-and-normalized-cut]]: Ncut sums $\operatorname{cut}(A_r,A_r^c)/\operatorname{vol}(A_r)$ over a partition of $V_+$ into nonempty parts.

[F3] [[lem-weighted-graph-laplacian-quadratic-form-and-kernel]]: the kernel consists of vectors constant on each support component.

[F4] [[alg-weighted-spectral-clustering]]: normalized mode uses only positive-degree vertices, chooses the prescribed zero-mode eigenvector first, runs the specified Lloyd updates, and appends isolates as separate singleton outputs.

## Verification

1.1 The degrees are $(1,1,0)$, so $V_+=\{1,2\}$, $D_+=I_2$, and $L_+=L_{\mathrm{sym},+}=\begin{pmatrix}1&-1\\-1&1\end{pmatrix}$. [given, F1, algebra]

2.1 The active support graph is connected, so [F3] gives a one-dimensional zero eigenspace spanned by $(1,1)$. Its prescribed unit vector is $q_0=(1,1)/\sqrt2$, and it is the single eigenvector used when $k=1$. [given, F3, F4, step 1.1, algebra]

3.1 Both embedding rows are $1/\sqrt2$. The first and only Lloyd center is the first row; both points receive its label, its mean remains $1/\sqrt2$, and the labels and center are unchanged. Thus the active cluster returned is $\{1,2\}$, after which [F4] appends $\{3\}$ separately. [given, F4, step 2.1, algebra]

4.1 The active part has cut $0$ and volume $d_1+d_2=2$, so its Ncut value is $0$. Vertex $3$ has volume $0$ but is not in $V_+$, so it appears in no Ncut denominator. [F1, F2, step 1.1, step 3.1, algebra] ∎
