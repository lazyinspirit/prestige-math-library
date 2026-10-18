---
id: ex-na-constant-flux-reference-triangle
kind: example
title: A constant Darcy flux on the reference triangle
status: draft
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 7
deps:
  [
    def-na-simplicial-mesh-rt-bdm-spaces,
    lem-na-rt0-unisolvence-and-global-conformity,
    lem-affine-simplex-gauss-green-formula,
    def-countable-choice
  ]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Francisco-Javier Sayas, A gentle introduction to the Finite Element Method (2015)"
      url: https://team-pancho.github.io/documents/anIntro2FEM_2015.pdf
      locator: "Complete book, Lesson 9 §§2.1–2.2, pp. 162–165: RT0 facet-flux degrees of freedom and local balance."
    - title: "Jean-Luc Guermond, MATH 661 Fall 2025, Part III Chapter 14: H(div)
        finite elements"
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap14.pdf
      locator: "Complete chapter, §§14.1–14.2: RT0 degrees of freedom and divergence
        balance."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Assume Countable Choice.

On $K=\{(x,y):x>0,y>0,x+y<1\}$ with unit permeability, $q=(1,0)$ and $p=-x$ satisfy $q+\nabla p=0$ and $\operatorname{div}q=0$. Their outward integrated facet fluxes on $x=0$, $y=0$, and $x+y=1$ are respectively $-1,0,+1$, so exact local mass balance holds.

## Facts & Assumptions

**Given:** The reference triangle, unit permeability, the constant flux $q=(1,0)$, and affine pressure $p=-x$.

[A1] Countable Choice is inherited from the mesh and RT0 unisolvence interfaces. ([[def-countable-choice]])

[F1] RT0 facet fluxes determine the local RT0 field, and its divergence is constant. ([[def-na-simplicial-mesh-rt-bdm-spaces]], [[lem-na-rt0-unisolvence-and-global-conformity]])

[F2] The Gauss–Green formula equates the divergence integral with the sum of outward facet fluxes. ([[lem-affine-simplex-gauss-green-formula]])

## Proof

1.1 The gradient is $\nabla p=(-1,0)$, so $q+\nabla p=0$ pointwise. The three outward unit normals are $(-1,0)$ on $x=0$, $(0,-1)$ on $y=0$, and $(1,1)/\sqrt2$ on the hypotenuse. Their facet lengths are $1,1,\sqrt2$, respectively. Therefore the integrated fluxes are $-1$, $0$, and $(1/\sqrt2)\sqrt2=1$. [given, algebra]

2.1 Their sum is zero, equal to $\int_K\operatorname{div}q=0$ by [F2]. Since $q$ is in RT0 and the fluxes are its facet degrees of freedom by [F1], the data also uniquely determine this constant flux among RT0 fields. [A1, F1, F2, step 1.1, algebra] ∎
## Mesh diagram

```tikz
\begin{tikzpicture}[scale=2.2]
  \coordinate (O) at (0,0);
  \coordinate (X) at (1,0);
  \coordinate (Y) at (0,1);
  \draw[thick] (O)--(X)--(Y)--cycle;
  \node[below left] at (O) {$ (0,0) $};
  \node[below] at (X) {$ (1,0) $};
  \node[left] at (Y) {$ (0,1) $};
  \node[below] at (.48,0) {$y=0$};
  \node[left] at (0,.47) {$x=0$};
  \node[above right] at (.55,.55) {$x+y=1$};
  \draw[->,blue] (.05,.45)--(-.18,.45) node[left] {$q\cdot n=-1$};
  \draw[->,blue] (.55,.04)--(.55,-.18) node[below] {$q\cdot n=0$};
  \draw[->,blue] (.69,.31)--(.88,.50) node[right] {$q\cdot n>0$};
\end{tikzpicture}
```

The triangle is the set $x>0,y>0,x+y<1$. The blue arrows indicate the outward-normal directions; their magnitudes are schematic. The proof computes the exact integrated fluxes, so the drawing supplies orientation only.
