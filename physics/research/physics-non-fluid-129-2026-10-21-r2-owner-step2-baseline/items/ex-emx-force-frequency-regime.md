---
id: ex-emx-force-frequency-regime
kind: example
title: "Harmonic forcing gives an exact error criterion for reduction of order"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 3
deps:
  - pthm-emx-runaway-preacceleration
  - pthm-emx-reduction-order-error
  - def-euclidean-inner-product
  - def-complex-conjugate-real-imaginary-part-and-modulus
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - thm-sine-and-cosine-derivatives
  - thm-chain-rule
  - thm-algebra-of-derivatives
dependency_roles:
  pthm-emx-runaway-preacceleration: physical-result
  pthm-emx-reduction-order-error: physical-result
  def-euclidean-inner-product: mathematical-premise
  def-complex-conjugate-real-imaginary-part-and-modulus: mathematical-premise
  cor-complex-exponential-cartesian-form-modulus-and-eulers-identity: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "An exact harmonic-forcing calculation for the adopted prescribed-force ODE. It quantifies the model's absolute phasor-amplitude error for first-order reduction of order and shows that a fixed small tolerance requires small $|\\omega\\tau|$. It is not an empirical frequency-response measurement or a validation of a self-consistent radiation-reaction law."
verification:
  precheck: pass
sources:
  references:
    - title: "Fritz Rohrlich, The Dynamics of a Charged Particle, arXiv:0804.4614 (complete 11-page full-text paper)"
      url: "https://arxiv.org/pdf/0804.4614"
      locator: "Section 2, PDF pp. 4–6, equations (1)–(2) and (5a): the small-$\\tau_0$ and slowly varying-force context for first-order reduction."
    - title: "Jack Vanderlinde, Classical Electromagnetic Theory, Fundamental Theories of Physics, Springer (2004), complete 426-page book PDF"
      url: "https://eva.fcien.udelar.edu.uy/pluginfile.php/220397/mod_page/content/2/Classical%20Electromagnetic%20Theory%20%28Fundamental%20Theories%20of%20Physics%29%20-%20Jack%20Vanderlinde%20%282004%29.pdf"
      locator: "Chapter 12, §12.4 and problem 12-2, printed pp. 338–342 (PDF pp. 345–349): the future-weighted branch and a harmonic-oscillator application. The exact response and tolerance criterion here are calculated locally."
---

## Example

Let $\omega\in\mathbb R$ and $f_0=u+iv\in\mathbb C^3$, with $u,v\in\mathbb R^3$. For any $z=u+iv\in\mathbb C^3$, define $|z|:=\bigl(\sum_{j=1}^3|u_j|^2+\sum_{j=1}^3|v_j|^2\bigr)^{1/2}$, the Euclidean norm of its six real coordinates. The force amplitude $f_0$ has units N, $\omega$ has units $\mathrm{s}^{-1}$, and acceleration phasors have units $\mathrm{m\,s^{-2}}$. Prescribe the real force

$$f(t):=\operatorname{Re}\!\left(f_0\exp(-i\omega t)\right),$$

where real part is taken componentwise. The bounded-future acceleration has complex phasor amplitude

$$a_{*,0}=\frac{f_0}{m(1+i\omega\tau)}.$$

The first-order reduction-of-order acceleration $a_{\mathrm{RO}}=(f+\tau f')/m$ has phasor amplitude $a_{\mathrm{RO},0}=f_0(1-i\omega\tau)/m$. For $f_0\ne0$, the absolute amplitude error relative to the force acceleration scale $|f_0|/m$ is

$$\frac{|a_{*,0}-a_{\mathrm{RO},0}|}{|f_0|/m}=\frac{(\omega\tau)^2}{\sqrt{1+(\omega\tau)^2}}.$$

For any chosen tolerance $0<\epsilon<1$, this relative amplitude error is at most $\epsilon$ exactly when

$$|\omega\tau|\le\sqrt{\frac{\epsilon^2+\sqrt{\epsilon^4+4\epsilon^2}}{2}}.$$

Hence small error at a small prescribed tolerance requires small $|\omega\tau|$; no universal numerical cutoff or experimental frequency response is asserted.

## Example references

[[pthm-emx-runaway-preacceleration]]

[[pthm-emx-reduction-order-error]]

[[def-euclidean-inner-product]]

[[def-complex-conjugate-real-imaginary-part-and-modulus]]

[[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]

[[thm-sine-and-cosine-derivatives]]

## Facts & Assumptions

**Given:** The adopted ODE, $\omega\in\mathbb R$, a complex vector amplitude $f_0=u+iv$ with $u,v\in\mathbb R^3$, and the real harmonic force $f(t)=u\cos(\omega t)+v\sin(\omega t)$.

[F1] For bounded continuous $f$, the preceding theorem gives the unique bounded-future solution of $m(a-\tau\dot a)=f$. ([[pthm-emx-runaway-preacceleration]])

[F2] For bounded $C^2$ forces with bounded $f''$, the first-order reduction is $a_{\mathrm{RO}}=(f+\tau f')/m$. ([[pthm-emx-reduction-order-error]])

[F3] The Euclidean norm on $\mathbb R^3$ is induced by its inner product; real and imaginary parts and complex modulus are componentwise, and $\exp(i\theta)=\cos\theta+i\sin\theta$ for real $\theta$. ([[def-euclidean-inner-product]], [[def-complex-conjugate-real-imaginary-part-and-modulus]], [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]])

[F4] Sine and cosine differentiate by $(\sin)'=\cos$, $(\cos)'=-\sin$; the chain rule applies to $\omega t$. ([[thm-sine-and-cosine-derivatives]], [[thm-chain-rule]], [[thm-algebra-of-derivatives]])

## Verification

1.1 Write $f_0=u+iv$. The candidate $a_*(t)=\operatorname{Re}\!\left(\frac{f_0}{m(1+i\omega\tau)}\exp(-i\omega t)\right)$ is a bounded real harmonic vector function. Put $x=\omega\tau$; its cosine and sine coefficient vectors are $A=(u+xv)/(m(1+x^2))$ and $B=(v-xu)/(m(1+x^2))$. By [F4], $a_*'= -\omega A\sin(\omega t)+\omega B\cos(\omega t)$, so $a_*-\tau a_*'$ has cosine coefficient $A-xB=u/m$ and sine coefficient $B+xA=v/m$. Thus $m(a_*-\tau a_*')=f$, and uniqueness in [F1] identifies this candidate with the bounded-future branch. [F1, F3, F4, algebra]

2.1 Differentiating $a_{\mathrm{RO}}=(f+\tau f')/m$ or using its phasor gives $a_{\mathrm{RO},0}=f_0(1-ix)/m$. Therefore $$a_{*,0}-a_{\mathrm{RO},0}=\frac{f_0}{m}\left(\frac{1}{1+ix}-(1-ix)\right)=-\frac{f_0}{m}\frac{x^2}{1+ix}.$$ Since $|1+ix|=\sqrt{1+x^2}$, the displayed error ratio follows. [F2, F3, step 1.1, algebra]

3.1 For $z=x^2\ge0$, the tolerance inequality $z/\sqrt{1+z}\le\epsilon$ is equivalent, by squaring nonnegative sides, to $z^2-\epsilon^2z-\epsilon^2\le0$. The nonnegative solutions satisfy $z\le(\epsilon^2+\sqrt{\epsilon^4+4\epsilon^2})/2$, which is exactly the stated bound on $|x|$. This is a conditional model calculation, not an empirical claim. [step 2.1, algebra] ∎
