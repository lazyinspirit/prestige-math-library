---
id: exp-nrqm-interference-bach-electron-double-slit
aliases: [ nrqm-interference-bach-electron-double-slit ]
kind: experiment
domain: physics
title: "Reported controlled double-slit electron diffraction with
  single-electron detection (Bach, Pope, Liou and Batelaan)"
status: published
origin: session
dependency_level: 9
deps: [ post-nrqm-framework-preparation-and-apparatus ]
dependency_roles:
  post-nrqm-framework-preparation-and-apparatus: operational-prerequisite
provenance:
  statement: literature-derived
  proof: not-applicable
physical_scope: "A faithful report of the primary preprint R. Bach, D. Pope,
  S.-H. Liou and H. Batelaan, 'Controlled double-slit electron diffraction',
  arXiv:1210.6243v1 (22 October 2012): the reported apparatus, procedure,
  slit-selective distributions and single-electron event build-up, with the
  report's disclosed and undisclosed limitations. The item reports the source's
  observations and its qualified interpretation; it does not reanalyze the data,
  does not establish trial independence or single-electron occupancy, records no
  uncertainty budget beyond what the source supplies, and draws no conclusion
  about any physical theory."
empirical_result:
  observation: "The report describes a 600 eV electron beam transmitted through a
    nanofabricated double-slit (two 50 nm slits, 280 nm center-to-center
    separation) and detected on a microchannel-plate/phosphor screen imaged by a
    CCD camera. Sweeping a movable mask downstream of the slit produces the
    slit-selective distributions the paper labels P1 (one slit), P12 (both
    slits) and P2 (the other slit); the paper reports weak double-slit
    contributions in the first diffraction order of the nominal single-slit
    configurations, attributed to the finite mask-to-slit separation. With the
    mask centred and the source intensity reduced to a detection rate of about 1
    Hz, localized events were accumulated for about 2 hours; the figure captions
    report 2, 7, 209, 1004 and 6235 accumulated localized events in five
    successive central-five-order images, in which a diffraction pattern becomes
    discernible at the largest counts."
  uncertainty: "The report supplies no numerical uncertainty budget: no calibrated
    detector efficiency or background map, no numerical localization standard
    deviation (the blob size is said to represent the localization error,
    without a value), no arrival-process law or test of mutual independence of
    detections, no event-selection error rate, no statistical significance,
    confidence interval or fitted competing-model comparison, and no uncertainty
    on beam energy, slit dimensions or mask position. A source inconsistency in
    the mask height (5 micrometre by 10 micrometre in the body versus 5
    micrometre by 20 micrometre in the figure 1 caption) is unresolved. The
    statements that at most one electron is present and that electron-electron
    interactions are eliminated rest on an average-separation estimate (2.3e6 m)
    rather than on a bound on two-electron occupancy. Approximate rate and
    duration values are not converted into an exact trial count, efficiency or
    calibrated rate."
  conditions: "Reported apparatus and settings: thermionic tungsten filament with
    electrostatic lenses producing a 600 eV beam; a 2 micrometre by 10
    micrometre collimation aperture 16.5 cm from the source; the double-slit
    30.5 cm beyond the collimation aperture, milled by a 30 keV Ga+
    focused-ion-beam system into a 100 nm silicon-nitride membrane coated with
    about 2 nm of gold, with slits 50 nm wide, 280 nm centre-to-centre, 4
    micrometre tall with a 150 nm support midway; a movable mask 5 micrometre
    wide (height given inconsistently as 10 or 20 micrometre) placed 230
    micrometre downstream and driven by a piezoelectric actuator; electrostatic
    quadrupole magnification; a two-dimensional microchannel plate and phosphor
    screen imaged by a CCD camera, with each localized event recorded by a
    blob-detection scheme; mask-centred event accumulation at about 1 Hz over
    about 2 hours. These are reported specifications and settings, not
    independently recalibrated measurements."
  source_url: "https://arxiv.org/pdf/1210.6243v1"
sources:
  references:
    - title: "R. Bach, D. Pope, S.-H. Liou and H. Batelaan, Controlled double-slit
        electron diffraction, arXiv:1210.6243v1, 22 October 2012 (8 pages); also
        published in New Journal of Physics 15 (2013) 033018. This item reports
        the exact preprint version retrieved and read: Sections 1-4 and figures
        1-3, printed pages 1-8"
      url: "https://arxiv.org/pdf/1210.6243v1"
verification:
  precheck: pass
---

## Setup

