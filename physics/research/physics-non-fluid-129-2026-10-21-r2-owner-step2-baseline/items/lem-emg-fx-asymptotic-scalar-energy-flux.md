---
id: lem-emg-fx-asymptotic-scalar-energy-flux
kind: lemma
title: Asymptotic time-translation flux of a charged scalar mode
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
dependency_level: 3
proof_strategy: direct
deps:
  - def-emg-fx-charged-radial-scattering
  - def-emg-fx-charged-scalar-stress-tensor
dependency_roles:
  def-emg-fx-charged-radial-scattering: mathematical-premise
  def-emg-fx-charged-scalar-stress-tensor: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "Richard Brito, Vitor Cardoso, and Paolo Pani, Superradiance -- the 2020 Edition, Lecture Notes in Physics 971, complete 281-page edition (2020)"
      url: "https://arxiv.org/pdf/1501.06570"
      locator: "Section 4.4, equation (4.53), and §4.6.1, equations (4.54)–(4.56), conserved radial mode flux and charged scattering normalization; the local Coulomb phase and tensor calculation are supplied here."
    - title: "Visakan Balakumar, Aspects of quantum charged scalar field theory in curved spacetime: Black hole superradiance and Hadamard renormalisation, PhD thesis, complete 307-page text (2022)"
      url: "https://inspirehep.net/files/c9d9d32ca091d580007a1fee1bb44dc0"
      locator: "Chapter 3, §§3.2.2–3.3.4, equations (3.36)–(3.84), classical charged scalar stress context and the mode flux/Wronskian relations; the local proof retains the exact gauge and asymptotic conventions of its definition supplier."
---

## Statement

Use the fixed subextremal electric Reissner–Nordström exterior, gauge, charged derivative, real normalized spherical harmonic $Y$, and mode conventions of [[def-emg-fx-charged-radial-scattering]]. Let $\psi=A_{\mathrm{in}}e^{-i\omega t}Y(\Omega)u(r_*)/r$ be any admitted real-frequency scattering mode with $\omega>0$ and $A_{\mathrm{in}}\ne0$, and let $R$ be its reflection coefficient. Form $\mathsf T_{ab}[\psi;g,A,e]$ by the gauge-covariant scalar stress-tensor definition. With $\xi=\partial_t$, define the outward radial flux through the sphere of radius $r$ by

$$\mathcal P(r):=-\int_{S^2}r^2\mathsf T^r{}_t[\psi;g,A,e]\,d\omega_{S^2}.$$

Let $\psi_{\mathrm{in}}:=A_{\mathrm{in}}e^{-i\omega t}Y e^{-i\Theta}/r$ and $\psi_{\mathrm{ref}}:=A_{\mathrm{in}}e^{-i\omega t}YRe^{i\Theta}/r$ be the two leading asymptotic components. Define their positive directional flux magnitudes by

$$\mathcal P_{\mathrm{in}}:=\lim_{r\to\infty}\int_{S^2}r^2\mathsf T^r{}_t[\psi_{\mathrm{in}};g,A,e]\,d\omega_{S^2},\qquad \mathcal P_{\mathrm{ref}}:=-\lim_{r\to\infty}\int_{S^2}r^2\mathsf T^r{}_t[\psi_{\mathrm{ref}};g,A,e]\,d\omega_{S^2}.$$

Then

$$\mathcal P_{\mathrm{in}}=2\omega^2|A_{\mathrm{in}}|^2,\qquad \mathcal P_{\mathrm{ref}}=2\omega^2|A_{\mathrm{in}}|^2|R|^2,\qquad \frac{\mathcal P_{\mathrm{ref}}}{\mathcal P_{\mathrm{in}}}=|R|^2.$$

This is a conditional tensor calculation for the specified mode asymptotics; it asserts neither that such a mode exists nor that its flux has been observed.

## Statement references

[[def-emg-fx-charged-radial-scattering]]

[[def-emg-fx-charged-scalar-stress-tensor]]

## Facts & Assumptions

