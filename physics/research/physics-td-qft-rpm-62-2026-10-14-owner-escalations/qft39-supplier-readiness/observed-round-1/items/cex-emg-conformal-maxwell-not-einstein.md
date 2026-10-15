---
id: cex-emg-conformal-maxwell-not-einstein
kind: counterexample
title: "Conformal Maxwell symmetry fails to preserve electrovac geometry"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 4
deps:
  - def-countable-choice
  - def-emg-lorentzian-forms
  - def-gr-curvature-tensor-and-derived-tensors
  - def-gr-metric-selected-connection
  - thm-emg-conformal-einstein-transformation
  - thm-emg-conformal-maxwell
dependency_roles:
  def-countable-choice: mathematical-premise
  def-emg-lorentzian-forms: mathematical-premise
  def-gr-curvature-tensor-and-derived-tensors: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  thm-emg-conformal-einstein-transformation: mathematical-premise
  thm-emg-conformal-maxwell: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
sources:
  references:
    - title: "David Tong, General Relativity, Cambridge Part III lecture notes, §4, author-hosted full-text HTML, conformal metric and Einstein–Maxwell equations"
      url: "https://www.damtp.cam.ac.uk/user/tong/gr/grhtml/S4.html"
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1, §§3.4–3.5, curvature contractions, and §7.2, charged Einstein–Maxwell fields"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
---

## Statement refuted

Claim: in four dimensions, conformal covariance of the source-free Maxwell equations implies that every positive conformal rescaling of a source-free electrovac solution is again a solution of the same electrovac Einstein equations with $\Lambda=0$.

## Facts & Assumptions

**Given:** The conformal Maxwell covariance and Einstein-tensor transformation identities of [[thm-emg-conformal-maxwell]] and [[thm-emg-conformal-einstein-transformation]], on the smooth Lorentzian geometry of [[def-emg-lorentzian-forms]]. The inherited geometric setup carries $\mathrm{AC}_\omega$ as in [A1].

[F1] A smooth positive conformal rescaling in four dimensions preserves the source-free Maxwell equations when $F=0$ and $j=0$. ([[thm-emg-conformal-maxwell]])

[F2] For $\widetilde g=\Omega^2g$ and $u=\Omega^{-1}d\Omega$, the scalar curvature is $\widetilde S=\Omega^{-2}(S-6\theta-6s)$, with $\theta=g^{ab}\nabla_au_b$ and $s=g^{ab}u_au_b$. ([[thm-emg-conformal-einstein-transformation]])

[F3] The metric-selected connection has the Christoffel formula $\Gamma^a{}_{bc}=\tfrac12g^{ad}(\partial_bg_{dc}+\partial_cg_{bd}-\partial_dg_{bc})$. ([[def-gr-metric-selected-connection]])

[F4] The Einstein tensor is $G_{ab}=\operatorname{Ric}_{ab}-\tfrac12Sg_{ab}$, so $g^{ab}G_{ab}=-S$ in four dimensions. ([[def-gr-curvature-tensor-and-derived-tensors]])

[F5] The Lorentzian spacetime is a smooth oriented and time-oriented four-manifold with arbitrary smooth real two-forms, so it admits the zero field $F=0$ on the stated domain. ([[def-emg-lorentzian-forms]])

[A1] The inherited choice assumption is Countable Choice $\mathrm{AC}_\omega$, not full Choice. ([[def-countable-choice]])

## Counterexample

**Given:** $\mathbb R^4$ with coordinates $(x^0,x^1,x^2,x^3)$, Minkowski metric $\eta=\operatorname{diag}(-1,1,1,1)$, standard orientation and time orientation, zero field and current, and $\Lambda=0$. Choose a real $k\ne0$ with inverse-length units, and define $\Omega(x)=e^{kx^1}$ and $\widetilde g=\Omega^2\eta$.

1.1 The constant components of $\eta$ have zero Christoffel symbols by [F3], hence zero curvature and $G(\eta)=0$ by [F4]. Also $\mathcal Q(\eta,0)=0$, while [F5] admits $F=0$, which satisfies both source-free Maxwell equations. Thus $(\eta,0,0)$ is an exact source-free electrovac solution. [given, F3, F4, F5, A1, algebra]

2.1 For this $\Omega$, $u=\Omega^{-1}d\Omega=k\,dx^1$. Since the background connection is flat with constant coefficients, $H_{ab}=\nabla_a u_b=0$ and $\theta=0$; because $x^1$ is spacelike, $s=\eta^{ab}u_au_b=k^2$. The scalar-curvature formula [F2] therefore gives $\widetilde S=-6k^2e^{-2kx^1}$, which is nonzero at every point. [given, F2, step 1.1, algebra]

3.1 Maxwell remains satisfied because the field and current are still zero. If the rescaled pair solved the electrovac Einstein equation with $\Lambda=0$, it would have $\widetilde G=0$; tracing this equation and using [F4] would force $\widetilde S=0$, contradicting step 2.1. Hence conformal Maxwell covariance does not imply conformal electrovac Einstein covariance. [F1, F4, step 2.1, algebra] ∎
