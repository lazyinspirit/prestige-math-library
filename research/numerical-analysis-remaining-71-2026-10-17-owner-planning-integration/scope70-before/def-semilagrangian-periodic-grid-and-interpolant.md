---
id: def-semilagrangian-periodic-grid-and-interpolant
kind: definition
title: "Periodic tensor grids and multilinear interpolation"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps: []
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "European Centre for Medium-Range Weather Forecasts, Numerical Methods, Meteorological Training Course Lecture Series, 2002"
      url: "https://www.ecmwf.int/sites/default/files/elibrary/2002/16948-numerical-methods.pdf"
    - title: "Lukas Einkemmer and Alexander Ostermann, On the error propagation of semi-Lagrange and Fourier methods for advection problems, Computers & Mathematics with Applications 69 (2015), 170–179"
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4375614/"
---

## Definition

Let $d\ge1$, let $\ell_1,\ldots,\ell_d>0$, and let $N_1,\ldots,N_d\ge1$ be integers. The periodic rectangular box is
$$\mathbb T^d_{\ell}:=\mathbb R^d/(\ell_1\mathbb Z\times\cdots\times\ell_d\mathbb Z).$$
Set $h_j:=\ell_j/N_j$. Its uniform tensor grid has nodes $x_{\boldsymbol i}=(i_1h_1,\ldots,i_dh_d)$, indexed by $0\le i_j<N_j$, with indices understood modulo $N_j$.

For node data $V_{\boldsymbol i}$ and a lift $x\in\mathbb R^d$ of a point on the torus, define
$$q_j:=\left\lfloor x_j/h_j\right\rfloor,\qquad \theta_j:=x_j/h_j-q_j\in[0,1),$$
and for $\boldsymbol\epsilon\in\{0,1\}^d$ define
$$w_{\boldsymbol\epsilon}(x):=\prod_{j=1}^d\theta_j^{\epsilon_j}(1-\theta_j)^{1-\epsilon_j}.$$
The tensor-product multilinear interpolant is
$$\mathcal I_hV(x):=\sum_{\boldsymbol\epsilon\in\{0,1\}^d}w_{\boldsymbol\epsilon}(x)V_{([q_1+\epsilon_1]_{N_1},\ldots,[q_d+\epsilon_d]_{N_d})},$$
where $[k]_N$ is the residue in $\{0,\ldots,N-1\}$. The formula is unchanged when a period $\ell_j$ is added to $x_j$, so it defines an interpolant on $\mathbb T^d_{\ell}$. If $N_j=1$, the two corner indices in that coordinate coincide; the formula still gives the same node value.

For a continuous periodic function $v$, $\mathcal I_hv$ means the interpolant of its grid samples. Put $h:=\max_jh_j$.

## Convention diagram

The picture shows one lifted coordinate cell. The weights are $1-\theta$ at the left endpoint and $\theta$ at the right endpoint; periodic wrapping only changes the node indices.

```tikz
\begin{tikzpicture}[x=1.2cm,y=1cm]
  \draw[->] (0,0) -- (4.2,0);
  \fill (1,0) circle (2pt);
  \fill (3,0) circle (2pt);
  \fill (2.1,0) circle (2pt);
  \node[below] at (1,0) {$x_j$};
  \node[below] at (3,0) {$x_{j+1}$};
  \node[above] at (2.1,0) {$\widetilde{x}$};
  \draw[dashed] (2.1,0.05) -- (2.1,0.5);
  \draw[<->] (1,0.42) -- (2.1,0.42);
  \draw[<->] (2.1,0.42) -- (3,0.42);
  \node[above] at (1.55,0.42) {$\theta h_j$};
  \node[above] at (2.55,0.42) {$(1-\theta)h_j$};
\end{tikzpicture}
```

The diagram fixes the coordinate and weight convention only. The multidimensional interpolant is the product of the coordinate weights in the displayed formula.
