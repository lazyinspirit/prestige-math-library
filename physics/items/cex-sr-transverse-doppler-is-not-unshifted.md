---
id: cex-sr-transverse-doppler-is-not-unshifted
kind: counterexample
title: 'Counterexample: a transverse wave configuration need not have zero Doppler shift'
status: draft
origin: pipeline
domain: physics
physical_scope: 'Counterexample to a universal transverse-Doppler claim within the ideal plane-wave model of flat classical special-relativistic spacetime at relative speed (3/5)c. Conditional on the model; no measurement, statistical inference or empirical falsification.'
deps: [pthm-sr-null-wave-doppler-and-aberration,
       def-sr-null-wave-covector-and-observer-frequency,
       post-sr-ideal-plane-wave-model]
dependency_roles:
  pthm-sr-null-wave-doppler-and-aberration: physical-result
  def-sr-null-wave-covector-and-observer-frequency: formulation-prerequisite
  post-sr-ideal-plane-wave-model: physical-assumption
dependency_level: 16
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
sources:
  references:
    - title: 'B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook, 246 PDF pages): Section 3.2 pp. 55-57 and Section 6.5.1 p. 137; signature (+---) converted to (-+++) and c = 1 formulas converted to x^0 = c t'
      url: 'https://archive.org/download/sr_20220102/sr.pdf'
    - title: 'S. Murugesh, Relativity - Special Theory (IIST course notes PH33003/PH43017, last update 2009-02-18, 31 PDF pages): Chapter 6 Waves pp. 25-28, transverse Doppler effect (6.1.2) p. 27'
      url: 'https://www.iist.ac.in/sites/default/files/2025-06/relativity.pdf'
---

## Statement refuted

The following universal claim is refuted: "if the propagation direction of an ideal plane wave is perpendicular to the relative velocity of two inertial frames, then the frequency read by the observer at rest in one frame equals the frequency read by the observer at rest in the other, $\omega'=\omega$."

## Facts & Assumptions

**Given:** Inertial charts $x$ and $x'$ with $x'=B(\beta)x+b$, $\beta=(3/5)e_1$, and an ideal plane wave with frame-$x$ data $(\omega,s)$, $\omega>0$, $|s|=1$, in the ideal plane-wave model.

[A1] Adopted ideal plane-wave model: the wave is a dimensionless affine phase with future null wave covector, and the rest observers of $x$ and $x'$ read $\omega$ and $\omega'$ as defined in the model ([[post-sr-ideal-plane-wave-model]], [[def-sr-null-wave-covector-and-observer-frequency]]).

[L1] For the chart pair of the Given, the theorem gives $\omega'=\gamma(1-\beta\cdot s)\omega>0$ with $\gamma=(1-|\beta|^2)^{-1/2}$, and in the axis case $\beta=be_1$: $s'_1=(s_1-b)/(1-bs_1)$, $s'_2=s_2/[\gamma(1-bs_1)]$, $s'_3=s_3/[\gamma(1-bs_1)]$ ([[pthm-sr-null-wave-doppler-and-aberration]], clause (i)).

[L2] Transverse protocols of the theorem: if $\beta\cdot s=0$ then $\omega'=\gamma\omega$; if $\beta\cdot s=|\beta|^2$, equivalently $s'\cdot\beta_{\mathrm{hat}}=0$ for $\beta\ne0$, then $\omega'=\omega/\gamma$; in both cases $s$, $s'$ are unit and the shift is not one when $\beta\ne0$ ([[pthm-sr-null-wave-doppler-and-aberration]], clause (iv)).

## Counterexample

**Proof technique:** direct.

1.1 First witness. With $\beta=(3/5)e_1$ one has $|\beta|^2=9/25$ and $\gamma=(1-9/25)^{-1/2}=(16/25)^{-1/2}=5/4$. Take $s=e_2$; then $\beta\cdot s=(3/5)(0)=0$, so the propagation direction is perpendicular to the relative velocity in the frame $x$, and [L2] gives $\omega'=\gamma\omega=(5/4)\omega\neq\omega$ because $\omega>0$. Thus the antecedent of the refuted universal claim holds in $x$ while its conclusion fails. [A1, L2, algebra]

1.2 Second witness. Take $s=(3/5,4/5,0)$; then $|s|^2=9/25+16/25=1$ and $\beta\cdot s=(3/5)(3/5)=9/25=|\beta|^2$, so by [L2] $s'\cdot\beta_{\mathrm{hat}}=0$, the propagation direction is perpendicular to the relative velocity in the frame $x'$, and [L2] gives $\omega'=\gamma(1-9/25)\omega=(5/4)(16/25)\omega=(4/5)\omega\neq\omega$. Explicitly, the axis formulas of [L1] give $s'_1=(3/5-3/5)/(1-9/25)=0$, $s'_2=(4/5)/[(5/4)(16/25)]=(4/5)/(4/5)=1$ and $s'_3=0$, so $s'=e_2$. [A1, L1, L2, algebra]

2.1 Conclusion. Each witness satisfies the antecedent of the refuted claim — transversality in $x$ in step 1.1 and transversality in $x'$ in step 1.2 — and yields $\omega'\neq\omega$; the two factors $(5/4)$ and $(4/5)$ differ and neither equals $1$ for the stated nonzero $\beta$, so the universal claim is false in the ideal model, and the direction and size of the shift depend on the protocol (the frame in which transversality is required). The counterexample is conditional on the adopted idealizations, performs no measurement and claims no empirical falsification; no choice principle is used. [step 1.1, step 1.2, A1] ∎
