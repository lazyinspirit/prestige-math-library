---
id: post-tgr-first-order-dissipation
kind: postulate
title: Restricted gradient constitutive dissipative model
status: published
origin: pipeline
domain: physics
library: physics
dependency_level: 7
deps:
  - post-tgr-local-material-thermodynamics
  - def-tgr-framework-units
  - def-tgr-local-fluid-state
dependency_roles:
  post-tgr-local-material-thermodynamics: formulation-prerequisite
  def-tgr-framework-units: formulation-prerequisite
  def-tgr-local-fluid-state: formulation-prerequisite
justified_by: []
physical_scope: "One selected frame-dependent first-order relativistic dissipative branch on a declared smooth local-equilibrium regime, with nonnegative C1 transport coefficients and a separately imposed future-timelike number current; no solution-existence, causal, stability, global-entropy, universal-material, or empirical claim."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Éric Gourgoulhon, An Introduction to Relativistic Hydrodynamics, arXiv:gr-qc/0603009v1 (2006), §§4.1–4.3 and 5.2–5.4"
      url: "https://arxiv.org/pdf/gr-qc/0603009"
      locator: "Full 37-page PDF; §§4.1–4.3, PDF pp. 14–17, and §§5.2–5.4, PDF pp. 18–20; local state, perfect-fluid stress and frame conventions."
    - title: "Nicolas Borghini, Elements of Hydrodynamics, University of Bielefeld lecture notes (version 2015), §§IX.4.1–IX.4.4"
      url: "https://www.physik.uni-bielefeld.de/~borghini/Teaching/Hydrodynamics15/Hydrodynamics.pdf"
      locator: "Full 184-page PDF; §§IX.4.1–IX.4.4, PDF pp. 152–158 (printed pp. 144–150), for dissipative currents, arbitrary-frame entropy balance and first-order closures. Equation (IX.44c)'s diffusion sign is not used: it conflicts with the sign implied by the same source's (IX.43b) and (IX.45) in its stated signature."
    - title: "Paul Romatschke, New Developments in Relativistic Viscous Hydrodynamics, arXiv:0906.4787v2 (2010), §§3–4.1"
      url: "https://arxiv.org/pdf/0906.4787"
      locator: "Full 25-page PDF; §3, PDF pp. 7–9, and §4.1, PDF pp. 10–14, for restricted viscous-fluid and model-specific entropy-current context. The latter is conformal and at zero charge density and reports no experimental verification known to the author."
    - title: "Dirk H. Rischke, Microscopic Foundations of Relativistic Fluid Dynamics, lecture notes (May 2022), §1.3.4"
      url: "https://itp.uni-frankfurt.de/~drischke/Skript_Hydro.pdf"
      locator: "Complete 148-page author-hosted notes; §1.3.4, PDF pp. 17–18, including equations (1.81)–(1.91), for first-order constitutive closures and entropy production. Its metric and frame conventions are translated explicitly rather than imported silently."
---

## Postulate

Use the time-oriented Lorentzian four-manifold, signature $(-,+,+,+)$, Levi-Civita connection, smooth future unit observer congruence, and length-coordinate convention $x^0=ct$ of [[def-tgr-local-fluid-state]]. Here a **frame** means this smooth observer field $u$ with $g(u,u)=-1$ and its pointwise rest spaces; it does not mean a coordinate chart or a tetrad. On a nonempty open region $O$, take a $C^2$ fixed-composition state map $(v,\sigma_p):O\to X$ with $X\subset(0,\infty)\times\mathbb R$, state function $e\in C^2(X)$, and $T=\partial_{\sigma_p}e>0$ as adopted by [[post-tgr-local-material-thermodynamics]]. The mathematical state maps are $n=v^{-1}$, $s=n\sigma_p$, $\varepsilon=ne$, and $p=-\partial_v e$; their meanings and units are those in [[def-tgr-local-fluid-state]] and [[def-tgr-framework-units]].

Write $u_b=g_{bc}u^c$ and define the rest-space projector, derivative along the observer congruence, expansion, acceleration, and spatial symmetric trace-free shear by
$$\Delta^a{}_b=\delta^a{}_b+u^a u_b,\qquad \Delta^{ab}=g^{ab}+u^a u^b,\qquad D=u^a\nabla_a,\qquad \theta=\nabla_a u^a,\qquad a_b=u^c\nabla_c u_b,$$
$$\sigma_{ab}=\Delta_a{}^c\Delta_b{}^d\nabla_{(c}u_{d)}-\frac{\theta}{3}\Delta_{ab},$$
where parentheses denote the averaged symmetric part. Put $Y_b=\nabla_bT+Ta_b$ and $Z_b=\nabla_b(\mu/T)$, using the chemical potential $\mu$ from [[def-tgr-local-fluid-state]]. The number current, stress tensor and entropy current in the selected branch are
$$J^a=nu^a+V^a,\qquad \mathsf T^{ab}=\varepsilon u^a u^b+(p+\Pi)\Delta^{ab}+u^aQ^b+Q^au^b+\pi^{ab},\qquad S^a=su^a+\frac{Q^a}{T}-\frac{\mu V^a}{T},$$
with $u_aV^a=u_aQ^a=u_a\pi^{ab}=0$ and $\pi^{ab}$ symmetric and trace-free. Adopt the source-free balances $\nabla_aJ^a=0$ and $\nabla_a\mathsf T^{ab}=0$ together with the first-order gradient closures
$$\Pi=-\zeta c\theta,\qquad \pi^{ab}=-2\eta c\sigma^{ab},\qquad Q^a=-\frac{\kappa}{c}\Delta^{ab}Y_b,\qquad V^a=-L\Delta^{ab}Z_b.$$

Here $c>0$ has units $\mathrm{m\,s^{-1}}$; $\theta$, $a_b$ and $\sigma_{ab}$ have inverse-length components; $\Pi$, $\pi^{ab}$ and $Q^a$ have units Pa; $\zeta,\eta\in C^1(O)$ have units Pa s; $\kappa\in C^1(O)$ has units $\mathrm{W\,m^{-1}\,K^{-1}}$; and $L\in C^1(O)$ has formal units $\mathrm{marker^2\,K\,J^{-1}\,m^{-2}}$. The temperature and chemical-potential gradients have units K m$^{-1}$ and J marker$^{-1}$ K$^{-1}$ m$^{-1}$, respectively. The coefficient fields satisfy $\zeta,\eta,\kappa,L\geq0$. On $O$, require $\Pi$, $\pi^{ab}$, $Q^a$, and $V^a$, together with the resulting $J^a$, $\mathsf T^{ab}$, and $S^a$, to be $C^1$. The state map and state function are $C^2$ and $u$ is smooth, as specified above. These regularities make the displayed balances and entropy-current divergence pointwise classical expressions; require the balances to hold pointwise.

Each application declares a nonempty open regime of the pointwise state values and first covariant derivatives of $u,T,\mu/T$ (with the listed algebraic constraints) on which the constitutive model is used. The regime separately requires $J$ to be future timelike. Since $u_aV^a=0$, this condition is $n>0$ and $g_{ab}V^aV^b<n^2$, as follows from $g(J,J)=-n^2+g(V,V)$ and $-u_aJ^a=n$. It is an additional applicability restriction, not a consequence of the gradient closures.

This is an adopted constitutive model for one declared material regime. The closures are not derived from geometry, measurements, or the second law; they do not assert that a solution exists, that the model applies to every material, or that the branch is causal, stable, or globally entropy-increasing. No empirical observation is supplied.
