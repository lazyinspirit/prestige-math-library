---
id: ex-r5-string-axiverse-dark-matter
kind: example
title: String axiverse candidates and cosmological production channels
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: physics
library: physics
dependency_level: 5
deps:
  - def-r5-string-axion-data
  - pthm-r5-axion-misalignment-cold-matter-regime
  - pthm-r5-sudden-decay-reheating-temperature
dependency_roles:
  def-r5-string-axion-data: formulation-prerequisite
  pthm-r5-axion-misalignment-cold-matter-regime: physical-result
  pthm-r5-sudden-decay-reheating-temperature: physical-result
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
proof_strategy: direct
physical_scope: Source-backed family of conditional axion and axion-like-particle cosmologies. It does not assert that every compactification contains an observed axiverse, determine an abundance, or establish a globally controlled string vacuum.
sources:
  references:
    - title: "D. J. E. Marsh, Axion Cosmology, arXiv:1510.07633v2"
      url: "https://arxiv.org/pdf/1510.07633v2"
      locator: "§§2.4 and 3.3.4, PDF pp. 16–18 and 24–25, for string axions, vacuum realignment and distinct production populations; §4.3, PDF pp. 27–29, for model-dependent misalignment histories."
    - title: "M. Cicoli et al., String Cosmology: from the Early Universe to Today, arXiv:2303.04819v2"
      url: "https://arxiv.org/pdf/2303.04819v2"
      locator: "§§5.5 and 5.7.2–5.7.4, PDF pp. 92–103 and 114–118, for moduli reheating, QCD axions, fuzzy axions and model-dependent post-inflationary histories."
    - title: "J. M. Cline, TASI Lectures on Early Universe Cosmology: Inflation, Baryogenesis and Dark Matter, arXiv:1807.08749v5"
      url: "https://arxiv.org/pdf/1807.08749v5"
      locator: "Complete 52-page lecture notes; §IV.6, Eqs. (206)–(209), for the conditional misalignment mechanism and its pre/post-inflationary caveat."
    - title: "M. Cicoli, D. L. Lorenzoni, E. McDonough and F. G. Pedro, Spectator Axions in String Inflation and Primordial Black Holes, arXiv:2607.27361v1"
      url: "https://arxiv.org/pdf/2607.27361v1"
      locator: "§2, PDF pp. 3–6, for Type IIB Kähler axions as normalized $C_4$ periods over internal four-cycles; §5.1, PDF pp. 15–16, for the Mukhanov–Sasaki and adiabatic/isocurvature conventions used in the two-field limit."
---

## Example

Consider a declared compactification EFT with at least two retained periodic axion coordinates. For the Type IIB realization described in the cited source, let $Y$ be a specified compact six-dimensional internal space, let $[\Sigma_A]\in H_4(Y;\mathbb Z)$ be chosen integral four-cycle classes, and let $C_4$ be the Ramond–Ramond four-form gauge potential. The angular coordinate $\theta_A=(q_A\int_{\Sigma_A}C_4)\bmod 2\pi$ is the normalized period on a chosen cycle representative, with the normalization $q_A$ and large-gauge identifications supplied as model data. Other compactifications must supply their own internal space, gauge-potential degree, cycle classes and period normalizations. In every case specify the joint positive-definite kinetic matrix, charge lattice and separate source-generated potential for each mode.

For the cold-matter branch, require a nonzero homogeneous mode that is a decoupled canonical eigen-coordinate with a positive time-independent mass for each member of a controlled family satisfying every hypothesis of [[pthm-r5-axion-misalignment-cold-matter-regime]], including its member-dependent-mass, small-$H_n/m_{a,n}$, total-variation, and admissible-window limits; after a specified reheating history, the mode then has the theorem's leading averaged cold-matter limit. For any other populated mode, use a specified spatially flat FLRW chart with metric $ds^2=-dt^2+a(t)^2\delta_{ij}dx^idx^j$, $a>0$, and unit comoving observer $n=\partial_t$. A spatial Fourier mode $e^{i\mathbf k\cdot\mathbf x}$ has constant comoving wave vector $\mathbf k$ and physical momentum magnitude $k/a(t)$ measured by $n$, where $k=|\mathbf k|$. A mode with physical momentum much greater than its mass is relativistic; a mode with momentum much less than its mass is nonrelativistic. For a homogeneous hidden perfect-fluid component with density $\rho_D$ measured by $n$, impose $p_D=\rho_D/3$ and separate conservation $\dot\rho_D+3H(\rho_D+p_D)=0$, $H=\dot a/a$. Then $d(a^4\rho_D)/dt=a^4(\dot\rho_D+4H\rho_D)=0$, so its energy density redshifts as $a^{-4}$; call such a component dark radiation. Here a modulus means a retained real scalar coordinate of the compactification, and modulus decay means decay of its excitation through separately specified couplings; this may instead produce a relativistic or nonrelativistic axion population, depending on the decay kinematics and history.

