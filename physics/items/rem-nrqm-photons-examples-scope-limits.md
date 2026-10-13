---
id: rem-nrqm-photons-examples-scope-limits
kind: remark
title: "Scope of the photons and radiation modes examples page"
status: draft
origin: pipeline
domain: physics
dependency_level: 15
deps:
  [
    def-nrqm-photons-framework-fixed-mode-polarization-model,
    def-nrqm-photons-framework-ideal-counting-and-detection-model,
    ex-nrqm-photons-malus-and-jones-analyzer-ratios,
    ex-nrqm-photons-single-mode-number-statistics-coherent-and-thermal,
    texp-nrqm-photons-classical-field-and-quantized-detection-comparison,
    pthm-nrqm-photons-fixed-mode-number-and-energy-statistics,
    post-nrqm-framework-preparation-and-apparatus,
    post-nrqm-framework-observable-and-probability,
    def-dependent-choice
]
dependency_roles:
  def-nrqm-photons-framework-fixed-mode-polarization-model: formulation-prerequisite
  def-nrqm-photons-framework-ideal-counting-and-detection-model: formulation-prerequisite
  ex-nrqm-photons-malus-and-jones-analyzer-ratios: formulation-prerequisite
  ex-nrqm-photons-single-mode-number-statistics-coherent-and-thermal: formulation-prerequisite
  texp-nrqm-photons-classical-field-and-quantized-detection-comparison: physical-result
  pthm-nrqm-photons-fixed-mode-number-and-energy-statistics: physical-result
  post-nrqm-framework-preparation-and-apparatus: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  def-dependent-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The scope of the photons and radiation modes examples page:
  what the three conditional model comparisons establish, the idealised model
  assignments and declared parameters they rest on, and the empirical, apparatus
  and statistical claims they do not make."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section
        1.3.6 printed pages 14-15 (PDF pages 22-23): quantum and classical
        polarisation ratios, individual photons passed or absorbed, and the
        explicit agreement with the classical description"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 6 'Quantum
        Dynamics', Section 5.3 printed pages 48-50: coherent states, mean photon
        number and the classical standing-wave expectation, with field
        quantisation as an added model postulate"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/79a8091ef4f\
        18d8e3ff76a097e8db33c_MIT8_05F13_Chap_06.pdf"
---

## Scope of the examples page

**What the three items establish.**
[[ex-nrqm-photons-malus-and-jones-analyzer-ratios]] shows that the Born
probability $\cos^{2}\theta$ of the declared ideal analyser on the preparation
along $e_{1}$ and the transmitted intensity fraction $\cos^{2}\theta$ of the
declared elementary classical transverse-amplitude model coincide for every
declared angle, so that this ratio alone does not establish field
quantisation. [[ex-nrqm-photons-single-mode-number-statistics-coherent-and-thermal]]
computes the count laws and their means and variances for three declared
preparations of one mode -- sharp $n$, Poisson for dimensionless coherent-state
label $z$ with mean and variance $|z|^{2}$, and the geometric law of a declared
effective-energy preparation
with $\varepsilon_{0}>0$ joules and $\beta>0$ in $\mathrm J^{-1}$, whose mean is
$1/(e^{\beta\varepsilon_{0}}-1)$ -- and shows different fluctuations for
the coherent and geometric preparations at equal positive mean. A number
state joins that equal-mean comparison when the common mean is a positive
integer and $n$ is chosen equal to it.
[[texp-nrqm-photons-classical-field-and-quantized-detection-comparison]]
proves that the declared classical and quantised models assign the same
normalised two-bin law, with the same interference cross-term, for every
declared amplitude datum, and concludes that a two-bin fringe law of that form
is not a discriminator between the two declared models.

**What they rest on.** All three items are conditional on the state and
composition postulate P1, the observable and probability postulate P2, the
adopted radiation extension and the declared fixed-mode or radiation-sector
vocabulary of the main page; the counting results use only the declared ideal
total-number detector of
[[def-nrqm-photons-framework-ideal-counting-and-detection-model]]. The
classical models appearing in the first and third items are explicit
elementary declared models -- dimensionless amplitude coordinates relative to
a fixed reference amplitude, with relative intensity equal to squared
amplitude norm -- and are not Maxwell's theory; the effective
mode energy $\varepsilon_{0}$ of the second item is a declared parameter, not a
sharp energy of a normalisable mode.

**Different objects.** A one-photon preparation is a unit ray of the
transverse one-particle space read in the one-photon sector; a mode-coherent
preparation is a unit ray of the radiation Fock space with no sharp number when $z\ne0$, while $z=0$ is the vacuum with sharp number zero;
and the declared classical intensity datum is a complex transverse amplitude
with its declared intensity. The three are distinct mathematical objects of
the declared models, and no identification of one with another is made.

**What is not claimed.** The page records no experiment, no apparatus, no
calibration, no measured count, no frequency, no efficiency and no uncertainty
budget, and none is invented. It does not claim that any laboratory polariser,
counter or interferometer realizes the declared ideal models; that claim is a
tested identification with uncertainty under P7
([[post-nrqm-framework-preparation-and-apparatus]]). It does not assert
thermal equilibrium or a temperature for the geometric preparation, and it
does not assert that the coincidence of the classical and quantum ratios is
evidence for field quantisation. Single-photon polarisation and counting
experiments remain research candidates for a separate reported-experiment
item; a finite sample of detections is a random object under any declared
sampling model, visible fringes can fail to appear with nonzero probability
under a correct coherent model, and a $p$-value or confidence level is not the
probability that a model is false. Comparing any of these conditional
predictions with data would test the combined model and apparatus assumptions,
not prove the model or the framework.

**Mathematical hypotheses.** The conditional deductions summarized here retain the choice hypotheses of their mathematical suppliers; in particular, the transverse free-field Fock supplier assumes Countable Choice, Dependent Choice and Choice. [[def-countable-choice]], [[def-dependent-choice]] and [[def-axiom-of-choice]] record these assumptions.
