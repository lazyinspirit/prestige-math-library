---
id: rem-nrqm-potentials-examples-scope-limits
aliases: [ nrqm-potentials-examples-scope-limits ]
kind: remark
domain: physics
title: "What the one-dimensional potentials examples establish"
status: draft
origin: session
dependency_level: 14
deps:
  [
    ex-nrqm-potentials-rectangular-barrier-tunnelling-and-thick-limit,
    ex-nrqm-potentials-finite-well-exact-root-and-count,
    ex-nrqm-potentials-box-spectrum-and-nodes,
    pthm-nrqm-potentials-barrier-flux-and-transmission,
    pthm-nrqm-potentials-finite-well-bound-states,
    pthm-nrqm-potentials-interval-spectra-completeness-and-nodes
  ]
dependency_roles:
  ex-nrqm-potentials-rectangular-barrier-tunnelling-and-thick-limit: formulation-prerequisite
  ex-nrqm-potentials-finite-well-exact-root-and-count: formulation-prerequisite
  ex-nrqm-potentials-box-spectrum-and-nodes: formulation-prerequisite
  pthm-nrqm-potentials-barrier-flux-and-transmission: physical-result
  pthm-nrqm-potentials-finite-well-bound-states: physical-result
  pthm-nrqm-potentials-interval-spectra-completeness-and-nodes: physical-result
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "Scope of the examples page of the one-dimensional potentials
  pair: exact finite checks of the barrier transmission, the finite-well root
  conditions and counts, and the Dirichlet box spectrum and nodes. The remark
  asserts no new physical result, records no measurement and makes no claim
  about nature."
sources:
  references:
    - title: "D. Tong, Quantum Mechanics (author-hosted lecture set), Chapter 2,
        printed pages 19-63 (PDF pages 22-66): one-dimensional potentials,
        wells, barriers and tunnelling"
      url: "https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Chapter 5,
        printed pages 75-103 (PDF pages 83-111): square wells, scattering and
        tunnelling"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
verification:
  precheck: n/a
---

## Scope of the examples page

**The three computations.**
[[ex-nrqm-potentials-rectangular-barrier-tunnelling-and-thick-limit]] treats
the rectangular barrier of [[pthm-nrqm-potentials-barrier-flux-and-transmission]]
at the exactly solvable scaling $U=2E$ with $\kappa a=\ln 10$: it obtains
$T=400/10201$ and $R=9801/10201$ as exact rationals, brackets them by
$3921/100000<T<3922/100000$, compares the exact value with the thick-barrier
value $1/25$ (the difference is exactly $-201/255025$) and verifies the
theorem's error bound $201/125000=0.001608$; the computation is a finite check
of the model formulas, including the positivity of transmission through a
classically forbidden barrier.
[[ex-nrqm-potentials-finite-well-exact-root-and-count]] exhibits a declared
well depth at which the unique bound state is exactly solvable (even state,
$k=\kappa=\pi/(4a)$, binding energy $E=-U/2=-\hbar^{2}\pi^{2}/(32ma^{2})$),
verifies the even root condition with the special value $\tan(\pi/4)=1$, and
verifies the count and branch criterion at declared depths: exactly three
bound states with types even, odd, even when $2aK/\pi=5/2$, exactly one when
$2aK/\pi=1$, exactly two when $2aK/\pi=2$, and at least one for every
$a,U>0$.
[[ex-nrqm-potentials-box-spectrum-and-nodes]] records the exact free Dirichlet
box eigenpairs $\mathcal E_{n}=\hbar^{2}\pi^{2}n^{2}/(2mL^{2})$ with sine
eigenfunctions, their explicit $n-1$ nodal points $kL/n$, the exact spectrum
$\mathcal E_{n}+c$ of a constant potential with the min-max bound attained,
and the positive gaps $\hbar^{2}\pi^{2}(2n+1)/(2mL^{2})$.

**What is and is not compared.** The comparisons are internal: the exact
barrier formula and its thick-barrier approximation, the exact well root
condition and the exact branch count, and the exact box spectrum with the
min-max bound. They verify the cited theorems at declared parameter points by
exact rational and algebraic checks; they are not numerical approximations of
generic transcendental roots, they contain no simulation presented as data,
and they report no measured value, no uncertainty and no significance
statement. The only numerical decimals displayed are brackets of exact
rationals proven in the verifications.

**Evidence status.** All three items are conditional computations in the
declared line, well and box models of the pair's A page, under the same P1,
P2, P4, P5 assumptions and the same cited mathematics; the empirical
qualifications of the A page carry over unchanged. Nothing on this page is an
observation, an apparatus model or a statistical inference, and agreement of
the displayed identities with any measurement would be evidence about the
combined model and apparatus assumptions rather than a proof of the model.
