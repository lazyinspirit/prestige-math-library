---
id: def-na-finite-mps-state-and-hermitian-hamiltonian
kind: definition
title: "Finite matrix-product states and Hermitian Hamiltonians"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-finite-tensor-arrays-and-frobenius-inner-product
  - def-tensor-train-cores-bond-ranks-and-canonical-gauges
aliases: []
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Ulrich Schollwöck, The density-matrix renormalization group in the age of matrix product states, Annals of Physics 326 (2011), §§4.1–4.4"
      url: "https://arxiv.org/pdf/1008.3477"
    - title: "Grégoire Misguich, Introduction to matrix-product states and tensor networks, complete lecture notes (2026), §§2.1–2.4"
      url: "https://arxiv.org/pdf/2606.24803"
    - title: "Ivan V. Oseledets, Tensor-Train Decomposition, SIAM Journal on Scientific Computing 33(5) (2011), §1"
      url: "https://users.math.msu.edu/users/iwenmark/Teaching/CMSE890/TENSOR_oseledets2011.pdf"
dependency_level: 2
---

## Definition

Fix a field $\mathbb F\in\{\mathbb R,\mathbb C\}$, an order $d\ge2$, and positive physical dimensions $n_1,\ldots,n_d$. The finite coefficient space is the tensor-array space $\mathcal H=\mathbb F^{n_1\times\cdots\times n_d}$ with the Frobenius pairing and lexicographic index conventions of [[def-finite-tensor-arrays-and-frobenius-inner-product]]. A **normalized finite state** is an array $\psi\in\mathcal H$ with $\|\psi\|_F=1$.

An **open-boundary matrix-product state (MPS), or tensor train (TT), presentation** is a TT core list from [[def-tensor-train-cores-bond-ranks-and-canonical-gauges]] with $r_0=r_d=1$ whose contraction is $\psi$. In particular, each core has shape $r_{k-1}\times n_k\times r_k$ and the shared internal indices are summed.

A **periodic MPS presentation** consists of positive integers $r_0,\ldots,r_d$ with $r_d=r_0$ and matrices $A_k^{(i_k)}\in\mathbb F^{r_{k-1}\times r_k}$ for each $1\le i_k\le n_k$. It represents the array
$$\psi_{i_1,\ldots,i_d}=\operatorname{tr}\!\left(A_1^{(i_1)}A_2^{(i_2)}\cdots A_d^{(i_d)}\right).$$
A finite MPS/TT state is a normalized array admitting at least one of these exact presentations; a presentation need not be unique or canonical.

A **finite Hermitian Hamiltonian input** is a linear endomorphism $H:\mathcal H\to\mathcal H$ whose matrix in the standard lexicographic basis satisfies $H^*=H$, where $*$ is conjugate transpose as in [[def-finite-tensor-arrays-and-frobenius-inner-product]]. This page uses only that finite-dimensional Hermitian input and makes no claim about how a physical model assembles it. For nonzero $\psi$, its Rayleigh energy is
$$\mathcal E_H(\psi)=\frac{\langle\psi,H\psi\rangle_F}{\|\psi\|_F^2};$$
for a normalized state this equals $\langle\psi,H\psi\rangle_F$.

## Diagram

The diagram records the open-boundary chain with a two-site center. Each box is a core or the contracted center tensor, each horizontal wire is a summed virtual bond index, and each vertical open leg is a free physical index. Cores to the left and right of the center are isometric in their respective matricizations when the chain is in mixed canonical gauge. These wire conventions abbreviate the exact finite index sums in the definition and are not used as a proof.

```tikz
\begin{tikzpicture}[baseline=(current bounding box.center),core/.style={draw,rectangle,minimum width=.82cm,minimum height=.58cm}]
\node[core] (g1) at (0,0) {$G_1$};
\node at (1.25,0) {$\cdots$};
\node[core] (gl) at (2.5,0) {$G_{k-1}$};
\node[core,minimum width=1.35cm,fill=gray!12] (x) at (4.35,0) {$X_{k,k+1}$};
\node[core] (gr) at (6.2,0) {$G_{k+2}$};
\node at (7.45,0) {$\cdots$};
\node[core] (gd) at (8.7,0) {$G_d$};
\draw (g1.east) -- (1.05,0);
\draw (1.45,0) -- (gl.west);
\draw (gl.east) -- node[above] {$\alpha_{k-1}$} (x.west);
\draw (x.east) -- node[above] {$\alpha_{k+1}$} (gr.west);
\draw (gr.east) -- (7.25,0);
\draw (7.65,0) -- (gd.west);
\draw (g1.north) -- ++(0,.42) node[above] {$i_1$};
\draw (gl.north) -- ++(0,.42) node[above] {$i_{k-1}$};
\draw (x.north) -- ++(0,.42) node[above] {$i_k,i_{k+1}$};
\draw (gr.north) -- ++(0,.42) node[above] {$i_{k+2}$};
\draw (gd.north) -- ++(0,.42) node[above] {$i_d$};
\end{tikzpicture}
```
