---
id: lem-gr-fx-kerr-horizon-modal-flux
kind: lemma
title: "Time-averaged stationary flux of a Kerr horizon mode"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 4
physical_scope: "A local algebraic flux identity for a smooth scalar mode trace on a regular subextremal Kerr future horizon; it asserts no global mode existence or scattering amplification."
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
deps:
  - def-countable-choice
  - def-gr-fx-kerr-exterior
  - def-gr-fx-kerr-horizon-mode
  - def-gr-fx-scalar-wave-stress
  - prop-gr-fx-kerr-horizon-generator
dependency_roles:
  def-countable-choice: mathematical-premise
  def-gr-fx-kerr-exterior: mathematical-premise
  def-gr-fx-kerr-horizon-mode: mathematical-premise
  def-gr-fx-scalar-wave-stress: mathematical-premise
  prop-gr-fx-kerr-horizon-generator: mathematical-premise
sources:
  references:
    - title: "M. Dafermos and I. Rodnianski, Lectures on black holes and linear waves, arXiv:0811.0354v1 (2008), §§5.2.1–5.2.3, PDF pp. 59–61"
      url: "https://arxiv.org/pdf/0811.0354"
    - title: "H. S. Reall, Black Holes (Part III lecture notes, 15 March 2024), §§7.3–7.4 and 9.1, PDF pp. 94–96 and 113–114"
      url: "https://www.damtp.cam.ac.uk/user/hsr1000/black_holes_lectures_2024.pdf"
verification:
  precheck: pass
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $0<|a|<M$ and let $H^+$ be a regular
future Kerr horizon patch with stationary field $T$, axial field $\Phi$,
future null generator $\chi=T+\Omega_H\Phi$, and
$\Omega_H=a/(r_+^2+a^2)$. Let $u$ be a nonzero smooth $(\omega,m)$ mode
trace on $H^+$, where $\omega>0$, $m\in\mathbb Z$, and suppose that
$\psi=\operatorname{Re}u$ is the trace of a smooth real scalar field near
$H^+$. No wave equation or global extension of the mode is assumed. Define
$\langle Q(\chi,T)\rangle_T$ as the average of the real scalar flux density
$Q_{ab}[\psi]\chi^aT^b$ over one stationary-flow period $2\pi/\omega$.
Then

$$\langle Q(\chi,T)\rangle_T=\frac12\omega(\omega-m\Omega_H)|u|^2.$$

Consequently this stationary horizon-flux density is negative when
$m\Omega_H>\omega>0$. This is a conditional mode-trace calculation; it does
not assert the existence of a global scattering solution in that frequency
range.

## Statement references

[[def-gr-fx-kerr-exterior]]

[[def-gr-fx-kerr-horizon-mode]]

[[def-gr-fx-scalar-wave-stress]]

[[prop-gr-fx-kerr-horizon-generator]]

## Facts & Assumptions

**Given:** The regular Kerr horizon geometry, a nonzero smooth mode trace,
and the smooth real scalar field with that trace.

[F1] [[def-gr-fx-kerr-horizon-mode]]: $Tu=-i\omega u$, $\Phi u=im u$, and $\chi u=-i(\omega-m\Omega_H)u$.

[F2] [[def-gr-fx-scalar-wave-stress]]: $Q_{ab}[\psi]=\nabla_a\psi\nabla_b\psi-\tfrac12g_{ab}g^{cd}\nabla_c\psi\nabla_d\psi$.

[F3] [[prop-gr-fx-kerr-horizon-generator]]: $H^+$ is null, $\chi=T+\Omega_H\Phi$ is its null normal generator, and $T,\Phi$ preserve the horizon.

[A1] $\mathrm{AC}_\omega$ is the only choice principle used in the Kerr horizon extension and smooth tangent-bundle conventions of [F3] ([[def-countable-choice]]).

## Proof

1.1 Since $\chi$ is normal to the null hypersurface $H^+$ and both $T$ and $\Phi$ are tangent to it by [F3], $g(\chi,T)=g(\chi,\Phi)=0$ on $H^+$. Hence the metric-trace term in [F2] vanishes when contracted with $\chi^aT^b$, so
$Q(\chi,T)=(\chi\psi)(T\psi)$. [given, A1, F2, F3, algebra]

2.1 Along a stationary orbit, write $u(\tau)=A e^{-i\omega\tau}$ with constant $A$; [F1] gives
$T\psi=\operatorname{Re}(-i\omega u)$ and
$\chi\psi=\operatorname{Re}(-i(\omega-m\Omega_H)u)$. [given, F1, step 1.1, algebra]

3.1 Put $\vartheta=\arg A-\omega\tau$. Then
$T\psi=\omega|A|\sin\vartheta$ and
$\chi\psi=(\omega-m\Omega_H)|A|\sin\vartheta$. Averaging their product over $\tau\in[0,2\pi/\omega]$ uses
$\frac{\omega}{2\pi}\int_0^{2\pi/\omega}\sin^2(\arg A-\omega\tau)\,d\tau=\frac12$, and gives the displayed identity. [step 2.1, algebra]

4.1 If $m\Omega_H>\omega>0$, then $\omega-m\Omega_H<0$, while $|A|^2>0$ by the nonzero-mode hypothesis. step 3.1 therefore gives strictly negative averaged stationary horizon flux density. The conclusion is only conditional on the stated smooth mode trace. [given, step 3.1, algebra] ∎
