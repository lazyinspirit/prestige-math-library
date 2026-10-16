---
id: thm-qc-projective-chart-dimension
kind: theorem
title: QC24 Projective Chart Dimension
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 3
deps:
  - def-qc-projective-space-atlas
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: John Preskill, Quantum Computation, Chapter 5, Classical and Quantum Circuits
      url: https://www.preskill.caltech.edu/ph219/chap5_15.pdf
    - title: John Watrous, The Theory of Quantum Information, Chapter 1
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf
---

## Statement

For every integer $D\ge1$, the standard patches $U_j$ of [[def-qc-projective-space-atlas]] are smooth charts with coordinate space $\mathbb C^{D-1}=\mathbb R^{2D-2}$. If $D\ge2$, each fixed patch is proper, so a single standard coordinate patch does not cover all of $\mathbb{CP}^{D-1}$.

## Facts & Assumptions

**Given:** An integer $D\ge1$, the quotient ray space $\mathbb{CP}^{D-1}$, standard patches $U_j$, and candidate coordinate maps $\phi_j$ and inverses from [[def-qc-projective-space-atlas]].

[F1] $U_j=\{[z]:z_j\ne0\}$ and $\phi_j([z])=(z_i/z_j)_{i\ne j}$; the candidate inverse uses the representative with $j$th coordinate $1$ ([[def-qc-projective-space-atlas]]).

## Proof

**Given:** As in Facts & Assumptions.

1.1 If $[z]\in U_j$, multiplying $z$ by any nonzero complex scalar leaves every ratio $z_i/z_j$ unchanged, so $\phi_j$ is well-defined on rays. The representative $z/z_j$ has $j$th coordinate $1$ and all other coordinates equal to those ratios, so the stated inverse sends $\phi_j([z])$ back to $[z]$. [F1, algebra]

2.1 Conversely, applying $\phi_j$ to the inverse representative with $j$th coordinate $1$ returns each entry of $w$; hence the two maps are inverse bijections. Let $\pi$ be the quotient map and $O_j=\{z:z_j\ne0\}=\pi^{-1}(U_j)$. Since $O_j$ is open, $U_j$ is open. The restriction $\pi_j:O_j\to U_j$ is a quotient map: for $B\subseteq U_j$, if $\pi_j^{-1}(B)$ is open in $O_j$, it is open in $\mathbb C^D\setminus\{0\}$, so $B$ is open in the quotient and hence in $U_j$; the reverse implication follows from continuity of $\pi$. The composite $\phi_j\circ\pi_j$ consists of continuous coordinate ratios on $O_j$, so $\phi_j$ is continuous. The inverse is the quotient map composed with the continuous representative map $w\mapsto e_j+\sum_{i\ne j}w_i e_i$, hence is continuous. [F1, step 1.1, algebra]

3.1 Let $\pi:\mathbb C^D\setminus\{0\}\to\mathbb{CP}^{D-1}$ be the quotient map. Then $\pi^{-1}(U_j)=\{z:z_j\ne0\}$ is Euclidean open, so $U_j$ is open by the quotient topology. On $U_j\cap U_k$ with $j\ne k$, write $w=\phi_j([z])$. Then $w_k\ne0$, the transition coordinates satisfy $w'_j=1/w_k$ and $w'_i=w_i/w_k$ for $i\ne j,k$. Conversely, $w_k=1/w'_j$ and $w_i=w'_i/w'_j$ for $i\ne j,k$. These rational maps are smooth as real maps on their open coordinate domains, so the charts are compatible and form a smooth atlas. [F1, step 2.1, algebra]

4.1 The patches cover every ray because a nonzero vector has at least one nonzero coordinate. If $D\ge2$, choose $k\ne j$; the ray of the basis vector $e_k$ has $j$th coordinate zero and is not in $U_j$, so each fixed standard patch is proper. Finally, $\mathbb C^{D-1}$ has $D-1$ complex, or $2D-2$ real, coordinates. [F1, algebra, choose] ∎
