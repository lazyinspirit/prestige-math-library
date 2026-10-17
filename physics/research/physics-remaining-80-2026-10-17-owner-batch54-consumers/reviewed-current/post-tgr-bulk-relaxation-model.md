---
id: post-tgr-bulk-relaxation-model
kind: postulate
title: Specified bulk extended entropy and relaxation law
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 7
deps:
  - post-tgr-local-material-thermodynamics
  - def-tgr-local-fluid-state
  - lem-tgr-bulk-relaxation-entropy
  - def-countable-choice
dependency_roles:
  post-tgr-local-material-thermodynamics: formulation-prerequisite
  def-tgr-local-fluid-state: formulation-prerequisite
  lem-tgr-bulk-relaxation-entropy: formulation-prerequisite
  def-countable-choice: mathematical-premise
justified_by: []
physical_scope: "A selected near-equilibrium bulk-only branch with positive C1 bulk viscosity and relaxation time, corrected relaxation law and quadratic extended entropy current; no universal constitutive law, nonlinear solution-existence theorem, causality, stability, or empirical claim."
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Nicolas Borghini, Elements of Hydrodynamics, University of Bielefeld lecture notes (version 2015), §IX.4.5"
      url: "https://www.physik.uni-bielefeld.de/~borghini/Teaching/Hydrodynamics15/Hydrodynamics.pdf"
      locator: "Full 184-page PDF; §IX.4.5, PDF pp. 159–160 (printed pp. 151–152), for second-order entropy-current corrections and relaxation-type equations. The notes do not establish the local coefficient choice or the proof used here."
    - title: "Dirk H. Rischke, Microscopic Foundations of Relativistic Fluid Dynamics, lecture notes (May 2022), §§1.4.2–1.5"
      url: "https://itp.uni-frankfurt.de/~drischke/Skript_Hydro.pdf"
      locator: "Full 148-page author-hosted notes; §1.4.2, PDF pp. 23–24, and §1.5, PDF pp. 25–27, especially equations (1.128)–(1.139), for second-order entropy corrections, coefficient matching and the corrected bulk relaxation structure. Positive relaxation time alone is not a causality or stability condition."
    - title: "Paul Romatschke, New Developments in Relativistic Viscous Hydrodynamics, arXiv:0906.4787v2 (2010), §4.1"
      url: "https://arxiv.org/pdf/0906.4787"
      locator: "Full 25-page PDF; §4.1, PDF pp. 10–14, for model-specific non-equilibrium entropy-current context in a conformal, zero-charge theory; no universal bulk law or empirical validation is inferred."
    - title: "Éric Gourgoulhon, An Introduction to Relativistic Hydrodynamics, arXiv:gr-qc/0603009v1 (2006), §§4.1–4.3 and 5.2–5.4"
      url: "https://arxiv.org/pdf/gr-qc/0603009"
      locator: "Full 37-page PDF; §§4.1–4.3, PDF pp. 14–17, and §§5.2–5.4, PDF pp. 18–20, for local-state and relativistic stress conventions; these sections do not derive the corrected bulk law."
---

## Postulate

Use the fixed-composition local-equilibrium state, smooth time-oriented Lorentzian geometry of signature $(-,+,+,+)$, smooth future unit observer congruence $u$, and length coordinates $x^0=ct$ from [[post-tgr-local-material-thermodynamics]] and [[def-tgr-local-fluid-state]]. In particular, $n>0$, $T>0$, $\Delta^{ab}=g^{ab}+u^au^b$, $D=u^a\nabla_a$, and $\theta=\nabla_a u^a$ have those suppliers' meanings. In a selected bulk-only branch, adopt the stress, number current, and source-free balances
$$\mathsf T^{ab}=\varepsilon u^a u^b+(p+\Pi)\Delta^{ab},\qquad J^a=nu^a,\qquad \nabla_a\mathsf T^{ab}=0,\qquad \nabla_aJ^a=0,$$
where $\Pi$ is a smooth scalar bulk pressure. Let $\zeta,\tau\in C^1(O)$ be positive coefficient fields with SI units Pa s and s, respectively, and define $\beta=\tau/\zeta$, with units Pa$^{-1}$. Adopt the extended entropy current and derivative-corrected relaxation law
$$S^a=\left(s-\frac{\beta\Pi^2}{2T}\right)u^a,\qquad \beta D\Pi+\frac{\Pi}{\zeta c}=-\theta-\frac{T\Pi}{2}\nabla_a\!\left(\frac{\beta u^a}{T}\right).$$
Here $\Pi$ has units Pa, $D$ and $\theta$ have inverse-length units, and each side of the relaxation law has units m$^{-1}$; $\beta\Pi^2/(2T)$ has entropy-density units J K$^{-1}$ m$^{-3}$.

For each application, specify a nonempty open near-equilibrium regime in the pointwise state and first-derivative data around $\Pi=0$, based at constant zero-gradient reference data, and use the current and law only while the fields remain in that declared regime. Require enough field regularity for the balances and entropy divergence to hold classically. The mathematical result [[lem-tgr-bulk-relaxation-entropy]] supplies the exact matching conditional entropy identity and one homogeneous witness; its actual statement and proof are conditional on the listed mathematical inputs and assume exactly countable choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]). It motivates this selection and is used by the downstream deductions, but it does not derive the adopted physical postulate.

This is a restricted constitutive assumption for the selected material. It does not derive the equation of state, assert universal validity, or adopt existence of a general nonlinear solution. It makes no causal or stability claim; positive relaxation time alone supplies neither. No empirical observation is supplied.
