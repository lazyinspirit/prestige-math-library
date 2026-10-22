---
id: def-emg-fx-linearized-electrovac
kind: definition
title: Linearized geometric electrovacuum operator and gauge equivalence
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 0
deps:
  - def-countable-choice
  - def-emg-electrovacuum-cauchy-system
  - def-emg-xs-geometric-electrovac
  - lem-emg-lorentz-hodge-calculus
dependency_roles:
  def-countable-choice: mathematical-premise
  def-emg-electrovacuum-cauchy-system: mathematical-premise
  def-emg-xs-geometric-electrovac: mathematical-premise
  lem-emg-lorentz-hodge-calculus: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Chapter 6 and Chapter 7, equations (7.106)–(7.113)"
      url: "https://arxiv.org/pdf/gr-qc/9712019v1"
      locator: "Chapter 6, PDF pp. 149–158 (printed pp. 142–151), gives the background-field perturbation and infinitesimal diffeomorphism gauge law; Chapter 7, PDF pp. 208–209 (printed pp. 201–202), gives the coupled Einstein–Maxwell equations and Reissner–Nordström family. The flat-background formulas and the notes' Gaussian normalization are not imported as curved-background or SI conventions."
    - title: "Elena Giorgi, The linear stability of Reissner–Nordström spacetime for small charge, arXiv:1904.04926v2 (2020)"
      url: "https://arxiv.org/pdf/1904.04926"
      locator: "Sections 1 and 6.1–6.2, PDF pp. 1–4 and 43–55: the coupled Einstein–Maxwell perturbation equations, residual pure-gauge solutions, and the linearized Kerr–Newman parameter family. The paper's decay theorem has additional small-charge, asymptotically flat and Bondi-gauge hypotheses and is not asserted here."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Definition

Assume the countable-choice background $\mathrm{AC}_\omega$ carried by the stated Lorentzian geometry suppliers. Let $(M,g,N,o)$ be an oriented, time-oriented smooth Lorentzian four-manifold of signature $(-,+,+,+)$, with metric-selected connection and orientation as in the geometric electrovac convention. In a length-coordinate chart, metric components are dimensionless and a geometric-normalized real two-form has components of unit $\mathrm{m}^{-1}$.

For a smooth real two-form $\mathcal F$, put
$$Q_{ab}(g,\mathcal F):=\mathcal F_{ac}\mathcal F_b{}^c-\frac14 g_{ab}\mathcal F_{cd}\mathcal F^{cd},$$
where all raised indices use $g^{-1}$. Its length-coordinate components have unit $\mathrm{m}^{-2}$. Fix $\Lambda\in\mathbb R$ with unit $\mathrm{m}^{-2}$. An **exact geometric electrovacuum background on $U\subseteq M$** is a smooth pair $(g,\mathcal F)$ on the same open set satisfying
$$\operatorname{Ric}_{ab}[g]-\Lambda g_{ab}=2Q_{ab}(g,\mathcal F),\qquad d\mathcal F=0,\qquad d(\star_g\mathcal F)=0.$$
For $\Lambda=0$ this is the geometric normalization of [[def-emg-xs-geometric-electrovac]]. The symbol $\mathcal F$ here is geometric-normalized; it is not the SI-normalized field tensor used in [[def-emg-electrovacuum-cauchy-system]].

Fix such a background on $U$. A **linearized perturbation** is a pair $(h,f)$ consisting of a smooth symmetric covariant two-tensor $h$ and a smooth real two-form $f$ on $U$. Its linearized metric residual is
$$\delta E_{(g,\mathcal F)}[h,f]:=\left.\frac{d}{d\epsilon}\right|_{\epsilon=0}\bigl(\operatorname{Ric}[g_\epsilon]-\Lambda g_\epsilon-2Q(g_\epsilon,\mathcal F_\epsilon)\bigr),$$
and its linearized Maxwell residuals are
$$df,\qquad d\,\delta(\star\mathcal F),\qquad \delta(\star\mathcal F):=\left.\frac{d}{d\epsilon}\right|_{\epsilon=0}\star_{g_\epsilon}\mathcal F_\epsilon.$$
Here $g_\epsilon=g+\epsilon h+O(\epsilon^2)$ and $\mathcal F_\epsilon=\mathcal F+\epsilon f+O(\epsilon^2)$ are smooth local families on the fixed domain, with dimensionless parameter $\epsilon$. The derivatives are the coordinatewise derivatives of these smooth finite-jet operators; the chain rule makes them depend only on $(h,f)$, not on the higher-order parts of the chosen families. The **linearized electrovacuum system** is the homogeneous system $\delta E_{(g,\mathcal F)}[h,f]=0$, $df=0$, and $d\,\delta(\star\mathcal F)=0$.

For a smooth vector field $X$, let $\Phi_\epsilon$ be its local flow and define the **pure gauge perturbation** by $(h,f)=\left.\frac{d}{d\epsilon}\right|_0(\Phi_\epsilon^*g,\Phi_\epsilon^*\mathcal F)$. A **parameter perturbation** is the derivative of a smooth one-parameter family of exact geometric electrovacuum backgrounds on one common open domain. Neither definition asserts that every solution of the linearized system is pure gauge or is a parameter perturbation.

For a local diffeomorphism $\Phi:V\to W$ and a covariant $r$-tensor $T$ on $W$, its pullback is $(\Phi^*T)_p(v_1,\ldots,v_r):=T_{\Phi(p)}(D\Phi_pv_1,\ldots,D\Phi_pv_r)$; this fixes the pullback convention in the pure-gauge definition.

If a potential perturbation $a\in\Omega^1(V)$ is chosen on an open set $V\subseteq U$ with $f=da$, then $a$ and $a+d\chi$ represent the same field-strength perturbation for every smooth scalar $\chi$ on $V$. No global exactness of $f$ or global potential is assumed.

## Definition references

[[def-countable-choice]]

[[def-emg-xs-geometric-electrovac]]

[[def-emg-electrovacuum-cauchy-system]]

[[lem-emg-lorentz-hodge-calculus]]

## Remarks

The stress variation displays the first-order coupling. Writing $h^{ab}=g^{ac}g^{bd}h_{cd}$, the identity $\delta g^{ab}=-h^{ab}$ and the product rule give
$$\delta Q_{ab}=f_{ac}\mathcal F_b{}^c+\mathcal F_a{}^c f_{bc}-\mathcal F_{ac}h^{cd}\mathcal F_{bd}-\frac14h_{ab}\mathcal F_{cd}\mathcal F^{cd}-\frac14g_{ab}\bigl(2\mathcal F^{cd}f_{cd}-2h^{ce}\mathcal F_{cd}\mathcal F_e{}^d\bigr).$$
Thus a nonzero background field contributes terms bilinear in $\mathcal F$ and $f$, and terms linear in $h$ and quadratic in $\mathcal F$; the metric and electromagnetic perturbations are coupled at first order. At $\mathcal F=0$, every term in $\delta Q$ vanishes, so the electromagnetic stress supplies no first-order source in the metric equation. These are algebraic consequences of the displayed definition of $Q$.

The definition and the finite-slab estimate below do not assert that a linearized solution integrates to a nonlinear family. On backgrounds with Killing fields and compact Cauchy slices, second-order linearization-stability conditions are a separate integrability obligation. No asymptotic decay, nonlinear stability, or global-in-time conclusion is included.

