# Step 3a reader report — batch 5

Run: physics-non-fluid-129-2026-10-21-r2  
Role: reader  
Scope: batch 5

## Opened inventory

Assigned pages:

- emx-passive-dispersive-materials (A page): post-emx-lorentz-medium, post-emx-drude-current-closure, pthm-emx-oscillator-energy, pthm-emx-lorentz-susceptibility, and pthm-emx-drude-plasma-response.
- emx-passive-dispersive-materials-examples (B page): ex-emx-anomalous-group-delay and ex-emx-lossless-dispersive-energy.

Assigned items were read in supplier order: the Lorentz and Drude postulates; the oscillator-energy theorem; the Lorentz susceptibility theorem; the Drude response theorem; and both examples. The task manifest, batch-5 proof contracts, cross-batch dependency rows, and both assigned page carriers were opened. The assigned TikZ diagram in pthm-emx-drude-plasma-response was checked against the stated right-handed axes and the cross-product signs.

Required page context opened:

- em-material-response
- em-primitives-and-postulates
- em-vacuum-waves-and-polarization
- emx-weak-boundary-energy
- cm-math-central

Relevant item suppliers opened for their exact uses included post-em-material-closure, pthm-em-macroscopic-maxwell, def-em-fields, def-em-polarization-magnetization, def-em-si-conventions, def-em-lab-geometry, def-inertial-frame-and-inertial-chart, def-em-sources, post-em-coarse-graining, def-countable-choice, def-dependent-choice, def-emx-finite-energy-boundary-model, pthm-emx-weak-poynting-uniqueness, lem-the-divergence-and-curl-of-a-cross-product, pthm-em-causal-dispersive-response, def-em-plane-wave-definition, and lem-cm-cross-product-triple-identity. The cited calculus suppliers used in the current proofs were opened for their relevant statements and arguments: def-complex-exponential, thm-derivative-of-exponential, thm-complex-exponential-is-entire-with-derivative-itself, thm-sine-and-cosine-derivatives, thm-of-square-roots, thm-algebra-of-derivatives, thm-chain-rule-for-total-derivatives, thm-integration-by-parts, thm-differentiation-under-the-integral-sign, and thm-exponential-beats-every-polynomial. The contracts reproduce the exact def-euclidean-inner-product facts used in the energy and vector calculations.

The mathematical and physics suppliers above were checked at the statements and proof steps needed by batch 5. This was not a new audit of every transitive proof in those suppliers' own dependency closures.

## Source review

The postulates are explicitly adopted model assumptions and make no empirical-validity claim. Their cited model context agrees with the formulations:

