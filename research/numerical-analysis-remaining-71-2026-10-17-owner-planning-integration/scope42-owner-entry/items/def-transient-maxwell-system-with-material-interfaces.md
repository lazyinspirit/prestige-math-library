---
id: def-transient-maxwell-system-with-material-interfaces
kind: definition
title: Transient Maxwell system with piecewise materials and boundary conditions
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps: [def-na-zero-tangential-hcurl]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: John B. Schneider, Understanding the Finite-Difference Time-Domain Method
      url: https://eecs.wsu.edu/~schneidj/ufdtd/ufdtd.pdf
      locator: "Chapter 2 §§2.8–2.14, printed pp. 21–26: electric and magnetic boundary conditions, conductivity, PEC, and the time-varying Maxwell equations."
verification:
  precheck: n/a
---

## Definition

Let $\Omega\subset\mathbb R^3$ be a bounded Lipschitz polyhedron, or a periodic rectangular cell. The real electric field is $E(t,x)\in\mathbb R^3$ and the magnetic flux density is $B(t,x)\in\mathbb R^3$; the magnetic intensity is $H=\mu^{-1}B$. Let $\epsilon(x)$ and $\mu(x)$ be measurable, time-independent, symmetric matrix fields for which there are constants $0<\epsilon_0\le\epsilon_1$ and $0<\mu_0\le\mu_1$ with
$$\epsilon_0|v|^2\le v^T\epsilon(x)v\le\epsilon_1|v|^2,\qquad \mu_0|v|^2\le v^T\mu(x)v\le\mu_1|v|^2$$
for almost every $x$ and every $v\in\mathbb R^3$. A conductivity tensor $\sigma(x)$, when present, is measurable, symmetric, and positive semidefinite. The coefficients may jump across finitely many Lipschitz material interfaces. No derivative of a coefficient is part of the model.

In each material region the constitutive fields satisfy
$$\partial_t(\epsilon E)=\operatorname{curl}(\mu^{-1}B)-J_{\rm src}-\sigma E,\qquad \partial_t B+\operatorname{curl}E=0.$$
Here $J_{\rm src}$ is the impressed free-current density, while $\sigma E$ is the conductive current. Electric charge $\rho$ is constrained by $\operatorname{div}(\epsilon E)=\rho$ and the total-current continuity equation $\partial_t\rho+\operatorname{div}(J_{\rm src}+\sigma E)=0$; the magnetic constraint is $\operatorname{div}B=0$. These equalities are distributional. In the lossless branch set $\sigma=0$.

The boundary choice is one of the following. A **periodic boundary** identifies opposite traces of the rectangular cell. A **perfect electric conductor (PEC) boundary** imposes zero tangential trace $n\times E=0$ on $\partial\Omega$. At a material interface with no singular surface charge or current, the weak equations are understood with the transmission conditions $[n\times E]=0$, $[n\cdot B]=0$, $[n\times(\mu^{-1}B)]=0$, and $[n\cdot(\epsilon E)]=0$, where $[q]$ is the trace from one side minus the trace from the other. The interface conditions are part of the model convention; no smooth Taylor expansion across a coefficient jump is asserted.

For PEC, the weak Ampere equation is $(\epsilon E_t,v)_{L^2}-(\mu^{-1}B,\operatorname{curl}v)_{L^2}=-(J_{\rm src}+\sigma E,v)_{L^2}$ for every $v\in H_0(\operatorname{curl};\Omega)$ as defined in [[def-na-zero-tangential-hcurl]]; the periodic branch uses periodic $H(\operatorname{curl})$ test fields. Faraday’s equation remains $B_t+\operatorname{curl}E=0$ in distributions. These weak forms define the test-space and boundary convention used by the edge finite element method.

The weighted field norms are $\|E\|_\epsilon^2=\int_\Omega E^T\epsilon E\,dx$ and $\|B\|_{\mu^{-1}}^2=\int_\Omega B^T\mu^{-1}B\,dx$. The uniform coefficient bounds make them equivalent to the ordinary $L^2$ norms. All later smooth-error claims require smoothness separately on each mesh-aligned material region.
