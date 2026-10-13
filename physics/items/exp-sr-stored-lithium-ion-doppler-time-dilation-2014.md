---
id: exp-sr-stored-lithium-ion-doppler-time-dilation-2014
kind: experiment
domain: physics
title: "Reported stored-lithium-ion Ives-Stilwell Doppler experiment at 0.338c (2014)"
status: published
origin: pipeline
pipeline_run: physics-em-sr-40-2026-10-08
deps:
  - def-sr-experiment-interface-vocabulary
  - def-sr-null-wave-covector-and-observer-frequency
dependency_roles:
  def-sr-experiment-interface-vocabulary: formulation-prerequisite
  def-sr-null-wave-covector-and-observer-frequency: operational-prerequisite
physical_scope: "Primary report of optical-optical double resonance spectroscopy of stored metastable 7Li+ ions in the ESR interaction section, with nominal speed beta = 0.338, calibrated laser frequencies, active-transition invariance and resonance-model auxiliaries. Describes a measured estimate and source-labelled standard uncertainty, not exact frequencies, a hard true-value bound, guaranteed coverage, raw data, or validation of every SR postulate. Atomic spectroscopy, real line widths, beam dynamics and calibration are empirical apparatus auxiliaries, not deductions from the ideal-plane-wave postulate."
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "B. Botermann et al., Test of Time Dilation Using Stored Li+ Ions as Clocks at Relativistic Speed, arXiv:1409.7951v1 (2014), full five-page primary report; equations (1)-(4), Figures 1-2, Table I. Published Phys. Rev. Lett. 113, 120405 (2014)."
      url: "https://arxiv.org/pdf/1409.7951v1"
empirical_result:
  observation: "Reported epsilon = (1.5 +/- 2.3) x 10^-9, source equation (4), with 1-sigma budget in Table I."
  uncertainty: "Reported u_epsilon = 2.3 x 10^-9; includes fitting, calibration, background, Gouy-phase, alignment and divergence uncertainty scales; no probability or coverage guaranteed."
  conditions: "Stored 7Li+ ESR optical-optical double resonance experiment at nominal beta = 0.338; Table I laser and rest-frequency inputs, same-velocity Lambda resonance, source correction and calibration models and active-invariance auxiliary assumptions."
  source_url: "https://arxiv.org/pdf/1409.7951v1"
dependency_level: 17
---

## Setup

**Quantities and apparatus notation.** The laboratory speed parameter is $\beta=v/c$, with $v$ the selected ion-class speed in an approximately inertial laboratory description; its quoted value is nominal. Frequencies $\nu_1,\nu_2,\nu_p,\nu_a>0$ are scalar estimates in hertz of the two rest transitions and the parallel/antiparallel laser readings, respectively; the ideal-model convention is $\nu=\omega/(2\pi)$ and $\lambda=c/\nu$ from [[def-sr-null-wave-covector-and-observer-frequency]], while the real apparatus has finite-width spectra. Here $\mathrm{MHz}=10^6\,\mathrm{s}^{-1}$, $\mathrm{nm}=10^{-9}\,\mathrm m$, and $\mu\mathrm{rad}=10^{-6}$ radians. For a single-peaked nonnegative profile, its full width at half maximum (FWHM) is the separation of the two frequencies (or speeds) at half its peak height, when those crossings exist; the reported $\delta v/v$ uses the speed width divided by the selected speed. Beam divergence and alignment are angles between ion trajectories and the specified beam axis. A Lambda system here means three source-labelled atomic levels, two lower and one common upper, with the two listed driven transitions; the symbols $3S_1$, $3P_2$ and $F$ distinguish the report's atomic levels, rather than supplying a quantum-state model. Metastable lifetime means the reported characteristic persistence time of the prepared level; no survival distribution is inferred. The Penning source, ESR (Experimental Storage Ring), electron cooling, lasers and optics below are the report's named preparation and control apparatus; their performance is reported empirically, not derived from SR. The energy label $\mathrm{MeV/u}$ is energy per atomic-mass unit: $1\,\mathrm{MeV}=10^6$ electronvolts, with one electronvolt the energy acquired by elementary charge across one volt; it is not used here to deduce the nominal speed.

The experiment used $^7\mathrm{Li}^+$ ions from a Penning ion gauge source, accelerated to $58.6\,\mathrm{MeV/u}$ and stored in the ESR at nominal $\beta=0.338$. Electron cooling reduced the reported longitudinal velocity spread to $\delta v/v\approx9\times10^{-6}$ (FWHM) and transverse divergence to less than $100\,\mu\mathrm{rad}$. About $10^7$ to $10^8$ ions were stored, with an estimated metastable fraction below $1\%$. The metastable $3S_1$ lifetime was $15$–$30\,\mathrm{s}$ in the ring, compared with $50\,\mathrm{s}$ in vacuum. The Lambda system used the transitions $3S_1(F=3/2)\to3P_2(F=5/2)$ and $3S_1(F=5/2)\to3P_2(F=5/2)$. Parallel and antiparallel beams near $386\,\mathrm{nm}$ and $780\,\mathrm{nm}$ addressed its two legs; an additional $780\,\mathrm{nm}$ beam repumped ions into the system.

## Procedure

