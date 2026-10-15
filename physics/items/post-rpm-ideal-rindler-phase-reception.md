---
id: post-rpm-ideal-rindler-phase-reception
kind: postulate
title: "Ideal local phase reception by stationary Rindler observers"
status: published
origin: pipeline
domain: physics
library: physics
dependency_level: 0
physical_scope: "Additional adopted local phase-reading idealization for the smooth stationary right-wedge Rindler congruence and an affine monochromatic vacuum plane wave with constant future null covector in flat Minkowski spacetime. Exact instantaneous phase readings within this model; finite apparatus interpretation is limited to short observation intervals and wavelengths small relative to the observer's acceleration length. No empirical validation, numerical error bound, detector response, photon-energy identification, or extension of the published SR postulate is asserted."
deps:
  - pthm-sr-rindler-horizons-and-radar
  - def-sr-null-wave-covector-and-observer-frequency
  - lem-sr-phase-rate-along-worldline
  - post-sr-ideal-plane-wave-model
  - post-sr-ideal-clocks-and-light
  - def-sr-si-units-and-coordinate-conventions
dependency_roles:
  pthm-sr-rindler-horizons-and-radar: formulation-prerequisite
  def-sr-null-wave-covector-and-observer-frequency: formulation-prerequisite
  lem-sr-phase-rate-along-worldline: formulation-prerequisite
  post-sr-ideal-plane-wave-model: formulation-prerequisite
  post-sr-ideal-clocks-and-light: formulation-prerequisite
  def-sr-si-units-and-coordinate-conventions: formulation-prerequisite
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Bahram Mashhoon, The Hypothesis of Locality and its Limitations, arXiv:gr-qc/0303029v1 (2003)"
      url: "https://arxiv.org/pdf/gr-qc/0303029"
      locator: "Complete 14-page author manuscript inspected; §1 pp. 1–2 on momentarily comoving inertial observers and frequency observation, and §4 p. 12 on the ray limit and limitations."
verification:
  sources_checked:
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    by: "Completed delegated workflow source/scope reviewers and adjudicators; owner accepted existing evidence"
---

## Postulate

In the flat affine Minkowski model with signature $(-,+,+,+)$ and $x^0=ct$, use the smooth right-wedge chart and stationary congruence of [[pthm-sr-rindler-horizons-and-radar]]. A stationary observer has fixed $\rho>0,y,z$, worldline $z(\tau)$ on an open proper-time interval in seconds, and four-velocity $U=dz/d\tau$ with $\eta(U,U)=-c^2$. These are accelerated timelike worldlines, not global inertial frames.

Let $\theta$ be the dimensionless affine phase with constant nonzero future null covector $k=d\theta$ and ideal vacuum rays of [[post-sr-ideal-plane-wave-model]] (i). As an **additional local reception assumption**, adopt that an ideal point receiver comoving with a stationary Rindler observer assigns, at the event $z(\tau)$, the instantaneous received angular frequency

$$\omega(\tau):=-\frac{d(\theta\circ z)}{d\tau}=-k(U(\tau))>0,$$

and linear frequency $\nu(\tau)=\omega(\tau)/(2\pi)$ in the conventions of [[def-sr-null-wave-covector-and-observer-frequency]] and [[def-sr-si-units-and-coordinate-conventions]]. The phase derivative and positivity are mathematical facts of [[lem-sr-phase-rate-along-worldline]]; their identification with this ideal receiver's reading is the assumption adopted here. This is the pointwise equivalence to the momentarily comoving inertial phase receiver, together with the proper-time clock convention of [[post-sr-ideal-clocks-and-light]]. Reception comparisons use one and the same affine wave and events joined by one of its radial rays. This assumption does not postulate an emitter mechanism.

The instantaneous quantity may vary along an accelerated worldline. It is not an assertion that an observer's entire proper-time signal is monochromatic or that an arbitrary finite-duration Fourier measurement equals this value. For possible finite-apparatus use, define the local wavelength $\lambda_{\rm loc}:=2\pi c/\omega$ and the translational acceleration length $L_\alpha:=c^2/\alpha$, where $\alpha$ is the observer's proper-acceleration magnitude; for this congruence $L_\alpha=\rho$. The intended local ray regime has $\lambda_{\rm loc}/L_\alpha\ll1$ throughout the observation segment, receiver size small relative to $L_\alpha$, and an observation duration long enough for several cycles but short relative to $L_\alpha/c$. These qualitative scale separations give no numerical tolerance or measured uncertainty. The equality above is exact only inside the adopted ideal model; no accuracy claim for a real receiver follows from it.

This supplements, without changing, the accelerated-reception exclusion in [[post-sr-ideal-plane-wave-model]] (iv). It includes no detector dynamics, intensity, polarization, finite-bandwidth pulse or envelope, medium, dispersion, absorption, quantum or gravity model, no energy identification with $\hbar\omega$, and no empirical outcome or proof of the model's applicability. It is a sourced adopted idealization, not a deductive or experimentally established law.
