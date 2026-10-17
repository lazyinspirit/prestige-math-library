---
id: ex-qsm-dt-thermal-qubit
kind: example
title: Solved Gibbs qubit relaxation and finite response coefficients
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
dependency_level: 7
proof_strategy: direct
deps:
  - def-qsm-dt-gns-detailed-balance
  - thm-qsm-dt-gibbs-jump
  - thm-qsm-dt-open-correlation-integral
  - thm-qsm-dt-open-kubo
  - lem-qsm-matrix-exponential-response
dependency_roles:
  def-qsm-dt-gns-detailed-balance: mathematical-premise
  thm-qsm-dt-gibbs-jump: mathematical-premise
  thm-qsm-dt-open-correlation-integral: mathematical-premise
  thm-qsm-dt-open-kubo: mathematical-premise
  lem-qsm-matrix-exponential-response: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Robert Alicki and Karl Lendi, Quantum Dynamical Semigroups and Applications, Lecture Notes in Physics 717, §§1.5.3 and 1.3.4
      url: https://www.nzdr.ru/data/media/biblio/kolxoz/P/PS/PSa/Alicki%20R.%2C%20Lendi%20K.%20Quantum%20dynamical%20semigroups%20and%20applications%20%28LNP0717%2C%20Springer%2C%202007%29%28136s%29_PSa_.pdf
    - title: Eric A. Carlen and Jan Maas, Gradient flow and entropy inequalities for quantum Markov semigroups with detailed balance, §2
      url: https://arxiv.org/pdf/1609.01254
---

## Example

Let $\mathcal H=\mathbb C^2$, $H_{\rm s}=\Delta Z/2$ with $\Delta>0$ joules, $Z=|0\rangle\langle0|-|1\rangle\langle1|$, $X=|0\rangle\langle1|+|1\rangle\langle0|$, and $Y=-i|0\rangle\langle1|+i|1\rangle\langle0|$. Take downward rate $a>0$, upward rate $b>0$, $b/a=e^{-\beta\Delta}$, and optional dephasing rate $\gamma_\phi\geq0$. Here $\beta>0$ is in joules$^{-1}$, $\hbar$ is in joule-seconds, and $a,b,\gamma_\phi$ are in seconds$^{-1}$. Let $\gamma_1=a+b$, $\gamma_2=(a+b)/2+\gamma_\phi$, $\omega=\Delta/\hbar$, and $z_{\rm eq}=-\tanh(\beta\Delta/2)$. Set $\sigma=(I+z_{\rm eq}Z)/2$. Define the centered correlations

$$C_{XX}(t):=\operatorname{Tr}(\sigma e^{tG}(X)X),\qquad C_{ZZ}(t):=\operatorname{Tr}(\sigma e^{tG}(Z-z_{\rm eq}I)(Z-z_{\rm eq}I)).$$

Then

$$C_{XX}(t)=e^{-\gamma_2t}\left(\cos(\omega t)-i\tanh(\beta\Delta/2)\sin(\omega t)\right),\qquad C_{ZZ}(t)=(1-z_{\rm eq}^2)e^{-\gamma_1t}.$$

The real correlation-integral coefficients are

$$\Gamma_X=\frac{\gamma_2}{\gamma_2^2+\omega^2},\qquad \Gamma_Z=\frac{1-z_{\rm eq}^2}{\gamma_1}.$$

Under the fixed-dissipator perturbation $H_\epsilon(t)=H_{\rm s}-\epsilon h(t)X$, define $\chi_{\rm open}(0):=\int_0^\infty R_{XX}(t)\,dt$. The open response kernel and its zero-frequency integral are

$$R_{XX}(t)=\frac{2}{\hbar}\tanh(\beta\Delta/2)e^{-\gamma_2t}\sin(\omega t),\qquad \chi_{\rm open}(0)=\frac{2\tanh(\beta\Delta/2)\,\omega}{\hbar(\gamma_2^2+\omega^2)}.$$

For $q\in\mathbb R$ measured in joules, define $H(q):=H_{\rm s}-qX$ and $\sigma_q:=e^{-\beta H(q)}/\operatorname{Tr}(e^{-\beta H(q)})$. The static Gibbs susceptibility for this family is

$$\chi_{\rm Gibbs}(0):=\left.\frac{d}{dq}\operatorname{Tr}(\sigma_qX)\right|_{q=0}=\frac{2}{\hbar\omega}\tanh(\beta\Delta/2).$$

Thus $\chi_{\rm open}(0)$ and $\chi_{\rm Gibbs}(0)$ differ for positive $\gamma_2$; the model has a fixed dissipator, so its zero-frequency response is not the derivative of the instantaneous Gibbs preparation.

## Facts & Assumptions

