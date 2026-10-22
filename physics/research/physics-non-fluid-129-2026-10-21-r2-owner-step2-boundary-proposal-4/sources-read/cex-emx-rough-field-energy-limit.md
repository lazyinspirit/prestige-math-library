---
id: cex-emx-rough-field-energy-limit
kind: counterexample
title: "Weak Maxwell does not authorize quadratic self-energy"
status: draft
origin: pipeline
domain: physics
dependency_level: 1
proof_strategy: direct
deps:
  - def-emx-finite-energy-boundary-model
  - def-em-fields
  - def-em-si-conventions
  - def-em-weak-sources
  - post-em-distributional-vacuum-maxwell
  - pthm-em-coulomb-solution
  - pthm-em-point-self-energy-divergence
dependency_roles:
  def-emx-finite-energy-boundary-model: formulation-prerequisite
  def-em-fields: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  def-em-weak-sources: formulation-prerequisite
  post-em-distributional-vacuum-maxwell: physical-assumption
  pthm-em-coulomb-solution: physical-result
  pthm-em-point-self-energy-divergence: physical-result
generation:
  role: counterexample
verification:
  precheck: pass
provenance:
  statement: ai-generated
  proof: ai-generated
physical_scope: "The ideal point-charge Coulomb field in the distributional pure electrostatic model. It is locally integrable but its ordinary quadratic electric-energy density is not locally integrable for nonzero charge, so the field lies outside the finite-energy boundary model. No claim is made about regularized or renormalized fields, particle mass, self-force, measurements, or every distributional Maxwell solution."
---

## Statement refuted

Every distributional vacuum Maxwell solution with a point-charge source has a locally integrable ordinary electric-energy density $u_E=\frac{\varepsilon_0}{2}|E|^2$ near the charge.

## Facts & Assumptions

**Given:** A nonempty open time interval $I$, a bounded Lipschitz polyhedron $\Omega\subseteq\mathbb R^3$ containing $x_0$, a point charge $q\ne0$ in coulombs, a position $x_0$ in metres, and $\varepsilon_0>0$ in $\mathrm{F\,m^{-1}}$. The ideal field $E_q$ has units $\mathrm{V\,m^{-1}}$.

$$E_q(x)=\frac{q(x-x_0)}{4\pi\varepsilon_0|x-x_0|^3}\quad(x\ne x_0).$$

[F1] For a stationary point source, $E_q$ is locally integrable, smooth off $x_0$, and satisfies $\operatorname{div}E_q=(q/\varepsilon_0)\delta_{x_0}$ and $\operatorname{curl}E_q=0$ distributionally; the value assigned at $x_0$ is immaterial. [[pthm-em-coulomb-solution]]

[F2] For $0<\delta<R$, the truncated ordinary electric-field energy is

$$\frac{\varepsilon_0}{2}\int_{\{\delta\le|x-x_0|\le R\}}|E_q(x)|^2\,d\lambda_3(x)=\frac{q^2}{8\pi\varepsilon_0}\left(\frac1\delta-\frac1R\right),$$

and this tends to $+\infty$ as $\delta\downarrow0$ when $q\ne0$. [[pthm-em-point-self-energy-divergence]]

[F3] The finite-energy boundary model requires $E(t),H(t)\in L^2(\Omega;\mathbb R^3)$ and defines its energy by the corresponding finite quadratic integral. [[def-emx-finite-energy-boundary-model]]

[A1] The adopted distributional vacuum Maxwell equations apply to the point-source model with $\operatorname{div}E=\rho/\varepsilon_0$, $\operatorname{div}B=0$, $\operatorname{curl}E=-\partial_tB$, and $\operatorname{curl}B=\mu_0J+c^{-2}\partial_tE$; $\mu_0$ has units $\mathrm{H\,m^{-1}}$ and $c$ has units $\mathrm{m\,s^{-1}}$. [[post-em-distributional-vacuum-maxwell]] [[def-em-si-conventions]]

[F4] A stationary point charge has $\rho=q\delta_{x_0}$ and $J=0$; $q$ is measured in coulombs under the framework's point-source and SI conventions. [[def-em-weak-sources]] [[def-em-si-conventions]]

[F5] $E$ and $B$ are the electric and magnetic spatial vector fields of the framework, measured in $\mathrm{V\,m^{-1}}$ and tesla. [[def-em-fields]] [[def-em-si-conventions]]

## Counterexample

**Given:** The hypotheses above. Since $x_0\in\Omega$ and $\Omega$ is open, choose $R>0$ metres with $\overline B_R(x_0)\subset\Omega$; in the energy estimate let $\delta$ range over $0<\delta<R/2$ metres.

1.1 Set $E(x,t)=E_q(x)$ time-independently and put $B=0$, $J=0$. The field convention is [F5], and by [F4] the source is $\rho=q\delta_{x_0}$; [F1] gives local integrability, $\operatorname{div}E_q=(q/\varepsilon_0)\delta_{x_0}$, and $\operatorname{curl}E_q=0$. Since $\partial_tE=\partial_tB=0$, the other three equations listed in [A1] hold with both sides zero. This is a distributional vacuum Maxwell solution with the stated stationary point source. [A1, F1, F4, F5, given, algebra]

1.2 The shell in [F2] with outer radius $R/2$ lies inside $B_R(x_0)$. Nonnegativity of $|E_q|^2$ gives $ \frac{\varepsilon_0}{2}\int_{B_R(x_0)}|E_q|^2\,d\lambda_3\ \ge\ \frac{q^2}{8\pi\varepsilon_0}\left(\frac1\delta-\frac2R\right) $ for every $0<\delta<R/2$. This lower bound is unbounded as $\delta\downarrow0$ because $q^2/\varepsilon_0>0$; thus each ball around $x_0$ has infinite ordinary electric energy and $u_E\notin L^1$ near the charge. [F2, given, algebra]

2.1 By [F3], a field with nonintegrable ordinary quadratic energy is outside the finite-energy boundary model, even though step 1.1 supplies its distributional Maxwell identities. This contradicts the refuted claim and proves the counterexample. [F3, step 1.1, step 1.2, contradiction] ∎