When inflationary perturbations are included, use a declared two-field trajectory $\phi^I(t)$ with positive field-space metric $G_{IJ}$ and Hubble rate $H_{\rm Hub}:=\dot a/a$. Put $\dot\sigma=(G_{IJ}\dot\phi^I\dot\phi^J)^{1/2}>0$, $\hat\sigma^I=\dot\phi^I/\dot\sigma$, choose a $G$-unit vector $\hat s^I$ orthogonal to $\hat\sigma^I$, and let $Q^I=\delta\phi^I+(\dot\phi^I/H_{\rm Hub})\psi$ be the source's gauge-invariant Mukhanov–Sasaki field perturbation, where $\psi$ is the scalar spatial-metric perturbation on equal-time slices. In the source convention define $\mathcal R=H_{\rm Hub}\hat\sigma_IQ^I/\dot\sigma$ and $S=H_{\rm Hub}\hat s_IQ^I/\dot\sigma$; $S$ is the single independent linear isocurvature mode in this two-field limit. Which branch occurs depends on cycle data, masses, initial angles and perturbations, decay channels and thermal history. Here an axiverse means a model with multiple axion-like modes and distinct field parameters. This is a source-backed family of possibilities, not a universal abundance or a claim that every compactification produces an observed axiverse.

## Example references

[[pthm-r5-axion-misalignment-cold-matter-regime]], [[pthm-r5-sudden-decay-reheating-temperature]]

## Facts & Assumptions

**Given:** A compactification-specific four-dimensional EFT datum, at least two axion modes, their periodicities, kinetic matrix, integer charges, instanton actions and phases, initial conditions, and a stated cosmological and reheating history. For the cold-matter branch, the selected single mode is a decoupled canonical eigen-coordinate with a positive time-independent mass for each family member, and its nonzero homogeneous solutions, harmonic range, negligible transfer/backreaction, background family and centered windows satisfy every joint limit in [F2].

[F1] [[def-r5-string-axion-data]]: each periodic coordinate, fixed-patch canonical normalization, source charge/action/phase and periodic potential are explicit; a harmonic approximation is a separate model input.

[F2] [[pthm-r5-axion-misalignment-cold-matter-regime]]: the actual item gives the leading cold-matter limit for one homogeneous canonical mode with a positive harmonic mass constant in time for each family member, the source-free oscillator equation, negligible transfer/backreaction, the stated joint adiabatic/total-variation limits, and centered windows. Its local proof now establishes positive instantaneous reference energy by ODE uniqueness; the theorem's current Step 1 decision remains escalated only for the averaged-dust supplier's separate transitive plan-interface issue.

[F3] [[pthm-r5-sudden-decay-reheating-temperature]] assumes a smooth spatially flat FLRW datum $M=J\times\Sigma$, $g=-dt^2+a(t)^2\gamma$, a homogeneous canonical quadratic scalar, and smooth homogeneous comoving radiation-fluid data $(\rho_r,p_r,n)$ with $\rho_r\ge0$, $p_r=\rho_r/3$ and $n=\partial_t$. Their additive stress is the only Einstein source, with zero cosmological term. With $H(t_d^-)=\Gamma$, complete instantaneous transfer and immediate thermalization, any positive $T_{\rm RH}$ matching $\pi^2g_*(T_{\rm RH})T_{\rm RH}^4/30$ to the pre-decay total density obeys the stated formula. No averaged-dust limit is required for this temperature algebra. Every use of the sudden-decay branch here assumes this additional smooth metric, scalar, comoving radiation datum, and energy-transfer prescription; it is not a consequence of specifying axion periods or masses.

[F4] The source-backed axion reviews distinguish production from an initial angular displacement from a potential minimum (misalignment), relativistic axions and defect/modulus production; they state that masses, isocurvature and abundances depend on the compactification and post-inflationary history (Marsh, arXiv:1510.07633v2, §§2.4, 3.3.4, 4.3; Cicoli et al., arXiv:2303.04819v2, §§5.5, 5.7.2–5.7.4). For a Type IIB example, Cicoli et al., arXiv:2607.27361v1, §2 gives the four-cycle $C_4$ periods; its §5.1 defines $Q^I$, the adiabatic/isocurvature projections, and the two-field $S$ convention stated above.

## Verification

1.1 Choosing two angular coordinates, their kinetic matrix and their source/charge data instantiates the data required by [F1]. This choice does not fix the compactification geometry or imply that either nonperturbative source is realized; those remain explicit inputs. [given, F1]

2.1 Under the full cold-matter-branch assumptions in **Given**, the selected mode matches the actual hypotheses of [F2], so its conditional conclusion is only the leading cold-matter limit. For a sudden-decay branch, [F3] additionally requires all its smooth FLRW metric, scalar and comoving radiation-fluid data with $p_r=\rho_r/3$, additive total stress, the adopted flat-FLRW Einstein law, $H(t_d^-)=\Gamma$, complete instantaneous energy transfer and immediate thermalization; the temperature formula does not calculate an axion abundance. The source-supported relativistic and defect-produced branches in [F4] likewise require their own initial conditions and decay history. [given, F2, F3, F4, step 1.1]

3.1 Since no cycle volumes, source amplitudes, portal rates, complete isocurvature likelihood, or entropy-injection history are fixed here, neither an abundance nor a universal observational conclusion follows. This verifies the example's stated model-family scope. [given, F1, F4, step 2.1] ∎
