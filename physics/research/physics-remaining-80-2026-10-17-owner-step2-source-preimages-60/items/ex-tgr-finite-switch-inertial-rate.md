---
id: ex-tgr-finite-switch-inertial-rate
kind: example
title: Quantitative switched coefficient and inertial rate
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 5
deps:
  - lem-tgr-spectral-thermometer
dependency_roles:
  lem-tgr-spectral-thermometer: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: John Preskill, Quantum Field Theory in Curved Spacetime, complete Caltech lecture notes
      url: https://preskill.caltech.edu/ph236c/Preskill_QFT_curved_spacetime.pdf
      locator: Complete 151-page PDF of the 149-page notes, §4.2, printed pp. 52–54, for inertial-vacuum positive-frequency support, and §4.3, pp. 55–58, for the stationary accelerated response. The source uses formal stationary point-detector rates.
    - title: Robert M. Wald, The Thermodynamics of Black Holes
      url: https://arxiv.org/pdf/gr-qc/9912119
      locator: Complete 46-page review, §3, printed pp. 11–16, for the boost-temperature context and the distinction from Hawking radiation.
    - title: Luís C. B. Crispino, Atsushi Higuchi, and George E. A. Matsas, The Unruh effect and its applications
      url: https://arxiv.org/pdf/0710.5373
      locator: Complete 53-page review, §III.A.1–2, PDF pp. 19–22, equations 3.1–3.28, including the massless point-detector rate and its limitations.
---

## Example

Assume the conditional mathematical spectra and switched-coefficient bound
of [[lem-tgr-spectral-thermometer]], with $a>0$, $c>0$, and a real nonzero
$h\in C_c^\infty(\mathbb R)$. For each proper switching duration
$\mathsf T>0$ and excitation frequency $\nu>0$, define the normalized
accelerated coefficient
$$Q_{\mathsf T}^{(a)}(\nu)= \frac{R_{\mathsf T}^{(C_a)}(\nu)}{\mathsf T\|h\|_2^2}.$$
With
$$K_h=\frac{1}{2\pi\|h\|_2^2}\int_{\mathbb R}|z|\,|\widehat h(z)|^2\,dz<\infty,$$
the exact leading-coefficient estimate is
$$|Q_{\mathsf T}^{(a)}(\nu)-S_a(\nu)| \le\frac{\operatorname{Lip}(S_a)K_h}{\mathsf T}.$$
For the inertial covariance, the same definition gives
$$0\le\frac{R_{\mathsf T}^{(C_0)}(\nu)}{\mathsf T\|h\|_2^2} \le\frac{K_h}{2\pi c^2\mathsf T},$$
because $S_0(\nu)=0$ for $\nu>0$ and
$\operatorname{Lip}(S_0)=1/(2\pi c^2)$. Thus the inertial excitation
coefficient divided by duration tends to zero, while the accelerated one
tends to its conditional spectrum. These are finite-switch coefficient
statements; they do not claim an all-order detector probability, strict
nonzero response for every finite switch, or a measured outcome.

## Facts & Assumptions

**Given:** The exact switch $h\in C_c^\infty(\mathbb R;\mathbb R)$ is
nonzero, $\mathsf T>0$ is a proper duration in seconds, $\nu>0$ is an
angular frequency in seconds$^{-1}$, and the conditional accelerated and
inertial spectra from the A-page items.

[F1] [[lem-tgr-spectral-thermometer]] defines
$R_{\mathsf T}^{(C)}(\nu)$ and $K_h$, proves the error estimate for both
stationary spectra, and gives
$S_0(\nu)=\max(-\nu,0)/(2\pi c^2)$. Its accelerated spectrum remains
conditional on the two present but unaccepted batch-74 draft suppliers
recorded there.

## Proof

1.1 Apply the A-page estimate from [F1] to $C_a$. It gives the displayed accelerated error bound for every $\mathsf T>0$; since the right side tends to zero, $Q_{\mathsf T}^{(a)}(\nu)\to S_a(\nu)$ conditionally on the same supplier. [F1, given]

2.1 For $C_0$, [F1] gives the same bound with $S_0$. Since $\nu>0$, $S_0(\nu)=0$. Its spectral integral for $R_{\mathsf T}^{(C_0)}$ is nonnegative because $S_0\ge0$ and the other factor is a squared modulus. The Lipschitz constant of $S_0$ is $1/(2\pi c^2)$, so the normalized coefficient lies between zero and $K_h/(2\pi c^2\mathsf T)$ and tends to zero. This is an exact mathematical model comparison, not a pointwise detector or empirical claim. [F1, given, algebra] ∎
