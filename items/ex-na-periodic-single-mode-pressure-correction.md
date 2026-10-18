---
id: ex-na-periodic-single-mode-pressure-correction
kind: example
title: "One staggered Fourier mode is removed exactly by pressure correction"
status: published
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps:
  - def-na-periodic-staggered-grid-stokes-operators
  - alg-na-periodic-incremental-pressure-correction
  - thm-na-periodic-discrete-helmholtz-projection
  - thm-na-periodic-pressure-correction-solves-well-defined
proof_strategy: direct
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. L. Guermond, P. Minev, and J. Shen, An overview of projection methods
        for incompressible flows"
      url: "https://people.tamu.edu/~guermond/PUBLICATIONS/guermond_minev_shen_CMAME_\
        2006.pdf"
      locator: "§3.1, printed p. 6012: the exact pressure projection relation; the
        single-mode arithmetic is verified locally."
    - title: "NPTEL, Lecture 5.4: Methods based on Coupling of Pressure and Velocity"
      url: "https://archive.nptel.ac.in/content/storage2/courses/112106061/Module_5/L\
        ecture_5.4.pdf"
      locator: "PDF pp. 5–10 (slides 5–10), equations (5.4.4)–(5.4.10): fractional-step projection, staggered cell/face placement, and centred differences; local estimates are proved here."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Let $N\ge2$ be even, $d\ge1$, $h=1/N$, and use the staggered operators
from [[def-na-periodic-staggered-grid-stokes-operators]]. Put
$q_j=(-1)^{j_1}$, so $q\in Q_h$, and let $\nu,k>0$. Start one step of
[[alg-na-periodic-incremental-pressure-correction]] from $u^n=0$, $p^n=0$
with
$$ f^{n+1}=k^{-1}G_hq+\nu A_hG_hq. $$
Then the unique predictor is $\widetilde u^{n+1}=G_hq$, the pressure
increment is $\phi^{n+1}=k^{-1}q$, and the corrected velocity is exactly
$u^{n+1}=0$. The pressure update is $p^{n+1}=k^{-1}q$.

## Facts & Assumptions

**Given:** The periodic staggered grid, even $N$, the alternating cell pressure $q_j=(-1)^{j_1}$, positive $k,\nu$, and the stated one-step data.

[F1] The staggered operators satisfy $\Delta_h=D_hG_h$ and $A_h$ is the negative componentwise periodic Laplacian ([[def-na-periodic-staggered-grid-stokes-operators]]).

[F2] The predictor, pressure-increment equation and velocity/pressure updates are those in [[alg-na-periodic-incremental-pressure-correction]].

[F3] Both solves are unique, the pressure increment is mean-zero, and the correction is exactly the discrete Helmholtz projection ([[thm-na-periodic-pressure-correction-solves-well-defined]], [[thm-na-periodic-discrete-helmholtz-projection]]).

## Proof

1.1 Since $N$ is even, $q$ has zero mean. The staggered gradient is not zero: $(G_hq)_{1,j}=-2q_j/h$. Also $\Delta_hq=-4q/h^2$, so [F1] gives $D_hG_hq=\Delta_hq$. Periodic summation shows both $G_hq$ and $A_hG_hq$ have zero component means, hence the force is admissible. [F1, given, algebra]

2.1 Substituting $\widetilde u^{n+1}=G_hq$ and $u^n=p^n=0$ into the predictor equation [F2] gives $k^{-1}G_hq+\nu A_hG_hq=f^{n+1}$, so uniqueness [F3] identifies it as the predictor. For the pressure equation, $$ \Delta_h(k^{-1}q)=k^{-1}D_hG_hq=k^{-1}D_h\widetilde u^{n+1}; $$ both sides have mean zero and [F3] gives $\phi^{n+1}=k^{-1}q$. [F1, F2, F3, step 1.1, algebra]

3.1 The velocity update [F2] now gives $u^{n+1}=G_hq-kG_h(k^{-1}q)=0$, while the pressure update gives $p^{n+1}=k^{-1}q$. This is exact one-step removal of the selected mode. [F2, step 2.1, algebra] ∎
