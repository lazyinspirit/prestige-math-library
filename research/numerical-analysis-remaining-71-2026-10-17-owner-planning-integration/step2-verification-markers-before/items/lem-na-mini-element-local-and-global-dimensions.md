---
id: lem-na-mini-element-local-and-global-dimensions
kind: lemma
title: "Local and global dimensions of the mini element"
status: draft
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps: ["def-na-mini-element-p1-bubble-p1-spaces", "def-countable-choice", "thm-rank-nullity"]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jean-Luc Guermond, MATH 661 Fall 2025, Chapters 49–54 (complete course notes)"
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap49.pdf
      locator: "§49.4.2, Babuška–Brezzi; Chapter 50, §§50.1–50.2, mixed approximation and Schur complement; Chapters 53–54, Stokes and MINI element."
    - title: "Daniele Boffi, Franco Brezzi, Michel Fortin, Mixed Finite Element Methods and Applications (complete textbook)"
      url: https://www.karlin.mff.cuni.cz/~knobloch/FILES/Boffi-Brezzi-Fortin-Mixed_FEMs_and_Applications.pdf
      locator: "Chapter 5, Theorem 5.2.2 and pp. 276–277; Chapter 8, §§8.2, 8.4.2, 8.5.5, 8.6.1, 8.7.1 and 8.10."
---

## Statement

Assume Countable Choice. For a connected conforming simplicial mesh in dimension $d=2$ or $3$, the local scalar velocity polynomial space $P_1(K)\oplus\operatorname{span}\{b_K\}$ has dimension $d+2$, the vector velocity dimension is $d(d+2)$, and the local pressure space $P_1(K)$ has dimension $d+1$. If the mesh has $N_v$ vertices, $N_{v,0}$ interior vertices and $N_K$ cells, then
$$\dim V_h=dN_{v,0}+dN_K,\qquad \dim Q_h=N_v-1.$$

## Facts & Assumptions

**Given:** The mini-element spaces on a finite connected conforming simplicial mesh, with one barycentric bubble per cell and per vector component.

[A1] Countable Choice is inherited from the mini-element/H0 space interface. ([[def-countable-choice]])

[F1] The mini velocity is continuous piecewise P1 with zero boundary values, plus independent cell-supported barycentric bubbles, and $Q_h$ is continuous P1 with zero mean. ([[def-na-mini-element-p1-bubble-p1-spaces]])

[F2] For a linear map with finite-dimensional domain, domain dimension equals kernel dimension plus image dimension. ([[thm-rank-nullity]])

## Proof

1.1 On one $d$-simplex, $P_1(K)$ has the $d+1$ barycentric coordinate basis. The bubble $b_K$ is nonzero in the interior and vanishes at every vertex; because its polynomial degree is $d+1>1$, it is not in $P_1(K)$. Thus the scalar local velocity sum is direct with dimension $d+2$, and its $d$ vector components give $d(d+2)$. The local pressure dimension is $d+1$. [A1, F1, algebra]

1.2 A continuous piecewise P1 scalar function is uniquely determined by its $N_v$ vertex values: affine uniqueness on each simplex proves injectivity, and assigning shared vertex values defines such a function by face-to-face conformity. Imposing zero trace sets exactly the $N_v-N_{v,0}$ boundary vertex values to zero, leaving $N_{v,0}$ independent velocity nodal values per component. [A1, F1, algebra]

2.1 Each cell bubble is linearly independent of the nodal functions because its support interior is disjoint from every other cell bubble and it vanishes on the cell boundary, while a P1 polynomial vanishing on all vertices is zero. Hence the velocity dimension is $dN_{v,0}+dN_K$. The integral functional on $S_h^1$ is nonzero (it takes the positive value $|D|$ on $1$), so its zero-mean kernel has codimension one; therefore $\dim Q_h=N_v-1$. [A1, F1, F2, algebra, step 1.1, step 1.2] ∎
