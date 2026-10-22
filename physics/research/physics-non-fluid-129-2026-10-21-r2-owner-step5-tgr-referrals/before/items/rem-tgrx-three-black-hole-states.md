---
id: rem-tgrx-three-black-hole-states
kind: remark
title: Boulware, Unruh and Hartle-Hawking states are distinct
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: physics
library: physics
dependency_level: 4
deps:
  - post-tgrx-free-collapse-scattering
dependency_roles:
  post-tgrx-free-collapse-scattering: formulation-prerequisite
physical_scope: "Source-backed distinction among exterior ground, collapse and equilibrium states for the specified free-field Schwarzschild settings. No state-existence claim for Kerr, no measured radiation, and no equivalence of the collapse and equilibrium models is asserted."
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Stefan Hollands and Robert M. Wald, Quantum fields in curved spacetime, complete review"
      url: "https://arxiv.org/pdf/1401.2026"
      locator: "Complete 77-page review; §2.3(c), PDF pp. 26–31: Boulware, Unruh and Hartle-Hawking state domains, incoming conditions, horizon regularity and the distinction between eternal Schwarzschild and collapse."
    - title: "Robert M. Wald, The Thermodynamics of Black Holes"
      url: "https://arxiv.org/pdf/gr-qc/9912119"
      locator: "Complete 46-page review; §3, PDF pp. 10–13: collapse radiation, stationary equilibrium, and the different physical inputs in the Hawking and Unruh settings."
---

## Remark

Use $r_s=2GM/c^2$ and the SI constants of the preceding postulate. Define the two-sided eternal Schwarzschild spacetime by
$$\mathcal S_{\rm ext}:=\{(T,X)\in\mathbb R^2:X^2-T^2>-1\}\times S^2,$$
where $T,X$ are dimensionless, $S^2$ has its unit round metric $d\Omega^2$, and $r>0$ is the unique solution of $(r/r_s-1)e^{r/r_s}=X^2-T^2$. Uniqueness follows because the left side increases strictly from $-1$ to $+\infty$ as $r$ increases from zero. Give this manifold the metric and time orientation
$$ds^2=\frac{4r_s^3}{r}e^{-r/r_s}(-dT^2+dX^2)+r^2d\Omega^2,\qquad \partial_T\text{ future-directed}.$$
Its right exterior is $\mathcal E_R:=\{X>|T|\}\times S^2$, with $r>r_s$; there $t=(r_s/c)\log((X+T)/(X-T))$. The adjacent future and past horizons are respectively $T=X>0$ and $T=-X<0$ (times $S^2$), and the black-hole interior is $T>|X|$ (times $S^2$). A positive Schwarzschild-frequency mode is one with time dependence $e^{-i\omega t}$ for $\omega>0$, where $t$ is the stationary time of the Schwarzschild exterior. Here Hadamard means that the two-point distribution has the wavefront-set condition $\operatorname{WF}(W_2)=\mathcal C_g^+$ defined in the preceding postulate. The Boulware state on $\mathcal E_R$ is the ground state for these exterior modes: for every normalized exterior positive-frequency packet $h$, its number expectation is $\varpi(a(h)^*a(h))=0$. Its two-point function is Hadamard within $\mathcal E_R$, but it does not extend as a Hadamard state across either horizon branch.

The Unruh state is a different state, defined on the right exterior together with the black-hole interior of $\mathcal S_{\rm ext}$. Its incoming positive-frequency modes from $\mathscr I^-$ are in their ground state, while the outgoing sector associated with modes emerging from the past horizon has occupation $n_H(\omega):=\bigl(e^{\hbar\omega/(k_BT_H)}-1\bigr)^{-1}$ for angular frequency $\omega>0$, before exterior transmission filtering. Its two-point function satisfies the Hadamard condition across the future horizon but has no Hadamard extension across the past horizon. In contrast, the Hartle–Hawking state on $\mathcal S_{\rm ext}$ is invariant under Schwarzschild time translations and satisfies the Hadamard condition there; its restriction to $\mathcal E_R$ has both incoming and outgoing mode occupations $n_H(\omega)$, with $T_H:=\hbar c^3/(8\pi G M k_B)$, and satisfies the Hadamard condition across both horizon branches. These are distinct mode conditions and domains.

The collapse in-state adopted on the preceding page belongs to a dynamical collapse spacetime, not to $\mathcal S_{\rm ext}$. Its incoming-ground and late-time packet assumptions do not identify it with the eternal Unruh state. No rotating black-hole state is asserted here.

## Remark references

[[post-tgrx-free-collapse-scattering]]

