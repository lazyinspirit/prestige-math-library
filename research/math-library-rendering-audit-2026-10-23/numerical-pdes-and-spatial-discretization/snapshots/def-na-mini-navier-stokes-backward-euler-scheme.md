---
id: def-na-mini-navier-stokes-backward-euler-scheme
kind: definition
title: "The mixed mini-element backward Euler Navier–Stokes scheme"
status: published
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps: [def-na-evolutionary-incompressible-ns-weak-solution, def-na-mini-element-p1-bubble-p1-spaces, def-na-discrete-weak-and-exact-divergence-free-spaces, def-na-evolutionary-skew-convective-form, def-bochner-integrable-function, thm-bochner-integrability-criterion, thm-holder-inequality-for-integrals, def-countable-choice]
justified_by: [lem-na-mini-be-scheme-is-well-defined]
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Endre Süli and Tabea Tscherpel, Fully discrete finite element approximation of unsteady flows of implicitly constituted incompressible fluids, arXiv:1804.02264v1"
      url: https://arxiv.org/pdf/1804.02264
      locator: "§§3.1–3.2, mixed finite-element spaces and implicit Euler recurrence; the scheme here omits their auxiliary regularization."
    - title: "Xiaoming He, Introduction and Basic Implementation for Finite Element Methods, Chapter 9: Finite elements for 2D unsteady Navier–Stokes equations"
      url: https://bpb-us-e2.wpmucdn.com/sites.mst.edu/dist/a/189/files/2023/09/Finite_Elements_Chapter_9.pdf
      locator: "§3, pp. 24–31: backward Euler full discretization and mixed velocity-pressure recurrence; the exact MINI pair is supplied by NA34."
verification:
  precheck: n/a
---

## Definition

Assume Countable Choice as inherited from the energy-space conventions. Interpret each interval forcing average as a Bochner integral; its existence follows from the stated L2 forcing and the Bochner integrability criterion ([[def-countable-choice]], [[thm-bochner-integrability-criterion]]). Let $D$ be as in [[def-na-evolutionary-incompressible-ns-weak-solution]], let $\mathcal T_h$ be a conforming shape-regular affine simplicial mesh of $D$, and let $V_h,Q_h,Z_h$ be the MINI spaces and weak divergence kernel of [[def-na-mini-element-p1-bubble-p1-spaces]] and [[def-na-discrete-weak-and-exact-divergence-free-spaces]]. For a partition $0=t_0<\cdots<t_N=T$, write $\tau_n=t_n-t_{n-1}$ and $f_h^n=\tau_n^{-1}\int_{t_{n-1}}^{t_n}f(t)\,dt$. Given $u_h^0\in Z_h$, a **backward Euler mini-element solution** is a sequence $(u_h^n,p_h^n)\in V_h\times Q_h$ satisfying, for $n=1,\ldots,N$,
$$\left(\frac{u_h^n-u_h^{n-1}}{\tau_n},v_h\right)_{L^2}+a_\nu(u_h^n,v_h)+c(u_h^n;u_h^n,v_h)+b(v_h,p_h^n)=(f_h^n,v_h)_{L^2}\quad(v_h\in V_h),$$
$$b(u_h^n,q_h)=0\quad(q_h\in Q_h).$$
All pressure variables use the zero-mean gauge $Q_h\subset L^2_0(D)$. Restriction to $v_h\in Z_h$ eliminates pressure. The equations are well-defined by [[lem-na-mini-be-scheme-is-well-defined]]; this definition claims no solver termination or error rate.
