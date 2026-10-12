---
id: ex-cm04-harmonic-motion-check
kind: example
title: "A harmonic model on explicit data: the sinusoid, its least period, the conserved energy and the phase ellipse checked at $m=1$, $k=4$"
status: draft
origin: session
domain: physics
dependency_level: 17
deps: [post-cm04-harmonic-model, def-cm04-one-dimensional-models-and-equilibria, def-cm04-phase-plane-and-energy-level-sets, pthm-cm04-harmonic-motion, pthm-cm04-conservative-motion-and-energy, thm-sine-and-cosine-derivatives, thm-chain-rule, thm-algebra-of-derivatives, cor-trigonometric-parity-and-pythagorean-identity, thm-quarter-turn-values-and-shift-formulas, thm-sine-cosine-zero-sets-and-fundamental-period, def-cm01-units, def-derivative, def-interval]
dependency_roles:
  post-cm04-harmonic-model: physical-assumption
  def-cm04-one-dimensional-models-and-equilibria: formulation-prerequisite
  def-cm04-phase-plane-and-energy-level-sets: formulation-prerequisite
  pthm-cm04-harmonic-motion: physical-result
  pthm-cm04-conservative-motion-and-energy: physical-result
  thm-sine-and-cosine-derivatives: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  thm-quarter-turn-values-and-shift-formulas: mathematical-premise
  thm-sine-cosine-zero-sets-and-fundamental-period: mathematical-premise
  def-cm01-units: formulation-prerequisite
  def-derivative: mathematical-premise
  def-interval: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A worked check of the harmonic model at the declared data m=1 kg, k=4 N/m, datum (0, 0 m, 1 m/s): the displayed sinusoid is the unique maximal motion, its amplitude and phase, least period, frequency, conserved energy and phase ellipse are computed from the general theorem, and the energy identity is verified directly. The item asserts no measured value and no claim that a real oscillator realizes the model."
sources:
  references:
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Section 5.1, Eqs. (5.1)-(5.4), chapter pages 1-2 (PDF pages 87-88): the harmonic oscillator solution in amplitude-phase form and the conserved energy kappa A^2/2"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 1.2.4, Example 1, printed page 5 (PDF page 11): the simple harmonic oscillator with conserved energy"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
verification:
  precheck: pass
---

## Example

Declare the harmonic model of [[post-cm04-harmonic-model]] with the data
$$m=1\ \mathrm{kg},\qquad k=4\ \mathrm{N/m}=4\ \mathrm{kg/s^{2}},$$
time window $\mathbb R$ and configuration domain $\mathbb R$, and the datum
at $t_{0}=0$
$$x_{0}=0\ \mathrm{m},\qquad v_{0}=1\ \mathrm{m/s}.$$
The claim checked below is that the curve
$$x_{\mathrm{phys}}(t_{\mathrm{phys}})=\frac12\sin\bigl(2t_{\mathrm{phys}}/(1\,\mathrm s)\bigr)\,\mathrm m\qquad(t_{\mathrm{phys}}\in\mathbb R)$$
is the unique maximal motion of the model with this datum, that its least
positive period is $\pi$ seconds, that its energy is the constant
$\tfrac12$ joule, and that its phase curve is the ellipse
$$4x^{2}+v^{2}=1$$
in the numerical SI phase coordinates $x:=x_{\mathrm{phys}}/(1\,\mathrm m)$ and $v:=v_{\mathrm{phys}}/(1\,\mathrm{m/s})$ of [[def-cm04-phase-plane-and-energy-level-sets]]. All coefficient calculations below use these numerical coordinates and $t:=t_{\mathrm{phys}}/(1\,\mathrm s)$; equivalently the physical ellipse is $4(x_{\mathrm{phys}}/(1\,\mathrm m))^2+(v_{\mathrm{phys}}/(1\,\mathrm{m/s}))^2=1$.

## Verification

**Proof technique:** direct; read the general theorem at the declared data,
compute the coefficients, and verify the displayed identities by
differentiation and substitution.

**Given:** The harmonic model with $m=1$ kg, $k=4$ kg/s$^{2}$, the datum
$(0,0,1)$, and the curve $x(t)=\tfrac12\sin(2t)$.

[L1] Model and general theory ([[post-cm04-harmonic-model]],
[[pthm-cm04-harmonic-motion]], [[pthm-cm04-conservative-motion-and-energy]]):
the model has $F(x)=-4x$, energy $E=\tfrac12v^{2}+2x^{2}$, undamped
frequency $\omega=\sqrt{k/m}$, and every motion has the form
$A\cos(\omega(t-t_{0}))+B\sin(\omega(t-t_{0}))$ with $A=x(t_{0})$,
$B=x'(t_{0})/\omega$, amplitude $R=\sqrt{A^{2}+B^{2}}$, conserved energy
$\tfrac12kR^{2}$, least period $2\pi/\omega$ if $R>0$, and phase curve
contained in, and filling, the ellipse $x^{2}/R^{2}+v^{2}/(\omega^{2}R^{2})=1$.