- David Tong, Electromagnetism, [§7.5.1](https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf), printed pp. 193–194, equations (7.29)–(7.30): a forced damped oscillator and its harmonic particular response; §7.6.1, printed pp. 205–206, equations (7.46)–(7.48): the Drude equation of motion and harmonic conductivity. The source's microscopic particle model is not imported as a derivation of the locally adopted continuum closures.
- MIT OpenCourseWare 6.007, [Lecture 22](https://ocw.mit.edu/courses/6-007-electromagnetic-energy-from-motors-to-lasers-spring-2011/6434fa7aae0266ed6d40109d70c724f9_MIT6_007S11_lec22.pdf), slides 8–15: the Lorentz oscillator, harmonic response, polarization, and dielectric response. It is cited as model context.
- Richard Fitzpatrick, Classical Electromagnetism, [node 103](https://farside.ph.utexas.edu/teaching/em/lectures/node103.html), equations (1201)–(1208), and [node 100](https://farside.ph.utexas.edu/teaching/em/lectures/node100.html), equations (1150)–(1155): the collisional current response and collisionless plasma dielectric/dispersion relations. The items limit these citations to context and derive their exact model claims locally.
- Tong, §§7.5.2–7.5.3, printed pp. 194–199, and Niklas Beisert, Elektrodynamik, [§12.1](https://people.phys.ethz.ch/~nbeisert/lectures/ED-24FS-Skript.pdf), printed p. 12.2 (PDF p. 143), equations (12.6)–(12.10), support the real-part plane-wave, complex-wavevector attenuation, and frequency/wavenumber conventions used in the group-delay example. Beisert §10.10, printed pp. 10.10–10.11 (PDF pp. 117–118), gives the general phase/group velocity discussion; the local example does not import its universal bound.
- BIPM, [The International System of Units, 9th edition, version 4.01](https://www.bipm.org/documents/20126/41483022/SI-Brochure-9.pdf), §2.3.1, English printed pp. 128–130 (PDF pp. 129–130): the exact SI value of c, the current experimental status of μ₀, and its historical 2019 adoption estimate and relative standard uncertainty. The local SI definition asserts no current numerical estimate of μ₀.

Relevant source passages were opened at the URLs recorded in the item references. Only those passages were consulted; the complete source books were not reread.

## Repairs

1. pthm-emx-drude-plasma-response: the original frequency-response wording did not distinguish a harmonic particular solution from solutions selected by arbitrary initial data. The Drude postulate permits an initial state, and the homogeneous equations allow additional homogeneous terms. The statement, Given clause, Fact [A1], and proof step 1.1 now specify that the frequency-domain conductivity and permittivity refer to the harmonic particular solution. The proof contract's step 1.1 and risk note were updated. The prior Step-2 worksheet and its pre-repair source binding remain historical evidence; no earlier review record was rewritten. This item had no verification.judge record.

2. ex-emx-anomalous-group-delay: the verification used a complex-wavevector mode without the item defining its real field maps. The statement now gives Ω=R³, I=R, the real C∞ fields Eω, Bω, Hω, Dω, their amplitudes, and the explicit extension of the real-part plane-wave convention to complex k. It also states that the mode is formal bulk data without boundary or finite-energy conditions. Fact [A2] now includes the divergence equations needed for the source-free claim, and [F4] records why the vector triple identity extends to the complex wavevector. The exact plane-wave convention is now a declared formulation prerequisite. The proof contract's step 1.1, supplier citation, risk note, and worksheet qualification were updated; the old worksheet remains historical evidence. This item had no verification.judge record.

No other assigned-item or page repair was needed. The lossless-energy example compares the local oscillator state data using the postulate's pointwise state convention and the energy density established by its theorem. The Drude diagram correctly depicts k parallel to +z, e parallel to +x, and b parallel to +y; no diagram addition was required.

## Validation

- node tools/physics-support/tsx-run.mjs tools/physics-support/reflow.mts items/pthm-emx-drude-plasma-response.md — unchanged.
- node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts items/pthm-emx-drude-plasma-response.md — PASS.
- node tools/physics-support/tsx-run.mjs tools/physics-support/reflow.mts items/ex-emx-anomalous-group-delay.md — unchanged.
- node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts items/ex-emx-anomalous-group-delay.md — PASS.
- node tools/physics-support/proof-layout.mjs items/pthm-emx-drude-plasma-response.md items/ex-emx-anomalous-group-delay.md — 2 items, 8 proof steps, 0 defects.

## Page verdicts

- emx-passive-dispersive-materials: pass after the Drude response scope clarification. The constitutive postulates are explicitly phenomenological; the energy and susceptibility conclusions retain their stated model and regularity hypotheses.
- emx-passive-dispersive-materials-examples: pass after the anomalous-wave example defines the complex-k field maps and their scope. The second example's state comparison is a local model-density calculation, not an experimental claim.

## Uneditable findings and blocker

No uneditable defects were identified. No blocker remains.

## Coverage note

Both assigned pages and all seven assigned items were opened. Relevant dependency statements and proof uses were checked, and the cited source passages listed above were read. The report does not claim a fresh audit of every transitive supplier proof or a complete rereading of the cited textbooks and lecture notes.
