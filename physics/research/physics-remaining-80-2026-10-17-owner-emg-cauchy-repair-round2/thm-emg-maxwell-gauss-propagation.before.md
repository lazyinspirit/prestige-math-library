---
id: thm-emg-maxwell-gauss-propagation
kind: theorem
title: "Maxwell Gauss constraints propagate by form transport"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 2
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
deps:
  - def-emg-electrovacuum-cauchy-system
  - lem-emg-fieldstrength-positive-symmetric-reduction
  - def-emg-lorentzian-forms
  - lem-emg-lorentz-hodge-calculus
  - lem-emg-observer-field-decomposition
  - def-gr-metric-volume-form-and-current-flux
  - thm-c1-dependence-of-solutions-on-initial-data
  - thm-picard-lindelof-local-existence-and-uniqueness
  - thm-euclidean-inverse-function-theorem
dependency_roles:
  def-emg-electrovacuum-cauchy-system: mathematical-premise
  lem-emg-fieldstrength-positive-symmetric-reduction: mathematical-premise
  def-emg-lorentzian-forms: mathematical-premise
  lem-emg-lorentz-hodge-calculus: mathematical-premise
  lem-emg-observer-field-decomposition: mathematical-premise
  def-gr-metric-volume-form-and-current-flux: mathematical-premise
  thm-c1-dependence-of-solutions-on-initial-data: mathematical-premise
  thm-picard-lindelof-local-existence-and-uniqueness: mathematical-premise
  thm-euclidean-inverse-function-theorem: mathematical-premise
sources:
  references:
    - title: "M. Alcubierre, J. C. Degollado and M. Salgado, The Einstein-Maxwell system in 3+1 form and initial data for multiple charged black holes, arXiv:0907.1151v2 (2009), §II, printed pp. 3–8."
      url: "https://arxiv.org/pdf/0907.1151"
    - title: "P. T. Chruściel, An introduction to the Cauchy problem for the Einstein equations, Roscoff lecture notes (2011), §1.6, printed pp. 23–25."
      url: "https://gravity.univie.ac.at/fileadmin/user_upload/i_gravity_physics/material/teaching/WS_2012/Roscoff.pdf"
verification:
  precheck: pending
---

## Statement

Let $(M,g,N,o)$ be an oriented, time-oriented $C^1$ Lorentzian four-manifold of signature $(-,+,+,+)$, with a $C^1$ spacelike foliation $Sigma_s$ and future unit normal $n$. Let $F$ be a $C^1$ real two-form on a neighborhood of $Sigma_0$, and define its electric and magnetic spatial vectors by the oriented orthonormal tetrad convention of [[def-emg-lorentzian-forms]] and [[lem-emg-observer-field-decomposition]]. Suppose $(e,b)$ solves the six Maxwell field-strength evolution equations of [[lem-emg-fieldstrength-positive-symmetric-reduction]] pointwise and the initial Gauss constraints are $D_i e^i=0$ and $D_i b^i=0$ on $Sigma_0$, where $D$ is the Levi-Civita derivative of the induced $C^1$ Riemannian metric $h$. Then $dF=0$ and $d\star_gF=0$ on a neighborhood of each point of $Sigma_0$. No Einstein equation, stress conservation law, smooth potential, or global exactness of $F$ is needed.

## Facts & Assumptions

**Given:** The oriented $C^1$ Lorentzian metric and two-form, the six field-strength evolution equations, and vanishing electric and magnetic divergence constraints on the initial slice.

[F1] [[lem-emg-fieldstrength-positive-symmetric-reduction]] identifies the six evolution equations pointwise with $\iota_n dF=0$ and $\iota_n d\star_gF=0$, and the remaining two equations with $D_i e^i=0$ and $D_i b^i=0$.