**Given:** $\Delta>0$, $\beta>0$, $a,b>0$, $b/a=e^{-\beta\Delta}$, $\gamma_\phi\geq0$, Pauli matrices $X,Y,Z$, and the finite Gibbs-jump dynamics.

[F1] [[thm-qsm-dt-gibbs-jump]]: the Gibbs density is stationary, the energy-jump dissipator is GNS self-adjoint, and its connected rate graph has scalar kernel.

[F2] [[thm-qsm-dt-open-correlation-integral]]: centered correlations have an integrable resolvent and nonnegative real quadratic coefficients.

[F3] [[thm-qsm-dt-open-kubo]]: for a perturbation of the Hamiltonian with the dissipator held fixed, the causal response kernel is $\frac{i}{\hbar}\operatorname{Tr}(\sigma[e^{tG}A_0,B])$.

[F4] [[lem-qsm-matrix-exponential-response]]: for finite Hermitian $H(q)$, differentiation of $\operatorname{Tr}e^{-\beta H(q)}$ gives the exact Kubo–Mori static susceptibility; no commutation of $H$ and $X$ is assumed.

[F5] [[def-qsm-dt-gns-detailed-balance]]: $G$ is the finite trace-dual observable generator with the stated Hamiltonian, jump matrices, and $\sigma$-weighted inner product.

## Verification

1.1 The two-state population equation is $\dot z=-\gamma_1(z-z_{\rm eq})$, while the off-diagonal equation is $\dot\rho_{01}=-(\gamma_2+i\omega)\rho_{01}$, by direct multiplication of the two jump matrices and the dephaser. The dual observables satisfy $G(X)=-\gamma_2X-\omega Y$ and $G(Y)=\omega X-\gamma_2Y$, so $e^{tG}X=e^{-\gamma_2t}(X\cos\omega t-Y\sin\omega t)$; also $e^{tG}(Z-z_{\rm eq}I)=e^{-\gamma_1t}(Z-z_{\rm eq}I)$. [given, F1, F5, algebra]

1.2 Applying [F3] with $A=B=X$, the commutator identity $[Y,X]=-2iZ$ and $z_{\rm eq}=-\tanh(\beta\Delta/2)$ give $R_{XX}(t)=2\tanh(\beta\Delta/2)e^{-\gamma_2t}\sin(\omega t)/\hbar$. Since $\int_0^\infty e^{-\gamma_2t}\sin(\omega t)\,dt=\omega/(\gamma_2^2+\omega^2)$, the displayed $\chi_{\rm open}(0)$ follows. [F1, F3, algebra]

1.3 For $q\in\mathbb R$, $H(q)=\Delta Z/2-qX$ satisfies $H(q)^2=((\Delta/2)^2+q^2)I$. Put $\lambda(q)=\sqrt{(\Delta/2)^2+q^2}$. The finite spectral calculus gives $e^{-\beta H(q)}=\cosh(\beta\lambda(q))I-\frac{\sinh(\beta\lambda(q))}{\lambda(q)}H(q)$, hence the partition function $\mathcal Z(q):=\operatorname{Tr}(e^{-\beta H(q)})=2\cosh(\beta\lambda(q))$ and $\operatorname{Tr}(e^{-\beta H(q)}X)/\mathcal Z(q)=q\,\tanh(\beta\lambda(q))/\lambda(q)$. Differentiating at $q=0$ gives $2\tanh(\beta\Delta/2)/\Delta=2\tanh(\beta\Delta/2)/(\hbar\omega)$; [F4] identifies this derivative as the static Gibbs susceptibility. [F4, algebra]

2.1 Using $X^2=Y^2=Z^2=I$, $YX=-iZ$, $\operatorname{Tr}(\sigma Z)=z_{\rm eq}$, and $\operatorname{Tr}(\sigma X)=\operatorname{Tr}(\sigma Y)=0$ in step 1.1 gives the stated $C_{XX}$ and $C_{ZZ}$. Integrating their real parts yields $\Gamma_X=\int_0^\infty e^{-\gamma_2t}\cos(\omega t)\,dt=\gamma_2/(\gamma_2^2+\omega^2)$ and $\Gamma_Z=(1-z_{\rm eq}^2)\int_0^\infty e^{-\gamma_1t}dt=(1-z_{\rm eq}^2)/\gamma_1$, consistent with [F2]. [F1, F2, step 1.1, algebra]

3.1 The two susceptibilities differ because their denominators are respectively $\gamma_2^2+\omega^2$ and $\omega^2$, with $\gamma_2>0$. The dynamic formula used [F3]'s fixed-dissipator perturbation, whereas the static formula differentiates a Gibbs state whose Hamiltonian changes with $q$. Therefore no equilibrium identity equating them is asserted for this model. [F3, F4, step 1.2, step 1.3, algebra] ∎
