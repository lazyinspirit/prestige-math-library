---
id: ex-square-loop-mds-isomap-lle-differ
kind: example
title: "Classical MDS, ISOMAP, and LLE give different embeddings of a four-point square"
status: draft
dependency_level: 5
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
deps: [alg-classical-multidimensional-scaling, thm-classical-mds-recovers-euclidean-distances, alg-deterministic-neighbor-selection, alg-isomap, alg-locally-linear-embedding, thm-lle-trace-minimizers]
justified_by: []
aliases: []
proof_strategy: direct
sources:
  references:
    - title: "The Elements of Statistical Learning, second edition, corrected 12th printing"
      url: "https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS"
    - title: "Maria Cameron, Linear and Nonlinear Dimensionality Reduction, lecture notes"
      url: "https://www.math.umd.edu/~mariakc/NumMetDSML/LectureNotes/4-DimReduction.pdf"
verification:
  precheck: pass
---

## Example

Take four points $x_1=(0,0)$, $x_2=(1,0)$, $x_3=(1,1)$, $x_4=(0,1)$ around a unit square, use $k=1$ with ties broken by sample index and union symmetrization, and request dimension $q=1$. The neighbor graph has edges $\{1,2\}$, $\{2,3\}$, and $\{1,4\}$, so it unrolls to the path $4-1-2-3$. One valid top-eigenvector choice for classical MDS of the original Euclidean distances gives coordinates $Y_M=(-1/2,1/2,1/2,-1/2)^T$. ISOMAP gives coordinates congruent to $Y_I=(-1/2,1/2,3/2,-3/2)^T$. LLE gives coordinates proportional to $(a,-a,-1,1)^T$, where $a=\sqrt5-2$. These three one-dimensional configurations are pairwise noncongruent under translations and reflections.

The diagram labels the square’s sample indices. Blue edges are the union 1-nearest-neighbor graph; the dashed side $\{3,4\}$ belongs to the square geometry but is not retained by the tie rule.

```tikz
\begin{tikzpicture}[vertex/.style={draw,circle,minimum size=7mm}]
  \node[vertex] (x1) at (0,0) {$1$};
  \node[vertex] (x2) at (2,0) {$2$};
  \node[vertex] (x3) at (2,2) {$3$};
  \node[vertex] (x4) at (0,2) {$4$};
  \draw[blue,thick] (x1)--(x2)--(x3);
  \draw[blue,thick] (x1)--(x4);
  \draw[gray,dashed] (x3)--(x4);
\end{tikzpicture}
```

## Example references

[Hastie, Tibshirani, and Friedman, ESL II, §14.9, printed pp. 572–575](https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS)

[Cameron, Linear and Nonlinear Dimensionality Reduction, §§3, 6, and 7, PDF pp. 4–16](https://www.math.umd.edu/~mariakc/NumMetDSML/LectureNotes/4-DimReduction.pdf)

## Facts & Assumptions

**Given:** The four stated square points, $k=1$, deterministic index tie-breaking, union symmetrization, and requested dimension $q=1$.

[F1] Classical MDS forms $B=-\frac12H_nD^{\circ2}H_n$ and returns positive-eigenvalue coordinates ([[alg-classical-multidimensional-scaling]]).

[F2] For Euclidean distances, $B$ is the centered Gram matrix and all positive-eigenvalue coordinates reproduce the distances ([[thm-classical-mds-recovers-euclidean-distances]]).

[F3] The nearest-neighbor order is by distance then sample index, and union edges are selected by either endpoint ([[alg-deterministic-neighbor-selection]]).

[F4] ISOMAP uses the connected graph’s all-pairs shortest-path distances and then applies classical MDS ([[alg-isomap]]).

[F5] LLE uses affine local weights, forms $M=(I-W)^T(I-W)$, and under the simple constant-kernel condition returns the lowest positive eigenvectors ([[alg-locally-linear-embedding]]).

[F6] The LLE trace minimizers are exactly the q-dimensional eigenspaces for the q smallest positive eigenvalues ([[thm-lle-trace-minimizers]]).

## Verification

1.1 After centering the four points, their Gram matrix is $B=\begin{pmatrix}1/2&0&-1/2&0\\0&1/2&0&-1/2\\-1/2&0&1/2&0\\0&-1/2&0&1/2\end{pmatrix}$. The unit vector $u_x=(-1,1,1,-1)^T/2$ is an eigenvector with eigenvalue $1$, as is $u_y=(-1,-1,1,1)^T/2$; the other two eigenvalues are zero. Thus the x-coordinate choice $Y_M=u_x$ is a valid q=1 classical-MDS output, and it has repeated pairs $y_1=y_4$ and $y_2=y_3$. [given, F1, F2, algebra]

1.2 With one neighbor per row, each LLE weight is $1$. Thus $W_{12}=W_{21}=W_{32}=W_{41}=1$ and other entries are zero; the equations $Wy=y$ force $y_1=y_2=y_3=y_4$, so the kernel is exactly the constant vectors. The matrix is $M=(I-W)^T(I-W)=\begin{pmatrix}3&-2&0&-1\\-2&3&-1&0\\0&-1&1&0\\-1&0&0&1\end{pmatrix}$. Its symmetric subspace vectors $(c,c,d,d)$ have eigenvalues $0,2$. On antisymmetric vectors $(c,-c,-d,d)$ it acts by $(c,d)\mapsto(5c-d,d-c)$, whose characteristic equation is $\lambda^2-6\lambda+4=0$, giving eigenvalues $3-\sqrt5$ and $3+\sqrt5$. Hence the lowest positive eigenvalue is $3-\sqrt5$ with eigenvector $(a,-a,-1,1)^T$, where $a=\sqrt5-2\in(0,1)$. [given, F5, F6, algebra]

2.1 The distances from each square vertex to its two side-neighbors tie at $1$. By [F3], the neighbor lists are $N_1=(2)$, $N_2=(1)$, $N_3=(2)$, and $N_4=(1)$; the union graph has the stated edges and is the path $4-1-2-3$. Its graph distances are exactly the line distances of the centered vector $Y_I=(-1/2,1/2,3/2,-3/2)^T$. Since this graph-distance matrix is Euclidean in one dimension, [F2] shows that ISOMAP’s q=1 classical-MDS output is congruent to $Y_I$. In particular its distance between vertices 1 and 4 is $1$, unlike the zero MDS distance in step 1.1. [given, F2, F3, F4, step 1.1]

3.1 The LLE coordinate has four distinct values, unlike $Y_M$, so it is not congruent to the classical-MDS output. Its sorted consecutive gaps are proportional to $1-a,2a,1-a$, and these are not all equal: $2a=1-a$ would imply $3\sqrt5=7$, contradicting $45\ne49$ after squaring. The ISOMAP line has equal consecutive gaps, so LLE is not congruent to ISOMAP either. The distinct distance $d_{14}=1$ in ISOMAP and $d_{14}=0$ in classical MDS already separates those two outputs. [step 1.1, step 2.1, step 1.2, algebra] ∎