**Given:** The exact static exterior and gauge of the scattering definition, a real normalized harmonic, an admitted mode with its stated two-term asymptotics and differentiated asymptotics at infinity, and the tensor assignment in the stress-tensor definition.

[F1] [[def-emg-fx-charged-radial-scattering]]: $A_t=-Q/r$, $D_t=\partial_t+ieQ/r$, $D_r=\partial_r$, $g^{rr}=f$, $\partial_{r_*}=f\partial_r$, and $\Theta'(r_*)=\omega-eQf/r\to\omega$; also $\int_{S^2}Y^2\,d\omega_{S^2}=1$.

[F2] [[def-emg-fx-charged-scalar-stress-tensor]]: $\mathsf T_{ab}=\overline{D_a\psi}D_b\psi+\overline{D_b\psi}D_a\psi-g_{ab}g^{cd}\overline{D_c\psi}D_d\psi$.

[A1] The separated mode has the normalized asymptotics $u=e^{-i\Theta}+Re^{i\Theta}+o(1)$ and $u'=-i\Theta'e^{-i\Theta}+i\Theta'Re^{i\Theta}+o(1)$ as $r\to\infty$, with all parameters real and $\omega>0$.

## Proof

1.1 Since $A_t=-Q/r$ and $\omega>0$, the time derivative satisfies $D_t\psi=-i\omega\psi+o(r^{-1})$. Using $D^r=f\partial_r=\partial_{r_*}$ and $\partial_{r_*}(u/r)=u'/r-fu/r^2$, the differentiated asymptotics and $\Theta'\to\omega$ give
$$\psi=\frac{A_{\mathrm{in}}e^{-i\omega t}Y}{r}\left(e^{-i\Theta}+Re^{i\Theta}\right)+o(r^{-1}),\qquad D^r\psi=\frac{A_{\mathrm{in}}e^{-i\omega t}Y}{r}\left(-i\omega e^{-i\Theta}+i\omega Re^{i\Theta}\right)+o(r^{-1}).$$
[given, F1, A1, algebra]

2.1 Since $g^r{}_t=0$, [F2] gives $\mathsf T^r{}_t=2\operatorname{Re}(\overline{D^r\psi}D_t\psi)$. Substitution of step 1.1 gives the diagonal terms $\omega^2(1-|R|^2)$; the cross terms are $z-\overline z$ for $z=\omega^2R e^{2i\Theta}$ and have zero real part. Integrating $Y^2$ over the sphere and taking $r\to\infty$ therefore gives the net outward flux $\mathcal P(r)\to2\omega^2|A_{\mathrm{in}}|^2(|R|^2-1)$. [given, F1, F2, A1, step 1.1, algebra]

3.1 For the incoming component, $D^r\psi_{\mathrm{in}}=-i\omega\psi_{\mathrm{in}}+o(r^{-1})$ and $D_t\psi_{\mathrm{in}}=-i\omega\psi_{\mathrm{in}}+o(r^{-1})$, so $\mathsf T^r{}_t[\psi_{\mathrm{in}}]=2\omega^2|\psi_{\mathrm{in}}|^2+o(r^{-2})$; its positive inward magnitude is $2\omega^2|A_{\mathrm{in}}|^2$ after sphere integration. For the reflected component, $D^r\psi_{\mathrm{ref}}=i\omega\psi_{\mathrm{ref}}+o(r^{-1})$ while $D_t\psi_{\mathrm{ref}}=-i\omega\psi_{\mathrm{ref}}+o(r^{-1})$, so its positive outward magnitude is $2\omega^2|A_{\mathrm{in}}|^2|R|^2$. Their ratio is $|R|^2$ because $\omega>0$ and $A_{\mathrm{in}}\ne0$. [given, F1, F2, A1, step 1.1, algebra] ∎

## Remarks

The Coulomb phase in the scattering definition is retained; only its derivative limit $\Theta'\to\omega$ enters the asymptotic stress calculation. The result concerns the prescribed geometric normalization and supplies no scattering-solution existence claim.