The source is the primary preprint of Bach, Pope, Liou and Batelaan
(arXiv:1210.6243v1, 22 October 2012), reporting a controlled double-slit
electron diffraction experiment. The reported apparatus consists of a
thermionic tungsten filament with electrostatic lenses producing an electron
beam of energy 600 eV; a collimation aperture of 2 micrometre width and
10 micrometre height placed 16.5 cm from the source; a double-slit 30.5 cm
beyond the collimation aperture, milled with a 30 keV Ga+ focused-ion-beam
system into a 100 nm silicon-nitride membrane coated with about 2 nm of gold,
with two slits of 50 nm width, 280 nm centre-to-centre separation and
4 micrometre height, each with a 150 nm support midway; a movable mask
5 micrometre wide, driven by a piezoelectric actuator and placed 230 micrometre
downstream of the double-slit; an electrostatic quadrupole lens magnifying the
pattern; and a two-dimensional microchannel plate and phosphor screen imaged by
a CCD camera. The body of the paper gives the mask height as 10 micrometre
while the caption of [figure 1](https://arxiv.org/pdf/1210.6243v1#page=6) gives 20 micrometre; the inconsistency is
recorded and not resolved here. The comparison is a reported experiment of the
framework in the sense of the preparation and apparatus postulate
[[post-nrqm-framework-preparation-and-apparatus]]; the identification of the
reported device with the quantities of any model's preparation or detection is
an apparatus identification carrying the source's limitations.

## Procedure

Two procedures are reported. First, for the slit-control measurements the mask
is moved across the double-slit so that predominantly one slit, then both
slits, then the other slit transmit; the recorded image frames for each mask
position are summed and the accumulated image normalized, producing the
distributions labelled P1 (slit 1), P12 (both slits) and P2 (slit 2). Second,
for the build-up measurement the mask is centred, the source intensity is
reduced until the detection rate in the pattern is about 1 Hz, the quadrupole
lens is set to magnify the central five diffraction orders, and localized
detections are recorded with a blob-localization scheme; the reported final
accumulation took about 2 hours. The paper reports an average distance between
consecutive electrons of 2.3e6 m at this rate and energy, and states that this
ensures at most one electron is present in the 1 m apparatus at any time. No
arrival-process law, occupancy bound, event-selection rule, dead-time model or
independence test is reported, so that statement remains a reported
apparatus-behaviour inference; no finite-sampling analysis under a declared
independent-trials model is performed here or in the source.

## Observations

The paper reports, and the retained figures show, slit-selective probability
distributions: a single-slit central diffraction order in the P1 and P2
configurations and a double-slit distribution in the P12 configuration, with
weak double-slit contributions visible in the first diffraction order of the
nominal single-slit configurations, which the paper attributes to the finite
separation between the mask and the double-slit. For the mask-centred build-up
the figure captions report accumulated localized-event counts of 2, 7, 209,
1004 and 6235 in five successive images of the central five orders, the paper
describing the earliest images as appearing random and a pattern becoming
discernible at the largest counts, with a clearly visible pattern in the final
image. Each reported detection is a localized blob whose size represents the
localization error of the detection scheme; the accumulated distribution, not
any single event, carries the reported pattern.

## Uncertainty

The report supplies no numerical uncertainty budget for its observations. In
detail: no calibrated detector efficiency or background map is given; no
numerical value of the localization error is given although the blob size is
said to represent it; no uncertainty is given for the beam energy, the slit
dimensions or the mask position; no statistical independence of the recorded
events is tested; no event-selection or image-processing error rate is
quantified; and no significance level, confidence interval or fitted
comparison with a competing distribution is reported. The mask-height
inconsistency between the body text and the figure caption is unresolved. The
reported claim that at most one electron is present at a time rests on the
average-separation estimate and not on a bound on the probability of two
electrons in the apparatus. The approximate rate of about 1 Hz and duration of
about 2 hours are not converted here into a trial count, efficiency or
calibrated rate, and no uncertainty is manufactured for them.

## Interpretation

The source interprets the slit-selective patterns and the build-up of a
diffraction pattern from localized detections as a realization of Feynman's
two-slit thought experiment, illustrating interference and wave-particle
duality for electrons. Read as a report, the accumulated distributions and
their dependence on which slits transmit are consistent with a coherent
electron-amplitude model under the reported preparation and apparatus
conditions; the report's own comparison is qualitative and no competing
incoherent or classical model is specified, fitted or tested, so the report
does not by itself discriminate between such models. Classical wave models
also exhibit interference, so a reported pattern does not establish the
quantum framework or exclude every alternative; conversely, nothing here
falsifies a model, and each recorded event remains a localized detection whose
relation to any theoretical amplitude is a model identification. A controlled
test of the declared two-path law
[[pthm-nrqm-interference-coherent-and-mixture-detection-laws]] would require a
declared preparation model, a declared detector response including efficiency,
resolution and background, a declared competing law, and a declared sampling
model with its statistical method; none of these is supplied by this report,
and no such analysis is performed here. Agreement of the reported
distributions with a model would be evidence about the combined model,
apparatus and analysis assumptions, not a proof of the model.
