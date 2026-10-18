---
id: lem-hp-simplex-p-explicit-conforming-interpolant
kind: lemma
title: p-explicit unweighted H1 interpolation with conforming face lifts
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  - def-hp-variable-degree-spaces-on-matching-meshes
  - lem-reference-jacobi-weighted-endpoint-kernel
  - thm-hp-simplex-weighted-spectral-projection
  - thm-hp-simplex-p-dependent-face-trace-inverse
  - thm-hp-reference-interval-integrated-legendre-projection
justified_by: []
provenance:
  statement: literature-derived
  proof: not-supplied
verification:
  precheck: pending
sources:
  references:
    - title: Martin Vohralík, Finite Element Methods, Chapter 6, hp finite elements
      url: https://who.rocq.inria.fr/Martin.Vohralik/Enseig/FEM/FEM.pdf
      locator: "Theorem 6.2.1, printed pp. 55–56: a standard hp approximation estimate is stated, but no local proof is given; §6.3 also omits the involved approximation developments."
    - title: Tim Warburton and Jan S. Hesthaven, On the Constants in hp-Finite Element Trace Inverse Inequalities
      url: https://infoscience.epfl.ch/server/api/core/bitstreams/a541b153-f562-48eb-baa1-b42f9335269d/content
      locator: "§§3–4, pp. 4–14: p-explicit face trace inverse bounds; these do not prove unweighted H1 p-approximation or a conforming lift."
    - title: Joachim Schöberl, Numerical Methods for Partial Differential Equations, p-version FEM
      url: https://jschoeberl.github.io/iFEM/pversion/hpfem.html
      locator: "§30.4: the p-stable polynomial extension argument is left among the exercises and is not a supplied proof."
    - title: Matthias Braess and Christoph Schwab, Approximation on polyhedral domains with geometric meshes
      url: https://www.sam.math.ethz.ch/sam_reports/reports_final/reports1999/1999-08_fp.pdf
      locator: "§3, Theorem 3.3: weighted coefficient/derivative estimates; the norm is not identified with ordinary unweighted H1."
---

## Statement

**Required claim, not established by this draft.** The assigned simplex branch needs a proved p-explicit approximation and conformity result for a finite shape-regular matching affine simplicial mesh with cell degree map $K\mapsto p_K$. For cell data $u|_K$ with explicitly stated Sobolev regularity, it must give a conforming interpolant in the trace-matching variable-degree space of [[def-hp-variable-degree-spaces-on-matching-meshes]], state the full dependence of the local $H^1$ approximation error on $h_K,p_K$, and regularity, and prove a p-stable polynomial face lift whose shared trace has degree $p_F=\min(p_K,p_{K'})$. This record asserts no such estimate: the precise regularity range, rate, and lift norm require an owner-selected theorem statement before a complete proof can be supplied.

## Facts & Assumptions

**Given:** A finite shape-regular matching affine simplicial mesh, finite local degrees $p_K$, the trace-matching convention $p_F=\min(p_K,p_{K'})$, and cellwise Sobolev-regular data as would be specified by the eventual interpolation theorem.

[F1] [[thm-hp-simplex-weighted-spectral-projection]] proves a p-tail estimate only in its explicitly coefficient-defined weighted simplex scale; it makes no identification with ordinary unweighted Sobolev norms.

[F2] [[thm-hp-simplex-p-dependent-face-trace-inverse]] proves the p-explicit inverse trace bound for polynomial traces and normal derivatives; an inverse trace bound does not construct an approximation projector or a conformity lift.

[F3] [[thm-hp-reference-interval-integrated-legendre-projection]] gives an endpoint-preserving one-dimensional estimate under a Legendre coefficient-scale hypothesis; it does not supply an unweighted simplex H1 projector or a variable-degree face extension.

## Escalation

The reviewed source set does not close the requested implication. Vohralík states a standard hp estimate but omits its proof; Schöberl leaves the p-stable extension argument as exercises; Braess–Schwab's Theorem 3.3 is for a weighted coefficient/derivative norm; and Warburton–Hesthaven prove inverse traces, not approximation or lifting. The missing supplier must separately establish (i) the exact unweighted simplex approximation rate with its regularity and $h,p$ hypotheses, and (ii) a degree-uniform face lift/assembly result for $p_F=\min(p_K,p_{K'})$. Until those two parts are proved, dependent simplex and corner claims remain escalated.
