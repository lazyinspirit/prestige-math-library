---
id: alg-finite-galerkin-v-cycle
kind: algorithm
title: "Finite recursive Galerkin V- and W-cycle for an SPD hierarchy"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps: [def-galerkin-coarse-grid-correction,
       thm-galerkin-coarse-correction-is-energy-orthogonal-projector,
       def-matrix-product-and-identity-matrix,
       def-transpose-of-a-matrix]
justified_by: [thm-galerkin-v-cycle-work-recurrence-master-regimes]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
  - title: "Susanne C. Brenner and L. Ridgway Scott, The Mathematical Theory of Finite Element Methods, 3rd ed., Chapter 6"
    url: "https://webs.um.es/eliseo/um/uploads/Main/Brenner_Scott_The_Mathematical_Theory_Of_Finite_Element%20Methods_2008.pdf"
  - title: "Numerical Methods II, University of Heidelberg lecture notes, Chapter 10"
    url: "https://conan.iwr.uni-heidelberg.de/data/teaching/finiteelements_ws2021/num2_updated.pdf"
---

## Definition

Fix a finite Galerkin hierarchy of real SPD matrices
$A_j\in\mathbb R^{n_j\times n_j}$, $0\le j\le J$, with $n_j\ge1$, and
full-column-rank prolongations $P_j\in\mathbb R^{n_j\times n_{j-1}}$
satisfying $A_{j-1}=P_j^{\mathsf T}A_jP_j$ for $1\le j\le J$. Choose
nonnegative integer sweep counts $\nu_1,\nu_2$, a positive integer cycle
count $\gamma$, and matrices $K_j^{\mathrm{pre}},K_j^{\mathrm{post}}\in
\mathbb R^{n_j\times n_j}$ for $1\le j\le J$; $^{\mathsf T}$ denotes the
transpose of [[def-transpose-of-a-matrix]]. An invocation
$\operatorname{Cycle}(j,x,b)$ takes $x,b\in\mathbb R^{n_j}$ and returns the
vector specified by these instructions for the system $A_jz=b$:

1. If $j=0$, return the exact solution $A_0^{-1}b$.
2. Starting from $x$, perform $\nu_1$ pre-sweeps
   $x\leftarrow x+K_j^{\mathrm{pre}}(b-A_jx)$ and set $r=b-A_jx$.
3. Set $e=0$. For $t=1,\ldots,\gamma$, replace $e$ by the recursive iterate
   $$e\leftarrow\operatorname{Cycle}(j-1,e,P_j^{\mathsf T}r).$$
4. Correct $x\leftarrow x+P_je$, then perform $\nu_2$ post-sweeps
   $x\leftarrow x+K_j^{\mathrm{post}}(b-A_jx)$; return $x$.

The V-cycle is $\gamma=1$ and the W-cycle is $\gamma=2$. The definition fixes
exact arithmetic and specifies an iterate; it makes no accuracy or convergence
claim. Setup cost, floating-point error, and termination are separate claims.

## Remarks

For $j>0$, the schematic shows one invocation: descend with the restricted
residual, update the coarse iterate $\gamma$ times, then lift its correction.
Here $b_c=P_j^{\mathsf T}r$ is held fixed throughout those recursive calls,
and $e_t\in\mathbb R^{n_{j-1}}$ denotes the result of the $t$th call.

```tikz
\begin{tikzpicture}[>=stealth, every node/.style={font=\small}]
\node[draw,rounded corners,align=center,inner sep=7pt] (pre) at (0,0)
  {$\nu_1$ pre-sweeps\\$r=b-A_jx$};
\node[draw,rounded corners,align=center,inner sep=7pt] (coarse) at (3.6,-2.6)
  {$e_0=0$\\$e_t=\mathrm{Cycle}(j-1,e_{t-1},b_c)$\\$t=1,\ldots,\gamma$};
\node[draw,rounded corners,align=center,inner sep=7pt] (post) at (7.2,0)
  {$x\leftarrow x+P_je_\gamma$\\$\nu_2$ post-sweeps; return $x$};
\draw[->] (pre) -- node[above,sloped] {$b_c=P_j^{\mathsf T}r$} (coarse);
\draw[->] (coarse) -- node[above,sloped] {$P_je_\gamma$} (post);
\end{tikzpicture}
```

The downward transfer is $P_j^{\mathsf T}:\mathbb R^{n_j}\to
\mathbb R^{n_{j-1}}$, and the upward transfer is
$P_j:\mathbb R^{n_{j-1}}\to\mathbb R^{n_j}$. The V-cycle uses one coarse
call and the W-cycle uses two successive coarse calls, with the second
starting from the first result rather than from zero. Each coarse call follows
the same instructions at level $j-1$; level zero returns $A_0^{-1}b$ for its
own right-hand side. The figure illustrates only the instructions above and
asserts no convergence property.
