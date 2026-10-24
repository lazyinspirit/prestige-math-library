---
id: def-qc-tqc-toric-checks
kind: definition
title: Toric star and plaquette checks
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps:
  - def-qc-tqc-periodic-square-cellulation
  - def-qc-pauli-matrices
  - def-qc-register-and-computational-basis
  - def-qc-tensor-map
  - lem-qc-tensor-product-basis-and-dimension
justified_by: []
proof_strategy: direct
axiom_use: "None; each check is an explicit finite tensor product."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Alexei Kitaev, Fault-tolerant quantum computation by anyons"
      url: https://arxiv.org/pdf/quant-ph/9707021
    - title: "Eric Dennis, Alexei Kitaev, Andrew Landahl, and John Preskill, Topological quantum memory"
      url: https://arxiv.org/pdf/quant-ph/0110143
---

## Definition

For the periodic cellulation in [[def-qc-tqc-periodic-square-cellulation]],
put one qubit on each edge, ordered lexicographically by $(i,j)$ and then with
horizontal before vertical edges. The physical Hilbert space is
$\mathcal H_L=(\mathbb C^2)^{\otimes E}$, where $E$ is the edge set. For an
edge $e$, write $X_e$ and $Z_e$ for the corresponding one-qubit Pauli acting
on that tensor factor and as the identity on every other factor. Define the
star and plaquette checks by

$$A_{i,j}=X_{h_{i-1,j}}X_{h_{i,j}}X_{v_{i,j-1}}X_{v_{i,j}},\qquad B_{i,j}=Z_{h_{i,j}}Z_{v_{i+1,j}}Z_{h_{i,j+1}}Z_{v_{i,j}}.$$

All indices are in $\mathbb Z_L$.

## Facts & Assumptions

**Given:** An integer $L\ge3$, its periodic square cellulation, and the ordered edge register.

[F1] [[def-qc-tqc-periodic-square-cellulation]]: the edges incident to $q_{i,j}$ are $h_{i-1,j},h_{i,j},v_{i,j-1},v_{i,j}$; the boundary of $f_{i,j}$ is $h_{i,j},v_{i+1,j},h_{i,j+1},v_{i,j}$, with four distinct edges in each list.

[F2] [[def-qc-pauli-matrices]]: $X$ and $Z$ are the specified Hermitian one-qubit matrices, and $X^2=Z^2=I$ by direct multiplication.

[F3] [[def-qc-register-and-computational-basis]]: the physical space is the ordered tensor product of one copy of $\mathbb C^2$ for each edge.

[F4] [[def-qc-tensor-map]]: tensor products of maps act on elementary tensors factor by factor and extend linearly.

[F5] [[lem-qc-tensor-product-basis-and-dimension]]: ordered elementary computational-basis tensors span the finite register.

## Verification

1.1 By [F1], each displayed check acts on four distinct edge factors. By [F2] and [F3], its factors are defined endomorphisms of the ordered physical register, so both $A_{i,j}$ and $B_{i,j}$ are well-defined tensor-product operators. [given, F1, F2, F3]

2.1 Each factor in either product is Hermitian and squares to the identity by [F2]. The factors act on distinct tensor coordinates, so [F4] makes their two compositions agree on every elementary tensor; those tensors span the register by [F5]. Therefore each full product is Hermitian and squares to the identity. These are the star and plaquette checks used below. [F2, F3, F4, F5, step 1.1, algebra] ∎

## Remarks

The two local patches below distinguish the support of the star check
$A_{i,j}$ (left, one $X$ on each drawn edge) from that of the plaquette check
$B_{i,j}$ (right, one $Z$ on each drawn edge). They are patches in the square
tiling before the periodic identification: coordinates differing by $L$ in
either direction are identified, and every displayed index is read modulo $L$.
The four star edges meet at $q_{i,j}$; the four plaquette edges bound
$f_{i,j}$. These are precisely the edge lists in [F1]. The verification above
is independent of this illustration.

```tikz
\begin{tikzpicture}[x=1cm,y=1cm]
\node at (0,2.2) {$A_{i,j}:\ X\ \mathrm{support}$};
\draw[very thick,blue] (-1.5,0) -- (0,0) -- (1.5,0);
\draw[very thick,blue] (0,-1.5) -- (0,0) -- (0,1.5);
\fill (0,0) circle (2pt);
\node[below right] at (0,0) {$q_{i,j}$};
\node[above] at (-0.85,0) {$h_{i-1,j}$};
\node[above] at (0.85,0) {$h_{i,j}$};
\node[left] at (0,-0.9) {$v_{i,j-1}$};
\node[left] at (0,0.9) {$v_{i,j}$};
\node at (6,2.2) {$B_{i,j}:\ Z\ \mathrm{support}$};
\draw[very thick,orange] (4.5,-1.5) -- (7.5,-1.5) -- (7.5,1.5) -- (4.5,1.5) -- (4.5,-1.5);
\fill (4.5,-1.5) circle (2pt);
\fill (7.5,-1.5) circle (2pt);
\fill (7.5,1.5) circle (2pt);
\fill (4.5,1.5) circle (2pt);
\node at (6,0) {$f_{i,j}$};
\node[below] at (6,-1.5) {$h_{i,j}$};
\node[right] at (7.5,0) {$v_{i+1,j}$};
\node[above] at (6,1.5) {$h_{i,j+1}$};
\node[left] at (4.5,0) {$v_{i,j}$};
\node[below left] at (4.5,-1.5) {$q_{i,j}$};
\end{tikzpicture}
```
