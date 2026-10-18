---
id: ex-disconnected-unanchored-network-solve
kind: example
title: "A disconnected unanchored network gives a singular steady solve"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  - def-finite-weighted-network-diffusion-data
  - lem-weighted-network-energy-kernel-and-mass-balance
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
axiom_use: "No choice principle is used; the calculation is finite-dimensional."
sources:
  references:
    - title: "Fan R. K. Chung, Spectral Graph Theory, Chapter 1: Eigenvalues and the Laplacian of a Graph, CBMS 92 (1997), complete chapter text"
      url: "https://fanchung.ucsd.edu/cbms.pdf"
      locator: "Complete Chapter 1 text; §§1.2 and 1.4, printed pp. 2–14."
    - title: "Ward Whitt, Continuous-Time Markov Chains, full lecture notes (2006)"
      url: "https://www.columbia.edu/~ww2040/4106S11/CTMCchapter121906.pdf"
      locator: "§3.2, Theorems 3.1–3.2 and §3.4, Theorem 3.4, PDF pp. 7–16."
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Example

Let a closed four-vertex network have edges $(1,2)$ and $(3,4)$ with
conductances $1$ and $3$. Its steady stiffness is singular: each disconnected
positive-conductance component contributes an independent constant kernel
mode. The load $(1,0,0,0)^{\mathsf T}$ is incompatible with the first
component's Neumann balance, so it has no steady solution.

The two disconnected edges and their conductances are shown below; all vertex masses are one, and the right-hand side is $b=(1,0,0,0)^{\mathsf T}$.

\begin{center}
\begin{tikzpicture}[every node/.style={font=\small}]
  \node[circle,draw] (v1) at (0,0) {$1$};
  \node[circle,draw] (v2) at (1.7,0) {$2$};
  \node[circle,draw] (v3) at (3.5,0) {$3$};
  \node[circle,draw] (v4) at (5.2,0) {$4$};
  \draw[->] (v1) -- node[above] {$c=1$} (v2);
  \draw[->] (v3) -- node[above] {$c=3$} (v4);
  \node[below=4pt] at (v1) {$b_1=1$};
  \node[below=4pt] at (v2) {$b_2=0$};
  \node[below=4pt] at (v3) {$b_3=0$};
  \node[below=4pt] at (v4) {$b_4=0$};
\end{tikzpicture}
\end{center}

## Facts & Assumptions

**Given:** Vertices $\{1,2,3,4\}$, oriented edges $1\to2$ and $3\to4$,
conductances $1,3$, no Dirichlet vertices, and mass matrix $M=I$.

[F1] The stiffness is $L_C=BCB^{\mathsf T}$; its kernel consists of
componentwise constants on positive-conductance components, and its left
kernel is the same because it is symmetric
([[def-finite-weighted-network-diffusion-data]],
[[lem-weighted-network-energy-kernel-and-mass-balance]]).

## Verification

**Given:** The disconnected weighted path-pair network and the stated load.

1.1 Direct multiplication gives $$L_C=\begin{pmatrix}1&-1&0&0\\-1&1&0&0\\0&0&3&-3\\0&0&-3&3\end{pmatrix}.$$ The two independent component indicator vectors $(1,1,0,0)^{\mathsf T}$ and $(0,0,1,1)^{\mathsf T}$ lie in its kernel by [F1], so the steady matrix is singular. [F1, given, algebra]

1.2 The vector $(1,0,0,0)^{\mathsf T}$ has dot product $1$ with the first component indicator, while every vector in the image of the symmetric matrix $L_C$ is orthogonal to its kernel: for $z=L_Cx$ and $k\in\ker L_C$, $k^{\mathsf T}z=(L_Ck)^{\mathsf T}x=0$. Thus this load is not in the image and the Neumann steady equation has no solution. [F1, step 1.1, algebra] ∎

