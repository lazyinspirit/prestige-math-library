---
id: def-finite-volume-space-time-reconstruction
kind: definition
title: Piecewise-constant finite-volume state and face-flux reconstructions
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
aliases: []
deps: [ def-conservative-finite-volume-scheme ]
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "H. De Sterck and P. Ullrich, Introduction to Computational PDEs, Chapter
        3, complete chapter, PDF pp. 81–106"
      url: "https://climate.ucdavis.edu/AM452.pdf"
      locator: "§3.4.1, pp. 94–96: cell averages, fluxes over time slabs and the
        space-time finite-volume grid."
    - title: "Benjamin Seibold, MIT OpenCourseWare 18.336, Lecture 19: Finite Volume
        Methods, complete six-page note"
      url: "https://ocw.mit.edu/courses/18-336-numerical-methods-for-partial-differen\
        tial-equations-spring-2009/814ce5a38ea0db4c58eff0c5ad8b111a_MIT18_336S0\
        9_lec19.pdf"
      locator: "p. 1: a finite-volume value is the cell average and the scheme
        balances fluxes through cell boundaries."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Definition

Use the cells, time levels, states and interface fluxes from
[[def-conservative-finite-volume-scheme]]. For $J_n^m=[t_n^m,t_{n+1}^m)$,
the **piecewise-constant state reconstruction** and **face-flux reconstruction**
are the measurable functions
$$ \mathcal U_m(x,t)=U_j^{m,n},\qquad \mathcal Q_m(x,t)=Q_{j+1/2}^{m,n} $$ whenever $(x,t)\in I_j^m\times J_n^m$. Values on cell or time-grid boundaries may be assigned arbitrarily, since those boundaries have two-dimensional Lebesgue measure zero. In particular, for almost every $(x,t)$, $$ \mathcal Q_m(x,t)=F\!\left(\mathcal U_m(x,t),\mathcal U_m(x+h_m,t)\right). $$

## Remarks

Strong $L^1_{\mathrm{loc}}$ convergence of reconstructions means convergence in
$L^1$ on every compact subset of $\mathbb R\times(0,T)$. It is an explicit
hypothesis in the weak-limit theorem below; it is not produced by the
reconstruction definition.
