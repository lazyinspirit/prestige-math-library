---
id: ex-cm09-forced-resonant-mode-check
kind: example
title: "A drive along the in-phase pattern of the two-mass chain: resonance exactly at that mode's frequency and a bounded steady response off resonance"
status: draft
origin: session
domain: physics
dependency_level: 19
deps: [def-cm09-coupled-quadratic-model, pthm-cm09-forced-modal-response, pthm-cm09-free-modes-and-degeneracy, ex-cm09-two-mass-spring-modes, post-cm04-sinusoidal-drive-model, def-euclidean-inner-product, def-matrix-product-and-identity-matrix, thm-chain-rule-for-total-derivatives]
dependency_roles:
  def-cm09-coupled-quadratic-model: formulation-prerequisite
  pthm-cm09-forced-modal-response: physical-result
  pthm-cm09-free-modes-and-degeneracy: physical-result
  ex-cm09-two-mass-spring-modes: operational-prerequisite
  post-cm04-sinusoidal-drive-model: formulation-prerequisite
  def-euclidean-inner-product: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A worked instance of the forced coupled quadratic model: the two equal-mass chain of the companion example with a prescribed generalized force J(t)=F cos(Omega t) u_+ along the in-phase pattern (a sinusoidal drive for Omega>0 and a constant-force specialization for Omega=0), the modal force components (F/m,0), the unbounded resonance at Omega = sqrt(k/m) with the explicit linearly growing modal motion, the bounded steady response of amplitude |F|/(2c) at Omega = sqrt((k+2c)/m), and the boundedness of every motion for Omega^2 not equal to k/m. The force is prescribed external data; no back-reaction, measured response or empirical value is asserted."
sources:
  references:
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Chapter 6, Section 6.2, Eqs. (6.16)-(6.21), chapter pages 5-6 (PDF pages 129-130): free coupled normal-mode construction; Chapter 5, Section 5.1, Eqs. (5.13)-(5.19), chapter pages 3-4 (PDF pages 89-90): prescribed forcing, scalar response and its zero-damping off-resonance limit. Background only; the exact undamped resonant motion and mode-selective boundedness are supplied by the local forced-modal theorem"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "I. Stewart, Advanced Classical Mechanics (MIT 8.09/8.309 Fall 2014 course text), Chapter 7, Section 7.1.3, Eqs. (7.15)-(7.16), printed page 148 (PDF page 151): the linearised driven damped oscillator and its transient and steady response; background, not a proof of the exact undamped resonant formula here"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
verification:
  precheck: pass
---

## Example

The algebra below uses the fixed-unit numerical convention of [[def-cm09-coupled-quadratic-model]], with coordinate units metres, time unit $1\,\mathrm s$ and energy unit $1\,\mathrm J$. Physical model parameters are given their stated units; in matrix products, initial-vector identities and coefficient formulas their numerical coefficients in these fixed units are used. Modal amplitudes have common unit $a_*=(1\,\mathrm J)^{1/2}(1\,\mathrm s)$; the $j$-th component of a mass-normalized modal vector has unit $s_j/a_*$. Modal oscillatory and hyperbolic coefficients have unit $a_*$, and zero-mode slopes have unit $a_*/(1\,\mathrm s)$. Physical coordinates and energies are reconstructed with the coordinate units and $1\,\mathrm J$, respectively. In particular a numerical single-mode datum $q(0)=u_i$ means a modal amplitude of one in this common amplitude unit.

Adopt the two-mass chain of [[ex-cm09-two-mass-spring-modes]]: mass metric
$M=mI_{2}$, stiffness $K=\begin{pmatrix}k+c&-c\\-c&k+c\end{pmatrix}$ with
$m>0$, $k>0$, $c>0$, and modal vectors $u_{\pm}=(1,\pm1)/\sqrt{2m}$ with
modal stiffnesses $\lambda_{+}=k/m$, $\lambda_{-}=(k+2c)/m$ and frequencies
$\omega_{+}=\sqrt{k/m}$, $\omega_{-}=\sqrt{(k+2c)/m}$. Choose a real drive coefficient $F\ne0$. In the physical equation $J=Fu_+\cos(\Omega t)$ its unit is $\mathrm{kg}^{3/2}\,\mathrm m\,\mathrm s^{-2}$, since $u_+$ has unit $\mathrm{kg}^{-1/2}$ and $J$ is a force. Thus $F/m$ is a modal force amplitude with unit $a_*/\mathrm s^2$, and $|F|/(2c)$ below is a modal coordinate amplitude with unit $a_*$; multiplying by $u_+$ gives each particle's displacement amplitude. Choose a frequency $\Omega\ge0$ and prescribe
$$J(t)=F\cos(\Omega t)\,u_{+}.$$
For $\Omega>0$ this is the sinusoidal drive of
[[post-cm04-sinusoidal-drive-model]]; for $\Omega=0$ it is the constant
force allowed by clause (b) of [[def-cm09-coupled-quadratic-model]]. In
either case it is prescribed external data, so the model is the forced
coupled quadratic model $Mq''+Kq=J$. The all-time claims below concern
maximal motions on $\mathbb R$; local solutions are their restrictions. Then:

