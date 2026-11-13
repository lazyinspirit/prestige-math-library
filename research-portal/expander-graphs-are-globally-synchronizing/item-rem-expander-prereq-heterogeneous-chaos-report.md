---
title: An independently attributed heterogeneous-model chaos report
status: published
research_item: rem-expander-prereq-heterogeneous-chaos-report
dependency_level: 1
sources:
  references:
    - title: Phase chaos in coupled oscillators
      url: https://doi.org/10.1103/PhysRevE.71.065201
      locator: Equation (1), pp. 065201-1–065201-2 and Figure 1
      statement: For four globally coupled Kuramoto phase oscillators with natural
        frequencies $\omega_i=-1+2(i-1)/3$, Popovych, Maistrenko and Tass report
        a chaotic attractor in the reduced phase-difference dynamics, supported
        by a plotted positive maximal Lyapunov exponent and a Poincaré-section
        picture; they report its emergence through a torus-destruction scenario.
      hypotheses: The finite-dimensional globally and equally coupled Kuramoto
        differential equations in equation (1), $N=4$, the stated frequency
        vector and the coupling values and numerical diagnostics described in
        the cited pages and figure.
      reading_limits: The equation, four-oscillator discussion and Figure 1 caption
        were read in the available PDF text. The numerical computation was not
        reproduced, and no rigorous existence certificate for a chaotic
        attractor was verified. The reported transition values are numerical
        approximations.
    - title: Chaotic Attractor in the Kuramoto Model
      url: https://doi.org/10.1142/S0218127405014155
      locator: Publisher abstract
      statement: Maistrenko, Popovych and Tass report a chaotic attractor in a
        four-dimensional Kuramoto model and study its origin, describing a
        torus-destruction transition.
      hypotheses: The four-dimensional Kuramoto model studied in the cited paper; its
        exact parameters are not specified in the abstract.
      reading_limits: The publisher-indexed abstract was read. The full paper and its
        exact parameter choices and diagnostics were not inspected, and no proof
        was reconstructed.
external_input: true
---

## Prerequisites

- [def-expander-prereq-phase-torus](item-def-expander-prereq-phase-torus)
- [def-expander-prereq-phasor-calculus](item-def-expander-prereq-phasor-calculus)
- [` Phase chaos in coupled oscillators · Equation (1), pp. 065201-1–065201-2 and Figure 1 `](https://doi.org/10.1103/PhysRevE.71.065201)
- [` Chaotic Attractor in the Kuramoto Model · Publisher abstract `](https://doi.org/10.1142/S0218127405014155)


## Statement

Popovych, Maistrenko and Tass report chaotic behavior in a mathematical model of four globally coupled phase oscillators with nonidentical natural frequencies. Their equations are $\dot\theta_i=\omega_i+\frac K4\sum_{j=1}^{4}\sin(\theta_j-\theta_i)$, where $\omega_i=-1+2(i-1)/3$ for $i=1,2,3,4$. A phase is an angle modulo $2\pi$; $\omega_i$ is the constant rate of the $i$th phase when $K=0$, and $K$ is the common coupling parameter. Thus the natural frequencies are $-1,-1/3,1/3,1$.

The authors reduce the dynamics to the three phase differences $\phi_i=\theta_{i+1}-\theta_i$ and report a chaotic attractor: an attracting long-term behavior exhibiting chaos in their numerical study. They report a positive maximal Lyapunov exponent, a diagnostic of exponential separation of nearby trajectories, and display a section of the attractor. They associate the transition with torus destruction. This is a report about a mathematical model, not a measurement of physical oscillators or a locally verified rigorous existence theorem. Separately, the abstract of Maistrenko, Popovych and Tass's paper *Chaotic Attractor in the Kuramoto Model* reports a chaotic attractor in a four-dimensional Kuramoto model and studies its origin.

## Statement references

[Finite phase tori, local lifts and the flat metric](item-def-expander-prereq-phase-torus)

[Phasors, trigonometric identities and periodic derivatives](item-def-expander-prereq-phasor-calculus)

## External input

The reported model, frequency vector, reduction and diagnostics are imported from Popovych, Maistrenko and Tass, *Phase chaos in coupled oscillators*, equation (1), the four-oscillator discussion and Figure 1. The authors report the maximal exponent as positive approximately for $0.94<K<1.22$; these endpoints and the chaos identification are their numerical findings, not a locally reproduced computation. The Poincaré section shown is the set $\phi_1=0$ in the reduced phase space, used to display successive intersections of trajectories with that set. A Lyapunov exponent describes the long-time exponential growth rate of an infinitesimal perturbation along a trajectory; the maximal exponent is the largest such rate. A torus-destruction scenario refers here to the authors' reported transition from motion associated with a torus to the chaotic behavior they display. The separate report attributed to *Chaotic Attractor in the Kuramoto Model* is limited to its abstract.

## Source notes

The numerical observations and their interpretation are attributed to the cited authors. This item does not import a proof that a positive numerical exponent alone establishes a mathematically defined chaotic attractor, nor does it assert that the two cited papers use the same parameter vector.
