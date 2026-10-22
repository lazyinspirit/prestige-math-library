---
id: pthm-emx-retarded-history-localization
kind: physics-theorem
title: "Retarded Maxwell fields for spatially compact smooth histories"
domain: physics
status: draft
origin: pipeline
dependency_level: 0
deps:
  - def-countable-choice
  - def-ck-euclidean-maps-and-diffeomorphisms
  - cor-c-one-change-of-variables-for-l-one-functions
  - def-em-fields
  - def-em-lab-geometry
  - def-em-potential-gauge-and-field-conventions
  - def-em-si-conventions
  - def-em-sources
  - lem-em-retarded-wave-kernel
  - lem-test-function-cutoffs-and-euclidean-localization
  - post-em-radiation-selection
  - post-em-vacuum-maxwell
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - pthm-em-lorenz-gauge-wave-form
  - thm-ck-euclidean-maps-closed-under-algebra-and-composition
  - thm-heine-borel-rn
  - thm-dominated-convergence
  - thm-polar-coordinates-formula-for-lebesgue-measure
  - def-polar-surface-measure-on-the-unit-sphere
  - cor-mean-value-theorem
dependency_roles:
  def-countable-choice: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  cor-c-one-change-of-variables-for-l-one-functions: mathematical-premise
  def-em-fields: formulation-prerequisite
  def-em-lab-geometry: formulation-prerequisite
  def-em-potential-gauge-and-field-conventions: mathematical-premise
  def-em-si-conventions: formulation-prerequisite
  def-em-sources: formulation-prerequisite
  lem-em-retarded-wave-kernel: mathematical-premise
  lem-test-function-cutoffs-and-euclidean-localization: mathematical-premise
  post-em-radiation-selection: physical-assumption
  post-em-vacuum-maxwell: physical-assumption
  prop-order-and-scalar-rules-for-the-nonnegative-integral: mathematical-premise
  pthm-em-lorenz-gauge-wave-form: physical-result
  thm-ck-euclidean-maps-closed-under-algebra-and-composition: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  thm-polar-coordinates-formula-for-lebesgue-measure: mathematical-premise
  def-polar-surface-measure-on-the-unit-sphere: mathematical-premise
  cor-mean-value-theorem: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "The smooth retarded solution branch of classical vacuum electromagnetism for conserved volume sources supported in one fixed spatial ball at every time, including histories that are not compactly supported in time. The result establishes local finiteness, smoothness, the sourced wave equations, Lorenz gauge and the smooth Maxwell system for the selected retarded potentials. Point, sheet and other singular sources, self-force, radiation reaction, finite-energy claims and empirical claims are excluded."
sources:
  references:
    - title: "Niklas Beisert, Elektrodynamik, Vorlesungsskript, ETH Zürich 2024 FS, complete 176-page course script"
      url: "https://people.phys.ethz.ch/~nbeisert/lectures/ED-24FS-Skript.pdf"
      locator: "§11.2, printed pp. 11.4–11.7 (PDF pp. 124–127): retarded and advanced Green kernels, the sourced wave equations and the retarded-potential construction; the source-history localization used here is proved independently."
    - title: "Richard Fitzpatrick, Classical Electromagnetism: An intermediate level course, University of Texas at Austin, complete author-hosted HTML lecture notes"
      url: "https://farside.ph.utexas.edu/teaching/em/lectures/node50.html"
      locator: "Chapter 4, node 50, “Retarded potentials”: the retarded Green-function construction for scalar and vector potentials and its retardation convention; the arbitrary-time-history extension is proved independently."
---

## Statement

Assume Countable Choice. Let $a,c,\mu_0>0$, let $\varepsilon_0=(\mu_0c^2)^{-1}$, and let $\rho:\mathbb R^3\times\mathbb R\to\mathbb R$ and $J:\mathbb R^3\times\mathbb R\to\mathbb R^3$ be jointly $C^\infty$. Suppose $\rho(y,t)=J(y,t)=0$ whenever $|y|>a$ and suppose the continuity equation $\partial_t\rho+\operatorname{div}_yJ=0$ holds everywhere.

Adopt the smooth vacuum Maxwell equations and the retarded, no-free-addition selection as the physical model assumptions. In the SI laboratory convention, define

