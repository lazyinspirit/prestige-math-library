---
id: def-pe18-cartesian-complex-stretch-pml
kind: definition
title: Cartesian complex-stretch PML for a homogeneous Helmholtz mode
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps: []
justified_by: []
proof_strategy: not-applicable
axiom_use: "No axiom is used; this is an analytic coordinate-stretch model for a
  constant-coefficient Cartesian Helmholtz equation."
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Steven G. Johnson, Notes on Perfectly Matched Layers (PMLs), §§3.1–3.2"
      url: "https://arxiv.org/pdf/2108.05348"
    - title: "Michler, Demkowicz, Kurtz, and Pardo, Improving the performance of
        Perfectly Matched Layers by means of hp-adaptivity, §§2.1–2.2"
      url: "https://www.cs.ox.ac.uk/people/christian.michler/Homepage%20of%20Christia\
        n%20Michler/Publications_files/MicDemKurPar2007NMPDE.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Definition

Let $k>0$, $x\in\mathbb R$ be the Cartesian normal coordinate, and $y\in\mathbb R^2$ the tangential coordinate. Let $\sigma$ be nonnegative, continuous, piecewise $C^1$, and zero for $x\le0$. Define
$$S(x)=\int_0^x\sigma(t)\,dt,\qquad X(x)=x+iS(x),\qquad s(x)=X'(x)=1+i\sigma(x).$$
The pulled-back constant-coefficient Helmholtz operator in the layer is
$$\frac1{s(x)}\partial_x\left(\frac1{s(x)}\partial_x\right)+\Delta_y+k^2.$$
This definition concerns the homogeneous Cartesian branch only; it makes no claim for heterogeneous media, curved stretches, grazing or evanescent uniform attenuation, discretizations, or finite-element convergence.
