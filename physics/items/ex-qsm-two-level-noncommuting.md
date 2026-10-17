---
id: ex-qsm-two-level-noncommuting
kind: example
title: Two-level Gibbs and noncommuting susceptibility
status: published
origin: pipeline
domain: physics
library: physics
dependency_level: 7
physical_scope: Exact finite two-level canonical model with a static transverse control; response is a model prediction and not an experimental measurement.
deps:
  - pthm-qsm-static-quantum-response
dependency_roles:
  pthm-qsm-static-quantum-response: physical-result
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: Zhang Jiang, Quantum Fisher information for states in exponential form, arXiv:1310.2687v3, §II, equations (2.1)–(2.14)
      url: https://arxiv.org/pdf/1310.2687
    - title: Mehran Kardar, Statistical Mechanics I, MIT OpenCourseWare, Lecture 21, Quantum Microstates and Quantum Macrostates
      url: https://live.ocw.mit.edu/courses/8-333-statistical-mechanics-i-statistical-mechanics-of-particles-fall-2013/4f8defd6fcba707a0c691dd8957a43e3_MIT8_333F13_Lec21.pdf
---

## Example

Take the two-dimensional Hilbert space with Hamiltonian $H(h)=\operatorname{diag}(-\epsilon/2,\epsilon/2)-h\sigma_x$, $\epsilon>0$, and $\sigma_x=\begin{pmatrix}0&1\\1&0\end{pmatrix}$. The control $h$ has units J so that $h\sigma_x$ is an energy. At fixed $\beta>0$, put $Z(h)=\operatorname{Tr}(e^{-\beta H(h)})$, $\rho_h=e^{-\beta H(h)}/Z(h)$, and define $\langle A\rangle_h:=\operatorname{Tr}(\rho_hA)$. The finite canonical response is
$
\left.\frac{d}{dh}\langle\sigma_x\rangle_h\right|_{h=0}
=\chi=\beta\frac{\tanh x}{x},\qquad x=\frac{\beta\epsilon}{2}>0.
$
At $h=0$, the variance in the canonical state is $\operatorname{Var}_{\rho_0}(\sigma_x)=1$, so $0<\chi<\beta\operatorname{Var}_{\rho_0}(\sigma_x)=\beta$. The strict reduction from ordinary variance is a finite noncommuting quantum response; it makes no experimental claim.

## Facts & Assumptions

**Given:** $\epsilon>0$, $\beta>0$, the specified two-level Hamiltonian, and the finite canonical preparation at each real $h$.

[F1] [[pthm-qsm-static-quantum-response]]: the canonical static susceptibility is $\beta\operatorname{Cov}_{KM}(B,B)$, is nonnegative, and is bounded above by $\beta\operatorname{Var}_{\rho_h}(B)$, where the ordinary variance is $\operatorname{Tr}(\rho_h(B-\operatorname{Tr}(\rho_hB)I)^2)$; equality with ordinary variance requires commutation.

## Proof

1.1 Write $r(h)=\sqrt{(\epsilon/2)^2+h^2}$. Direct matrix multiplication gives $H(h)^2=r(h)^2I$ and $\operatorname{Tr}H(h)=0$. Splitting the exponential power series into even and odd powers therefore gives $e^{-\beta H(h)}=\cosh(\beta r(h))I-(\sinh(\beta r(h))/r(h))H(h)$, hence $Z(h)=2\cosh(\beta r(h))$. Also $\operatorname{Tr}(H(h)\sigma_x)=-2h$, so $\langle\sigma_x\rangle_h=h\tanh(\beta r(h))/r(h)$. Dividing by $h$ and taking $h\to0$ yields $\chi=\tanh(\beta\epsilon/2)/(\epsilon/2)=\beta\tanh(x)/x$. [given, algebra]

2.1 At $h=0$, the Gibbs density is diagonal in the displayed basis, so $\operatorname{Tr}(\rho_0\sigma_x)=0$. By the ordinary variance definition in [F1], $\operatorname{Var}_{\rho_0}(\sigma_x)=\operatorname{Tr}(\rho_0\sigma_x^2)-\operatorname{Tr}(\rho_0\sigma_x)^2=1$. The commutator of $\operatorname{diag}(-\epsilon/2,\epsilon/2)$ with $\sigma_x$ has nonzero off-diagonal entries for $\epsilon>0$, so the commuting equality case in [F1] does not apply. Finally, for $x>0$, $ x-\tanh x=\int_0^x(1-\operatorname{sech}^2t)\,dt>0, $ because the integrand is strictly positive for $t>0$. Thus $0<\chi<\beta$. At the zero-gap boundary, $\lim_{x\downarrow0}\tanh(x)/x=1$, so the response tends to the commuting value $\beta$. [given, step 1.1, F1, algebra] ∎