$$\varphi(x,t):=\frac{\mu_0c^2}{4\pi}\int_{\mathbb R^3}\frac{\rho(y,t-|x-y|/c)}{|x-y|}\,dy,\qquad A(x,t):=\frac{\mu_0}{4\pi}\int_{\mathbb R^3}\frac{J(y,t-|x-y|/c)}{|x-y|}\,dy.$$

The integrals converge absolutely at every $(x,t)$. The resulting potentials are jointly $C^\infty$ and satisfy $W\varphi=\rho/\varepsilon_0$, $WA=\mu_0J$, and $\operatorname{div}A+c^{-2}\partial_t\varphi=0$ on $\mathbb R^3\times\mathbb R$, where $W=c^{-2}\partial_t^2-\Delta$. Consequently $E=-\nabla\varphi-\partial_tA$ and $B=\operatorname{curl}A$ are jointly smooth and satisfy the smooth vacuum Maxwell equations for $(\rho,J)$ everywhere. This is the selected retarded solution, with no independent homogeneous field added. No compact support in time is assumed.

## Statement references

[[def-em-lab-geometry]]

[[def-em-si-conventions]]

[[def-em-sources]]

[[def-em-fields]]

[[def-em-potential-gauge-and-field-conventions]]

[[post-em-vacuum-maxwell]]

[[post-em-radiation-selection]]

[[lem-em-retarded-wave-kernel]]

[[pthm-em-lorenz-gauge-wave-form]]

## Facts & Assumptions

**Given:** Countable Choice; constants $a,c,\mu_0>0$ with $\varepsilon_0=(\mu_0c^2)^{-1}$; jointly smooth $\rho,J$ supported in $\overline B_a(0)$ in space at every time and satisfying $\partial_t\rho+\operatorname{div}_yJ=0$; and the retarded-potential formulas in the Statement.

[A1] Countable Choice is available for the polar integral, Lebesgue change of variables and retarded-kernel suppliers. ([[def-countable-choice]])

[F1] The source pair consists of smooth volume density and current maps of the framework; $C^\infty$ means that every iterated coordinate partial derivative exists and is continuous, and finite products of smooth maps are smooth. The source definition does not itself impose conservation. Here conservation and fixed-ball support are explicit hypotheses. ([[def-em-sources]], [[def-ck-euclidean-maps-and-diffeomorphisms]], [[thm-ck-euclidean-maps-closed-under-algebra-and-composition]])

[F2] For every $h\in C_c^\infty(\mathbb R^3\times\mathbb R)$, $K*h(x,t):=\int h(y,t-|x-y|/c)/(4\pi|x-y|)\,dy$ is absolutely convergent, is jointly $C^\infty$, and satisfies $W(K*h)=h$ pointwise, with $W=c^{-2}\partial_t^2-\Delta$. ([[lem-em-retarded-wave-kernel]] (b))

[F3] For a compact subset $C$ of an open set $O\subseteq\mathbb R$, there is $\chi\in C_c^\infty(O)$ with $0\le\chi\le1$ and $\chi=1$ on a neighborhood of $C$. Closed bounded Euclidean boxes are compact. ([[lem-test-function-cutoffs-and-euclidean-localization]], [[thm-heine-borel-rn]])

[F4] Translation is a $C^1$ change of variables with unit Jacobian; the mean value theorem bounds each scalar component's difference quotient by a derivative supremum. Dominated convergence applies when the difference quotients converge pointwise and are bounded by one integrable function. ([[cor-c-one-change-of-variables-for-l-one-functions]], [[cor-mean-value-theorem]], [[thm-dominated-convergence]])

[F5] The integral of $|z|^{-1}$ over a bounded ball in $\mathbb R^3$ is finite: by polar coordinates it is $\sigma(S^2)\int_0^Rr\,dr$, with finite sphere measure. Nonnegative integrals are monotone and positively homogeneous. ([[thm-polar-coordinates-formula-for-lebesgue-measure]], [[def-polar-surface-measure-on-the-unit-sphere]], [[prop-order-and-scalar-rules-for-the-nonnegative-integral]])

[F6] For a $C^2$ potential pair in Lorenz gauge, the decoupled equations $W\varphi=\rho/\varepsilon_0$ and $WA=\mu_0J$ imply the smooth sourced Maxwell system; the fields are $E=-\nabla\varphi-\partial_tA$ and $B=\operatorname{curl}A$. ([[pthm-em-lorenz-gauge-wave-form]] (c), [[def-em-potential-gauge-and-field-conventions]])

