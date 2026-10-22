---
id: prop-emg-fx-semiclassical-consistency
kind: proposition
title: "Necessary Ward consistency of coupled sources"
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 1
deps:
  - def-emg-fx-semiclassical-source-contract
  - lem-emg-maxwell-current-forms
  - lem-emg-maxwell-stress-divergence
  - thm-gr-second-bianchi-and-divergence-free-einstein
dependency_roles:
  def-emg-fx-semiclassical-source-contract: mathematical-premise
  lem-emg-maxwell-current-forms: mathematical-premise
  lem-emg-maxwell-stress-divergence: mathematical-premise
  thm-gr-second-bianchi-and-divergence-free-einstein: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "David Tong, General Relativity, Cambridge Part III lecture notes (2019), §§4.1.3 and 4.5.2–4.5.3"
      url: "https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
      locator: "§4.5.3, printed pp. 184–185 (PDF pp. 191–192), derives stress conservation from diffeomorphism invariance and identifies the Maxwell Hilbert tensor; §4.5.2 supplies the Einstein source convention. The local proof uses the declared source identities."
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997)"
      url: "https://arxiv.org/pdf/gr-qc/9712019v1"
      locator: "Chapter 3, equations (3.86)–(3.96), printed pp. 80–82 (PDF pp. 87–89), proves the contracted Bianchi identity; Chapter 4, equations (4.24)–(4.29), (4.47)–(4.50), supplies Maxwell and Einstein source conventions. The Gaussian signs are not imported."
    - title: "L. H. Ford, Quantum Field Theory in Curved Spacetime, lecture notes (1997), Chapter 3 and §5.1"
      url: "https://arxiv.org/pdf/gr-qc/9707062"
      locator: "Chapter 3, equations (3.5)–(3.10), printed pp. 18–20 (PDF pp. 19–21), shows the role of point-splitting and curvature counterterms; §5.1, printed pp. 32–34 (PDF pp. 33–35), discusses stress fluctuations and limits. No QFT source construction is assumed."
---

## Statement

Let $M$ be a smooth oriented, time-oriented Lorentzian four-manifold of signature $(-,+,+,+)$ with metric-selected connection $\nabla$. Let $F\in\Omega^2(M)$, $j\in\Gamma(TM)$, and $T_{\mathrm{ren}}\in\Gamma(\operatorname{Sym}^2T^*M)$ be smooth, with $\mu_0$ a positive real constant, $\kappa$ a nonzero real constant, and $\Lambda$ a constant real. Define
$$T^{\mathrm{EM}}_{ab}:=\frac1{\mu_0}\left(F_{ac}F_b{}^c-\frac14g_{ab}F_{cd}F^{cd}\right),\qquad G_{ab}:=\operatorname{Ric}_{ab}-\frac12R g_{ab}.$$
Assume the mathematical field equations
$$dF=0,\qquad \nabla_aF^{ab}=-\mu_0j^b,\qquad G_{ab}+\Lambda g_{ab}=\kappa\left(T^{\mathrm{EM}}_{ab}+T_{\mathrm{ren},ab}\right).$$
Then
$$\nabla_a j^a=0,\qquad \nabla^aT_{\mathrm{ren},ab}=F_{bc}j^c.$$
These are necessary conditional consequences of the displayed equations and match the contract-admissibility identities of the source-contract Definition; in this item, “Ward consistency” means exactly these two divergence identities. In SI length-coordinate bookkeeping, $[F]=\mathrm{Wb\,m^{-2}}$, $[j]=\mathrm{A\,m^{-2}}$, $[T_{\mathrm{ren}}]=\mathrm{J\,m^{-3}}$, $[\Lambda]=\mathrm{m^{-2}}$, and $[\kappa]=\mathrm{s^2\,kg^{-1}m^{-1}}$; the units are formal and no measured value is used. The result asserts no quantum-state construction, renormalized-source existence, or well-posed semiclassical evolution.

## Statement references

[[def-emg-fx-semiclassical-source-contract]]

[[lem-emg-maxwell-current-forms]]

[[lem-emg-maxwell-stress-divergence]]

[[thm-gr-second-bianchi-and-divergence-free-einstein]]

## Facts & Assumptions

**Given:** The smooth geometry and fields, positive $\mu_0$, nonzero real constant $\kappa$, constant real $\Lambda$, and all three conditional field equations in the Statement.

[F1] [[lem-emg-maxwell-current-forms]]: for smooth $F,j$ and $\mu_0>0$, the hypotheses $dF=0$ and $\nabla_aF^{ab}=-\mu_0j^b$ imply $\nabla_aj^a=0$.

[F2] [[thm-gr-second-bianchi-and-divergence-free-einstein]]: for the metric-selected connection and $G_{ab}=\operatorname{Ric}_{ab}-\frac12R g_{ab}$, $\nabla^aG_{ab}=0$ for each $b$.

[F3] [[lem-emg-maxwell-stress-divergence]]: under the same smoothness and sourced Maxwell sign, $\nabla^aT^{\mathrm{EM}}_{ab}=-F_{bc}j^c$ for the displayed Maxwell Hilbert tensor.

[F4] [[def-emg-fx-semiclassical-source-contract]] defines contract-admissibility by exactly the two identities to be derived; it does not assume the coupled equations or construct the source maps.

[A1] $\kappa\in\mathbb R\setminus\{0\}$ and $\Lambda\in\mathbb R$ are constants. These hypotheses are required to divide by the coupling and to eliminate the cosmological term on taking the divergence; if $\kappa$ varied, differentiating $\kappa(T^{\mathrm{EM}}+T_{\mathrm{ren}})$ would also produce $(\nabla^a\kappa)(T^{\mathrm{EM}}_{ab}+T_{\mathrm{ren},ab})$.

## Proof

1.1 The first two field equations in the Statement are exactly the hypotheses of [F1]. Applying that supplier gives $\nabla_a j^a=0$. This is a model deduction conditional on the sourced Maxwell equation, not a measured conservation law. [given, F1]

1.2 Take $\nabla^a$ of the Einstein equation. By [F2], $\nabla^aG_{ab}=0$; metric compatibility gives $\nabla^a(\Lambda g_{ab})=0$ because $\Lambda$ is constant. Therefore
$$0=\kappa\left(\nabla^aT^{\mathrm{EM}}_{ab}+\nabla^aT_{\mathrm{ren},ab}\right).$$
Since $\kappa\ne0$, the two stress divergences sum to zero. [given, F2, A1, algebra]

2.1 Substitute [F3] into step 1.2: $0=-F_{bc}j^c+\nabla^aT_{\mathrm{ren},ab}$. Rearranging gives $\nabla^aT_{\mathrm{ren},ab}=F_{bc}j^c$, which is the second contract-admissibility condition in [F4]. Together with step 1.1 this proves both claimed identities. No existence, uniqueness, renormalization prescription, state regularity, or evolution theorem is used. [given, F3, F4, step 1.2, algebra] ∎

## Remarks

The divergence identities are necessary compatibility checks only. They do not determine the renormalization prescription or rule out state-dependent nonlocality and higher-curvature terms. If such terms are included, they can alter differential order; order reduction is a separately justified approximation, not an algebraic consequence of this proposition.
