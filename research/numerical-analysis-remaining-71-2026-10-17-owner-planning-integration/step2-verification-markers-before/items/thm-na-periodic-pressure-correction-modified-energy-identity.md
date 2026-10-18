---
id: thm-na-periodic-pressure-correction-modified-energy-identity
kind: theorem
title: "Modified velocity-pressure energy identity for periodic pressure correction"
status: draft
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps:
  - def-na-periodic-staggered-grid-stokes-operators
  - alg-na-periodic-incremental-pressure-correction
  - thm-na-periodic-discrete-helmholtz-projection
proof_strategy: direct
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. L. Guermond, P. Minev, and J. Shen, An overview of projection methods for incompressible flows"
      url: "https://people.tamu.edu/~guermond/PUBLICATIONS/guermond_minev_shen_CMAME_2006.pdf"
      locator: "§3.2, printed pp. 6013–6014: the incremental pressure-correction predictor, pressure increment, and exact projection relation."
    - title: "NPTEL, Lecture 5.4: Methods based on Coupling of Pressure and Velocity"
      url: "https://archive.nptel.ac.in/content/storage2/courses/112106061/Module_5/Lecture_5.4.pdf"
      locator: "§§2.3.1–2.3.2, printed pp. 45–46: pressure projection and pressure update."
---

## Statement

For one step of [[alg-na-periodic-incremental-pressure-correction]] on
[[def-na-periodic-staggered-grid-stokes-operators]], with $u^n$ divergence-
free and $p^n,p^{n+1}\in Q_h$, the following identity holds exactly:
$$ \begin{aligned} \|u^{n+1}\|_{M_h}^2-\|u^n\|_{M_h}^2 &+\|\widetilde u^{n+1}-u^n\|_{M_h}^2 +2\nu k\|\mathcal G_h\widetilde u^{n+1}\|_{M_h}^2\\ &+k^2\left(\|G_hp^{n+1}\|_{M_h}^2-\|G_hp^n\|_{M_h}^2\right) =2k(f^{n+1},\widetilde u^{n+1})_{M_h}. \end{aligned} $$
This is a modified velocity-pressure energy identity for the stated periodic
discretization; it makes no bounded-wall claim.

## Facts & Assumptions

**Given:** The backward-Euler predictor, pressure increment and correction on
the periodic staggered grid, with $\nu>0$, $k>0$, $D_hu^n=0$, and
$p^n,p^{n+1}\in Q_h$.

[F1] The predictor equation, pressure equation, and pressure update are
$(\widetilde u^{n+1}-u^n)/k+\nu A_h\widetilde u^{n+1}+G_hp^n=f^{n+1}$,
 $\Delta_h\phi^{n+1}=k^{-1}D_h\widetilde u^{n+1}$,
$u^{n+1}=\widetilde u^{n+1}-kG_h\phi^{n+1}$, and
$p^{n+1}=p^n+\phi^{n+1}$
([[alg-na-periodic-incremental-pressure-correction]]).

[F2] The discrete adjoint relation is
$(G_hq,v)_{M_h}=-(q,D_hv)_{Q_h}$, and the pressure Laplacian satisfies
$(q,\Delta_hr)_{Q_h}=-(G_hq,G_hr)_{M_h}$
([[thm-na-periodic-discrete-helmholtz-projection]]).

[F3] $P_h$ is a mass-orthogonal projector and
$u^{n+1}=P_h\widetilde u^{n+1}$
([[thm-na-periodic-discrete-helmholtz-projection]]).

[F4] $(A_hv,v)_{M_h}=\|\mathcal G_hv\|_{M_h}^2$ by the periodic componentwise
Laplacian definition
([[def-na-periodic-staggered-grid-stokes-operators]]).

## Proof
1.1 By finite periodic reindexing in each component and coordinate, $(A_hv,v)_{M_h}=h^{d-2}\sum_{i,\ell,j}|v_{i,j+e_\ell}-v_{i,j}|^2 =\|\mathcal G_hv\|_{M_h}^2$. Take the $M_h$ inner product of the predictor equation [F1] with $2k\widetilde u^{n+1}$. The identity $$ 2(\widetilde u^{n+1}-u^n,\widetilde u^{n+1})_{M_h} =\|\widetilde u^{n+1}\|_{M_h}^2-\|u^n\|_{M_h}^2 +\|\widetilde u^{n+1}-u^n\|_{M_h}^2 $$ and [F4] give $$ \|\widetilde u^{n+1}\|_{M_h}^2-\|u^n\|_{M_h}^2 +\|\widetilde u^{n+1}-u^n\|_{M_h}^2 +2\nu k\|\mathcal G_h\widetilde u^{n+1}\|_{M_h}^2 +2k(G_hp^n,\widetilde u^{n+1})_{M_h} =2k(f^{n+1},\widetilde u^{n+1})_{M_h}. $$ [given, F1, F4, algebra]

2.1 By [F2] and the pressure equation in [F1], $$ 2k(G_hp^n,\widetilde u^{n+1})_{M_h} =-2k(p^n,D_h\widetilde u^{n+1})_{Q_h} =-2k^2(p^n,\Delta_h\phi^{n+1})_{Q_h} =2k^2(G_hp^n,G_h\phi^{n+1})_{M_h}. $$ The last equality follows from the second identity in [F2]. [F1, F2, algebra, step 1.1]

3.1 Since $P_h$ is orthogonal and $u^{n+1}=P_h\widetilde u^{n+1}$ by [F3], the projection residual $\widetilde u^{n+1}-u^{n+1}=kG_h\phi^{n+1}$ is orthogonal to $u^{n+1}$. Pythagoras gives $$ \|\widetilde u^{n+1}\|_{M_h}^2 =\|u^{n+1}\|_{M_h}^2+k^2\|G_h\phi^{n+1}\|_{M_h}^2. $$ The pressure update $p^{n+1}=p^n+\phi^{n+1}$ then gives $$ k^2\bigl(\|G_hp^{n+1}\|_{M_h}^2-\|G_hp^n\|_{M_h}^2\bigr) =k^2\|G_h\phi^{n+1}\|_{M_h}^2 +2k^2(G_hp^n,G_h\phi^{n+1})_{M_h}. $$ [F1, F3, step 2.1, algebra]

4.1 Substitute the two identities from step 3.1 into step 1.1, replacing $\|\widetilde u^{n+1}\|_{M_h}^2$ and the pressure cross term. The result is exactly the displayed modified energy identity. [step 1.1, step 3.1, algebra] ∎