[F7] The SI constants satisfy $\varepsilon_0=(\mu_0c^2)^{-1}$; the adopted physical solution is the retarded branch with no free addition. ([[def-em-si-conventions]], [[post-em-radiation-selection]] (b))

## Proof

**Proof technique:** localize each arbitrary history to the finite time interval sampled near an observation event, use the compactly supported retarded kernel theorem there, and derive the Lorenz condition from continuity.

1.1 Fix $(x,t)$. The source integrands vanish off $\overline B_a$. On this compact ball the retarded time $t-|x-y|/c$ lies in the bounded interval $[t-(|x|+a)/c,t]$, so smoothness bounds both source functions there by a finite constant $M$. The triangle inequality and [F5] give $\int_{B_a}|h(y,t-|x-y|/c)|/|x-y|\,dy\le M\int_{B(x,|x|+a)}|x-y|^{-1}dy<\infty$ for $h=\rho$ and each component of $J$; the possible point $y=x$ is harmless because $|z|^{-1}$ is locally integrable in three dimensions. Thus both retarded integrals are absolutely convergent. [given, F1, F5, A1]

2.1 Fix an event $(x_0,t_0)$ and choose a bounded open ball $O$ around it. Its closure is compact by [F3], as is the source ball $\overline B_a$. On $\overline O\times\overline B_a$, both observation times and all values $t-|x-y|/c$ lie in one bounded interval because $|x-y|\le|x|+a$; take a closed finite interval containing these times. By [F3] choose a smooth compactly supported time cutoff $\chi$ equal to one on a neighborhood of this interval. Then $h_\rho(y,s):=\chi(s)\rho(y,s)$ and $h_J(y,s):=\chi(s)J(y,s)$ belong to $C_c^\infty(\mathbb R^3\times\mathbb R)$ by [F1], since their supports are contained in $\overline B_a\times\operatorname{supp}\chi$. On $O$, every retarded source value and every observation-time value sees $\chi=1$, so the potentials in the Statement equal $\mu_0c^2 K*h_\rho$ and $\mu_0K*h_J$, and the localized sources equal $\rho$ and $J$. By [F2] these potentials are smooth on $O$ and satisfy $W\varphi=\mu_0c^2\rho=\rho/\varepsilon_0$ and $WA=\mu_0J$ there. Since $(x_0,t_0)$ was arbitrary, the potentials are smooth globally and the two wave equations hold everywhere. [step 1.1, F1, F2, F3, F7, A1]

3.1 On a smaller neighborhood of the same event, change variables $z=x-y$ in the localized convolution: $K*h(x,t)=\int h(x-z,t-|z|/c)/(4\pi|z|)\,dz$. For a spatial difference quotient, the mean value theorem bounds the quotient of $h(x-z,t-|z|/c)$ by the supremum of $|\nabla_yh|$ on a common compact neighborhood, times $1/(4\pi|z|)$; for a time difference quotient the same bound uses the supremum of $|\partial_th|$. These bounds are integrable on a fixed ball by [F5]. The pointwise limits are the corresponding derivatives of $h$, so [F4] permits dominated convergence and yields $\partial_{x_i}(K*h)=K*(\partial_{y_i}h)$ and $\partial_t(K*h)=K*(\partial_th)$ on that neighborhood. For $h_J=\chi J$, $\operatorname{div}_y h_J=\chi\operatorname{div}_yJ$; for $h_\rho=\chi\rho$, $\partial_t h_\rho=\chi'\rho+\chi\partial_t\rho$. At every retarded argument sampled on the neighborhood, $\chi=1$ and $\chi'=0$ by the cutoff choice in step 2.1. Therefore $\displaystyle \operatorname{div}A+c^{-2}\partial_t\varphi=\mu_0 K*(\operatorname{div}_yJ+\partial_t\rho)=0$ there by the assumed continuity equation. The event was arbitrary, so the Lorenz condition holds everywhere. [step 2.1, F1, F2, F3, F4, F5, F7, A1]

4.1 The pair is jointly smooth by step 2.1, satisfies the two wave equations there, and is in Lorenz gauge by step 3.1. Applying [F6] on $\mathbb R^3\times\mathbb R$ gives the two sourced Maxwell equations; the other two equations are the automatic identities of the potential representation included in [F6]. The selection postulate [F7] identifies this retarded solution with the model's physical branch and excludes an independent homogeneous addition. [step 2.1, step 3.1, F6, F7, A1] ∎