[L2] Values and derivatives ([[thm-sine-and-cosine-derivatives]],
[[thm-chain-rule]], [[thm-algebra-of-derivatives]],
[[cor-trigonometric-parity-and-pythagorean-identity]],
[[thm-quarter-turn-values-and-shift-formulas]],
[[thm-sine-cosine-zero-sets-and-fundamental-period]]):
$(\sin(2t))'=2\cos(2t)$, $(\cos(2t))'=-2\sin(2t)$,
$\sin^{2}+\cos^{2}=1$, $\sin(\pi/2)=1$, $\cos(\pi/2)=0$, and
$\cos(u+2\pi)=\cos u$, $\sin(u+2\pi)=\sin u$ for all $u$.

[L3] Dimensions are read by [[def-cm01-units]]:
$[k]=\mu\tau^{-2}$, $[m]=\mu$, so $[k/m]=\tau^{-2}$.

1.1 The frequency is $\omega=\sqrt{k/m}=\sqrt{4}\,\mathrm{s^{-1}}=2\ \mathrm{s^{-1}}$ by [L1] and [L3], and $A=x_{0}=0$, $B=v_{0}/\omega=\tfrac12$ m. By clause 1 of [[pthm-cm04-harmonic-motion]] the curve $x(t)=\tfrac12\sin(2t)$ is the unique maximal motion with the declared datum, defined on $\mathbb R$. [given, L1, L3, algebra]

2.1 Amplitude and phase: $R=\sqrt{0^{2}+(1/2)^{2}}=\tfrac12$ m; taking $\varphi=\pi/2$ gives $\cos\varphi=0=A/R$ and $\sin\varphi=1=B/R$ by [L2], so clause 2 of [[pthm-cm04-harmonic-motion]] gives $x(t)=\tfrac12\cos(2t-\pi/2)=\tfrac12\sin(2t)$, the displayed curve. [step 1.1, L1, L2, algebra]

2.2 Period and frequency: $R>0$, so by clause 3 of [[pthm-cm04-harmonic-motion]] the least positive period is $2\pi/\omega=\pi$ s, and the frequency is $1/\pi$ cycles per second; indeed $\sin(2(t+\pi))=\sin(2t+2\pi)=\sin(2t)$ by [L2]. [step 1.1, L1, L2, algebra]

2.3 Energy: by clause 4 of [[pthm-cm04-harmonic-motion]], $E=\tfrac12kR^{2}=\tfrac12\cdot4\cdot\tfrac14=\tfrac12$ J, constant in $t$. Directly, with $x'(t)=\cos(2t)$ by [L2], $$E(x(t),x'(t))=\tfrac12\cos^{2}(2t)+2\cdot\tfrac14\sin^{2}(2t) =\tfrac12\bigl(\cos^{2}(2t)+\sin^{2}(2t)\bigr)=\tfrac12,$$ using [L1] and the Pythagorean identity of [L2]. [step 1.1, L1, L2, algebra]

3.1 Phase ellipse: with $R^{2}=\tfrac14$ and $\omega^{2}R^{2}=1$, the ellipse of clause 4 is $4x^{2}+v^{2}=1$; the phase curve $\bigl(\tfrac12\sin(2t),\cos(2t)\bigr)$ satisfies $4\cdot\tfrac14\sin^{2}(2t)+\cos^{2}(2t)=1$ by [L2], and by clause 4 of [[pthm-cm04-harmonic-motion]] it fills the ellipse; the amplitude $\tfrac12$ m is attained at $t=\pi/4+n\pi/2$, $n\in\mathbb Z$, where $\cos(2t-\pi/2)=\pm1$. [step 2.1, L1, L2, algebra] ∎

## Remarks

- **What the check exhibits.** The data produce the motion
  $\tfrac12\sin(2t)$ with exact period $\pi$ s, energy $\tfrac12$ J and
  phase ellipse $4x^{2}+v^{2}=1$; the check exercises clause 1-4 of
  [[pthm-cm04-harmonic-motion]] and the conservation and level-set
  statements of [[pthm-cm04-conservative-motion-and-energy]] on one motion.

- **Scope.** The values $m=1$ kg and $k=4$ N/m are declared data of this
  computation; no measured value is asserted, and no real spring is claimed
  to obey the linear law in any regime.

