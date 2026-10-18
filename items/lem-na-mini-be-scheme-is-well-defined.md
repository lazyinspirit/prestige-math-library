---
id: lem-na-mini-be-scheme-is-well-defined
kind: lemma
title: "Well-definedness of the finite-dimensional mini backward Euler equations"
status: published
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 5
deps:
  [
    def-na-mini-navier-stokes-backward-euler-scheme,
    def-na-mini-element-p1-bubble-p1-spaces,
    def-na-discrete-weak-and-exact-divergence-free-spaces,
    def-na-evolutionary-skew-convective-form,
    lem-na-evolutionary-skew-convective-form-bound,
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
      locator: "§4, finite-dimensional implicit step and real-coordinate formulation;
        all terms for the present Newtonian MINI scheme are checked locally."
    - title: "Xiaoming He, Introduction and Basic Implementation for Finite Element
        Methods, Chapter 9: Finite elements for 2D unsteady Navier–Stokes
        equations"
      url: https://bpb-us-e2.wpmucdn.com/sites.mst.edu/dist/a/189/files/2023/09/Finite_Elements_Chapter_9.pdf
      locator: "§3, pp. 24–31: backward Euler mixed finite-dimensional equations."
verification:
  precheck: pass
---

## Statement

Assume Countable Choice. For each fixed finite mesh and time partition in [[def-na-mini-navier-stokes-backward-euler-scheme]], every term of its velocity equation is a continuous finite-dimensional functional of the trial and test vectors, the pressure constraints are linear, and the forcing averages exist.

## Facts & Assumptions

**Given:** Countable Choice, a bounded Lipschitz domain, a finite matching mesh, its mini spaces, a finite partition, $f\in L^2(0,T;L^2)$, and $u_h^{n-1}\in Z_h$.

[F1] The MINI spaces are finite-dimensional subspaces of $H^1_0(D)^d$ and the weak kernel $Z_h$ is a finite-dimensional linear subspace. ([[def-na-mini-element-p1-bubble-p1-spaces]], [[def-na-discrete-weak-and-exact-divergence-free-spaces]])

[F2] The skew convective form is continuous on $V^3$. ([[def-na-evolutionary-skew-convective-form]], [[lem-na-evolutionary-skew-convective-form-bound]])

[A1] Countable Choice is inherited from the MINI/Stokes space conventions; the Bochner criterion itself only uses the asserted strong measurability and integrable norm. ([[def-countable-choice]], [[def-na-mini-element-p1-bubble-p1-spaces]], [[thm-bochner-integrability-criterion]])

[F3] A strongly measurable $L^2(0,T;L^2)$ function is Bochner integrable on the finite interval, since Holder makes its norm integrable. ([[def-bochner-integrable-function]], [[thm-bochner-integrability-criterion]], [[thm-holder-inequality-for-integrals]])

## Proof

1.1 Every finite-dimensional subspace inherits the continuous inclusions and bilinear forms from $V$ and $H$; thus $(u_h^n-u_h^{n-1},v_h)_H$, $a_\nu(u_h^n,v_h)$, and $b(v_h,p_h^n)$ are continuous in their coordinates. [F1, given, algebra]

2.1 The nonlinear term is continuous by [F2], and the force average is a finite vector in $L^2(D)^d$ by [F3] because each interval has $\tau_n>0$. The divergence constraint is a finite set of linear equations in $V_h$ and $Q_h$. These facts make the scheme a well-defined finite-dimensional system. [A1, F1, F2, F3, step 1.1] ∎
