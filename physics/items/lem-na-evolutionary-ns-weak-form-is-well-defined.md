---
id: lem-na-evolutionary-ns-weak-form-is-well-defined
kind: lemma
title: "Integrability of the energy weak Navier–Stokes formulation"
status: published
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps:
  [
    def-na-evolutionary-incompressible-ns-weak-solution,
    lem-na-evolutionary-skew-convective-form-bound,
    def-pe12-gelfand-triple,
    def-na-stokes-zero-mean-pressure-and-velocity-spaces,
    def-bochner-integrable-function,
    thm-bochner-integrability-criterion,
    thm-holder-inequality-for-integrals,
    def-countable-choice
  ]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Endre Süli and Tabea Tscherpel, Fully discrete finite element
        approximation of unsteady flows of implicitly constituted incompressible
        fluids, arXiv:1804.02264v1"
      url: https://arxiv.org/pdf/1804.02264
      locator: "Definition 2.1 and §2, energy class and weak formulation; every
        pairing is verified locally here for the Newtonian case."
    - title: "Xiaoming He, Introduction and Basic Implementation for Finite Element
        Methods, Chapter 9: Finite elements for 2D unsteady Navier–Stokes
        equations"
      url: https://bpb-us-e2.wpmucdn.com/sites.mst.edu/dist/a/189/files/2023/09/Finite_Elements_Chapter_9.pdf
      locator: "§1, pp. 11–13, weak form and the velocity-pressure spaces."
verification:
  precheck: pass
---

## Statement

Assume Countable Choice. For the energy class and data in [[def-na-evolutionary-incompressible-ns-weak-solution]], every term in its time-tested momentum identity is integrable, and the nonlinear map $t\mapsto c(u(t);u(t),\cdot)$ belongs to $L^{4/3}(0,T;V^*)$.

## Facts & Assumptions

**Given:** Countable Choice, $u\in L^\infty(0,T;H_\sigma)\cap L^2(0,T;V_\sigma)$, $p\in L^{4/3}(0,T;Q)$, $f\in L^2(0,T;L^2)$, $\nu>0$, and a test $\varphi\in C^1([0,T];V)$.

[F1] The energy class and weak-form conventions are those in the definition, including the Hilbert evolution triple used for the time-dependent pairings. ([[def-na-evolutionary-incompressible-ns-weak-solution]], [[def-pe12-gelfand-triple]])

[F2] The convective form obeys $\|c(u;u,\cdot)\|_{V^*}\le C\|u\|_2^{1/2}\|\nabla u\|_2^{3/2}$ in both dimensions, and the viscosity form is bounded on $V\times V$. ([[lem-na-evolutionary-skew-convective-form-bound]], [[def-na-stokes-zero-mean-pressure-and-velocity-spaces]])

[A1] Countable Choice is inherited from the weak-solution and Stokes-space conventions; the Bochner integrability criterion itself applies to the strongly measurable functions stated here. ([[def-countable-choice]], [[def-na-evolutionary-incompressible-ns-weak-solution]], [[def-bochner-integrable-function]], [[thm-bochner-integrability-criterion]])

[F3] Holder's inequality controls time and space pairings at conjugate exponents. ([[thm-holder-inequality-for-integrals]])

## Proof
1.1 The Bochner $L^2(0,T;V)$ hypothesis makes $u$ strongly measurable in $V$. The continuous trilinear bound [F2] makes $v\mapsto c(v;v,\cdot)$ a continuous map $V\to V^*$, so applying it to simple-function approximants of $u$ shows that $t\mapsto c(u(t);u(t),\cdot)$ is strongly measurable. Since $\|u(t)\|_2$ is essentially bounded and $\nabla u\in L^2(0,T;L^2)$, [F2] gives $\int_0^T\|c(u;u,\cdot)\|_{V^*}^{4/3}\,dt\le C\|u\|_{L^\infty L^2}^{2/3}\int_0^T\|\nabla u\|_2^2dt<\infty$. [A1, F1, F2, algebra]

1.2 The time derivative term pairs $u\in L^\infty(0,T;H_\sigma)$ with $\partial_t\varphi\in L^\infty(0,T;L^2)$; the viscosity term is bounded by $2\nu\|\nabla u\|_{L^2L^2}\|\nabla\varphi\|_{L^2L^2}$. Since $|\operatorname{div}\varphi|\le\sqrt d|\nabla\varphi|$, the pressure term is finite by Holder from $p\in L^{4/3}L^2$ and $\varphi\in L^\infty V$. The forcing term is finite because $f\in L^2L^2$ and $\varphi$ is bounded in $L^\infty L^2$. [A1, F1, F3, algebra]

2.1 Each spatial pairing is therefore finite, and step 1.1 gives the stated Bochner integrability of the nonlinear functional; the time-tested weak formulation is well-defined. [A1, step 1.1, step 1.2] ∎
