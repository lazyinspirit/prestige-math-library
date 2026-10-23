---
id: rem-fd-kinetic-limit-status
kind: remark
title: Scope of the kinetic-to-fluid limit results
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 4
deps:
  - thm-fd-controlled-euler-passage
  - thm-fd-homogeneous-bgk-limit
dependency_roles:
  thm-fd-controlled-euler-passage: mathematical-premise
  thm-fd-homogeneous-bgk-limit: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "François Golse, The Boltzmann Equation and Its Hydrodynamic Limits, full
        chapter"
      url: "https://www.cmls.polytechnique.fr/perso/golse/Surveys/FGHdBookEvEq.pdf"
    - title: "Nicola Zamponi, From the Boltzmann Equation to Hydrodynamic Models,
        §3.2, pp. 11–12"
      url: "https://www.uni-ulm.de/fileadmin/website_uni_ulm/mawi.inst.020/lecture_no\
        tes/LectureNotes-Prague-2017.pdf"
verification:
  precheck: pending
---

## Remark

The Euler-passage theorem in this collection assumes weighted strong convergence to local Maxwellians and proves only the resulting conservation-law passage. The separate homogeneous BGK theorem gives an explicit relaxation solution and its limit. Neither result proves convergence for general inhomogeneous Boltzmann solutions, a Boltzmann–Grad limit from deterministic many-particle dynamics, or a Navier–Stokes–Fourier limit. Those questions require additional hypotheses and separate theorem chains.

## Remark references

[Golse, full chapter on Boltzmann and hydrodynamic limits](https://www.cmls.polytechnique.fr/perso/golse/Surveys/FGHdBookEvEq.pdf)

[Zamponi, §3.2, full lecture notes](https://www.uni-ulm.de/fileadmin/website_uni_ulm/mawi.inst.020/lecture_notes/LectureNotes-Prague-2017.pdf)

## Facts & Assumptions

**Given:** The statements and hypotheses of the conditional Euler-passage theorem and homogeneous BGK relaxation theorem.

[F1] [[thm-fd-controlled-euler-passage]]: The Euler conclusion assumes weighted strong convergence and does not assert that such convergence occurs.

[F2] [[thm-fd-homogeneous-bgk-limit]]: The explicit convergence result concerns the spatially homogeneous BGK relaxation model.

## Verification

1.1 The first scope statement follows directly from the convergence hypotheses and conclusion of [F1]; its proof is a conditional passage of already assumed moments and fluxes. [F1]

2.1 The second theorem [F2] has no spatial dependence and uses the BGK operator, so its exact solution does not supply an existence or convergence argument for inhomogeneous Boltzmann dynamics. Neither supplier states a many-particle Boltzmann–Grad or Navier–Stokes–Fourier result; this remark records only the limits of these two carriers. [F1, F2] ∎

