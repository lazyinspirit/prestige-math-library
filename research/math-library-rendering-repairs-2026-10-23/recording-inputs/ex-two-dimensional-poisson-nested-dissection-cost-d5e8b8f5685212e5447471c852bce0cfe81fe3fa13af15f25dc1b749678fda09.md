---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/ex-two-dimensional-poisson-nested-dissection-cost.json
  precheck: pass
id: ex-two-dimensional-poisson-nested-dissection-cost
kind: example
title: The two-dimensional five-point Poisson matrix under nested dissection
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 7
deps:
  - alg-nested-dissection-ordering-on-regular-grids
  - thm-nested-dissection-grid-work-and-storage-bounds
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Jennifer Scott and Miroslav Tůma, Algorithms for Sparse Linear Systems, Chapter 8, §8.4"
      url: "https://library.oapen.org/bitstream/20.500.12657/62987/1/978-3-031-25820-6.pdf"
    - title: "David Bindel, CS 5220, Lecture 16: Sparse Direct Solvers, slides 13–14"
      url: "https://www.cs.cornell.edu/~bindel/class/cs5220-s10/slides/lec16.pdf"
---

## Example

For $k\ge1$, let $G_k$ be the grid on coordinate vertices $\{0,\ldots,k-1\}^2$, relabeled by the lexicographic zero-based bijection in [[alg-nested-dissection-ordering-on-regular-grids]], and let $A_k=4I-\operatorname{Adj}(G_k)$, the Dirichlet five-point Poisson matrix. The coordinate nested-dissection ordering recursively places its median row and column after the child rectangles. This example checks positive definiteness and instantiates the two-dimensional factorization bounds.

## Facts & Assumptions


**Given:** An integer $k\ge1$, the $k\times k$ nearest-neighbor grid $G_k$, and $A_k=4I-\operatorname{Adj}(G_k)$.

[F1] [[alg-nested-dissection-ordering-on-regular-grids]]: In dimension two the procedure orders child rectangles first and then appends the union of the selected median row and median column.

[F2] [[thm-nested-dissection-grid-work-and-storage-bounds]]: For a symmetric positive-definite matrix with this grid pattern and $k\ge2$, exact scalar multifrontal Cholesky under the stated ordering uses $O(n^{3/2})$ arithmetic work and $O(n\log n)$ symbolic factor storage for $n=k^2$. Storage counts allocated factor entries, including structural zeros, and excludes temporary contribution arrays. For $k=1$, both costs are $O(1)$.

## Verification


1.1 For every grid vertex $v$, let $b(v)=4-\deg_{G_k}(v)$ be its number of missing boundary neighbors. Expanding squares gives $$x^TA_kx=\sum_{\{v,w\}\in E(G_k)}(x_v-x_w)^2+\sum_{v\in G_k}b(v)x_v^2.$$ The right side is nonnegative. If it is zero, every adjacent pair has equal coordinates and every boundary vertex with $b(v)>0$ has value zero. The grid is connected and has a boundary vertex, so all coordinates are equal to zero. Hence $A_k$ is positive definite. [given, algebra]

2.1 By [F1], the order is the coordinate nested-dissection order on the five-point grid. The matrix is symmetric positive definite by step 1.1 and its off-diagonal pattern is exactly $G_k$. For $k\ge2$, applying [F2] with $n=k^2$ to exact scalar multifrontal Cholesky gives arithmetic work $O((k^2)^{3/2})=O(k^3)$ and symbolic factor storage $O(k^2\log(k^2))=O(k^2\log k)$, with the allocation convention of [F2]. For $k=1$, the matrix and factor each have one entry. [step 1.1, F1, F2, algebra]

3.1 Step 1.1 verifies the matrix hypothesis and step 2.1 gives the nested-dissection cost specialization. [step 1.1, step 2.1] ∎


## Remarks

For $k=5$, the orange vertices are the root separator $S=\{(i_1,i_2):i_1=2\text{ or }i_2=2\}$. Removing $S$ leaves four $2\times2$ child grids, labelled in lexicographic order of their lower corners. In $B_1=\{0,1\}^2$, the lower median in each coordinate is $0$, so its cyan separator is $T=\{(i_1,i_2)\in B_1:i_1=0\text{ or }i_2=0\}$.

```tikz
\begin{tikzpicture}[x=0.9cm,y=0.9cm]
\foreach \j in {0,...,4} {
  \draw[gray] (\j,0) -- (\j,4);
  \draw[gray] (0,\j) -- (4,\j);
}
\foreach \i in {0,...,4} {
  \foreach \j in {0,...,4} {
    \fill[black] (\i,\j) circle (2pt);
  }
}
\foreach \j in {0,...,4} {
  \fill[orange] (2,\j) circle (3.2pt);
  \fill[orange] (\j,2) circle (3.2pt);
}
\fill[cyan] (0,0) circle (3.2pt);
\fill[cyan] (0,1) circle (3.2pt);
\fill[cyan] (1,0) circle (3.2pt);
\node at (0.5,-0.5) {$B_1$};
\node at (0.5,4.5) {$B_2$};
\node at (3.5,-0.5) {$B_3$};
\node at (3.5,4.5) {$B_4$};
\node[orange,right] at (4.4,2) {$S$};
\node[cyan,left] at (-0.4,0.5) {$T$};
\draw[->] (0,-1) -- (4.5,-1) node[right] {$i_1$};
\draw[->] (-1,0) -- (-1,4.5) node[above] {$i_2$};
\node[below] at (0,-1) {$0$};
\node[below] at (2,-1) {$2$};
\node[below] at (4,-1) {$4$};
\end{tikzpicture}
```

Gray segments are the original nearest-neighbor edges, not fill edges. The algorithm in [F1] places the recursively computed orders of $B_1,B_2,B_3,B_4$ before $S$. Within $B_1$, the remaining singleton $(1,1)$ precedes $T$. Here $|S|=5+5-1=9$ and $|T|=2+2-1=3$, illustrating how separator sizes shrink under recursion. The diagram makes no additional complexity claim; positive definiteness and the work and storage bounds follow from the independent verification above.
