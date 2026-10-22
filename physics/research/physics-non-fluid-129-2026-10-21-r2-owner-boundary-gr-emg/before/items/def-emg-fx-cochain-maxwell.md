---
id: def-emg-fx-cochain-maxwell
kind: definition
title: "Finite cochain Maxwell phase space"
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 0
deps:
  - lem-cm-positive-definite-matrix-square-roots
dependency_roles:
  lem-cm-positive-definite-matrix-square-roots: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Ralf Hiptmair, Maxwell’s Equations: Continuous and Discrete, ETH Research Report 2015-18"
      url: "https://www.sam.math.ethz.ch/sam_reports/reports_final/reports2015/2015-18.pdf"
      locator: "Complete 56-page report inspected. §§3.1–3.3, printed pp. 23–26 (PDF pp. 24–27): finite cochains, signed incidence matrices, D_{k+1}D_k=0, and the separate scope of cochain sampling."
    - title: "Davit Harutyunyan, Adaptive Vector Finite Element Methods for the Maxwell Equations, University of Twente dissertation (2007)"
      url: "https://ris.utwente.nl/ws/portalfiles/portal/6041555/thesis_Harutyunyan.pdf"
      locator: "Complete 210-page dissertation inspected. Ch. 6, §§6.4–6.9, printed pp. 161–174 (PDF pp. 171–184): bounded-domain Maxwell system, positive material forms, finite-element mass matrices, staggered leapfrog and discrete divergence."
---

## Definition

Fix nonnegative integers $n_0,n_1,n_2,n_3$ and ordered coordinate bases, and put $C^k:=\mathbb R^{n_k}$ for $k=0,1,2,3$. The dual space $(C^k)^*$ is the vector space of linear functionals $C^k\to\mathbb R$, with the dual basis to the chosen coordinate basis. Let $D_0\in\mathbb R^{n_1\times n_0}$, $D_1\in\mathbb R^{n_2\times n_1}$, and $D_2\in\mathbb R^{n_3\times n_2}$ be linear maps satisfying $D_1D_0=0$ and $D_2D_1=0$. This data is a finite cochain complex. The transpose $D_k^{\mathsf T}$ denotes the representing matrix of the dual linear map in the dual bases. Let $M_1\in\mathbb R^{n_1\times n_1}$ and $M_2\in\mathbb R^{n_2\times n_2}$ be symmetric positive-definite matrices: $v^{\mathsf T}M_kv>0$ for each nonzero $v\in C^k$. They represent linear maps $M_1:C^1\to(C^1)^*$ and $M_2:C^2\to(C^2)^*$ in the chosen bases; in positive dimensions their inverses exist by the finite-dimensional positive-matrix result cited below, and the unique map on a zero-dimensional space is its own inverse.

The finite state space is $\mathcal X:=C^2\oplus(C^1)^*$, with state $(b,d)$, where $b$ is a column of $C^2$ coordinates and $d$ is a column in the dual basis of $(C^1)^*$. In this item, “phase space” means this finite-dimensional state space only; no symplectic form is asserted. On an open interval $J\subseteq\mathbb R$, a semidiscrete trajectory is a continuously differentiable map $t\mapsto(b(t),d(t))\in\mathcal X$ satisfying

$$\dot b(t)=-D_1M_1^{-1}d(t),\qquad \dot d(t)=D_1^{\mathsf T}M_2b(t).$$

Its two discrete constraints are $D_2b(t)=0$ in $C^3$ and $D_0^{\mathsf T}d(t)=0$ in $(C^0)^*$. The associated quadratic energy is

$$\mathcal E(b,d):=\tfrac12\left(b^{\mathsf T}M_2b+d^{\mathsf T}M_1^{-1}d\right).$$

All objects here are finite-dimensional real linear-algebra data. The term “Maxwell” names this algebraic model and does not identify it with a continuum Maxwell or Einstein–Maxwell solution.

## Definition references

[[lem-emg-fx-symplectic-current-boundary]]

[[lem-cm-positive-definite-matrix-square-roots]]

## Remarks

For a finite oriented cell complex, signed incidence matrices give one source of such maps: an entry is $+1$ or $-1$ according as the oriented lower cell occurs in the oriented boundary with agreeing or opposite orientation, and is $0$ when it does not occur. In a simplicial realization, the boundary of an ordered simplex is $\partial[v_0,\ldots,v_k]=\sum_{i=0}^k(-1)^i[v_0,\ldots,\widehat v_i,\ldots,v_k]$. Each codimension-two face obtained by deleting vertices $i<j$ occurs in $\partial^2$ twice, with coefficients $(-1)^i(-1)^{j-1}$ and $(-1)^j(-1)^i$, which are opposites. Hence $\partial^2=0$; taking transposes of the boundary matrices gives the two zero-composition identities for the cochain maps. This definition also admits any real matrices satisfying the displayed identities. Positive-definite mass maps are additional data and are not determined by incidence alone.

The cochain sequence is displayed below. The arrows are exactly $D_0,D_1,D_2$ in the ordered coordinate bases; the zero-composition identities are hypotheses of the definition and are not proved by the diagram.

~~~tikzcd
C^0 \arrow[r,"D_0"] & C^1 \arrow[r,"D_1"] & C^2 \arrow[r,"D_2"] & C^3
~~~

The incidence identities support exact finite constraint calculations. They do not supply a family of meshes, commuting projections, approximation estimates, uniform energy or CFL bounds, or a continuum-limit theorem. The source’s cochain-sampling and Whitney-form results have those additional geometric and approximation scopes; none is claimed here.