**Count and fit objects.** A spectrum in this account is a finite list of frequency settings $f_i\in\mathbb R$ with detected pulse counts $n_{i,h}\in\mathbb N_0$ in each switching configuration $h\in\{1,2,3,4\}$ and window. Fluorescence denotes the emitted light counted by the photomultipliers; a dark count is a registered pulse without applied excitation. Subtracted or averaged spectra are real-valued lists, not nonnegative integer counts or independent trials. A Lorentzian peak plus linear background means a fitted function $L:\mathbb R\to\mathbb R$ of the form $L(f)=A/[1+4(f-f_0)^2/w^2]+b_0+b_1(f-f_0)$ with $A>0$, $w>0$; $f_0,w$ have frequency units, and the peak term has half height at $f_0\pm w/2$. Residuals are the differences of processed values and the fitted values at the recorded settings. A weighted average of fitted centers has form $\sum_i w_i f_{0,i}/\sum_i w_i$ for nonnegative weights with positive sum; the report does not give the weights or their construction. Frequency locking means controlling a laser reading relative to a specified reference or offset; second-harmonic generation denotes conversion to twice the optical frequency. Optical-optical double resonance is the selected condition that both listed transitions are resonant for the same ion velocity class; it is an apparatus selection model, not a measured probability law.

The parallel beam was generated by doubling a $772\,\mathrm{nm}$ Ti:Sa laser locked to an iodine marker previously calibrated with a frequency comb against a rubidium clock. The antiparallel diode laser was offset-locked to a rubidium reference, with a $600\,\mathrm{MHz}$ tuning range. Polarization-maintaining fibers transported the beams. Motorized stages controlled angles and positions to $20\,\mu\mathrm{rad}$ and $50\,\mu\mathrm{m}$; scrapers established laser/ion overlap within $80\,\mu\mathrm{rad}$. Photomultipliers counted fluorescence in four successive $100\,\mu\mathrm{s}$ configurations: both excitation beams, antiparallel only, parallel only, and neither. Dark counts were subtracted, then the separate-beam background was subtracted from the both-beam spectrum. Optical-optical double resonance selected ions for which both Lambda legs were resonant at the same velocity. To compensate metastable depletion, an $81$-point scan was paused after $69$ points for injection and cooling. Figure 2 shows an example averaged over $44$ scans, with $49\,\mathrm{MHz}$ laboratory linewidth and $35\,\mathrm{MHz}$ rest-frame linewidth. The authors fitted $40$ spectra with Lorentzians on linear backgrounds and formed a weighted average. Raw count tables, fit weights, a covariance matrix and a complete likelihood are not published in this report.

## Observations

Table I gives the frequency estimates, in MHz, $\nu_1=546455143.0$, $\nu_2=546474960.7$, $\nu_a=384225534.98$ and $\nu_p=777210326.98$. The rest-frame inputs $\nu_1,\nu_2$ come from earlier measurements cited as references 21–22; those papers were not retrieved or read here. Equation (4) reports $\epsilon=\sqrt{\nu_a\nu_p/(\nu_1\nu_2)}-1=(1.5\pm2.3)\times10^{-9}$ at nominal $\beta=0.338$. These are estimates with the source-labelled $1\sigma$ uncertainty budget, not exact values or guaranteed bounds. The rounded Table I centers yield approximately $1.4744849565\times10^{-9}$, consistent with the reported rounded estimate, without reconstructing unrounded data.

## Uncertainty

The Gouy phase is the additional spatial phase of a focused beam relative to a plane-wave phase; for a $C^1$ phase correction $\psi:J\to\mathbb R$ on a proper-time interval $J\subseteq\mathbb R$, the phase-reading convention assigns a frequency correction $-(2\pi)^{-1}d\psi/d\tau$ under the stipulated phase-reading interpretation. No beam profile $\psi$ is reconstructed here. The $1\sigma$ notation below is the source\'s label for an uncertainty scale; without its full estimation model it specifies neither a guaranteed interval nor a sampling distribution.

Table I labels its uncertainties $1\sigma$. In MHz, the aggregate entries are $0.43$ for each rest frequency, $1.6$ for the antiparallel frequency and $1.25$ for the parallel frequency. Antiparallel contributions are: weighted-fit statistical uncertainty $0.6$, rubidium reference $0.05$, diode stabilization $0.64$, background linearization $0.5$, Gouy phase $1.0$, angular alignment $0.6$, and ion divergence $0.4$. Parallel contributions are: iodine reference $0.06$, Ti:Sa stabilization $0.12$, Gouy phase $1.0$, alignment $0.6$, and divergence $0.4$. The inferred Gouy correction for each laser was $0.44\pm1.0\,\mathrm{MHz}$, from experimentally validated numerical simulation using measured beam parameters. The authors reported no significant residual asymmetry; simulated background linearization was assigned $0.5\,\mathrm{MHz}$. The excess linewidth, about five times the expected width, was attributed mainly to drift-induced fluorescence. The $0.6\,\mathrm{MHz}$ statistical entry comes from the weighted analysis of forty fitted spectra, not forty independent raw clock readings. These reported statistical and systematic scales are preserved without inventing independence, a Gaussian total sampling law, fit weights, covariance or coverage.

## Interpretation

The measured observable tests the combined Doppler/time-dilation, active atomic-transition and vacuum-wave invariance assumptions together with resonance selection, calibration, beam alignment and correction models. The source reports no resolved deviation at its uncertainty level and quotes $|\alpha|\le2.0\times10^{-8}$ for $\alpha=\epsilon/\beta^2$. That quotation is recorded as the source's test-theory sensitivity statement, rather than a newly certified hard bound or confidence interval. RMS and SME parameter translations and future higher-boost prospects remain contextual research topics; they are not prerequisites or claims of the comparison theorem.
