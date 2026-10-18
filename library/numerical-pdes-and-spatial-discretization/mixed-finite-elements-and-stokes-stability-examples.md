---
page: mixed-finite-elements-and-stokes-stability-examples
title: "Mixed finite elements and Stokes stability — Examples"
status: draft
items: []
examples:
  - ex-na-taylor-hood-pressure-mode
  - ex-na-mini-element-bubble-moment
  - cex-na-q1-p0-checkerboard-pressure-mode
  - ex-na-weakly-versus-exactly-divergence-free-mini-velocity
---

# Worked modes and a pressure counterexample

These four items distinguish a MINI bubble's pressure-gradient moment, a local Taylor–Hood polynomial pairing, an unstable Q1/P0 checkerboard mode, and weak versus pointwise discrete incompressibility. The diagrams explain the chosen finite meshes; the proofs use only their stated algebra and integrals.

## MINI bubble moment

[[ex-na-mini-element-bubble-moment]] computes the strictly positive local contribution $\int_K b_K|\nabla q|^2$ for a nonconstant affine pressure. It illustrates the cell correction used by the A-page Fortin proof, without claiming the one-cell calculation alone implies global stability.

## Taylor–Hood local mode

[[ex-na-taylor-hood-pressure-mode]] uses the reference right triangle, $q=x-1/3$ and $v=(x^2,0)$ to obtain $-1/18$. The velocity is a local polynomial witness; this example makes no boundary-conforming or global stability claim.

## Q1/P0 checkerboard

The four-cell pressure pattern below has alternating signs, zero mean, and pairs to zero with the only interior Q1 velocity basis function. The central dot marks the sole interior scalar Q1 node; the pressure labels belong to cells.

\begin{center}
\begin{tikzpicture}[scale=1.1]
  \draw[step=2, line width=0.8pt] (0,0) grid (4,4);
  \node at (1,1) {$+1$};
  \node at (3,1) {$-1$};
  \node at (1,3) {$-1$};
  \node at (3,3) {$+1$};
  \fill (2,2) circle (2pt);
  \node[below right] at (2,2) {only interior Q1 node};
\end{tikzpicture}
\end{center}

The checkerboard is [[cex-na-q1-p0-checkerboard-pressure-mode]]. Its proof factors each cell integral into the two one-dimensional hat integrals and shows both derivative pairings vanish; the picture is not used as evidence.

## Weak and exact divergence kernels

[[ex-na-weakly-versus-exactly-divergence-free-mini-velocity]] uses rank-nullity on the two-triangle square mesh. Its nonzero weak-kernel element is made only from cell bubbles and has nonzero divergence on a cell. Thus $Z_h^0\subsetneq Z_h$ there; the stable mini-element theorem does not claim its weak kernel is pointwise divergence-free.

## Scope note

The checkerboard counterexample is a Q1/P0 pair and does not contradict the P1+bubble/P1 Fortin theorem. The Taylor–Hood calculation does not constitute a proof of Taylor–Hood stability. No example supplies a theorem prerequisite.
