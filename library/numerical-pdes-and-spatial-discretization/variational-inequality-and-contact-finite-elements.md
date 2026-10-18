---
page: variational-inequality-and-contact-finite-elements
title: "Variational inequalities and spatial contact discretization"
status: draft
items:
  - def-signorini-partial-trace-space
  - lem-signorini-partial-trace-space-bounded
  - lem-signorini-rigid-motion-controlled-by-dirichlet-segment
  - def-signorini-elasticity-contact-model
  - def-signorini-contact-variational-inequality
  - lem-signorini-elasticity-form-bounded
  - lem-signorini-contact-set-closed-convex-nonempty
  - def-signorini-nodal-p1-contact-scheme
  - lem-signorini-partial-dirichlet-korn-coercivity
  - lem-signorini-nodal-contact-set-conforming
  - lem-signorini-contact-nodal-test-functions-surjective
  - def-signorini-dual-mortar-contact-pair
  - thm-signorini-continuous-contact-vi-wellposed
  - lem-signorini-dual-mortar-biorthogonality-and-infsup
  - thm-signorini-nodal-contact-vi-falk-error
  - thm-signorini-mortar-contact-kkt-and-complementarity
examples: []
---

This page develops frictionless unilateral contact for small-strain isotropic elasticity on a bounded connected planar Lipschitz polygon assumed to be a $W^{1,2}$-extension domain. The displacement space imposes zero trace on a fixed positive-length Dirichlet segment, while the contact gap is imposed on a disjoint straight segment. Local C1 collars define the boundary traces without extending the published C1 trace theorem to polygon corners.

The continuous contact set is a closed convex subset of the partial-trace Hilbert space. A locally proved partial-Dirichlet Korn inequality supplies coercivity, and the imported Stampacchia and load-stability theorems give a unique continuous solution. The conforming nodal P1 scheme requires a continuous, nonpositive obstacle convex along the contact segment; this makes its nodal feasible set a subset of the continuum set. The Falk estimate retains the explicit feasible-comparison defect and states the H2 and continuity assumptions needed for the nodal convergence branch.

The companion multiplier construction uses a broken, locally supported P1 dual basis on a matching contact partition. The coefficientwise nonnegative cone is dual to nonnegative continuous P1 gaps, and the trace-pair inf-sup constant is at least $1/\sqrt3$ in the stated L2 norms. The KKT result is for this specified matching pair and exact edge integration; it asserts no nonmatching-interface estimate, friction law, or active-set algorithm convergence.

The assumptions are deliberately visible: $\mu>0$, finite $\lambda\ge0$, continuous $\psi\le0$, and a fixed opening normal. The Axiom of Choice enters the imported trace/Poincare interfaces; Countable Choice enters the divergence lift and Stampacchia branches. The partial-boundary Korn proof uses the run's bounded-Lipschitz divergence right inverse and is stated only in two dimensions.

## Geometry and sign convention

The diagram shows one polygonal mesh. Blue and red mark proper interior subsegments of straight boundary sides; their endpoints are mesh vertices, so each segment is a union of boundary facets. The arrow points along the fixed unit normal $n$ so positive $T_Cv\cdot n$ increases the gap. This is a convention sketch: all proofs use the stated trace and mesh definitions, not the drawing.

```tikz
\begin{tikzpicture}[scale=1.15, line cap=round, line join=round]
  \coordinate (A) at (0,0);
  \coordinate (B) at (3.6,0);
  \coordinate (C) at (3.6,2.4);
  \coordinate (D) at (0,2.4);
  \coordinate (E) at (1.8,0);
  \coordinate (F) at (1.8,2.4);
  \coordinate (DL) at (0,0.6);
  \coordinate (DM) at (0,1.2);
  \coordinate (DU) at (0,1.8);
  \coordinate (CL) at (3.6,0.6);
  \coordinate (CM) at (3.6,1.2);
  \coordinate (CU) at (3.6,1.8);
  \draw[thick] (A)--(B)--(C)--(D)--cycle;
  \draw[gray!65] (E)--(F);
  \foreach \y in {0.6,1.2,1.8} \draw[gray!65] (0,\y)--(3.6,\y);
  \foreach \y/\Y in {0/0.6,0.6/1.2,1.2/1.8,1.8/2.4} {
    \draw[gray!65] (0,\y)--(1.8,\Y);
    \draw[gray!65] (1.8,\y)--(3.6,\Y);
  }
  \draw[blue,very thick] (DL)--(DU);
  \draw[red,very thick] (CL)--(CU);
  \foreach \y in {0,0.6,1.2,1.8,2.4} {
    \fill (0,\y) circle (1.4pt);
    \fill (1.8,\y) circle (1.4pt);
    \fill (3.6,\y) circle (1.4pt);
  }
  \draw[->,red,thick] (3.65,1.2)--(4.35,1.2) node[right,black] {$n=(1,0)$};
  \node[blue,left] at (-0.12,1.2) {$\Gamma_D$};
  \node[red,right] at (3.7,2.0) {$\Gamma_C$};
  \node at (1.15,1.1) {$\Omega$};
  \node[gray!70!black] at (2.45,0.35) {matching P1 mesh};
  \node[below] at (1.8,-0.18) {$T_Dv=0$};
  \node[above] at (2.6,2.62) {$T_Cv\cdot n-\psi\ge0$};
\end{tikzpicture}
```

## Core items

- [[def-signorini-partial-trace-space]] and [[lem-signorini-partial-trace-space-bounded]] define the local traces and Hilbert displacement space.
- [[def-signorini-elasticity-contact-model]], [[def-signorini-contact-variational-inequality]], and [[lem-signorini-contact-set-closed-convex-nonempty]] specify the energy, opening-gap convention, and feasible set.
- [[lem-signorini-partial-dirichlet-korn-coercivity]] proves coercivity on this exact partial-boundary space; [[thm-signorini-continuous-contact-vi-wellposed]] gives existence, uniqueness, and load stability.
- [[def-signorini-nodal-p1-contact-scheme]] and [[lem-signorini-nodal-contact-set-conforming]] give a conforming nodal set only under the convex-obstacle hypothesis. [[lem-signorini-contact-nodal-test-functions-surjective]] proves that each contact nodal coordinate can be varied independently while respecting the Dirichlet trace.
- [[thm-signorini-nodal-contact-vi-falk-error]] gives the energy error bound with its explicit feasible-comparison residual and a conditional convergence result.
- [[def-signorini-dual-mortar-contact-pair]], [[lem-signorini-dual-mortar-biorthogonality-and-infsup]], and [[thm-signorini-mortar-contact-kkt-and-complementarity]] define and prove stability of the chosen matching mortar/contact pair.
