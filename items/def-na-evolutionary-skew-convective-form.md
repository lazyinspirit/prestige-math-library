---
id: def-na-evolutionary-skew-convective-form
kind: definition
title: "The skew convective form for incompressible flow"
status: draft
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps: [def-na-stokes-zero-mean-pressure-and-velocity-spaces]
justified_by: [lem-na-evolutionary-skew-convective-form-bound]
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Endre Süli and Tabea Tscherpel, Fully discrete finite element approximation of unsteady flows of implicitly constituted incompressible fluids, arXiv:1804.02264v1"
      url: https://arxiv.org/pdf/1804.02264
      locator: "§§3.1–3.2, especially the skew convective form in (3.13); the current item fixes its Newtonian real-valued convention."
    - title: "Xiaoming He, Introduction and Basic Implementation for Finite Element Methods, Chapter 9: Finite elements for 2D unsteady Navier–Stokes equations"
      url: https://bpb-us-e2.wpmucdn.com/sites.mst.edu/dist/a/189/files/2023/09/Finite_Elements_Chapter_9.pdf
      locator: "§1, pp. 3–13: the two-dimensional weak velocity-pressure formulation and convective term."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Definition

Let $D\subset\mathbb R^d$ be a bounded connected Lipschitz domain with $d\in\{2,3\}$, and let $V=H^1_0(D;\mathbb R^d)$ as in [[def-na-stokes-zero-mean-pressure-and-velocity-spaces]]. For $a,b,c\in V$, define the real **skew convective form**
$$c(a;b,c):=\frac12\int_D\big((a\cdot\nabla)b\cdot c-(a\cdot\nabla)c\cdot b\big)\,dx.$$
The middle and last slots are displayed separately to emphasize $c(a;b,c)=-c(a;c,b)$. In particular $c(a;b,b)=0$. The integrals are well-defined on $V$ by [[lem-na-evolutionary-skew-convective-form-bound]]. If additionally $\operatorname{div}a=0$, then $c(a;b,c)=\int_D(a\cdot\nabla)b\cdot c$.
