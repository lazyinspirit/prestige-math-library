---
id: def-tensor-train-cores-bond-ranks-and-canonical-gauges
kind: definition
title: Tensor train cores, bond ranks, and canonical gauges
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-finite-tensor-arrays-and-frobenius-inner-product]
aliases: []
verification:
  precheck: n/a
sources:
  references:
    - title: "Ivan V. Oseledets, Tensor-Train Decomposition, SIAM Journal on Scientific Computing 33(5) (2011), §§2–4"
      url: "https://users.math.msu.edu/users/iwenmark/Teaching/CMSE890/TENSOR_oseledets2011.pdf"
    - title: "Mark D. Dupuy, Tensor Train Decomposition, full lecture notes, Chapter 1, §§1.2.1–1.2.5 (2026)"
      url: "https://msdupuy.github.io/teaching/TT_lectures_2026.pdf"
---

## Definition

Let $A\in\mathbb F^{n_1\times\cdots\times n_d}$ with $d\ge2$. A tensor-train (TT) representation consists of integers $r_0=r_d=1$, internal bond sizes $r_1,\ldots,r_{d-1}\in\mathbb N_0$, and cores
$$ G_k\in\mathbb F^{r_{k-1}\times n_k\times r_k}\quad(1\le k\le d) $$
such that
$$ A_{i_1,\ldots,i_d} =\sum_{\alpha_1=1}^{r_1}\cdots\sum_{\alpha_{d-1}=1}^{r_{d-1}} G_1(1,i_1,\alpha_1)G_2(\alpha_1,i_2,\alpha_2)\cdots G_d(\alpha_{d-1},i_d,1). $$
An empty bond index set gives an empty sum, hence the zero tensor; in particular, all internal bond sizes zero represent zero. A bond size $r_k$ is the storage dimension contracted between cores $k$ and $k+1$. The cut-$k$ unfolding groups modes $1,\ldots,k$ against $k+1,\ldots,d$ as fixed in [[def-finite-tensor-arrays-and-frobenius-inner-product]].

For an internal bond $k$, an invertible matrix $S\in\mathbb F^{r_k\times r_k}$ gives a gauge transformation by replacing the two adjacent cores with
$$ \widetilde G_k(\alpha,i,\beta)=\sum_{\gamma=1}^{r_k}G_k(\alpha,i,\gamma)S_{\gamma\beta}, \qquad \widetilde G_{k+1}(\beta,j,\eta)=\sum_{\gamma=1}^{r_k}(S^{-1})_{\beta\gamma}G_{k+1}(\gamma,j,\eta). $$
Their contraction is unchanged because $\sum_\beta S_{\gamma\beta}(S^{-1})_{\beta\gamma'}=\delta_{\gamma,\gamma'}$.

The left matricization of core $G_k$ has row index $(\alpha_{k-1},i_k)$ and column index $\alpha_k$. The core is left-isometric if this matrix $L_k$ satisfies $L_k^*L_k=I_{r_k}$. The right matricization has row index $\alpha_{k-1}$ and column index $(i_k,\alpha_k)$; the core is right-isometric if its matrix $R_k$ satisfies $R_kR_k^*=I_{r_{k-1}}$. A TT is in mixed canonical gauge about core $\ell$ when cores $k<\ell$ are left-isometric and cores $k>\ell$ are right-isometric.

## Diagram

The diagram shows the order-three pattern. Each box is one core, each horizontal wire is a bond index summed over in the entry formula, and each vertical leg is a free physical index. Thus leaving the physical legs open and contracting the two bond wires denotes exactly the core product defining $A_{i_1,i_2,i_3}$; the diagram is only a notation for that finite sum.

```tikz
\begin{tikzpicture}[baseline=(current bounding box.center), core/.style={draw,rectangle,minimum width=1cm,minimum height=.65cm}]
\node[core] (g1) at (0,0) {$G_1$};
\node[core] (g2) at (2,0) {$G_2$};
\node[core] (g3) at (4,0) {$G_3$};
\draw (g1.east) -- node[above] {$\alpha_1$} (g2.west);
\draw (g2.east) -- node[above] {$\alpha_2$} (g3.west);
\draw (g1.north) -- ++(0,.55) node[above] {$i_1$};
\draw (g2.north) -- ++(0,.55) node[above] {$i_2$};
\draw (g3.north) -- ++(0,.55) node[above] {$i_3$};
\end{tikzpicture}
```
