---
id: cor-qft-example-scalar-tree-coefficients
kind: corollary
title: Scalar symmetry factors and decay coefficient units
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 3
deps:
  - def-countable-choice
  - def-qft-example-two-body-phase-space-data
  - lem-qft-example-two-body-phase-space
  - def-qft-example-data
dependency_roles:
  def-countable-choice: mathematical-premise
  def-qft-example-data: mathematical-premise
  def-qft-example-two-body-phase-space-data: mathematical-premise
  lem-qft-example-two-body-phase-space: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: David Tong, Quantum Field Theory, Chapter 3, sections 3.5.3 and 3.6
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S3.html
      locator: Complete author-hosted HTML chapter; constant scalar tree amplitude, isotropic scattering, decay-rate and cross-section conventions.
    - title: Mark Srednicki, Quantum Field Theory, author-posted prepublication draft, section 11
      url: https://web.physics.ucsb.edu/~mark/ms-qft-DRAFT.pdf
      locator: Complete 616-page author-hosted textbook draft; printed pp. 93–99, two-body coefficient map and identical-final-particle symmetry factor.
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
---

## Statement

Assume Countable Choice, $\mathrm{AC}_\omega$ [[def-countable-choice]], as required by the phase-space and coefficient-map suppliers used below.

Let $m\geq0$ be a scalar rest energy in joules, and let $p_1,p_2,k_1,k_2$ be the incoming and outgoing scattering vectors on the positive $m$-shell of [[def-qft-example-two-body-phase-space-data]], so each $(E,\mathbf q)$ satisfies $E=\sqrt{|\mathbf q|^2+m^2}>0$. Require $p_1+p_2=k_1+k_2=P$ and $s=h(P,P)>4m^2$, with $h$ as in [[def-qft-example-data]]. Evaluate the coefficient map in a center-of-momentum frame $\Lambda P=(\sqrt{s},\mathbf0)$ as defined in [[lem-qft-example-two-body-phase-space]]. For one scalar initial label of weight $1$ and one specified final channel, take the dimensionless real quartic tree amplitude $\mathcal A=-\lambda$. The coefficient map of [[lem-qft-example-two-body-phase-space]] gives
$$\frac{d\sigma_{\mathrm{coeff}}}{d\Omega} =\frac{\lambda^2(\hbar c)^2}{128\pi^2s}, \qquad \sigma_{\mathrm{coeff}}=\frac{\lambda^2(\hbar c)^2}{32\pi s}$$
for identical final scalars integrated over the full labeled sphere. For distinguishable final scalars the two coefficients are twice these values.

For a parent at rest, $P_0=(\mathsf M_0,\mathbf0)$ with energy $\mathsf M_0>2m$, decaying through a specified single channel to two identical scalars on the positive $m$-shell whose total four-vector is $P_0$, under a constant amplitude $G_E$ in joules, the rate coefficient is
$$\Gamma_{\mathrm{coeff}} =\frac{|G_E|^2}{32\pi\hbar\mathsf M_0} \sqrt{1-\frac{4m^2}{\mathsf M_0^2}}.$$
This result concerns the defined formal coefficients. It does not assert an exact exponential survival law.

## Facts & Assumptions

**Given:** Assume Countable Choice and the shell, phase-space, flux, symmetry-factor, and coefficient-map conventions of [[lem-qft-example-two-body-phase-space]]. For scattering, take $p_1,p_2,k_1,k_2$ on the positive $m$-shell with $p_1+p_2=k_1+k_2=P$ and $h(P,P)=s>4m^2$; use one initial scalar label with weight $1$, one specified final channel, the displayed constant amplitude, and the center-of-momentum evaluation of the coefficient map from [[lem-qft-example-two-body-phase-space]]. For decay, use $P_0=(\mathsf M_0,\mathbf0)$ with $\mathsf M_0>2m$, positive-$m$-shell daughters whose total is $P_0$, the specified single channel, and constant $G_E$.

[A1] Countable Choice $\mathrm{AC}_\omega$ [[def-countable-choice]] is assumed; no stronger choice axiom is used.

[F1] [[lem-qft-example-two-body-phase-space]]: finite-label Borel amplitudes with normalized initial weights, the coefficient maps for $F>0$, $S_f=2$ for identical final particles and $S_f=1$ for distinguishable ones, and the single-channel decay map.

## Proof

1.1 Under [A1], the phase-space and coefficient-map suppliers apply. Since all four scattering vectors lie on the stated positive $m$-shell and have common total $P$, the equal-mass center-of-momentum formulas in [F1] give $p_*=k_*=\sqrt{s}\beta/2$, where $\beta=\sqrt{1-4m^2/s}>0$. The flux is $2s\beta>0$ by [F1], so the coefficient map is defined. Its distinguishable differential coefficient for the constant amplitude has density $(\hbar c)^2\lambda^2/(64\pi^2s)$; the factor $\beta$ in $d\Phi_2/d\Omega$ cancels the incoming $\beta$. [given, A1, F1, algebra]

2.1 The full labeled sphere counts the two identical final scalars twice, so [F1]'s $S_f=2$ divides the differential coefficient by two. Integrating the constant density over area $4\pi$ gives $\lambda^2(\hbar c)^2/(32\pi s)$. For distinguishable species $S_f=1$, so both coefficients are twice as large. [step 1.1, F1, algebra]

3.1 For the parent decay, the equal-daughter phase-space integral is $\beta_0/(8\pi)$ with $\beta_0=\sqrt{1-4m^2/\mathsf M_0^2}$. The rate map in [F1] divides by $2\hbar\mathsf M_0$ and by $S_f=2$, giving $|G_E|^2\beta_0/(32\pi\hbar\mathsf M_0)$. Its units are $\mathrm J^2/(\mathrm{J\,s\,J})=\mathrm s^{-1}$. The definition is a rate coefficient only; no time-dependent survival law was assumed. [F1, algebra] ∎