1. the modal force components of $J(t)=J_{0}\cos(\Omega t)$ with
$J_{0}=Fu_{+}$ are $\psi_{0}=O^{\mathsf T}M^{-1/2}J_{0}=(F/m,\,0)$: the
drive excites the in-phase modal coordinate alone, with modal amplitude
$F/m$, and leaves the relative coordinate unforced;
2. if $\Omega=\omega_{+}=\sqrt{k/m}$, then
$$q^{\mathrm{p}}(t)=\frac{F}{2m\omega_{+}}\,t\sin(\omega_{+}t)\,u_{+}$$
is a motion of the model, of in-phase pattern, with linearly growing
amplitude $|F|t/(2m\omega_{+})$, and **every** motion of the model is
unbounded on $[0,\infty)$;
3. if $\Omega^{2}\ne k/m$ then every motion of the model is bounded on
$[0,\infty)$; in particular at $\Omega=\omega_{-}=\sqrt{(k+2c)/m}$ — the
frequency of the *unforced* relative mode — the drive is non-resonant and
the steady modal response has amplitude
$$\frac{\lvert F\rvert/m}{\lvert k/m-(k+2c)/m\rvert}=\frac{\lvert F\rvert}{2c};$$
4. the resonance condition is exactly that the drive frequency equal the
frequency of a mode whose modal force component does not vanish: here the
in-phase mode at $\omega_{+}$, not the relative mode at $\omega_{-}$.

## Facts & Assumptions

**Given:** The data $m,k,c>0$ of the chain, the modal vectors $u_{\pm}$ and modal stiffnesses $\lambda_{\pm}$, the modal data $O$, $M^{1/2}$ with $e_{\pm}=(1,\pm1)/\sqrt2$, real $F\ne0$ and $\Omega\ge0$.

[F1] Chain data and modes ([[ex-cm09-two-mass-spring-modes]] clauses 1, 2 and 4): $M=mI_{2}$, $K$ as displayed, $O=[e_{+}\ e_{-}]$, $u_{\pm}=M^{-1/2}e_{\pm}$, $Ku_{\pm}=\lambda_{\pm}Mu_{\pm}$ with the displayed $\lambda_{\pm}$, and $K$ is positive definite.

[F2] Forced modal response ([[pthm-cm09-forced-modal-response]] clauses 1-3): the unique motion with a datum has the modal convolution form with $\psi=O^{\mathsf T}M^{-1/2}J$; for $J(t)=J_{0}\cos(\Omega t)$ the modal force is $\psi(t)=\psi_{0}\cos(\Omega t)$ with $\psi_{0}=O^{\mathsf T}M^{-1/2}J_{0}$; the sinusoidal particular functions of clauses 2(a)-(c) hold; every motion is $q^{\mathrm{p}}+q^{\mathrm{h}}$ with $q^{\mathrm{h}}$ free; in the resonant cases (some $\psi_{0,i}\ne0$ with $\lambda_{i}>0$, $\Omega^{2}=\lambda_{i}$, or $\lambda_{i}=0$, $\Omega=0$) every motion is unbounded on $[0,\infty)$; and for positive definite $K$ with no resonant index of nonzero modal force, every motion is bounded.

[F3] Prescribed generalized force ([[def-cm09-coupled-quadratic-model]] clause (b)): $J$ is continuous prescribed model data. For $\Omega>0$ the cosine term has the restricted sinusoidal-drive status of [[post-cm04-sinusoidal-drive-model]] clause (ii); for $\Omega=0$ it is the constant-force specialization of the general $J$ data. In both cases it depends on time alone and has no modelled back-reaction.

