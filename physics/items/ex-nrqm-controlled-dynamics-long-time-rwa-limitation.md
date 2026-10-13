---
id: ex-nrqm-controlled-dynamics-long-time-rwa-limitation
aliases:
- nrqm-controlled-dynamics-example-long-time-rwa-limitation
kind: example
domain: mathematics
title: Long-time RWA limitation
status: published
origin: pipeline
dependency_level: 2
deps:
- thm-nrqm-controlled-dynamics-rotating-wave-finite-time-error
- thm-nrqm-controlled-dynamics-norm-dyson-series-and-uniqueness
- prop-nrqm-orbital-and-spin-finite-spin-matrices
- def-bounded-linear-operator
- def-operator-norm
- def-hilbert-space
dependency_roles:
  thm-nrqm-controlled-dynamics-rotating-wave-finite-time-error: mathematical-premise
  thm-nrqm-controlled-dynamics-norm-dyson-series-and-uniqueness: mathematical-premise
  prop-nrqm-orbital-and-spin-finite-spin-matrices: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-operator-norm: mathematical-premise
  def-hilbert-space: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
  - title: R. Fitzpatrick, Quantum Mechanics (University of Texas at Austin, author-hosted
      course text), Spin Magnetic Resonance pp. 178-180 (rotating-wave approximation
      and its long-time limitations)
    url: https://farside.ph.utexas.edu/teaching/qmech/qmech.pdf
  - title: G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009,
      Chapter 5 pp. 123-131 (exponential of a bounded self-adjoint generator)
    url: https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf
---

## Example

Work on $\mathbb C^2$ with $\hbar=1$. Keep the original commuting example $A=B=\sigma_z$, $\omega=1$, so $H(t)=(1+2\cos t)\sigma_z$ and $H_{\rm avg}=\sigma_z$. The exact and averaged propagators from time $0$ are

$$U(t)=e^{-i(t+2\sin t)\sigma_z},\qquad U_{\rm avg}(t)=e^{-it\sigma_z}.$$

Their norm difference is $2|\sin(\sin t)|$. At $t_n=\pi/2+2\pi n$ it equals $2|\sin1|>0$ for every $n\ge0$. This proves persistent nondecay of the original commuting error. It alone does not disprove uniform-time smallness as the ratio $\|B\|/|\omega|$ becomes small: in the commuting extension $A=\sigma_z$, $B=\beta\sigma_z$, $\beta\in\mathbb R$, $\omega>0$, the exact error satisfies

$$\|U(t)-U_{\rm avg}(t)\|=2\left|\sin\left(\frac\beta\omega\sin\omega t\right)\right|\le\frac{2|\beta|}{\omega}\qquad(t\in\mathbb R).$$

To prove the stronger intended general limitation, fix $\omega>0$ and define $\sigma_+=\begin{pmatrix}0&1\\0&0\end{pmatrix}$, $\sigma_-=\sigma_+^*$, $\sigma_x=\sigma_++\sigma_-$. For every integer $n\ge1$, let

$$\varepsilon_n=\omega\sqrt{\frac1{2n}+\frac1{4n^2}},\qquad A_n=0,\qquad B_n=\varepsilon_n\sigma_+,$$

$$H_n(t)=e^{i\omega t}B_n+e^{-i\omega t}B_n^*,\qquad H_{{\rm avg},n}=0.$$

These are smooth bounded self-adjoint Hamiltonians of precisely the form of [[thm-nrqm-controlled-dynamics-rotating-wave-finite-time-error]]. They are noncommuting in time: for suitable $t,u$, $[H_n(t),H_n(u)]=2i\varepsilon_n^2\sin(\omega(t-u))\sigma_z\ne0$. Their oscillatory coefficient norm satisfies $\|B_n\|/\omega=\varepsilon_n/\omega\to0$. Nevertheless at the growing times $\tau_n=2\pi n/\omega$ their exact propagator obeys $U_n(\tau_n)=-I$, while $U_{{\rm avg},n}(\tau_n)=I$. Thus

$$\|U_n(\tau_n)-U_{{\rm avg},n}(\tau_n)\|=2\qquad(n\ge1).$$

This is the maximum possible norm distance between unitaries. In particular no general bound $\sup_{t\ge0}\|U(t)-U_{\rm avg}(t)\|\le f(\|B\|/\omega)$ with $f(r)\to0$ as $r\to0$ can hold for this whole class, even with $A=0$, fixed positive $\omega$ and dimension two. This does not assert that the finite-time theorem's linear growth rate is sharp; it proves the absence of general uniform-time smallness without additional hypotheses. All assertions concern explicit mathematical models, not a laboratory error or measurement.

## Verification

