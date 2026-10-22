---
id: texp-emg-fx-test-to-coupled-error
kind: thought-experiment
title: A finite-time bound from a test-field residual
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: physics
library: physics
dependency_level: 0
proof_strategy: direct
deps:
  - post-emg-background-maxwell-test
  - prop-emg-test-field-residual-order
  - def-emg-geometric-scaling
  - thm-emg-field-normalization-equivalence
  - def-gr-curvature-tensor-and-derived-tensors
  - def-countable-choice
dependency_roles:
  post-emg-background-maxwell-test: physical-assumption
  prop-emg-test-field-residual-order: mathematical-premise
  def-emg-geometric-scaling: mathematical-premise
  thm-emg-field-normalization-equivalence: mathematical-premise
  def-gr-curvature-tensor-and-derived-tensors: mathematical-premise
  def-countable-choice: mathematical-premise
physical_scope: >
  A conditional finite-time comparison for a smooth source-free Maxwell test
  field on a fixed vacuum background over one compact chart cylinder. It assumes
  an exact residual estimate and a separate solution-error inequality. Existence
  of the compared state curves and availability of that inequality are not
  asserted; no infinite-time or empirical backreaction claim is made.
empirical_premises: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Richard Brito, Vitor Cardoso, and Paolo Pani, Superradiance -- the 2020 Edition, Lecture Notes in Physics 971, complete 281-page edition (2020)"
      url: "https://arxiv.org/pdf/1501.06570"
      locator: "§4.4, fixed-background test-field scope and the distinction between linear test propagation and the later nonlinear response. No solution-error estimate is imported; that estimate is an explicit premise of this thought experiment."
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Statement
Let $U$ be a smooth four-dimensional Lorentzian chart domain with length coordinate $t$, let $\Lambda\in\mathbb R$, and suppose $G_{ab}(g)+\Lambda g_{ab}=0$ on $U$, using the Einstein tensor and curvature convention of [[def-gr-curvature-tensor-and-derived-tensors]]. Let $F_1$ be a smooth real Maxwell two-form with $dF_1=0$ and $d(\star_gF_1)=0$ on this fixed metric. For dimensionless $\varepsilon\in\mathbb R$, put $F_\varepsilon:=\varepsilon F_1$. Use the common geometric normalization of the current mathematical suppliers:

$$\mathcal Q_{ab}(g,F):=F_{ac}F_b{}^c-\frac14g_{ab}F_{cd}F^{cd},\qquad \mathscr R_{ab}(g,F;\Lambda):=G_{ab}+\Lambda g_{ab}-\frac{\kappa}{\mu_0}\mathcal Q_{ab}(g,F).$$

The tensor $\mathcal Q$ is the quadratic Maxwell tensor in that normalization. This residual uses the Maxwell tensor; the charged scalar model on the A page is a separate model.

For a smooth covariant two-tensor $S$ and nonempty compact chart set $K$, use the component norm $\|S\|_K:=\max_{0\le a,b\le3}\sup_{p\in K}|S_{ab}(p)|$, as in [[prop-emg-test-field-residual-order]]. Fix $\tau>0$ and a nonempty compact spatial chart set $K_0$ such that $K_\tau:=[0,\tau]\times K_0$ is a compact subset of $U$. Let $\mathscr R_\varepsilon(t)$ denote the restriction to $K_0$ of $\mathscr R(g,F_\varepsilon;\Lambda)$ at time $t$.

Let $(\mathcal X,\|\cdot\|_{\mathcal X})$ be a specified normed space. Let $z_\varepsilon,\widetilde z_\varepsilon:[0,\tau]\to\mathcal X$ be any two supplied state curves, interpreted in an intended application as a coupled state and its test-field approximation. No existence or regularity theorem for these curves is asserted. Assume the separate stability inequality

$$\|z_\varepsilon(t)-\widetilde z_\varepsilon(t)\|_{\mathcal X}\le K(\tau)\int_0^t\|\mathscr R_\varepsilon(s)\|_{K_0}\,ds\qquad(0\le t\le\tau),$$

with a specified finite $K(\tau)\ge0$. Set

$$T^{(1)}_{ab}:=\mu_0^{-1}\mathcal Q_{ab}(g,F_1),\qquad C:=\kappa\|T^{(1)}\|_{K_\tau}.$$

The exact test-field residual proposition gives $\|\mathscr R(g,F_\varepsilon;\Lambda)\|_{K_\tau}=C\varepsilon^2$. Since $K_\tau=[0,\tau]\times K_0$ and there are finitely many components, this equals $\sup_{0\le t\le\tau}\|\mathscr R_\varepsilon(t)\|_{K_0}$. Consequently,

$$\sup_{0\le t\le\tau}\|z_\varepsilon(t)-\widetilde z_\varepsilon(t)\|_{\mathcal X}\le K(\tau)C\tau\varepsilon^2.$$