[F4] Direct linear algebra ([[def-matrix-product-and-identity-matrix]], [[def-euclidean-inner-product]]): $M^{-1/2}=\frac1{\sqrt m}I_{2}$, $J_{0}=F(1,1)/\sqrt{2m}$, $e_{+}^{\mathsf T}(1,1)=\sqrt2$, $e_{-}^{\mathsf T}(1,1)=0$; the products below are direct computations. The particular motions displayed are differentiated by the chain rule ([[thm-chain-rule-for-total-derivatives]]).

## Verification

**Proof technique:** direct; compute the modal force, instantiate the resonant and non-resonant cases of the forced modal theorem, and evaluate the steady amplitude.

1.1 Modal force: with $J_{0}=Fu_{+}=F(1,1)/\sqrt{2m}$, $$\psi_{0}=O^{\mathsf T}M^{-1/2}J_{0}=\frac{F}{\sqrt m}\begin{pmatrix}e_{+}^{\mathsf T}\\ e_{-}^{\mathsf T}\end{pmatrix}\frac{(1,1)}{\sqrt{2m}}=\frac{F}{m}\begin{pmatrix}1\\ 0\end{pmatrix},$$ because $e_{+}^{\mathsf T}(1,1)=\sqrt2$ and $e_{-}^{\mathsf T}(1,1)=0$. This is clause 1. [F1, F4, algebra]

2.1 Resonant case: for $\Omega=\omega_{+}$, $\lambda_{+}=\Omega^{2}$ and $\psi_{0,+}=F/m\ne0$; by [F2] clause 2(b) the function $z_{+}^{\mathrm{p}}(t)=\frac{F}{m}\frac{t\sin(\omega_{+}t)}{2\omega_{+}}$ solves the in-phase modal equation and $q^{\mathrm{p}}=M^{-1/2}Oz^{\mathrm{p}}=\frac{F}{2m\omega_{+}}t\sin(\omega_{+}t)u_{+}$ is a motion of the model, with the stated linearly growing amplitude; and by [F2] clause 3(a) every motion of the model is unbounded on $[0,\infty)$. This is clause 2. [F1, F2, F4, step 1.1, algebra]

2.2 Non-resonant case: if $\Omega^{2}\ne k/m=\lambda_{+}$, then the only index with $\psi_{0,i}\ne0$ is $i=+$ (since $\psi_{0,-}=0$), and it is not resonant; $K$ is positive definite by [F1], so [F2] clause 3(b) gives that every motion is bounded on $[0,\infty)$. At $\Omega=\omega_{-}$ the steady in-phase response of [F2] clause 2(a) has amplitude $\lvert\psi_{0,+}\rvert/\lvert\lambda_{+}-\Omega^{2}\rvert=\frac{\lvert F\rvert}{m}\big/\frac{2c}{m}=\lvert F\rvert/(2c)$, and the relative mode has zero modal force. This is clause 3. [F1, F2, F4, step 1.1, algebra]

3.1 Resonance reading: by [F2] the resonant frequencies are exactly the frequencies of the modal directions with nonzero modal force component; here $\psi_{0}$ is supported on the in-phase direction alone, so the resonance is at $\omega_{+}$ and the equally available frequency $\omega_{-}$ of the relative mode does not produce resonance for this drive. This is clause 4. [F2, step 1.1, step 2.1, step 2.2]

4.1 Clauses 1-4 are verified on the explicit data under the prescribed drive [F3]; no damping, back-reaction, measured response or apparatus detail is asserted, and the parameters are model data. [F3, step 1.1, step 2.1, step 2.2, step 3.1] ∎

## Remarks

- **The unbounded motion is a mode-shaped oscillation.** The resonant motion of clause 2 keeps the in-phase pattern $u_{+}$ fixed and grows linearly in amplitude; it is not a runaway in an arbitrary direction, and the prescribed particular response has zero relative coordinate. An arbitrary motion can additionally contain the bounded homogeneous relative oscillation of the free model.

- **Why the amplitude at $\Omega=\omega_{-}$ grows as $c\to0^{+}$.** $\lvert F\rvert/(2c)$ is the steady amplitude at the relative-mode frequency; as the coupling tends to zero the two frequencies merge ($\omega_{-}\to\omega_{+}$) and the drive approaches resonance, so the bounded steady amplitude grows without bound. This is the limiting consistency of clauses 2 and 3 and not an assertion about any particular apparatus.
