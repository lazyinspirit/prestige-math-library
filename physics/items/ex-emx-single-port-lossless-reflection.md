---
id: ex-emx-single-port-lossless-reflection
kind: example
title: "A closed lossless one-port has unit reflection modulus"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 4
proof_strategy: direct
deps:
  - def-countable-choice
  - def-emx-port-scattering-model
  - pthm-emx-scattering-contraction
dependency_roles:
  def-countable-choice: mathematical-premise
  def-emx-port-scattering-model: formulation-prerequisite
  pthm-emx-scattering-contraction: physical-result
verification:
  precheck: pending
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "An algebraic consequence for a closed, lossless one-channel scattering model with no unlisted output. It gives the reflected-amplitude modulus and shows that power conservation alone leaves its phase undetermined; it does not assert an experimental result or the realization of an arbitrary frequency-dependent phase law."
sources:
  references:
    - title: "Weng Cho Chew, Theory of Microwave and Optical Waveguides, Purdue lecture notes, complete 362-page text"
      url: "https://engineering.purdue.edu/wcchew/course/tgwAll20121211.pdf"
      locator: "§1.12.2, printed pp. 25–26 (PDF pp. 34–35): incident/reflected wave vectors and the scattering matrix; the local scalar modulus deduction is supplied explicitly here."
    - title: "Roger B. Marks and Dylan F. Williams, A General Waveguide Circuit Theory, Journal of Research of the National Institute of Standards and Technology 97(5) (1992), pp. 533–562"
      url: "https://nistdigitalarchives.contentdm.oclc.org/digital/api/collection/p16009coll6/id/74796/download"
      locator: "§5, printed pp. 555–556: power-wave amplitudes and their net-power normalization. The example assumes the explicit lossless reciprocal port convention of the local definition."
---

## Example

Assume $\mathrm{AC}_\omega$. Let $\mathcal I\subset(0,\infty)$ be a set of admissible angular frequencies at which a closed lossless one-channel finite port model is defined, with no unlisted outgoing power. At each $\omega\in\mathcal I$, assume the solution satisfies all hypotheses of [[pthm-emx-scattering-contraction]]: the source-free macroscopic Maxwell equations with $\rho_f=J_f=0$, a smooth $T$-periodic real solution and material states on one of the stated homogeneous finite Lorentz or Drude branches, and the stated passive-wall and outgoing-power bookkeeping. Here $T=2\pi/\omega$; material, wall, and unlisted-output losses vanish for every input. Write the scalar scattering matrix at each frequency as $S(\omega)=[r(\omega)]$. Then $|r(\omega)|=1$ for each such frequency. This fixes reflected power but leaves the phase unconstrained by power conservation: any unit-modulus scalar has the same power factor. For any real-valued function $\phi:\mathcal I\to\mathbb R$, $r_\phi(\omega)=e^{i\phi(\omega)}$ has unit modulus; when this circle-valued function is nonconstant, its phase varies. If $\mathcal I$ contains two distinct frequencies, such a varying family exists: set $\phi$ equal to $0$ and $\pi$ at those two frequencies, respectively, and set $\phi=0$ elsewhere. This is an algebraic freedom allowed by the power constraint, not a claim that every such phase law is realized by a Maxwell device.

## Statement references

[[def-countable-choice]]

[[def-emx-port-scattering-model]]

[[pthm-emx-scattering-contraction]]

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$; one incoming and one outgoing channel; at each frequency the finite port solution satisfies the smooth periodic Maxwell and homogeneous Lorentz/Drude hypotheses of the contraction theorem with $\rho_f=J_f=0$; and material, wall, and unlisted-channel losses vanish.

[A1] $\mathrm{AC}_\omega$ is carried by the finite scattering theorem and its bounded-domain mathematical supplier. [[def-countable-choice]]

[F1] For complex matrices, an overline is componentwise conjugation, a superscript $\mathsf T$ is ordinary transpose, $A^\dagger:=\overline A^{\,\mathsf T}$ is the conjugate transpose, and $I_1=[1]$ is the identity. In this power-normalized one-channel model, $S=[r]$ and the input and output powers are $|a|^2$ and $|ra|^2$. Under the stated smooth periodic Lorentz/Drude hypotheses, the contraction theorem gives $S^\dagger S=I_1$ when material, wall, and unlisted-output losses vanish for every input. [[def-emx-port-scattering-model]] [[pthm-emx-scattering-contraction]]

## Verification

1.1 Choose any nonzero incoming amplitude $a\in\mathbb C$. By [F1], $|ra|^2=|a|^2$, so $|r|^2|a|^2=|a|^2$. Divide by $|a|^2>0$ to obtain $|r|^2=1$, hence $|r|=1$. [given, A1, F1, algebra]

2.1 For every $\omega\in\mathcal I$, $|e^{i\phi(\omega)}|^2=e^{i\phi(\omega)}e^{-i\phi(\omega)}=1$. If $\mathcal I$ contains distinct $\omega_1,\omega_2$, define $\phi(\omega_1)=0$, $\phi(\omega_2)=\pi$, and $\phi=0$ elsewhere; then $r_\phi$ takes the distinct values $1$ and $-1$, while both obey step 1.1. Thus the modulus condition leaves phase variation algebraically possible on a multi-frequency set. [step 1.1, algebra] ∎
