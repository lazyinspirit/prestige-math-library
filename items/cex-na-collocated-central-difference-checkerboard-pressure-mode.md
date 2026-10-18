---
id: cex-na-collocated-central-difference-checkerboard-pressure-mode
kind: counterexample
title: "A collocated central gradient misses an alternating pressure mode"
status: published
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps: [ def-na-periodic-staggered-grid-stokes-operators ]
proof_strategy: direct
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "NPTEL, Lecture 5.4: Methods based on Coupling of Pressure and Velocity"
      url: "https://archive.nptel.ac.in/content/storage2/courses/112106061/Module_5/L\
        ecture_5.4.pdf"
      locator: "§2.3.3, printed pp. 46–47: collocated pressure oscillations and the
        role of staggered placement."
    - title: "J. L. Guermond, P. Minev, and J. Shen, An overview of projection methods
        for incompressible flows"
      url: "https://people.tamu.edu/~guermond/PUBLICATIONS/guermond_minev_shen_CMAME_\
        2006.pdf"
      locator: "§3.1, printed p. 6012: pressure projection and the staggered-grid
        context."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Use the periodic index set $J_N$ and $h=1/N$ from
[[def-na-periodic-staggered-grid-stokes-operators]], but put pressure and
velocity components at the same cell centres and define the collocated
centred pressure gradient by
$$ (G_cq)_{i,j}=\frac{q_{j+e_i}-q_{j-e_i}}{2h}. $$
If $N$ is even, then the nonconstant, zero-mean array
$q_j=(-1)^{j_1}$ satisfies $G_cq=0$. Thus this collocated central gradient
cannot distinguish this pressure from a constant; the staggered gradient
defined on the A page is a different operator.

## Facts & Assumptions

**Given:** The periodic index set $J_N$ for $N\ge2$, and the separate
collocated centred-gradient convention displayed in the statement.

[F1] $J_N=(\mathbb Z/N\mathbb Z)^d$ with all index additions taken modulo
$N$ ([[def-na-periodic-staggered-grid-stokes-operators]]).

[F2] On an even cycle, $(-1)^{j_1+1}=(-1)^{j_1-1}=-(-1)^{j_1}$, with
parity interpreted modulo the even integer $N$.

## Proof
1.1 Since $N$ is even, summing $(-1)^{j_1}$ over its $N$ values gives zero; the other coordinates simply repeat this sum. Hence $q$ has zero discrete mean. It is nonconstant because its values at $j_1=0$ and $j_1=1$ differ. [F1, given, algebra]

2.1 For $i=1$, [F2] gives $q_{j+e_1}=q_{j-e_1}$, so the first component of $G_cq$ is zero. For every $i>1$, the array is independent of coordinate $i$, hence again $q_{j+e_i}=q_{j-e_i}$. The defining centred difference therefore gives $G_cq=0$ in every component, proving the nonconstant zero-mean pressure mode is invisible. [F1, F2, step 1.1, algebra] ∎