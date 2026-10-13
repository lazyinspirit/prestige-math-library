---
id: rem-nrqm-interference-examples-scope-limits
aliases: [nrqm-interference-examples-scope-limits]
kind: remark
domain: physics
title: "What the worked items and the reported experiment of the examples page establish"
status: draft
origin: session
dependency_level: 13
deps: [ex-nrqm-interference-ideal-flat-two-path-screen-distribution, ex-nrqm-interference-uniform-phase-averaging, exp-nrqm-interference-bach-electron-double-slit, pthm-nrqm-interference-coherent-and-mixture-detection-laws, texp-nrqm-interference-finite-sample-fringe-failure]
dependency_roles:
  ex-nrqm-interference-ideal-flat-two-path-screen-distribution: formulation-prerequisite
  ex-nrqm-interference-uniform-phase-averaging: formulation-prerequisite
  exp-nrqm-interference-bach-electron-double-slit: operational-prerequisite
  pthm-nrqm-interference-coherent-and-mixture-detection-laws: physical-result
  texp-nrqm-interference-finite-sample-fringe-failure: physical-result
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "Scope of the companion examples page of the two-path interference pair: an exact flat two-amplitude distribution computation, a declared finite phase-averaging model, one source-backed reported electron double-slit experiment with its disclosed limitations, and the questions the page does not address. The remark asserts no new physical result, records no count beyond those reported by the cited source, and makes no claim about nature."
sources:
  references:
    - title: "R. Bach, D. Pope, S.-H. Liou and H. Batelaan, Controlled double-slit electron diffraction, arXiv:1210.6243v1, 22 October 2012, Sections 1-4 and figures 1-3"
      url: "https://arxiv.org/pdf/1210.6243v1"
    - title: "D. Tong, Quantum Mechanics (author-hosted lecture set), Section 1.3, printed pages 14-18 (PDF pages 17-21): two-slit interference and the accumulation of detections"
      url: "https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf"
verification:
  precheck: n/a
---

## Scope of the examples page

**The two computations.** [[ex-nrqm-interference-ideal-flat-two-path-screen-distribution]]
computes, in the declared two-path model with flat product-form amplitudes, the
exact coherent and which-path probabilities of the overlap and outer regions of
the declared detection coordinate: at relative phase $\pi$ the coherent law
assigns probability zero to the whole overlap region while the balanced
which-path law assigns it positive probability, and a slab bin
$B_1\times\mathbb R^2$ has positive coherent probability at that phase
exactly when $|B_1\cap(I_1\triangle I_2)|>0$, where $I_1,I_2$ are the
declared intervals and $I_1\triangle I_2$ is their symmetric difference
(the two outer regions). Mere nonempty intersection does not suffice.
[[ex-nrqm-interference-uniform-phase-averaging]]
shows that for orthogonal path components a declared ensemble whose relative
phase is uniformly distributed over the finitely many $n$-th roots of unity has
the which-path law with the norm weights as its averaged law. Both are
conditional computations in the declared model under all the stated supplier
hypotheses, including Countable Choice and Choice, and the pair's detection laws
([[pthm-nrqm-interference-coherent-and-mixture-detection-laws]]); neither is a
dynamics, an environmental decoherence model, a detector response or a
statement about an apparatus.

**The reported experiment.** [[exp-nrqm-interference-bach-electron-double-slit]]
reports the primary preprint of Bach, Pope, Liou and Batelaan: a 600 eV
electron beam through a nanofabricated double-slit with slit-selective
distributions and a single-electron event build-up over 2, 7, 209, 1004 and
6235 accumulated localized events. The report supplies no calibrated
efficiency or background, no numerical localization error, no uncertainty for
its apparatus parameters, no occupancy bound and no statistical comparison
with a specified competing model; the mask-height inconsistency between its
body and its figure caption is recorded as unresolved. The item therefore
supports a qualitative operational account only, and its agreement with any
model is evidence about the combined model and apparatus assumptions, not a
proof of the framework, not a demonstration that every event is independent,
and not a demonstration that only one electron is in the apparatus at a time.

**What the page does not address.** No photon experiment is reported here; a
single-photon polarization or counting experiment belongs to the photon and
radiation page, and the classical wave comparison for light is a separate
declared model. No experiment testing the which-path or marker variants of the
arrangement is reported. No claim is made that the finite sample of the
reported experiment would distinguish the coherent from the which-path
recorded law; [[texp-nrqm-interference-finite-sample-fringe-failure]] shows
that both can fail or pass a finite-sample criterion and that coincident
recorded laws are indistinguishable by any criterion.

**Evidence status.** The page combines exact conditional computations with one
faithfully reported experiment. It contains no simulation presented as data,
no invented count, precision or significance, and no conclusion about nature;
the empirical qualifications of the report are carried in its Observations and
Uncertainty sections and are not strengthened here.