**Given:** the original commuting example, and the circular family $H_n$ with $n\ge1$, $\omega>0$, $\varepsilon_n$ and $\tau_n$ as above.

[F1] The Pauli matrices have $\sigma_x^2=\sigma_z^2=I$ and $\sigma_x\sigma_z+\sigma_z\sigma_x=0$, and $\sigma_z\sigma_+-\sigma_+\sigma_z=2\sigma_+$; these follow by multiplying their displayed two-by-two matrices, consistent with [[prop-nrqm-orbital-and-spin-finite-spin-matrices]] (e).

[F2] Direct differentiation of a displayed unitary solution with initial value $I$ verifies its propagator equation; uniqueness follows from the same $D^*D$ calculation used in the preceding example. No generic ordered Dyson formula, autonomous AC group theorem, or unbounded-domain assertion is needed.

1.1 The original displayed diagonal exponentials differentiate to $iU'=(1+2\cos t)\sigma_zU$, $iU_{\rm avg}'=\sigma_zU_{\rm avg}$, with initial value $I$. They are therefore the required propagators by [F2]. Left multiplication of their difference by $e^{it\sigma_z}$ leaves its norm unchanged and gives diagonal entries $e^{\mp2i\sin t}-1$, whose common modulus is $2|\sin(\sin t)|$. Substitution at $\pi/2+2\pi n$ proves the original positive nondecaying subsequence. [F1, F2, algebra]

1.2 Define $W(t)=\exp(i\omega t\sigma_z/2)$ and $G_n=\varepsilon_n\sigma_x+(\omega/2)\sigma_z$. The diagonal formula for $W$ gives $W\sigma_+W^*=e^{i\omega t}\sigma_+$ and $W\sigma_-W^*=e^{-i\omega t}\sigma_-$. Hence $H_n(t)=\varepsilon_nW(t)\sigma_xW(t)^*$. Put $V_n(t)=W(t)e^{-itG_n}$. Both factors are unitary, $V_n(0)=I$, and differentiating gives $iV_n'=-(\omega/2)\sigma_zV_n+WG_ne^{-itG_n}=\varepsilon_nW\sigma_xW^*V_n=H_nV_n$, because $W$ commutes with $\sigma_z$. By [F2], $U_n=V_n$. The sign of $W$ and the positive $\omega\sigma_z/2$ term in $G_n$ are essential in this cancellation. [F1, F2, algebra]

2.1 For the commuting extension with real $\beta$, integrate its diagonal scalar entries to obtain $U(t)=\exp[-i(t+2\beta\sin(\omega t)/\omega)\sigma_z]$. The same diagonal norm calculation gives $2|\sin((\beta/\omega)\sin\omega t)|\le2|\beta|/\omega$. Thus the original commuting nondecay example admits a time-uniform small-ratio estimate; the stronger failure requires the separate noncommuting construction. [step 1.1, algebra]

2.2 By [F1], $G_n^2=(\varepsilon_n^2+\omega^2/4)I=\nu_n^2 I$, where $\nu_n=(\omega/2)(1+1/n)>0$ from the exact definition of $\varepsilon_n$. Splitting the absolutely convergent matrix exponential into even and odd powers gives $e^{-itG_n}=\cos(\nu_n t)I-i\sin(\nu_n t)G_n/\nu_n$. At $\tau_n=2\pi n/\omega$, the angles are $\omega\tau_n/2=\pi n$ and $\nu_n\tau_n=\pi(n+1)$. Therefore $W(\tau_n)=(-1)^nI$ and $e^{-i\tau_nG_n}=(-1)^{n+1}I$, so $U_n(\tau_n)=-I$. Since $A_n=0$, $U_{{\rm avg},n}(t)=I$ for every $t$, and the norm difference at $\tau_n$ is $\|-2I\|=2$. [F1, step 1.2, algebra]

3.1 The matrix $\sigma_+$ sends $(x,y)$ to $(y,0)$, so its operator norm is exactly $1$; hence $\|B_n\|/\omega=\sqrt{1/(2n)+1/(4n^2)}\to0$. Also $\tau_n\to\infty$ for fixed $\omega$. For noncommutativity, the products $\sigma_+\sigma_-=\operatorname{diag}(1,0)$ and $\sigma_-\sigma_+=\operatorname{diag}(0,1)$ give $[H_n(t),H_n(u)]=\varepsilon_n^2(e^{i\omega(t-u)}-e^{-i\omega(t-u)})\sigma_z=2i\varepsilon_n^2\sin(\omega(t-u))\sigma_z$. The proposed general function $f(r)\to0$ would give $2\le f(\|B_n\|/\omega)\to0$, a contradiction. This proves the full intended no-general-uniform-smallness conclusion while retaining the distinct commuting nondecay example. [step 2.2, algebra] ∎