In the geometric normalization, $[\kappa T^{(1)}_{ab}]=\mathrm m^{-2}$ and $[C]=\mathrm m^{-2}$; $[\tau]=\mathrm m$. If solution-error norm values have fixed unit $\mathsf u_{\mathcal X}$, then the assumed coefficient has unit $[K(\tau)]=\mathsf u_{\mathcal X}\,\mathrm m$. The estimate is conditional on the supplied curves and stability inequality; it proves neither their existence nor the availability of that inequality.
## Statement references

[[post-emg-background-maxwell-test]]

[[prop-emg-test-field-residual-order]]

[[def-emg-geometric-scaling]]

[[thm-emg-field-normalization-equivalence]]

[[def-gr-curvature-tensor-and-derived-tensors]]

[[def-countable-choice]]

## Facts & Assumptions

**Given:** The adopted fixed-background Maxwell test-field regime, the exact Einstein residual proposition and geometric normalization, the compact chart cylinder $K_\tau$, and the explicitly assumed solution-error estimate.

[A1] [[post-emg-background-maxwell-test]]: the metric and Maxwell field are prescribed inputs; this model does not impose an Einstein equation on them or assert that omitted backreaction is small.

[F1] [[prop-emg-test-field-residual-order]]: for $F_\varepsilon=\varepsilon F_1$ on a vacuum metric with source-free $F_1$, $\|\mathscr R(g,F_\varepsilon;\Lambda)\|_{K_\tau}=\kappa\varepsilon^2\|T^{(1)}\|_{K_\tau}$; the proposition supplies only this exact residual, not a nearby solution or distance estimate.

[F2] [[def-emg-geometric-scaling]]: $\kappa=8\pi G/c^4>0$ in the stated geometric normalization.

[F3] [[thm-emg-field-normalization-equivalence]]: $\mathcal Q_{ab}(g,F)=F_{ac}F_b{}^c-\frac14g_{ab}F_{cd}F^{cd}$ and the geometric Einstein normalization uses $\kappa/\mu_0$.

[F4] [[def-gr-curvature-tensor-and-derived-tensors]]: $G_{ab}=\operatorname{Ric}_{ab}-\frac12S g_{ab}$ with scalar curvature $S$ in the supplier’s declared curvature convention.

[A2] [[def-countable-choice]]: the current published residual supplier explicitly inherits $\mathrm{AC}_\omega$, meaning every countable family of nonempty sets has a choice function; no full Axiom of Choice is included.

[A3] In this hypothetical case the fixed background additionally satisfies $G_{ab}+\Lambda g_{ab}=0$ and $F_1$ satisfies the source-free Maxwell equations required by [F1]. These are explicit conditional premises, not consequences of [A1].

[A4] For the supplied state curves, the displayed estimate holds with a finite $K(\tau)\ge0$ on $[0,\tau]$. This is a hypothetical stability premise, not a result proved here.

[A5] $U$ is four-dimensional; $\varepsilon$ is dimensionless, $\tau$ has the length unit of the coordinate $t$, and $K_\tau$ is the same compact chart region used in [F1]. The component residual and $C$ have unit $\mathrm m^{-2}$; if solution-error norm values have fixed unit $\mathsf u_{\mathcal X}$, then $K(\tau)$ has unit $\mathsf u_{\mathcal X}\,\mathrm m$.

## Proof

1.1 The hypotheses in [A3] and [A5] put the fixed pair in the scope of [F1]. Because $K_\tau=[0,\tau]\times K_0$ and there are finitely many components, the max-component norm on $K_\tau$ equals $\sup_{0\le t\le\tau}\|\mathscr R_\varepsilon(t)\|_{K_0}$. By [F1], this is $\kappa\varepsilon^2\|T^{(1)}\|_{K_\tau}=C\varepsilon^2$, with $C\ge0$ by [F2] and nonnegativity of the norm. The adopted model in [A1] leaves the metric and Maxwell field prescribed, while the vacuum and source-free conditions required by [F1] are stated separately in [A3]. [F3] and [F4] identify the same tensor and curvature normalizations. The only inherited choice convention is [A2]; this step uses the exact proposition as stated and introduces no stronger choice assumption. [given, A1, F1, F2, F3, F4, A2, A3, A5, algebra]

2.1 For each $t\in[0,\tau]$, apply [A4] and then step 1.1:
$$\|z_\varepsilon(t)-\widetilde z_\varepsilon(t)\|_{\mathcal X}\le K(\tau)\int_0^t\|\mathscr R_\varepsilon(s)\|_{K_0}\,ds\le K(\tau)\int_0^t C\varepsilon^2\,ds=K(\tau)Ct\varepsilon^2\le K(\tau)C\tau\varepsilon^2.$$
Taking the supremum over the interval proves the stated bound. If $\varepsilon=0$ or $C=0$, the same inequality gives zero error under the assumed stability bound; no claim about the existence of that bound is made. [given, A4, step 1.1, algebra] ∎

## Remarks

The residual proposition concerns a scaled source-free Maxwell field, not the charged scalar postulate on this page. This thought experiment uses the Maxwell test-field postulate directly and keeps the two test models distinct. The factor $\tau K(\tau)$ may grow with the observation interval; no limit $\tau\to\infty$ is justified.