[F2] [[lem-emg-lorentz-hodge-calculus]] defines the Hodge star from the oriented Lorentzian volume form and gives $d^2=0$; [[def-gr-metric-volume-form-and-current-flux]] fixes $\mathrm{vol}_g=\sqrt{|\det g|}\,dx^0\wedge dx^1\wedge dx^2\wedge dx^3$.

[L1] Draft supplier [[def-emg-electrovacuum-cauchy-system]] fixes the source-free Maxwell equations as $dF=d\star_gF=0$ on the oriented Lorentzian model. Its item file is listed in the batch-6 manifest; its status is draft and its verification precheck is pending; this use remains conditional on that actual draft status.

[F3] A locally Lipschitz vector field has a unique local flow, the flow is $C^1$ in the initial point for a $C^1$ field, and the $C^1$ inverse function theorem applies when the flow map is transverse to $\Sigma_0$ ([[thm-picard-lindelof-local-existence-and-uniqueness]], [[thm-c1-dependence-of-solutions-on-initial-data]], [[thm-euclidean-inverse-function-theorem]]).

## Proof

1.1 Put $U:=dF$ and $V:=d\star_gF$. They are continuous three-forms. By [F1], $\iota_nU=\iota_nV=0$ throughout the evolution. In a local frame with timelike vector $n$, a three-form annihilated by $n$ has only its spatial volume component, so there are unique continuous scalars $q,r$ with $U=q\,\iota_n\mathrm{vol}_g$ and $V=r\,\iota_n\mathrm{vol}_g$. On $\Sigma_0$, the spatial components of $dF$ and $d\star_gF$ are respectively $(D_i b^i)\mathrm{vol}_h$ and, up to the fixed orientation sign, $(D_i e^i)\mathrm{vol}_h$. Thus $q=r=0$ on the initial slice. [given, F1, F2, L1, algebra]

2.1 Since $dU=d^2F=0$ and $dV=d^2\star_gF=0$ distributionally, the coordinate formula for exterior derivative gives $\partial_\mu(\sqrt{|\det g|}\,q n^\mu)=0$ and the same equation for $r$. The identity $\partial_\mu(\sqrt{|\det g|}n^\mu)=\sqrt{|\det g|}\,\nabla_\mu n^\mu$ follows from $\Gamma^\mu{}_{\mu\nu}=\partial_\nu\log\sqrt{|\det g|}$, itself obtained by differentiating the determinant and using the Levi-Civita formula. Therefore $n(q)+q\,\operatorname{div}_g n=0$ and $n(r)+r\,\operatorname{div}_g n=0$ in the distributional sense. [step 1.1, F2, algebra]

3.1 The field $n$ is $C^1$ and transverse to $\Sigma_0$, since $ds(n)>0$. Its local flow map $\Phi(\tau,x)$ is $C^1$ and the differential at $\tau=0$ maps the time direction to $n$ and the slice directions identically, hence is invertible. By [F3], after shrinking, $(\tau,x)$ are flow coordinates. In these coordinates $n=\partial_\tau$ and $\mathrm{vol}_g=J(\tau,x)d\tau\wedge dx^1\wedge dx^2\wedge dx^3$ with continuous $J>0$. Thus $dU=0$ reads $\partial_\tau(Jq)=0$ distributionally, and $dV=0$ reads $\partial_\tau(Jr)=0$. A continuous function whose distributional derivative in $\tau$ vanishes is constant in $\tau$: convolving in $\tau$ gives smooth functions with zero derivative, and uniform convergence on compact subcylinders passes that constancy to the original function. Their initial values vanish by step 1.1, so $q=r=0$ throughout the flow neighborhood. [step 1.1, step 2.1, F3, algebra]

4.1 The identities $U=q\,\iota_n\mathrm{vol}_g$ and $V=r\,\iota_n\mathrm{vol}_g$ now give $dF=0$ and $d\star_gF=0$. The argument uses only the Maxwell evolution, its initial Gauss constraints, and $d^2=0$. [step 3.1, L1, algebra] ∎
